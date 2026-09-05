# Development task — public-adoption-dashboard: Public Adoption Dashboard

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md)
> **Source:** spec [`public-adoption-dashboard-dsh.md`](../suggestions/public-adoption-dashboard-dsh.md) · seed [`public-adoption-dashboard.md`](../suggestions/public-adoption-dashboard.md)
> **Effort:** S · **Phase:** P2 · **Position:** after snapshots — THE-PLAN §18's "measure adoption, not attention" made concrete
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Aggregate, open reporting of adoption and operations metrics — honest numbers without surveillance or racing.
- **Why now / risk of deferring:** It follows snapshots as THE-PLAN §18's "measure adoption, not attention" made concrete. Deferring leaves adoption measurement ungoverned, inviting racing/vanity metrics — the no-leaderboard/no-vanity must-nots need to exist before the numbers do.
- **Features to deliver:**
  - Static `site/adoption.html` dashboard with each metric's definition, data source (snapshot version), and computation.
  - Metric set covering signers, organisations, real artifacts, declarations, languages, integrations, pilots, contributions, revocations, and service health.
  - Low-count suppression ("fewer than N").
  - Open data published through the snapshot pipeline so every number is reproducible from the cited snapshot.
  - Honest revocation/correction reporting; growth rates only with absolute numbers + definitions.
  - No rankings/leaderboards/vanity totals; no fingerprinting/tracking; accessibility floor.
  - Metric-definition changes announced with before/after comparability notes and versioned in the changelog.
  - Multilingual chrome and metric definitions follow the multi-language standard (R1/R4/R12/R13).
- **Depends on:** public-snapshots-and-api, opt-in-signatory-registry, privacy-respecting-analytics, accessibility-floor, financial-transparency

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Service health historical view
- **Question:** Does the dashboard's service-health metric include a historical series or only current status?
- **Option (a):** current status only at launch (uptime, snapshot freshness, queued-check backlog as point-in-time measured facts)
  - **For:** spec §5.2 item 8 requires service health "reported as measured facts (uptime, snapshot freshness, queued-check backlog) with their measurement method"; spec §10 lists "whether service health should include a historical view or only current status" as open, and point-in-time facts avoid implying trends a young service cannot yet back.
  - **Against:** None identified in the sources.
- **Option (b):** a historical view (e.g. trailing 90 days) from day one
  - **For:** a historical view (e.g. trailing 90 days) shows trends over time, useful for accountability.
  - **Against:** spec §10 leaves history undecided, and the young service has no history to chart yet (the brainstorm flags the phase tension: "dashboard on real data" is later); implying trends from a short history risks a misleading series.
- **Option (c):** defer service health entirely
  - **For:** deferring service health entirely avoids reporting immature operational numbers.
  - **Against:** spec §5.2 item 2 lists service health as a required metric ("Metrics MUST cover at least: ... and service health"), so deferring it entirely violates the spec's metric set.
- **Recommended:** (a) — spec §10 leaves history undecided; point-in-time facts avoid implying trends the young service cannot yet back.
- **Your choice:** ✏️

### D2 — Suppression threshold
- **Question:** What low-count suppression minimum does the dashboard publish?
- **Option (a):** inherit the research-observatory disclosure threshold (k = 10) with no stricter override at launch
  - **For:** spec §5.2 item 3 defaults the suppression minimum to "the disclosure threshold owned by research observatory (k = 10 by default) unless this document publishes a stricter value with justification"; inheriting k = 10 keeps one shared threshold across surfaces (brainstorm programme-level decision 3).
  - **Against:** None identified in the sources.
- **Option (b):** adopt a stricter value with published justification
  - **For:** spec §5.2 item 3 permits a stricter value "with justification", which is more conservative.
  - **Against:** no justification is proposed at launch (brainstorm programme-level decision 3: "none is proposed at launch, so all three surfaces share one threshold"), so a stricter value would split the shared threshold without cause.
- **Option (c):** a looser value
  - **For:** a looser value shows more granular metrics.
  - **Against:** spec §5.2 item 3 fixes the default at k = 10 owned by research-observatory; a looser value increases low-count disclosure risk (spec §5.1 principle 2 "Privacy-safe aggregates").
