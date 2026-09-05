# Agent request — governance-and-stewardship: Governance and Stewardship

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`governance-and-stewardship-dsh.md`](../../../../suggestions/governance-and-stewardship-dsh.md) · seed [`governance-and-stewardship.md`](../../../../suggestions/governance-and-stewardship.md)
> **Effort:** M · **Phase:** P0 · **Position:** start P0 (record of current founder-led state), complete transitions only when triggered — this is a process, not a one-off
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Current legal home, named maintainers, JAPER role
- **Question:** What current-state record does the governance page publish now?
- **Options:** (a) "founder-led; legal home JAPER Technology; named maintainer Eric Mourant; JAPER = founder's company/service provider, never an unstated owner or automatic custodian" · (b) publish "undecided" placeholders · (c) publish only the phases without naming current roles
- **Recommended:** (a) — spec §5.2.1 and §5.2.7 require the current legal home, named roles, and an explicit JAPER role statement.
- **Your choice:** ✏️

### D2 — Specification authority form
- **Question:** What form does the specification authority take?
- **Options:** (a) a named individual (Eric Mourant) for now, with a documented path to a committee · (b) a committee from day one · (c) a mixed individual-plus-reviewer body
- **Recommended:** (a) — honest for a founder-led project; spec §10 leaves the form undecided but the matrix must name an authority now.
- **Your choice:** ✏️

### D3 — Phase-transition triggers
- **Question:** What triggers movement from founder-led to fiscal sponsorship, then to a mission-locked custodian?
- **Options:** (a) publish concrete draft triggers (e.g. contribution/staffing/funding thresholds) with a note they are provisional · (b) publish "triggers to be defined when needed" · (c) omit triggers
- **Recommended:** (a) — spec §9.2 requires transition checklists published; concrete (even provisional) triggers beat absent ones.
- **Your choice:** ✏️

### D4 — Custodian legal form
- **Question:** What legal form does the eventual mission-locked custodian take?
- **Options:** (a) leave undecided pending legal review; document the path and selection criteria, not the form · (b) commit now to a specific form (charity / trust / foundation) · (c) no custodian planned
- **Recommended:** (a) — spec §10 says the legal form is undecided and requires legal review; publish the path honestly.
- **Your choice:** ✏️

### D5 — Registry governance form
- **Question:** What governance form does the registry adopt?
- **Options:** (a) policy-first, project-operated, mirrorable — the specification authority holds policy, a project operator executes it, records are mirrorable · (b) an independent registry operator sets policy · (c) community-run registry
- **Recommended:** (a) — IMPLEMENTATION-PLAN §11 fixes "policy-first, project-operated, mirrorable, grown only as the ledger grows".
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a governance record page (e.g. `site/governance.html`) with dated entries: current phase, decision-rights matrix, named roles and holders, conflicts/recusals, and decisions with rationale.
3. Record the current founder-led state per §1 D1, without presenting a later phase as already established.
4. Publish the three governance phases (founder-led → fiscal-sponsor-hosted → mission-locked custodian) with transition checklists and triggers per §1 D3; do not claim a later phase before its checklist completes.
5. Publish the decision-rights matrix separating at least: specification changes, free-floor amendments, mark-policy changes, registry policy, service-provider approval, and financial decisions — each with its named authority.
6. State that only the specification authority (§1 D2) may approve a normative-meaning change; service providers, sponsors, and members must not hold that right.
7. Define succession in advance (named successor or selection procedure + transfer checklist covering domain, keys, records, archives, accounts) and the notice/final-export obligations owned by continuity-and-namespace-custody.
8. State the JAPER Technology role explicitly per §1 D1; disclose it in About and financial reports.
9. Publish the conflict/recusal register and an independent appeals route (named reviewer who was not the original decision-maker + response expectation).
10. Contain funding influence: no funder/sponsor/member contribution buys decision rights, specification access, registry placement, or dispute outcomes; set the registry governance form per §1 D5.
11. Publish the notice-period schedule (≥90 days consultation for substantive spec changes, ≥180 days for floor narrowing, immediate for meaning-preserving corrections); version and archive every governed decision in the changelog; self-check against §4.

## 3. Constraints (must-nots)
- Only the specification authority may change normative meaning.
- Funders/sponsors/members may not buy decision rights or dispute outcomes.
- No claiming a later phase before its checklist completes.
- No governance change may make the meaning or no-account path paid, require identity, or transfer responsibility to an AI.

## 4. Acceptance criteria
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

## 5. Outputs to produce in the repository
- `site/governance.html` — the governance record page (decision-rights matrix, phases, appeals, notice periods).

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`governance-and-stewardship-dsh.md`](../../../../suggestions/governance-and-stewardship-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
