/*!
 * +AI Specification — translation structural validator
 *
 * Usage:  node scripts/validate.mjs [code ...]
 *
 * Checks every spec.<code>.js against spec.en.js for the load-bearing
 * invariants listed in TRANSLATIONS.md ("What must not change"). This is a
 * STRUCTURAL validator: it cannot judge translation quality, only that a file
 * parses, registers, and preserves the machinery the page depends on.
 *
 * Exit code 0 = no errors. 1 = at least one error.
 */
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const HERE = join(dirname(fileURLToPath(import.meta.url)), "..", "site", "translations");

/* ------------------------------------------------------------------ loading */

function loadSpec(code) {
  const file = join(HERE, `spec.${code}.js`);
  const source = readFileSync(file, "utf8");
  const captured = [];
  const registry = {
    register(registeredCode, payload) {
      captured.push({ registeredCode, payload });
    }
  };
  const sandbox = { window: { PlusAISpecTranslations: registry } };
  // Throws on a syntax error, which is exactly what we want to surface.
  vm.runInNewContext(source, vm.createContext(sandbox), { filename: file });
  return { file, source, captured };
}

/* ------------------------------------------------------------- HTML helpers */

// Sequence of structurally significant tags, including the attributes the page
// keys off. Whitespace and text content are ignored.
function tagSignature(html) {
  const out = [];
  const re = /<(\/?)([a-zA-Z][a-zA-Z0-9]*)((?:\s+[^>]*?)?)\s*(\/?)>/g;
  let m;
  while ((m = re.exec(html)) !== null) {
    const [, closing, rawName, rawAttrs, selfClose] = m;
    const name = rawName.toLowerCase();
    if (closing) {
      out.push(`/${name}`);
      continue;
    }
    const attrs = [];
    const cls = /\bclass\s*=\s*"([^"]*)"/.exec(rawAttrs);
    if (cls) attrs.push(`class=${cls[1].trim()}`);
    for (const dm of rawAttrs.matchAll(/\bdata-[a-z-]+/g)) attrs.push(dm[0]);
    attrs.sort();
    out.push(name + (attrs.length ? `[${attrs.join(",")}]` : "") + (selfClose ? "/" : ""));
  }
  return out;
}

const VOID_TAGS = new Set(["br", "hr", "img", "input", "meta", "link", "wbr"]);

function nestingErrors(html) {
  const errs = [];
  const stack = [];
  for (const token of tagSignature(html)) {
    if (token.endsWith("/")) continue;
    if (token.startsWith("/")) {
      const name = token.slice(1);
      if (VOID_TAGS.has(name)) {
        errs.push(`stray closing </${name}>`);
        continue;
      }
      const top = stack.pop();
      if (top !== name) {
        errs.push(`closing </${name}> does not match ${top ? `<${top}>` : "an open tag"}`);
      }
    } else {
      const name = token.split("[")[0];
      if (!VOID_TAGS.has(name)) stack.push(name);
    }
  }
  for (const left of stack) errs.push(`unclosed <${left}>`);
  return errs;
}

function count(haystack, needle) {
  if (!needle) return 0;
  let n = 0;
  let i = 0;
  for (;;) {
    const at = haystack.indexOf(needle, i);
    if (at === -1) return n;
    n += 1;
    i = at + needle.length;
  }
}

/* --------------------------------------------------------------- invariants */

// Must appear, byte for byte, in the section that carries them.
const LITERAL_ANCHORS = {
  4: ["<code>+Ai</code>", "<code>+aI</code>", "<code>+ ai</code>", "<code>AI+</code>", "<code>AI assisted</code>"],
  5: ["<h4>5.1", "<h4>5.2", "<h4>5.3", "<h4>5.4", "<h4>5.5", "<h4>5.6"],
  17: ['"provenance": "+AI"', '"ai_assistance"', '"material": true', '"responsibility": "human"', '"responsible_party": "Eric Mourant"', '"notation": "+AI"']
};

// Counted per section against English.
const COUNTED_TOKENS = ["data-company-example", "data-json-example", "Eric Mourant", "JAPER Technology", "+AI"];

// Bidi control characters: banned outright (TRANSLATIONS.md, RTL section).
const BIDI = /[\u200e\u200f\u202a-\u202e\u2066-\u2069]/;

// Casing/spacing corruptions of the mark. `+ ai` and `AI+` are legitimate only
// inside the section 4 counter-example list.
function markErrors(body, sectionNumber) {
  const errs = [];
  const stripped = sectionNumber === "4"
    ? LITERAL_ANCHORS[4].reduce((acc, lit) => acc.split(lit).join(""), body)
    : body;
  for (const bad of ["+Ai", "+aI", "+ AI", "+ ai", "＋AI", "+AL"]) {
    if (stripped.includes(bad)) errs.push(`contains non-canonical mark variant "${bad}"`);
  }
  return errs;
}

/* ------------------------------------------------------------------- driver */

