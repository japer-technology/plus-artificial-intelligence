# Declaration Lifecycle — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`declaration-lifecycle.md`](declaration-lifecycle.md).
> **Catalogue group:** Artifacts and trust.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how an issued `+AI` declaration changes over time. A
declaration is a promise: "AI helped. I take responsibility." Once issued it is a
historical fact, and the record of that fact must not be silently rewritten. This
document defines the state vocabulary (active, superseded, revoked, disputed,
redacted, archived), the lifecycle events that move a declaration between states,
and the rules that reconcile an append-only audit trail with correction, erasure,
safety, and legal obligations.

## 2. Placement and boundaries

This specification sits in the "Artifacts and trust" group. It owns the *status
and event* vocabulary for declarations. It does not own the declaration's field
schema (see [Portable declaration schema](portable-declaration-schema-dsh.md)),
its on-page embedding (see [Machine-readable assertions](machine-readable-assertions-dsh.md)),
or how the public record is served (see [Opt-in signatory
registry](opt-in-signatory-registry-dsh.md)). It honours the free-floor invariant:
lifecycle operations on a declaration the signer holds locally — including
revocation — must remain possible without payment, and no lifecycle feature may
be reserved for paying parties. It also honours the red line against automated
publication in another's name: only the responsible party (or a governance body
acting under published moderation rules) may act on a declaration.

## 3. Terminology

- **Declaration** — a scoped, dated record of responsibility (responsible party,
  artifact or scope, AI role, optional tools and evidence, specification version,
  status).
- **Lifecycle event** — a timestamped, ordered record describing one change to a
  declaration after issuance.
- **Status** — the current, derived state of a declaration: `active`,
  `superseded`, `revoked`, `disputed`, `redacted`, or `archived`.
- **Tombstone** — a minimal residual record preserved when content must be
  erased: identifier, event dates, and the reason, and nothing else.
- **Supersession** — replacement of one declaration by a newer one that changes
  its meaning or scope.
- **Correction** — a cosmetic repair (typo, formatting) that does not change
  meaning, recorded without supersession.
- **Redaction** — field-level removal of content for privacy or legal reasons,
  leaving explicit `[redacted]` markers.
- **Legal hold** — a temporary suspension of deletion or redaction obligations
  while a legal process is active.

## 4. Scope

### 4.1 In scope

- The declaration status vocabulary and its derivation rules.
- The lifecycle event types and their required fields.
- Rules for supersession, revocation, dispute, redaction, erasure, emergency
  restriction, archival, and identifier reuse.
- Portable, offline-replayable representation of the event sequence.

### 4.2 Out of scope and deferred

- The declaration's core fields and serialisation (owned by the portable
  declaration schema).
- Who may resolve disputes and the moderation process (owned by moderation,
  disputes, and appeals).
- Automated agent declarations (deferred to agentic accountability).
- Organisation-internal approval flows (owned by organisation workspaces).

## 5. Specification

### 5.1 Design goals and principles

1. **Stability.** An issued declaration is a fact; it is amended by appending
   events, never by rewriting history.
2. **Honest visibility.** A revoked or disputed declaration remains visible *as*
   revoked or disputed, because erasing it would flatter its author.
3. **Human control.** Every consequential transition is initiated by the
   responsible party or by a published governance process — never inferred
   automatically from tooling.
4. **Portability.** The full event sequence must be replayable offline, so the
   commons survives without any hosted service.
5. **Privacy-respecting erasure.** Where law or privacy requires removal, the
   record shrinks to a tombstone rather than vanishing silently.

### 5.2 Normative requirements

1. Every declaration MUST carry a permanent identifier that is never reused,
   including after tombstoning.
2. Once issued, a declaration's stored record MUST be immutable; every later
   change MUST be appended as a lifecycle event that references the declaration
   identifier.
3. Lifecycle events MUST carry: event identifier, declaration identifier, event
   type, ISO-8601 date-time, and acting party; a reason MUST be present for
   revocation, redaction, restriction, and tombstoning.
4. The current status MUST be derived from the ordered event sequence by the
   rules in section 5.3; tools MAY cache it but MUST recompute when events
   change.
5. A correction that changes only presentation or typography MUST be recorded as
   a `corrected` event; any change to meaning, scope, AI role, or responsible
   party MUST issue a new declaration version and record a `superseded` event on
   the old one.
6. A `superseded` event MUST reference the successor declaration's identifier;
   the successor MUST reference the declaration it supersedes.
7. Revocation MUST set the status to `revoked` and MUST NOT remove the record;
   a revoked declaration MAY only return to `active` by issuing a new
   declaration.
8. A dispute MUST set the status to `disputed` without removing content, and
   MUST be closed by a recorded resolution event (`dispute-resolved` or a
   resulting revocation/redaction).
9. Redaction MUST replace removed fields with explicit `[redacted]` markers,
   MUST keep the record valid against the portable declaration schema, and MUST
   record the redacting authority and reason.
10. Erasure under privacy or legal obligations MUST reduce the record to a
    tombstone (identifier, event dates, reason); full removal of the identifier
    is permitted only where law explicitly requires it.
11. An emergency restriction (for imminent safety or security risk) MUST use a
    `restricted` event with a mandatory review date; expiry without review MUST
    restore the previous status.
12. A `legal-hold` event MUST suspend pending deletion or redaction until a
    recorded `hold-released` event.
13. Checkers and directories MUST display the current status together with the
    date of the last lifecycle event, and MUST NOT conflate `revoked` or
    `disputed` with invalid syntax.
