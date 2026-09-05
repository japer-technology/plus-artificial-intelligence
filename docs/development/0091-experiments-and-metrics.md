# Development task — experiments-and-metrics: Experiments and Metrics

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md)
> **Source:** spec [`experiments-and-metrics-dsh.md`](../suggestions/experiments-and-metrics-dsh.md) · seed [`experiments-and-metrics.md`](../suggestions/experiments-and-metrics.md)
> **Effort:** M · **Phase:** P4 · **Position:** P4 — after the observatory and analytics catalogue define what measurement is even allowed
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Product experiments and outcome measurement (comprehension, trust, CTAs, maintenance burden, WTP, multilingual equivalence) without fingerprinting or only-wins.
- **Why now / risk of deferring:** It lands in P4, after the observatory and analytics catalogue define what measurement is even allowed. Deferring leaves measurement ungoverned — experiments could slide into continuous telemetry or only-wins publication.
- **Features to deliver:**
  - A study registration template + public registry (question, hypothesis, method, data sources, population, duration, success criteria — §5.2 item 1).
  - A consent/retention model (§5.2 item 3).
  - The ordered method preference (voluntary records → consented surveys → public artifacts → bounded observation; fingerprinting/cross-site tracking prohibited — §5.2 item 2).
  - The willingness-to-pay safeguard (never gates a free-floor feature — §5.2 item 4).
  - The multilingual-equivalence method (meaning, not wording, using translation statuses — §5.2 item 5).
  - Review-behaviour measurement without AI-use inference (§5.2 item 6).
  - Equal-prominence publication of negative/null findings (§5.2 item 7).
  - Versioned corrections (§5.2 item 8).
  - Open study artifacts (§5.2 item 11).
  - No rankings/scores of participants (RL-9 — §5.2 item 9).
- **Depends on:** privacy-respecting-analytics, research-observatory, pilots-and-case-studies, privacy-and-data-minimisation.

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Review body for study registrations
- **Question:** Who reviews study registrations before they run (spec §10; digest "Open: review body")?
- **Option (a):** an interim self-registration with a published checklist until governance-and-stewardship designates a research-review body
  - **For:** spec §10 asks for "the review body for study registrations (jointly with governance and stewardship)"; a checklist-gated interim keeps §5.2 item 1's register-before-start rule enforceable without stalling learning while governance forms the body.
  - **Against:** a self-registration checklist is a weaker control than an independent body, so the interim period could admit studies a later designated body would reject.
- **Option (b):** governance must designate the review body before any study runs (studies blocked meanwhile)
  - **For:** a governance-designated review body is the spec's stated direction (§10 "jointly with governance and stewardship") and the strongest quality control.
  - **Against:** it blocks all studies until the body exists, stalling the learning the mini-plan orders for P4 and leaving the registry empty.
- **Option (c):** no review — registration alone is sufficient
  - **For:** registration alone is simple and keeps the process moving.
  - **Against:** it ignores §10's open question and the digest's "review body" item, and removes the human-review control the spec's joint-governance framing implies.
- **Recommended:** (a) — the spec (jointly with governance) wants a review body, but blocking studies until one exists would stall learning; a checklist-gated interim keeps the registration-before-start rule enforceable now.
- **Your choice:** ✏️

### D2 — Third-party recruiters for survey panels
- **Question:** May survey panels use third-party recruiters, and under what privacy terms (spec §10; digest "Open: third-party recruiters")?
- **Option (a):** permitted only under a published privacy-terms template (data-minimisation, consent, no fingerprinting, per privacy-and-data-minimisation)
  - **For:** third-party recruiters are a practical route to the willingness-to-pay panels the spec names (§5.2 item 4); a published privacy-terms template keeps RL-5's no-fingerprinting rule and privacy-and-data-minimisation's data-handling rules binding.
  - **Against:** the template must actually be written and enforced, and any recruiter handling data introduces a third party the project must hold to its no-tracking rules.
- **Option (b):** prohibited — the project recruits its own panels only
  - **For:** self-recruited panels keep all data handling in-project, fully under the no-fingerprinting red line (RL-5) and privacy-and-data-minimisation.
  - **Against:** it forecloses a practical route to survey panels — §10's open question presumes recruiters may be possible — and limits sample reach.
- **Option (c):** deferred until privacy-and-data-minimisation defines the terms
  - **For:** deferring until privacy-and-data-minimisation defines the terms avoids premature policy.
  - **Against:** it blocks consented surveys now (the ordered method preference §5.2 item 2 includes them) and leaves the digest's "third-party recruiters" item unresolved.
- **Recommended:** (a) — recruiters are a practical route for willingness-to-pay panels; a published terms template keeps the no-fingerprinting red line intact.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish the study registration template + public registry (`docs/experiments-and-metrics/registration-template.md` + registry page): question, hypothesis, method, data sources, population, duration, and success criteria (spec §5.2 item 1).
3. Publish the consent/retention model: informed consent, storage per privacy-and-data-minimisation, deletion per the study's published retention schedule (item 3).
4. Record the ordered method preference — voluntary records, consented surveys, public artifacts, then bounded observation of aggregates — with fingerprinting and cross-site tracking prohibited (RL-5 — item 2).
5. Record the safeguards: willingness-to-pay studies never gate a free-floor feature and state answers don't change the floor (item 4); multilingual-equivalence studies test meaning, not wording, using translation statuses (item 5); review-behaviour studies never infer individual tool use (item 6); no rankings/scores/leaderboards (RL-9 — item 9); minors/vulnerable groups defer to child-safe education + specialist review (item 10).
6. Record the publication duties: methods with results, negative/null findings with equal prominence (item 7), versioned corrections (item 8), and open study artifacts where privacy permits (item 11).
7. Apply your §2 D1 (review body) and D2 (third-party recruiters).
8. Self-check against §5: registration before start; no fingerprinting; consent/retention; equal-prominence negatives; versioned corrections; open artifacts.

## 4. Constraints (must-nots)
- No fingerprinting or cross-site tracking (RL-5 — spec §5.2 item 2).
- Negative and null findings are published with the same prominence as positive ones (item 7).
- No rankings, scores, or leaderboards of participants (RL-9 — item 9).
- No willingness-to-pay study gating a free-floor feature (item 4).
- No unregistered results published as studies (item 1, §5.5).
- Corrections are versioned, never silent edits (item 8).

## 5. Acceptance criteria
- [ ] Every study is registered before it starts and the registration is public.
- [ ] No study uses fingerprinting or cross-site tracking.
- [ ] Participant data follows a published consent and retention model.
- [ ] A negative finding is published with the same prominence as a positive one.
- [ ] A willingness-to-pay study states that answers do not change the free floor.
- [ ] A multilingual-equivalence study reports meaning equivalence, not wording similarity alone.
- [ ] A correction to results is issued as a versioned correction.
- [ ] No study produces rankings or scores of participants.
- [ ] Study artifacts are published openly where privacy permits.

## 6. Outputs to produce in the repository
- `docs/experiments-and-metrics/registration-template.md` — study registration template.
- `docs/experiments-and-metrics/consent-and-retention.md` — consent/retention model.
- `site/experiments/` — the public study registry (registrations and published results), linked from changelog/RSS.

## 7. Read before building
- [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md) — mini-plan
- [`experiments-and-metrics-dsh.md`](../suggestions/experiments-and-metrics-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
