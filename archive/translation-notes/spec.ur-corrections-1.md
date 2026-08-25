# spec.ur.js — Round 1 correction suggestions

- **Language:** اردو (ur)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A faithful, complete translation: the canonical slogan is identical everywhere, normative terms are consistent, and sections 5.1/5.4 are complete. Only minor chrome-level wording points remain.
- **Count:** 0 high / 0 medium / 6 low

## Corrections

### interfaceCopy.followedLink
- **Location:** `interfaceCopy.followedLink`
- **Current:** `+AI پوسٹ نومینل کی وضاحت`
- **English:** `+AI Post Nominal Description`
- **Issue:** "پوسٹ نومینل" is a transliteration of the English "post-nominal" rather than a translation.
- **Suggested:** `نام کے بعد آنے والے لاحقے +AI کی وضاحت`
- **Severity:** LOW

### interfaceCopy.description
- **Location:** `interfaceCopy.description`
- **Current:** `…مصنوعی ذہانت نے کام میں نمایاں مدد کی…`
- **English:** `…artificial intelligence materially assisted the work…`
- **Issue:** "نمایاں مدد" (notable help) differs from the body's consistent rendering "خاطر خواہ مدد" for "material assistance".
- **Suggested:** `…مصنوعی ذہانت نے کام میں خاطر خواہ مدد کی…`
- **Severity:** LOW

### interfaceCopy.plainTitle
- **Location:** `interfaceCopy.plainTitle`
- **Current:** `شفاف معاونت۔ واضح ذمہ داری۔`
- **English:** `Transparent assistance. Visible accountability.`
- **Issue:** The body distinguishes accountability (جوابدہی) from responsibility (ذمہ داری); the chrome flattens accountability into "ذمہ داری".
- **Suggested:** `شفاف معاونت۔ واضح جوابدہی۔`
- **Severity:** LOW

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…کوئی قابل شناخت شخص یا ادارہ اسے استعمال کرنے کے فیصلے کی ذمہ داری لیتا ہے۔`
- **English:** `…an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Urdu "اسے" is ambiguous and most naturally binds to "نتیجے" (the result), and "stands behind" is flattened into "takes responsibility for".
- **Suggested:** `…اور کوئی قابل شناخت شخص یا ادارہ مصنوعی ذہانت کو استعمال کرنے کے فیصلے کے پیچھے کھڑا ہے۔`
- **Severity:** LOW

### Section 2 — Design principle
- **Location:** `sections[2].title`
- **Current:** `اصولِ ترتیب`
- **English:** `Design principle`
- **Issue:** "ترتیب" means "arrangement/ordering"; the heading is about the design principle of the notation.
- **Suggested:** `اصولِ ڈیزائن`
- **Severity:** LOW

### Section 5 — Meaning of the mark
- **Location:** `sections[5].body`, h4 5.4 paragraph
- **Current:** `…مصنوعہ شائع، منتقل، نافذ، پیش یا کسی اور طور پر جاری کیا جائے گا یا نہیں۔`
- **English:** `…whether the artifact would be published, transmitted, deployed, submitted, presented or otherwise released.`
- **Issue:** The English list has five verbs; the Urdu list has four, collapsing "submitted" and "presented" into "پیش".
- **Suggested:** `…مصنوعہ شائع، منتقل، نافذ، پیش کیا، دکھایا یا کسی اور طور پر جاری کیا جائے گا یا نہیں۔`
- **Severity:** LOW

## Notes
- Canonical slogan `AI نے مدد کی۔ ذمہ داری میری ہے۔` is verbatim in documentTitle, heroTitle, sections 1/23/26 and the end panel — no action needed.
- Section 3 defines لازم ہے / ممنوع ہے / چاہیے / نہیں چاہیے / اجازت ہے with English parentheticals and uses exactly these forms in later sections — no action needed.
- "ڈارک موڈ"/"لائٹ موڈ" are transliterated loanwords; common in Urdu UI usage, but a purist may prefer "گہرا موڈ"/"روشن موڈ" — optional polish.
- Like several other translations, "canonical" and "standard" both render as "معیاری"; consider "کینونیکل" or "رسمی" for "canonical" if the distinction matters.
- Section 22 correctly renders "authorship" as "تصنیف"; section 18 renders "attribution" as "انتساب" — both fine.
- Section 14 keeps the code examples in English, matching the master.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
