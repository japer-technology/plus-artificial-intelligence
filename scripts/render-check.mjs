/*!
 * +AI Specification — render smoke test
 *
 * Usage:  node scripts/render-check.mjs
 *
 * validate.mjs checks the data. This script checks the *page* actually consumes
 * it: it replays what site/index.html does at load time, without a browser.
 *
 *  1. Loads registry.js in a window-like sandbox, then every spec.<code>.js in
 *     the exact order the page's <script> tags load them.
 *  2. Asserts registry.problems() is empty — the registry silently downgrades a
 *     "reviewed" file that ships no sections, and warns on duplicates.
 *  3. Asserts every language in supportedLanguages resolves to reviewed
 *     sections, so no language still falls back to English.
 *  4. Replays personalizeExamples(): checks the runtime substitution of
 *     Eric Mourant / JAPER Technology reaches text nodes, that the
 *     data-json-example block escapes names as JSON, and that stripping
 *     data-company-example elements does not orphan a heading or leave a
 *     dangling "Example:" label.
 *  5. Confirms each section's rendered HTML has balanced tags after the
 *     h3 + body concatenation the page performs.
 *
 * Exit 0 = the page will render every language. Exit 1 = it will not.
 */
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const HERE = dirname(fileURLToPath(import.meta.url));
const PAGE = join(HERE, "..", "site", "index.html");

const page = readFileSync(PAGE, "utf8");

/* ---- read the page's own lists so this test cannot drift from the page ---- */

function extractArray(name) {
  const m = new RegExp(`const ${name} = \\[([\\s\\S]*?)\\];`).exec(page);
  if (!m) throw new Error(`could not find ${name} in site/index.html`);
  return [...m[1].matchAll(/"([a-z-]+)"/g)].map((x) => x[1]);
}

const supportedLanguages = extractArray("supportedLanguages");
const rtlLanguages = extractArray("RIGHT_TO_LEFT_LANGUAGES");

// The <script src> order the page uses.
const scriptOrder = [...page.matchAll(/<script src="translations\/(spec\.[a-z-]+\.js|registry\.js)">/g)]
  .map((m) => m[1]);

/* ------------------------- replay the page's loading ---------------------- */

const sandbox = { window: {}, console: { warn() {}, error() {} } };
const context = vm.createContext(sandbox);

for (const file of scriptOrder) {
  vm.runInNewContext(readFileSync(join(HERE, "..", "site", "translations", file), "utf8"), context, { filename: file });
}

const registry = sandbox.window.PlusAISpecTranslations;
const failures = [];
const notes = [];

if (!registry) {
  console.error("FATAL: registry.js did not attach window.PlusAISpecTranslations");
  process.exit(1);
}

if (scriptOrder[0] !== "registry.js") {
  failures.push("registry.js is not the first translation <script> in the page");
}

for (const problem of registry.problems()) {
  failures.push(`registry problem: ${problem}`);
}

/* ------------------- 3. every supported language is reviewed -------------- */

for (const code of supportedLanguages) {
  const entry = registry.get(code);
  if (!entry) {
    failures.push(`${code}: no translation registered, but it is in supportedLanguages`);
    continue;
  }
  if (entry.status !== "reviewed") {
    failures.push(`${code}: status "${entry.status}" — the page will show the English fallback notice`);
    continue;
  }
  if (entry.sections.length !== 26) {
    failures.push(`${code}: ${entry.sections.length} sections; expected 26`);
  }
  if (!scriptOrder.includes(`spec.${code}.js`)) {
    failures.push(`${code}: no <script src> tag in site/index.html`);
  }
  if (!entry.interfaceCopy || typeof entry.interfaceCopy !== "object") {
    // Spec-only languages are wired deliberately and fall back to English chrome.
    notes.push(`${code}: no interfaceCopy — interface chrome falls back to English`);
  } else if (!entry.interfaceCopy.documentTitle) {
    failures.push(`${code}: interfaceCopy present but missing documentTitle`);
  }
  if (!entry.untranslatedNotice || typeof entry.untranslatedNotice !== "object") {
    notes.push(`${code}: no untranslatedNotice — fallback notice falls back to English`);
  } else if (!entry.untranslatedNotice.badge) {
    failures.push(`${code}: untranslatedNotice present but missing badge`);
  }
  if (!entry.endonym) {
    notes.push(`${code}: no endonym — the fallback notice would show the code`);
  }
}

// A registered language the page never lists is dead weight worth reporting.
for (const code of registry.codes()) {
  if (!supportedLanguages.includes(code)) {
    notes.push(`${code}: registered but absent from supportedLanguages`);
  }
}

/* --------------- 4/5. replay rendering + personalisation ------------------ */

