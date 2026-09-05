# Agent request — public-directory: Public Directory

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md)
> **Source:** spec [`public-directory-dsh.md`](../../../../suggestions/public-directory-dsh.md) · seed [`public-directory.md`](../../../../suggestions/public-directory.md)
> **Effort:** M · **Phase:** P2 · **Position:** after snapshots — the first consumer proves the snapshot design
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Per-collection RSS feeds
- **Question:** Do collection pages publish RSS feeds at launch?
- **Options:** (a) no RSS at launch — the directory ships static collection pages + snapshot-index search, and feeds are deferred to changelog-and-rss (which owns feeds) · (b) one RSS feed per collection · (c) a single directory-wide feed
- **Recommended:** (a) — spec §10 defers feed ownership to changelog-and-rss; shipping feeds here would duplicate that owner's surface.
- **Your choice:** ✏️

### D2 — Collection launch scope
- **Question:** How are collections with no records yet handled at launch?
- **Options:** (a) ship all nine collection pages from the first snapshot, rendering a neutral empty state for collections with no records yet · (b) ship only collections that currently have records, adding pages as data arrives · (c) ship a single directory page with anchors, splitting into per-collection pages later
- **Recommended:** (a) — spec §4.1 enumerates all nine collections as in scope, and stable per-collection URLs from day one avoid link churn.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (static-first, no silent change, no trust scores, accessibility, privacy).
2. Create static collection pages at `site/directory/` for the nine collections (people, organisations, projects, declarations, registers, pilots, integrations, translators, case studies), pre-rendered over snapshot data and file://-safe.
3. Include only records with `public` visibility and recorded inclusion consent; rows show minimal data (identifiers + links; binding kind + last-checked date where applicable), never more than the record publishes.
4. Apply neutral, documented ordering (publication date) per collection; counts appear only as neutral totals.
5. Display the standing non-endorsement notice ("Inclusion is a record of voluntary listing, not approval, certification, or endorsement.") on every page.
6. Add correction, revocation, and abuse routes on every page, including a no-account path; removed records must disappear from the directory (indexes and caches) within one business day of revocation or visibility decrease.
7. Publish directory data through the snapshot pipeline under the same licence as the registry; search over the published snapshot index; link each row to the record's canonical page/passport.
8. Meet the accessibility floor (text-first row rendering) and shared navigation; ensure the no-account declaration path never touches the directory; self-check against §4.
9. Apply the multi-language standard to the directory chrome: English is the source of truth (R1); UI strings fall back to English per key (R4); resolution order is `?lang=` → saved preference → browser `Accept-Language` → English with only explicit choices persisted (R12); English stays the crawler/no-JS default (R13); typography follows the language, not the theme (R10); pages stay plain static files (R11). Record rows themselves are T4 — never machine-translated.

## 3. Constraints (must-nots)
- No purchased/sponsored ordering position.
- No aggregate scores, rankings, or popularity metrics.
- Revoked records disappear within one business day.
- Only public + consented records; rows must not duplicate evidence presentation beyond binding kind + last-checked date.
- The directory is never required for a declaration to be valid.
- Multilingual chrome follows the multi-language standard: English source of truth (R1), per-key UI fallback (R4), resolution order `?lang=` → saved preference → browser `Accept-Language` → English (R12), English crawler/no-JS default (R13); record rows are T4 and are never machine-translated.

## 4. Acceptance criteria
- [ ] No record appears without public visibility and recorded consent.
- [ ] Every page displays the non-endorsement notice.
- [ ] No ordering position can be purchased or sponsored.
- [ ] No collection displays scores, rankings, or popularity metrics.
- [ ] A revoked record disappears from the directory within one business day.
- [ ] Rows contain identifiers and links, not personal details beyond what the record publishes.
- [ ] Directory data is published in the snapshot pipeline and is mirrorable.
- [ ] Every page meets the accessibility floor.
- [ ] The no-account declaration path works without ever touching the directory.

## 5. Outputs to produce in the repository
- `site/directory/index.html` — directory landing page with the nine collections and the notice.
- `site/directory/<collection>.html` — nine static collection pages (people, organisations, projects, declarations, registers, pilots, integrations, translators, case studies).

## 6. Read before building
- [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md) — mini-plan
- [`public-directory-dsh.md`](../../../../suggestions/public-directory-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../../../digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (R1/R4/R10/R11/R12/R13; T4 for records)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
