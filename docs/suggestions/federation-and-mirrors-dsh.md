# Federation and Mirrors — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`federation-and-mirrors.md`](federation-and-mirrors.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how independent communities — by language, country, sector, institution, or archival mission — may maintain compatible mirrors and alternative interfaces over the project's open, versioned public data, without ever becoming alternate sources of truth. It exists so the public record can survive any single host and be presented for many audiences, while keeping one authoritative record and one honest account of what any copy actually is.

## 2. Placement and boundaries

This specification sits on the read side of the commons. It consumes, not produces, the public data: [Public snapshots and API](public-snapshots-and-api-dsh.md) owns the snapshots and change feeds mirrors ingest; [Static-first service architecture](static-first-service-architecture-dsh.md) owns the layering that makes the record mirrorable; [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md) owns the canonical namespace; [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md) owns moderation decisions mirrors must propagate. It owns the *mirror contract and fork rules*.

## 3. Terminology

- **Mirror** — a read-only replica of public data serving an alternative interface, clearly labelled as a copy.
- **Source of truth** — the canonical snapshot pipeline; the only writer of the public record.
- **Source label** — the visible statement of what a copy is, where it came from, and how fresh it is.
- **Freshness** — how far a mirror lags the canonical snapshot, reported honestly.
- **Removal event** — a redaction, tombstone, or revocation that mirrors MUST propagate.
- **Fork** — a divergent dataset or namespace that no longer claims mirror compatibility.

## 4. Scope

### 4.1 In scope

- The mirror contract: ingestion, labelling, and propagation duties.
- Source, freshness, and compatibility labels.
- Namespace ownership and identity-conflict rules.
- Revocation and removal propagation.
- Mirror-side moderation of mirror-added content.
- Fork declaration and compatibility revocation.

### 4.2 Out of scope and deferred

- Snapshot generation and the read API (public snapshots and API).
- Canonical moderation decisions (moderation, disputes, and appeals).
- Key and domain custody (continuity and namespace custody).
- Record schemas and identifiers (portable declaration schema, opt-in signatory registry).

## 5. Specification

### 5.1 Design goals and principles

1. **One writer, many readers.** Only the canonical pipeline writes; mirrors read and republish.
2. **Honest labels.** Every copy states what it is and how fresh it is; no mirror impersonates the source.
3. **Propagation is a duty.** A mirror that keeps data it was told to remove is not a mirror.
4. **Identity stays canonical.** Immutable IDs are authoritative everywhere; no mirror mints conflicting identities.
5. **Forks are allowed, not silent.** A fork declares its divergence and loses the compatibility claim.

### 5.2 Normative requirements

1. Canonical write authority MUST rest solely with the snapshot pipeline ([Public snapshots and API](public-snapshots-and-api-dsh.md)); a mirror MUST NOT accept writes to the canonical record, and MUST NOT present its own additions as part of the canonical record.
2. Every mirror MUST render a source label stating: that it is a mirror (not the source of truth), the canonical source URL, the snapshot version it reflects, and the freshness date of that snapshot.
3. Every mirror MUST render a compatibility label stating which snapshot schema and change-feed versions it consumes, so a consumer can tell whether the mirror can represent current records faithfully.
4. A mirror MUST ingest only public-visibility data from snapshots and MUST NOT obtain records from private write paths or non-public sources.
5. Revocation and removal propagation: a mirror MUST apply removal and tombstone events from change feeds within a bounded, published lag window; a mirror that fails to propagate removals MUST mark itself, and be marked by others, as stale or non-compliant.
6. Namespace ownership: a mirror's own URLs MUST live under the mirror's domain and MUST NOT impersonate canonical URLs; canonical addresses and immutable IDs are resolved per [URL semantics and canonicalisation](url-semantics-and-canonicalization-dsh.md).
7. Identity conflicts: the canonical immutable ID (e.g. `declarationId`) is authoritative; a mirror MUST NOT renumber, deduplicate, or merge records in a way that changes an ID's referent, and MUST flag any collision rather than silently resolving it.
8. Mirror-side additions (language views, sector indexes, annotations) MUST be clearly separable from canonical records and MUST be moderated by the mirror under its own published policy; canonical moderation decisions remain the authority for canonical records.
9. Forks: a dataset or interface that diverges from the canonical record MUST declare itself a fork, MUST publish its divergence points, and MUST NOT use the compatibility label; forking the public data is permitted under the data licence ([Licensing and mark policy](licensing-and-mark-policy-dsh.md)), but a fork's claims MUST NOT be attributed to the project.
10. A mirror MUST NOT render a trust score, rank, or single verdict; any status it shows uses the [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) vocabulary with dates.
11. Mirroring MUST be free and account-free to operate for public data; a mirror MAY charge for its own added services but MUST NOT charge for access to the canonical public record it mirrors.
12. A mirror MUST be self-describing: a published mirror descriptor records its identity, source, lag, and compatibility, so the mirror graph is auditable rather than assumed.

