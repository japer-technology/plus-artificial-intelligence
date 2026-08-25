# spec.sw.js — Round 2 final correction recommendations

- **Language:** Kiswahili (sw)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.sw-corrections-1.md` — all 10 findings re-verified against the current file and carried forward. Note: the round-1 `Count:` line (0 high / 4 medium / 5 low) does not match its own items, which are 4 medium / 6 low.
- **Verdict:** Largely faithful translation with consistent normative terms; all round-1 items remain, no new findings.
- **Count:** 0 high / 4 medium / 6 low

## Corrections

### Canonical slogan consistency (interfaceCopy vs sections)
- **Location:** `interfaceCopy.documentTitle` and `interfaceCopy.heroTitle` vs sections 1, 23, 26 and `end`
- **Current:** `AI ilisaidia. Ninawajibika.` (interface) vs `AI ilisaidia. Mimi ninachukua jukumu.` (body)
- **English:** `AI helped. I take responsibility.` — identical wording everywhere in the master.
- **Issue:** Two renderings of the canonical slogan in one document; the English text deliberately reuses the exact slogan.
- **Suggested:** Unify on `AI ilisaidia. Mimi ninachukua jukumu.` in documentTitle and heroTitle.
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 6 — "incidental" rendered "guessing"
- **Location:** `sections[6].body`, "Incidental or purely mechanical AI functionality…"
- **Current:** `Utendaji wa akili bandia wa kubahatisha au wa kimekanika tu…`
- **English:** `Incidental or purely mechanical AI functionality does not necessarily require +AI.`
- **Issue:** "kubahatisha" means "guessing/random"; the English "incidental" means "of minor or secondary relevance".
- **Suggested:** `Utendaji wa akili bandia wa kando au wa kimekanika tu…`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 18 — "attribution" rendered "provider identification"
- **Location:** `sections[18].body`, first paragraph
- **Current:** `…pale utambulisho wa mtoaji unahifadhiwa.`
- **English:** `…where attribution is preserved.`
- **Issue:** "utambulisho wa mtoaji" means "identification of the provider"; the English is about attribution (who is credited), not provider identity.
- **Suggested:** `…pale utambulisho wa mtunzi unahifadhiwa.`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### "specification" rendered two ways
- **Location:** `interfaceCopy.specification`, `readSpec`, `versionFooter` (`Vipimo`) vs section bodies and `end` (`fafanuzi`)
- **English:** `specification` — one term throughout the master.
- **Issue:** The chrome uses "Vipimo" while the body uses "fafanuzi" (literally "clarification/explanation"), which is both inconsistent and a weaker rendering of a normative document.
- **Suggested:** Use `Vipimo` throughout (or `maelezo ya kikanuni` if a descriptive term is preferred) and replace `fafanuzi` in sections 3, 4, 9, 16, 21 and `end`.
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### interfaceCopy.markLabel — "canonical" rendered "official"
- **Location:** `interfaceCopy.markLabel`
- **Current:** `Alama rasmi`
- **English:** `Canonical mark`
- **Issue:** "rasmi" means "official"; the body consistently renders "canonical" as "kikanuni".
- **Suggested:** `Alama ya kikanuni`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### "material/materially" rendered two ways
- **Location:** `interfaceCopy.description`, `heroLead`, `plainBody` (`kwa kiasi kikubwa`) vs section bodies (`kiwango cha maana`)
- **English:** `materially` / `material` — one term throughout the master.
- **Issue:** Two renderings of the same load-bearing term.
- **Suggested:** Unify on `kiwango cha maana` in the interface strings too.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.followedLink — "post-nominal" left in English
- **Location:** `interfaceCopy.followedLink`
- **Current:** `Maelezo ya post-nominal ya +AI`
- **English:** `+AI Post Nominal Description`
- **Issue:** "post-nominal" is left in English.
- **Suggested:** `Maelezo ya +AI baada ya jina`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.plainBody — pronoun binds to the results, not AI
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…linawajibikia uamuzi wa kuyatumia.`
- **English:** `…stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Swahili "kuyatumia" (them) binds to "matokeo" (the results).
- **Suggested:** `…linasimama nyuma ya uamuzi wa kuitumia AI.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 2 — title renders "basis of the design"
- **Location:** `sections[2].title`
- **Current:** `Msingi wa muundo`
- **English:** `Design principle`
- **Issue:** "Msingi wa muundo" reads as "basis of the design"; "kanuni" is the standard word for "principle".
- **Suggested:** `Kanuni ya muundo`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 14 — code examples translated
- **Location:** `sections[14].body`, the two `<pre><code>` blocks
- **Current:** `Mwandishi: Eric Mourant +AI` / `Mradi huu unatumia +AI.`
- **English:** `Author: Eric Mourant +AI` / `This project uses +AI.` (literal examples kept in English by the master and by the other languages)
- **Issue:** The master presents these as literal usage examples; translating them diverges from the canonical examples shown in every other language.
- **Suggested:** Restore the English blocks: `Author: Eric Mourant +AI` and `This project uses +AI.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

## Round 1 verification

- [x] Slogan split (Ninawajibika vs Mimi ninachukua jukumu) — still present, carried forward
- [x] Section 6 "kubahatisha" — still present, carried forward
- [x] Section 18 "utambulisho wa mtoaji" — still present, carried forward
- [x] Vipimo vs fafanuzi — still present, carried forward
- [x] markLabel "Alama rasmi" — still present, carried forward
- [x] kwa kiasi kikubwa vs kiwango cha maana — still present, carried forward
- [x] followedLink "post-nominal" — still present, carried forward
- [x] plainBody "kuyatumia" — still present, carried forward
- [x] Section 2 title "Msingi wa muundo" — still present, carried forward
- [x] Section 14 translated code blocks — still present, carried forward
- [!] Round-1 `Count:` line (4 medium / 5 low) disagrees with its own items (4 medium / 6 low); the round-2 count above reflects the actual items

## Notes

- Section 3 defines LAZIMA / NI MARUFUKU / INAPASWA / HAIPENDEKEZWI / INAWEZA with English parentheticals and uses exactly these forms in later sections.
- Sections 5.1 and 5.4 preserve all seven and five verbs respectively.
- Section 22 renders "authorship" as "utunzi" — fine.
- Section 7 "substantially generated" (`kwa kiasi kikubwa`) is a borderline-acceptable rendering of "substantially"; aligning it with the body's `kiwango cha maana` would remove the drift.
- Section 4 "case-sensitive" (`huzingatia ukubwa na udogo wa herufi`) is the standard Swahili formulation; no change needed.
- Section 6 correctly keeps "not necessarily" (`si lazima uhitaji`).
- Canonical slogan in the body (`Mimi ninachukua jukumu`) is byte-identical across sections 1/23/26 and `end`.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
