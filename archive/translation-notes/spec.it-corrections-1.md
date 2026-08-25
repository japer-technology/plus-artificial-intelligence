# spec.it.js — Round 1 correction suggestions

- **Language:** Italiano (it)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** The Italian translation is complete and normatively faithful (no dropped clauses, added claims, or mis-scoped negations); the remaining issues are terminology consistency between the body and the interface chrome.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### interfaceCopy.markLabel
- **Location:** `interfaceCopy.markLabel` (also `meansHeading` and `plainLead`)
- **Current:** `Segno canonico` (and `Cosa dichiara il segno`; `Il segno è una dichiarazione di responsabilità…`)
- **English:** `Canonical mark` (and `What the mark says`; `The mark is an accountability declaration…`)
- **Issue:** "mark" is rendered as «marchio» consistently throughout the reviewed body (sections 4, 5, 6, 9, 10, 15, 18, 22, 24, 25, 26 — e.g. «Il marchio canonico è», «Significato del marchio»), but the interface chrome uses «segno» in `markLabel`, `meansHeading`, and `plainLead`. This splits one core concept across two words. Standardise on «marchio» to match the body (or, if «segno» is preferred, update the body to match).
- **Suggested:** `Marchio canonico` (and `Cosa dichiara il marchio`; `Il marchio è una dichiarazione di responsabilità…`)
- **Severity:** LOW

### interfaceCopy.description
- **Location:** `interfaceCopy.description`
- **Current:** `+AI significa che l’intelligenza artificiale ha contribuito in modo sostanziale all’opera e che una persona o un’organizzazione identificata ne accetta la responsabilità.`
- **English:** `+AI means artificial intelligence materially assisted the work and a named person or organisation accepts responsibility for it.`
- **Issue:** "named" is rendered «indicata» everywhere else (sections 21, 22, 23 and `meaningThreeBody`: «la parte indicata», «la persona od organizzazione indicata»), but «identificata» here. «identificata» (identified) is also softer than «named». Standardise on «indicata» (or use the more literal «nominata» throughout).
- **Suggested:** `+AI significa che l’intelligenza artificiale ha contribuito in modo sostanziale all’opera e che una persona o un’organizzazione indicata ne accetta la responsabilità.`
- **Severity:** LOW

## Notes
- Section 14 title `Software` is byte-identical to English, but "software" is a standard accepted Italian loanword, so it is not an untranslated leftover — no change needed. (All other titles are translated: `Organizzazioni`, `Documenti`, etc.)
- `interfaceCopy.highlight` renders "Highlight" as «Colore» ("colour"); functional, but «Evidenziazione» would be more precise. Cosmetic.
- `interfaceCopy.followedLink` uses «postnominale» (a calque of "post nominal"); understandable but uncommon. Cosmetic.
- `interfaceCopy.colourChanged` renders "changed to" as «è stato impostato su» ("has been set to"); semantically equivalent, no action required.
- The header comment (line 4) says "Interface chrome: AI-generated, pending native-speaker review", but `status` is `"reviewed"`. Reconcile the two before final sign-off; the chrome/body terminology drift above is consistent with the chrome being as-yet unreviewed.
- Normative terms are consistent throughout (DEVE / NON DEVE / DOVREBBE / NON DOVREBBE / PUÒ, with plural forms DEVONO / NON DEVONO / DOVREBBERO / NON DOVREBBERO / POSSONO), and section 3 carries the English terms in parentheses at first definition as required.
- The `end` panel translates "Human-AI Provenance and Accountability" as «Provenienza uomo-IA e responsabilità», collapsing "accountability" into "responsabilità"; idiomatic and consistent with the rest of the file.
