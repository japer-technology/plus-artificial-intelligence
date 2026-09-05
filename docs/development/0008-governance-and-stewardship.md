# Development task — governance-and-stewardship: Governance and Stewardship

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`governance-and-stewardship-dsh.md`](../suggestions/governance-and-stewardship-dsh.md) · seed [`governance-and-stewardship.md`](../suggestions/governance-and-stewardship.md)
> **Effort:** M · **Phase:** P0 · **Position:** start P0 (record of current founder-led state), complete transitions only when triggered — this is a process, not a one-off
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** The founder-led → fiscal-sponsor → mission-locked-custodian path: decision rights, change discipline, succession, conflicts, funding-influence controls.
- **Why now / risk of deferring:** Governance records the current founder-led state at P0 and completes transitions only when triggered — a process, not a one-off (mini-plan Order). Risk: governance theatre — publishing a decision matrix before the project can staff it is worse than honest "founder-led, here is the path" (programme Risks).
- **Features to deliver:**
  - A governance record page (`site/governance.html`) plus a published decision-rights matrix (specification changes, free-floor amendments, mark-policy changes, registry policy, service-provider approval, financial decisions).
  - Phase-transition checklists (founder-led → fiscal-sponsor → mission-locked custodian).
  - A succession plan + transfer checklist.
  - A conflict/recusal register.
  - An independent appeals route.
  - A JAPER role statement.
  - A notice-period schedule (90/180 days).
  - Versioned + archived decisions.
