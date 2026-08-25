# spec.fa.js — Round 1 correction suggestions

- **Language:** فارسی (fa)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A faithful, complete translation: normative terms are consistent everywhere, section 5.4 keeps all five verbs, and "artifact"/"materially assisted" are rendered consistently in the body. Only minor chrome-level wording points remain.
- **Count:** 0 high / 0 medium / 5 low

## Corrections

### Canonical slogan wording (interfaceCopy vs sections)
- **Location:** `interfaceCopy.documentTitle`, `interfaceCopy.heroTitle` vs sections 1, 23, 26 and `end`
- **Current:** `هوش مصنوعی کمک کرد. من مسئولیت را می‌پذیرم.` (interface) vs `هوش مصنوعی کمک کرد. من مسئولیت آن را می‌پذیرم.` (body)
- **English:** `AI helped. I take responsibility.` — identical wording everywhere in the master.
- **Issue:** The body adds "آن" ("its"); the English text deliberately reuses the exact slogan.
- **Suggested:** Unify on `هوش مصنوعی کمک کرد. من مسئولیت آن را می‌پذیرم.` everywhere.
- **Severity:** LOW

### interfaceCopy.description
- **Location:** `interfaceCopy.description`
- **Current:** `…هوش مصنوعی به‌طور مؤثر در کار کمک کرده…`
- **English:** `…artificial intelligence materially assisted the work…`
- **Issue:** "به‌طور مؤثر" means "effectively"; the body consistently renders "materially" as "کمک اساسی".
- **Suggested:** `…هوش مصنوعی در کار کمک اساسی کرده…`
- **Severity:** LOW

### interfaceCopy.plainTitle
- **Location:** `interfaceCopy.plainTitle`
- **Current:** `کمک شفاف. مسئولیت آشکار.`
- **English:** `Transparent assistance. Visible accountability.`
- **Issue:** The body distinguishes accountability (پاسخگویی) from responsibility (مسئولیت); the chrome flattens accountability into "مسئولیت".
- **Suggested:** `کمک شفاف. پاسخگویی آشکار.`
- **Severity:** LOW

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…یک فرد یا سازمان قابل شناسایی مسئول تصمیم به استفاده از آن است.`
- **English:** `…an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Persian "آن" binds to "نتیجه" (the result), and "stands behind" is flattened into "is responsible for".
- **Suggested:** `…و یک فرد یا سازمان قابل شناسایی پشت تصمیم به استفاده از هوش مصنوعی ایستاده است.`
- **Severity:** LOW

### interfaceCopy.markLabel
- **Location:** `interfaceCopy.markLabel`
- **Current:** `نشان رسمی`
- **English:** `Canonical mark`
- **Issue:** "رسمی" means "official"; the body consistently renders "canonical" as "متعارف" (sections 1, 4, 12, 21, 23, 26).
- **Suggested:** `نشان متعارف`
- **Severity:** LOW

## Notes
- Section 3 defines باید / نباید / توصیه می‌شود / توصیه نمی‌شود / مجاز است with English parentheticals and uses exactly these forms in later sections — no action needed.
- Sections 5.1 and 5.4 preserve all seven and five verbs respectively.
- Section 22 correctly renders "authorship" as "پدیدآورندگی"; section 18 renders "attribution" as "انتساب" — both fine.
- Section 14 keeps the code examples in English, matching the master.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
