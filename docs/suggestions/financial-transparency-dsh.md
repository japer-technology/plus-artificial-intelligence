# Financial Transparency — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`financial-transparency.md`](financial-transparency.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines what the +AI project discloses about money: operating costs, income categories, funders, material in-kind support, conflicts, funded deliverables, and public-good spending. It makes financial accountability an example of the project's own principle — a public, checkable claim, not a marketing promise.

## 2. Placement and boundaries
Transparency is the evidence layer for the Free-Floor Covenant and the governance containment rules: it publishes the facts that let anyone see whether funding actually buys nothing. It reports, it does not govern — who may receive funds and how conflicts are handled are set by governance and the funding siblings. The mechanical cost-per-record analysis lives in cost discipline; this document states what must be published about it.

## 3. Terminology
- **Reporting period** — the fixed interval covered by a financial report.
- **Materiality threshold** — the amount or proportion above which a funder or in-kind item must be individually disclosed.
- **Public-good spending** — spending on the free floor, translation, accessibility, archiving, and other open deliverables.
- **Funded deliverable** — a named piece of work paid for by a specific funder or grant.
- **Legally suitable recipient** — the entity that may lawfully receive a given payment kind (donation, sponsorship, membership, purchase).

## 4. Scope
### 4.1 In scope
- Report content, frequency, and responsibility.
- Funder, in-kind, and conflict disclosure with privacy thresholds.
- Accounting-standard choice.
- Mapping payment kinds to their recipient.

### 4.2 Out of scope and deferred
- Fundraising mechanics and donor UX (deferred to support and donations).
- Sponsorship acceptance rules (deferred to sponsorship policy).
- Grant seeking and deliverables (deferred to grants and public-benefit programmes).
- Per-record cost modelling (deferred to cost discipline).

## 5. Specification
### 5.1 Design goals and principles
Publish enough to verify no-influence, without publishing donor identities against their consent or exposing individual signers' data. Use standard accounting so the report is comparable. Disclose conflicts as facts, not judgments.

### 5.2 Normative requirements
1. The project MUST publish a financial report at least annually, with the reporting period, currency, and accounting basis stated; the steward MUST name who is responsible for the report.
2. The report MUST disclose operating costs by category, income by category, and the split of spending between public-good (free-floor) work and paid-service operations.
3. Funders whose contribution exceeds the materiality threshold MUST be disclosed by name or organisation, with the amount band and purpose; smaller contributions MAY be aggregated anonymously.
4. Material in-kind support MUST be disclosed with an estimated value and a note that the estimate is not audited.
5. Conflicts of interest MUST be disclosed: any decision-maker who is also a funder, service provider, or competitor, or who stands to benefit from a decision, MUST be named alongside the decision affected.
6. Funded deliverables MUST be disclosed: for each grant or significant sponsorship, the deliverable, funder, amount, and completion status MUST be published, and grant terms made available where the funder permits.
7. The report MUST state the accounting standard used (for example cash or accrual) and whether figures are audited, reviewed, or unaudited, without implying a level of assurance it does not have.
8. A privacy threshold MUST be fixed and published; it MUST protect small individual donors and supporter anonymity, and it MUST NOT be used to hide a funder whose influence the threshold would otherwise conceal — large funders cannot opt out of disclosure.
9. Each payment kind MUST be mapped to a legally suitable recipient in a published table: donations and memberships to the public-benefit host or custodian; sponsorships and purchases to the entity that can lawfully accept commercial income; the mapping MUST be reviewed with legal advice and updated when the structure changes.
10. The report MUST be published in the changelog and archived at a stable URL; prior reports MUST NOT be altered, and corrections MUST be published as dated errata.
11. The report MUST be produced from the same static-first publishing path as other commons documents, and MUST NOT depend on a live service to remain readable.

### 5.3 Data model
A financial report is a versioned document with: period, currency, accounting basis and standard, assurance level, cost and income categories, funder disclosures with amount bands, in-kind items, conflicts, funded deliverables, the payment-recipient table, and an errata pointer.

### 5.4 Interfaces and behaviours
The Governance and Support destinations in shared project navigation MUST link to the latest report and the archive of prior reports. Reports MUST be downloadable in a plain, mirrorable format.

### 5.5 Lifecycle and operational rules
Reports are published at the stated frequency, archived immutably, and corrected only by dated errata. A failure to publish on time MUST itself be disclosed in the changelog, treating silence as a transparency failure, not a neutral gap.

## 6. Free floor, red lines, and invariants
This document operationalises the red lines against paid placement and funding influence by making them observable. It MUST state that the free floor costs are met without any funder receiving legitimacy, rank, or permission in return, and that no disclosure requirement MAY compel a signer to reveal personal data or tools. Donor privacy is protected, but the protection MUST never hide the influence the transparency exists to reveal.

## 7. Relationships to sibling specifications
- [Governance and Stewardship](governance-and-stewardship-dsh.md) — owns the conflict and recusal rules this document evidences.
- [Free-Floor Covenant](free-floor-covenant-dsh.md) — the floor this document's public-good spending funds.
- [Support and Donations](support-and-donations-dsh.md) — routes the donations this document reports.
- [Sponsorship Policy](sponsorship-policy-dsh.md) — defines acceptable sponsorship this document discloses.
- [Grants and Public-Benefit Programmes](grants-and-public-benefit-programmes-dsh.md) — the funded deliverables this document publishes.
- [Membership Model](membership-model-dsh.md) — a reported income category.
- [Cost Discipline](cost-discipline-dsh.md) — produces the cost-per-record figures this document summarises.
- [Priority Review Services](priority-review-services-dsh.md) — a paid-service income category that must never alter substantive outcomes.

## 8. Resolution of the seed's "before implementation" concerns
- **Reporting frequency** — resolved in 5.2 item 1: at least annually, with the period stated.
- **Responsibility** — resolved in 5.2 item 1: a named steward is responsible for the report.
- **Privacy thresholds** — resolved in 5.2 items 3 and 8: fixed, published, protecting small donors only.
- **Accounting standards** — resolved in 5.2 item 7: a named standard and assurance level, stated honestly.
- **A legally suitable recipient for each kind of payment** — resolved in 5.2 item 9: a published, legally-reviewed mapping table.

## 9. Acceptance criteria
1. A report is published at least annually with period, currency, and responsible party.
2. Costs and income are disclosed by category, split between public-good and paid-service work.
3. Funders above the threshold are named with amount band and purpose.
4. Material in-kind support is disclosed with estimated value and a non-audit note.
5. Conflicts are disclosed with the affected decisions named.
6. Funded deliverables carry funder, amount, and status.
7. The accounting standard and assurance level are stated honestly.
8. The privacy threshold protects small donors without concealing material influence.
9. The payment-recipient table maps each payment kind to a lawful recipient.
10. Prior reports are archived and corrected only by dated errata.

## 10. Open questions
- The exact materiality threshold and amount-band sizes are undecided.
- Whether to pursue an independent review or audit, and at what income level, is undecided.
- The accounting standard (cash versus accrual) is undecided until the recipient structure is fixed.
