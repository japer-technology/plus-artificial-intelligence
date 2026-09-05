# Agent request — proofs-of-control: Proofs of Control

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../../02-trust-foundations.md)
> **Source:** spec [`proofs-of-control-dsh.md`](../../../../suggestions/proofs-of-control-dsh.md) · seed [`proofs-of-control.md`](../../../../suggestions/proofs-of-control.md)
> **Effort:** M · **Phase:** P1 · **Position:** after labels vocabulary; consumed by checker and hosted profiles
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Default expiry windows per method
- **Question:** What default expiry window applies per control method, after which a proof renders `stale`? (spec §10; assigned cross-cutting decision; jointly with evidence-labels — keep the answer identical there.)
- **Options:** (a) Per-method table (e.g. mailbox 90 days, domain 90 days, artifact-location 90 days, key 365 days, account session-scoped) · (b) One uniform window (e.g. 180 days) for all non-session methods · (c) Session-scoped only — every proof is recomputed per check and nothing persists past the session.
- **Recommended:** (a) — §5.2.7 here and §5.2.10 of evidence-labels both require per-method windows, and account proof is session-scoped while key proof may reasonably last longer.
- **Your choice:** ✏️

### D2 — Signed repository commits as an artifact-location method
- **Question:** Should artifact-location control accept signed repository commits as a method, in addition to token placement? (spec §10.)
- **Options:** (a) No — keep artifact-location proof to token placement (or demonstrated write access) for now · (b) Yes — accept signed commits from the repository's signing key as an additional method · (c) Yes — accept signed commits, but only as a weaker companion label, never alone.
- **Recommended:** (c) or (a) — signed commits are a real control signal but risk being read as "owns the project" rather than "controls the location"; if accepted, label it distinctly and keep token placement the strong method.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Define the five control types (mailbox, account, domain, artifact, key) and their challenge methods: one-time code (mailbox), authenticated session (account), DNS TXT / well-known file / served token (domain), token placement or write access (artifact, plus D2), signed nonce (key).
2. Write the proof record schema (`proofId`, `controlType`, `method`, `resource`, `challengeStarted`, `completed`, `result`, `expires`).
3. Specify the expiry/staleness rules per D1 and the free self-service recheck rule.
4. Write the key-rotation and account-recovery rules (new key → new proof; old key revoked before expiry; lost account invalidates prior account proofs from the loss date).
5. Write the delegated-role rule (recorded as separate statements naming principal, delegate, scope, grant date; a delegate's action never presented as the principal's proof).
6. Write the dispute rule (disputed proofs marked `disputed`, never silently deleted) and the no-biometrics/no-fingerprinting rule.
7. State the paid-monitoring rule (same proof record shape, no label advantage).
8. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- No biometrics or device fingerprinting.
- A delegate's action is never presented as the principal's proof.
- Disputed proofs are marked `disputed`, never silently deleted.
- Proofs are never probed without the signer's participation.
- Self-service checks stay free; paid monitoring never suppresses or upgrades a label.

## 4. Acceptance criteria
- [ ] Every proof record carries type, method, resource, times, result, and expiry.
- [ ] A mailbox proof requires a round-tripped one-time code and retains nothing beyond the result.
- [ ] A domain proof accepts exactly the published DNS or file formats.
- [ ] An expired proof renders `stale` with its original date.
- [ ] A claimant can rerun any challenge free of charge.
- [ ] A delegate's action is never presented as the principal's control proof.
- [ ] Key rotation yields a new key proof and records revocation of the old key.
- [ ] A disputed proof renders `disputed` and is never silently removed.
- [ ] No challenge uses biometrics or fingerprinting.
- [ ] Paid monitoring outputs the identical proof record shape.

## 5. Outputs to produce in the repository
- `docs/spec/proofs-of-control.md` — control types, challenge methods, expiry/staleness, rotation/recovery, delegation and dispute rules.
- `site/schemas/proof/<version>/schema.json` — proof record JSON Schema.

## 6. Read before building
- [`02-trust-foundations.md`](../../02-trust-foundations.md) — mini-plan
- [`proofs-of-control-dsh.md`](../../../../suggestions/proofs-of-control-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../../../digest/04-artifacts-and-trust.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
