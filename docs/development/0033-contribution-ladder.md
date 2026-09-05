# Development task — contribution-ladder: Contribution Ladder

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`contribution-ladder-dsh.md`](../suggestions/contribution-ladder-dsh.md) · seed [`contribution-ladder.md`](../suggestions/contribution-ladder.md)
> **Effort:** S · **Phase:** P1 · **Position:** after licensing policy (terms); P1
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Catalogue of bounded ways to help (sign, test, translate, accessibility, themes, engineering, prior-art, moderation, pilots) with named reviewers and credit.
- **Why now / risk of deferring:** The ladder is the participation on-ramp that widens ownership of the work without a leaderboard (spec §5.1 "non-ranking"), and it ships after licensing policy sets the contribution terms (mini-plan Order "after licensing policy (terms)"). Risk: credit aggregating into a score — guarded by the attribution-only rule (brainstorm open risks).
- **Features to deliver:**
  - One static `site/contribute.html`.
  - ≥9 rung families (sign, test, translation, accessibility, themes, engineering, prior-art, moderation, pilots), each with 5 fields (result, reviewer, terms, credit, first step) plus optional difficulty/time.
  - Authority-bearing rungs separated.
  - Credit as factual attribution only.
  - A rung record `{id, title, category, expected-result, reviewer, contribution-terms, credit, first-step, difficulty, time-estimate, status, requires-authority}`.
  - Open/pause/retire with tombstone.
- **Depends on:** licensing-and-mark-policy (contribution terms), moderation-disputes-and-appeals, governance-and-stewardship, translation-governance

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Reviewer assignment approach
- **Question:** How is each rung's reviewer named before governance has assigned individuals?
- **Option (a):** name a role or documented process per rung (e.g. "translation governance maintainer"), with "to be filled" where the holder is undecided
  - **For:** Spec §5.2.7 requires each rung's reviewer stated as "a named role or documented process, not an unnamed gate", and the digest's "Open: reviewer assignment" is pending governance; (a) satisfies the requirement without blocking on person-level decisions.
  - **Against:** "To be filled" roles still leave some rungs without a resolved human holder until governance assigns individuals.
- **Option (b):** leave reviewer blank pending governance
  - **For:** Avoids naming a role that governance might later change.
  - **Against:** Leaves the reviewer blank, which spec §5.2.7 explicitly forbids (an unnamed gate), and fails the digest's "Done when" (every rung records all five fields).
- **Option (c):** list a single project-wide "contributions maintainer" for every rung
  - **For:** Simple and unambiguous — every rung has one named maintainer.
  - **Against:** Collapses distinct reviewer authority into one person, which spec §5.2.7 ("named role or documented process") and §5.2.6 (authority-bearing rungs separated) push against, and misrepresents authority that sits with other owning siblings.
- **Recommended:** (a) — satisfies spec §5.2.7 ("named role or documented process, not an unnamed gate") without blocking on person-level decisions.
- **Your choice:** ✏️

### D2 — Institutional-pilots rung handling
- **Question:** How is the institutional-pilots rung presented before Pilots and Case Studies decides its funding/organisational form?
- **Option (a):** list it, marked "requires a funded or organisational arrangement — deferred to Pilots and Case Studies"
  - **For:** Keeps all 9 required rung families present (spec §5.2.1) while honestly deferring the funded/organisational arrangement to Pilots and Case Studies (spec §10 open question).
  - **Against:** The rung is published with its terms deferred, so it cannot yet carry a complete "contribution terms" field (spec §5.2.2) until the pilots sibling settles the arrangement.
- **Option (b):** omit it until the pilots spec ships
  - **For:** Avoids publishing a rung whose funding form is undecided.
  - **Against:** Omits a required rung family, violating spec §5.2.1 ("at least the following rungs … institutional pilots") and the digest's "Done when" (all rung families present).
- **Option (c):** list it as open with no terms
  - **For:** Lists the rung immediately without blocking.
  - **Against:** "Open with no terms" fails spec §5.2.2 (all five fields required) and misrepresents a rung that actually requires a funded/organisational arrangement (spec §10).
- **Recommended:** (a) — keeps all 9 required rung families present while deferring the arrangement honestly.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/contribute.html` listing at least the nine rung families: signing one real artifact, testing an explanation, translation review, accessibility work, theme creation, engineering, prior-art research, moderation, institutional pilots.
3. Record all five required fields per rung — expected result, reviewer, contribution terms, credit, first step — plus optional difficulty and time estimate.
4. Make the entry rungs (signing one artifact, testing an explanation) completable on the no-account path with zero required infrastructure.
5. Reference the applicable licence from licensing-and-mark-policy in every rung's contribution terms; require no surrender of rights beyond those terms.
6. Keep credit as factual attribution only (name and work, where the contributor consents), never a score/level/leaderboard/rank.
7. Separate authority-bearing rungs (moderation, governance) from ordinary contribution rungs.
8. State that using the mark never requires contributing, and contributing never grants the project the right to speak in the contributor's name; welcome contributions without forced tool disclosure.
9. Use the rung record `{ id, title, category, expected-result, reviewer, contribution-terms, credit, first-step, difficulty, time-estimate, status (open|paused|retired), requires-authority }`; keep changes visible and dated; self-check against §5.

## 4. Constraints (must-nots)
- No credit aggregated into scores/levels/leaderboards/ranks.
- Contributing never required to use the mark.
- No forced disclosure of a contributor's AI tools or prompts.
- Entry rungs must not require payment or registration.

## 5. Acceptance criteria
- [ ] All nine rung families present.
- [ ] Every rung records all five required fields.
- [ ] Entry rungs are completable on the no-account path.
- [ ] Credit is attribution-only, with no score, level, or leaderboard.
- [ ] Contribution terms are linked and consistent with the licensing policy.
- [ ] Authority-bearing rungs are separated from ordinary contributions.
- [ ] Using the mark is never contingent on contributing.

## 6. Outputs to produce in the repository
- `site/contribute.html` — the contribution ladder page.

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`contribution-ladder-dsh.md`](../suggestions/contribution-ladder-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
