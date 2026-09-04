# Governance and Stewardship — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`governance-and-stewardship.md`](governance-and-stewardship.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines how the +AI project moves deliberately from founder-led work, through possible fiscal sponsorship, to a mission-locked custodian with community process and optional service providers whose responsibilities are separated. It establishes decision rights, specification-change discipline, succession, conflict handling, and funding-influence controls so that custody of the meaning and the commons is durable and accountable.

## 2. Placement and boundaries
Governance is the owner of process, not of meaning: it may change how decisions are made, but the normative meaning remains subject to the specification-change rules this document sets out and the versioning rules owned by specification versioning and hashing. This document frames the Free-Floor Covenant and the mark policy as protected instruments, and hands their detailed content to their own siblings. It does not itself operate the registry or the services; those responsibilities are separated (see 5.2) and their policies live in the registry, moderation, and service siblings.

## 3. Terminology
- **Steward** — the current named custodian of the project's continuity (domain, keys, records, archives).
- **Custodian** — the eventual mission-locked body that holds continuity responsibilities.
- **Specification authority** — the body with the sole right to approve normative-meaning changes.
- **Registry operator** — the party that runs the opt-in public record.
- **Service provider** — any party operating optional paid services.
- **Fiscal sponsor** — a public-benefit host that receives and disburses funds.
- **Recusal** — a decision-maker standing down from a specific decision due to a conflict.

## 4. Scope
### 4.1 In scope
- The governance ladder and transition triggers.
- Decision rights and the specification-change process.
- Succession and the role of JAPER Technology.
- Conflict, recusal, appeal, and funding-influence rules.
- High-level registry policy authority.

### 4.2 Out of scope and deferred
- The registry's operational moderation and dispute detail (deferred to the registry and moderation siblings).
- The free-floor items and licence texts (deferred to free-floor covenant and licensing and mark policy).
- Financial reporting mechanics (deferred to financial transparency).
- Key custody and wind-down mechanics (deferred to continuity and namespace custody).

## 5. Specification
### 5.1 Design goals and principles
Separate responsibilities so no single party controls meaning, record-keeping, and revenue at once. Move in deliberate phases, each only after the prior phase's obligations are met. Keep the founder's role honest — visible and credited, but not treated as an unstated veto. Make every governance change versioned and visible.

### 5.2 Normative requirements
1. The project MUST document its current legal home and the named maintainer roles at all times; until a custodian exists, the About page MUST state that governance is founder-led and not present a future structure as already established.
2. Governance MUST evolve through explicit phases — founder-led, fiscal-sponsor-hosted, mission-locked custodian — and MAY NOT claim a later phase before completing its transition checklist, which MUST be published.
3. Decision rights MUST be recorded in a published matrix separating at least: specification changes, free-floor amendments, mark-policy changes, registry policy, service-provider approval, and financial decisions, each with its named authority.
4. The specification authority MUST be the only body able to approve a normative-meaning change; service providers, sponsors, and members MUST NOT hold that right, directly or indirectly.
5. Specification changes MUST follow a versioned process: proposal, public discussion, recorded decision, publication with a changelog entry, and no retroactive rewriting of prior versions.
6. Succession MUST be defined in advance: a named successor or selection procedure, a transfer checklist covering domain, keys, records, archives, and accounts, and the notice and final-export obligations owned by continuity and namespace custody.
7. The role of JAPER Technology MUST be stated explicitly: as the founder's company and, unless separately agreed, a service provider or host — never an unstated owner of the meaning or an automatic custodian. Any such relationship MUST be disclosed in the About page and the financial transparency report.
8. Decision-makers MUST declare material conflicts and MUST recuse themselves from decisions where a conflict exists; recusals and declared conflicts MUST be recorded in the public governance record.
9. There MUST be a published appeals route for governance decisions, with a named reviewer who was not the original decision-maker and a stated response expectation.
10. Funding influence MUST be contained: no funder, sponsor, or member contribution MAY buy decision rights, specification access, registry placement, or the outcome of a dispute; this rule MUST be restated in the sponsorship and membership siblings.
11. Registry policy authority MUST be held by the specification authority or a body it delegates to, and MUST be subject to the same versioning and appeals rules; the registry operator executes policy, it does not set it.
12. Every governance decision affecting the specification, the floor, or the marks MUST be published in the changelog and archived so it is visible and challengeable after the fact.
13. Notice periods MUST be published as part of the specification-change process and MUST be: at least 90 days of public consultation for substantive specification changes; at least 180 days of notice for narrowing the free floor; and immediate (with a changelog entry) for corrections that change no meaning. The free-floor covenant defers to these numbers.

