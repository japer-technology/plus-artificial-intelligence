# Agent request — financial-transparency: Financial Transparency

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`financial-transparency-dsh.md`](../../../../suggestions/financial-transparency-dsh.md) · seed [`financial-transparency.md`](../../../../suggestions/financial-transparency.md)
> **Effort:** S · **Phase:** P1 · **Position:** P1 (first report after the launch campaign's money flows begin); template P0
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Materiality threshold and amount bands
- **Question:** What materiality threshold and amount bands does the first report use?
- **Options:** (a) a provisional threshold (e.g. 500 currency units or 1% of total, whichever is lower) with published amount bands, marked revisable — currency set with the accounting basis · (b) defer the number until real money flows exist · (c) publish the template with "TBD"
- **Recommended:** (a) — spec §5.2.3/§5.2.8 require a fixed, published threshold; a provisional value keeps the template usable now.
- **Your choice:** ✏️

### D2 — Accounting basis
- **Question:** Which accounting basis/standard does the report state?
- **Options:** (a) cash basis initially, noting a planned transition to accrual once the recipient structure is fixed · (b) accrual from the first report · (c) state "undecided"
- **Recommended:** (a) — honest for an early, founder-led project; spec §10 leaves cash-vs-accrual to the recipient structure.
- **Your choice:** ✏️

### D3 — Assurance level and review threshold
- **Question:** What assurance level does the report claim, and when does an independent review/audit kick in?
- **Options:** (a) unaudited, clearly stated, with a published income threshold at which an independent review/audit becomes required · (b) audited from the first report · (c) no threshold published
- **Recommended:** (a) — spec §5.2.7 requires stating the assurance level honestly without implying more than exists.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create an annual report template (e.g. `site/finances/template.html` or `.md`) with: period, currency, accounting basis and standard, assurance level, and the named responsible party.
3. Define cost-by-category and income-by-category sections split between public-good (free-floor) work and paid-service operations.
4. Define funder disclosure: name/org + amount band + purpose above the materiality threshold (§1 D1); smaller contributions aggregated anonymously.
5. Define in-kind disclosure (estimated value + "not audited" note), conflict-of-interest disclosure (decision-maker who is also funder/service provider/competitor, with the affected decision), and funded-deliverable disclosure (deliverable, funder, amount, status).
6. Include the payment-recipient table mapping each payment kind (donation, membership, sponsorship, purchase) to a legally suitable recipient, marked for legal review.
7. State the accounting basis and assurance level per §1 D2–D3 without over-claiming.
8. Publish a stable-URL archive (`site/finances/`) where prior reports are never altered and corrections are dated errata; note that a missed deadline must itself be disclosed.
9. Ensure the report renders static-first (no live service required); self-check against §4.

## 3. Constraints (must-nots)
- Large funders cannot hide behind the privacy threshold.
- No implying an assurance level the report lacks.
- Prior reports never altered; corrections as dated errata only.
- No disclosure requirement may compel a signer to reveal personal data or tools.

## 4. Acceptance criteria
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

## 5. Outputs to produce in the repository
- `site/finances/` — annual report template + stable-URL archive structure (first report lands when the launch campaign's money flows begin).

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`financial-transparency-dsh.md`](../../../../suggestions/financial-transparency-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