- **Recommended:** (a) — spec §5.2 item 3 defaults to k = 10 owned by research-observatory; keep the shared threshold across surfaces.
- **Your choice:** ✏️

### D3 — Reporting period
- **Question:** What reporting period do dashboard metrics use?
- **Option (a):** monthly
  - **For:** monthly keeps numbers fresh against the snapshot cadence (spec §5.5: "Dashboard releases follow the snapshot cadence") and the changelog; spec §5.3 lists "period: monthly | quarterly", so monthly is an allowed, fresher default.
  - **Against:** None identified in the sources.
- **Option (b):** quarterly
  - **For:** quarterly gives more stable numbers, less sensitive to month-to-month noise.
  - **Against:** quarterly is slower than the snapshot cadence (spec §5.5 "Dashboard releases follow the snapshot cadence"), so numbers would be less fresh against a change-feed-first cadence.
- **Option (c):** both — monthly numbers with quarterly rollups
  - **For:** both monthly numbers with quarterly rollups give freshness and stability.
  - **Against:** it is more work than the spec's single `period` field implies (spec §5.3 data model has one "period" value per dashboard version), and quarterly rollups "can follow once history accumulates" (recommendation).
- **Recommended:** (a) — monthly keeps numbers fresh against the snapshot cadence and the changelog; quarterly rollups can follow once history accumulates.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (no trust scores, privacy, accessibility, no silent change).
2. Create `site/adoption.html` — a static dashboard publishing each metric's definition, data source (snapshot version), and computation so any reader can reproduce it.
3. Cover at least the required metrics — signers, organisations, real artifacts, declarations, languages, integrations, pilots, contributions, revocations, and service health — each with its definition and counting rule (avoid double counting; e.g. a superseded declaration counts as one artifact's history, not two).
4. Enforce low-count suppression per D2: below the minimum, show "fewer than N" and nothing else.
5. Report service health as measured facts (per D1), never marketing; report revocations and corrections honestly, never hiding churn; growth rates only with absolute numbers and definitions.
6. Publish the dashboard data as open data through the snapshot pipeline (`registry/dashboard/<period>.json` per D3) so every number is reproducible from the cited snapshot; link each metric to its definition and the underlying directory.
7. Meet the accessibility floor; use no fingerprinting, tracking pixels, or per-visitor analytics; version dashboard releases in the changelog and announce metric-definition changes with before/after comparability notes; self-check against §5.
8. Apply the multi-language standard: English is the source of truth for metric definitions (R1); chrome falls back per key (R4) with resolution order `?lang=` → saved preference → browser `Accept-Language` → English (R12) and English as the crawler/no-JS default (R13).

## 4. Constraints (must-nots)
- No tracking, fingerprinting, or per-visitor analytics.
- No rankings, leaderboards, or vanity totals.
- Low-count stats suppressed to "fewer than N".
- No "most active", streaks, or volume badges (no metric rewarding appearance over accountable behaviour).
- No vendor leaderboards or tool-share rankings.
- Chrome and metric definitions follow the multi-language standard (R1/R4/R12/R13); metric data is never machine-translated.

## 5. Acceptance criteria
- [ ] Every metric publishes definition, source, and computation.
- [ ] A metric below the minimum group size renders "fewer than N".
- [ ] No dashboard page uses tracking or fingerprinting.
- [ ] No ranking of people, organisations, tools, or vendors appears.
- [ ] Revocations appear in the published numbers.
- [ ] Growth rates appear with absolute numbers and definitions.
- [ ] Dashboard data is reproducible from the cited snapshot.
- [ ] The dashboard meets the accessibility floor.
- [ ] A metric definition change is announced with comparability notes.

## 6. Outputs to produce in the repository
- `site/adoption.html` — static adoption/operations dashboard page.
- `registry/dashboard/<period>.json` — open dashboard data (metric definitions + values) via the snapshot pipeline.

## 7. Read before building
- [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md) — mini-plan
- [`public-adoption-dashboard-dsh.md`](../suggestions/public-adoption-dashboard-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (R1/R4/R12/R13 for chrome + metric definitions)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
