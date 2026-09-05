# Brainstorm — Programme 05: Presentation, Themes, and Generators

> Companion to [`05-presentation-themes-generators.md`](../05-presentation-themes-generators.md). Every member suggestion is decomposed here into **definitive features** and **pre-implementation decisions**; each has one agent request in [`requests/`](requests/). Workflow: open a request, record your choices in its §1, then give the file to your agent.

## Programme-level decisions (affect more than one request)

1. **Permalink question (engine URLs vs per-theme files).** The §11 cross-cutting risk and the programme Risks section both resolve it the same way: **archive stays, engine is the forward path**; pretty per-theme permalinks are emitted only where a signer needs one. This is decided in `theme-engine-and-packs` D1 (engine initial scope) and consumed by `generator-pipeline`, `multi-format-distribution-kit`, and `plus-ai-web-component`. Legacy `site/*.html` pages remain byte-stable permalinks throughout (IMPLEMENTATION-PLAN §3, §11 item 5).
2. **Hooks-contract extraction as the shared rule source.** The single machine-checkable contract is extracted from `site/index.html` and published once; the linter turns it into rules, the engine formalises it, and the generator emits against it. The extraction location/format is decided in `conformance-linter` D1 and owned going forward by `theme-engine-and-packs` (IMPLEMENTATION-PLAN §10).
3. **Multi-language standard as shared input.** [`best-practice-multi-language.md`](../../../analysis/best-practice-multi-language.md) (rules R1–R16, tiers T0–T4, status vocabulary reviewed/machine-draft/untranslated/outdated, resolution order) is the project-wide standard. `translation-governance` and `flavour-text-localisation` are the primary consumers (fold R1–R16 into §3, the §7 first steps into §2, and the §8 open questions into decisions). The surface requests — `accessibility-floor`, `plus-ai-web-component`, `multi-format-distribution-kit`, `theme-builder-and-starter-kit`, `generator-pipeline`, and `theme-engine-and-packs` (nav-label localisation) — each carry the §6 read-reference plus the relevant rules as §3 constraints.
4. **Pack-manifest signing is a joint decision.** `theme-engine-and-packs` D2 decides whether and how pack manifests are signed; `continuity-and-namespace-custody` (Programme 1) is named joint owner for the key-custody half (IMPLEMENTATION-PLAN §11).
5. **Output locations.** Pages live as `site/*.html`; tooling as `scripts/*.mjs` (matching `validate.mjs` et al.); machine-readable records as `site/*.json`; the pack collection under `site/packs/`; engine/component assets under `site/assets/`. Legacy theme pages stay byte-stable permalinks. This mirrors the Programme 1/2 conventions and IMPLEMENTATION-PLAN §3.
6. **One canonical wording source.** The meaning `AI helped. I take responsibility.` and the long explanation are reproduced **verbatim, never paraphrased** by every engine-rendered page, generator output, and distribution format; all defer to `site/SPECIFICATION.md` as the single upstream (invariant 2).

## Member-by-member brainstorm

### conformance-linter — Conformance Linter
- **Request:** [`requests/conformance-linter.md`](requests/conformance-linter.md)
- **Definitive features:** a CLI (`scripts/conformance-lint.mjs`) and a browser-local mode (`site/linter.html`) producing identical results; error/advice rule sets with passing+failing fixtures; machine-readable output for generators and CI; error rules covering translation hooks, element ids/class hooks, verbatim declaration wording, metadata/assertion surfaces, keyboard reach + focus, and content hashes; advice rules covering contrast margins, redundant alt text, unused hooks, pack-manifest completeness; exception records landing in per-theme conformance notes; versioned, changelog-announced rule set.
- **Decisions:** D1 — Hooks-contract extraction location/format; D2 — Default advice profile; D3 — Fixture format.
- **Open questions / risks:** contract extraction is shared with `theme-engine-and-packs` (the linter extracts first at P0, the engine owns it from P2). Risk: "linter adoption" (programme Risks) — a linter only the project runs is a cost; mitigated by shipping it as the builder's gate and the deploy.yml CI gate.

