# Development task — financial-transparency: Financial Transparency

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`financial-transparency-dsh.md`](../suggestions/financial-transparency-dsh.md) · seed [`financial-transparency.md`](../suggestions/financial-transparency.md)
> **Effort:** S · **Phase:** P1 · **Position:** P1 (first report after the launch campaign's money flows begin); template P0
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Disclosure of money: operating costs, income categories, funders, in-kind support, conflicts, funded deliverables, public-good vs paid-service split.
- **Why now / risk of deferring:** The report template is P0, with the first report P1 once the launch campaign's money flows begin (mini-plan Order). Risk: large funders hiding behind the privacy threshold — guarded by the "cannot opt out" rule (brainstorm open risks).
- **Features to deliver:**
  - An annual report template (`site/finances/` + latest report) with period, currency, accounting basis, responsible party.
  - Cost/income categories split public-good vs paid-service.
  - Funder disclosure above the materiality threshold (name + amount band + purpose).
  - In-kind disclosure with a non-audit note.
  - Conflicts + funded-deliverable disclosure.
  - A payment-recipient table.
  - The assurance level stated honestly.
  - A stable-URL archive with dated errata only.
- **Depends on:** governance-and-stewardship, cost-discipline (cost data), support-and-donations/sponsorship-policy/grants (income categories)

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Materiality threshold and amount bands
- **Question:** What materiality threshold and amount bands does the first report use?
- **Option (a):** a provisional threshold (e.g. 500 currency units or 1% of total, whichever is lower) with published amount bands, marked revisable — currency set with the accounting basis
  - **For:** Spec §5.2.3 and §5.2.8 require a fixed, published materiality threshold, and a provisional value keeps the template usable now (digest "Open: materiality threshold").
  - **Against:** The threshold and amount bands are undecided (spec §10), so a provisional number must be marked revisable and updated once real money flows and the accounting basis are set.
- **Option (b):** defer the number until real money flows exist
  - **For:** Avoids publishing a number before real money exists.
  - **Against:** Fails spec §5.2.8's "fixed and published" threshold requirement and leaves the template unable to state the disclosure rule the digest's "Done when" depends on.
- **Option (c):** publish the template with "TBD"
  - **For:** Simplest — no premature number.
  - **Against:** "TBD" fails spec §5.2.8's fixed/published threshold requirement and the acceptance criterion "the privacy threshold protects small donors without concealing material influence".
- **Recommended:** (a) — spec §5.2.3/§5.2.8 require a fixed, published threshold; a provisional value keeps the template usable now.
- **Your choice:** ✏️

### D2 — Accounting basis
- **Question:** Which accounting basis/standard does the report state?
- **Option (a):** cash basis initially, noting a planned transition to accrual once the recipient structure is fixed
  - **For:** Spec §5.2.7 requires the accounting standard stated honestly, and cash basis is honest for an early founder-led project; spec §10 leaves cash-vs-accrual to the recipient structure, so (a) notes the planned transition.
  - **Against:** Cash basis is less comparable and less complete than accrual, so the early reports understate liabilities until the transition happens.
- **Option (b):** accrual from the first report
  - **For:** Accrual is the more standard/comparable basis from the start.
  - **Against:** Spec §10 leaves the basis undecided until the recipient structure is fixed, and accrual is heavier for an early project without that structure; it risks over-claiming accounting maturity.
- **Option (c):** state "undecided"
  - **For:** Avoids committing to a basis before the recipient structure is fixed.
  - **Against:** Spec §5.2.7 requires the accounting standard stated in the report, so "undecided" fails a normative requirement and the acceptance criterion "accounting standard and assurance level stated honestly".
- **Recommended:** (a) — honest for an early, founder-led project; spec §10 leaves cash-vs-accrual to the recipient structure.
- **Your choice:** ✏️

### D3 — Assurance level and review threshold
- **Question:** What assurance level does the report claim, and when does an independent review/audit kick in?
- **Option (a):** unaudited, clearly stated, with a published income threshold at which an independent review/audit becomes required
  - **For:** Spec §5.2.7 requires the assurance level stated honestly without implying more than exists; stating "unaudited" plus a review threshold satisfies that (digest "Open: audit level").
  - **Against:** An unaudited first report provides weaker assurance, and the review threshold itself is undecided (spec §10) so it must be provisional.
- **Option (b):** audited from the first report
  - **For:** An audited first report gives the strongest assurance from day one.
  - **Against:** Spec §5.2.7 warns against implying more assurance than exists, and auditing before there is meaningful money flow is premature and costly for an early project (spec §10 leaves the audit threshold undecided).
- **Option (c):** no threshold published
  - **For:** Avoids publishing an assurance threshold that might change.
  - **Against:** Spec §5.2.7 requires the assurance level stated honestly, and the digest's "Done when" wants the assurance level stated — omitting the threshold leaves the escalation path undefined.
- **Recommended:** (a) — spec §5.2.7 requires stating the assurance level honestly without implying more than exists.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create an annual report template (e.g. `site/finances/template.html` or `.md`) with: period, currency, accounting basis and standard, assurance level, and the named responsible party.
3. Define cost-by-category and income-by-category sections split between public-good (free-floor) work and paid-service operations.
4. Define funder disclosure: name/org + amount band + purpose above the materiality threshold (§2 D1); smaller contributions aggregated anonymously.
5. Define in-kind disclosure (estimated value + "not audited" note), conflict-of-interest disclosure (decision-maker who is also funder/service provider/competitor, with the affected decision), and funded-deliverable disclosure (deliverable, funder, amount, status).
6. Include the payment-recipient table mapping each payment kind (donation, membership, sponsorship, purchase) to a legally suitable recipient, marked for legal review.
7. State the accounting basis and assurance level per §2 D2–D3 without over-claiming.
8. Publish a stable-URL archive (`site/finances/`) where prior reports are never altered and corrections are dated errata; note that a missed deadline must itself be disclosed.
9. Ensure the report renders static-first (no live service required); self-check against §5.

## 4. Constraints (must-nots)
- Large funders cannot hide behind the privacy threshold.
- No implying an assurance level the report lacks.
- Prior reports never altered; corrections as dated errata only.
- No disclosure requirement may compel a signer to reveal personal data or tools.

## 5. Acceptance criteria
- [ ] A report template is published with period, currency, and responsible party.
- [ ] Costs and income are disclosed by category, split between public-good and paid-service work.
- [ ] Funders above the threshold are named with amount band and purpose.
- [ ] Material in-kind support is disclosed with estimated value and a non-audit note.
- [ ] Conflicts are disclosed with the affected decisions named.
- [ ] Funded deliverables carry funder, amount, and status.
- [ ] The accounting standard and assurance level are stated honestly.
- [ ] The privacy threshold protects small donors without concealing material influence.
- [ ] The payment-recipient table maps each payment kind to a lawful recipient.
- [ ] Prior reports are archived and corrected only by dated errata.

## 6. Outputs to produce in the repository
- `site/finances/` — annual report template + stable-URL archive structure (first report lands when the launch campaign's money flows begin).

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`financial-transparency-dsh.md`](../suggestions/financial-transparency-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
