# Red Lines and Cautious Extensions — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`red-lines-and-cautious-extensions.md`](red-lines-and-cautious-extensions.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification is the project's single source of truth for what must never
be built, and for what may only be attempted later under published conditions.
It records the red lines that would break the mark's core promise — that
responsibility stays human, voluntary, and free — and maintains the watchlist
of high-risk extensions (social feeds, rankings, automated AI-use inference,
hosted mail, vendor sponsorship, identity integrations, blockchain anchoring,
reputation scores) that every other specification must defer to before
proposing anything adjacent.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and is referenced by every sibling that touches paid services,
directories, tooling, or identity. It owns the *prohibitions and the watchlist
process*. It does not own the positive articulation of what stays free — that
belongs to [Free-floor covenant](free-floor-covenant-dsh.md) — nor the
governance process that would ever relax a rule, which belongs to [Governance
and stewardship](governance-and-stewardship-dsh.md). The red lines are
themselves part of the free floor: they cannot be sold, waived, or
pay-walled away.

## 3. Terminology

- **Red line** — an absolute prohibition; violating it is not an extension but
  a fork of the project.
- **Watchlist** — high-risk capabilities that may be explored only after a
  published, governed assessment, and never by default.
- **Assessment** — a documented review stating the risk, the safeguards, and
  the decision, recorded in the changelog.

## 4. Scope

### 4.1 In scope

- The nine absolute red lines and their exact wording.
- The watchlist of high-risk extensions.
- The assessment and recording process for watchlist items.
- How sibling specifications must reference this document.

### 4.2 Out of scope and deferred

- The governance body that conducts assessments (governance and stewardship).
- Enforcement and moderation of violations (moderation, disputes, and
  appeals; security and abuse controls).
- The free-floor list itself (free-floor covenant).

## 5. Specification

### 5.1 Design goals and principles

1. **Precision over volume.** Each red line is phrased as a concrete
   prohibition, not a value statement.
2. **Stability.** Red lines change rarely, through governed process, never by
   drift.
3. **Deference.** Any sibling specification proposing something adjacent to a
   watchlist item must cite this document and record an assessment.
4. **Accountability stays human.** The unifying principle behind every red
   line: no mechanism may move responsibility for published work from a human
   to a machine or to a paywall.

### 5.2 Normative requirements

1. The project MUST NOT charge for use of the `+AI` meaning or mark: payment
   for use is a red line.
2. The project MUST NOT require registration, identity, or an account as a
   condition of using the mark.
3. The project MUST NOT require disclosure of tools or prompts: tool and
   prompt disclosure is always voluntary.
4. The project MUST NOT sell paid placement: no directory, listing, or search
   result may be purchasable.
5. The project MUST NOT sell personal data, and MUST NOT permit covert
   tracking in any shipped surface.
6. The project MUST NOT use or require biometric proof for any purpose.
7. The project MUST NOT publish, sign, or transmit anything in another
   person's name automatically: publication requires the named human's own
   acceptance.
8. The project MUST NOT represent AI as responsible for any released work:
   responsibility transfers to no machine, model, or agent.
9. The project MUST NOT maintain reputation scores, trust scores, social
   feeds, or rankings of people — any aggregation that ranks humans is a red
   line even when labelled "community".
10. The watchlist MUST be maintained in this document: social feeds, rankings,
    automated AI-use inference, hosted mail, vendor sponsorship, identity
    integrations, blockchain anchoring, reputation scores.
11. A watchlist item MAY be explored only after an assessment records: the
    specific proposal, the risk to the red lines, the safeguards, the sunset
    condition, and the approving body; the assessment MUST be published in the
    changelog.
12. Every sibling specification whose subject borders a watchlist item MUST
    reference this document and state how it stays clear of the item.
13. This specification MAY be amended only through the governance process,
    with the notice period defined by governance and stewardship.

### 5.3 Data model

