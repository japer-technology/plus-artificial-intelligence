#!/usr/bin/env node
/*
 * +AI site-v2 — runtime structure checker (tools/runtime-check.mjs)
 *
 * Renders each pack in headless Chromium and compares the resulting static
 * markup against the pack's intended structure (/tmp/balance-<code>.txt, the
 * snapshot the balance work preserved). This catches the class of bug the
 * token-only parity check cannot: fragments the browser auto-closes.
 *
 * Usage: node tools/runtime-check.mjs [code]   (default: every pack)
 *
 * Normalisation on BOTH sides (in this order):
 *   1. flavour spans (rendered) are folded back to {{flavour:id}} text, and
 *      text tokens are split at placeholder boundaries (snapshot);
 *   2. engine-injected subtrees and attributes are stripped, engine-driven
 *      containers (data-text/data-title/data-html, theme toggle, font
 *      select, spec content, ToC, known dynamic readouts) are emptied;
 *   3. whitespace-only text is dropped and remaining text collapsed.
 * Packs with genuinely dynamic content (clocks, dates, gallery) are either
 * excluded by id above or skipped entirely (toolkit).
 */

import { readFileSync, readdirSync, existsSync } from "node:fs";
import { execFileSync } from "node:child_process";
import {
  tokenize, comparableTokens, tokensToMarkup
} from "./html-tokens.mjs";

const ROOT = new URL("..", import.meta.url).pathname;
const args = process.argv.slice(2);
const codes = args[0] && !args[0].startsWith("--")
  ? [args[0]]
  : readdirSync(ROOT + "packs").filter((c) => !c.endsWith(".js") && c !== "README.md").sort();

const CHROMIUM = process.env.CHROMIUM || "chromium";

function renderDom(code) {
  const url = `file://${ROOT}index.html?theme=${code}`;
  const out = execFileSync(CHROMIUM, [
    "--headless", "--no-sandbox", "--disable-gpu", "--dump-dom", url
  ], { encoding: "utf8", timeout: 90000, maxBuffer: 32 * 1024 * 1024, stdio: ["ignore", "pipe", "ignore"] });
  return out;
}

const ENGINE_STRIP_IDS = [
  "superMenu", "packFallbackNote", "specFingerprint", "fontSelect", "themeSelect"
];
const ENGINE_EMPTY_IDS = [
  "specContent", "tocList", "themeToggle", "audioToggle", "gallery",
  "manDate", "datelineDate", "lcarsClock", "lcarsStardate"
];
const ENGINE_EMPTY_CLASSES = ["theme-control", "hero-subtitle", "component-bar"];
const ENGINE_EMPTY_ATTRS = ["data-title", "data-text", "data-html"];
const STRIP_ATTRS = new Set([
  "style", "aria-expanded", "aria-haspopup", "aria-controls", "aria-label",
  "role", "tabindex", "data-language-source", "data-theme-source", "dir", "lang"
]);

// Splits text tokens at {{flavour:id}} boundaries so both sides align.
function splitFlavourTokens(tokens) {
  const out = [];
  for (const token of tokens) {
    if (token.t !== "text" || !token.raw.includes("{{flavour:")) { out.push(token); continue; }
    for (const part of token.raw.split(/(\{\{flavour:[a-z0-9._-]+\}\})/g)) {
      if (part) out.push({ t: "text", raw: part });
    }
  }
  return out;
}

// Folds resolved flavour spans (<span data-flavour="id">TEXT</span>) back to
// placeholder text tokens, at the RAW level (before whitespace collapse).
function foldFlavourSpans(tokens) {
  const out = [];
  let i = 0;
  while (i < tokens.length) {
    const token = tokens[i];
    if (token.t === "open" && token.attrs && "data-flavour" in token.attrs) {
      const id = token.attrs["data-flavour"];
      let depth = 1;
      let j = i + 1;
      while (j < tokens.length && depth > 0) {
        if (tokens[j].t === "open" && !tokens[j].selfClose) depth += 1;
        else if (tokens[j].t === "close") depth -= 1;
        j += 1;
      }
      out.push({ t: "text", raw: `{{flavour:${id}}}` });
      i = j;
      continue;
    }
    out.push(token);
    i += 1;
  }
  return out;
}

