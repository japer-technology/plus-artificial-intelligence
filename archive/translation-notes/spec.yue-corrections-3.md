# spec.yue.js — Round 3 final correction recommendations

- **Language:** 粵語 (yue)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.yue-corrections-2.md` (0 high / 0 medium / 4 low) — all 4 items verified as applied against the current file
- **Verdict:** Faithful and complete translation; every clause, list item, normative term and HTML structure checks out, all four round-2 findings have been fixed, and the round-3 register item has now been applied to the file.
- **Count:** 0 high / 0 medium / 1 low

## Corrections

### Section 4 — Mandarin plural marker 「們」 in a Cantonese-register text
- **Location:** `sections[4].body`, final paragraph (the "Variants MAY later be defined…" sentence)
- **Current:** `本規範日後嘅擴充可以定義其他變體，但除咗經明確定義之外，不得推定佢們帶有<code>+AI</code>嘅規範含義。`
- **English:** `Variants MAY later be defined by extensions to this specification, but they MUST NOT be assumed to carry the canonical <code>+AI</code> meaning unless explicitly defined.`
- **Issue:** `佢們` mixes the Cantonese third-person pronoun `佢` with the Mandarin plural marker `們`. The file's own header comment declares a written-Cantonese register, and the same plural "they" is rendered `佢哋` elsewhere (e.g. `interfaceCopy.heroLead`). `佢們` is not a written-Cantonese form and is internally inconsistent.
- **Suggested:** `本規範日後嘅擴充可以定義其他變體，但除咗經明確定義之外，不得推定佢哋帶有<code>+AI</code>嘅規範含義。`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.yue.js

## Round 2 verification

- [x] applied — `interfaceCopy.markLabel` `標準標記` → now `規範標記` (line 56).
- [x] applied — `interfaceCopy.plainBody` `…企喺使用佢嘅決定背後。` → now `…企喺使用 AI 嘅決定背後。` (line 49).
- [x] applied — Section 20 title `中立` → now `中立性` (line 334).
- [x] applied — Section 7 `責任方可以發布主要由人工智能生成嘅內容。` → now `…實質上由人工智能生成嘅內容。` (line 179).

## Notes

- Canonical slogan `AI 幫過手。責任由我承擔。` is byte-identical in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, section 1 body, section 23 body, section 26 body, and the `end` string; the `heroLead` `<strong>` segment uses matching wording (`實質上幫過` / `接受…責任`).
- Section 3 defines `必須 (MUST)` / `不得 (MUST NOT)` / `應該 (SHOULD)` / `不應該 (SHOULD NOT)` / `可以 (MAY)` with correct definitions, and the header comment's mapping table matches actual usage across all 26 sections and the chrome (verified per-section: no drift).
- Load-bearing invariants all byte-identical: `+AI` casing/spacing, Section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`), Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`), `data-company-example` / `data-json-example` attributes, example names, section numbering 1–26 and `h4` labels 5.1–5.6.
- Item counts verified: Section 6 has 17 list items (the task prompt said 21, but the master actually contains 17; all 17 present), Section 8 has 17, Section 19 has 6, Section 21 has 4, Section 25 has 9 — all matched.
- Section 5.4 keeps all six verbs (發布/傳送/部署/提交/展示/以其他方式對外發出); Section 5.6 keeps 發出/使用/作出陳述 for "release, use or represent"; Section 9 keeps 逐字/逐項 ("word-by-word / element-by-element") and 有意義嘅人類採納行為 ("meaningful human act of adoption"); Section 24 keeps 兩個問題都/係 ("both questions"/"yes"); Section 26 keeps all of accept/publish/transmit/deploy/otherwise release plus 呢個決定 ("that decision").
- Numbers correct: 兩項事實 ("two facts"), 三個字元 ("Three characters"), 兩個 ("both").
- No unescaped backticks or `${` in the template literals; no dropped/added clauses detected; no leftover English prose outside the accepted code examples.
- Accepted no-change (as before): Section 14 keeps the `<pre><code>` examples `Author: Eric Mourant +AI` and `This project uses +AI.` in English, matching the master and the code-example presentation.
- Borderline wording worth a native-speaker glance (not raised as corrections, meaning is preserved): Section 5.1 `組織` for "structuring" (vs. `結構化`), Section 5.6 `用呢件成品作出陳述` for "represent the artifact" (slightly awkward but keeps the third verb), and Section 6 `包括但不限於` adding "but not limited to" where the English says only "may include" (list is already open-ended, so meaning is unchanged).
- Honest limitation: I am not a native Cantonese speaker. My checks cover completeness, structure, terminology/slogan consistency, and the load-bearing invariants; idiomatic register and the two borderline wordings above are better confirmed by a native reader per TRANSLATIONS.md.
