# Agent request — workflow-automation-services: Workflow Automation Services

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md)
> **Source:** spec [`workflow-automation-services-dsh.md`](../../../../suggestions/workflow-automation-services-dsh.md) · seed [`workflow-automation-services.md`](../../../../suggestions/workflow-automation-services.md)
> **Effort:** L · **Phase:** P3 · **Position:** last — after workspaces, registers, and checker exist as its building blocks
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Paid vs free workflow boundary
- **Question:** Which workflows are paid, and which remain free client-side tools?
- **Options:** (a) defer the boundary to cost-discipline (Programme 8) + the free-floor covenant; at launch price only the automation layer while every workflow's underlying manual action stays free · (b) set the boundary now (e.g. single-record actions free, bulk/scheduled paid) · (c) make all workflows paid
- **Recommended:** (a) — spec §10 defers to cost-discipline input; the free floor already guarantees the manual path (§5.2.7), so price only the automation.
- **Your choice:** ✏️

### D2 — Retry and backoff defaults per workflow class
- **Question:** What are the retry/backoff defaults per workflow class?
- **Options:** (a) defer exact numbers to api-scale-and-reliability + security-and-abuse-controls; fix the invariant now (bounded, idempotent, visible failure — §5.2.4) · (b) set concrete defaults now (e.g. max 3 retries, exponential backoff) · (c) define per-workflow-class defaults here
- **Recommended:** (a) — spec §10 says retry/backoff defaults are undecided; the normative invariant (bounded, idempotency keys, visible failure) is already fixed in §5.2.4.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Design the workflow service with least-privilege server-side permissions (immediate revocation on role change), bounded idempotent retries (backoff, idempotency keys, a visible failure state — never silently retrying a consequential action into a different outcome), and an append-only audit log (actor, workflow, step, records affected, date).
3. Enforce the human-in-the-loop rule: automation performs only objective steps; every consequential decision (publication, removal, dispute) stays with a human reviewer; no payment may change a substantive outcome or an evidence label.
4. Specify customer-controlled deployment: every workflow runnable on the customer's own infrastructure using the commons and published interfaces; the manual, free path always performs the same action and is always reachable.
5. Specify signed, rate-limited webhooks with retries per the D2 invariant, never used for covert tracking.
6. Specify data minimisation (a workflow collects only what its steps need, never infers or stores sensitive attributes) and maintenance ownership (every connector/workflow names an owner; unmaintained workflows flagged or disabled with notice).
7. Specify scheduled validation and review reminders deferring to the checker's rate limits and the register's review dates; a paid schedule never produces a better evidence label than the free check.
8. Note for the agent: identity-provider links are watchlist-adjacent and inherit the "identity integrations" assessment gate owned by organisation-workspaces D1 — they ship only after that published assessment and never require biometrics.
9. Write `docs/services/workflow-automation-services.md` including the Programme 8 gates: static-first failure-mode statement (service stops → records remain readable/correct, the free path still performs the action, notice period stated), threat model, privacy analysis, and per-record cost model; require every offered workflow to cite pilot evidence and record the paid-vs-free boundary per D1.
10. Keep user-facing copy (failure states, reminders) in English under R1 (source of truth); a localised view is a later enhancement, not a launch requirement. Self-check against §4.

## 3. Constraints (must-nots)
- No consequential decision automated — a human reviewer always remains; no automated publication in another's name.
- Payment never changes a substantive outcome or an evidence label.
- The manual free path always performs the same action; no workflow is the only way to perform its underlying action.
- Retries are bounded, idempotent, and visible; no silent retry into a different outcome.
- No covert tracking via webhooks; no inference or storage of sensitive attributes.
- Identity-provider links ship only after the published identity-integrations assessment and never require biometrics.
- The workflow service carries no localised chrome at launch; user-facing copy stays English (R1).

## 4. Acceptance criteria
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

## 5. Outputs to produce in the repository
- `docs/services/workflow-automation-services.md` — workflow service design (permissions, retries/idempotency, audit, webhooks, customer deployment, maintenance ownership) + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 6. Read before building
- [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md) — mini-plan
- [`workflow-automation-services-dsh.md`](../../../../suggestions/workflow-automation-services-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../../../digest/06-funding-and-optional-services.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
