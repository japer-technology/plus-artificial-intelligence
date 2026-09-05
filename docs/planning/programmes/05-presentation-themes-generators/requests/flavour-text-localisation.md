# Agent request — flavour-text-localisation: Flavour-Text Localisation

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md)
> **Source:** spec [`flavour-text-localisation-dsh.md`](../../../../suggestions/flavour-text-localisation-dsh.md) · seed [`flavour-text-localisation.md`](../../../../suggestions/flavour-text-localisation.md)
> **Effort:** S · **Phase:** P2 · **Position:** with the pack manifest (its `flavour.json` slot).
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Community-flavour review minimum
- **Question:** Must `community` flavour pass a minimum review before it appears in default gallery previews?
- **Options:** (a) no minimum review — community flavour renders in the default fallback order and default gallery previews, always labelled `community` · (b) one named maintainer review required before default gallery previews (engine fallback still includes it) · (c) community flavour renders in the engine fallback but is excluded from default gallery previews until a maintainer reviews it
- **Recommended:** (c) — keeps the spec's engine fallback order intact while keeping unreviewed human copy out of default discovery, matching the machine-draft "explicit choice" precedent.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, the multi-language standard (rules R1–R16), and IMPLEMENTATION-PLAN §4 invariants.
2. Define the flavour file format (`site/packs/<packId>/flavour.json`): per-string `id` + `neutral` fallback + `localised` entries (lang, text, status, adaptedBy, at, source), stored separately from normative text and keyed so the engine substitutes the neutral fallback per string.
3. Define the status labels exactly (`neutral`, `reviewed`, `community`, `machine`) and map them to the multi-language standard: `reviewed` requires the translation-governance review path (recorded reviewer); `machine` = the standard's machine-draft, always labelled, never presented as reviewed.
4. Define the fallback order (reviewed local → community local → neutral) and the rule that machine flavour never renders without a visible "machine-translated flavour" label.
5. Enforce the meaning boundary: a string that would change a reader's understanding of `+AI` if shown alone is treated as normative and moved to translation-governance, never kept as flavour.
6. Require attribution + source for adaptations; cultural review with forced replacement to the neutral fallback for insulting/untranslatable strings; accuracy + attribution + licensing for quotations.
7. Add the linter flavour rule: meaning-overlap with normative wording or a missing status = error (per the standard's R5, machine drafts are never presented as reviewed meaning).
8. Version flavour sets with the pack (flavour changes never trigger specification versioning); re-label or remove machine flavour when a reviewed translation arrives.
9. Apply the standard's §7 first steps as flavour-relevant instructions: status lives in data, never comments; machine flavour is always labelled; a reviewed upgrade reclassifies the string and updates the registry in the same commit (R16).
10. Self-check against §4.

## 3. Constraints (must-nots)
- Flavour MUST NOT restate, paraphrase, or "improve" normative meaning.
- Machine flavour MUST NOT render unlabelled.
- Insulting, misleading, or untranslatable strings MUST be replaced by the neutral fallback, never forced.
- Misattributed or unlicensed quotations MUST NOT ship.
- Per the multi-language standard: English stays the source of truth (R1); no partial silent mixing within a string (R3); a machine draft is never presented as reviewed meaning (R5); machine translation may seed drafts but is always labelled (R15); the neutral fallback meets the accessibility floor (R10/S9).

## 4. Acceptance criteria
- [ ] Every flavour string degrades to the neutral fallback without loss.
- [ ] No flavour string restates normative meaning.
- [ ] Every string carries a localisation status and machine strings are labelled when rendered.
- [ ] Adapted strings record attribution and source.
- [ ] An insulting or untranslatable string is replaced by the neutral fallback.
- [ ] Quotations are accurate, attributed, and licensed.
- [ ] The linter errors on strings that overlap normative wording or lack status.
- [ ] Flavour changes ship with pack versions and never trigger specification versioning.

## 5. Outputs to produce in the repository
- `site/packs/<packId>/flavour.json` — the flavour file format with fallback keying.
- The flavour linter rule in `scripts/conformance-lint.mjs`.
- The status labels + fallback order documented in the pack manifest schema (with `theme-engine-and-packs`).

## 6. Read before building
- [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md) — mini-plan
- [`flavour-text-localisation-dsh.md`](../../../../suggestions/flavour-text-localisation-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
