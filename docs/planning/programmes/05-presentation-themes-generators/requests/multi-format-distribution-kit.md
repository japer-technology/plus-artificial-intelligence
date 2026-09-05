# Agent request — multi-format-distribution-kit: Multi-Format Distribution Kit

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md)
> **Source:** spec [`multi-format-distribution-kit-dsh.md`](../../../../suggestions/multi-format-distribution-kit-dsh.md) · seed [`multi-format-distribution-kit.md`](../../../../suggestions/multi-format-distribution-kit.md)
> **Effort:** M · **Phase:** P2 · **Position:** after the generator (it emits from the same canonical source).
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Size bounds per format
- **Question:** What provisional size bounds apply per format, to be confirmed by testing?
- **Options:** (a) images ≤ 64 KB, SVG ≤ 16 KB, text-bearing formats ≤ 2 KB · (b) images ≤ 128 KB, SVG ≤ 32 KB, text ≤ 4 KB · (c) defer — document a bound per format at implementation with a placeholder to be fixed by testing
- **Recommended:** (a) — publish concrete provisional bounds now (the spec requires documented, bounded sizes) and finalise with accessibility/bandwidth testing.
- **Your choice:** ✏️

### D2 — Social-card/packaging brand review
- **Question:** Do the social-card and packaging formats require a separate brand-review step before shipping?
- **Options:** (a) yes — social-card and packaging formats require a separate brand review per licensing-and-mark-policy before shipping · (b) no — brand rules defer to licensing-and-mark-policy with no separate step · (c) yes for social-card only; packaging defers
- **Recommended:** (a) — social cards and packaging are the two brand-adjacent formats; a separate brand review keeps them honest and inside the mark policy.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Implement the format generator (`scripts/generate-formats.mjs`) producing the full catalogue — plain text, linked name, HTML, Markdown, SVG/PNG badges, monochrome print, QR, footer, slide, caption, packaging, social card, short copy, long copy — from canonical wording + the current published version.
3. Fix the canonical short copy as `AI helped. I take responsibility.` and reproduce the long copy without paraphrase; separate flavour text clearly.
4. Attach a version link + short fingerprint to every format; a format must not state a version it was not generated against.
5. Implement the meaning-preservation test per format comparing rendered canonical wording against source wording; a failing format must not ship.
6. Make text-bearing formats screen-reader accessible with redundant colour/imagery; make image formats monochrome-safe with alt text or an adjacent text equivalent, preferring SVG where scalability matters; the QR encodes the bare URL and shows it in visible text.
7. Apply size bounds per §1 D1 and the social-card/packaging brand review per §1 D2.
8. Emit per-format conformance notes following the per-theme note pattern (meaning-preservation result + accessibility limitations).
9. Keep every format `file://`-safe (no build step, no fetch, no account); hosted generation, if any, emits identical output.
10. Regenerate formats on version change, updating version link + fingerprint; self-check against §4.

## 3. Constraints (must-nots)
- Canonical wording MUST NOT be paraphrased; flavour MUST be clearly separated.
- No format MAY imply certification, endorsement, or a trust mark.
- No format MAY state a version it was not generated against.
- Format localisation carries the multi-language standard: non-English short/long copy must be reviewed or fall back to English with a notice (R1/R5); no partial silent mixing of languages within a format (R3).

## 4. Acceptance criteria
- [ ] The full format catalogue (the formats named in spec 5.2 item 1) exists.
- [ ] The canonical short copy is "AI helped. I take responsibility." in every text-bearing format.
- [ ] Every format carries the version link and fingerprint it was generated against.
- [ ] Every image format is monochrome-safe and carries alt text or an adjacent text equivalent.
- [ ] The QR encodes the bare URL and shows it in visible text.
- [ ] Every format renders from `file://` with no network fetch and no account.
- [ ] No format implies certification, endorsement, or a trust mark.
- [ ] A meaning-preservation test runs per format and a failing format cannot ship.
- [ ] Export sizes are documented and within their bounds.
- [ ] Regeneration on a version change updates the version link and fingerprint.

## 5. Outputs to produce in the repository
- `scripts/generate-formats.mjs` — the format generator.
- `site/formats/` — the generated format catalogue + per-format conformance notes.
- Meaning-preservation tests for each format.

## 6. Read before building
- [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md) — mini-plan
- [`multi-format-distribution-kit-dsh.md`](../../../../suggestions/multi-format-distribution-kit-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
