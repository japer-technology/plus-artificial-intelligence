# Portable Declaration Schema — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`portable-declaration-schema.md`](portable-declaration-schema.md).
> **Catalogue group:** Declarations and profiles.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the open, versioned `+AI` declaration record: the
portable data shape that says who takes responsibility, for what artifact or
scope, with what AI role, on what date, under which version of the normative
specification, with which optional tools and evidence, and with which status.
One record format must work identically as a local file, on hosted services, in
mirrors, and inside page metadata, so that the mark's machine-readable promise
is not owned by any single host.

## 2. Placement and boundaries

This specification sits in the "Declarations and profiles" group and owns the
*record format*: field set, required fields, serialisation, canonicalisation,
identifiers, and extension rules. It deliberately does not own: how the record
is discovered on a page (see [Machine-readable assertions](machine-readable-assertions-dsh.md)),
the state and event vocabulary attached to it (see [Declaration
lifecycle](declaration-lifecycle-dsh.md)), how it is checked (see [Verification
checker](verification-checker-dsh.md)), or how it is registered (see [Opt-in
signatory registry](opt-in-signatory-registry-dsh.md)). It honours the free
floor by being fully expressible offline and by keeping every
responsibility-bearing field free to use; optional fields must never become
pay-walled requirements.

## 3. Terminology

- **Declaration record** — the serialised data object defined here.
- **Responsible party** — the person who takes responsibility (the signer),
  optionally with an organisation context.
- **Artifact or scope** — what the declaration covers: a URL, file, dataset,
  release, page region, or defined scope.
- **AI role** — how AI materially assisted (e.g. drafted, edited, reviewed,
  generated), drawn from the claim-types vocabulary.
- **Canonical serialisation** — the deterministic byte form used for hashing
  and signature verification.

## 4. Scope

### 4.1 In scope

- Required and optional fields with semantics and privacy boundaries.
- Serialisation (JSON) and canonicalisation rules.
- Identifier rules for declarations and their parts.
- Extension mechanism for third-party fields.
- Compatibility guarantees across schema versions.

### 4.2 Out of scope and deferred

- Discovery and embedding on pages (machine-readable assertions).
- Lifecycle events and status derivation (declaration lifecycle).
- Tool and capability vocabularies (tool taxonomy, AI practice register).
- Organisation-internal policy records (approved-tool registers).

## 5. Specification

### 5.1 Design goals and principles

1. **Minimal core.** The smallest record that carries the promise is valid;
   everything else is optional.
2. **One record, many surfaces.** The same bytes work in files, metadata, and
   hosted services.
3. **Deterministic bytes.** Canonical serialisation enables hashing and
   signatures without ambiguity.
4. **Privacy by default.** Fields must not invite more personal data than the
   promise requires; pseudonyms are legal values.
5. **Forward-compatible.** Unknown fields must not invalidate a record.

### 5.2 Normative requirements

1. The record MUST be valid JSON, serialised as UTF-8.
2. The record MUST contain: `schemaVersion`, `declarationId`, `responsibleParty`,
   `artifactOrScope`, `aiRole`, `issued`, and `specVersion`.
3. `responsibleParty` MUST name a human being who takes responsibility; it MAY
   be a pseudonym and MAY carry an optional `organization` context field.
4. `artifactOrScope` MUST be one of: a URL, a content binding object (see
   artifact hashing and binding), or a scope object with a human-readable
   description; at least one identifying element MUST be present.
5. `aiRole` MUST use the claim-types role vocabulary and MUST NOT claim the AI
   created everything or that no human reviewed the release.
6. `issued` MUST be an ISO-8601 date or date-time representing when the signer
   stood behind the work.
7. `specVersion` MUST reference the normative specification version in force
   when the declaration was issued, in the form owned by specification
   versioning and hashing.
8. Optional fields MUST include at most: `tools`, `practices`, `evidence`,
   `status`, `language`, `visibility`, and extensions as defined in 5.3;
   implementations MUST tolerate and preserve unknown fields.
9. `tools` entries MUST reference tool taxonomy identifiers where they exist,
   or free-text names otherwise; prompts MUST NOT be required (red line).
10. Canonical serialisation MUST be: remove whitespace, sort object keys
    lexicographically, preserve arrays in order, emit minimal escaping; any two
    semantically identical records MUST canonicalise to identical bytes.
11. Schema versions MUST be integers that only increase; each version MUST
    publish a machine-readable JSON Schema and a human-readable change note;
    removals of fields MUST be preceded by a deprecation release.
