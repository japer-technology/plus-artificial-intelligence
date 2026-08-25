# spec.ja.js — Round 3 final correction recommendations

- **Language:** 日本語 (ja)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.ja-corrections-2.md` (0 high / 0 medium / 5 low) — status of each item verified against the current file
- **Verdict:** Excellent, complete and internally consistent translation; all five round-2 corrections have been applied, and both round-3 terminology-alignment items have now been applied to the file.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### interfaceCopy.plainLead — "accountability declaration" flattened to "責任の宣言"
- **Location:** `interfaceCopy.plainLead`
- **Current:** `このマークは責任の宣言であり、AIが著者であるという主張でも、成果物が正しいという保証でもありません。`
- **English:** `The mark is an accountability declaration, not a claim that AI is the author and not a guarantee that the work is correct.`
- **Issue:** The English term "accountability declaration" also appears in section 8 (`<code>+AI</code> is an <strong>accountability declaration</strong>, not a warranty of correctness.`), where it is correctly rendered `説明責任の宣言`. The chrome flattens it to `責任の宣言` (responsibility), the same accountability→responsibility drift that round 2 fixed in `plainTitle` but which still survives here. Meaning is not lost, but the terminology is now inconsistent between chrome and body for the identical English phrase.
- **Suggested:** `このマークは説明責任の宣言であり、AIが著者であるという主張でも、成果物が正しいという保証でもありません。`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ja.js

### Section 3 vs. body — SHOULD NOT rendered two different ways
- **Location:** `sections[3].body` (definition) vs. `sections[9].body`, `sections[19].body`, `sections[21].body`
- **Current:** section 3 uses `～しないことが望ましい (SHOULD NOT)`; the body uses `…ことを<code>+AI</code>で表すべきではありません。` (9), `…を求めるべきではありません。` (19), `…を使用すべきではありません。` (21)
- **English:** `SHOULD NOT` (RFC-2119-style normative term, defined in section 3)
- **Issue:** The other four terms keep one form throughout (MUST=`しなければならない/なりません`, MUST NOT=`してはならない/なりません`, SHOULD=`することが望ましい/望まれます`, MAY=`してもよい`), with only polite/plain inflection. SHOULD NOT is the exception: section 3 defines it as `～しないことが望ましい` while every concrete use is `～べきではありません` — different words, so it is drift by the consistency rule. Both are valid Japanese for "should not" and the meaning is unchanged; this is purely a surface-form alignment point. (Round 1 and 2 asserted the five terms were used "consistently", which is not literally accurate for SHOULD NOT.)
- **Suggested:** Align one way or the other, e.g. change the section-3 gloss to `～べきではない (SHOULD NOT)` to match the body, or render the body uses as `～しないことが望ましい` to match section 3.
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ja.js (section-3 gloss changed to `～べきではない (SHOULD NOT)`, matching the body)

## Round 2 verification
- [x] Section 14 translated code blocks — applied (both `<pre><code>` blocks now read `Author: Eric Mourant +AI` and `This project uses +AI.`)
- [x] plainTitle `明確な責任` — applied (now `透明な支援。明確な説明責任。`)
- [x] plainBody ambiguous `その使用` / flattened "stands behind" — applied (now `…特定可能な個人または組織が、AIを使用するという決定の背後に立つことを示します。`)
- [x] Section 6 translation list item — applied (now `実質的な解釈判断を伴う場合の翻訳。`)
- [x] Section 7 "substantially generated" — applied (now `AIが実質的に生成したコンテンツを公開してもよいものとします。`)

## Notes

- Canonical slogan `AIが支援しました。私が責任を負います。` is verbatim in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, sections 1/23/26 and the `end` panel; `heroLead`'s `<strong>` segment uses matching wording (`人工知能が作業を実質的に支援し、…責任を引き受けます。`).
- `+AI` is never localised; Section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`) are byte-identical; Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`) are byte-identical; `data-company-example` / `data-json-example` attributes and the example names (Eric Mourant, JAPER Technology) are exact everywhere.
- All 26 sections present, numbered and ordered 1–26; `h4` labels 5.1–5.6 present. Section 6 has 17 list items (not 21) and Section 8 has 17 list items, both fully translated. Section 5.4 keeps all verbs plus "otherwise released" (`…公開、送信、展開、提出、提示、またはその他の方法で公表…`); 5.6 keeps "decision to release, use or represent"; Section 26 keeps accept/publish/transmit/deploy/otherwise release and "that decision" (`その決定`). Section 24's "both questions" and "yes" are correct (`2つの質問の両方`, `はい`); its "If both answers are yes:" is completed as `次のマークを使用できます`, a natural expansion of the ellipsis, not an added claim.
- "accountability" is consistently `説明責任` in sections 2, 8, 20, 21, `meaningThreeBody` and `end`; the sole exception is `plainLead` (flagged above). "responsible party" is uniformly `責任主体`; "named party/person" is `記名された主体`/`記名された個人または組織`.
- `highlight` is rendered `アクセント` (with `アクセントカラー` in `highlightAria` and `colourChanged`), a deliberate and internally consistent accent-colour choice rather than a defect; the `{colour}` placeholder is intact.
- `translationNote` (`参考訳です。…英語の原文を規範文書とします。`) is non-empty where the English master is empty — acceptable localisation.
- Section 12 localises "Kindest regards," to `よろしくお願いいたします。`, a natural Japanese valediction.
- No unescaped backticks or `${` inside template literals; no stray untranslated English prose (Section 14 code blocks are intentionally English per the round-1/2 decision).
