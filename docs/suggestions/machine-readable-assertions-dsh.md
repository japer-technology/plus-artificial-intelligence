# Machine-Readable Assertions — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`machine-readable-assertions.md`](machine-readable-assertions.md).
> **Catalogue group:** Artifacts and trust.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how a `+AI` declaration becomes visible to software:
a versioned assertion embedded in page metadata, JSON-LD, or served from
`/.well-known/plus-ai.json`, so that crawlers, browser indicators, checkers, and
procurement tooling can find the responsible party, scope, AI role,
specification version, and status without scraping pixels. The mark's human
legibility is established; this specification defines its machine legibility,
without ever letting the machine form replace the visible, human-readable
disclosure.

## 2. Placement and boundaries

This specification sits in the "Artifacts and trust" group and owns *discovery
and embedding*. It does not own the record shape (see [Portable declaration
schema](portable-declaration-schema-dsh.md)) — every representation here MUST
align to that one schema. It defers verification semantics to the [Verification
checker](verification-checker-dsh.md) and status semantics to [Declaration
lifecycle](declaration-lifecycle-dsh.md). It honours the static-first invariant:
the assertion must be plain data that static pages can carry with no build
step, and the absence of any assertion must never invalidate the visible mark's
meaning.

## 3. Terminology

- **Assertion** — a machine-readable representation of a declaration record.
- **Embedding surface** — a concrete place an assertion can live: `<meta>`
  tag, JSON-LD script, well-known file, or portable file.
- **Discovery** — the ordered process by which a checker finds an assertion for
  a given page or origin.
- **Canonical form** — the portable declaration record serialisation the
  assertion must equal or clearly reference.

## 4. Scope

### 4.1 In scope

- The embedding surfaces and their precedence.
- Discovery order and scope rules (per-page versus origin-wide).
- Alignment to one schema across all surfaces.
- Extension, canonicalisation, privacy, and stale-data behaviour.

### 4.2 Out of scope and deferred

- The record's fields and validation (portable declaration schema).
- Checking, fetching, and labelling (verification checker, evidence labels).
- Signing and control proofs attached to assertions (proofs of control).

## 5. Specification

### 5.1 Design goals and principles

1. **One schema, many surfaces.** Every representation serialises the same
   portable declaration record.
2. **Progressive disclosure.** A minimal per-page tag is valid; richer records
   are optional.
3. **Declarations, not verification.** An assertion's presence proves nothing;
   it merely states a claim in a form tools can read.
4. **Static-friendly.** All surfaces work on hand-written static HTML with no
   build step and no required server.

### 5.2 Normative requirements

1. Every assertion surface MUST carry a `version` field for the assertion
   format itself, independent of the declaration's `schemaVersion`.
2. The `<meta>` surface MUST be
   `<meta name="plus-ai" content='<canonical JSON record>'>` on the page or
   artifact scope the assertion covers.
3. The JSON-LD surface MUST be a `<script type="application/ld+json">` block
   whose `@context` includes the `+AI` assertion context and whose payload is
   the same record; the block MUST be ignored by anything that cannot parse it.
4. The well-known surface MUST be served at `/.well-known/plus-ai.json` and
   MUST contain either a single declaration record or an object with a
   `default` policy record and a `scopes` array of per-scope records.
5. A per-page assertion MUST take precedence over the origin-wide well-known
   file for that page's scope; the well-known file governs otherwise.
6. All surfaces MUST carry the same meaning for the same scope; where they
   disagree, tools MUST report the disagreement rather than silently choosing.
7. The assertion MUST be parseable with no JavaScript and MUST not require
   cookies, tracking, or client fingerprinting to read.
8. Assertions MUST NOT claim properties the declaration record cannot express;
   unknown extension keys MUST be ignored by tools that do not understand them.
9. Assertions SHOULD include `lastModified` or rely on the record's `issued`
   and lifecycle dates; tools MUST treat old assertions as claims about the
   past, not guarantees about the present.
