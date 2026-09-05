# Development task — tool-taxonomy: Tool Taxonomy

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md)
> **Source:** spec [`tool-taxonomy-dsh.md`](../suggestions/tool-taxonomy-dsh.md) · seed [`tool-taxonomy.md`](../suggestions/tool-taxonomy.md)
> **Effort:** M · **Phase:** P1 · **Position:** parallel with the schema (the schema's `tools` field references its ids; the taxonomy can bootstrap with the project's own tooling and grow via contribution)
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Open, versioned, provider-neutral vocabulary of tools/capabilities/models with stable identifiers and a community contribution path.
- **Why now / risk of deferring:** It runs parallel with the schema — the schema's `tools` field references its ids (mini-plan Order). Deferring risks vocabulary churn and fork risk if governance and licensing (Programme 1) are not in place before the first external contribution (programme Risks / brainstorm Open questions).
- **Features to deliver:**
  - Four entry types — `capability`, `tool`, `product`, `model` — with stable, opaque, never-reused identifiers.
  - A versioned taxonomy dataset + offline resolver (alias → canonical, `retired` status reported forever).
  - A proposal/review/merge contribution process with vendor-interest recusal; factual descriptions only; alphabetical/ID default ordering.
- **Depends on:** governance-and-stewardship, licensing-and-mark-policy, specification-versioning-and-hashing, translation-governance

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Custom-entry namespacing convention
- **Question:** What namespacing convention should custom (non-canonical) entries use? (spec §10.)
- **Option (a):** Reverse-domain prefix (e.g. `org.example.toolname`)
  - **For:** Reverse-domain gives collision-resistance for organisations that own a domain.
  - **Against:** Excludes individuals with no domain from making custom entries, against the openness principle (§5.1.3: anyone may propose an entry).
- **Option (b):** `x-` prefix (e.g. `x-mytool`)
  - **For:** `x-` keeps custom entries available to everyone, including individuals with no domain.
  - **Against:** `x-` prefixes are collision-prone — two parties can pick `x-mytool` — so it is weaker for global uniqueness.
- **Option (c):** Both, with reverse-domain for parties that own a domain and `x-` as a fallback.
  - **For:** §5.2.7 says custom entries MUST be namespaced "for example a reverse-domain or `x-` prefix" — combining both covers organisations and individuals while keeping each collision-resistant where possible.
  - **Against:** Two conventions are slightly more to document than one.
- **Recommended:** (c) — reverse-domain gives collision-resistance for organisations while `x-` keeps custom entries available to individuals with no domain; the spec §5.2.7 already allows either ("reverse-domain or `x-` prefix").
- **Your choice:** ✏️

### D2 — Further type subdivision
- **Question:** Should the four entry types (`capability`, `tool`, `product`, `model`) be subdivided further (e.g. a separate `service` type)? (spec §10.)
- **Option (a):** Keep exactly four types now, and subdivide later only when real contribution volume shows the need
  - **For:** §5.2.2 requires the four types to be kept distinct, and §10 defers subdivision "pending real contribution volume" — adding types early risks categories no one uses.
  - **Against:** None identified in the sources.
- **Option (b):** Add a `service` type now
  - **For:** A `service` type would capture a genuinely distinct category (hosted services vs tools/products).
  - **Against:** §5.2.2 enumerates exactly four types, and §10 defers subdivision pending volume — an unused `service` type adds an empty category now.
- **Option (c):** Add `service` and `dataset` types now.
  - **For:** `service` + `dataset` cover two additional categories at once.
  - **Against:** Doubles the speculative type surface; §10 defers any subdivision pending contribution volume, and neither category is required by a current consumer.
- **Recommended:** (a) — the spec §5.2.2 requires the four types stay distinct, and §10 defers subdivision pending real contribution volume; adding types early risks categories no one uses.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Define the four entry types and their semantics (`capability`, `tool`, `product`, `model`) and the rule that the four are kept distinct (a capability is never conflated with a branded product).
2. Specify the identifier rules (opaque, globally unique, never reused, even after retirement) and the alias rule (alias resolves to exactly one canonical identifier; an alias to a retired term reports `retired`).
3. Specify the retirement rule (`active` → `deprecated` → `retired`, optional `replacedBy`, retired terms retained forever and never deleted) and the custom-entry namespacing rule per D1.
4. Write the provider-neutrality rules (factual descriptions, no marketing/superlatives/superiority claims) and the vendor-conflict recusal rule.
5. Write the contribution process (published proposal/review/merge, public acceptance criteria and named reviewers) and the versioning/announcement rule (monotonic version, change note, released bytes never republished).
6. Specify the default ordering (alphabetical or by identifier, never by popularity/sponsor/relevance) and the icon rule (presentation only, always accompanied by text).
7. Build the versioned dataset shape and the offline resolver (identifier/alias → canonical entry + status; unknown → `not-found`, never guessed).
8. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- No marketing copy or superiority claims in descriptions.
- No paid placement, ordering, or sponsored entry wording; no payment buys placement, ordering, or wording.
- Retired terms are never deleted — aliases to retired terms report `retired` forever.
- No rank ordering; the default ordering is alphabetical or by identifier.
- A contributor or editor with a vendor interest is recused from that vendor's entries, and the interest is declared.

## 5. Acceptance criteria
- [ ] Every entry carries exactly one of the four types and a stable, never-reused identifier.
- [ ] An alias resolves to its canonical identifier, and a retired alias resolves to `retired`.
- [ ] A retired term remains resolvable forever and is never deleted from the dataset.
- [ ] A custom entry is namespaced and cannot shadow a canonical identifier.
- [ ] No entry description contains marketing copy, and no ordering reflects sponsorship or popularity.
- [ ] A contributor with a vendor interest is recused from that vendor's entries, and the interest is declared.
- [ ] Every released vocabulary version has a change note and remains downloadable unchanged.
- [ ] The dataset resolves offline from the offline pack with no network.
- [ ] Icons never appear without their text label.
- [ ] The default ordering is alphabetical or by identifier, never by a score.

## 6. Outputs to produce in the repository
- `site/taxonomy/tool-taxonomy.json` — versioned taxonomy dataset (four types, identifiers, aliases, statuses, descriptions).
- `scripts/resolve-tool.mjs` — offline resolver (alias/identifier → canonical entry + status).
- `docs/policies/tool-taxonomy-contribution.md` — proposal/review/merge process and vendor-recusal rules.

## 7. Read before building
- [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md) — mini-plan
- [`tool-taxonomy-dsh.md`](../suggestions/tool-taxonomy-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../planning/digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
