# Public Adoption Dashboard — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`public-adoption-dashboard.md`](public-adoption-dashboard.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the public adoption dashboard: aggregate, open
reporting of signers, organisations, real artifacts, declarations, languages,
integrations, pilots, contributions, revocations, and service health. Its
purpose is accountability of the project to its community — honest numbers
about adoption and operations — without surveillance of the people behind the
numbers, and without turning adoption into a race.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and owns *aggregate public reporting*. It does not own the data
(see [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) and [Public
snapshots and API](public-snapshots-and-api-dsh.md)), the product telemetry
(see [Privacy-respecting analytics](privacy-respecting-analytics-dsh.md)), or
the research uses of the data (see [Research observatory](research-observatory-dsh.md)).
It inherits the red lines against fingerprinting, vanity metrics, and
leaderboards, and applies them to the project's own reporting.

## 3. Terminology

- **Aggregate metric** — a count or ratio over groups large enough to be
  privacy-safe.
- **Low-count suppression** — withholding a metric below a published minimum
  to prevent identification.
- **Vanity total** — a headline number chosen to impress rather than inform.
- **Double counting** — counting one entity more than once across
  overlapping metrics.

## 4. Scope

### 4.1 In scope

- The metric set and its definitions.
- Low-count suppression and double-counting rules.
- Open-data publication and accessible summaries.
- Service health reporting.
- Prohibitions: fingerprinting, vanity totals, leaderboards.

### 4.2 Out of scope and deferred

- Individual record views (public directory).
- Research studies (research observatory).
- Product event telemetry (privacy-respecting analytics).

## 5. Specification

### 5.1 Design goals and principles

1. **Honest counts.** Metrics measure defined things; definitions are
   published with the numbers.
2. **Privacy-safe aggregates.** No metric identifies a person or small group.
3. **No competition.** The dashboard informs; it never ranks people, tools,
   vendors, or organisations.
4. **Open data.** Every number is reproducible from published snapshots.

### 5.2 Normative requirements

1. The dashboard MUST publish each metric's definition, its data source
   (snapshot version), and its computation, so any reader can reproduce it.
2. Metrics MUST cover at least: signers, organisations, real artifacts,
   declarations, languages, integrations, pilots, contributions, revocations,
   and service health — each as defined in 5.3.
3. Low-count suppression MUST apply with a published minimum; below it, the
   dashboard shows "fewer than N" and nothing else. The suppression minimum
   defaults to the disclosure threshold owned by research observatory
   (k = 10 by default) unless this document publishes a stricter value with
   justification.
4. The dashboard MUST NOT use fingerprinting, tracking pixels, or per-visitor
   analytics on its own pages.
5. The dashboard MUST NOT publish vendor leaderboards, tool-share rankings,
   or any ranking of people or organisations (RL-9).
6. Metrics MUST avoid double counting by construction: each entity is counted
   once per metric, with the counting rule documented (e.g. a superseded
   declaration counts as one artifact's history, not two artifacts).
7. Vanity totals MUST be avoided: no metric may be presented without its
   definition, period, and source; growth rates MUST be accompanied by
   absolute numbers.
8. Service health MUST be reported as measured facts (uptime, snapshot
   freshness, queued-check backlog) with their measurement method, never as
   marketing.
9. Dashboard data MUST be published as open data through the snapshot
   pipeline, and the rendered dashboard MUST meet the accessibility floor.
10. Revocations and corrections MUST be reported too: the dashboard reports
    them honestly, never hiding churn.
11. Metrics that reward appearance over accountable behaviour MUST NOT exist:
    no "most active", no streaks, no badges of volume (RL-9).
12. Dashboard changes MUST be versioned and announced in the changelog.

### 5.3 Data model

```
{
  "dashboardVersion": "integer",
  "period": "monthly | quarterly",
  "metrics": [
    { "id": "signers", "definition": "...", "value": "integer",
      "source": "snapshot version", "suppressed": false },
    { "id": "artifacts", "definition": "distinct declaration scopes", "value": "..." },
    { "id": "languages", "definition": "distinct declaration languages", "value": "..." },
    { "id": "revocations", "definition": "revocation events in period", "value": "..." },
    { "id": "serviceHealth", "definition": "uptime and snapshot freshness facts", "value": "..." }
  ],
  "minimumGroup": "N",
  "published": "ISO-8601"
}
```

### 5.4 Interfaces and behaviours

- The rendered dashboard is a static page built from the published data, with
  the neutral route available per the accessibility floor.
- Each metric links to its definition and source snapshot, and to the
  underlying directory where a reader may browse what the aggregate counts.

### 5.5 Lifecycle and operational rules

- Dashboard releases follow the snapshot cadence; corrections are issued as
  versioned corrections, never silent edits.
- A metric definition that changes is announced with before/after
  comparability notes.

## 6. Free floor, red lines, and invariants

The dashboard is a free-floor commons: reading it never costs money, and its
data is open. It implements the no-ranking red line in the project's own
reporting and the privacy red lines by suppressing low counts and refusing
fingerprinting. Honest revocation reporting keeps the accountability promise
credible.

## 7. Relationships to sibling specifications

- [Public snapshots and API](public-snapshots-and-api-dsh.md) supplies the
  data and publishes the dashboard data.
- [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) defines the
  records being counted.
- [Privacy-respecting analytics](privacy-respecting-analytics-dsh.md) owns
  telemetry; the dashboard consumes only aggregates.
- [Research observatory](research-observatory-dsh.md) may study dashboard
  aggregates with its thresholds.
- [Accessibility floor](accessibility-floor-dsh.md) applies to the rendered
  dashboard.
- [Changelog and RSS](changelog-and-rss-dsh.md) announces dashboard releases.
- [Financial transparency](financial-transparency-dsh.md) reports the
  operating costs behind the service health facts.
- [Cost discipline](cost-discipline-dsh.md) owns the queued-check backlog
  metric's operational meaning.

## 8. Resolution of the seed's "before implementation" concerns

- **Fingerprinting** — section 5.2 item 4: prohibited on dashboard pages.
- **Vanity totals** — section 5.2 item 7: definitions, periods, sources, and
  absolute numbers required.
- **Low-count disclosure** — section 5.2 item 3: published suppression
  minimum.
- **Vendor leaderboards** — section 5.2 item 5: prohibited.
- **Double counting** — section 5.2 item 6: documented counting rules per
  metric.
- **Metrics that reward appearance over accountable behaviour** — section 5.2
  item 11: prohibited by construction.

## 9. Acceptance criteria

1. Every metric publishes definition, source, and computation.
2. A metric below the minimum group size renders "fewer than N".
3. No dashboard page uses tracking or fingerprinting.
4. No ranking of people, organisations, tools, or vendors appears.
5. Revocations appear in the published numbers.
6. Growth rates appear with absolute numbers and definitions.
7. Dashboard data is reproducible from the cited snapshot.
8. The dashboard meets the accessibility floor.
9. A metric definition change is announced with comparability notes.

## 10. Open questions

- Whether service health should include a historical view or only current
  status.
