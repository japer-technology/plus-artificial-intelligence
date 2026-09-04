# Digest 07 — Safety, Operations, and Research

### privacy-and-data-minimisation — Privacy and Data Minimisation
- **What:** Privacy obligations for every service: collect only what a feature needs, separate public/private data, support pseudonyms, make export/redaction/revocation/deletion practical.
- **Builds:**
  - Privacy-analysis template + published analyses per service.
  - Account settings: export, redaction/revocation, deletion pages.
  - Policy: retention schedules; jurisdiction/processor lists.
- **Needs:** declaration-lifecycle, visibility-and-consent, security-and-abuse-controls, privacy-respecting-analytics, hosted-profiles, organisation-workspaces, research-observatory, child-safe-education, moderation-disputes-and-appeals
- **Must-nots:**
  - No field collected without a documented purpose.
  - No selling/renting private data or public records.
  - No inferred sensitive attributes unless explicitly published.
- **Done when:** analyses published; pseudonym journey complete; retention enforced; no-account uploads nothing without preview.
- **Open:** deletion-cascade window; pseudonym abuse carve-out.
- **Effort:** S — privacy template + policies (enforced per service).

### moderation-disputes-and-appeals — Moderation, Disputes, and Appeals
- **What:** How public submissions are admitted, moderated, disputed, and appealed — fair and legible with published rules and named authority.
- **Builds:**
  - Admission + prohibited-content rules (versioned, changelog-announced).
  - Moderation event log + status vocabulary; appeals route; transparency report.
- **Needs:** declaration-lifecycle, opt-in-signatory-registry, public-directory, theme-gallery-community-voting, community-hub, contact-routes, security-and-abuse-controls, privacy-and-data-minimisation, governance-and-stewardship, priority-review-services, child-safe-education
- **Must-nots:**
  - No rule enforced before it is published and versioned.
  - Every consequential decision has a human reviewer + recorded reason.
  - No payment changes a moderation outcome.
- **Done when:** rules published; appeals by a different reviewer; transparency report annual; urgent routes no-account.
- **Open:** response-time targets; reporter anonymity carve-out.
- **Effort:** M — moderation rules + queue + appeals process.

### security-and-abuse-controls — Security and Abuse Controls
- **What:** Security/abuse controls for every hosted surface: accounts, text, links, registries, mail, uploads, APIs, and verification fetches.
- **Builds:**
  - Threat-model template + per-service models; incident-response process.
  - Controls: CSP, output encoding, SSRF guard, upload limits, rate limits.
- **Needs:** verification-checker, moderation-disputes-and-appeals, privacy-and-data-minimisation, contact-routes, continuity-and-namespace-custody, public-snapshots-and-api, managed-hosting-and-domains, conformance-linter
- **Must-nots:**
  - No biometric-only authentication.
  - No covert tracking or fingerprinting (scraping resistance via limits only).
  - SSRF targets refused; known-vulnerable dependencies block release.
- **Done when:** threat model per service; CSP everywhere; injection inert; role change revokes sessions; no-account report route.
- **Open:** default rate limits; CSP publishing location.
- **Effort:** M — security baseline + threat models + controls.

### child-safe-education — Child-Safe Education
- **What:** How +AI is taught and used in schools with minors — reflection, disclosure, responsibility — without public student profiles or legal-waiver framing.
- **Builds:**
  - Education materials (classroom guidance, school templates) with specialist review.
  - Local-first student flows; organisation-only school templates.
- **Needs:** visibility-and-consent, privacy-and-data-minimisation, moderation-disputes-and-appeals, contact-routes, accessibility-floor, pilots-and-case-studies, organisation-workspaces, regulatory-phrasing-packs, training-consulting-and-pilots
- **Must-nots:**
  - Student records never default beyond `local`.
  - No profiling, scoring, ranking, or gamified exposure of students.
  - No account required for the core classroom exercise.
- **Done when:** specialist review recorded; local default; org-only templates; no-account exercise; jurisdiction notes.
- **Open:** age-threshold table; guardian consent location.
- **Effort:** M — education materials + templates + review.

