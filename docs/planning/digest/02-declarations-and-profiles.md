# Digest 02 — Declarations and Profiles

### authored-links — Authored Links
- **What:** Shareable URL that renders a personalised `+AI` explanation (name/organisation/lang/theme/font/colour) with no account, upload, or declaration.
- **Builds:**
  - Static compose form (web page) building a query-string link + copy button.
  - Render logic: closed parameter set, allowlisted values, unknown/CSS values ignored.
  - Content: visible "self-authored and unverified" label + sensitive-data warning.
- **Needs:** url-semantics-and-canonicalization, theme-engine-and-packs, flavour-text-localisation, no-account-declaration-builder, named-subdomains-and-identity-bundles, free-floor-covenant
- **Must-nots:**
  - No parameter may alter/abridge the normative meaning text.
  - No cookies, tracking, or storing the personalised link.
  - Never styled as verified or presented as a declaration.
- **Done when:** meaning verbatim under any params; label visible; unsafe params rejected; works JS-disabled.
- **Open:** name/org max length; short share token.
- **Effort:** S — one static composer page + allowlist render.

### no-account-declaration-builder — No-Account Declaration Builder
- **What:** Free browser-only tool turning answers into a full declaration (visible text, link, portable record, metadata, QR) with no uploads or server.
- **Builds:**
  - Static single-page app (web page), file://-openable, no network during composition.
  - Outputs: `.plus-ai.json`, personalised link, metadata block, QR target.
  - Save/load: import/export file + optional local draft storage (draft-labelled).
- **Needs:** portable-declaration-schema, signing-wizard, artifact-hashing-and-binding, machine-readable-assertions, authored-links, certificates-badges-and-qr, verification-checker, declaration-lifecycle, free-floor-covenant
- **Must-nots:**
  - Prompts, provider disclosure, and identity never required.
  - No field may inject markup into text or link.
  - Issuing ≠ verification; warned before issue.
- **Done when:** composes/exports offline; both binding kinds; keyboard/screen-reader operable; draft vs issued distinct.
- **Open:** free-text bounds; draft storage mechanism.
- **Effort:** M — browser-only SPA (core tool).

### signing-wizard — Signing Wizard
- **What:** Guided journey from six-word meaning → responsible party → artifact/scope → optional AI role → export exactly one declaration.
- **Builds:**
  - Static guided step UI (web page) with back nav and local draft save/resume.
  - Per-field plain-language help (what it asserts / does not assert).
  - Hand-off to builder's results view; identical record.
- **Needs:** no-account-declaration-builder, portable-declaration-schema, artifact-hashing-and-binding, claim-types, evidence-labels-not-trust-scores, declaration-lifecycle, translation-governance, free-floor-covenant
- **Must-nots:**
  - No identity documents or proof of control requested.
  - No nudging/pre-filling to encourage optional disclosure.
  - No option asserting AI created everything or no human review.
- **Done when:** shortest path no-account; warning precedes fields; pseudonym accepted; one declaration exported.
- **Open:** recap step; usability-test criteria.
- **Effort:** M — guided multi-step UI (paired with builder).

### url-semantics-and-canonicalization — URL Semantics and Canonicalisation
- **What:** Fixes how +AI URLs mean: paths carry durable ID identity, queries presentation/filters, fragments local drafts; structured meaning lives in a manifest.
- **Builds:**
  - Doc: canonical-URL, immutable-ID, slug/alias/redirect rules.
  - Policy: UTF-8/%2B encoding, sorted params, bounded segments; tombstone resolution.
  - Doc: version-bearing vs unversioned-redirect scheme.
- **Needs:** specification-versioning-and-hashing, declaration-lifecycle, continuity-and-namespace-custody, visibility-and-consent, authored-links, portable-declaration-schema, machine-readable-assertions
- **Must-nots:**
  - URLs never repurposed to name a different resource.
  - Retired resources never a bare 404 (tombstone/archive).
  - Servers/crawlers must ignore fragment content.
- **Done when:** single canonical ID URL; `+`→`%2B` round-trips; missing params default; retired → tombstone.
- **Open:** max URL length; slugs vs ID-only.
- **Effort:** S — normative URL policy doc.

