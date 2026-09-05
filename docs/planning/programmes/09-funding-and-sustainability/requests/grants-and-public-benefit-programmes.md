# Agent request — grants-and-public-benefit-programmes: Grants and Public-Benefit Programmes

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../../09-funding-and-sustainability.md)
> **Source:** spec [`grants-and-public-benefit-programmes-dsh.md`](../../../../suggestions/grants-and-public-benefit-programmes-dsh.md) · seed [`grants-and-public-benefit-programmes.md`](../../../../suggestions/grants-and-public-benefit-programmes.md)
> **Effort:** M · **Phase:** P3 · **Position:** after the sponsorship policy sets the screening precedent
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Mission-conflict rubric
- **Question:** What rubric screens funders for mission conflicts?
- **Options:** (a) a published rubric now (mission-alignment questions + the prohibited conditions as automatic declines: specification control, vendor preference, data access, category exclusivity, suppression of findings), marked for governance sign-off and harmonised with sponsorship-policy's screening rubric · (b) defer the rubric text to governance-and-stewardship, publishing only the prohibition list · (c) no rubric — ad-hoc screening per grant
- **Recommended:** (a) — spec §5.2.2 requires screening against a published rubric and §10 leaves wording to governance; harmonising with sponsorship-policy avoids two divergent screens.
- **Your choice:** ✏️

### D2 — Clinic scheduling (per sector vs per region)
- **Question:** How are clinic capacity and scheduling organised?
- **Options:** (a) per-sector initially (schools, libraries, media, nonprofits, civil society, under-resourced communities), with per-region scheduling added as demand data arrives · (b) per-region initially · (c) ad-hoc on request
- **Recommended:** (a) — spec §10 leaves region-vs-sector to demand data; sector-first matches the enumerated beneficiary classes and needs less regional staffing.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy).
2. Create `site/grants.html` (versioned, file://-safe, mirrorable): the grant acceptance process (published terms where the funder permits, deliverable, funder, amount band, completion status); the mission-conflict screen per D1 with decline-with-reason or a recorded waiver-with-reason; open-licence deliverable publishing (file://-safe, mirrorable, default open, closure only for a stated safety/privacy/legal reason, never commercial advantage).
3. Specify the public-benefit programmes: stipends (named open work, conflict-checked, never framed as certification or rank, recipients remain responsible human signers); clinics (free, bounded, no obligation/upgrade path/founder dependency, scheduled per D2); fee waivers (routed through the membership model's sponsored-seat route on public-benefit grounds).
4. Specify beneficiary classes served without requiring membership, data disclosure, or ceding any right.
5. State the prohibitions: no funder gains decision rights, directory placement, evidence labels, or user-data access; grants never fund the specification, the mark's meaning, directory rank, or evidence.
6. State that a grant ending never removes or closes a deliverable published open; the deliverable remains in the commons under its licence.
7. If a hosted grants-management component is later built, note (do not build) its privacy analysis, threat model, and failure-mode statement obligations (§5.2.10–11).
8. Give the programme pages a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13; programme pages T2, deliverable content T4).
9. Self-check against §4: walk the acceptance criteria and confirm each holds.

## 3. Constraints (must-nots)
- Grants buy open deliverables — never legitimacy, rank, or permission (payment buys convenience, scale, support, or managed operations only).
- No funder gains control, data, rank, or evidence.
- Grants never fund the specification, meaning, rank, or evidence.
- A completed open deliverable is never later closed or paywalled.
- Clinics are free and bounded with no obligation or upgrade path; stipends are never framed as certification or rank.
- Beneficiaries are served without membership, data disclosure, or ceding rights.
- The programme pages follow the multi-language standard (R1/R4/R12/R13; pages T2, deliverables T4).

## 4. Acceptance criteria
- [ ] Every accepted grant has published terms, deliverable, funder, amount band, and status.
- [ ] Every funder passes a published mission-conflict screen, or is declined with a recorded reason.
- [ ] Every grant-funded output is published under a free licence and is mirrorable.
- [ ] No grant funds the specification, the mark's meaning, rank, or evidence.
- [ ] No funder gains decision rights, placement, evidence labels, or data access.
- [ ] A stipend is granted for named open work and is never framed as certification.
- [ ] A clinic is free, bounded, and creates no obligation or upgrade path.
- [ ] A fee waiver routes through the sponsored-seat route on public-benefit grounds.
- [ ] A completed open deliverable is never later closed or paywalled.
- [ ] Any grants-management component would have a published privacy analysis, threat model, and failure-mode statement.

## 5. Outputs to produce in the repository
- `site/grants.html` — grant acceptance process, mission-conflict screen, open-licence publishing rules, and the stipend/clinic/fee-waiver programmes.

## 6. Read before building
- [`09-funding-and-sustainability.md`](../../09-funding-and-sustainability.md) — mini-plan
- [`grants-and-public-benefit-programmes-dsh.md`](../../../../suggestions/grants-and-public-benefit-programmes-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../../../digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; programme pages T2, deliverables T4)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
