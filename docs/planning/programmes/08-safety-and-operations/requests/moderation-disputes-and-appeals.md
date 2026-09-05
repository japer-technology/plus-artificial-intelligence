# Agent request — moderation-disputes-and-appeals: Moderation, Disputes, and Appeals

> **Programme:** 08 · Safety and Operations — [`08-safety-and-operations.md`](../../08-safety-and-operations.md)
> **Source:** spec [`moderation-disputes-and-appeals-dsh.md`](../../../../suggestions/moderation-disputes-and-appeals-dsh.md) · seed [`moderation-disputes-and-appeals.md`](../../../../suggestions/moderation-disputes-and-appeals.md)
> **Effort:** M · **Phase:** P1 · **Position:** rules P1 (before the registry's hosted admission opens); queue tooling P2 with the registry; disputes extend the lifecycle's `disputed` state
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Response-time targets per category
- **Question:** What response-time targets are published per report category, given they depend on staffing reality?
- **Options:** (a) publish the category framework with the acknowledgement immediate/automated and per-category targets marked "pending staffing", deferring the exact numbers until cost-discipline models moderation cost — and enforce the rule that no enforcement happens before targets are published · (b) set concrete targets now for every category · (c) publish one uniform target across all categories
- **Recommended:** (a) — spec §10 defers targets "to be set with staffing reality (see cost discipline)", but the must-not requires targets to be published before enforcement; publish the framework now and fill numbers when staffing is planned.
- **Your choice:** ✏️

### D2 — Reporter-anonymity carve-out
- **Question:** Does reporter anonymity need a jurisdiction-specific carve-out?
- **Options:** (a) document anonymity as the default with a stated carve-out: anonymity yields only to a specific legal order in a jurisdiction that compels identification, and such disclosures are recorded and minimised · (b) claim absolute anonymity with no carve-out · (c) defer the wording to legal review with no statement published
- **Recommended:** (a) — spec §10 asks it; an absolute claim would be false under compulsory legal process, so record the carve-out honestly rather than omit it.
- **Your choice:** ✏️

### D3 — Registry self-service admission gate (rules-publication + human-review side; joint with opt-in-signatory-registry P4)
- **Question:** What moderation-side condition opens the registry's hosted self-service (non-human-reviewed) admission?
- **Options:** (a) self-service opens only after these admission + prohibited-content rules are published and versioned AND a human-review staffing plan is approved; until then admission stays human-reviewed via PR/email (opt-in-signatory-registry's request already defers the numeric threshold to this condition) · (b) open self-service as soon as the rules are published, scaling human review later · (c) keep human review indefinitely with no self-service ever
- **Recommended:** (a) — matches the Sequencing gate ("rules P1 before the registry's hosted admission opens") and the registry request's own D2; moderation owns the rules-publication + human-review side, the registry owns the numeric threshold + release cadence.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, no silent change, declaration ≠ verification, privacy).
2. Publish `docs/moderation-disputes-and-appeals.md` and the public `site/moderation.html`: admission rules and prohibited-content categories (at minimum impersonation, illegal content, harassment, spam, malware distribution, privacy-violating material), versioned and changelog-announced before enforcement.
3. Publish the six-status vocabulary — `pending`, `published`, `restricted`, `removed`, `restored`, `disputed` — with definitions, and the moderation event record schema (spec §5.3: `caseId`, `submission`, `status`, `action`, `reason`, `reviewer` role, `at`, `appeal`).
4. Publish the notice-and-action process and evidence handling (preserve for review, limit access to reviewers, delete per privacy-and-data-minimisation retention), with response targets per D1.
5. State the reporter-anonymity carve-out per D2; publish the appeals route (decided by someone not involved in the original decision, outcome recorded and communicated) and the emergency-restriction rule (`restricted` + mandatory review date).
6. State the registry self-service gate per D3 (rules published/versioned AND human-review staffing plan approved; until then human-reviewed admission; joint with opt-in-signatory-registry).
7. Publish the annual transparency report template and archive structure at `site/transparency/` — counts by category and outcome, response-time performance, appeal outcomes, no naming individuals without consent; the first report lands when moderation activity begins.
8. Give the published rules and transparency reports a localisation path per the multi-language standard: rules are T1 (reviewed-only), transparency reports T2; English governs (R1), resolution order `?lang=` → saved preference → browser → English (R12), English crawler/no-JS default (R13).
9. Self-check against §4.

## 3. Constraints (must-nots)
- No rule enforced before it is published and versioned.
- Every consequential decision has a human reviewer + recorded reason; automation performs objective checks only.
- No payment changes a moderation outcome, priority, or queue position.
- Appeals are decided by someone not involved in the original decision.
- Harassment of reporters or subjects during a dispute is itself moderatable, with protections for both parties.
- In-flight cases are judged under the rules in force at submission, unless the change is a safety emergency.
- Cases close with a recorded outcome; reopened cases create new events, never rewrite history.

## 4. Acceptance criteria
- [ ] No rule is enforced before it is published and versioned.
- [ ] Every consequential decision carries a human reviewer and a recorded reason.
- [ ] Every report receives an acknowledgement with a response target.
- [ ] An affected party can see every action on their submission and its reason.
- [ ] An appeal is decided by a different reviewer and the outcome is recorded.
- [ ] An emergency restriction carries a mandatory review date.
- [ ] A mistake is reversible and the reversal appears in transparency data.
- [ ] A transparency report is published at least annually with the required counts.
- [ ] No payment changes a moderation outcome.
- [ ] Response targets (D1), reporter anonymity (D2), and the registry self-service gate (D3) are recorded.

## 5. Outputs to produce in the repository
- `docs/moderation-disputes-and-appeals.md` — the moderation policy (rules, vocabulary, notice-and-action, appeals, evidence, emergency restrictions).
- `site/moderation.html` — public rules page (versioned rules + status vocabulary + appeal route).
- `site/transparency/` — annual transparency report template + archive structure (first report when activity begins).

## 6. Read before building
- [`08-safety-and-operations.md`](../../08-safety-and-operations.md) — mini-plan
- [`moderation-disputes-and-appeals-dsh.md`](../../../../suggestions/moderation-disputes-and-appeals-dsh.md) — full spec
- [`07-safety-operations-research.md`](../../../digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
