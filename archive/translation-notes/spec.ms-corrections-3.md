# spec.ms.js — Round 3 final correction recommendations

- **Language:** Bahasa Melayu (ms)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.ms-corrections-2.md` (0 high / 0 medium / 5 low) — status of each item verified against the current file
- **Verdict:** Translation is clean and internally consistent; all five round-2 items have been applied, and no new defects were found.
- **Count:** 0 high / 0 medium / 0 low

## Corrections

No corrections identified.

## Round 2 verification

- [x] "accountability" terminology split (chrome vs body) — applied: `meaningThreeBody`, `plainTitle` and `plainLead` now use `kebertanggungjawaban`, matching the body/`end`; no remaining `akauntabiliti`.
- [x] "materially" rendered loosely in chrome — applied: `description`, `heroLead`, `meaningOneBody`, `plainBody` now use `secara material`, matching the body.
- [x] Sections 5.4 and 26 — "deploy" rendered as "use" — applied: 5.4 uses `ditempatkan`; 26 uses `menempatkan`.
- [x] Section 14 — code-example strings left in English — applied: now `Pengarang: Eric Mourant +AI` and `Projek ini menggunakan +AI.`.
- [x] Section 7 — "substantially generated" rendered "mostly generated" — applied: now `dijana secara material oleh AI`.

## Notes

- All five normative terms are rendered consistently across all 26 sections and the chrome, matching the file-header mapping table: MUST → `MESTI`, MUST NOT → `TIDAK BOLEH`, SHOULD → `SEPATUTNYA`, SHOULD NOT → `TIDAK SEPATUTNYA`, MAY → `BOLEH`. Section 3 keeps the English term in parentheses at first definition, with definitions matching the master (absolute requirement / absolute prohibition / strong recommendation / normally avoided / optional).
- Load-bearing invariants verified byte-identical: `+AI` everywhere; Section 4 counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted` unchanged; Section 17 JSON keys and values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`) unchanged; `data-company-example` / `data-json-example` attributes preserved; sections 1–26 numbered and ordered correctly; h4 labels 5.1–5.6 present; example names `Eric Mourant` and `JAPER Technology` spelled exactly.
- Slogan `AI membantu. Saya bertanggungjawab.` is byte-identical in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, Section 1, Section 23, Section 26 and `end`; `heroLead`'s `<strong>` segment uses matching wording (`membantu secara material … menerima tanggungjawab`).
- HTML structure matches English throughout (same `<p>`, `<strong>`, `<code>`, `<ol>`, `<ul>`, `<li>`, `<h4>`, `<blockquote>`, `<pre>` nesting and `class="canonical"`); only text content is translated. Section 6 (17 items) and Section 8 (17 items) lists are complete — the brief's "21"/"17" item counts reflect the actual 17-item lists, all present. Section 24 keeps "both questions" (`kedua-dua soalan`) and "yes" (`ya`); Section 26 keeps accept/publish/transmit/deploy/otherwise release and "that decision" (`keputusan itu`); Section 9 keeps "word-by-word or element-by-element" (`perkataan demi perkataan atau unsur demi unsur`) and "meaningful human act of adoption" (`tindakan penerimaan oleh manusia yang bermakna`). No dropped clauses, no added claims, no leftover untranslated prose, no unescaped backticks or `${`.
- Accepted no-change observation carried from round 2: `plainTitle` renders "Visible accountability" as `Kebertanggungjawaban yang jelas.` ("clear" rather than "visible"/`kelihatan`). It does not change meaning; left as-is.
- Possible wording nuance, flagged only because my Malay knowledge is limited rather than as a finding: "represent" is rendered `mewakilkan` (5.6) / `diwakilkan` (9), which in Malay leans toward "delegate/act on behalf of". In 5.6 ("release, use or represent the artifact") and 9 ("represented using +AI") a more literal sense would be "present/put forward" (`mempersembahkan`) or "mark/denote" (`menandakan`). I do not treat this as a defect — it does not clearly change meaning, and a native speaker should decide.
- Cosmetic note: the `end` string reorders "Human-AI Provenance and Accountability" to `Asal Usul dan Kebertanggungjawaban Manusia-AI` (the "Human-AI" compound moves to the end); all elements are present, so it is not a finding.
- Worth a final native-speaker read of sections 3, 5.6, 7, 9 and 26 per TRANSLATIONS.md before treating this as final.
