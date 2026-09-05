# Agent request — theme-gallery-community-voting: Theme Gallery and Community Voting

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md)
> **Source:** spec [`theme-gallery-community-voting-dsh.md`](../../../../suggestions/theme-gallery-community-voting-dsh.md) · seed [`theme-gallery-community-voting.md`](../../../../suggestions/theme-gallery-community-voting.md)
> **Effort:** M · **Phase:** P3 · **Position:** P3 — after notes and engine; voting signals feed builder presets.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Comments
- **Question:** Should the gallery support comments at all, or only favourites and votes?
- **Options:** (a) favourites + votes only, no comments · (b) favourites + votes + moderated comments · (c) favourites only, no votes and no comments
- **Recommended:** (a) — comments add a moderation queue and abuse surface with little discovery value; favourites + presentation-only votes satisfy "discovery, never trust" at lower cost.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Build the gallery page (`site/gallery.html`): searchable previews, per-pack conformance-note summaries, factual contributor credit, and the neutral-route control.
3. Set default discovery order to a documented neutral order (publication date); feedback-based ordering is an explicit opt-in view, never the default.
4. Implement favourites (local-first, or synced behind explicit consent) and presentation-only votes; attach both to packs only, never to people; implement the feedback set per §1 D1.
5. Publish manipulation protections (rate limits, transparent counts, no automated/coordinated voting) and vendor-capture rules (no single vendor dominates the default view, relationships disclosed per sponsorship policy).
6. Build the accessible neutral list view (plain list with search and previews) meeting the accessibility floor, independent of the decorative design.
7. Route submissions through moderation, disputes, and appeals; removed or non-conformant packs disappear from the gallery and surprise-me until re-conformance.
8. Publish gallery data (pack metadata + aggregate feedback) through the snapshot pipeline so it is mirrorable; version gallery changes in the changelog.
9. Enforce privacy: no tracking or fingerprinting; search filters on documented pack metadata, never inferred visitor attributes.
10. Self-check against §4.

## 3. Constraints (must-nots)
- Votes/favourites MUST attach to packs only, never to people.
- No purchased or sponsored placement; default ordering is neutral and unpaid.
- No tracking or fingerprinting.
- Feedback MUST NOT become a trust signal: popularity about presentation never leaks into trust about meaning (RL-9).

## 4. Acceptance criteria
- [ ] Default ordering is neutral, documented, and unpaid.
- [ ] Votes and favourites attach to packs only, never to people.
- [ ] Feedback-based ordering is opt-in and never the default.
- [ ] No placement or ordering can be purchased.
- [ ] A non-conformant pack disappears from the gallery until re-conformance.
- [ ] The neutral list view meets the accessibility floor.
- [ ] No tracking or fingerprinting occurs in the gallery.
- [ ] Aggregate feedback data is published and mirrorable.

## 5. Outputs to produce in the repository
- `site/gallery.html` — the gallery page (search, previews, credit, neutral view).
- `site/gallery.json` — gallery data (pack metadata + aggregate feedback) for the snapshot pipeline.

## 6. Read before building
- [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md) — mini-plan
- [`theme-gallery-community-voting-dsh.md`](../../../../suggestions/theme-gallery-community-voting-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
