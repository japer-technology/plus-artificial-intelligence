# Digest 03 — Registers and Discovery

### ai-practice-register — AI Practice Register
- **What:** Voluntary, portable JSON register describing a party's standing AI capabilities, tools, purposes, data rules, and review practices, separate from any artifact declaration.
- **Builds:**
  - Doc/API: JSON schema for `.plus-ai-practices.json`; offline validator.
  - Render: public view labelling every entry `self-declared`.
  - Policy: versioned assertions; default `local` visibility; no reputation field.
- **Needs:** claim-types, tool-taxonomy, portable-declaration-schema, approved-tool-registers, artifact-ai-bill-of-materials, evidence-labels-not-trust-scores, visibility-and-consent, hosted-profiles, organisation-profiles-and-policies
- **Must-nots:**
  - No prompts, transcripts, or provider credentials stored/required.
  - No field functioning as a reputation score or rank.
  - Higher visibility requires explicit separate consent.
- **Done when:** id+party-only record validates offline; prompts rejected; public entries labelled self-declared; prior versions readable.
- **Open:** retention of retired entries; capabilities vocabulary.
- **Effort:** M — schema + validator + reference rendering.

### tool-taxonomy — Tool Taxonomy
- **What:** Open, versioned, provider-neutral vocabulary of capabilities/tools/products/models with stable identifiers and a community contribution path.
- **Builds:**
  - API/dataset: versioned taxonomy + offline resolver (alias→canonical; retired status).
  - Policy: proposal/review/merge contribution process; vendor-interest recusal.
  - Content: factual descriptions; alphabetical/ID default ordering.
- **Needs:** governance-and-stewardship, licensing-and-mark-policy, specification-versioning-and-hashing, ai-practice-register, portable-declaration-schema, artifact-ai-bill-of-materials, claim-types, translation-governance, sponsorship-policy, research-observatory
- **Must-nots:**
  - No marketing copy or superiority claims in descriptions.
  - No paid placement, ordering, or sponsored entry wording.
  - Retired terms never deleted; aliases to retired terms report `retired`.
- **Done when:** 4 types distinct; aliases resolve; retired resolvable forever; offline resolution; no rank ordering.
- **Open:** custom-entry namespacing; further type subdivision.
- **Effort:** M — versioned dataset + resolver + contribution process.

### claim-types — Claim Types
- **What:** Claim vocabulary — `available`, `generally-used`, `approved`, `used-on-artifact` — plus `aiRole` and qualifiers, so disclosure states one fact at a time.
- **Builds:**
  - Doc: claim-kind definitions + open `aiRole` vocabulary.
  - Validation: `used-on-artifact` requires `artifactRef`; `approved` requires `policyRef`.
  - Content: non-implication notice text for party-level claims.
- **Needs:** portable-declaration-schema, ai-practice-register, approved-tool-registers, artifact-ai-bill-of-materials, tool-taxonomy, declaration-lifecycle, evidence-labels-not-trust-scores, governance-and-stewardship
- **Must-nots:**
  - No merging the four claims into one "uses AI" flag.
  - No inferring one claim kind from another.
  - `aiRole` never asserts AI created everything / no human review.
- **Done when:** 4 kinds distinct; refs enforced; notice shown on party-level claims; self-declared default.
- **Open:** closed vs open role list; notice wording.
- **Effort:** S — vocabulary doc + validation rules.

### approved-tool-registers — Approved-Tool Registers
- **What:** Organisation's internal policy record of approved AI capabilities, purposes, data rules, owner, review date, and retired policies — "approved" as an inspectable statement.
- **Builds:**
  - Doc/API: approval-register schema with exceptions and acknowledgements.
  - Service: role-based authoring via organisation workspaces (org-only default).
  - Render: redacted dated public snapshot; past-due review detection.
- **Needs:** claim-types, ai-practice-register, tool-taxonomy, artifact-ai-bill-of-materials, evidence-labels-not-trust-scores, organisation-profiles-and-policies, proofs-of-control, organisation-workspaces, visibility-and-consent, evidence-and-compliance-exports, workflow-automation-services, security-and-abuse-controls
- **Must-nots:**
  - Approvals never carry `used-on-artifact`.
  - Default organisation-only, never publicly indexed.
  - No ranking/endorsement of approved tools.
