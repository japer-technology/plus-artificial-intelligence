# Agent request — contribution-ladder: Contribution Ladder

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`contribution-ladder-dsh.md`](../../../../suggestions/contribution-ladder-dsh.md) · seed [`contribution-ladder.md`](../../../../suggestions/contribution-ladder.md)
> **Effort:** S · **Phase:** P1 · **Position:** after licensing policy (terms); P1
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Reviewer assignment approach
- **Question:** How is each rung's reviewer named before governance has assigned individuals?
- **Options:** (a) name a role or documented process per rung (e.g. "translation governance maintainer"), with "to be filled" where the holder is undecided · (b) leave reviewer blank pending governance · (c) list a single project-wide "contributions maintainer" for every rung
- **Recommended:** (a) — satisfies spec §5.2.7 ("named role or documented process, not an unnamed gate") without blocking on person-level decisions.
- **Your choice:** ✏️

### D2 — Institutional-pilots rung handling
- **Question:** How is the institutional-pilots rung presented before Pilots and Case Studies decides its funding/organisational form?
- **Options:** (a) list it, marked "requires a funded or organisational arrangement — deferred to Pilots and Case Studies" · (b) omit it until the pilots spec ships · (c) list it as open with no terms
- **Recommended:** (a) — keeps all 9 required rung families present while deferring the arrangement honestly.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/contribute.html` listing at least the nine rung families: signing one real artifact, testing an explanation, translation review, accessibility work, theme creation, engineering, prior-art research, moderation, institutional pilots.
3. Record all five required fields per rung — expected result, reviewer, contribution terms, credit, first step — plus optional difficulty and time estimate.
4. Make the entry rungs (signing one artifact, testing an explanation) completable on the no-account path with zero required infrastructure.
5. Reference the applicable licence from licensing-and-mark-policy in every rung's contribution terms; require no surrender of rights beyond those terms.
6. Keep credit as factual attribution only (name and work, where the contributor consents), never a score/level/leaderboard/rank.
7. Separate authority-bearing rungs (moderation, governance) from ordinary contribution rungs.
8. State that using the mark never requires contributing, and contributing never grants the project the right to speak in the contributor's name; welcome contributions without forced tool disclosure.
9. Use the rung record `{ id, title, category, expected-result, reviewer, contribution-terms, credit, first-step, difficulty, time-estimate, status (open|paused|retired), requires-authority }`; keep changes visible and dated; self-check against §4.

## 3. Constraints (must-nots)
- No credit aggregated into scores/levels/leaderboards/ranks.
- Contributing never required to use the mark.
- No forced disclosure of a contributor's AI tools or prompts.
- Entry rungs must not require payment or registration.

## 4. Acceptance criteria
- [ ] All nine rung families present.
- [ ] Every rung records all five required fields.
- [ ] Entry rungs are completable on the no-account path.
- [ ] Credit is attribution-only, with no score, level, or leaderboard.
- [ ] Contribution terms are linked and consistent with the licensing policy.
- [ ] Authority-bearing rungs are separated from ordinary contributions.
- [ ] Using the mark is never contingent on contributing.

## 5. Outputs to produce in the repository
- `site/contribute.html` — the contribution ladder page.

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`contribution-ladder-dsh.md`](../../../../suggestions/contribution-ladder-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
