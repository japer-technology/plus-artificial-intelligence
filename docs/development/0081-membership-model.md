# Development task — membership-model: Membership Model

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md)
> **Source:** spec [`membership-model-dsh.md`](../suggestions/membership-model-dsh.md) · seed [`membership-model.md`](../suggestions/membership-model.md)
> **Effort:** M · **Phase:** P3 · **Position:** after the custodian path is real (governance), not before — it funds stewardship, not the launch
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Optional membership funding a future custodian and working groups — never a gate, rank, or lever.
- **Why now / risk of deferring:** Deliberately late (P3) and only after the custodian path is real, because it funds stewardship, not the launch. Opening it earlier risks "Premature monetisation": membership before real adoption would fund nothing and validate nothing.
- **Features to deliver:**
  - optional individual + organisation membership funding a future custodian and working groups
  - join page rendering the free-floor statement and non-member-rights enumeration before any payment
  - published, bounded, convenience-only tiers/benefits
  - low-cost tier + sponsored-seat/fee-waiver route (deferring eligibility to grants)
  - advisory ballot rules (one vote per member, no contribution weighting, never touching specification or free floor)
  - community seats reserved in member-funded working groups
  - conflict/recusal controls
  - free, immediate, no-penalty cancellation
  - membership as a disclosed income category
  - hosted membership system with its Programme 8 gates
- **Depends on:** governance-and-stewardship, free-floor-covenant, financial-transparency, community-hub

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Tiers, prices, and benefit sets
- **Question:** What tiers, prices, and benefits does the programme define?
- **Option (a):** a small provisional set (e.g. individual low-cost + individual standard + organisation), benefits strictly conveniences — newsletter, working-group participation, event access, early notice of public changes — with prices marked provisional pending cost-discipline modelling
  - **For:** spec §5.2.4 requires published, bounded, convenience-only benefits, and §10 requires cost-discipline input for tiers/prices — a provisional set keeps the programme concrete without committing prices.
  - **Against:** the provisional prices could change after cost-discipline modelling, so the join page would need a versioned update.
- **Option (b):** defer tiers/prices entirely, publishing the programme rules with a "tiers TBD" placeholder
  - **For:** avoids stating any price before cost-discipline input exists.
  - **Against:** leaves spec §5.2.4's "benefits must be published and bounded per tier" and §5.2.5's "low-cost tier" unmet, so the programme has no concrete tiers to join.
- **Option (c):** a full priced matrix now
  - **For:** gives members a full, final price matrix immediately.
  - **Against:** commits prices without the cost-discipline input spec §10 requires, risking prices set before costs are modelled.
- **Recommended:** (a) — spec §10 requires cost-discipline input; a provisional convenience-only set keeps the programme concrete without committing prices.
- **Your choice:** ✏️

### D2 — Before vs after custodian
- **Question:** Does membership open before a custodian exists, or only after?
- **Option (a):** only after the custodian path is real, per the mini-plan Order line ("after the custodian path is real (governance), not before")
  - **For:** the mini-plan Order line resolves spec §10's open question to after-custodian, and the programme Risk "Premature monetisation" warns that opening before real adoption "would fund nothing and validate nothing".
  - **Against:** delays a potential funding stream until the custodian path (Programme 1 governance) is real.
- **Option (b):** before the custodian, to start funding earlier
  - **For:** starts funding earlier, which could seed the custodian's own funding.
  - **Against:** contradicts the mini-plan Order line and risks premature monetisation (programme Risk); membership would fund a custodian that does not yet exist (mini-plan Goal: "funding a future custodian").
- **Option (c):** publish the programme now but accept members only after the custodian exists
  - **For:** lets the programme be written and reviewed now while gating actual collection until the custodian exists.
  - **Against:** adds a two-step launch (publish-then-accept) that the mini-plan's after-custodian ordering does not require, keeping a half-open money surface.
- **Recommended:** (a) — the mini-plan Order line already resolves spec §10's open question to after-custodian; confirm here so the build does not open a launch-time money surface.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy).
2. Create `site/membership.html` (versioned, file://-safe, mirrorable): the join flow renders the free-floor statement and the non-member-rights enumeration before any payment; the published tier/benefit table per D1; the sponsored-seat/fee-waiver route deferring eligibility to grants-and-public-benefit-programmes; advisory ballot rules (one vote per individual member, one per organisation, no contribution weighting, ballots never touch specification or free floor); community seats reserved in member-funded working groups; conflict/recusal rules; free, immediate, no-penalty cancellation.
3. Create `docs/services/membership-model.md`: the membership system design (self-service join/cancel; membership record `{ memberId, class, tier, status, sponsoredBy, joinedAt, renewalAt }`; membership status never shown in directory rows or evidence surfaces) plus the Programme 8 gates — static-first failure-mode statement, threat model, privacy analysis, and cost model.
4. Enforce that organisation membership never confers rights over any individual's declarations, and individuals remain human signers regardless of their organisation's membership.
5. Specify financial reporting: membership as a disclosed income category aggregated with the donations privacy threshold.
6. **Note for the agent (dependency, not a decision here):** membership is a P3 extension gated on the "meaningful adoption" metric owned by Programme 10 / Programme 4 (IMPLEMENTATION-PLAN §11); this request states the dependency and must not define the metric.
7. Give the join page a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13; the join page is T2).
8. Self-check against §5: walk the acceptance criteria and confirm each holds.

## 4. Constraints (must-nots)
- Membership buys convenience, scale, support, or managed operations — never legitimacy, rank, or permission.
- Membership never confers legitimacy, rank, or permission; no directory placement, evidence labels, verification priority, or moderation priority by virtue of membership.
- Member votes never touch specification or free floor; ballots advisory only.
- Organisation membership never controls an individual's declarations.
- Cancellation is free and immediate; a lapsed membership never revokes, hides, or downgrades any declaration, listing, or free-floor capability.
- Membership status is never shown in directory rows or evidence surfaces.
- The join page follows the multi-language standard (R1/R4/R12/R13; T2).

## 5. Acceptance criteria
- [ ] The mark, declarations, free floor, and participation are fully usable with no membership.
- [ ] No member receives directory placement, evidence labels, or moderation priority.
- [ ] Individual and organisation classes exist, and organisation membership never controls an individual's declarations.
- [ ] A low-cost tier and a sponsored-seat route exist.
- [ ] No member ballot weighs votes by contribution, member votes never touch the specification or free floor, and member ballots are advisory only.
- [ ] Member-funded working groups include non-member community seats.
- [ ] Cancellation is free, immediate, and leaves all records intact.
- [ ] Membership is disclosed as an income category with the donations privacy threshold.
- [ ] Non-member rights are enumerated and confirmed end-to-end.
- [ ] The membership system has a published privacy analysis, threat model, and failure-mode statement.

## 6. Outputs to produce in the repository
- `site/membership.html` — join page (free-floor statement, non-member rights, tiers/benefits, ballot rules, community seats, cancellation).
- `docs/services/membership-model.md` — membership system design + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 7. Read before building
- [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md) — mini-plan
- [`membership-model-dsh.md`](../suggestions/membership-model-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../planning/digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; join page T2, chrome R1/R4/R12/R13)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
