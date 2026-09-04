# Synthesis — +AI Specification Digest

This file distills the 95 spec slices (`docs/planning/digest/01..07`) into dependency structure, build groupings, phasing, cross-cutting concerns, and top risks. Counts and cluster/programme membership were computed from each spec's §7 "Needs" links and §5.2/§5.4 deliverables.

## 1. Hubs — most-referenced specs (in-degree, top 10)

1. `portable-declaration-schema` — 36
2. `declaration-lifecycle` — 28
3. `evidence-labels-not-trust-scores` — 27
4. `privacy-and-data-minimisation` — 24
5. `security-and-abuse-controls` — 24
6. `accessibility-floor` — 23
7. `free-floor-covenant` — 22
8. `governance-and-stewardship` — 22
9. `continuity-and-namespace-custody` — 22
10. `verification-checker` — 21

Just outside: `licensing-and-mark-policy` (21), `static-first-service-architecture` (20), `visibility-and-consent` / `moderation-disputes-and-appeals` / `specification-versioning-and-hashing` (18 each), `translation-governance` / `theme-engine-and-packs` (16 each). The single most load-bearing asset is the portable declaration schema; the checker is the only L-effort spec in the top 10, so it is the critical path.

## 2. Dependency clusters

Six neighbourhoods in the dependency graph (illustrative — the exact partition is §3):

- **C1 Trust & declaration core (11):** portable-declaration-schema, declaration-lifecycle, evidence-labels-not-trust-scores, verification-checker, artifact-hashing-and-binding, machine-readable-assertions, specification-versioning-and-hashing, proofs-of-control, artifact-passports, certificates-badges-and-qr, provenance-interoperability.
- **C2 Governance & commons norms (13):** free-floor-covenant, governance-and-stewardship, red-lines-and-cautious-extensions, licensing-and-mark-policy, financial-transparency, continuity-and-namespace-custody, static-first-service-architecture, cost-discipline, changelog-and-rss, about-project, founder-story, motivation-and-prior-art, shared-project-navigation.
- **C3 Privacy, safety & operations (10):** privacy-and-data-minimisation, security-and-abuse-controls, moderation-disputes-and-appeals, child-safe-education, accessibility-floor, contact-routes, visibility-and-consent, public-snapshots-and-api, federation-and-mirrors, offline-and-self-hosting-pack.
- **C4 Registers & discovery data (10):** claim-types, tool-taxonomy, ai-practice-register, approved-tool-registers, artifact-ai-bill-of-materials, opt-in-signatory-registry, public-directory, sector-and-language-directories, research-observatory, public-adoption-dashboard.
- **C5 Identity, profiles & hosting (7):** hosted-profiles, named-subdomains-and-identity-bundles, organisation-profiles-and-policies, organisation-workspaces, message-bearing-subdomains, managed-hosting-and-domains, privacy-preserving-email-relay.
- **C6 Presentation, distribution & integrations (22):** theme-engine-and-packs, theme-builder-and-starter-kit, conformance-linter, generator-pipeline, surprise-me-theme-mode, per-theme-conformance-notes, flavour-text-localisation, custom-themes, theme-gallery-community-voting, multi-format-distribution-kit, plus-ai-web-component, authored-links, email-signature-kit, plus-addressing-convention, email-metadata, declaration-by-email, publishing-and-productivity-integrations, developer-integrations, translation-governance, regulatory-phrasing-packs, standards-engagement, use-plus-ai-guide.

The funding/optional-services specs (support-and-donations through priority-review-services) are a **client layer** that sits on top of these clusters: nearly all of them depend on the free-floor/governance/red-lines trio plus static-first/privacy/security and one or two operational siblings.

## 3. Programmes (9 — exact partition of all 95)

**P-A — Governance & Content Foundation (16).** Members: about-project, founder-story, motivation-and-prior-art, use-plus-ai-guide, contribution-ladder, community-hub, contact-routes, shared-project-navigation, free-floor-covenant, public-usage-guidelines, licensing-and-mark-policy, governance-and-stewardship, financial-transparency, continuity-and-namespace-custody, red-lines-and-cautious-extensions, changelog-and-rss.
Rationale: establishes the canonical meaning, the free floor, the red lines, governance/licensing/continuity, the navigation contract, and the change record that every other spec cites. It is the base of the dependency graph and the surface where the free-floor promise is first made public.
Effort: **M** (12 S + 4 M). Prerequisites: none.
Doc/policy-only (no code): free-floor-covenant, governance-and-stewardship, licensing-and-mark-policy, red-lines-and-cautious-extensions, financial-transparency, motivation-and-prior-art, public-usage-guidelines, changelog-and-rss (feed generator is the one small tool); about-project, founder-story, use-plus-ai-guide, contribution-ladder, contact-routes are static content pages.

