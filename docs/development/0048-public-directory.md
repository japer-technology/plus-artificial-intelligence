# Development task — public-directory: Public Directory

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md)
> **Source:** spec [`public-directory-dsh.md`](../suggestions/public-directory-dsh.md) · seed [`public-directory.md`](../suggestions/public-directory.md)
> **Effort:** M · **Phase:** P2 · **Position:** after snapshots — the first consumer proves the snapshot design
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Discoverable collections of opt-in records (people, orgs, projects, declarations, registers, pilots, integrations, translators, case studies) with clear filters and neutral ordering.
- **Why now / risk of deferring:** It is the first consumer of the snapshot pipeline — "the first consumer proves the snapshot design". Deferring leaves the registry with no discoverable surface and the one-business-day removal rule untested until a directory exists.
- **Features to deliver:**
  - Static collection pages over snapshot data for nine collections (people, organisations, projects, declarations, registers, pilots, integrations, translators, case studies) at `site/directory/`.
  - Non-endorsement notice on every page.
  - Neutral, documented ordering (publication date) with no purchasable position.
  - Minimal rows (identifiers + links only; binding kind + last-checked date where applicable).
  - Correction/revocation/abuse routes on every page, including a no-account path.
  - Search over the published snapshot index.
  - Revoked records disappear within one business day.
  - Snapshot-mirrorable under the registry licence; accessibility floor + shared navigation.
  - Multilingual chrome per the multi-language standard (R4 per-key fallback, R12 resolution order, R13 English crawler/no-JS default).
- **Depends on:** opt-in-signatory-registry, public-snapshots-and-api, visibility-and-consent, licensing-and-mark-policy, accessibility-floor

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Per-collection RSS feeds
- **Question:** Do collection pages publish RSS feeds at launch?
- **Option (a):** no RSS at launch — the directory ships static collection pages + snapshot-index search, and feeds are deferred to changelog-and-rss (which owns feeds)
  - **For:** spec §10 lists per-collection RSS feeds as an open question and points ownership at changelog-and-rss; digest 03 public-directory records "Open: per-collection RSS feeds".
  - **Against:** None identified in the sources.
- **Option (b):** one RSS feed per collection
  - **For:** per-collection feeds give subscribers granular updates per collection.
  - **Against:** feeds are owned by changelog-and-rss (spec §10; digest 03 public-directory "Open"), so building per-collection feeds here duplicates that owner's surface and risks divergent feed semantics.
- **Option (c):** a single directory-wide feed
  - **For:** one directory-wide feed is a single, simple subscription point.
  - **Against:** the same ownership conflict applies (spec §10 points feeds to changelog-and-rss); a directory-wide feed is still a feed surface the directory does not own.
- **Recommended:** (a) — spec §10 defers feed ownership to changelog-and-rss; shipping feeds here would duplicate that owner's surface.
- **Your choice:** ✏️

### D2 — Collection launch scope
- **Question:** How are collections with no records yet handled at launch?
- **Option (a):** ship all nine collection pages from the first snapshot, rendering a neutral empty state for collections with no records yet
  - **For:** spec §4.1 enumerates all nine collections (people, organisations, projects, declarations, registers, pilots, integrations, translators, case studies) as in scope, and stable per-collection URLs from day one avoid link churn.
  - **Against:** None identified in the sources.
- **Option (b):** ship only collections that currently have records, adding pages as data arrives
  - **For:** shipping only populated collections avoids empty pages that could confuse readers.
  - **Against:** spec §4.1 enumerates all nine as in scope, and adding pages as data arrives causes link churn (unstable URLs); the mini-plan "Build" names the full collection set.
- **Option (c):** ship a single directory page with anchors, splitting into per-collection pages later
  - **For:** a single page is the smallest launch surface.
  - **Against:** spec §4.1 defines nine collections (not one page with anchors), and per-collection pages are the directory's structure (digest 03 "Static collection pages over snapshot data"); splitting later creates link churn.
- **Recommended:** (a) — spec §4.1 enumerates all nine collections as in scope, and stable per-collection URLs from day one avoid link churn.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (static-first, no silent change, no trust scores, accessibility, privacy).
2. Create static collection pages at `site/directory/` for the nine collections (people, organisations, projects, declarations, registers, pilots, integrations, translators, case studies), pre-rendered over snapshot data and file://-safe.
3. Include only records with `public` visibility and recorded inclusion consent; rows show minimal data (identifiers + links; binding kind + last-checked date where applicable), never more than the record publishes.
4. Apply neutral, documented ordering (publication date) per collection; counts appear only as neutral totals.
5. Display the standing non-endorsement notice ("Inclusion is a record of voluntary listing, not approval, certification, or endorsement.") on every page.
6. Add correction, revocation, and abuse routes on every page, including a no-account path; removed records must disappear from the directory (indexes and caches) within one business day of revocation or visibility decrease.
7. Publish directory data through the snapshot pipeline under the same licence as the registry; search over the published snapshot index; link each row to the record's canonical page/passport.
8. Meet the accessibility floor (text-first row rendering) and shared navigation; ensure the no-account declaration path never touches the directory; self-check against §5.
9. Apply the multi-language standard to the directory chrome: English is the source of truth (R1); UI strings fall back to English per key (R4); resolution order is `?lang=` → saved preference → browser `Accept-Language` → English with only explicit choices persisted (R12); English stays the crawler/no-JS default (R13); typography follows the language, not the theme (R10); pages stay plain static files (R11). Record rows themselves are T4 — never machine-translated.

## 4. Constraints (must-nots)
- No purchased/sponsored ordering position.
- No aggregate scores, rankings, or popularity metrics.
- Revoked records disappear within one business day.
- Only public + consented records; rows must not duplicate evidence presentation beyond binding kind + last-checked date.
- The directory is never required for a declaration to be valid.
- Multilingual chrome follows the multi-language standard: English source of truth (R1), per-key UI fallback (R4), resolution order `?lang=` → saved preference → browser `Accept-Language` → English (R12), English crawler/no-JS default (R13); record rows are T4 and are never machine-translated.

## 5. Acceptance criteria
- [ ] No record appears without public visibility and recorded consent.
- [ ] Every page displays the non-endorsement notice.
- [ ] No ordering position can be purchased or sponsored.
- [ ] No collection displays scores, rankings, or popularity metrics.
- [ ] A revoked record disappears from the directory within one business day.
- [ ] Rows contain identifiers and links, not personal details beyond what the record publishes.
- [ ] Directory data is published in the snapshot pipeline and is mirrorable.
- [ ] Every page meets the accessibility floor.
- [ ] The no-account declaration path works without ever touching the directory.

## 6. Outputs to produce in the repository
- `site/directory/index.html` — directory landing page with the nine collections and the notice.
- `site/directory/<collection>.html` — nine static collection pages (people, organisations, projects, declarations, registers, pilots, integrations, translators, case studies).

## 7. Read before building
- [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md) — mini-plan
- [`public-directory-dsh.md`](../suggestions/public-directory-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../planning/digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (R1/R4/R10/R11/R12/R13; T4 for records)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
