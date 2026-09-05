# Agent request — motivation-and-prior-art: Motivation and Prior Art

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`motivation-and-prior-art-dsh.md`](../../../../suggestions/motivation-and-prior-art-dsh.md) · seed [`motivation-and-prior-art.md`](../../../../suggestions/motivation-and-prior-art.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0/P1 — the prior-art register is a standing maintenance task
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Terence Tao citation handling
- **Question:** How is the Terence Tao lecture cited given it may not be verifiable?
- **Options:** (a) confirm the exact lecture (title/date/URL) and cite it accurately · (b) if it cannot be verified, identify it as a best-effort reference, not asserted as fact · (c) omit the Tao reference entirely
- **Recommended:** (a) then (b) — spec §5.2.2 requires an accurate, checkable citation or an explicit best-effort flag.
- **Your choice:** ✏️

### D2 — Novelty-claim wording
- **Question:** Which wording does the novelty claim use?
- **Options:** (a) adopt the narrow spec wording verbatim: "a situational, responsibility-bearing post-nominal convention with a fixed one-line meaning, usable without permission, registration, membership, certification, or gatekeeper" · (b) draft a sign-off candidate and mark it "pending founder sign-off" until confirmed · (c) defer the claim until founder-story is finalised
- **Recommended:** (a) with (b) as the sign-off step — the wording repeats across materials, so it needs explicit sign-off (spec §10).
- **Your choice:** ✏️

### D3 — Prior-art register location and promotion
- **Question:** Where does the prior-art register live, given `docs/analysis/prior-art-dsh.md` already exists?
- **Options:** (a) promote `docs/analysis/prior-art-dsh.md` to the maintained register and link it from the page · (b) create a new register file under `site/` and leave the analysis doc as-is · (c) embed the full register inline in the page
- **Recommended:** (a) — the mini-plan says "already drafted — promote and maintain it".
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, the existing `docs/analysis/prior-art-dsh.md`, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/why.html` (the "Why" destination) explaining why existing AI-disclosure language felt incomplete, with dated references.
3. Describe the Tao lecture's contribution per §1 D1 (accurate citation or best-effort flag).
4. State the novelty claim per §1 D2, distinguishing "novel" from "first ever" and disclaiming primacy over AI disclosure generally.
5. Assert no ownership of the characters `+AI`.
6. Maintain the prior-art register per §1 D3, each entry recording at least `{ id, title, source, date, relation (adjacent|overlap|precursor), note, checked-date }`; keep it append-and-correct with dated changes.
7. Acknowledge the main adjacent practices by name: AI-use disclosure badges, provenance standards (e.g. C2PA), byline/disclosure conventions, and comparable post-nominal or signing conventions.
8. Ensure every motivational/historical assertion carries a source or is removed/flagged; cite the founding examples; keep the page static/file://-safe/mirrorable; self-check against §4.

## 3. Constraints (must-nots)
- No ownership claim over the characters `+AI`; no "first ever" primacy claim.
- No unsourced motivational/historical assertion.
- Must not claim to verify anyone's AI use or to gate the mark.
- Must not turn the register into a ranking or reputation score.

## 4. Acceptance criteria
- [ ] Novelty claim stated in the narrow form and nowhere claims character ownership.
- [ ] The document explicitly disclaims primacy over AI disclosure generally.
- [ ] The Tao lecture is cited accurately or flagged as best-effort.
- [ ] A prior-art register exists with dated sources and relation labels.
- [ ] The main adjacent practices are acknowledged by name.
- [ ] Every motivational assertion carries a source or is removed.
- [ ] "Novel" and "first ever" are distinguished.

## 5. Outputs to produce in the repository
- `site/why.html` — the motivation/prior-art page.
- `docs/analysis/prior-art-dsh.md` — the promoted, maintained prior-art register (per §1 D3).

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`motivation-and-prior-art-dsh.md`](../../../../suggestions/motivation-and-prior-art-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
