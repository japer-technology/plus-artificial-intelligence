# Development task — federation-and-mirrors: Federation and Mirrors

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md)
> **Source:** spec [`federation-and-mirrors-dsh.md`](../suggestions/federation-and-mirrors-dsh.md) · seed [`federation-and-mirrors.md`](../suggestions/federation-and-mirrors.md)
> **Effort:** M · **Phase:** P2 · **Position:** after snapshots — it is the snapshots' resilience argument
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Independent compatible mirrors and alternative interfaces over open versioned public data — never alternate sources of truth.
- **Why now / risk of deferring:** It follows snapshots as "the snapshots' resilience argument" — the public record must survive any single host. Deferring lets "federation drift" grow unchecked: the descriptor/lag labels must be machine-checkable or the "no alternate truth" rule is unenforceable.
- **Features to deliver:**
  - Mirror contract documented (ingestion, labelling, propagation duties, namespace/identity rules).
  - Mirror descriptor schema (identity, source, snapshotVersion, freshness, schemaVersion, changeFeedVersion, removalLag, compatibility `compliant|stale|fork`).
  - Mandatory source/freshness/compatibility labels on every mirror view.
  - Bounded removal-propagation window with stale/non-compliant marking.
  - Fork declaration and compatibility revocation rules.
  - One-writer rule with mirror URLs never impersonating canonical addresses or IDs.
  - No trust score/rank/verdict.
  - Reference ingest tooling (`scripts/mirror-ingest.mjs`) that fetches snapshots + change feeds, applies removals, and emits a self-describing descriptor.
- **Depends on:** public-snapshots-and-api, url-semantics-and-canonicalization, continuity-and-namespace-custody, licensing-and-mark-policy

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Removal-propagation lag window
- **Question:** What is the default maximum removal-propagation lag window a mirror must meet?
- **Option (a):** one business day (≤ 24 h business-day window), matching the directory's one-business-day revocation rule
  - **For:** aligns mirrors with the directory's "revoked disappears within one business day" rule (public-directory spec §5.2 item 9; federation spec §5.2 item 5 requires removals "within a bounded, published lag window"), and a business-day window is machine-checkable (programme risk "federation drift": "the descriptor/lag labels must be machine-checkable").
  - **Against:** spec §10 says the default window is "to be set with abuse and cost modelling", which (a) does without that modelling.
- **Option (b):** ≤ 24 hours clock time
  - **For:** a hard ≤ 24 h clock-time window is unambiguous and simple to machine-check.
  - **Against:** the directory rule is expressed as "one business day" (public-directory spec §5.2 item 9), not clock time, so a clock-time window doesn't match that wording; and spec §10 says the number should be set with abuse and cost modelling, which a hard clock-time default short-circuits.
- **Option (c):** a longer window (e.g. 7 days) for archival mirrors, with `stale` labelling beyond it
  - **For:** a longer window accommodates archival mirrors that freeze snapshots (spec §5.5: "an archival mirror MAY freeze a snapshot permanently, provided it labels the frozen snapshot and its date honestly").
  - **Against:** a longer window would let a live (non-archival) mirror lag removals far beyond the directory's one-business-day rule, weakening the "no alternate truth" guarantee (spec §5.2 item 5: a mirror that fails to propagate removals must be marked stale/non-compliant).
- **Option (d):** defer the number entirely to abuse/cost modelling
  - **For:** spec §10 explicitly says the default window is "to be set with abuse and cost modelling", so deferring honours that instruction.
  - **Against:** deferring leaves the descriptor's `removalLag` field without a default, so the mirror graph is not machine-checkable from day one (programme risk "federation drift": "the descriptor/lag labels must be machine-checkable or the 'no alternate truth' rule is unenforceable").
- **Recommended:** (a) — aligns mirrors with the "revoked disappears within one business day" rule and keeps the descriptor machine-checkable; spec §10 says set it with abuse and cost modelling, but a business-day default is the coherent starting value.
- **Your choice:** ✏️

