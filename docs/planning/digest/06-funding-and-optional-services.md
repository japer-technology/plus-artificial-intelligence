# Digest 06 — Funding and Optional Services

### support-and-donations — Support and Donations
- **What:** Single static support page for giving, stating what stays free, what costs money, recipients, priorities, payment options, and privacy/refund/tax/anonymity rules.
- **Builds:**
  - Static "Support" web page (versioned, file://-safe, mirrorable).
  - Content: free-floor list, donation-vs-purchase routing, funding priorities.
  - Policy: refund, tax-status, anonymity, and no-influence statements.
- **Needs:** free-floor-covenant, financial-transparency, governance-and-stewardship, sponsorship-policy, membership-model, contribution-ladder, static-first-service-architecture, privacy-and-data-minimisation, security-and-abuse-controls
- **Must-nots:**
  - Giving never buys legitimacy, rank, or permission.
  - No supporter receives directory rank, evidence labels, or decision rights.
  - Donations and purchases never conflated.
- **Done when:** free/paid stated; routes per payment table; recurring cancellable; no-influence stated.
- **Open:** direct vs third-party processor; refund window.
- **Effort:** S — static page + payment routing.

### sponsorship-policy — Sponsorship Policy
- **What:** When/how to accept mission-aligned sponsorship for named public work, recognised factually outside normative content.
- **Builds:**
  - Sponsorship programme policy + assessment gate (watchlist-adjacent).
  - Mission-conflict screening rubric; factual dated recognition placement.
  - Public sponsorship ledger (no amount ordering).
- **Needs:** red-lines-and-cautious-extensions, governance-and-stewardship, financial-transparency, free-floor-covenant, support-and-donations, public-directory, evidence-labels-not-trust-scores, static-first-service-architecture, privacy-and-data-minimisation, security-and-abuse-controls
- **Must-nots:**
  - Never sponsors the specification, the meaning, or the free floor.
  - No vendor preference, directory rank, data access, exclusivity, or evidence advantage.
  - Recognition never appears in normative content or evidence surfaces.
- **Done when:** assessment-gated; named work only; disclosed as funded deliverable; no influence anywhere.
- **Open:** screening rubric; logo recognition.
- **Effort:** S — policy doc + programme gate.

### membership-model — Membership Model
- **What:** Optional individual/organisation membership funding a future custodian and working groups — never a gate, rank, or lever.
- **Builds:**
  - Membership programme: tiers, benefits, self-service join/cancel.
  - Content: non-member rights enumeration; free-floor statement at join.
  - Policy: advisory ballot rules; community seats in funded working groups.
- **Needs:** free-floor-covenant, governance-and-stewardship, financial-transparency, community-hub, contribution-ladder, grants-and-public-benefit-programmes, red-lines-and-cautious-extensions, static-first-service-architecture, privacy-and-data-minimisation, security-and-abuse-controls
- **Must-nots:**
  - Membership never confers legitimacy, rank, or permission.
  - Member votes never touch specification or free floor; ballots advisory.
  - Organisation membership never controls an individual's declarations.
- **Done when:** no-membership path intact; low-cost tier + sponsored seats; cancellation free; ballots advisory.
- **Open:** tiers/prices; before vs after custodian.
- **Effort:** M — membership system + policy (hosted).

### grants-and-public-benefit-programmes — Grants and Public-Benefit Programmes
- **What:** Seeking and holding grants for open deliverables plus public-benefit programmes (stipends, clinics, fee waivers) for under-resourced groups.
- **Builds:**
  - Grant acceptance process (mission-conflict screen, terms/deliverable disclosure).
  - Stipend, clinic, and fee-waiver programmes.
  - Open-licence deliverable publishing (file://-safe, mirrorable).
- **Needs:** financial-transparency, governance-and-stewardship, licensing-and-mark-policy, red-lines-and-cautious-extensions, free-floor-covenant, membership-model, training-consulting-and-pilots, pilots-and-case-studies, static-first-service-architecture, privacy-and-data-minimisation, security-and-abuse-controls
- **Must-nots:**
  - No funder gains control, data, rank, or evidence.
  - Grants never fund the specification, meaning, rank, or evidence.
  - A completed open deliverable is never later closed or paywalled.
- **Done when:** grant disclosure complete; funders screened; outputs open + mirrorable; clinics free and bounded.
- **Open:** mission-conflict rubric; clinic scheduling.
- **Effort:** M — grant + public-benefit programmes.

### organisation-workspaces — Organisation Workspaces
- **What:** Optional private workspaces for teams, delegated roles, approvals, publication flows, SSO/SCIM, registers, retention, legal holds, and audit history.
- **Builds:**
  - Workspace service: tenant isolation, roles, approval queues, append-only audit log.
  - Exports (records + registers + history); offboarding; SSO/SCIM (assessment-gated).
- **Needs:** static-first-service-architecture, organisation-profiles-and-policies, approved-tool-registers, ai-practice-register, visibility-and-consent, declaration-lifecycle, privacy-and-data-minimisation, security-and-abuse-controls, evidence-and-compliance-exports, managed-hosting-and-domains, red-lines-and-cautious-extensions, accessibility-floor
- **Must-nots:**
  - Workspaces optional — never a prerequisite for declaration validity.
  - A named human signer's acceptance is always required.
  - Absolute tenant isolation; SSO/SCIM optional and non-biometric.
- **Done when:** no-account path complete; signer acceptance required; isolation demonstrated; export + legal-hold; pilot evidence.
- **Open:** per-role permissions; ship before/after managed hosting.
- **Effort:** L — hosted workspaces + isolation + audit.

### workflow-automation-services — Workflow Automation Services
- **What:** Paid automation conveniences (connectors, bulk ops, scheduled validation, reminders, webhooks, IdP links) that never change outcomes or lock in.
- **Builds:**
  - Workflow service: least-privilege, bounded idempotent retries, append-only audit.
  - Customer-controlled deployment; signed rate-limited webhooks.
- **Needs:** static-first-service-architecture, pilots-and-case-studies, moderation-disputes-and-appeals, approved-tool-registers, verification-checker, api-scale-and-reliability, evidence-and-compliance-exports, red-lines-and-cautious-extensions, privacy-and-data-minimisation, security-and-abuse-controls, offline-and-self-hosting-pack
- **Must-nots:**
  - No consequential decision automated — a human reviewer always remains.
  - Payment never changes a substantive outcome or evidence label.
  - Manual free path always performs the same action.
- **Done when:** every workflow cites pilot; human remains; exportable + customer-deployable; unmaintained flagged.
- **Open:** paid vs free workflows; retry defaults.
- **Effort:** L — automation platform + connectors.

### api-scale-and-reliability — API Scale and Reliability
- **What:** Paid tier over the public read surface: high-volume quotas, SLAs, regional delivery, support, webhooks — public data never the product.
- **Builds:**
  - Versioned read API with a documented free quota.
  - SLA/status pages; opt-in webhook/sync subscriptions; deprecation policy.
- **Needs:** public-snapshots-and-api, cost-discipline, static-first-service-architecture, security-and-abuse-controls, privacy-and-data-minimisation, free-floor-covenant, red-lines-and-cautious-extensions, financial-transparency, verification-checker
- **Must-nots:**
  - Snapshots/schemas/change feeds always free, unauthenticated, mirrorable.
  - No fingerprinting, cross-site profiling, or inferred tool use.
  - No breaking change without a new major version + migration note.
- **Done when:** free quota covers community use; versioned APIs; immutable cache headers; free path survives tier outage.
- **Open:** free-quota size; regional delivery timing.
- **Effort:** M — read API tier + SLAs + status.

### evidence-and-compliance-exports — Evidence and Compliance Exports
- **What:** Scheduled/on-demand audit-ready bundle of declarations, histories, evidence, policies, exceptions, and retention — provable, never a certificate.
- **Builds:**
  - Bundle assembly service (scope + visibility filtering + redaction).
  - Signed, hash-pinned manifest; offline verification.
- **Needs:** portable-declaration-schema, declaration-lifecycle, proofs-of-control, evidence-labels-not-trust-scores, visibility-and-consent, privacy-and-data-minimisation, security-and-abuse-controls, organisation-workspaces, continuity-and-namespace-custody, independent-assurance-and-certification, static-first-service-architecture, free-floor-covenant, red-lines-and-cautious-extensions
- **Must-nots:**
  - Never certification, endorsement, or trust score.
  - `local` records never included; redaction uses `[redacted]` markers.
  - Payment never buys a more favourable record.
- **Done when:** manifest complete; offline-verifiable; scope-enforced; stale labelled; non-public role-gated.
- **Open:** on-demand vs scheduled; expiry windows.
- **Effort:** M — export bundle service + signing.

### managed-hosting-and-domains — Managed Hosting and Domains
- **What:** Optional managed hosting of profiles/registers/custom domains/private deployments with backups, recovery, status pages, and archival.
- **Builds:**
  - Hosting service: provision/manage/lapse/recovery; custom domains.
  - Status pages; long-term archival packages.
- **Needs:** hosted-profiles, opt-in-signatory-registry, named-subdomains-and-identity-bundles, organisation-workspaces, continuity-and-namespace-custody, federation-and-mirrors, offline-and-self-hosting-pack, privacy-and-data-minimisation, security-and-abuse-controls, cost-discipline, static-first-service-architecture, free-floor-covenant, red-lines-and-cautious-extensions
- **Must-nots:**
  - Customer owns records; operator claims/licences none.
  - Lapse degrades to read-only/tombstone, declarations intact.
  - Recovery never requires identity documents or biometrics.
- **Done when:** export free/without justification; shutdown final export; recovery code-based; offline fallback documented.
- **Open:** grace-period length; private deployment timing.
- **Effort:** L — hosted operations + domains + archival.

### privacy-respecting-analytics — Privacy-Respecting Analytics
- **What:** The only permitted telemetry: minimal, opt-in, documented measurement of operational facts — never surveillance.
- **Builds:**
  - Versioned event catalogue (purpose/fields/retention/aggregate-only).
  - Opt-in control component; aggregate thresholded reporting.
- **Needs:** privacy-and-data-minimisation, public-adoption-dashboard, research-observatory, experiments-and-metrics, red-lines-and-cautious-extensions, security-and-abuse-controls, static-first-service-architecture, cost-discipline
- **Must-nots:**
  - No ad-tech, fingerprinting, or tracking cookies/pixels.
  - No cross-service profiles; no inferred tool/AI use.
  - Telemetry data never sold; never gates free-floor features.
- **Done when:** catalogue before collection; opt-in default-off; retention enforced; below-threshold "fewer than N".
- **Open:** retention periods per event.
- **Effort:** S — event catalogue + opt-in component.

### training-consulting-and-pilots — Training, Consulting, and Pilots
- **What:** Paid professional services (keynotes, workshops, consulting, governance facilitation, pilots) selling time and expertise, never endorsement or influence.
- **Builds:**
  - Services page (no-certification, no-legitimacy statements).
  - Statement-of-work template; reusable-learning publishing; handover materials.
- **Needs:** independent-assurance-and-certification, pilots-and-case-studies, governance-and-stewardship, licensing-and-mark-policy, accessibility-floor, translation-governance, experiments-and-metrics, research-observatory, privacy-and-data-minimisation, security-and-abuse-controls, financial-transparency, static-first-service-architecture, free-floor-covenant, red-lines-and-cautious-extensions
- **Must-nots:**
  - No "certified/approved/accredited" claims about any client or outcome.
  - Consultants never invent or change the normative meaning.
  - No founder-time dependency — handover materials mandatory.
- **Done when:** SOW per engagement; reusable outputs published; handover sufficient; conflicts declared.
- **Open:** consultant roster; SOW redaction.
- **Effort:** M — services offering + SOW/reusable-output process.

### publications-and-merchandise — Publications and Merchandise
- **What:** Optional publications and physical goods (essays, book, posters, stickers) spreading and funding the idea while the online meaning stays free.
- **Builds:**
  - Storefront with meaning-integrity and no-status statements.
  - Product lines; free screen-reader-accessible digital equivalents; non-store order path.
- **Needs:** licensing-and-mark-policy, multi-format-distribution-kit, certificates-badges-and-qr, accessibility-floor, financial-transparency, privacy-and-data-minimisation, security-and-abuse-controls, static-first-service-architecture, free-floor-covenant, red-lines-and-cautious-extensions
- **Must-nots:**
  - Purchase never confers legitimacy, rank, permission, or signer status.
  - No rights claimed over the `+AI` notation.
  - Canonical wording never paraphrased.
- **Done when:** designer + licence stated; meaning verbatim; digital equivalent free; ethics/environment disclosed.
- **Open:** product lines; stewardship margin.
- **Effort:** M — storefront + product line + digital equivalents.

### priority-review-services — Priority Review Services
- **What:** Paid priority review (coordination/expedited) of translations, accessibility, security, and integrations — payment changes queue position only.
- **Builds:**
  - Priority queue service with published free-tier reservation.
  - Reviewer qualifications + criteria per track; dated findings output.
- **Needs:** translation-governance, accessibility-floor, security-and-abuse-controls, developer-integrations, moderation-disputes-and-appeals, evidence-labels-not-trust-scores, independent-assurance-and-certification, governance-and-stewardship, verification-checker, privacy-and-data-minimisation, financial-transparency, static-first-service-architecture, free-floor-covenant, red-lines-and-cautious-extensions
- **Must-nots:**
  - Payment never changes outcome, safety priority, evidence, or dispute handling.
  - Free queue never starved; safety urgency never purchasable.
  - No trust score, rank, or certification output.
- **Done when:** queue rules published; free advances; identical standards for both queues; dated findings only.
- **Open:** free-queue reservation %; queue-jumping semantics.
- **Effort:** M — priority queue + reviewer infrastructure.
