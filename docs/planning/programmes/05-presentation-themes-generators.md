# Programme 5 — Presentation, Themes, and Generators

> Retires the biggest structural liability in the repo: ~90 hand-cloned theme
> pages that drift. Builds the linter first (drift detection), then the
> engine/packs (data/view separation), then the builder, generator, and
> gallery. Legacy archive pages remain byte-stable permalinks throughout.

- **Members (14):** conformance-linter, theme-engine-and-packs,
  generator-pipeline, theme-builder-and-starter-kit, surprise-me-theme-mode,
  per-theme-conformance-notes, flavour-text-localisation, custom-themes,
  theme-gallery-community-voting, accessibility-floor, translation-governance,
  changelog-and-rss, multi-format-distribution-kit, plus-ai-web-component
- **Agent requests:** [`05-presentation-themes-generators/`](05-presentation-themes-generators/) — brainstorm + one agent request per suggestion.
- **Effort:** 5 × S (surprise-me, per-theme notes, flavour text, changelog,
  custom-themes), 9 × M (linter, engine, builder, generator, multi-format,
  web component, gallery, accessibility floor, translation governance), 0 × L
- **Prerequisites:** Programme 2's specification-versioning-and-hashing
  (content hashes); Programme 1's shared-project-navigation (hook targets),
  licensing-and-mark-policy (pack licensing)
- **Phase:** P0 (linter, changelog, accessibility policy) → P2 (engine, packs,
  builder) → P3 (gallery, custom themes, web component)

## Mini-plans

### conformance-linter — Conformance Linter
- **Goal:** Automated check of every presentation/export/integration against the shared hooks contract — the machine that makes drift visible.
- **Build:** CLI + browser-local linter; error/advice rule sets with fixtures; machine-readable output for generators and CI.
- **Needs:** the existing hooks contract extracted from `site/index.html` as the rule source; accessibility-floor (mechanical checks); machine-readable-assertions (metadata rules later).
- **Must-nots:** never modifies checked files; advice never produces a failing exit code; every rule cites its contract item.
- **Done when:** local no-network run; errors vs advice separated; fixtures ship; exceptions recorded.
- **Effort:** M. **Order:** first — it gates the builder, generator, and pack review, and immediately audits the existing ~90 pages.

### changelog-and-rss — Changelog and RSS
- **Goal:** Durable machine-readable changelog + RSS/Atom feed so every change (spec, themes, packs, signers) is visible and subscribable.
- **Build:** changelog record schema (immutable ID/date/category/severity/summary/links); deterministic feed generation with stable GUIDs; rendered page.
- **Needs:** specification-versioning-and-hashing (version events), governance-and-stewardship (who records), translation-governance (multilingual page).
- **Must-nots:** history never rewritten — corrections are new `corrects` events; no trust scores/rankings; feed never reorders past entries.
- **Done when:** material changes appear; stable GUIDs; corrections referenced; file://-safe; included in the offline pack.
- **Effort:** S. **Order:** P0 — the "no silent change" invariant's public face; adopt for all later releases.

### accessibility-floor — Accessibility Floor
- **Goal:** Neutral, high-contrast, low-bandwidth route through every core task, above all decorative themes.
- **Build:** neutral-route pages + consistent "plain view" control; WCAG AA conformance; mechanical linter checks (contrast, focus, motion, reflow).
- **Needs:** theme-engine-and-packs (fallback route), per-theme-conformance-notes (disclosure), shared-project-navigation (route presence).
- **Must-nots:** no trapped focus; no colour-only state/error; visual CAPTCHA never the sole human-verification route; no essential function may depend on motion.
- **Done when:** keyboard-only tasks; AA contrast; 320px reflow; reduced-motion honoured; CJK/RTL; bandwidth budget met.
- **Effort:** M. **Order:** policy P0 (gate for all new pages); implementation with the engine P2.

### theme-engine-and-packs — Theme Engine and Packs
- **Goal:** Separate canonical content/behaviour from visual theme packs: one engine renders many identities; meaning stays engine property.
- **Build:** theme engine rendering canonical data + pack manifest; pack manifest schema (id/version/hash/languages/accessibility/conformance); hooks contract formalised; neutral fallback.
- **Needs:** conformance-linter (validates packs), specification-versioning-and-hashing (content hashes), shared-project-navigation (nav hooks), accessibility-floor (fallback route).
- **Must-nots:** no theme may change normative meaning; no remote dependencies in engine or packs; legacy single-file pages stay byte-identical or versioned.
- **Done when:** any pack renders byte-identical normative text; broken pack → neutral fallback with notice; file://-safe.
- **Effort:** M. **Order:** after the linter — the engine must be born linter-checkable.

