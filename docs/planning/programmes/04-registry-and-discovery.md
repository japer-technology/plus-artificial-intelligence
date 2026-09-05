# Programme 4 — Registry and Discovery

> The public record layer: the opt-in signatory registry, its deterministic
> public snapshots, and the discovery surfaces (directory, sector/language
> views, observatory, adoption dashboard) built on them — plus the
> federation/mirror rules that keep the record decentralised. Only `public`,
> consented records ever appear; every surface carries the no-endorsement
> notice; nothing here ranks.

- **Members (7):** opt-in-signatory-registry, public-snapshots-and-api,
  public-directory, sector-and-language-directories, research-observatory,
  public-adoption-dashboard, federation-and-mirrors
- **Agent requests:** [`04-registry-and-discovery/`](04-registry-and-discovery/) — brainstorm + one agent request per suggestion.
- **Effort:** 1 × S (adoption dashboard), 4 × M (directory, sector views,
  observatory, federation), 2 × L (registry, snapshots/API)
- **Prerequisites:** Programme 2 (schema, lifecycle, visibility-and-consent —
  the record these publish); Programme 1 (moderation admission rules come
  from Programme 8; usage guidelines define admission policy); Programme 3
  (builder produces the records people register)
- **Phase:** P1 (registry as repo-hosted JSON) → P2 (snapshots, directories,
  federation) → P3 (observatory, dashboard on real data)

## Mini-plans

