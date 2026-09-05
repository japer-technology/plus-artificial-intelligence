# Development task — proofs-of-control: Proofs of Control

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md)
> **Source:** spec [`proofs-of-control-dsh.md`](../suggestions/proofs-of-control-dsh.md) · seed [`proofs-of-control.md`](../suggestions/proofs-of-control.md)
> **Effort:** M · **Phase:** P1 · **Position:** after labels vocabulary; consumed by checker and hosted profiles
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Factual, dated checks of control (mailbox, account, domain, artifact-location, key) — never identity or organisational authority.
- **Why now / risk of deferring:** It follows the labels vocabulary and is consumed by the checker and hosted profiles (mini-plan Order). Deferring leaves every control label (`mailbox-confirmed`, `domain-controlled`, `key-controlled`) without a production method (evidence-labels spec §7).
- **Features to deliver:**
  - Five control types — mailbox, account, domain, artifact, key — with challenge methods (one-time code, DNS TXT / well-known file / served token, signed nonce).
  - A proof record schema (`type`/`method`/`resource`/times/`result`/`expiry`); free self-service recheck; `stale` rendering rules.
  - Delegated roles recorded as separate statements; disputed proofs marked `disputed`, never deleted; no biometrics or fingerprinting.
- **Depends on:** evidence-labels-not-trust-scores, security-and-abuse-controls, continuity-and-namespace-custody

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Default expiry windows per method
- **Question:** What default expiry window applies per control method, after which a proof renders `stale`? (spec §10; assigned cross-cutting decision; jointly with evidence-labels — keep the answer identical there.)
- **Option (a):** Per-method table (e.g. mailbox 90 days, domain 90 days, artifact-location 90 days, key 365 days, account session-scoped)
  - **For:** §5.2.7 requires a defined expiry window per method, and account control is session-scoped (§5.2.3) while key control may outlast mailbox/domain (§5.2.6); evidence-labels §5.2.10 requires the same per-method window.
  - **Against:** A per-method table adds a maintenance surface that must be kept identical in evidence-labels.
- **Option (b):** One uniform window (e.g. 180 days) for all non-session methods
  - **For:** One uniform window is simpler to document and removes the chance of divergent defaults with evidence-labels.
  - **Against:** A uniform window mis-states reality — account control is session-scoped (§5.2.3) while key control outlives mailbox/domain (§5.2.6), and §5.2.7 requires per-method windows.
- **Option (c):** Session-scoped only — every proof is recomputed per check and nothing persists past the session.
  - **For:** The simplest possible model, with no persistence of stale proofs.
  - **Against:** Contradicts §5.2.7 (expiry per method, with `stale` reporting) and §5.5 (expiry is automatic; nothing re-extends without a fresh challenge) — a proof must persist with its date so it can go `stale`.
- **Recommended:** (a) — §5.2.7 here and §5.2.10 of evidence-labels both require per-method windows, and account proof is session-scoped while key proof may reasonably last longer.
- **Your choice:** ✏️

### D2 — Signed repository commits as an artifact-location method
- **Question:** Should artifact-location control accept signed repository commits as a method, in addition to token placement? (spec §10.)
- **Option (a):** No — keep artifact-location proof to token placement (or demonstrated write access) for now
  - **For:** §5.2.5 defines artifact-location control as token placement or demonstrated write access, so keeping that method set matches the drafted spec.
  - **Against:** None identified in the sources.
- **Option (b):** Yes — accept signed commits from the repository's signing key as an additional method
  - **For:** Signed commits are a real, observable control signal for repository-hosted artifacts.
  - **Against:** Risk of being read as "owns the project" rather than "controls the location", blurring the control-vs-authority boundary §2 keeps separate ("It never establishes ... that they may act for an organisation").
- **Option (c):** Yes — accept signed commits, but only as a weaker companion label, never alone.
  - **For:** Accepts the signal while keeping it clearly weaker than token placement, preserving the honest-strength principle (§5.1).
  - **Against:** Requires a distinct companion label plus rules to keep it from being read as project ownership — labelling complexity not in the current spec.
- **Recommended:** (c) or (a) — signed commits are a real control signal but risk being read as "owns the project" rather than "controls the location"; if accepted, label it distinctly and keep token placement the strong method.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Define the five control types (mailbox, account, domain, artifact, key) and their challenge methods: one-time code (mailbox), authenticated session (account), DNS TXT / well-known file / served token (domain), token placement or write access (artifact, plus D2), signed nonce (key).
2. Write the proof record schema (`proofId`, `controlType`, `method`, `resource`, `challengeStarted`, `completed`, `result`, `expires`).
3. Specify the expiry/staleness rules per D1 and the free self-service recheck rule.
4. Write the key-rotation and account-recovery rules (new key → new proof; old key revoked before expiry; lost account invalidates prior account proofs from the loss date).
5. Write the delegated-role rule (recorded as separate statements naming principal, delegate, scope, grant date; a delegate's action never presented as the principal's proof).
6. Write the dispute rule (disputed proofs marked `disputed`, never silently deleted) and the no-biometrics/no-fingerprinting rule.
7. State the paid-monitoring rule (same proof record shape, no label advantage).
8. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- No biometrics or device fingerprinting.
- A delegate's action is never presented as the principal's proof.
- Disputed proofs are marked `disputed`, never silently deleted.
- Proofs are never probed without the signer's participation.
- Self-service checks stay free; paid monitoring never suppresses or upgrades a label.

## 5. Acceptance criteria
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

## 6. Outputs to produce in the repository
- `docs/spec/proofs-of-control.md` — control types, challenge methods, expiry/staleness, rotation/recovery, delegation and dispute rules.
- `site/schemas/proof/<version>/schema.json` — proof record JSON Schema.

## 7. Read before building
- [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md) — mini-plan
- [`proofs-of-control-dsh.md`](../suggestions/proofs-of-control-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../planning/digest/04-artifacts-and-trust.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
