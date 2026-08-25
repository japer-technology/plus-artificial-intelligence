/*!
 * +AI Specification — cross-language translation audit
 *
 * Usage:  node scripts/audit.mjs
 *
 * Complements validate.mjs. Where the validator checks that a file parses and
 * preserves HTML/token machinery, this audit looks for *translation* defects
 * that are still detectable mechanically:
 *
 *  1. English normative terms (MUST / SHOULD / MAY …) leaking outside their
 *     section 3 parenthetical definition — a sign of untranslated fragments.
 *  2. Untranslated English prose left behind in a body.
 *  3. The canonical slogan not reused a consistent number of times (English
 *     carries it in sections 1, 23, 26 and `end`).
 *  4. Protected-token totals drifting from English across the whole file.
 *
 * Findings are reported as WARN, not ERROR: each needs human judgement. A
 * language whose grammar legitimately triggers one of these is possible.
 */
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const HERE = join(dirname(fileURLToPath(import.meta.url)), "..", "site", "translations");

function load(code) {
  const captured = [];
  const sandbox = { window: { PlusAISpecTranslations: { register: (c, p) => captured.push({ c, p }) } } };
  vm.runInNewContext(readFileSync(join(HERE, `spec.${code}.js`), "utf8"), vm.createContext(sandbox));
  return captured[0]?.p ?? null;
}

// Strip the protected tokens that legitimately contain Latin/English text, so
// what remains should be target-language prose only.
const PROTECTED = [
  "Eric Mourant", "JAPER Technology", "AI assisted", "+Ai", "+aI", "+ ai", "AI+", "+AI",
  "provenance", "ai_assistance", "material", "responsibility", "responsible_party", "notation",
  "human", "true", "data-company-example", "data-json-example"
];

function stripProtected(text) {
  let out = text;
  for (const token of PROTECTED) out = out.split(token).join(" ");
  // Drop tags, entities, and the contents of <pre>/<code> (wire format).
  out = out.replace(/<pre[\s\S]*?<\/pre>/g, " ").replace(/<code>[\s\S]*?<\/code>/g, " ");
  out = out.replace(/<[^>]*>/g, " ").replace(/&[a-z]+;/g, " ");
  return out;
}

// Normative terms as standalone uppercase words.
const NORMATIVE = /\b(MUST NOT|MUST|SHOULD NOT|SHOULD|MAY)\b/g;

// Common English function words: a run of these suggests untranslated prose.
const EN_WORDS = new Set(
  ("the of and to a in that is for it as be this an or which by are with not from " +
   "any where such has have been where its their party artifact").split(" ")
);

function englishRuns(text) {
  const runs = [];
  const words = text.toLowerCase().match(/[a-z']+/g) ?? [];
  let run = [];
  for (const word of words) {
    if (EN_WORDS.has(word)) run.push(word);
    else {
      if (run.length >= 4) runs.push(run.join(" "));
      run = [];
    }
  }
  if (run.length >= 4) runs.push(run.join(" "));
  return runs;
}

function count(haystack, needle) {
  let n = 0, i = 0;
  for (;;) {
    const at = haystack.indexOf(needle, i);
    if (at === -1) return n;
    n += 1; i = at + needle.length;
  }
}

const english = load("en");
const engAll = english.sections.map((s) => s.body).join("\n") + "\n" + english.end;

const codes = readdirSync(HERE)
  .map((n) => /^spec\.([a-z-]+)\.js$/.exec(n))
  .filter(Boolean).map((m) => m[1]).sort();

let flagged = 0;
const report = [];

for (const code of codes) {
  if (code === "en") continue;
  const payload = load(code);
  if (!payload || payload.status !== "reviewed" || !payload.sections?.length) continue;

  const findings = [];
  const all = payload.sections.map((s) => s.body).join("\n") + "\n" + (payload.end ?? "");

  // 1. Normative-term leakage outside section 3.
  for (const section of payload.sections) {
    if (section.number === "3") continue;
    const stripped = stripProtected(section.body);
    const hits = [...stripped.matchAll(NORMATIVE)].map((m) => m[1]);
    if (hits.length) {
      findings.push(`section ${section.number}: English normative term(s) outside section 3: ${[...new Set(hits)].join(", ")}`);
    }
  }

  // Section 3 should define all five, in parentheses.
  const s3 = payload.sections.find((s) => s.number === "3");
  if (s3) {
    for (const term of ["MUST NOT", "MUST", "SHOULD NOT", "SHOULD", "MAY"]) {
      if (!s3.body.includes(`(${term})`)) {
        findings.push(`section 3: missing "(${term})" parenthetical for the English term`);
      }
    }
  }

  // 2. Untranslated English prose.
  for (const section of payload.sections) {
    for (const run of englishRuns(stripProtected(section.body))) {
      findings.push(`section ${section.number}: possible untranslated English — "${run}"`);
    }
  }

  // 3. Slogan reuse. English: "AI helped. I take responsibility." x4.
  //    Detect the target-language slogan from its section 1 <p class="canonical">.
  const s1 = payload.sections.find((s) => s.number === "1");
  const slogan = /<p class="canonical">([^<]+)<\/p>\s*$/.exec(s1?.body ?? "")?.[1]?.trim();
  if (slogan) {
    const times = count(all, slogan);
    if (times !== 4) {
      findings.push(`canonical slogan "${slogan}" appears ${times}x across sections+end; English pattern is 4x`);
    }
  } else {
    findings.push('could not locate the canonical slogan in section 1 (expected a trailing <p class="canonical">)');
  }

  // 4. Whole-file protected-token totals.
  for (const token of ["+AI", "Eric Mourant", "JAPER Technology", "data-company-example", "data-json-example"]) {
    const want = count(engAll, token);
    const got = count(all, token);
    if (want !== got) findings.push(`token "${token}" appears ${got}x file-wide; English has ${want}x`);
  }

  if (findings.length) {
    flagged += 1;
    report.push(`\n${code}: ${findings.length} finding(s)`);
    for (const f of findings) report.push(`    WARN  ${f}`);
  } else {
    report.push(`clean  ${code}`);
  }
}

console.log(report.join("\n"));
console.log(`\n${flagged} language(s) with findings.`);
