# Development task — changelog-and-rss: Changelog and RSS

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md)
> **Source:** spec [`changelog-and-rss-dsh.md`](../suggestions/changelog-and-rss-dsh.md) · seed [`changelog-and-rss.md`](../suggestions/changelog-and-rss.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 — the "no silent change" invariant's public face; adopt for all later releases.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Durable machine-readable changelog + RSS/Atom feed so every change (spec, themes, packs, signers) is visible and subscribable.
- **Why now / risk of deferring:** P0 — it is the "no silent change" invariant's public face, adopted for all later releases (mini-plan Order). The changelog and feed are the single authoritative "what is current" channel siblings defer to (spec §5.2 item 11); deferring leaves every later release without a subscribable change record.
- **Features to deliver:**
  - A versioned, append-only `site/CHANGELOG.json` record with immutable IDs, ISO-8601 dates, the 10 published categories, severity, summary, links, optional `corrects`, and tagged+labelled non-English summaries.
  - A deterministic `site/feed.xml` (RSS/Atom) with stable GUIDs that never reorders past entries.
  - A rendered `site/changelog.html` with query-param filters.
  - A `scripts/generate-feed.mjs` generator.
  - Permanent URLs for every version and entry.
  - Inclusion in the offline pack.
- **Depends on:** specification-versioning-and-hashing (version events), governance-and-stewardship (who records), translation-governance (multilingual page)

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Page rendering format
- **Question:** How does the human-readable page render the changelog (grouped vs flat, default filters)?
- **Option (a):** flat chronological list, filterable by query parameters (category/severity)
  - **For:** Spec §5.4 says filters are "query-parameter presentation only"; a flat list with query-param filters keeps the one canonical chronological order and is the simplest honest rendering.
  - **Against:** A flat list offers no default grouping for skimming a long history.
- **Option (b):** grouped by category with default filter "all"
  - **For:** Grouping by category gives a quick scannable view of each change type.
  - **Against:** Category grouping risks implying a categorical ordering where spec §5.2 item 1 defines the record as append-only chronological; spec §10 leaves the rendering format undecided with no driver for grouping.
- **Option (c):** grouped by date/period
  - **For:** Period grouping aids browsing very long histories.
  - **Against:** Period grouping fragments the single chronological stream the append-only record defines (spec §5.2 item 1) and adds a rendering choice the spec leaves open without need.
- **Recommended:** (a) — spec §5.4 says filters are "query-parameter presentation only"; a flat list with query-param filters is the simplest honest rendering and keeps one canonical order.
- **Your choice:** ✏️

### D2 — Feed structure
- **Question:** Does the feed expose a per-category variant, or one combined feed only?
- **Option (a):** one combined feed only
  - **For:** One combined feed with stable GUIDs is the single authoritative "what is current" channel the spec requires (spec §5.2 item 11), and per-category variants can be added later without reordering history.
  - **Against:** No per-category subscription granularity at launch.
- **Option (b):** combined feed plus per-category filtered variants
  - **For:** Gives subscribers per-category granularity alongside the combined feed.
  - **Against:** Multiple feeds risk diluting the single authoritative "what is current" pointer the spec mandates (spec §5.2 item 11), and spec §10 leaves per-category variants undecided.
- **Option (c):** per-category feeds only
  - **For:** Lets subscribers filter to their category of interest.
  - **Against:** With no combined feed there is no single "what is current" channel, contradicting spec §5.2 item 11's requirement that the feed be that single pointer.
- **Recommended:** (a) — one combined feed with stable GUIDs is the single authoritative "what is current" channel the spec requires; per-category variants can be added later without reordering history.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Define the change-event record schema: immutable ID (never reused), ISO-8601 date, category, severity, English summary, links, optional `corrects` reference, and optional tagged+labelled translations.
3. Publish the category set (`spec-release`, `spec-correction`, `translation`, `theme`, `schema`, `registry-policy`, `governance`, `service-change`, `security`, `deprecation`) and the rule that a new category must join the published set before use.
4. Build `site/CHANGELOG.json` as the versioned, append-only normative record; keep the normative record English with non-English summaries attached to the English event, tagged and review-labelled per translation-governance.
5. Implement `scripts/generate-feed.mjs`: deterministic RSS/Atom generation with one entry per event, the event ID as stable GUID, full summaries, and no reordering/rewriting of past entries.
6. Implement the rendered page per §2 D1 and the feed structure per §2 D2; make the feed discoverable via `<link rel="alternate">`.
7. Implement correction handling: corrections are new events referencing the original via `corrects`; the original stays visible and unedited; both appear in the feed.
8. Enforce the notice threshold: normative releases/corrections, schema changes, registry-policy changes, governance decisions, security incidents, and availability/data service changes are always events; routine non-material changes may batch into a periodic summary event.
9. Guarantee archival: every changelog version and feed entry stays at a permanent URL; the changelog is hashable and never republished with altered history.
10. Ensure `file://`-safe rendering, include both files in the offline pack, and make the changelog the single authoritative "what is current" pointer siblings defer to.
11. Self-check against §5; confirm no entry carries a trust score, rank, or endorsement.

## 4. Constraints (must-nots)
- History MUST NOT be rewritten — corrections are new `corrects` events.
- The changelog MUST NOT publish trust scores, rankings, or endorsements.
- The feed MUST NOT reorder or rewrite past entries.
- The page and feed MUST be generated from the record, never hand-maintained in parallel.
- Who may publish events is owned by `governance-and-stewardship` (Programme 1) — do not invent an authority here.

## 5. Acceptance criteria
- [ ] Every material change appears as a dated, categorised changelog event.
- [ ] Every event has an immutable ID that is never reused.
- [ ] A correction is a new entry referencing the original, and the original remains unedited.
- [ ] The feed is generated deterministically from the changelog with stable GUIDs.
- [ ] Non-English summaries carry language tags and review status.
- [ ] Past changelog versions and feed entries remain available at permanent URLs.
- [ ] The changelog and feed open from `file://` with no server.
- [ ] The changelog is bundled in the offline pack.
- [ ] No changelog entry carries a trust score, rank, or endorsement.
- [ ] Every specification release, schema change, and governance decision appears in the feed without manual re-entry.

## 6. Outputs to produce in the repository
- `site/CHANGELOG.json` — the versioned, append-only changelog record.
- `site/changelog.html` — the rendered, filterable page.
- `site/feed.xml` — the deterministic RSS/Atom feed.
- `scripts/generate-feed.mjs` — the deterministic feed generator.

## 7. Read before building
- [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md) — mini-plan
- [`changelog-and-rss-dsh.md`](../suggestions/changelog-and-rss-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
