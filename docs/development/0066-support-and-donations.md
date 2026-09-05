# Development task — support-and-donations: Support and Donations

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md)
> **Source:** spec [`support-and-donations-dsh.md`](../suggestions/support-and-donations-dsh.md) · seed [`support-and-donations.md`](../suggestions/support-and-donations.md)
> **Effort:** S · **Phase:** P2 · **Position:** the earliest money surface — its no-influence statements are load-bearing
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Single static support page: what stays free, what costs money, recipients, priorities, payment options, privacy/refund/tax/anonymity rules.
- **Why now / risk of deferring:** The earliest money surface (P2), whose no-influence statements are load-bearing — this page states the programme's core boundary first. Deferring it risks another funding surface opening before the free/paid split and no-influence rules are public (the programme's "Influence creep" risk).
- **Features to deliver:**
  - one static, versioned, mirrorable `site/support.html`
  - free-floor list (notation, canonical meaning, reviewed translations, no-account builder, portable formats, basic checking, governance record, correction/revocation) and the paid-services list (each linked)
  - the no-legitimacy/rank/permission statement
  - visible donation-vs-purchase distinction routed per the financial-transparency payment-recipient table
  - dated/versioned funding priorities linking the latest report + archive
  - one-time + recurring options (explicit consent, stated cadence/amount, cancellable anytime)
  - refund policy (donations discretionary, purchases per commercial terms)
  - honest tax-status statement
  - supporter-anonymity option linking the materiality threshold
  - non-financial-help route to the contribution ladder
  - the no-influence/no-evidence-status prohibition
- **Depends on:** free-floor-covenant, financial-transparency, governance-and-stewardship, privacy-and-data-minimisation

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Payment processor (third-party vs direct)
- **Question:** How are one-time and recurring payments collected?
- **Option (a):** third-party processor only — the page routes to a recognised processor, the project holds no card data, and recurring support is managed through the processor
  - **For:** spec §5.4 already assumes recurring support is managed through the processor with no project account, and a recognised processor keeps the page static and out of card-data scope (spec §5.2.1).
  - **Against:** outsources the money path to a third party, so the page still owes the §5.2.13 failure-mode statement if the processor stops; spec §10 leaves direct-vs-third-party undecided.
- **Option (b):** direct collection on project infrastructure now (triggers the hosted-component privacy analysis/threat model/failure-mode statement of §5.2.12–13)
  - **For:** the project keeps full control of the support relationship and any recurring-supporter record that spec §5.2.12–13 require it to analyse and protect anyway.
  - **Against:** triggers the hosted-component privacy analysis, threat model, and failure-mode statement (spec §5.2.12–13) and adds PCI/security scope the S-effort static page does not need; spec §5.4 says recurring support is managed through the processor, not a project account.
- **Option (c):** defer the choice until the custodian and payment-recipient structure exist
  - **For:** lets the page's routing match the settled financial-transparency payment-recipient table (spec §5.2.4) once the custodian and recipient structure exist.
  - **Against:** the page cannot offer the one-time + recurring options spec §5.2.6 requires until the choice is made, leaving the earliest money surface incomplete in P2.
- **Recommended:** (a) — spec §5.4 already assumes processor-managed recurring support with no project account; direct collection adds PCI/security scope the S-effort page does not need.
- **Your choice:** ✏️

### D2 — Refund window and donation refund posture
- **Question:** What refund rules apply to purchases vs donations?
- **Option (a):** donations discretionary/non-refundable (stated); purchases refundable within a published window (e.g. 14 days), marked pending legal review
  - **For:** spec §5.2.7 requires donations (discretionary) and purchases (per commercial terms) to be treated separately, and a provisional purchase window keeps the page honest while §10 leaves the exact number to legal review.
  - **Against:** the 14-day figure is provisional and unconfirmed — spec §10 leaves the exact window pending legal review, so it may need a versioned revision later.