12. Records MUST NOT embed credentials, private keys, contact addresses beyond
    what the signer chooses to publish, or data about third parties without
    their consent.
13. `responsibleParty` MUST be a human being; an organisation MUST NOT be the
    sole responsibleParty and appears only as the optional `organization`
    context field (see organisation profiles and policies).

### 5.3 Data model

```
{
  "schemaVersion": "integer",
  "declarationId": "opaque, unique, never reused",
  "responsibleParty": { "name": "person or pseudonym",
                        "organization": "optional context" },
  "artifactOrScope": { "url": "optional",
                       "binding": "optional, per artifact hashing and binding",
                       "description": "human-readable scope" },
  "aiRole": "claim-types role",
  "issued": "ISO-8601",
  "specVersion": "normative specification version",
  "tools":     [ { "id": "tool-taxonomy id", "role": "optional" } ],
  "practices": [ "review practice references" ],
  "evidence":  [ { "type": "control proof or label reference",
                   "value": "...", "checkedAt": "ISO-8601" } ],
  "status": "lifecycle status (active unless events say otherwise)",
  "language": "primary language of the declaration",
  "visibility": "local | unlisted | public | organisation-only"
}
```

### 5.4 Interfaces and behaviours

- Records are exchanged as files (`.plus-ai.json`), as the value of page
  metadata, and as registry entries; all three MUST be the same shape.
- Validators ship with each schema version and MUST be usable offline.
- When a record is embedded in a page, the page context MUST NOT silently alter
  the record's meaning; the embedded record wins over page-derived guesses.

### 5.5 Lifecycle and operational rules

- `status` is a convenience field; authoritative status derives from lifecycle
  events (see declaration lifecycle).
- Schema evolution follows the no-silent-change invariant: every released
  schema version is permanent, and old records remain valid against the schema
  version they declare.

## 6. Free floor, red lines, and invariants

The schema is a free-floor commons: using it, validating it, and issuing
records with it must never require payment or an account. The red lines against
forced tool or prompt disclosure and biometric proof are enforced in section
5.2 items 9 and 12. The no-silent-change invariant is enforced by permanent
schema versions and canonical bytes. The schema must never carry a field whose
sole purpose is surveillance or ranking.

## 7. Relationships to sibling specifications

- [Machine-readable assertions](machine-readable-assertions-dsh.md) defines how
  this record is embedded in pages and discovered.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) defines the events and
  statuses that attach to a record's identifier.
- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md)
  defines the `specVersion` referent.
- [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md) defines
  the `binding` object.
- [Claim types](claim-types-dsh.md) defines the `aiRole` and practice claim
  vocabulary.
- [Tool taxonomy](tool-taxonomy-dsh.md) supplies the `tools` identifiers.
- [Verification checker](verification-checker-dsh.md) validates records against
  this schema.
- [No-account declaration builder](no-account-declaration-builder-dsh.md) and
  [Signing wizard](signing-wizard-dsh.md) produce records in this format.
- [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) and [Hosted
  profiles](hosted-profiles-dsh.md) store records in this format.
- [Visibility and consent](visibility-and-consent-dsh.md) owns the semantics of
  the `visibility` field.

## 8. Resolution of the seed's "before implementation" concerns

- **Required fields** — section 5.2 items 2-7: a minimal core with exact
  semantics.
- **Extension rules** — section 5.2 items 8 and 11: unknown fields tolerated
  and preserved; versioned evolution.
- **Canonical serialisation** — section 5.2 item 10: deterministic byte form.
- **Identifiers** — section 5.2 item 2 and 5.3: `declarationId` opaque, unique,
  never reused (rules owned with declaration lifecycle).
- **Privacy boundaries** — section 5.2 item 12 and principle 4: no credentials,
  no third-party data, pseudonyms allowed.
- **Validation examples** — section 5.2 item 11: each schema version ships a
  JSON Schema and offline validator.
- **Compatibility guarantees** — section 5.5: permanent versions, deprecation
  before removal, old records stay valid.

## 9. Acceptance criteria

1. The minimal valid record contains exactly the required fields and validates
   offline.
2. Two semantically identical records canonicalise to identical bytes.
3. A record with unknown extension fields still validates and round-trips the
   unknown fields unchanged.
4. A record with a pseudonymous responsible party validates.
5. A record referencing a tool taxonomy identifier validates; a free-text tool
   name is accepted with a warning.
6. A record that omits prompts is fully valid; no field requires prompt
   disclosure.
7. An old record validates against its declared schema version after a newer
   schema release.
8. Embedded page metadata and the standalone file carry the identical record.

## 10. Open questions

- The deprecation window length for field removal.