### D2 — Project mirror directory
- **Question:** Does the project publish a maintained directory of mirrors?
- **Option (a):** no project-maintained mirror directory at launch — mirrors self-describe via their published descriptors, and the project avoids endorsing any mirror
  - **For:** spec §5.2 item 12 requires mirrors to be self-describing via a published descriptor "so the mirror graph is auditable rather than assumed"; a project-run directory risks the "endorsement gravity" pattern.
  - **Against:** None identified in the sources.
- **Option (b):** publish a community-contributed mirror directory with admission criteria (self-describing descriptors, no endorsement)
  - **For:** a community-contributed directory (with self-describing descriptors and no endorsement) would make mirrors discoverable.
  - **Against:** even a community directory risks "endorsement gravity", and spec §5.2 item 12 already makes the mirror graph auditable via self-description without a central list; spec §10 leaves the directory question undecided.
- **Option (c):** publish a project-run directory with a vetted list
  - **For:** a project-run vetted list would give users confidence in the mirrors listed.
  - **Against:** a project-run vetted list most strongly risks "endorsement gravity" (the project appearing to endorse mirrors), and spec §5.2 item 12 plus the "no trust score/rank/verdict" principle cut against a centrally curated list; spec §10 leaves it undecided.
- **Recommended:** (a) — a project-run directory risks the "endorsement gravity" pattern; self-describing descriptors (spec §5.2 item 12) already make the mirror graph auditable without a central list.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (static-first, no silent change, no trust scores, free floor).
2. Document the mirror contract in `docs/federation-and-mirrors.md`: one-writer rule (only the snapshot pipeline writes; mirrors read and republish), mandatory source/freshness/compatibility labels, namespace ownership (mirror URLs under the mirror's domain, never impersonating canonical addresses), and identity rules (immutable IDs authoritative, collisions flagged, never renumbered/merged).
3. Define the mirror descriptor schema (identity, source, snapshotVersion, freshness, schemaVersion, changeFeedVersion, removalLag, compatibility `compliant|stale|fork`) and require every mirror to serve it at a documented location.
4. Specify removal-propagation: a mirror applies removal/tombstone events within the bounded lag window per D1; exceeding it downgrades to `stale`, and republishing removed data is non-compliant; archival mirrors may freeze a snapshot permanently if they label the frozen snapshot and date honestly.
5. Specify fork rules: a divergent dataset declares itself a fork, publishes its divergence points, and loses the compatibility label; fork claims are never attributed to the project.
6. Create `scripts/mirror-ingest.mjs` — a reference ingest tool that fetches snapshots + change feeds, applies removals, and emits a self-describing descriptor; provide a worked example at `registry/mirror-descriptor.example.json`.
7. State that mirroring is free and account-free for public data (mirrors may charge for their own added services, never for the canonical record), and that mirror-added content must be separable and moderated under the mirror's own policy; self-check against §5.

## 4. Constraints (must-nots)
- A mirror never accepts writes to the canonical record.
- Mirror URLs never impersonate canonical addresses/IDs.
- No trust score, rank, or single verdict.
- Only public-visibility data is ingested; no records from private write paths.
- Mirror-added content is separable from canonical records and moderated under a published policy.

## 5. Acceptance criteria
- [ ] No mirror accepts writes to the canonical record.
- [ ] Every mirror renders source and freshness labels on every served view.
- [ ] A mirror applies removal events within its published lag window.
- [ ] A mirror that stops applying removals is labelled stale, not compliant.
- [ ] A mirror's URLs never impersonate canonical addresses or IDs.
- [ ] Mirror-added content is separable from canonical records and moderated under a published policy.
- [ ] A fork declares its divergence and does not claim compatibility.
- [ ] No mirror renders a trust score, rank, or single verdict.
- [ ] A consumer can determine a mirror's source, snapshot version, and freshness from its descriptor alone.

## 6. Outputs to produce in the repository
- `docs/federation-and-mirrors.md` — mirror contract, descriptor schema, propagation rules, fork rules.
- `scripts/mirror-ingest.mjs` — reference ingest tool (snapshot/change-feed fetch, removal application, descriptor emission).
- `registry/mirror-descriptor.example.json` — worked self-describing mirror descriptor example.

## 7. Read before building
- [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md) — mini-plan
- [`federation-and-mirrors-dsh.md`](../suggestions/federation-and-mirrors-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
