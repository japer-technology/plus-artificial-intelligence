# Accessibility Floor — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`accessibility-floor.md`](accessibility-floor.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the accessibility floor for every +AI surface: a
neutral, high-contrast, low-bandwidth route through every core task — about,
help, support, builder, profile, directory, checker, and account settings —
that works regardless of decorative themes. The project's promise is that
anyone can stand behind their work; the floor is the guarantee that everyone,
on any device, with any assistive technology, can actually do so.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns the *minimum accessibility contract* all surfaces
inherit. It does not own theme design (see [Theme engine and
packs](theme-engine-and-packs-dsh.md)), per-theme documentation (see
[Per-theme conformance notes](per-theme-conformance-notes-dsh.md)), or the
mechanical checks (see [Conformance linter](conformance-linter-dsh.md)). It is
normative: no theme, no matter how decorative, may drop below this floor, and
the neutral route must exist even where a themed route falls short.

## 3. Terminology

- **Floor** — the mandatory minimum; themes may exceed it, never undercut it.
- **Neutral route** — the plain, high-contrast, low-bandwidth presentation of
  every core task.
- **Core task** — about, help, support, builder, profile, directory, checker,
  and account settings.
- **Assistive technology** — screen readers, magnifiers, switches, and
  keyboard-only operation.

## 4. Scope

### 4.1 In scope

- The neutral route for every core task.
- Keyboard, focus, and screen-reader requirements.
- Contrast, reflow, zoom, print, and reduced-motion requirements.
- Scripting (CJK, RTL, mixed languages) and non-colour status requirements.
- CAPTCHA alternatives.

### 4.2 Out of scope and deferred

- Theme-specific enhancements (themes may do more, per per-theme conformance
  notes).
- Content translation quality (translation governance).
- Accessibility of third-party integrations beyond the minimum contract in
  developer integrations.

## 5. Specification

### 5.1 Design goals and principles

1. **The floor is the product's promise.** Accessibility is not a theme; it is
   the default.
2. **Neutral always exists.** Every core task has a plain route that works
   everywhere.
3. **Decorative never subtracts.** A theme may restyle; it may not remove
   meaning, focus, or keyboard paths.
4. **Text carries meaning.** Colour, motion, and imagery are redundant, never
   exclusive carriers.

### 5.2 Normative requirements

1. Every core task MUST be completable on the neutral route using keyboard
   only, with a visible focus indicator at every interactive element.
2. Focus order MUST follow reading order; focus MUST never be trapped, and
   moving focus MUST not trigger unexpected context changes.
3. All content MUST be exposed to screen readers with correct semantics
   (landmarks, headings, labels, live regions for status changes); icon-only
   controls MUST carry accessible names.
4. Text MUST meet WCAG AA contrast on the neutral route; themes MUST meet AA
   at minimum and MUST NOT rely on colour alone to convey state, status, or
   error.
5. Pages MUST reflow to 320px width without horizontal scrolling and MUST
   support 200% zoom without loss of content or function.
6. Motion MUST respect `prefers-reduced-motion`: decorative animation MUST be
   disabled or minimalised, and no essential function may depend on motion.
7. Print MUST work: core pages MUST print legibly in monochrome with URLs
   expanded where they carry meaning.
8. Scripting coverage MUST include CJK, RTL, and mixed-language content: font
   stacks, direction, and spacing MUST not break under any supported
   combination, and language changes MUST be marked.
9. Any human-verification step MUST offer a non-visual, non-audio-only
   alternative; visual CAPTCHAs are prohibited as the only route (see security
   and abuse controls for the abuse-handling side).
10. The neutral route MUST be low-bandwidth: core tasks complete without
    large media, with the neutral page's total weight kept to a published
    budget.
11. Time limits on tasks MUST be adjustable or absent; status messages MUST be
    announced and persist until dismissed.
12. Every surface, including generated pages and the checker results, MUST
    inherit this floor; the conformance linter MUST test it mechanically where
    machine-checkable.

### 5.3 Data model

Not applicable — this specification defines requirements over behaviour, not a
new data structure.

