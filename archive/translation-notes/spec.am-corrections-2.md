# spec.am.js — Round 2 final correction recommendations

- **Language:** አማርኛ (am)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.am-corrections-1.md` (0 high / 2 medium / 5 low) — all 7 findings re-verified against the current file and carried forward
- **Verdict:** Faithful and complete; every round-1 finding is still present. One new meaning error found (case-sensitivity mistranslated as font size).
- **Count:** 0 high / 3 medium / 6 low

## Corrections

### Section 4 — case-sensitivity mistranslated (new in round 2)
- **Location:** `sections[4].body`, "The mark is case-sensitive."
- **Current:** `ምልክቱ የፊደል መጠንን የሚለይ ነው።`
- **English:** `The mark is case-sensitive.`
- **Issue:** `የፊደል መጠን` means "letter size" (as in font size). Case-sensitivity is about uppercase versus lowercase, not size.
- **Suggested:** `ምልክቱ በትልቅና በትንሽ ፊደል መካከል የሚለይ ነው።`
- **Severity:** MEDIUM
- **Round 1:** new in round 2

### Section 6 — "incidental" rendered as "sudden"
- **Location:** `sections[6].body`, "Incidental or purely mechanical AI functionality…"
- **Current:** `ድንገተኛ ወይም ሙሉ በሙሉ ሜካኒካል የሆነ የአርቲፊሻል ኢንተለጀንስ ተግባር…`
- **English:** `Incidental or purely mechanical AI functionality does not necessarily require +AI.`
- **Issue:** `ድንገተኛ` means "sudden/unexpected"; the English "incidental" means "of minor or secondary relevance".
- **Suggested:** `ተጓዳኝ ወይም ሙሉ በሙሉ ሜካኒካል የሆነ የአርቲፊሻል ኢንተለጀንስ ተግባር…`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 18 — "attribution" rendered as "ownership"
- **Location:** `sections[18].body`, first paragraph
- **Current:** `የ +AI ምልክት ባለቤትነት መጠቀሱ በሚጠበቅበት ጊዜ የውጤቱን ተገቢ ለውጦች አልፎ መቆየት ይመከራል።`
- **English:** `The +AI notation SHOULD survive reasonable transformations of an artifact where attribution is preserved.`
- **Issue:** `ባለቤትነት መጠቀሱ` means "ownership being mentioned"; the English is about attribution (who is credited), not ownership.
- **Suggested:** `የ +AI ምልክት ደራሲነት መጠቀስ በሚጠበቅበት ጊዜ የውጤቱን ተገቢ ለውጦች አልፎ መቆየት ይመከራል።`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 5.4 — five verbs collapsed to four
- **Location:** `sections[5].body`, h4 5.4 paragraph
- **Current:** `…ውጤቱ ይታተም፣ ይተላለፍ፣ ይሰማራ፣ ይቀርብ ወይም በሌላ መንገድ ይለቀቅ ወይም አይለቀቅ…`
- **English:** `…whether the artifact would be published, transmitted, deployed, submitted, presented or otherwise released.`
- **Issue:** The English list has five verbs; the Amharic list has four, collapsing "submitted" and "presented" into `ይቀርብ`.
- **Suggested:** `…ውጤቱ ይታተም፣ ይተላለፍ፣ ይሰማራ፣ ይገባል፣ ይቀርብ ወይም በሌላ መንገድ ይለቀቅ ወይም አይለቀቅ…`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### "canonical" rendered two ways
- **Location:** `interfaceCopy.markLabel` (`ቀኖናዊ ምልክት`) vs section titles 4, 23, 26 and bodies (`ቀዳሚው መደበኛ ምልክት`)
- **English:** `Canonical mark` / `Canonical notation` — one term throughout the master.
- **Issue:** Two different renderings of the same load-bearing term in one document.
- **Suggested:** Unify on `ቀዳሚው መደበኛ ምልክት` everywhere, or update `markLabel` to match the sections.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.plainLead — "claim" as "question"
- **Location:** `interfaceCopy.plainLead`
- **Current:** `…AI ደራሲው ነው የሚል ጥያቄ ሳይሆን…`
- **English:** `…not a claim that AI is the author…`
- **Issue:** `ጥያቄ` means "question"; "claim" is an assertion.
- **Suggested:** `…AI ደራሲው ነው የሚል አባባል ሳይሆን…`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.footerLine — "notation" as "writing"
- **Location:** `interfaceCopy.footerLine`
- **Current:** `ክፍት አጻጻፍ። ሰብዓዊ ኃላፊነት።`
- **English:** `Open notation. Human responsibility.`
- **Issue:** `አጻጻፍ` means "writing/composition"; the body renders "notation" as `ምልክት`/`ዘዴ`.
- **Suggested:** `ክፍት ምልክት። ሰብዓዊ ኃላፊነት።`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### "specification" rendered two ways
- **Location:** `interfaceCopy.specification` + `versionFooter` (`መለኪያ`) vs sections 2/3/9/21/25 and `end` (`መስፈርት`)
- **English:** `specification` is one concept throughout.
- **Issue:** `መለኪያ` and `መስፈርት` alternate for "specification", which reads as two documents.
- **Suggested:** Use `መለኪያ` for "specification" throughout (and a different word, e.g. `ደረጃ`, only where the English says "standard").
- **Severity:** LOW
- **Round 1:** carried forward (verified still present; round 2 adds `versionFooter` and `end` to the affected locations)

### Section 8 — "hallucinations" terminology (new in round 2)
- **Location:** `sections[8].body`, "the artifact contains no hallucinations"
- **Current:** `ውጤቱ ምንም የሐሰት ፈጠራ ያለመያዙን`
- **English:** `the artifact contains no hallucinations`
- **Issue:** `የሐሰት ፈጠራ` means "false fabrication/invention", which reads as deliberate lying; the established AI term is hallucination.
- **Suggested:** `ውጤቱ ምንም ቅዠት (hallucination) ያለመያዙን`
- **Severity:** LOW
- **Round 1:** new in round 2

## Round 1 verification

- [x] Section 6 "ድንገተኛ" — still present, carried forward
- [x] Section 18 "ባለቤትነት" — still present, carried forward
- [x] Section 5.4 verb list — still present, carried forward
- [x] "canonical" two renderings — still present, carried forward
- [x] plainLead "ጥያቄ" — still present, carried forward
- [x] footerLine "አጻጻፍ" — still present, carried forward
- [x] specification/standard alternation — still present, carried forward (location list extended)

## Notes

- Canonical slogan `አርቲፊሻል ኢንተለጀንስ ረድቷል። ኃላፊነቱን እኔ እወስዳለሁ።` used verbatim in documentTitle, heroTitle, sections 1/23/26 and the end panel — matches the English pattern.
- Section 3 defines ግዴታ ነው / ፈጽሞ ክልክል ነው / ይመከራል / አይመከርም / ይፈቀዳል with English parentheticals and uses exactly these forms in later sections.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
