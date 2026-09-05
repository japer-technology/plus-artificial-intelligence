# Development task — portable-declaration-schema: Portable Declaration Schema

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md)
> **Source:** spec [`portable-declaration-schema-dsh.md`](../suggestions/portable-declaration-schema-dsh.md) · seed [`portable-declaration-schema.md`](../suggestions/portable-declaration-schema.md)
> **Effort:** M · **Phase:** P1 · **Position:** after the vocabularies; this is the spine the checker/registry/builder all consume
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** The open, versioned JSON record: who takes responsibility, for what, with what AI role, when, under which spec version.
- **Why now / risk of deferring:** It is the spine the checker, registry, and builder all consume (mini-plan Order). Deferring risks schema over-scoping: the temptation is to absorb registry/checker fields, which breaks "one record, many surfaces" (programme Risks); it is also one of the four freeze-check members.
- **Features to deliver:**
  - Required core fields: `schemaVersion`, `declarationId`, `responsibleParty` (a named human, optionally with an `organization` context), `artifactOrScope`, `aiRole`, `issued`, `specVersion`.
  - Optional fields (at most): `tools`, `practices`, `evidence`, `status`, `language`, `visibility`; unknown extension fields tolerated and round-tripped.
  - Canonical serialisation (remove whitespace, sort keys, minimal escaping); a versioned JSON Schema + offline validator per version; a deprecation-before-removal process.
- **Depends on:** claim-types, tool-taxonomy, specification-versioning-and-hashing, artifact-hashing-and-binding, visibility-and-consent, declaration-lifecycle

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Deprecation window length for field removal
- **Question:** How long must a field be deprecated (announced but still tolerated) before it may be removed from the schema? (spec §10; assigned cross-cutting decision from IMPLEMENTATION-PLAN §11.)
- **Option (a):** One full schema version cycle — deprecated in vN, removed no earlier than vN+1
  - **For:** Ties removal to the version cycle the schema already has (spec §5.2.11: integer versions, deprecation release before removal), so removal is versioned and announced rather than time-based.
  - **Against:** A version cycle has no fixed duration, so "one cycle" could be arbitrarily short if releases come rapidly.
- **Option (b):** A calendar window (e.g. 6 months after the deprecation release)
  - **For:** A calendar window gives a concrete, predictable deadline for consumers to migrate.
  - **Against:** 6 months is arbitrary and not grounded in any source — §5.2.11 only requires "a deprecation release" before removal, not a time span.
- **Option (c):** A calendar window of 12 months
  - **For:** 12 months gives consumers a full year to migrate off the deprecated field.
  - **Against:** Still arbitrary, and the spec's forward-compatible principle (§5.1.5: unknown fields must not invalidate a record) leans toward never breaking old records, making any removal window second-best.
- **Option (d):** Never remove — deprecate only, keeping old fields valid forever.
  - **For:** Spec §5.1.5 ("forward-compatible") and §5.5 ("old records remain valid") lean toward never removing fields, so deprecate-only is the only option that fully preserves old records.
  - **Against:** An ever-growing schema accumulates deprecated fields indefinitely, adding surface area and reader confusion.
- **Recommended:** (d) or (a) — the spec's principles ("forward-compatible", "old records stay valid") lean toward never breaking old records; if removal is ever wanted, (a) one full version cycle is the minimum that satisfies "field removal requires a prior deprecation release".
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Define the required fields and their exact semantics: `schemaVersion`, `declarationId` (opaque, unique, never reused), `responsibleParty` (a named human, pseudonym allowed, optional `organization` context), `artifactOrScope` (URL / binding object / scope description), `aiRole` (claim-types vocabulary), `issued` (ISO-8601), `specVersion` (specification-versioning-and-hashing referent).
2. Define the optional fields (at most): `tools`, `practices`, `evidence`, `status`, `language`, `visibility` — and the rule that unknown extension fields are tolerated and round-tripped.
3. Write the canonical serialisation spec (remove whitespace, sort object keys lexicographically, preserve arrays, minimal escaping) so semantically identical records canonicalise to identical bytes.
4. Publish the versioned JSON Schema and an offline validator per schema version; specify the version/change-note/deprecation-release process, including the D1 deprecation window.
5. State the privacy boundaries (no credentials, private keys, third-party data, or surveillance/ranking fields; prompts never required).
6. Self-check the result against §5 acceptance criteria before finishing.
7. **Spine freeze check (note for the agent):** this spec is one of the four freeze-check members. Confirm the `binding` (artifact-hashing-and-binding), `status` (declaration-lifecycle), `visibility` (visibility-and-consent), and `aiRole`/`tools` (claim-types, tool-taxonomy) references line up with those specs; flag any mismatch for the joint review before Programme 3.

## 4. Constraints (must-nots)
- Prompts never required; no embedded credentials, keys, or third-party data without consent.
- An organisation is never the sole `responsibleParty` — a human must be named.
- Field removal requires a prior deprecation release (window per D1).
- No field whose sole purpose is surveillance or ranking.
- The schema is a free-floor commons — using, validating, and issuing records never requires payment or an account.

## 5. Acceptance criteria
- [ ] The minimal valid record contains exactly the required fields and validates offline.
- [ ] Two semantically identical records canonicalise to identical bytes.
- [ ] A record with unknown extension fields still validates and round-trips the unknown fields unchanged.
- [ ] A record with a pseudonymous responsible party validates.
- [ ] A record referencing a tool taxonomy identifier validates; a free-text tool name is accepted with a warning.
- [ ] A record that omits prompts is fully valid; no field requires prompt disclosure.
- [ ] An old record validates against its declared schema version after a newer schema release.
- [ ] Embedded page metadata and the standalone file carry the identical record.

## 6. Outputs to produce in the repository
- `docs/spec/portable-declaration-schema.md` — field semantics, canonical serialisation, deprecation/versioning process.
- `site/schemas/declaration/<version>/schema.json` — versioned JSON Schema.
- `scripts/validate-declaration.mjs` — offline validator per version.

## 7. Read before building
- [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md) — mini-plan
- [`portable-declaration-schema-dsh.md`](../suggestions/portable-declaration-schema-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../planning/digest/02-declarations-and-profiles.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
