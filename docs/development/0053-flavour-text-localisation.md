# Development task — flavour-text-localisation: Flavour-Text Localisation

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md)
> **Source:** spec [`flavour-text-localisation-dsh.md`](../suggestions/flavour-text-localisation-dsh.md) · seed [`flavour-text-localisation.md`](../suggestions/flavour-text-localisation.md)
> **Effort:** S · **Phase:** P2 · **Position:** with the pack manifest (its `flavour.json` slot).
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Govern decorative theme copy as presentation with its own localisation status and neutral fallback, never touching meaning.
- **Why now / risk of deferring:** Ordered with the pack manifest (its `flavour.json` slot) (mini-plan Order). Risk: "i18n surface explosion" — flavour × 40 languages is unbounded, so the neutral-fallback rule is the only scalable answer and must be enforced in the linter from day one (programme Risks).
- **Features to deliver:**
  - A flavour file format (`site/packs/<packId>/flavour.json`) with per-string fallback keying and status labels (neutral/reviewed/community/machine).
  - The fallback order reviewed → community → neutral, with machine always labelled.
  - The meaning boundary (flavour never restates/paraphrases normative meaning).
  - Attribution + source recording for adaptations.
  - Cultural-review and humour/quotation rules.
  - A linter flavour rule (meaning-overlap or missing-status = error).
  - Versioning with the pack (never triggering specification versioning).
- **Depends on:** theme-engine-and-packs, translation-governance (status vocabulary), conformance-linter

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Community-flavour review minimum
- **Question:** Must `community` flavour pass a minimum review before it appears in default gallery previews?
- **Option (a):** no minimum review — community flavour renders in the default fallback order and default gallery previews, always labelled `community`
  - **For:** Keeps the engine fallback order intact (spec §5.2 item 4) with `community` always labelled.
  - **Against:** Unreviewed human copy appears in default gallery previews, weakening the "reviewed where it claims to be" principle (spec §5.1 item 3).
- **Option (b):** one named maintainer review required before default gallery previews (engine fallback still includes it)
  - **For:** Ensures default gallery previews only ever show reviewed copy.
  - **Against:** Adds a review gate spec §10 leaves undecided, and it could stall the engine fallback that spec §5.2 item 4 includes `community` in.
- **Option (c):** community flavour renders in the engine fallback but is excluded from default gallery previews until a maintainer reviews it
  - **For:** Keeps the spec's engine fallback order intact while keeping unreviewed human copy out of default discovery, matching the machine-draft "explicit choice" precedent.
  - **Against:** Introduces a distinction between engine fallback and gallery preview that must be documented.
- **Recommended:** (c) — keeps the spec's engine fallback order intact while keeping unreviewed human copy out of default discovery, matching the machine-draft "explicit choice" precedent.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, the multi-language standard (rules R1–R16), and IMPLEMENTATION-PLAN §4 invariants.
2. Define the flavour file format (`site/packs/<packId>/flavour.json`): per-string `id` + `neutral` fallback + `localised` entries (lang, text, status, adaptedBy, at, source), stored separately from normative text and keyed so the engine substitutes the neutral fallback per string.
3. Define the status labels exactly (`neutral`, `reviewed`, `community`, `machine`) and map them to the multi-language standard: `reviewed` requires the translation-governance review path (recorded reviewer); `machine` = the standard's machine-draft, always labelled, never presented as reviewed.
4. Define the fallback order (reviewed local → community local → neutral) and the rule that machine flavour never renders without a visible "machine-translated flavour" label.
5. Enforce the meaning boundary: a string that would change a reader's understanding of `+AI` if shown alone is treated as normative and moved to translation-governance, never kept as flavour.
6. Require attribution + source for adaptations; cultural review with forced replacement to the neutral fallback for insulting/untranslatable strings; accuracy + attribution + licensing for quotations.
7. Add the linter flavour rule: meaning-overlap with normative wording or a missing status = error (per the standard's R5, machine drafts are never presented as reviewed meaning).
8. Version flavour sets with the pack (flavour changes never trigger specification versioning); re-label or remove machine flavour when a reviewed translation arrives.
9. Apply the standard's §7 first steps as flavour-relevant instructions: status lives in data, never comments; machine flavour is always labelled; a reviewed upgrade reclassifies the string and updates the registry in the same commit (R16).
10. Self-check against §5.

## 4. Constraints (must-nots)
- Flavour MUST NOT restate, paraphrase, or "improve" normative meaning.
- Machine flavour MUST NOT render unlabelled.
- Insulting, misleading, or untranslatable strings MUST be replaced by the neutral fallback, never forced.
- Misattributed or unlicensed quotations MUST NOT ship.
- Per the multi-language standard: English stays the source of truth (R1); no partial silent mixing within a string (R3); a machine draft is never presented as reviewed meaning (R5); machine translation may seed drafts but is always labelled (R15); the neutral fallback meets the accessibility floor (R10/S9).

## 5. Acceptance criteria
- [ ] Every flavour string degrades to the neutral fallback without loss.
- [ ] No flavour string restates normative meaning.
- [ ] Every string carries a localisation status and machine strings are labelled when rendered.
- [ ] Adapted strings record attribution and source.
- [ ] An insulting or untranslatable string is replaced by the neutral fallback.
- [ ] Quotations are accurate, attributed, and licensed.
- [ ] The linter errors on strings that overlap normative wording or lack status.
- [ ] Flavour changes ship with pack versions and never trigger specification versioning.

## 6. Outputs to produce in the repository
- `site/packs/<packId>/flavour.json` — the flavour file format with fallback keying.
- The flavour linter rule in `scripts/conformance-lint.mjs`.
- The status labels + fallback order documented in the pack manifest schema (with `theme-engine-and-packs`).

## 7. Read before building
- [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md) — mini-plan
- [`flavour-text-localisation-dsh.md`](../suggestions/flavour-text-localisation-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
