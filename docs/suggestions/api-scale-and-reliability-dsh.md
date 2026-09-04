# API Scale and Reliability — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`api-scale-and-reliability.md`](api-scale-and-reliability.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines the paid tier layered on top of the public read surface: charges for high request volumes, service-level commitments, regional delivery, dedicated support, webhooks, and synchronisation. Its single organising rule is that public data itself is never the product — snapshots, schemas, change feeds, and useful low-volume reads stay free and downloadable — and that what is sold is convenience, scale, and operational reliability, never legitimacy, rank, or permission.

## 2. Placement and boundaries
This specification sits above [Public snapshots and API](public-snapshots-and-api-dsh.md), which owns the read API and the snapshot pipeline; that sibling explicitly defers volume pricing and service levels here. It is bounded by [Cost discipline](cost-discipline-dsh.md) (no quota or service level is promised before its cost is modelled), [Static-first service architecture](static-first-service-architecture-dsh.md) (the paid tier is an optional service layer, never a prerequisite for reading), and the free-floor and red-line invariants below. It does not own the API's endpoint set or the snapshot format; those belong to the public-read sibling.

## 3. Terminology
- **Free quota** — the documented, no-cost level of read-API and snapshot access available to everyone without an account.
- **Quota** — a bounded allowance of requests, bytes, or operations per period.
- **Service level** — a published, measurable commitment (uptime, latency, support response) attached to a paid tier.
- **Fair-use limit** — a stated restriction on otherwise-free use, imposed only to prevent abuse of shared infrastructure.
- **Webhook** — an opt-in, documented push notification of an event the subscriber asked to receive.
- **Synchronisation** — a supported bulk copy or incremental update mechanism for a consumer's own store.

## 4. Scope
### 4.1 In scope
- The free quota and the paid tiers above it.
- Versioning, deprecation, quotas, caching, uptime targets, and fair-use limits.
- Regional delivery, dedicated support, webhooks, and synchronisation.
- Privacy, abuse controls, incident communication, and open-data guarantees.

### 4.2 Out of scope and deferred
- The read API's endpoint set, snapshot format, and change feeds (public snapshots and API).
- Setting numeric limits (jointly with cost discipline, whose cost model is the precondition).
- Write paths and authoring services (each owning service).

## 5. Specification
### 5.1 Design goals and principles
1. **Public data stays free.** Every byte that is public record remains downloadable, unauthenticated, and mirrorable.
2. **Convenience is priced, not access.** Payment buys scale, reliability, and support — never data, placement, or status.
3. **Version from launch.** API versions and schema versions exist from the first release and are never silently broken.
4. **Model before promising.** No quota or service level is announced before its marginal cost is measured.
5. **Deprecation with notice.** Consumers get a fixed, published runway before anything changes or retires.

### 5.2 Normative requirements
1. Public snapshots, schemas, and change feeds MUST remain free, unauthenticated, downloadable, and mirrorable; no tier MAY gate access to public data (RL-1).
2. A documented free quota of read-API access MUST remain available with no account and no payment; the quota MUST cover normal community use and MUST NOT be so small as to make the free path theoretical.
3. Every API and every published schema MUST be versioned from launch; within a major version, changes MUST be additive, and breaking changes MUST ship only in a new major version with a migration note.
4. All quotas, rate limits, and fair-use limits MUST be enumerated, published, and linked to the cost model that justifies them; a fair-use limit MAY restrict volume or rate but MUST NOT remove a free-floor capability or make it conditional on payment, identity, or an account.
5. Caching MUST follow the static-first contract: versioned responses carry long-lived immutable cache headers, and the API is a view over snapshots, never a live-database read surface.
6. Uptime and latency targets MUST be offered only as explicit service levels on paid tiers, with a published measurement method and honest reporting; the free tier MUST be stated as best-effort without implying an SLA it does not carry.
7. Webhooks and synchronisation MUST be opt-in, documented, and event-scoped; they MUST NOT require or transmit biometric proof, personal-data sales, or covert tracking (RL-5, RL-6), and a subscriber MUST be able to revoke them.
8. Regional delivery and dedicated support MUST be priced as operating conveniences and MUST state, on the pricing surface and here, that payment buys convenience, scale, support, or managed operations — never legitimacy, rank, or permission.
9. Deprecated endpoints MUST remain functional for a documented period, MUST be announced in the changelog before removal, and MUST redirect or degrade to a labelled state rather than failing silently.
10. Abuse controls MUST follow [Security and abuse controls](security-and-abuse-controls-dsh.md): a published threat model for the API surface, per-surface rate limits, and incident response with a no-account reporting route.
11. Privacy MUST follow [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md): a published privacy analysis for the API and any telemetry it produces; the API MUST NOT fingerprint, build cross-site profiles, or infer tool use (RL-5, and the watchlist entry on automated AI-use inference).
12. Incident communication MUST be defined in advance: a status page, a changelog/RSS channel, and post-incident records, with degradation states rendered in plain language.
13. A failure-mode statement MUST be published: if the paid API tier stops, the free quota, snapshots, schema, change feeds, and the offline checker MUST remain fully usable (degraded mode), per [Static-first service architecture](static-first-service-architecture-dsh.md).
14. Revenue from this tier MUST be reported through [Financial transparency](financial-transparency-dsh.md), and no revenue arrangement MAY influence registry placement, moderation, or any public record's content (RL-4).

