# Development task — developer-integrations: Developer Integrations

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md)
> **Source:** spec [`developer-integrations-dsh.md`](../suggestions/developer-integrations-dsh.md) · seed [`developer-integrations.md`](../suggestions/developer-integrations.md)
> **Effort:** M · **Phase:** P2 · **Position:** P2 — after the spine stabilises so the fixtures don't churn.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Minimal stable developer surfaces: package metadata, Git trailers, CI checks, browser indicators, client libraries, schemas.
- **Why now / risk of deferring:** P2 — after the spine stabilises so the fixtures don't churn; shipped too early the fixtures churn against an unstable schema, and shipped too late the developer surfaces have no canonical carrier.
- **Features to deliver:**
  - Package-metadata carrier: one reserved key per ecosystem (`"plus-ai"` in `package.json`, equivalents elsewhere) whose value is a declaration reference or inline record, documented in a published compatibility table.
  - The `Plus-AI:` Git trailer (value = declaration reference/identifier); the founding-style `Name +AI` author line may also signal, but the trailer is machine-checkable and the two must not disagree.
  - CI lint check with distinct exit codes (absent / malformed / unresolvable / passed), structural only — never a truth claim or verdict.
  - Network-free client libraries (thin wrappers over the portable record and surfaces; no phone home; fields preserved byte-for-byte).
  - Browser-indicator contract: evidence labels only, or the honest "no machine-readable assertion found" state — never a negative mark.
  - Conformance fixtures (canonical input/output) per surface, kept in the offline pack; versioned interfaces (monotonic integer, changelog-announced before adoption).
- **Depends on:** machine-readable-assertions, portable-declaration-schema, verification-checker, conformance-linter

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Reserved-key spellings per ecosystem
- **Question:** What are the exact reserved-key spellings for package metadata across the target ecosystems? (spec §10 item 1; digest "reserved-key spellings".)
- **Option (a):** adopt `"plus-ai"` in `package.json` as canonical and document per-ecosystem equivalents in the compatibility table
  - **For:** The spec already names `"plus-ai"` for `package.json` (spec §5.2 item 2), so making it canonical is grounded, and the compatibility table documents the other ecosystems' spellings.
  - **Against:** Requires the compatibility survey to finalise the other ecosystems' spellings before the table is complete.
- **Option (b):** adopt a different uniform key name (e.g. `"plusai"`) across all ecosystems
  - **For:** A single identical key name everywhere is simplest for cross-ecosystem recognition.
  - **Against:** Contradicts the spec, which fixes `"plus-ai"` for `package.json` (spec §5.2 item 2), and ignores that ecosystem conventions differ (e.g. `[project]` tables elsewhere) — keys are namespaced, not uniform (spec §5.2 item 10).
- **Option (c):** leave spellings open pending the compatibility survey, shipping the table structure only
  - **For:** Avoids committing to spellings before the survey.
  - **Against:** Ships no usable carrier, deferring the core package-metadata surface (spec §5.2 item 2) and leaving implementers nothing to write.
- **Recommended:** (a) — spec §5.2 item 2 already names `"plus-ai"` for `package.json`; the compatibility table documents the other ecosystems' spellings, so `"plus-ai"` is canonical and the survey only fills the table.
- **Your choice:** ✏️

### D2 — Commit-signature binding (defer vs include)
- **Question:** Should commit-signature binding (a signature over the trailer) join the minimal core now, or defer to proofs-of-control? (spec §10 item 2; digest "commit-signature binding".)
- **Option (a):** defer to proofs-of-control — the trailer stays the only machine-checkable commit signal in this core
  - **For:** Keeps the trailer as the machine-checkable form (spec §5.2 item 3) and CI strictly lint-only (spec §5.2 item 4); commit-signature binding is a control proof owned by `proofs-of-control`, and adding it would drag verification into a lint-only surface (spec §6).
  - **Against:** Until deferred, the trailer carries no cryptographic binding, so its claim is weaker than a signed commit.
- **Option (b):** include commit-signature binding (GPG/SSH signature over the trailer) in the minimal core now
  - **For:** Gives the trailer a cryptographic binding immediately, strengthening its claim.
  - **Against:** Introduces verification into a surface the spec keeps strictly lint-only (spec §5.2 item 4; §6), and duplicates the control proof owned by `proofs-of-control`.
