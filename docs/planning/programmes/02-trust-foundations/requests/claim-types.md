# Agent request — claim-types: Claim Types

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../../02-trust-foundations.md)
> **Source:** spec [`claim-types-dsh.md`](../../../../suggestions/claim-types-dsh.md) · seed [`claim-types.md`](../../../../suggestions/claim-types.md)
> **Effort:** S · **Phase:** P0 · **Position:** first — the schema and registers are defined in its terms
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Role vocabulary form
- **Question:** Should the `aiRole` vocabulary be an open set with only the forbidden assertions named, or a closed list with a governed extension registry?
- **Options:** (a) Open set with forbidden assertions named (as spec §5.2.8 already drafts: the ten named roles plus any new role, so long as it never asserts "AI created everything" or "no human review") · (b) Closed base list with a governed extension registry for new roles · (c) Closed list, no extension until comprehension testing completes.
- **Recommended:** (a) — it is already the normative wording in §5.2.8, needs no new governance machinery, and the safety is carried by the forbidden-assertions clause.
- **Your choice:** ✏️

### D2 — Non-implication notice wording
- **Question:** What exact wording should the mandatory non-implication notice use? (spec §5.2.10 drafts a sentence; §10 defers final wording to comprehension testing.)
- **Options:** (a) Adopt the §5.2.10 draft verbatim — "this is a practice-level claim and does not state that the tool was used on any particular artifact" — as provisional text, and refine it after comprehension testing · (b) Ship a placeholder token and block all party-level surfaces until comprehension testing · (c) Use a shorter compressed label pending testing.
- **Recommended:** (a) — a visible provisional notice beats none, and §5.2.12 already mandates the full wording over any compressed label until tested.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Write the four claim-kind definitions — `available`, `generally-used`, `approved`, `used-on-artifact` — each with its exact meaning, its scope (party / organisation-policy / artifact), and the separation rule that they must never be merged or inferred from one another.
2. Write the `aiRole` vocabulary per D1, including the ten named roles and the forbidden assertions ("AI created everything", "no human review").
3. Specify the optional qualifiers `purpose`, `reviewPractice`, `effectiveDate`, `status` as independent fields, never folded into the claim kind; note that `status` for artifact records uses the declaration-lifecycle vocabulary while `active`/`retired` apply to register and policy entries.
4. Write the validation rules: a `used-on-artifact` claim requires `artifactRef`; an `approved` claim requires `policyRef`; importers reject violations; no tool may infer one claim kind from another.
5. Write the non-implication notice text per D2 and the rule that it appears adjacent to every party-level claim, rendered as text.
6. Record the comprehension-testing obligation (§5.2.12, §9.9) and the "full four-way wording until tested" rule as an explicit launch gate.
7. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- No merging the four claims into one "uses AI" flag; no abbreviating them.
- No inferring one claim kind from another (a `generally-used` capability is never rendered `used-on-artifact`; `available` never `generally-used`).
- `aiRole` never asserts the AI created everything or that no human reviewed the release.
- Claim kinds are descriptive, never honourific; no kind may read as an endorsement or grade.
- The claim vocabulary stays a free-floor commons — no payment or account to use it.

## 4. Acceptance criteria
- [ ] The four claim kinds are stored and rendered as distinct values, never merged into one flag.
- [ ] A `used-on-artifact` claim without an `artifactRef` is rejected.
- [ ] An `approved` claim without a `policyRef` is rejected.
- [ ] A party-level `generally-used` claim never causes an artifact to be shown as `used-on-artifact`.
- [ ] The non-implication notice appears as text on every surface showing a party-level claim.
- [ ] A declaration's `aiRole` uses the role vocabulary and never asserts "created everything" or "no human review".
- [ ] A claim without evidence renders as `self-declared`.
- [ ] The qualifiers are stored as separate fields, not folded into the claim kind.
- [ ] Comprehension testing of the four distinctions is recorded as an obligation before broad launch.

## 5. Outputs to produce in the repository
- `docs/vocabularies/claim-types.md` — normative vocabulary doc (four claim kinds, `aiRole`, qualifiers, validation rules, notice text, comprehension-testing gate).

## 6. Read before building
- [`02-trust-foundations.md`](../../02-trust-foundations.md) — mini-plan
- [`claim-types-dsh.md`](../../../../suggestions/claim-types-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../../../digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
