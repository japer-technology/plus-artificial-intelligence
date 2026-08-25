# spec.am.js — Round 1 correction suggestions

- **Language:** አማርኛ (am)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A faithful, complete translation: the canonical slogan is identical across interface, sections and end panel, and all five normative terms are used consistently. Only two wording errors shift meaning.
- **Count:** 0 high / 2 medium / 5 low

## Corrections

### Section 6 — Material assistance
- **Location:** `sections[6].body`, "Incidental or purely mechanical AI functionality…"
- **Current:** `ድንገተኛ ወይም ሙሉ በሙሉ ሜካኒካል የሆነ የአርቲፊሻል ኢንተለጀንስ ተግባር…`
- **English:** `Incidental or purely mechanical AI functionality does not necessarily require +AI.`
- **Issue:** "ድንገተኛ" means "sudden/unexpected"; the English "incidental" means "of minor or secondary relevance".
- **Suggested:** `ተጓዳኝ ወይም ሙሉ በሙሉ ሜካኒካል የሆነ የአርቲፊሻል ኢንተለጀንስ ተግባር…`
- **Severity:** MEDIUM

### Section 18 — Persistence
- **Location:** `sections[18].body`, first paragraph
- **Current:** `የ +AI ምልክት ባለቤትነት መጠቀሱ በሚጠበቅበት ጊዜ የውጤቱን ተገቢ ለውጦች አልፎ መቆየት ይመከራል።`
- **English:** `The +AI notation SHOULD survive reasonable transformations of an artifact where attribution is preserved.`
- **Issue:** "ባለቤትነት መጠቀሱ" means "ownership being mentioned"; the English is about attribution (who is credited), not ownership.
- **Suggested:** `የ +AI ምልክት ደራሲነት መጠቀስ በሚጠበቅበት ጊዜ የውጤቱን ተገቢ ለውጦች አልፎ መቆየት ይመከራል።`
- **Severity:** MEDIUM

### Section 5 — Meaning of the mark
- **Location:** `sections[5].body`, h4 5.4 paragraph
- **Current:** `…ውጤቱ ይታተም፣ ይተላለፍ፣ ይሰማራ፣ ይቀርብ ወይም በሌላ መንገድ ይለቀቅ ወይም አይለቀቅ…`
- **English:** `…whether the artifact would be published, transmitted, deployed, submitted, presented or otherwise released.`
- **Issue:** The English list has five verbs; the Amharic list has four, collapsing "submitted" and "presented" into "ይቀርብ".
- **Suggested:** `…ውጤቱ ይታተም፣ ይተላለፍ፣ ይሰማራ፣ ይገባል፣ ይቀርብ ወይም በሌላ መንገድ ይለቀቅ ወይም አይለቀቅ…`
- **Severity:** LOW

### "canonical" rendered two ways
- **Location:** `interfaceCopy.markLabel` vs section titles 4, 23, 26 and bodies
- **Current:** `ቀኖናዊ ምልክት` (markLabel) vs `ቀዳሚው መደበኛ ምልክት` (sections)
- **English:** `Canonical mark` / `Canonical notation` — one term throughout the master.
- **Issue:** Two different renderings of the same load-bearing term in one document.
- **Suggested:** Unify on `ቀዳሚው መደበኛ ምልክት` everywhere, or update `markLabel` to match the sections.
- **Severity:** LOW

### interfaceCopy.plainLead
- **Location:** `interfaceCopy.plainLead`
- **Current:** `…AI ደራሲው ነው የሚል ጥያቄ ሳይሆን…`
- **English:** `…not a claim that AI is the author…`
- **Issue:** "ጥያቄ" means "question"; "claim" is an assertion.
- **Suggested:** `…AI ደራሲው ነው የሚል አባባል ሳይሆን…`
- **Severity:** LOW

### interfaceCopy.footerLine
- **Location:** `interfaceCopy.footerLine`
- **Current:** `ክፍት አጻጻፍ። ሰብዓዊ ኃላፊነት።`
- **English:** `Open notation. Human responsibility.`
- **Issue:** "አጻጻፍ" means "writing/composition"; the body renders "notation" as "ምልክት"/"ዘዴ".
- **Suggested:** `ክፍት ምልክት። ሰብዓዊ ኃላፊነት።`
- **Severity:** LOW

### "specification" vs "standard"
- **Location:** `interfaceCopy.specification` (`መለኪያ`) vs sections 2/3/9/21/25 (`መስፈርት`)
- **English:** `specification` is one concept; `standard` (section 2) is a separate word.
- **Issue:** "መለኪያ" and "መስፈርት" alternate for "specification", which reads as two documents.
- **Suggested:** Use `መለኪያ` for "specification" throughout (and a different word, e.g. `ደረጃ`, only where the English says "standard").
- **Severity:** LOW

## Notes
- Canonical slogan `አርቲፊሻል ኢንተለጀንስ ረድቷል። ኃላፊነቱን እኔ እወስዳለሁ።` is used verbatim in documentTitle, heroTitle, sections 1/23/26 and the end panel — matching the English pattern; no action needed.
- Section 3 defines ግዴታ ነው / ፈጽሞ ክልክል ነው / ይመከራል / አይመከርም / ይፈቀዳል with English parentheticals and uses exactly these forms in all later sections — no action needed.
- Section 22 correctly renders "authorship" as "ደራሲነት".
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
