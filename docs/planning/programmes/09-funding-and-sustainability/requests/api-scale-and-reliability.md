# Agent request — api-scale-and-reliability: API Scale and Reliability

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../../09-funding-and-sustainability.md)
> **Source:** spec [`api-scale-and-reliability-dsh.md`](../../../../suggestions/api-scale-and-reliability-dsh.md) · seed [`api-scale-and-reliability.md`](../../../../suggestions/api-scale-and-reliability.md)
> **Effort:** M · **Phase:** P3 · **Position:** after the snapshot/API surface exists and has real consumers
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Free-quota size (joint owners)
- **Question:** What is the numeric free quota for the read API?
- **Options:** (a) set it jointly with cost-discipline (Programme 8) once its cost model is published, naming both owners in the design doc — the quota must cover community use and never be so small the free path is theoretical · (b) pick a provisional number now · (c) no numeric quota, "fair use" only
- **Recommended:** (a) — spec §5.2.2 requires the quota to cover community use and §10 fixes the number against the cost model; Programme 8 cost-discipline owns the model and Programme 4 public-snapshots-and-api owns the surface — both named as joint owners.
- **Your choice:** ✏️

### D2 — Regional delivery timing
- **Question:** Is regional delivery a first-launch tier feature or a later enhancement?
- **Options:** (a) later enhancement — launch without regional delivery, documenting it as a priced operating convenience whose cost basis is measured before offer · (b) first-launch feature across all paid tiers · (c) omit regional delivery entirely
- **Recommended:** (a) — spec §10 leaves whether regional delivery is first-launch to its cost basis; deferring avoids promising infrastructure before its marginal cost is modelled.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy).
2. Create `docs/services/api-scale-and-reliability.md`: the paid-tier design layered over the public read surface — the free quota per D1 (with joint owners Programme 8 cost-discipline and Programme 4 public-snapshots-and-api named); paid tiers (standard/high-volume); SLA/uptime/latency targets with published measurement and honest best-effort free tier; versioning (additive within a major, breaking changes only in a new major version + migration note); enumerated quotas/rate limits/fair-use limits linked to the cost model; long-lived immutable cache headers over snapshots; deprecation with fixed notice, changelog announcement, and graceful degradation; opt-in, documented, revocable, event-scoped webhooks and synchronisation; regional delivery per D2; dedicated support; abuse controls (threat model, per-surface rate limits, no-account incident reporting); incident communication (status page, changelog/RSS, plain-language degradation states); privacy analysis (no fingerprinting, cross-site profiling, or inferred tool use).
3. Include the Programme 8 gates in the same doc: static-first failure-mode statement (if the paid tier stops, the free quota, snapshots, schemas, change feeds, and the offline checker remain fully usable), threat model, privacy analysis, and per-record cost model.
4. Create `site/api-pricing.html`: the pricing surface rendering the free quota and tiers plus the "payment buys convenience, scale, support, or managed operations — never legitimacy, rank, or permission" statement from the covenant (not hand-written copy).
5. State that public snapshots, schemas, and change feeds remain free, unauthenticated, downloadable, and mirrorable; no tier gates access to public data.
6. State that revenue is reported through financial-transparency and no revenue arrangement may influence registry placement, moderation, or any public record's content.
7. Give the pricing and status surfaces a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13; pricing/status T2; API/schema wire keys T0 never translated).
8. Self-check against §4: walk the acceptance criteria and confirm each holds.

## 3. Constraints (must-nots)
- Payment buys convenience, scale, support, or managed operations — never legitimacy, rank, or permission.
- Snapshots, schemas, and change feeds always free, unauthenticated, downloadable, and mirrorable.
- No fingerprinting, cross-site profiling, or inferred tool use.
- No breaking change without a new major version + migration note.
- The free quota must cover community use and never be so small the free path is theoretical; fair-use limits never remove a free-floor capability.
- Webhooks and synchronisation are opt-in, documented, and revocable; never biometric proof, personal-data sales, or covert tracking.
- The pricing/status surfaces follow the multi-language standard (R1/R4/R12/R13; T2); wire keys are T0.

## 4. Acceptance criteria
- [ ] Public snapshots, schemas, and change feeds download without payment or an account.
- [ ] A documented free quota of read-API access exists and covers community use.
- [ ] Every API and schema is versioned from launch; no breaking change ships without a new major version.
- [ ] Every quota and service level is published with its cost-model justification.
- [ ] Versioned responses carry long-lived immutable cache headers.
- [ ] Webhooks and synchronisation are opt-in, documented, and revocable.
- [ ] A deprecation notice precedes removal by the documented period and is announced in the changelog.
- [ ] The API surface publishes a threat model and a privacy analysis before launch.
- [ ] A published failure-mode statement shows the free read path surviving the paid tier's outage.
- [ ] The pricing surface states that payment buys no legitimacy, rank, or permission.

## 5. Outputs to produce in the repository
- `docs/services/api-scale-and-reliability.md` — paid-tier design + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.
- `site/api-pricing.html` — public pricing surface (free quota, tiers, no-legitimacy statement).

## 6. Read before building
- [`09-funding-and-sustainability.md`](../../09-funding-and-sustainability.md) — mini-plan
- [`api-scale-and-reliability-dsh.md`](../../../../suggestions/api-scale-and-reliability-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../../../digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; pricing/status T2, wire keys T0)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