### portable-declaration-schema — Portable Declaration Schema
- **What:** Open, versioned JSON record (who/for what/with what AI role/when/under which spec version), one shape across file, metadata, and registry.
- **Builds:**
  - Doc/API: versioned JSON Schema + offline validator per version.
  - Canonical serialisation spec (sorted keys, minimal escaping).
  - Version/change-note/deprecation-release process.
- **Needs:** machine-readable-assertions, declaration-lifecycle, specification-versioning-and-hashing, artifact-hashing-and-binding, claim-types, tool-taxonomy, verification-checker, no-account-declaration-builder, signing-wizard, opt-in-signatory-registry, hosted-profiles, visibility-and-consent
- **Must-nots:**
  - Prompts never required; no embedded credentials/keys/third-party data.
  - Organisation must not be the sole responsibleParty (human required).
  - Field removal requires a prior deprecation release.
- **Done when:** minimal record validates offline; canonical bytes identical; unknown fields round-trip; old records validate.
- **Open:** deprecation window length.
- **Effort:** M — schema + validator + serialisation spec.

### hosted-profiles — Hosted Profiles
- **What:** Optional stable public page collecting opted-in context (name/pseudonym, practice register, declarations, contact) without becoming a verdict.
- **Builds:**
  - Public profile page + manage view (web app).
  - Append-only edit history; export-then-remove departure.
  - Account recovery (codes/control proofs, no identity docs); free basic tier (unlisted default).
- **Needs:** portable-declaration-schema, declaration-lifecycle, ai-practice-register, claim-types, opt-in-signatory-registry, visibility-and-consent, proofs-of-control, evidence-labels-not-trust-scores, privacy-and-data-minimisation, moderation-disputes-and-appeals, managed-hosting-and-domains, named-subdomains-and-identity-bundles, free-floor-covenant
- **Must-nots:**
  - Profile optional — never required to use +AI or issue a declaration.
  - No reputation, rank, or trust score/verdict.
  - No auto-created registry entry (separate consent); no identity docs.
- **Done when:** no-account declaration possible without profile; default unlisted; per-declaration statuses; pseudonym end-to-end.
- **Open:** fallback when all recovery factors lost.
- **Effort:** L — hosted accounts + profile service.

### named-subdomains-and-identity-bundles — Named Subdomains and Identity Bundles
- **What:** Claimed memorable address (e.g. `name.plus-artificial-intelligence.org`) resolving to a declaration/profile — a paid convenience, never identity or rank.
- **Builds:**
  - Service: subdomain claim/resolve/manage/lapse flow (web).
  - Doc: published allocation rule + reserved-term list; IDN normalisation + homograph flagging.
  - Policy: renewal/grace/tombstone; transfer-as-event; abuse/suspension route.
- **Needs:** url-semantics-and-canonicalization, hosted-profiles, portable-declaration-schema, message-bearing-subdomains, authored-links, plus-addressing-convention, continuity-and-namespace-custody, free-floor-covenant, licensing-and-mark-policy
- **Must-nots:**
  - Address never presented as identity/endorsement/verification.
  - No legal-name or identity proof required to claim.
  - No trust score/rank; never a prerequisite for declaring.
- **Done when:** address-not-identity label always shown; collision by rule; impersonation suspendable; lapse → tombstone with target intact.
- **Open:** grace period; mailbox control proof at claim.
- **Effort:** L — hosted subdomain allocation + DNS product.

### organisation-profiles-and-policies — Organisation Profiles and Policies
- **What:** Public page disclosing an organisation's versioned AI policy, contacts, teams, practice register, and artifact declarations — responsibility stays with named humans.
- **Builds:**
  - Public profile page + manage view (web app) with non-endorsement text.
  - Versioned policy-revision flow; role/representative change events.
  - Domain-control evidence display; member-consent listing and withdrawal.
- **Needs:** portable-declaration-schema, claim-types, approved-tool-registers, organisation-workspaces, hosted-profiles, proofs-of-control, evidence-labels-not-trust-scores, visibility-and-consent, declaration-lifecycle, continuity-and-namespace-custody
- **Must-nots:**
  - Organisation never a sole signer (human responsibleParty required).
  - No trust score, rank, or single verdict.
  - Domain not shown as controlled without a control proof.
- **Done when:** policy versioned; each declaration has a human signer; offboarded reps lose edit; member consent honoured.
- **Open:** domain-proof precondition; non-endorsement wording.
- **Effort:** L — org profile + workspace-backed management.
