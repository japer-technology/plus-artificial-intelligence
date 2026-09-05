# Development task — independent-assurance-and-certification: Independent Assurance and Certification

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md)
> **Source:** spec [`independent-assurance-and-certification-dsh.md`](../suggestions/independent-assurance-and-certification-dsh.md) · seed [`independent-assurance-and-certification.md`](../suggestions/independent-assurance-and-certification.md)
> **Effort:** S · **Phase:** P4-deferred · **Position:** P4-deferred — the spec's own acceptance is "no credential exists"; ship only the decision doc and the precondition record
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Conditions under which a distinct future assurance programme may exist — never redefining ordinary +AI as inferior or paid-only.
- **Why now / risk of deferring:** This is a deferred-register member — the deliverable is the policy/decision document and the precondition record, never the assurance service. Deferring the guardrail risks the most dangerous drift the spec names: assurance becoming a paywall that redefines the free mark as inferior (RL-1/RL-4).
- **Features to deliver:**
  - A policy/decision document (not a build) recording the three precondition gates — meaningful adoption, spec stability, approved independent governance (§5.2 item 1).
  - The guardrails — distinct credential name/mark, criteria versioning, assessor independence, appeals/renewal, bounded/disclosed liability, fee waivers, governance separated from spec authority and service revenue (§5.2 items 2–9).
  - The standing "no credential exists; no certification language ships today" rule (§5.2 item 10).
  - A precondition record stating which preconditions are met/unmet (the deliverable itself).
- **Depends on:** evidence-labels-not-trust-scores, verification-checker, governance-and-stewardship, financial-transparency, red-lines-and-cautious-extensions.

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Meaningful-adoption metric
- **Question:** What counts as "meaningful real-world use" for precondition (a) (spec §10; digest "Open: adoption metric")?
- **Option (a):** adopt the public-adoption-dashboard metric (Programme 4, the data owner) verbatim as the definition — referenced, not redefined here
  - **For:** IMPLEMENTATION-PLAN §11 assigns the "meaningful adoption" metric to the dashboard (Programme 4, the data owner), and brainstorm decision 2 says it is "referenced, never redefined"; spec §5.2 item 1(a) makes "meaningful real-world adoption" the precondition.
  - **Against:** referencing an external metric means this doc's precondition inherits whatever the dashboard defines, so it cannot tailor the threshold to assurance-specific demand.
- **Option (b):** define an assurance-specific threshold locally in this document
  - **For:** a local threshold could be tuned to what assurance specifically needs (credential demand).
  - **Against:** brainstorm decision 2 explicitly forbids redefining the metric ("referenced, never redefined"), and a local threshold would diverge from the dashboard's single source of truth that gates every extension.
- **Option (c):** leave the metric undefined until the precondition is assessed
  - **For:** leaving it undefined defers the hardest question until the precondition is actually assessed.
  - **Against:** it leaves spec §10's open question ("the adoption metric that counts") and the digest's "adoption metric" item unresolved, so the precondition record cannot state whether (a) is met.
- **Recommended:** (a) — IMPLEMENTATION-PLAN §11 assigns the metric to the dashboard; referencing it once keeps a single source of truth for every gated extension.
- **Your choice:** ✏️

### D2 — Whether the programme should ever exist
- **Question:** Does this decision document assume the programme will exist (spec §10; digest "Open: whether it ever exists")?
- **Option (a):** record "not decided — a governed decision at gate time"; this document assumes nothing and does not pre-commit
  - **For:** spec §10 says "whether the programme should ever exist at all" is "a governed decision, not an assumption"; recording "not decided" keeps the decision doc neutral, matching the deferred framing (mini-plan Order: "ship only the decision doc and the precondition record").
  - **Against:** neutrality means the doc gives no forward signal, so a reader cannot tell whether the project leans toward or away from assurance.
- **Option (b):** record the programme as anticipated, to exist once preconditions are met
  - **For:** recording it as anticipated gives a clear forward path for the guardrails to be ready if the gate clears.
  - **Against:** it treats existence as the default, which contradicts §10's "not an assumption" and pre-commits the decision the spec reserves for governance.
- **Option (c):** record a permanent decision against any assurance programme
  - **For:** a permanent "against" closes the paywall-drift risk (RL-1/RL-4) entirely.
  - **Against:** §10 explicitly keeps existence an open governed decision, so a permanent "no" pre-empts that decision and forecloses the future option the spec carefully leaves open.
- **Recommended:** (a) — the spec §10 says existence is a governed decision, not an assumption; the decision doc must reflect that neutrality.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a policy/decision document (`docs/independent-assurance-and-certification.md`) — NOT a build plan and NOT any credential. No credential, badge, or certification language ships.
3. Record the three precondition gates: (a) meaningful adoption per the dashboard metric (per §2 D1); (b) the declaration, evidence-label, and checker specs stable; (c) an independent governance structure approved under governance-and-stewardship (spec §5.2 item 1).
4. Record the guardrails: a credential visually and verbally distinct from `+AI` (separate name/mark); the baseline mark's freedom and validity untouched (items 2–3); criteria versioned and assessed by independent parties with published assessor competence/conflicts/recusal (items 4–5); appeals and renewal published before any launch, with expiry dates and fresh assessments (item 6); bounded, disclosed liability stated on the credential (item 7); accessible pricing with fee waivers where payment never changes criteria/outcomes/evidence (item 8); governance separated from specification authority and service revenue, with funding disclosed (item 9).
5. Record the standing rule: until approved, the project must not issue, badge, or imply certification; evidence labels remain the only form of checking (item 10).
6. Publish the precondition record stating which of the three preconditions are met or unmet today (the deliverable itself).
7. Apply your §2 D2 posture to the document's framing (no assumption of existence).
8. Self-check against §5: no credential exists; preconditions recorded; credential distinct; the decision doc assumes nothing.

## 4. Constraints (must-nots)
- Not started before all three preconditions are recorded as met (spec §5.2 item 1) — this request produces only the decision doc and precondition record.
- The baseline mark's wording, freedom, and validity are untouched by the credential (item 2; RL-1/RL-4).
- Payment never changes criteria, outcomes, or recorded evidence (item 8).
- No credential, badge, or certification language in any shipped surface today (item 10).
- The programme's governance is separate from specification authority and service revenue (item 9).

## 5. Acceptance criteria
- [ ] No credential exists until all three preconditions are recorded as met.
- [ ] The baseline mark's wording, freedom, and validity are untouched by any proposal.
- [ ] Any future credential is visually and verbally distinct from `+AI`.
- [ ] Criteria are versioned and assessed by independent parties.
- [ ] Appeals and renewal rules precede launch.
- [ ] Pricing includes waivers and cannot change outcomes.
- [ ] Programme governance and funding are separate and disclosed.
- [ ] No certification language appears in any shipped surface today.

## 6. Outputs to produce in the repository
- `docs/independent-assurance-and-certification.md` — the policy/decision document: precondition gates, guardrails, and the precondition record (status: not yet met).

## 7. Read before building
- [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md) — mini-plan
- [`independent-assurance-and-certification-dsh.md`](../suggestions/independent-assurance-and-certification-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../planning/digest/04-artifacts-and-trust.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
