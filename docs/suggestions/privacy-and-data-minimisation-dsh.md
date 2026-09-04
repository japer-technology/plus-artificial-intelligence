# Privacy and Data Minimisation — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`privacy-and-data-minimisation.md`](privacy-and-data-minimisation.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the privacy obligations of every +AI service and
surface: collect only what a requested feature needs, separate public records
from authentication and billing data, support pseudonyms where appropriate,
and make export, redaction, revocation, and lawful deletion practical. The
mark's promise is about accountability, not surveillance; a project that asks
people to stand up publicly must be exemplary about how little it asks them to
hand over.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and owns *collection, separation, retention, and exit* rules. It
does not own the deletion mechanics (see [Declaration
lifecycle](declaration-lifecycle-dsh.md)), the visibility consent rules (see
[Visibility and consent](visibility-and-consent-dsh.md)), or the security
controls that protect stored data (see [Security and abuse
controls](security-and-abuse-controls-dsh.md)). Every optional-service
specification MUST complete a privacy analysis against this document before
implementation.

## 3. Terminology

- **Public record** — data a party chose to publish (declarations, profiles,
  registry entries).
- **Private data** — authentication, billing, contact, and operational data
  that is never public.
- **Pseudonym** — a party-chosen name that does not require legal identity.
- **Privacy analysis** — the per-field review of purpose, recipient, retention,
  inference risk, visibility mode, jurisdiction, and processor.
- **Exit** — export, redaction, revocation, and lawful deletion taken
  together.

## 4. Scope

### 4.1 In scope

- Collection minimisation rules.
- Separation of public records from private data.
- Pseudonym support.
- Retention schedules and their publication.
- Exit rights: export, redaction, revocation, deletion.
- The privacy analysis template every service must complete.

### 4.2 Out of scope and deferred

- Technical security measures (security and abuse controls).
- Visibility consent flows (visibility and consent).
- Analytics telemetry (privacy-respecting analytics).
- Child-specific rules (child-safe education).

## 5. Specification

### 5.1 Design goals and principles

1. **Ask for less.** The minimum viable product never needs more data than the
   promise requires.
2. **Separate by construction.** Public records, accounts, and billing never
   share a storage silo without a documented boundary.
3. **Pseudonyms are people.** A pseudonymous signer gets every right a named
   signer gets.
4. **Exit is a feature.** Leaving or erasing must be as easy as joining.
5. **Document before building.** No field ships without a completed privacy
   analysis.

### 5.2 Normative requirements

1. Every service MUST complete a privacy analysis for each data field it
   collects, covering: purpose, recipients, retention period, inference risk,
   visibility mode, jurisdiction, and processors; analyses MUST be published
   for public-facing services.
2. Services MUST NOT collect data a requested feature does not need; the
   burden of justifying each field lies with the service.
3. Public records MUST be stored separately from authentication and billing
   data, with access controls preventing cross-linking beyond what the record
   itself publishes.
4. Pseudonyms MUST be supported wherever a legal name is not required by law
   or by the feature's stated purpose; interfaces MUST NOT pressure users to
   reveal legal names.
5. Every retained item MUST have a published retention period; expired data
   MUST be deleted or irreversibly aggregated on schedule.
6. Export MUST be available in the portable declaration and profile formats,
   on request and free of charge, without requiring justification.
7. Redaction and revocation MUST follow declaration lifecycle without friction
   or payment, and lawful deletion requests MUST be honoured within the period
   the relevant jurisdiction requires.
8. Deletion MUST cascade to backups and derived indexes within a documented
   window, except where a legal hold applies.
9. Services MUST NOT infer or store sensitive attributes (health, religion,
   politics, sexuality, biometrics) unless a party explicitly publishes them
   in a public record.
10. Jurisdiction and processor lists MUST be published per service, including
    data location, and MUST be updated when they change.
11. No service may sell, rent, or trade private data or public records
    (RL-5); derived insights may only be published in the aggregated forms
    permitted by research observatory.
