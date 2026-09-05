# Agent request — organisation-workspaces: Organisation Workspaces

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md)
> **Source:** spec [`organisation-workspaces-dsh.md`](../../../../suggestions/organisation-workspaces-dsh.md) · seed [`organisation-workspaces.md`](../../../../suggestions/organisation-workspaces.md)
> **Effort:** L · **Phase:** P3 · **Position:** after org profiles; the heaviest build here
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — SSO/SCIM assessment and launch scope
- **Question:** When does SSO/SCIM ship relative to the workspace service?
- **Options:** (a) ship workspaces without SSO/SCIM; publish the "identity integrations" watchlist assessment as a prerequisite before any SSO/SCIM is enabled later · (b) publish the assessment in this request and enable SSO/SCIM at launch · (c) defer SSO/SCIM indefinitely (never offer)
- **Recommended:** (a) — spec §5.2.10 gates SSO/SCIM on a published assessment owned by red-lines-and-cautious-extensions; the assessment must precede the feature, not block the workspace itself.
- **Your choice:** ✏️

### D2 — Initial per-role permission set
- **Question:** What is the initial role/permission set before pilot demand is measured?
- **Options:** (a) a minimal pilot-derived set now (e.g. owner, editor, reviewer, viewer) with a documented extension path · (b) defer entirely until pilot evidence arrives; ship with a single owner role · (c) a full RBAC matrix now
- **Recommended:** (a) — spec §10 says the exact set is "derived from pilot demand"; ship a minimal set with an extension path rather than a full matrix or nothing.
- **Your choice:** ✏️

### D3 — Ship before vs after managed hosting
- **Question:** Does the workspace service ship before managed-hosting-and-domains exists, or depend on it?
- **Options:** (a) ship workspaces before managed hosting — the workspace implements isolation/roles/approvals itself under static-first failure-mode rules; managed hosting later owns backup/domain operational layers · (b) depend on managed-hosting-and-domains (Programme 9) as a prerequisite · (c) ship a pilot-only workspace first, defer full launch until managed hosting exists
- **Recommended:** (a) — spec §4.2 defers hosting/backups/domains but the workspace service itself (isolation, roles, approvals, audit) is self-contained under static-first-service-architecture; blocking on Programme 9 would delay the heaviest P3 build.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Design the workspace service with absolute tenant isolation (one organisation's data and roles never reachable from another, demonstrated in the threat model); document the data model (workspaceId, organisation, tenant boundary, roles, members with joined/left dates, approvalFlows, acknowledgements, retentionSchedule, legalHolds, append-only auditLog).
3. Specify server-side roles and permissions per D2: enforced server-side, taking effect immediately, revoking active sessions on change; workspace roles grant access within the organisation only and are never presented as legal authority to represent it (owned by organisation-profiles-and-policies and proofs-of-control).
4. Specify approval queues and publication flows, with a named human signer's own acceptance always required for publication (organisation policy never replaces the signer).
5. Specify the consolidated append-only audit log (actor, action, date for every consequential action) and free exports of records, registers, and consolidated history in portable formats.
6. Specify offboarding as a single action removing access immediately while past actions stay attributed and personal declarations stay the person's own.
7. Specify deletion cascading to backups/derived indexes within the privacy-and-data-minimisation window, and legal holds using declaration-lifecycle `legal-hold`/`hold-released` events.
8. Specify SSO/SCIM per D1: optional, non-biometric, and shipping only after the published "identity integrations" watchlist assessment.
9. Write `docs/services/organisation-workspaces.md` including the Programme 8 gates: static-first failure-mode statement (service stops → published records readable, every member can export, free path complete, notice period stated), threat model, privacy analysis, and per-record cost model; require real-organisation pilot evidence before building as a paid service, and a demonstrated degraded mode.
10. Give the private admin/manage UI chrome a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13); member/register content is T4 and never machine-translated.
11. Self-check against §4: confirm each criterion, including the isolation demonstration and the free-path completeness.

## 3. Constraints (must-nots)
- Workspaces optional — never a prerequisite for declaration validity; the no-account path covers every core capability (declaration, practice register, approved-tool register, policy acknowledgement).
- A named human signer's acceptance always required; organisation policy never replaces the signer.
- Absolute tenant isolation — no tenant may read another's data; demonstrated in the threat model, not asserted.
- SSO/SCIM optional and non-biometric, shipping only after a published identity-integrations assessment.
- Workspace roles never presented as legal authority to represent the organisation.
- Offboarding removes access immediately while keeping attribution and personal declarations.
- Private admin UI chrome follows the multi-language standard (R1/R4/R12/R13); content is T4.

## 4. Acceptance criteria
- [ ] Every core capability is completable on the free no-account path without a workspace.
- [ ] A declaration published from a workspace carries a named human signer who accepted it.
- [ ] No tenant can read another tenant's data, demonstrated in the threat model.
- [ ] A role change revokes active sessions immediately.
- [ ] Offboarding removes access immediately while keeping attribution and the person's own declarations.
- [ ] A full export includes records, registers, and the consolidated history, free of charge.
- [ ] A legal hold pauses deletion until a recorded release event.
- [ ] SSO/SCIM is optional and ships only after a published identity-integrations assessment.
- [ ] Every workspace role meets the accessibility floor.
- [ ] The workspace publishes a failure-mode statement and a demonstrated degraded mode.
- [ ] Pilot evidence of real organisational demand exists before the paid build.

## 5. Outputs to produce in the repository
- `docs/services/organisation-workspaces.md` — workspace service design (tenant isolation, roles/approvals, audit, exports, offboarding, legal holds, SSO/SCIM gate) + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 6. Read before building
- [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md) — mini-plan
- [`organisation-workspaces-dsh.md`](../../../../suggestions/organisation-workspaces-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../../../digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; admin/manage UI chrome R1/R4/R12/R13, content T4)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
