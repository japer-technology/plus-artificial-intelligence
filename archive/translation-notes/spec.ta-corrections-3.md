# spec.ta.js — Round 3 final correction recommendations

- **Language:** தமிழ் (ta)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.ta-corrections-2.md` (0 high / 2 medium / 3 low) — all 5 items verified as applied in the current file
- **Verdict:** Clean and consistent. Every round-2 correction was applied; normative terms, canonical slogan, load-bearing invariants, HTML structure and list counts all match, and both round-3 items have now been applied to the file.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### Section 14 — "commits" rendered "submissions"
- **Location:** `sections[14].body`, first paragraph ("software repositories, commits, source-code headers…")
- **Current:** `மென்பொருள் களஞ்சியங்கள், சமர்ப்பிப்புகள், மூலநிரல் தலைப்புகள், ஆவணங்கள், வெளியீட்டுக் குறிப்புகள் மற்றும் உருவாக்கப்பட்ட படைப்புகளில் இந்தக் குறியீட்டைப் பயன்படுத்துவது விருப்பத்தேர்வாக அமையலாம்.`
- **English:** `The notation MAY be used in software repositories, commits, source-code headers, documentation, release notes and generated artifacts.`
- **Issue:** "commits" is the specific version-control term (saved changes/check-ins in a repository). "சமர்ப்பிப்புகள்" means "submissions", which is broader and loses the technical sense. Every other item in the list is translated precisely, so this is a lone technical-term drift.
- **Suggested:** `மென்பொருள் களஞ்சியங்கள், கமிட்கள், மூலநிரல் தலைப்புகள், ஆவணங்கள், வெளியீட்டுக் குறிப்புகள் மற்றும் உருவாக்கப்பட்ட படைப்புகளில் இந்தக் குறியீட்டைப் பயன்படுத்துவது விருப்பத்தேர்வாக அமையலாம்.` (or keep `commits` untransliterated; native-speaker confirmation recommended)
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ta.js (primary option: `கமிட்கள்`)

### `end` — "v0.1" rendered inconsistently with `versionFooter`
- **Location:** `end` string (first segment)
- **Current:** `+AI விவரக்குறிப்பு பதிப்பு 0.1`
- **English:** `+AI Specification v0.1`
- **Issue:** `interfaceCopy.versionFooter` renders the same source as `விவரக்குறிப்பு v0.1` (keeps `v0.1`), but `end` renders it as `பதிப்பு 0.1` (translates "v" to "பதிப்பு" and drops the "v"). The same English string appears twice and is rendered two different ways. Aligning the two is a pure consistency fix; neither wording is wrong on its own.
- **Suggested:** `+AI விவரக்குறிப்பு v0.1`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ta.js

## Round 2 verification

- [x] `interfaceCopy.documentTitle` — "பொறுப்பு என்னுடையது" → now `+AI — AI உதவியது. பொறுப்பை நான் ஏற்கிறேன்.` (applied)
- [x] `interfaceCopy.heroTitle` — now `AI உதவியது. பொறுப்பை நான் ஏற்கிறேன்.` (applied)
- [x] Section 7 "substantially" — "பெரும்பாலும்" → now `கணிசமான அளவில்` (applied)
- [x] Section 8 "original" — "புத்தாக்கமானது" → now `அசலானது` (applied)
- [x] Section 6 "incidental" — "தற்செயலான" → now `துணைநிலையான` (applied)

## Notes

- Canonical slogan `AI உதவியது. பொறுப்பை நான் ஏற்கிறேன்.` is byte-identical in `documentTitle` (after `+AI — `), `heroTitle`, section 1, section 23, section 26, and `end`. The `heroLead` `<strong>…</strong>` uses matching wording ("உதவியது" / "பொறுப்பை … ஏற்கிறது", third person as the English requires).
- Normative terms are consistent across all 26 sections: `MUST`→கட்டாயம், `MUST NOT`→கட்டாயமாகத் தவிர்க்கப்பட வேண்டும், `SHOULD`→பரிந்துரைக்கப்படுகிறது, `SHOULD NOT`→பரிந்துரைக்கப்படவில்லை, `MAY`→விருப்பத்தேர்வாக அமையலாம் (inflected grammatically as needed). Section 3 definitions carry the English terms in parentheses and match the required meanings. Header mapping table matches actual usage.
- Section 5.4 keeps all five verbs plus "otherwise released" (வெளியிடப்படுமா / அனுப்பப்படுமா / செயலுக்குக் கொண்டுவரப்படுமா / சமர்ப்பிக்கப்படுமா / முன்வைக்கப்படுமா / வேறுவகையில் வெளிவிடப்படுமா); 5.6 keeps "decision to release, use or represent". Section 26 keeps accept/publish/transmit/deploy/otherwise release and "that decision".
- Sections 6 and 8 each have 17 list items (not 21/17 as the brief suggested) — all present in Tamil. Section 9 keeps "word-by-word or element-by-element" and "meaningful human act of adoption"; section 24 keeps "both questions" and "yes".
- Load-bearing invariants all byte-identical to English: `+AI` throughout; section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`); section 17 JSON keys/values and `data-json-example`; `data-company-example` attributes; names Eric Mourant / JAPER Technology; section numbering 1–26 and h4 labels 5.1–5.6; section 14 `<pre><code>` examples (`Author: Eric Mourant +AI`, `This project uses +AI.`).
- Round-2 notes still accurate, all acceptable as-is (no formal correction carried): (1) "materially" is "குறிப்பிடத்தக்க" in the chrome but "கணிசமான" in the body — both valid, optional alignment; (2) section 7 "defining property" → "அடையாளப்படுத்தும் பண்பு" ("identifying property"); "வரையறுக்கும் பண்பு" would be more literal but current is acceptable; (3) section 4 "case-sensitive" → "எழுத்து வடிவ உணர்திறன் கொண்டது" (reads "letter-form sensitivity"); (4) section 8 "hallucinations" paraphrased as "புனைவான தவறுத் தகவல்கள்".
- Section 14's `<pre><code>` examples are left in English (correct for literal code/copy-paste content) while section 13's prose equivalents are translated — a defensible distinction, not flagged.
- My Tamil is limited; sections 3, 7, 8 and 26 deserve a final native-speaker read before publication, and the "commits" term choice should be confirmed by a Tamil technical reviewer.
