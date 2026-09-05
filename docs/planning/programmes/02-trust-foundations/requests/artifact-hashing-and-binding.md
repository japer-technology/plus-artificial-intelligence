# Agent request — artifact-hashing-and-binding: Artifact Hashing and Binding

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../../02-trust-foundations.md)
> **Source:** spec [`artifact-hashing-and-binding-dsh.md`](../../../../suggestions/artifact-hashing-and-binding-dsh.md) · seed [`artifact-hashing-and-binding.md`](../../../../suggestions/artifact-hashing-and-binding.md)
> **Effort:** M · **Phase:** P1 · **Position:** with the schema (its `binding` field is defined here)
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Canonicalisation methods beyond the four named
- **Question:** Which canonicalisation methods should be standardised beyond `raw`, `text-normalised`, `region-<selector>`, and `exported` (e.g. PDF, images, archives)? (spec §10.)
- **Options:** (a) Ship only the four named methods now, and standardise further methods (PDF/image/archive) later by versioned addition · (b) Add PDF, image, and archive canonicalisation now · (c) Add only a generic "opaque/byte-exact" method and defer all format-specific methods.
- **Recommended:** (a) — the four named methods cover the launch cases (file, text, region, exported source-version), and later methods can be added as versioned, announced changes without breaking existing bindings.
- **Your choice:** ✏️

### D2 — Merkle-range hashing for large artifacts
- **Question:** Should large-artifact bindings adopt Merkle-range hashing to support partial verification? (spec §10.)
- **Options:** (a) Defer — not in v1; rely on full-content hashing with bounded fetches for now · (b) Adopt Merkle-range hashing now for artifacts above a size threshold · (c) Adopt a simpler range-hash scheme now and defer Merkle trees.
- **Recommended:** (a) — partial verification is a scale optimisation, not a correctness need; the spec's bounded-fetch rules (§5.2.11–12, §5.4) already keep checks bounded, and deferring avoids premature format complexity.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Write the binding object schema (`kind`, `algorithm`, `hash`, `canonicalisation`, `url`/`contentId`, `regionSelector`, `description`) for byte, scope, and C2PA-manifest bindings.
2. Specify the canonicalisation methods per D1, with exact transforms (`raw`, `text-normalised`, `region-<selector>`, `exported`) and the binding-kind labelling rules.
3. Write the checker revalidation logic: recompute the hash at check time, report mismatch as `check-failed` (hash mismatch), report missing artifacts as `check-failed` with reason "artifact unavailable", and enforce bounded fetches.
4. State the scope-binding rule (reported as self-declared scope coverage, never `hash-matched`) and the derivative rule (derivatives carry their own bindings, never an upstream hash).
5. State the C2PA-manifest binding rule (reference by content-credentials identifier and hash, no claimed C2PA validation the project did not perform).
6. Self-check the result against §4 acceptance criteria before finishing.
7. **Spine freeze check (note for the agent):** this spec is one of the four freeze-check members. Confirm `hash-matched`/`check-failed` here compose exactly with the evidence-labels vocabulary and that the `binding` object slots into the portable-declaration-schema `artifactOrScope` field; flag any mismatch for the joint review before Programme 3.

## 3. Constraints (must-nots)
- Scope bindings never report `hash-matched` (self-declared coverage only).
- Hash mismatch is never silently ignored or "corrected".
- Derivatives require their own bindings — a declaration never claims an upstream artifact's hash as covering the derivative.
- Both binding kinds and all revalidation checks stay free; the kind distinction is never hidden or reserved for paying customers.

## 4. Acceptance criteria
- [ ] A byte-bound declaration over an unchanged file yields `hash-matched`.
- [ ] The same declaration after the file changes yields `check-failed` (hash mismatch), and the stored binding is unchanged.
- [ ] A scope-bound declaration never yields `hash-matched`; it is reported as self-declared scope coverage.
- [ ] A text binding hashes identically regardless of the platform's line endings after `text-normalised` canonicalisation.
- [ ] A region binding records its selector and revalidates only the region.
- [ ] An unreachable artifact yields `check-failed` with reason "artifact unavailable".
- [ ] A derivative of a hashed artifact requires its own declaration and binding.
- [ ] All surfaces (builder output, checker results, directory rows) display the binding kind explicitly.

## 5. Outputs to produce in the repository
- `docs/spec/artifact-hashing-and-binding.md` — binding object, canonicalisation methods, revalidation rules.
- `site/schemas/binding/<version>/schema.json` — binding object JSON Schema (referenced by the declaration schema).

## 6. Read before building
- [`02-trust-foundations.md`](../../02-trust-foundations.md) — mini-plan
- [`artifact-hashing-and-binding-dsh.md`](../../../../suggestions/artifact-hashing-and-binding-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../../../digest/04-artifacts-and-trust.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
