# Development task — public-snapshots-and-api: Public Snapshots and API

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md)
> **Source:** spec [`public-snapshots-and-api-dsh.md`](../suggestions/public-snapshots-and-api-dsh.md) · seed [`public-snapshots-and-api.md`](../suggestions/public-snapshots-and-api.md)
> **Effort:** L · **Phase:** P2 · **Position:** right after the registry — every later surface (directory, federation, dashboard, API tier) reads snapshots, never the database
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Public data published as unauthenticated, cacheable, versioned snapshots plus a read-only API — the live database is never a read prerequisite.
- **Why now / risk of deferring:** It lands right after the registry because every later surface (directory, federation, dashboard, API tier) reads snapshots, never the database. Deferring risks the "snapshot cadence vs revocation urgency" failure — a nightly-only pipeline would violate the one-business-day removal rule, so the change-feed-first design must be built now.
- **Features to deliver:**
  - Deterministic, hash-pinned, paginated snapshot pipeline (`scripts/build-snapshots.mjs`) with a documented canonical serialisation.
  - Versioned snapshot files + sha256 manifest, old snapshots retained permanently.
  - Incremental change feeds keyed by snapshot-version pairs, with removals (redaction/tombstone) as explicit events.
  - Read-only API contract (profiles, declarations, search, verification, status) documented as unauthenticated, stateless, long-lived-cacheable, with the write path unreachable through it.
  - Per-version audit log (counts/categories) that never exposes private data.
  - Schemas versioned from launch (additive within a major version), with changelog-announced deprecation notice periods.
- **Depends on:** opt-in-signatory-registry, static-first-service-architecture, declaration-lifecycle, security-and-abuse-controls

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Snapshot release cadence
- **Question:** What default cadence governs snapshot publication?
- **Option (a):** change-feed-first: emit a snapshot on every material change (admission, revocation, redaction) with a guaranteed daily floor, so removal events propagate within one business day
  - **For:** change-feed-first with a daily floor makes removal events propagate within one business day, satisfying the directory's "revoked disappears within one business day" rule (public-directory spec §5.2 item 9) and the programme risk "snapshot cadence vs revocation urgency"; spec §5.5 requires a "documented cadence and after material changes" with old snapshots retained permanently.
  - **Against:** None identified in the sources.
- **Option (b):** nightly only
  - **For:** a nightly job is simple and predictable, and old snapshots are retained permanently regardless (spec §5.5).
  - **Against:** nightly-only would violate the one-business-day removal rule (programme risk; brainstorm programme-level decision 1 states "a nightly-only pipeline would violate it") — a removal could wait beyond the business-day window.
- **Option (c):** weekly only
  - **For:** a weekly cadence is the cheapest to operate.
  - **Against:** a weekly lag far exceeds the one-business-day removal window (programme risk), so removals would not propagate in time to satisfy the directory's rule.
- **Option (d):** on-demand manual publication
  - **For:** full operator control over exactly when a snapshot publishes.
  - **Against:** manual publication cannot guarantee one-business-day removal propagation (programme risk), and spec §5.5 requires a "documented cadence", which on-demand publication lacks.
- **Recommended:** (a) — the programme risk "snapshot cadence vs revocation urgency" and the directory's one-business-day removal rule require change-feed-first; a nightly-only pipeline would violate it.
- **Your choice:** ✏️

### D2 — Federation search endpoint
- **Question:** Does search expose a federation endpoint for community mirrors at launch?
- **Option (a):** no federation endpoint at launch — ship single-host search over the published snapshot index, and document the search-index format so mirrors can federate later
  - **For:** spec §5.4 keeps search over the published snapshot index ("never over live authoring data"), and §5.2 item 8 requires search over public records; documenting the index format lets mirrors federate later without building the endpoint now.
  - **Against:** None identified in the sources.
- **Option (b):** ship a federation endpoint now
  - **For:** a federation endpoint would let mirrors share search load immediately.
  - **Against:** spec §5.4 keeps search over the published index (single-host), and the mirror contract is not stable until federation-and-mirrors lands (brainstorm member open questions: "the federation search endpoint is deferred until federation-and-mirrors stabilises the mirror contract"), so building the endpoint now risks coupling to an unsettled contract.
- **Option (c):** defer search entirely
  - **For:** deferring search avoids a scale problem before the mirror contract exists.
  - **Against:** spec §5.2 item 8 lists "search over public records" as a required read-API endpoint at launch, so deferring search entirely violates the spec's read-API contract.
- **Recommended:** (a) — spec §5.4 keeps search over the published index; a federation endpoint is better resolved after federation-and-mirrors stabilises the mirror contract.
- **Your choice:** ✏️

