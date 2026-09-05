# Programme 9 — Funding and Sustainability

> The optional money layer: policies first (they define what money may never
> buy), then programmes and services. Every item repeats the catalogue's core
> boundary — payment may buy convenience, scale, support, or managed
> operations, never legitimacy, rank, or permission.

- **Members (10):** support-and-donations, sponsorship-policy,
  membership-model, grants-and-public-benefit-programmes, api-scale-and-reliability,
  managed-hosting-and-domains, privacy-respecting-analytics,
  training-consulting-and-pilots, publications-and-merchandise,
  priority-review-services
- **Agent requests:** [`09-funding-and-sustainability/`](09-funding-and-sustainability/) — brainstorm + one agent request per suggestion.
- **Effort:** 3 × S (support page, sponsorship policy, analytics catalogue),
  6 × M (membership, grants, API tier, training/consulting, publications,
  priority review), 1 × L (managed hosting)
- **Prerequisites:** Programme 1 (governance, free-floor covenant, financial
  transparency — the rules money must obey); Programme 8 (privacy, security,
  cost discipline, static-first failure-mode statements); several services
  need Programme 4's public snapshots and Programme 7's services to exist
  first (they host/manage them)
- **Phase:** P2 (policies + support page) → P3–P4 (programmes and services)

## Mini-plans

### support-and-donations — Support and Donations
- **Goal:** Single static support page: what stays free, what costs money, recipients, priorities, payment options, privacy/refund/tax/anonymity rules.
- **Build:** versioned static page; free-floor list; donation-vs-purchase routing; funding priorities; refund/tax/anonymity/no-influence statements.
- **Needs:** free-floor-covenant, financial-transparency, governance-and-stewardship, privacy-and-data-minimisation.
- **Must-nots:** giving never buys legitimacy/rank/permission; no supporter receives directory rank, evidence labels, or decision rights; donations and purchases never conflated.
- **Done when:** free/paid stated; routes per payment table; recurring cancellable; no-influence stated.
- **Effort:** S. **Order:** P2 — the earliest money surface; its no-influence statements are load-bearing.

### sponsorship-policy — Sponsorship Policy
- **Goal:** When/how to accept mission-aligned sponsorship for named public work, recognised factually outside normative content.
- **Build:** sponsorship programme + assessment gate; mission-conflict screening rubric; factual dated recognition placement; public sponsorship ledger (no amount ordering).
- **Needs:** governance-and-stewardship, financial-transparency, red-lines-and-cautious-extensions (the boundaries), support-and-donations.
- **Must-nots:** never sponsors the specification, the meaning, or the free floor; no vendor preference/directory rank/data access/exclusivity/evidence advantage; recognition never appears in normative content or evidence surfaces.
- **Done when:** assessment-gated; named work only; disclosed as funded deliverable; no influence anywhere.
- **Effort:** S. **Order:** P2 — before any sponsor money is accepted (even the first one).

### membership-model — Membership Model
- **Goal:** Optional membership funding a future custodian and working groups — never a gate, rank, or lever.
- **Build:** membership programme (tiers, benefits, self-service join/cancel); non-member rights enumeration; free-floor statement at join; advisory ballot rules; community seats in funded working groups.
- **Needs:** governance-and-stewardship (the custodian it funds), free-floor-covenant, financial-transparency, community-hub.
- **Must-nots:** membership never confers legitimacy/rank/permission; member votes never touch specification or free floor — ballots advisory; organisation membership never controls an individual's declarations.
- **Done when:** no-membership path intact; low-cost tier + sponsored seats; cancellation free; ballots advisory.
- **Effort:** M. **Order:** P3 — after the custodian path is real (governance), not before; it funds stewardship, not the launch.

