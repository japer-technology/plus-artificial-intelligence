# Artifact Passports — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`artifact-passports.md`](artifact-passports.md).
> **Catalogue group:** Artifacts and trust.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the artifact passport: a stable, addressable
resource that presents one `+AI` declaration for one defined scope — a report,
page, release, image, dataset, or other artifact — together with its status,
bindings, evidence, and derivative links. Where the portable declaration record
is the data, the passport is the durable place where that data lives and stays
findable, so that "who stands behind this artifact?" has a stable answer even
as the artifact itself moves or changes.

## 2. Placement and boundaries

This specification sits in the "Artifacts and trust" group and owns the
*passport resource*: its identifier, URL semantics, content assembly, and
derivative-link rules. It does not own the declaration record (see [Portable
declaration schema](portable-declaration-schema-dsh.md)), the status vocabulary
(see [Declaration lifecycle](declaration-lifecycle-dsh.md)), the binding object
(see [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md)), or
the checking that produces evidence (see [Verification
checker](verification-checker-dsh.md)). It honours the free-floor invariant: a
passport must be creatable and keepable without payment — the no-account
builder can produce a self-hosted passport, and hosted passports are an
optional convenience, never a prerequisite for the mark.

## 3. Terminology

- **Passport** — the stable resource presenting a declaration, its status, and
  its evidence for one scope.
- **Scope** — what the declaration covers, as defined in the portable
  declaration schema.
- **Derivative link** — a recorded relationship between a passport and an
  upstream source or downstream derivative artifact.
- **Status resource** — the timeline of lifecycle events shown on the passport.

## 4. Scope

### 4.1 In scope

- Passport identifiers and address stability.
- Content assembly: declaration record, status timeline, evidence labels,
  bindings, and derivative links.
- External artifact references and derivative-link rules.
- Privacy rules for passport content.
- Behaviour for dynamic artifacts (scope-bound, snapshotted passports).

### 4.2 Out of scope and deferred

- The declaration record's fields (portable declaration schema).
- How evidence labels are produced (verification checker, evidence labels).
- Party-level pages that aggregate many passports (hosted profiles).
- Visible export artifacts like certificates and QR (certificates, badges, and
  QR).

## 5. Specification

### 5.1 Design goals and principles

1. **Stable address.** A passport's URL is its identity; it must not move or
   change meaning.
2. **One scope, one passport.** A passport covers exactly one defined scope;
   new scopes get new passports.
3. **Evidence lives at the passport, claims live in the record.** The passport
   shows what was checked and when, never a derived verdict.
4. **Artifacts move, passports persist.** The passport remains the
   responsibility anchor even if the artifact's bytes or URL change.
5. **Privacy first.** Passport content is only what the signer chose to
   publish, under the visibility mode they chose.

### 5.2 Normative requirements

1. Every passport MUST have a permanent identifier (the declaration identifier
   from the portable declaration schema) and MUST be resolvable at a stable URL
   that includes that identifier.
2. A passport MUST present, at minimum: the canonical declaration record, the
   status timeline from declaration lifecycle, the binding (byte, scope, or
   C2PA) with its kind labelled, and the last-checked date.
3. A passport MUST label every claim it cannot independently verify as
   self-declared, per evidence labels, not trust scores.
4. External artifact references MUST be shown as the binding's retrieval URL or
   content identifier; a passport MUST NOT hotlink or proxy artifact content
   beyond what the checker's fetch policy permits.
5. Derivative links MUST be recorded as explicit relationships:
   `derivesFrom` (upstream passports) and `derivedBy` (downstream passports);
   each link MUST carry a direction and the linked passport's identifier.
6. A passport MUST NOT imply that a derivative inherits the upstream signer's
   responsibility; each artifact's responsibility stays with its own declaration.
7. Dynamic artifacts (living pages, APIs, collections) MUST use scope bindings
   and MUST show a "last snapshot" record — date and hash of a point-in-time
   capture — clearly labelled as a snapshot, not a live claim.
8. Passport content MUST respect the declaration's visibility mode: unlisted
   passports are link-shareable and excluded from directories; public passports
   are indexable; organisation-only passports require the organisation's access
   control.
9. A passport MUST display its own issue date, the specification version in
   force, and the date of any supersession, revocation, or dispute.
10. Self-hosted passports MUST be fully static and mirrorable; a hosted
    passport service MAY offer convenience (redirects, snapshots, uptime) but
    the data MUST remain exportable in the portable record format.

