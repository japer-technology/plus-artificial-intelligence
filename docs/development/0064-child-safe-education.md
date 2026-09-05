# Development task — child-safe-education: Child-Safe Education

> **Programme:** 08 · Safety and Operations — [`08-safety-and-operations.md`](../planning/programmes/08-safety-and-operations.md)
> **Source:** spec [`child-safe-education-dsh.md`](../suggestions/child-safe-education-dsh.md) · seed [`child-safe-education.md`](../suggestions/child-safe-education.md)
> **Effort:** M · **Phase:** P2 · **Position:** P2 — materials first (they are useful even pre-services); template flows with workspaces P3
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** How +AI is taught in schools with minors — reflection, disclosure, responsibility — without public student profiles or legal-waiver framing.
- **Why now / risk of deferring:** P2 — materials first, since they are useful even pre-services; template flows follow with workspaces at P3. Risk of deferring: child-safety gap — materials need specialist review the project may not have, and the spec's own rule (spec §5.2.1) requires shipping only after review, not before.
- **Features to deliver:**
  - `site/education.html` + `site/education/` materials — classroom guidance and teacher/guardian materials teaching reflection, disclosure, responsibility.
  - Private school templates with `organisation-only` scope.
  - Local-first student flows (offline, local-file save, no upload).
  - Specialist review record per release.
  - Jurisdiction notes (age thresholds, guardian consent, gaps disclosed).
  - No-account reporting route documented in student-facing materials.
- **Depends on:** visibility-and-consent, privacy-and-data-minimisation, accessibility-floor, pilots-and-case-studies, organisation-workspaces

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Age-threshold table per jurisdiction
- **Question:** What age-threshold table ships, given specialist input is pending?
- **Option (a):** publish jurisdiction notes naming the known thresholds per major jurisdiction and explicitly marking those not yet confirmed as "pending specialist review" — gaps disclosed, never glossed — and no material ships without the review record
  - **For:** spec §5.2.8 requires jurisdiction gaps "disclosed rather than glossed", §5.2.1 requires specialist review before publication, and §10 defers the exact table to specialists; a partial table with disclosed gaps honours all three. Digest "Open: age-threshold table".
  - **Against:** ships a deliberately incomplete table, so some jurisdictions stay marked "pending" until specialists confirm them.
- **Option (b):** ship a completed age-threshold table for all jurisdictions now
  - **For:** a complete table is immediately available for all jurisdictions.
  - **Against:** spec §10 says the exact table is "pending specialist input", and §5.2.1 requires specialist review before publication — a complete table now would skip that review.
- **Option (c):** omit age thresholds entirely until specialists deliver a full table
  - **For:** avoids publishing any unconfirmed age data.
  - **Against:** fails spec §5.2.8's requirement that jurisdiction obligations (age thresholds) be "addressed per jurisdiction ... gaps disclosed"; omitting entirely means no gap is disclosed, contradicting the acceptance criterion "jurisdiction notes cover age thresholds and disclose gaps (D1)".
- **Recommended:** (a) — spec §10 defers the exact table to specialists, spec §5.2.1 requires specialist review before publication, and §5.2.8 requires gaps disclosed rather than glossed; a partial table with disclosed gaps honours all three.
- **Your choice:** ✏️

### D2 — Guardian-consent record location
- **Question:** Where are guardian-consent records held — schools only, or also hosted services?
- **Option (a):** schools hold guardian-consent records by default; hosted services hold them only when they operate institution templates, and then only the minimum needed with a documented purpose (a privacy analysis)
  - **For:** spec §10 asks where records are held; defaulting to school-held minimises project-held minor data (privacy-and-data-minimisation §5.2.2 collection minimisation), while acknowledging hosted institution templates may need a minimal, purpose-documented record. Digest "Open: guardian consent location".
  - **Against:** splits the consent record across schools and (minimally) hosted services, which is more complex than a single location.
- **Option (b):** hosted services always hold consent records
  - **For:** centralises consent records where the templates live, simplifying hosted institution-template operation.
  - **Against:** maximises project-held minor data, contradicting privacy-and-data-minimisation's collection-minimisation principle; §10's "schools only" default is the safer baseline.
- **Option (c):** schools only, hosted services never hold them
  - **For:** simplest and safest — the project holds no consent records at all.
  - **Against:** fails the hosted institution-template case spec §10 explicitly raises ("or also by hosted services when institution templates are used there"); a blanket "never" ignores that scenario.
- **Recommended:** (a) — spec §10 asks it; defaulting to school-held minimises project-held minor data (privacy-and-data-minimisation), while acknowledging hosted institution templates may need a minimal, purpose-documented record.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, privacy, accessibility, no silent change).
2. Publish `site/education.html` and `site/education/` materials: classroom guidance and teacher/guardian materials teaching reflection, disclosure, and responsibility, stating plainly that +AI is not a legal waiver, a grade, or a requirement.
3. Record the specialist review on each release (review date + reviewer roles) — nothing ships for minors without it (spec §5.2.1).
4. Publish private school templates with `organisation-only` scope (resolvable only by the school's granted roles; absent from directories and search indexes).
5. Define local-first student flows: the core classroom exercise completes offline, saving produces a local file (never an upload), and no account is required.
6. Publish jurisdiction notes per D1 (age thresholds + guardian consent per jurisdiction; gaps disclosed, never glossed).
7. State the guardian-consent record location per D2 (schools by default; hosted services only minimal + purpose-documented when operating institution templates).
8. Document the no-account reporting route in student-facing materials (contact-routes) and the escalation guidance for teacher-facing material.
9. Give classroom materials a localisation path per the multi-language standard (T2): English source of truth (R1), resolution order `?lang=` → saved preference → browser → English (R12), English crawler/no-JS default (R13); materials must meet the accessibility floor in the classroom's languages.
10. Self-check against §5.

## 4. Constraints (must-nots)
- Student records never default beyond `local`.
- No profiling, scoring, ranking, or gamified exposure of students; no leaderboards.
- No account required for the core classroom exercise.
- School templates are `organisation-only` in scope and must not appear in directories or search indexes.
- No advertising or vendor content in student-facing materials (RL-4).
- The mark is never presented as a legal waiver, a grade, or a requirement.
- Nothing ships for minors without a recorded specialist review (the spec's own rule).
- Student exercise data retention follows the school's policy and must not exceed the school year's need unless law requires otherwise.

## 5. Acceptance criteria
- [ ] Every materials release carries a specialist review record.
- [ ] No student record defaults to anything but `local`.
- [ ] School templates are organisation-only and absent from directories.
- [ ] No material scores, ranks, or profiles students.
- [ ] The core classroom exercise completes with no account and no upload.
- [ ] Materials state plainly that +AI is not a legal waiver.
- [ ] A no-account reporting route is documented in student-facing materials.
- [ ] Jurisdiction notes cover age thresholds and disclose gaps (D1).
- [ ] Materials meet the accessibility floor in the classroom's languages.
- [ ] The guardian-consent record location is recorded (D2).

## 6. Outputs to produce in the repository
- `site/education.html` — the education hub (classroom guidance + teacher/guardian materials + reporting route).
- `site/education/` — classroom guidance, teacher/guardian materials, private school templates (organisation-only), and jurisdiction notes, each versioned with a specialist review record.

## 7. Read before building
- [`08-safety-and-operations.md`](../planning/programmes/08-safety-and-operations.md) — mini-plan
- [`child-safe-education-dsh.md`](../suggestions/child-safe-education-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
