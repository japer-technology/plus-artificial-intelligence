# Provenance Interoperability — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`provenance-interoperability.md`](provenance-interoperability.md).
> **Catalogue group:** Artifacts and trust.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how +AI declarations interoperate with the
established provenance ecosystem — C2PA content credentials, IPTC Digital
Source Type, Schema.org metadata, and existing signature formats — without
reimplementing them. The project's distinct contribution is the moral layer
those formats lack: C2PA records what tool did what; the +AI declaration
records who stands behind it. Interoperability means both can be present, be
told apart, and reinforce each other, with the project claiming no powers it
does not have.

## 2. Placement and boundaries

This specification sits in the "Artifacts and trust" group and owns the
*mapping layer*. It does not own the declaration record (see [Portable
declaration schema](portable-declaration-schema-dsh.md)), its embedding (see
[Machine-readable assertions](machine-readable-assertions-dsh.md)), or the
checking of mapped fields (see [Verification checker](verification-checker-dsh.md)).
It honours the free floor: mappings and reference implementations are open and
free; paid integrations may add convenience but never exclusive
interoperability. The standards-engagement sibling governs when these mappings
may be proposed to external bodies.

## 3. Terminology

- **Provenance record** — a machine-readable statement about an artifact's
  history in an external standard (C2PA, IPTC, EXIF, XMP).
- **Mapping** — the documented correspondence between a +AI declaration field
  and an external provenance field.
- **Digital Source Type** — the IPTC vocabulary describing how content was
  created or edited.
- **Content credentials** — the C2PA manifest attached to a media artifact.

## 4. Scope

### 4.1 In scope

- Field mappings to C2PA, IPTC, and Schema.org.
- Coexistence rules when both a provenance record and a declaration exist.
- Signature interop (the declaration's own signatures).
- Reference implementation requirements.

### 4.2 Out of scope and deferred

- Creating or validating C2PA manifests (the project consumes and maps, never
  certifies them).
- Proposing mappings to standards bodies (standards engagement).
- The declaration record's schema changes (portable declaration schema).

## 5. Specification

### 5.1 Design goals and principles

1. **Ride the rail, don't build one.** Use existing standards; never fork
   them.
2. **One-way honesty.** The project maps and references external records; it
   never re-validates what it cannot.
3. **Both can be true.** A C2PA record and a +AI declaration are different
   claims and may coexist without contradiction.
4. **Degrade gracefully.** Where an external format is absent, the
   declaration stands alone.

### 5.2 Normative requirements

1. The project MUST publish a versioned mapping document for each external
   format, listing every mapped field, its direction (declaration → external,
   external → declaration), and the semantic difference it preserves.
2. The mapping MUST preserve the core distinction: external records state
   *what happened in production*; the +AI declaration states *who takes
   responsibility*. No mapping MAY present one as the other.
3. The C2PA mapping MUST reference content credentials by identifier and hash
   (see artifact hashing and binding) and MUST NOT claim C2PA validation the
   project did not perform; a referenced credential that fails external
   validation MUST be reported as `check-failed` in the C2PA context, while
   the declaration's own integrity checks remain separate.
4. The IPTC mapping MUST map the Digital Source Type vocabulary to the
   claim-types `aiRole` where meanings align, and MUST document the cases
   where they do not align; unaligned cases MUST be recorded as
   "no equivalent", never forced.
5. The Schema.org mapping MUST express the declaration as structured metadata
   compatible with existing creative-work schemas (e.g. via the JSON-LD
   surface in machine-readable assertions), reusing existing properties before
   proposing new ones.
6. The declaration's own signatures MUST interoperate with standard signature
   formats (e.g. detached signatures over canonical bytes); key and proof
   semantics remain owned by proofs of control.
7. Reference implementations MUST be open, offline-capable, and shipped in the
   offline and self-hosting pack; paid integrations MUST NOT gate the
   mappings themselves.
8. Checkers MUST report mapped external evidence as separate labels (e.g.
   "C2PA manifest referenced") and MUST NOT fold external validation into the
   declaration's own evidence labels.
9. Every mapping release MUST be versioned and announced in the changelog;
   mappings that become obsolete MUST be deprecated with a migration note,
   never silently changed.

### 5.3 Data model

```
{
  "mappingVersion": "integer",
  "format": "C2PA | IPTC | Schema.org",
  "fields": [ {
    "declarationField": "...",
    "externalField": "...",
    "direction": "declaration->external | external->declaration",
    "semanticNote": "what the mapping preserves and what it does not"
  } ],
  "noEquivalent": [ "external fields with no +AI meaning" ],
  "deprecated": "optional previous version"
}
```

### 5.4 Interfaces and behaviours

- The checker shows external provenance references as a distinct section of
  its label set, with the external format named.
- The no-account builder may attach an existing C2PA reference to a
  declaration without re-validating it, labelled as referenced-not-verified.

### 5.5 Lifecycle and operational rules

- Mappings follow the specification versioning discipline: permanent versions,
  deprecation with migration notes.
- Changes to external standards trigger mapping reviews announced in the
  changelog.

## 6. Free floor, red lines, and invariants

The mappings and reference implementations are free-floor commons. The red
lines apply at the boundary: the project never re-certifies external records
(no transfer of responsibility, RL-8), never claims validation it did not
perform (honesty invariant), and never requires external formats — the
declaration always stands alone (static-first).

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the
  fields being mapped.
- [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md) owns the
  C2PA-manifest binding referenced here.
- [Machine-readable assertions](machine-readable-assertions-dsh.md) owns the
  JSON-LD/Schema.org embedding surface.
- [Verification checker](verification-checker-dsh.md) reports mapped evidence
  as separate labels.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)
  keeps external validation separate from declaration labels.
- [Proofs of control](proofs-of-control-dsh.md) owns signature key semantics.
- [Standards engagement](standards-engagement-dsh.md) governs proposing these
  mappings externally.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md)
  distributes reference implementations.

## 8. Resolution of the seed's "before implementation" concerns

The seed asks for mapping to C2PA, IPTC, Schema.org, and signatures; this
specification assigns each to a named mapping (sections 5.2 items 3-6) with
direction, semantic notes, and "no equivalent" cases, and adds the rules that
make the mappings safe: no re-validation claims (item 3), separate labels
(item 8), versioned releases (item 9), and open offline reference
implementations (item 7).

## 9. Acceptance criteria

1. Every external format has a published, versioned mapping document.
2. No mapping presents production facts as responsibility or vice versa.
3. A C2PA reference that fails external validation is reported as
   `check-failed` in the C2PA context, separately from declaration labels.
4. The IPTC mapping documents unaligned cases as "no equivalent".
5. The Schema.org mapping reuses existing properties before new ones.
6. Reference implementations run offline from the offline pack.
7. A checker reports external provenance as a distinct labelled section.
8. Mapping changes appear in the changelog with deprecation notes.

## 10. Open questions

- Which Schema.org properties best carry the declaration long-term, pending
  external review (see standards engagement).
- Whether to publish a machine-readable mapping registry for third-party
  tools to consume.