**P-B — Trust & Declaration Core (11).** Members: portable-declaration-schema, declaration-lifecycle, evidence-labels-not-trust-scores, verification-checker, artifact-hashing-and-binding, machine-readable-assertions, specification-versioning-and-hashing, proofs-of-control, artifact-passports, certificates-badges-and-qr, provenance-interoperability.
Rationale: the declaration record, its lifecycle, and the free checker are the mechanical heart of the mark — the difference between "someone claims X" and "this is what we could check". Everything that signs, lists, verifies, or exports depends on this group.
Effort: **L** (4 S + 6 M + 1 L). Prerequisites: P-A.
Doc/policy-only: evidence-labels-not-trust-scores, machine-readable-assertions (spec), specification-versioning-and-hashing (doc + release tooling).

**P-C — Signing & Identity Surfaces (7).** Members: authored-links, no-account-declaration-builder, signing-wizard, url-semantics-and-canonicalization, hosted-profiles, named-subdomains-and-identity-bundles, organisation-profiles-and-policies.
Rationale: the no-account builder and signing wizard are the free floor's user-facing tools (explicitly enumerated in the covenant); profiles and named subdomains are the optional identity layer built on the same records. URL semantics is folded here because authored-links and subdomains are its main consumers.
Effort: **L** (2 S + 2 M + 3 L). Prerequisites: P-A, P-B (schema/hashing/checker).
Doc/policy-only: url-semantics-and-canonicalization.

**P-D — Registers & Discovery (10).** Members: claim-types, tool-taxonomy, ai-practice-register, approved-tool-registers, artifact-ai-bill-of-materials, opt-in-signatory-registry, public-directory, sector-and-language-directories, visibility-and-consent, research-observatory.
Rationale: turns the declaration record into reusable data objects (claims, tools, practices, AI-BOMs) and the voluntary public registry/directory that makes signing a dated, findable public fact without endorsement or rank.
Effort: **L** (1 S + 8 M + 1 L). Prerequisites: P-A, P-B.
Doc/policy-only: claim-types; visibility-and-consent is policy + one shared selector component.

**P-E — Presentation & Themes (10).** Members: theme-engine-and-packs, theme-builder-and-starter-kit, conformance-linter, generator-pipeline, surprise-me-theme-mode, per-theme-conformance-notes, flavour-text-localisation, custom-themes, theme-gallery-community-voting, accessibility-floor.
Rationale: realises "one normative specification, many presentations" — the engine guarantees meaning, the linter and notes keep drift out, and the gallery/surprise-me provide discovery without ranking. Accessibility-floor anchors here because it is enforced mechanically by the linter and rendered by the engine.
Effort: **M** (4 S + 6 M). Prerequisites: P-A (nav, changelog), P-B (spec-versioning).
Doc/policy-only: none pure — per-theme-conformance-notes and flavour-text-localisation are schema+rule specs with small linter hooks.

**P-F — Distribution, Email & Integrations (10).** Members: multi-format-distribution-kit, email-signature-kit, plus-addressing-convention, email-metadata, plus-ai-web-component, publishing-and-productivity-integrations, developer-integrations, translation-governance, regulatory-phrasing-packs, standards-engagement.
Rationale: carries the one record into every authoring surface — files, email, packages, Git, CMSs, and regulated contexts — with translation as the shared localisation spine. Standards-engagement is gated here (it is deferred until schemas/checker/impls are stable).
Effort: **M** (4 S + 5 M + 1 L). Prerequisites: P-A, P-B (assertions/checker), P-C (builder as reference output).
Doc/policy-only: plus-addressing-convention, email-metadata (spec), standards-engagement.

**P-G — Platform, Data & Safety Infrastructure (13).** Members: static-first-service-architecture, public-snapshots-and-api, federation-and-mirrors, offline-and-self-hosting-pack, cost-discipline, public-adoption-dashboard, privacy-and-data-minimisation, security-and-abuse-controls, moderation-disputes-and-appeals, child-safe-education, message-bearing-subdomains, privacy-preserving-email-relay, declaration-by-email.
Rationale: the operations spine — the snapshot/mirror/offline-pack pipeline that keeps the commons survivable, plus the privacy/security/moderation/child-safety controls every hosted surface must satisfy. Its policy docs are early; its hosted pieces (snapshots, relay) are later.
Effort: **L** (4 S + 6 M + 3 L). Prerequisites: P-A (policies), P-B (checker/lifecycle), P-D (registry for snapshots).
Doc/policy-only: static-first-service-architecture, cost-discipline, privacy-and-data-minimisation (template + policies).

**P-H — Optional Services & Funding (13).** Members: support-and-donations, sponsorship-policy, membership-model, grants-and-public-benefit-programmes, organisation-workspaces, workflow-automation-services, api-scale-and-reliability, evidence-and-compliance-exports, managed-hosting-and-domains, privacy-respecting-analytics, training-consulting-and-pilots, publications-and-merchandise, priority-review-services.
Rationale: the paid convenience layer — funding routes and managed/automated services — every one bound by the "never legitimacy/rank/permission" rule and required to publish a failure-mode statement. Built last because each depends on the free floor and the platform being stable first.
Effort: **L** (3 S + 7 M + 3 L). Prerequisites: P-A, P-B, P-C (profiles/workspaces), P-D (registry), P-G (static-first/snapshots/security/privacy).
Doc/policy-only: sponsorship-policy; support-and-donations is a static page.

