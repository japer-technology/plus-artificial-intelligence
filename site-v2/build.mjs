#!/usr/bin/env node
/*
 * +AI site-v2 — build
 *
 * Assembles the single multi-language, multi-theme site from its sources:
 *
 *   src/shell.html          the one document skeleton (head + body)
 *   src/app.js              the engine (language + theme + font + accent)
 *   src/base.css            the structural minimum shared by every pack
 *   src/nav.json            the versioned navigation manifest (super menu)
 *   packs/<code>/           theme packs: manifest.json, theme.css,
 *                           flavour.json, note.json, optional behaviour.js
 *   translations/           the 40 language packs + registry (load order in
 *                           src/language-order.json)
 *
 * Outputs:
 *   index.html              the runtime upload: ONE self-contained file
 *                           (html + css + js inline; fonts stay external)
 *   index-fat.html          the development/testing build: same document
 *                           with <script src>/<link> inclusions
 *   packs/<code>/pack.js    generated registration script (committed)
 *   src/nav.js              generated navigation manifest script (committed)
 *   packs/index.js          generated theme directory for the standalone
 *                           pages (random/attract/404)
 *   legacy redirect stubs   one tiny param-preserving stub per retired
 *                           theme page (same URL, canonical target)
 *
 * Modes:
 *   node build.mjs                     build everything
 *   node build.mjs --check             rebuild and diff against the files on
 *                                      disk; exit non-zero on any drift
 *   node build.mjs --verify-pack <code>
 *                                      replay a pack's decorations on the
 *                                      skeleton and compare against its
 *                                      original page (parity proof)
 *   node build.mjs --verify-all        run --verify-pack for every pack
 */

import { readFileSync, writeFileSync, readdirSync, existsSync, mkdirSync } from "node:fs";
import { createHash } from "node:crypto";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import {
  tokenize, comparableTokens, tokensToMarkup, applyDecorations, parseSelector
} from "./tools/html-tokens.mjs";

// ---------------------------------------------------------------- balance gate
// A decoration fragment must be tag-balanced: browsers auto-close a bare
// "<div>" in insertAdjacentHTML, silently breaking the structure the token
// model accepted. wrap/wrapInner pairs are checked as before+slot+after.
function balancedFragment(html) {
  const stack = [];
  for (const token of tokenize(html)) {
    if (token.t === "open" && !token.selfClose) stack.push(token.tag);
    else if (token.t === "close") {
      if (stack.length === 0 || stack[stack.length - 1] !== token.tag) {
        return `mismatched </${token.tag}>`;
      }
      stack.pop();
    }
  }
  return stack.length ? `unclosed <${stack.join(">,<")}>` : null;
}

