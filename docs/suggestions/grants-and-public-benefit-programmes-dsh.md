# Grants and Public-Benefit Programmes — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`grants-and-public-benefit-programmes.md`](grants-and-public-benefit-programmes.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines how the project seeks and holds grants for open deliverables — translation quality, accessibility, AI literacy, provenance, open tooling, research, and archiving — and how it runs public-benefit programmes (stipends, clinics, fee waivers) for schools, libraries, media, nonprofits, civil society, and under-resourced communities. It exists so that outside money funds open public goods without buying control, data, or silence.

## 2. Placement and boundaries
Grant seeking is a funding activity whose disclosure is owned by [Financial Transparency](financial-transparency-dsh.md) (funded deliverables) and whose conflict screening is owned by [Governance and Stewardship](governance-and-stewardship-dsh.md) and [Red Lines and Cautious Extensions](red-lines-and-cautious-extensions-dsh.md). Output licensing is owned by [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md). It complements but does not replace [Training, consulting, and pilots](training-consulting-and-pilots-dsh.md), which sells engagements, and [Membership Model](membership-model-dsh.md), which holds sponsored seats.

## 3. Terminology
- **Grant** — restricted funding for a named open deliverable, accepted under published terms.
- **Funder** — the grant-making organisation or individual.
- **Deliverable** — the open output the grant pays for (translation, accessibility audit, tool, research, archive).
- **Mission-conflict screen** — the published rubric used to accept or decline a funder.
- **Stipend** — a payment to an individual for named open work.
- **Clinic** — a free, bounded help session for a public-benefit audience.
- **Fee waiver** — a sponsored membership or service granted without payment.

## 4. Scope
### 4.1 In scope
- Grant acceptance, terms publication, and funder screening.
- Open-output rules and the "where safe" boundary.
- Public-benefit programmes: stipends, clinics, fee waivers.
- Beneficiary classes and their access.

### 4.2 Out of scope and deferred
- Funded-deliverable disclosure mechanics (financial transparency).
- Paid consulting and training engagements (training, consulting, and pilots).
- Fee-waiver eligibility detail (membership model).
- Output licensing (licensing and mark policy).

## 5. Specification
### 5.1 Design goals and principles
Grants buy open deliverables, never influence. Every deliverable must land in the commons under a free licence, and every funder must pass a published mission-conflict screen before acceptance. Public-benefit programmes lower the cost of participation without creating a credential or a rank.

### 5.2 Normative requirements
1. The project MUST publish, for every accepted grant, the grant terms (where the funder permits), the deliverable, the funder, the amount band, and completion status, per financial transparency's funded-deliverable rule.
2. The project MUST screen every funder against a published mission-conflict rubric before acceptance, and MUST decline, or record a waiver-with-reason for, any funder that requires specification control, vendor preference, data access, category exclusivity, or suppression of findings.
3. Grant-funded outputs MUST be published under the licences required by licensing and mark policy, and MUST be file://-safe and mirrorable; the default is open, and closure is permitted only for a stated safety, privacy, or legal reason — never for commercial advantage.
4. Grants MUST fund named open deliverables only; the project MUST NOT accept a grant for the normative specification, the mark's meaning, directory rank, evidence, or undifferentiated control.
5. No funder MAY receive decision rights, directory placement, evidence labels, or user-data access by virtue of a grant; grants confer no governance, and payment buys none of legitimacy, rank, or permission.
6. Stipends MUST be granted for named open work through a published, conflict-checked process, and MUST NOT be framed as certification or rank; recipients remain responsible human signers of their own work.
7. Clinics MUST be free to the beneficiary, bounded in scope and duration, and MUST NOT create an obligation, a paid upgrade path, or a dependency on the project's founder or staff.
8. Fee waivers MUST be routed through the membership model's sponsored-seat route and MUST be granted on public-benefit grounds, never on influence.
9. Beneficiary classes — schools, libraries, media, nonprofits, civil society, under-resourced communities — MUST be served without requiring them to become members, disclose data, or cede any right.
10. Grant programmes and stipends MUST NOT gather beneficiary personal data beyond what delivery requires; any applicant record MUST be covered by the privacy analysis and threat model of [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md) and [Security and Abuse Controls](security-and-abuse-controls-dsh.md).
11. Any hosted grants-management component MUST publish the static-first failure-mode statement: if it stops, published open deliverables remain, no free-floor feature was grant-gated, and the shutdown notice period is stated.
12. A grant ending MUST NOT remove or close a deliverable that was published open; the deliverable remains in the commons under its licence.

