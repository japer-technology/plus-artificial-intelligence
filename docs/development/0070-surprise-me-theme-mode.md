# Development task — surprise-me-theme-mode: Surprise-Me Theme Mode

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md)
> **Source:** spec [`surprise-me-theme-mode-dsh.md`](../suggestions/surprise-me-theme-mode-dsh.md) · seed [`surprise-me-theme-mode.md`](../suggestions/surprise-me-theme-mode.md)
> **Effort:** S · **Phase:** P3 · **Position:** after the gallery — quick win on top of it.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Random/rotating path through conformant presentations — a discovery affordance, not a recommendation engine.
- **Why now / risk of deferring:** Ordered after the gallery — a quick win on top of it (mini-plan Order). Risk: drifting into a recommendation engine (guarded by the no-profiling rule and uniform random rule, spec §5.1 item 2 and §5.2 item 2).
- **Features to deliver:**
  - A selection control (in shared navigation) + a landing page (`site/surprise.html`) exposing the shareable URL, the published selection rule, and the neutral-route control.
  - A candidate set gated on current per-theme conformance notes + accessibility floor.
  - A documented uniform random selection rule.
  - Published repetition rules.
  - `prefers-reduced-motion` honoured.
  - No cookies/fingerprinting.
  - Payment/votes never influence selection.
  - Offline-capable over the local gallery subset.
- **Depends on:** theme-gallery-community-voting, per-theme-conformance-notes, theme-engine-and-packs

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Rotate control
- **Question:** Is "rotate" a second explicit control (a slow tour), or one surprise per action only?
- **Option (a):** one surprise per action only — repeat activation for the next, with the shareable URL carrying the revisit
  - **For:** Stateless, shareable, no added motion; the gallery and shareable links already cover browsing (spec §5.1 item 3 stateless by default; spec §5.2 item 4 reduced motion).
  - **Against:** No built-in tour for browsing multiple themes in sequence.
- **Option (b):** a second explicit "rotate/tour" control offering a slow tour through candidates
  - **For:** A slow tour through candidates is a gentle browsing affordance.
  - **Against:** Adds a second control and continuous motion, straining "stateless by default" (spec §5.1 item 3) and reduced-motion (spec §5.2 item 4) with little gain over the gallery.
- **Option (c):** a toggle between single surprise and slow tour
  - **For:** Gives both modes as a toggle.
  - **Against:** A toggle adds surface and state for little gain; spec §10 asks only whether rotate is a second control or one surprise per action.
- **Recommended:** (a) — stateless, shareable, no added motion; the gallery and shareable links already cover browsing, and a second control adds surface for little gain.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Gate the candidate set on current per-theme conformance notes + the accessibility floor; exclude non-conformant or inaccessible themes.
3. Implement selection as a documented uniform random rule over the candidate set; publish the rule in plain language on the landing page (e.g. "picked uniformly from N conformant themes").
4. Publish repetition rules (whether repeats are allowed) that never depend on visitor identity; add the rotate behaviour per §2 D1.
5. Respect `prefers-reduced-motion`: rotation and transition effects disabled or minimalised; no essential function depends on animation.
6. Enforce statelessness: no cookies, no fingerprinting, no stored visitor data; any future session memory must be opt-in and deletable.
7. Build the landing page (`site/surprise.html`): every landing shows the theme's name, its conformance-note link, the shareable URL, and the neutral-route control; add the selection control to shared navigation.
8. Ensure payment, sponsorship, or votes never influence selection; offer an immediate route to the neutral presentation and the gallery index.
9. Make the mode work offline over the local gallery subset (offline pack); announce selection-rule changes in the changelog.
10. Self-check against §5.

## 4. Constraints (must-nots)
- Non-conformant themes MUST NOT enter the candidate set.
- No cookies or fingerprinting.
- Payment or votes MUST NOT influence selection.
- The mode is a discovery affordance, never a recommendation engine: no visitor profiling.

## 5. Acceptance criteria
- [ ] A non-conformant theme never appears in the candidate set.
- [ ] The selection rule is published and applied uniformly.
- [ ] With reduced motion enabled, no rotation animation appears.
- [ ] No cookie or fingerprint is set by the mode.
- [ ] Every landing shows its shareable URL and the neutral-route control.
- [ ] Payment or votes cannot influence selection.
- [ ] The mode functions offline over the local gallery subset.

## 6. Outputs to produce in the repository
- `site/surprise.html` — the landing page (shareable URL, published rule, neutral-route control).
- The surprise-me control integrated into shared-project-navigation.

## 7. Read before building
- [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md) — mini-plan
- [`surprise-me-theme-mode-dsh.md`](../suggestions/surprise-me-theme-mode-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
