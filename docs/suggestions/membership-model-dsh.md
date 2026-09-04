# Membership Model — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`membership-model.md`](membership-model.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines an optional individual and organisation membership programme that funds a future custodian, working groups, and community activity, while use of the mark, the free floor, and participation remain available to everyone without membership. It exists to make membership a sustainable funding route that can never become a gate, a rank, or a lever on the specification.

## 2. Placement and boundaries
Membership is one funding route among several, constrained from three sides: [Free-Floor Covenant](free-floor-covenant-dsh.md) (membership never gates the mark or the no-account path), [Governance and Stewardship](governance-and-stewardship-dsh.md) (membership never confers decision rights), and [Red Lines and Cautious Extensions](red-lines-and-cautious-extensions-dsh.md) (no rank, no paid placement, no reputation). It reports as an income category to [Financial Transparency](financial-transparency-dsh.md) and offers participation routes through [Community Hub](community-hub-dsh.md) and [Contribution Ladder](contribution-ladder-dsh.md).

## 3. Terminology
- **Member** — a person or organisation in the membership programme.
- **Tier** — a named, priced level of membership with a fixed benefit set.
- **Benefit** — a defined, bounded thing a member receives; never legitimacy, rank, or permission.
- **Voting cap** — a limit on how much voting weight any single member may hold.
- **Community seat** — a reserved, non-member-held position in a working group.
- **Fee waiver / sponsored seat** — a membership granted without payment, for affordability or public benefit.

## 4. Scope
### 4.1 In scope
- Membership classes, tiers, and benefits.
- Affordability and sponsored options.
- Voting caps and community seats.
- Conflict controls, cancellation, and non-member rights.
- Financial reporting linkage.

### 4.2 Out of scope and deferred
- Decision rights and the decision-rights matrix (governance and stewardship).
- Working-group operation (governance and stewardship; community hub).
- Financial report mechanics (financial transparency).
- Grants and fee waivers for public-benefit work (grants and public-benefit programmes).

## 5. Specification
### 5.1 Design goals and principles
Membership widens participation and funds the custodian without narrowing anyone's rights. Every benefit must be checkable as a convenience, never as a position of advantage over the meaning or over other people.

### 5.2 Normative requirements
1. Membership MUST be optional; using the mark, issuing a declaration, the free floor, and participation MUST remain available without membership, and this MUST be stated at every join point.
2. Membership MUST NOT confer legitimacy, rank, or permission; no member MAY receive directory placement, evidence labels, verification priority, or moderation priority by virtue of membership.
3. The programme MUST define at least individual and organisation classes; organisation membership MUST NOT confer rights over any individual's declarations, and individuals remain human signers regardless of their organisation's membership.
4. Benefits MUST be published and bounded per tier, and MUST be conveniences only — for example newsletters, working-group participation, event access, or early notice of public changes — never control of meaning, data access, or advantage over non-members.
5. Affordable and sponsored options MUST exist: at least one low-cost tier, and a fee-waiver or sponsored-seat route that defers eligibility to grants and public-benefit programmes; price MUST NOT be a proxy for influence.
6. Voting caps MUST apply: any member ballot is capped at one vote per individual member and one vote per organisation, with no vote weighting by contribution size, and member votes MUST NOT extend to specification or free-floor changes, which remain with the specification authority; member ballots are advisory only and never feed the specification authority's decision path (see governance and stewardship).
7. Community seats MUST be reserved: any member-funded working group MUST include seats held by non-members selected through the contribution ladder or community hub, so member funding cannot capture the room.
8. Conflict controls MUST apply: members who are also decision-makers, funders, or service providers MUST declare conflicts and recuse per governance and stewardship, and membership MUST NOT create new decision rights for anyone.
9. Cancellation MUST be free and immediate, with no penalty and no effect on any record the member already holds; a lapsed membership MUST NOT revoke, hide, or downgrade any declaration, listing, or free-floor capability.
10. Financial reporting MUST treat membership as a disclosed income category in the financial-transparency report, aggregated with the same privacy threshold as donations.
11. Non-member rights MUST be enumerated publicly: non-members retain the full free floor, declaration issuance, directory inclusion, correction and revocation, and participation; the enumeration MUST state that nothing on the list requires membership.
12. Any hosted membership system MUST complete the privacy analysis and threat model of [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md) and [Security and Abuse Controls](security-and-abuse-controls-dsh.md), and MUST publish the static-first failure-mode statement: if the membership system stops, the free floor and all records remain, members export their own data, and the shutdown notice period is stated.

