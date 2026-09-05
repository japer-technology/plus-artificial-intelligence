/*
 * Minimal HTML token utilities shared by build.mjs and tools/extract-pack.mjs.
 *
 * A "static markup" stream is a list of tokens:
 *   { t: "open", tag, attrs, selfClose }   // attrs: { name: value|null }
 *   { t: "close", tag }
 *   { t: "text", raw }
 *   { t: "comment", raw }
 *
 * tokenize() splits markup without a DOM. applyDecorations() replays pack
 * decoration ops on the token stream, which is how build.mjs --verify-pack
 * proves a pack's decorations reproduce its original page exactly.
 */

export function tokenize(markup) {
  const tokens = [];
  const pattern = /<!--[\s\S]*?-->|<\/?[A-Za-z][^>]*>|[^<]+/g;
  let match;
  while ((match = pattern.exec(markup)) !== null) {
    const raw = match[0];
    if (raw.startsWith("<!--")) {
      tokens.push({ t: "comment", raw });
    } else if (raw.startsWith("</")) {
      tokens.push({ t: "close", tag: raw.slice(2, -1).trim().toLowerCase() });
    } else if (raw.startsWith("<")) {
      const inner = raw.slice(1, -1).trim();
      const selfClose = /\/\s*$/.test(inner) || ["meta", "link", "br", "hr", "img", "input"].includes(
        inner.split(/\s+/)[0].toLowerCase()
      );
      const parts = inner.replace(/\/\s*$/, "").trim().split(/\s+/);
      const tag = (parts.shift() || "").toLowerCase();
      const attrs = {};
      const attrPattern = /([A-Za-z_:][-A-Za-z0-9_:.]*)(?:\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
      let attrMatch;
      while ((attrMatch = attrPattern.exec(parts.join(" "))) !== null) {
        attrs[attrMatch[1].toLowerCase()] = attrMatch[3] ?? attrMatch[4] ?? attrMatch[5] ?? "";
      }
      tokens.push({ t: "open", tag, attrs, selfClose });
    } else {
      tokens.push({ t: "text", raw });
    }
  }
  return tokens;
}

export function tokensToMarkup(tokens) {
  return tokens.map((token) => {
    if (token.t === "text" || token.t === "comment") return token.raw;
    if (token.t === "close") return `</${token.tag}>`;
    // Attribute order is semantically irrelevant in HTML; serialise sorted
    // so parity comparisons are order-insensitive.
    const attrs = Object.entries(token.attrs || {})
      .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
      .map(([name, value]) => (value === "" ? ` ${name}` : ` ${name}="${value}"`))
      .join("");
    return `<${token.tag}${attrs}>`;
  }).join("");
}

// Normalise for parity comparison: drop comments, whitespace-only text,
// and collapse whitespace inside text tokens.
export function comparableTokens(tokens) {
  const out = [];
  for (const token of tokens) {
    if (token.t === "comment") continue;
    if (token.t === "text") {
      const collapsed = token.raw.replace(/\s+/g, " ").trim();
      if (!collapsed) continue;
      out.push({ t: "text", raw: collapsed });
    } else {
      out.push(token);
    }
  }
  return out;
}

export function comparableMarkup(markup) {
  return tokensToMarkup(comparableTokens(tokenize(markup)));
}

// Selector support for decoration anchors: tag, #id and .class, optionally
// combined (e.g. "h1#heroTitle", ".site-header", "#specContent").
export function parseSelector(selector) {
  const match = selector.trim().match(/^([A-Za-z][A-Za-z0-9-]*)?(?:#([A-Za-z][A-Za-z0-9:_-]*))?(?:\.([A-Za-z][A-Za-z0-9_-]*))?$/);
  if (!match) return null;
  return { tag: match[1] || null, id: match[2] || null, cls: match[3] || null };
}

function matchesSelector(token, selector) {
  if (!token || token.t !== "open") return false;
  if (selector.tag && token.tag !== selector.tag) return false;
  if (selector.id && token.attrs?.id !== selector.id) return false;
  if (selector.cls) {
    const classes = String(token.attrs?.class || "").split(/\s+/);
    if (!classes.includes(selector.cls)) return false;
  }
  return true;
}

function findAnchor(tokens, selectorText) {
  const selector = parseSelector(selectorText);
  if (!selector) return -1;
  return tokens.findIndex((token) => matchesSelector(token, selector));
}

function matchingClose(tokens, openIndex) {
  const tag = tokens[openIndex].tag;
  if (tokens[openIndex].selfClose) return openIndex;
  let depth = 0;
  for (let i = openIndex; i < tokens.length; i += 1) {
    if (tokens[i].t === "open" && tokens[i].tag === tag && !tokens[i].selfClose) depth += 1;
    else if (tokens[i].t === "close" && tokens[i].tag === tag) {
      depth -= 1;
      if (depth === 0) return i;
    }
  }
  return openIndex;
}

// Replays decorations on a token stream. Returns { tokens, problems }.
export function applyDecorations(tokens, decorations) {
  const problems = [];
  for (const decoration of decorations) {
    const anchorIndex = findAnchor(tokens, decoration.anchor);
    if (anchorIndex === -1) {
      problems.push(`anchor "${decoration.anchor}" not found`);
      continue;
    }
    const htmlTokens = tokenize(decoration.html || "");
    const op = decoration.op;
    if (op === "insertBefore") {
      tokens.splice(anchorIndex, 0, ...htmlTokens);
    } else if (op === "insertAfter") {
      const close = matchingClose(tokens, anchorIndex);
      tokens.splice(close + 1, 0, ...htmlTokens);
    } else if (op === "prependTo") {
      tokens.splice(anchorIndex + 1, 0, ...htmlTokens);
    } else if (op === "appendTo") {
      const close = matchingClose(tokens, anchorIndex);
      tokens.splice(close, 0, ...htmlTokens);
    } else if (op === "wrap") {
      tokens.splice(anchorIndex, 0, ...tokenize(decoration.before || ""));
      const close = matchingClose(tokens, anchorIndex + tokenize(decoration.before || "").length);
      tokens.splice(close + 1, 0, ...tokenize(decoration.after || ""));
    } else if (op === "wrapInner") {
      const beforeTokens = tokenize(decoration.before || "");
      const afterTokens = tokenize(decoration.after || "");
      tokens.splice(anchorIndex + 1, 0, ...beforeTokens);
      const close = matchingClose(tokens, anchorIndex);
      tokens.splice(close, 0, ...afterTokens);
    } else if (op === "replaceWith") {
      const close = matchingClose(tokens, anchorIndex);
      tokens.splice(anchorIndex, close - anchorIndex + 1, ...htmlTokens);
    } else if (op === "text") {
      const close = matchingClose(tokens, anchorIndex);
      tokens.splice(anchorIndex + 1, close - anchorIndex - 1, ...htmlTokens);
    } else if (op === "remove") {
      const close = matchingClose(tokens, anchorIndex);
      tokens.splice(anchorIndex, close - anchorIndex + 1);
    } else if (op === "setAttribute") {
      tokens[anchorIndex].attrs = tokens[anchorIndex].attrs || {};
      tokens[anchorIndex].attrs[decoration.name] = decoration.value ?? "";
    } else if (op === "addClass") {
      tokens[anchorIndex].attrs = tokens[anchorIndex].attrs || {};
      const classes = String(tokens[anchorIndex].attrs.class || "").split(/\s+/).filter(Boolean);
      for (const extra of String(decoration.className || "").split(/\s+/)) {
        if (extra && !classes.includes(extra)) classes.push(extra);
      }
      tokens[anchorIndex].attrs.class = classes.join(" ");
    } else if (op === "move" || op === "moveAfter") {
      const targetIndex = findAnchor(tokens, decoration.target);
      if (targetIndex === -1) {
        problems.push(`move target "${decoration.target}" not found`);
        continue;
      }
      const close = matchingClose(tokens, targetIndex);
      const moved = tokens.splice(targetIndex, close - targetIndex + 1);
      // Re-resolve the anchor AFTER the target removal: removing tokens
      // before the anchor shifts every index.
      const freshAnchorIndex = findAnchor(tokens, decoration.anchor);
      if (freshAnchorIndex === -1) {
        problems.push(`move anchor "${decoration.anchor}" not found`);
        continue;
      }
      const destClose = matchingClose(tokens, freshAnchorIndex);
      if (op === "moveAfter") {
        tokens.splice(destClose + 1, 0, ...moved);
      } else {
        tokens.splice(destClose, 0, ...moved);
      }
    } else {
      problems.push(`unknown op "${op}"`);
    }
  }
  return { tokens, problems };
}
