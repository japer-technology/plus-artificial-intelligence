# Development task — workflow-automation-services: Workflow Automation Services

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../planning/programmes/07-hosted-identity-org-services.md)
> **Source:** spec [`workflow-automation-services-dsh.md`](../suggestions/workflow-automation-services-dsh.md) · seed [`workflow-automation-services.md`](../suggestions/workflow-automation-services.md)
> **Effort:** L · **Phase:** P3 · **Position:** last — after workspaces, registers, and checker exist as its building blocks
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Paid automation conveniences (connectors, bulk ops, scheduled validation, reminders, webhooks, IdP links) that never change outcomes or lock in.
- **Why now / risk of deferring:** Ships last — after workspaces, registers, and the checker exist as its building blocks (mini-plan Order). Deferring risks automation changing outcomes or locking customers in, guarded by the no-consequential-decision and always-manual-free-path rules (brainstorm).
- **Features to deliver:**
  - Workflow service with least-privilege server-side permissions, bounded idempotent retries (backoff, idempotency keys, visible failure state), and an append-only audit log.
  - Customer-controlled deployment (every workflow runnable on the customer's own infrastructure via the commons).
  - Signed, rate-limited webhooks.
  - Connectors, bulk operations, scheduled validation, review reminders, and identity-provider links (assessment-gated, non-biometric).
  - Every offered workflow citing pilot evidence.
  - No consequential decision automated (a human reviewer always remains) and the manual free path always performing the same action.
  - Explicit maintenance ownership with unmaintained workflows flagged or disabled with notice.
  - Published privacy analysis, threat model, and static-first failure-mode statement.
- **Depends on:** approved-tool-registers, verification-checker, api-scale-and-reliability, static-first-service-architecture

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Paid vs free workflow boundary
- **Question:** Which workflows are paid, and which remain free client-side tools?
- **Option (a):** defer the boundary to cost-discipline (Programme 8) + the free-floor covenant; at launch price only the automation layer while every workflow's underlying manual action stays free
  - **For:** Spec §10 defers the boundary to cost-discipline input, and spec §5.2.7 already guarantees the manual free path, so pricing only the automation layer satisfies the free floor without pre-committing a boundary.
  - **Against:** Until cost-discipline sets the boundary, the paid/free split is provisional and may need rework.
- **Option (b):** set the boundary now (e.g. single-record actions free, bulk/scheduled paid)
  - **For:** A concrete boundary lets the pricing surface ship immediately.
  - **Against:** Spec §10 defers the boundary to cost-discipline, so setting it now pre-empts the owner's input and risks a split the free-floor covenant (spec §5.2.7) does not yet validate.
- **Option (c):** make all workflows paid
  - **For:** Maximises revenue from the automation layer.
  - **Against:** Spec §5.2.7 requires the manual, free path to always perform the same action, so "all workflows paid" could only price the automation layer anyway; charging for every workflow risks gating the underlying action, which the free floor forbids.
- **Recommended:** (a) — spec §10 defers to cost-discipline input; the free floor already guarantees the manual path (§5.2.7), so price only the automation.
- **Your choice:** ✏️

### D2 — Retry and backoff defaults per workflow class
- **Question:** What are the retry/backoff defaults per workflow class?
- **Option (a):** defer exact numbers to api-scale-and-reliability + security-and-abuse-controls; fix the invariant now (bounded, idempotent, visible failure — §5.2.4)
  - **For:** Spec §10 says retry/backoff defaults are undecided, while the normative invariant (bounded, idempotency keys, visible failure) is already fixed in §5.2.4, so fixing the invariant now and deferring numbers to the scale/abuse owners is the conformant split.
  - **Against:** No concrete numbers at launch means the retry behaviour is only bounded by the invariant, not tuned, until the owners publish defaults.
- **Option (b):** set concrete defaults now (e.g. max 3 retries, exponential backoff)
  - **For:** Immediate tunable defaults.
  - **Against:** Spec §10 leaves the defaults undecided and they belong to api-scale-and-reliability + security-and-abuse-controls, so inventing numbers here duplicates those owners and could conflict with rate limits.
- **Option (c):** define per-workflow-class defaults here
  - **For:** Per-class tuning is more precise.
  - **Against:** Spec §10 defers defaults to the scale/abuse owners, and per-class numbers are exactly what it says is undecided, so defining them here over-commits.
- **Recommended:** (a) — spec §10 says retry/backoff defaults are undecided; the normative invariant (bounded, idempotency keys, visible failure) is already fixed in §5.2.4.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Design the workflow service with least-privilege server-side permissions (immediate revocation on role change), bounded idempotent retries (backoff, idempotency keys, a visible failure state — never silently retrying a consequential action into a different outcome), and an append-only audit log (actor, workflow, step, records affected, date).
3. Enforce the human-in-the-loop rule: automation performs only objective steps; every consequential decision (publication, removal, dispute) stays with a human reviewer; no payment may change a substantive outcome or an evidence label.
4. Specify customer-controlled deployment: every workflow runnable on the customer's own infrastructure using the commons and published interfaces; the manual, free path always performs the same action and is always reachable.
5. Specify signed, rate-limited webhooks with retries per the D2 invariant, never used for covert tracking.
6. Specify data minimisation (a workflow collects only what its steps need, never infers or stores sensitive attributes) and maintenance ownership (every connector/workflow names an owner; unmaintained workflows flagged or disabled with notice).
7. Specify scheduled validation and review reminders deferring to the checker's rate limits and the register's review dates; a paid schedule never produces a better evidence label than the free check.
8. Note for the agent: identity-provider links are watchlist-adjacent and inherit the "identity integrations" assessment gate owned by organisation-workspaces D1 — they ship only after that published assessment and never require biometrics.
9. Write `docs/services/workflow-automation-services.md` including the Programme 8 gates: static-first failure-mode statement (service stops → records remain readable/correct, the free path still performs the action, notice period stated), threat model, privacy analysis, and per-record cost model; require every offered workflow to cite pilot evidence and record the paid-vs-free boundary per D1.
10. Keep user-facing copy (failure states, reminders) in English under R1 (source of truth); a localised view is a later enhancement, not a launch requirement. Self-check against §5.

## 4. Constraints (must-nots)
- No consequential decision automated — a human reviewer always remains; no automated publication in another's name.
- Payment never changes a substantive outcome or an evidence label.
- The manual free path always performs the same action; no workflow is the only way to perform its underlying action.
- Retries are bounded, idempotent, and visible; no silent retry into a different outcome.
- No covert tracking via webhooks; no inference or storage of sensitive attributes.
- Identity-provider links ship only after the published identity-integrations assessment and never require biometrics.
- The workflow service carries no localised chrome at launch; user-facing copy stays English (R1).

## 5. Acceptance criteria
- [ ] Every offered workflow cites pilot evidence.
- [ ] No workflow performs a consequential decision; a human reviewer always remains.
- [ ] No payment changes a substantive outcome or an evidence label.
- [ ] Retries are bounded, idempotent, and visible.
- [ ] Every run writes append-only audit events, exportable in the audit-bundle format.
- [ ] A workflow collects only its steps' needed data, with a published privacy analysis and threat model.
- [ ] Workflow definitions and outputs export, and the manual free path performs the same action.
- [ ] Every workflow runs on customer-controlled infrastructure.
- [ ] An unmaintained workflow is flagged or disabled with notice.
- [ ] Identity-provider links ship only after a published assessment and never require biometrics.
- [ ] The failure-mode statement, threat model, privacy analysis, and cost model are published (Programme 8 gate).

## 6. Outputs to produce in the repository
- `docs/services/workflow-automation-services.md` — workflow service design (permissions, retries/idempotency, audit, webhooks, customer deployment, maintenance ownership) + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 7. Read before building
- [`07-hosted-identity-org-services.md`](../planning/programmes/07-hosted-identity-org-services.md) — mini-plan
- [`workflow-automation-services-dsh.md`](../suggestions/workflow-automation-services-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../planning/digest/06-funding-and-optional-services.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