```
{
  "redLines": [
    { "id": "RL-1", "text": "No payment for use of the mark or its meaning." },
    { "id": "RL-2", "text": "No mandatory registration or identity." },
    { "id": "RL-3", "text": "No forced tool or prompt disclosure." },
    { "id": "RL-4", "text": "No paid placement." },
    { "id": "RL-5", "text": "No personal-data sales; no covert tracking." },
    { "id": "RL-6", "text": "No biometric proof." },
    { "id": "RL-7", "text": "No automated publication in another's name." },
    { "id": "RL-8", "text": "No transfer of responsibility to AI." },
    { "id": "RL-9", "text": "No reputation scores, trust scores, social feeds, or rankings of people." }
  ],
  "watchlist": [ "social feeds", "rankings", "automated AI-use inference",
                 "hosted mail", "vendor sponsorship", "identity integrations",
                 "blockchain anchoring", "reputation scores" ],
  "assessments": [ { "item": "watchlist item", "proposal": "...",
                     "risk": "...", "safeguards": "...",
                     "sunset": "condition", "approvedBy": "...", "at": "ISO-8601" } ]
}
```

### 5.4 Interfaces and behaviours

- Sibling documents cite red lines by their identifier (e.g. `RL-4`), so
  wording lives in exactly one place.
- The changelog and RSS feed carry assessments and any amendment to this
  document.

### 5.5 Lifecycle and operational rules

- Red lines are reviewed at fixed intervals by the governance body; absence of
  review does not suspend them.
- An amendment removing or weakening a red line requires the same
  supermajority and notice as a major specification change, per governance and
  stewardship.

## 6. Free floor, red lines, and invariants

This document *is* the red-line half of the core boundary. Together with the
free-floor covenant it states: the `+AI` meaning and the no-account path stay
free, and nothing built around them may sell legitimacy, rank, permission, or
responsibility itself. Every paid-service specification must demonstrate
compatibility with RL-1 through RL-9 before implementation.

## 7. Relationships to sibling specifications

- [Free-floor covenant](free-floor-covenant-dsh.md) is the positive half of
  the same boundary.
- [Governance and stewardship](governance-and-stewardship-dsh.md) owns the
  amendment and assessment process.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md)
  enforces violations found in public submissions.
- [Sponsorship policy](sponsorship-policy-dsh.md), [Membership
  model](membership-model-dsh.md), and every optional-service specification
  must demonstrate RL compatibility.
- [Public directory](public-directory-dsh.md) and [Theme gallery and community
  voting](theme-gallery-community-voting-dsh.md) implement the no-rank rule
  (RL-9) in their surfaces.
- [Privacy-respecting analytics](privacy-respecting-analytics-dsh.md) and
  [Experiments and metrics](experiments-and-metrics-dsh.md) implement the
  no-fingerprinting and no-inference rules.
- [Agentic accountability](agentic-accountability-dsh.md) is the bounded,
  future-only response to RL-7 and RL-8 for delegated agents.
- [Independent assurance and certification](independent-assurance-and-certification-dsh.md)
  must not redefine ordinary `+AI` as inferior to a paid credential (RL-1).

## 8. Resolution of the seed's "before implementation" concerns

The seed's concerns are the rejection list itself; this specification promotes
each into a numbered red line (RL-1 to RL-9, section 5.2) with stable wording
and identifiers, and adds the assessment process (items 10-11) so watchlist
items cannot be slipped in by default. The remaining watchlist items from the
seed — automated AI-use inference, hosted mail, vendor sponsorship, identity
integrations, blockchain anchoring — are recorded in the watchlist with the
governed assessment path.

## 9. Acceptance criteria

1. Every red line has a stable identifier and single canonical wording.
2. No shipped surface charges for use of the mark or requires an account.
3. No shipped surface sells placement or ranks people.
4. No shipped surface performs covert tracking, fingerprinting, or biometrics.
5. No shipped surface publishes in a person's name without that person's
   acceptance.
6. Every watchlist item has either an assessment or a recorded deferral.
7. Sibling specifications cite red lines by identifier rather than restating
   wording.
8. An amendment to this document appears in the changelog with its notice
   period.

## 10. Open questions

- The review interval for red lines (jointly with governance and stewardship).
- Whether the watchlist should be expanded as new capabilities appear (e.g.
  voice-cloning publication, autonomous deployment chains), and who proposes
  additions.
