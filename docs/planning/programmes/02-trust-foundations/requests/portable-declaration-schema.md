# Agent request — portable-declaration-schema: Portable Declaration Schema

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../../02-trust-foundations.md)
> **Source:** spec [`portable-declaration-schema-dsh.md`](../../../../suggestions/portable-declaration-schema-dsh.md) · seed [`portable-declaration-schema.md`](../../../../suggestions/portable-declaration-schema.md)
> **Effort:** M · **Phase:** P1 · **Position:** after the vocabularies; this is the spine the checker/registry/builder all consume
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Deprecation window length for field removal
- **Question:** How long must a field be deprecated (announced but still tolerated) before it may be removed from the schema? (spec §10; assigned cross-cutting decision from IMPLEMENTATION-PLAN §11.)
- **Options:** (a) One full schema version cycle — deprecated in vN, removed no earlier than vN+1 · (b) A calendar window (e.g. 6 months after the deprecation release) · (c) A calendar window of 12 months · (d) Never remove — deprecate only, keeping old fields valid forever.
- **Recommended:** (d) or (a) — the spec's principles ("forward-compatible", "old records stay valid") lean toward never breaking old records; if removal is ever wanted, (a) one full version cycle is the minimum that satisfies "field removal requires a prior deprecation release".
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Define the required fields and their exact semantics: `schemaVersion`, `declarationId` (opaque, unique, never reused), `responsibleParty` (a named human, pseudonym allowed, optional `organization` context), `artifactOrScope` (URL / binding object / scope description), `aiRole` (claim-types vocabulary), `issued` (ISO-8601), `specVersion` (specification-versioning-and-hashing referent).
2. Define the optional fields (at most): `tools`, `practices`, `evidence`, `status`, `language`, `visibility` — and the rule that unknown extension fields are tolerated and round-tripped.
3. Write the canonical serialisation spec (remove whitespace, sort object keys lexicographically, preserve arrays, minimal escaping) so semantically identical records canonicalise to identical bytes.
4. Publish the versioned JSON Schema and an offline validator per schema version; specify the version/change-note/deprecation-release process, including the D1 deprecation window.
5. State the privacy boundaries (no credentials, private keys, third-party data, or surveillance/ranking fields; prompts never required).
6. Self-check the result against §4 acceptance criteria before finishing.
7. **Spine freeze check (note for the agent):** this spec is one of the four freeze-check members. Confirm the `binding` (artifact-hashing-and-binding), `status` (declaration-lifecycle), `visibility` (visibility-and-consent), and `aiRole`/`tools` (claim-types, tool-taxonomy) references line up with those specs; flag any mismatch for the joint review before Programme 3.

## 3. Constraints (must-nots)
- Prompts never required; no embedded credentials, keys, or third-party data without consent.
- An organisation is never the sole `responsibleParty` — a human must be named.
- Field removal requires a prior deprecation release (window per D1).
- No field whose sole purpose is surveillance or ranking.
- The schema is a free-floor commons — using, validating, and issuing records never requires payment or an account.

## 4. Acceptance criteria
- [ ] The minimal valid record contains exactly the required fields and validates offline.
- [ ] Two semantically identical records canonicalise to identical bytes.
- [ ] A record with unknown extension fields still validates and round-trips the unknown fields unchanged.
- [ ] A record with a pseudonymous responsible party validates.
- [ ] A record referencing a tool taxonomy identifier validates; a free-text tool name is accepted with a warning.
- [ ] A record that omits prompts is fully valid; no field requires prompt disclosure.
- [ ] An old record validates against its declared schema version after a newer schema release.
- [ ] Embedded page metadata and the standalone file carry the identical record.

## 5. Outputs to produce in the repository
- `docs/spec/portable-declaration-schema.md` — field semantics, canonical serialisation, deprecation/versioning process.
- `site/schemas/declaration/<version>/schema.json` — versioned JSON Schema.
- `scripts/validate-declaration.mjs` — offline validator per version.

## 6. Read before building
- [`02-trust-foundations.md`](../../02-trust-foundations.md) — mini-plan
- [`portable-declaration-schema-dsh.md`](../../../../suggestions/portable-declaration-schema-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../../../digest/02-declarations-and-profiles.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
