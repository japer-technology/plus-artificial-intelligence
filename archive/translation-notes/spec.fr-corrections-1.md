# spec.fr.js — Round 1 correction suggestions

- **Language:** Français (fr)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** The French translation is essentially accurate and normatively faithful; only trivial polish remains.
- **Count:** 0 high / 0 medium / 1 low

## Corrections

### interfaceCopy.description
- **Location:** `interfaceCopy.description`
- **Current:** `+AI signifie que l’intelligence artificielle a apporté une aide substantielle et qu’une personne ou organisation identifiée en assume la responsabilité.`
- **English:** `+AI means artificial intelligence materially assisted the work and a named person or organisation accepts responsibility for it.`
- **Issue:** The object of the assistance (« le travail », "the work") is dropped, so "a apporté une aide substantielle" does not say what was helped, and "en" (in "en assume la responsabilité") is left without a clear antecedent. "named" is also softened to "identifiée", which is acceptable but "nommée" is closer to the source.
- **Suggested:** `+AI signifie que l’intelligence artificielle a apporté une aide substantielle au travail et qu’une personne ou organisation nommée en assume la responsabilité.`
- **Severity:** LOW

## Notes
- Section 11 title `Organisations` and section 13 title `Documents` are byte-identical to English, but both are also correct French plurals, so they are not untranslated leftovers — no change needed.
- Section 14 title `Logiciels` (plural) is grammatically fine, but the mass-noun English "Software" reads more naturally as singular `Logiciel`. Cosmetic only.
- `interfaceCopy.highlight` renders the "Highlight" label as `Couleur` ("colour"); it is functional but `Surlignage` would be more precise. Cosmetic only.
- `interfaceCopy.followedLink` uses `postnominal` (a direct calque); understandable, but `post-nominal` or a rephrasing would read better. Cosmetic only.
- Normative terms are consistent throughout (DOIT / NE DOIT PAS / DEVRAIT / NE DEVRAIT PAS / PEUT, with correct plural agreement such as "DOIVENT", "DEVRAIENT", "PEUVENT"), and section 3 carries the English terms in parentheses at first definition as required.
- The `end` panel translates "Human-AI Provenance and Accountability" as "Provenance humain-IA et responsabilité", collapsing "accountability" into "responsabilité"; this is idiomatic French and acceptable.
