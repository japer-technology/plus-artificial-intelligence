# Development task — priority-review-services: Priority Review Services

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md)
> **Source:** spec [`priority-review-services-dsh.md`](../suggestions/priority-review-services-dsh.md) · seed [`priority-review-services.md`](../suggestions/priority-review-services.md)
> **Effort:** M · **Phase:** P4 · **Position:** after the review tracks themselves exist and have queues to prioritise
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Paid priority review (coordination/expedited) of translations, accessibility, security, integrations — payment changes queue position only.
- **Why now / risk of deferring:** After the review tracks themselves exist and have queues to prioritise (Order line). Opening before the tracks exist risks "Review-quality capture" — the identical-standards rule must be published before the queue opens.
- **Features to deliver:**
  - paid priority review (coordination/expedited) across translation, localisation, accessibility, security, and integration tracks
  - published queue rules (ordering, capacity, free-tier reservation, expected wait per track, plain-language "priority")
  - no-outcome-change rule (payment changes queue position only)
  - free queue never starved
  - safety urgency non-purchasable
  - identical reviewer/criteria/standards for both queues
  - published per-track reviewer qualifications + conflict/recusal
  - findings-only output (dated, evidence labels, never score/rank/verdict/certification)
  - dispute/moderation outcomes off-limits
  - Programme 8 gates
- **Depends on:** translation-governance, accessibility-floor, security-and-abuse-controls, developer-integrations, moderation-disputes-and-appeals

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Free-queue reservation percentage
- **Question:** What percentage of review capacity is reserved for the free queue?
- **Option (a):** a published reservation (e.g. 50%) set with demand modelling and revisable; free requests advance even when paid requests are pending
  - **For:** spec §5.2.2 requires a published reserved share and free requests advancing even when paid requests are pending, and §10 needs demand modelling; a concrete provisional number keeps the guarantee testable.
  - **Against:** the 50% figure is provisional and may change with demand modelling (spec §10).
- **Option (b):** no fixed percentage — the free queue "advances" by rule only
  - **For:** avoids locking a percentage before demand is modelled.
  - **Against:** spec §5.2.2 requires "a published share of review capacity must be reserved" — a rule-only advance without a fixed share is not a testable reservation, and risks starving the free queue (the "free queue never starved" must-not).
- **Option (c):** defer the number, publishing only "a published share"
  - **For:** defers the number to demand modelling (spec §10).
  - **Against:** "a published share" with no number does not satisfy spec §5.2.2's reserved-share requirement, leaving the free-path guarantee unmeasurable.
- **Recommended:** (a) — spec §5.2.2 requires a published reserved share and §10 needs demand modelling; a concrete provisional number keeps the guarantee testable.
- **Your choice:** ✏️

### D2 — Queue-jumping semantics
- **Question:** Does "priority" mean true queue-jumping or guaranteed-capacity scheduling?
- **Option (a):** guaranteed-capacity scheduling — paid requests get a reserved lane/expedited slot without displacing the free reservation; never absolute jump-the-line over safety or free capacity
  - **For:** spec §10 asks whether priority permits queue-jumping or only guaranteed-capacity scheduling; guaranteed-capacity preserves the free queue's credibility and the no-displacement rule (spec §5.2.2, §5.2.7).
  - **Against:** a reserved lane adds scheduling complexity versus simple reordering, and its meaning must be explained in plain language (spec §5.2.3).
- **Option (b):** true queue-jumping ahead of all free requests
  - **For:** gives paying customers the strongest, simplest position: ahead of all free requests.
  - **Against:** contradicts spec §5.2.2 ("free requests must advance even when paid requests are pending") and §5.2.7 (safety never displaced), and would starve or displace the free queue.
- **Option (c):** priority only shortens expected wait, no reordering
  - **For:** "priority" as a shorter expected wait is a mild, defensible reading.
  - **Against:** spec §5.2.3 requires stating "what 'priority' means in plain language" — an expectation-only reading without actual queue effect is vague and risks promising nothing concrete.
- **Recommended:** (a) — spec §10 asks whether priority permits queue-jumping or only guaranteed-capacity scheduling; guaranteed-capacity preserves the free queue's credibility and the no-displacement rule (§5.2.2, §5.2.7).
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Create `docs/services/priority-review-services.md`: the priority queue design — payment changes coordination and queue position only; the no-outcome-change rule and its enforcement; published queue rules (ordering, capacity, free-tier reservation per D1, expected wait per track, plain-language "priority" per D2); the free contribution and correction path never starved; safety urgency advancing on safety grounds and never displaced by payment; identical reviewer, criteria, and standards for free and paid requests (no laxer/stricter bar, no suppressed findings); published per-track reviewer qualifications, competence evidence, and conflict/recusal; findings-only output (dated, evidence-based, using the evidence-labels vocabulary — never a trust score, rank, endorsement, or certification); dispute and moderation outcomes off-limits.
3. Include the Programme 8 gates in the same doc: privacy analysis and threat model (submitted materials) and the static-first failure-mode statement (if the priority service stops, free review, the checker, and the published criteria remain available).
4. Create `site/priority-review.html`: the public queue rules + pricing surface stating that payment changes queue position only, never outcomes, with the standing "not certification, not a trust score" disclaimer.
5. Specify that review outcomes are published where the subject's specification requires, and a paid review is never privileged in how its findings are recorded or displayed.
6. Specify lifecycle: queue rules and reviewer rosters versioned and changelog-announced; a correction to findings issued as a new version, never an edit; reviewer conflicts trigger recorded recusal and reassignment.
7. State that revenue is reported through financial-transparency, with no revenue arrangement touching evidence, safety, or disputes.
8. Give the queue-rules and pricing surfaces a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13; queue-rules/pricing T2; findings follow their track, T4).
9. Self-check against §5: walk the acceptance criteria and confirm each holds.

## 4. Constraints (must-nots)
- Payment buys convenience, scale, support, or managed operations — never legitimacy, rank, permission, or a changed outcome.
- Payment never changes outcome, safety priority, evidence, or dispute handling.
- Free queue never starved; safety urgency never purchasable.
- No trust score, rank, or certification output.
- Identical standards for both queues; no suppressed findings.
- Dispute and moderation outcomes off-limits.
- The queue-rules/pricing surfaces follow the multi-language standard (R1/R4/R12/R13; T2); findings are T4.

## 5. Acceptance criteria
- [ ] The pricing surface states that payment changes queue position only, never outcomes.
- [ ] A paid request and a free request for the same material receive the same findings from the same standards.
- [ ] The free queue advances under load and never starves.
- [ ] Queue rules and reviewer qualifications are published before launch.
- [ ] Review output is dated findings with no score, rank, verdict, or certification.
- [ ] A safety-urgent matter advances on safety grounds ahead of paid requests.
- [ ] No review outcome is altered or suppressed by payment.
- [ ] A reviewer conflict triggers recorded recusal and reassignment.
- [ ] The service publishes a privacy analysis, threat model, and failure-mode statement.

## 6. Outputs to produce in the repository
- `docs/services/priority-review-services.md` — priority queue design + Programme 8 privacy analysis, threat model, and failure-mode statement.
- `site/priority-review.html` — public queue rules + pricing surface + no-certification disclaimer.

## 7. Read before building
- [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md) — mini-plan
- [`priority-review-services-dsh.md`](../suggestions/priority-review-services-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../planning/digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; queue-rules/pricing T2, findings T4)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