### 5.3 Data model
```
{
  "tier": "free | standard | high-volume",
  "freeQuota": { "requestsPerPeriod": "integer", "period": "monthly", "scope": "read-only" },
  "quotas": [ { "name": "requests | bytes | operations", "limit": "integer",
                "justification": "cost-model reference" } ],
  "serviceLevels": [ { "name": "uptime | latency | support", "target": "...",
                       "measurement": "...", "tier": "standard | high-volume" } ],
  "apiVersion": "integer", "schemaVersion": "integer"
}
```

### 5.4 Interfaces and behaviours
- Pricing pages render the free quota and the "no legitimacy, rank, or permission" statement from the covenant, not hand-written copy.
- A status page exposes current degraded states and the queued-check/rate-limit state in plain language.
- Deprecation notices and service-level reports are announced through the changelog and RSS feed.

### 5.5 Lifecycle and operational rules
- API and schema versions are permanent; a version is deprecated, never edited in place (no silent change).
- Service levels are reviewed against the cost model at least annually and on material change.
- Wind-down of the paid tier publishes a final notice and leaves the free read path intact, per continuity and namespace custody.

## 6. Free floor, red lines, and invariants
The free floor cited here is: public snapshots, schemas, change feeds, the offline checker, and a usable no-account low-volume read path remain free and downloadable. This specification enforces RL-1 (no payment for the mark or meaning, and by extension no payment for public data), RL-4 (no paid placement or purchasable search results), RL-5 (no personal-data sales or covert tracking), and RL-6 (no biometric proof). The static-first invariant is honoured by keeping the paid tier an optional layer whose failure cannot remove public reads.

## 7. Relationships to sibling specifications
- [Public snapshots and API](public-snapshots-and-api-dsh.md) — owns the read API, snapshot pipeline, and change feeds this tier prices; it defers volume pricing here.
- [Cost discipline](cost-discipline-dsh.md) — its cost model is the precondition for every quota and service level promised here.
- [Static-first service architecture](static-first-service-architecture-dsh.md) — owns the failure-mode statement and the layering this tier must not violate.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) — owns the threat model, rate limits, and incident process this tier applies.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) — owns the privacy analysis and no-tracking rules this tier must satisfy.
- [Free-floor covenant](free-floor-covenant-dsh.md) and [Red lines and cautious extensions](red-lines-and-cautious-extensions-dsh.md) — bind this tier's free floor and prohibitions.
- [Financial transparency](financial-transparency-dsh.md) — reports this tier's revenue and its no-influence guarantee.
- [Verification checker](verification-checker-dsh.md) — the offline checker that must remain free regardless of this tier.

## 8. Resolution of the seed's "before implementation" concerns
- **Versioning** — 5.2 item 3 and 5.5: versioned from launch, additive within a major, never edited in place.
- **Quotas** — 5.2 item 4 and 5.3: enumerated, published, cost-model-linked.
- **Caching** — 5.2 item 5: long-lived immutable cache headers over snapshots.
- **Uptime targets** — 5.2 item 6: paid-tier SLAs with published measurement; free tier honestly best-effort.
- **Fair-use limits** — 5.2 item 4: proportional, never removing a free-floor capability.
- **Privacy** — 5.2 item 11: published privacy analysis; no fingerprinting or inferred tool use.
- **Deprecation** — 5.2 item 9 and 5.5: fixed notice, changelog announcement, graceful degradation.
- **Abuse controls** — 5.2 item 10: threat model, rate limits, incident response.
- **Incident communication** — 5.2 item 12: status page, changelog channel, plain-language degradation states.
- **Open-data guarantees** — 5.2 item 1 and 6: public data stays free, unauthenticated, and mirrorable.

## 9. Acceptance criteria
1. Public snapshots, schemas, and change feeds download without payment or an account.
2. A documented free quota of read-API access exists and covers community use.
3. Every API and schema is versioned from launch; no breaking change ships without a new major version.
4. Every quota and service level is published with its cost-model justification.
5. Versioned responses carry long-lived immutable cache headers.
6. Webhooks and synchronisation are opt-in, documented, and revocable.
7. A deprecation notice precedes removal by the documented period and is announced in the changelog.
8. The API surface publishes a threat model and a privacy analysis before launch.
9. A published failure-mode statement shows the free read path surviving the paid tier's outage.
10. The pricing surface states that payment buys no legitimacy, rank, or permission.

## 10. Open questions
- The numeric free-quota size, to be fixed against the cost model once it is published.
- Whether "regional delivery" is a first launch tier or a later enhancement, and its cost basis.