### 5.3 Data model
A public-benefit programme record: `{ programmeId, kind (grant | stipend | clinic | fee-waiver), funder (optional for clinics and waivers), deliverable, beneficiaries, amountBand, termsRef, screeningRef, status (proposed | active | completed | declined), openOutputs }`. Financial disclosure copies live in the financial-transparency report.

### 5.4 Interfaces and behaviours
Programme and grant records render as static pages linked from the changelog and the support page. Every published deliverable links its grant terms and screening outcome, so readers can see what was paid for and under what conditions.

### 5.5 Lifecycle and operational rules
Grants are proposed, screened, accepted, delivered, and closed-out with a written record. A declined funder is recorded with the reason category, and a completed deliverable is never closed or paywalled later.

## 6. Free floor, red lines, and invariants
Grant money never touches the floor's freedom: the meaning and the no-account path stay free, and no funder buys legitimacy, rank, or permission. This specification implements RL-1 (no payment for use), RL-4 (no paid placement), RL-5 (no funder data access), and governance's no-influence rule by screening funders and licensing outputs open, and it honours the static-first invariant by making every deliverable a commons artifact.

## 7. Relationships to sibling specifications
- [Financial Transparency](financial-transparency-dsh.md) — owns funded-deliverable and funder disclosure.
- [Governance and Stewardship](governance-and-stewardship-dsh.md) — owns conflict screening and recusal.
- [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md) — owns the open licences for outputs.
- [Red Lines and Cautious Extensions](red-lines-and-cautious-extensions-dsh.md) — the no-influence and no-rank rules.
- [Free-Floor Covenant](free-floor-covenant-dsh.md) — the floor grants fund but never gate.
- [Membership Model](membership-model-dsh.md) — owns the sponsored-seat route for fee waivers.
- [Training, consulting, and pilots](training-consulting-and-pilots-dsh.md) — the paid-engagement sibling clinics must not become.
- [Pilots and Case Studies](pilots-and-case-studies-dsh.md) — open deliverables may include reusable pilot outputs.
- [Static-First Service Architecture](static-first-service-architecture-dsh.md), [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md), and [Security and Abuse Controls](security-and-abuse-controls-dsh.md) — the failure-mode and analysis obligations.

## 8. Resolution of the seed's "before implementation" concerns
- **Publish grant terms and deliverables** — 5.2 item 1.
- **Screen funders for mission conflicts** — 5.2 item 2.
- **Keep outputs open where safe** — 5.2 item 3.
- **Consider stipends, clinics, and fee waivers** — 5.2 items 6, 7, and 8.

## 9. Acceptance criteria
1. Every accepted grant has published terms, deliverable, funder, amount band, and status.
2. Every funder passes a published mission-conflict screen, or is declined with a recorded reason.
3. Every grant-funded output is published under a free licence and is mirrorable.
4. No grant funds the specification, the mark's meaning, rank, or evidence.
5. No funder gains decision rights, placement, evidence labels, or data access.
6. A stipend is granted for named open work and is never framed as certification.
7. A clinic is free, bounded, and creates no obligation or upgrade path.
8. A fee waiver routes through the sponsored-seat route on public-benefit grounds.
9. A completed open deliverable is never later closed or paywalled.
10. Any grants-management component has a published privacy analysis, threat model, and failure-mode statement.

## 10. Open questions
- The exact mission-conflict rubric wording is undecided pending governance input.
- Whether clinic capacity should be scheduled per region or per sector, pending demand data.
