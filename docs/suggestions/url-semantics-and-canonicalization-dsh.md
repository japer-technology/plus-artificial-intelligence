# URL Semantics and Canonicalisation — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`url-semantics-and-canonicalization.md`](url-semantics-and-canonicalization.md).
> **Catalogue group:** Declarations and profiles.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how `+AI` URLs mean what they mean: paths carry durable resource identity, queries carry public presentation and filters, fragments carry bounded local drafts, and structured meaning lives in a linked manifest or declaration record rather than in the URL string. A stable address system is what lets a declaration issued today still resolve to the same meaning years later, so this document fixes the division of concerns every other URL-bearing specification relies on.

## 2. Placement and boundaries

This is a foundational specification: every sibling that mints a URL — declarations, profiles, registry entries, spec versions, directories, authored links — inherits these rules. It owns the *address scheme and canonicalisation*; it does not own the specific resources' semantics (the portable declaration schema, hosted profiles, and registry siblings do) nor their retention (declaration lifecycle and continuity and namespace custody own tombstones and archival). It honours the static-first and no-silent-change invariants by making identity durable and by forbidding silent repurposing of addresses.

## 3. Terminology

- **Canonical URL** — the single durable URL that identifies a resource.
- **Slug** — a human-readable label that may appear in a URL but is not the identity.
- **Immutable ID** — the opaque, never-reused identifier that is the true identity of a resource.
- **Alias** — an additional URL that resolves to the same canonical resource.
- **Redirect** — a response that points one URL to another, for a recorded reason.

## 4. Scope

### 4.1 In scope

- The path/query/fragment division and its rules.
- Encoding, size limits, and parameter-order canonicalisation.
- Defaults, aliases, slugs, and collision handling.
- Immutable-ID authority and redirect policy.
- Versioned-address and indexing rules.
- Archival and tombstone policy as it bears on URLs.

### 4.2 Out of scope and deferred

- The specific resources' field semantics (portable declaration schema, hosted profiles, registry).
- Specification-version URLs in detail (specification versioning and hashing).
- Retention periods and tombstone content (declaration lifecycle, continuity and namespace custody).
- Consent-driven indexing decisions (visibility and consent).

## 5. Specification

### 5.1 Design goals and principles

1. **Identity in the path.** Only the path names the resource; nothing else may change what is named.
2. **Presentation in the query.** Query parameters vary the view, never the identity or the meaning.
3. **Drafts in the fragment.** Fragments hold bounded local state and are never treated as identity by servers or crawlers.
4. **Meaning in a manifest.** Structured meaning is carried by a linked declaration or manifest record, never inferred from a URL's shape.

### 5.2 Normative requirements

1. Every durable resource MUST have exactly one canonical URL whose path contains an immutable ID; a slug MAY appear alongside it for humans but the ID is authoritative.
2. URLs MUST be encoded as UTF-8 with standard percent-encoding; the literal `+` MUST be percent-encoded as `%2B` in query values so that plus signs survive (relevant to the plus-addressing convention), and spaces MUST be `%20`.
3. URL length MUST be bounded to a documented maximum, and each path segment and query value MUST carry its own documented bound so no surface accepts unbounded input.
4. Query parameters MUST be order-insensitive for meaning; the canonical form of a link MUST sort parameters by key and MUST treat duplicated keys as a list in first-appearance order.
5. Missing parameters MUST resolve to documented defaults; a URL MUST never error on a missing optional parameter, and MUST NOT silently reinterpret a missing parameter as a different resource.
6. Aliases MUST be finite, published, and recorded as aliases; an alias MUST resolve to the same canonical ID as its target and MUST NOT be silently promoted to canonical status.
7. Slugs MUST be generated or chosen under a documented scheme (lowercased, normalised, stripped of unsafe characters); a slug collision MUST be resolved by appending a disambiguator while keeping the immutable ID unchanged.
8. Immutable IDs MUST be opaque, never reused, and independent of any slug; the canonical URL MUST keep resolving to the same resource for the resource's whole life, including after the resource is superseded or revoked.
9. Redirects MUST be recorded with a reason and MUST point only forward to the current canonical address; a URL MUST never be repurposed to name a different resource, and moved resources MUST use a permanent redirect to the new canonical URL.
10. Versioned resources (the normative specification, schemas) MUST live at permanent version-bearing URLs, and the unversioned URL MUST redirect to the current version, per [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md).
11. Indexing MUST be a consent decision, not a URL decision: unlisted resources MUST emit `noindex`/robots guidance, and searchable resources MUST be indexed only where visibility consent allows, per [Visibility and consent](visibility-and-consent-dsh.md).
12. A retired resource MUST resolve to a tombstone or archive — never to a bare 404 — for the retention period fixed by [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md) and [Declaration lifecycle](declaration-lifecycle-dsh.md); fragments and queries MUST NOT be relied on for that resolution.

