# Programme 2 — Trust Foundations (the Data Spine)

> The vocabulary, record-format, and reference-rule layer every later tool
> consumes: checker, registry, builders, passports, directories, exports. This
> is the highest-leverage programme — `core-extensions.md` calls the trust leg
> "the missing leg". Nothing here requires hosting; everything must remain
> file://-safe and free (the free floor).

- **Members (11):** portable-declaration-schema, claim-types, tool-taxonomy,
  evidence-labels-not-trust-scores, visibility-and-consent,
  specification-versioning-and-hashing, artifact-hashing-and-binding,
  declaration-lifecycle, machine-readable-assertions, proofs-of-control,
  url-semantics-and-canonicalization
- **Agent requests:** [`02-trust-foundations/`](02-trust-foundations/) — brainstorm + one agent request per suggestion.
- **Effort:** 5 × S, 6 × M — no hosted components
- **Prerequisites:** Programme 1's free-floor-covenant, licensing-and-mark-policy
  (licence for schemas/taxonomy data), public-usage-guidelines (the semantics
  the schema encodes)
- **Phase:** P0 → P1; the spine must stabilise before P3 signer tools and P4
  registry work build on it.

## Mini-plans

### claim-types — Claim Types
- **Goal:** One-fact-at-a-time claim vocabulary: `available`, `generally-used`, `approved`, `used-on-artifact` + the `aiRole` values and qualifiers.
- **Build:** vocabulary doc; validation rules (`used-on-artifact` requires `artifactRef`; `approved` requires `policyRef`); non-implication notice for party-level claims.
- **Needs:** governance-and-stewardship (who may extend the vocabulary); portable-declaration-schema and ai-practice-register (consumers).
- **Must-nots:** no merging the four claims into one "uses AI" flag; no inferring one kind from another; `aiRole` never asserts AI-created-everything/no-human-review.
- **Done when:** 4 kinds distinct; refs enforced; notice shown; self-declared default.
- **Effort:** S. **Order:** first — the schema and registers are defined in its terms.

### evidence-labels-not-trust-scores — Evidence Labels, Not Trust Scores
- **Goal:** The output vocabulary every surface must use: individual checkable, dated facts; no verdict.
- **Build:** canonical label vocabulary + custom-label namespacing; label+date rendering rules; mandatory disclaimer text; structured label-set output shape (no aggregate score field).
- **Needs:** proofs-of-control, declaration-lifecycle, portable-declaration-schema, artifact-hashing-and-binding, specification-versioning-and-hashing (the label sources).
- **Must-nots:** no single colour/checkmark/badge/score summarising multiple labels; "schema valid"/"signature valid" never imply claims are true; failed checks are `check-failed` + reason, never negative trust.
- **Done when:** no aggregate verdict anywhere; every label dated or "never checked"; disclaimer on all surfaces.
- **Effort:** S. **Order:** first — the checker's contract is written in it.

### specification-versioning-and-hashing — Specification Versioning and Hashing
- **Goal:** Pin every declaration to the exact normative spec meaning its signer accepted: `vN.M` versions, permanent URLs, content hashes.
- **Build:** versioning policy (canonical-bytes definition, sha256 + change note per release); release tooling that refuses mismatched hashes; version manifest; 12-char fingerprint display; translation `basedOn` pointers.
- **Needs:** translation-governance (basedOn pointers), changelog-and-rss (announcements), conformance-linter (hash checks later).
- **Must-nots:** version numbers never reused; typo fixes ship as new minor versions; unresolvable `specVersion` = `check-failed`; minor releases never change the three-part meaning.
- **Done when:** permanent version URLs; unversioned redirects; hashes recompute; deprecated versions stay valid referents.
- **Effort:** S. **Order:** P0 — unblocks the schema's `specVersion` field and every hash comparison.

