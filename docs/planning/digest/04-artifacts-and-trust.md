# Digest 04 — Artifacts and Trust

### artifact-passports — Artifact Passports
- **What:** Stable, addressable resource presenting one declaration for one scope, with status timeline, bindings, evidence, and derivative links.
- **Builds:**
  - Static passport page template (HTML + JSON bundle).
  - Builder export: self-hosted passport bundle with no upload.
  - Render: status timeline, binding kind, derivative links (`derivesFrom`/`derivedBy`).
- **Needs:** portable-declaration-schema, declaration-lifecycle, artifact-hashing-and-binding, machine-readable-assertions, verification-checker, evidence-labels-not-trust-scores, certificates-badges-and-qr, hosted-profiles, visibility-and-consent, url-semantics-and-canonicalization
- **Must-nots:**
  - No implying a derivative inherits the upstream signer's responsibility.
  - No rank, score, or verdict mark.
  - Dynamic artifacts show a labelled point-in-time snapshot, never a live claim.
- **Done when:** stable ID URL; renders from static files; builder emits bundle; checker consumes URL identically.
- **Open:** on-demand vs stored snapshots; snapshot retention.
- **Effort:** M — passport template + bundle export + renderer.

### artifact-hashing-and-binding — Artifact Hashing and Binding
- **What:** Defines how a declaration binds to its subject: byte binding (SHA-256+), scope binding, or C2PA-manifest binding.
- **Builds:**
  - Doc/API: binding object schema (algorithm/hash/canonicalisation/retrieval).
  - Canonicalisation methods: `raw`, `text-normalised`, `region-<selector>`, `exported`.
  - Builder/checker integration: render binding kind; revalidation + bounded fetches.
- **Needs:** portable-declaration-schema, verification-checker, evidence-labels-not-trust-scores, declaration-lifecycle, provenance-interoperability, artifact-passports, specification-versioning-and-hashing
- **Must-nots:**
  - Scope bindings never report `hash-matched` (self-declared coverage only).
  - Hash mismatch never silently ignored or "corrected".
  - Derivatives require their own bindings, never upstream's hash.
- **Done when:** unchanged file → `hash-matched`; changed → `check-failed`; binding kind shown on every surface.
- **Open:** further canonicalisation; Merkle-range hashing for large artifacts.
- **Effort:** M — binding schema + canonicalisation + checker logic.

### declaration-lifecycle — Declaration Lifecycle
- **What:** Defines how an issued declaration changes: states (active/superseded/revoked/disputed/redacted/archived) and append-only events reconciling correction with erasure.
- **Builds:**
  - Doc/API: state vocabulary + event schema (id, type, date-time, acting party, reason).
  - Policy: status derivation; supersession/revocation/dispute/redaction/tombstone/legal-hold rules.
  - Checker/registry integration: dated status timeline; offline event replay.
- **Needs:** portable-declaration-schema, verification-checker, evidence-labels-not-trust-scores, opt-in-signatory-registry, hosted-profiles, moderation-disputes-and-appeals, privacy-and-data-minimisation, organisation-workspaces, evidence-and-compliance-exports, continuity-and-namespace-custody, specification-versioning-and-hashing
- **Must-nots:**
  - Issued record immutable; changes appended, never rewritten in place.
  - Revocation never removes the record; redaction stays schema-valid.
  - Identifiers never reused, even after tombstoning.
- **Done when:** permanent ID; deterministic replay; bidirectional supersession; tombstone keeps id/dates/reason.
- **Open:** jurisdiction erasure; dispute time-to-resolution; signing local events.
- **Effort:** M — event model + status derivation + tooling.

### machine-readable-assertions — Machine-Readable Assertions
- **What:** Makes declarations visible to software via `<meta name="plus-ai">`, JSON-LD, and `/.well-known/plus-ai.json`.
- **Builds:**
  - Doc: three assertion surfaces + discovery order (meta → JSON-LD → well-known).
  - Content: assertion `version` field; well-known `default`/`scopes` shape.
  - Checker integration: discovery, precedence, disagreement reporting.
- **Needs:** portable-declaration-schema, verification-checker, declaration-lifecycle, developer-integrations, provenance-interoperability, artifact-hashing-and-binding, public-snapshots-and-api
- **Must-nots:**
  - Machine form never replaces visible human-readable disclosure.
  - No cookies/tracking/fingerprinting required to read.
  - Absence reported as "no assertion found", never negative.
- **Done when:** identical record across surfaces; per-page precedence; disagreements reported; JS-disabled readable.
- **Open:** JSON-LD single vs multiple blocks; origin-wide extension.
- **Effort:** S — surface spec + discovery order.

### specification-versioning-and-hashing — Specification Versioning and Hashing
- **What:** Versions (vN.M), permanent URLs, and hashes the normative spec so a declaration points at the exact meaning its signer accepted.
- **Builds:**
  - Doc/process: vN.M scheme; canonical-bytes definition; sha256 + change note per release.
  - Tooling: release tooling refusing mismatched hashes; version manifest.
  - Content: 12-char fingerprint display; translation `basedOn` pointers.
- **Needs:** portable-declaration-schema, verification-checker, machine-readable-assertions, declaration-lifecycle, translation-governance, changelog-and-rss, conformance-linter, continuity-and-namespace-custody
- **Must-nots:**
  - Version numbers never reused; typo fixes ship as new minor version.
  - Unresolvable `specVersion` = `check-failed`, never silently remapped.
  - Minor releases never change the three-part meaning.