### 5.3 Data model

Mirror descriptor (published by each mirror):

```
{
  "mirror": "name or identifier",
  "source": "canonical snapshot URL",
  "snapshotVersion": "integer",
  "freshness": "ISO-8601",
  "schemaVersion": "integer",
  "changeFeedVersion": "integer",
  "removalLag": "maximum propagation window",
  "compatibility": "compliant | stale | fork"
}
```

### 5.4 Interfaces and behaviours

- **Ingest:** a mirror fetches snapshots and change feeds, applies removals, and republishes over its own interface.
- **Label:** the source, freshness, and compatibility labels are rendered on every mirror page or endpoint.
- **Declare:** the mirror descriptor is served at a documented location and is itself versioned.
- **Diverge:** a mirror that stops applying removals transitions its compatibility to `stale`; a mirror that edits records transitions to `fork`.

### 5.5 Lifecycle and operational rules

Mirrors are expected to remain within their published lag window; exceeding it downgrades the compatibility label to `stale` until caught up. A mirror that republishes removed data is non-compliant and is described as such by anyone auditing the mirror graph, without the project needing to operate the mirror. Long-term archival mirrors are first-class: an archival mirror MAY freeze a snapshot permanently, provided it labels the frozen snapshot and its date honestly.

## 6. Free floor, red lines, and invariants

The public data and its mirroring must stay free and account-free (item 11), honouring the free-floor and static-first invariants: the record survives through independent copies, never only through the hosted service. The one-writer rule (item 1) keeps the public record a single truth; the honest-label rule (items 2-3) is the no-silent-change invariant applied to copies. The no-verdict rule (item 10) keeps mirrors from becoming reputation engines, and the fork-declaration rule (item 9) prevents a fork's claims from being laundered as the project's.

## 7. Relationships to sibling specifications

- [Public snapshots and API](public-snapshots-and-api-dsh.md) owns the snapshots and change feeds mirrors ingest.
- [Static-first service architecture](static-first-service-architecture-dsh.md) owns the layering that makes the record mirrorable.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md) owns the canonical namespace and archival responsibilities.
- [URL semantics and canonicalisation](url-semantics-and-canonicalization-dsh.md) owns the address rules that keep mirror URLs distinct.
- [Portable declaration schema](portable-declaration-schema-dsh.md) and [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) own the records and IDs mirrors copy.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) owns the removal and tombstone events mirrors must propagate.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md) owns the canonical moderation decisions.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) constrains any status a mirror displays.
- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) owns the data licence that permits mirroring and forks.

## 8. Resolution of the seed's "before implementation" concerns

- **Canonical write authority** — section 5.2 item 1: only the snapshot pipeline writes; mirrors read and republish.
- **Source and freshness labels** — section 5.2 items 2-3 and 5.4: mandatory source, freshness, and compatibility labels.
- **Namespace ownership** — section 5.2 item 6: mirror URLs under the mirror's domain, never impersonating canonical addresses.
- **Identity conflicts** — section 5.2 item 7: immutable IDs authoritative, collisions flagged.
- **Revocation propagation** — section 5.2 item 5: bounded propagation window, stale/non-compliant marking.
- **Moderation** — section 5.2 item 8: canonical moderation authoritative; mirror-added content moderated by the mirror.
- **Forks** — section 5.2 item 9 and 5.5: forks declare divergence and lose compatibility.

## 9. Acceptance criteria

1. No mirror accepts writes to the canonical record.
2. Every mirror renders source and freshness labels on every served view.
3. A mirror applies removal events within its published lag window.
4. A mirror that stops applying removals is labelled stale, not compliant.
5. A mirror's URLs never impersonate canonical addresses or IDs.
6. Mirror-added content is separable from canonical records and moderated under a published policy.
7. A fork declares its divergence and does not claim compatibility.
8. No mirror renders a trust score, rank, or single verdict.
9. A consumer can determine a mirror's source, snapshot version, and freshness from its descriptor alone.

## 10. Open questions

- The default maximum removal-propagation lag window, to be set with abuse and cost modelling.
- Whether to publish a project-maintained mirror directory, and its admission criteria, is undecided.