- **Option (c):** specify the trailer as cryptographically bindable but ship no signing tooling
  - **For:** Documents the seam for future signing without shipping verification tooling.
  - **Against:** Expands the spec's surface beyond the minimal stable core (spec §5.1 principle 1) for a binding that no tooling implements.
- **Recommended:** (a) — spec §5.2 item 3 makes the trailer the machine-checkable form and item 4 keeps CI lint-only; commit-signature binding is a control proof owned by `proofs-of-control` and would drag verification into a lint-only surface. (c) is an acceptable middle if the human wants the seam documented without tooling.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Publish the format core: every surface references or embeds the ONE portable-declaration-schema record and defines no second record shape.
2. Define the package-metadata carrier per D1 (reserved key per ecosystem, value = declaration reference or inline record) and the published compatibility table.
3. Define the `Plus-AI:` Git trailer (value = declaration reference/identifier); document that the founding-style `Name +AI` author line may also signal, but the trailer is the machine-checkable form and the two must not disagree.
4. Build the CI lint check: presence, parseability, and identifier resolvability only; distinct exit codes for "absent", "malformed", "unresolvable reference", and "passed"; never a truth claim or verdict.
5. Provide network-free client libraries (thin wrappers that read/write the portable record and surfaces; no network access; no phone home; fields preserved byte-for-byte).
6. Define the browser-indicator contract: render evidence labels only from the page's assertion, or the honest "no machine-readable assertion found" state when absent — never a negative mark.
7. Publish conformance fixtures (canonical input/output pairs) per surface, kept in the offline pack so tests run without the network.
8. Version every interface (monotonic integer from first publication; meaning changes bump the version and are changelog-announced before adoption); note that webhooks/change feeds stay deferred to `public-snapshots-and-api`.
9. Apply the D2 commit-signature decision.
10. Apply the multi-language constraints below: browser-indicator labels are T1 evidence vocabulary; JSON keys, the `Plus-AI:` trailer name, and CI status tokens are T0.
11. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- CI checks are lint-only, never truth claims or verdicts; distinct exit codes for absent / malformed / unresolvable / passed.
- No phoning home (client libraries are network-free); no second record shape.
- Browser indicators render evidence labels or "no machine-readable assertion found", never a negative mark.
- Every surface is UTF-8 text, parses with no JavaScript and no cookies, and is human-readable without a library.
- No surface is proprietary or vendor-specific in a way that makes a declaration unreadable elsewhere; keys are namespaced, not owned.
- No competing push channel (webhooks/change feeds deferred to `public-snapshots-and-api`).
- The `Plus-AI:` trailer name, JSON keys, and CI status tokens are T0 protected (R2/T0), never translated; browser-indicator evidence labels are T1 normative, `reviewed`-only (R5), never machine-draft.

## 5. Acceptance criteria
- [ ] Every surface references or embeds the portable declaration record and nothing else.
- [ ] A declaration written in one ecosystem's package file is readable in another without a library.
- [ ] A CI check never emits a truth claim or verdict; it reports only structural status.
- [ ] The Git trailer and author line, when both present, are checked for disagreement.
- [ ] Client libraries are network-free and preserve fields byte-for-byte.
- [ ] A browser indicator renders evidence labels only, or the honest "none found" state.
- [ ] Every surface parses with JavaScript disabled and no cookies.
- [ ] Conformance fixtures pass offline from the offline pack.
- [ ] Interface changes are versioned and changelog-announced before adoption.

## 6. Outputs to produce in the repository
- `docs/spec/developer-integrations.md` — surface formats, the compatibility table, the CI exit-code contract, the browser-indicator contract, and the D2 commit-signature decision.
- `scripts/plus-ai-lint.mjs` — CI lint check with distinct exit codes (absent / malformed / unresolvable / passed).
- `site/schemas/developer-integrations/<version>/` — conformance fixtures (canonical input/output pairs) per surface, offline-pack-safe.

## 7. Read before building
- [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md) — mini-plan
- [`developer-integrations-dsh.md`](../suggestions/developer-integrations-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
