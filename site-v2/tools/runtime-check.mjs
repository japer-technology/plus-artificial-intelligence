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
 *        node tools/runtime-check.mjs --smoke (no migration snapshots needed)
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

import { readFileSync, readdirSync, existsSync, mkdtempSync, rmSync } from "node:fs";
import { execFileSync, spawn } from "node:child_process";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import {
  tokenize, comparableTokens, tokensToMarkup
} from "./html-tokens.mjs";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const args = process.argv.slice(2);
const codes = args[0] && !args[0].startsWith("--")
  ? [args[0]]
  : readdirSync(ROOT + "packs").filter((c) => !c.endsWith(".js") && c !== "README.md").sort();

const CHROMIUM = process.env.CHROMIUM || "chromium";

// Exercise the real engine, including DOM mutations and delegated controls.
// This function is evaluated in Chromium, not in Node.
function smokeChecks() {
  const assert = (condition, message) => { if (!condition) throw new Error(message); };
  const errors = [];
  window.addEventListener("error", (event) => errors.push(event.message));
  const initialTheme = location.pathname.endsWith("/ibm-manual.html") ? "ibm-manual" : "sci-fi-1";
  assert(currentTheme === initialTheme && currentLanguage === "en", "Incorrect initial theme or language");
  const fixture = document.createElement("div");
  fixture.id = "runtimeFixture";
  document.body.append(fixture);
  const cases = [
    { op: "remove", anchor: "#runtimeAnchor" },
    { op: "replaceWith", anchor: "#runtimeAnchor", html: "" },
    { op: "replaceWith", anchor: "#runtimeAnchor", html: "<i>one</i><b>two</b>" },
    { op: "wrap", anchor: "#runtimeAnchor", before: "<aside>before</aside><div><div>", after: "</div></div><aside>after</aside>" },
    { op: "wrapInner", anchor: "#runtimeAnchor", before: "<div><div>", after: "</div></div>" },
    { op: "addClass", anchor: "#runtimeAnchor", className: "original added" }
  ];
  for (const decoration of cases) {
    fixture.innerHTML = '<span>before</span><div id="runtimeAnchor" class="original">content</div><span>after</span>';
    const original = fixture.innerHTML;
    const anchor = fixture.querySelector("#runtimeAnchor");
    removeDecorations(applyDecorations({ packId: "runtime-test", decorations: [decoration] }));
    assert(fixture.innerHTML === original && fixture.querySelector("#runtimeAnchor") === anchor,
      `${decoration.op}: decoration undo did not restore the original DOM`);
  }
  fixture.remove();

  const select = (id, value) => {
    const control = document.getElementById(id);
    control.value = value;
    control.dispatchEvent(new Event("change", { bubbles: true }));
  };
  setTheme("missing-runtime-test", { persist: false });
  assert(currentTheme === "neutral" && !elements.packFallbackNote.hidden &&
    getComputedStyle(elements.packFallbackNote).display !== "none",
    "Missing theme must display the neutral fallback notice");
  const codes = themeRegistry.codes();
  for (const code of [...codes, ...codes.slice().reverse()]) {
    select("themeSelect", code);
    assert(currentTheme === code && activePack.code === code, `${code}: theme activation failed`);
    assert(document.querySelectorAll('style[id^="theme-"][media="all"], link[id^="theme-"][media="all"]').length === 1,
      `${code}: stale theme stylesheet`);
    for (const id of ["languageSelect", "themeSelect", "fontSelect", "themeToggle", "headerAccent"]) {
      assert(document.querySelectorAll(`#${id}`).length === 1 && elements[id].isConnected,
        `${code}: missing or duplicated ${id}`);
    }
    assert(document.querySelectorAll(".spec-section").length === 26, `${code}: missing specification`);
    const numbering = themeRegistry.get(code).numbering;
    assert(document.querySelector(".section-number").textContent ===
      (numbering?.section?.replace("${number}", "1") || "01"), `${code}: stale section numbering`);
    assert(document.querySelector(".toc-number").textContent ===
      (numbering?.toc?.replace("${number}", "1") || "01"), `${code}: stale contents numbering`);
    const wordmark = document.querySelector(".wordmark");
    assert(wordmark?.getAttribute("aria-controls") === "superMenu", `${code}: missing menu trigger semantics`);
    // Click a descendant, as several packs put spans inside the wordmark.
    const child = document.createElement("span");
    wordmark.append(child);
    child.click();
    child.remove();
    assert(superMenu.isConnected && !superMenu.hidden && wordmark.getAttribute("aria-expanded") === "true",
      `${code}: wordmark click did not open the menu`);
    document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape", bubbles: true }));
    assert(superMenu.hidden && document.activeElement === wordmark, `${code}: menu Escape/focus failed`);
    wordmark.dispatchEvent(new KeyboardEvent("keydown", { key: " ", bubbles: true }));
    assert(!superMenu.hidden, `${code}: keyboard menu activation failed`);
    document.body.click();
    assert(superMenu.hidden, `${code}: outside click did not close the menu`);
    const mode = document.documentElement.dataset.theme;
    elements.themeToggle.click();
    assert(document.documentElement.dataset.theme !== mode, `${code}: mode toggle failed`);
    elements.themeToggle.click();
    select("fontSelect", elements.fontSelect.options[1].value);
    elements.headerAccent.click();
    assert(/^#[0-9a-f]{6}$/i.test(document.documentElement.style.getPropertyValue("--accent")),
      `${code}: invalid accent`);
    assert(errors.length === 0, `${code}: ${errors.join("; ")}`);
  }
  select("themeSelect", "neutral");
  for (const language of supportedLanguages) {
    select("languageSelect", language);
    assert(document.documentElement.lang === language && elements.specContent.lang === language,
      `${language}: language switch failed`);
    assert(elements.specContent.dir === (RIGHT_TO_LEFT_LANGUAGES.includes(language) ? "rtl" : "ltr"),
      `${language}: incorrect text direction`);
    assert(document.querySelectorAll(".spec-section").length === 26, `${language}: missing sections`);
  }
  return `${codes.length} themes (forward/reverse), ${supportedLanguages.length} languages, decoration undo and menu controls`;
}