- **Done when:** permanent version URLs; unversioned redirects; hashes recompute; deprecated versions stay valid referents.
- **Open:** signing manifests; major-change consultation window.
- **Effort:** S — versioning policy + release tooling.

### verification-checker — Verification Checker
- **What:** Free tool inspecting a declaration and reporting findings as dated evidence labels, working offline and hosted, never as an endorsement engine.
- **Builds:**
  - CLI + web UI + read-only API: paste/file/URL/QR input; label-table output.
  - Offline checker (bundled schemas, file://, zero build).
  - Hosted fetch policy: SSRF guard, rate-limit, size/time caps.
- **Needs:** evidence-labels-not-trust-scores, machine-readable-assertions, portable-declaration-schema, specification-versioning-and-hashing, proofs-of-control, artifact-hashing-and-binding, declaration-lifecycle, offline-and-self-hosting-pack, security-and-abuse-controls, conformance-linter
- **Must-nots:**
  - No scores, ranks, or single verdict marks.
  - Unknown states labelled `self-declared`/`not-checked`, never omitted.
  - No caching or reselling fetched content beyond the check.
- **Done when:** offline check complete; every label dated; SSRF blocked; API read-only + rate-limited.
- **Open:** bounded result cache; rate-limit numbers.
- **Effort:** L — CLI + web + API checker (multi-surface).

### proofs-of-control — Proofs of Control
- **What:** Factual checks establishing control (mailbox/account/domain/artifact-location/key) at a stated time — never identity or organisational authority.
- **Builds:**
  - Doc/API: proof record schema (type/method/resource/times/result/expiry).
  - Challenge methods: one-time code, DNS TXT/well-known/token, signed nonce.
  - Checker integration: self-service free recheck; `stale` rendering.
- **Needs:** evidence-labels-not-trust-scores, verification-checker, portable-declaration-schema, declaration-lifecycle, organisation-profiles-and-policies, continuity-and-namespace-custody, security-and-abuse-controls, evidence-and-compliance-exports
- **Must-nots:**
  - No biometrics or device fingerprinting.
  - A delegate's action never presented as the principal's control proof.
  - Disputed proofs marked `disputed`, never silently deleted.
- **Done when:** proof records complete; expired → `stale`; free recheck; key rotation yields new proof + revocation.
- **Open:** default expiry windows; signed-commit method.
- **Effort:** M — challenge methods + proof records + checker eval.

### certificates-badges-and-qr — Certificates, Badges, and QR
- **What:** Exportable visible references to a live declaration (certificates, badges, QR) — pointers, not proofs.
- **Builds:**
  - Builder export: certificate/badge/QR generators (offline).
  - Content: identifier, status URL, issue date, staleness statement on every export.
  - Render: monochrome-safe badges with text fallback; QR encodes bare URL.
- **Needs:** artifact-passports, portable-declaration-schema, declaration-lifecycle, verification-checker, licensing-and-mark-policy, public-usage-guidelines, multi-format-distribution-kit, no-account-declaration-builder, offline-and-self-hosting-pack, independent-assurance-and-certification
- **Must-nots:**
  - No claim of validity, certification, or endorsement.
  - No DRM/blockchain/biometric copy protection.
  - Superseded/revoked status never silently shown as current.
- **Done when:** exports carry identifier/URL/date/staleness; builder generates offline; QR has no tracking redirect.
- **Open:** QR second encoding of the identifier.
- **Effort:** S — export generators (small static formats).

### provenance-interoperability — Provenance Interoperability
- **What:** Maps +AI declarations to C2PA, IPTC, Schema.org, and signature formats without reimplementing them.
- **Builds:**
  - Doc: versioned field-mapping document per external format.
  - Reference implementations (offline) for C2PA/IPTC/Schema.org mappings.
  - Checker integration: external provenance as a distinct labelled section.
- **Needs:** portable-declaration-schema, artifact-hashing-and-binding, machine-readable-assertions, verification-checker, evidence-labels-not-trust-scores, proofs-of-control, standards-engagement, offline-and-self-hosting-pack
- **Must-nots:**
  - No mapping production-facts ↔ responsibility conflation.
  - No claiming C2PA validation the project did not perform.
  - Unaligned IPTC cases recorded "no equivalent", never forced.
- **Done when:** mapping doc per format; distinct checker section; offline reference impls; versioned + changelogged.
- **Open:** Schema.org property choice; machine-readable mapping registry.
- **Effort:** M — mapping docs + reference implementations.

### independent-assurance-and-certification — Independent Assurance and Certification
- **What:** Conditions under which a distinct future assurance programme may exist — never redefining ordinary +AI as inferior or paid-only.
- **Builds:**
  - Doc/policy: precondition gates; distinct credential name/mark; criteria versioning.
  - Policy: assessor independence; appeals/renewal; liability disclaimers; fee waivers.
  - Governance: programme separate from spec authority and service revenue.
- **Needs:** evidence-labels-not-trust-scores, verification-checker, certificates-badges-and-qr, governance-and-stewardship, financial-transparency, priority-review-services, standards-engagement, red-lines-and-cautious-extensions
- **Must-nots:**
  - Not started before all three preconditions are recorded met.
  - Baseline mark's freedom and validity untouched by the credential.
  - Payment never changes criteria, outcomes, or recorded evidence.
- **Done when:** no credential exists today; preconditions recorded before any build; credential distinct from +AI.
- **Open:** adoption metric; whether it ever exists.
- **Effort:** S — policy/decision doc (no code now).
