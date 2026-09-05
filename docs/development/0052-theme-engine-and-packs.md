# Development task — theme-engine-and-packs: Theme Engine and Packs

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md)
> **Source:** spec [`theme-engine-and-packs-dsh.md`](../suggestions/theme-engine-and-packs-dsh.md) · seed [`theme-engine-and-packs.md`](../suggestions/theme-engine-and-packs.md)
> **Effort:** M · **Phase:** P2 · **Position:** after the linter — the engine must be born linter-checkable.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Separate canonical content/behaviour from visual theme packs: one engine renders many identities; meaning stays engine property.
- **Why now / risk of deferring:** Ordered after the linter — the engine must be born linter-checkable (mini-plan Order). Risk: "legacy drift during transition" — until the generator imports legacy skeletons, spec edits still cost N page edits, so spec text must be frozen during P2 or a managed migration window accepted (programme Risks).
- **Features to deliver:**
  - A theme engine runtime (`site/assets/engine.js` + `engine.css`) rendering canonical content from the shared data source keyed to the existing `data-*` hooks.
  - A pack manifest schema (id/version/hash/languages/accessibility/conformance-check-date/assets).
  - A formalised hooks contract (`site/hooks-contract.json`).
  - A neutral fallback pack.
  - Graceful fallback with a visible notice on broken packs.
  - Byte-identical normative text under any pack.
  - Legacy single-file pages treated as frozen instances.
  - Content + pack hashes verifiable by the linter/checker.
  - A stable versioned API for generators and the linter.
- **Depends on:** conformance-linter (validates packs), specification-versioning-and-hashing (content hashes), shared-project-navigation (nav hooks), accessibility-floor (fallback route)

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Engine initial scope
- **Question:** Is the engine a single-page runtime, a small build step, or both — resolving the permalink question (engine URLs vs per-theme files)?
- **Option (a):** single-page runtime only (`?theme=` URLs)
  - **For:** Matches "archive stays, engine is the forward path" (programme Risks) and is the simplest runtime.
  - **Against:** Drops stable per-theme permalinks, which signer themes and legacy-style sharing need (programme Risks: pretty permalinks "only where a signer needs one"; spec §5.2 item 9 preserves the signer's presentation choice).
- **Option (b):** a small build step that still emits file://-safe per-theme pages
  - **For:** Emits file://-safe per-theme pages, preserving legacy-style permalinks and signer sharing (spec §5.2 item 6 legacy pages remain valid).
  - **Against:** Loses interactive runtime theme-switching, and spec §10 leaves runtime-vs-build undecided.
- **Option (c):** hybrid — runtime for interactive theme-switching, plus a build step (via generator-pipeline) emitting stable per-theme permalinks where a signer needs one
  - **For:** The runtime is the forward path while the build step keeps legacy-style permalinks alive and signer themes shareable (programme Risks + IMPLEMENTATION-PLAN §11).
  - **Against:** The largest scope — two rendering paths that must stay consistent.
- **Recommended:** (c) — the programme Risks and IMPLEMENTATION-PLAN §11 both say "archive stays, engine is the forward path, pretty permalinks only where a signer needs one": the runtime is the forward path, the build step keeps legacy-style permalinks alive and signer themes shareable.
- **Your choice:** ✏️

### D2 — Pack-manifest signing
- **Question:** Should pack manifests be signed, and by which keys (joint with Programme 1's `continuity-and-namespace-custody`)?
- **Option (a):** unsigned — content hash only, verified by hash pinning
  - **For:** Hashes ship immediately without waiting for key custody; spec §5.2 item 8 only requires hashes to be verifiable.
  - **Against:** Hash pinning alone gives no authorship or authenticity signal, leaving the "signed manifests" open question (digest "Open: signed manifests") unresolved.
- **Option (b):** signed by the project's continuity key set (m-of-n custody from Programme 1)
  - **For:** Hashes ship immediately, signing lands once Programme 1's key custody exists, and the key half has a named joint owner (`continuity-and-namespace-custody`, brainstorm programme-level decision 4).
  - **Against:** Depends on Programme 1's m-of-n custody, which does not exist yet.
- **Option (c):** signed per-pack by the author's key with an optional project co-sign
  - **For:** Per-pack author signing gives attribution without waiting on the project key set.
  - **Against:** Fragmented keys complicate verification and diverge from the joint-custody ownership the brainstorm names (programme-level decision 4).
- **Recommended:** (b) — hashes ship immediately, signing lands once Programme 1's key custody exists; name `continuity-and-namespace-custody` (Programme 1) as joint owner for the key half.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Implement the engine runtime (`site/assets/engine.js` + `engine.css`) that renders canonical content from the shared data source, with normative text verbatim and keyed to the existing `data-*` hooks so translations and tooling keep working; scope it per §2 D1.
3. Define the pack manifest schema: pack id, version, sha256 content hash, supported languages, accessibility characteristics, conformance-check date, and asset list — with signing per §2 D2.
4. Formalise the hooks contract: translation script order, element identifiers (`languageSelect`, `specContent`, `tocList`, …), class hooks (`.spec-section`, `.meaning-card`, …), and `data-text`/`data-html` keys — taking ownership of the `site/hooks-contract.json` the linter extracted at P0.
5. Isolate flavour text in packs and render normative text only from canonical data, never from theme copy.
6. Implement graceful fallback: a pack that fails to load or validate renders the neutral accessible route with a visible notice.
7. Preserve legacy pages as frozen instances: regeneration must be byte-identical or a recorded version change (no silent change); old URLs keep working and stay mirrorable.
8. Expose a stable, versioned API for the generator and linter so packs are validated before publication; pack selection travels in the URL or a documented default.
9. Enforce no-remote-dependencies: engine and packs run from `file://` with no fetch, build step required to *view*, or tracking.
10. Cover content hashes (canonical content per version) and pack hashes (pack per version), verifiable by the checker and linter; pack versions are permanent and announced in the changelog.
11. Self-check against §5; confirm any pack renders byte-identical normative text and a broken pack falls back with a notice.

## 4. Constraints (must-nots)
- No theme may change normative meaning; flavour never restates normative content.
- No remote dependencies in engine or packs.
- Legacy single-file pages stay byte-identical or versioned.
- The engine must run from `file://` with no fetch, build step to view, or tracking.
- Nav labels are localised content: the engine renders shared-project-navigation labels with per-key English fallback (R4) and the standard resolution order (R12), never reworded by a theme.

## 5. Acceptance criteria
- [ ] Rendering any pack produces byte-identical normative text.
- [ ] A pack manifest is required for gallery publication and carries its hash.
- [ ] The engine runs from `file://` with no fetch or build step.
- [ ] A broken pack falls back to the neutral route with a visible notice.
- [ ] Legacy pages remain byte-identical or show a recorded version change.
- [ ] The linter validates packs against the hooks contract.
- [ ] A signer's themed link keeps its theme without an account.
- [ ] Pack versions are announced in the changelog.

## 6. Outputs to produce in the repository
- `site/assets/engine.js` + `site/assets/engine.css` — the engine runtime.
- `site/packs/<packId>/` — pack directory (`manifest.json`, `theme.css`, `flavour.json`, `note.json`).
- `site/packs/neutral/` — the neutral fallback pack.
- `site/hooks-contract.json` — the formalised hooks contract (extracted by `conformance-linter`, owned here).

## 7. Read before building
- [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md) — mini-plan
- [`theme-engine-and-packs-dsh.md`](../suggestions/theme-engine-and-packs-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
