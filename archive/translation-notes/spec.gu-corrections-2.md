# spec.gu.js — Round 2 final correction recommendations

- **Language:** ગુજરાતી (gu)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.gu-corrections-1.md` (1 high / 3 medium / 1 low) — all 5 findings re-verified against the current file and carried forward unchanged
- **Verdict:** Prose is mostly accurate, but the HIGH-severity MUST NOT weakening remains the key blocker: three absolute prohibitions still read as recommendations.
- **Count:** 1 high / 3 medium / 1 low

## Corrections

### Normative terminology — MUST NOT weakened to "should not"
- **Location:** `sections[3].body` (last paragraph), `sections[11].body`, `sections[15].body`
- **Current:**
  - Section 4: `તેમને <code>+AI</code> નો પ્રમાણભૂત અર્થ ધરાવતા માનવા જોઈએ નહીં.`
  - Section 12: `હાયપરલિંકે દૃશ્યમાન સંકેતલિપિ બદલવી જોઈએ નહીં.`
  - Section 16: `રજૂ કરવું જોઈએ નહીં.`
- **English:**
  - Section 4: `they MUST NOT be assumed to carry the canonical +AI meaning unless explicitly defined.`
  - Section 12: `A hyperlink MUST NOT alter the visible notation.`
  - Section 16: `<code>+AI</code> MUST NOT be represented as replacing any more specific disclosure…`
- **Issue:** Section 3 defines MUST NOT as `પ્રતિબંધિત છે` (absolute prohibition), but all three actual MUST NOT obligations are rendered `જોઈએ નહીં` ("should not"). This downgrades an absolute prohibition to a strong recommendation — exactly the kind of requirement-strength change the translation rules prohibit — and reuses the plain "should" word, blurring the line between MUST NOT and SHOULD NOT.
- **Suggested:** Use the defined term, e.g. Section 4 `તેમને … ધરાવતા માનવા પ્રતિબંધિત છે`; Section 12 `હાયપરલિંકે દૃશ્યમાન સંકેતલિપિ બદલવી પ્રતિબંધિત છે`; Section 16 `… રજૂ કરવું પ્રતિબંધિત છે`.
- **Severity:** HIGH
- **Round 1:** carried forward (verified still present in all three locations)

### Normative terminology — MAY drifts to "can be" in some sections
- **Location:** `sections[3].body` (last paragraph), `sections[14].body` (first paragraph), `sections[21].body` (two paragraphs)
- **Current:**
  - Section 4: `પ્રકારો પછીથી વ્યાખ્યાયિત થઈ શકે છે`
  - Section 15: `સંકેતલિપિ છબીઓ … સાથે હોઈ શકે છે`
  - Section 22: `સામગ્રી હોઈ શકે અને તેમ છતાં … ઠરી શકે` (×2)
- **English:** `Variants MAY later be defined…` / `The notation MAY accompany…` / `An artifact MAY contain… and still qualify.`
- **Issue:** Section 3 defines MAY as `માન્ય છે` (and most later sections use `માન્ય છે`), but these passages render MAY as `થઈ શકે છે` / `હોઈ શકે છે` ("can happen / can be"). This drifts from the single established rendering for the normative MAY.
- **Suggested:** Use `માન્ય છે` consistently, e.g. Section 4 `પ્રકારો પછીથી વ્યાખ્યાયિત કરવા માન્ય છે`; Section 15 `સંકેતલિપિ છબીઓ … સાથે હોવું માન્ય છે`; Section 22 `સામગ્રી હોવી માન્ય છે અને તેમ છતાં … ઠરી શકે`.
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present in all locations)

### Terminology — "specification" rendered as "clarification" in the chrome
- **Location:** `interfaceCopy.specification` / `interfaceCopy.readSpec` / `interfaceCopy.versionFooter` / `untranslatedNotice.headline` vs `sections[2].body`, `sections[3].body`, `sections[8].body`, `sections[20].body`, `end`
- **Current:**
  - `interfaceCopy.specification`: `સ્પષ્ટીકરણ`; `interfaceCopy.readSpec`: `સ્પષ્ટીકરણ વાંચો`; `interfaceCopy.versionFooter`: `સ્પષ્ટીકરણ v0.1`; `untranslatedNotice.headline`: `નીચેનું સ્પષ્ટીકરણ અંગ્રેજીમાં દર્શાવવામાં આવ્યું છે.`
  - body/`end`: `વિશિષ્ટતા` (e.g. `આ વિશિષ્ટતામાં`, `+AI વિશિષ્ટતા v0.1`)
- **English:** `Specification v0.1` / `+AI Specification v0.1`
- **Issue:** સ્પષ્ટીકરણ means "clarification", not "specification"; the body and closing panel correctly use વિશિષ્ટતા. The version string therefore appears as both `સ્પષ્ટીકરણ v0.1` and `વિશિષ્ટતા v0.1`.
- **Suggested:** Use `વિશિષ્ટતા` throughout the chrome (`વિશિષ્ટતા વાંચો`, `વિશિષ્ટતા v0.1`, and in the notice headline).
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Untranslated role labels and salutation
- **Location:** `sections[11].body`, `sections[12].body`, `sections[14].body`
- **Current:**
  - Section 12: `<strong>Kindest regards,<br>Eric Mourant +AI</strong>`
  - Section 13: `<strong>Author: Eric Mourant +AI</strong>`, `<strong>Prepared by: Eric Mourant +AI</strong>`, `<strong>Issued by: JAPER Technology +AI</strong>`
  - Section 15: `<strong>Created by Eric Mourant +AI</strong>`
- **English:** `Kindest regards,` / `Author:` / `Prepared by:` / `Issued by:` / `Created by`
- **Issue:** These role labels and the salutation are translatable prose (not example names) and are left in English in a "reviewed" translation. Sibling languages localise them.
- **Suggested:** Localise while keeping the names byte-identical, e.g. `સાદર,` / `લેખક:` / `દ્વારા તૈયાર:` / `દ્વારા જારી:` / `દ્વારા સર્જિત`.
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### interfaceCopy.markLabel — "Canonical mark" conflated with "standard mark"
- **Location:** `interfaceCopy.markLabel`
- **Current:** `માનક ચિહ્ન`
- **English:** `Canonical mark`
- **Issue:** માનક means "standard"; elsewhere "canonical" is પ્રમાણભૂત and "standard" (sections 2, 8) is ધોરણ. The label conflates the two.
- **Suggested:** `પ્રમાણભૂત ચિહ્ન`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

## Round 1 verification

- [x] MUST NOT weakened (sections 4, 12, 16) — still present, carried forward as HIGH
- [x] MAY drift (sections 4, 15, 22) — still present, carried forward
- [x] સ્પષ્ટીકરણ vs વિશિષ્ટતા — still present, carried forward
- [x] Untranslated role labels (sections 12, 13, 15) — still present, carried forward
- [x] markLabel "માનક ચિહ્ન" — still present, carried forward

## Notes

- MUST and SHOULD / SHOULD NOT renderings are otherwise consistent (આવશ્યક છે / સલાહભર્યું છે / સલાહભર્યું નથી), with the English terms in parentheses at section 3 first definition.
- The canonical shorthand `AI એ મદદ કરી. જવાબદારી મારી છે.` is identical across the hero, sections 1/23/26, and `end`.
- "responsibility" → જવાબદારી vs "accountability" → જવાબદેહી is a consistent and appropriate distinction.
- Section 4 "case-sensitive" is correctly rendered (`ચિહ્ન કેસ-સંવેદનશીલ છે`).
- Section 5.4 renders "submitted" as the transliteration `સબમિટ` rather than a Gujarati verb; all six release channels are present, so this is a style point only.
- Section 14's code-block examples `Author: Eric Mourant +AI` and `This project uses +AI.` are left in English; this matches the English master's example-code treatment, but a reviewer should confirm whether they should be localised like the section 13 labels.
- `interfaceCopy.plainBody`'s `તેનો ઉપયોગ` ("use it") has the same mild antecedent ambiguity as several sibling languages; the object is the AI, not the result. Cosmetic.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
