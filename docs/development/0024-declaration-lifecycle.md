# Development task — declaration-lifecycle: Declaration Lifecycle

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md)
> **Source:** spec [`declaration-lifecycle-dsh.md`](../suggestions/declaration-lifecycle-dsh.md) · seed [`declaration-lifecycle.md`](../suggestions/declaration-lifecycle.md)
> **Effort:** M · **Phase:** P1 · **Position:** with the schema; the registry and checker derive status from it
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** How an issued declaration changes: states (`active`, `superseded`, `revoked`, `disputed`, `redacted`, `archived`) and append-only events reconciling correction with erasure.
- **Why now / risk of deferring:** It ships with the schema — the registry and checker derive status from it (mini-plan Order). Deferring leaves issued records with no append-only correction/revocation path; it is one of the four freeze-check members.
- **Features to deliver:**
  - The status vocabulary: `active`, `superseded`, `revoked`, `disputed`, `redacted`, `archived`.
  - The event types: `issued`, `corrected`, `superseded`, `revoked`, `disputed`, `dispute-resolved`, `redacted`, `restricted`, `restriction-lifted`, `archived`, `tombstoned`, `legal-hold`, `hold-released`.
  - An event record schema (id, declaration id, type, date-time, acting party, reason); deterministic status derivation; append-only changes; tombstones; offline event replay.
- **Depends on:** portable-declaration-schema, moderation-disputes-and-appeals, privacy-and-data-minimisation, continuity-and-namespace-custody

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Jurisdiction erasure that forbids a tombstone identifier
- **Question:** How should the lifecycle handle a jurisdiction-specific erasure order that forbids even the tombstone identifier? (spec §10; jointly owned with privacy-and-data-minimisation in Programme 8 — note the joint owner.)
- **Option (a):** Keep the tombstone rule (identifier + event dates + reason) as the default, and where law forbids the identifier, record the removal as a redacted gap event — an anonymous `[removed]` marker holding only the event dates and reason, so the append-only sequence stays replayable
  - **For:** Preserves the append-only audit trail (spec §5.1.1: amended by appending events, never by rewriting history) and §5.2.10's tombstone default as far as the law allows, while still honouring the order.
  - **Against:** An anonymous gap event still loses the identifier link, so replay is only partially complete where the law compels removal.
- **Option (b):** Permit full identifier removal on a lawful order, accepting a gap in the event sequence
  - **For:** Simplest lawful compliance — full removal with no residual identifier.
  - **Against:** §5.2.10 permits full identifier removal only where law explicitly requires it, and §5.2.1/§5.2.2/§5.2.4 (append-only history, deterministic replay) break when an identifier gap is accepted.
- **Option (c):** Refuse to hold records in jurisdictions whose law forbids tombstone identifiers (geographic scoping).
  - **For:** Avoids the conflict entirely by not holding records where tombstone identifiers cannot be kept.
  - **Against:** Geo-scoping contradicts the free-floor stance (§6: correction and revocation must be possible "without payment, including through the no-account path") and the spec proposes no geographic refusal anywhere.
- **Recommended:** (a) — preserves the append-only audit trail and offline replay as far as the law allows, while still honouring the order; full removal only as the last resort the law explicitly compels.
- **Your choice:** ✏️

### D2 — `disputed` time-to-resolution
- **Question:** Should `disputed` carry an automatic time-to-resolution to prevent indefinite disputes? (spec §10.)
- **Option (a):** No automatic resolution — a declaration stays `disputed` until a recorded resolution event (`dispute-resolved` or a resulting revocation/redaction)
  - **For:** Spec §5.2.8 requires a dispute to be closed by a recorded resolution event, and §5.1.3 requires consequential transitions to be human-initiated, never inferred automatically.
  - **Against:** Leaves indefinite disputes possible — though the spec routes that to moderation (moderation-disputes-and-appeals), not to a status mechanic.
- **Option (b):** Automatic resolution after a fixed window (e.g. 90 days) unless re-opened
  - **For:** Prevents a dispute from lingering forever on a record.
  - **Against:** Automatic resolution risks silently clearing a genuine dispute, violating §5.2.8's recorded-resolution-event requirement and §5.1.3's no-automatic-inference rule.
- **Option (c):** Automatic escalation to a review queue after a fixed window, without changing status.
  - **For:** Escalation surfaces stale disputes for human review without changing status.
  - **Against:** Adds a queueing mechanism the spec does not define, and §5.2.8 still requires a recorded resolution event to close the dispute — escalation alone does not resolve it.
