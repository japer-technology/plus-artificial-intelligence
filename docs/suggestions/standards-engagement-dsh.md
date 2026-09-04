# Standards Engagement — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`standards-engagement.md`](standards-engagement.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines when and how the project engages standards bodies
or a neutral consortium: only after the schemas, evidence language, pilots,
and independent implementations are stable, and only to improve
interoperability and long-term shared maintenance. Its purpose is disciplined
timing — the project standardises what has been proven in use, and hands
shared custody to neutral fora without handing over its meaning.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns the *external engagement process*. It does not own
the formats that would be proposed (see [Portable declaration
schema](portable-declaration-schema-dsh.md), [Evidence labels, not trust
scores](evidence-labels-not-trust-scores-dsh.md), [Provenance
interoperability](provenance-interoperability-dsh.md)), nor the governance
that must mandate engagement (see [Governance and
stewardship](governance-and-stewardship-dsh.md)). It honours the free floor:
engagement never changes the mark's freedom, and the project's own
implementations remain the reference until and unless an external body
adopts them.

## 3. Terminology

- **Forum** — the standards body or consortium considered.
- **Mandate** — the community-approved scope of what may be proposed.
- **IP terms** — the intellectual-property conditions of the chosen forum.
- **Institutional capture** — the risk that a host body reshapes the work to
  its own ends.

## 4. Scope

### 4.1 In scope

- Readiness preconditions.
- Forum selection criteria.
- Representation and mandate rules.
- IP terms and funding safeguards.
- Capture limits and exit conditions.

### 4.2 Out of scope and deferred

- Designing the formats being proposed (their owning specifications).
- Making standards decisions for the community (governance and stewardship).
- Any engagement before the preconditions are met.

## 5. Specification

### 5.1 Design goals and principles

1. **Proven before proposed.** Real use precedes external standardisation.
2. **Neutral fora, guarded meaning.** Interoperability may be shared; the
   mark's meaning stays the project's.
3. **Mandated by the community.** Engagement happens only with a published
   mandate, never on an individual's initiative.
4. **Reversible by design.** The project can withdraw without losing its own
   formats.

### 5.2 Normative requirements

1. Engagement MUST NOT begin until all of: (a) the declaration schema,
   evidence-label language, and checker are stable across at least one
   specification release cycle; (b) at least one independent implementation
   exists outside the project; (c) real-world pilots have produced published
   outcomes (see pilots and case studies).
2. Forum selection MUST be recorded against published criteria: neutrality,
   openness, governance quality, IP terms, cost, and the ability to exit
   without losing the project's own rights.
3. The community mandate MUST be published before engagement: which
   documents may be proposed, in which fora, with which representatives, and
   what may never be proposed (the normative meaning itself).
4. IP terms MUST be reviewed and accepted by governance before joining a
   forum; terms that would assign the project's formats or the mark's
   identity to a third party MUST be rejected.
5. Funding safeguards MUST apply: any fee or sponsorship related to forum
   participation MUST be disclosed per financial transparency and MUST NOT
   create capture (see sponsorship policy).
6. Institutional-capture limits MUST be set: the project MUST retain its own
   reference implementations and versioning, and MUST document what would
   constitute capture before it happens.
7. The project MUST remain able to exit: engagement agreements MUST preserve
   the right to withdraw, with the project's published formats remaining
   usable and versioned.
8. Progress MUST be reported publicly: each engagement publishes its
   mandate, forum, representatives, and outcomes in the changelog.
9. Adoption by a forum MUST NOT change the free floor: the project's own
   formats and tools remain free and maintained regardless of external
   adoption.
10. Community input on engagement decisions MUST follow governance and
    stewardship's decision process, with conflicts and recusals recorded.

### 5.3 Data model

```
{
  "engagementId": "opaque identifier",
  "forum": "name",
  "mandate": { "documents": [ "..." ], "forbidden": [ "normative meaning" ],
               "representatives": [ "roles" ], "approved": "ISO-8601" },
  "criteriaAssessment": { "neutrality": "...", "openness": "...",
                          "governance": "...", "ipTerms": "...",
                          "cost": "...", "exit": "..." },
  "fundingDisclosures": [ "..." ],
  "status": "proposed | active | exited"
}
```

### 5.4 Interfaces and behaviours

- Engagement records render as static pages linked from the changelog and
  RSS feed.
- The community hub hosts the consultation thread for each mandate proposal,
  under its no-ranking rules.

### 5.5 Lifecycle and operational rules

- Engagements are reviewed on a fixed cadence; capture findings trigger
  withdrawal per the pre-agreed criteria.
- An exited engagement leaves the project's own formats versioned and
  unchanged.

## 6. Free floor, red lines, and invariants

Engagement is a governance activity, not a product: it costs the community
nothing and changes nothing about the free floor. The forbidden-zone rule
protects the meaning from institutional capture, and the exit rule protects
the static-first commons from external dependency — the project never lets a
standards body become the only place its formats live.

## 7. Relationships to sibling specifications

- [Governance and stewardship](governance-and-stewardship-dsh.md) owns the
  mandate and decision process.
- [Portable declaration schema](portable-declaration-schema-dsh.md),
  [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md),
  and [Provenance interoperability](provenance-interoperability-dsh.md) own
  the documents that may be proposed.
- [Pilots and case studies](pilots-and-case-studies-dsh.md) supply the
  real-use precondition.
- [Developer integrations](developer-integrations-dsh.md) demonstrates the
  independent implementations.
- [Sponsorship policy](sponsorship-policy-dsh.md) and [Financial
  transparency](financial-transparency-dsh.md) own the funding safeguards.
- [Community hub](community-hub-dsh.md) hosts mandate consultations.
- [Changelog and RSS](changelog-and-rss-dsh.md) publishes engagement records.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md)
  owns the long-term custody that external adoption must not disturb.

## 8. Resolution of the seed's "before implementation" concerns

- **Choose the right forum** — section 5.2 item 2: published selection
  criteria with a recorded assessment.
- **Scope** — section 5.2 item 3: the published mandate, including the
  forbidden zone.
- **Representation** — section 5.2 item 3: named representative roles in the
  mandate.
- **Intellectual-property terms** — section 5.2 item 4: governance review,
  rejection of assignable terms.
- **Community mandate** — section 5.2 item 3: published before engagement.
- **Funding safeguards** — section 5.2 item 5: disclosed fees, no capture.
- **Limits on institutional capture** — section 5.2 item 6: documented
  capture criteria and retained reference implementations.

## 9. Acceptance criteria

1. No engagement starts before the stability, independent-implementation,
   and pilots preconditions are recorded.
2. Every engagement has a published mandate naming documents, fora,
   representatives, and the forbidden zone.
3. A forum's IP terms are reviewed by governance before joining.
4. Forum fees and sponsorships are disclosed.
5. The project retains its reference implementations and versioning
   throughout.
6. An exit leaves the project's formats usable and versioned.
7. Engagement progress is public in the changelog.
8. External adoption changes nothing about the free floor.

## 10. Open questions

- Which specific fora (W3C community groups, IETF, ISO-adjacent, neutral
  consortia) best fit each document class, to be decided at mandate time.
