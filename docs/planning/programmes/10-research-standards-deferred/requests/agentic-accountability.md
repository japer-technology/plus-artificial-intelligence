# Agent request — agentic-accountability: Agentic Accountability

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../../10-research-standards-deferred.md)
> **Source:** spec [`agentic-accountability-dsh.md`](../../../../suggestions/agentic-accountability-dsh.md) · seed [`agentic-accountability.md`](../../../../suggestions/agentic-accountability.md)
> **Effort:** S · **Phase:** P4-deferred · **Position:** deferred — schema sketches only; re-opened by the red-lines watchlist assessment when agent use stabilises
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Independent-implementation threshold
- **Question:** What exactly counts as the "at least one independent implementation" in precondition (b) (spec §10; digest "Open: independent-impl threshold")?
- **Options:** (a) one independent, non-project implementation that interoperates with the verification checker and is published openly · (b) two independent implementations · (c) leave the threshold for governance to define at gate time
- **Recommended:** (a) — the spec §5.2 item 1(b) says "at least one"; an open, checker-interoperable implementation is a concrete, verifiable floor.
- **Your choice:** ✏️(a)

### D2 — Contribution chains normative vs optional
- **Question:** Are contribution chains normative at first, or optional evidence (spec §10; digest "Open: contribution chains normative vs optional")?
- **Options:** (a) begin as optional evidence (a dated evidence label), promoted to normative only after standards engagement stabilises the semantics · (b) normative from first ship · (c) omit contribution chains entirely until stabilised
- **Recommended:** (a) — consistent with the spec's "experimental extension" framing (§5.2 item 10) and the evidence-labels vocabulary; promotion is a later, governed step.
- **Your choice:** ✏️(a)

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a decision/schema-sketch document (`docs/agentic-accountability.md`) — NOT an implementation and NOT any shipped feature. No agentic declaration exists today.
3. Sketch the delegation-record schema: principal human, agent, bounded scope, expiry, publish/deploy approval, escalation contact, and revocation path (spec §5.2 item 2, §5.3).
4. Record the action-receipt rule: verifiable facts (what, when, under which delegation) reported as evidence labels, never as scores (item 5).
5. Record the failure semantics: the principal is accountable when an agent errs; disputes attach via moderation; receipts corrected via lifecycle correction events (item 8).
6. Record the three preconditions: (a) delegation/multi-party/authority/failure/human-release semantics documented and reviewed; (b) at least one independent implementation (per §1 D1); (c) governance approval as a separate versioned extension (item 1).
7. Record the standing rules: the agent is never the responsible party (RL-8 — item 3); publication/deployment requires the principal's recorded acceptance (RL-7 — item 4); the extension is versioned separately from the normative spec and labelled "experimental extension" (item 10); the baseline meaning and free status are unchanged.
8. Record your §1 D2 posture for contribution chains (optional evidence vs normative).
9. Publish the precondition record stating which of the three preconditions are met or unmet today, and defer re-opening to the red-lines watchlist assessment.
10. Self-check against §4: no feature today; delegation fields defined; principal acceptance; experimental-labelled; agent never responsible.

## 3. Constraints (must-nots)
- The agent is never recordable as the responsible party (RL-8 — spec §5.2 item 3).
- No publication or deployment without the principal's recorded acceptance (RL-7 — item 4).
- No ship before all preconditions (documented semantics, independent implementation, governed) (item 1) — this request produces only the schema sketch and precondition record.
- No change to the simple `+AI` meaning (item 1, §4.2) — the extension is a distinct, additional layer.
- Escalation contacts must not default to the agent itself (item 9).

## 4. Acceptance criteria
- [ ] No agentic feature exists while the simple meaning is the only meaning.
- [ ] Any future delegation record names principal, agent, scope, expiry, and escalation contact.
- [ ] No record ever lists an agent as the responsible party.
- [ ] Publication requires the principal's recorded acceptance.
- [ ] A revoked delegation is reported as revoked with its date.
- [ ] The extension is versioned separately and labelled experimental.
- [ ] The baseline mark's wording and free status are unchanged by any extension.

## 5. Outputs to produce in the repository
- `docs/agentic-accountability.md` — the decision document: delegation-record schema sketch, action-receipt and failure semantics, preconditions, and the precondition record (status: not yet met).

## 6. Read before building
- [`10-research-standards-deferred.md`](../../10-research-standards-deferred.md) — mini-plan
- [`agentic-accountability-dsh.md`](../../../../suggestions/agentic-accountability-dsh.md) — full spec
- [`07-safety-operations-research.md`](../../../digest/07-safety-operations-research.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
