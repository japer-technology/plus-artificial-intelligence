# Opt-In Signatory Registry — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`opt-in-signatory-registry.md`](opt-in-signatory-registry.md).
> **Catalogue group:** AI practice registers and discovery.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the opt-in signatory registry: a voluntary,
versioned public record of parties and their declarations, with stable
identifiers, dates, statuses, revocation, and mirrorable snapshots. The
registry is where the private act of signing becomes a dated public fact —
non-repudiation without coercion. Listing is always optional: the mark may be
used quietly forever, and a registry entry is a claim the signer chose to make
public, never an endorsement by the project.

## 2. Placement and boundaries

This specification sits in the "AI practice registers and discovery" group and
owns the *registry record, admission, and publication*. It does not own the
declaration record (see [Portable declaration schema](portable-declaration-schema-dsh.md)),
its statuses (see [Declaration lifecycle](declaration-lifecycle-dsh.md)), its
visibility modes (see [Visibility and consent](visibility-and-consent-dsh.md)),
or the views over it (see [Public directory](public-directory-dsh.md) and
[Sector and language directories](sector-and-language-directories-dsh.md)).
It honours the free-floor invariant: reading, mirroring, and publishing to the
registry never require payment; paid services may add convenience, never
legitimacy or rank.

## 3. Terminology

- **Registry** — the append-only public record of opt-in entries.
- **Entry** — one record describing a party or one declaration they published
  to the registry.
- **Snapshot** — a versioned, hash-pinned export of the registry at a point in
  time.
- **Admission** — the reviewed process by which a submission becomes an entry.

## 4. Scope

### 4.1 In scope

- Entry types and their data.
- Admission rules and the review process.
- Stable identifiers and versioning.
- Statuses, revocation, and correction.
- Snapshot and mirroring rules.
- Governance, licence, and moderation hand-offs.

### 4.2 Out of scope and deferred

- The declaration fields themselves (portable declaration schema).
- Directory presentation and filtering (public directory).
- Dispute resolution mechanics (moderation, disputes, and appeals).
- Organisation-internal registers (approved-tool registers).

## 5. Specification

### 5.1 Design goals and principles

1. **Voluntary and revocable.** Nothing enters without the party's act;
   nothing is harder to leave than to join.
2. **Append-only with honest status.** History is never rewritten; revocation
   is a recorded status, not a deletion.
3. **Self-asserted, not endorsed.** The project publishes entries as claims,
   never as certificates.
4. **Mirrorable by design.** The registry is plain versioned data anyone can
   copy and serve.
5. **Reviewed before open.** Admission starts with human-reviewed submissions;
   self-service opens only once moderation scales.

### 5.2 Normative requirements

1. The registry MUST be published as a versioned dataset (e.g. `registry.json`
   plus a rendered directory) with each version hash-pinned per the snapshot
   rules in 5.3.
2. Every entry MUST carry a stable identifier that is never reused, a
   submission date, a publication date, and a status (`active`, `revoked`,
   `superseded`, or `disputed` per declaration lifecycle).
3. Admission MUST require the submitting party's consent, recorded with a
   dated consent note per visibility and consent.
4. Entries MUST be labelled self-asserted: the registry MUST NOT present an
   entry as verified unless evidence labels produced by the checker are
   attached, and even then never as endorsement.
5. Revocation MUST set the entry status to `revoked` with a date and keep the
   entry visible as revoked; erasure follows declaration lifecycle tombstones.
6. Corrections to an entry MUST be recorded as correction events, never silent
   edits (see declaration lifecycle).
7. The registry MUST exclude entries whose visibility is `local`,
   `unlisted`, or `organisation-only`; only `public` records appear.
8. Submission review MUST be human for consequential decisions; automation MAY
   perform only objective checks (format, syntax), per moderation, disputes,
   and appeals.
9. The registry data MUST be published under an open licence and MUST include
   a statement that entries are self-asserted claims, not endorsements.
10. Registry governance (admission policy, dispute handling, appeal routes)
    MUST be documented and reference governance and stewardship; policy changes
    MUST be versioned and announced via the changelog.
11. The registry MUST NOT include paid placement, ordering, or prominence of
    any kind (RL-4), and MUST NOT expose fields beyond those the entry type
    defines.