- **Option (b):** donations and purchases both refundable within one shared window
  - **For:** a single shared window is simpler to state and administer on the page.
  - **Against:** contradicts spec §5.2.7's requirement to treat donations and purchases separately, and risks conflating the two (the "donations and purchases never conflated" must-not).
- **Option (c):** defer all specifics until legal review, publishing only "refunds per commercial terms"
  - **For:** avoids stating any number before legal review, matching spec §10's "pending legal review".
  - **Against:** leaves the page without the separate donation/purchase refund treatment spec §5.2.7 requires to be stated, so the page is less honest and complete in P2.
- **Recommended:** (a) — spec §5.2.7 requires the two to be treated separately; a provisional purchase window keeps the page honest while §10 leaves the exact number to legal review.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy).
2. Create `site/support.html` as a static, file://-safe, mirrorable, versioned page with every material change announced in the changelog.
3. State in plain language what remains free (notation, canonical meaning, reviewed translations, no-account builder, portable formats, basic checking, governance record, correction and revocation — as enumerated by the free-floor covenant) and what costs money (each optional paid service, linked).
4. State that giving buys convenience, scale, support, or operations — never legitimacy, rank, or permission — and state the no-influence prohibition (no supporter receives directory placement/rank, evidence labels or verification status, moderation priority, specification influence, or decision rights).
5. Distinguish donations from purchases in visible text and route each per the financial-transparency payment-recipient table.
6. List the current funding priorities as a dated, versioned list updated with each financial report, and link the latest report and its archive.
7. Offer one-time and recurring options per D1; recurring requires explicit consent at sign-up, states renewal cadence and amount, and is cancellable at any time without penalty.
8. Publish the refund policy (donations vs purchases per D2) and the honest tax-status statement (recipient entity, public-benefit or commercial status, deductibility depends on the supporter's jurisdiction, no tax advice).
9. State the supporter-anonymity option and link the financial-transparency materiality threshold; anonymity is available to small donors and never conceals a funder above the threshold.
10. Offer a non-financial-help route that links the contribution ladder rather than duplicating it.
11. If a recurring-supporter record is held anywhere, note (do not build) the privacy analysis, threat model, and failure-mode statement obligations of §5.2.12–13; the no-account path never touches this page to use the mark.
12. Give the page a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order `?lang=` → saved preference → browser `Accept-Language` → English R12, English crawler/no-JS default R13; the page is T2).
13. Self-check against §5: walk the acceptance criteria and confirm each holds.

## 4. Constraints (must-nots)
- Giving never buys legitimacy, rank, or permission (payment buys convenience, scale, support, or managed operations only).
- No supporter receives directory rank, evidence labels, or decision rights.
- Donations and purchases never conflated.
- Anonymity is available to small donors and never conceals a funder above the materiality threshold.
- The page never requires an account to use the mark; the no-account path never depends on this page.
- The page follows the multi-language standard (R1/R4/R12/R13; T2).

## 5. Acceptance criteria
- [ ] The support page is static, mirrorable, and versioned.
- [ ] The page states what remains free, what costs money, and that giving buys no legitimacy, rank, or permission.
- [ ] Donations and purchases are visibly distinguished and routed per the payment-recipient table.
- [ ] One-time and recurring options exist; recurring is cancellable at any time without penalty.
- [ ] The refund policy and tax-status statement are published and honest.
- [ ] Anonymity is offered to small donors and never conceals a material funder.
- [ ] The page links the latest financial report and its archive.
- [ ] No supporter receives directory rank, evidence labels, or decision rights.
- [ ] Any supporter-record component would carry a published privacy analysis, threat model, and failure-mode statement.

## 6. Outputs to produce in the repository
- `site/support.html` — the static support page (free-floor list, donation-vs-purchase routing, priorities, refund/tax/anonymity/no-influence statements, non-financial-help route).

## 7. Read before building
- [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md) — mini-plan
- [`support-and-donations-dsh.md`](../suggestions/support-and-donations-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../planning/digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; page T2, chrome R1/R4/R12/R13)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