### portable-declaration-schema — Portable Declaration Schema
- **Goal:** The open, versioned JSON record: who takes responsibility, for what, with what AI role, when, under which spec version.
- **Build:** versioned JSON Schema + offline validator per version; canonical serialisation (sorted keys, minimal escaping); version/change-note/deprecation-release process.
- **Needs:** claim-types (aiRole), tool-taxonomy (tools ids), specification-versioning-and-hashing (specVersion), artifact-hashing-and-binding (binding object), visibility-and-consent (visibility field), declaration-lifecycle (status field).
- **Must-nots:** prompts never required; no embedded credentials/keys/third-party data; organisation never the sole responsibleParty (a human must be named); field removal requires a prior deprecation release.
- **Done when:** minimal record validates offline; canonical bytes identical; unknown fields round-trip; old records keep validating.
- **Effort:** M. **Order:** after the vocabularies; this is the spine the checker/registry/builder all consume.

### artifact-hashing-and-binding — Artifact Hashing and Binding
- **Goal:** Bind a declaration to its subject: byte binding (SHA-256+), scope binding, or C2PA-manifest binding.
- **Build:** binding object schema (algorithm/hash/canonicalisation/retrieval); canonicalisation methods (`raw`, `text-normalised`, `region-<selector>`, `exported`); checker revalidation logic with bounded fetches.
- **Needs:** portable-declaration-schema, evidence-labels-not-trust-scores (result labels), provenance-interoperability (C2PA variant later).
- **Must-nots:** scope bindings never report `hash-matched` (self-declared coverage only); hash mismatch never silently ignored or "corrected"; derivatives require their own bindings.
- **Done when:** unchanged file → `hash-matched`; changed → `check-failed`; binding kind shown on every surface.
- **Effort:** M. **Order:** with the schema (its `binding` field is defined here).

### declaration-lifecycle — Declaration Lifecycle
- **Goal:** How an issued declaration changes: states (`active`, `superseded`, `revoked`, `disputed`, `redacted`, `archived`) and append-only events reconciling correction with erasure.
- **Build:** state + event schemas (id, type, date-time, acting party, reason); status derivation rules; supersession/revocation/dispute/redaction/tombstone/legal-hold rules; offline event replay.
- **Needs:** portable-declaration-schema, moderation-disputes-and-appeals (dispute resolution), privacy-and-data-minimisation (erasure/tombstone interplay), continuity-and-namespace-custody (identifier permanence).
- **Must-nots:** issued records immutable — changes appended, never rewritten in place; revocation never removes the record; redaction stays schema-valid; identifiers never reused, even after tombstoning.
- **Done when:** permanent IDs; deterministic replay; bidirectional supersession; tombstones keep id/dates/reason.
- **Effort:** M. **Order:** with the schema; the registry and checker derive status from it.

### machine-readable-assertions — Machine-Readable Assertions
- **Goal:** Make declarations visible to software: `<meta name="plus-ai">`, JSON-LD, `/.well-known/plus-ai.json`.
- **Build:** spec for three assertion surfaces + discovery order (meta → JSON-LD → well-known); assertion `version` field; well-known `default`/`scopes` shape; checker discovery/precedence/disagreement reporting.
- **Needs:** portable-declaration-schema, developer-integrations (platform conventions later).
- **Must-nots:** machine form never replaces visible human-readable disclosure; no cookies/tracking to read; absence reported as "no assertion found", never negative.
- **Done when:** identical record across surfaces; per-page precedence defined; disagreements reported; JS-disabled readable.
- **Effort:** S. **Order:** after the schema; it is the checker's input surface.

### proofs-of-control — Proofs of Control
- **Goal:** Factual, dated checks of control (mailbox, account, domain, artifact-location, key) — never identity or organisational authority.
- **Build:** proof record schema (type/method/resource/times/result/expiry); challenge methods (one-time code, DNS TXT/well-known/token, signed nonce); free self-service recheck; `stale` rendering rules.
- **Needs:** evidence-labels-not-trust-scores (output), security-and-abuse-controls (abuse of challenges), continuity-and-namespace-custody (key custody).
- **Must-nots:** no biometrics or device fingerprinting; a delegate's action never presented as the principal's proof; disputed proofs marked `disputed`, never silently deleted.
- **Done when:** proof records complete; expired → `stale`; free recheck; key rotation yields new proof + revocation.
- **Effort:** M. **Order:** after labels vocabulary; consumed by checker and hosted profiles.

