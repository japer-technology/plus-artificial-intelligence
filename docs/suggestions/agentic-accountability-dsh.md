# Agentic Accountability — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`agentic-accountability.md`](agentic-accountability.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the future, bounded exploration of declarations for
delegated AI-agent actions: when a human or organisation lets an agent draft,
send, publish, or deploy on their behalf, how is that fact declared and who
remains responsible? The answer is anchored by the red lines: responsibility
never transfers to the machine, and nothing may publish in another's name
without that human's acceptance. This document keeps agentic use outside the
simple meaning until the semantics are genuinely understandable — and defines
what "understandable" means.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and owns the *delegation extension*, explicitly deferred from the
normative meaning. It does not own the declaration record (see [Portable
declaration schema](portable-declaration-schema-dsh.md)) or its lifecycle (see
[Declaration lifecycle](declaration-lifecycle-dsh.md)); the extension would be
an addition to those, not a replacement. Until the conditions in section 5.2
are met, nothing here may ship, and the simple vN.M meaning remains the only
meaning.

## 3. Terminology

- **Agent** — software acting with delegated authority for a principal.
- **Principal** — the human (or organisation through its humans) who grants
  authority and keeps responsibility.
- **Delegation** — a scoped, bounded, revocable grant of authority.
- **Action receipt** — the machine-verifiable record of what the agent did.
- **Contribution chain** — the ordered record of humans and agents involved
  in a released work.

## 4. Scope

### 4.1 In scope

- The conditions that must hold before any agentic extension is attempted.
- The shape of a future delegation record (as design, not implementation).
- The guardrails: scope, expiry, approval, receipts, revocation, escalation.

### 4.2 Out of scope and deferred

- Any change to the simple meaning of `+AI` (never).
- Implementing agent declarations now (prohibited until conditions are met).
- Organisation-internal workflow automation (organisation workspaces).

## 5. Specification

### 5.1 Design goals and principles

1. **The human stays the signer.** Agents assist; principals declare.
2. **Bounded and revocable.** Every delegation names its scope and expiry.
3. **Receipts, not trust.** Agent actions are recorded facts; the record is
   not an endorsement of the agent.
4. **Never the simple mark.** Agentic declarations are a distinct, additional
   layer, never a redefinition of `+AI`.

### 5.2 Normative requirements

1. No agentic extension MAY ship until all of: (a) the delegation, multi-party
   responsibility, authority, failure, and human-release semantics are
   documented and reviewed; (b) at least one independent implementation
   exists; (c) the governance body approves it as a separate versioned
   extension.
2. A future delegation record MUST name: the principal human, the agent, the
   bounded scope, the expiry, the approval to publish or deploy, the
   escalation contact, and the revocation path.
3. The agent MUST NOT be recordable as the responsible party in any
   declaration (RL-8); the principal's declaration remains the responsibility
   statement.
4. Publication or deployment MUST require the principal's recorded acceptance
   (RL-7); an agent may prepare, never release, without it.
5. Action receipts MUST be verifiable facts (what was done, when, under which
   delegation), reported as evidence labels, never as scores.
6. Contribution chains MUST list humans and agents in order of material
   contribution, with the responsible human(s) identified at the head of the
   release decision.
7. Revocation MUST be instant and visible: a revoked delegation MUST be
   reported as revoked with its date, per declaration lifecycle events.
8. Failure semantics MUST be defined before shipping: who is accountable when
   an agent errs (the principal), how disputes attach (moderation, disputes,
   and appeals), and how receipts are corrected (lifecycle correction events).
9. Escalation contacts MUST be reachable and MUST NOT default to the agent
   itself.
10. The extension MUST be versioned separately from the normative
    specification and MUST be labelled "experimental extension" until
    stabilized through standards engagement.

### 5.3 Data model

```
{
  "delegationId": "opaque identifier",
  "principal": "human signer",
  "agent": "agent identifier",
  "scope": "bounded description",
  "expires": "ISO-8601",
  "publishAuthority": "prepared-only | principal-approved",
  "escalationContact": "human route",
  "revocationPath": "instant revocation route",
  "status": "active | revoked"
}
```

### 5.4 Interfaces and behaviours

- If ever shipped, agent receipts attach to the principal's declaration as
  evidence entries, with the delegation identifier.
- Checkers report the delegation's status and expiry as dated labels.

### 5.5 Lifecycle and operational rules

- Delegations expire automatically; renewal requires a fresh grant.
- Revoked delegations remain visible as revoked, never silently removed.
- The extension's own versioning follows specification versioning and hashing
  discipline.

## 6. Free floor, red lines, and invariants

This specification exists to enforce RL-7 and RL-8 in the agentic future: no
automated publication in another's name, no transfer of responsibility to AI.
The simple meaning and the no-account path stay free and unchanged; the
extension, if it ever exists, is an optional layer that never makes the
baseline mark insufficient.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) would
  carry the delegation reference as an extension.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) owns the revocation
  and correction events.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)
  defines how receipts are reported.
- [Proofs of control](proofs-of-control-dsh.md) owns verifying the principal's
  and agent's control at delegation time.
- [Organisation workspaces](organisation-workspaces-dsh.md) owns
  organisation-internal automation, which is distinct from public agentic
  declarations.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md)
  owns dispute attachment for agent errors.
- [Red lines and cautious extensions](red-lines-and-cautious-extensions-dsh.md)
  is the authority this document defers to before any exploration.
- [Standards engagement](standards-engagement-dsh.md) would carry the
  extension toward external review.

## 8. Resolution of the seed's "before implementation" concerns

- **Keep this outside the simple v0.1 meaning** — section 5.2 item 1: no
  shipping until semantics are documented, independently implemented, and
  governed as a separate extension; the baseline meaning is untouched.
- **Delegation** — sections 5.2 item 2 and 5.3: bounded, named, expiring
  grants.
- **Multi-party responsibility** — section 5.2 item 6: contribution chains
  with the release-deciding human at the head.
- **Authority** — section 5.2 items 2 and 4: scoped authority, principal
  approval to publish.
- **Failure** — section 5.2 item 8: the principal is accountable; disputes
  and corrections are defined.
- **Human-release semantics** — section 5.2 item 4: release requires the
  principal's recorded acceptance.

## 9. Acceptance criteria

1. No agentic feature exists while the simple meaning is the only meaning.
2. Any future delegation record names principal, agent, scope, expiry, and
   escalation contact.
3. No record ever lists an agent as the responsible party.
4. Publication requires the principal's recorded acceptance.
5. A revoked delegation is reported as revoked with its date.
6. The extension is versioned separately and labelled experimental.
7. The baseline mark's wording and free status are unchanged by any
   extension.

## 10. Open questions

- The exact threshold for "independent implementation" in precondition (b).
- Whether contribution chains should be normative at first or begin as
  optional evidence.
