# Development task — artifact-hashing-and-binding: Artifact Hashing and Binding

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md)
> **Source:** spec [`artifact-hashing-and-binding-dsh.md`](../suggestions/artifact-hashing-and-binding-dsh.md) · seed [`artifact-hashing-and-binding.md`](../suggestions/artifact-hashing-and-binding.md)
> **Effort:** M · **Phase:** P1 · **Position:** with the schema (its `binding` field is defined here)
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Bind a declaration to its subject: byte binding (SHA-256+), scope binding, or C2PA-manifest binding.
- **Why now / risk of deferring:** It ships with the schema — the schema's `binding` field is defined here (mini-plan Order). Deferring leaves the declaration's subject unattached, so `hash-matched` can never be claimed; it is one of the four freeze-check members.
- **Features to deliver:**
  - Three binding kinds — byte, scope, C2PA-manifest — plus the binding object schema (`algorithm`/`hash`/`canonicalisation`/retrieval).
  - Four canonicalisation methods: `raw`, `text-normalised`, `region-<selector>`, `exported`.
  - Checker revalidation logic with bounded fetches; the binding kind always rendered; hash mismatch → `check-failed`, never silently ignored or "corrected".
- **Depends on:** portable-declaration-schema, evidence-labels-not-trust-scores, provenance-interoperability

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Canonicalisation methods beyond the four named
- **Question:** Which canonicalisation methods should be standardised beyond `raw`, `text-normalised`, `region-<selector>`, and `exported` (e.g. PDF, images, archives)? (spec §10.)
- **Option (a):** Ship only the four named methods now, and standardise further methods (PDF/image/archive) later by versioned addition
  - **For:** The four named methods cover the launch cases (spec §5.2.3–6: raw file, text-normalised, region, exported source-version), and §5.5's immutable-bindings rule lets new methods be added by versioned, announced change without breaking existing bindings.
  - **Against:** Format-specific bindings (PDF, images, archives) stay unavailable until later, so those artifacts can only be byte-bound with `raw` in the interim.
- **Option (b):** Add PDF, image, and archive canonicalisation now
  - **For:** PDF/image/archive canonicalisation would let those common artifact types be bound deterministically now.
  - **Against:** The spec defines only its four named methods (§5.2.2), and adding format-specific transforms early risks premature complexity before those types are actually needed by launch cases.
- **Option (c):** Add only a generic "opaque/byte-exact" method and defer all format-specific methods.
  - **For:** A generic byte-exact method is the minimal, universally applicable fallback.
  - **Against:** `raw` already is the byte-exact method for single files (§5.2.3), so (c) adds a near-duplicate while still deferring the format-specific work the question is about.
- **Recommended:** (a) — the four named methods cover the launch cases (file, text, region, exported source-version), and later methods can be added as versioned, announced changes without breaking existing bindings.
- **Your choice:** ✏️

### D2 — Merkle-range hashing for large artifacts
- **Question:** Should large-artifact bindings adopt Merkle-range hashing to support partial verification? (spec §10.)
- **Option (a):** Defer — not in v1; rely on full-content hashing with bounded fetches for now
  - **For:** Partial verification is a scale optimisation, not a correctness need — the spec's bounded-fetch rules (§5.2.11–12, §5.4) already keep checks bounded via range requests and size caps.
  - **Against:** Very large artifacts cannot be partially verified in v1, so a changed byte requires re-fetching the whole content to detect it.
- **Option (b):** Adopt Merkle-range hashing now for artifacts above a size threshold
  - **For:** Merkle ranges would allow partial verification of large artifacts, reducing re-fetch cost on change.
  - **Against:** Adds tree structure and proof encoding the spec does not define, and no launch case requires it — premature format complexity.
- **Option (c):** Adopt a simpler range-hash scheme now and defer Merkle trees.
  - **For:** A simpler range-hash scheme gets partial-verification benefits with less complexity than full Merkle trees.
  - **Against:** Still adds an unspecified scheme beyond the spec's four canonicalisation methods and its full-content hash (§5.2.2), with no launch need.
- **Recommended:** (a) — partial verification is a scale optimisation, not a correctness need; the spec's bounded-fetch rules (§5.2.11–12, §5.4) already keep checks bounded, and deferring avoids premature format complexity.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Write the binding object schema (`kind`, `algorithm`, `hash`, `canonicalisation`, `url`/`contentId`, `regionSelector`, `description`) for byte, scope, and C2PA-manifest bindings.
2. Specify the canonicalisation methods per D1, with exact transforms (`raw`, `text-normalised`, `region-<selector>`, `exported`) and the binding-kind labelling rules.
3. Write the checker revalidation logic: recompute the hash at check time, report mismatch as `check-failed` (hash mismatch), report missing artifacts as `check-failed` with reason "artifact unavailable", and enforce bounded fetches.
4. State the scope-binding rule (reported as self-declared scope coverage, never `hash-matched`) and the derivative rule (derivatives carry their own bindings, never an upstream hash).
5. State the C2PA-manifest binding rule (reference by content-credentials identifier and hash, no claimed C2PA validation the project did not perform).
6. Self-check the result against §5 acceptance criteria before finishing.
7. **Spine freeze check (note for the agent):** this spec is one of the four freeze-check members. Confirm `hash-matched`/`check-failed` here compose exactly with the evidence-labels vocabulary and that the `binding` object slots into the portable-declaration-schema `artifactOrScope` field; flag any mismatch for the joint review before Programme 3.

## 4. Constraints (must-nots)
- Scope bindings never report `hash-matched` (self-declared coverage only).
- Hash mismatch is never silently ignored or "corrected".
- Derivatives require their own bindings — a declaration never claims an upstream artifact's hash as covering the derivative.
- Both binding kinds and all revalidation checks stay free; the kind distinction is never hidden or reserved for paying customers.

## 5. Acceptance criteria
- [ ] A byte-bound declaration over an unchanged file yields `hash-matched`.
- [ ] The same declaration after the file changes yields `check-failed` (hash mismatch), and the stored binding is unchanged.
- [ ] A scope-bound declaration never yields `hash-matched`; it is reported as self-declared scope coverage.
- [ ] A text binding hashes identically regardless of the platform's line endings after `text-normalised` canonicalisation.
- [ ] A region binding records its selector and revalidates only the region.
- [ ] An unreachable artifact yields `check-failed` with reason "artifact unavailable".
- [ ] A derivative of a hashed artifact requires its own declaration and binding.
- [ ] All surfaces (builder output, checker results, directory rows) display the binding kind explicitly.

## 6. Outputs to produce in the repository
- `docs/spec/artifact-hashing-and-binding.md` — binding object, canonicalisation methods, revalidation rules.
- `site/schemas/binding/<version>/schema.json` — binding object JSON Schema (referenced by the declaration schema).

## 7. Read before building
- [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md) — mini-plan
- [`artifact-hashing-and-binding-dsh.md`](../suggestions/artifact-hashing-and-binding-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../planning/digest/04-artifacts-and-trust.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
