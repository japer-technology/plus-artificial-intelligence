# spec.de.js — Round 3 final correction recommendations

- **Language:** Deutsch (de)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.de-corrections-2.md` (0 high / 0 medium / 3 low) — status of each item verified against the current file
- **Verdict:** Clean and complete: all normative terms, HTML structure, load-bearing invariants and the slogan are verified correct; the three round-2 corrections have all been applied.
- **Count:** 0 high / 0 medium / 0 low

## Corrections

No corrections identified.

## Round 2 verification

- [x] applied — `interfaceCopy.plainBody` pronoun fix: round 2 suggested `…hinter der Entscheidung für den Einsatz von KI steht.`; the current file now reads exactly that, resolving the `es`→"Ergebnis" binding problem.
- [x] applied — accountability drift (`plainTitle` / `plainLead` / `meaningThreeBody`): all three now use `Rechenschaftspflicht` (`Sichtbare Rechenschaftspflicht.`, `Erklärung der Rechenschaftspflicht`, `überträgt die Rechenschaftspflicht nicht…`), matching the body's consistent `Rechenschaftspflicht` for "accountability".
- [x] applied — Section 14 code examples: both `<pre><code>` blocks are restored to literal English — `Author: Eric Mourant +AI` and `This project uses +AI.`.
- [x] still acceptable — Section 14 title `Software` (round-1 no-change item referenced in round-2 Notes): confirmed `Software` is the accepted German loanword; no change required.
- [x] still valid — round-2 Notes re-confirmed: section 4 "case-sensitive" rendering, section 5.4 five verbs + "otherwise released", normative-term single renderings, byte-identical slogan, section 17 JSON keys, example names, and the `data-company-example` / `data-json-example` attributes.

## Notes

- The review brief states "Section 6: all 21 list items"; the English master actually contains **17** `<li>` items in section 6 (and 17 in section 8). All 17 items in both lists are present and correctly translated in the German file.
- Slogan `KI hat geholfen. Ich übernehme die Verantwortung.` is byte-identical in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, sections 1 / 23 / 26 and `end`. The `heroLead` `<strong>` segment uses the matching long-form wording (`Künstliche Intelligenz hat wesentlich an der Arbeit mitgewirkt … übernimmt die Verantwortung`).
- Section 3 first definitions keep the English terms in parentheses — `MUSS (MUST)`, `DARF NICHT (MUST NOT)`, `SOLLTE (SHOULD)`, `SOLLTE NICHT (SHOULD NOT)`, `KANN (MAY)` — and every subsequent normative occurrence uses the same base rendering (`MUSS`/`DARF NICHT`/`SOLLTE`/`SOLLTE NICHT`/`KANN`). Plural inflections `KÖNNEN` and `SOLLTEN` are grammatical agreement, not drift. Lowercase non-normative `may`/`should` in the English are correctly rendered lowercase (`kann`, `können`, `sollte`) and never conflated with the normative uppercase forms.
- Header comment mapping table matches actual usage for the base forms. Trivial nitpick only: it documents `MUST NOT … (plural: DÜRFEN NICHT)`, but no plural `MUST NOT` occurs in the file (all subjects are singular → `DARF NICHT`), while the plural forms `SOLLTEN`/`KÖNNEN` that *do* occur are not parenthesised. Cosmetic comment asymmetry; not a translation error.
- The header comment line 3 still reads `Status: AI-generated translation, pending native-speaker review.` while the registry `status` field is `"reviewed"`. Stale comment only; does not affect runtime.
- `translationNote` is empty in the English master and populated in German (`Diese Übersetzung dient der Information. Bei Abweichungen ist der englische Originaltext das maßgebliche normative Dokument.`). This is the intended localisation behaviour, not an error.
- `interfaceCopy.highlight` → `Akzent` (with `Akzentfarbe` in `highlightAria`/`colourChanged`) is retained from round 2 as an accepted, internally consistent UI choice; a human speaker might prefer `Hervorhebung`, but it is not wrong.
- `heroLead` renders "whose name carried this link" as `deren Name mit diesem Link versehen war` (passive reversal) — retained as acceptable per round 2.
- The canonical-form placeholder `&lt;Responsible Party&gt;` is localised to `&lt;Verantwortliche Stelle&gt;` (sections 1 and 4). This is consistent with the file-wide rendering of "responsible party" as `verantwortliche Stelle` and is not a load-bearing invariant; accepted.
- Load-bearing invariants verified byte-identical: `+AI` everywhere; the section 4 non-canonical counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`; section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); example names `Eric Mourant` and `JAPER Technology`; `data-company-example` / `data-json-example` attributes; section numbering 1–26 and h4 labels 5.1–5.6.
- Tooling limitation: the bash/node sandbox backend is unusable on this host, so the HTML tag-structure and term-consistency comparison could not be run programmatically. It was performed manually by reading both files line by line; no structural or terminological drift was found.
- German-language limits: this is a careful but non-native review. The wording choices noted above (`Akzent`, `Nachrichtenübermittlung` for "messaging", `Postnominal`) are reported as acceptable rather than as errors; no invented findings.
