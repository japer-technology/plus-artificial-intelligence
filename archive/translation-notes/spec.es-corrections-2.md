# spec.es.js — Round 2 final correction recommendations

- **Language:** Español (es)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.es-corrections-1.md` (0 high / 0 medium / 2 low) — both findings re-verified against the current file and carried forward
- **Verdict:** Essentially accurate and normatively faithful; all round-1 items remain. Two round-1 notes promoted to corrections for the final list.
- **Count:** 0 high / 0 medium / 4 low

## Corrections

### interfaceCopy.description — dropped object and softened "named"
- **Location:** `interfaceCopy.description`
- **Current:** `+AI significa que la inteligencia artificial ayudó materialmente y que una persona u organización identificada acepta la responsabilidad.`
- **English:** `+AI means artificial intelligence materially assisted the work and a named person or organisation accepts responsibility for it.`
- **Issue:** The object of the assistance ("the work" / «el trabajo») is dropped, so "ayudó materialmente" does not say what was helped. "named" is also softened to "identificada"; "nombrada" is closer to the source.
- **Suggested:** `+AI significa que la inteligencia artificial ayudó materialmente al trabajo y que una persona u organización nombrada acepta la responsabilidad por él.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 22 — "named party" rendered "parte identificada"
- **Location:** `sections[22].body`, final sentence ("the named party takes responsibility for the result")
- **Current:** `la IA contribuyó materialmente y la parte identificada asume la responsabilidad por el resultado.`
- **English:** `AI materially assisted, and the named party takes responsibility for the result.`
- **Issue:** "named party" is rendered inconsistently across the file: «la parte nombrada» in section 21, but «la parte identificada» in section 22 (and «persona u organización identificada» in section 23 and `interfaceCopy.description`). "identified" is a softer, less precise reading of "named" (which means "whose name is given"). Use one consistent term, preferably «nombrada».
- **Suggested:** `la IA contribuyó materialmente y la parte nombrada asume la responsabilidad por el resultado.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 4 — "human-readable" qualifier dropped (promoted from round-1 note)
- **Location:** `sections[4].body`, "The canonical human-readable form is"
- **Current:** `La forma canónica legible es:`
- **English:** `The canonical human-readable form is:`
- **Issue:** The "human-" qualifier is dropped. Since section 17 uses «legible por máquinas», adding «por humanos» restores the intended human/machine contrast.
- **Suggested:** `La forma canónica legible por humanos es:`
- **Severity:** LOW
- **Round 1:** new in round 2 (was a round-1 note)

### Section 14 — code examples translated instead of kept as literal English (promoted from round-1 note area)
- **Location:** `sections[14].body`, both `<pre><code>` blocks
- **Current:** `<pre><code>Autor: Eric Mourant +AI</code></pre>` and `<pre><code>Este proyecto utiliza +AI.</code></pre>`
- **English:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>`
- **Issue:** The master presents these as literal example strings (repository code). Some translation files keep them byte-identical in English; this file localises them. Either choice is defensible, but the project should pick one convention and apply it to every language.
- **Suggested:** Restore `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>` (or consciously adopt the localised versions project-wide).
- **Severity:** LOW
- **Round 1:** new in round 2

## Round 1 verification

- [x] description dropped object / "identificada" — still present, carried forward
- [x] Section 22 "parte identificada" — still present, carried forward

## Notes

- Section 14 title `Software` is byte-identical to English, but "software" is a standard accepted Spanish loanword — not an untranslated leftover; no change needed.
- Section 14 renders "commits" as «confirmaciones»; defensible, but many Spanish technical texts keep "commits" (or write «confirmaciones (commits)») since it is a Git term of art. Cosmetic.
- `interfaceCopy.highlight` renders "Highlight" as «Color»; functional, but «Resaltado» would be more precise. Cosmetic.
- `interfaceCopy.followedLink` uses «posnominal» (a calque of "post nominal"); understandable, but uncommon. Cosmetic.
- Normative terms are consistent throughout (DEBE / NO DEBE / DEBERÍA / NO DEBERÍA / PUEDE, with correct plural agreement), and section 3 carries the English terms in parentheses at first definition.
- The `end` panel renders "Human-AI Provenance and Accountability" as «Procedencia humano-IA y responsabilidad», collapsing "accountability" into "responsabilidad"; idiomatic and acceptable. (Same pattern in `meaningThreeBody`.)
- Canonical slogan «La IA ayudó. Yo asumo la responsabilidad.» is byte-identical across documentTitle, heroTitle, sections 1/23/26 and `end`.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
