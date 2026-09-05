# Development task — agentic-accountability: Agentic Accountability

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md)
> **Source:** spec [`agentic-accountability-dsh.md`](../suggestions/agentic-accountability-dsh.md) · seed [`agentic-accountability.md`](../suggestions/agentic-accountability.md)
> **Effort:** S · **Phase:** P4-deferred · **Position:** deferred — schema sketches only; re-opened by the red-lines watchlist assessment when agent use stabilises
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Future bounded exploration of declarations for delegated AI-agent actions, anchored on human responsibility and acceptance.
- **Why now / risk of deferring:** This is a deferred-register member — the deliverable is the schema sketch and the precondition record, never a shipped feature. Deferring the guardrails risks agentic use leaking into the simple meaning, violating RL-7/RL-8.
- **Features to deliver:**
  - A delegation-record schema sketch (principal, agent, scope, expiry, escalation, revocation — §5.2 item 2, §5.3).
  - Action receipts as dated evidence labels (§5.2 item 5).
  - Failure semantics (principal accountable, disputes attach, receipts corrected — §5.2 item 8).
  - The three preconditions — documented/reviewed semantics, at least one independent implementation, governance approval as a versioned extension (§5.2 item 1).
  - The "experimental extension" labelling rule (§5.2 item 10).
  - The agent-never-responsible and principal-acceptance rules (RL-7/RL-8 — §5.2 items 3–4).
  - A precondition record stating what is met/unmet.
- **Depends on:** portable-declaration-schema, declaration-lifecycle, evidence-labels-not-trust-scores, proofs-of-control, red-lines-and-cautious-extensions.

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Independent-implementation threshold
- **Question:** What exactly counts as the "at least one independent implementation" in precondition (b) (spec §10; digest "Open: independent-impl threshold")?
- **Option (a):** one independent, non-project implementation that interoperates with the verification checker and is published openly
  - **For:** spec §5.2 item 1(b) says "at least one independent implementation"; making it checker-interoperable and openly published gives a concrete, verifiable floor consistent with the evidence-labels vocabulary (receipts as dated facts, §5.2 item 5).
  - **Against:** "checker-interoperable and published openly" adds detail beyond §5.2 item 1(b)'s bare "at least one", so the concrete bar is this doc's addition.
- **Option (b):** two independent implementations
  - **For:** two implementations are a stronger independence signal than one.
  - **Against:** §5.2 item 1(b) says "at least one" — requiring two exceeds the spec's floor and would further delay a feature already deferred behind its preconditions.
- **Option (c):** leave the threshold for governance to define at gate time
  - **For:** leaving the threshold to governance avoids premature precision.
  - **Against:** it leaves §10's open question ("the exact threshold for independent implementation") and the digest's "independent-impl threshold" item unresolved, so the precondition record cannot say whether (b) is met.
- **Recommended:** (a) — the spec §5.2 item 1(b) says "at least one"; an open, checker-interoperable implementation is a concrete, verifiable floor.
- **Your choice:** ✏️(a)

### D2 — Contribution chains normative vs optional
- **Question:** Are contribution chains normative at first, or optional evidence (spec §10; digest "Open: contribution chains normative vs optional")?
- **Option (a):** begin as optional evidence (a dated evidence label), promoted to normative only after standards engagement stabilises the semantics
  - **For:** spec §5.2 item 10 labels the extension "experimental" until "stabilized through standards engagement"; beginning contribution chains as optional dated evidence (per §5.2 item 6's chain content, reported via evidence labels per §5.2 item 5) matches that experimental framing.
  - **Against:** an optional chain means the head-of-release human (§5.2 item 6) is not always recorded, so multi-party responsibility attribution is only partially captured at first.
- **Option (b):** normative from first ship
  - **For:** making chains normative from the start guarantees the release-deciding human is always identified (§5.2 item 6).
  - **Against:** it imposes normative structure before the semantics are stabilised, contradicting §5.2 item 10's "experimental extension" framing and the "never the simple mark" principle (§5.1 item 4).
- **Option (c):** omit contribution chains entirely until stabilised
  - **For:** omitting chains entirely until stabilised avoids shipping an unsettled structure.
  - **Against:** it drops §5.2 item 6's contribution-chain requirement and leaves the digest's "contribution chains normative vs optional" item unanswered, so the delegation-record sketch is incomplete.
- **Recommended:** (a) — consistent with the spec's "experimental extension" framing (§5.2 item 10) and the evidence-labels vocabulary; promotion is a later, governed step.
- **Your choice:** ✏️(a)

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a decision/schema-sketch document (`docs/agentic-accountability.md`) — NOT an implementation and NOT any shipped feature. No agentic declaration exists today.
3. Sketch the delegation-record schema: principal human, agent, bounded scope, expiry, publish/deploy approval, escalation contact, and revocation path (spec §5.2 item 2, §5.3).
4. Record the action-receipt rule: verifiable facts (what, when, under which delegation) reported as evidence labels, never as scores (item 5).
5. Record the failure semantics: the principal is accountable when an agent errs; disputes attach via moderation; receipts corrected via lifecycle correction events (item 8).
6. Record the three preconditions: (a) delegation/multi-party/authority/failure/human-release semantics documented and reviewed; (b) at least one independent implementation (per §2 D1); (c) governance approval as a separate versioned extension (item 1).
7. Record the standing rules: the agent is never the responsible party (RL-8 — item 3); publication/deployment requires the principal's recorded acceptance (RL-7 — item 4); the extension is versioned separately from the normative spec and labelled "experimental extension" (item 10); the baseline meaning and free status are unchanged.
8. Record your §2 D2 posture for contribution chains (optional evidence vs normative).
9. Publish the precondition record stating which of the three preconditions are met or unmet today, and defer re-opening to the red-lines watchlist assessment.
10. Self-check against §5: no feature today; delegation fields defined; principal acceptance; experimental-labelled; agent never responsible.

## 4. Constraints (must-nots)
- The agent is never recordable as the responsible party (RL-8 — spec §5.2 item 3).
- No publication or deployment without the principal's recorded acceptance (RL-7 — item 4).
- No ship before all preconditions (documented semantics, independent implementation, governed) (item 1) — this request produces only the schema sketch and precondition record.
- No change to the simple `+AI` meaning (item 1, §4.2) — the extension is a distinct, additional layer.
- Escalation contacts must not default to the agent itself (item 9).

## 5. Acceptance criteria
- [ ] No agentic feature exists while the simple meaning is the only meaning.
- [ ] Any future delegation record names principal, agent, scope, expiry, and escalation contact.
- [ ] No record ever lists an agent as the responsible party.
- [ ] Publication requires the principal's recorded acceptance.
- [ ] A revoked delegation is reported as revoked with its date.
- [ ] The extension is versioned separately and labelled experimental.
- [ ] The baseline mark's wording and free status are unchanged by any extension.

## 6. Outputs to produce in the repository
- `docs/agentic-accountability.md` — the decision document: delegation-record schema sketch, action-receipt and failure semantics, preconditions, and the precondition record (status: not yet met).

## 7. Read before building
- [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md) — mini-plan
- [`agentic-accountability-dsh.md`](../suggestions/agentic-accountability-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
