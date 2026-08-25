/*!
 * Round-1 corrections verification.
 * Checks that every non-English spec.<code>.js has a spec.<code>-corrections-1.md
 * that exists, is non-trivial, follows the agreed format, and reports severity
 * counts. Usage: node scripts/.verify-corrections.mjs
 */
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const HERE = join(dirname(fileURLToPath(import.meta.url)), "..", "site", "translations");
const NOTES = join(dirname(fileURLToPath(import.meta.url)), "..", "archive", "translation-notes");

const codes = readdirSync(HERE)
  .map((n) => /^spec\.([A-Za-z-]+)\.js$/.exec(n))
  .filter(Boolean)
  .map((m) => m[1])
  .filter((c) => c !== "en")
  .sort();

const problems = [];
const rows = [];

for (const code of codes) {
  const file = join(NOTES, `spec.${code}-corrections-1.md`);
  let text;
  try {
    text = readFileSync(file, "utf8");
  } catch {
    problems.push(`${code}: MISSING ${file}`);
    continue;
  }
  const ok = [];
  if (!text.includes("Round 1 correction suggestions")) ok.push("missing 'Round 1 correction suggestions' heading");
  if (!text.includes("- **Count:**")) ok.push("missing Count line");
  if (!text.includes("## Corrections")) ok.push("missing ## Corrections section");
  const h = (text.match(/Severity:\s*HIGH/g) || []).length;
  const m = (text.match(/Severity:\s*MEDIUM/g) || []).length;
  const l = (text.match(/Severity:\s*LOW/g) || []).length;
  if (h + m + l === 0) ok.push("no severity-tagged items");
  const sections = new Set();
  for (const mm of text.matchAll(/^### Section (\d+) —/gm)) sections.add(mm[1]);
  if (sections.size === 0 && h + m + l > 0) ok.push("no Section headings but has items (grouping problem)");
  rows.push({ code, h, m, l, ok });
  if (ok.length) problems.push(`${code}: ${ok.join("; ")}`);
}

console.log(`codes checked: ${codes.length}`);
let totalH = 0, totalM = 0, totalL = 0;
for (const r of rows) {
  totalH += r.h; totalM += r.m; totalL += r.l;
  console.log(`${r.code.padEnd(5)} H=${String(r.h).padStart(2)} M=${String(r.m).padStart(2)} L=${String(r.l).padStart(2)} ${r.ok.length ? "FORMAT: " + r.ok.join("; ") : "ok"}`);
}
console.log(`\nTOTALS: HIGH=${totalH} MEDIUM=${totalM} LOW=${totalL}`);
console.log(`files present: ${rows.length}/${codes.length}`);
if (problems.length) {
  console.log(`\nPROBLEMS:\n${problems.join("\n")}`);
  process.exit(1);
}
