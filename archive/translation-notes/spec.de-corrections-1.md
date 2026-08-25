# spec.de.js — Round 1 correction suggestions

- **Language:** Deutsch (de)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** The German translation is highly accurate, with all normative terms rendered consistently and no meaning errors; only a few low-severity wording and terminology-consistency points remain.
- **Count:** 0 high / 0 medium / 3 low

## Corrections

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `Es sagt aus, dass KI das Ergebnis wesentlich beeinflusst hat und eine identifizierbare Person oder Organisation hinter der Entscheidung steht, es zu verwenden.`
- **English:** `It says AI materially influenced the result and an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** In English, "the decision to use it" refers to the decision to use **AI**. In the German, the pronoun `es` can only bind to the neuter noun "das Ergebnis" ("KI" is feminine), so it reads as "the decision to use the result" — a subtle but real shift in what the person is standing behind.
- **Suggested:** `Es sagt aus, dass KI das Ergebnis wesentlich beeinflusst hat und eine identifizierbare Person oder Organisation hinter der Entscheidung für den Einsatz von KI steht.`
- **Severity:** LOW

### interfaceCopy.plainTitle / plainLead / meaningThreeBody — "accountability" rendering drift
- **Location:** `interfaceCopy.plainTitle`, `interfaceCopy.plainLead`, `interfaceCopy.meaningThreeBody`
- **Current:** `Sichtbare Verantwortung.` (plainTitle); `…eine Verantwortungserklärung…` (plainLead); `Die benannte Partei überträgt die Verantwortlichkeit nicht…` (meaningThreeBody)
- **English:** `Visible accountability.`; `…an accountability declaration…`; `The named party does not transfer accountability…`
- **Issue:** The specification body translates the distinct term "accountability" consistently as `Rechenschaftspflicht` (sections 2, 8, 20, 21, `end`), while `responsibility` is `Verantwortung`. In the chrome the same English word "accountability" is rendered three different ways — `Verantwortung` (plainTitle/plainLead) and `Verantwortlichkeit` (meaningThreeBody) — which blurs the deliberate responsibility/accountability distinction the spec keeps separate.
- **Suggested:** Prefer `Rechenschaftspflicht` for "accountability": plainTitle `Sichtbare Rechenschaftspflicht.`; plainLead `…eine Erklärung der Rechenschaftspflicht…`; meaningThreeBody `Die benannte Partei überträgt die Rechenschaftspflicht nicht auf ein KI-System oder dessen Anbieter.`
- **Severity:** LOW

### Section 14 — Software (title kept in English)
- **Location:** `sections[14].title`
- **Current:** `Software`
- **English:** `Software`
- **Issue:** Baseline flags this title as identical to English. "Software" is an established loanword in German (listed in Duden) and the natural term here; leaving it untranslated is acceptable, so this is noted only for the record, not as an error.
- **Suggested:** Keep `Software` (acceptable loanword). No change required.
- **Severity:** LOW

## Notes
- `interfaceCopy.highlight` ("Highlight") is rendered `Akzent` ("accent"). Defensible in a UI colour context but slightly narrower than the source; a human speaker may prefer `Hervorhebung`/`Markierung` for the highlight-colour control.
- `interfaceCopy.heroLead` renders "whose name carried this link" as `deren Name mit diesem Link versehen war` (a passive reversal — "the name was furnished with the link" rather than "the name bore the link"). Semantically equivalent; no correction needed, but worth a native-speaker glance.
- All five normative terms use a single rendering (`MUSS`/`DARF NICHT`/`SOLLTE`/`SOLLTE NICHT`/`KANN`) with English in parentheses at section 3 first definition, and plural inflections (`KÖNNEN`, `SOLLTEN`) are grammatical, not drift.
- Section 17 JSON keys, `+AI`, example names, and `data-company-example`/`data-json-example` attributes are all preserved byte-identical.
