# spec.he.js — Round 1 correction suggestions

- **Language:** עברית (he)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A faithful, complete translation: the canonical slogan is identical everywhere, normative terms are consistent, and sections 5.1/5.4 are complete. Two sections shift "authorship" to "ownership", and "provenance" is rendered as "originality" in a few spots.
- **Count:** 0 high / 2 medium / 5 low

## Corrections

### Section 2 — Design principle
- **Location:** `sections[2].body`, closing paragraph
- **Current:** `…ולא בבעלות בלעדית על היצירה.`
- **English:** `…rather than exclusive authorship.`
- **Issue:** "בעלות על היצירה" means "ownership of the creation"; the English is about authorship (who wrote it), not ownership.
- **Suggested:** `…ולא במחברות בלעדית.`
- **Severity:** MEDIUM

### Section 22 — Relationship to authorship
- **Location:** `sections[22].title` and first paragraph
- **Current:** `הקשר לבעלות על יצירה` / `…נמנע במכוון מהקצאת אחוז של בעלות על היצירה.`
- **English:** `Relationship to authorship` / `…deliberately does not assign a percentage of authorship.`
- **Issue:** Same ownership/authorship shift as section 2; the standard Hebrew term for authorship is "מחברות".
- **Suggested:** Title: `הקשר למחברות`; body: `…נמנע במכוון מהקצאת אחוז של מחברות.`
- **Severity:** MEDIUM

### interfaceCopy.plainTitle
- **Location:** `interfaceCopy.plainTitle`
- **Current:** `סיוע שקוף. אחריות גלויה.`
- **English:** `Transparent assistance. Visible accountability.`
- **Issue:** The body renders "accountability" as "אחריותיות" (sections 2, 8, 20, 21, `end`); the chrome flattens it into "אחריות" (responsibility).
- **Suggested:** `סיוע שקוף. אחריותיות גלויה.`
- **Severity:** LOW

### interfaceCopy.meaningThreeBody
- **Location:** `interfaceCopy.meaningThreeBody`
- **Current:** `הצד הנקוב בשם אינו מעביר את האחריות למערכת או לספק של בינה מלאכותית.`
- **English:** `The named party does not transfer accountability to an AI system or provider.`
- **Issue:** "accountability" is rendered with the word for "responsibility" instead of the body's "אחריותיות".
- **Suggested:** `הצד הנקוב בשם אינו מעביר את האחריותיות למערכת או לספק של בינה מלאכותית.`
- **Severity:** LOW

### Section 14 — Software
- **Location:** `sections[14].body`, first paragraph
- **Current:** `…מאגרי תוכנה, commits, כותרות קוד מקור…`
- **English:** `…software repositories, commits, source-code headers…`
- **Issue:** "commits" is left in English.
- **Suggested:** `…מאגרי תוכנה, קומיטים (commits), כותרות קוד מקור…` or translate as "פעולות commit".
- **Severity:** LOW

### Section 15 — Creative artifacts
- **Location:** `sections[15].body`, closing paragraph
- **Current:** `…מטא־נתונים מפורטים יותר של מקוריות ותולדות יצירה…`
- **English:** `…more detailed provenance metadata…`
- **Issue:** "מקוריות" means "originality"; provenance is about origin/source, not originality.
- **Suggested:** `…מטא־נתונים מפורטים יותר של מוצא ותולדות יצירה…`
- **Severity:** LOW

### end panel
- **Location:** `end`, second paragraph
- **Current:** `מקוריות ואחריותיות של אדם ובינה מלאכותית`
- **English:** `Human-AI Provenance and Accountability`
- **Issue:** Same "provenance" → "originality" shift as section 15.
- **Suggested:** `מוצא ואחריותיות של אדם ובינה מלאכותית`
- **Severity:** LOW

## Notes
- Canonical slogan `בינה מלאכותית סייעה. אני מקבל אחריות.` is verbatim in documentTitle, heroTitle, sections 1/23/26 and the end panel — no action needed.
- Section 3 defines חייב / אסור / מומלץ / לא מומלץ / רשאי with English parentheticals and uses exactly these forms in later sections — no action needed.
- Section 5.4 preserves all five verbs plus "otherwise released".
- `interfaceCopy.plainBody` correctly binds "it" to AI ("להשתמש בה") — better than several other languages.
- Section 14 keeps the code examples in English, matching the master.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
