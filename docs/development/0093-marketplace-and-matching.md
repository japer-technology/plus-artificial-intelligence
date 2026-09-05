# Development task — marketplace-and-matching: Marketplace and Matching

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md)
> **Source:** spec [`marketplace-and-matching-dsh.md`](../suggestions/marketplace-and-matching-dsh.md) · seed [`marketplace-and-matching.md`](../suggestions/marketplace-and-matching.md)
> **Effort:** S · **Phase:** P4-deferred · **Position:** deferred — decision/policy doc only until adoption metrics (Programme 4 dashboard) clear the gate
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Future opt-in collaborator/mentor/job/project/procurement discovery over directory data — only after meaningful adoption, never an endorsement market.
- **Why now / risk of deferring:** This is a deferred-register member — the deliverable is the policy/decision document and the precondition record, never the matching surface. Deferring the guardrails risks matching turning the directory into an endorsement or ranking market (RL-4/RL-9).
- **Features to deliver:**
  - A matching policy + assessment gate (decision/policy document, not a build).
  - The three preconditions — meaningful adoption measured per the dashboard, a governed red-lines assessment, and inherited directory non-endorsement/no-paid-rank rules (§5.2 item 1).
  - Opt-in matching consent separate from directory listing (§5.2 item 2).
  - The documented neutral-or-transparent ordering rule + liability disclaimer (§5.2 items 3, 10).
  - The guardrails — anti-discrimination, fraud, employment-law review, no advertising, closed-by-default safety, proven moderation capacity (§5.2 items 5–9, 11).
  - A sunset condition (§5.2 item 12).
  - A precondition record stating what is met/unmet.
- **Depends on:** public-directory (the data), proofs-of-control, moderation-disputes-and-appeals, red-lines-and-cautious-extensions.

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Meaningful-adoption metric
- **Question:** What satisfies the "meaningful adoption" precondition (spec §10; digest "Open: adoption metric")?
- **Option (a):** adopt the public-adoption-dashboard metric (Programme 4, the data owner) verbatim — referenced, not redefined here
  - **For:** spec §5.2 item 1(a) already says meaningful adoption is "measured per the public adoption dashboard"; referencing the metric keeps brainstorm decision 2's single source of truth and the dashboard (Programme 4) as data owner.
  - **Against:** referencing an external metric means matching cannot set its own readiness bar, only inherit the dashboard's.
- **Option (b):** define a matching-specific threshold locally in this document
  - **For:** a local matching-specific threshold could reflect when directory data is rich enough to match over.
  - **Against:** §5.2 item 1(a) already names the dashboard as the measure, and brainstorm decision 2 forbids redefinition — a local threshold would diverge from the single gate.
- **Option (c):** leave the metric undefined until the precondition is assessed
  - **For:** leaving it undefined defers the hardest question to gate time.
  - **Against:** it leaves the digest's "adoption metric" item and §10's question unresolved, so the precondition record cannot state whether (a) is met or unmet.
- **Recommended:** (a) — spec §5.2 item 1(a) already says "measured per the public adoption dashboard"; this decision just confirms the reference rather than a local redefinition.
- **Your choice:** ✏️

### D2 — Whether matching should ever exist
- **Question:** Does this decision document assume matching will exist (spec §10; digest "Open: whether it ever exists")?
- **Option (a):** record "not decided — a governed decision at gate time"; this document assumes nothing and does not pre-commit
  - **For:** spec §10 says "whether matching should ever exist at all" is "a governed decision, not an assumption"; recording "not decided" matches the deferred framing (mini-plan Order: "decision/policy doc only until adoption metrics clear the gate").
  - **Against:** neutrality gives no forward signal about whether the directory will ever host matching.
- **Option (b):** record matching as anticipated, to exist once preconditions are met
  - **For:** recording matching as anticipated prepares the guardrails to be ready at the gate.
  - **Against:** it treats existence as the default, contradicting §10's "not an assumption" and pre-committing a decision reserved for governance.
- **Option (c):** record a permanent decision against any matching surface
  - **For:** a permanent "against" forecloses the endorsement/ranking drift risk (RL-4/RL-9) entirely.
  - **Against:** §10 keeps existence open, so a permanent "no" pre-empts the governed decision and forecloses the option the spec deliberately leaves available.
- **Recommended:** (a) — the spec §10 says existence is a governed decision, not an assumption; the decision doc must reflect that neutrality.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a matching policy/decision document (`docs/marketplace-and-matching.md`) — NOT a build and NOT any matching surface.
3. Record the three preconditions: (a) meaningful adoption measured per the dashboard metric (per §2 D1); (b) a governed red-lines assessment recording risk, safeguards, and sunset; (c) the directory's non-endorsement and no-paid-rank rules inherited verbatim (spec §5.2 item 1).
4. Record the opt-in rule: matching uses only public-visibility directory data, with each party's matching opt-in separate from directory listing (item 2).
5. Record the ordering rule: documented neutral (declared-criteria relevance) or transparent (stated to all parties); paid placement prohibited (RL-4 — item 3).
6. Record the guardrails: no competence/quality/endorsement display (item 4); anti-discrimination rules with no protected-characteristic filtering and no inferred attributes (item 5); fraud/impersonation handled per proofs-of-control and moderation, with disputed/revoked declarations flagged or excluded (item 6); employment features defer to employment-law review and never make the project a hiring party (item 7); no advertising and no sale of matching data (item 8); contact exchange closed by default, via privacy-preserving relay rules (item 9); bounded, disclosed, visible liability disclaimer (item 10); proven moderation capacity with published matching-specific abuse routes (item 11); a sunset condition that withdraws (not patches) a feature drifting toward ranking or endorsement (item 12).
7. Publish the precondition record stating which of the three preconditions are met or unmet today.
8. Apply your §2 D2 posture to the document's framing (no assumption of existence).
9. Self-check against §5: preconditions recorded; opt-in separate; neutral ordering; sunset present; no competence display; no assumption of existence.

## 4. Constraints (must-nots)
- No ship before the adoption, assessment, and inheritance preconditions are recorded (spec §5.2 item 1) — this request produces only the policy doc and precondition record.
- No competence, quality, or endorsement display (item 4; RL-9).
- No advertising inside matching surfaces, and no matching data sold to advertisers or recruiters (item 8).
- No paid placement in ordering (RL-4 — item 3).
- No inferred attributes or protected-characteristic filtering (item 5).
- The project is never a party to hiring decisions (item 7).

## 5. Acceptance criteria
- [ ] No matching feature ships before the adoption, assessment, and inheritance preconditions are recorded.
- [ ] Listings are opt-in for matching separately from directory listing.
- [ ] Ordering is documented and unpaid.
- [ ] No surface displays competence, quality, or endorsement.
- [ ] No advertising appears inside a matching surface.
- [ ] Employment features pass employment-law review before shipping.
- [ ] A matching feature drifting toward ranking is withdrawn under its sunset.
- [ ] Every surface shows the liability disclaimer and the non-endorsement notice.

## 6. Outputs to produce in the repository
- `docs/marketplace-and-matching.md` — the matching policy/decision document: preconditions, opt-in/ordering/guardrail rules, sunset condition, and the precondition record (status: not yet met).

## 7. Read before building
- [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md) — mini-plan
- [`marketplace-and-matching-dsh.md`](../suggestions/marketplace-and-matching-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
