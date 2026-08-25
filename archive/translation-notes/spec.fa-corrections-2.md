# spec.fa.js — Round 2 final correction recommendations

- **Language:** فارسی (fa)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.fa-corrections-1.md` (0 high / 0 medium / 5 low) — all 5 findings re-verified against the current file and carried forward
- **Verdict:** Faithful, complete translation; normative terms and verb lists intact. All round-1 chrome items remain; one new wording point added.
- **Count:** 0 high / 0 medium / 6 low

## Corrections

### Canonical slogan wording (interfaceCopy vs sections)
- **Location:** `interfaceCopy.documentTitle`, `interfaceCopy.heroTitle` vs sections 1, 23, 26 and `end`
- **Current:** `هوش مصنوعی کمک کرد. من مسئولیت را می‌پذیرم.` (interface) vs `هوش مصنوعی کمک کرد. من مسئولیت آن را می‌پذیرم.` (body)
- **English:** `AI helped. I take responsibility.` — identical wording everywhere in the master.
- **Issue:** The body adds "آن" ("its"); the English text deliberately reuses the exact slogan.
- **Suggested:** Unify on `هوش مصنوعی کمک کرد. من مسئولیت آن را می‌پذیرم.` everywhere.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### "materially" rendered "effectively" in chrome
- **Location:** `interfaceCopy.description` (also `heroLead`, `meaningOneBody`)
- **Current:** `…هوش مصنوعی به‌طور مؤثر در کار کمک کرده…` (also `به‌طور مؤثر در انجام این کار کمک کرده`, `به‌طور مؤثر در ایجاد، تحلیل…`)
- **English:** `…artificial intelligence materially assisted the work…`
- **Issue:** "به‌طور مؤثر" means "effectively"; the body consistently renders "materially" as "کمک اساسی". Round 2 extends the round-1 finding to `heroLead` and `meaningOneBody`, which share the same drift.
- **Suggested:** `…هوش مصنوعی در کار کمک اساسی کرده…` (and likewise in `heroLead` / `meaningOneBody`)
- **Severity:** LOW
- **Round 1:** carried forward (verified still present; locations extended)

### interfaceCopy.plainTitle — "accountability" flattened to "responsibility"
- **Location:** `interfaceCopy.plainTitle`
- **Current:** `کمک شفاف. مسئولیت آشکار.`
- **English:** `Transparent assistance. Visible accountability.`
- **Issue:** The body distinguishes accountability (پاسخگویی) from responsibility (مسئولیت); the chrome flattens accountability into "مسئولیت".
- **Suggested:** `کمک شفاف. پاسخگویی آشکار.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.plainBody — pronoun and "stands behind"
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…یک فرد یا سازمان قابل شناسایی مسئول تصمیم به استفاده از آن است.`
- **English:** `…an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Persian "آن" binds to "نتیجه" (the result), and "stands behind" is flattened into "is responsible for".
- **Suggested:** `…و یک فرد یا سازمان قابل شناسایی پشت تصمیم به استفاده از هوش مصنوعی ایستاده است.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.markLabel — "canonical" as "official"
- **Location:** `interfaceCopy.markLabel`
- **Current:** `نشان رسمی`
- **English:** `Canonical mark`
- **Issue:** "رسمی" means "official"; the body consistently renders "canonical" as "متعارف" (sections 1, 4, 12, 21, 23, 26).
- **Suggested:** `نشان متعارف`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 19 — "convention" rendered as "contract" (new in round 2)
- **Location:** `sections[19].body`, closing paragraph
- **Current:** `…به‌عنوان یک قرارداد جهانی بستگی دارد.`
- **English:** `…function as a universal convention.`
- **Issue:** "قرارداد" means "contract/agreement"; "convention" here is a customary standard, better rendered as "کنوانسیون" or "رویهٔ همگانی".
- **Suggested:** `…به‌عنوان یک رویهٔ همگانی (کنوانسیون) جهانی بستگی دارد.`
- **Severity:** LOW
- **Round 1:** new in round 2

## Round 1 verification

- [x] Slogan "آن" drift — still present, carried forward
- [x] description "به‌طور مؤثر" — still present, carried forward (locations extended to heroLead / meaningOneBody)
- [x] plainTitle "مسئولیت" — still present, carried forward
- [x] plainBody pronoun — still present, carried forward
- [x] markLabel "رسمی" — still present, carried forward

## Notes

- Section 3 defines باید / نباید / توصیه می‌شود / توصیه نمی‌شود / مجاز است with English parentheticals and uses exactly these forms in later sections.
- Sections 5.1 and 5.4 preserve all seven and five verbs respectively.
- Section 22 renders "authorship" as "پدیدآورندگی"; section 18 renders "attribution" as "انتساب" — both fine.
- Section 8 renders "hallucinations" as "توهم" — the standard term in Persian AI usage.
- Section 4 "case-sensitive" is correctly rendered (`به بزرگی و کوچکی حروف حساس است`).
- Section 14 keeps the code examples in English, matching the master.
- No Unicode bidi control characters; tags in logical order; `dir="rtl"` handled by the page.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
