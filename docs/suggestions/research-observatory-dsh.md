# Research Observatory — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`research-observatory.md`](research-observatory.md).
> **Catalogue group:** AI practice registers and discovery.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the research observatory: the controlled use of
deliberately public, sufficiently aggregated +AI records to study voluntary AI
disclosure, review practices, adoption, underserved languages, artifact types,
supersession, and bounded pilot outcomes. The project wants to learn how
disclosure behaves in the wild — but only in ways that cannot identify,
profile, or harm the people who disclosed.

## 2. Placement and boundaries

This specification sits in the "AI practice registers and discovery" group and
owns *research access rules*. It does not own the data (see [Opt-in signatory
registry](opt-in-signatory-registry-dsh.md) and [Public snapshots and
API](public-snapshots-and-api-dsh.md)), the privacy rules (see [Privacy and
data minimisation](privacy-and-data-minimisation-dsh.md)), or the analytics
telemetry (see [Privacy-respecting analytics](privacy-respecting-analytics-dsh.md),
which covers product events, not research). It honours the red lines by making
aggregation, disclosure thresholds, and ethical review mandatory rather than
optional.

## 3. Terminology

- **Observatory** — the programme of research over public records.
- **Aggregated data** — data combined to a threshold where individuals cannot
  be re-identified.
- **Disclosure threshold** — the minimum group size below which a statistic is
  not published.
- **Ethical review** — the documented assessment of a study's risks to
  participants.
- **Anti-doxxing control** — the set of rules preventing research outputs from
  exposing individuals.

## 4. Scope

### 4.1 In scope

- Permitted research questions and data sources.
- Disclosure thresholds and aggregation rules.
- Ethical review and research governance.
- Privacy-safe exports for researchers.
- Open publication of methods and findings.

### 4.2 Out of scope and deferred

- Product telemetry (privacy-respecting analytics).
- Individual-level data access (never permitted).
- Commercial data licensing (personal-data sales are a red line).

## 5. Specification

### 5.1 Design goals and principles

1. **Public data only.** The observatory studies records people chose to make
   public; nothing else.
2. **Aggregate or don't publish.** No output may identify an individual or a
   small group.
3. **Reviewed before studied.** Every study passes ethical review before data
   access.
4. **Open about methods.** Methods, thresholds, and negative findings are
   published like findings themselves.

### 5.2 Normative requirements

1. The observatory MUST use only records with `public` visibility, sourced
   from published snapshots; no private, unlisted, or organisation-only data
   may ever enter a study.
2. Every study MUST complete ethical review before access, covering: purpose,
   re-identification risk, vulnerable groups, and publication plan.
3. Publication MUST apply a disclosure threshold: no statistic about fewer
   than a documented minimum number of distinct parties is published; the
   default threshold is k = 10 distinct parties, adjustable only by
   governance with statistical advice, and the threshold in force MUST be
   published with the findings. Other specifications that publish
   low-count thresholds (public adoption dashboard, privacy-respecting
   analytics) defer to this value.
4. Research exports MUST be privacy-safe: aggregated per the threshold,
   stripped of identifiers, contact details, and free-text that could
   re-identify; raw record dumps MUST NOT be exported.
5. Neutral categories MUST be used: studies group by artifact type, language,
   status, and coarse voluntary categories only, never by inferred sensitive
   attributes (see privacy and data minimisation item 9).
6. Anti-doxxing controls MUST include: review of outputs before publication,
   prohibition of cross-linking public records with outside datasets to
   identify people, and a reporting route for anyone who believes an output
   exposes them.
7. Research governance MUST be documented: who may propose studies, who
   reviews them, how conflicts are declared, and how findings are published.
8. Methods and negative findings MUST be published alongside positive results;
   replication data MUST be shared as aggregated tables with the same
   thresholds.
9. Studies of supersession, revocation, and lifecycle patterns MUST respect
   the lifecycle vocabulary and MUST NOT infer reasons not recorded in events.
10. Pilot outcome studies MUST follow pilots and case studies' consent and
    publication rules in addition to these rules.
11. The observatory MUST NOT sell or licence individual-level or
    below-threshold data to anyone (RL-5).
12. Observatory outputs MUST be published openly (open licence), with methods
    archived in the changelog and RSS feed.

### 5.3 Data model

```
{
  "study": "identifier",
  "question": "...",
  "dataSources": [ "snapshot version references" ],
  "ethicalReview": { "by": "review body", "at": "ISO-8601", "outcome": "approved|conditions" },
  "threshold": "minimum parties per statistic",
  "outputs": [ "aggregated tables and figures identifiers" ],
  "published": "ISO-8601"
}
```

### 5.4 Interfaces and behaviours

- Researchers request access through the documented proposal process; access
  is granted to aggregated views, never to raw records.
- Published findings link the snapshot versions they used so results are
  reproducible from public data.

### 5.5 Lifecycle and operational rules

- Study records are versioned; corrections to published findings are issued as
  corrections, never silent edits (no-silent-change).
- A finding later found to breach a threshold is withdrawn publicly with a
  correction notice.

## 6. Free floor, red lines, and invariants

The observatory publishes open, aggregated knowledge as a free-floor commons.
It enforces the personal-data red line absolutely (RL-5): no sale, no raw
access, no below-threshold publication. The no-doxxing and no-inference rules
keep research from becoming surveillance, preserving the project's trust in
the people who disclose.

## 7. Relationships to sibling specifications

- [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) and [Public
  snapshots and API](public-snapshots-and-api-dsh.md) supply the public data
  sources.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) owns
  the underlying privacy obligations this document extends to research.
- [Privacy-respecting analytics](privacy-respecting-analytics-dsh.md) is the
  sibling for product telemetry, not research.
- [Experiments and metrics](experiments-and-metrics-dsh.md) owns bounded
  studies with human participants.
- [Pilots and case studies](pilots-and-case-studies-dsh.md) owns the consent
  rules for pilot outcome studies.
- [Public adoption dashboard](public-adoption-dashboard-dsh.md) consumes
  aggregate observatory outputs.
- [Changelog and RSS](changelog-and-rss-dsh.md) announces study publications.
- [Standards engagement](standards-engagement-dsh.md) may later carry
  observatory findings into external fora.

## 8. Resolution of the seed's "before implementation" concerns

- **Disclosure thresholds** — section 5.2 item 3: published minimum group
  sizes per statistic.
- **Ethical review** — section 5.2 item 2 and 5.3: review before access,
  recorded per study.
- **Privacy-safe exports** — section 5.2 item 4: aggregated, stripped,
  no raw dumps.
- **Neutral categories** — section 5.2 item 5: artifact type, language,
  status, coarse voluntary categories only.
- **Anti-doxxing controls** — section 5.2 item 6: output review,
  cross-linking prohibition, reporting route.
- **Research governance** — section 5.2 item 7: documented proposal, review,
  conflict, and publication process.
- **Open publication** — section 5.2 items 8 and 12: methods, negatives, and
  open-licensed outputs.

## 9. Acceptance criteria

1. No study uses anything but public snapshot data.
2. Every study has a recorded ethical review before access.
3. Every published statistic satisfies the published disclosure threshold.
4. No research export contains identifiers, contact details, or raw records.
5. Methods and negative findings are published with every study.
6. A below-threshold breach triggers public withdrawal and correction.
7. No individual-level data is sold or licensed.
8. Findings link their source snapshot versions.

## 10. Open questions

- Whether third-party researchers outside the project may access aggregated
  views, and under what terms.