### static-first-service-architecture — Static-First Service Architecture
- **What:** Architectural ordering rule: static commons → deterministic exports → optional hosted services added around, never instead of, the base.
- **Builds:**
  - Layering policy + failure-mode statement template.
  - Degraded-mode demonstrations for new hosted services.
- **Needs:** public-snapshots-and-api, offline-and-self-hosting-pack, generator-pipeline, theme-engine-and-packs, managed-hosting-and-domains, api-scale-and-reliability, cost-discipline, continuity-and-namespace-custody, federation-and-mirrors
- **Must-nots:**
  - No commons capability requires a hosted service.
  - No service may be the only place a public record can be read.
  - Billing loss never revokes or hides issued records.
- **Done when:** commons open from disk; database loss leaves records readable; every service has a failure-mode statement.
- **Open:** degraded-mode evidence minimum; third-party regeneration.
- **Effort:** S — architectural policy + failure-mode template.

### public-snapshots-and-api — Public Snapshots and API
- **What:** Public data published as unauthenticated, cacheable, versioned snapshots plus a read-only API — the live database is never a read prerequisite.
- **Builds:**
  - Snapshot pipeline (deterministic, hash-pinned, paginated); change feeds.
  - Read-only API endpoints (profiles, declarations, search, verification, status).
- **Needs:** opt-in-signatory-registry, static-first-service-architecture, federation-and-mirrors, portable-declaration-schema, declaration-lifecycle, visibility-and-consent, api-scale-and-reliability, cost-discipline, changelog-and-rss, security-and-abuse-controls
- **Must-nots:**
  - Only `public` records appear; unlisted/private never.
  - Write path unreachable through the read API surface.
  - Removals (redaction/tombstone) are explicit feed events.
- **Done when:** byte-identical snapshots; sha256 published; unauthenticated cacheable reads; old snapshots retained.
- **Open:** snapshot cadence; federation search endpoint.
- **Effort:** L — snapshot pipeline + change feeds + read API.

### cost-discipline — Cost Discipline
- **What:** Keeps the free public layer sustainable: static views, immutable caching, queued checks, optional media, per-record cost measurement.
- **Builds:**
  - Cost model (8 categories, annual); per-record cost reporting.
  - Queued-check backlog status; shutdown reserve.
- **Needs:** free-floor-covenant, static-first-service-architecture, public-snapshots-and-api, verification-checker, api-scale-and-reliability, managed-hosting-and-domains, continuity-and-namespace-custody, financial-transparency, offline-and-self-hosting-pack
- **Must-nots:**
  - No free-floor removal for cost without the covenant amendment process.
  - Media always optional; client-side tools preferred over hosted.
  - Cost pressure triggers queuing/bounding/offline, never paywall.
- **Done when:** cost model published; cached static views; queued checks visible; per-record cost published.
- **Open:** fetch-cost budget; per-record-type segmentation.
- **Effort:** S — cost model doc + measurement process.

### public-adoption-dashboard — Public Adoption Dashboard
- **What:** Aggregate, open reporting of adoption and operations metrics — honest numbers without surveillance or racing.
- **Builds:**
  - Dashboard page (metric definitions, sources, computations).
  - Low-count suppression; open data via snapshot pipeline.
- **Needs:** public-snapshots-and-api, opt-in-signatory-registry, privacy-respecting-analytics, research-observatory, accessibility-floor, changelog-and-rss, financial-transparency, cost-discipline
- **Must-nots:**
  - No tracking, fingerprinting, or per-visitor analytics.
  - No rankings, leaderboards, or vanity totals.
  - Low-count stats suppressed to "fewer than N".
- **Done when:** metrics defined/reproducible; suppression below threshold; revocations reported; accessible.
- **Open:** historical vs current health view.
- **Effort:** S — dashboard page over snapshot data.

### pilots-and-case-studies — Pilots and Case Studies
- **What:** Small bounded pilots with creators/teams/schools/publishers plus published outcomes, failures, templates, and case studies.
- **Builds:**
  - Pilot plan/close-out template; consent + publication-approval process.
  - Reusable templates/checklists published openly.
- **Needs:** experiments-and-metrics, research-observatory, training-consulting-and-pilots, child-safe-education, sector-and-language-directories, community-hub, changelog-and-rss, accessibility-floor
- **Must-nots:**
  - No participant identified without recorded, specific approval.
  - No rankings or certification framing of participants.
  - Minors require child-safe education before start.