- **Done when:** local validates offline; entries carry owner/review/data rules; public = redacted dated snapshot.
- **Open:** retention schedule; embed vs reference policy text.
- **Effort:** M — schema + workspace authoring + snapshot rendering.

### artifact-ai-bill-of-materials — Artifact AI Bill of Materials (AI-BOM)
- **What:** Focused list of tools/capabilities/review practices that materially contributed to one artifact, attached to its declaration.
- **Builds:**
  - Doc/API: AI-BOM schema (`used-on-artifact` + `aiRole` per entry; confidential toggle).
  - Builder UI: entry creation with confidential flag and "undisclosed" rendering.
  - Render: table on declaration/passport with `self-declared` labels.
- **Needs:** portable-declaration-schema, claim-types, tool-taxonomy, ai-practice-register, artifact-hashing-and-binding, artifact-passports, provenance-interoperability, machine-readable-assertions, declaration-lifecycle, evidence-labels-not-trust-scores
- **Must-nots:**
  - No prompts, prompt logs, or transcript content.
  - Never auto-populated from a party's practice register.
  - Derivatives carry their own AI-BOM, never inherit upstream entries.
- **Done when:** one artifact per BOM; empty-with-`aiRole` valid; confidential renders "undisclosed"; version never guessed.
- **Open:** material-contribution threshold; category-level aggregation.
- **Effort:** M — schema + builder entry UI + renderer.

### opt-in-signatory-registry — Opt-In Signatory Registry
- **What:** Voluntary, versioned public record of parties and declarations with stable IDs, dates, statuses, revocation, and mirrorable snapshots.
- **Builds:**
  - API/dataset: versioned hash-pinned `registry.json` + rendered directory page.
  - Process: consent-recorded admission; human review for consequential decisions.
  - Policy: neutral ordering; no paid placement; correction/revocation events.
- **Needs:** portable-declaration-schema, declaration-lifecycle, visibility-and-consent, evidence-labels-not-trust-scores, public-directory, sector-and-language-directories, public-snapshots-and-api, federation-and-mirrors, moderation-disputes-and-appeals, governance-and-stewardship, licensing-and-mark-policy
- **Must-nots:**
  - No entry without dated public-visibility consent.
  - Revoked entries stay visible as `revoked` (never silently removed).
  - No paid placement, ordering, or prominence.
- **Done when:** versioned dataset + page; only `public` records; deterministic snapshots; non-endorsement notice.
- **Open:** release cadence; self-service moderation threshold.
- **Effort:** L — hosted registry + snapshot + moderation pipeline.

### public-directory — Public Directory
- **What:** Discoverable collections of opt-in records with clear filters and documented neutral ordering — findable without endorsement.
- **Builds:**
  - Static collection pages over snapshot data (people, orgs, projects, declarations, registers, pilots, integrations, translators, case studies).
  - Content: non-endorsement notice; neutral ordering; correction/revocation/abuse routes.
  - Search over the published snapshot index.
- **Needs:** opt-in-signatory-registry, visibility-and-consent, evidence-labels-not-trust-scores, sector-and-language-directories, public-snapshots-and-api, public-usage-guidelines, licensing-and-mark-policy, moderation-disputes-and-appeals, accessibility-floor, research-observatory
- **Must-nots:**
  - No purchased/sponsored ordering position.
  - No aggregate scores, rankings, or popularity metrics.
  - Revoked records disappear within one business day.
- **Done when:** only public+consented records; notice everywhere; snapshot-mirrorable; accessible.
- **Open:** per-collection RSS feeds.
- **Effort:** M — static directory pages + snapshot-backed search.