### 5.3 Data model
A published governance record lists, in dated entries: the current phase, the decision-rights matrix, named roles and their holders, declared conflicts and recusals, and decisions with their rationale. It is versioned and archived like any other record of the commons.

### 5.4 Interfaces and behaviours
The Governance destination in shared project navigation MUST link to the governance record, the decision-rights matrix, and the appeals route. The About page MUST show the current phase and the named roles without implying a phase not yet reached.

### 5.5 Lifecycle and operational rules
Phase transitions are versioned events: they require the prior phase's checklist to be complete, public notice, and a changelog entry. A custodian that ceases to act triggers succession and, failing that, the wind-down path in continuity and namespace custody.

## 6. Free floor, red lines, and invariants
Governance is the mechanism that keeps the free floor and red lines in force, so this document MUST bind every future phase to them: no governance change MAY make the meaning or the no-account path paid, require identity, or transfer responsibility to an AI. Funding-influence containment (5.2 item 10) is the operational expression of the red line against paid placement and rank. The mission-lock is the durable form of invariant 1: the custodian's purpose is to protect free use, not to monetise permission.

## 7. Relationships to sibling specifications
- [Free-Floor Covenant](free-floor-covenant-dsh.md) — a protected instrument whose amendment this document governs.
- [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md) — licence and mark changes follow this document's change process.
- [Financial Transparency](financial-transparency-dsh.md) — discloses the funder relationships this document must contain.
- [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md) — owns succession mechanics and wind-down execution.
- [About the Project](about-project-dsh.md) — presents the current phase and named roles accurately.
- [Founder Story](founder-story-dsh.md) — makes the founder's role visible without implying veto.
- [Sponsorship Policy](sponsorship-policy-dsh.md) and [Membership Model](membership-model-dsh.md) — restate the no-influence rule for their domains.
- [Opt-In Signatory Registry](opt-in-signatory-registry-dsh.md) — policy authority sits here; execution sits there.
- [Moderation, Disputes, and Appeals](moderation-disputes-and-appeals-dsh.md) — operational appeals this document's appeals route feeds.
- [Changelog and RSS](changelog-and-rss-dsh.md) — the publication channel for governance decisions.

## 8. Resolution of the seed's "before implementation" concerns
- **Decision rights** — resolved in 5.2 items 3–4 and 5.3: a published matrix with separated authorities.
- **Specification changes** — resolved in 5.2 items 4–5: versioned, discussed, recorded, non-retroactive.
- **Succession** — resolved in 5.2 item 6: defined in advance with a transfer checklist.
- **Conflicts** — resolved in 5.2 item 8: declared, with recusal recorded.
- **Recusals** — resolved in 5.2 item 8: standing down from conflicted decisions, recorded publicly.
- **Appeals** — resolved in 5.2 item 9: published route, independent reviewer, response expectation.
- **Funding influence** — resolved in 5.2 item 10 and section 6: no contribution buys rights or outcomes.
- **Registry policy** — resolved in 5.2 item 11: authority separated from operation, versioned and appealable.
- **The role of JAPER Technology** — resolved in 5.2 item 7: explicit, disclosed, never an unstated owner.

## 9. Acceptance criteria
1. The current legal home and named roles are published and accurate.
2. The governance phases and transition checklists are published.
3. A decision-rights matrix names the authority for each decision class.
4. Only the specification authority can approve normative-meaning changes.
5. A succession plan and transfer checklist exist before any transition is needed.
6. JAPER Technology's role is stated and disclosed in About and financial reports.
7. Conflicts are declared and recusals recorded in the governance record.
8. An appeals route with an independent reviewer is published.
9. Funding-influence containment is restated in sponsorship and membership policies.
10. Every governed decision appears in the changelog and is archived.

## 10. Open questions
- The trigger criteria for moving from founder-led to fiscal sponsorship, and from there to a mission-locked custodian, are undecided.
- Whether the specification authority is a named individual, a committee, or a mixed body is undecided.
- The legal form of the eventual custodian (charity, trust, foundation) is undecided and requires legal review.
- Member ballots, if the membership model adopts them, are advisory only and never feed the specification authority's decision path.
