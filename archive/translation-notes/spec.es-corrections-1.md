# spec.es.js — Round 1 correction suggestions

- **Language:** Español (es)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** The Spanish translation is essentially accurate and normatively faithful; only minor precision and consistency polish remains.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### interfaceCopy.description
- **Location:** `interfaceCopy.description`
- **Current:** `+AI significa que la inteligencia artificial ayudó materialmente y que una persona u organización identificada acepta la responsabilidad.`
- **English:** `+AI means artificial intelligence materially assisted the work and a named person or organisation accepts responsibility for it.`
- **Issue:** The object of the assistance ("the work" / «el trabajo») is dropped, so "ayudó materialmente" does not say what was helped. "named" is also softened to "identificada" (see the terminology note below); "nombrada" is closer to the source.
- **Suggested:** `+AI significa que la inteligencia artificial ayudó materialmente al trabajo y que una persona u organización nombrada acepta la responsabilidad por él.`
- **Severity:** LOW

### Section 22 — Relationship to authorship
- **Location:** `sections[22].body`, final sentence ("the named party takes responsibility for the result")
- **Current:** `la IA contribuyó materialmente y la parte identificada asume la responsabilidad por el resultado.`
- **English:** `AI materially assisted, and the named party takes responsibility for the result.`
- **Issue:** "named party" is rendered inconsistently across the file: «la parte nombrada» in section 21, but «la parte identificada» in section 22 (and «persona u organización identificada» in section 23 and `interfaceCopy.description`). "identified" is a softer, less precise reading of "named" (which means "whose name is given"). Use one consistent term, preferably «nombrada».
- **Suggested:** `la IA contribuyó materialmente y la parte nombrada asume la responsabilidad por el resultado.`
- **Severity:** LOW

## Notes
- Section 14 title `Software` is byte-identical to English, but "software" is a standard accepted Spanish loanword, so it is not an untranslated leftover — no change needed. (The remaining titles are all translated: `Organizaciones`, `Documentos`, etc.)
- Section 4 renders "The canonical human-readable form is" as «La forma canónica legible es», dropping the "human-" qualifier. Since section 17 uses «legible por máquinas», adding «por humanos» would restore the intended contrast. Cosmetic.
- Section 14 translates "commits" as «confirmaciones»; this is defensible, but many Spanish technical texts keep "commits" (or write «confirmaciones (commits)») since it is a Git term of art. Cosmetic.
- `interfaceCopy.highlight` renders "Highlight" as «Color»; functional, but «Resaltado» or «Sublimado» would be more precise. Cosmetic.
- `interfaceCopy.followedLink` uses «posnominal» (a calque of "post nominal"); understandable, but «posnominal» is uncommon and a rephrasing would read better. Cosmetic.
- Normative terms are consistent throughout (DEBE / NO DEBE / DEBERÍA / NO DEBERÍA / PUEDE, with correct plural agreement such as «DEBERÍAN», «PUEDEN»), and section 3 carries the English terms in parentheses at first definition as required.
- The `end` panel translates "Human-AI Provenance and Accountability" as «Procedencia humano-IA y responsabilidad», collapsing "accountability" into "responsabilidad"; idiomatic and acceptable.