- **Recommended:** (a) — the spec's §5.2.8 already requires a recorded resolution event, and automatic resolution risks silently clearing a genuine dispute; indefinite disputes are a moderation concern owned by moderation-disputes-and-appeals, not a status mechanic.
- **Your choice:** ✏️

### D3 — Signing locally self-hosted lifecycle events
- **Question:** Should locally self-hosted declarations be expected to sign lifecycle events where no key infrastructure exists? (spec §10.)
- **Option (a):** Do not require signing for locally self-hosted events — integrity comes from append-only structure and deterministic replay
  - **For:** Matches the free floor — spec §6 requires correction and revocation to remain possible "without payment, including through the no-account path", and §5.1.4/§5.2.14 require offline replay without hosted key infrastructure.
  - **Against:** Unsigned events rely on append-only structure, so tamper-detection is structural rather than cryptographic.
- **Option (b):** Require signing whenever a key is available, and mark unsigned events explicitly
  - **For:** Signing when a key exists adds tamper-evidence where available without blocking the no-key case.
  - **Against:** Creates two classes of events (signed/unsigned) that replay and status derivation must treat consistently — complexity the spec does not currently model.
- **Option (c):** Require signing always, making key infrastructure a precondition for issuing events.
  - **For:** Signed events give the strongest tamper-evidence.
  - **Against:** Directly contradicts the free floor — §6 requires a signer to be able to correct and revoke "with no account and no key infrastructure", which (c) turns into a precondition.
- **Recommended:** (a) — matches the free floor (a signer must be able to correct and revoke with no account and no key infrastructure), and keeps replay deterministic without inventing a signing dependency.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Write the status vocabulary (`active`, `superseded`, `revoked`, `disputed`, `redacted`, `archived`) and the event types (`issued`, `corrected`, `superseded`, `revoked`, `disputed`, `dispute-resolved`, `redacted`, `restricted`, `restriction-lifted`, `archived`, `tombstoned`, `legal-hold`, `hold-released`).
2. Write the event record schema (`eventId`, `declarationId`, `type`, `at`, `actor`, `reason`, optional `reference`) and the rule that `reason` is required for revoked/redacted/restricted/tombstoned.
3. Write the status-derivation rules from the ordered event sequence (start `active` on `issued`; each event's effect; `dispute-resolved` returns to the preceding status; `restriction-lifted` restores it).
4. Write the supersession/revocation/dispute/redaction/tombstone/legal-hold rules per D1–D3, including append-only immutability and never-reused identifiers.
5. Specify offline event replay so the event sequence yields the same status as the hosted record.
6. Self-check the result against §5 acceptance criteria before finishing.
7. **Spine freeze check (note for the agent):** this spec is one of the four freeze-check members. Confirm the `status` values line up with the portable-declaration-schema `status` field and that `revoked`/`disputed` map exactly onto the evidence-labels status labels; flag any mismatch for the joint review before Programme 3.

## 4. Constraints (must-nots)
- Issued records are immutable — changes are appended, never rewritten in place.
- Revocation never removes the record.
- Redaction stays schema-valid, with explicit `[redacted]` markers.
- Identifiers are never reused, even after tombstoning.
- No lifecycle operation quietly launders history; a revoked/disputed record stays visible as such.

## 5. Acceptance criteria
- [ ] Every declaration exposes a permanent identifier, and no identifier is ever reassigned in the public record.
- [ ] Replaying a declaration's event sequence from the `issued` event always yields the same status as the hosted record.
- [ ] Superseding a declaration leaves a link from old to new and from new to old.
- [ ] Revoking a declaration leaves it visible with status `revoked` and a date.
- [ ] A redacted declaration remains valid against the portable declaration schema with `[redacted]` markers in place.
- [ ] A tombstoned declaration retains identifier, event dates, and reason.
- [ ] An expired emergency restriction restores the previous status automatically.
- [ ] A checker reports status with the last event date and never conflates `disputed` with invalid.
- [ ] The event sequence replays offline from the offline and self-hosting pack.
- [ ] A legal hold defers scheduled deletion and releases it only on a recorded `hold-released` event.

## 6. Outputs to produce in the repository
- `docs/spec/declaration-lifecycle.md` — status vocabulary, event types, derivation rules, tombstone/erasure rules.
- `site/schemas/lifecycle/<version>/schema.json` — event record JSON Schema.
- `scripts/replay-lifecycle.mjs` — offline event-sequence replay.

## 7. Read before building
- [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md) — mini-plan
- [`declaration-lifecycle-dsh.md`](../suggestions/declaration-lifecycle-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../planning/digest/04-artifacts-and-trust.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
