# Support and Donations — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`support-and-donations.md`](support-and-donations.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines the project's support page: a single, static, versioned route for giving financial and non-financial support that states plainly what stays free, what costs money, who receives funds, current priorities, the payment options, and the privacy, refund, tax, and anonymity rules that govern giving. It exists so that funding the project never becomes a purchase of legitimacy, rank, or evidence.

## 2. Placement and boundaries
Support is one route into the funding layer, and it reports to and is reported by [Financial Transparency](financial-transparency-dsh.md), which owns the payment-recipient mapping and the annual report this page must link. It does not itself set donation or sponsorship policy: [Sponsorship Policy](sponsorship-policy-dsh.md) owns named sponsorship, [Membership Model](membership-model-dsh.md) owns memberships, and [Grants and Public-Benefit Programmes](grants-and-public-benefit-programmes-dsh.md) owns grant seeking. It honours the [Free-Floor Covenant](free-floor-covenant-dsh.md) by stating what remains free, and the [Red Lines](red-lines-and-cautious-extensions-dsh.md) by forbidding any link between giving and legitimacy, rank, or evidence status.

## 3. Terminology
- **Donation** — a gift given without expectation of a benefit in return, routed to the public-benefit host or custodian.
- **Purchase** — a commercial transaction for a defined good or service, routed to the entity that may lawfully accept commercial income.
- **Supporter** — a person or organisation giving financial support.
- **Supporter anonymity** — the option to give without being individually disclosed, subject to the financial-transparency materiality threshold.
- **Recurring support** — a repeating payment the supporter may cancel at any time.

## 4. Scope
### 4.1 In scope
- The support page's required content and its static, versioned publication.
- The donation/purchase distinction and the option set (one-time, recurring).
- Privacy, anonymity, refund, and tax-status disclosure rules.
- Non-financial help routing.
- The no-influence and no-evidence-status rules.

### 4.2 Out of scope and deferred
- The payment-recipient mapping and annual financial report (financial transparency).
- Sponsorship acceptance and recognition (sponsorship policy).
- Membership tiers and benefits (membership model).
- Grant programmes and fee waivers (grants and public-benefit programmes).

## 5. Specification
### 5.1 Design goals and principles
Giving must be transparent, optional, and free of any promise that would corrupt the mark: a supporter buys nothing about legitimacy, rank, or evidence. The page must be self-contained and static, and it must remain honest about tax status and about what a gift funds.

### 5.2 Normative requirements
1. The project MUST publish a single support page that is static, file://-safe, mirrorable, and versioned, with every material change announced in the changelog.
2. The page MUST state, in plain language, what remains free — the notation, the canonical meaning, reviewed translations, the no-account builder, portable formats, basic checking, the governance record, and correction and revocation, as enumerated by the free-floor covenant — and what costs money (the optional paid services, each linked).
3. The page MUST state that giving buys convenience, scale, support, or operations — never legitimacy, rank, or permission — and MUST NOT imply otherwise anywhere.
4. The page MUST distinguish donations from purchases in visible text, and MUST route each to the payment recipient defined by financial transparency's payment-recipient table.
5. The page MUST list the current funding priorities as a dated, versioned list, updated with each financial report, and MUST link the latest report and its archive.
6. The page MUST offer at least one-time and recurring options; recurring support MUST require explicit consent at sign-up, MUST state the renewal cadence and amount, and MUST be cancellable at any time without penalty.
7. The page MUST publish a refund policy that states separately how donations (discretionary) and purchases (per commercial terms) are treated, and MUST NOT imply a donation is a purchase or vice versa.
8. The page MUST state its tax status honestly: the recipient entity, its public-benefit or commercial status, that tax deductibility depends on the supporter's jurisdiction, and that the project gives no tax advice.
9. The page MUST state the supporter-anonymity option and MUST link the financial-transparency privacy threshold; anonymity MUST be available to small donors, and MUST NOT conceal a funder whose contribution exceeds the materiality threshold.
10. The page MUST offer a non-financial-help route that links the contribution ladder rather than duplicating it.
11. The page MUST NOT promise, imply, or deliver to any supporter: directory placement or rank, evidence labels or verification status, moderation priority, specification influence, or decision rights; this MUST be stated on the page.
12. Any hosted component that manages recurring supporters or donation records MUST complete the privacy analysis and threat model required by [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md) and [Security and Abuse Controls](security-and-abuse-controls-dsh.md) before launch.
13. Any recurring-supporter component MUST publish the failure-mode statement required by [Static-First Service Architecture](static-first-service-architecture-dsh.md): if the processor or component stops, the support page remains readable, no public record is gated on giving, supporter data is exported on request, and the shutdown notice period is stated.