10. The absence of an assertion MUST be reported as "no machine-readable
    assertion found" — never as a negative statement about the page or signer.

### 5.3 Data model

The assertion data is the portable declaration record, defined in portable
declaration schema. The only additions this specification makes are the
well-known wrapper:

```
{
  "format": "plus-ai-assertions",
  "version": "1",
  "default": { <portable declaration record> },
  "scopes":  [ { "scope": "https://example.com/report/",
                 "declaration": { <portable declaration record> } } ]
}
```

### 5.4 Interfaces and behaviours

- Discovery order for a target URL: (1) per-page `<meta name="plus-ai">`,
  (2) per-page JSON-LD block, (3) `/.well-known/plus-ai.json` for the origin.
- Tools MUST stop at the first surface that covers the requested scope and note
  which surface produced the record.
- Multi-tenant platforms that cannot serve per-origin well-known files MUST
  rely on per-page tags; both surfaces are always valid options.

### 5.5 Lifecycle and operational rules

- When a declaration is superseded or revoked, hosted surfaces MUST update or
  tombstone the assertion per declaration lifecycle; stale pages MUST NOT be
  silently edited — they remain claims about their issue date.
- Canonicalisation for comparison uses the portable declaration schema's
  canonical bytes so identical assertions compare equal across surfaces.

## 6. Free floor, red lines, and invariants

The assertion format is part of the free floor: publishing, reading, and
checking assertions must stay free and account-free. Assertions are
self-authored claims until a checker attaches evidence labels — this
specification keeps that boundary sharp, honouring the red lines against
covert tracking (no cookies or fingerprinting to read an assertion) and against
automated publication in another's name (assertions are only ever the signer's
own claim).

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the
  record shape every surface carries.
- [Verification checker](verification-checker-dsh.md) implements the discovery
  order and validates what it finds.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) governs how assertions
  change over time.
- [Developer integrations](developer-integrations-dsh.md) packages these
  surfaces for CMSs, CI, and libraries.
- [Provenance interoperability](provenance-interoperability-dsh.md) maps the
  record to C2PA, IPTC, and Schema.org rather than duplicating those formats.
- [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md) supplies
  the binding object that ties an assertion to exact content.
- [Public snapshots and API](public-snapshots-and-api-dsh.md) serves registry
  assertions at scale; this specification only defines the per-page and
  per-origin surfaces.

## 8. Resolution of the seed's "before implementation" concerns

- **Align every representation to one schema** — section 5.1 principle 1 and
  5.2 items 2-4: all surfaces serialise the portable declaration record.
- **Discovery** — section 5.4: ordered per-page-then-well-known resolution
  with surface attribution.
- **Validation** — deferred to the checker, which validates the canonical
  record per the portable declaration schema.
- **Extension** — section 5.2 item 8: unknown keys ignored, never fatal.
- **Canonicalisation** — section 5.5: canonical bytes from the portable
  declaration schema.
- **Privacy** — section 5.2 item 7: parseable with no JavaScript, cookies, or
  fingerprinting.
- **Stale-data behaviour** — section 5.2 item 9 and 5.5: assertions are claims
  about their issue date; stale pages are reported honestly.

## 9. Acceptance criteria

1. The same declaration record parses identically from `<meta>`, JSON-LD, and
   well-known surfaces.
2. A page with both a per-page tag and an origin well-known file resolves to
   the per-page tag for its scope.
3. Disagreeing surfaces on the same scope are reported as a disagreement.
4. An assertion is fully readable with JavaScript disabled.
5. A page with no assertion yields "no machine-readable assertion found".
6. A stale page carrying a revoked declaration's old assertion is identified as
   superseded or revoked by lifecycle data, not silently corrected.
7. The assertion format version is independent of the declaration schema
   version and both are reported.

## 10. Open questions

- Whether JSON-LD should be permitted to carry the record across multiple
  script blocks or restricted to a single block per page.
- A future `assertions` extension point for origin-wide policy overrides
  beyond the default/scopes shape.
