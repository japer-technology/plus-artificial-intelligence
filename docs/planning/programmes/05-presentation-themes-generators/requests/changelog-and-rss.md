# Agent request — changelog-and-rss: Changelog and RSS

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md)
> **Source:** spec [`changelog-and-rss-dsh.md`](../../../../suggestions/changelog-and-rss-dsh.md) · seed [`changelog-and-rss.md`](../../../../suggestions/changelog-and-rss.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 — the "no silent change" invariant's public face; adopt for all later releases.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Page rendering format
- **Question:** How does the human-readable page render the changelog (grouped vs flat, default filters)?
- **Options:** (a) flat chronological list, filterable by query parameters (category/severity) · (b) grouped by category with default filter "all" · (c) grouped by date/period
- **Recommended:** (a) — spec §5.4 says filters are "query-parameter presentation only"; a flat list with query-param filters is the simplest honest rendering and keeps one canonical order.
- **Your choice:** ✏️

### D2 — Feed structure
- **Question:** Does the feed expose a per-category variant, or one combined feed only?
- **Options:** (a) one combined feed only · (b) combined feed plus per-category filtered variants · (c) per-category feeds only
- **Recommended:** (a) — one combined feed with stable GUIDs is the single authoritative "what is current" channel the spec requires; per-category variants can be added later without reordering history.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Define the change-event record schema: immutable ID (never reused), ISO-8601 date, category, severity, English summary, links, optional `corrects` reference, and optional tagged+labelled translations.
3. Publish the category set (`spec-release`, `spec-correction`, `translation`, `theme`, `schema`, `registry-policy`, `governance`, `service-change`, `security`, `deprecation`) and the rule that a new category must join the published set before use.
4. Build `site/CHANGELOG.json` as the versioned, append-only normative record; keep the normative record English with non-English summaries attached to the English event, tagged and review-labelled per translation-governance.
5. Implement `scripts/generate-feed.mjs`: deterministic RSS/Atom generation with one entry per event, the event ID as stable GUID, full summaries, and no reordering/rewriting of past entries.
6. Implement the rendered page per §1 D1 and the feed structure per §1 D2; make the feed discoverable via `<link rel="alternate">`.
7. Implement correction handling: corrections are new events referencing the original via `corrects`; the original stays visible and unedited; both appear in the feed.
8. Enforce the notice threshold: normative releases/corrections, schema changes, registry-policy changes, governance decisions, security incidents, and availability/data service changes are always events; routine non-material changes may batch into a periodic summary event.
9. Guarantee archival: every changelog version and feed entry stays at a permanent URL; the changelog is hashable and never republished with altered history.
10. Ensure `file://`-safe rendering, include both files in the offline pack, and make the changelog the single authoritative "what is current" pointer siblings defer to.
11. Self-check against §4; confirm no entry carries a trust score, rank, or endorsement.

## 3. Constraints (must-nots)
- History MUST NOT be rewritten — corrections are new `corrects` events.
- The changelog MUST NOT publish trust scores, rankings, or endorsements.
- The feed MUST NOT reorder or rewrite past entries.
- The page and feed MUST be generated from the record, never hand-maintained in parallel.
- Who may publish events is owned by `governance-and-stewardship` (Programme 1) — do not invent an authority here.

## 4. Acceptance criteria
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

## 5. Outputs to produce in the repository
- `site/CHANGELOG.json` — the versioned, append-only changelog record.
- `site/changelog.html` — the rendered, filterable page.
- `site/feed.xml` — the deterministic RSS/Atom feed.
- `scripts/generate-feed.mjs` — the deterministic feed generator.

## 6. Read before building
- [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md) — mini-plan
- [`changelog-and-rss-dsh.md`](../../../../suggestions/changelog-and-rss-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
