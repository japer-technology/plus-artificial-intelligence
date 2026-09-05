# Agent request — about-project: About the Project

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`about-project-dsh.md`](../../../../suggestions/about-project-dsh.md) · seed [`about-project.md`](../../../../suggestions/about-project.md)
> **Effort:** S · **Phase:** P1 · **Position:** after covenant + usage guidelines drafts exist (needs their canonical wording); early P1
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Current legal home and named maintainers
- **Question:** What dated legal-home and maintainer-role statement does the page publish today?
- **Options:** (a) "Legal home: JAPER Technology (the founder's company); named maintainer: Eric Mourant" as dated facts · (b) publish "undecided" placeholders for both until confirmed · (c) state what is known and explicitly mark any undecided items "undecided"
- **Recommended:** (c) — matches spec §5.2.4; prefer (a) for whichever facts are already established.
- **Your choice:** ✏️

### D2 — JAPER Technology relationship wording
- **Question:** How is the relationship to JAPER Technology stated?
- **Options:** (a) factually — founding operator and domain custodian (founding address `eric.mourant+ai@japer.technology`), not a governance claim · (b) one-line "the founder's company" only, deferring detail to governance · (c) omit JAPER from About and link governance only
- **Recommended:** (a) — matches spec §5.2.5 without presenting the relationship as established governance.
- **Your choice:** ✏️

### D3 — About page licence
- **Question:** Under which licence is the About page's text published?
- **Options:** (a) inherit the spec-text licence from licensing-and-mark-policy once set (defer; no licence line until then) · (b) publish now under CC BY 4.0 · (c) no licence notice at all
- **Recommended:** (a) — spec §10 defers the page's licence to Licensing and Mark Policy.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, the spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change).
2. Create `site/about.html`, reproducing the canonical meaning **"AI helped. I take responsibility."** verbatim and linking `site/SPECIFICATION.md`.
3. Include the normative "is not" list: not an apology, not a warning label, not a certificate, not a claim that AI created everything, and not requiring permission, registration, membership, certification, or a gatekeeper.
4. State the free floor (meaning + no-account path stay free) and that paid services provide convenience, scale, support, or managed operations but never legitimacy, rank, or permission.
5. Write the dated legal-home + maintainer-role statement and the JAPER relationship per §1 D1–D2; mark undecided items "undecided".
6. Label every future-direction statement as direction/intent, not established governance or commitment.
7. Add a version identifier and publication date; make changes visible and versioned.
8. Link the eight canonical routes (About, Why, Use, Help, Community, Governance, Support, Contact) per shared-project-navigation, and link covenant, usage guidelines, licensing, governance, and continuity.
9. Verify the page renders file://-safe and mirrorable with no infrastructure, then self-check against §4.

## 3. Constraints (must-nots)
- No exclusivity claim over the characters `+AI`.
- No service may be a prerequisite for using the mark.
- Future direction must not read as commitment or established governance.
- Must not paraphrase the meaning in a way that changes it.
- No rankings, reputation scores, or AI-use inference.

## 4. Acceptance criteria
- [ ] Meaning reproduced verbatim and the normative specification linked.
- [ ] "Is not" list matches the normative meaning with no additions that change it.
- [ ] Legal home and maintainer roles stated and dated; undecided items marked undecided.
- [ ] JAPER relationship stated factually, not as governance.
- [ ] Future-direction statements labelled as intent, not commitment.
- [ ] Free floor and no-account path stated; no service is a prerequisite for use.
- [ ] Page carries a version and date; changes are visible.
- [ ] Page works file://-safe and mirrorable with no infrastructure.
- [ ] Page makes no exclusivity claim over `+AI`.

## 5. Outputs to produce in the repository
- `site/about.html` — the canonical About page.

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`about-project-dsh.md`](../../../../suggestions/about-project-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
