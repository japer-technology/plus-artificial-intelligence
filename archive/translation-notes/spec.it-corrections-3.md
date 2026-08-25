# spec.it.js — Round 3 final correction recommendations

- **Language:** Italiano (it)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.it-corrections-2.md` (0 high / 0 medium / 3 low) — status of each item verified against the current file
- **Verdict:** Complete and normatively faithful; all three round-3 items are now resolved in the file ("named" already read `indicata`; "materially assisted" unified on `ha assistito` in the chrome; "release" chrome aligned with the body's `diffondere`).
- **Count:** 0 high / 0 medium / 3 low

## Corrections

### interfaceCopy.description — "named" still rendered «identificata» instead of «indicata»
- **Location:** `interfaceCopy.description`
- **Current:** `+AI significa che l’intelligenza artificiale ha contribuito in modo sostanziale all’opera e che una persona o un’organizzazione identificata ne accetta la responsabilità.`
- **English:** `+AI means artificial intelligence materially assisted the work and a named person or organisation accepts responsibility for it.`
- **Issue:** "named" is rendered «indicata» everywhere else (sections 21, 22, 23 and `meaningThreeBody`: «la parte indicata», «la persona od organizzazione indicata»), but «identificata» here. «identificata» ("identified") is also softer than "named" and overlaps with the distinct «identificabile» ("identifiable") used in section 2 and section 21. This was flagged in round 1 and round 2 and remains unapplied.
- **Suggested:** `+AI significa che l’intelligenza artificiale ha contribuito in modo sostanziale all’opera e che una persona o un’organizzazione indicata ne accetta la responsabilità.`
- **Severity:** LOW
- **Round 2:** carried forward (still present)
- **Status:** no change — suggested wording already present in spec.it.js (description already reads `indicata`)

### "materially assisted" split between «ha contribuito in modo sostanziale» and «ha assistito in modo sostanziale»
- **Location:** `interfaceCopy.description`, `interfaceCopy.heroLead` (`<strong>…</strong>`), `sections[5].body` (5.1), versus `sections[1].body`, `sections[2].body`, `sections[10].body`, `sections[22].body`, `sections[23].body`, `sections[26].body`
- **Current:** `ha contribuito in modo sostanziale` (description, heroLead, 5.1) / `ha assistito in modo sostanziale` (sections 1, 2, 10, 22, 23, 26)
- **English:** `materially assisted` (the same normative phrase in every location)
- **Issue:** The load-bearing phrase "materially assisted" — the core meaning of the mark — is rendered with two different verbs: «ha contribuito in modo sostanziale» ("has contributed") in the chrome and 5.1, and «ha assistito in modo sostanziale» ("has assisted") in the body. «assistito» is the closer cognate of "assisted" and is already used in the majority of occurrences; the two renderings should be unified. Meaning is not changed, so this is a consistency nit, not a normative error.
- **Suggested:** Unify on `ha assistito in modo sostanziale` in `description`, `heroLead` (and 5.1 if desired), matching the body.
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.it.js (description and heroLead now use `ha assistito in modo sostanziale l’opera`; 5.1 left as `ha contribuito … a creare` per the item's optional note)

### "release / releasing / released" rendered «pubblicare» in chrome but «diffondere / diffusione» in body
- **Location:** `interfaceCopy.heroLead` (`<strong>…</strong>`), `interfaceCopy.meaningTwoBody`, versus `sections[5.4]`, `sections[5.6]`, `sections[7]`, `sections[9]`, `sections[10]`, `sections[24]`, `sections[26]`
- **Current:** `accetta la responsabilità di pubblicarla` (heroLead), `ha adottato e pubblicato consapevolmente il risultato` (meaningTwoBody) / `altrimenti diffuso`, `diffondere`, `sua diffusione`, `diffusione di tale lavoro`, `della sua diffusione`, `altrimenti diffondere` (body)
- **English:** `accept responsibility for releasing it` / `adopted and released the result` / `otherwise released`, `release`, `releasing`
- **Issue:** The master treats "release" as broader than "publish" (section 26 lists accept, publish, transmit, deploy *or otherwise release*, and 5.4 lists published … *or otherwise released*). Rendering "releasing/released" as «pubblicare/pubblicato» ("publish") in the chrome narrows the term to a subset, while the body uniformly and correctly uses «diffondere/diffusione». Unify on the broader «diffondere» so the chrome does not silently narrow the declaration.
- **Suggested:** heroLead: `… e tale parte accetta la responsabilità di diffonderla.`; meaningTwoBody: `Una persona o un’organizzazione ha adottato e diffuso consapevolmente il risultato.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.it.js

