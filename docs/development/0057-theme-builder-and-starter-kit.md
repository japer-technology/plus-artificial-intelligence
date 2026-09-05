# Development task — theme-builder-and-starter-kit: Theme Builder and Starter Kit

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md)
> **Source:** spec [`theme-builder-and-starter-kit-dsh.md`](../suggestions/theme-builder-and-starter-kit-dsh.md) · seed [`theme-builder-and-starter-kit.md`](../suggestions/theme-builder-and-starter-kit.md)
> **Effort:** M · **Phase:** P2 · **Position:** after the engine — the builder is the engine's user surface.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Accessible builder + tokens + starter files + preview + conformance checks so themes are creatable without cloning whole pages.
- **Why now / risk of deferring:** Ordered after the engine — the builder is the engine's user surface (mini-plan Order). Risk: the builder drifting from the engine contract (guarded by kit+engine co-release and the linter-on-save gate, brainstorm open risks).
- **Features to deliver:**
  - A starter kit (`site/themes/starter-kit/`) with manifest template, token file, flavour file, neutral-fallback reference, and a README of safe-customization boundaries + conformance instructions.
  - A keyboard-only, offline builder (`site/builder.html`) with live lint, preview (including neutral comparison), and packaging.
  - A token model (colour/spacing/typography/motion/print).
  - Edit-time blocking of normative-text and required-hook changes.
  - Packaging blocked while error rules fail.
  - Licensing confirmation at packaging.
  - Named maintainer group + versioned releases.
- **Depends on:** theme-engine-and-packs, conformance-linter, flavour-text-localisation, per-theme-conformance-notes, licensing-and-mark-policy

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Scaffold the per-theme conformance reviewed-claims checklist
- **Question:** Should the builder scaffold the human reviewed-claims checklist for the per-theme conformance note?
- **Option (a):** yes — the packaging step scaffolds the note draft including the reviewed-claims checklist for the maintainer's human assessment
  - **For:** The mini-plan requires the starter kit to carry "conformance check instructions" and the packaging step to produce a note draft; scaffolding the checklist makes the note complete rather than measured-only.
  - **Against:** Couples the builder to the note's human-review fields, which per-theme-conformance-notes owns (spec §5.2 item 2).
- **Option (b):** no — the builder scaffolds measured (linter-emitted) fields only, the human checklist lives in the note documentation
  - **For:** Keeps the builder to measured (linter-emitted) fields only, respecting the note's measured/reviewed boundary.
  - **Against:** Leaves the note draft incomplete (measured-only), undercutting the mini-plan's "conformance check instructions" requirement.
- **Option (c):** yes, but as a static README checklist rather than part of the note draft
  - **For:** Provides the human checklist without coupling it into the note draft.
  - **Against:** A static README checklist can drift from the actual note schema and is not part of the packaging output.
- **Recommended:** (a) — the mini-plan requires the starter kit to carry "conformance check instructions" and the packaging step to produce a note draft; scaffolding the checklist makes the note complete rather than measured-only.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Build the starter kit (`site/themes/starter-kit/`): pack manifest template, token file, flavour file, neutral-fallback reference, and a README with the safe-customization boundaries and conformance-check instructions.
3. Build the builder (`site/builder.html`): keyboard-only, offline, no account, no upload, meeting the accessibility floor itself; opens a starter kit, edits tokens and flavour, previews against canonical content (including the neutral comparison view), lints on save, and packages.
4. Define the token model (colour, spacing, typography, motion, print) with documented defaults; flag undocumented raw CSS overrides as advice, never errors, where the contract permits.
5. Enforce safe-customization boundaries at edit time: changes to normative text are blocked, changes to required hooks produce immediate errors (the linter's rules embedded live).
6. Run the linter on save with the full report; block packaging while error rules fail; confirm licensing (project contribution terms) at packaging.
7. Emit the pack structure defined by the theme engine (manifest, hash, conformance note draft); scaffold the reviewed-claims checklist per §2 D1.
8. Route translations through translation-governance; never bundle unreviewed machine translations of normative text.
9. Name the maintainer group, version builder releases in the changelog, and keep packs built with older kits valid per their manifest version.
10. Self-check against §5.

## 4. Constraints (must-nots)
- Normative-text edits MUST be blocked at edit time.
- Unreviewed machine translations MUST NOT be bundled.
- Packaging MUST be blocked while error rules fail.
- The builder MUST NOT submit without the contributor's explicit action.
- Builder UI copy carries the multi-language standard: per-key English fallback (R4) and the resolution order explicit parameter → saved preference → browser preference → English (R12); only explicit choices are persisted.

## 5. Acceptance criteria
- [ ] A contributor creates a conformant pack from the kit without copying a full page.
- [ ] The builder blocks edits to normative text and required hooks with immediate errors.
- [ ] The builder runs keyboard-only and offline.
- [ ] The preview renders against canonical content with the neutral comparison.
- [ ] Packaging is blocked while error rules fail.
- [ ] Packaging confirms licensing before completion.
- [ ] A pack built with an older kit remains valid per its manifest.
- [ ] Builder releases appear in the changelog.

## 6. Outputs to produce in the repository
- `site/themes/starter-kit/` — manifest template, token file, flavour file, neutral-fallback reference, README.
- `site/builder.html` — the keyboard-only, offline builder UI.

## 7. Read before building
- [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md) — mini-plan
- [`theme-builder-and-starter-kit-dsh.md`](../suggestions/theme-builder-and-starter-kit-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