function assertBalancedPack(pack) {
  const problems = [];
  const fontStack = pack.manifest.tokens?.fontStack || "";
  if (/[`$]|\$\{/.test(fontStack)) {
    problems.push(`tokens.fontStack contains template-literal syntax (unresolved from the source page)`);
  }
  for (const decoration of pack.manifest.decorations || []) {
    if (decoration.op === "wrap" || decoration.op === "wrapInner") {
      const combined = (decoration.before || "") + "<span></span>" + (decoration.after || "");
      const problem = balancedFragment(combined);
      if (problem) problems.push(`${decoration.op} ${decoration.anchor}: pair ${problem}`);
    } else if (decoration.html !== undefined) {
      const problem = balancedFragment(decoration.html);
      if (problem) problems.push(`${decoration.op} ${decoration.anchor}: html ${problem}`);
    }
  }
  if (problems.length) {
    throw new Error(
      `pack "${pack.code}" has unbalanced decoration fragments (browsers auto-close them; ` +
      `rewrite with wrap/wrapInner/move — see tools/balance-check.mjs):\n  ` + problems.join("\n  ")
    );
  }
}

const ROOT = dirname(fileURLToPath(import.meta.url));
const read = (path) => readFileSync(join(ROOT, path), "utf8");
const exists = (path) => existsSync(join(ROOT, path));

const languageOrder = JSON.parse(read("src/language-order.json"));
const shell = read("src/shell.html");
const app = read("src/app.js");
const baseCss = read("src/base.css");
const navManifest = JSON.parse(read("src/nav.json"));

const DEFAULT_THEME = "sci-fi-1";

// ---------------------------------------------------------------- utilities

function escapeInlineJs(source) {
  return source.replace(/<\/script/gi, "<\\/script");
}

function escapeInlineCss(source) {
  return source.replace(/<\/style/gi, "<\\/style");
}

// The canonical bytes of the normative specification: UTF-8, line endings
// normalised to \n, trailing newline stripped (specification-versioning-and-
// hashing §5.2.4).
function specSha256() {
  const bytes = read("SPECIFICATION.md").replace(/\r\n/g, "\n").replace(/\n$/, "");
  return createHash("sha256").update(bytes, "utf8").digest("hex");
}

// The base 39 font families, read from the engine so the single list stays
// in one place.
function baseFontOptions() {
  const match = app.match(/const BASE_FONT_OPTIONS = \[([\s\S]*?)\];/);
  if (!match) throw new Error("BASE_FONT_OPTIONS not found in src/app.js");
  return [...match[1].matchAll(/"([^"]+)"/g)].map((m) => m[1]);
}

// ---------------------------------------------------------------- packs

function packDir(code) {
  return join(ROOT, "packs", code);
}

function readPack(code) {
  const dir = packDir(code);
  const manifest = JSON.parse(readFileSync(join(dir, "manifest.json"), "utf8"));
  const flavour = existsSync(join(dir, "flavour.json"))
    ? JSON.parse(readFileSync(join(dir, "flavour.json"), "utf8"))
    : { flavourStrings: [], packVersion: manifest.version };
  const note = existsSync(join(dir, "note.json"))
    ? JSON.parse(readFileSync(join(dir, "note.json"), "utf8"))
    : null;
  const themeCss = readFileSync(join(dir, "theme.css"), "utf8");
  const behaviourPath = join(dir, "behaviour.js");
  const behaviour = existsSync(behaviourPath) ? readFileSync(behaviourPath, "utf8") : "";
  return { code, manifest, flavour, note, themeCss, behaviour };
}

function packCodes() {
  return readdirSync(join(ROOT, "packs")).filter((name) =>
    existsSync(join(ROOT, "packs", name, "manifest.json"))
  ).sort();
}

// A pack's registration script: the manifest embedded as a plain object,
// plus flavour and note. Generated — never hand-edited (generator pipeline:
// hand edits to generated files are bugs against the sources).
function packRegistration(pack) {
  const payload = {
    ...pack.manifest,
    flavour: pack.flavour,
    note: pack.note
  };
  return [
    "/*! Generated by build.mjs from packs/" + pack.code + "/manifest.json — do not edit. */",
    "(function (registry) {",
    '  registry.register("' + pack.code + '", ' + JSON.stringify(payload, null, 2) + ");",
    "})(window.PlusAISpecThemes);",
    ""
  ].join("\n");
}

// The union of every pack's offered families → one Google Fonts request.
function unionFontFamilies(packs) {
  const families = baseFontOptions();
  for (const pack of packs) {
    for (const family of pack.manifest.tokens?.fontOptions || []) {
      if (!families.includes(family)) families.push(family);
    }
  }
  return families;
}

function fontLinks(packs) {
  const families = unionFontFamilies(packs);
  const first = families.map((family) => `family=${family.replace(/ /g, "+")}:wght@400;700`).join("&");
  const subsets = "latin,latin-ext,cyrillic,cyrillic-ext,greek,greek-ext,vietnamese,arabic,hebrew,devanagari,bengali,gujarati,gurmukhi,tamil,telugu,kannada,malayalam,thai,ethiopic";
  const fallbacks = "Noto+Sans+Arabic:wght@400;700&family=Noto+Sans+Bengali:wght@400;700&family=Noto+Sans+Ethiopic:wght@400;700&family=Noto+Sans+Gujarati:wght@400;700&family=Noto+Sans+Gurmukhi:wght@400;700&family=Noto+Sans+Hebrew:wght@400;700&family=Noto+Sans+Kannada:wght@400;700&family=Noto+Sans+Malayalam:wght@400;700&family=Noto+Sans+Tamil:wght@400;700&family=Noto+Sans+Telugu:wght@400;700&family=Noto+Sans+Thai:wght@400;700";
  return [
    '  <link rel="preconnect" href="https://fonts.googleapis.com">',
    '  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>',
    `  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?${first}&display=swap&subset=${subsets}">`,
    `  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?${fallbacks}&display=swap&subset=arabic,hebrew,bengali,gujarati,gurmukhi,tamil,telugu,kannada,malayalam,thai,ethiopic,latin">`
  ].join("\n");
}

// ---------------------------------------------------------------- assembly

function replaceOnce(source, marker, replacement) {
  if (!source.includes(marker)) throw new Error(`marker ${marker} not found`);
  return source.replace(marker, replacement);
}

function assemble({ fat }) {
  const packs = packCodes().map(readPack);
  for (const pack of packs) assertBalancedPack(pack);
  const defaultPack = packs.find((pack) => pack.code === "default");
  const defaultMode = defaultPack?.manifest?.tokens?.defaultMode || "dark";
  const hash = specSha256();

  const baseCssBlock = fat
    ? '  <link rel="stylesheet" href="src/base.css">'
    : `  <style>\n${escapeInlineCss(baseCss)}\n  </style>`;

  const packCssBlocks = fat
    ? packs.map((pack) =>
        `  <link rel="stylesheet" href="packs/${pack.code}/theme.css" media="not all" id="theme-${pack.code}">`
      ).join("\n")
    : packs.map((pack) =>
        `  <style media="not all" id="theme-${pack.code}">\n${escapeInlineCss(pack.themeCss)}\n  </style>`
      ).join("\n");

  const translationBlocks = fat
    ? languageOrder.map((path) => `  <script src="${path}"></script>`).join("\n")
    : languageOrder.map((path) => `  <script>\n${escapeInlineJs(read(path))}\n  </script>`).join("\n");

  const navBlock = fat
    ? '  <script src="src/nav.js"></script>'
    : `  <script>\n${escapeInlineJs(read("src/nav.js"))}\n  </script>`;

  const registryBlock = fat
    ? '  <script src="packs/registry.js"></script>'
    : `  <script>\n${escapeInlineJs(read("packs/registry.js"))}\n  </script>`;

  const packScriptBlocks = fat
    ? packs.map((pack) => `  <script src="packs/${pack.code}/pack.js"></script>`).join("\n")
    : packs.map((pack) => `  <script>\n${escapeInlineJs(packRegistration(pack))}\n  </script>`).join("\n");

  const behaviourBlocks = fat
    ? packs.filter((pack) => pack.behaviour).map((pack) =>
        `  <script src="packs/${pack.code}/behaviour.js"></script>`).join("\n")
    : packs.filter((pack) => pack.behaviour).map((pack) =>
        `  <script>\n${escapeInlineJs(pack.behaviour)}\n  </script>`).join("\n");

  const appBlock = fat
    ? '  <script src="src/app.js"></script>'
    : `  <script>\n${escapeInlineJs(app)}\n  </script>`;

  let html = shell;
  html = replaceOnce(html, "  <!--FONT-LINKS-->", fontLinks(packs));
  html = replaceOnce(html, "  <!--PACK-CSS-->", [baseCssBlock, packCssBlocks].join("\n"));
  html = replaceOnce(html, "  <!--TRANSLATIONS-->", translationBlocks);
  html = replaceOnce(html, "  <!--APP-->", [navBlock, registryBlock, packScriptBlocks, behaviourBlocks, appBlock].filter(Boolean).join("\n"));
  html = html.replace(/__DEFAULT_MODE__/g, defaultMode);
  html = html.replace(/__SPEC_SHA256__/g, hash);
  return html;
}

// ---------------------------------------------------------------- verification

// Replays a pack's decorations on the skeleton and compares with the pack's
// original single-file page (the frozen legacy instance). After migration
// the legacy page is a redirect stub, so parity against it is no longer
// meaningful: the proof was recorded before stubbing and the tool skips.
function verifyPack(code, originalPath) {
  const pack = readPack(code);
  const originalSource = read(originalPath);
  if (originalSource.includes("This page has moved to")) {
    console.log(`[verify] ${code}: skipped (legacy page replaced by redirect stub; parity proven at migration)`);
    return true;
  }

  // The skeleton body, minus engine-only chrome the legacy pages never had
  // (the theme select label, the pack fallback notice, the fingerprint).
  const shellBody = read("src/shell.html")
    .match(/<body[^>]*>([\s\S]*)<\/body>/i)[1]
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/g, "");
  const engineOnlyIds = ["themeSelect", "packFallbackNote", "specFingerprint"];
  const engineOnlyClasses = ["theme-control"];
  const skeletonTokens = [];
  let skipDepth = 0;
  for (const token of comparableTokens(tokenize(shellBody))) {
    if (skipDepth > 0) {
      if (token.t === "open" && !token.selfClose) skipDepth += 1;
      else if (token.t === "close") skipDepth -= 1;
      continue;
    }
    const id = token.attrs?.id;
    const classes = String(token.attrs?.class || "").split(/\s+/);
    if (token.t === "open" && (engineOnlyIds.includes(id) || engineOnlyClasses.some((cls) => classes.includes(cls)))) {
      skipDepth = 1;
      continue;
    }
    skeletonTokens.push({ ...token, attrs: { ...(token.attrs || {}) } });
  }

  const { tokens: decorated, problems } = applyDecorations(skeletonTokens, pack.manifest.decorations || []);
  if (problems.length) {
    console.error(`[verify] ${code}: decoration problems:`);
    for (const problem of problems) console.error("   " + problem);
    return false;
  }

  const originalBody = originalSource
    .match(/<body[^>]*>([\s\S]*)<\/body>/i)[1]
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/g, "");
  const original = comparableTokens(tokenize(originalBody));
  const produced = comparableTokens(decorated);

  // Resolve flavour placeholders to their neutral text at the TOKEN level,
  // so whitespace normalisation applies identically to both sides (the
  // engine renders the resolved string at runtime).
  const flavourById = new Map(
    (pack.flavour?.flavourStrings || []).map((entry) => [entry.id, entry.neutral || ""])
  );
  for (const token of produced) {
    if (token.t === "text" && token.raw.includes("{{flavour:")) {
      token.raw = token.raw.replace(
        /\{\{flavour:([a-z0-9._-]+)\}\}/g,
        (match, id) => flavourById.get(id) ?? match
      ).replace(/\s+/g, " ").trim();
      if (!token.raw) token.raw = " ";
    }
  }
  const producedMarkup = tokensToMarkup(produced);
  const originalMarkup = tokensToMarkup(original);

  if (producedMarkup === originalMarkup) {
    console.log(`[verify] ${code}: PASS (${produced.length} tokens)`);
    return true;
  }

  console.error(`[verify] ${code}: FAIL — decorated skeleton differs from ${originalPath}`);
  let diffAt = 0;
  while (diffAt < producedMarkup.length && diffAt < originalMarkup.length && producedMarkup[diffAt] === originalMarkup[diffAt]) diffAt += 1;
  console.error(`  first difference at char ${diffAt}:`);
  console.error(`    produced: …${producedMarkup.slice(Math.max(0, diffAt - 90), diffAt + 130)}…`);
  console.error(`    original: …${originalMarkup.slice(Math.max(0, diffAt - 90), diffAt + 130)}…`);
  return false;
}