### changelog-and-rss — Changelog and RSS
- **Request:** [`requests/changelog-and-rss.md`](requests/changelog-and-rss.md)
- **Definitive features:** a versioned, append-only `site/CHANGELOG.json` record with immutable IDs, ISO-8601 dates, the 10 published categories, severity, summary, links, optional `corrects`, and tagged+labelled non-English summaries; a deterministic `site/feed.xml` (RSS/Atom) with stable GUIDs that never reorders past entries; a rendered `site/changelog.html` with query-param filters; a `scripts/generate-feed.mjs` generator; permanent URLs for every version and entry; inclusion in the offline pack.
- **Decisions:** D1 — Page rendering format; D2 — Feed structure (combined vs per-category).
- **Open questions / risks:** "who records events" is owned by `governance-and-stewardship` (Programme 1), not this request — this request must not invent an authority. Risk: the record becoming a reputation surface (guarded by the no-scores/ranks rule, spec §5.2 item 12).

### accessibility-floor — Accessibility Floor
- **Request:** [`requests/accessibility-floor.md`](requests/accessibility-floor.md)
- **Definitive features:** a published floor policy (`site/accessibility.html`) as the gate for all new pages (P0); the neutral route through every core task with a consistent "plain view" control (P2, with the engine); WCAG AA conformance; mechanical linter checks (contrast, focus, motion, reflow, keyboard, `lang`/`dir`); keyboard-only completion, visible focus, reading-order focus, screen-reader semantics, 320px reflow + 200% zoom, `prefers-reduced-motion`, monochrome print, CJK/RTL/mixed-language coverage, non-colour status, non-visual CAPTCHA alternatives, and a published bandwidth budget.
- **Decisions:** D1 — Bandwidth budget number; D2 — WCAG conformance baseline (2.1 vs 2.2 AA).
- **Open questions / risks:** the policy half lands P0, the implementation half P2 with the engine (the mini-plan's "Order" line splits it). Risk: CJK/RTL typography is shared with the multi-language standard (R10/S9) — carried as a §3 constraint here.

### theme-engine-and-packs — Theme Engine and Packs
- **Request:** [`requests/theme-engine-and-packs.md`](requests/theme-engine-and-packs.md)
- **Definitive features:** a theme engine runtime (`site/assets/engine.js` + `engine.css`) rendering canonical content from the shared data source keyed to the existing `data-*` hooks; a pack manifest schema (id/version/hash/languages/accessibility/conformance-check-date/assets); a formalised hooks contract (`site/hooks-contract.json`); a neutral fallback pack; graceful fallback with a visible notice on broken packs; byte-identical normative text under any pack; legacy single-file pages treated as frozen instances; content + pack hashes verifiable by the linter/checker; a stable versioned API for generators and the linter.
- **Decisions:** D1 — Engine initial scope (runtime vs build step); D2 — Pack-manifest signing (joint owner `continuity-and-namespace-custody`).
- **Open questions / risks:** D1 resolves the permalink question (archive stays, engine is the forward path); D2 names Programme 1's continuity key custody as joint owner. Risk: "legacy drift during transition" (programme Risks) — until the generator imports legacy skeletons, spec edits still cost N page edits; mitigated by freezing spec text during P2 or a managed migration window.

### flavour-text-localisation — Flavour-Text Localisation
- **Request:** [`requests/flavour-text-localisation.md`](requests/flavour-text-localisation.md)
- **Definitive features:** a flavour file format (`site/packs/<packId>/flavour.json`) with per-string fallback keying and status labels (neutral/reviewed/community/machine); the fallback order reviewed → community → neutral with machine always labelled; the meaning boundary (flavour never restates/paraphrases normative meaning); attribution + source recording for adaptations; cultural-review and humour/quotation rules; a linter flavour rule (meaning-overlap or missing-status = error); versioning with the pack (never triggering specification versioning).
- **Decisions:** D1 — Community-flavour review minimum.
- **Open questions / risks:** the spec's `neutral/community` statuses are flavour-specific and differ from the multi-language document vocabulary (reviewed/machine-draft/untranslated/outdated) — flagged so the agent maps `reviewed`→reviewed (recorded reviewer) and `machine`→machine-draft (always labelled) rather than inventing a third set. Risk: "i18n surface explosion" (programme Risks) — flavour × 40 languages is unbounded; the neutral-fallback rule is the scalable answer, enforced in the linter from day one.

### per-theme-conformance-notes — Per-Theme Conformance Notes
- **Request:** [`requests/per-theme-conformance-notes.md`](requests/per-theme-conformance-notes.md)
- **Definitive features:** a note schema (`site/packs/<packId>/note.json`) with measured/reviewed-labelled claims (supported features, accessibility characteristics, limitations, language coverage, content version, last check); every limitation naming its neutral fallback or labelled a blocker; dated `failed` entries that are never silently dropped; versioning with the pack and reference from the manifest; an accessible rendered note page; linter integration emitting measured fields; non-conformant themes flagged/excluded from gallery and surprise-me.
- **Decisions:** D1 — Review cadence for `reviewed` claims; D2 — Record upstream dependencies in the schema.
- **Open questions / risks:** notes are the gallery's admission data, so they must ship before the gallery (P2). Risk: a note becoming a "boast" (guarded by dated measured/reviewed labelling and the failure-visibility rule).

### theme-builder-and-starter-kit — Theme Builder and Starter Kit
- **Request:** [`requests/theme-builder-and-starter-kit.md`](requests/theme-builder-and-starter-kit.md)
- **Definitive features:** a starter kit (`site/themes/starter-kit/`) with manifest template, token file, flavour file, neutral-fallback reference, and a README of safe-customization boundaries + conformance instructions; a keyboard-only, offline builder (`site/builder.html`) with live lint, preview (including neutral comparison), and packaging; a token model (colour/spacing/typography/motion/print); edit-time blocking of normative-text and required-hook changes; packaging blocked while error rules fail; licensing confirmation at packaging; named maintainer group + versioned releases.
- **Decisions:** D1 — Scaffold the per-theme conformance reviewed-claims checklist.
- **Open questions / risks:** builder UI copy carries the multi-language standard's R4/R12 (per-key fallback + resolution order) as §3 constraints. Risk: the builder drifting from the engine contract (guarded by kit+engine co-release and the linter-on-save gate).

### generator-pipeline — Generator Pipeline
- **Request:** [`requests/generator-pipeline.md`](requests/generator-pipeline.md)
- **Definitive features:** a reproducible, diff-reviewable generator CLI (`scripts/generate.mjs`); a pipeline manifest (`site/pipeline-manifest.json`) declaring extension points and escape hatches; outputs for theme pages, shared navigation, metadata, social cards, indexes, and offline assets; normative text verbatim from canonical sources only; byte-identical rebuilds with timestamps/environment excluded; the linter as publication gate; escape hatches recorded in the pipeline manifest + per-theme notes; stable URLs; versioned, changelog-announced pipeline releases.
- **Decisions:** D1 — Emit the multi-format kit from this pipeline or a separate one; D2 — Diff review workflow.
- **Open questions / risks:** per-language metadata/social cards carry the multi-language standard (R9/R12) as §3 constraints. Risk: hand edits to generated files becoming bugs against sources (guarded by the revert-or-promote rule, spec §5.5).

### multi-format-distribution-kit — Multi-Format Distribution Kit
- **Request:** [`requests/multi-format-distribution-kit.md`](requests/multi-format-distribution-kit.md)
- **Definitive features:** a format generator (`scripts/generate-formats.mjs`) producing the full catalogue (plain text, linked name, HTML, Markdown, SVG/PNG badges, monochrome print, QR, footer, slide, caption, packaging, social card, short/long copy) from canonical wording + current version; canonical short copy `AI helped. I take responsibility.` verbatim everywhere; a version link + fingerprint on every format; per-format conformance notes; meaning-preservation tests gating shipment; documented size bounds; no certification/endorsement framing; `file://`-safe, no network fetch.
- **Decisions:** D1 — Size bounds per format; D2 — Social-card/packaging brand review.
- **Open questions / risks:** format localisation carries the multi-language standard (R1/R4/R5) as §3 constraints — non-English short/long copy must be reviewed or fall back to English with a notice. Risk: a format stating a version it wasn't generated against (guarded by the version+fingerprint rule).

### plus-ai-web-component — Reusable +AI Web Component
- **Request:** [`requests/plus-ai-web-component.md`](requests/plus-ai-web-component.md)
- **Definitive features:** the `<plus-ai-mark>` custom element (`site/assets/plus-ai-mark.js`) with a static-HTML light-DOM fallback rendering mark, meaning, and signer with JS disabled; attributes `signer`, `declaration-url`, `spec-version`, `lang`; meaning text byte-identical to the declared `spec-version`, never alterable by any attribute; status resolved only from a real record as dated evidence labels, never a score; bounded styling via documented CSS custom properties/parts; no network/cookie/storage on mere render; "status unavailable" on remote failure; distributable in the offline pack; component version reported alongside `spec-version`.
- **Decisions:** D1 — DOM encapsulation model (shadow vs slotted light DOM); D2 — CSS custom-property/parts list.
- **Open questions / risks:** the `lang` attribute carries the multi-language standard (R9/R12) as §3 constraints — reviewed translations only, normative English fallback. Risk: the component leaking into a verification badge (guarded by the no-verdict rule, spec §5.2 item 9).

### theme-gallery-community-voting — Theme Gallery and Community Voting
- **Request:** [`requests/theme-gallery-community-voting.md`](requests/theme-gallery-community-voting.md)
- **Definitive features:** a searchable gallery page (`site/gallery.html`) with previews, contributor credit, per-pack conformance-note summaries, and the neutral-route control; a neutral, documented default ordering; opt-in feedback sorts; favourites (local-first or explicit-consent) and presentation-only votes with published anti-manipulation + rate limits; vendor-capture disclosure; an accessible neutral list view; aggregate feedback data published via the snapshot pipeline; moderation-owned removal of non-conformant packs.
- **Decisions:** D1 — Comments (exist at all vs favourites+votes only).
- **Open questions / risks:** feedback signals must attach to packs only, never people (RL-9). Risk: popularity leaking into trust (guarded by the discovery-not-judgement rule and no-paid-placement rule).

### surprise-me-theme-mode — Surprise-Me Theme Mode
- **Request:** [`requests/surprise-me-theme-mode.md`](requests/surprise-me-theme-mode.md)
- **Definitive features:** a selection control (in shared navigation) + a landing page (`site/surprise.html`) exposing the shareable URL, the published selection rule, and the neutral-route control; a candidate set gated on current per-theme conformance notes + accessibility floor; a documented uniform random selection rule; published repetition rules; `prefers-reduced-motion` honoured; no cookies/fingerprinting; payment/votes never influence selection; offline-capable over the local gallery subset.
- **Decisions:** D1 — Rotate control (one surprise per action vs a second "tour" control).
- **Open questions / risks:** selection is stateless by design — the shareable URL, not session state, carries the revisit. Risk: drifting into a recommendation engine (guarded by the no-profiling rule and uniform random rule).

### custom-themes — Custom Themes
- **Request:** [`requests/custom-themes.md`](requests/custom-themes.md)
- **Definitive features:** a commission terms template (`site/custom-themes.html`) covering non-endorsement, brand, accessibility, ownership, maintenance, publication, security, and flavour scope; a written non-endorsement/no-legitimacy statement in every commission; delivery review (linter error rules + accessibility floor + security); client brand as presentation only; agreed-in-advance ownership; scoped maintenance with unmaintained packs flagged in conformance notes; publication as the client's choice; the free builder remaining equally capable in meaning.
- **Decisions:** D1 — Public price guide.
- **Open questions / risks:** D1 names `publications-and-merchandise` (Programme 9) as joint owner. Risk: a paid theme becoming a "superior mark" (guarded by the free-floor parity rule, spec §5.2 item 10).

### translation-governance — Translation Governance
- **Request:** [`requests/translation-governance.md`](requests/translation-governance.md)
- **Definitive features:** a translation payload schema (language code, status reviewed/community/machine/outdated, `basedOn` pointer + optional hash, maintainers, glossary version, corrections, credits) extending `site/translations/registry.js` and `spec.<code>.js`; per-language named maintainer groups with published review paths; versioned per-language glossaries (`docs/translations/glossary.<code>.md`); the document registry (`docs/translations/README.md`); dated, attributed corrections; factual translator credit without ranking; funded review producing the same `reviewed` status as volunteer review; regional-variant declaration; `file://`-safe static files in the offline pack.
- **Decisions:** D1 — Re-review window; D2 — Shared vs separate glossary; D3 — Reviewer-attribution location (standard Q2); D4 — Machine-draft value for T3 suggestions (standard Q3); D5 — Source-version pinning for `spec.<code>.js` (standard Q4, joint owner `specification-versioning-and-hashing`).
- **Open questions / risks:** D3–D5 are the multi-language standard's §8 open questions (Q1 was placed in Programme 3, not duplicated). Risk: status drift from the binary flag to the four-status vocabulary (finding G1) — the §7 first steps in §2 sequence the fix.
