# Agent request — public-snapshots-and-api: Public Snapshots and API

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md)
> **Source:** spec [`public-snapshots-and-api-dsh.md`](../../../../suggestions/public-snapshots-and-api-dsh.md) · seed [`public-snapshots-and-api.md`](../../../../suggestions/public-snapshots-and-api.md)
> **Effort:** L · **Phase:** P2 · **Position:** right after the registry — every later surface (directory, federation, dashboard, API tier) reads snapshots, never the database
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Snapshot release cadence
- **Question:** What default cadence governs snapshot publication?
- **Options:** (a) change-feed-first: emit a snapshot on every material change (admission, revocation, redaction) with a guaranteed daily floor, so removal events propagate within one business day · (b) nightly only · (c) weekly only · (d) on-demand manual publication
- **Recommended:** (a) — the programme risk "snapshot cadence vs revocation urgency" and the directory's one-business-day removal rule require change-feed-first; a nightly-only pipeline would violate it.
- **Your choice:** ✏️

### D2 — Federation search endpoint
- **Question:** Does search expose a federation endpoint for community mirrors at launch?
- **Options:** (a) no federation endpoint at launch — ship single-host search over the published snapshot index, and document the search-index format so mirrors can federate later · (b) ship a federation endpoint now · (c) defer search entirely
- **Recommended:** (a) — spec §5.4 keeps search over the published index; a federation endpoint is better resolved after federation-and-mirrors stabilises the mirror contract.
- **Your choice:** ✏️

### D3 — Read API rate-limit numbers
- **Question:** What default rate limits are documented for the read API at launch?
- **Options:** (a) defer the specific numbers to security-and-abuse-controls + cost-discipline (Programme 8) — document "generous, community-use" with a placeholder and direct sustained consumers to snapshot downloads and mirrors · (b) set explicit numbers now (e.g. per-IP and per-key request budgets) · (c) no numeric limit, only a policy statement
- **Recommended:** (a) — IMPLEMENTATION-PLAN §11 assigns default rate-limit numbers to verification-checker + security-and-abuse-controls with cost-discipline modelling; the snapshot API must still document the policy and escape hatch now.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (static-first, no silent change, privacy, free floor).
2. Create `scripts/build-snapshots.mjs` — a deterministic, hash-pinned, paginated snapshot pipeline with a documented canonical serialisation; identical public state must produce identical bytes.
3. Publish versioned snapshots to `registry/snapshots/` with monotonically increasing version numbers, a `sha256` hash over the exact export bytes in a manifest, pagination with stable page keys and a documented total per version, and permanent retention of old snapshots.
4. Emit incremental, ordered change feeds keyed by snapshot-version pairs, including removals (redaction/tombstone) as explicit events.
5. Enforce the public-only filter by construction: `unlisted`, `local`, and `organisation-only` records must never appear; add a per-version audit log (counts/categories) that never exposes private data.
6. Document the read API contract in `docs/snapshots-and-api.md`: unauthenticated, stateless, long-lived-cache-header endpoints for profile reads, declaration reads, search over public records, verification lookup, and revocation/status lookup — all read-only; the write path must be unreachable through this surface.
7. Version schemas from launch (additive within a major version), announce schema changes and endpoint deprecations via the changelog, and honour the documented deprecation notice period; document the rate-limit policy per D3.
8. Verify two builds from identical state are byte-identical and the hash verifies, then self-check against §4.

## 3. Constraints (must-nots)
- Only `public` records appear — unlisted/private/organisation-only never.
- The write path must be unreachable through the read API surface.
- Removals (redaction/tombstone) are explicit feed events.
- No snapshot content may be paid-placed or ranked.
- No read requires authentication; no private data in audit logs.

## 4. Acceptance criteria
- [ ] Two builds from identical public state produce byte-identical snapshots.
- [ ] Every snapshot publishes a verifiable `sha256` hash.
- [ ] No unlisted or private record appears in any snapshot.
- [ ] A redaction appears as an explicit removal in the change feed.
- [ ] All read API endpoints work unauthenticated and return long-lived cache headers for versioned content.
- [ ] The write path is unreachable through the read API surface.
- [ ] Old snapshots remain downloadable after newer versions are released.
- [ ] A schema change is announced in the changelog before it takes effect.
- [ ] Deprecated endpoints continue working through their documented notice period.

## 5. Outputs to produce in the repository
- `scripts/build-snapshots.mjs` — deterministic, hash-pinned, paginated snapshot + change-feed generator.
- `registry/snapshots/` — versioned snapshot files, sha256 manifest, and change feeds; old versions retained.
- `docs/snapshots-and-api.md` — read-API contract (endpoints, cache headers, rate-limit policy, schema versioning, deprecation).

## 6. Read before building
- [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md) — mini-plan
- [`public-snapshots-and-api-dsh.md`](../../../../suggestions/public-snapshots-and-api-dsh.md) — full spec
- [`07-safety-operations-research.md`](../../../digest/07-safety-operations-research.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
