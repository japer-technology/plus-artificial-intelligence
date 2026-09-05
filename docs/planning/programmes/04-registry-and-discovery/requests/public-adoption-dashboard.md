# Agent request — public-adoption-dashboard: Public Adoption Dashboard

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md)
> **Source:** spec [`public-adoption-dashboard-dsh.md`](../../../../suggestions/public-adoption-dashboard-dsh.md) · seed [`public-adoption-dashboard.md`](../../../../suggestions/public-adoption-dashboard.md)
> **Effort:** S · **Phase:** P2 · **Position:** after snapshots — THE-PLAN §18's "measure adoption, not attention" made concrete
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Service health historical view
- **Question:** Does the dashboard's service-health metric include a historical series or only current status?
- **Options:** (a) current status only at launch (uptime, snapshot freshness, queued-check backlog as point-in-time measured facts) · (b) a historical view (e.g. trailing 90 days) from day one · (c) defer service health entirely
- **Recommended:** (a) — spec §10 leaves history undecided; point-in-time facts avoid implying trends the young service cannot yet back.
- **Your choice:** ✏️

### D2 — Suppression threshold
- **Question:** What low-count suppression minimum does the dashboard publish?
- **Options:** (a) inherit the research-observatory disclosure threshold (k = 10) with no stricter override at launch · (b) adopt a stricter value with published justification · (c) a looser value
- **Recommended:** (a) — spec §5.2 item 3 defaults to k = 10 owned by research-observatory; keep the shared threshold across surfaces.
- **Your choice:** ✏️

### D3 — Reporting period
- **Question:** What reporting period do dashboard metrics use?
- **Options:** (a) monthly · (b) quarterly · (c) both — monthly numbers with quarterly rollups
- **Recommended:** (a) — monthly keeps numbers fresh against the snapshot cadence and the changelog; quarterly rollups can follow once history accumulates.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (no trust scores, privacy, accessibility, no silent change).
2. Create `site/adoption.html` — a static dashboard publishing each metric's definition, data source (snapshot version), and computation so any reader can reproduce it.
3. Cover at least the required metrics — signers, organisations, real artifacts, declarations, languages, integrations, pilots, contributions, revocations, and service health — each with its definition and counting rule (avoid double counting; e.g. a superseded declaration counts as one artifact's history, not two).
4. Enforce low-count suppression per D2: below the minimum, show "fewer than N" and nothing else.
5. Report service health as measured facts (per D1), never marketing; report revocations and corrections honestly, never hiding churn; growth rates only with absolute numbers and definitions.
6. Publish the dashboard data as open data through the snapshot pipeline (`registry/dashboard/<period>.json` per D3) so every number is reproducible from the cited snapshot; link each metric to its definition and the underlying directory.
7. Meet the accessibility floor; use no fingerprinting, tracking pixels, or per-visitor analytics; version dashboard releases in the changelog and announce metric-definition changes with before/after comparability notes; self-check against §4.
8. Apply the multi-language standard: English is the source of truth for metric definitions (R1); chrome falls back per key (R4) with resolution order `?lang=` → saved preference → browser `Accept-Language` → English (R12) and English as the crawler/no-JS default (R13).

## 3. Constraints (must-nots)
- No tracking, fingerprinting, or per-visitor analytics.
- No rankings, leaderboards, or vanity totals.
- Low-count stats suppressed to "fewer than N".
- No "most active", streaks, or volume badges (no metric rewarding appearance over accountable behaviour).
- No vendor leaderboards or tool-share rankings.
- Chrome and metric definitions follow the multi-language standard (R1/R4/R12/R13); metric data is never machine-translated.

## 4. Acceptance criteria
- [ ] Every metric publishes definition, source, and computation.
- [ ] A metric below the minimum group size renders "fewer than N".
- [ ] No dashboard page uses tracking or fingerprinting.
- [ ] No ranking of people, organisations, tools, or vendors appears.
- [ ] Revocations appear in the published numbers.
- [ ] Growth rates appear with absolute numbers and definitions.
- [ ] Dashboard data is reproducible from the cited snapshot.
- [ ] The dashboard meets the accessibility floor.
- [ ] A metric definition change is announced with comparability notes.

## 5. Outputs to produce in the repository
- `site/adoption.html` — static adoption/operations dashboard page.
- `registry/dashboard/<period>.json` — open dashboard data (metric definitions + values) via the snapshot pipeline.

## 6. Read before building
- [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md) — mini-plan
- [`public-adoption-dashboard-dsh.md`](../../../../suggestions/public-adoption-dashboard-dsh.md) — full spec
- [`07-safety-operations-research.md`](../../../digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (R1/R4/R12/R13 for chrome + metric definitions)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
