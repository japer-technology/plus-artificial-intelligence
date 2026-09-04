# Moderation, Disputes, and Appeals — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`moderation-disputes-and-appeals.md`](moderation-disputes-and-appeals.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how public submissions to +AI services — registry
entries, directory listings, theme submissions, community content — are
admitted, moderated, disputed, and appealed. Its purpose is to make moderation
fair and legible: published rules, named decision authority, response targets,
a status vocabulary, evidence handling, appeal routes, and transparency
reporting. A project about accountability must itself be accountable for how
it treats the people who submit to it.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and owns *moderation policy and process*. It does not own the
declaration statuses that moderation may set (see [Declaration
lifecycle](declaration-lifecycle-dsh.md)), the technical enforcement of
decisions (see [Security and abuse controls](security-and-abuse-controls-dsh.md)),
or the governance body that owns policy changes (see [Governance and
stewardship](governance-and-stewardship-dsh.md)). It honours the free floor:
free submission and correction paths must remain credible, and no payment may
change moderation outcomes.

## 3. Terminology

- **Submission** — any user-contributed content entering a public surface.
- **Notice-and-action** — the process by which a report leads to review and a
  recorded action.
- **Status vocabulary** — the fixed set of moderation states applied to
  submissions.
- **Consequential decision** — a decision that removes, restricts, or publicly
  marks a person's content or record.
- **Transparency report** — the periodic published summary of moderation
  activity.

## 4. Scope

### 4.1 In scope

- Admission rules and prohibited content.
- Impersonation and privacy reports.
- Notice-and-action process and evidence handling.
- Status vocabulary and response targets.
- Decision authority and appeals.
- Transparency reporting.

### 4.2 Out of scope and deferred

- The technical rate limits and abuse controls (security and abuse controls).
- Contact routing for reports (contact routes).
- Child-safety-specific reporting (child-safe education).

## 5. Specification

### 5.1 Design goals and principles

1. **Published before enforced.** No rule may be enforced that was not
   published first.
2. **Humans decide consequence.** Automation performs objective checks only;
   every consequential decision has a human reviewer.
3. **Recorded, not silent.** Every action is recorded as an event with a
   reason, visible to the affected party.
4. **Appealable by default.** Every consequential decision has a named appeal
   route.
5. **Mistakes are reversible.** Reversal restores the prior state and is
   reported in transparency data.

### 5.2 Normative requirements

1. Admission rules and prohibited-content categories MUST be published,
   versioned, and announced via the changelog before enforcement.
2. Prohibited content MUST cover at minimum: impersonation, illegal content,
   harassment, spam, malware distribution, and privacy-violating material.
3. Automation MAY perform only objective checks (format, syntax, known-malware
   signatures); every consequential decision MUST be made or confirmed by a
   human reviewer.
4. Every report MUST receive an acknowledgement with the expected response
   time; response targets MUST be published per category, and urgent safety
   categories MUST have a no-account submission route.
5. Every moderation action MUST be recorded as an event: submission, action,
   reason, reviewer role, and date; the affected party MUST be told the reason
   and the appeal route.
6. The status vocabulary MUST be exactly: `pending`, `published`, `restricted`,
   `removed`, `restored`, and `disputed` — with the definitions in 5.3.
7. Evidence handling MUST preserve reported material for review, limit access
   to reviewers, and delete it per privacy and data minimisation retention
   schedules.
8. Appeals MUST be decided by someone not involved in the original decision;
   the appeal outcome MUST be recorded and communicated.
9. Emergency restrictions (imminent safety risk) MUST use the declaration
   lifecycle `restricted` event with a mandatory review date.
10. Transparency reports MUST be published at least annually: counts by
    category and outcome, response-time performance, and appeal outcomes; they
    MUST NOT name individuals without consent.
11. No payment may change moderation outcomes, priorities, or queue position
    for substantive review (see priority review services).
12. Harassment of reporters or subjects during a dispute MUST itself be
    moderatable, with protections for both parties.

### 5.3 Data model

Moderation event record:

