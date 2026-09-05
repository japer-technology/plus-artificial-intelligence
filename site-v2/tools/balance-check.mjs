#!/usr/bin/env node
/*
 * +AI site-v2 — decoration balance checker (tools/balance-check.mjs)
 *
 * Guards the one rule the browser enforces but the token model cannot see:
 * every decoration fragment must be TAG-BALANCED. A fragment like
 * "<div class=x>" passed to insertAdjacentHTML is AUTO-CLOSED by the
 * browser, so a pack whose markup splits one wrapper across two ops breaks
 * at runtime even though the token-level parity check passes.
 *
 * Usage:
 *   node tools/balance-check.mjs [code]            check one pack (default: all)
 *   node tools/balance-check.mjs <code> --snapshot save the pack's intended
 *                                                  structure (the replay of its
 *                                                  CURRENT ops) for later
 *                                                  comparison
 *
 * After a pack's decorations are rewritten to balanced form,
 * `node tools/balance-check.mjs <code>` must report: balanced AND
 * "replay matches snapshot" — proving the rewrite reproduces the same
 * intended structure with fragments the browser will honour.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from "node:fs";
import { tokenize, comparableTokens, tokensToMarkup, applyDecorations } from "./html-tokens.mjs";

const ROOT = new URL("..", import.meta.url).pathname;
const read = (p) => readFileSync(ROOT + p, "utf8");
const codes = readdirSync(ROOT + "packs").filter((c) => !c.endsWith(".js") && c !== "README.md").sort();

function balancedFragment(html) {
  const stack = [];
  for (const t of tokenize(html)) {
    if (t.t === "open" && !t.selfClose) stack.push(t.tag);
    else if (t.t === "close") {
      if (stack.length === 0 || stack[stack.length - 1] !== t.tag) return `mismatched </${t.tag}>`;
      stack.pop();
    }
  }
  return stack.length ? `unclosed <${stack.join(">,<")}>` : null;
}

function checkPack(code) {
  const manifest = JSON.parse(read(`packs/${code}/manifest.json`));
  const problems = [];
  for (const d of manifest.decorations || []) {
    if (d.op === "wrap" || d.op === "wrapInner") {
      const combined = (d.before || "") + "<span></span>" + (d.after || "");
      const problem = balancedFragment(combined);
      if (problem) problems.push(`${d.op} ${d.anchor}: pair unbalanced (${problem})`);
    } else if (d.html !== undefined) {
      const problem = balancedFragment(d.html);
      if (problem) problems.push(`${d.op} ${d.anchor}: html ${problem}`);
    }
  }
  return { code, problems };
}

// The intended structure = replay of the pack's current ops on the skeleton.
function replayPack(code) {
  const manifest = JSON.parse(read(`packs/${code}/manifest.json`));
  const shellBody = read("src/shell.html")
    .match(/<body[^>]*>([\s\S]*)<\/body>/i)[1]
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<script[\s\S]*?<\/script>/g, "");
  const engineOnlyIds = ["themeSelect", "packFallbackNote", "specFingerprint"];
  const engineOnlyClasses = ["theme-control"];
  const skeleton = [];
  let skipDepth = 0;
  for (const token of comparableTokens(tokenize(shellBody))) {
    if (skipDepth > 0) {
      if (token.t === "open" && !token.selfClose) skipDepth += 1;
      else if (token.t === "close") skipDepth -= 1;
      continue;
    }
    const id = token.attrs?.id;
    const classes = String(token.attrs?.class || "").split(/\s+/);
    if (token.t === "open" && (engineOnlyIds.includes(id) || engineOnlyClasses.some((c) => classes.includes(c)))) {
      skipDepth = 1;
      continue;
    }
    skeleton.push({ ...token, attrs: { ...(token.attrs || {}) } });
  }
  const { tokens, problems } = applyDecorations(skeleton, manifest.decorations || []);
  return { markup: tokensToMarkup(tokens), problems };
}

const args = process.argv.slice(2);
const list = args[0] && !args[0].startsWith("--") ? [args[0]] : codes;
const snapshot = args.includes("--snapshot");

let failed = false;
for (const code of list) {
  const { problems } = checkPack(code);
  const replay = replayPack(code);

  if (snapshot) {
    writeFileSync(`/tmp/balance-${code}.txt`, replay.markup);
    console.log(`[balance] ${code}: snapshot saved (${replay.markup.length} bytes)`);
    continue;
  }

  const snapshotPath = `/tmp/balance-${code}.txt`;
  const hasSnapshot = existsSync(snapshotPath);
  const matches = hasSnapshot && readFileSync(snapshotPath, "utf8") === replay.markup;

  const allProblems = [...problems, ...replay.problems.map((p) => `replay: ${p}`)];
  if (allProblems.length || (hasSnapshot && !matches)) {
    failed = true;
    console.log(`[balance] ${code}: FAIL`);
    for (const p of allProblems) console.log(`    ${p}`);
    if (hasSnapshot && !matches) console.log(`    replay differs from snapshot`);
  } else {
    const note = hasSnapshot ? "balanced + replay matches snapshot" : "balanced";
    console.log(`[balance] ${code}: OK (${note})`);
  }
}

process.exit(failed ? 1 : 0);