// Minimal stand-in for the page's personalizeExamples() text-node walk.
function personalise(html, { name, company }) {
  // Drop data-company-example elements when no company name is configured,
  // mirroring root.querySelectorAll("[data-company-example]").remove().
  let out = html;
  if (!company) {
    out = out.replace(/<(\w+)([^>]*\bdata-company-example\b[^>]*)>[\s\S]*?<\/\1>/g, "");
  }
  // Substitute inside text only (never inside a tag), and JSON-escape within
  // a data-json-example container.
  return out.replace(/(<pre data-json-example>[\s\S]*?<\/pre>)|(>)([^<]+)/g, (match, jsonBlock, gt, text) => {
    if (jsonBlock) {
      return jsonBlock.replace(/Eric Mourant|JAPER Technology/g, (hit) =>
        JSON.stringify(hit === "Eric Mourant" ? name : company || name).slice(1, -1));
    }
    return gt + text.replace(/Eric Mourant|JAPER Technology/g, (hit) =>
      hit === "Eric Mourant" ? name : company || name);
  });
}

function balanced(html) {
  const VOID = new Set(["br", "hr", "img", "input", "meta", "link", "wbr"]);
  const stack = [];
  for (const m of html.matchAll(/<(\/?)([a-zA-Z][a-zA-Z0-9]*)[^>]*?(\/?)>/g)) {
    const [, closing, rawName, selfClose] = m;
    const name = rawName.toLowerCase();
    if (selfClose || VOID.has(name)) continue;
    if (closing) {
      if (stack.pop() !== name) return false;
    } else {
      stack.push(name);
    }
  }
  return stack.length === 0;
}

const personas = [
  { label: "defaults", name: "Eric Mourant", company: "JAPER Technology" },
  { label: "no company", name: "Eric Mourant", company: "" },
  // A name with characters that must survive JSON escaping in section 17.
  { label: 'quoted name', name: 'A "Q" \\ Name', company: "" }
];

for (const code of supportedLanguages) {
  const entry = registry.get(code);
  if (!entry || entry.status !== "reviewed") continue;

  for (const section of entry.sections) {
    // Exactly the concatenation renderSpecification() assigns to innerHTML.
    const rendered = `
          <h3>
            <span class="section-number" aria-hidden="true">${section.number.padStart(2, "0")}</span>
            <span>${section.title}</span>
          </h3>
          ${section.body}`;

    if (!balanced(rendered)) {
      failures.push(`${code} section ${section.number}: rendered HTML is not balanced`);
    }

    for (const persona of personas) {
      const out = personalise(rendered, persona);

      if (/Eric Mourant|JAPER Technology/.test(out) && persona.name !== "Eric Mourant") {
        failures.push(`${code} section ${section.number} [${persona.label}]: example name not substituted`);
      }
      if (!persona.company && /data-company-example/.test(out)) {
        failures.push(`${code} section ${section.number} [${persona.label}]: data-company-example element survived removal`);
      }
      // Section 17's JSON must stay parseable after substitution.
      if (section.number === "17") {
        for (const block of out.matchAll(/<pre[^>]*><code>([\s\S]*?)<\/code><\/pre>/g)) {
          const json = block[1].replace(/&quot;/g, '"').replace(/&amp;/g, "&");
          try {
            JSON.parse(json);
          } catch (err) {
            failures.push(`${code} section 17 [${persona.label}]: JSON example does not parse — ${err.message}`);
          }
        }
      }
    }
  }

  // Sections 11/13 keep company examples; with no company configured the
  // remaining prose must not be left dangling with an empty example label.
  const stripped = personalise(entry.sections.map((s) => s.body).join(""), personas[1]);
  if (/<p><strong>\s*<\/strong><\/p>/.test(stripped)) {
    failures.push(`${code}: an example label is left empty after company removal`);
  }
}

/* ---------------------- direction sanity for RTL scripts ------------------ */

const RTL_RANGE = /[\u0590-\u05ff\u0600-\u06ff\u0700-\u074f]/;
for (const code of supportedLanguages) {
  const entry = registry.get(code);
  if (!entry || entry.status !== "reviewed") continue;
  const text = entry.sections.map((s) => s.body).join("").replace(/<[^>]*>/g, "");
  const hasRtl = RTL_RANGE.test(text);
  if (rtlLanguages.includes(code) && !hasRtl) {
    failures.push(`${code}: listed as RTL but the body contains no RTL script`);
  }
  if (!rtlLanguages.includes(code) && hasRtl) {
    notes.push(`${code}: contains RTL characters but is not in RIGHT_TO_LEFT_LANGUAGES`);
  }
}

/* --------------------------------- report -------------------------------- */

console.log(`page lists ${supportedLanguages.length} languages; ${scriptOrder.length - 1} spec <script> tags found`);
console.log(`registry loaded ${registry.codes().length} entries, ${registry.reviewedCodes().length} reviewed\n`);

for (const note of notes) console.log(`note  ${note}`);
for (const failure of failures) console.log(`FAIL  ${failure}`);

if (!failures.length) {
  console.log(`\nAll ${supportedLanguages.length} languages render: 26 sections each, examples personalise, section 17 JSON parses.`);
}
process.exit(failures.length ? 1 : 0);
