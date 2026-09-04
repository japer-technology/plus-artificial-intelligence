# Cost Discipline — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`cost-discipline.md`](cost-discipline.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how the project keeps its free public layer
sustainable: generated static views, immutable caching, queued checks,
optional media, bounded hosted verification, offline tools, and per-record
cost measurement. The free floor is a promise; this specification is the
discipline that keeps the promise affordable without quietly degrading what
was promised.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and owns *cost modelling and the structural cost controls*. It
does not own what stays free (see [Free-floor covenant](free-floor-covenant-dsh.md)),
the pricing of optional services (see [API scale and reliability](api-scale-and-reliability-dsh.md)
and the other service specifications), or the architecture that makes cheap
serving possible (see [Static-first service architecture](static-first-service-architecture-dsh.md)).
It applies to the project's own operations and to any service that claims
project support.

## 3. Terminology

- **Public layer** — the free commons and the public exports.
- **Per-record cost** — the measured marginal cost of keeping one public
  record usable.
- **Queued check** — a verification run executed on a schedule rather than on
  demand.
- **Cost model** — the published estimate of storage, bandwidth, moderation,
  mail, support, backup, abuse, and shutdown costs.

## 4. Scope

### 4.1 In scope

- The cost model and its publication.
- Structural controls: static views, caching, queued checks, optional media,
  bounded verification, offline tools.
- Per-record cost measurement.
- Rules against silently degrading the free layer.

### 4.2 Out of scope and deferred

- Setting service prices (each service specification owns its pricing).
- Revenue policy (support and donations, sponsorship policy, membership
  model).
- Legal entity and tax handling (financial transparency).

## 5. Specification

### 5.1 Design goals and principles

1. **Measure before promising.** No limit or service level is promised before
   its cost is modelled.
2. **Static is the cheapest page.** Generated views and immutable caching are
   the default, not the optimisation.
3. **Degrade by design, not by accident.** If a free feature becomes
   expensive, the project queues or bounds it — it does not silently remove
   it.
4. **The record is the unit.** Costs are measured per public record, so the
   free floor's sustainability is visible.

### 5.2 Normative requirements

1. The project MUST publish a cost model covering storage, bandwidth,
   moderation, mail, support, backup, abuse handling, and shutdown, updated at
   least annually and reviewed before promising any limit or service level.
2. Public content MUST be served as generated static views with immutable
   caching wherever the data is public and versioned (see public snapshots and
   API).
3. On-demand verification checks MUST be rate-limited and MAY be queued when
   capacity is exhausted; queuing MUST be visible to the requester, and the
   offline checker MUST remain unlimited (it costs the project nothing).
4. Media MUST be optional everywhere: pages MUST be complete without images,
   and large media MUST be lazy-loaded, budgeted, or moved to the multi-format
   distribution kit.
5. Hosted verification fetches MUST be bounded in size, count, and concurrency
   per the checker specification; unbounded fetch workloads are prohibited.
6. Offline tools MUST be the project's preferred answer to scale: any feature
   that can run client-side MUST run client-side by default.
7. Per-record cost MUST be measured and published in aggregate (cost per
   active public record per month), including the marginal cost of checks,
   storage, and serving.
8. No free-floor feature MAY be removed for cost reasons without the
   amendment process of the free-floor covenant; cost pressure MUST first
   trigger queuing, bounding, or offline relocation.
9. The project MUST model the cost of moderation and abuse response, not just
   serving, before opening any new public submission surface.
10. Shutdown cost (final exports, archival, notice period) MUST be reserved
    and reported (see continuity and namespace custody).

### 5.3 Data model

```
{
  "costModelVersion": "integer",
  "period": "annual",
  "categories": [
    { "name": "storage | bandwidth | moderation | mail | support | backup | abuse | shutdown",
      "estimated": "amount", "measured": "amount", "trend": "note" }
  ],
  "perRecordCost": { "perActivePublicRecordMonthly": "amount",
                     "components": [ { "name": "checks | storage | serving", "amount": "..." } ] },
  "published": "ISO-8601"
}
```

### 5.4 Interfaces and behaviours

- Status pages expose the current queued-check backlog and expected delay in
  plain language.
- Service limits (rate limits, quotas) link to the cost model that justifies
  them.

### 5.5 Lifecycle and operational rules

- The cost model is versioned and announced in the changelog; material
  changes are reviewed with financial transparency reporting.
- New services ship only after their marginal cost is modelled against the
  public layer.

## 6. Free floor, red lines, and invariants

Cost pressure never amends the free floor by stealth: any reduction follows
the covenant's amendment rules, and the first responses are always queuing,
bounding, and offline relocation — never paywalling. This preserves the
invariant that paid services add convenience without becoming prerequisites,
and the red line that the mark itself is never for sale.

## 7. Relationships to sibling specifications

- [Free-floor covenant](free-floor-covenant-dsh.md) owns what this discipline
  protects and the amendment rules it must follow.
- [Static-first service architecture](static-first-service-architecture-dsh.md)
  owns the layering that makes static views the default.
- [Public snapshots and API](public-snapshots-and-api-dsh.md) implements the
  caching and snapshot serving.
- [Verification checker](verification-checker-dsh.md) owns the bounded fetches
  and queued checks.
- [API scale and reliability](api-scale-and-reliability-dsh.md) owns pricing
  for volume beyond the free layer.
- [Managed hosting and domains](managed-hosting-and-domains-dsh.md) prices
  operating work, informed by this model.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md)
  owns the shutdown reserve.
- [Financial transparency](financial-transparency-dsh.md) publishes the model's
  outcomes.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md) is the
  relocation target for anything too expensive to host.

## 8. Resolution of the seed's "before implementation" concerns

- **Storage** — section 5.2 items 1 and 7: modelled, measured per record.
- **Bandwidth** — section 5.2 item 2: static views with immutable caching.
- **Moderation** — section 5.2 item 9: modelled before opening submission
  surfaces.
- **Mail** — section 5.2 item 1: included in the cost model.
- **Support** — section 5.2 item 1: included in the cost model.
- **Backup** — section 5.2 item 1: included in the cost model.
- **Abuse** — section 5.2 items 1 and 9: modelled, with bounded fetches.
- **Shutdown** — section 5.2 item 10: reserved and reported.
- **Model before promising limits or service levels** — section 5.2 item 1:
  publication precondition.

## 9. Acceptance criteria

1. A cost model covering all eight categories is published and annual.
2. All public versioned content is served as cached static views.
3. On-demand checks queue visibly under load while the offline checker stays
   unlimited.
4. Every page is complete without media.
5. Per-record cost is published in aggregate and updated with the model.
6. No free-floor feature is removed for cost without the covenant amendment
   process.
7. A new submission surface ships only after moderation cost is modelled.
8. Shutdown reserves are reported in the model.

## 10. Open questions

- The numeric budget for hosted verification fetch costs per record.
- Whether per-record cost should be segmented by record type (declaration,
  profile, registry entry).
