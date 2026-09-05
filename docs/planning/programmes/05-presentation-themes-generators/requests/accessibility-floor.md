# Agent request — accessibility-floor: Accessibility Floor

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md)
> **Source:** spec [`accessibility-floor-dsh.md`](../../../../suggestions/accessibility-floor-dsh.md) · seed [`accessibility-floor.md`](../../../../suggestions/accessibility-floor.md)
> **Effort:** M · **Phase:** P0 (policy) → P2 (implementation) · **Position:** policy P0 (gate for all new pages); implementation with the engine P2.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Bandwidth budget number
- **Question:** What published budget caps the neutral route's total page weight?
- **Options:** (a) 50 KB · (b) 100 KB · (c) 150 KB
- **Recommended:** (b) — 100 KB is a defensible provisional ceiling for a low-bandwidth text-first route; publish it now and confirm with testing (the spec only requires a published budget).
- **Your choice:** ✏️

### D2 — WCAG conformance baseline
- **Question:** Which WCAG version is the formal conformance baseline, and how is it phased?
- **Options:** (a) WCAG 2.2 AA now · (b) WCAG 2.1 AA now, track 2.2 as a stretch · (c) WCAG 2.1 AA immediately for all surfaces, 2.2 AA for new surfaces with a published phase-in
- **Recommended:** (c) — honours the existing "WCAG AA" wording (2.1 today) while adopting 2.2 AA for new surfaces, phased rather than all-at-once.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Publish the floor policy (`site/accessibility.html`) as the P0 gate: keyboard-only completion with visible focus, reading-order focus with no traps, screen-reader semantics (landmarks/headings/labels/live regions), WCAG AA contrast, non-colour state/error, 320px reflow + 200% zoom, `prefers-reduced-motion`, monochrome print with expanded URLs, CJK/RTL/mixed-language coverage, non-visual CAPTCHA alternatives, adjustable/absent time limits, and the bandwidth budget per §1 D1.
3. State the conformance baseline per §1 D2 and the phase-in rule; floor changes are versioned and announced in the changelog, tightening only.
4. Specify the neutral route for every core task (about, help, support, builder, profile, directory, checker, account settings) with a consistent "plain view" control preserved by shared-project-navigation, reachable from every themed page.
5. Specify the mechanical linter checks (contrast, focus, motion, reflow, keyboard, `lang`/`dir`) that `conformance-linter` tests; the floor must apply to every surface including generated pages and checker results.
6. Specify the "decorative never subtracts" rule: themes restyle but may not remove meaning, focus, keyboard paths, or the neutral-route control; surprise-me never lands on a below-floor theme without an immediate neutral-route control.
7. Mark the policy half P0 and the neutral-route implementation half P2 (with the theme engine); existing surfaces are brought to conformance on the linter's published schedule.
8. Self-check against §4.

## 3. Constraints (must-nots)
- No trapped focus; focus order follows reading order and moving focus must not trigger unexpected context changes.
- No colour-only state, status, or error.
- A visual CAPTCHA MUST NOT be the sole human-verification route.
- No essential function may depend on motion.
- Accessibility is never a premium feature: no paid tier offers "better accessibility".
- Typography follows the language, not the theme (multi-language standard R10/S9): per-script fallback fonts are part of the translation, not the theme; surfaces set `lang`/`dir` per content language.

## 4. Acceptance criteria
- [ ] Every core task completes keyboard-only on the neutral route with a visible focus indicator.
- [ ] A screen reader announces headings, landmarks, labels, and status changes on every core page.
- [ ] No theme's text falls below WCAG AA contrast.
- [ ] Every core page reflows at 320px and functions at 200% zoom.
- [ ] With reduced motion enabled, no essential function depends on animation.
- [ ] Core pages print legibly in monochrome.
- [ ] CJK and RTL content renders without breakage on the neutral route.
- [ ] Every human-verification step offers a non-visual alternative.
- [ ] The neutral route of each core task stays under the published bandwidth budget.

## 5. Outputs to produce in the repository
- `site/accessibility.html` — the floor policy (P0), including the bandwidth budget and WCAG baseline.
- Neutral-route pages + the "plain view" control — specified here, implemented with the theme engine (P2).
- Mechanical floor checks (contrast, focus, motion, reflow, keyboard, `lang`/`dir`) in `scripts/conformance-lint.mjs`.

## 6. Read before building
- [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md) — mini-plan
- [`accessibility-floor-dsh.md`](../../../../suggestions/accessibility-floor-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