## Round 2 verification

- [x] applied — "mark" rendered «marchio» in chrome: `markLabel` is now `Marchio canonico`, `meansHeading` is now `Cosa dichiara il marchio`, and `plainLead` now reads `Il marchio è una dichiarazione di responsabilità…` (all three were `Segno`/`segno` before).
- [x] applied — `interfaceCopy.description` now reads `indicata` for "named" (verified in the current file; the round-2 finding is resolved).
- [x] applied — Section 14 code examples restored to English: `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>`.

## Notes

- Load-bearing invariants all verified byte-identical: `+AI` everywhere; Section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`); Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); `data-company-example` / `data-json-example` attributes; names `Eric Mourant` and `JAPER Technology`; section numbering 1–26 and `h4` labels 5.1–5.6.
- Normative terms consistent throughout (DEVE / NON DEVE / DOVREBBE / NON DOVREBBE / PUÒ, with correct plural forms), and section 3 carries the English terms in parentheses at first definition (DEVE (MUST), NON DEVE (MUST NOT), DOVREBBE (SHOULD), NON DOVREBBE (SHOULD NOT), PUÒ (MAY)). Header comment mapping table matches actual usage.
- Canonical slogan «L’IA mi ha aiutato. Me ne assumo la responsabilità.» is byte-identical in `documentTitle`, `heroTitle`, sections 1/23/26 and `end`.
- Section 5.4 keeps all six verbs (pubblicato, trasmesso, distribuito, depositato, presentato o altrimenti diffuso); 5.6 keeps "decision to release, use or represent" («della decisione di diffondere, utilizzare o presentare»).
- Section 6 (17 items), section 8 (17 items), section 19 (6 items), section 21 (4 items) and section 25 (9 items) all present and correctly rendered. Section 9 keeps "word-by-word or element-by-element" («parola per parola o elemento per elemento») and "meaningful human act of adoption" («atto umano significativo di adozione»). Section 24 keeps "both questions" («entrambe le domande») and «sì».
- Numbers verified: "two facts" → «due fatti», "Three characters" → «Tre caratteri», "both" → «entrambe».
- `colourChanged` keeps the `{colour}` placeholder (`Il colore di accento è stato impostato su {colour}.`).
- `translationNote` is populated in Italian while the English master has `""` — this is the intended design for a translated language, not a finding.
- `highlight` renders "Highlight" as «Colore» ("colour"); functional but «Evidenziazione» would be more precise — cosmetic, left as a note rather than a correction (consistent with rounds 1–2).
- `followedLink` uses «postnominale» (calque of "post nominal"); understandable but uncommon — cosmetic.
- Section 14 title `Software` is byte-identical to English, an accepted Italian loanword — not an untranslated leftover.
- Header comment still says "Interface chrome: AI-generated, pending native-speaker review" while `status` is `"reviewed"`; this is now stale since the chrome was corrected this round — reconcile before final sign-off.
- Honesty note: my Italian is functional but not native-speaker level; the terminology-consistency findings above are based on direct English-to-Italian comparison and the file's own internal usage, not on native idiom. I found no HIGH or MEDIUM issues (no meaning changes, dropped clauses, added claims, or broken invariants).
