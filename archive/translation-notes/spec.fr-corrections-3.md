# spec.fr.js — Round 3 final correction recommendations

- **Language:** Français (fr)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.fr-corrections-2.md` (0 high / 0 medium / 2 low) — status of each item verified against the current file
- **Verdict:** The translation is complete and normatively faithful; both round-2 corrections were applied and no new errors were found.
- **Count:** 0 high / 0 medium / 0 low

## Corrections

No corrections identified.

## Round 2 verification

- [x] `interfaceCopy.description` — dropped object / softened "named" — applied. Current string now reads `+AI signifie que l’intelligence artificielle a apporté une aide substantielle au travail et qu’une personne ou organisation nommée en assume la responsabilité.`
- [x] Section 7 — "substantially generated" rendered "largely generated" — applied. Current string now reads `La partie responsable PEUT publier un contenu substantiellement généré par l’IA.`
- [x] Round-1 carry-forward item (`interfaceCopy.description`) — resolved by the same applied change.

## Notes

- All 26 sections are present, numbered 1–26 in order, with correct titles; the six `h4` labels 5.1–5.6 are present and correctly labelled.
- Normative terms are consistent throughout — `DOIT` (MUST), `NE DOIT PAS` (MUST NOT), `DEVRAIT` (SHOULD), `NE DEVRAIT PAS` (SHOULD NOT), `PEUT` (MAY) — with correct plural agreement (`DOIVENT`, `DEVRAIENT`, `PEUVENT`). Section 3 carries the English terms in parentheses at first definition as required. No term drift detected.
- The canonical slogan « L’IA m’a aidé. J’en assume la responsabilité. » is byte-identical across `documentTitle` (after the `+AI — ` prefix), `heroTitle`, sections 1/23/26, and `end`.
- Load-bearing invariants verified byte-identical: `+AI` everywhere; Section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`); Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); `data-company-example` (6 occurrences: sections 4, 11 ×2, 13) and `data-json-example` (section 17); example names `Eric Mourant` and `JAPER Technology` spelled exactly.
- Section 6 list has 17 items (the English master also has 17 — the brief's "21" does not match this master) and Section 8 has 17 items; all are present and correctly ordered. No dropped or added clauses anywhere.
- Section 9 keeps "word-by-word or element-by-element" (mot par mot ou élément par élément) and "meaningful human act of adoption" (acte humain significatif d’adoption); Section 5.4 keeps all six verbs and Section 5.6 keeps "decision to release, use or represent"; Section 24 renders "both questions" and "yes" correctly; Section 26 keeps accept/publish/transmit/deploy/otherwise release and "that decision".
- "materially assisted/helped" is rendered two ways — `a apporté une aide substantielle` (description, §2, §10, §22, §23, §24, §26) and `a contribué de manière substantielle` (heroLead, meaningOneBody, §5.1). Both are correct French with no meaning change; noted only as a very minor stylistic inconsistency, not a correction.
- `heroLead` renders English "they" (referring to "the person or organisation") as `cette partie`; acceptable and faithful, no meaning change.
- Round-2 Notes items remain present and acceptable as no-change: section 11 title `Organisations` and section 13 title `Documents` are valid French (not untranslated leftovers); section 14 title `Logiciels` (plural, cosmetic); `highlight` → `Couleur` (functional, cosmetic); `followedLink` → `postnominal` (calque, cosmetic); `end` panel `Provenance humain-IA et responsabilité` (collapses "accountability" into "responsabilité", idiomatic).
- `translationNote` is non-empty in French (`Traduction fournie à titre informatif. En cas de divergence, le texte anglais original constitue le document normatif.`) while empty in English — expected and correct for a non-source language.
- The file header comment contains no normative-term mapping table; the mapping in section 3 matches actual usage throughout.
- No unescaped backticks or `${` inside template literals; no leftover untranslated English prose.
- My French is competent for this review; the only points of translator judgment (not errors) are the "postnominal" calque and the "matérially assisted" dual rendering noted above.