14. The portable declaration record SHOULD embed or reference its event sequence
    so offline replay is possible (see the offline and self-hosting pack).

### 5.3 Data model

Declaration statuses: `active`, `superseded`, `revoked`, `disputed`, `redacted`,
`archived`.

Lifecycle event types: `issued`, `corrected`, `superseded`, `revoked`,
`disputed`, `dispute-resolved`, `redacted`, `restricted`, `restriction-lifted`,
`archived`, `tombstoned`, `legal-hold`, `hold-released`.

Event record shape:

```
{
  "eventId":    "opaque, unique, never reused",
  "declarationId": "the declaration this event concerns",
  "type":       "one of the event types above",
  "at":         "ISO-8601 date-time",
  "actor":      "responsible party, custodian, or governance body",
  "reason":     "required for revoked, redacted, restricted, tombstoned",
  "reference":  "optional: successor declaration ID, hold identifier, review date"
}
```

Status derivation: start at `active` on the `issued` event; `corrected` leaves
status unchanged; `superseded`, `revoked`, `redacted`, `archived`, and
`tombstoned` set the matching status; `disputed` sets `disputed` and
`dispute-resolved` returns to the status that preceded the dispute; `restricted`
suspends the current status and `restriction-lifted` restores it.

### 5.4 Interfaces and behaviours

- Checkers read the event sequence and report: current status, last event type,
  last event date, and whether the event sequence is internally consistent.
- Registry views render the status history as a dated timeline, never as a
  single verdict.
- Compliance exports (see evidence and compliance exports) may request a full
  event extract for a declaration identifier.

### 5.5 Lifecycle and operational rules

- Event sequences are append-only within a declaration record; corrections to an
  event itself are recorded as a new event, not an edit.
- Identifier minting must avoid predictable sequences so that reuse cannot occur
  accidentally after archival.
- Custodians of mirrors must propagate events in order; a mirror that cannot
  keep up must label itself stale rather than showing an outdated status as
  current (see federation and mirrors).
- Archival retains the declaration and its events as a historical record and
  marks them non-operative; tombstones are the minimal residual form.
  Retention periods (tombstones indefinite; archived records a minimum of 10
  years) are owned by continuity and namespace custody.

## 6. Free floor, red lines, and invariants

The free-floor covenant covers "correction, and revocation": a signer must be
able to correct and revoke a declaration without payment, including through the
no-account path, and a revoked status must be published truthfully. This
specification forbids any lifecycle operation that quietly launders history —
silent deletion would violate the red line against transferring responsibility
to the machine and would undermine the mark's honesty value. No lifecycle state
may be sold as a product; paid services may provide convenience (bulk updates,
monitoring, exports) but never better outcomes for the same event.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the
  declaration fields and serialisation that this specification's events attach
  to.
- [Verification checker](verification-checker-dsh.md) consumes status and event
  data and must report them per the rules in section 5.4.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)
  defines how `revoked` and `disputed` are presented as facts.
- [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) publishes the
  status timeline for public declarations.
- [Hosted profiles](hosted-profiles-dsh.md) display a party's declaration status
  history without altering it.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md)
  owns dispute intake, resolution authority, and emergency restriction policy.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) owns the
  erasure obligations that tombstones satisfy.
- [Organisation workspaces](organisation-workspaces-dsh.md) own legal holds and
  approval flows that defer or authorise events.
- [Evidence and compliance exports](evidence-and-compliance-exports-dsh.md)
  package event histories for audit.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md)
  owns long-term retention and archival of identifiers and event records.
- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md)
  defines when a specification change requires a new declaration rather than an
  event.

## 8. Resolution of the seed's "before implementation" concerns

- **Auditability vs. correction** — section 5.2 items 2 and 5: history is
  append-only, and cosmetic corrections are recorded without rewriting.
- **Erasure** — section 5.2 items 9-10: redaction keeps records valid; erasure
  reduces to a tombstone.
- **Impersonation** — section 5.2 items 7-8 plus the dispute path; proof-of-control
  evidence at issuance is owned by proofs of control.
- **Safety** — section 5.2 item 11: emergency restriction with mandatory review.
- **Legal obligations** — section 5.2 item 12 and 5.5: legal holds defer
  deletion; lawful removal is honoured without silent gaps.
- **Tombstones** — section 5.2 item 10 and 5.5: minimal residual records.
- **Permanent identifier rules** — section 5.2 item 1 and 5.5: identifiers are
  never reused.

## 9. Acceptance criteria

1. Every declaration exposes a permanent identifier, and no identifier is ever
   reassigned in the public record.
2. Replaying a declaration's event sequence from the `issued` event always
   yields the same status as the hosted record.
3. Superseding a declaration leaves a link from old to new and from new to old.
4. Revoking a declaration leaves it visible with status `revoked` and a date.
5. A redacted declaration remains valid against the portable declaration schema
   with `[redacted]` markers in place.
6. A tombstoned declaration retains identifier, event dates, and reason.
7. An expired emergency restriction restores the previous status automatically.
8. A checker reports status with the last event date and never conflates
   `disputed` with invalid.
9. The event sequence replays offline from the offline and self-hosting pack.
10. A legal hold defers scheduled deletion and releases it only on a recorded
    `hold-released` event.

## 10. Open questions

- Exact handling of jurisdiction-specific erasure orders that forbid even a
  tombstone identifier.
- Whether `disputed` should carry an automatic time-to-resolution to prevent
  indefinite disputes.
- Whether locally self-hosted declarations should be expected to sign lifecycle
  events where no key infrastructure exists.
