# Proofs of Control — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`proofs-of-control.md`](proofs-of-control.md).
> **Catalogue group:** Artifacts and trust.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the factual checks that establish whether a
claimant controlled something at a stated time: a mailbox, an account, a
domain, an artifact location, or a signing key. A proof of control is the
difference between "this person says they can be reached here" and "we observed
them demonstrate control here, on this date, by this method". It never
establishes who someone *is* or that they may act for an organisation — those
are separate, stronger questions.

## 2. Placement and boundaries

This specification sits in the "Artifacts and trust" group and owns the
*challenge methods and their evidence records*. It does not own the labels used
to report results (see [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)),
the checking pipeline that runs challenges (see [Verification
checker](verification-checker-dsh.md)), or organisational authority (see
[Organisation profiles and policies](organisation-profiles-and-policies-dsh.md)).
It honours the free floor: self-service checks must stay free, while managed
continuous monitoring may be an optional paid service that changes nothing
about what a proof means.

## 3. Terminology

- **Control** — the demonstrated ability to act through a resource (mailbox,
  account, domain, artifact location, key) at a stated time.
- **Challenge** — a protocol step that can only be completed by someone with
  control of the resource.
- **Window** — the period during which a completed challenge remains fresh
  evidence.
- **Delegated role** — a named permission granted by a controlling party to
  another party, recorded separately from the underlying proof.

## 4. Scope

### 4.1 In scope

- The five control types and their challenge methods.
- Evidence records, expiry windows, and rechecking rules.
- Recovery and key rotation handling.
- Delegated roles and their labels.
- Dispute handling for challenged proofs.

### 4.2 Out of scope and deferred

- Identity verification or legal identity (no biometric proof — red line).
- Organisational authority to represent an organisation.
- Continuous monitoring services (optional paid service; only the self-service
  checks are defined here as free floor).

## 5. Specification

### 5.1 Design goals and principles

1. **Facts with dates.** A proof states what was controlled, how, and when —
   nothing more.
2. **Least exposure.** Challenges must reveal as little about the claimant as
   the check requires.
3. **Expiry by design.** Every proof decays; freshness is part of the fact.
4. **Recovery is first-class.** Losing a mailbox or key must not destroy a
   party's record history.
5. **Delegation is visible.** Acting through a delegate never reads as if the
   principal personally demonstrated control.

### 5.2 Normative requirements

1. Each proof record MUST contain: control type, challenge method, the
   resource identifier challenged, the challenge's start and completion times,
   the result, and the expiry window.
2. Mailbox control MUST be demonstrated by delivering a one-time challenge
   code to the stated address and requiring it back; proofs MUST NOT retain the
   mailbox content or the challenge code beyond verification.
3. Account control (hosted services) MUST be demonstrated by a successful
   authenticated session against the account; recovery of a lost account MUST
   invalidate prior account proofs from the loss date onward.
4. Domain control MUST be demonstrated by one of: a DNS TXT record, a served
   well-known file, or a served token on the domain — all with published,
   fixed formats.
5. Artifact-location control MUST be demonstrated by placing a token at the
   artifact's location or by demonstrating write access to its repository, with
   the location recorded exactly.
6. Key control MUST be demonstrated by a signed nonce using the claimed
   public key; key rotation MUST produce a new proof for the new key, and
   revocation of the old key MUST be recorded before the old key's proofs
   expire.
7. Every proof MUST have a defined expiry window per method; expired proofs
   MUST be reported `stale` with the original date, per evidence labels.
8. Rechecking MUST be self-service and free: a claimant may rerun any
   challenge at any time without payment or approval.
9. Delegated roles MUST be recorded as separate statements naming the
   principal, the delegate, the scope, and the grant date; evidence labels MUST
   NOT present a delegate's action as the principal's own control proof.
10. Disputed proofs MUST follow the dispute path in declaration lifecycle and
    moderation, disputes, and appeals; a disputed proof MUST be marked
    `disputed`, never silently deleted.
11. Challenges MUST NOT use biometrics, device fingerprinting, or covert
    tracking (red lines); only the resource being controlled may be exercised.
12. Managed continuous monitoring (an optional paid service) MUST produce the
    same proof record shape as self-service checks and MUST NOT suppress or
    upgrade any label.

