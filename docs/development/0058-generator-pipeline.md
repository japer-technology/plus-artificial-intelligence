# Development task — generator-pipeline: Generator Pipeline

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md)
> **Source:** spec [`generator-pipeline-dsh.md`](../suggestions/generator-pipeline-dsh.md) · seed [`generator-pipeline.md`](../suggestions/generator-pipeline.md)
> **Effort:** M · **Phase:** P2 · **Position:** after the engine — it retires the N-edits-per-spec-change cost and fixes the known `THEMES`-array staleness.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Single source-of-truth tooling emitting theme pages, navigation, metadata, social cards, indexes, and offline assets from canonical content + presentation data.
- **Why now / risk of deferring:** Ordered after the engine — it retires the N-edits-per-spec-change cost and fixes the known `THEMES`-array staleness (mini-plan Order). Risk: hand edits to generated files becoming bugs against sources (guarded by the revert-or-promote rule, spec §5.5).
- **Features to deliver:**
  - A reproducible, diff-reviewable generator CLI (`scripts/generate.mjs`).
  - A pipeline manifest (`site/pipeline-manifest.json`) declaring extension points and escape hatches.
  - Outputs for theme pages, shared navigation, metadata, social cards, indexes, and offline assets.
  - Normative text verbatim from canonical sources only.
  - Byte-identical rebuilds with timestamps/environment excluded.
  - The linter as publication gate.
  - Escape hatches recorded in the pipeline manifest + per-theme notes.
  - Stable URLs.
  - Versioned, changelog-announced pipeline releases.
- **Depends on:** theme-engine-and-packs, conformance-linter, shared-project-navigation, machine-readable-assertions, specification-versioning-and-hashing

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Emit the multi-format kit from this pipeline
- **Question:** Does the generator also emit the multi-format-distribution-kit assets, or does the kit stay a separate pipeline?
- **Option (a):** the generator emits the multi-format kit assets too (one pipeline)
  - **For:** One pipeline avoids a second generation run over the same canonical source.
  - **Against:** Couples the kit's own meaning-preservation tests and versioning into this pipeline, blurring the boundary the programme sequences (kit "after the generator (it emits from the same canonical source)").
- **Option (b):** the multi-format kit remains a separate pipeline consuming the same canonical source
  - **For:** The programme sequences the kit "after the generator (it emits from the same canonical source)"; keeping it separate preserves its own meaning-preservation tests and versioning while both share the one canonical source.
  - **Against:** Two pipelines to run and keep in sync over the shared source.
- **Option (c):** the generator emits only a manifest pointer, the kit runs as a downstream stage
  - **For:** The generator emits only a pointer, minimising coupling.
  - **Against:** A pointer alone does not emit the kit, and spec §10 asks generator-vs-separate without a pointer-only option, adding indirection.
- **Recommended:** (b) — the programme sequences the kit "after the generator (it emits from the same canonical source)"; keeping it a separate pipeline preserves its own meaning-preservation tests and versioning while both share the one canonical source.
- **Your choice:** ✏️

### D2 — Diff review workflow
- **Question:** Which workflow reviews the generated diff before publication?
- **Option (a):** pull-request-based: generated output is committed in the same PR as the source change and the diff reviewed in the PR, with CI re-running generation and failing on mismatch
  - **For:** PR-based review makes the "no silent change" invariant a branch-level fact and lets CI assert byte-identical regeneration (spec §5.2 items 2–3).
  - **Against:** Requires CI re-generation to be reliable and fast.
- **Option (b):** a CI-generated diff artifact reviewed by a designated maintainer before deploy
  - **For:** Centralises review with a designated maintainer before deploy.
  - **Against:** Separates the diff from the PR that introduced the source change, losing review context and not asserting "no silent change" at branch level (spec §5.2 item 3).
- **Option (c):** commit generated output separately and review via git diff
  - **For:** Simple git diff over committed output.
  - **Against:** Output committed separately can drift from its source commit, and CI cannot assert byte-identical regeneration in the same PR (spec §5.2 item 2).
- **Recommended:** (a) — PR-based review makes the "no silent change" invariant a branch-level fact and lets CI assert byte-identical regeneration.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Implement the generator CLI (`scripts/generate.mjs`) consuming canonical content + versioned presentation data only; generated pages render normative text verbatim from the canonical source.
3. Make generation reproducible: identical sources produce byte-identical output, with timestamps and environment data excluded or normalised.
4. Produce the required outputs: theme pages, shared navigation, metadata and social cards, indexes, and offline assets — emitted as committed static files that stay file://-safe (no build step to open, no fetch, no remote assets).
5. Define the pipeline manifest (`site/pipeline-manifest.json`): declared extension points (what may be overridden per pack/page/language, and the forbidden normative-text zone) and explicit escape hatches (each recording its reason in per-theme conformance notes and the manifest).
6. Implement the diff review workflow per §2 D2; linter errors block generated output from shipping.
7. Document per-asset source ownership (canonical content, pack assets, generated output) and its review path.
8. Version the pipeline; a pipeline change that alters output is a versioned release with a reviewed diff and changelog entry; stable URLs persist across versions.
9. Fix the known `THEMES`-array staleness by generating the theme index from the pack collection; import legacy page skeletons so they stay spec-current without losing bespoke design (per §2 D1 for the kit boundary).
10. Self-check against §5.

## 4. Constraints (must-nots)
- Normative text MUST be verbatim only, never from theme copy.
- No silent change — diffs MUST be reviewed before publication.
- Timestamps and environment data MUST be excluded from output bytes.
- Hand edits to generated files are treated as bugs against the sources (reverted or promoted into sources with review).
- Per-language metadata/social cards carry the multi-language standard: reviewed translations only, English fallback with a notice (R1/R5), `lang`/`dir` set per content language (R9), resolution order per R12.

## 5. Acceptance criteria
- [ ] Two runs over identical sources produce byte-identical output.
- [ ] Every generation run presents a reviewable diff before publication.
- [ ] Generated pages open from disk with no build step or fetch.
- [ ] Normative text in generated pages is byte-identical to canonical content.
- [ ] Linter errors block generated output from shipping.
- [ ] An escape hatch appears in both the pipeline manifest and the page's per-theme conformance notes.
- [ ] A pipeline version that changes output is released with a reviewed diff and changelog entry.
- [ ] Generated URLs remain stable across versions.

## 6. Outputs to produce in the repository
- `scripts/generate.mjs` — the reproducible generator CLI.
- `site/pipeline-manifest.json` — the pipeline manifest (extension points + escape hatches).
- Generated theme pages, navigation, metadata, social cards, indexes, and offline assets — committed as static files.

## 7. Read before building
- [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md) — mini-plan
- [`generator-pipeline-dsh.md`](../suggestions/generator-pipeline-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
