# Development task — about-project: About the Project

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`about-project-dsh.md`](../suggestions/about-project-dsh.md) · seed [`about-project.md`](../suggestions/about-project.md)
> **Effort:** S · **Phase:** P1 · **Position:** after covenant + usage guidelines drafts exist (needs their canonical wording); early P1
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Canonical static page explaining what +AI is and is not, with factual JAPER/legal-home statements.
- **Why now / risk of deferring:** The About page is the plain-language front door that every later hosted service points to for "what this project is and is not" (programme intro: prerequisites for every hosted service that later needs published rules), but it must wait for covenant + usage guidelines to settle the canonical wording (mini-plan Order). Risk: future direction must never read as installed governance (programme Risks — governance theatre).
- **Features to deliver:**
  - One static `site/about.html`.
  - The verbatim meaning plus the normative "is not" list.
  - A dated legal-home and maintainer-role statement (undecided items marked undecided).
  - A factual JAPER-relationship statement.
  - Free-floor and no-account-path assertions.
  - No-service-prerequisite framing.
  - Future direction labelled as intent.
  - A version identifier and publication date.
  - Links to covenant, guidelines, licensing, governance, continuity, and the 8 nav routes.
- **Depends on:** free-floor-covenant, governance-and-stewardship (text), financial-transparency, licensing-and-mark-policy, shared-project-navigation

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Current legal home and named maintainers
- **Question:** What dated legal-home and maintainer-role statement does the page publish today?
- **Option (a):** "Legal home: JAPER Technology (the founder's company); named maintainer: Eric Mourant" as dated facts
  - **For:** Spec §5.2.4 requires the page to state the current legal home and maintainer roles as dated facts; naming them, where already established, satisfies that requirement in full and gives the page the factual specificity the "Done when" line asks for.
  - **Against:** The exact legal home and named maintainers are still to be confirmed before publication (spec §10 open question; digest "Open: confirm exact legal home and named maintainers"), so publishing (a) before confirmation risks stating facts that later need correction.
- **Option (b):** publish "undecided" placeholders for both until confirmed
  - **For:** Honours the "undecided items stated as undecided" rule (spec §5.2.4) and avoids asserting anything unconfirmed.
  - **Against:** Publishing placeholders for both even when some facts are already established under-delivers on spec §5.2.4's requirement to state them as dated facts, and leaves the digest's "Done when" (JAPER stated factually) only partially met.
- **Option (c):** state what is known and explicitly mark any undecided items "undecided"
  - **For:** Matches spec §5.2.4 exactly — undecided items are marked "undecided" rather than implied to exist — and lets the page publish whatever is confirmed now; spec §10 defers only the unconfirmed remainder.
  - **Against:** Leaves the page partially unconfirmed until legal home and named maintainers are finalised (spec §10), so the page's factual statements are provisional in the interim.
- **Recommended:** (c) — matches spec §5.2.4; prefer (a) for whichever facts are already established.
- **Your choice:** ✏️

### D2 — JAPER Technology relationship wording
- **Question:** How is the relationship to JAPER Technology stated?
- **Option (a):** factually — founding operator and domain custodian (founding address `eric.mourant+ai@japer.technology`), not a governance claim
  - **For:** Spec §5.2.5 requires the JAPER relationship disclosed factually (founding operator, domain custodian, founding address) without presenting it as established governance; (a) is exactly that disclosure.
  - **Against:** Slightly more detail to keep current if the relationship later changes, and it must be worded carefully so "domain custodian" never reads as an automatic governance claim (spec §5.2.5's guard).
- **Option (b):** one-line "the founder's company" only, deferring detail to governance
  - **For:** Minimal and low-maintenance, and it defers all detail to governance-and-stewardship (spec §2 and §7 defer the rules there).
  - **Against:** Spec §5.2.5 asks for more than "the founder's company" — it names founding operator, domain custodian, and the founding address — so (b) under-specifies the required factual disclosure.
- **Option (c):** omit JAPER from About and link governance only
  - **For:** Avoids any risk of the About page implying a governance relationship by omission.
  - **Against:** Spec §5.2.5 requires the JAPER relationship disclosed factually on the About page; omitting it fails the requirement and hides a fact the digest's "Done when" (JAPER stated factually) demands.
- **Recommended:** (a) — matches spec §5.2.5 without presenting the relationship as established governance.
- **Your choice:** ✏️

### D3 — About page licence
- **Question:** Under which licence is the About page's text published?
- **Option (a):** inherit the spec-text licence from licensing-and-mark-policy once set (defer; no licence line until then)
  - **For:** Spec §10 lists the About page's licence as an open question deferred to Licensing and Mark Policy; inheriting the spec-text licence avoids a later re-licence edit.
  - **Against:** The page ships temporarily with no licence line, so it is not clearly mirrorable/redistributable until the licensing policy settles.
- **Option (b):** publish now under CC BY 4.0
  - **For:** Gives the page an immediately clear, mirroring-permissive licence so it can be quoted and redistributed now.
  - **Against:** Pre-empts the licensing policy (spec §10 defers the page's licence there), risking a later licence mismatch with the rest of the spec-text class.
- **Option (c):** no licence notice at all
  - **For:** None identified in the sources.
  - **Against:** Spec §2 and §7 defer licensing to Licensing and Mark Policy, and the static-first/mirrorable ethos expects published text to carry a licence; no notice leaves redistribution rights ambiguous.
- **Recommended:** (a) — spec §10 defers the page's licence to Licensing and Mark Policy.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, the spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change).
2. Create `site/about.html`, reproducing the canonical meaning **"AI helped. I take responsibility."** verbatim and linking `site/SPECIFICATION.md`.
3. Include the normative "is not" list: not an apology, not a warning label, not a certificate, not a claim that AI created everything, and not requiring permission, registration, membership, certification, or a gatekeeper.
4. State the free floor (meaning + no-account path stay free) and that paid services provide convenience, scale, support, or managed operations but never legitimacy, rank, or permission.
5. Write the dated legal-home + maintainer-role statement and the JAPER relationship per §2 D1–D2; mark undecided items "undecided".
6. Label every future-direction statement as direction/intent, not established governance or commitment.
7. Add a version identifier and publication date; make changes visible and versioned.
8. Link the eight canonical routes (About, Why, Use, Help, Community, Governance, Support, Contact) per shared-project-navigation, and link covenant, usage guidelines, licensing, governance, and continuity.
9. Verify the page renders file://-safe and mirrorable with no infrastructure, then self-check against §5.

## 4. Constraints (must-nots)
- No exclusivity claim over the characters `+AI`.
- No service may be a prerequisite for using the mark.
- Future direction must not read as commitment or established governance.
- Must not paraphrase the meaning in a way that changes it.
- No rankings, reputation scores, or AI-use inference.

## 5. Acceptance criteria
- [ ] Meaning reproduced verbatim and the normative specification linked.
- [ ] "Is not" list matches the normative meaning with no additions that change it.
- [ ] Legal home and maintainer roles stated and dated; undecided items marked undecided.
- [ ] JAPER relationship stated factually, not as governance.
- [ ] Future-direction statements labelled as intent, not commitment.
- [ ] Free floor and no-account path stated; no service is a prerequisite for use.
- [ ] Page carries a version and date; changes are visible.
- [ ] Page works file://-safe and mirrorable with no infrastructure.
- [ ] Page makes no exclusivity claim over `+AI`.

## 6. Outputs to produce in the repository
- `site/about.html` — the canonical About page.

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`about-project-dsh.md`](../suggestions/about-project-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
