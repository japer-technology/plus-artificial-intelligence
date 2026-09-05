# Development task — founder-story: Founder Story

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`founder-story-dsh.md`](../suggestions/founder-story-dsh.md) · seed [`founder-story.md`](../suggestions/founder-story.md)
> **Effort:** S · **Phase:** P1 · **Position:** with motivation-and-prior-art (shared sourcing pass); P1
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** First-person origin account naming Eric Mourant as originator and first signer, with honest AI-role disclosure.
- **Why now / risk of deferring:** The founder story makes the originator visible and models the project's own self-referential honesty about AI's role; it ships P1 with motivation-and-prior-art on a shared sourcing pass (mini-plan Order). Risk: weak sourcing of historical claims invites credibility attacks on the whole project, so flag rather than guess (programme Risks — sourcing discipline).
- **Features to deliver:**
  - One static first-person `site/founder-story.html`.
  - Eric Mourant named as originator and first signer.
  - The founding address stated and linked.
  - A per-claim source or "unverified" flag (claim-record model `{claim, date, source, status, reviewed-by, reviewed-date}`).
  - AI-contribution disclosure.
  - The stewardship path labelled intent and linked to governance.
  - The page signed `Eric Mourant +AI` via a live declaration link.
- **Depends on:** governance-and-stewardship, motivation-and-prior-art, declaration tooling (signature link), continuity-and-namespace-custody

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Narrative voice (first vs third person)
- **Question:** Is the founder story first-person or a third-person profile?
- **Option (a):** first-person ("I")
  - **For:** Spec §5.2.1 requires the story told "in a candid, first-person voice", and the digest's "What" and "Open" lines both assume first-person.
  - **Against:** First-person reads as the founder speaking directly, which slightly increases the care needed to keep the stewardship path labelled as intent (spec §5.2.7) so it does not read as an official governance pronouncement.
- **Option (b):** third-person profile style
  - **For:** A third-person profile reads more neutral and can state facts about the founder without implying the founder is speaking as an authority.
  - **Against:** Spec §5.2.1 explicitly requires first-person voice, and the digest assumes first-person, so (b) contradicts the spec.
- **Option (c):** mixed (first-person narrative with a third-person facts box)
  - **For:** Combines the spec's first-person requirement with a facts box that could make dates and claims easier to verify.
  - **Against:** Spec §5.2.1 asks for a first-person voice and does not call for a mixed structure; a third-person facts box is extra surface that must still satisfy the same per-claim sourcing (spec §5.2.4).
- **Recommended:** (a) — the spec assumes first-person (§5.2.1) and the digest notes first-person is assumed.
- **Your choice:** ✏️

### D2 — Founding dates and origin-moment wording
- **Question:** How are founding dates and the "origin moment" wording handled before the founder confirms them?
- **Option (a):** confirm exact dates and wording with the founder, then publish as sourced facts
  - **For:** Spec §5.2.4 requires every historical claim to carry a source or be marked unverified; confirming with the founder yields sourced facts and best satisfies the digest's "Done when" (claims sourced/flagged).
  - **Against:** Blocks publication on founder availability and confirmation, and spec §10 leaves exact dates as an open question, so it adds a dependency on the founder's input.
- **Option (b):** publish best-effort dates explicitly flagged "unverified"
  - **For:** Lets the page publish without blocking on the founder, while spec §5.2.4's "explicitly marked unverified" fallback keeps the claims honest.
  - **Against:** Publishing best-effort dates risks credibility attacks — the programme Risks line warns "flag, don't guess" — and unverified dates may still read as established facts.
- **Option (c):** omit dates entirely until confirmed
  - **For:** Avoids publishing any date that could be wrong, fully sidestepping the sourcing risk.
  - **Against:** Spec §5.2.4 and the digest's "Done when" (claims sourced/flagged) expect dates handled rather than omitted; omission leaves the origin account thinner than the spec intends.
- **Recommended:** (a) with (b) as fallback — spec §5.2.4 requires every claim sourced or flagged, never guessed.
- **Your choice:** ✏️

### D3 — Signing the page before declaration tooling exists
- **Question:** The page must be signed `Eric Mourant +AI` via a live declaration, but declaration tooling (P2/P3) is not live at P1. What ships now?
- **Option (a):** ship a static self-contained declaration record binding the page, upgrade to the live declaration link when tooling exists
  - **For:** Spec §5.2.3 requires the page signed `Eric Mourant +AI` and bound to a declaration; a static self-contained record satisfies the binding now and the mini-plan "Done when" (page signed with a live declaration) is upgradable later.
  - **Against:** The binding is not yet a live declaration link (spec §5.2.3 asks to "link to or embed a live declaration"), so it needs a later upgrade pass once tooling ships.
- **Option (b):** publish the page now with a placeholder "declaration link forthcoming"
  - **For:** Cheaper than building a static binding record now, and it defers the signing mechanics honestly.
  - **Against:** A placeholder fails spec §5.2.3's requirement that the page be signed and bound, and the digest's "Done when" explicitly requires the page signed with a declaration.
- **Option (c):** hold the page until declaration tooling exists
  - **For:** Guarantees the sign-and-bind requirement is met by the real tooling from day one.
  - **Against:** Blocks a P1 page on P2/P3 tooling, contradicting the mini-plan Order (P1) and needlessly deferring a story the digest rates cheap ("S — one static page + declaration link").
- **Recommended:** (a) — keeps the signing obligation real and honest without blocking the page.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/founder-story.html` in the voice chosen in §2 D1, identifying Eric Mourant as originator and first signer.
3. State the founding address `https://eric-mourant.plus-artificial-intelligence.org` and link it consistently.
4. Record every historical claim (dates, events, contributions) with a source or an explicit "unverified" flag, using the claim-record shape `{ claim, date, source, status (verified|unverified|corrected), reviewed-by, reviewed-date }`.
5. Disclose the AI's material contribution to producing the page itself.
6. Attribute outside influences (including the Terence Tao lecture) accurately and defer the full record to motivation-and-prior-art.
7. Present the founder→stewardship path as intended direction (not installed governance) and link governance-and-stewardship.
8. Sign the page `Eric Mourant +AI` per §2 D3 and bind it as an artifact.
9. Ensure static/file://-safe/mirrorable rendering and visible, dated corrections; self-check against §5.

## 4. Constraints (must-nots)
- Founder never presented as gatekeeper, certifier, or source of permission.
- No unverifiable claims published unflagged.
- Stewardship path presented as intent, not installed governance.
- Must not gate the mark behind the founder's approval, payment, registration, or certification.
- Must not claim to verify others' declarations or rank anyone.

## 5. Acceptance criteria
- [ ] Eric Mourant identified as originator and first signer.
- [ ] All dates and historical claims carry sources or are flagged unverified.
- [ ] The AI's contribution to producing the page is disclosed.
- [ ] The page is signed `Eric Mourant +AI` with a declaration binding it.
- [ ] The founding address is used as the founder's public address.
- [ ] The stewardship path is labelled as intent and links governance.
- [ ] Outside attribution (including the Tao lecture) is accurate.
- [ ] The page is static/mirrorable and corrections are visible and dated.

## 6. Outputs to produce in the repository
- `site/founder-story.html` — the founder story page (and its declaration record, per §2 D3).

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`founder-story-dsh.md`](../suggestions/founder-story-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