// ---------------------------------------------------------------- stubs

// code → the legacy filename whose permalink the stub preserves.
function legacyFilename(code) {
  return `${code}.html`;
}

function stubFor(target, label) {
  const canonical = `index.html?theme=${target}`;
  return [
    "<!doctype html>",
    '<html lang="en">',
    "<head>",
    '  <meta charset="utf-8">',
    '  <meta name="viewport" content="width=device-width, initial-scale=1">',
    '  <meta name="robots" content="noindex">',
    `  <link rel="canonical" href="${canonical}">`,
    `  <meta http-equiv="refresh" content="0; url=${canonical}">`,
    `  <title>+AI — ${label}</title>`,
    "  <style>",
    "    body { margin: 0; padding: 2rem; color: #171419; background: #f7f5f8;",
    "      font-family: Inter, ui-sans-serif, system-ui, sans-serif; line-height: 1.6; }",
    "    a { color: #0052cc; }",
    "  </style>",
    "</head>",
    "<body>",
    `  <p>This page has moved to <a href="${canonical}">the ${label} theme</a>.</p>`,
    "  <script>",
    "    // Forward this page's own query parameters to the canonical view",
    "    // (URL semantics: queries carry presentation, never identity).",
    "    (function () {",
    "      var search = window.location.search || \"\";",
    `      var target = "index.html?theme=${target}" + (search ? "&" + search.slice(1) : "");`,
    "      window.location.replace(target);",
    "    })();",
    "  </script>",
    "</body>",
    "</html>",
    ""
  ].join("\n");
}

