# Development task — theme-gallery-community-voting: Theme Gallery and Community Voting

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md)
> **Source:** spec [`theme-gallery-community-voting-dsh.md`](../suggestions/theme-gallery-community-voting-dsh.md) · seed [`theme-gallery-community-voting.md`](../suggestions/theme-gallery-community-voting.md)
> **Effort:** M · **Phase:** P3 · **Position:** P3 — after notes and engine; voting signals feed builder presets.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Searchable gallery with previews, contributor credit, favourites, optional voting — discovery, never trust.
- **Why now / risk of deferring:** P3 — after notes and engine; voting signals feed builder presets (mini-plan Order). Risk: popularity leaking into trust (guarded by the discovery-not-judgement rule and no-paid-placement rule, spec §5.1 item 1 and §5.2 item 4).
- **Features to deliver:**
  - A searchable gallery page (`site/gallery.html`) with previews, contributor credit, per-pack conformance-note summaries, and the neutral-route control.
  - A neutral, documented default ordering.
  - Opt-in feedback sorts.
  - Favourites (local-first or explicit-consent) and presentation-only votes with published anti-manipulation + rate limits.
  - Vendor-capture disclosure.
  - An accessible neutral list view.
  - Aggregate feedback data published via the snapshot pipeline.
  - Moderation-owned removal of non-conformant packs.
- **Depends on:** theme-engine-and-packs, per-theme-conformance-notes, moderation-disputes-and-appeals (abuse), privacy-and-data-minimisation, privacy-respecting-analytics (aggregate signals), accessibility-floor

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Comments
- **Question:** Should the gallery support comments at all, or only favourites and votes?
- **Option (a):** favourites + votes only, no comments
  - **For:** Comments add a moderation queue and abuse surface with little discovery value; favourites + presentation-only votes satisfy "discovery, never trust" at lower cost (spec §10 cites moderation cost; spec §5.1 item 1).
  - **Against:** No comment channel for contributor feedback beyond votes.
- **Option (b):** favourites + votes + moderated comments
  - **For:** Comments give contributors a direct feedback channel.
  - **Against:** Comments add a moderation queue and abuse surface (spec §10 cites moderation cost) with little discovery value beyond votes.
- **Option (c):** favourites only, no votes and no comments
  - **For:** Favourites only is the smallest, safest surface.
  - **Against:** Drops the optional voting the seed and spec name as a discovery/guidance signal (spec §5.2 item 10).
- **Recommended:** (a) — comments add a moderation queue and abuse surface with little discovery value; favourites + presentation-only votes satisfy "discovery, never trust" at lower cost.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Build the gallery page (`site/gallery.html`): searchable previews, per-pack conformance-note summaries, factual contributor credit, and the neutral-route control.
3. Set default discovery order to a documented neutral order (publication date); feedback-based ordering is an explicit opt-in view, never the default.
4. Implement favourites (local-first, or synced behind explicit consent) and presentation-only votes; attach both to packs only, never to people; implement the feedback set per §2 D1.
5. Publish manipulation protections (rate limits, transparent counts, no automated/coordinated voting) and vendor-capture rules (no single vendor dominates the default view, relationships disclosed per sponsorship policy).
6. Build the accessible neutral list view (plain list with search and previews) meeting the accessibility floor, independent of the decorative design.
7. Route submissions through moderation, disputes, and appeals; removed or non-conformant packs disappear from the gallery and surprise-me until re-conformance.
8. Publish gallery data (pack metadata + aggregate feedback) through the snapshot pipeline so it is mirrorable; version gallery changes in the changelog.
9. Enforce privacy: no tracking or fingerprinting; search filters on documented pack metadata, never inferred visitor attributes.
10. Self-check against §5.

## 4. Constraints (must-nots)
- Votes/favourites MUST attach to packs only, never to people.
- No purchased or sponsored placement; default ordering is neutral and unpaid.
- No tracking or fingerprinting.
- Feedback MUST NOT become a trust signal: popularity about presentation never leaks into trust about meaning (RL-9).

## 5. Acceptance criteria
- [ ] Default ordering is neutral, documented, and unpaid.
- [ ] Votes and favourites attach to packs only, never to people.
- [ ] Feedback-based ordering is opt-in and never the default.
- [ ] No placement or ordering can be purchased.
- [ ] A non-conformant pack disappears from the gallery until re-conformance.
- [ ] The neutral list view meets the accessibility floor.
- [ ] No tracking or fingerprinting occurs in the gallery.
- [ ] Aggregate feedback data is published and mirrorable.

## 6. Outputs to produce in the repository
- `site/gallery.html` — the gallery page (search, previews, credit, neutral view).
- `site/gallery.json` — gallery data (pack metadata + aggregate feedback) for the snapshot pipeline.

## 7. Read before building
- [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md) — mini-plan
- [`theme-gallery-community-voting-dsh.md`](../suggestions/theme-gallery-community-voting-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