### 5.3 Data model

```
{
  "proofId": "opaque identifier",
  "controlType": "mailbox | account | domain | artifact | key",
  "method": "e.g. dns-txt, well-known-file, served-token, signed-nonce",
  "resource": "the mailbox, account, domain, location, or key fingerprint",
  "challengeStarted": "ISO-8601",
  "completed": "ISO-8601",
  "result": "demonstrated | failed",
  "expires": "ISO-8601"
}
```

### 5.4 Interfaces and behaviours

- The checker runs challenges only when the signer initiates them (proofs are
  not probed without participation).
- Results render as dated labels: "mailbox confirmed on 2025-01-01 via
  one-time code; expires 2026-01-01".
- Proofs attach to a declaration's evidence section via the portable
  declaration schema.

### 5.5 Lifecycle and operational rules

- Expiry is automatic; nothing re-extends a proof without a fresh challenge.
- Key revocation, mailbox loss, domain transfer, and artifact moves invalidate
  or expire the corresponding proofs and MUST be recorded as lifecycle events
  where a declaration relies on them.
- Proof records are exportable and travel with the declaration (see evidence
  and compliance exports).

## 6. Free floor, red lines, and invariants

Self-service control checks are part of the free floor: no payment may be
required to demonstrate or recheck control, and no paid tier may shorten the
queue for the basic checks' meaning. The biometric and fingerprinting red
lines bound the challenge designs above. Organisation authority is kept
separate so a domain or mailbox proof can never be laundered into "acts for
the organisation".

## 7. Relationships to sibling specifications

- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)
  owns the labels these proofs feed (`mailbox-confirmed`,
  `domain-controlled`, `key-controlled`, …).
- [Verification checker](verification-checker-dsh.md) runs the challenges in
  its pipeline.
- [Portable declaration schema](portable-declaration-schema-dsh.md) embeds
  proof records in the declaration's evidence.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) governs disputes and
  the events that invalidate proofs.
- [Organisation profiles and policies](organisation-profiles-and-policies-dsh.md)
  owns organisation authority — the separate, stronger question.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md)
  owns key custody, rotation, and recovery at the project level.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) owns the
  anti-abuse measures around challenge endpoints.
- [Evidence and compliance exports](evidence-and-compliance-exports-dsh.md)
  packages proof records for audit.

## 8. Resolution of the seed's "before implementation" concerns

- **Challenges** — section 5.2 items 2-6: per-type methods with fixed formats.
- **Expiry** — section 5.2 item 7: defined windows, automatic staleness.
- **Rechecking** — section 5.2 item 8: free self-service reruns.
- **Recovery** — section 5.2 items 3 and 6 plus 5.5: loss and rotation
  invalidate affected proofs and are recorded.
- **Key rotation** — section 5.2 item 6: new key, new proof; revocation before
  expiry.
- **Delegated roles** — section 5.2 item 9: separate recorded statements,
  never conflated with personal control.
- **Privacy** — section 5.2 item 11 and principle 2: least-exposure challenges,
  no biometrics or fingerprinting.
- **Disputes** — section 5.2 item 10: disputed proofs marked, never deleted.
- **Exact human-readable labels** — section 5.4 plus evidence labels: dated,
  method-named labels.
- **Free self-service vs. paid monitoring** — section 5.2 items 8 and 12: free
  checks, same-shaped paid monitoring with no label advantage.

## 9. Acceptance criteria

1. Every proof record carries type, method, resource, times, result, and
   expiry.
2. A mailbox proof requires a round-tripped one-time code and retains nothing
   beyond the result.
3. A domain proof accepts exactly the published DNS or file formats.
4. An expired proof renders `stale` with its original date.
5. A claimant can rerun any challenge free of charge.
6. A delegate's action is never presented as the principal's control proof.
7. Key rotation yields a new key proof and records revocation of the old key.
8. A disputed proof renders `disputed` and is never silently removed.
9. No challenge uses biometrics or fingerprinting.
10. Paid monitoring outputs the identical proof record shape.

## 10. Open questions

- The precise default expiry windows per method (jointly with evidence labels
  and the checker).
- Whether artifact-location control should accept signed repository commits as
  a method in addition to token placement.