### 5.3 Data model
A membership record: `{ memberId, class (individual | organisation), tier, status (active | lapsed | sponsored), sponsoredBy (optional), joinedAt, renewalAt }`. Benefit definitions live in the published tier table, not per member. Voting and community-seat rules are process rules owned here but executed by governance and the community hub.

### 5.4 Interfaces and behaviours
Join and cancel are self-service and no-penalty. The join flow MUST render the non-member-rights list and the free-floor statement before any payment. Membership status is never shown in directory rows or evidence surfaces.

### 5.5 Lifecycle and operational rules
Membership lapses on non-renewal with no consequence to records. Tier changes are versioned and announced. A member may be removed for abuse through the moderation process, never for non-payment of influence.

## 6. Free floor, red lines, and invariants
Membership is a convenience layer over a floor it cannot touch: the +AI meaning and the no-account path stay free, and membership buys none of legitimacy, rank, or permission. This specification implements RL-1 (no payment for use), RL-2 (no mandatory registration — membership is optional), RL-4 and RL-9 (no rank or placement), and governance's no-influence rule through voting caps, community seats, and non-member rights.

## 7. Relationships to sibling specifications
- [Free-Floor Covenant](free-floor-covenant-dsh.md) — the floor membership must never gate.
- [Governance and Stewardship](governance-and-stewardship-dsh.md) — owns decision rights, conflict/recusal, and the no-influence rule restated here.
- [Financial Transparency](financial-transparency-dsh.md) — reports membership as an income category.
- [Community Hub](community-hub-dsh.md) and [Contribution Ladder](contribution-ladder-dsh.md) — the participation routes members and non-members share.
- [Grants and Public-Benefit Programmes](grants-and-public-benefit-programmes-dsh.md) — owns fee waivers and sponsored seats.
- [Red Lines and Cautious Extensions](red-lines-and-cautious-extensions-dsh.md) — the no-rank and no-reputation rules.
- [Static-First Service Architecture](static-first-service-architecture-dsh.md), [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md), and [Security and Abuse Controls](security-and-abuse-controls-dsh.md) — the failure-mode and analysis obligations.

## 8. Resolution of the seed's "before implementation" concerns
- **Affordable and sponsored options** — 5.2 item 5.
- **Benefits** — 5.2 item 4.
- **Voting caps** — 5.2 item 6.
- **Community seats** — 5.2 item 7.
- **Conflict controls** — 5.2 item 8.
- **Cancellation** — 5.2 item 9.
- **Financial reporting** — 5.2 item 10.
- **Non-member rights** — 5.2 item 11.

## 9. Acceptance criteria
1. The mark, declarations, free floor, and participation are fully usable with no membership.
2. No member receives directory placement, evidence labels, or moderation priority.
3. Individual and organisation classes exist, and organisation membership never controls an individual's declarations.
4. A low-cost tier and a sponsored-seat route exist.
5. No member ballot weighs votes by contribution, member votes never touch the specification or free floor, and member ballots are advisory only.
6. Member-funded working groups include non-member community seats.
7. Cancellation is free, immediate, and leaves all records intact.
8. Membership is disclosed as an income category with the donations privacy threshold.
9. Non-member rights are enumerated and confirmed end-to-end.
10. The membership system has a published privacy analysis, threat model, and failure-mode statement.

## 10. Open questions
- The specific tiers, prices, and benefit sets are undecided and require cost-discipline input.
- Whether membership should exist before a custodian exists, or only after, is undecided.
