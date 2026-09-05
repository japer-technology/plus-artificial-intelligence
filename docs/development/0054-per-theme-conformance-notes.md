# Development task — per-theme-conformance-notes: Per-Theme Conformance Notes

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md)
> **Source:** spec [`per-theme-conformance-notes-dsh.md`](../suggestions/per-theme-conformance-notes-dsh.md) · seed [`per-theme-conformance-notes.md`](../suggestions/per-theme-conformance-notes.md)
> **Effort:** S · **Phase:** P2 · **Position:** before the gallery ships (it is the gallery's admission data).
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Public notes per theme: features, accessibility characteristics, limitations, language coverage, content version, last check.
- **Why now / risk of deferring:** Ordered before the gallery ships — it is the gallery's admission data (mini-plan Order). Risk: a note becoming a "boast" (guarded by dated measured/reviewed labelling and the failure-visibility rule, brainstorm open risks).
- **Features to deliver:**
  - A note schema (`site/packs/<packId>/note.json`) with measured/reviewed-labelled claims (supported features, accessibility characteristics, limitations, language coverage, content version, last check).
  - Every limitation naming its neutral fallback or labelled a blocker.
  - Dated `failed` entries that are never silently dropped.
  - Versioning with the pack and reference from the manifest.
  - An accessible rendered note page.
  - Linter integration emitting measured fields.
  - Non-conformant themes flagged/excluded from gallery and surprise-me.
- **Depends on:** conformance-linter, theme-engine-and-packs, accessibility-floor

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Review cadence for `reviewed` claims
- **Question:** How often must human `reviewed` claims be re-assessed?
- **Option (a):** on-change only (re-assess when the theme or its upstreams change)
  - **For:** Re-assessing when the theme or its upstreams change keeps claims honest with minimal recurring burden.
  - **Against:** No backstop against silent staleness when nothing changes, so a `reviewed` claim can drift out of date (spec §5.2 item 2 requires dated claims; spec §10 leaves the interval open).
- **Option (b):** a fixed interval, e.g. every 12 months, plus on-change
  - **For:** On-change keeps claims honest when the pack moves, and a 12-month maximum catches silent staleness without imposing a heavy recurring burden.
  - **Against:** A 12-month window can still leave a `reviewed` claim stale for up to a year.
- **Option (c):** a fixed interval, e.g. every 6 months, plus on-change
  - **For:** The tightest cadence keeps claims most current.
  - **Against:** A heavier recurring burden on maintainers for marginal freshness gain, given spec §5.2 item 5 already requires re-issue on change and on check.
- **Recommended:** (b) — on-change keeps claims honest when the pack moves, and a 12-month maximum catches silent staleness without imposing a heavy recurring burden.
- **Your choice:** ✏️

### D2 — Record upstream dependencies in the schema
- **Question:** Does the note schema record the pack's upstream dependencies (engine, spec version, linter version), or is `contentVersion` + `lastCheck` enough?
- **Option (a):** yes — add an `upstreamDependencies` map (engine version, spec version/hash, linter version, translation registry version)
  - **For:** Stale upstream dependencies are exactly what make a note's claims out of date, so they should be first-class fields, not implied (spec §10 open question).
  - **Against:** A larger schema with more fields to keep current.
- **Option (b):** no — keep the schema minimal, `contentVersion` and `lastCheck.linter` already cover it
  - **For:** A minimal schema; `contentVersion` and `lastCheck.linter` already capture the main staleness signals (spec §5.2 item 3).
  - **Against:** Does not capture engine/linter/translation-registry version drift, which spec §10 specifically raises.
- **Option (c):** record only a `basedOn` pointer for content version
  - **For:** A single `basedOn` pointer is simpler than a full dependency map.
  - **Against:** Covers only content version, not the engine/linter/registry dependencies spec §10 raises.
- **Recommended:** (a) — stale upstream dependencies are exactly what make a note's claims out of date, so they should be first-class fields, not implied.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Define the note schema (`site/packs/<packId>/note.json`): themeId, noteVersion, supportedFeatures (measured/reviewed-labelled with basis, by, at), accessibility (contrast/motion/keyboard/screenReader with basis), limitations (each with a named neutral fallback or labelled blocker), languageCoverage, contentVersion, lastCheck (at, linter, result, failedRules), plus upstream dependencies per §2 D2.
3. Enforce the labelling rule: every claim is `measured` (linter/automated) or `reviewed` (human), with tool version or reviewer role and date.
4. Implement the accessible rendered note page; the gallery renders the note summary with a link to the full note, and surprise-me landings link it.
5. Integrate the linter: it emits the measured fields directly into a note draft the maintainer then publishes.
6. Enforce failure visibility: a failed check is a dated `failed` entry with failing rule ids, never silently dropped; a theme that loses conformance is flagged in the gallery and excluded from surprise-me.
7. Version notes with the pack and reference the note version from the manifest; a correction ships as a new note version, never an edit.
8. Apply the review cadence per §2 D1 for `reviewed` claims.
9. Self-check against §5.

## 4. Constraints (must-nots)
- No gallery or surprise-me entry without a conformance note.
- Failures MUST NOT be silently dropped.
- Every limitation MUST name its neutral fallback or be labelled a blocker.
- Notes are dated facts, not boasts: claims say measured or reviewed, never an undifferentiated "supports".

## 5. Acceptance criteria
- [ ] No theme appears in the gallery without a conformance note.
- [ ] Every claim is labelled measured or reviewed with its date and basis.
- [ ] A failed check appears as a dated failure with rule identifiers.
- [ ] Every limitation names its neutral fallback or is labelled a blocker.
- [ ] The note is versioned with the pack and referenced from the manifest.
- [ ] A non-conformant theme is excluded from surprise-me.
- [ ] Rendered notes meet the accessibility floor.
- [ ] A note correction ships as a new version, never an edit.

## 6. Outputs to produce in the repository
- `site/packs/<packId>/note.json` — the machine-readable note schema instance.
- `site/packs/<packId>/note.html` — the accessible rendered note page.
- Linter integration emitting measured fields in `scripts/conformance-lint.mjs`.

## 7. Read before building
- [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md) — mini-plan
- [`per-theme-conformance-notes-dsh.md`](../suggestions/per-theme-conformance-notes-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
