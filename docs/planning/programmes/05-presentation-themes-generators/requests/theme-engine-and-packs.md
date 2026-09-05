# Agent request — theme-engine-and-packs: Theme Engine and Packs

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md)
> **Source:** spec [`theme-engine-and-packs-dsh.md`](../../../../suggestions/theme-engine-and-packs-dsh.md) · seed [`theme-engine-and-packs.md`](../../../../suggestions/theme-engine-and-packs.md)
> **Effort:** M · **Phase:** P2 · **Position:** after the linter — the engine must be born linter-checkable.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Engine initial scope
- **Question:** Is the engine a single-page runtime, a small build step, or both — resolving the permalink question (engine URLs vs per-theme files)?
- **Options:** (a) single-page runtime only (`?theme=` URLs) · (b) a small build step that still emits file://-safe per-theme pages · (c) hybrid — runtime for interactive theme-switching, plus a build step (via generator-pipeline) emitting stable per-theme permalinks where a signer needs one
- **Recommended:** (c) — the programme Risks and IMPLEMENTATION-PLAN §11 both say "archive stays, engine is the forward path, pretty permalinks only where a signer needs one": the runtime is the forward path, the build step keeps legacy-style permalinks alive and signer themes shareable.
- **Your choice:** ✏️

### D2 — Pack-manifest signing
- **Question:** Should pack manifests be signed, and by which keys (joint with Programme 1's `continuity-and-namespace-custody`)?
- **Options:** (a) unsigned — content hash only, verified by hash pinning · (b) signed by the project's continuity key set (m-of-n custody from Programme 1) · (c) signed per-pack by the author's key with an optional project co-sign
- **Recommended:** (b) — hashes ship immediately, signing lands once Programme 1's key custody exists; name `continuity-and-namespace-custody` (Programme 1) as joint owner for the key half.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Implement the engine runtime (`site/assets/engine.js` + `engine.css`) that renders canonical content from the shared data source, with normative text verbatim and keyed to the existing `data-*` hooks so translations and tooling keep working; scope it per §1 D1.
3. Define the pack manifest schema: pack id, version, sha256 content hash, supported languages, accessibility characteristics, conformance-check date, and asset list — with signing per §1 D2.
4. Formalise the hooks contract: translation script order, element identifiers (`languageSelect`, `specContent`, `tocList`, …), class hooks (`.spec-section`, `.meaning-card`, …), and `data-text`/`data-html` keys — taking ownership of the `site/hooks-contract.json` the linter extracted at P0.
5. Isolate flavour text in packs and render normative text only from canonical data, never from theme copy.
6. Implement graceful fallback: a pack that fails to load or validate renders the neutral accessible route with a visible notice.
7. Preserve legacy pages as frozen instances: regeneration must be byte-identical or a recorded version change (no silent change); old URLs keep working and stay mirrorable.
8. Expose a stable, versioned API for the generator and linter so packs are validated before publication; pack selection travels in the URL or a documented default.
9. Enforce no-remote-dependencies: engine and packs run from `file://` with no fetch, build step required to *view*, or tracking.
10. Cover content hashes (canonical content per version) and pack hashes (pack per version), verifiable by the checker and linter; pack versions are permanent and announced in the changelog.
11. Self-check against §4; confirm any pack renders byte-identical normative text and a broken pack falls back with a notice.

## 3. Constraints (must-nots)
- No theme may change normative meaning; flavour never restates normative content.
- No remote dependencies in engine or packs.
- Legacy single-file pages stay byte-identical or versioned.
- The engine must run from `file://` with no fetch, build step to view, or tracking.
- Nav labels are localised content: the engine renders shared-project-navigation labels with per-key English fallback (R4) and the standard resolution order (R12), never reworded by a theme.

## 4. Acceptance criteria
- [ ] Rendering any pack produces byte-identical normative text.
- [ ] A pack manifest is required for gallery publication and carries its hash.
- [ ] The engine runs from `file://` with no fetch or build step.
- [ ] A broken pack falls back to the neutral route with a visible notice.
- [ ] Legacy pages remain byte-identical or show a recorded version change.
- [ ] The linter validates packs against the hooks contract.
- [ ] A signer's themed link keeps its theme without an account.
- [ ] Pack versions are announced in the changelog.

## 5. Outputs to produce in the repository
- `site/assets/engine.js` + `site/assets/engine.css` — the engine runtime.
- `site/packs/<packId>/` — pack directory (`manifest.json`, `theme.css`, `flavour.json`, `note.json`).
- `site/packs/neutral/` — the neutral fallback pack.
- `site/hooks-contract.json` — the formalised hooks contract (extracted by `conformance-linter`, owned here).

## 6. Read before building
- [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md) — mini-plan
- [`theme-engine-and-packs-dsh.md`](../../../../suggestions/theme-engine-and-packs-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
