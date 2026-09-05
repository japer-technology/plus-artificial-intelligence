# Development task — claim-types: Claim Types

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md)
> **Source:** spec [`claim-types-dsh.md`](../suggestions/claim-types-dsh.md) · seed [`claim-types.md`](../suggestions/claim-types.md)
> **Effort:** S · **Phase:** P0 · **Position:** first — the schema and registers are defined in its terms
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** One-fact-at-a-time claim vocabulary: `available`, `generally-used`, `approved`, `used-on-artifact` + the `aiRole` values and qualifiers.
- **Why now / risk of deferring:** It is first in the P0 wave — the schema and registers are defined in its terms (mini-plan Order). Deferring risks vocabulary churn: extension requests will arrive early and need Programme 1 governance in place first, or the vocabulary forks (programme Risks).
- **Features to deliver:**
  - Four claim kinds as distinct values — `available`, `generally-used`, `approved`, `used-on-artifact` — never merged into one "uses AI" flag.
  - The `aiRole` role vocabulary (drafted, edited, reviewed, generated, analysed, translated, researched, summarised, coded, designed) with the forbidden assertions (never "AI created everything" / "no human review").
  - Optional qualifiers `purpose`, `reviewPractice`, `effectiveDate`, `status` as independent fields, never folded into the kind.
  - Validation rules: `used-on-artifact` requires `artifactRef`; `approved` requires `policyRef`; no inference of one kind from another.
  - A mandatory non-implication notice on every party-level claim; `self-declared` default until evidence is attached.
- **Depends on:** governance-and-stewardship, portable-declaration-schema, ai-practice-register

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Role vocabulary form
- **Question:** Should the `aiRole` vocabulary be an open set with only the forbidden assertions named, or a closed list with a governed extension registry?
- **Option (a):** Open set with forbidden assertions named (as spec §5.2.8 already drafts: the ten named roles plus any new role, so long as it never asserts "AI created everything" or "no human review")
  - **For:** Spec §5.2.8 already drafts the open-set wording (the ten named roles plus any new role), and its safety is carried by the forbidden-assertions clause, so no new governance machinery is needed.
  - **Against:** An open set has no registry to keep new roles comparable, and comprehension testing (§5.2.12, §9.9) has not yet confirmed the vocabulary is understood before it grows.
- **Option (b):** Closed base list with a governed extension registry for new roles
  - **For:** Spec §5.2.11 requires new/changed meanings to be governed changes, and spec §7 assigns that change process to governance-and-stewardship — a registry gives new roles stability and versioning.
  - **Against:** Adds governance machinery before launch, contradicting the already-normative open wording in §5.2.8, and it requires Programme 1 governance to be live first or the vocabulary forks (programme Risks).
- **Option (c):** Closed list, no extension until comprehension testing completes.
  - **For:** Holds the role set fixed until comprehension testing (§5.2.12, §9.9) confirms the distinctions are understood, avoiding committing to a set testing might overturn.
  - **Against:** Blocks legitimate new roles in the interim, and contradicts §5.2.8, which already names the vocabulary an open set.
- **Recommended:** (a) — it is already the normative wording in §5.2.8, needs no new governance machinery, and the safety is carried by the forbidden-assertions clause.
- **Your choice:** ✏️

### D2 — Non-implication notice wording
- **Question:** What exact wording should the mandatory non-implication notice use? (spec §5.2.10 drafts a sentence; §10 defers final wording to comprehension testing.)
- **Option (a):** Adopt the §5.2.10 draft verbatim — "this is a practice-level claim and does not state that the tool was used on any particular artifact" — as provisional text, and refine it after comprehension testing
  - **For:** §5.2.10 already drafts the sentence and §5.2.12 mandates the full wording over any compressed label until tested; a visible provisional notice beats none.
  - **Against:** The wording is provisional and comprehension testing (§9.9) may force a rewrite, so surfaces could churn after launch.
- **Option (b):** Ship a placeholder token and block all party-level surfaces until comprehension testing
  - **For:** Avoids shipping wording that comprehension testing might overturn.
  - **Against:** §5.2.10 requires the notice adjacent to every party-level claim, and §5.2.12 says surfaces must favour the full wording until tested — blocking surfaces leaves party-level claims with no required notice.
- **Option (c):** Use a shorter compressed label pending testing.
  - **For:** A shorter label is less intrusive on tight surfaces.
  - **Against:** §5.2.12 explicitly requires the full four-way wording over any compressed label until testing completes, so a compressed label is non-compliant.
- **Recommended:** (a) — a visible provisional notice beats none, and §5.2.12 already mandates the full wording over any compressed label until tested.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Write the four claim-kind definitions — `available`, `generally-used`, `approved`, `used-on-artifact` — each with its exact meaning, its scope (party / organisation-policy / artifact), and the separation rule that they must never be merged or inferred from one another.
2. Write the `aiRole` vocabulary per D1, including the ten named roles and the forbidden assertions ("AI created everything", "no human review").
3. Specify the optional qualifiers `purpose`, `reviewPractice`, `effectiveDate`, `status` as independent fields, never folded into the claim kind; note that `status` for artifact records uses the declaration-lifecycle vocabulary while `active`/`retired` apply to register and policy entries.
4. Write the validation rules: a `used-on-artifact` claim requires `artifactRef`; an `approved` claim requires `policyRef`; importers reject violations; no tool may infer one claim kind from another.
5. Write the non-implication notice text per D2 and the rule that it appears adjacent to every party-level claim, rendered as text.
6. Record the comprehension-testing obligation (§5.2.12, §9.9) and the "full four-way wording until tested" rule as an explicit launch gate.
7. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- No merging the four claims into one "uses AI" flag; no abbreviating them.
- No inferring one claim kind from another (a `generally-used` capability is never rendered `used-on-artifact`; `available` never `generally-used`).
- `aiRole` never asserts the AI created everything or that no human reviewed the release.
- Claim kinds are descriptive, never honourific; no kind may read as an endorsement or grade.
- The claim vocabulary stays a free-floor commons — no payment or account to use it.

## 5. Acceptance criteria
- [ ] The four claim kinds are stored and rendered as distinct values, never merged into one flag.
- [ ] A `used-on-artifact` claim without an `artifactRef` is rejected.
- [ ] An `approved` claim without a `policyRef` is rejected.
- [ ] A party-level `generally-used` claim never causes an artifact to be shown as `used-on-artifact`.
- [ ] The non-implication notice appears as text on every surface showing a party-level claim.
- [ ] A declaration's `aiRole` uses the role vocabulary and never asserts "created everything" or "no human review".
- [ ] A claim without evidence renders as `self-declared`.
- [ ] The qualifiers are stored as separate fields, not folded into the claim kind.
- [ ] Comprehension testing of the four distinctions is recorded as an obligation before broad launch.

## 6. Outputs to produce in the repository
- `docs/vocabularies/claim-types.md` — normative vocabulary doc (four claim kinds, `aiRole`, qualifiers, validation rules, notice text, comprehension-testing gate).

## 7. Read before building
- [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md) — mini-plan
- [`claim-types-dsh.md`](../suggestions/claim-types-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../planning/digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
