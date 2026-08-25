# spec.fa.js — Round 3 final correction recommendations

- **Language:** فارسی (fa)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.fa-corrections-2.md` (0 high / 0 medium / 6 low) — status of each item verified against the current file
- **Verdict:** Faithful, complete translation; all 6 round-2 items applied and verified. Normative terms, verb lists, slogans and all load-bearing invariants intact. Both round-3 correction items have now been applied to spec.fa.js.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### `interfaceCopy.plainLead` — "accountability declaration" flattened to "responsibility declaration"
- **Location:** `interfaceCopy.plainLead`
- **Current:** `این نشان اعلام مسئولیت است؛ نه ادعایی مبنی بر اینکه هوش مصنوعی نویسنده است و نه تضمینی برای درست بودن کار.`
- **English:** `The mark is an accountability declaration, not a claim that AI is the author and not a guarantee that the work is correct.`
- **Issue:** "accountability declaration" is rendered "اعلام مسئولیت" (declaration of responsibility), which flattens accountability (پاسخگویی) into responsibility (مسئولیت). This is the same class of drift flagged in round 1/2 for `plainTitle`. The identical English phrase "accountability declaration" is rendered "اعلامیهٔ پاسخگویی" in section 8, and "accountability" is rendered "پاسخگویی" in section 2, section 20 and `meaningThreeBody`. The chrome should keep the distinction.
- **Suggested:** `این نشان اعلامیهٔ پاسخگویی است؛ نه ادعایی مبنی بر اینکه هوش مصنوعی نویسنده است و نه تضمینی برای درست بودن کار.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.fa.js

### Section 18 — "reasonable" rendered as "conventional/canonical"
- **Location:** `sections[18].body` (title "Persistence"), first paragraph
- **Current:** `توصیه می‌شود نشانه‌گذاری <code>+AI</code> در برابر تبدیل‌های متعارف یک اثر، در جایی که انتساب حفظ می‌شود، پایدار بماند.`
- **English:** `The <code>+AI</code> notation SHOULD survive reasonable transformations of an artifact where attribution is preserved.`
- **Issue:** "reasonable" is rendered "متعارف", which is the translation's reserved term for "canonical" (sections 1, 4, 12, 21, 23, 26). "reasonable" means "معقول"/"منطقی", not "conventional". The meaning is only mildly affected (the examples listed are indeed ordinary transformations), but the word choice both shifts "reasonable" → "conventional" and overlaps with the "canonical" gloss, risking terminology confusion.
- **Suggested:** `توصیه می‌شود نشانه‌گذاری <code>+AI</code> در برابر تبدیل‌های معقول یک اثر، در جایی که انتساب حفظ می‌شود، پایدار بماند.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.fa.js

## Round 2 verification

- [x] Canonical slogan wording (interface `آن` vs body) — applied: `documentTitle`, `heroTitle`, sections 1/23/26 and `end` now all read `هوش مصنوعی کمک کرد. من مسئولیت آن را می‌پذیرم.` byte-identically.
- [x] "materially" as "effectively" in `description` / `heroLead` / `meaningOneBody` — applied: all three now use `کمک اساسی`.
- [x] `plainTitle` "accountability" flattened to "responsibility" — applied: now `کمک شفاف. پاسخگویی آشکار.`.
- [x] `plainBody` pronoun and "stands behind" — applied: now `…پشت تصمیم به استفاده از هوش مصنوعی ایستاده است.`.
- [x] `markLabel` "canonical" as "official" — applied: now `نشان متعارف`.
- [x] Section 19 "convention" as "contract" — applied: now `…رویهٔ همگانی (کنوانسیون) جهانی بستگی دارد.`.

## Notes

- No Unicode bidi control characters present (grep for U+200E/F, U+202A–202E, U+2066–2069, U+061C returned nothing); ZWNJ (U+200C) is ordinary Persian orthography, not bidi control.
- No unescaped backticks or `${` inside the template-literal bodies — the only backticks are the `body: \`` delimiters.
- Load-bearing invariants verified byte-identical: `+AI` everywhere (never re-cased/spaced); Section 4 counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`; Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); `data-company-example` / `data-json-example` attributes; example names `Eric Mourant` / `JAPER Technology`; section numbering 1–26 and h4 labels 5.1–5.6.
- Normative terms consistent across all 26 sections and the header mapping table: MUST→باید, MUST NOT→نباید, SHOULD→توصیه می‌شود, SHOULD NOT→توصیه نمی‌شود, MAY→مجاز است (section 3 defines each with the English term in parentheses).
- Section 5.1 keeps all seven verbs; 5.4 keeps all six; 5.6 keeps "decision to release, use or represent". Section 6 (17 items) and Section 8 (17 items) lists are complete. Section 9 keeps "word-by-word or element-by-element" and "meaningful human act of adoption". Section 24 keeps "both questions" and "yes". Section 26 keeps accept/publish/transmit/deploy/otherwise-release and "that decision".
- Accepted, not corrected (borderline wording, no meaning change):
  - Section 24 `should be able to answer yes` → `شخص در حالت عادی می‌تواند … بدهد` softens the lowercase "should" into "can normally"; acceptable in this conversational test section but worth a native-speaker glance.
  - Section 7 `defining property` → `ویژگی بنیادین و متمایزکننده` (adds "distinguishing") — a defensible rendering of "defining".
  - `skip` → `رفتن به توضیح` drops the literal "skip" but conveys the action.
  - `translationNote` is empty in the English master but filled in Persian with an informational note — acceptable translator's note.
  - `versionFooter` keeps Latin `v0.1` while section 9 and `end` use Persian numerals `۰٫۱` — minor stylistic inconsistency, not an error.
- Both LOW findings above are terminology distinctions (accountability/responsibility; reasonable/conventional), not grammar or completeness defects. A native Persian speaker should confirm the two suggested rewordings before adopting them.
