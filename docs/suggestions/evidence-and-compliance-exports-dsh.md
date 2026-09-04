# Evidence and Compliance Exports — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`evidence-and-compliance-exports.md`](evidence-and-compliance-exports.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines the evidence and compliance export: a scheduled or on-demand bundle that packages a scoped set of declarations, their status histories, control evidence, applicable policies, exceptions, review records, and retention information into an audit-ready archive for internal governance and procurement. Its purpose is to make an organisation's `+AI` posture provable to its own auditors without ever turning the bundle into a certificate, endorsement, or trust score.

## 2. Placement and boundaries
An export assembles records that already exist; it creates no new normative facts and no verdict. It reads definitions owned elsewhere: record shapes from [Portable declaration schema](portable-declaration-schema-dsh.md), status and event histories from [Declaration lifecycle](declaration-lifecycle-dsh.md), control evidence from [Proofs of control](proofs-of-control-dsh.md), visibility boundaries from [Visibility and consent](visibility-and-consent-dsh.md), and deletion/redaction rules from [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md). The signer's own free export right is unchanged: this specification prices the organisational packaging, scheduling, and access-control conveniences, never the underlying data.

## 3. Terminology
- **Bundle** — a versioned archive of records assembled for one scoped request.
- **Manifest** — the signed inventory of a bundle: what it contains, its hashes, and its scope.
- **Provenance** — the chain linking each item to its canonical record, snapshot version, and event sequence.
- **Scope statement** — the declared boundary of a bundle (which parties, artifacts, dates, and record classes).
- **Expiry** — the point after which a bundle is labelled stale because it predates later events.
- **Professional review** — an optional, clearly-labelled completeness check against published criteria, distinct from certification.

## 4. Scope
### 4.1 In scope
- Bundle formats, provenance, and scope statements.
- Redaction and visibility filtering.
- Signing and hash-pinning.
- Expiry and staleness labelling.
- Access control for non-public bundles.
- Optional professional review and the no-certification warning.

### 4.2 Out of scope and deferred
- The record formats and status vocabularies (portable declaration schema, declaration lifecycle).
- Who may grant access to organisation-only records (organisation workspaces).
- Certification or assurance (independent assurance and certification, which is not authorised today).

## 5. Specification
### 5.1 Design goals and principles
1. **Read-only assembly.** An export reproduces facts; it never alters, ranks, or reinterprets them.
2. **Provenance to source.** Every item in a bundle traces to its canonical record and snapshot.
3. **Privacy-respecting by construction.** Visibility and redaction are applied at assembly time, not as an afterthought.
4. **Auditable, not authoritative.** A bundle is a dated snapshot of evidence; it states its own limits.
5. **Certification is out of scope.** No bundle asserts more than "these records existed and said this."

### 5.2 Normative requirements
1. A bundle MUST include a manifest listing each item, its canonical identifier, its `sha256` hash, the source snapshot version, and the item's evidence-label vocabulary from [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md).
2. Formats MUST be the portable declaration and profile formats plus the lifecycle event sequence, packaged with a human-readable index; every bundle MUST be openable and verifiable offline with no account.
3. Provenance MUST be explicit: each declaration carries its `declarationId`, its event sequence with dates, and the control-evidence labels recorded at issuance and last check.
4. A scope statement MUST be required and MUST name the parties, artifact or scopes, date range, and record classes included; the bundle MUST refuse to exceed its declared scope.
5. Redaction MUST follow [Declaration lifecycle](declaration-lifecycle-dsh.md) and [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md): `local` records MUST never be included, `unlisted` and `organisation-only` records MUST be excluded from public bundles, and field-level redaction MUST leave explicit `[redacted]` markers rather than silent gaps.
6. The bundle manifest MUST be signed with a key whose custody follows [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md), and every item MUST be hash-pinned so tampering is detectable offline.
7. Every bundle MUST carry an expiry: a point-in-time validity statement, after which it MUST be labelled stale and MUST NOT be presented as current; scheduled re-issue MUST be offered where the requester needs freshness.
8. Access control MUST follow [Visibility and consent](visibility-and-consent-dsh.md) and the organisation workspaces seed: bundles containing non-public records MUST be resolvable only by holders of the relevant organisation role, and access grants MUST be recorded.
9. Professional review, if requested, MUST be optional, criteria-published, and clearly labelled; a reviewed bundle MUST state the reviewer, the date, and the criteria version, and MUST NOT be presented as certification, endorsement, or a trust mark (RL-1, RL-9).
10. Every bundle MUST carry a standing warning that an export records facts and evidence labels and is not a certification, verification verdict, or statement about the truth of any underlying claim.
11. The export service MUST complete a privacy analysis and a threat model against [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) and [Security and abuse controls](security-and-abuse-controls-dsh.md) before launch, because bundles carry sensitive records.
12. A failure-mode statement MUST be published: if the export service stops, individual records MUST remain exportable in portable formats, and a final export MUST be produced, per [Static-first service architecture](static-first-service-architecture-dsh.md).
13. Payment MUST buy scheduling, packaging, access management, and support only — never legitimacy, rank, permission, or a more favourable record (RL-1, RL-4).

