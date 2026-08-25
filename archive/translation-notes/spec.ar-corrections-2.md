# spec.ar.js — Round 2 final correction recommendations

- **Language:** العربية (ar)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.ar-corrections-1.md` (0 high / 0 medium / 5 low) — all 5 findings re-verified against the current file and carried forward
- **Verdict:** Strong, faithful translation; normative terms consistent, RTL structure clean. All round-1 chrome items remain; one new wording note on the end panel.
- **Count:** 0 high / 0 medium / 6 low

## Corrections

### Canonical slogan orthography (interfaceCopy vs sections)
- **Location:** `interfaceCopy.documentTitle`, `interfaceCopy.heroTitle` vs sections 1, 23, 26 and `end`
- **Current:** `ساعد الذكاء الاصطناعي. أنا أتحمل المسؤولية.` (interface) vs `ساعد الذكاء الاصطناعي. وأنا أتحمّل المسؤولية.` (body)
- **English:** `AI helped. I take responsibility.` — identical wording everywhere in the master.
- **Issue:** The body adds "و" and diacritics; the English text deliberately reuses the exact slogan byte-for-byte.
- **Suggested:** Unify on `ساعد الذكاء الاصطناعي. وأنا أتحمّل المسؤولية.` everywhere (or drop the "و" from the body).
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.description — "named" as "specified"
- **Location:** `interfaceCopy.description`
- **Current:** `…وشخصاً أو مؤسسة محددة تقبل المسؤولية عنه.`
- **English:** `…a named person or organisation accepts responsibility for it.`
- **Issue:** `محددة` means "specified"; the English says "named", which the body renders as `المُسمَّى` (sections 21, 22, 23, meaningThreeBody).
- **Suggested:** `…وشخصاً أو مؤسسة مُسمَّاة تقبل المسؤولية عنه.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.plainTitle — "accountability" flattened to "responsibility"
- **Location:** `interfaceCopy.plainTitle`
- **Current:** `مساعدة شفافة. مسؤولية واضحة.`
- **English:** `Transparent assistance. Visible accountability.`
- **Issue:** The body distinguishes accountability (المساءلة) from responsibility (المسؤولية); the chrome flattens accountability into "مسؤولية".
- **Suggested:** `مساعدة شفافة. مساءلة واضحة.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.plainBody — pronoun antecedent
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…تقف وراء قرار استخدامها.`
- **English:** `…stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Arabic "استخدامها" binds to "النتيجة" (the result).
- **Suggested:** `…تقف وراء قرار استخدامه (الذكاء الاصطناعي).`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.markLabel — "canonical" as "approved"
- **Location:** `interfaceCopy.markLabel`
- **Current:** `العلامة المعتمدة`
- **English:** `Canonical mark`
- **Issue:** `المعتمدة` means "approved"; the body consistently renders "canonical" as `القياسية` (sections 1, 4, 12, 21, 23, 26).
- **Suggested:** `العلامة القياسية`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### `end` panel — "Human-AI Provenance and Accountability" (new in round 2)
- **Location:** `end`, second string
- **Current:** `إثبات المصدر البشري والذكاء الاصطناعي والمساءلة`
- **English:** `Human-AI Provenance and Accountability`
- **Issue:** The compound "Human-AI" is split into a coordination, which reads as a list of three unrelated items ("proof of source, the human, AI and accountability") instead of one compound subject.
- **Suggested:** `إثبات المصدر والمساءلة في العمل البشري-الاصطناعي` (native-speaker confirm before adopting)
- **Severity:** LOW
- **Round 1:** new in round 2

## Round 1 verification

- [x] Slogan orthography split — still present, carried forward
- [x] description "محددة" — still present, carried forward
- [x] plainTitle "مسؤولية" — still present, carried forward
- [x] plainBody "استخدامها" — still present, carried forward
- [x] markLabel "المعتمدة" — still present, carried forward

## Notes

- Section 3 defines يجب / يجب ألا / ينبغي / ينبغي ألا / يجوز with English parentheticals and uses exactly these forms in later sections.
- Sections 5.1 and 5.4 preserve all seven and five verbs respectively.
- Section 22 renders "authorship" as "التأليف"; section 18 renders "attribution" as "نسبة العمل إلى صاحبه" — both fine.
- Section 14 keeps the code examples in English, matching the master.
- No Unicode bidi control characters; tags in logical order; `dir="rtl"` handled by the page.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
