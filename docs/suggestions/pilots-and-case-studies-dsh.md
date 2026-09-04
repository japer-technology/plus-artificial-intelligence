# Pilots and Case Studies — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`pilots-and-case-studies.md`](pilots-and-case-studies.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how the project runs small, bounded pilots with
creators, teams, schools, publishers, professional bodies, and public-interest
groups, and how it publishes their outcomes — methods, results, failures,
reusable templates, and participant-approved case studies. Pilots are the
bridge between a good idea and proven practice; this specification keeps them
honest, consented, and finite.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and owns *pilot design and case-study publication*. It does not
own product experiments (see [Experiments and metrics](experiments-and-metrics-dsh.md)),
long-term research (see [Research observatory](research-observatory-dsh.md)),
or the consulting business (see [Training, consulting, and
pilots](training-consulting-and-pilots-dsh.md), which sells engagements — this
specification governs the project's own bounded pilots). School pilots inherit
child-safe education on top of these rules.

## 3. Terminology

- **Pilot** — a bounded, time-limited trial of +AI adoption with named
  participants and a defined end.
- **Case study** — a participant-approved published account of a pilot's
  methods and outcomes.
- **End point** — the pre-declared condition on which the pilot concludes.
- **Participant approval** — the recorded consent to publish specific,
  reviewed material about them.

## 4. Scope

### 4.1 In scope

- Pilot design: consent, measures, scope, support, end points.
- Publication rights and participant approval.
- Failure reporting and reusable templates.
- Sector and accessibility obligations.

### 4.2 Out of scope and deferred

- Paid consulting engagements (training, consulting, and pilots).
- General research (research observatory, experiments and metrics).
- School-specific rules (child-safe education).

## 5. Specification

### 5.1 Design goals and principles

1. **Small and bounded.** Every pilot names its participants, duration, and
   end before it starts.
2. **Consent rules publication.** Nothing about a participant is published
   without their specific, reviewable approval.
3. **Failures are findings.** Pilots that fail are reported as carefully as
   ones that succeed.
4. **Leave reusable things behind.** Templates, checklists, and guides are
   pilot outputs, not afterthoughts.

### 5.2 Normative requirements

1. Every pilot MUST publish, before starting: scope, participants (as
   appropriate to consent), measures, duration, end point, support provided,
   conflicts, and languages.
2. Participant consent MUST be explicit, recorded, and cover data use and
   publication; participants MAY withdraw consent for publication at any time
   before release, and withdrawal MUST be honoured.
3. Measures MUST be defined before the pilot starts and MUST NOT change
   mid-pilot; where measures change, the change MUST be reported as such.
4. Publication rights MUST be agreed in advance: which materials, which
   names, which quotes; participants MUST approve the final text of anything
   that identifies them.
5. Failures and negative outcomes MUST be published with the same care as
   successes, with the pilot's own account of what did not work.
6. Case studies MUST state their measures, methods, and conflicts; they MUST
   NOT read as endorsements or marketing.
7. Reusable outputs (templates, checklists, guides) MUST be published openly
   and MUST meet the accessibility floor in the pilot's languages.
8. Pilots with minors or schools MUST satisfy child-safe education before
   starting.
9. Each pilot MUST have a named end point and a written close-out record:
   outcomes against measures, learnings, and published materials.
10. Pilots MUST NOT create rankings or comparative scores of participants
    (RL-9), and MUST NOT be sold as certification (see independent assurance).
11. Sector pilots MUST avoid competence implications, per sector and language
    directories' non-endorsement rules.

### 5.3 Data model

```
{
  "pilotId": "opaque identifier",
  "publishedPlan": {
    "scope": "...", "participants": "...", "measures": [ "..." ],
    "start": "ISO-8601", "endPoint": "...", "support": "...",
    "conflicts": [ "..." ], "languages": [ "..." ]
  },
  "consents": [ { "participant": "role", "covers": "...", "withdrawn": false } ],
  "closeOut": { "outcomes": [ "..." ], "failures": [ "..." ],
                "reusableOutputs": [ "..." ], "at": "ISO-8601" }
}
```

### 5.4 Interfaces and behaviours

- Pilot plans and close-outs render as static pages linked from the changelog
  and RSS feed.
- Case studies link the pilot's plan so readers can compare what was promised
  with what happened.

### 5.5 Lifecycle and operational rules

- Pilots end on their end point; extensions require a new plan.
- Participant withdrawal before release removes their material from the
  pending case study and is recorded, not hidden.

## 6. Free floor, red lines, and invariants

Pilots are free-floor activity: the project's own pilots publish openly and
cost participants nothing. No pilot may turn participation into a credential
or ranking (RL-9, and the independent assurance boundary), and consent rules
keep publication from becoming automated publication in another's name
(RL-7).

## 7. Relationships to sibling specifications

- [Experiments and metrics](experiments-and-metrics-dsh.md) owns product
  studies; pilots here involve named participants in real settings.
- [Research observatory](research-observatory-dsh.md) may study pilot outcomes
  only in aggregated forms.
- [Training, consulting, and pilots](training-consulting-and-pilots-dsh.md)
  sells professional engagements; this specification governs the project's
  own pilots.
- [Child-safe education](child-safe-education-dsh.md) adds school-specific
  obligations.
- [Sector and language directories](sector-and-language-directories-dsh.md)
  supply the sector non-endorsement rules.
- [Community hub](community-hub-dsh.md) hosts pilot discussions without
  ranking.
- [Changelog and RSS](changelog-and-rss-dsh.md) announces plans and close-outs.
- [Accessibility floor](accessibility-floor-dsh.md) applies to all outputs.

## 8. Resolution of the seed's "before implementation" concerns

- **Consent** — section 5.2 items 2 and 4: recorded consent, publication
  approval, withdrawal honoured.
- **Measures** — section 5.2 item 3: defined in advance, changes reported.
- **Scope** — section 5.2 item 1: published before starting.
- **Support** — section 5.2 item 1: stated in the plan.
- **Publication rights** — section 5.2 item 4: agreed in advance, approved
  final text.
- **Conflicts** — section 5.2 items 1 and 6: declared in plans and case
  studies.
- **Accessibility** — section 5.2 item 7: reusable outputs meet the floor.
- **Languages** — section 5.2 items 1 and 7: stated and served.
- **Safety** — section 5.2 item 8: minors and schools require child-safe
  education.
- **A clear end point** — section 5.2 items 1 and 9: named end point and
  written close-out.

## 9. Acceptance criteria

1. Every pilot publishes its plan before starting.
2. No participant appears in a case study without recorded, specific
   approval.
3. A participant's publication withdrawal is honoured before release.
4. A failed pilot's close-out is published with its failures explained.
5. Reusable templates are published openly and meet the accessibility floor.
6. Every pilot has a named end point and a written close-out record.
7. No pilot output ranks participants or implies certification.
8. A school pilot satisfies child-safe education before starting.

## 10. Open questions

- Whether pilot close-outs should feed anonymised learnings into the research
  observatory, and under which thresholds.