// Common final pass: strip/empty engine surfaces, then whitespace-normalise.
function finalise(tokens) {
  const out = [];
  let skipDepth = 0;
  let emptiedTag = null;
  for (const token of tokens) {
    if (skipDepth > 0) {
      if (token.t === "open" && !token.selfClose) skipDepth += 1;
      else if (token.t === "close") {
        skipDepth -= 1;
        if (skipDepth === 0 && emptiedTag && token.tag === emptiedTag) {
          out.push(token);
          emptiedTag = null;
        }
      }
      continue;
    }
    if (token.t !== "open") { out.push(token); continue; }

    const attrs = { ...(token.attrs || {}) };
    const id = attrs.id;
    const classes = String(attrs.class || "").split(/\s+/);
    const emptied = ENGINE_EMPTY_IDS.includes(id) ||
      classes.some((c) => ENGINE_EMPTY_CLASSES.includes(c)) ||
      ENGINE_EMPTY_ATTRS.some((a) => a in attrs);

    if (ENGINE_STRIP_IDS.includes(id) || classes.includes("theme-control")) {
      skipDepth = 1;
      continue;
    }
    for (const name of STRIP_ATTRS) delete attrs[name];
    if (token.tag === "body") delete attrs.class; // runtime pack class
    if (emptied) {
      delete attrs["data-title"];
      delete attrs["data-text"];
      delete attrs["data-html"];
      out.push({ ...token, attrs });
      skipDepth = 1;
      emptiedTag = token.tag;
      continue;
    }
    out.push({ ...token, attrs });
  }
  return tokensToMarkup(comparableTokens(out));
}

function normaliseRendered(dom) {
  const bodyMatch = dom.match(/<body[^>]*>([\s\S]*)<\/body>/i);
  if (!bodyMatch) throw new Error("no body in rendered DOM");
  let body = bodyMatch[1]
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/g, "");
  // The DOM serialiser writes explicit closes for empty SVG elements; fold
  // them to self-closing form so tokenisation matches the snapshot.
  body = body.replace(/<(rect|circle|path|use|line|polygon|polyline)(\b[^>]*?)><\/\1>/g, "<$1$2/>");
  let tokens = tokenize(body);
  tokens = foldFlavourSpans(tokens);
  tokens = splitFlavourTokens(tokens);
  return finalise(tokens);
}

function snapshotFor(code) {
  const path = `/tmp/balance-${code}.txt`;
  if (!existsSync(path)) return null;
  let raw = readFileSync(path, "utf8");
  // Same SVG empty-element normalisation as the rendered side.
  raw = raw.replace(/<(rect|circle|path|use|line|polygon|polyline)(\b[^>]*?)><\/\1>/g, "<$1$2/>");
  let tokens = tokenize(raw);
  tokens = splitFlavourTokens(tokens);
  return finalise(tokens);
}

let failed = 0;
for (const code of codes) {
  if (code === "toolkit") {
    console.log(`[runtime] ${code}: skipped (dynamic application — verified separately)`);
    continue;
  }
  const snapshot = snapshotFor(code);
  if (!snapshot) {
    console.log(`[runtime] ${code}: no snapshot — skipped`);
    continue;
  }
  let rendered;
  try {
    rendered = normaliseRendered(renderDom(code));
  } catch (error) {
    console.log(`[runtime] ${code}: RENDER ERROR ${error.message}`);
    failed += 1;
    continue;
  }
  if (rendered === snapshot) {
    console.log(`[runtime] ${code}: OK`);
    continue;
  }
  failed += 1;
  let diffAt = 0;
  while (diffAt < rendered.length && diffAt < snapshot.length && rendered[diffAt] === snapshot[diffAt]) diffAt += 1;
  console.log(`[runtime] ${code}: DIFF at char ${diffAt}`);
  console.log(`    rendered: …${rendered.slice(Math.max(0, diffAt - 70), diffAt + 110)}…`);
  console.log(`    snapshot: …${snapshot.slice(Math.max(0, diffAt - 70), diffAt + 110)}…`);
}
console.log(failed ? `[runtime] ${failed} pack(s) differ — review` : "[runtime] all packs render exactly as intended");
process.exit(0);
