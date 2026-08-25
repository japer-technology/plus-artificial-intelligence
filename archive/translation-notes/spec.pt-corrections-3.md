# spec.pt.js — Round 3 final correction recommendations

- **Language:** Português (pt)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.pt-corrections-2.md` (0 high / 0 medium / 3 low) — all 3 items verified as applied against the current file
- **Verdict:** Complete and normatively faithful; all round-2 corrections applied, and all three round-3 wording/consistency items have now been applied to the file.
- **Count:** 0 high / 0 medium / 3 low

## Corrections

### interfaceCopy.plainBody — "stands behind the decision" flattened to "assume a decisão"
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `Indica que a IA influenciou materialmente o resultado e que uma pessoa ou organização identificável assume a decisão de o utilizar.`
- **English:** `It says AI materially influenced the result and an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** "stands behind the decision" means the party endorses / vouches for / takes responsibility for the decision. The rendering «assume a decisão» ("takes on the decision") drops the responsibility/endorsement connotation and reads slightly unnaturally. The rest of the file consistently ties "responsibility" to the decision (cf. section 26 «assumo a responsabilidade por essa decisão»), so this should be aligned.
- **Suggested:** `Indica que a IA influenciou materialmente o resultado e que uma pessoa ou organização identificável se responsabiliza pela decisão de o utilizar.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.pt.js

### interfaceCopy.heroLead — "carried this link" rendered "incluía este link"
- **Location:** `interfaceCopy.heroLead`, opening clause
- **Current:** `A pessoa ou organização cujo nome incluía este link está a fazer uma declaração simples: …`
- **English:** `The person or organisation whose name carried this link is making a simple declaration: …`
- **Issue:** "carried this link" means the name bore/displayed the link (the link is attached to the name); «incluía este link» means "included this link" — a subtly different idea, and the imperfect «incluía» also shifts the tense/register. This is a wording nuance only, not a meaning change.
- **Suggested:** `A pessoa ou organização cujo nome ostentava este link está a fazer uma declaração simples: …` (or `…cujo nome trazia este link…`)
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.pt.js (first option: `ostentava`)

### "materially assisted" rendered two ways ("contribuiu" vs "auxiliou")
- **Location:** `interfaceCopy.description` + `interfaceCopy.heroLead` («contribuiu materialmente») vs all section bodies (`sections[2]`, `[10]`, `[22]`, `[23]`, `[26]` — «auxiliou materialmente»)
- **Current:** `+AI significa que a inteligência artificial contribuiu materialmente para o trabalho…` / `…a inteligência artificial contribuiu materialmente para o trabalho…` / `a inteligência artificial auxiliou materialmente o trabalho…`
- **English:** `…artificial intelligence materially assisted the work…` (used uniformly throughout the master)
- **Issue:** The single English term "materially assisted" is rendered «contribuiu materialmente» in the two chrome strings and «auxiliou materialmente» throughout the section bodies. Both are defensible, but the split is an avoidable inconsistency for a core term; «auxiliar» is the closer match to "assist" and already dominates the document.
- **Suggested:** Standardise on «auxiliou materialmente» in `description` and `heroLead`: `+AI significa que a inteligência artificial auxiliou materialmente o trabalho e que uma pessoa ou organização nomeada aceita a responsabilidade por ele.` and `…a inteligência artificial auxiliou materialmente o trabalho e essa parte aceita a responsabilidade pela sua publicação.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.pt.js (both chrome strings now use `auxiliou materialmente o trabalho`)

## Round 2 verification

- [x] applied — Section 22 "parte indicada" → «a parte nomeada» (also standardised in sections 21 and 23; now consistent with `interfaceCopy.description`/`meaningThreeBody`).
- [x] applied — `meaningThreeBody` "accountability" → «responsabilização» and «identificada» → «nomeada».
- [x] applied — Section 14 `<pre><code>` blocks restored byte-identical to English (`Author: Eric Mourant +AI`, `This project uses +AI.`).

## Notes

- All load-bearing invariants verified byte-identical: `+AI` everywhere; Section 4 non-canonical counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`); Section 17 JSON keys and values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); example names `Eric Mourant` / `JAPER Technology`; `data-company-example` / `data-json-example` attributes; section numbering 1–26 and `h4` labels 5.1–5.6.
- Normative terms are consistent across all 26 sections and the chrome (DEVE / NÃO DEVE / DEVERIA / NÃO DEVERIA / PODE), with correct grammatical inflection («DEVERIAM», «PODEM») and the English terms in parentheses at first definition in section 3. Header comment's mapping table matches actual usage.
- Canonical slogan «A IA ajudou. Eu assumo a responsabilidade.» is byte-identical across `documentTitle` (after the «+AI — » prefix), `heroTitle`, sections 1/23/26 and `end`; `heroLead`'s `<strong>` uses matching wording.
- Section 5.4 retains all six verbs (publicado, transmitido, implementado, submetido, apresentado, de outro modo divulgado); 5.6 keeps "decisão de divulgar, utilizar ou representar"; section 6 (17 items) and section 8 (17 items) lists are complete; section 9 "palavra por palavra ou elemento por elemento" and "acto humano significativo de adopção"; section 24 "ambas as perguntas"/«sim»; section 26 full declaration with "aceitar, publicar, transmitir, implementar ou de outro modo divulgar" and "essa decisão".
- The master's `translationNote` is empty; the pt file supplies a non-empty informational disclaimer. This is an acceptable, expected use of the field (translation-specific note, not a claim in the spec text), so no change is recommended.
- Round-2 cosmetic notes re-verified and still acceptable as no-change: section 14 title `Software` (accepted loanword); section 10 title `Pessoas individuais` (slightly redundant; `Indivíduos` would be tighter — cosmetic); section 15 «projectos de design» for "designs" (cosmetic); `followedLink` «pós-nominal» (calque, cosmetic).
- Unresolved from round 2 (note, not a correction): the file header still says "AI-generated translation, pending native-speaker review" while `status` is `"reviewed"`. Reconcile before final sign-off — this is metadata housekeeping, not a translation error.
- The translation is consistently European Portuguese (pt-PT); a pt-BR variant would need a separate pass if a Brazilian audience is intended.
- Honesty note: my Portuguese is competent for formal/technical register but not native; the three LOW findings above are the only points where wording could be tightened, and none changes normative meaning.