### opt-in-signatory-registry — Opt-In Signatory Registry
- **Goal:** Voluntary, versioned public record of parties and declarations with stable IDs, dates, statuses, revocation, and mirrorable snapshots.
- **Build:** versioned hash-pinned `registry.json` + rendered directory page; consent-recorded admission; human review for consequential decisions; correction/revocation events; neutral ordering.
- **Needs:** portable-declaration-schema, declaration-lifecycle, visibility-and-consent (only `public`), moderation-disputes-and-appeals (admission), governance-and-stewardship (who runs it).
- **Must-nots:** no entry without dated public-visibility consent; revoked entries stay visible as `revoked`; no paid placement/ordering/prominence.
- **Done when:** versioned dataset + page; only `public` records; deterministic snapshots; non-endorsement notice.
- **Effort:** L. **Order:** start P1 as a repo-hosted JSON file + PR/email admission (zero infrastructure — core-extensions §1.3's bootstrap); hosted admission tooling later.

### public-snapshots-and-api — Public Snapshots and API
- **Goal:** Public data published as unauthenticated, cacheable, versioned snapshots plus a read-only API — the live database is never a read prerequisite.
- **Build:** deterministic, hash-pinned, paginated snapshot pipeline; change feeds; read-only API (profiles, declarations, search, verification, status).
- **Needs:** opt-in-signatory-registry (the data), static-first-service-architecture (its backbone), declaration-lifecycle (removal events), security-and-abuse-controls (rate limits).
- **Must-nots:** only `public` records appear — unlisted/private never; write path unreachable through the read surface; removals (redaction/tombstone) are explicit feed events.
- **Done when:** byte-identical snapshots; sha256 published; unauthenticated cacheable reads; old snapshots retained.
- **Effort:** L. **Order:** right after the registry — every later surface (directory, federation, dashboard, API tier) reads snapshots, never the database.

### public-directory — Public Directory
- **Goal:** Discoverable collections of opt-in records (people, orgs, projects, declarations, registers, pilots, integrations, translators, case studies) with clear filters and neutral ordering.
- **Build:** static collection pages over snapshot data; non-endorsement notice; correction/revocation/abuse routes; search over the published snapshot index.
- **Needs:** opt-in-signatory-registry, public-snapshots-and-api, visibility-and-consent, licensing-and-mark-policy (data use), accessibility-floor.
- **Must-nots:** no purchased/sponsored ordering; no aggregate scores/rankings/popularity metrics; revoked records disappear within one business day.
- **Done when:** only public+consented records; notice everywhere; snapshot-mirrorable; accessible.
- **Effort:** M. **Order:** after snapshots; the first consumer proves the snapshot design.

### sector-and-language-directories — Sector and Language Directories
- **Goal:** Sector/artifact-type/language/region views over public records, filtering only on declared values, without stereotyping or implying competence.
- **Build:** static filtered views (sector, language, coarse region); non-endorsement notice; low-count suppression ("fewer than N records"); versioned filter vocabulary.
- **Needs:** public-directory, opt-in-signatory-registry, theme-engine-and-packs (industry-theme styling), per-theme-conformance-notes.
- **Must-nots:** no filtering on values the holder did not declare; no geolocation; no implying competence/endorsement/certification; low-count views suppressed (default k=10).
- **Done when:** declared-value filters only; suppression below threshold; themed layers consume identical data + notices.
- **Effort:** M. **Order:** after the directory; gives the ~30 existing industry themes their first real content.

### federation-and-mirrors — Federation and Mirrors
- **Goal:** Independent compatible mirrors and alternative interfaces over open versioned public data — never alternate sources of truth.
- **Build:** mirror descriptor (identity/source/lag/compatibility) + ingest tooling; source/freshness/compatibility labels; removal-propagation rules.
- **Needs:** public-snapshots-and-api (what mirrors ingest), url-semantics-and-canonicalization, continuity-and-namespace-custody, licensing-and-mark-policy.
- **Must-nots:** mirror never accepts writes to the canonical record; mirror URLs never impersonate canonical addresses/IDs; no trust score/rank/verdict.
- **Done when:** labels rendered; removals propagated in window; forks declare divergence; descriptors self-describing.
- **Effort:** M. **Order:** after snapshots — it is the snapshots' resilience argument.

### research-observatory — Research Observatory
- **Goal:** Controlled use of public, aggregated +AI records to study disclosure, adoption, and review practices without identifying or harming disclosers.
- **Build:** ethical-review gate; disclosure threshold (k=10); research governance; privacy-safe export rules; anti-doxxing controls; open publication of methods + negative findings, linked to snapshot versions.
- **Needs:** public-snapshots-and-api, privacy-and-data-minimisation, privacy-respecting-analytics (method alignment), experiments-and-metrics.
- **Must-nots:** only `public` snapshot data — no private/unlisted/organisation-only; no identifier/contact/raw-record exports; no below-threshold stats; below-threshold data never sold/licensed.
- **Done when:** public-only; ethical review recorded; threshold published; methods + negatives published.
- **Effort:** M. **Order:** P3 — needs a populated registry to study; the gate exists from day one.

### public-adoption-dashboard — Public Adoption Dashboard
- **Goal:** Aggregate, open reporting of adoption and operations metrics — honest numbers without surveillance or racing.
- **Build:** dashboard page with metric definitions/sources/computations; low-count suppression; open data via the snapshot pipeline.
- **Needs:** public-snapshots-and-api, opt-in-signatory-registry, privacy-respecting-analytics, accessibility-floor, financial-transparency (costs side).
- **Must-nots:** no tracking/fingerprinting/per-visitor analytics; no rankings/leaderboards/vanity totals; low-count stats suppressed to "fewer than N".
- **Done when:** metrics defined/reproducible; suppression below threshold; revocations reported; accessible.
- **Effort:** S. **Order:** after snapshots — THE-PLAN §18's "measure adoption, not attention" made concrete.

## Sequencing

1. **P1:** opt-in-signatory-registry (repo-hosted JSON + PR admission).
2. **P2:** public-snapshots-and-api → public-directory → sector-and-language-directories → federation-and-mirrors → public-adoption-dashboard.
3. **P3:** research-observatory (once data volume makes aggregation meaningful).
4. Gate: the moderation programme's admission rules (Programme 8) must be published before any hosted admission queue opens.

## Risks

- **Registry as endorsement gravity:** the founding-signatories momentum (THE-PLAN §4's recognition loop) will push the registry toward listing anyone; the visibility-consent and non-endorsement rules are the only brakes — implement them as code-level filters, not prose.
- **Snapshot cadence vs revocation urgency:** the "revoked disappears within one business day" requirement implies a change-feed-first design; a nightly-only snapshot pipeline would violate it.
- **Federation drift:** mirrors will diverge; the descriptor/lag labels must be machine-checkable or the "no alternate truth" rule is unenforceable.
