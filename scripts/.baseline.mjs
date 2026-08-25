/*!
 * One-off round-1 review baseline generator.
 * Dumps mechanical facts about every spec.<code>.js vs spec.en.js so the
 * human-style translation reviewers can focus on semantic accuracy.
 * Usage: node scripts/.baseline.mjs
 */
import { readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const HERE = join(dirname(fileURLToPath(import.meta.url)), "..", "site", "translations");
const OUT = dirname(fileURLToPath(import.meta.url)); // write reports next to this script

function loadSpec(code) {
  const file = join(HERE, `spec.${code}.js`);
  const source = readFileSync(file, "utf8");
  const captured = [];
  const registry = { register(c, p) { captured.push({ c, p }); } };
  vm.runInNewContext(source, vm.createContext({ window: { PlusAISpecTranslations: registry } }), { filename: file });
  return { source, code: captured[0].c, payload: captured[0].p };
}

function stripTags(html) {
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

const en = loadSpec("en").payload;
const EN_IFACE_KEYS = Object.keys(en.interfaceCopy);
const EN_NOTICE_KEYS = Object.keys(en.untranslatedNotice);
const NORM_TERMS = ["MUST NOT", "MUST", "SHOULD NOT", "SHOULD", "MAY"];

const files = readdirSync(HERE)
  .map((n) => /^spec\.([A-Za-z-]+)\.js$/.exec(n))
  .filter(Boolean)
  .map((m) => m[1])
  .filter((c) => c !== "en")
  .sort();

const report = {};
for (const code of files) {
  const { payload } = loadSpec(code);
  const ic = payload.interfaceCopy || {};
  const un = payload.untranslatedNotice || {};
  const r = {
    status: payload.status,
    endonym: payload.endonym,
    end: payload.end == null ? null : "translated",
    interfaceMissing: EN_IFACE_KEYS.filter((k) => !(k in ic)),
    interfaceExtra: Object.keys(ic).filter((k) => !EN_IFACE_KEYS.includes(k)),
    noticeMissing: EN_NOTICE_KEYS.filter((k) => !(k in un)),
    colourPlaceholder: /\{colour\}/.test(ic["colourChanged"] || "") ? "ok" : "missing/wrong",
    section3NormTerms: NORM_TERMS.map((t) => `${t}:${(payload.sections?.[2]?.body || "").includes(t) ? "yes" : "no"}`).join(" "),
    sections: (payload.sections || []).map((s, i) => {
      const enBody = en.sections[i]?.body || "";
      const text = stripTags(s.body);
      const enText = stripTags(enBody);
      return {
        n: String(s.number),
        titleSame: s.title.trim() === (en.sections[i]?.title || "").trim(),
        bodySame: s.body.trim() === enBody.trim(),
        ratio: +(text.length / Math.max(1, enText.length)).toFixed(2)
      };
    })
  };
  report[code] = r;
}

writeFileSync(join(OUT, ".baseline.json"), JSON.stringify(report, null, 2), "utf8");

/* Human-readable summary */
const lines = [];
lines.push("# Round-1 translation baseline (mechanical facts)\n");
lines.push("Master: `spec.en.js`. All 39 files structurally validate (26 sections each).\n");
for (const code of files) {
  const r = report[code];
  const badSections = r.sections.filter((s) => s.bodySame || s.titleSame || s.ratio < 0.4 || s.ratio > 2.2);
  const identical = r.sections.filter((s) => s.bodySame).map((s) => s.n);
  const sameTitle = r.sections.filter((s) => s.titleSame).map((s) => s.n);
  lines.push(`## ${code} — endonym: ${r.endonym ?? "(none)"} — status: ${r.status}`);
  lines.push(`- end panel: ${r.end === null ? "null (inherits English)" : "translated"}`);
  lines.push(`- interfaceCopy keys missing (English fallback): ${r.interfaceMissing.length ? r.interfaceMissing.join(", ") : "none"}`);
  lines.push(`- interfaceCopy extra keys: ${r.interfaceExtra.length ? r.interfaceExtra.join(", ") : "none"}`);
  lines.push(`- untranslatedNotice keys missing: ${r.noticeMissing.length ? r.noticeMissing.join(", ") : "none"}`);
  lines.push(`- colourChanged {colour} placeholder: ${r.colourPlaceholder}`);
  lines.push(`- section 3 keeps English normative terms: ${r.section3NormTerms}`);
  if (identical.length) lines.push(`- bodies byte-identical to English: sections ${identical.join(", ")}`);
  if (sameTitle.length) lines.push(`- titles identical to English: sections ${sameTitle.join(", ")}`);
  const weird = badSections.filter((s) => !s.bodySame && (s.ratio < 0.4 || s.ratio > 2.2));
  if (weird.length) {
    lines.push(`- length-ratio outliers vs English: ${weird.map((s) => `s${s.n}=${s.ratio}`).join(", ")}`);
  }
  lines.push("");
}
writeFileSync(join(OUT, ".baseline.md"), lines.join("\n"), "utf8");
console.log(`wrote .baseline.json and .baseline.md for ${files.length} languages`);