12. Snapshot exports MUST be deterministic: identical registry state produces
    identical export bytes (see public snapshots and API).

### 5.3 Data model

Entry types:

```
// party entry
{ "entryId": "opaque, never reused", "type": "party",
  "name": "person or organisation", "declarationRefs": [ "declarationId..." ],
  "submitted": "ISO-8601", "published": "ISO-8601",
  "status": "active | revoked | superseded | disputed",
  "consent": { "at": "ISO-8601", "mode": "public" },
  "evidence": [ { <evidence label> } ] }

// declaration entry
{ "entryId": "opaque, never reused", "type": "declaration",
  "declaration": { <portable declaration record> },
  "submitted": "ISO-8601", "published": "ISO-8601",
  "status": "active | revoked | superseded | disputed",
  "evidence": [ { <evidence label> } ] }
```

### 5.4 Interfaces and behaviours

- Submission paths: reviewed form, pull request, or email, all requiring the
  consent step; self-service opens only when moderation capacity is proven.
- Consumers (checkers, directories, mirrors) read the snapshot, not the live
  database.
- The rendered registry page shows entries in a documented, neutral order
  (e.g. publication date), states the non-endorsement notice, and links
  moderation and appeal routes.

### 5.5 Lifecycle and operational rules

- Entries follow declaration lifecycle statuses; a revoked declaration entry
  stays listed as revoked.
- Registry versions are released on a documented cadence and after every
  admission batch; each release is announced via the changelog and RSS feed.
- Mirrors may serve any snapshot version and MUST label the version and
  freshness they serve (see federation and mirrors).

## 6. Free floor, red lines, and invariants

The registry is a free-floor commons: listing, reading, copying, and revoking
must stay free, and listing must never be required to use the mark (RL-2,
RL-1). Paid placement and rank are prohibited (RL-4, RL-9); no funder or
sponsor may alter ordering or admission. The self-asserted label keeps the
registry a record of claims, not a certificate — preserving the mark's honesty
value.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) defines the
  declaration records the registry stores.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) defines entry statuses
  and correction events.
- [Visibility and consent](visibility-and-consent-dsh.md) governs consent and
  which entries may appear.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)
  defines the optional evidence attached to entries.
- [Public directory](public-directory-dsh.md) and [Sector and language
  directories](sector-and-language-directories-dsh.md) are views over this
  registry.
- [Public snapshots and API](public-snapshots-and-api-dsh.md) owns snapshot
  generation, hashing, and serving.
- [Federation and mirrors](federation-and-mirrors-dsh.md) owns mirror rules.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md)
  owns review, disputes, and appeals.
- [Governance and stewardship](governance-and-stewardship-dsh.md) owns registry
  governance.
- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) owns the
  registry data licence.

## 8. Resolution of the seed's "before implementation" concerns

- **Admission** — section 5.2 items 3 and 8: consent-gated, human-reviewed,
  self-service deferred.
- **Identity** — sections 5.2 item 4 and 5.3: entries are self-asserted
  claims; identity questions are handled through proofs of control, never
  required for listing.
- **Consent** — section 5.2 item 3: dated consent records per visibility and
  consent.
- **Privacy** — section 5.2 item 7: only `public` visibility records appear.
- **Correction** — section 5.2 item 6: correction events, never silent edits.
- **Moderation, dispute, appeal** — sections 5.2 items 8 and 10: human review
  and published routes owned by moderation, disputes, and appeals.
- **Removal** — section 5.2 item 5: revocation as status; erasure as
  tombstone.
- **Licence** — section 5.2 item 9: open licence with non-endorsement notice.
- **Governance** — section 5.2 item 10: documented, versioned, announced.

## 9. Acceptance criteria

1. The registry ships as a versioned, hash-pinned dataset plus a rendered
   page.
2. Every entry carries a stable identifier, dates, status, and consent record.
3. No entry appears without a dated public-visibility consent step.
4. A revoked entry stays visible with status `revoked` and its date.
5. Only `public` records appear in the registry.
6. The dataset carries the open licence and the non-endorsement notice.
7. No entry or ordering is purchasable or sponsor-influenced.
8. Identical registry state produces identical snapshot bytes.
9. A policy change appears in the changelog with its version.

## 10. Open questions

- The cadence of registry version releases once admission volume grows.
- The threshold of moderation capacity at which open self-service is enabled.
