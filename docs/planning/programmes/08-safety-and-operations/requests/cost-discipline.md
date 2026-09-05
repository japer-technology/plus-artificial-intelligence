# Agent request — cost-discipline: Cost Discipline

> **Programme:** 08 · Safety and Operations — [`08-safety-and-operations.md`](../../08-safety-and-operations.md)
> **Source:** spec [`cost-discipline-dsh.md`](../../../../suggestions/cost-discipline-dsh.md) · seed [`cost-discipline.md`](../../../../suggestions/cost-discipline.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 model (it sizes the checker's rate limits and the relay's free tier); annual measurement recurring
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Free-quota sizes for the read API and email relay (joint with api-scale-and-reliability P9; consumers named)
- **Question:** Are the read-API and email-relay free quotas set now, or sized later by this model?
- **Options:** (a) not set now — this request publishes the model and its measurement method; the numeric quotas are set by api-scale-and-reliability once the model has its first annual numbers, with verification-checker (P3) and privacy-preserving-email-relay (P6) as the named consumers · (b) set provisional free-quota numbers now · (c) set the read-API quota now and defer only the relay quota
- **Recommended:** (a) — IMPLEMENTATION-PLAN §11 says the quotas are "set with cost modelling", and spec §5.1.1 says no limit is promised before its cost is modelled; publishing numbers before the first measurement would break that rule.
- **Your choice:** ✏️

### D2 — Hosted verification fetch-cost budget
- **Question:** What numeric budget bounds hosted verification fetch costs per record?
- **Options:** (a) defer the number — publish the budget line and its measurement method now, with the numeric cap set jointly with verification-checker and security-and-abuse-controls once rate-limit modelling lands · (b) set a provisional per-record fetch budget now · (c) fold fetch costs into general per-record cost with no separate budget
- **Recommended:** (a) — the fetch budget is a sub-item of the rate-limit decision owned jointly with security-and-abuse-controls; "measure before promising" (§5.1.1) defers the number while the category and method ship now.
- **Your choice:** ✏️

### D3 — Per-record cost segmentation by record type
- **Question:** Should per-record cost be segmented by record type (declaration, profile, registry entry)?
- **Options:** (a) yes — publish aggregate per-record cost plus a breakdown by record type, but only once the ledger has enough volume that segments are aggregate-safe (non-identifying) · (b) no — publish aggregate per-record cost only · (c) segment only between declarations and registry entries, never profiles
- **Recommended:** (a) — spec §10 raises it and segmenting shows which records cost most; gating on aggregate-safe volume keeps the breakdown consistent with privacy-and-data-minimisation.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy).
2. Publish `docs/cost-discipline.md` — the cost discipline policy: the eight cost categories (storage, bandwidth, moderation, mail, support, backup, abuse, shutdown), the structural controls (generated static views + immutable caching, queued checks, optional media, bounded hosted fetches, offline-first), and the no-paywall rule.
3. Publish the versioned cost model `site/cost-model.json` (spec §5.3 shape: `costModelVersion`, `period`, `categories[estimated, measured, trend]`, `perRecordCost`, `published`), initially carrying estimates with `measured` marked pending the first annual measurement; require at least annual updates announced in the changelog.
4. Record the free-quota posture per D1 (read API + email relay quotas set by api-scale-and-reliability once modelled; consumers named).
5. Record the hosted verification fetch-cost budget per D2 (category + measurement method; numeric cap set jointly with verification-checker/security-and-abuse-controls).
6. Record the per-record cost segmentation per D3 (aggregate plus by-record-type breakdown once aggregate-safe).
7. Document the queued-check backlog status requirement (visible to the requester, plain-language expected delay; the offline checker stays unlimited) and the shutdown reserve reporting obligation (continuity-and-namespace-custody).
8. Give the published cost model and status-page copy a localisation path per the multi-language standard: English source of truth (R1), resolution order `?lang=` → saved preference → browser → English (R12), English crawler/no-JS default (R13); numeric data is T0 and never translated, explanatory copy is T2.
9. Self-check against §4.

## 3. Constraints (must-nots)
- No free-floor removal for cost without the covenant amendment process — cost pressure first triggers queuing, bounding, or offline relocation.
- Media always optional; every page must be complete without images.
- Client-side tools preferred over hosted; anything that can run client-side must run client-side by default.
- No limit or service level is promised before its cost is modelled.
- Unbounded hosted verification fetch workloads are prohibited (bounded in size, count, and concurrency).
- Cost pressure triggers queuing/bounding/offline — never paywall.

## 4. Acceptance criteria
- [ ] A cost model covering all eight categories is published and annual.
- [ ] All public versioned content is served as cached static views (stated requirement).
- [ ] On-demand checks queue visibly under load while the offline checker stays unlimited (stated requirement).
- [ ] Every page is complete without media.
- [ ] Per-record cost is published in aggregate and updated with the model.
- [ ] No free-floor feature is removed for cost without the covenant amendment process.
- [ ] A new submission surface ships only after moderation cost is modelled (stated requirement).
- [ ] Shutdown reserves are reported in the model.
- [ ] The free-quota posture (D1), fetch-cost budget (D2), and segmentation posture (D3) are recorded.

## 5. Outputs to produce in the repository
- `docs/cost-discipline.md` — the cost discipline policy (eight categories, structural controls, no-paywall rule).
- `site/cost-model.json` — versioned machine-readable cost model (spec §5.3), estimates now, measured as data arrives.

## 6. Read before building
- [`08-safety-and-operations.md`](../../08-safety-and-operations.md) — mini-plan
- [`cost-discipline-dsh.md`](../../../../suggestions/cost-discipline-dsh.md) — full spec
- [`07-safety-operations-research.md`](../../../digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
