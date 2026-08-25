# spec.sw.js — Round 1 correction suggestions

- **Language:** Kiswahili (sw)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A largely faithful translation with consistent normative terms and complete section 5.4/5.1 verb lists; four wording choices shift meaning and the interface slogan diverges from the canonical body slogan.
- **Count:** 0 high / 4 medium / 5 low

## Corrections

### Canonical slogan consistency (interfaceCopy vs sections)
- **Location:** `interfaceCopy.documentTitle` and `interfaceCopy.heroTitle` vs sections 1, 23, 26 and `end`
- **Current:** `AI ilisaidia. Ninawajibika.` (interface) vs `AI ilisaidia. Mimi ninachukua jukumu.` (body)
- **English:** `AI helped. I take responsibility.` — identical wording everywhere in the master.
- **Issue:** Two renderings of the canonical slogan in one document; the English text deliberately reuses the exact slogan.
- **Suggested:** Unify on `AI ilisaidia. Mimi ninachukua jukumu.` in documentTitle and heroTitle.
- **Severity:** MEDIUM

### Section 6 — Material assistance
- **Location:** `sections[6].body`, "Incidental or purely mechanical AI functionality…"
- **Current:** `Utendaji wa akili bandia wa kubahatisha au wa kimekanika tu…`
- **English:** `Incidental or purely mechanical AI functionality does not necessarily require +AI.`
- **Issue:** "kubahatisha" means "guessing/random"; the English "incidental" means "of minor or secondary relevance".
- **Suggested:** `Utendaji wa akili bandia wa kando au wa kimekanika tu…`
- **Severity:** MEDIUM

### Section 18 — Persistence
- **Location:** `sections[18].body`, first paragraph
- **Current:** `…pale utambulisho wa mtoaji unahifadhiwa.`
- **English:** `…where attribution is preserved.`
- **Issue:** "utambulisho wa mtoaji" means "identification of the provider"; the English is about attribution (who is credited), not provider identity.
- **Suggested:** `…pale utambulisho wa mtunzi unahifadhiwa.`
- **Severity:** MEDIUM

### "specification" rendered two ways
- **Location:** `interfaceCopy.specification`, `readSpec`, `versionFooter` (`Vipimo`) vs section bodies and `end` (`fafanuzi`)
- **English:** `specification` — one term throughout the master.
- **Issue:** The chrome uses "Vipimo" while the body uses "fafanuzi" (literally "clarification/explanation"), which is both inconsistent and a weaker rendering of a normative document.
- **Suggested:** Use `Vipimo` throughout (or `maelezo ya kikanuni` if a descriptive term is preferred) and replace `fafanuzi` in sections 3, 4, 9, 16, 21 and `end`.
- **Severity:** MEDIUM

### interfaceCopy.markLabel
- **Location:** `interfaceCopy.markLabel`
- **Current:** `Alama rasmi`
- **English:** `Canonical mark`
- **Issue:** "rasmi" means "official"; the body consistently renders "canonical" as "kikanuni".
- **Suggested:** `Alama ya kikanuni`
- **Severity:** LOW

### "material/materially" rendered two ways
- **Location:** `interfaceCopy.description`, `heroLead`, `plainBody` (`kwa kiasi kikubwa`) vs section bodies (`kiwango cha maana`)
- **English:** `materially` / `material` — one term throughout the master.
- **Issue:** Two renderings of the same load-bearing term.
- **Suggested:** Unify on `kiwango cha maana` in the interface strings too.
- **Severity:** LOW

### interfaceCopy.followedLink
- **Location:** `interfaceCopy.followedLink`
- **Current:** `Maelezo ya post-nominal ya +AI`
- **English:** `+AI Post Nominal Description`
- **Issue:** "post-nominal" is left in English.
- **Suggested:** `Maelezo ya +AI baada ya jina`
- **Severity:** LOW

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…linawajibikia uamuzi wa kuyatumia.`
- **English:** `…stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Swahili "kuyatumia" (them) binds to "matokeo" (the results).
- **Suggested:** `…linasimama nyuma ya uamuzi wa kuitumia AI.`
- **Severity:** LOW

### Section 2 — Design principle
- **Location:** `sections[2].title`
- **Current:** `Msingi wa muundo`
- **English:** `Design principle`
- **Issue:** "Msingi wa muundo" reads as "basis of the design"; "kanuni" is the standard word for "principle".
- **Suggested:** `Kanuni ya muundo`
- **Severity:** LOW

### Section 14 — Software (code examples translated)
- **Location:** `sections[14].body`, the two `<pre><code>` blocks
- **Current:** `Mwandishi: Eric Mourant +AI` / `Mradi huu unatumia +AI.`
- **English:** `Author: Eric Mourant +AI` / `This project uses +AI.` (literal examples kept in English by the master and by the other languages)
- **Issue:** The master presents these as literal usage examples; translating them diverges from the canonical examples shown in every other language.
- **Suggested:** Restore the English blocks: `Author: Eric Mourant +AI` and `This project uses +AI.`
- **Severity:** LOW

## Notes
- Section 3 defines LAZIMA / NI MARUFUKU / INAPASWA / HAIPENDEKEZWI / INAWEZA with English parentheticals and uses exactly these forms in later sections — no action needed.
- Sections 5.1 and 5.4 preserve all seven and five verbs respectively.
- Section 22 correctly renders "authorship" as "utunzi".
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
