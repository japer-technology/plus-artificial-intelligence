# Privacy-Respecting Analytics — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`privacy-respecting-analytics.md`](privacy-respecting-analytics.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines the only telemetry the +AI project and any optional analytics surface may run: minimal, opt-in, documented measurement of operational facts — declaration maintenance, workflow completion, broken links, stale policies, aggregate language and theme use, checker activity, and integration health. Its purpose is to let the project learn what works without ever turning measurement into surveillance.

## 2. Placement and boundaries
This specification owns the *telemetry contract*: what may be measured, how it is collected, and how long it lives. It does not own the public reporting of aggregates (see [Public adoption dashboard](public-adoption-dashboard-dsh.md)), long-term research over public records (see [Research observatory](research-observatory-dsh.md)), or bounded product studies (see [Experiments and metrics](experiments-and-metrics-dsh.md)). It is the telemetry standard [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) points to as the only permitted kind. It is not primarily a revenue product: measurement is a free-floor activity, and any paid analytics offering is an optional convenience layered on top.

## 3. Terminology
- **Telemetry event** — one recorded occurrence of a documented, pre-approved measurement.
- **Event catalogue** — the published, versioned list of every telemetry event with its purpose, fields, and retention.
- **Opt-in** — measurement that does not occur until the party explicitly enables it.
- **Aggregate-only** — a measurement stored without any per-party or per-visitor identifier.
- **Low-count suppression** — withholding an aggregate below a published minimum group size.
- **Retention** — the fixed period after which a telemetry event is deleted or irreversibly aggregated.

## 4. Scope
### 4.1 In scope
- The event catalogue and its publication.
- Opt-in and opt-out rules.
- Absolute rejections (ad-tech, fingerprinting, cross-site profiles, inferred tool use, contact lists, invasive reader tracking).
- Retention and aggregation thresholds.
- The failure mode and privacy analysis of any hosted analytics surface.

### 4.2 Out of scope and deferred
- Public aggregate reporting (public adoption dashboard).
- Research use of aggregated data (research observatory).
- Bounded studies with participants (experiments and metrics).

## 5. Specification
### 5.1 Design goals and principles
1. **Minimal by default.** The no-account path sends no telemetry until opted in; nothing is measured that a stated purpose does not require.
2. **Documented before collected.** No event exists before it appears in the published catalogue.
3. **Aggregate, or don't store.** Wherever a fact can be captured as a count, it is — never as an identifier.
4. **Measurement is not the dependency path.** No core feature may require telemetry to function.
5. **Rejections are absolute.** The prohibited techniques are banned by construction, not by configuration.

### 5.2 Normative requirements
1. The project MUST publish a versioned event catalogue listing every telemetry event with its purpose, fields, retention period, and whether it is aggregate-only; unlisted events MUST NOT be collected.
2. Telemetry MUST be opt-in for the no-account path and for hosted surfaces: nothing is collected by default, opt-out MUST be immediate and complete, and the opt-in control MUST state in plain language what will be measured and for how long it is kept.
3. Measurement MUST prefer, in order: server-side aggregate counts over operational facts, then explicit user-initiated events; per-visitor identifiers, persistent cookies, and tracking pixels MUST NOT be used.
4. The following MUST be absolutely rejected, in every surface and any future feature: ad-tech and third-party advertising SDKs; fingerprinting of any kind; cross-site or cross-device profiling; inferred tool use or automated AI-use inference about a person; harvesting or measuring contact lists; and invasive reader tracking of any audience (RL-5, and the watchlist entry on automated AI-use inference).
5. Retention MUST be bounded: every event MUST carry a published retention period, expired events MUST be deleted or irreversibly aggregated on schedule, and the default retention SHOULD be the shortest period that serves the stated purpose.
6. Aggregation thresholds MUST be published: no statistic about fewer than the documented minimum number of distinct parties is emitted or displayed, and low-count results MUST render as "fewer than N"; the minimum defers to the disclosure threshold owned by research observatory (k = 10 by default).
7. Telemetry data MUST NOT be sold, rented, traded, or shared with advertisers or data brokers (RL-5); it MAY be published only in the aggregated, thresholded forms the public adoption dashboard and research observatory permit.
8. The project MUST NOT build cross-service profiles: analytics from one surface MUST NOT be joined with analytics or records from another to identify or characterise an individual.
9. A hosted analytics surface (if any) MUST complete a privacy analysis and a threat model against [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) and [Security and abuse controls](security-and-abuse-controls-dsh.md) before launch, and MUST publish a failure-mode statement: if analytics stops, every core feature MUST continue to work (analytics is never on the dependency path), per [Static-first service architecture](static-first-service-architecture-dsh.md).
10. Any paid analytics offering MUST state that payment buys convenience, scale, support, or managed operations — never legitimacy, rank, permission, or a more favourable measurement — and MUST NOT gate any free-floor capability behind opting in to telemetry.