- **Depends on:** free-floor-covenant, licensing-and-mark-policy, financial-transparency, continuity-and-namespace-custody; later: sponsorship-policy, membership-model, moderation rules

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Current legal home, named maintainers, JAPER role
- **Question:** What current-state record does the governance page publish now?
- **Option (a):** "founder-led; legal home JAPER Technology; named maintainer Eric Mourant; JAPER = founder's company/service provider, never an unstated owner or automatic custodian"
  - **For:** Spec §5.2.1 requires the current legal home and named maintainer roles documented at all times, and §5.2.7 requires the JAPER role stated explicitly (founder's company/service provider, never unstated owner or automatic custodian); (a) states both.
  - **Against:** Commits to naming the current roles publicly, which must be kept accurate as roles change (spec §5.2.1's "at all times" obligation).
- **Option (b):** publish "undecided" placeholders
  - **For:** Avoids asserting current roles until they are fully settled.
  - **Against:** Spec §5.2.1 requires the current legal home and named roles documented "at all times", so placeholders fail that requirement and the digest's "Done when" (current legal home and named roles published and accurate).
- **Option (c):** publish only the phases without naming current roles
  - **For:** Publishes only the phase structure, avoiding role-level commitments.
  - **Against:** Spec §5.2.1 and §5.2.7 require the current roles and the JAPER statement named, not just the phase ladder, so (c) omits required content.
- **Recommended:** (a) — spec §5.2.1 and §5.2.7 require the current legal home, named roles, and an explicit JAPER role statement.
- **Your choice:** ✏️

### D2 — Specification authority form
- **Question:** What form does the specification authority take?
- **Option (a):** a named individual (Eric Mourant) for now, with a documented path to a committee
  - **For:** Honest for a founder-led project, and spec §10 leaves the form undecided while §5.2.3–4 require the matrix to name an authority now; (a) names one with a documented path to a committee.
  - **Against:** Concentrates the normative-meaning authority in one person until the path to a committee is exercised, which the design goals warn against if not documented (spec §5.1).
- **Option (b):** a committee from day one
  - **For:** Spreads authority from day one, reducing single-person risk.
  - **Against:** Spec §5.2.1 documents governance as founder-led until a custodian exists, and §10 leaves the form undecided, so a committee from day one overstates the current structure (governance theatre — programme Risks).
- **Option (c):** a mixed individual-plus-reviewer body
  - **For:** Balances individual accountability with review.
  - **Against:** Spec §10 leaves the form undecided and the project is founder-led (spec §5.2.1); inventing a mixed body pre-empts an open question and complicates the simple honest record.
- **Recommended:** (a) — honest for a founder-led project; spec §10 leaves the form undecided but the matrix must name an authority now.
- **Your choice:** ✏️

### D3 — Phase-transition triggers
- **Question:** What triggers movement from founder-led to fiscal sponsorship, then to a mission-locked custodian?
- **Option (a):** publish concrete draft triggers (e.g. contribution/staffing/funding thresholds) with a note they are provisional
  - **For:** Spec §5.2.2 (and §9.2) requires transition checklists published; concrete, even provisional, triggers beat absent ones (digest "Open: phase triggers").
  - **Against:** The triggers are undecided (spec §10), so publishing them as draft means they must be revised once real numbers are known.
- **Option (b):** publish "triggers to be defined when needed"
  - **For:** Avoids publishing provisional numbers that could mislead.
  - **Against:** "To be defined when needed" fails spec §5.2.2's requirement that checklists be published, and the digest's "Done when" (governance phases and transition checklists published) is unmet.
- **Option (c):** omit triggers
  - **For:** Simplest — no trigger content to maintain.
  - **Against:** Omitting triggers entirely violates spec §5.2.2 and leaves the transition path uncheckable, which is exactly the "governance theatre" risk the programme flags.
- **Recommended:** (a) — spec §9.2 requires transition checklists published; concrete (even provisional) triggers beat absent ones.
- **Your choice:** ✏️

### D4 — Custodian legal form
- **Question:** What legal form does the eventual mission-locked custodian take?
- **Option (a):** leave undecided pending legal review; document the path and selection criteria, not the form
  - **For:** Spec §10 says the custodian's legal form is undecided and requires legal review, so documenting the path and selection criteria (not the form) is the honest record.
  - **Against:** Leaves the end-state legal form unresolved until review, so the succession plan cannot yet name the final receiving entity.
- **Option (b):** commit now to a specific form (charity / trust / foundation)
  - **For:** Committing to a form now gives the path a concrete end-state.
  - **Against:** Spec §10 explicitly says the legal form is undecided and requires legal review, so committing now pre-empts review and could misstate the eventual structure (programme Risks — governance theatre).
- **Option (c):** no custodian planned
  - **For:** None identified in the sources.
  - **Against:** Spec §5.2.2's phases include a mission-locked custodian, so "no custodian planned" contradicts the spec's defined path.
- **Recommended:** (a) — spec §10 says the legal form is undecided and requires legal review; publish the path honestly.
- **Your choice:** ✏️

### D5 — Registry governance form
- **Question:** What governance form does the registry adopt?
- **Option (a):** policy-first, project-operated, mirrorable — the specification authority holds policy, a project operator executes it, records are mirrorable
  - **For:** IMPLEMENTATION-PLAN §11 fixes "policy-first, project-operated, mirrorable, grown only as the ledger grows", and spec §5.2.11 requires registry policy held by the specification authority (or its delegate) with the operator executing, not setting, policy.
  - **Against:** The registry operator is a distinct role to staff, so the policy/operation separation must be maintained as the registry grows (spec §5.2.11).
- **Option (b):** an independent registry operator sets policy
  - **For:** An independent operator could add arms-length neutrality.
  - **Against:** Contradicts spec §5.2.11 (policy authority sits with the specification authority, operator executes only) and IMPLEMENTATION-PLAN §11's "project-operated" fix.
- **Option (c):** community-run registry
  - **For:** Maximises community ownership of the registry.
  - **Against:** Spec §5.2.11 places policy authority with the specification authority, not a community vote, and the project is founder-led (spec §5.2.1), so community-run overstates the current structure.
- **Recommended:** (a) — IMPLEMENTATION-PLAN §11 fixes "policy-first, project-operated, mirrorable, grown only as the ledger grows".
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a governance record page (e.g. `site/governance.html`) with dated entries: current phase, decision-rights matrix, named roles and holders, conflicts/recusals, and decisions with rationale.
3. Record the current founder-led state per §2 D1, without presenting a later phase as already established.
4. Publish the three governance phases (founder-led → fiscal-sponsor-hosted → mission-locked custodian) with transition checklists and triggers per §2 D3; do not claim a later phase before its checklist completes.
5. Publish the decision-rights matrix separating at least: specification changes, free-floor amendments, mark-policy changes, registry policy, service-provider approval, and financial decisions — each with its named authority.
6. State that only the specification authority (§2 D2) may approve a normative-meaning change; service providers, sponsors, and members must not hold that right.
7. Define succession in advance (named successor or selection procedure + transfer checklist covering domain, keys, records, archives, accounts) and the notice/final-export obligations owned by continuity-and-namespace-custody.
8. State the JAPER Technology role explicitly per §2 D1; disclose it in About and financial reports.
9. Publish the conflict/recusal register and an independent appeals route (named reviewer who was not the original decision-maker + response expectation).
10. Contain funding influence: no funder/sponsor/member contribution buys decision rights, specification access, registry placement, or dispute outcomes; set the registry governance form per §2 D5.
11. Publish the notice-period schedule (≥90 days consultation for substantive spec changes, ≥180 days for floor narrowing, immediate for meaning-preserving corrections); version and archive every governed decision in the changelog; self-check against §5.

## 4. Constraints (must-nots)
- Only the specification authority may change normative meaning.
- Funders/sponsors/members may not buy decision rights or dispute outcomes.
- No claiming a later phase before its checklist completes.
- No governance change may make the meaning or no-account path paid, require identity, or transfer responsibility to an AI.

## 5. Acceptance criteria
- [ ] The current legal home and named roles are published and accurate.
- [ ] The governance phases and transition checklists are published.
- [ ] A decision-rights matrix names the authority for each decision class.
- [ ] Only the specification authority can approve normative-meaning changes.
- [ ] A succession plan and transfer checklist exist before any transition is needed.
- [ ] JAPER Technology's role is stated and disclosed in About and financial reports.
- [ ] Conflicts are declared and recusals recorded in the governance record.
- [ ] An appeals route with an independent reviewer is published.
- [ ] Funding-influence containment is stated (and restated in sponsorship/membership policies).
- [ ] Every governed decision appears in the changelog and is archived.

## 6. Outputs to produce in the repository
- `site/governance.html` — the governance record page (decision-rights matrix, phases, appeals, notice periods).

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`governance-and-stewardship-dsh.md`](../suggestions/governance-and-stewardship-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