### sector-and-language-directories — Sector and Language Directories
- **What:** Sector/artifact-type/language/region views over public records, filtering only on declared values, without stereotyping or implying competence.
- **Builds:**
  - Static filtered view pages (sector, language, coarse-region).
  - Content: non-endorsement notice; low-count suppression ("fewer than N records").
  - Policy: no inferred sectors/locations; versioned filter vocabulary.
- **Needs:** public-directory, opt-in-signatory-registry, visibility-and-consent, theme-engine-and-packs, theme-gallery-community-voting, per-theme-conformance-notes, public-snapshots-and-api, accessibility-floor, research-observatory
- **Must-nots:**
  - No filtering on values the holder did not declare; no geolocation.
  - No implying professional competence, endorsement, or certification.
  - Low-count views suppressed (default k=10).
- **Done when:** declared-value filters only; suppression below threshold; themed layers consume identical data + notices.
- **Open:** align sector vocab with external classifications.
- **Effort:** M — static filtered views + suppression logic.

### visibility-and-consent — Visibility and Consent
- **What:** Defines visibility modes (`local`, `unlisted`, `public`, `organisation-only`) and the consent rules for moving between them.
- **Builds:**
  - Doc/policy: mode semantics + consent-record requirements.
  - Component: shared visibility selector (builder/profile/registry) with previews.
  - Policy: decrease-without-approval; one-business-day cache purge; noindex for unlisted.
- **Needs:** portable-declaration-schema, public-directory, sector-and-language-directories, opt-in-signatory-registry, hosted-profiles, artifact-passports, organisation-workspaces, privacy-and-data-minimisation, declaration-lifecycle, child-safe-education
- **Must-nots:**
  - No record without a visibility field; unlisted never indexed.
  - Decreasing visibility needs no approval, payment, or justification.
  - Organisation-only never revealed by link alone.
- **Done when:** modes stored; public requires dated consent; org-only role-gated; exports carry visibility.
- **Open:** per-link revocation tokens for unlisted.
- **Effort:** M — mode schema + selector component + consent policy.

### evidence-labels-not-trust-scores — Evidence Labels, Not Trust Scores
- **What:** Vocabulary and presentation rules for reporting what is known as individual checkable facts, forbidding any single verdict or score.
- **Builds:**
  - Doc: canonical label vocabulary + custom-label namespacing.
  - Policy: label+date rendering; mandatory disclaimer text on every surface.
  - API: structured label-set output (no aggregate score field).
- **Needs:** verification-checker, proofs-of-control, declaration-lifecycle, portable-declaration-schema, artifact-hashing-and-binding, specification-versioning-and-hashing, public-directory, sector-and-language-directories, independent-assurance-and-certification
- **Must-nots:**
  - No single colour/checkmark/badge/score as summary of multiple labels.
  - "Schema valid"/"signature valid" never imply claims are true.
  - Failed checks reported as `check-failed` + reason, never negative trust.
- **Done when:** no aggregate verdict anywhere; every label dated or "never checked"; disclaimer on all surfaces.
- **Open:** default expiry windows; "current" vs "archived" spec-version view.
- **Effort:** S — label vocabulary + presentation rules.

### research-observatory — Research Observatory
- **What:** Controlled use of public, aggregated +AI records to study disclosure, adoption, and review practices without identifying or harming disclosers.
- **Builds:**
  - Policy/process: ethical-review gate; disclosure threshold (k=10); research governance.
  - Doc: privacy-safe export rules; anti-doxxing controls; output review.
  - Process: open publication of methods + negative findings, linked to snapshot versions.
- **Needs:** opt-in-signatory-registry, public-snapshots-and-api, privacy-and-data-minimisation, privacy-respecting-analytics, experiments-and-metrics, pilots-and-case-studies, public-adoption-dashboard, changelog-and-rss, standards-engagement
- **Must-nots:**
  - Only `public` snapshot data; no private/unlisted/organisation-only data.
  - No identifier/contact/raw-record exports; no below-threshold stats.
  - Never sell or licence below-threshold data.
- **Done when:** public-only; ethical review recorded; threshold published; methods + negatives published.
- **Open:** third-party researcher access terms.
- **Effort:** M — research governance + aggregation/export pipeline.