- **Done when:** plan before start; failures published; templates open + accessible; named end point.
- **Open:** feed learnings into observatory.
- **Effort:** M — pilot process + templates + publication.

### experiments-and-metrics — Experiments and Metrics
- **What:** Product experiments and outcome measurement (comprehension, trust, CTAs, maintenance burden, WTP, multilingual equivalence) without fingerprinting or only-wins.
- **Builds:**
  - Study registration template + public registry; consent/retention model.
  - Open study artifacts (instruments, scripts).
- **Needs:** privacy-respecting-analytics, research-observatory, pilots-and-case-studies, privacy-and-data-minimisation, translation-governance, child-safe-education, changelog-and-rss, public-adoption-dashboard
- **Must-nots:**
  - No fingerprinting or cross-site tracking.
  - Negative findings published with equal prominence.
  - No rankings; no WTP study gating a free-floor feature.
- **Done when:** registration before start; consent + retention; corrections versioned; artifacts published.
- **Open:** review body; third-party recruiters.
- **Effort:** M — study registry + consent process.

### marketplace-and-matching — Marketplace and Matching
- **What:** Future opt-in collaborator/mentor/job/project/procurement discovery over directory data — only after meaningful adoption, never an endorsement market.
- **Builds:**
  - Matching policy + assessment gate; opt-in matching consent.
  - Neutral ordering + liability disclaimer; sunset condition.
- **Needs:** public-directory, red-lines-and-cautious-extensions, proofs-of-control, moderation-disputes-and-appeals, privacy-preserving-email-relay, sector-and-language-directories, independent-assurance-and-certification, public-adoption-dashboard, changelog-and-rss
- **Must-nots:**
  - No ship before adoption + assessment + inheritance preconditions.
  - No competence/quality/endorsement display; no advertising.
  - No paid placement in ordering.
- **Done when:** preconditions recorded; opt-in separate; neutral ordering; sunset condition present.
- **Open:** adoption metric; whether it ever exists.
- **Effort:** S — policy/decision doc (no code now).

### agentic-accountability — Agentic Accountability
- **What:** Future bounded exploration of declarations for delegated AI-agent actions, anchored on human responsibility and acceptance.
- **Builds:**
  - Delegation-record schema (principal, agent, scope, expiry, escalation, revocation).
  - Action receipts as dated evidence labels; failure semantics.
- **Needs:** portable-declaration-schema, declaration-lifecycle, evidence-labels-not-trust-scores, proofs-of-control, organisation-workspaces, moderation-disputes-and-appeals, red-lines-and-cautious-extensions, standards-engagement
- **Must-nots:**
  - Agent never recordable as the responsible party.
  - No publication/deployment without the principal's recorded acceptance.
  - No ship before all preconditions (documented, independent impl, governed).
- **Done when:** no feature today; delegation fields defined; principal acceptance; experimental-labelled extension.
- **Open:** independent-impl threshold; contribution chains normative vs optional.
- **Effort:** S — policy/decision doc (no code now).

### red-lines-and-cautious-extensions — Red Lines and Cautious Extensions
- **What:** Single source of truth for what must never be built, plus a watchlist of high-risk extensions gated by published assessment.
- **Builds:**
  - Red-line list (RL-1…RL-9) with canonical wording.
  - Watchlist + assessment template (proposal, risk, safeguards, sunset, approving body).
- **Needs:** free-floor-covenant, governance-and-stewardship, moderation-disputes-and-appeals, sponsorship-policy, membership-model, public-directory, theme-gallery-community-voting, privacy-respecting-analytics, experiments-and-metrics, agentic-accountability, independent-assurance-and-certification
- **Must-nots:**
  - Never charge for use of the mark; never require registration/identity.
  - Never require tool/prompt disclosure; never sell placement or personal data.
  - Never biometrics; never auto-publish in another's name; never AI responsibility; never reputation scores.
- **Done when:** stable identifiers; no surface violates; watchlist items assessed/deferred; siblings cite RL IDs.
- **Open:** review interval; watchlist expansion.
- **Effort:** S — policy doc (governed).