### D3 — Read API rate-limit numbers
- **Question:** What default rate limits are documented for the read API at launch?
- **Option (a):** defer the specific numbers to security-and-abuse-controls + cost-discipline (Programme 8) — document "generous, community-use" with a placeholder and direct sustained consumers to snapshot downloads and mirrors
  - **For:** spec §5.2 item 10 requires rate limits "documented and generous enough for community use" with sustained consumers directed to snapshot downloads and mirrors; IMPLEMENTATION-PLAN §11 assigns default rate-limit numbers to verification-checker + security-and-abuse-controls with cost-discipline modelling, so the specific numbers are that owner's to set.
  - **Against:** spec §5.2 item 10 is a MUST to document rate limits, and a placeholder leaves the concrete numbers unspecified until Programme 8 lands.
- **Option (b):** set explicit numbers now (e.g. per-IP and per-key request budgets)
  - **For:** explicit per-IP/per-key budgets immediately satisfy the spec §5.2 item 10 "documented" MUST with concrete numbers.
  - **Against:** setting numbers now pre-empts security-and-abuse-controls + cost-discipline (IMPLEMENTATION-PLAN §11 assigns the default numbers to them; digest 07 security-and-abuse-controls lists "default rate limits" as Open).
- **Option (c):** no numeric limit, only a policy statement
  - **For:** a policy statement avoids arbitrary numbers before cost modelling exists.
  - **Against:** spec §5.2 item 10 requires rate limits to be *documented* (not just a policy statement) and generous for community use; no numeric limit leaves the surface without an enforceable bound, which security-and-abuse-controls expects (digest 07 controls include "rate limits").
- **Recommended:** (a) — IMPLEMENTATION-PLAN §11 assigns default rate-limit numbers to verification-checker + security-and-abuse-controls with cost-discipline modelling; the snapshot API must still document the policy and escape hatch now.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (static-first, no silent change, privacy, free floor).
2. Create `scripts/build-snapshots.mjs` — a deterministic, hash-pinned, paginated snapshot pipeline with a documented canonical serialisation; identical public state must produce identical bytes.
3. Publish versioned snapshots to `registry/snapshots/` with monotonically increasing version numbers, a `sha256` hash over the exact export bytes in a manifest, pagination with stable page keys and a documented total per version, and permanent retention of old snapshots.
4. Emit incremental, ordered change feeds keyed by snapshot-version pairs, including removals (redaction/tombstone) as explicit events.
5. Enforce the public-only filter by construction: `unlisted`, `local`, and `organisation-only` records must never appear; add a per-version audit log (counts/categories) that never exposes private data.
6. Document the read API contract in `docs/snapshots-and-api.md`: unauthenticated, stateless, long-lived-cache-header endpoints for profile reads, declaration reads, search over public records, verification lookup, and revocation/status lookup — all read-only; the write path must be unreachable through this surface.
7. Version schemas from launch (additive within a major version), announce schema changes and endpoint deprecations via the changelog, and honour the documented deprecation notice period; document the rate-limit policy per D3.
8. Verify two builds from identical state are byte-identical and the hash verifies, then self-check against §5.

## 4. Constraints (must-nots)
- Only `public` records appear — unlisted/private/organisation-only never.
- The write path must be unreachable through the read API surface.
- Removals (redaction/tombstone) are explicit feed events.
- No snapshot content may be paid-placed or ranked.
- No read requires authentication; no private data in audit logs.

## 5. Acceptance criteria
- [ ] Two builds from identical public state produce byte-identical snapshots.
- [ ] Every snapshot publishes a verifiable `sha256` hash.
- [ ] No unlisted or private record appears in any snapshot.
- [ ] A redaction appears as an explicit removal in the change feed.
- [ ] All read API endpoints work unauthenticated and return long-lived cache headers for versioned content.
- [ ] The write path is unreachable through the read API surface.
- [ ] Old snapshots remain downloadable after newer versions are released.
- [ ] A schema change is announced in the changelog before it takes effect.
- [ ] Deprecated endpoints continue working through their documented notice period.

## 6. Outputs to produce in the repository
- `scripts/build-snapshots.mjs` — deterministic, hash-pinned, paginated snapshot + change-feed generator.
- `registry/snapshots/` — versioned snapshot files, sha256 manifest, and change feeds; old versions retained.
- `docs/snapshots-and-api.md` — read-API contract (endpoints, cache headers, rate-limit policy, schema versioning, deprecation).

## 7. Read before building
- [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md) — mini-plan
- [`public-snapshots-and-api-dsh.md`](../suggestions/public-snapshots-and-api-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
