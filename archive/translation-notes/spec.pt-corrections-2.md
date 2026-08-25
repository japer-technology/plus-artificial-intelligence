# spec.pt.js — Round 2 final correction recommendations

- **Language:** Português (pt)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.pt-corrections-1.md` (0 high / 0 medium / 2 low) — both findings re-verified against the current file and carried forward
- **Verdict:** Complete and normatively faithful (no dropped clauses or mis-scoped negations); one new low-severity consistency note added.
- **Count:** 0 high / 0 medium / 3 low

## Corrections

### Section 22 — "named party" rendered "parte indicada"
- **Location:** `sections[22].body`, final sentence ("the named party takes responsibility for the result")
- **Current:** `a IA auxiliou materialmente e a parte indicada assume a responsabilidade pelo resultado.`
- **English:** `AI materially assisted, and the named party takes responsibility for the result.`
- **Issue:** "named party" is rendered inconsistently across the file: «a parte indicada» here and in sections 21 and 23, but «a pessoa ou organização identificada» in `interfaceCopy.description` and «A parte identificada» in `interfaceCopy.meaningThreeBody`. Neither «indicada» nor «identificada» is as precise as «nomeada», and the split between the two words is a consistency problem. Standardise on one term, preferably «nomeada»/«a parte nomeada».
- **Suggested:** `a IA auxiliou materialmente e a parte nomeada assume a responsabilidade pelo resultado.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.meaningThreeBody — "accountability" flattened to "responsibility"
- **Location:** `interfaceCopy.meaningThreeBody`
- **Current:** `A parte identificada não transfere a responsabilidade para um sistema ou fornecedor de IA.`
- **English:** `The named party does not transfer accountability to an AI system or provider.`
- **Issue:** The body consistently renders "accountability" as «responsabilização» (sections 2, 8, 20, and the `end` panel), reserving «responsabilidade» for "responsibility". The interface chrome reverses this: `meaningThreeBody`, `plainTitle` («Responsabilidade visível»), and `plainLead` («declaração de responsabilidade») all collapse "accountability" into «responsabilidade». Use «responsabilização» for consistency. (Also change «identificada» to «nomeada» per the item above.)
- **Suggested:** `A parte nomeada não transfere a responsabilização para um sistema ou fornecedor de IA.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 14 — code examples translated instead of kept as literal English (new in round 2)
- **Location:** `sections[14].body`, both `<pre><code>` blocks
- **Current:** `<pre><code>Autor: Eric Mourant +AI</code></pre>` and `<pre><code>Este projecto utiliza +AI.</code></pre>`
- **English:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>`
- **Issue:** The master presents these as literal example strings (repository code); several sibling languages keep them byte-identical in English. Section 13 already localises the same labels as visible prose (`Autor: …`), so the code examples can safely stay English. Either choice is defensible, but the project should pick one convention for all languages.
- **Suggested:** Restore `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>` (or consciously adopt the localised versions project-wide).
- **Severity:** LOW
- **Round 1:** new in round 2

## Round 1 verification

- [x] Section 22 "parte indicada" — still present, carried forward
- [x] meaningThreeBody accountability collapse — still present, carried forward

## Notes

- Section 14 title `Software` is byte-identical to English, but "software" is a standard accepted Portuguese loanword — not an untranslated leftover; no change needed.
- Section 10 title `Pessoas individuais` is slightly redundant; `Indivíduos` would be the more natural rendering of "Individuals". Cosmetic.
- Section 15 renders "designs" as «projectos de design» ("design projects"), which reads slightly off; «designs» (or «conceções») would be closer. Cosmetic.
- `interfaceCopy.followedLink` uses «pós-nominal» (a calque of "post nominal"); understandable but uncommon. Cosmetic.
- The file header comment says "AI-generated translation, pending native-speaker review", but `status` is set to `"reviewed"`. Reconcile the two before final sign-off.
- The translation is consistently European Portuguese (pt-PT). If a Brazilian audience is intended, a separate pt-BR pass may be warranted; this is a dialect note, not an error.
- Section 7 correctly renders "substantially generated" as «substancialmente gerado» — no drift.
- Section 6 "incidental" («acessórias») and "not necessarily" («não exigem necessariamente») are correctly rendered.
- Section 4 "case-sensitive" is correctly rendered (`sensível à distinção entre maiúsculas e minúsculas`).
- Normative terms are consistent throughout (DEVE / NÃO DEVE / DEVERIA / NÃO DEVERIA / PODE, with correct plural agreement), and section 3 carries the English terms in parentheses at first definition.
- Canonical slogan «A IA ajudou. Eu assumo a responsabilidade.» is byte-identical across documentTitle, heroTitle, sections 1/23/26 and `end`.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