### 5.3 Data model
```
{
  "bundleId": "opaque identifier",
  "scope": { "parties": [ "..." ], "artifactsOrScopes": [ "..." ],
             "dateRange": { "from": "ISO-8601", "to": "ISO-8601" },
             "recordClasses": [ "declarations | statusHistory | controlEvidence | policies | exceptions | reviews | retention" ] },
  "items": [ { "declarationId": "...", "hash": "sha256", "sourceSnapshot": "integer",
               "labels": [ "self-declared | domain controlled | ..." ] } ],
  "manifestSignature": "detached signature",
  "expires": "ISO-8601",
  "warning": "export is not certification"
}
```

### 5.4 Interfaces and behaviours
- **Request:** a requester names a scope and schedule; the service assembles only in-scope, visibility-permitted records.
- **Verify:** a recipient recomputes item hashes and checks the manifest signature offline.
- **Redact:** visibility and redaction are applied at assembly; excluded content is never silently substituted.
- **Review:** an optional professional review appends its findings as dated labels, never a verdict mark.

### 5.5 Lifecycle and operational rules
- Bundles are versioned and immutable once issued; a corrected bundle is a new version, never an edit in place (no silent change).
- Expired bundles remain downloadable and labelled stale; scheduled bundles are re-issued on their cadence.
- Retention of bundle data follows privacy and data minimisation schedules; deletion of a source record cascades to later bundles as redaction or tombstone, not as silent removal.

## 6. Free floor, red lines, and invariants
The free floor is that every signer's own declaration, status history, and control evidence remain exportable in portable formats, free and without justification, through the no-account path. The paid service adds organisational scheduling, packaging, and access control on top. This specification enforces RL-1 (no payment for the mark or meaning, and no paid re-ranking of records), RL-4 (no paid placement), RL-5 (no personal-data sales), and RL-9 (no trust score or verdict). The no-silent-change invariant is honoured by immutable, hash-pinned, versioned bundles.

## 7. Relationships to sibling specifications
- [Portable declaration schema](portable-declaration-schema-dsh.md) and [Declaration lifecycle](declaration-lifecycle-dsh.md) — own the records and event histories the bundle packages.
- [Proofs of control](proofs-of-control-dsh.md) and [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) — own the control evidence and the label vocabulary the bundle must use.
- [Visibility and consent](visibility-and-consent-dsh.md) — owns the visibility filtering applied at assembly.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) — owns redaction, retention, and the privacy analysis requirement.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) — owns the threat model and signing-key protections.
- [Organisation workspaces](organisation-workspaces-dsh.md) — owns the roles that grant access to non-public bundles.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md) — owns signing-key custody and final-export obligations.
- [Independent assurance and certification](independent-assurance-and-certification-dsh.md) — the boundary this export must not cross; it never certifies.
- [Static-first service architecture](static-first-service-architecture-dsh.md) — owns the failure-mode statement.
- [Free-floor covenant](free-floor-covenant-dsh.md) and [Red lines and cautious extensions](red-lines-and-cautious-extensions-dsh.md) — bind this service's free floor and prohibitions.

## 8. Resolution of the seed's "before implementation" concerns
- **Formats** — 5.2 item 2: portable formats plus event sequence, offline-verifiable.
- **Provenance** — 5.2 items 1 and 3: identifier, hash, source snapshot, and event chain per item.
- **Scope** — 5.2 item 4 and 5.3: a required scope statement the bundle must not exceed.
- **Redaction** — 5.2 item 5: visibility and field-level redaction with explicit markers.
- **Signatures** — 5.2 item 6: signed manifest, hash-pinned items, offline verification.
- **Expiry** — 5.2 item 7 and 5.5: point-in-time validity, stale labelling, scheduled re-issue.
- **Access control** — 5.2 item 8: organisation-role resolution for non-public bundles.
- **Professional review** — 5.2 item 9: optional, criteria-published, reviewer-dated, never certification.
- **Export does not equal certification** — 5.2 item 10 and 5.4: the standing warning and the no-verdict rule.

## 9. Acceptance criteria
1. A bundle manifest lists every item with identifier, hash, and source snapshot.
2. A bundle opens and verifies offline with no account.
3. A bundle refuses to include records outside its declared scope.
4. A `local` record never appears, and `unlisted`/`organisation-only` records are excluded from public bundles.
5. Redaction leaves explicit `[redacted]` markers, never silent gaps.
6. Tampering with any item is detectable from the signed manifest.
7. An expired bundle renders "stale" and is not presented as current.
8. A non-public bundle resolves only for the granted organisation role.
9. No bundle or review output is presented as certification or a trust score.
10. The export service publishes a privacy analysis, threat model, and failure-mode statement before launch.

## 10. Open questions
- Whether "scheduled" bundles are on-demand only at launch, or whether a recurring schedule is a first-tier feature, is undecided.
- The default expiry window per record class is undecided and should follow the freshness windows owned by proofs of control.
