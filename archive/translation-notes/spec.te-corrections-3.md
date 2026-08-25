# spec.te.js — Round 3 final correction recommendations

- **Language:** తెలుగు (te)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.te-corrections-2.md` (0 high / 1 medium / 5 low) — status of each item verified against the current file
- **Verdict:** Clean, faithful translation with stable normative terminology and all load-bearing invariants intact; every round-2 item is now applied, and both round-3 wording items have now been applied to the file.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### Section 4 — non-standard wording for "uppercase"
- **Location:** `sections[4].body`, third list item ("followed immediately by uppercase Latin characters")
- **Current:** `దాని వెంటనే పెద్ద బడి లాటిన్ అక్షరములు <code>AI</code>;`
- **English:** `followed immediately by uppercase Latin characters <code>AI</code>;`
- **Issue:** `పెద్ద బడి` is an awkward, non-standard way to express "uppercase" — `బడి` ("size"/"school") is out of place here; the standard form is `పెద్ద అక్షరములు` (capital letters). The intended meaning ("uppercase") is still recoverable, so this is wording only, not a meaning error. (My Telugu confidence here is moderate — worth a native-speaker confirm.)
- **Suggested:** `దాని వెంటనే పెద్ద లాటిన్ అక్షరములు <code>AI</code>;`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.te.js

### Section 7 — "transfer" rendered inconsistently
- **Location:** `sections[7].body`, second sentence ("does not transfer responsibility to …")
- **Current:** `ఈ చిహ్నమును ఉపయోగించుట ద్వారా, బాధ్యతాధారి తమ బాధ్యతను ఏ కృత్రిమ మేధ వ్యవస్థకు, నమూనాకు, సరఫరాదారుకు, ప్రతినిధికి లేదా సాధనమునకు బదలాయించరు.`
- **English:** `By using the mark, the responsible party does not transfer responsibility to an artificial intelligence system, model, provider, agent or tool.`
- **Issue:** `బదలాయించరు` is a colloquial/non-standard spelling of "transfer"; the same English verb "transfer" is rendered `బదిలీ చేయదు` in `interfaceCopy.meaningThreeBody`. This is a minor terminology inconsistency with no change of meaning. (My Telugu confidence here is moderate — worth a native-speaker confirm.)
- **Suggested:** `ఈ చిహ్నమును ఉపయోగించుట ద్వారా, బాధ్యతాధారి తమ బాధ్యతను ఏ కృత్రిమ మేధ వ్యవస్థకు, నమూనాకు, సరఫరాదారుకు, ప్రతినిధికి లేదా సాధనమునకు బదిలీ చేయరు.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.te.js

## Round 2 verification

- [x] `interfaceCopy.footerLine` "తెరవెనుక" → applied (`బహిరంగ సంజ్ఞానం. మానవ బాధ్యత.`)
- [x] `interfaceCopy.documentTitle` "బాధ్యత నాది." → applied (`బాధ్యత నాదే.`)
- [x] `interfaceCopy.heroTitle` "బాధ్యత నాది." → applied (`బాధ్యత నాదే.`)
- [x] Section 2 "మానవుల మధ్య … మధ్య" → applied (`మానవులకు మరియు … వ్యవస్థలకు మధ్య`)
- [x] Section 7 "ప్రధానముగా" → applied (`గణనీయముగా`)
- [x] Section 4 "case-sensitive" ("అక్షర పరిమాణము") → applied (`పెద్ద మరియు చిన్న అక్షరముల మధ్య భేదమును గుర్తించును`)
- [x] "specification" dual rendering → applied (`విశిష్టీకరణము` now used throughout the chrome)

## Notes

- Load-bearing invariants all verified byte-identical to English: `+AI` (never localised/re-cased/spaced), the section-4 non-canonical ASCII counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`), the section-17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`), the example names `Eric Mourant` and `JAPER Technology`, the `data-company-example` / `data-json-example` attributes, and section numbering 1–26 with h4 labels 5.1–5.6.
- Canonical slogan `AI సహాయం చేసింది. బాధ్యత నాదే.` is byte-identical across `documentTitle` (after the `+AI — ` prefix), `heroTitle`, section 1, section 23, section 26, and `end`.
- Normative terms are consistent: MUST → `తప్పనిసరి`, MUST NOT → `నిషిద్ధం`, SHOULD → `సిఫార్సు చేయబడింది`, SHOULD NOT → `సిఫార్సు చేయబడలేదు`, MAY → `చేయవచ్చు` (various grammatical inflections only). The file header comment's mapping table matches actual usage. Section 3 keeps the English term in parentheses in the first definitions and the five definitions match the master's meanings.
- Section 5.4 keeps all six verbs (published/transmitted/deployed/submitted/presented/otherwise released); section 5.6 keeps "decision to release, use or represent"; section 26 keeps the full "accept, publish, transmit, deploy or otherwise release … that decision" declaration. Sections 6 (17 items), 8 (17 items), 19 (6 items), 21 (4 items) and 25 (9 items) all have the complete item lists. Section 9 keeps "word-by-word or element-by-element" and "meaningful human act of adoption"; section 24 keeps "both questions" and "yes".
- Accepted no-change: `<Responsible Party>` placeholder is localised to `<బాధ్యతాధారి>` in sections 1 and 4 — it is not in the load-bearing invariant list, and localising the template label is reasonable.
- Accepted no-change: section 14's `<pre><code>` examples (`Author: Eric Mourant +AI`, `This project uses +AI.`) remain in English while section 13 translates the equivalent labels — code blocks are literal and keep `Eric Mourant` / `+AI` exact.
- Still present from round-2 notes: `కృత్రిమ మేధస్సు` (in `interfaceCopy.description` and `heroLead`) vs `కృత్రిమ మేధ` (body) — both valid, consider aligning for polish.
- My Telugu is sufficient for structural/terminology/slogan and invariant checks, but limited for native-level word-choice judgement (e.g. the two LOW items above); those are flagged as wording only and a native speaker should confirm before finalising.
