# spec.mr.js — Round 3 final correction recommendations

- **Language:** मराठी (mr)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.mr-corrections-2.md` (0 high / 1 medium / 5 low) — status of each item verified against the current file
- **Verdict:** Clean and accurate; all six round-2 corrections are now applied, and both round-3 consistency items (chrome "materially" wording, `end` version token) have now been applied to the file.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### Chrome renders "materially" as लक्षणीय while every section body uses सारभूत
- **Location:** `interfaceCopy.description`, `interfaceCopy.heroLead`, `interfaceCopy.meaningOneBody`, `interfaceCopy.plainBody` vs `sections[*].body`
- **Current:**
  - `interfaceCopy.description`: `+AI म्हणजे कृत्रिम बुद्धिमत्तेने कामात लक्षणीय मदत केली असून, एखादी नामनिर्दिष्ट व्यक्ती किंवा संस्था त्याची जबाबदारी स्वीकारते.`
  - `interfaceCopy.heroLead`: `<strong>कृत्रिम बुद्धिमत्तेने कामात लक्षणीय मदत केली आणि ते काम प्रकाशित करण्याची जबाबदारी ती व्यक्ती किंवा संस्था स्वीकारते.</strong>`
  - `interfaceCopy.meaningOneBody`: `AI ने काम तयार करणे, विश्लेषण करणे, रूपांतरित करणे किंवा सादर करणे यामध्ये लक्षणीय मदत केली.`
  - `interfaceCopy.plainBody`: `AI ने निकालावर लक्षणीय प्रभाव टाकला आणि तो वापरण्याच्या निर्णयामागे ओळखता येणारी व्यक्ती किंवा संस्था उभी आहे, हे ते सांगते.`
- **English:** `materially assisted the work` / `materially helped` / `materially influenced` (the spec's core "material assistance" concept)
- **Issue:** "Materially" is the load-bearing term of this specification and is rendered सारभूत consistently throughout all 26 section bodies (e.g. `sections[0].body` `सारभूत सहाय्याने`, `sections[1]`/`[4]`/`[9]`/`[21]`/`[22]`/`[25]` `सारभूत सहाय्य`, `sections[23]` `सारभूत मदत`). The landing chrome instead uses लक्षणीय ("significant/noteworthy"), a weaker word, so the reader meets two different renderings of the same technical term. Meaning is preserved (both are acceptable synonyms), hence LOW, not MEDIUM.
- **Suggested:** Align the chrome with the body, e.g. description → `+AI म्हणजे कृत्रिम बुद्धिमत्तेने कामात सारभूत मदत केली असून, एखादी नामनिर्दिष्ट व्यक्ती किंवा संस्था त्याची जबाबदारी स्वीकारते.`; meaningOneBody → `… यामध्ये सारभूत मदत केली.`; plainBody → `AI ने निकालावर सारभूत प्रभाव टाकला …`; heroLead `<strong>` segment likewise (`… कामात सारभूत मदत केली …`).
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.mr.js (description, heroLead, meaningOneBody and plainBody now use सारभूत)

### `end` version token diverges from the footer ("आवृत्ती ०.१" vs "v0.1")
- **Location:** `end` (and `interfaceCopy.versionFooter` for comparison)
- **Current:** `+AI विशिष्टीकरण आवृत्ती ०.१` (end) vs `विशिष्टीकरण v0.1` (versionFooter)
- **English:** `+AI Specification v0.1` (end) vs `Specification v0.1` (footer) — "v0.1" is identical in both places
- **Issue:** Round 2's main terminology issue is fixed (विशिष्टीकरण now appears in the chrome), but its "align the end version string with the footer" sub-point remains: the footer keeps the ASCII token `v0.1` while `end` translates it to `आवृत्ती ०.१` and also switches to Devanagari digits. The same version should read the same way in both places.
- **Suggested:** `+AI विशिष्टीकरण v0.1` (to match `विशिष्टीकरण v0.1` in `versionFooter`).
- **Severity:** LOW
- **Round 2:** new in round 3 (sub-point of the round-2 "specification" item)
- **Status:** applied to spec.mr.js (`end` now reads `+AI विशिष्टीकरण v0.1`, matching `versionFooter`)

## Round 2 verification

- [x] `specification` two ways (तपशील vs विशिष्टीकरण) — applied: chrome now uses `विशिष्टीकरण` (specification, versionFooter, readSpec, untranslatedNotice.headline); residual `end` version-token alignment carried forward as a LOW finding above.
- [x] Section 6 "अर्थात" → "अर्थामध्ये" — applied: `<li>अर्थामध्ये सारभूत बदल करणारे संपादन;</li>`.
- [x] Section 5.4 missing "submitted" — applied: `सुपूर्द` added; all six verbs (प्रकाशित, प्रेषित, कार्यान्वित, सादर, सुपूर्द, प्रसृत) now present.
- [x] `markLabel` मानक चिन्ह → प्रमाणभूत चिन्ह — applied.
- [x] Section 24 आवश्यक असते → यायला हवे — applied: `व्यक्तीस दोन्ही प्रश्नांना <strong>होय</strong> असे उत्तर देता यायला हवे:`.
- [x] Section 7 बहुतांशी → सारभूत रीतीने — applied: `जबाबदार पक्षाने सारभूत रीतीने कृत्रिम बुद्धिमत्तेने निर्मित मजकूर प्रकाशित करणे ऐच्छिक आहे.`

## Notes

- All load-bearing invariants verified intact: `+AI` is never localised or re-cased; Section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`) are byte-identical; Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`) are byte-identical; `data-company-example` and `data-json-example` attributes are preserved; sections are numbered 1–26 in order; h4 labels 5.1–5.6 intact; example names `Eric Mourant` and `JAPER Technology` spelled exactly everywhere.
- The five normative terms are consistent across the spec and the header comment: MUST → आवश्यक आहे, MUST NOT → निषिद्ध आहे, SHOULD → अपेक्षित आहे, SHOULD NOT → अपेक्षित नाही, MAY → ऐच्छिक आहे, with English in parentheses at the Section 3 first definition.
- The slogan is byte-identical (`AI ने मदत केली. जबाबदारी माझी आहे.`) in `documentTitle` (after `+AI — `), `heroTitle`, Section 1, Section 23, Section 26 and `end`.
- Section 6 list items: the brief said "21", but the master actually contains 17; all 17 are present in the translation (writing … other substantive intellectual or creative work). Section 8's 17 items are all present.
- HTML tag structure matches the master throughout (same `<p>`, `<strong>`, `<code>`, `<ol>`, `<ul>`, `<li>`, `<h4>`, `<blockquote>`, `<pre>` and the same `class="canonical"`/`data-*` attributes).
- Minor near-synonym drift, left as observations rather than corrections: "accountability" is rendered जबाबदारी in the chrome (`meaningThreeBody`, `plainTitle`, `plainLead`) but उत्तरदायित्व in the body (Sections 2 and 8) — the English terms themselves overlap, so no action is strictly required. Similarly "release/releasing" is प्रकाशित in `heroLead`/`meaningTwoBody` but प्रसृत in the body.
- `translationNote` is populated in Marathi (English master is `""`); this is a legitimate, helpful reader note and not an error.
- Carried observation from round 2, unchanged: "artifact" is uniformly कृती (leans "act/action"); "software" → आज्ञावली, "data" → विदे, and "metadata" → अधिविदा are non-standard coinages used consistently — a native-speaker read of these (and of Sections 3, 7, 26) is still advisable before treating the file as final. My Marathi is non-native, so these lexical judgments are tentative rather than authoritative.