**P-I — Research, Pilots & Future Extensions (5).** Members: pilots-and-case-studies, experiments-and-metrics, marketplace-and-matching, agentic-accountability, independent-assurance-and-certification.
Rationale: learning loops and gated future capabilities — all preconditioned on meaningful adoption and governed assessment, and three are explicit "may never exist" decision documents. They consume P-D/P-G data and P-A governance.
Effort: **S** (3 S + 2 M). Prerequisites: P-A, P-B (labels/checker), P-D (directory/observatory), P-G (privacy/moderation/child-safe).
Doc/policy-only: marketplace-and-matching, agentic-accountability, independent-assurance-and-certification.

## 4. Phasing

- **P0 — Foundations:** P-A. Justification: the meaning, free floor, red lines, governance, licensing, continuity, navigation, and changelog must exist first because every other spec cites them and the free-floor promise must be published before anything is built on it.
- **P1 — Core tooling:** P-B, P-D, P-C. Justification: the declaration schema + free checker (P-B) are free-floor items and the dependency hub (36 in-edges); registers/discovery (P-D) and the no-account builder/signing wizard (P-C) are the free-floor user surfaces. These deliver the complete usable no-account path end-to-end.
- **P2 — Breadth (platform + presentation + distribution):** P-G, P-E, P-F. Justification: P-G makes the record mirrorable/survivable and safe (free-floor priority: offline pack + mirrors); P-E and P-F broaden reach and presentation. They depend on stable P1 records and P0 norms.
- **P3 — Optional/deferred services:** P-H, P-I. Justification: every member is optional, paid, watchlist-adjacent, or gated on "meaningful adoption"/preconditions, so it is sequenced after the free floor and platform are proven and funded.

## 5. Cross-cutting concerns (apply to every programme)

1. **Static-first + file:// + mirrorable** — every artifact opens from disk, no build step, no fetch, no account (invariant 4).
2. **Free floor is permanent** — meaning + no-account path stay free; paid services add convenience/scale/support/ops, never legitimacy/rank/permission.
3. **No trust scores or verdicts** — only dated evidence labels; `self-declared` until independently checked.
4. **Privacy & data-minimisation** — collect only what a feature needs; no covert tracking, fingerprinting, or biometrics (RL-5/RL-6).
5. **Accessibility floor** — keyboard, WCAG AA, 320px reflow, reduced-motion, CJK/RTL, monochrome print on every surface.
6. **No silent change** — versioning, changelog entry, dated corrections/errata (invariant 5).
7. **Red-line citation by ID (RL-1…RL-9)** + watchlist assessment gate before any adjacent feature ships.
8. **Failure-mode statement + demonstrated degraded mode** for every hosted service.
9. **Translation governance status labels** (`reviewed`/`community`/`machine`/`outdated`) on all localised text; machine text never presented as reviewed meaning.
10. **Human responsibility** — a named human `responsibleParty`; no publication in another's name without that human's acceptance (RL-7/RL-8).

## 6. Top 10 risks / open questions (most affect sequencing)

1. **Legal home, maintainer roles, and JAPER relationship undecided** — blocks truthful About/Governance pages (about-project, governance-and-stewardship).
2. **Spec-authority form, phase-transition triggers, and custodian legal form undecided** — gates versioning discipline and free-floor stability (governance-and-stewardship, free-floor-covenant).
3. **Licence identifiers and registry data-licence pending legal review** — gates publishing code and public data (licensing-and-mark-policy).
4. **Free-floor tooling parameters undecided** — builder free-text bounds/draft storage, checker SSRF/rate-limit numbers, cost model — the free core's build/launch order depends on them (no-account-declaration-builder, verification-checker, cost-discipline).
5. **Registry self-service threshold + release cadence undecided** — gates opening the public directory/community (opt-in-signatory-registry, moderation-disputes-and-appeals).
6. **"Meaningful adoption" metric undefined** — preconditions P3 extensions (independent-assurance-and-certification, marketplace-and-matching, standards-engagement).
7. **Control-proof expiry windows + label staleness undecided** — affects checker correctness and the no-trust-score guarantee (proofs-of-control, evidence-labels-not-trust-scores).
8. **Jurisdiction erasure that forbids even a tombstone identifier** — legal risk to the lifecycle's append-only design (declaration-lifecycle, privacy-and-data-minimisation).
9. **Cost model + free-quota numbers undecided** — determines whether the free floor is affordable and when paid tiers can be priced (cost-discipline, api-scale-and-reliability).
10. **Watchlist assessments outstanding** — sponsorship, identity integrations (SSO/SCIM), hosted mail relay, blockchain anchoring all need a published assessment before their specs ship (red-lines-and-cautious-extensions, sponsorship-policy, organisation-workspaces, privacy-preserving-email-relay).