### visibility-and-consent — Visibility and Consent
- **Goal:** The four visibility modes (`local`, `unlisted`, `public`, `organisation-only`) and the consent rules for moving between them.
- **Build:** mode semantics + consent-record requirements; shared visibility selector component (builder/profile/registry); decrease-without-approval policy; one-business-day cache purge; noindex for unlisted.
- **Needs:** portable-declaration-schema (visibility field), privacy-and-data-minimisation, child-safe-education (defaults for minors).
- **Must-nots:** no record without a visibility field; unlisted never indexed; decreasing visibility needs no approval/payment/justification; organisation-only never revealed by link alone.
- **Done when:** modes stored; public requires dated consent; org-only role-gated; exports carry visibility.
- **Effort:** M. **Order:** after schema; before registry/directory (they only publish `public`).

### url-semantics-and-canonicalization — URL Semantics and Canonicalisation
- **Goal:** How +AI URLs mean: paths carry durable identity, queries presentation/filters, fragments local drafts; structured meaning lives in the manifest.
- **Build:** URL policy doc: canonical-URL and immutable-ID rules; slug/alias/redirect rules; UTF-8/`%2B` encoding; sorted params; bounded segments; tombstone resolution; version-bearing vs unversioned-redirect scheme.
- **Needs:** specification-versioning-and-hashing, declaration-lifecycle (tombstones), continuity-and-namespace-custody.
- **Must-nots:** URLs never repurposed to name a different resource; retired resources never a bare 404 (tombstone/archive); servers/crawlers must ignore fragment content.
- **Done when:** single canonical ID URL per record; `+` → `%2B` round-trips; missing params default; retired → tombstone.
- **Effort:** S. **Order:** P1 — before named subdomains and hosted profiles build URL products on top.

### tool-taxonomy — Tool Taxonomy
- **Goal:** Open, versioned, provider-neutral vocabulary of tools/capabilities/models with stable identifiers and a community contribution path.
- **Build:** versioned taxonomy dataset + offline resolver (alias→canonical, `retired` status); proposal/review/merge process with vendor-interest recusal; factual descriptions only.
- **Needs:** governance-and-stewardship, licensing-and-mark-policy (data licence), specification-versioning-and-hashing (taxonomy versioning), translation-governance (descriptions localise).
- **Must-nots:** no marketing copy or superiority claims; no paid placement/ordering; retired terms never deleted — aliases report `retired` forever.
- **Done when:** 4 types distinct; aliases resolve; retired resolvable forever; offline resolution; no rank ordering.
- **Effort:** M. **Order:** parallel with the schema (the schema's `tools` field references its ids; the taxonomy can bootstrap with the project's own tooling and grow via contribution).

## Sequencing

1. **P0:** claim-types → evidence-labels-not-trust-scores → specification-versioning-and-hashing (all S; pure vocabularies/policy).
2. **P1 wave 1:** portable-declaration-schema + artifact-hashing-and-binding + declaration-lifecycle (the record trio; drafted as one coherent package).
3. **P1 wave 2:** machine-readable-assertions → proofs-of-control → visibility-and-consent → url-semantics-and-canonicalization.
4. **Parallel track:** tool-taxonomy (dataset + governance; independent of the record trio).
5. **Freeze check:** before Programme 3 starts, the spine specs get a joint review pass (schema ↔ lifecycle ↔ binding ↔ labels cross-references) — later tools' cost is paid here if the spine is incoherent.

## Risks

- **Vocabulary churn:** claim-types/tool-taxonomy will attract extension requests early; governance for changes must exist (Programme 1) before the first external contribution, or the taxonomy forks.
- **Schema over-scoping:** the schema's temptation is to absorb registry/checker fields; resist — each spec owns its layer, or the free floor's "one record, many surfaces" breaks.
- **Versioning retrofits:** hashing the live v0.1 spec means touching every themed page's footer/referent; coordinate with the presentation programme so pages and versions change together (no silent change).
