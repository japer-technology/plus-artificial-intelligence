#!/usr/bin/env node
/*!
 * +AI — local link checker
 *
 * Usage:  node scripts/check-links.mjs
 *
 * Verifies every local href/src attribute in site/*.html resolves to a file
 * inside site/, and that dynamic "*.html" gallery strings (toolkit.html,
 * random.html) point at real pages. Remote URLs (http/https/mailto/data),
 * fragment-only links and query-only links are ignored.
 *
 * Exit 0 = all local references resolve. Exit 1 = something is broken.
 */
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = join(dirname(fileURLToPath(import.meta.url)), "..", "site");
const SKIP = /^(https?:|mailto:|data:|javascript:|tel:|about:|#|\/)/;
const failures = [];

const pages = readdirSync(SITE).filter((f) => f.endsWith(".html"));

for (const name of pages) {
  const file = join(SITE, name);
  const html = readFileSync(file, "utf8");

  // Static attributes: href / src.
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = m[1];
    if (SKIP.test(url) || /['+${}]/.test(url)) continue; // dynamic JS-built attributes
    const path = url.split(/[?#]/)[0];
    if (!path) continue;
    const target = resolve(dirname(file), path);
    if (!existsSync(target)) failures.push(`${name}: "${url}" → missing ${path}`);
  }

  // Dynamic galleries: "*.html" string literals (toolkit/random THEMES arrays).
  for (const m of html.matchAll(/"([a-z0-9-]+\.html)"/g)) {
    if (!existsSync(join(SITE, m[1]))) {
      failures.push(`${name}: gallery string "${m[1]}" has no matching page`);
    }
  }
}

if (failures.length) {
  for (const f of failures) console.log(`FAIL  ${f}`);
  console.log(`\n${failures.length} broken reference(s).`);
  process.exit(1);
}
console.log(`Checked ${pages.length} pages: all local links and gallery references resolve.`);
