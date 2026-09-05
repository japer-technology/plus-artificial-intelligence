# Agent request — developer-integrations: Developer Integrations

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../../06-email-distribution-integrations.md)
> **Source:** spec [`developer-integrations-dsh.md`](../../../../suggestions/developer-integrations-dsh.md) · seed [`developer-integrations.md`](../../../../suggestions/developer-integrations.md)
> **Effort:** M · **Phase:** P2 · **Position:** P2 — after the spine stabilises so the fixtures don't churn.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Reserved-key spellings per ecosystem
- **Question:** What are the exact reserved-key spellings for package metadata across the target ecosystems? (spec §10 item 1; digest "reserved-key spellings".)
- **Options:** (a) adopt `"plus-ai"` in `package.json` as canonical and document per-ecosystem equivalents in the compatibility table · (b) adopt a different uniform key name (e.g. `"plusai"`) across all ecosystems · (c) leave spellings open pending the compatibility survey, shipping the table structure only.
- **Recommended:** (a) — spec §5.2 item 2 already names `"plus-ai"` for `package.json`; the compatibility table documents the other ecosystems' spellings, so `"plus-ai"` is canonical and the survey only fills the table.
- **Your choice:** ✏️

### D2 — Commit-signature binding (defer vs include)
- **Question:** Should commit-signature binding (a signature over the trailer) join the minimal core now, or defer to proofs-of-control? (spec §10 item 2; digest "commit-signature binding".)
- **Options:** (a) defer to proofs-of-control — the trailer stays the only machine-checkable commit signal in this core · (b) include commit-signature binding (GPG/SSH signature over the trailer) in the minimal core now · (c) specify the trailer as cryptographically bindable but ship no signing tooling.
- **Recommended:** (a) — spec §5.2 item 3 makes the trailer the machine-checkable form and item 4 keeps CI lint-only; commit-signature binding is a control proof owned by `proofs-of-control` and would drag verification into a lint-only surface. (c) is an acceptable middle if the human wants the seam documented without tooling.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

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
11. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- CI checks are lint-only, never truth claims or verdicts; distinct exit codes for absent / malformed / unresolvable / passed.
- No phoning home (client libraries are network-free); no second record shape.
- Browser indicators render evidence labels or "no machine-readable assertion found", never a negative mark.
- Every surface is UTF-8 text, parses with no JavaScript and no cookies, and is human-readable without a library.
- No surface is proprietary or vendor-specific in a way that makes a declaration unreadable elsewhere; keys are namespaced, not owned.
- No competing push channel (webhooks/change feeds deferred to `public-snapshots-and-api`).
- The `Plus-AI:` trailer name, JSON keys, and CI status tokens are T0 protected (R2/T0), never translated; browser-indicator evidence labels are T1 normative, `reviewed`-only (R5), never machine-draft.

## 4. Acceptance criteria
- [ ] Every surface references or embeds the portable declaration record and nothing else.
- [ ] A declaration written in one ecosystem's package file is readable in another without a library.
- [ ] A CI check never emits a truth claim or verdict; it reports only structural status.
- [ ] The Git trailer and author line, when both present, are checked for disagreement.
- [ ] Client libraries are network-free and preserve fields byte-for-byte.
- [ ] A browser indicator renders evidence labels only, or the honest "none found" state.
- [ ] Every surface parses with JavaScript disabled and no cookies.
- [ ] Conformance fixtures pass offline from the offline pack.
- [ ] Interface changes are versioned and changelog-announced before adoption.

## 5. Outputs to produce in the repository
- `docs/spec/developer-integrations.md` — surface formats, the compatibility table, the CI exit-code contract, the browser-indicator contract, and the D2 commit-signature decision.
- `scripts/plus-ai-lint.mjs` — CI lint check with distinct exit codes (absent / malformed / unresolvable / passed).
- `site/schemas/developer-integrations/<version>/` — conformance fixtures (canonical input/output pairs) per surface, offline-pack-safe.

## 6. Read before building
- [`06-email-distribution-integrations.md`](../../06-email-distribution-integrations.md) — mini-plan
- [`developer-integrations-dsh.md`](../../../../suggestions/developer-integrations-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
