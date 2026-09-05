# Development task — moderation-disputes-and-appeals: Moderation, Disputes, and Appeals

> **Programme:** 08 · Safety and Operations — [`08-safety-and-operations.md`](../planning/programmes/08-safety-and-operations.md)
> **Source:** spec [`moderation-disputes-and-appeals-dsh.md`](../suggestions/moderation-disputes-and-appeals-dsh.md) · seed [`moderation-disputes-and-appeals.md`](../suggestions/moderation-disputes-and-appeals.md)
> **Effort:** M · **Phase:** P1 · **Position:** rules P1 (before the registry's hosted admission opens); queue tooling P2 with the registry; disputes extend the lifecycle's `disputed` state
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** How public submissions are admitted, moderated, disputed, and appealed — fair and legible, with published rules and named authority.
- **Why now / risk of deferring:** P1 gate — rules must be published and versioned before the registry's hosted admission opens, and before any rule is enforced. Risk of deferring: moderation scale — the human-review staffing plan must exist before hosted admission opens, or the queue opens without the reviewers the "human reviewer for consequential decisions" rule needs.
- **Features to deliver:**
  - Admission + prohibited-content rules (versioned, changelog-announced; ≥ six categories) on `docs/moderation-disputes-and-appeals.md` + `site/moderation.html`.
  - The six-status vocabulary (`pending`, `published`, `restricted`, `removed`, `restored`, `disputed`).
  - Moderation event record schema (spec §5.3).
  - Notice-and-action + evidence handling.
  - Appeals by a different reviewer.
  - Emergency restriction (`restricted` + mandatory review date).
  - Annual transparency report template + archive (`site/transparency/`).
- **Depends on:** declaration-lifecycle, opt-in-signatory-registry, public-directory, community-hub, contact-routes, governance-and-stewardship

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Response-time targets per category
- **Question:** What response-time targets are published per report category, given they depend on staffing reality?
- **Option (a):** publish the category framework with the acknowledgement immediate/automated and per-category targets marked "pending staffing", deferring the exact numbers until cost-discipline models moderation cost — and enforce the rule that no enforcement happens before targets are published
  - **For:** spec §10 defers targets "to be set with staffing reality (see cost discipline)", while spec §5.2.4 still requires targets published per category before enforcement; (a) publishes the framework now and fills numbers when staffing is planned.
  - **Against:** until staffing is planned the exact targets stay "pending", so response-time performance cannot yet be measured or reported (spec §5.2.10 transparency reports need response-time performance).
- **Option (b):** set concrete targets now for every category
  - **For:** gives reporters a concrete expectation immediately and enables transparency reporting (spec §5.2.10).
  - **Against:** spec §10 explicitly defers targets to staffing reality, and cost-discipline must model moderation cost first; setting numbers now promises a service level before modelling (cost-discipline §5.1.1).
- **Option (c):** publish one uniform target across all categories
  - **For:** simple — a single published number.
  - **Against:** spec §5.2.4 requires targets "per category", not one uniform target; a single target ignores that urgent safety categories need faster response.
- **Recommended:** (a) — spec §10 defers targets "to be set with staffing reality (see cost discipline)", but the must-not requires targets to be published before enforcement; publish the framework now and fill numbers when staffing is planned.
- **Your choice:** ✏️

### D2 — Reporter-anonymity carve-out
- **Question:** Does reporter anonymity need a jurisdiction-specific carve-out?
- **Option (a):** document anonymity as the default with a stated carve-out: anonymity yields only to a specific legal order in a jurisdiction that compels identification, and such disclosures are recorded and minimised
  - **For:** spec §10 asks about a jurisdiction-specific carve-out, and an absolute claim would be false under compulsory legal process, so (a) records the carve-out honestly — matching digest "Open: reporter anonymity carve-out".
  - **Against:** a carve-out acknowledges anonymity can be broken, which may deter some reporters even though the default protects them.
- **Option (b):** claim absolute anonymity with no carve-out
  - **For:** strongest privacy signal to reporters, with no ambiguity.
  - **Against:** false under compulsory legal process — spec §10 raises the jurisdiction question precisely because absolute anonymity cannot be guaranteed; the digest lists it as open.
- **Option (c):** defer the wording to legal review with no statement published
  - **For:** defers to legal review, avoiding publishing a claim before it is vetted.
  - **Against:** publishes no statement at all, leaving the acceptance criterion "reporter anonymity (D2) is recorded" unmet and the position undocumented.
- **Recommended:** (a) — spec §10 asks it; an absolute claim would be false under compulsory legal process, so record the carve-out honestly rather than omit it.
- **Your choice:** ✏️

### D3 — Registry self-service admission gate (rules-publication + human-review side; joint with opt-in-signatory-registry P4)
- **Question:** What moderation-side condition opens the registry's hosted self-service (non-human-reviewed) admission?
- **Option (a):** self-service opens only after these admission + prohibited-content rules are published and versioned AND a human-review staffing plan is approved; until then admission stays human-reviewed via PR/email (opt-in-signatory-registry's request already defers the numeric threshold to this condition)
  - **For:** matches the Sequencing gate "rules P1 before the registry's hosted admission opens" and the programme must-not "no rule enforced before it is published and versioned"; requiring a staffing plan first addresses the programme risk "moderation scale".
  - **Against:** adds a second condition (staffing plan approved) beyond rules publication, so self-service is gated on staffing that may lag behind the rules.
- **Option (b):** open self-service as soon as the rules are published, scaling human review later
  - **For:** opens self-service faster, unblocking the registry's growth.
  - **Against:** contradicts the must-not "every consequential decision has a human reviewer + recorded reason" — scaling human review later means consequential decisions could be automated without adequate staffing; the programme risk "moderation scale" says staffing must be planned before the queue opens.
- **Option (c):** keep human review indefinitely with no self-service ever
  - **For:** maximally safe — human review for every admission, forever.
  - **Against:** does not scale with the registry's growth (programme risk "moderation scale"), and the registry request already plans self-service, so (c) contradicts that joint plan.
- **Recommended:** (a) — matches the Sequencing gate ("rules P1 before the registry's hosted admission opens") and the registry request's own D2; moderation owns the rules-publication + human-review side, the registry owns the numeric threshold + release cadence.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, no silent change, declaration ≠ verification, privacy).
2. Publish `docs/moderation-disputes-and-appeals.md` and the public `site/moderation.html`: admission rules and prohibited-content categories (at minimum impersonation, illegal content, harassment, spam, malware distribution, privacy-violating material), versioned and changelog-announced before enforcement.
3. Publish the six-status vocabulary — `pending`, `published`, `restricted`, `removed`, `restored`, `disputed` — with definitions, and the moderation event record schema (spec §5.3: `caseId`, `submission`, `status`, `action`, `reason`, `reviewer` role, `at`, `appeal`).
4. Publish the notice-and-action process and evidence handling (preserve for review, limit access to reviewers, delete per privacy-and-data-minimisation retention), with response targets per D1.
5. State the reporter-anonymity carve-out per D2; publish the appeals route (decided by someone not involved in the original decision, outcome recorded and communicated) and the emergency-restriction rule (`restricted` + mandatory review date).
6. State the registry self-service gate per D3 (rules published/versioned AND human-review staffing plan approved; until then human-reviewed admission; joint with opt-in-signatory-registry).
7. Publish the annual transparency report template and archive structure at `site/transparency/` — counts by category and outcome, response-time performance, appeal outcomes, no naming individuals without consent; the first report lands when moderation activity begins.
8. Give the published rules and transparency reports a localisation path per the multi-language standard: rules are T1 (reviewed-only), transparency reports T2; English governs (R1), resolution order `?lang=` → saved preference → browser → English (R12), English crawler/no-JS default (R13).
9. Self-check against §5.

## 4. Constraints (must-nots)
- No rule enforced before it is published and versioned.
- Every consequential decision has a human reviewer + recorded reason; automation performs objective checks only.
- No payment changes a moderation outcome, priority, or queue position.
- Appeals are decided by someone not involved in the original decision.
- Harassment of reporters or subjects during a dispute is itself moderatable, with protections for both parties.
- In-flight cases are judged under the rules in force at submission, unless the change is a safety emergency.
- Cases close with a recorded outcome; reopened cases create new events, never rewrite history.

## 5. Acceptance criteria
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

## 6. Outputs to produce in the repository
- `docs/moderation-disputes-and-appeals.md` — the moderation policy (rules, vocabulary, notice-and-action, appeals, evidence, emergency restrictions).
- `site/moderation.html` — public rules page (versioned rules + status vocabulary + appeal route).
- `site/transparency/` — annual transparency report template + archive structure (first report when activity begins).

## 7. Read before building
- [`08-safety-and-operations.md`](../planning/programmes/08-safety-and-operations.md) — mini-plan
- [`moderation-disputes-and-appeals-dsh.md`](../suggestions/moderation-disputes-and-appeals-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