function writeStubs(packs) {
  const retired = packs.filter((pack) => pack.code !== "default");
  let count = 0;
  for (const pack of retired) {
    writeFileSync(join(ROOT, legacyFilename(pack.code)), stubFor(pack.code, pack.manifest.name.en));
    count += 1;
  }
  // The home wrapper retires to the new single entry point (the world-*.html
  // single-file prototypes are deleted outright — their themes live on as
  // packs).
  writeFileSync(join(ROOT, "current.html"), stubFor(DEFAULT_THEME, "current home").replace(
    "the current home theme", "the site\u2019s new single-page home"
  ));
  count += 1;
  console.log(`[stubs] wrote ${count} redirect stubs`);
}

// ---------------------------------------------------------------- main

const args = process.argv.slice(2);
const mode = args[0] || "build";

if (mode === "--verify-pack" || mode === "--verify-all") {
  const codes = mode === "--verify-all" ? packCodes() : [args[1]].filter(Boolean);
  let ok = true;
  for (const code of codes) {
    if (code === "default" || code === "neutral") continue; // authored packs, no legacy original
    const original = legacyFilename(code);
    if (!exists(original)) {
      console.log(`[verify] ${code}: skipped (no original page present)`);
      continue;
    }
    ok = verifyPack(code, original) && ok;
  }
  process.exit(ok ? 0 : 1);
}