12. The no-account path MUST store everything locally, uploading nothing
    without an explicit, previewed action.

### 5.3 Data model

Privacy analysis record:

```
{
  "service": "name",
  "fields": [ {
    "name": "field",
    "purpose": "...",
    "recipients": [ "..." ],
    "retention": "period or 'life of record'",
    "inferenceRisk": "low | medium | high + note",
    "visibility": "public | unlisted | private",
    "jurisdictions": [ "..." ],
    "processors": [ "..." ]
  } ],
  "published": "ISO-8601"
}
```

### 5.4 Interfaces and behaviours

- Account settings expose one page for export, one for redaction/revocation,
  one for deletion, and one showing the service's privacy analysis.
- Local-only tools state plainly "nothing leaves this device" and make the
  statement true.

### 5.5 Lifecycle and operational rules

- Retention schedules are published with each service and reviewed when the
  service changes.
- Legal holds pause deletion per declaration lifecycle; expired holds resume
  the schedule.
- Privacy analyses are versioned documents, announced through the changelog.

## 6. Free floor, red lines, and invariants

Privacy is not a premium feature: export, redaction, revocation, and deletion
are free-floor provisions for every record, hosted or not. The red lines
against personal-data sales and covert tracking are enforced as absolute
prohibitions in section 5.2 item 11, and the biometric red line bounds section
5.2 item 9. Separation of public records from private data keeps the project's
accountability promise from becoming a surveillance trade.

## 7. Relationships to sibling specifications

- [Declaration lifecycle](declaration-lifecycle-dsh.md) owns redaction,
  revocation, tombstones, and legal holds this specification relies on.
- [Visibility and consent](visibility-and-consent-dsh.md) owns the visibility
  modes referenced in the analysis template.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) owns the
  technical protections for stored data.
- [Privacy-respecting analytics](privacy-respecting-analytics-dsh.md) is the
  only permitted telemetry, and must satisfy this document.
- [Hosted profiles](hosted-profiles-dsh.md) and [Organisation
  workspaces](organisation-workspaces-dsh.md) must publish analyses against
  this document.
- [Research observatory](research-observatory-dsh.md) owns the aggregated
  research uses permitted by item 11.
- [Child-safe education](child-safe-education-dsh.md) adds child-specific
  obligations on top of this floor.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md)
  governs how reports of privacy violations are handled.

## 8. Resolution of the seed's "before implementation" concerns

- **Privacy analysis for every field** — sections 5.2 item 1 and 5.3: a
  published per-field template covering purpose, recipient, retention,
  inference risk, visibility mode, jurisdiction, and processor.
- **Purpose** — section 5.2 item 2: necessity justification per field.
- **Recipient** — section 5.3 template plus item 9: recipients listed per
  field.
- **Retention period** — section 5.2 item 5: published schedules with
  scheduled deletion.
- **Inference risk** — section 5.2 item 9: sensitive-attribute inference is
  forbidden unless explicitly published.
- **Visibility mode** — visibility and consent owns modes; the template
  records them per field.
- **Jurisdiction** — section 5.2 item 10: published jurisdiction and data
  location lists.
- **Processor** — sections 5.2 item 10 and 5.3: processor lists published and
  updated.

## 9. Acceptance criteria

1. Every public-facing service publishes a complete privacy analysis.
2. No service collects a field without a documented purpose.
3. Public records are stored separately from authentication and billing data.
4. A pseudonymous signer completes the full journey without a legal name.
5. Every retained item has a published retention period that is enforced.
6. Export, redaction, revocation, and deletion each complete without payment
   or justification.
7. A lawful deletion request cascades to backups and indexes within the
   documented window.
8. No service sells or trades private data or public records.
9. The no-account builder uploads nothing without an explicit previewed
   action.

## 10. Open questions

- The standard deletion-cascade window across backup tiers.
- Whether pseudonym support needs an explicit abuse-reporting carve-out, and
  how it interacts with moderation, disputes, and appeals.
