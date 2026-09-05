# Agent request — federation-and-mirrors: Federation and Mirrors

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md)
> **Source:** spec [`federation-and-mirrors-dsh.md`](../../../../suggestions/federation-and-mirrors-dsh.md) · seed [`federation-and-mirrors.md`](../../../../suggestions/federation-and-mirrors.md)
> **Effort:** M · **Phase:** P2 · **Position:** after snapshots — it is the snapshots' resilience argument
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Removal-propagation lag window
- **Question:** What is the default maximum removal-propagation lag window a mirror must meet?
- **Options:** (a) one business day (≤ 24 h business-day window), matching the directory's one-business-day revocation rule · (b) ≤ 24 hours clock time · (c) a longer window (e.g. 7 days) for archival mirrors, with `stale` labelling beyond it · (d) defer the number entirely to abuse/cost modelling
- **Recommended:** (a) — aligns mirrors with the "revoked disappears within one business day" rule and keeps the descriptor machine-checkable; spec §10 says set it with abuse and cost modelling, but a business-day default is the coherent starting value.
- **Your choice:** ✏️

### D2 — Project mirror directory
- **Question:** Does the project publish a maintained directory of mirrors?
- **Options:** (a) no project-maintained mirror directory at launch — mirrors self-describe via their published descriptors, and the project avoids endorsing any mirror · (b) publish a community-contributed mirror directory with admission criteria (self-describing descriptors, no endorsement) · (c) publish a project-run directory with a vetted list
- **Recommended:** (a) — a project-run directory risks the "endorsement gravity" pattern; self-describing descriptors (spec §5.2 item 12) already make the mirror graph auditable without a central list.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (static-first, no silent change, no trust scores, free floor).
2. Document the mirror contract in `docs/federation-and-mirrors.md`: one-writer rule (only the snapshot pipeline writes; mirrors read and republish), mandatory source/freshness/compatibility labels, namespace ownership (mirror URLs under the mirror's domain, never impersonating canonical addresses), and identity rules (immutable IDs authoritative, collisions flagged, never renumbered/merged).
3. Define the mirror descriptor schema (identity, source, snapshotVersion, freshness, schemaVersion, changeFeedVersion, removalLag, compatibility `compliant|stale|fork`) and require every mirror to serve it at a documented location.
4. Specify removal-propagation: a mirror applies removal/tombstone events within the bounded lag window per D1; exceeding it downgrades to `stale`, and republishing removed data is non-compliant; archival mirrors may freeze a snapshot permanently if they label the frozen snapshot and date honestly.
5. Specify fork rules: a divergent dataset declares itself a fork, publishes its divergence points, and loses the compatibility label; fork claims are never attributed to the project.
6. Create `scripts/mirror-ingest.mjs` — a reference ingest tool that fetches snapshots + change feeds, applies removals, and emits a self-describing descriptor; provide a worked example at `registry/mirror-descriptor.example.json`.
7. State that mirroring is free and account-free for public data (mirrors may charge for their own added services, never for the canonical record), and that mirror-added content must be separable and moderated under the mirror's own policy; self-check against §4.

## 3. Constraints (must-nots)
- A mirror never accepts writes to the canonical record.
- Mirror URLs never impersonate canonical addresses/IDs.
- No trust score, rank, or single verdict.
- Only public-visibility data is ingested; no records from private write paths.
- Mirror-added content is separable from canonical records and moderated under a published policy.

## 4. Acceptance criteria
- [ ] No mirror accepts writes to the canonical record.
- [ ] Every mirror renders source and freshness labels on every served view.
- [ ] A mirror applies removal events within its published lag window.
- [ ] A mirror that stops applying removals is labelled stale, not compliant.
- [ ] A mirror's URLs never impersonate canonical addresses or IDs.
- [ ] Mirror-added content is separable from canonical records and moderated under a published policy.
- [ ] A fork declares its divergence and does not claim compatibility.
- [ ] No mirror renders a trust score, rank, or single verdict.
- [ ] A consumer can determine a mirror's source, snapshot version, and freshness from its descriptor alone.

## 5. Outputs to produce in the repository
- `docs/federation-and-mirrors.md` — mirror contract, descriptor schema, propagation rules, fork rules.
- `scripts/mirror-ingest.mjs` — reference ingest tool (snapshot/change-feed fetch, removal application, descriptor emission).
- `registry/mirror-descriptor.example.json` — worked self-describing mirror descriptor example.

## 6. Read before building
- [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md) — mini-plan
- [`federation-and-mirrors-dsh.md`](../../../../suggestions/federation-and-mirrors-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
