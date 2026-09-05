# Agent request — per-theme-conformance-notes: Per-Theme Conformance Notes

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md)
> **Source:** spec [`per-theme-conformance-notes-dsh.md`](../../../../suggestions/per-theme-conformance-notes-dsh.md) · seed [`per-theme-conformance-notes.md`](../../../../suggestions/per-theme-conformance-notes.md)
> **Effort:** S · **Phase:** P2 · **Position:** before the gallery ships (it is the gallery's admission data).
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Review cadence for `reviewed` claims
- **Question:** How often must human `reviewed` claims be re-assessed?
- **Options:** (a) on-change only (re-assess when the theme or its upstreams change) · (b) a fixed interval, e.g. every 12 months, plus on-change · (c) a fixed interval, e.g. every 6 months, plus on-change
- **Recommended:** (b) — on-change keeps claims honest when the pack moves, and a 12-month maximum catches silent staleness without imposing a heavy recurring burden.
- **Your choice:** ✏️

### D2 — Record upstream dependencies in the schema
- **Question:** Does the note schema record the pack's upstream dependencies (engine, spec version, linter version), or is `contentVersion` + `lastCheck` enough?
- **Options:** (a) yes — add an `upstreamDependencies` map (engine version, spec version/hash, linter version, translation registry version) · (b) no — keep the schema minimal, `contentVersion` and `lastCheck.linter` already cover it · (c) record only a `basedOn` pointer for content version
- **Recommended:** (a) — stale upstream dependencies are exactly what make a note's claims out of date, so they should be first-class fields, not implied.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Define the note schema (`site/packs/<packId>/note.json`): themeId, noteVersion, supportedFeatures (measured/reviewed-labelled with basis, by, at), accessibility (contrast/motion/keyboard/screenReader with basis), limitations (each with a named neutral fallback or labelled blocker), languageCoverage, contentVersion, lastCheck (at, linter, result, failedRules), plus upstream dependencies per §1 D2.
3. Enforce the labelling rule: every claim is `measured` (linter/automated) or `reviewed` (human), with tool version or reviewer role and date.
4. Implement the accessible rendered note page; the gallery renders the note summary with a link to the full note, and surprise-me landings link it.
5. Integrate the linter: it emits the measured fields directly into a note draft the maintainer then publishes.
6. Enforce failure visibility: a failed check is a dated `failed` entry with failing rule ids, never silently dropped; a theme that loses conformance is flagged in the gallery and excluded from surprise-me.
7. Version notes with the pack and reference the note version from the manifest; a correction ships as a new note version, never an edit.
8. Apply the review cadence per §1 D1 for `reviewed` claims.
9. Self-check against §4.

## 3. Constraints (must-nots)
- No gallery or surprise-me entry without a conformance note.
- Failures MUST NOT be silently dropped.
- Every limitation MUST name its neutral fallback or be labelled a blocker.
- Notes are dated facts, not boasts: claims say measured or reviewed, never an undifferentiated "supports".

## 4. Acceptance criteria
- [ ] No theme appears in the gallery without a conformance note.
- [ ] Every claim is labelled measured or reviewed with its date and basis.
- [ ] A failed check appears as a dated failure with rule identifiers.
- [ ] Every limitation names its neutral fallback or is labelled a blocker.
- [ ] The note is versioned with the pack and referenced from the manifest.
- [ ] A non-conformant theme is excluded from surprise-me.
- [ ] Rendered notes meet the accessibility floor.
- [ ] A note correction ships as a new version, never an edit.

## 5. Outputs to produce in the repository
- `site/packs/<packId>/note.json` — the machine-readable note schema instance.
- `site/packs/<packId>/note.html` — the accessible rendered note page.
- Linter integration emitting measured fields in `scripts/conformance-lint.mjs`.

## 6. Read before building
- [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md) — mini-plan
- [`per-theme-conformance-notes-dsh.md`](../../../../suggestions/per-theme-conformance-notes-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