### 5.3 Data model

Not applicable — this specification defines URL rules, not new data structures. The only required machine artefact is a per-resource link manifest mapping the canonical ID to its aliases and slugs, which the resource's owning specification defines.

### 5.4 Interfaces and behaviours

- **Resolution:** a request for an alias or slug-bearing URL resolves to the canonical ID resource; the canonical URL is returned or linked via `rel="canonical"`.
- **Share links:** composers generate the canonical, parameter-sorted form so identical views produce identical links.
- **Draft state:** fragments may carry a serialised local draft only within the client; servers and crawlers MUST ignore fragment content.

### 5.5 Lifecycle and operational rules

Addresses are stable across a resource's life: issuance, supersession, and revocation change the resource's status, never its ID or canonical path. When a resource moves between hosts, the old address redirects to the new canonical address; when it is retired, a tombstone stands in. Archival is a recorded event, not a silent deletion.

## 6. Free floor, red lines, and invariants

The address scheme is free-floor commons: minting, resolving, and canonicalising URLs must never require payment or an account. The never-repurpose rule is the no-silent-change invariant applied to addresses, and the meaning-in-a-manifest rule stops URLs from becoming a covert carrier of claims — keeping the mark's meaning tied to an explicit, human-authored record rather than a parseable string. No URL rule may introduce tracking, fingerprinting, or paid placement in directories.

## 7. Relationships to sibling specifications

- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md) owns version-bearing URLs for the normative specification.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) and [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md) own tombstone and archival retention.
- [Visibility and consent](visibility-and-consent-dsh.md) owns the indexing consent this document's indexing rule serves.
- [Authored links](authored-links-dsh.md) applies the query rules for personalisation.
- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the linked manifest (the declaration record) and the immutable `declarationId` that carries structured meaning.
- [Machine-readable assertions](machine-readable-assertions-dsh.md) owns how that manifest is embedded on pages and discovered.

## 8. Resolution of the seed's "before implementation" concerns

- **Encoding** — section 5.2 item 2: UTF-8, `%2B` for plus signs, `%20` for spaces.
- **Size limits** — section 5.2 item 3: documented total and per-segment bounds.
- **Parameter order** — section 5.2 item 4: order-insensitive; canonical sort.
- **Defaults** — section 5.2 item 5: documented defaults, never a silent reinterpretation.
- **Aliases** — section 5.2 item 6: finite, published, resolving to the same ID.
- **Slugs** — section 5.2 item 7: documented scheme; collision disambiguation.
- **Collisions** — section 5.2 item 7: disambiguator appended, ID unchanged.
- **Immutable IDs** — section 5.2 item 8: opaque, never reused, authoritative.
- **Redirects** — section 5.2 item 9: recorded, forward-only, never repurposed.
- **Versioning** — section 5.2 item 10: permanent version URLs, unversioned redirect.
- **Indexing** — section 5.2 item 11: a consent decision with `noindex` for unlisted.
- **Archival policy** — section 5.2 item 12 and 5.5: tombstone or archive, never a bare 404.

## 9. Acceptance criteria

1. Every durable resource resolves at a single canonical, ID-bearing URL.
2. Re-encoding a URL with `+` as `%2B` round-trips without corruption.
3. Reordering query parameters produces the same meaning; the canonical form is sorted.
4. A missing optional parameter resolves to its documented default.
5. A slug collision is disambiguated without changing the immutable ID.
6. A moved resource redirects to its new canonical URL and is never repurposed.
7. The unversioned spec URL redirects to the current version; version URLs are permanent.
8. An unlisted resource emits `noindex`; a searchable one is indexed only under consent.
9. A retired resource resolves to a tombstone or archive, not a bare 404.

## 10. Open questions

- The concrete maximum URL length and per-segment bounds, to be set with compatibility testing.
- Whether slugs should be deprecated in favour of ID-only URLs, or kept as a permanent human-friendly layer, is undecided.