### 5.4 Interfaces and behaviours

- The neutral route is reachable from every themed page via a consistent,
  accessible control ("plain view"), preserved by shared project navigation.
- Checker results render the evidence labels as text-first content (see
  evidence labels, not trust scores).
- The surprise-me theme mode never lands a visitor on a theme that drops
  below the floor without an immediate neutral-route control.

### 5.5 Lifecycle and operational rules

- The floor applies to new surfaces at launch; existing surfaces are brought
  to conformance on the conformance linter's published schedule.
- Floor changes are versioned and announced in the changelog; tightening is
  permitted, weakening is not.

## 6. Free floor, red lines, and invariants

The accessibility floor is part of the free floor: the plain route costs
nothing, requires no account, and works offline where the commons does. No
paid tier may offer "better accessibility"; accessibility is never a premium
feature. CAPTCHA alternatives implement the no-biometric and no-tracking red
lines' spirit, and the static-first invariant means the neutral route must
work from `file://`.

## 7. Relationships to sibling specifications

- [Theme engine and packs](theme-engine-and-packs-dsh.md) must render themes
  above this floor.
- [Per-theme conformance notes](per-theme-conformance-notes-dsh.md) document
  each theme's standing relative to the floor.
- [Conformance linter](conformance-linter-dsh.md) checks the floor
  mechanically where possible.
- [Shared project navigation](shared-project-navigation-dsh.md) carries the
  neutral-route control on every page.
- [Surprise-me theme mode](surprise-me-theme-mode-dsh.md) must respect the
  floor in its selection rules.
- [Multi-format distribution kit](multi-format-distribution-kit-dsh.md) must
  keep exports as accessible as pages.
- [Email signature kit](email-signature-kit-dsh.md) applies the floor to
  signatures.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) owns the
  anti-abuse measures that CAPTCHA alternatives must satisfy.
- [Child-safe education](child-safe-education-dsh.md) and [Translation
  governance](translation-governance-dsh.md) inherit the floor for their
  materials.

## 8. Resolution of the seed's "before implementation" concerns

- **Keyboard use** — section 5.2 items 1-2: keyboard-completable tasks,
  visible focus, reading-order focus.
- **Focus** — section 5.2 items 1-2: visible indicators, no traps, no
  context surprises.
- **Screen readers** — section 5.2 item 3: semantics, landmarks, labels, live
  regions.
- **Reduced motion** — section 5.2 item 6: `prefers-reduced-motion` honoured.
- **Contrast** — section 5.2 item 4: WCAG AA minimum on all themes.
- **Reflow** — section 5.2 item 5: 320px reflow, 200% zoom.
- **Zoom** — section 5.2 item 5: content and function preserved at 200%.
- **Print** — section 5.2 item 7: monochrome-legible printing with expanded
  URLs.
- **CJK** — section 5.2 item 8: scripting coverage including CJK.
- **RTL** — section 5.2 item 8: direction and spacing under RTL.
- **Mixed languages** — section 5.2 item 8: language changes marked.
- **Non-colour status** — section 5.2 item 4: state, status, and error never
  colour-only.
- **CAPTCHA alternatives** — section 5.2 item 9: non-visual,
  non-audio-only alternatives; visual CAPTCHAs prohibited as the only route.

## 9. Acceptance criteria

1. Every core task completes keyboard-only on the neutral route with a
   visible focus indicator.
2. A screen reader announces headings, landmarks, labels, and status changes
   on every core page.
3. No theme's text falls below WCAG AA contrast.
4. Every core page reflows at 320px and functions at 200% zoom.
5. With reduced motion enabled, no essential function depends on animation.
6. Core pages print legibly in monochrome.
7. CJK and RTL content renders without breakage on the neutral route.
8. Every human-verification step offers a non-visual alternative.
9. The neutral route of each core task stays under the published bandwidth
   budget.

## 10. Open questions

- The published bandwidth budget number for the neutral route.
- Whether the floor should formally target WCAG 2.2 AA as the conformance
  baseline, and how to phase it in.