### flavour-text-localisation — Flavour-Text Localisation
- **Goal:** Govern decorative theme copy as presentation with its own localisation status and neutral fallback, never touching meaning.
- **Build:** flavour file format + fallback keying; status labels (neutral/reviewed/community/machine); linter flavour rule (meaning-overlap or missing-status = error).
- **Needs:** theme-engine-and-packs, translation-governance (status vocabulary), conformance-linter.
- **Must-nots:** flavour never restates normative meaning; machine flavour never rendered unlabelled; insulting/untranslatable strings → neutral fallback.
- **Done when:** fallback degrades losslessly; statuses carried; linter errors on overlap; versioned with pack.
- **Effort:** S. **Order:** with the pack manifest (its `flavour.json` slot).

### per-theme-conformance-notes — Per-Theme Conformance Notes
- **Goal:** Public notes per theme: features, accessibility characteristics, limitations, language coverage, content version, last check.
- **Build:** note schema (measured/reviewed claims) + accessible rendering; linter integration emitting measured fields.
- **Needs:** conformance-linter, theme-engine-and-packs, accessibility-floor.
- **Must-nots:** no gallery/surprise-me entry without a note; failures never silently dropped; limitations must name their neutral fallback.
- **Done when:** note required for publication; claims labelled measured/reviewed; non-conformant flagged/excluded.
- **Effort:** S. **Order:** before the gallery ships (it is the gallery's admission data).

### theme-builder-and-starter-kit — Theme Builder and Starter Kit
- **Goal:** Accessible builder + tokens + starter files + preview + conformance checks so themes are creatable without cloning whole pages.
- **Build:** starter kit (manifest template, token file, flavour file, README); keyboard-only offline builder UI with live lint + preview + packaging.
- **Needs:** theme-engine-and-packs, conformance-linter, flavour-text-localisation, per-theme-conformance-notes, licensing-and-mark-policy.
- **Must-nots:** normative-text edits blocked at edit time; unreviewed machine translations never bundled; packaging blocked while error rules fail.
- **Done when:** conformant pack produced without full-page copy; keyboard-only; linter gates packaging; licensing confirmed.
- **Effort:** M. **Order:** after the engine — the builder is the engine's user surface.

### generator-pipeline — Generator Pipeline
- **Goal:** Single source-of-truth tooling emitting theme pages, navigation, metadata, social cards, indexes, and offline assets from canonical content + presentation data.
- **Build:** generator CLI (reproducible, diff-reviewable); pipeline manifest with declared extension points and escape hatches; linter as publication gate.
- **Needs:** theme-engine-and-packs, conformance-linter, shared-project-navigation, machine-readable-assertions, specification-versioning-and-hashing.
- **Must-nots:** normative text verbatim only, never from theme copy; no silent change — diffs reviewed before publication; timestamps/environment excluded from output.
- **Done when:** byte-identical rebuilds; diff reviewed; linter blocks shipping; stable URLs.
- **Effort:** M. **Order:** after the engine — it retires the N-edits-per-spec-change cost and fixes the known `THEMES`-array staleness.

### multi-format-distribution-kit — Multi-Format Distribution Kit
- **Goal:** Ready-to-use formats (text, HTML, Markdown, badges, print, QR, footers, slides, captions, packaging, social cards) for one meaning, many presentations.
- **Build:** format generator from canonical wording + current version; per-format conformance notes; meaning-preservation tests.
- **Needs:** licensing-and-mark-policy, accessibility-floor, certificates-badges-and-qr (QR/badge variants), specification-versioning-and-hashing.
- **Must-nots:** canonical wording never paraphrased; flavour clearly separated; no certification/endorsement framing; no format states a version it wasn't generated against.
- **Done when:** catalogue complete; short copy verbatim everywhere; version+fingerprint on each; failing format cannot ship.
- **Effort:** M. **Order:** after the generator (it emits from the same canonical source).

### plus-ai-web-component — Reusable +AI Web Component
- **Goal:** `<plus-ai-mark>` custom element rendering mark, meaning, signer, optional link/status consistently; styling is presentation only.
- **Build:** web component with static-HTML light-DOM fallback; attributes (`signer`, `declaration-url`, `spec-version`, `lang`); status resolution via evidence labels.
- **Needs:** specification-versioning-and-hashing (meaning pinned), machine-readable-assertions + verification-checker (status labels), translation-governance (lang), theme-engine-and-packs (theme values).
- **Must-nots:** meaning text never alterable/abridgeable by attributes; `signer` never styled verified without evidence labels; no score/verdict; no network request when merely rendering.
- **Done when:** JS-disabled readable; meaning byte-identical to spec version; no tracking; loads from file://.
- **Effort:** M. **Order:** P2/P3 — the adoption lever; after the engine so theme attribute resolves to packs.

### theme-gallery-community-voting — Theme Gallery and Community Voting
- **Goal:** Searchable gallery with previews, contributor credit, favourites, optional voting — discovery, never trust.
- **Build:** gallery page (search, previews, credit, neutral-route control); favourites/voting with anti-manipulation and rate limits; accessible neutral list view.
- **Needs:** theme-engine-and-packs, per-theme-conformance-notes, moderation-disputes-and-appeals (abuse), privacy-and-data-minimisation, privacy-respecting-analytics (aggregate signals), accessibility-floor.
- **Must-nots:** votes/favourites attach to packs only, never to people; no purchased/sponsored placement; default neutral ordering; no tracking/fingerprinting.
- **Done when:** default neutral/unpaid; non-conformant hidden; neutral accessible view; aggregate data mirrorable.
- **Effort:** M. **Order:** P3 — after notes and engine; voting signals feed builder presets.

### surprise-me-theme-mode — Surprise-Me Theme Mode
- **Goal:** Random/rotating path through conformant presentations — a discovery affordance, not a recommendation engine.
- **Build:** selection control + landing page (shareable URL, published selection rule, neutral-route control); candidate set gated on conformance notes + accessibility floor.
- **Needs:** theme-gallery-community-voting, per-theme-conformance-notes, theme-engine-and-packs.
- **Must-nots:** non-conformant themes never in the candidate set; no cookies/fingerprinting; payment/votes never influence selection.
- **Done when:** only conformant candidates; rule published; reduced-motion honoured; offline-capable.
- **Effort:** S. **Order:** after the gallery — quick win on top of it.

### custom-themes — Custom Themes
- **Goal:** Commissioned bespoke theme packs (paid design work) that never buy meaning, rank, or legitimacy.
- **Build:** commission terms template (non-endorsement, ownership, maintenance, security); delivery review: linter error rules + accessibility floor + security.
- **Needs:** theme-engine-and-packs, theme-builder-and-starter-kit, per-theme-conformance-notes, licensing-and-mark-policy, security-and-abuse-controls.
- **Must-nots:** no legitimacy/rank/endorsement/certification conferred; client brand never obscures the mark's meaning; no tracking or remote dependencies ship.
- **Done when:** terms on record; pack passes linter + floor; free builder equally capable; maintenance flagged.
- **Effort:** S. **Order:** P3 — a paid-service lane, shipped only after the free builder proves the capability.

### translation-governance — Translation Governance
- **Goal:** How +AI content is translated: maintainer groups, status labels, source-version tracking, glossaries, corrections, credit, funded review.
- **Build:** translation file format (language code/status/`basedOn`); per-language glossaries; maintainer-group review process.
- **Needs:** specification-versioning-and-hashing (basedOn pointers), flavour-text-localisation, conformance-linter (translation structure checks extend scripts/validate.mjs).
- **Must-nots:** machine text never presented as human-reviewed meaning; corrections as dated entries, never silent edits; funded review produces the same `reviewed` status as volunteer.
- **Done when:** status + basedOn everywhere; machine labelled; outdated marked on release; glossaries versioned.
- **Effort:** M. **Order:** process P1 (extends the existing 40-language discipline); glossary infra P2.

## Sequencing

1. **P0:** conformance-linter (extract hooks contract → rules → audit the ~90 existing pages); changelog-and-rss; accessibility-floor policy.
2. **P1:** translation-governance process (formalisess what validate.mjs already checks).
3. **P2:** theme-engine-and-packs → flavour-text-localisation + per-theme-conformance-notes → theme-builder-and-starter-kit → generator-pipeline → multi-format-distribution-kit.
4. **P3:** theme-gallery-community-voting → surprise-me-theme-mode → plus-ai-web-component → custom-themes.
5. Legacy archive: existing pages stay frozen permalinks; generator imports their skeletons so they stay spec-current without losing bespoke design.

## Risks

- **Permalink question:** engine URLs (`?theme=`) vs per-theme filenames — core-extensions §9.2 flags this as deciding "archive vs museum". Recommendation: keep archive files; engine is the forward path; pretty permalinks only where a signer needs one.
- **Linter adoption:** a linter that only the project runs is a cost; ship it as the builder's gate and the CI gate (deploy.yml) so it earns its keep immediately.
- **Legacy drift during transition:** until the generator imports legacy skeletons, spec edits still cost N page edits — freeze the spec text during P2 or accept a managed migration window.
- **i18n surface explosion:** flavour × 40 languages is unbounded; the neutral-fallback rule is the only scalable answer — enforce it in the linter from day one.