async function smokeCheck() {
  const profile = mkdtempSync(join(tmpdir(), "plus-ai-runtime-"));
  const browser = spawn(CHROMIUM, [
    "--headless", "--no-sandbox", "--disable-gpu", "--remote-debugging-pipe",
    `--user-data-dir=${profile}`, "about:blank"
  ], { stdio: ["ignore", "ignore", "ignore", "pipe", "pipe"] });
  const pending = new Map();
  let sequence = 0;
  let buffer = "";
  const fail = (error) => {
    for (const { reject } of pending.values()) reject(error);
    pending.clear();
  };
  browser.on("error", fail);
  const closed = new Promise((resolve) => browser.on("close", () => {
    fail(new Error("Chromium exited before the runtime check completed"));
    resolve();
  }));
  browser.stdio[4].setEncoding("utf8");
  browser.stdio[4].on("data", (chunk) => {
    buffer += chunk;
    let end;
    while ((end = buffer.indexOf("\0")) !== -1) {
      const message = JSON.parse(buffer.slice(0, end));
      buffer = buffer.slice(end + 1);
      const request = pending.get(message.id);
      if (!request) continue;
      pending.delete(message.id);
      if (message.error) request.reject(new Error(message.error.message));
      else request.resolve(message.result);
    }
  });
  const send = (method, params = {}, sessionId) => new Promise((resolve, reject) => {
    const id = ++sequence;
    pending.set(id, { resolve, reject });
    browser.stdio[3].write(JSON.stringify({ id, method, params, sessionId }) + "\0");
  });
  const timeout = setTimeout(() => {
    fail(new Error("Runtime check timed out"));
    browser.kill("SIGKILL");
  }, 90000);
  try {
    for (const page of ["index.html", "index-fat.html", "ibm-manual.html"]) {
      const { targetId } = await send("Target.createTarget", { url: "about:blank" });
      const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
      await send("Page.enable", {}, sessionId);
      await send("Network.enable", {}, sessionId);
      await send("Network.setBlockedURLs", { urls: ["http://*", "https://*"] }, sessionId);
      await send("Page.addScriptToEvaluateOnNewDocument", { source: "localStorage.clear()" }, sessionId);
      const url = pathToFileURL(join(ROOT, page));
      url.search = "?lang=en";
      await send("Page.navigate", { url: url.href }, sessionId);
      for (;;) {
        const ready = await send("Runtime.evaluate", {
          expression: `location.href === ${JSON.stringify(url.href)} && document.readyState === 'complete'`
        }, sessionId);
        if (ready.result?.value) break;
        await new Promise((resolve) => setTimeout(resolve, 100));
      }
      const result = await send("Runtime.evaluate", {
        expression: `(${smokeChecks.toString()})()`, returnByValue: true
      }, sessionId);
      if (result.exceptionDetails) {
        throw new Error(`${page}: ${result.exceptionDetails.exception?.description || result.exceptionDetails.text}`);
      }
      console.log(`[smoke] ${page}: OK — ${result.result.value}`);
      await send("Target.closeTarget", { targetId });
    }
  } finally {
    clearTimeout(timeout);
    browser.kill("SIGKILL");
    await closed;
    rmSync(profile, { recursive: true, force: true });
  }
}

if (args.includes("--smoke")) {
  try {
    await smokeCheck();
  } catch (error) {
    console.error(`[smoke] FAIL: ${error.message}`);
    process.exit(1);
  }
  process.exit(0);
}

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