### grants-and-public-benefit-programmes — Grants and Public-Benefit Programmes
- **Goal:** Seeking/holding grants for open deliverables plus public-benefit programmes (stipends, clinics, fee waivers) for under-resourced groups.
- **Build:** grant acceptance process (mission-conflict screen, terms/deliverable disclosure); stipend/clinic/fee-waiver programmes; open-licence deliverable publishing (file://-safe, mirrorable).
- **Needs:** financial-transparency, governance-and-stewardship, licensing-and-mark-policy, red-lines-and-cautious-extensions.
- **Must-nots:** no funder gains control/data/rank/evidence; grants never fund the specification/meaning/rank/evidence; a completed open deliverable is never later closed or paywalled.
- **Done when:** grant disclosure complete; funders screened; outputs open + mirrorable; clinics free and bounded.
- **Effort:** M. **Order:** P3 — after the sponsorship policy sets the screening precedent.

### api-scale-and-reliability — API Scale and Reliability
- **Goal:** Paid tier over the public read surface: high-volume quotas, SLAs, regional delivery, support, webhooks — public data never the product.
- **Build:** versioned read API with documented free quota; SLA/status pages; opt-in webhook/sync subscriptions; deprecation policy.
- **Needs:** public-snapshots-and-api (the free read surface it tiers), cost-discipline, static-first-service-architecture, security-and-abuse-controls.
- **Must-nots:** snapshots/schemas/change feeds always free, unauthenticated, mirrorable; no fingerprinting/cross-site profiling/inferred tool use; no breaking change without a new major version + migration note.
- **Done when:** free quota covers community use; versioned APIs; immutable cache headers; free path survives tier outage.
- **Effort:** M. **Order:** P3 — after the snapshot/API surface exists and has real consumers.

### managed-hosting-and-domains — Managed Hosting and Domains
- **Goal:** Optional managed hosting of profiles/registers/custom domains/private deployments with backups, recovery, status pages, archival.
- **Build:** hosting service (provision/manage/lapse/recovery; custom domains); status pages; long-term archival packages.
- **Needs:** hosted-profiles, opt-in-signatory-registry, named-subdomains-and-identity-bundles, organisation-workspaces (the things hosted), continuity-and-namespace-custody, federation-and-mirrors, offline-and-self-hosting-pack.
- **Must-nots:** customer owns records — operator claims/licences none; lapse degrades to read-only/tombstone with declarations intact; recovery never requires identity documents or biometrics.
- **Done when:** export free/without justification; shutdown final export; recovery code-based; offline fallback documented.
- **Effort:** L. **Order:** P4 — last of the services; it hosts everything else, so it needs everything else to be stable first.

### privacy-respecting-analytics — Privacy-Respecting Analytics
- **Goal:** The only permitted telemetry: minimal, opt-in, documented measurement of operational facts — never surveillance.
- **Build:** versioned event catalogue (purpose/fields/retention/aggregate-only); opt-in control component; aggregate thresholded reporting.
- **Needs:** privacy-and-data-minimisation, public-adoption-dashboard (the reports it feeds), research-observatory, experiments-and-metrics.
- **Must-nots:** no ad-tech/fingerprinting/tracking cookies or pixels; no cross-service profiles; no inferred tool/AI use; telemetry never sold; never gates free-floor features.
- **Done when:** catalogue before collection; opt-in default-off; retention enforced; below-threshold "fewer than N".
- **Effort:** S. **Order:** P2 policy (the catalogue) — so every earlier surface ships opt-in-ready; collection follows P3 dashboards.

### training-consulting-and-pilots — Training, Consulting, and Pilots
- **Goal:** Paid professional services (keynotes, workshops, consulting, governance facilitation, pilots) selling time and expertise, never endorsement or influence.
- **Build:** services page (no-certification statements); statement-of-work template; reusable-learning publishing; handover materials.
- **Needs:** pilots-and-case-studies (the pilot methodology), governance-and-stewardship, licensing-and-mark-policy, financial-transparency.
- **Must-nots:** no "certified/approved/accredited" claims about clients or outcomes; consultants never invent or change the normative meaning; no founder-time dependency — handover materials mandatory.
- **Done when:** SOW per engagement; reusable outputs published; handover sufficient; conflicts declared.
- **Effort:** M. **Order:** P3 — rides on pilot evidence from Programme 10.

### publications-and-merchandise — Publications and Merchandise
- **Goal:** Optional publications and physical goods (essays, book, posters, stickers) spreading and funding the idea while the online meaning stays free.
- **Build:** storefront with meaning-integrity and no-status statements; product lines; free screen-reader-accessible digital equivalents; non-store order path.
- **Needs:** licensing-and-mark-policy, multi-format-distribution-kit (the formats), accessibility-floor, financial-transparency.
- **Must-nots:** purchase never confers legitimacy/rank/permission/signer status; no rights claimed over the `+AI` notation; canonical wording never paraphrased.
- **Done when:** designer + licence stated; meaning verbatim; digital equivalent free; ethics/environment disclosed.
- **Effort:** M. **Order:** P3/P4 — THE-PLAN already demands posters/the book; the storefront follows the free kit.

### priority-review-services — Priority Review Services
- **Goal:** Paid priority review (coordination/expedited) of translations, accessibility, security, integrations — payment changes queue position only.
- **Build:** priority queue with published free-tier reservation; reviewer qualifications + criteria per track; dated findings output.
- **Needs:** translation-governance, accessibility-floor, security-and-abuse-controls, developer-integrations (the tracks), moderation-disputes-and-appeals.
- **Must-nots:** payment never changes outcome, safety priority, evidence, or dispute handling; free queue never starved; safety urgency never purchasable; no trust score/rank/certification output.
- **Done when:** queue rules published; free advances; identical standards for both queues; dated findings only.
- **Effort:** M. **Order:** P4 — after the review tracks themselves exist and have queues to prioritise.

## Sequencing

1. **P2:** support-and-donations → sponsorship-policy → privacy-respecting-analytics (catalogue).
2. **P3:** membership-model → grants-and-public-benefit-programmes → api-scale-and-reliability → training-consulting-and-pilots.
3. **P4:** publications-and-merchandise → priority-review-services → managed-hosting-and-domains.
4. Gate for every item: the Programme 1 governance/financial-transparency rules and the Programme 8 failure-mode statement exist before the money flows.

## Risks

- **Influence creep:** the recurring attack on the whole catalogue is "payment buys X" — every launch review must check the free-floor covenant's per-item definitions, not just intentions.
- **Premature monetisation:** membership and managed hosting before real adoption would fund nothing and validate nothing; the sequencing above is deliberately late.
- **Review-quality capture:** priority review is only defensible if both queues apply identical standards — publish the standards before the queue opens.
