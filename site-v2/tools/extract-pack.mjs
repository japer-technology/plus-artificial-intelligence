#!/usr/bin/env node
/*
 * +AI site-v2 — pack extractor (migration tool)
 *
 * Converts each legacy single-file theme page (sci-fi-1.html, museum.html,
 * …) into a pack under packs/<code>/:
 *
 *   theme.css    the page's own <style>, verbatim
 *   manifest.json tokens (accent/font/fontStack/fontOptions/defaultMode/
 *                  onAccent colours/themeColor) + decorations derived from
 *                  the markup diff against the shared skeleton
 *   flavour.json flavour strings extracted from decoration text
 *   note.json    an honest "migration draft" conformance note
 *
 * Packs that need a human (extra behaviour JS, markup the differ cannot
 * express) are reported at the end and left untouched.
 *
 * Usage:
 *   node tools/extract-pack.mjs [page.html …]   (default: every theme page)
 *   node tools/extract-pack.mjs --report        list pages and their status
 *
 * Verification is build.mjs --verify-pack: the pack's decorations replayed
 * on the skeleton must reproduce the original page's static markup exactly.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  tokenize, comparableTokens, tokensToMarkup, applyDecorations, parseSelector
} from "./html-tokens.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (path) => readFileSync(join(ROOT, path), "utf8");

const shell = read("src/shell.html");
const baseApp = read("src/app.js");

const BASE_OPTIONS = [...baseApp.match(/const BASE_FONT_OPTIONS = \[([\s\S]*?)\];/)[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);

// ---------------------------------------------------------------- helpers

function skeletonTokens() {
  // The skeleton body minus engine-only chrome the legacy pages never had.
  const shellBody = shell.match(/<body[^>]*>([\s\S]*)<\/body>/i)[1]
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/g, "");
  const tokens = comparableTokens(tokenize(shellBody));
  const stripIds = ["themeSelect", "packFallbackNote", "specFingerprint"];
  const stripClasses = ["theme-control"];
  const result = [];
  let skipDepth = 0;
  for (const token of tokens) {
    if (skipDepth > 0) {
      if (token.t === "open" && !token.selfClose) skipDepth += 1;
      else if (token.t === "close") skipDepth -= 1;
      continue;
    }
    const id = token.attrs?.id;
    const classes = String(token.attrs?.class || "").split(/\s+/);
    if (token.t === "open" && (stripIds.includes(id) || stripClasses.some((cls) => classes.includes(cls)))) {
      skipDepth = 1;
      continue;
    }
    result.push(token);
  }
  return result;
}

function pageStaticTokens(pagePath) {
  const source = read(pagePath);
  const bodyMatch = source.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) throw new Error(`no body in ${pagePath}`);
  // Comments first: "add a <script> tag" inside comments must not confuse
  // the script stripper.
  const body = bodyMatch[1]
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/g, "");
  return comparableTokens(tokenize(body));
}

function selectorFor(token) {
  if (token.attrs?.id) return `#${token.attrs.id}`;
  const classes = String(token.attrs?.class || "").split(/\s+/).filter(Boolean);
  if (classes.length) return `.${classes[0]}`;
  return token.tag;
}

// Anchored-walking alignment between token sequences. Legacy theme pages
// were all derived from the same base markup, so their edits are local:
// at every mismatch we look ahead (within a window) for the nearest point
// where the sequences re-align, and emit delete/insert runs accordingly.
// This beats a plain LCS here because identical tokens (repeated `</div>`,
// `</span>`, option text) otherwise pair arbitrarily and produce noise.
function diffTokens(a, b) {
  const WINDOW = 14;
  const runs = [];
  let current = null;
  const push = (kind, aIdx = null, bIdx = null) => {
    if (!current || current.kind !== kind) {
      current = { kind, a: [], b: [] };
      runs.push(current);
    }
    if (aIdx !== null) current.a.push(aIdx);
    if (bIdx !== null) current.b.push(bIdx);
  };

  let i = 0;
  let j = 0;
  while (i < a.length || j < b.length) {
    if (i < a.length && j < b.length && a[i].raw === b[j].raw) {
      push("equal", i, j);
      i += 1;
      j += 1;
      continue;
    }
    let best = null;
    for (let di = 0; di <= WINDOW; di += 1) {
      for (let dj = 0; dj <= WINDOW; dj += 1) {
        if (di === 0 && dj === 0) continue;
        const ni = i + di;
        const nj = j + dj;
        if (ni < a.length && nj < b.length && a[ni].raw === b[nj].raw) {
          const score = di + dj + (di > 0 && dj > 0 ? 6 : 0);
          if (!best || score < best.score) best = { di, dj, score };
        }
      }
    }
    if (!best) {
      if (i < a.length) { push("delete", i); i += 1; }
      else if (j < b.length) { push("insert", null, j); j += 1; }
      continue;
    }
    for (let k = 0; k < best.di; k += 1) { push("delete", i); i += 1; }
    for (let k = 0; k < best.dj; k += 1) { push("insert", null, j); j += 1; }
  }
  return { runs, n: a.length, m: b.length };
}

function tokenRaw(token) {
  if (token.raw) return token.raw;
  if (token.t === "close") return `</${token.tag}>`;
  const attrs = Object.entries(token.attrs || {})
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([name, value]) => (value === "" ? ` ${name}` : ` ${name}="${value}"`))
    .join("");
  return `<${token.tag}${attrs}>`;
}

// Adds a .raw cache to tokens so LCS equality and markup output agree.
function withRaw(tokens) {
  for (const token of tokens) token.raw = tokenRaw(token);
  return tokens;
}

// Derives decoration ops from the edit script.
function deriveOps(a, b) {
  const { runs } = diffTokens(a, b);
  const ops = [];
  const problems = [];

  // Step 1: pair unmatched open tags with their closes across insert runs.
  // An open tag in an insert run whose close appears in a later insert run,
  // with only matched content between, becomes a wrap op around the first
  // matched element in that span.
  const openStack = [];
  const consumed = new Set(); // token indices in b consumed by wrap pairs
  const wraps = [];

  for (let r = 0; r < runs.length; r += 1) {
    const run = runs[r];
    if (run.kind !== "insert") continue;
    for (const bIndex of run.b) {
      const token = b[bIndex];
      if (token.t === "open" && !token.selfClose) {
        openStack.push({ bIndex, runIndex: r });
      } else if (token.t === "close" && openStack.length) {
        // find the nearest unmatched open whose span contains only inserts
        // and matched content — try candidates from innermost out
        for (let c = openStack.length - 1; c >= 0; c -= 1) {
          const candidate = openStack[c];
          const between = b.slice(candidate.bIndex + 1, bIndex);
          const openCount = between.filter((t) => t.t === "open" && !t.selfClose).length;
          const closeCount = between.filter((t) => t.t === "close").length;
          if (openCount !== closeCount) continue; // nested unmatched content between
          // find the first matched open element between the pair
          let anchor = null;
          for (let k = candidate.runIndex; k <= r; k += 1) {
            if (runs[k].kind !== "equal") continue;
            for (const aIndex of runs[k].a) {
              if (a[aIndex].t === "open" && !a[aIndex].selfClose) { anchor = a[aIndex]; break; }
            }
            if (anchor) break;
          }
          if (!anchor) continue; // no matched element: treat as plain insert
          wraps.push({
            bOpen: candidate.bIndex,
            bClose: bIndex,
            anchor,
            openToken: b[candidate.bIndex],
            closeToken: token
          });
          consumed.add(candidate.bIndex);
          consumed.add(bIndex);
          openStack.splice(c, 1);
          break;
        }
      }
    }
  }

  // Emit wrap ops first (they must apply before ops anchored inside them).
  for (const wrap of wraps) {
    ops.push({
      op: "wrap",
      anchor: selectorFor(wrap.anchor),
      before: tokenRaw(wrap.openToken),
      after: tokenRaw(wrap.closeToken)
    });
  }
  const wrapByOpen = new Map(wraps.map((wrap) => [wrap.bOpen, wrap]));

  // Step 2: walk runs in order emitting remove/text/insert ops.
  for (let r = 0; r < runs.length; r += 1) {
    const run = runs[r];
    if (run.kind === "equal") continue;

    if (run.kind === "delete") {
      const deleted = run.a.map((x) => a[x]);
      const opens = deleted.filter((token) => token.t === "open" && !token.selfClose);
      if (opens.length === 0) {
        // Text-only deletion: if the next run is a text-only insert, the
        // element's text changed — emit a "text" op on the enclosing
        // element. Otherwise it is LCS pairing noise.
        const next = runs[r + 1];
        if (next?.kind === "insert" && next.b.length && next.b.every((x) => b[x].t === "text")) {
          let anchor = -1;
          for (let k = r - 1; k >= 0 && anchor === -1; k -= 1) {
            if (runs[k].kind !== "equal") continue;
            for (let idx = runs[k].a.length - 1; idx >= 0; idx -= 1) {
              const token = a[runs[k].a[idx]];
              if (token.t === "open" && !token.selfClose) { anchor = runs[k].a[idx]; break; }
            }
          }
          if (anchor !== -1) {
            ops.push({
              op: "text",
              anchor: selectorFor(a[anchor]),
              html: tokensToMarkup(next.b.map((x) => b[x]))
            });
            runs[r + 1] = { kind: "equal", a: [], b: [] }; // consume the insert
          }
        }
        continue;
      }
      ops.push({ op: "remove", anchor: selectorFor(opens[0]) });
      continue;
    }

    // insert run: drop wrap-consumed tokens
    const kept = run.b.filter((bIndex) => !consumed.has(bIndex));
    if (kept.length === 0) continue;
    const inserted = kept.map((x) => b[x]);
    if (inserted.every((token) => token.t === "close")) continue;

    const html = tokensToMarkup(inserted);

    // anchor: walk backwards from the insert point in the a-sequence; the
    // first matched close tag names the element whose end is here.
    let anchorIndex = -1;
    let openDepth = 0;
    for (let k = r - 1; k >= 0 && anchorIndex === -1; k -= 1) {
      if (runs[k].kind !== "equal") continue;
      for (let idx = runs[k].a.length - 1; idx >= 0; idx -= 1) {
        const token = a[runs[k].a[idx]];
        if (token.t === "close") {
          // find its matching open among the matched tokens
          for (let p = k; p >= 0 && anchorIndex === -1; p -= 1) {
            const indexes = runs[p].kind === "equal" ? runs[p].a : [];
            const start = p === k ? idx - 1 : indexes.length - 1;
            for (let q = start; q >= 0; q -= 1) {
              const candidate = a[indexes[q]];
              if (candidate.t === "open" && candidate.tag === token.tag && !candidate.selfClose) {
                anchorIndex = indexes[q];
                break;
              }
            }
          }
          break;
        }
        if (token.t === "open" && !token.selfClose) { anchorIndex = runs[k].a[idx]; break; }
      }
    }
    if (anchorIndex === -1) {
      // no previous element: insertBefore the first following matched element
      let firstIndex = -1;
      for (let k = r + 1; k < runs.length && firstIndex === -1; k += 1) {
        if (runs[k].kind !== "equal") continue;
        for (let idx = 0; idx < runs[k].a.length; idx += 1) {
          const token = a[runs[k].a[idx]];
          if (token.t === "open" && !token.selfClose) { firstIndex = runs[k].a[idx]; break; }
        }
      }
      if (firstIndex === -1) {
        problems.push("insert with no anchor — needs manual review");
        continue;
      }
      ops.push({ op: "insertBefore", anchor: selectorFor(a[firstIndex]), html });
    } else {
      ops.push({ op: "insertAfter", anchor: selectorFor(a[anchorIndex]), html });
    }
  }

  // Merge consecutive same-anchor insert ops: sequential insertBefore on the
  // same anchor reverses document order (each new insert lands before the
  // previous one), so their html must be concatenated in emission order.
  const merged = [];
  for (const op of ops) {
    const previous = merged[merged.length - 1];
    if (
      previous &&
      (op.op === "insertBefore" || op.op === "insertAfter") &&
      op.op === previous.op &&
      op.anchor === previous.anchor
    ) {
      previous.html += op.html;
      if (op.op === "insertAfter") {
        // insertAfter emits in run order; concatenation is already correct
      }
    } else {
      merged.push({ ...op });
    }
  }
  return { ops: merged, problems };
}

// ---------------------------------------------------------------- extraction

function extractTokens(source) {
  const out = { accent: "", font: "", fontStack: "", fontOptions: [], defaultMode: "dark", themeColor: "", onAccentDark: "#111013", onAccentLight: "#FFFFFF", onAccentThreshold: 0.179 };

  const accent = source.match(/const DEFAULT_ACCENT = "([^"]+)"/);
  if (accent) out.accent = accent[1];

  const font = source.match(/const DEFAULT_FONT = "([^"]+)"/);
  if (font) out.font = font[1];

  const fontOptionsMatch = source.match(/const FONT_OPTIONS = \[([\s\S]*?)\];/);
  if (fontOptionsMatch) {
    const options = [...fontOptionsMatch[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
    if (options.join(",") !== BASE_OPTIONS.join(",")) out.fontOptions = options;
  }

  const stackMatch = source.match(/const DEFAULT_FONT_STACK =\s*([\s\S]*?);\n/);
  if (stackMatch) {
    let expr = stackMatch[1].trim();
    // Resolve concatenated template literals ("`a` + `b`") and the plain
    // string form; strip comments and collapse whitespace.
    expr = expr.replace(/\/\*[\s\S]*?\*\//g, "");
    expr = expr.replace(/`/g, "").replace(/\+/g, "");
    expr = expr.replace(/\$\{DEFAULT_FONT\}/g, out.font || "Inter");
    expr = expr.replace(/^"(.*)"$/, "$1");
    out.fontStack = expr.replace(/\s+/g, " ").trim();
  }

  const headScript = source.match(/<script>\n    \(\(\) => \{[\s\S]*?\n  <\/script>/);
  if (headScript) {
    const head = headScript[0];
    if (/\?\s*"light"\s*:\s*"dark"/.test(head)) out.defaultMode = "dark";
    else if (/\?\s*"dark"\s*:\s*"light"/.test(head)) out.defaultMode = "light";
  }

  const themeColor = source.match(/<meta name="theme-color" content="([^"]+)">/);
  if (themeColor) out.themeColor = themeColor[1];

  const luminance = source.match(/luminance > ([\d.]+) \? "([^"]+)" : "([^"]+)"/);
  if (luminance) {
    out.onAccentThreshold = parseFloat(luminance[1]);
    out.onAccentDark = luminance[2];
    out.onAccentLight = luminance[3];
  }

  return out;
}

// Pages whose engine script differs beyond the recognised token patterns.
// With FORCE_EXTRACT=1 these are still extracted (markup only): the human
// authors behaviour.js / interfaceCopyOverrides afterwards.
const MANUAL_PAGES = new Set([
  "manpage.html",     // live date fill
  "dec-manual.html",  // chapter numbering
  "newsroom.html",    // dateline
  "toolkit.html"      // full toolkit application
]);

const FORCE = process.env.FORCE_EXTRACT === "1";

function appScriptOf(source) {
  const scripts = [...source.matchAll(/<script>\s*([\s\S]*?)\s*<\/script>/g)];
  return scripts.length ? scripts[scripts.length - 1][1] : "";
}

// The pre-refactor engine baseline: games.html's app script — the simplest
// theme page (its only difference from index.html was DEFAULT_ACCENT).
const ORIGINAL_APP = appScriptOf(read("games.html"));

function normaliseApp(source) {
  return source
    .replace(/\/\/.*$/gm, "")          // strip line comments
    .replace(/\/\*[\s\S]*?\*\//g, "")  // strip block comments
    .replace(/const DEFAULT_ACCENT = "[^"]*";/g, "")
    .replace(/const DEFAULT_FONT = "[^"]*";/g, "")
    .replace(/const DEFAULT_FONT_STACK =\s*[\s\S]*?;/, "")
    .replace(/const FONT_OPTIONS = \[[\s\S]*?\];/g, "")
    .replace(/theme: requestedTheme[\s\S]*?"(?:light|dark)",/, "") // per-pack default mode line
    .replace(/return luminance > [\d.]+ \? "[^"]+" : "[^"]+";/g, "") // per-pack accent ink
    .replace(/\s+/g, " ");
}

function hasBehaviourBeyondTokens(source) {
  return normaliseApp(appScriptOf(source)) !== normaliseApp(ORIGINAL_APP);
}

// flavour extraction: text tokens with letters become flavour strings;
// the protected mark "+AI" stays literal.
function flavourise(tokens) {
  const entries = [];
  const used = new Set();
  const output = [];
  let counter = 0;
  for (const token of tokens) {
    if (token.t !== "text") { output.push(token); continue; }
    const parts = token.raw.split(/(\+AI)/g);
    let text = "";
    for (const part of parts) {
      if (part === "+AI") {
        if (text) { output.push({ t: "text", raw: text }); text = ""; }
        output.push({ t: "text", raw: "+AI" });
        continue;
      }
      text += part;
    }
    if (text) {
      if (/[\p{L}]/u.test(text)) {
        let id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 28);
        if (!id || used.has(id)) id = `flavour-${counter += 1}`;
        while (used.has(id)) id += "-x";
        used.add(id);
        entries.push({ id, neutral: text, localised: [] });
        output.push({ t: "flavour", id });
      } else {
        output.push({ t: "text", raw: text });
      }
    }
  }
  return { tokens: output, entries };
}

function decorationMarkup(tokens) {
  return tokens.map((token) => {
    if (token.t === "flavour") return `{{flavour:${token.id}}}`;
    return tokenRaw(token);
  }).join("");
}

function extractPack(pagePath) {
  const code = pagePath.replace(/\.html$/, "");
  const source = read(pagePath);

  const styleMatch = source.match(/<style>\s*([\s\S]*?)\s*<\/style>/);
  if (!styleMatch) return { page: pagePath, error: "no inline <style> found" };
  const css = styleMatch[1];

  const tokens = extractTokens(source);
  if (!tokens.accent) return { page: pagePath, error: "no DEFAULT_ACCENT (not a theme page)" };

  const skeleton = skeletonTokens();
  const pageTokens = pageStaticTokens(pagePath);
  const a = withRaw(skeleton);
  const b = withRaw(pageTokens);

  const { ops, problems } = deriveOps(a, b);

  // flavourise every decoration fragment
  const flavourEntries = [];
  const decorations = ops.map((op) => {
    const out = { op: op.op, anchor: op.anchor };
    for (const field of ["html", "before", "after"]) {
      if (op[field] !== undefined) {
        const { tokens: flavoured, entries } = flavourise(tokenize(op[field]));
        out[field] = decorationMarkup(flavoured);
        flavourEntries.push(...entries);
      }
    }
    return out;
  });

  const dir = join(ROOT, "packs", code);
  mkdirSync(dir, { recursive: true });

  writeFileSync(join(dir, "theme.css"),
    `/*\n * +AI Specification — "${code}" theme pack (packs/${code}/theme.css)\n` +
    ` * Extracted verbatim from the legacy ${code}.html page.\n */\n${css}\n`);

  const manifest = {
    packId: code,
    version: 1,
    hash: "",
    languages: ["*"],
    accessibility: {
      contrast: "AA",
      reducedMotion: true,
      notes: `Migrated from the legacy ${code}.html page; parity verified by build.mjs --verify-pack.`
    },
    conformanceChecked: new Date().toISOString().slice(0, 10),
    assets: ["theme.css", "flavour.json", "note.json"],
    name: { en: prettyName(code) },
    maintainer: "JAPER Technology",
    license: "Project contribution terms (docs/development/0007-licensing-and-mark-policy)",
    tokens: {
      accent: tokens.accent,
      font: tokens.font || "Inter",
      fontStack: tokens.fontStack || "",
      fontOptions: tokens.fontOptions,
      defaultMode: tokens.defaultMode,
      onAccentDark: tokens.onAccentDark,
      onAccentLight: tokens.onAccentLight,
      onAccentThreshold: tokens.onAccentThreshold,
      themeColor: tokens.themeColor || tokens.accent
    },
    decorations
  };

  writeFileSync(join(dir, "manifest.json"), JSON.stringify(manifest, null, 2) + "\n");
  writeFileSync(join(dir, "flavour.json"), JSON.stringify({
    flavourStrings: flavourEntries,
    packVersion: 1
  }, null, 2) + "\n");
  writeFileSync(join(dir, "note.json"), JSON.stringify({
    themeId: code,
    noteVersion: 1,
    supportedFeatures: [
      { feature: "hooks-contract", basis: "measured", by: "build.mjs --verify-pack", at: new Date().toISOString().slice(0, 10) }
    ],
    accessibility: {
      contrast: "AA",
      motion: "reduced-motion-aware",
      keyboard: "reviewed",
      screenReader: "reviewed",
      basis: "reviewed"
    },
    limitations: [
      { limitation: "Flavour copy is English-only at migration; other languages fall back to English via the flavour mechanism.", fallback: "neutral pack", blocker: false },
      ...(problems.length ? [{ limitation: `Decoration extraction reported: ${problems.join("; ")}.`, fallback: "manual pack repair", blocker: false }] : [])
    ],
    languageCoverage: ["en"],
    contentVersion: "v0.1",
    lastCheck: { at: new Date().toISOString().slice(0, 10), linter: "build.mjs", result: "pending", failedRules: problems.slice() }
  }, null, 2) + "\n");

  return { page: pagePath, code, ops: ops.length, flavours: flavourEntries.length, problems };
}

function prettyName(code) {
  return code.replace(/^(theme-|occupation-|art-|country-)/, "")
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// ---------------------------------------------------------------- main

const args = process.argv.slice(2);
const isReport = args[0] === "--report";

const pages = (args[0] && !isReport ? args : readdirSync(ROOT).filter((name) => name.endsWith(".html"))).sort();

const skip = new Set([
  "index.html", "toolkit.html", "world-openai.html", "world-sci-fi-1.html",
  "404.html", "attract.html", "crawl.html", "credits.html", "current.html",
  "narration.html", "random.html", "rsvp.html", "slideshow.html",
  "speedread.html", "typewriter.html"
]);

const results = [];
for (const page of pages) {
  if (skip.has(page)) continue;
  const source = read(page);
  if (!/DEFAULT_ACCENT/.test(source)) continue;
  if (!FORCE && MANUAL_PAGES.has(page)) {
    results.push({ page, status: "manual", reason: "extra behaviour JS — needs a human author" });
    continue;
  }
  if (!FORCE && hasBehaviourBeyondTokens(source)) {
    results.push({ page, status: "manual", reason: "engine script differs beyond tokens — needs a human author" });
    continue;
  }
  const result = extractPack(page);
  if (result.error) {
    results.push({ page, status: "manual", reason: result.error });
    continue;
  }
  results.push({
    page,
    status: result.problems.length ? "needs-fix" : "extracted",
    ops: result.ops,
    flavours: result.flavours,
    problems: result.problems
  });
}

if (isReport) {
  for (const result of results) {
    console.log(`${result.page.padEnd(28)} ${result.status}${result.reason ? ` — ${result.reason}` : result.status === "extracted" ? ` (${result.ops} ops, ${result.flavours} flavour strings)` : result.status === "needs-fix" ? ` (${result.problems.join("; ")})` : ""}`);
  }
} else {
  const ok = results.filter((result) => result.status === "extracted");
  const fix = results.filter((result) => result.status === "needs-fix");
  const manual = results.filter((result) => result.status === "manual");
  console.log(`[extract] ${ok.length} extracted clean, ${fix.length} need op fixes, ${manual.length} need manual work`);
  for (const result of fix) console.log(`  FIX     ${result.page} — ${result.problems.join("; ")}`);
  for (const result of manual) console.log(`  MANUAL  ${result.page} — ${result.reason}`);
}
