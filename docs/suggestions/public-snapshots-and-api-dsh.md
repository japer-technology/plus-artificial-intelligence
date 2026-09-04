# Public Snapshots and API — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`public-snapshots-and-api.md`](public-snapshots-and-api.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how the project's public data — registry entries,
profiles, declarations, statuses, and directory content — is published as
unauthenticated, cacheable, versioned snapshots and served through a read-only
API. The design goal is that the public record behaves like the rest of the
commons: static, mirrorable, and verifiable, with the live database never a
prerequisite for reading it.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and owns *public read publication*. It does not own what the data
means: record shapes come from [Portable declaration schema](portable-declaration-schema-dsh.md)
and [Opt-in signatory registry](opt-in-signatory-registry-dsh.md), statuses
from [Declaration lifecycle](declaration-lifecycle-dsh.md), visibility from
[Visibility and consent](visibility-and-consent-dsh.md). Write paths are owned
by the services that create records (registry, hosted profiles, workspaces);
this specification governs only what is published for public reads. It honours
the static-first invariant: the API is an optional convenience over snapshots,
never the source of truth.

## 3. Terminology

- **Snapshot** — a deterministic, versioned, hash-pinned export of public
  data.
- **Change feed** — an incremental, ordered list of changes between snapshot
  versions.
- **Read API** — the optional HTTP surface for querying snapshots.
- **Write path** — everything that modifies records; out of scope here.

## 4. Scope

### 4.1 In scope

- Snapshot content, versioning, hashing, and pagination.
- Incremental change feeds.
- Read API design: endpoints, stability, rate limits.
- Privacy-safe fields and deterministic exports.
- Separation of read and write paths.

### 4.2 Out of scope and deferred

- Record authoring, admission, and moderation (write paths).
- Authentication and authorization for writes (security and abuse controls).
- Serving mirrors (federation and mirrors).

## 5. Specification

### 5.1 Design goals and principles

1. **Snapshots are the product.** The API queries published snapshots, not the
   live database.
2. **Deterministic bytes.** The same state yields the same snapshot bytes, so
   hashes verify integrity anywhere.
3. **Reads are public, writes are not.** No read requires authentication;
   writes never share the read surface.
4. **Privacy-safe by construction.** Snapshots contain only public-visibility
   data.
5. **Cacheable and long-lived.** Everything published is immutable once
   versioned.

### 5.2 Normative requirements

1. Snapshots MUST be versioned with monotonically increasing version numbers
   and MUST publish a `sha256` hash over the exact export bytes.
2. Snapshots MUST contain only records whose visibility is `public`;
   unlisted, local, and organisation-only records MUST never appear.
3. Snapshot generation MUST be deterministic: identical public state produces
   identical bytes, with a documented canonical serialisation.
4. Snapshots MUST be paginated for large collections, with stable page keys
   and a documented total per version.
5. Change feeds MUST be incremental and ordered, keyed by snapshot version
   pairs, and MUST include removals (redaction, tombstone) as explicit events.
6. Schemas for all published data MUST be versioned from launch; schema
   changes MUST be additive within a major version and announced via the
   changelog.
7. The read API MUST be unauthenticated and MUST be stateless with respect to
   clients; endpoints MUST return cache headers permitting long-lived caching
   of versioned content.
8. The read API MUST expose: profile reads, declaration reads, search over
   public records, verification lookup, and revocation/status lookup —
   all read-only.
9. Publication MUST be separated from authoring: the write path MUST NOT be
   reachable through the read API surface, and authoring services MUST publish
   through the snapshot pipeline.
10. Rate limits on the read API MUST be documented and generous enough for
    community use; sustained consumers SHOULD be directed to snapshot
    downloads and mirrors.
11. Snapshot publication MUST be auditable: each version logs what changed
    (counts and categories), and audit logs MUST never expose private data.
12. Deprecated endpoints MUST remain functional for a documented period and
    MUST be announced in the changelog before removal.

### 5.3 Data model

