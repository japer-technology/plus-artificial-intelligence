# Development task — grants-and-public-benefit-programmes: Grants and Public-Benefit Programmes

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md)
> **Source:** spec [`grants-and-public-benefit-programmes-dsh.md`](../suggestions/grants-and-public-benefit-programmes-dsh.md) · seed [`grants-and-public-benefit-programmes.md`](../suggestions/grants-and-public-benefit-programmes.md)
> **Effort:** M · **Phase:** P3 · **Position:** after the sponsorship policy sets the screening precedent
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Seeking/holding grants for open deliverables plus public-benefit programmes (stipends, clinics, fee waivers) for under-resourced groups.
- **Why now / risk of deferring:** Rides on the sponsorship policy's screening precedent (Order line), so funder screening follows the same discipline before any grant is accepted. Deferring the screen risks funder capture — the no-control/no-data/no-rank guarantees must exist before grant money flows.
- **Features to deliver:**
  - grant acceptance process (published terms, deliverable, funder, amount band, completion status)
  - published mission-conflict screen (funder declines with recorded reason)
  - open-licence, file://-safe, mirrorable deliverable publishing (default open, closure only for safety/privacy/legal)
  - stipends for named open work (never certification)
  - free, bounded clinics with no obligation or upgrade path
  - fee waivers routed through the membership sponsored-seat route on public-benefit grounds
  - beneficiary classes served without membership, data disclosure, or ceded rights
  - a completed open deliverable never later closed or paywalled
- **Depends on:** financial-transparency, governance-and-stewardship, licensing-and-mark-policy, red-lines-and-cautious-extensions

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Mission-conflict rubric
- **Question:** What rubric screens funders for mission conflicts?
- **Option (a):** a published rubric now (mission-alignment questions + the prohibited conditions as automatic declines: specification control, vendor preference, data access, category exclusivity, suppression of findings), marked for governance sign-off and harmonised with sponsorship-policy's screening rubric
  - **For:** spec §5.2.2 requires screening against a published rubric before acceptance, and harmonising with sponsorship-policy avoids two divergent screens (brainstorm programme-level decision 7).
  - **Against:** the wording is provisional pending governance sign-off, so the published rubric could change after launch.
- **Option (b):** defer the rubric text to governance-and-stewardship, publishing only the prohibition list
  - **For:** keeps the rubric authority cleanly with governance-and-stewardship (spec §10).
  - **Against:** leaves spec §5.2.2's "screen every funder against a published mission-conflict rubric" unmet until governance writes it, so funders cannot be screened-and-recorded.
- **Option (c):** no rubric — ad-hoc screening per grant
  - **For:** no upfront rubric work; screening happens per grant.
  - **Against:** contradicts spec §5.2.2 (published rubric + recorded decline/waiver) and §9 item 2, and ad-hoc screening risks funder capture (the member's stated risk).
- **Recommended:** (a) — spec §5.2.2 requires screening against a published rubric and §10 leaves wording to governance; harmonising with sponsorship-policy avoids two divergent screens.
- **Your choice:** ✏️

### D2 — Clinic scheduling (per sector vs per region)
- **Question:** How are clinic capacity and scheduling organised?
- **Option (a):** per-sector initially (schools, libraries, media, nonprofits, civil society, under-resourced communities), with per-region scheduling added as demand data arrives
  - **For:** spec §10 leaves region-vs-sector to demand data; sector-first matches the enumerated beneficiary classes (spec §5.2.9) and needs less regional staffing.
  - **Against:** a region with concentrated need could be under-served until per-region scheduling is added.
- **Option (b):** per-region initially
  - **For:** aligns clinics with geographic demand and local staff/partners.
  - **Against:** does not match the spec's beneficiary classes (spec §5.2.9 lists sectors, not regions), so it may miss cross-region communities.
- **Option (c):** ad-hoc on request
  - **For:** minimal scheduling machinery; clinics run as requests arrive.
  - **Against:** spec §5.2.7 requires clinics be "bounded in scope and duration" with a scheduling model; ad-hoc risks unbounded demand and no fair allocation.
- **Recommended:** (a) — spec §10 leaves region-vs-sector to demand data; sector-first matches the enumerated beneficiary classes and needs less regional staffing.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy).
2. Create `site/grants.html` (versioned, file://-safe, mirrorable): the grant acceptance process (published terms where the funder permits, deliverable, funder, amount band, completion status); the mission-conflict screen per D1 with decline-with-reason or a recorded waiver-with-reason; open-licence deliverable publishing (file://-safe, mirrorable, default open, closure only for a stated safety/privacy/legal reason, never commercial advantage).
3. Specify the public-benefit programmes: stipends (named open work, conflict-checked, never framed as certification or rank, recipients remain responsible human signers); clinics (free, bounded, no obligation/upgrade path/founder dependency, scheduled per D2); fee waivers (routed through the membership model's sponsored-seat route on public-benefit grounds).
4. Specify beneficiary classes served without requiring membership, data disclosure, or ceding any right.
5. State the prohibitions: no funder gains decision rights, directory placement, evidence labels, or user-data access; grants never fund the specification, the mark's meaning, directory rank, or evidence.
6. State that a grant ending never removes or closes a deliverable published open; the deliverable remains in the commons under its licence.
7. If a hosted grants-management component is later built, note (do not build) its privacy analysis, threat model, and failure-mode statement obligations (§5.2.10–11).
8. Give the programme pages a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13; programme pages T2, deliverable content T4).
9. Self-check against §5: walk the acceptance criteria and confirm each holds.

## 4. Constraints (must-nots)
- Grants buy open deliverables — never legitimacy, rank, or permission (payment buys convenience, scale, support, or managed operations only).
- No funder gains control, data, rank, or evidence.
- Grants never fund the specification, meaning, rank, or evidence.
- A completed open deliverable is never later closed or paywalled.
- Clinics are free and bounded with no obligation or upgrade path; stipends are never framed as certification or rank.
- Beneficiaries are served without membership, data disclosure, or ceding rights.
- The programme pages follow the multi-language standard (R1/R4/R12/R13; pages T2, deliverables T4).

## 5. Acceptance criteria
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

## 6. Outputs to produce in the repository
- `site/grants.html` — grant acceptance process, mission-conflict screen, open-licence publishing rules, and the stipend/clinic/fee-waiver programmes.

## 7. Read before building
- [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md) — mini-plan
- [`grants-and-public-benefit-programmes-dsh.md`](../suggestions/grants-and-public-benefit-programmes-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../planning/digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; programme pages T2, deliverables T4)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
