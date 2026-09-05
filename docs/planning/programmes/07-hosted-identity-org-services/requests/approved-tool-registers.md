# Agent request — approved-tool-registers: Approved-Tool Registers

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md)
> **Source:** spec [`approved-tool-registers-dsh.md`](../../../../suggestions/approved-tool-registers-dsh.md) · seed [`approved-tool-registers.md`](../../../../suggestions/approved-tool-registers.md)
> **Effort:** M · **Phase:** P3 · **Position:** schema early (it's free-floor-readable); workspace authoring with workspaces; public snapshot with org profiles
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Retention schedule for entries and acknowledgements
- **Question:** What retention schedule governs register entries and acknowledgements?
- **Options:** (a) retired entries retained permanently as append-only history; active entries and acknowledgements follow privacy-and-data-minimisation's schedule, overridable to stricter by the organisation · (b) a single fixed default window for all records (e.g. 7 years) · (c) leave the schedule field "TBD" until privacy-and-data-minimisation settles, publishing nothing firm
- **Recommended:** (a) — §5.2.8 mandates retired-policy history retention; the rest defers to the privacy/compliance siblings (spec §10).
- **Your choice:** ✏️

### D2 — Embed vs reference policy text
- **Question:** Does an approval entry embed the full policy text or reference the organisation's policy version by pointer?
- **Options:** (a) reference by pointer (`policyRef` to the organisation's versioned policy owned by organisation-profiles-and-policies) · (b) embed the full policy text in each entry · (c) embed a policy summary plus the pointer
- **Recommended:** (a) — the policy is owned and versioned by organisation-profiles-and-policies; embedding duplicates a versioned source (drift risk).
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Publish `docs/services/approved-tool-registers-schema.json` — the register JSON Schema from spec §5.3 (register-level id/organisation/policyVersion/visibility plus entries with subject, `approved` claim + policyRef per D2, permittedPurposes, dataRules, owner, authorisedBy/At, reviewDate, `active|retired` status, exceptions, acknowledgements, optional procurementRef).
3. Write `scripts/validate-approved-tool-register.mjs` — an offline, account-free validator enforcing: valid JSON, owner + review date + permitted purposes + data rules + status on every entry, exceptions carrying owner and expiry, acknowledgements carrying party + policy version + date, and the register carrying a stated retention schedule (per D1).
4. Enforce the claim boundary: entries carry the `approved` claim only, never `used-on-artifact`; the register records who authorised each entry and when, without itself asserting organisational authority (owned by organisation-profiles-and-policies and proofs-of-control).
5. Specify organisation-only default visibility and role-based authoring inherited from organisation workspaces; before workspaces exist the register defaults to organisation-only and is never publicly indexed.
6. Specify the redacted dated public snapshot: omits security-posture fields while disclosing policy intent, labels every field self-declared, and renders as a snapshot with a stated publication date, never a live internal view.
7. Specify past-due review detection (machine-comparable review dates; reminder delivery deferred to workflow-automation-services) and retired-policy retention (retirement is a status change, never deletion).
8. Write `docs/services/approved-tool-registers.md` — register design plus the Programme 8 gates (static-first failure-mode statement, threat model, privacy analysis, and per-record cost model) for the hosted/snapshot layer; state the retention schedule per D1 and the policy-reference choice per D2.
9. Give the public-snapshot chrome a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13); register content (subjects, purposes, data rules) is T4 and never machine-translated.
10. Self-check against §4: validate a sample register offline and confirm each criterion.

## 3. Constraints (must-nots)
- Approvals never carry `used-on-artifact`; the register never asserts organisational authority itself.
- Default organisation-only, never publicly indexed; publication is a separate, explicit, consented choice.
- No ranking, ordering, or endorsement of approved tools (red line against paid placement).
- Retired policies retained as history, never silently deleted; removal follows the stated schedule, never ad hoc.
- The register format stays free-floor: authoring and reading a local copy never require payment or an account.
- Public snapshots omit security-posture fields; snapshot chrome follows the multi-language standard (R1/R4/R12/R13), content is T4.

## 4. Acceptance criteria
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

## 5. Outputs to produce in the repository
- `docs/services/approved-tool-registers-schema.json` — register JSON Schema (offline, file://-safe).
- `scripts/validate-approved-tool-register.mjs` — offline validator.
- `docs/services/approved-tool-registers.md` — register design + redaction rules + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 6. Read before building
- [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md) — mini-plan
- [`approved-tool-registers-dsh.md`](../../../../suggestions/approved-tool-registers-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../../../digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; snapshot chrome R1/R4/R12/R13, register content T4)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