function analyse(code, english) {
  const errors = [];
  const warnings = [];

  let loaded;
  try {
    loaded = loadSpec(code);
  } catch (err) {
    return { code, status: "PARSE FAIL", errors: [`does not parse/run: ${err.message}`], warnings };
  }

  const { source, captured } = loaded;

  if (captured.length !== 1) {
    errors.push(`register() called ${captured.length} times; expected exactly 1`);
    return { code, status: "BROKEN", errors, warnings };
  }
  const { registeredCode, payload } = captured[0];
  if (registeredCode !== code) {
    errors.push(`registers code "${registeredCode}" but the filename says "${code}"`);
  }

  const sections = Array.isArray(payload.sections) ? payload.sections : [];
  const declared = payload.status;

  if (declared !== "reviewed") {
    // A stub is structurally valid by design; report and stop.
    if (sections.length > 0) {
      warnings.push(`status "${declared}" but ships ${sections.length} sections (renders English fallback)`);
    }
    return { code, status: "STUB", errors, warnings, sectionCount: sections.length };
  }

  if (sections.length !== english.sections.length) {
    errors.push(`has ${sections.length} sections; English has ${english.sections.length}`);
  }

  // `body` values are template literals. An unescaped ${ interpolates at parse
  // time instead of reaching the page, so it must be written \${.
  for (const m of source.matchAll(/\$\{/g)) {
    if (source[m.index - 1] !== "\\") {
      const line = source.slice(0, m.index).split("\n").length;
      errors.push(`line ${line}: unescaped "\${" inside a template literal (write "\\\${")`);
    }
  }

  const byNumber = new Map();
  sections.forEach((section, index) => {
    const expected = String(index + 1);
    const got = String(section && section.number);
    if (got !== expected) errors.push(`section at index ${index} is numbered "${got}"; expected "${expected}"`);
    if (!section || typeof section.title !== "string" || section.title.trim() === "") {
      errors.push(`section "${got}" has an empty title`);
    } else if (/[<>]/.test(section.title)) {
      // Titles are injected with innerHTML into a <span>; markup would break out.
      errors.push(`section "${got}" title contains markup characters (< or >)`);
    }
    if (!section || typeof section.body !== "string" || section.body.trim() === "") {
      errors.push(`section "${got}" has an empty body`);
    }
    if (section) byNumber.set(got, section);
  });

  if (BIDI.test(source)) errors.push("contains Unicode bidi control characters (banned)");

  for (const eng of english.sections) {
    const section = byNumber.get(eng.number);
    if (!section || typeof section.body !== "string") continue;
    const body = section.body;
    const where = `section ${eng.number}`;

    for (const err of markErrors(body, eng.number)) errors.push(`${where}: ${err}`);

    for (const err of nestingErrors(body)) errors.push(`${where}: malformed HTML — ${err}`);

    const engSig = tagSignature(eng.body).join(" ");
    const gotSig = tagSignature(body).join(" ");
    if (engSig !== gotSig) {
      const engTags = tagSignature(eng.body);
      const gotTags = tagSignature(body);
      let at = 0;
      while (at < engTags.length && engTags[at] === gotTags[at]) at += 1;
      errors.push(
        `${where}: HTML structure differs from English at tag ${at + 1} ` +
        `(English "${engTags[at] ?? "<end>"}" vs "${gotTags[at] ?? "<end>"}"; ` +
        `${engTags.length} vs ${gotTags.length} tags)`
      );
    }

    for (const token of COUNTED_TOKENS) {
      const want = count(eng.body, token);
      const got = count(body, token);
      if (want !== got) errors.push(`${where}: "${token}" appears ${got}x; English has ${want}x`);
    }

    for (const literal of LITERAL_ANCHORS[Number(eng.number)] ?? []) {
      if (!body.includes(literal)) errors.push(`${where}: missing required literal ${JSON.stringify(literal)}`);
    }

    if (code !== "en" && body.trim() === eng.body.trim()) {
      warnings.push(`${where}: body is identical to English (untranslated?)`);
    }
  }

  if (code !== "en") {
    if (payload.end === null || payload.end === undefined) {
      warnings.push("end is null (inherits the English closing panel)");
    } else if (typeof payload.end === "string") {
      if (!payload.end.includes("+AI")) errors.push("end does not contain the mark +AI");
      const engEndTags = tagSignature(english.end).join(" ");
      if (tagSignature(payload.end).join(" ") !== engEndTags) {
        warnings.push("end HTML structure differs from English");
      }
    }
  }

  return {
    code,
    status: errors.length ? "FAIL" : "OK",
    errors,
    warnings,
    sectionCount: sections.length
  };
}

/* ---------------------------------------------------------------- execution */

const englishLoad = loadSpec("en");
const english = englishLoad.captured[0].payload;

const available = readdirSync(HERE)
  .map((name) => /^spec\.([A-Za-z-]+)\.js$/.exec(name))
  .filter(Boolean)
  .map((m) => m[1])
  .sort();

const requested = process.argv.slice(2);
const codes = requested.length ? requested : available;

let failed = 0;
let stubs = 0;
let ok = 0;
const lines = [];

for (const code of codes) {
  const result = analyse(code, english);
  if (result.status === "OK") ok += 1;
  else if (result.status === "STUB") stubs += 1;
  else failed += 1;

  const label = `${result.status.padEnd(10)} ${code.padEnd(4)}`;
  const detail = result.sectionCount !== undefined ? `${result.sectionCount} sections` : "";
  lines.push(`${label} ${detail}`);
  for (const err of result.errors) lines.push(`    ERROR   ${err}`);
  for (const warn of result.warnings) lines.push(`    warn    ${warn}`);
}

console.log(lines.join("\n"));
console.log(
  `\n${codes.length} file(s): ${ok} ok, ${stubs} stub(s), ${failed} failing.`
);
process.exit(failed ? 1 : 0);
