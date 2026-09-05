# Development task — motivation-and-prior-art: Motivation and Prior Art

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`motivation-and-prior-art-dsh.md`](../suggestions/motivation-and-prior-art-dsh.md) · seed [`motivation-and-prior-art.md`](../suggestions/motivation-and-prior-art.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0/P1 — the prior-art register is a standing maintenance task
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Honest "why" account with a narrowly-scoped, verifiable novelty claim and a maintained prior-art register.
- **Why now / risk of deferring:** The prior-art register is a standing maintenance task seeded from an existing analysis doc (mini-plan Order: "the prior-art register is a standing maintenance task"), and it lands P0/P1. Risk: unsourced motivational claims invite credibility attacks on the whole project — "flag, don't guess" (programme Risks — sourcing discipline).
- **Features to deliver:**
  - One static `site/why.html` (the "Why" destination).
  - An honest "why" account with dated references.
  - The Terence Tao lecture contribution with a checkable citation.
  - The narrow novelty claim (situational, responsibility-bearing post-nominal, fixed one-line meaning, no-permission).
  - An explicit "novel ≠ first ever" statement.
  - A maintained prior-art register (`{id, title, source, date, relation, note, checked-date}`) with append-and-correct lifecycle.
  - Adjacent practices named (badges, C2PA, byline conventions, post-nominals).
  - Founding examples cited.
- **Depends on:** founder-story, docs/analysis/prior-art-dsh.md (already drafted — promote and maintain it), public-usage-guidelines

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Terence Tao citation handling
- **Question:** How is the Terence Tao lecture cited given it may not be verifiable?
- **Option (a):** confirm the exact lecture (title/date/URL) and cite it accurately
  - **For:** Spec §5.2.2 requires "an accurate, checkable citation", and the digest's "Done when" wants the Tao lecture cited accurately; confirming title/date/URL is the strongest form.
  - **Against:** The exact citation requires confirmation (spec §10 open question; digest "Open: confirm exact Tao citation"), so (a) adds a verification dependency before the page can be finalised.
- **Option (b):** if it cannot be verified, identify it as a best-effort reference, not asserted as fact
  - **For:** Spec §5.2.2 explicitly permits identifying an unverifiable lecture as "a best-effort reference, not asserted as fact", letting the page ship without a confirmed citation.
  - **Against:** A best-effort flag is weaker than a checkable citation, and the digest's "Done when" prefers the Tao lecture "cited accurately", so (b) only partially meets the acceptance criterion.
- **Option (c):** omit the Tao reference entirely
  - **For:** Removes the risk of asserting an unverifiable fact entirely.
  - **Against:** Spec §5.2.2 requires the Tao lecture's contribution to be described rather than omitted, so (c) drops a required element of the motivation account.
- **Recommended:** (a) then (b) — spec §5.2.2 requires an accurate, checkable citation or an explicit best-effort flag.
- **Your choice:** ✏️

### D2 — Novelty-claim wording
- **Question:** Which wording does the novelty claim use?
- **Option (a):** adopt the narrow spec wording verbatim: "a situational, responsibility-bearing post-nominal convention with a fixed one-line meaning, usable without permission, registration, membership, certification, or gatekeeper"
  - **For:** Spec §5.2.3 mandates the novelty claim "stated only in the narrow form" with exactly this wording, so (a) satisfies the requirement directly.
  - **Against:** Spec §10 says the definitive wording needs sign-off because it repeats across materials, so adopting it verbatim without sign-off could lock in unconfirmed wording.
- **Option (b):** draft a sign-off candidate and mark it "pending founder sign-off" until confirmed
  - **For:** Satisfies spec §10's sign-off requirement honestly — the wording is flagged pending confirmation rather than asserted.
  - **Against:** A "pending sign-off" label means the claim is not yet final, which conflicts with the digest's "Done when" (narrow novelty claim stated) until sign-off happens.
- **Option (c):** defer the claim until founder-story is finalised
  - **For:** Avoids publishing any novelty wording before the related origin account (founder-story) is settled.
  - **Against:** Spec §5.2.3 requires the novelty claim stated in this document, and the mini-plan treats the register/claim as P0/P1 — deferring it needlessly stalls a required deliverable.
- **Recommended:** (a) with (b) as the sign-off step — the wording repeats across materials, so it needs explicit sign-off (spec §10).
- **Your choice:** ✏️

### D3 — Prior-art register location and promotion
- **Question:** Where does the prior-art register live, given `docs/analysis/prior-art-dsh.md` already exists?
- **Option (a):** promote `docs/analysis/prior-art-dsh.md` to the maintained register and link it from the page
  - **For:** The mini-plan says the register is "already drafted — promote and maintain it", so (a) reuses existing work and avoids a second source of truth.
  - **Against:** Promotion means the analysis doc becomes a maintained register with an append-and-correct lifecycle (spec §5.2.6 and §5.5), which is a standing maintenance obligation, not a one-off.
- **Option (b):** create a new register file under `site/` and leave the analysis doc as-is
  - **For:** Keeps the published register on the `site/` static path, consistent with other public outputs.
  - **Against:** Creates a duplicate register alongside the already-drafted analysis doc, risking drift between the two — against the mini-plan's "promote and maintain" instruction.
- **Option (c):** embed the full register inline in the page
  - **For:** Puts the register in the page itself, so readers see it without opening a second file.
  - **Against:** Embedding the full register inline makes maintenance harder (spec §5.2.6 wants a maintained, append-and-correct register with dated changes), and the digest's "Builds" expects a register document, not inline content.
- **Recommended:** (a) — the mini-plan says "already drafted — promote and maintain it".
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, the existing `docs/analysis/prior-art-dsh.md`, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/why.html` (the "Why" destination) explaining why existing AI-disclosure language felt incomplete, with dated references.
3. Describe the Tao lecture's contribution per §2 D1 (accurate citation or best-effort flag).
4. State the novelty claim per §2 D2, distinguishing "novel" from "first ever" and disclaiming primacy over AI disclosure generally.
5. Assert no ownership of the characters `+AI`.
6. Maintain the prior-art register per §2 D3, each entry recording at least `{ id, title, source, date, relation (adjacent|overlap|precursor), note, checked-date }`; keep it append-and-correct with dated changes.
7. Acknowledge the main adjacent practices by name: AI-use disclosure badges, provenance standards (e.g. C2PA), byline/disclosure conventions, and comparable post-nominal or signing conventions.
8. Ensure every motivational/historical assertion carries a source or is removed/flagged; cite the founding examples; keep the page static/file://-safe/mirrorable; self-check against §5.

## 4. Constraints (must-nots)
- No ownership claim over the characters `+AI`; no "first ever" primacy claim.
- No unsourced motivational/historical assertion.
- Must not claim to verify anyone's AI use or to gate the mark.
- Must not turn the register into a ranking or reputation score.

## 5. Acceptance criteria
- [ ] Novelty claim stated in the narrow form and nowhere claims character ownership.
- [ ] The document explicitly disclaims primacy over AI disclosure generally.
- [ ] The Tao lecture is cited accurately or flagged as best-effort.
- [ ] A prior-art register exists with dated sources and relation labels.
- [ ] The main adjacent practices are acknowledged by name.
- [ ] Every motivational assertion carries a source or is removed.
- [ ] "Novel" and "first ever" are distinguished.

## 6. Outputs to produce in the repository
- `site/why.html` — the motivation/prior-art page.
- `docs/analysis/prior-art-dsh.md` — the promoted, maintained prior-art register (per §2 D3).

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`motivation-and-prior-art-dsh.md`](../suggestions/motivation-and-prior-art-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
