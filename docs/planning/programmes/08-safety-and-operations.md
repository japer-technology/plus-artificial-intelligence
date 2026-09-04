# Programme 8 — Safety and Operations

> The guardrails every other programme must satisfy: privacy and data
> minimisation, moderation with appeals, security and abuse controls,
> child-safe defaults, the static-first layering rule, and cost discipline.
> Policies ship in P0 (they gate everything); enforcement tooling ships with
> each hosted service it protects.

- **Members (6):** privacy-and-data-minimisation, moderation-disputes-and-appeals,
  security-and-abuse-controls, child-safe-education,
  static-first-service-architecture, cost-discipline
- **Effort:** 3 × S (privacy policy, static-first policy, cost model),
  3 × M (moderation queue, security baseline, child-safe education)
- **Prerequisites:** Programme 1 (governance authority, contact routes,
  free-floor covenant they enforce)
- **Phase:** P0 (policies) → P2–P3 (enforcement tooling per service)

## Mini-plans

### privacy-and-data-minimisation — Privacy and Data Minimisation
- **Goal:** Privacy obligations for every service: collect only what a feature needs, separate public/private data, support pseudonyms, make export/redaction/revocation/deletion practical.
- **Build:** privacy-analysis template + published analyses per service; account settings (export, redaction/revocation, deletion pages); retention schedules; jurisdiction/processor lists.
- **Needs:** declaration-lifecycle (redaction/tombstone mechanics), visibility-and-consent, security-and-abuse-controls.
- **Must-nots:** no field collected without a documented purpose; no selling/renting private data or public records; no inferred sensitive attributes unless explicitly published.
- **Done when:** analyses published; pseudonym journey complete; retention enforced; no-account uploads nothing without preview.
- **Effort:** S. **Order:** P0 template — every service's launch review must attach a completed analysis.

### static-first-service-architecture — Static-First Service Architecture
- **Goal:** The architectural ordering rule: static commons → deterministic exports → optional hosted services around, never instead of, the base.
- **Build:** layering policy + failure-mode statement template; degraded-mode demonstrations for new hosted services.
- **Needs:** public-snapshots-and-api (export layer), offline-and-self-hosting-pack (the degraded-mode proof), continuity-and-namespace-custody.
- **Must-nots:** no commons capability requires a hosted service; no service may be the only place a public record can be read; billing loss never revokes or hides issued records.
- **Done when:** commons opens from disk; database loss leaves records readable; every service has a failure-mode statement.
- **Effort:** S. **Order:** P0 — it is the admission ticket for every P3 service in Programmes 6, 7, and 9.

### cost-discipline — Cost Discipline
- **Goal:** Keep the free public layer sustainable: static views, immutable caching, queued checks, optional media, per-record cost measurement.
- **Build:** cost model (8 categories, annual); per-record cost reporting; queued-check backlog status; shutdown reserve.
- **Needs:** free-floor-covenant, static-first-service-architecture, verification-checker (the queued checks), financial-transparency.
- **Must-nots:** no free-floor removal for cost without the covenant amendment process; media always optional; client-side tools preferred over hosted; cost pressure triggers queuing/bounding/offline, never paywall.
- **Done when:** cost model published; cached static views; queued checks visible; per-record cost published.
- **Effort:** S. **Order:** P0 model (it sizes the checker's rate limits and the relay's free tier); annual measurement recurring.

### moderation-disputes-and-appeals — Moderation, Disputes, and Appeals
- **Goal:** How public submissions are admitted, moderated, disputed, and appealed — fair and legible, with published rules and named authority.
- **Build:** admission + prohibited-content rules (versioned, changelog-announced); moderation event log + status vocabulary; appeals route (different reviewer); annual transparency report.
- **Needs:** declaration-lifecycle (dispute statuses), opt-in-signatory-registry, public-directory, community-hub, contact-routes, governance-and-stewardship.
- **Must-nots:** no rule enforced before it is published and versioned; every consequential decision has a human reviewer + recorded reason; no payment changes a moderation outcome.
- **Done when:** rules published; appeals by a different reviewer; transparency report annual; urgent routes no-account.
- **Effort:** M. **Order:** rules P1 (before the registry's hosted admission opens); queue tooling P2 with the registry; disputes extend the lifecycle's `disputed` state.

### security-and-abuse-controls — Security and Abuse Controls
- **Goal:** Security/abuse controls for every hosted surface: accounts, text, links, registries, mail, uploads, APIs, and verification fetches.
- **Build:** threat-model template + per-service models; incident-response process; controls (CSP, output encoding, SSRF guard, upload limits, rate limits).
- **Needs:** verification-checker (SSRF guard), moderation-disputes-and-appeals, contact-routes (report paths), continuity-and-namespace-custody (key custody).
- **Must-nots:** no biometric-only authentication; no covert tracking/fingerprinting (scraping resistance via limits only); SSRF targets refused; known-vulnerable dependencies block release.
- **Done when:** threat model per service; CSP everywhere; injection inert; role change revokes sessions; no-account report route.
- **Effort:** M. **Order:** baseline P1 (the checker's hosted half cannot launch without it); per-service models at each P3 launch.

### child-safe-education — Child-Safe Education
- **Goal:** How +AI is taught in schools with minors — reflection, disclosure, responsibility — without public student profiles or legal-waiver framing.
- **Build:** education materials (classroom guidance, school templates) with specialist review; local-first student flows; organisation-only school templates.
- **Needs:** visibility-and-consent (local default), privacy-and-data-minimisation, accessibility-floor, pilots-and-case-studies (school pilots), organisation-workspaces (school templates).
- **Must-nots:** student records never default beyond `local`; no profiling/scoring/ranking/gamified exposure of students; no account required for the core classroom exercise.
- **Done when:** specialist review recorded; local default; org-only templates; no-account exercise; jurisdiction notes.
- **Effort:** M. **Order:** P2 — materials first (they are useful even pre-services); template flows with workspaces P3.

## Sequencing

1. **P0:** static-first-service-architecture → privacy-and-data-minimisation (template) → cost-discipline (model). These three gate everything.
2. **P1:** moderation rules (published) + security baseline.
3. **P2:** moderation queue tooling (with the registry), child-safe education materials.
4. **P3:** per-service threat models, privacy analyses, failure-mode statements and degraded-mode demos — one per hosted service launch (relay, profiles, workspaces, hosting, priority review).

## Risks

- **Policy-only safety:** these specs are mostly rules; their value depends on being wired into launch reviews and CI gates, or they decay into prose nobody re-reads.
- **Moderation scale:** the registry's success is the moderation queue's load; the "human reviewer for consequential decisions" rule needs volunteer/staff planning before the queue opens.
- **Child-safety gap:** education materials need specialist review the project may not have; ship only after review, not before (the spec's own rule).