### 5.3 Data model
```
{
  "catalogueVersion": "integer",
  "events": [ { "id": "checker-runs", "purpose": "...", "fields": [ "count only" ],
                "aggregateOnly": true, "retention": "30 days", "optIn": false } ],
  "rejections": [ "ad-tech", "fingerprinting", "cross-site profiles",
                  "inferred tool use", "contact lists", "invasive reader tracking" ],
  "minimumGroup": "N"
}
```

### 5.4 Interfaces and behaviours
- The opt-in control is a single, shared component with identical wording across surfaces, showing the event catalogue and the current opt-in state.
- Degraded or disabled analytics renders an explicit "measurement off" state; no feature changes behaviour because telemetry is absent.
- Aggregate outputs link their catalogue event, threshold, and retention, so a reader can audit what was measured.

### 5.5 Lifecycle and operational rules
- The event catalogue is versioned and announced in the changelog; adding or changing an event is a visible change, never a silent rollout (no silent change).
- A retention change applies prospectively; already-collected events follow the schedule in force at collection.
- An analytics incident (any collection outside the catalogue or the rejections) follows the incident-response process of security and abuse controls and is disclosed publicly.

## 6. Free floor, red lines, and invariants
Telemetry is never a condition of using `+AI`: the no-account path and the free floor stay telemetry-free by default, and no core capability may depend on opting in. This specification enforces RL-5 (no covert tracking, no personal-data sales) and RL-9 (no rankings or leaderboards built from measurement), and it keeps the watchlist item "automated AI-use inference" permanently rejected. The static-first invariant is honoured by keeping analytics entirely off the dependency path.

## 7. Relationships to sibling specifications
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) — names this specification as the only permitted telemetry and owns the underlying retention rules.
- [Public adoption dashboard](public-adoption-dashboard-dsh.md) — consumes aggregate, thresholded outputs for public reporting.
- [Research observatory](research-observatory-dsh.md) and [Experiments and metrics](experiments-and-metrics-dsh.md) — the distinct research/study lanes that are not telemetry.
- [Red lines and cautious extensions](red-lines-and-cautious-extensions-dsh.md) — the rejections here implement its no-fingerprinting and no-inference rules.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) — owns the threat model and incident response for any analytics surface.
- [Static-first service architecture](static-first-service-architecture-dsh.md) — owns the failure-mode statement and the no-dependency rule.
- [Cost discipline](cost-discipline-dsh.md) — informs whether any hosted analytics surface is affordable within the public layer.

## 8. Resolution of the seed's "before implementation" concerns
- **Reject ad-tech** — 5.2 item 4: third-party advertising SDKs banned absolutely.
- **Reject fingerprinting** — 5.2 items 3-4: no identifiers, persistent cookies, or tracking pixels.
- **Reject cross-site profiles** — 5.2 items 4 and 8: cross-site/device profiling and cross-service joins banned.
- **Reject inferred tool use** — 5.2 item 4: automated AI-use inference rejected (watchlist).
- **Reject contact lists** — 5.2 item 4: harvesting or measuring contact lists banned.
- **Reject invasive reader tracking** — 5.2 item 4: any audience reader-tracking banned.
- **Retention thresholds** — 5.2 item 5: published per-event retention with scheduled deletion.
- **Aggregation thresholds** — 5.2 items 6 and 5.3: published minimum group sizes with low-count suppression.

## 9. Acceptance criteria
1. A versioned event catalogue lists every event before it is collected.
2. The no-account path collects nothing by default, and opt-in is explicit and revocable.
3. No surface uses ad-tech, fingerprinting, cookies-for-tracking, or tracking pixels.
4. No cross-site, cross-device, or cross-service profile is built from analytics.
5. No event infers tool use or an individual's AI use.
6. No contact list is harvested or measured.
7. Every event has a published retention period that is enforced.
8. Below the published threshold, a statistic renders "fewer than N".
9. Disabling analytics changes no core feature's behaviour.
10. Any hosted analytics surface publishes a privacy analysis, threat model, and failure-mode statement.

## 10. Open questions
- The default retention periods per event family, to be set jointly with privacy and data minimisation.
