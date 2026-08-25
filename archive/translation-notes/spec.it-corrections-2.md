# spec.it.js — Round 2 final correction recommendations

- **Language:** Italiano (it)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.it-corrections-1.md` (0 high / 0 medium / 2 low) — both findings re-verified against the current file and carried forward
- **Verdict:** Complete and normatively faithful (no dropped clauses, added claims, or mis-scoped negations); one new low-severity consistency note added.
- **Count:** 0 high / 0 medium / 3 low

## Corrections

### "mark" rendered «segno» in chrome, «marchio» in body
- **Location:** `interfaceCopy.markLabel` (also `meansHeading` and `plainLead`)
- **Current:** `Segno canonico` (and `Cosa dichiara il segno`; `Il segno è una dichiarazione di responsabilità…`)
- **English:** `Canonical mark` (and `What the mark says`; `The mark is an accountability declaration…`)
- **Issue:** "mark" is rendered as «marchio» consistently throughout the reviewed body (sections 4, 5, 6, 9, 10, 15, 18, 22, 24, 25, 26 — e.g. «Il marchio canonico è», «Significato del marchio»), but the interface chrome uses «segno» in `markLabel`, `meansHeading`, and `plainLead`. This splits one core concept across two words. Standardise on «marchio» to match the body (or, if «segno» is preferred, update the body to match).
- **Suggested:** `Marchio canonico` (and `Cosa dichiara il marchio`; `Il marchio è una dichiarazione di responsabilità…`)
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.description — "named" rendered "identificata"
- **Location:** `interfaceCopy.description`
- **Current:** `+AI significa che l’intelligenza artificiale ha contribuito in modo sostanziale all’opera e che una persona o un’organizzazione identificata ne accetta la responsabilità.`
- **English:** `+AI means artificial intelligence materially assisted the work and a named person or organisation accepts responsibility for it.`
- **Issue:** "named" is rendered «indicata» everywhere else (sections 21, 22, 23 and `meaningThreeBody`: «la parte indicata», «la persona od organizzazione indicata»), but «identificata» here. «identificata» (identified) is also softer than «named». Standardise on «indicata» (or use the more literal «nominata» throughout).
- **Suggested:** `+AI significa che l’intelligenza artificiale ha contribuito in modo sostanziale all’opera e che una persona o un’organizzazione indicata ne accetta la responsabilità.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 14 — code examples translated instead of kept as literal English (new in round 2)
- **Location:** `sections[14].body`, both `<pre><code>` blocks
- **Current:** `<pre><code>Autore: Eric Mourant +AI</code></pre>` and `<pre><code>Questo progetto usa +AI.</code></pre>`
- **English:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>`
- **Issue:** The master presents these as literal example strings (repository code); several sibling languages keep them byte-identical in English. Section 13 already localises the same labels as visible prose (`Autore: …`), so the code examples can safely stay English. Either choice is defensible, but the project should pick one convention for all languages.
- **Suggested:** Restore `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>` (or consciously adopt the localised versions project-wide).
- **Severity:** LOW
- **Round 1:** new in round 2

## Round 1 verification

- [x] markLabel «Segno canonico» / meansHeading / plainLead — still present, carried forward
- [x] description «identificata» — still present, carried forward

## Notes

- Section 14 title `Software` is byte-identical to English, but "software" is a standard accepted Italian loanword — not an untranslated leftover; no change needed.
- `interfaceCopy.highlight` renders "Highlight" as «Colore» ("colour"); functional, but «Evidenziazione» would be more precise. Cosmetic.
- `interfaceCopy.followedLink` uses «postnominale» (a calque of "post nominal"); understandable but uncommon. Cosmetic.
- `interfaceCopy.colourChanged` renders "changed to" as «è stato impostato su» ("has been set to"); semantically equivalent, no action required.
- The header comment says "Interface chrome: AI-generated, pending native-speaker review", but `status` is `"reviewed"`. Reconcile the two before final sign-off; the chrome/body terminology drift above is consistent with the chrome being as-yet unreviewed.
- Normative terms are consistent throughout (DEVE / NON DEVE / DOVREBBE / NON DOVREBBE / PUÒ, with plural forms), and section 3 carries the English terms in parentheses at first definition as required.
- Section 7 correctly renders "substantially generated" as «generati in misura sostanziale» — no drift.
- Section 5.4 keeps all five verbs plus "otherwise released".
- The `end` panel translates "Human-AI Provenance and Accountability" as «Provenienza uomo-IA e responsabilità», collapsing "accountability" into "responsabilità"; idiomatic and consistent with the rest of the file.
- Canonical slogan «L’IA mi ha aiutato. Me ne assumo la responsabilità.» is byte-identical across documentTitle, heroTitle, sections 1/23/26 and `end`.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
