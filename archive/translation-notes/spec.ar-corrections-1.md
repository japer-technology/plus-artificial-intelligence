# spec.ar.js — Round 1 correction suggestions

- **Language:** العربية (ar)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A faithful, complete translation: normative terms are consistent everywhere, section 5.4 keeps all five verbs, and the canonical slogan matches the English pattern. Only minor chrome-level wording points remain.
- **Count:** 0 high / 0 medium / 5 low

## Corrections

### Canonical slogan orthography (interfaceCopy vs sections)
- **Location:** `interfaceCopy.documentTitle`, `interfaceCopy.heroTitle` vs sections 1, 23, 26 and `end`
- **Current:** `ساعد الذكاء الاصطناعي. أنا أتحمل المسؤولية.` (interface) vs `ساعد الذكاء الاصطناعي. وأنا أتحمّل المسؤولية.` (body)
- **English:** `AI helped. I take responsibility.` — identical wording everywhere in the master.
- **Issue:** The body adds "و" and diacritics; the English text deliberately reuses the exact slogan byte-for-byte.
- **Suggested:** Unify on `ساعد الذكاء الاصطناعي. وأنا أتحمّل المسؤولية.` everywhere (or drop the "و" from the body).
- **Severity:** LOW

### interfaceCopy.description
- **Location:** `interfaceCopy.description`
- **Current:** `…وشخصاً أو مؤسسة محددة تقبل المسؤولية عنه.`
- **English:** `…a named person or organisation accepts responsibility for it.`
- **Issue:** "محددة" means "specified"; the English says "named", which the body renders as "المُسمَّى" (sections 21, 22, 23, meaningThreeBody).
- **Suggested:** `…وشخصاً أو مؤسسة مُسمَّاة تقبل المسؤولية عنه.`
- **Severity:** LOW

### interfaceCopy.plainTitle
- **Location:** `interfaceCopy.plainTitle`
- **Current:** `مساعدة شفافة. مسؤولية واضحة.`
- **English:** `Transparent assistance. Visible accountability.`
- **Issue:** The body distinguishes accountability (المساءلة) from responsibility (المسؤولية); the chrome flattens accountability into "مسؤولية".
- **Suggested:** `مساعدة شفافة. مساءلة واضحة.`
- **Severity:** LOW

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…تقف وراء قرار استخدامها.`
- **English:** `…stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Arabic "استخدامها" binds to "النتيجة" (the result).
- **Suggested:** `…تقف وراء قرار استخدامه (الذكاء الاصطناعي).`
- **Severity:** LOW

### interfaceCopy.markLabel
- **Location:** `interfaceCopy.markLabel`
- **Current:** `العلامة المعتمدة`
- **English:** `Canonical mark`
- **Issue:** "المعتمدة" means "approved"; the body consistently renders "canonical" as "القياسية" (sections 1, 4, 12, 21, 23, 26).
- **Suggested:** `العلامة القياسية`
- **Severity:** LOW

## Notes
- Section 3 defines يجب / يجب ألا / ينبغي / ينبغي ألا / يجوز with English parentheticals and uses exactly these forms in later sections — no action needed.
- Sections 5.1 and 5.4 preserve all seven and five verbs respectively.
- Section 22 correctly renders "authorship" as "التأليف"; section 18 renders "attribution" as "نسبة العمل إلى صاحبه" — both fine.
- Section 14 keeps the code examples in English, matching the master.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
