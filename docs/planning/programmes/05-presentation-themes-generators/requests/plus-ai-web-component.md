# Agent request — plus-ai-web-component: Reusable +AI Web Component

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md)
> **Source:** spec [`plus-ai-web-component-dsh.md`](../../../../suggestions/plus-ai-web-component-dsh.md) · seed [`plus-ai-web-component.md`](../../../../suggestions/plus-ai-web-component.md)
> **Effort:** M · **Phase:** P2/P3 · **Position:** P2/P3 — the adoption lever; after the engine so theme attribute resolves to packs.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — DOM encapsulation model
- **Question:** Shadow DOM or slotted light DOM as the default encapsulation model?
- **Options:** (a) shadow DOM (declarative + constructed) · (b) slotted light DOM (meaning in light DOM, styling via custom properties) · (c) hybrid — light-DOM fallback content, shadow DOM only on script upgrade
- **Recommended:** (b) — spec 5.2 item 3 already requires the mark and meaning in the light DOM before any script runs; slotted light DOM keeps the fallback and the enhancement identical.
- **Your choice:** ✏️

### D2 — CSS custom-property/parts list
- **Question:** What is the initial list of exposed CSS custom properties/parts?
- **Options:** (a) a minimal fixed set now (colour, typography, spacing), extensible later · (b) defer the exact list to the theme engine's hook contract, exposing only a neutral set now · (c) a maximal set covering every theme token immediately
- **Recommended:** (b) — the spec's §10 says the list is "pending the theme engine's hook contract"; ship a minimal neutral set now and align with `theme-engine-and-packs` when it lands.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Implement the `<plus-ai-mark>` custom element (`site/assets/plus-ai-mark.js`) and its static-HTML fallback: the mark, meaning text verbatim, and responsible party are present in the light DOM before any script runs (per §1 D1).
3. Support the attributes `signer`, `declaration-url`, `spec-version`, `lang`; ignore unknown attributes without changing behaviour.
4. Render meaning text byte-identical to the declared `spec-version`; no attribute may alter or abridge it; the component only renders meaning for a version it bundles, and shows "status unavailable" when it cannot.
5. Resolve `lang` via reviewed translations only (translation-governance); an unsupported or malformed `lang` falls back to normative English.
6. Render status only from a real declaration record as dated evidence labels, never a score/rank/verdict; `signer` is never styled verified without separate evidence labels; absent `declaration-url` implies no declaration.
7. Bound styling per §1 D2 (documented custom properties/parts, no global styles/scripts/fonts); without host styling, render as readable neutral text.
8. Enforce security/privacy: no network request unless resolving `declaration-url` or a page assertion; no cookies, storage, or tracking; on remote failure show "status unavailable".
9. Distribute in the offline pack, load from `file://` with no build step, and report the component version alongside `spec-version`; keep markup authored for older component versions rendering its declared `spec-version`.
10. Self-check against §4.

## 3. Constraints (must-nots)
- Meaning text MUST NOT be alterable or abridgeable by any attribute.
- `signer` MUST NOT be styled as verified without separate evidence labels.
- No score, rank, or single verdict; status is dated evidence labels only.
- No network request, cookie, or storage when merely rendering.
- The `lang` attribute carries the multi-language standard: reviewed translations only (R5), normative English fallback, `lang`/`dir` set per content language (R9), and the resolution order per R12.

## 4. Acceptance criteria
- [ ] With JavaScript disabled, the mark, meaning, and signer are fully present and readable.
- [ ] The meaning text is byte-identical to the declared `spec-version`'s canonical wording.
- [ ] `signer` is never styled as verified without separate evidence labels.
- [ ] With `declaration-url` absent, no declaration is implied.
- [ ] Status is rendered only as dated evidence labels, never a score or single verdict.
- [ ] With no network and no declaration link, the component renders from attributes and shows "status unavailable" when enhancement is attempted.
- [ ] The component makes no network request, cookie, or storage write when merely rendering.
- [ ] An unsupported `lang` falls back to normative English.
- [ ] The component loads from `file://` with no build step and themes only via published hooks.

## 5. Outputs to produce in the repository
- `site/assets/plus-ai-mark.js` — the custom element + static fallback.
- `site/plus-ai-mark.html` — a demo/documentation page for the component's attributes and hooks.

## 6. Read before building
- [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md) — mini-plan
- [`plus-ai-web-component-dsh.md`](../../../../suggestions/plus-ai-web-component-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