### 5.3 Data model
A recurring supporter record, held only where recurring support is collected, contains at minimum: `supporterId`, contact for receipts, chosen anonymity level, current payment status, and a pointer to the payment processor — and nothing more. The support page carries a dated manifest: `priorities`, `options`, `refundPolicyVersion`, `taxStatusStatement`, and `recipientMapping` (a link, not a copy). All amounts and funder disclosures live in the financial-transparency report, not here.

### 5.4 Interfaces and behaviours
The page renders as a static view linked from the shared navigation's Support destination. Recurring support is managed through the processor, never by requiring an account on the project itself. The no-account path never touches this page in order to use the mark.

### 5.5 Lifecycle and operational rules
Priorities and policies change as versioned edits announced in the changelog. A supporter who stops giving loses no free-floor capability and no record of their own; a donor relationship ending never alters any declaration or listing.

## 6. Free floor, red lines, and invariants
This specification restates the first global invariant: the +AI meaning and the no-account path stay free, and this page is where that is said publicly. It enforces RL-1 (no payment for use) and RL-4 (no paid placement) by forbidding any link between giving and legitimacy, rank, or evidence, and RL-5 by making the page free of covert tracking and anonymous-friendly. Giving funds the floor; it never buys a place above it.

## 7. Relationships to sibling specifications
- [Free-Floor Covenant](free-floor-covenant-dsh.md) — supplies the free-floor list this page must state.
- [Financial Transparency](financial-transparency-dsh.md) — owns the payment-recipient table, the report, and the anonymity threshold this page links.
- [Governance and Stewardship](governance-and-stewardship-dsh.md) — owns the no-influence rule this page must restate.
- [Sponsorship Policy](sponsorship-policy-dsh.md) — owns named sponsorship, which this page must not conflate with donations.
- [Membership Model](membership-model-dsh.md) — owns memberships, a distinct option this page may link but not define.
- [Contribution Ladder](contribution-ladder-dsh.md) — the non-financial-help route.
- [Static-First Service Architecture](static-first-service-architecture-dsh.md) — the static publication and failure-mode rules.
- [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md) and [Security and Abuse Controls](security-and-abuse-controls-dsh.md) — the analysis obligations for any supporter-record component.

## 8. Resolution of the seed's "before implementation" concerns
- **Use a legally suitable recipient** — 5.2 items 4 and 8: donation/purchase routing follows financial transparency's payment-recipient table, and the recipient entity is stated.
- **Distinguish donations from purchases** — 5.2 items 4 and 7 and section 3: separate definitions, routing, and refund treatment.
- **Publish financial reports** — 5.2 item 5: the page links the report and archive, owned by financial transparency.
- **Ensure support buys no influence or evidence status** — 5.2 items 3 and 11 and section 6: an explicit on-page prohibition, restating governance's funding-influence rule.

## 9. Acceptance criteria
1. The support page is static, mirrorable, and versioned.
2. The page states what remains free, what costs money, and that giving buys no legitimacy, rank, or permission.
3. Donations and purchases are visibly distinguished and routed per the payment-recipient table.
4. One-time and recurring options exist; recurring is cancellable at any time without penalty.
5. The refund policy and tax-status statement are published and honest.
6. Anonymity is offered to small donors and never conceals a material funder.
7. The page links the latest financial report and its archive.
8. No supporter receives directory rank, evidence labels, or decision rights.
9. Any supporter-record component has a published privacy analysis, threat model, and failure-mode statement.

## 10. Open questions
- Whether recurring support is collected directly or only through a third-party processor is undecided.
- The specific refund window for purchases is undecided pending legal review.
