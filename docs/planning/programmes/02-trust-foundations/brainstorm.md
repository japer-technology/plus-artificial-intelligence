# Brainstorm — Programme 02: Trust Foundations (the Data Spine)

> Companion to [`02-trust-foundations.md`](../02-trust-foundations.md). Every member suggestion is decomposed here into **definitive features** and **pre-implementation decisions**; each has one agent request in [`requests/`](requests/). Workflow: open a request, record your choices in its §1, then give the file to your agent.

## Programme-level decisions (affect more than one request)

- **Joint freeze check (spine coherence).** Before Programme 3 starts, the record trio + labels quartet — `portable-declaration-schema`, `declaration-lifecycle`, `artifact-hashing-and-binding`, `evidence-labels-not-trust-scores` — undergo one joint review of their cross-references: the `binding` object, the `status` field versus event-derived status, the `hash-matched`/`check-failed` labels, and the `self-declared` default. This is the programme's "no rock left unturned" gate — later tools pay the cost here if the spine is incoherent. Noted in each of the four requests (§2).
- **Output-path convention.** Human normative docs/vocabularies/policies → `docs/`; machine-readable schemas/datasets/manifests → `site/` (the file://-served commons carried by the offline pack); tooling (validators, resolvers, release/replay scripts) → `scripts/`. Keeps the served commons and the human docs apart without inventing any new service or surface.
- **§11 cross-cutting decisions are placed in named requests.** The schema deprecation window → `portable-declaration-schema`; control-proof expiry/staleness defaults → `proofs-of-control` and `evidence-labels-not-trust-scores` (one table, decided in both); jurisdiction erasure that forbids a tombstone identifier → `declaration-lifecycle` (joint owner `privacy-and-data-minimisation`, Programme 8 — the request names the joint owner).

## Member-by-member brainstorm

### claim-types — Claim Types
- **Request:** [`requests/claim-types.md`](requests/claim-types.md)
- **Definitive features:**
  - Four claim kinds as distinct values — `available`, `generally-used`, `approved`, `used-on-artifact` — never merged into one "uses AI" flag.
  - The `aiRole` role vocabulary (drafted, edited, reviewed, generated, analysed, translated, researched, summarised, coded, designed) with forbidden assertions (never "AI created everything" / "no human review").
  - Optional qualifiers `purpose`, `reviewPractice`, `effectiveDate`, `status` as independent fields, never folded into the kind.
  - Validation rules: `used-on-artifact` requires `artifactRef`; `approved` requires `policyRef`; no inference of one kind from another.
  - Mandatory non-implication notice on every party-level claim; `self-declared` default until evidence is attached.
- **Decisions:** D1 — Role vocabulary form; D2 — Non-implication notice wording.
- **Open questions / risks:** vocabulary churn — extension requests will arrive early and need Programme 1 governance in place first, or the vocabulary forks; comprehension testing is a launch gate (§9.9) that has not yet been run.

### evidence-labels-not-trust-scores — Evidence Labels, Not Trust Scores
- **Request:** [`requests/evidence-labels-not-trust-scores.md`](requests/evidence-labels-not-trust-scores.md)
- **Definitive features:**
  - Canonical label vocabulary: `self-declared`, `mailbox-confirmed`, `domain-controlled`, `account-controlled`, `artifact-controlled`, `key-controlled`, `schema-valid`, `signature-valid`, `hash-matched`, `spec-version-valid`, `last-checked`, `stale`, `check-failed`, `revoked`, `disputed`.
  - Custom-label namespacing; label + check-date rendering rules; mandatory disclaimer text on every results surface.
  - Structured label-set output shape with no aggregate score field; rendering order (status → control → integrity → freshness); freshness/`stale`/unknown handling; text-carries-meaning accessibility.
- **Decisions:** D1 — Default expiry/staleness windows per check method; D2 — `spec-version-valid` default view.
- **Open questions / risks:** the no-trust-score guarantee is load-bearing for the whole spine — it is one of the four freeze-check members; both spec §10 items became decisions, so nothing is left as a bare open question.

### specification-versioning-and-hashing — Specification Versioning and Hashing
- **Request:** [`requests/specification-versioning-and-hashing.md`](requests/specification-versioning-and-hashing.md)
- **Definitive features:**
  - `vN.M` version scheme (meaning-compatible major, minor revision), monotonic, never reused.
  - Canonical-bytes definition (UTF-8, line endings → `\n`, strip trailing newline) + `sha256` + change note per release.
  - Release tooling that refuses mismatched hashes; version manifest; 12-character fingerprint display; translation `basedOn` pointers.
  - Permanent version-bearing URLs + unversioned redirect; deprecation announced but never invalidates old referents.
- **Decisions:** D1 — Signing release manifests; D2 — Minimum consultation window for major-version meaning changes.
- **Open questions / risks:** versioning retrofits — hashing the live v0.1 spec means touching every themed page's footer/referent; coordinate with the presentation programme (Programme 5) so pages and versions change together (no silent change). Note: multi-language standard §8 Q4 (source-version pinning for `site/translations/spec.<code>.js`) is jointly owned with translation-governance (Programme 5) and recorded there.

### portable-declaration-schema — Portable Declaration Schema
- **Request:** [`requests/portable-declaration-schema.md`](requests/portable-declaration-schema.md)
- **Definitive features:**
  - Required core fields: `schemaVersion`, `declarationId`, `responsibleParty` (a named human, optionally with an `organization` context), `artifactOrScope`, `aiRole`, `issued`, `specVersion`.
  - Optional fields (at most): `tools`, `practices`, `evidence`, `status`, `language`, `visibility`; unknown extension fields tolerated and round-tripped.
  - Canonical serialisation (remove whitespace, sort keys, minimal escaping); versioned JSON Schema + offline validator per version; deprecation-before-removal process.
- **Decisions:** D1 — Deprecation window length for field removal.
- **Open questions / risks:** schema over-scoping — resist absorbing registry/checker fields, or "one record, many surfaces" breaks; one of the four freeze-check members.

### artifact-hashing-and-binding — Artifact Hashing and Binding
- **Request:** [`requests/artifact-hashing-and-binding.md`](requests/artifact-hashing-and-binding.md)
- **Definitive features:**
  - Three binding kinds — byte, scope, C2PA-manifest — plus the binding object schema (`algorithm`/`hash`/`canonicalisation`/retrieval).
  - Four canonicalisation methods: `raw`, `text-normalised`, `region-<selector>`, `exported`.
  - Checker revalidation logic with bounded fetches; binding kind always rendered; hash mismatch → `check-failed`, never silently ignored or "corrected".
- **Decisions:** D1 — Canonicalisation methods beyond the four named; D2 — Merkle-range hashing for large artifacts.
- **Open questions / risks:** none beyond D1/D2 — both spec §10 items became decisions; one of the four freeze-check members.

### declaration-lifecycle — Declaration Lifecycle
- **Request:** [`requests/declaration-lifecycle.md`](requests/declaration-lifecycle.md)
- **Definitive features:**
  - Status vocabulary: `active`, `superseded`, `revoked`, `disputed`, `redacted`, `archived`.
  - Event types: `issued`, `corrected`, `superseded`, `revoked`, `disputed`, `dispute-resolved`, `redacted`, `restricted`, `restriction-lifted`, `archived`, `tombstoned`, `legal-hold`, `hold-released`.
  - Event record schema (id, declaration id, type, date-time, acting party, reason); deterministic status derivation; append-only changes; tombstones; offline event replay.
- **Decisions:** D1 — Jurisdiction erasure that forbids a tombstone identifier; D2 — `disputed` time-to-resolution; D3 — Signing locally self-hosted lifecycle events.
- **Open questions / risks:** none beyond D1–D3 — all three spec §10 items became decisions; one of the four freeze-check members.

### machine-readable-assertions — Machine-Readable Assertions
- **Request:** [`requests/machine-readable-assertions.md`](requests/machine-readable-assertions.md)
- **Definitive features:**
  - Three assertion surfaces — `<meta name="plus-ai">`, JSON-LD block, `/.well-known/plus-ai.json` — with discovery order meta → JSON-LD → well-known.
  - Assertion `version` field (independent of the declaration's `schemaVersion`); well-known `default`/`scopes` shape.
  - Checker discovery/precedence/disagreement reporting; JS-disabled readability; absence reported as "no machine-readable assertion found", never negative.
- **Decisions:** D1 — JSON-LD single vs multiple blocks; D2 — Origin-wide `assertions` extension point.
- **Open questions / risks:** none beyond D1/D2 — both spec §10 items became decisions.

### proofs-of-control — Proofs of Control
- **Request:** [`requests/proofs-of-control.md`](requests/proofs-of-control.md)
- **Definitive features:**
  - Five control types — mailbox, account, domain, artifact, key — with challenge methods (one-time code, DNS TXT / well-known file / served token, signed nonce).
  - Proof record schema (`type`/`method`/`resource`/times/`result`/`expiry`); free self-service recheck; `stale` rendering rules.
  - Delegated roles recorded as separate statements; disputed proofs marked `disputed`, never deleted; no biometrics or fingerprinting.
- **Decisions:** D1 — Default expiry windows per method; D2 — Signed repository commits as an artifact-location method.
- **Open questions / risks:** none beyond D1/D2 — both spec §10 items became decisions.

### visibility-and-consent — Visibility and Consent
- **Request:** [`requests/visibility-and-consent.md`](requests/visibility-and-consent.md)
- **Definitive features:**
  - Four visibility modes — `local`, `unlisted`, `public`, `organisation-only` — with exact semantics and consent-record requirements.
  - Shared visibility selector component (builder/profile/registry) with previews; decrease-without-approval policy; one-business-day cache purge; `noindex` for unlisted.
  - Safe defaults (minors default local); exports carry the `visibility` field.
- **Decisions:** D1 — Per-link revocation tokens for unlisted.
- **Open questions / risks:** none beyond D1 — the single spec §10 item became a decision.

### url-semantics-and-canonicalization — URL Semantics and Canonicalisation
- **Request:** [`requests/url-semantics-and-canonicalization.md`](requests/url-semantics-and-canonicalization.md)
- **Definitive features:**
  - Path/query/fragment division: paths carry durable identity, queries carry presentation/filters, fragments carry local drafts; structured meaning lives in the linked manifest, not the URL.
  - Canonical-URL and immutable-ID rules; slug/alias/redirect rules; UTF-8 and `%2B` encoding; sorted parameters; bounded segments; tombstone resolution; version-bearing vs unversioned-redirect scheme.
- **Decisions:** D1 — Maximum URL length and per-segment bounds; D2 — Slugs vs ID-only.
- **Open questions / risks:** none beyond D1/D2 — both spec §10 items became decisions.

### tool-taxonomy — Tool Taxonomy
- **Request:** [`requests/tool-taxonomy.md`](requests/tool-taxonomy.md)
- **Definitive features:**
  - Four entry types — `capability`, `tool`, `product`, `model` — with stable, opaque, never-reused identifiers.
  - Versioned taxonomy dataset + offline resolver (alias → canonical, `retired` status reported forever).
  - Proposal/review/merge contribution process with vendor-interest recusal; factual descriptions only; alphabetical/ID default ordering.
- **Decisions:** D1 — Custom-entry namespacing convention; D2 — Further type subdivision.
- **Open questions / risks:** vocabulary churn and fork risk if governance and licensing (Programme 1) are not in place before the first external contribution.