### 5.3 Data model

```
{
  "passportId": "= declarationId",
  "url": "stable passport URL",
  "declaration": { <portable declaration record> },
  "statusTimeline": [ { <lifecycle event> } ],
  "evidence": [ { <evidence label with dates> } ],
  "bindingKind": "byte | scope | c2pa",
  "derivesFrom": [ "passportId..." ],
  "derivedBy":   [ "passportId..." ],
  "lastSnapshot": { "at": "ISO-8601", "hash": "sha256", "kind": "scope-bound snapshot" },
  "visibility": "local | unlisted | public | organisation-only"
}
```

### 5.4 Interfaces and behaviours

- Passports render as static pages with the shared navigation and accessibility
  floor; the checker can consume a passport URL as a declaration reference.
- The no-account declaration builder can emit a self-hosted passport bundle
  (HTML + JSON) with no upload.
- Directories list only passports whose visibility is public, and show binding
  kind and last-checked date, never a rank.

### 5.5 Lifecycle and operational rules

- Passport content changes only through declaration lifecycle events; the
  passport's URL and identifier never change.
- Supersession renders as "superseded by <new passport id>" on the old passport
  and "supersedes <old id>" on the new one.
- When an artifact's bytes change without a new declaration, the passport shows
  the binding mismatch honestly (see artifact hashing and binding) until the
  signer issues a new declaration.

## 6. Free floor, red lines, and invariants

Passports are free-floor commons: anyone can create, host, and keep a passport
without payment, and passports must remain exportable and self-hostable. The
no-verdict rule applies here too — a passport displays evidence labels, never
scores. Derivative-link rules enforce the red line against responsibility
laundering: no passport may make an upstream signer appear responsible for a
derivative they never accepted.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) defines the
  record a passport presents.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) defines the status
  timeline and events shown on the passport.
- [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md) defines
  the bindings and snapshot semantics for dynamic artifacts.
- [Machine-readable assertions](machine-readable-assertions-dsh.md) defines how
  a passport's scope pages carry the embedded assertion.
- [Verification checker](verification-checker-dsh.md) consumes passport URLs
  and produces the evidence labels shown.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)
  defines how passport evidence is presented.
- [Certificates, badges, and QR](certificates-badges-and-qr-dsh.md) export
  visible references pointing back to the live passport.
- [Hosted profiles](hosted-profiles-dsh.md) collect a party's passports without
  replacing them.
- [Visibility and consent](visibility-and-consent-dsh.md) owns the visibility
  modes passports must respect.
- [URL semantics and canonicalisation](url-semantics-and-canonicalization-dsh.md)
  owns the address rules passports follow.

## 8. Resolution of the seed's "before implementation" concerns

- **Identifiers** — section 5.2 item 1: passport identifier equals the
  declaration identifier, embedded in a stable URL.
- **Scope** — section 5.1 principle 2 and 5.2 item 2: one defined scope per
  passport, rendered from the declaration record.
- **External artifact references** — section 5.2 item 4: bindings shown as
  retrieval references, no content proxying.
- **Derivative links** — section 5.2 items 5-6: directed `derivesFrom` /
  `derivedBy` relationships that never transfer responsibility.
- **Status resources** — section 5.2 items 2 and 9 plus 5.5: the status
  timeline with supersession and revocation dates.
- **Privacy** — section 5.2 item 8: visibility modes govern passport content.
- **Dynamic artifacts** — section 5.2 item 7: scope bindings with labelled
  point-in-time snapshots.

## 9. Acceptance criteria

1. Every passport resolves at a stable URL containing its permanent
   identifier.
2. A passport renders the declaration record, status timeline, binding kind,
   and last-checked date from static files alone.
3. An unlisted passport is excluded from directory listings but shareable by
   link.
4. A superseded passport displays "superseded by" with the successor's
   identifier.
5. A dynamic-artifact passport shows a snapshot record labelled as a
   point-in-time capture.
6. Derivative links render with direction and never imply inherited
   responsibility.
7. The no-account builder emits a complete self-hosted passport bundle with no
   upload.
8. A checker consumes a passport URL and returns the same labels as checking
   the raw declaration.
9. No passport surface displays a rank, score, or verdict mark.

## 10. Open questions

- Whether snapshots for scope-bound passports should be produced on demand by
  the checker or stored by the passport service.
- The retention period for snapshot records after supersession.
