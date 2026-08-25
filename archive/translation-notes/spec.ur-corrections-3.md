# spec.ur.js — Round 3 final correction recommendations

- **Language:** اردو (ur)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.ur-corrections-2.md` (0 high / 0 medium / 7 low) — status of each item verified against the current file
- **Verdict:** Faithful, complete translation; all seven round-2 corrections have been applied, all load-bearing invariants hold, and the round-3 terminology item has now been applied to the file.
- **Count:** 0 high / 0 medium / 1 low

## Corrections

### interfaceCopy.plainLead — "accountability" rendered "responsibility"
- **Location:** `interfaceCopy.plainLead`
- **Current:** `یہ نشان ذمہ داری کا اعلان ہے؛ یہ نہ تو AI کو مصنف قرار دیتا ہے اور نہ ہی اس بات کی ضمانت دیتا ہے کہ کام درست ہے۔`
- **English:** `The mark is an accountability declaration, not a claim that AI is the author and not a guarantee that the work is correct.`
- **Issue:** The translation consistently maps responsibility → ذمہ داری and accountability → جوابدہی (see `meaningThreeBody` "جوابدہی…منتقل نہیں کرتا", section 2 "انسانی جوابدہی", section 8 "جوابدہی کا اعلان", section 20 "جوابدہی"). `plainLead` is the same term-of-art "accountability declaration" as section 8 ("جوابدہی کا اعلان"), but here it is rendered "ذمہ داری کا اعلان", breaking the established mapping. This is the same category of drift round 1/2 flagged for `plainTitle`.
- **Suggested:** `یہ نشان جوابدہی کا اعلان ہے؛ یہ نہ تو AI کو مصنف قرار دیتا ہے اور نہ ہی اس بات کی ضمانت دیتا ہے کہ کام درست ہے۔`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ur.js

## Round 2 verification

- [x] `interfaceCopy.followedLink` "پوسٹ نومینل" — applied; now `نام کے بعد آنے والے لاحقے +AI کی وضاحت`.
- [x] `interfaceCopy.description` "نمایاں مدد" — applied; now `خاطر خواہ مدد`.
- [x] `interfaceCopy.plainTitle` "ذمہ داری" — applied; now `شفاف معاونت۔ واضح جوابدہی۔`.
- [x] `interfaceCopy.plainBody` "اسے" / "stands behind" — applied; now `…مصنوعی ذہانت کو استعمال کرنے کے فیصلے کے پیچھے کھڑا ہے۔`.
- [x] Section 2 title "اصولِ ترتیب" — applied; now `اصولِ ڈیزائن`.
- [x] Section 5.4 four-verb list — applied; now `شائع، منتقل، نافذ، پیش کیا، دکھایا` (five verbs, matching published/transmitted/deployed/submitted/presented).
- [x] Section 7 "substantially generated" — applied; now `خاطر خواہ حد تک مصنوعی ذہانت نے تیار کیا ہو۔`.

## Notes

- Canonical slogan `AI نے مدد کی۔ ذمہ داری میری ہے۔` is byte-identical in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, sections 1/23/26 and the `end` string; `heroLead`'s `<strong>` segment uses matching wording.
- Normative terms are consistent across all 26 sections and match the header mapping: MUST → لازم ہے, MUST NOT → ممنوع ہے, SHOULD → چاہیے, SHOULD NOT → نہیں چاہیے, MAY → اجازت ہے. Section 3 keeps the English parentheticals on first definition.
- `+AI` is never localised/re-cased/spaced; Section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`) are byte-identical to English.
- Section 17 JSON keys/values, example names (`Eric Mourant`, `JAPER Technology`), `data-company-example` / `data-json-example` attributes, section numbering 1–26 and h4 labels 5.1–5.6 all preserved.
- Section 6 has 17 list items and Section 8 has 17 list items, both fully present and matching the master (the brief's "21 items" for section 6 appears to be a miscount; the master has 17).
- Section 14 code examples and Section 17 JSON remain in English, matching the master (not untranslated prose).
- No unescaped backticks or `${` inside template literals; no Unicode bidi control characters; tags in logical order with `dir="rtl"` handled by the page.
- Round-2 notes still valid: `canonical`/`standard` both render `معیاری` (accepted no-change, optional polish); `ڈارک موڈ`/`لائٹ موڈ` are accepted transliterated loanwords.
- My Urdu assessment is limited to a non-native structural review: the word-choice findings above are based on internal consistency and the master's distinctions (responsibility vs accountability, material vs notable, substantial vs fundamental), not on native idiom. A native-speaker read of sections 3, 7 and 26 is still recommended before finalising.
