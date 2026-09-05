# Agent request — declaration-lifecycle: Declaration Lifecycle

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../../02-trust-foundations.md)
> **Source:** spec [`declaration-lifecycle-dsh.md`](../../../../suggestions/declaration-lifecycle-dsh.md) · seed [`declaration-lifecycle.md`](../../../../suggestions/declaration-lifecycle.md)
> **Effort:** M · **Phase:** P1 · **Position:** with the schema; the registry and checker derive status from it
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Jurisdiction erasure that forbids a tombstone identifier
- **Question:** How should the lifecycle handle a jurisdiction-specific erasure order that forbids even the tombstone identifier? (spec §10; jointly owned with privacy-and-data-minimisation in Programme 8 — note the joint owner.)
- **Options:** (a) Keep the tombstone rule (identifier + event dates + reason) as the default, and where law forbids the identifier, record the removal as a redacted gap event — an anonymous `[removed]` marker holding only the event dates and reason, so the append-only sequence stays replayable · (b) Permit full identifier removal on a lawful order, accepting a gap in the event sequence · (c) Refuse to hold records in jurisdictions whose law forbids tombstone identifiers (geographic scoping).
- **Recommended:** (a) — preserves the append-only audit trail and offline replay as far as the law allows, while still honouring the order; full removal only as the last resort the law explicitly compels.
- **Your choice:** ✏️

### D2 — `disputed` time-to-resolution
- **Question:** Should `disputed` carry an automatic time-to-resolution to prevent indefinite disputes? (spec §10.)
- **Options:** (a) No automatic resolution — a declaration stays `disputed` until a recorded resolution event (`dispute-resolved` or a resulting revocation/redaction) · (b) Automatic resolution after a fixed window (e.g. 90 days) unless re-opened · (c) Automatic escalation to a review queue after a fixed window, without changing status.
- **Recommended:** (a) — the spec's §5.2.8 already requires a recorded resolution event, and automatic resolution risks silently clearing a genuine dispute; indefinite disputes are a moderation concern owned by moderation-disputes-and-appeals, not a status mechanic.
- **Your choice:** ✏️

### D3 — Signing locally self-hosted lifecycle events
- **Question:** Should locally self-hosted declarations be expected to sign lifecycle events where no key infrastructure exists? (spec §10.)
- **Options:** (a) Do not require signing for locally self-hosted events — integrity comes from append-only structure and deterministic replay · (b) Require signing whenever a key is available, and mark unsigned events explicitly · (c) Require signing always, making key infrastructure a precondition for issuing events.
- **Recommended:** (a) — matches the free floor (a signer must be able to correct and revoke with no account and no key infrastructure), and keeps replay deterministic without inventing a signing dependency.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Write the status vocabulary (`active`, `superseded`, `revoked`, `disputed`, `redacted`, `archived`) and the event types (`issued`, `corrected`, `superseded`, `revoked`, `disputed`, `dispute-resolved`, `redacted`, `restricted`, `restriction-lifted`, `archived`, `tombstoned`, `legal-hold`, `hold-released`).
2. Write the event record schema (`eventId`, `declarationId`, `type`, `at`, `actor`, `reason`, optional `reference`) and the rule that `reason` is required for revoked/redacted/restricted/tombstoned.
3. Write the status-derivation rules from the ordered event sequence (start `active` on `issued`; each event's effect; `dispute-resolved` returns to the preceding status; `restriction-lifted` restores it).
4. Write the supersession/revocation/dispute/redaction/tombstone/legal-hold rules per D1–D3, including append-only immutability and never-reused identifiers.
5. Specify offline event replay so the event sequence yields the same status as the hosted record.
6. Self-check the result against §4 acceptance criteria before finishing.
7. **Spine freeze check (note for the agent):** this spec is one of the four freeze-check members. Confirm the `status` values line up with the portable-declaration-schema `status` field and that `revoked`/`disputed` map exactly onto the evidence-labels status labels; flag any mismatch for the joint review before Programme 3.

## 3. Constraints (must-nots)
- Issued records are immutable — changes are appended, never rewritten in place.
- Revocation never removes the record.
- Redaction stays schema-valid, with explicit `[redacted]` markers.
- Identifiers are never reused, even after tombstoning.
- No lifecycle operation quietly launders history; a revoked/disputed record stays visible as such.

## 4. Acceptance criteria
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

## 5. Outputs to produce in the repository
- `docs/spec/declaration-lifecycle.md` — status vocabulary, event types, derivation rules, tombstone/erasure rules.
- `site/schemas/lifecycle/<version>/schema.json` — event record JSON Schema.
- `scripts/replay-lifecycle.mjs` — offline event-sequence replay.

## 6. Read before building
- [`02-trust-foundations.md`](../../02-trust-foundations.md) — mini-plan
- [`declaration-lifecycle-dsh.md`](../../../../suggestions/declaration-lifecycle-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../../../digest/04-artifacts-and-trust.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
