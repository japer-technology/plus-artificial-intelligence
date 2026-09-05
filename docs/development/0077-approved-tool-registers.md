# Development task — approved-tool-registers: Approved-Tool Registers

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../planning/programmes/07-hosted-identity-org-services.md)
> **Source:** spec [`approved-tool-registers-dsh.md`](../suggestions/approved-tool-registers-dsh.md) · seed [`approved-tool-registers.md`](../suggestions/approved-tool-registers.md)
> **Effort:** M · **Phase:** P3 · **Position:** schema early (it's free-floor-readable); workspace authoring with workspaces; public snapshot with org profiles
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Organisation's internal policy record of approved AI capabilities, purposes, data rules, owner, review date, retired policies — "approved" as an inspectable statement.
- **Why now / risk of deferring:** The schema is free-floor-readable, so it is authored early, with workspace authoring and the public snapshot following (mini-plan Order). Deferring risks the "approved" label reading as use or endorsement, which the never-`used-on-artifact` rule and the no-ranking must-not guard (brainstorm).
- **Features to deliver:**
  - Approval-register JSON schema (§5.3) usable offline and `file://`-safe with no account.
  - Each approval entry recording subject (tool-taxonomy identifier where one exists), permitted purposes, data rules, owner, review date, `active|retired` status, `authorisedBy`/`authorisedAt`, and the `approved` claim with a policy reference — never `used-on-artifact`.
  - First-class exceptions (identifier, description, owner, expiry/review date, justification category, never silently extended) and acknowledgements (party, policy version, date, never read as use).
  - Organisation-only default with role-based authoring inherited from organisation workspaces.
  - Redacted dated public snapshot (omits security-posture fields, labels every field self-declared).
  - Past-due review detection via machine-comparable review dates.
  - Retired policies retained as history (retirement is a status change, never deletion).
  - No ranking or endorsement of approved tools.
- **Depends on:** claim-types, ai-practice-register, tool-taxonomy, organisation-profiles-and-policies, evidence-labels-not-trust-scores

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Retention schedule for entries and acknowledgements
- **Question:** What retention schedule governs register entries and acknowledgements?
- **Option (a):** retired entries retained permanently as append-only history; active entries and acknowledgements follow privacy-and-data-minimisation's schedule, overridable to stricter by the organisation
  - **For:** Spec §5.2.8 mandates retired-policy history retention (retirement is a status change, never deletion), and spec §5.2.9 defers active-record and acknowledgement schedules to privacy-and-data-minimisation, so this option matches both.
  - **Against:** Leaves the active-entry and acknowledgement windows still undefined here, so the register must defer those numbers to a sibling spec rather than ship a fully self-contained schedule.
- **Option (b):** a single fixed default window for all records (e.g. 7 years)
  - **For:** One concrete number is simple to implement and state in the register's `retentionSchedule`.
  - **Against:** Spec §5.2.8 requires retired policies to be retained, not deleted on a fixed window, so a single window would wrongly delete retired history; spec §10 also says the schedule should be set with the privacy and compliance siblings, not invented here.
- **Option (c):** leave the schedule field "TBD" until privacy-and-data-minimisation settles, publishing nothing firm
  - **For:** Avoids publishing a wrong number before the owner spec settles.
  - **Against:** Spec §5.2.9 requires the register to *state* a retention schedule (not "TBD"), so publishing nothing firm violates the normative MUST and leaves removal ad hoc.
- **Recommended:** (a) — §5.2.8 mandates retired-policy history retention; the rest defers to the privacy/compliance siblings (spec §10).
- **Your choice:** ✏️

### D2 — Embed vs reference policy text
- **Question:** Does an approval entry embed the full policy text or reference the organisation's policy version by pointer?
- **Option (a):** reference by pointer (`policyRef` to the organisation's versioned policy owned by organisation-profiles-and-policies)
  - **For:** The policy is owned and versioned by organisation-profiles-and-policies (spec §5.2.3's `policyRef`, spec §7), so a pointer keeps one versioned source and avoids drift; the register's own data model already carries `claim.policyRef`.
  - **Against:** A pointer means an offline register is only complete if the policy document is also available, so a reader cannot see the policy text from the register alone.
- **Option (b):** embed the full policy text in each entry
  - **For:** Self-contained: an offline reader sees the exact policy text without chasing a reference.
  - **Against:** Duplicates a versioned source owned by organisation-profiles-and-policies, so the register can drift from the canonical policy; spec §5.2.3 models the claim with a `policyRef`, not embedded text.
- **Option (c):** embed a policy summary plus the pointer
  - **For:** Gives offline readers context while still pointing to the canonical version.
  - **Against:** A summary is not the policy and could misstate it; it still duplicates content that organisation-profiles-and-policies owns, and spec §5.2.3 only requires the pointer.
- **Recommended:** (a) — the policy is owned and versioned by organisation-profiles-and-policies; embedding duplicates a versioned source (drift risk).
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Publish `docs/services/approved-tool-registers-schema.json` — the register JSON Schema from spec §5.3 (register-level id/organisation/policyVersion/visibility plus entries with subject, `approved` claim + policyRef per D2, permittedPurposes, dataRules, owner, authorisedBy/At, reviewDate, `active|retired` status, exceptions, acknowledgements, optional procurementRef).
3. Write `scripts/validate-approved-tool-register.mjs` — an offline, account-free validator enforcing: valid JSON, owner + review date + permitted purposes + data rules + status on every entry, exceptions carrying owner and expiry, acknowledgements carrying party + policy version + date, and the register carrying a stated retention schedule (per D1).
4. Enforce the claim boundary: entries carry the `approved` claim only, never `used-on-artifact`; the register records who authorised each entry and when, without itself asserting organisational authority (owned by organisation-profiles-and-policies and proofs-of-control).
5. Specify organisation-only default visibility and role-based authoring inherited from organisation workspaces; before workspaces exist the register defaults to organisation-only and is never publicly indexed.
6. Specify the redacted dated public snapshot: omits security-posture fields while disclosing policy intent, labels every field self-declared, and renders as a snapshot with a stated publication date, never a live internal view.
7. Specify past-due review detection (machine-comparable review dates; reminder delivery deferred to workflow-automation-services) and retired-policy retention (retirement is a status change, never deletion).
8. Write `docs/services/approved-tool-registers.md` — register design plus the Programme 8 gates (static-first failure-mode statement, threat model, privacy analysis, and per-record cost model) for the hosted/snapshot layer; state the retention schedule per D1 and the policy-reference choice per D2.
9. Give the public-snapshot chrome a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13); register content (subjects, purposes, data rules) is T4 and never machine-translated.
10. Self-check against §5: validate a sample register offline and confirm each criterion.

## 4. Constraints (must-nots)
- Approvals never carry `used-on-artifact`; the register never asserts organisational authority itself.
- Default organisation-only, never publicly indexed; publication is a separate, explicit, consented choice.
- No ranking, ordering, or endorsement of approved tools (red line against paid placement).
- Retired policies retained as history, never silently deleted; removal follows the stated schedule, never ad hoc.
- The register format stays free-floor: authoring and reading a local copy never require payment or an account.
- Public snapshots omit security-posture fields; snapshot chrome follows the multi-language standard (R1/R4/R12/R13), content is T4.

## 5. Acceptance criteria
- [ ] A local register validates offline with no account.
- [ ] Every entry carries an owner, a review date, permitted purposes, data rules, and a status.
- [ ] A register defaults to organisation-only and is not publicly indexed.
- [ ] A public register is a redacted, dated snapshot that omits security-posture fields.
- [ ] An exception without an owner or expiry is rejected.
- [ ] A retired policy remains readable with its retirement date.
- [ ] A register never renders `used-on-artifact` for an approval entry.
- [ ] Past-due review dates are machine-detectable.
- [ ] No surface ranks or endorses the tools an organisation approves.
- [ ] The failure-mode statement, threat model, privacy analysis, and cost model are published for the hosted/snapshot layer.

## 6. Outputs to produce in the repository
- `docs/services/approved-tool-registers-schema.json` — register JSON Schema (offline, file://-safe).
- `scripts/validate-approved-tool-register.mjs` — offline validator.
- `docs/services/approved-tool-registers.md` — register design + redaction rules + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 7. Read before building
- [`07-hosted-identity-org-services.md`](../planning/programmes/07-hosted-identity-org-services.md) — mini-plan
- [`approved-tool-registers-dsh.md`](../suggestions/approved-tool-registers-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../planning/digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; snapshot chrome R1/R4/R12/R13, register content T4)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
