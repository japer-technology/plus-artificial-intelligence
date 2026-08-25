# spec.pt.js — Round 1 correction suggestions

- **Language:** Português (pt)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** The Portuguese translation is complete and normatively faithful (no dropped clauses or mis-scoped negations); the remaining issues are terminology consistency and minor register polish.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### Section 22 — Relationship to authorship
- **Location:** `sections[22].body`, final sentence ("the named party takes responsibility for the result")
- **Current:** `a IA auxiliou materialmente e a parte indicada assume a responsabilidade pelo resultado.`
- **English:** `AI materially assisted, and the named party takes responsibility for the result.`
- **Issue:** "named party" is rendered inconsistently across the file: «a parte indicada» here and in section 21 and section 23 («a pessoa ou organização indicada»), but «a pessoa ou organização identificada» in `interfaceCopy.description` and «A parte identificada» in `interfaceCopy.meaningThreeBody`. Neither «indicada» nor «identificada» is as precise as «nomeada», and the split between the two words is a consistency problem. Standardise on one term, preferably «nomeada»/«a parte nomeada».
- **Suggested:** `a IA auxiliou materialmente e a parte nomeada assume a responsabilidade pelo resultado.`
- **Severity:** LOW

### interfaceCopy.meaningThreeBody
- **Location:** `interfaceCopy.meaningThreeBody`
- **Current:** `A parte identificada não transfere a responsabilidade para um sistema ou fornecedor de IA.`
- **English:** `The named party does not transfer accountability to an AI system or provider.`
- **Issue:** The body consistently renders "accountability" as «responsabilização» (sections 2, 8, 20, and the `end` panel: «Proveniência humano-IA e responsabilização»), reserving «responsabilidade» for "responsibility". The interface chrome reverses this: `meaningThreeBody`, `plainTitle` («Responsabilidade visível»), and `plainLead` («declaração de responsabilidade») all collapse "accountability" into «responsabilidade», losing the accountability/responsibility distinction the body carefully preserves. Use «responsabilização» for consistency. (Also change «identificada» to «nomeada» per the note above.)
- **Suggested:** `A parte nomeada não transfere a responsabilização para um sistema ou fornecedor de IA.`
- **Severity:** LOW

## Notes
- Section 14 title `Software` is byte-identical to English, but "software" is a standard accepted Portuguese loanword, so it is not an untranslated leftover — no change needed. (All other titles are translated: `Organizações`, `Documentos`, etc.)
- Section 10 title `Pessoas individuais` (and the in-body «pessoa individual») is slightly redundant; `Indivíduos` / «indivíduo» would be the more natural rendering of "Individuals"/"individual". Cosmetic.
- Section 15 renders "designs" as «projectos de design» ("design projects"), which reads slightly off; «designs» (or «conceções») would be closer to "designs". Cosmetic.
- `interfaceCopy.followedLink` uses «pós-nominal» (a calque of "post nominal"); understandable but uncommon. Cosmetic.
- The file header comment (line 3) says "AI-generated translation, pending native-speaker review", but `status` is set to `"reviewed"`. Reconcile the two before final sign-off.
- The translation is consistently European Portuguese (pt-PT: «artefacto», «canónica», «correcção», «factos», «está a fazer»). If a Brazilian audience is intended, a separate pt-BR pass may be warranted; this is a dialect note, not an error.
- Normative terms are consistent throughout (DEVE / NÃO DEVE / DEVERIA / NÃO DEVERIA / PODE, with correct plural agreement such as «DEVERIAM», «PODEM»), and section 3 carries the English terms in parentheses at first definition as required.