```
{
  "caseId": "opaque identifier",
  "submission": "identifier of the affected submission",
  "status": "pending | published | restricted | removed | restored | disputed",
  "action": "admitted | restricted | removed | restored",
  "reason": "prohibited-content category or policy reference",
  "reviewer": "role, not personal identity where practical",
  "at": "ISO-8601",
  "appeal": { "filed": "ISO-8601", "decidedBy": "role", "outcome": "...", "at": "ISO-8601" }
}
```

### 5.4 Interfaces and behaviours

- Report routes are reachable without an account for urgent categories (see
  contact routes).
- Affected parties see their case status and event history; the public sees
  only the resulting record status.
- Appeal filing is no-account where the affected party lacks one.

### 5.5 Lifecycle and operational rules

- Cases close with a recorded outcome; reopened cases create new events, never
  rewrite history.
- Policy changes apply to new submissions; in-flight cases are judged under
  the rules in force at submission unless the change is a safety emergency.
- Moderation staff follow recusal rules for conflicts (see governance and
  stewardship).

## 6. Free floor, red lines, and invariants

Free submission and correction paths must stay credible: basic admission,
reporting, and appeals never require payment, and paid priority must not
change substantive outcomes (RL-1 spirit, RL-4). The no-paid-placement rule
prevents moderation from becoming purchasable, and the honesty invariant
requires every action to be recorded and visible to the affected party rather
than silently applied.

## 7. Relationships to sibling specifications

- [Declaration lifecycle](declaration-lifecycle-dsh.md) supplies the
  `restricted` and `disputed` statuses moderation may set.
- [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) and [Public
  directory](public-directory-dsh.md) apply these rules to their submissions.
- [Theme gallery and community voting](theme-gallery-community-voting-dsh.md)
  applies them to theme submissions.
- [Community hub](community-hub-dsh.md) gates public submissions on this
  document's rules being published.
- [Contact routes](contact-routes-dsh.md) owns the report intake channels.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) owns the
  technical enforcement and anti-abuse measures.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) owns
  evidence retention and deletion.
- [Governance and stewardship](governance-and-stewardship-dsh.md) owns policy
  authority and recusal rules.
- [Priority review services](priority-review-services-dsh.md) must comply with
  the no-outcome-change rule.
- [Child-safe education](child-safe-education-dsh.md) adds child-specific
  reporting obligations.

## 8. Resolution of the seed's "before implementation" concerns

- **Admission rules and prohibited content** — section 5.2 items 1-2:
  published, versioned categories.
- **Impersonation and privacy reports** — sections 5.2 item 2 and 5.4:
  prohibited category plus no-account reporting routes.
- **Notice-and-action** — section 5.2 items 4-5: acknowledgement, targets,
  recorded actions with reasons.
- **Evidence handling** — section 5.2 item 7: preserved, restricted, scheduled
  deletion.
- **Status vocabulary** — section 5.2 item 6 and 5.3: the six fixed statuses.
- **Response targets** — section 5.2 item 4: published per category.
- **Decision authority** — section 5.2 items 3 and 8: humans for consequence;
  appeal decided by a different reviewer.
- **Appeals** — section 5.2 item 8 and 5.3: recorded appeal path.
- **Transparency reporting** — section 5.2 item 10: annual reports without
  naming individuals.
- **Human review for consequential cases; automation only for objective
  checks** — section 5.2 item 3.
- **Harassment, illegality, conflicts, emergency restrictions, mistakes** —
  section 5.2 items 2, 9, 12 plus 5.5: prohibited categories, emergency
  restriction events, recusals, reversible mistakes.

## 9. Acceptance criteria

1. No rule is enforced before it is published and versioned.
2. Every consequential decision carries a human reviewer and a recorded
   reason.
3. Every report receives an acknowledgement with a response target.
4. An affected party can see every action on their submission and its reason.
5. An appeal is decided by a different reviewer and the outcome is recorded.
6. An emergency restriction carries a mandatory review date.
7. A mistake is reversible and the reversal appears in transparency data.
8. A transparency report is published at least annually with the required
   counts.
9. No payment changes a moderation outcome.

## 10. Open questions

- The specific response-time targets per category, to be set with staffing
  reality (see cost discipline).
- Whether anonymity protections for reporters need a jurisdiction-specific
  carve-out.
