# Agent request — surprise-me-theme-mode: Surprise-Me Theme Mode

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md)
> **Source:** spec [`surprise-me-theme-mode-dsh.md`](../../../../suggestions/surprise-me-theme-mode-dsh.md) · seed [`surprise-me-theme-mode.md`](../../../../suggestions/surprise-me-theme-mode.md)
> **Effort:** S · **Phase:** P3 · **Position:** after the gallery — quick win on top of it.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Rotate control
- **Question:** Is "rotate" a second explicit control (a slow tour), or one surprise per action only?
- **Options:** (a) one surprise per action only — repeat activation for the next, with the shareable URL carrying the revisit · (b) a second explicit "rotate/tour" control offering a slow tour through candidates · (c) a toggle between single surprise and slow tour
- **Recommended:** (a) — stateless, shareable, no added motion; the gallery and shareable links already cover browsing, and a second control adds surface for little gain.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Gate the candidate set on current per-theme conformance notes + the accessibility floor; exclude non-conformant or inaccessible themes.
3. Implement selection as a documented uniform random rule over the candidate set; publish the rule in plain language on the landing page (e.g. "picked uniformly from N conformant themes").
4. Publish repetition rules (whether repeats are allowed) that never depend on visitor identity; add the rotate behaviour per §1 D1.
5. Respect `prefers-reduced-motion`: rotation and transition effects disabled or minimalised; no essential function depends on animation.
6. Enforce statelessness: no cookies, no fingerprinting, no stored visitor data; any future session memory must be opt-in and deletable.
7. Build the landing page (`site/surprise.html`): every landing shows the theme's name, its conformance-note link, the shareable URL, and the neutral-route control; add the selection control to shared navigation.
8. Ensure payment, sponsorship, or votes never influence selection; offer an immediate route to the neutral presentation and the gallery index.
9. Make the mode work offline over the local gallery subset (offline pack); announce selection-rule changes in the changelog.
10. Self-check against §4.

## 3. Constraints (must-nots)
- Non-conformant themes MUST NOT enter the candidate set.
- No cookies or fingerprinting.
- Payment or votes MUST NOT influence selection.
- The mode is a discovery affordance, never a recommendation engine: no visitor profiling.

## 4. Acceptance criteria
- [ ] A non-conformant theme never appears in the candidate set.
- [ ] The selection rule is published and applied uniformly.
- [ ] With reduced motion enabled, no rotation animation appears.
- [ ] No cookie or fingerprint is set by the mode.
- [ ] Every landing shows its shareable URL and the neutral-route control.
- [ ] Payment or votes cannot influence selection.
- [ ] The mode functions offline over the local gallery subset.

## 5. Outputs to produce in the repository
- `site/surprise.html` — the landing page (shareable URL, published rule, neutral-route control).
- The surprise-me control integrated into shared-project-navigation.

## 6. Read before building
- [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md) — mini-plan
- [`surprise-me-theme-mode-dsh.md`](../../../../suggestions/surprise-me-theme-mode-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
