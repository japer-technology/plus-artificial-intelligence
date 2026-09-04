# Experiments and Metrics — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`experiments-and-metrics.md`](experiments-and-metrics.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how the project runs product experiments and
measures outcomes: comprehension, trust, calls to action, the effect of
authored-versus-verified language, practice-register value, maintenance
burden, moderation capacity, willingness to pay, multilingual equivalence, and
changes in review behaviour. It exists so the project can learn what works —
from voluntary records, surveys, public artifacts, and bounded studies —
without fingerprinting its visitors or only publishing the wins.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and owns *bounded product studies*. It does not own service
telemetry (see [Privacy-respecting analytics](privacy-respecting-analytics-dsh.md)),
long-term research over public records (see [Research
observatory](research-observatory-dsh.md)), or field pilots with named
participants (see [Pilots and case studies](pilots-and-case-studies-dsh.md)).
It inherits the red lines against fingerprinting and the publication duty to
report methods and negative findings.

## 3. Terminology

- **Bounded study** — an experiment with a defined question, population,
  method, duration, and end.
- **Voluntary record** — data a participant chose to provide for the study.
- **Public artifact** — already-public material the study may analyse.
- **Negative finding** — a result that does not support the hypothesis,
  published like any other.

## 4. Scope

### 4.1 In scope

- Permitted study methods and data sources.
- Consent and opt-out rules.
- Metric definitions for the seed's research questions.
- Publication duties (methods, negatives, corrections).

### 4.2 Out of scope and deferred

- Continuous telemetry (privacy-respecting analytics).
- Registry-scale research (research observatory).
- Pilots with institutions (pilots and case studies).

## 5. Specification

### 5.1 Design goals and principles

1. **Bounded by design.** Every study names its end before it starts.
2. **Voluntary over observed.** Where a question can be answered with
   consent, it is.
3. **No fingerprinting, ever.** Tracking-based inference is off the table
   regardless of the question.
4. **Publish everything.** Methods, results, and negatives; silence is not an
   option.

### 5.2 Normative requirements

1. Every study MUST be registered before it starts with: question,
   hypothesis, method, data sources, population, duration, and success
   criteria; registrations MUST be published.
2. Studies MUST prefer, in order: voluntary records, surveys with explicit
   consent, public artifacts, and bounded observation of aggregate behaviour;
   fingerprinting and cross-site tracking MUST NOT be used (RL-5).
3. Participant data MUST be collected with informed consent, stored per
   privacy and data minimisation, and deleted per the study's published
   retention schedule.
4. Willingness-to-pay studies MUST never gate a free-floor feature behind the
   experiment, and MUST state that answers do not change the free floor.
5. Multilingual-equivalence studies MUST test that meaning, not just wording,
   is equivalent across languages, using the translation governance
   statuses as inputs.
6. Review-behaviour studies MUST measure declared review practice changes
   without inferring individual tool use (RL-5 spirit: no automated AI-use
   inference about people).
7. Methods MUST be published with results; negative and null findings MUST be
   published with the same prominence as positive ones.
8. Corrections to published results MUST be issued as versioned corrections,
   never silent edits (no-silent-change).
9. Studies MUST NOT create rankings, scores, or leaderboards of participants
   (RL-9).
10. Studies touching minors or vulnerable groups MUST defer to child-safe
    education and require specialist review.
11. Study artifacts (survey instruments, analysis scripts where privacy
    permits) MUST be published openly so results are reproducible.

### 5.3 Data model

```
{
  "studyId": "opaque identifier",
  "registered": "ISO-8601",
  "question": "...",
  "method": "survey | voluntary-records | public-artifacts | bounded-observation",
  "population": "...",
  "duration": "end date",
  "dataSources": [ "..." ],
  "consentModel": "explicit | aggregate-only",
  "retention": "period",
  "results": [ { "metric": "...", "value": "...", "published": "ISO-8601" } ],
  "negativeFindings": [ "..." ]
}
```

### 5.4 Interfaces and behaviours

- Study registrations and results render as static pages meeting the
  accessibility floor, linked from the changelog and RSS feed.
- Surveys state their purpose, retention, and the free-floor
  non-negotiability where relevant.

### 5.5 Lifecycle and operational rules

- Studies end on their registered date; extensions require a new
  registration.
- Results are linked to the registered study; unregistered results MUST NOT
  be published as studies.

## 6. Free floor, red lines, and invariants

Experiments never change the free floor: willingness-to-pay answers are
informational only, and no study may test a paywalled version of a free-floor
feature. The fingerprinting red line is absolute, and the publication duty
keeps the project's own behaviour as accountable as the mark asks signers to
be.

## 7. Relationships to sibling specifications

- [Privacy-respecting analytics](privacy-respecting-analytics-dsh.md) owns the
  ongoing telemetry these studies do not become.
- [Research observatory](research-observatory-dsh.md) owns long-term research
  over public records.
- [Pilots and case studies](pilots-and-case-studies-dsh.md) owns named
  institutional pilots.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) owns
  participant data handling.
- [Translation governance](translation-governance-dsh.md) supplies the
  translation statuses for equivalence studies.
- [Child-safe education](child-safe-education-dsh.md) owns the specialist
  review for minors.
- [Changelog and RSS](changelog-and-rss-dsh.md) announces registrations and
  results.
- [Public adoption dashboard](public-adoption-dashboard-dsh.md) may consume
  study outcomes only as aggregates.

## 8. Resolution of the seed's "before implementation" concerns

- **Prefer voluntary records, surveys, public artifacts, and bounded studies
  over fingerprinting** — section 5.2 item 2: an ordered preference list with
  fingerprinting absolutely prohibited.
- **Publish methods** — section 5.2 item 7: methods published with results.
- **Publish negative findings as well as successes** — section 5.2 items 1
  and 7: registrations and negative results published with equal prominence.

The seed's research questions (comprehension, trust, calls to action,
authored-versus-verified language, practice-register value, maintenance,
moderation capacity, willingness to pay, multilingual equivalence, review
behaviour) are each addressed by the metric and method rules in sections 5.1
and 5.2, with willingness-to-pay and multilingual equivalence receiving
explicit safeguards (items 4-5).

## 9. Acceptance criteria

1. Every study is registered before it starts and the registration is public.
2. No study uses fingerprinting or cross-site tracking.
3. Participant data follows a published consent and retention model.
4. A negative finding is published with the same prominence as a positive
   one.
5. A willingness-to-pay study states that answers do not change the free
   floor.
6. A multilingual-equivalence study reports meaning equivalence, not wording
   similarity alone.
7. A correction to results is issued as a versioned correction.
8. No study produces rankings or scores of participants.
9. Study artifacts are published openly where privacy permits.

## 10. Open questions

- The review body for study registrations (jointly with governance and
  stewardship).
- Whether survey panels may use third-party recruiters, and under what
  privacy terms.