```
{
  "snapshotVersion": "integer",
  "published": "ISO-8601",
  "hash": "sha256 over export bytes",
  "contents": {
    "registry":   [ { <registry entry, public only> } ],
    "profiles":   [ { <public profile> } ],
    "declarations": [ { <public declaration> } ],
    "statuses":   [ { "declarationId": "...", "status": "...", "at": "..." } ]
  },
  "changeFrom": "previous snapshot version",
  "audit": { "added": 12, "updated": 3, "removed": 1, "categories": "..." }
}
```

### 5.4 Interfaces and behaviours

- Snapshot files are downloadable artifacts; the API serves views over them.
- Search operates over the published snapshot index, never over live authoring
  data.
- Verification lookup returns the status and evidence labels published for a
  declaration identifier.

### 5.5 Lifecycle and operational rules

- Snapshots are released on a documented cadence and after material changes;
  old snapshots remain available permanently (no silent change).
- Removal events (redaction, tombstone) appear in change feeds as explicit
  removals so mirrors and consumers can comply (see federation and mirrors).
- Cost of serving snapshots is governed by cost discipline; the API's free
  tier covers community use, with volume pricing only for convenience (see API
  scale and reliability).

## 6. Free floor, red lines, and invariants

Snapshots and basic API reads are part of the free floor: the public record
must remain downloadable and mirrorable without payment or accounts, so the
commons survives any hosted failure. Privacy is enforced by construction —
only public-visibility data is published (no covert tracking, no personal-data
sale). No snapshot content may be paid-placed or ranked.

## 7. Relationships to sibling specifications

- [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) defines the
  data these snapshots publish.
- [Static-first service architecture](static-first-service-architecture-dsh.md)
  is the architectural principle this specification implements.
- [Federation and mirrors](federation-and-mirrors-dsh.md) consumes snapshots
  and change feeds.
- [Portable declaration schema](portable-declaration-schema-dsh.md) defines the
  record schemas.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) defines statuses and
  removal events.
- [Visibility and consent](visibility-and-consent-dsh.md) defines the public
  visibility filter.
- [API scale and reliability](api-scale-and-reliability-dsh.md) owns volume
  pricing and service levels for the read API.
- [Cost discipline](cost-discipline-dsh.md) governs the cost of snapshot
  serving.
- [Changelog and RSS](changelog-and-rss-dsh.md) announces schema changes and
  deprecations.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) owns abuse
  handling for the API surface.

## 8. Resolution of the seed's "before implementation" concerns

- **Separate read and write paths** — section 5.2 item 9: authoring never
  shares the read surface; publication goes through the snapshot pipeline.
- **Version from launch** — section 5.2 items 1 and 6: snapshot and schema
  versioning from day one.
- **Privacy-safe fields** — section 5.2 item 2: public visibility only.
- **Authorization** — section 5.1 principle 3 and 5.2 item 7: reads are
  unauthenticated; write authorization is out of scope.
- **Audit logs** — section 5.2 item 11: per-version publication logs without
  private data.
- **Moderation** — removal events are explicit in change feeds (item 5), with
  decisions owned by moderation, disputes, and appeals.
- **Rate limits** — section 5.2 item 10: documented, generous, with snapshot
  downloads as the escape hatch.
- **Deterministic exports** — section 5.2 item 3: identical state, identical
  bytes, canonical serialisation.

## 9. Acceptance criteria

1. Two builds from identical public state produce byte-identical snapshots.
2. Every snapshot publishes a verifiable `sha256` hash.
3. No unlisted or private record appears in any snapshot.
4. A redaction appears as an explicit removal in the change feed.
5. All read API endpoints work unauthenticated and return long-lived cache
   headers for versioned content.
6. The write path is unreachable through the read API surface.
7. Old snapshots remain downloadable after newer versions are released.
8. A schema change is announced in the changelog before it takes effect.
9. Deprecated endpoints continue working through their documented notice
   period.

## 10. Open questions

- The default snapshot release cadence (jointly with cost discipline).
- Whether search should offer a federation endpoint for community mirrors.