// Regenerate the derived files from their sources first.
const packs = packCodes().map(readPack);
for (const pack of packs) {
  mkdirSync(packDir(pack.code), { recursive: true });
  writeFileSync(join(packDir(pack.code), "pack.js"), packRegistration(pack));
}
writeFileSync(join(ROOT, "src", "nav.js"),
  "/*! Generated by build.mjs from src/nav.json — do not edit. */\n" +
  `window.PlusAISpecNav = ${JSON.stringify(navManifest, null, 2)};\n`);

// Theme directory for the standalone pages (random/attract/404).
const indexJs = [
  "/*! Generated by build.mjs — the pack directory. */",
  "window.PlusAISpecThemeIndex = " +
    JSON.stringify(packs.map((pack) => ({
      code: pack.code,
      name: pack.manifest.name.en,
      url: pack.code === "default" ? "index.html" : `index.html?theme=${pack.code}`
    })), null, 2) + ";",
  ""
].join("\n");
writeFileSync(join(ROOT, "packs", "index.js"), indexJs);

const fat = assemble({ fat: true });
const single = assemble({ fat: false });

if (mode === "--check") {
  const currentFat = exists("index-fat.html") ? read("index-fat.html") : null;
  const currentSingle = exists("index.html") ? read("index.html") : null;
  let drift = false;
  if (currentFat !== fat) {
    drift = true;
    console.error("[check] index-fat.html does not match the sources.");
  } else {
    console.log("[check] index-fat.html matches the sources.");
  }
  if (currentSingle !== single) {
    drift = true;
    console.error("[check] index.html does not match the sources.");
  } else {
    console.log("[check] index.html matches the sources.");
  }
  process.exit(drift ? 1 : 0);
}

if (mode === "--stubs") {
  writeStubs(packs);
  process.exit(0);
}

writeFileSync(join(ROOT, "index-fat.html"), fat);
writeFileSync(join(ROOT, "index.html"), single);

const kB = (bytes) => `${(bytes / 1024).toFixed(0)} KB`;
console.log(`[build] index.html      ${kB(Buffer.byteLength(single))} (${packs.length} packs, ${languageOrder.length - 1} languages)`);
console.log(`[build] index-fat.html  ${kB(Buffer.byteLength(fat))}`);
console.log(`[build] spec sha256     ${specSha256().slice(0, 12)}…`);
console.log(`[build] default mode    ${packs.find((p) => p.code === "default")?.manifest?.tokens?.defaultMode}`);
