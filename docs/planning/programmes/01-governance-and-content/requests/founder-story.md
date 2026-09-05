# Agent request — founder-story: Founder Story

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`founder-story-dsh.md`](../../../../suggestions/founder-story-dsh.md) · seed [`founder-story.md`](../../../../suggestions/founder-story.md)
> **Effort:** S · **Phase:** P1 · **Position:** with motivation-and-prior-art (shared sourcing pass); P1
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Narrative voice (first vs third person)
- **Question:** Is the founder story first-person or a third-person profile?
- **Options:** (a) first-person ("I") · (b) third-person profile style · (c) mixed (first-person narrative with a third-person facts box)
- **Recommended:** (a) — the spec assumes first-person (§5.2.1) and the digest notes first-person is assumed.
- **Your choice:** ✏️

### D2 — Founding dates and origin-moment wording
- **Question:** How are founding dates and the "origin moment" wording handled before the founder confirms them?
- **Options:** (a) confirm exact dates and wording with the founder, then publish as sourced facts · (b) publish best-effort dates explicitly flagged "unverified" · (c) omit dates entirely until confirmed
- **Recommended:** (a) with (b) as fallback — spec §5.2.4 requires every claim sourced or flagged, never guessed.
- **Your choice:** ✏️

### D3 — Signing the page before declaration tooling exists
- **Question:** The page must be signed `Eric Mourant +AI` via a live declaration, but declaration tooling (P2/P3) is not live at P1. What ships now?
- **Options:** (a) ship a static self-contained declaration record binding the page, upgrade to the live declaration link when tooling exists · (b) publish the page now with a placeholder "declaration link forthcoming" · (c) hold the page until declaration tooling exists
- **Recommended:** (a) — keeps the signing obligation real and honest without blocking the page.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/founder-story.html` in the voice chosen in §1 D1, identifying Eric Mourant as originator and first signer.
3. State the founding address `https://eric-mourant.plus-artificial-intelligence.org` and link it consistently.
4. Record every historical claim (dates, events, contributions) with a source or an explicit "unverified" flag, using the claim-record shape `{ claim, date, source, status (verified|unverified|corrected), reviewed-by, reviewed-date }`.
5. Disclose the AI's material contribution to producing the page itself.
6. Attribute outside influences (including the Terence Tao lecture) accurately and defer the full record to motivation-and-prior-art.
7. Present the founder→stewardship path as intended direction (not installed governance) and link governance-and-stewardship.
8. Sign the page `Eric Mourant +AI` per §1 D3 and bind it as an artifact.
9. Ensure static/file://-safe/mirrorable rendering and visible, dated corrections; self-check against §4.

## 3. Constraints (must-nots)
- Founder never presented as gatekeeper, certifier, or source of permission.
- No unverifiable claims published unflagged.
- Stewardship path presented as intent, not installed governance.
- Must not gate the mark behind the founder's approval, payment, registration, or certification.
- Must not claim to verify others' declarations or rank anyone.

## 4. Acceptance criteria
- [ ] Eric Mourant identified as originator and first signer.
- [ ] All dates and historical claims carry sources or are flagged unverified.
- [ ] The AI's contribution to producing the page is disclosed.
- [ ] The page is signed `Eric Mourant +AI` with a declaration binding it.
- [ ] The founding address is used as the founder's public address.
- [ ] The stewardship path is labelled as intent and links governance.
- [ ] Outside attribution (including the Tao lecture) is accurate.
- [ ] The page is static/mirrorable and corrections are visible and dated.

## 5. Outputs to produce in the repository
- `site/founder-story.html` — the founder story page (and its declaration record, per §1 D3).

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`founder-story-dsh.md`](../../../../suggestions/founder-story-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
