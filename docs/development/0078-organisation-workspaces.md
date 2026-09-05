# Development task — organisation-workspaces: Organisation Workspaces

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../planning/programmes/07-hosted-identity-org-services.md)
> **Source:** spec [`organisation-workspaces-dsh.md`](../suggestions/organisation-workspaces-dsh.md) · seed [`organisation-workspaces.md`](../suggestions/organisation-workspaces.md)
> **Effort:** L · **Phase:** P3 · **Position:** after org profiles; the heaviest build here
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Optional private workspaces: teams, delegated roles, approvals, publication flows, SSO/SCIM, registers, retention, legal holds, audit history.
- **Why now / risk of deferring:** Ships after organisation profiles and is the heaviest build in the programme (mini-plan Order). Deferring risks the absolute tenant-isolation requirement being under-built — it must be demonstrated in the threat model, not asserted — and workspaces becoming a declaration-validity prerequisite (programme risk "Tenant isolation"; brainstorm).
- **Features to deliver:**
  - Workspace service with absolute tenant isolation (demonstrated in the threat model), server-side roles/permissions with immediate effect and session revocation, approval queues, and a consolidated append-only audit log (actor, action, date, exportable).
  - Free exports of records, registers, and consolidated history in portable formats.
  - Single-action offboarding (immediate access removal, past actions attributed, personal declarations never owned).
  - Legal holds via declaration-lifecycle events.
  - SSO/SCIM optional, assessment-gated, and non-biometric.
  - Published static-first failure-mode statement and demonstrated degraded mode.
  - Privacy analysis and threat model plus real-organisation pilot evidence before building as a paid service.
  - The free no-account path covering every core capability (declaration, practice register, approved-tool register, policy acknowledgement).
- **Depends on:** static-first-service-architecture, organisation-profiles-and-policies, approved-tool-registers, visibility-and-consent, declaration-lifecycle, privacy-and-data-minimisation, security-and-abuse-controls

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — SSO/SCIM assessment and launch scope
- **Question:** When does SSO/SCIM ship relative to the workspace service?
- **Option (a):** ship workspaces without SSO/SCIM; publish the "identity integrations" watchlist assessment as a prerequisite before any SSO/SCIM is enabled later
  - **For:** Spec §5.2.10 gates SSO/SCIM on a published assessment owned by red-lines-and-cautious-extensions, and that assessment is not yet published (digest 00 "Watchlist assessments outstanding"), so shipping workspaces first keeps the core service unblocked while respecting the gate.
  - **Against:** Organisations wanting SSO/SCIM at launch get nothing until the assessment is published later, so the feature is deferred rather than delivered.
- **Option (b):** publish the assessment in this request and enable SSO/SCIM at launch
  - **For:** Delivers SSO/SCIM to launch customers immediately.
  - **Against:** The "identity integrations" assessment is owned by red-lines-and-cautious-extensions (spec §5.2.10, programme-level decision 4), not this workspace request, so publishing it here would cross an ownership boundary and ship a watchlist-adjacent feature before its independent gate.
- **Option (c):** defer SSO/SCIM indefinitely (never offer)
  - **For:** Eliminates the SSO/SCIM surface entirely.
  - **Against:** Spec §5.2.10 says SSO/SCIM "MAY be offered only after a published assessment" — it is optional but permitted — so "never" forecloses a legitimate convenience the spec allows.
- **Recommended:** (a) — spec §5.2.10 gates SSO/SCIM on a published assessment owned by red-lines-and-cautious-extensions; the assessment must precede the feature, not block the workspace itself.
- **Your choice:** ✏️

### D2 — Initial per-role permission set
- **Question:** What is the initial role/permission set before pilot demand is measured?
- **Option (a):** a minimal pilot-derived set now (e.g. owner, editor, reviewer, viewer) with a documented extension path
  - **For:** Spec §10 says the exact set is "derived from pilot demand", so a minimal set with an extension path ships something usable without over-building; it matches the digest 06 "Open: per-role permissions" item's anticipation of a pilot-derived set.
  - **Against:** The minimal set is provisional and will need rework once real pilot demand is measured, so it is not final.
- **Option (b):** defer entirely until pilot evidence arrives; ship with a single owner role
  - **For:** Fully honours "derived from pilot demand" by not inventing roles before evidence exists.
  - **Against:** A single owner role cannot express the approval-queue and sign-off structure spec §5.2.4 and §5.2.9 require (approval flows, audit actor/action), so the workspace would ship under-featured.
- **Option (c):** a full RBAC matrix now
  - **For:** A complete permission model from day one.
  - **Against:** Spec §10 explicitly says the set should be derived from pilot demand, so a full matrix now over-builds a model with no demand evidence and will likely be revised.
- **Recommended:** (a) — spec §10 says the exact set is "derived from pilot demand"; ship a minimal set with an extension path rather than a full matrix or nothing.
- **Your choice:** ✏️

### D3 — Ship before vs after managed hosting
- **Question:** Does the workspace service ship before managed-hosting-and-domains exists, or depend on it?
- **Option (a):** ship workspaces before managed hosting — the workspace implements isolation/roles/approvals itself under static-first failure-mode rules; managed hosting later owns backup/domain operational layers
  - **For:** Spec §4.2 defers hosting/backups/domains to managed-hosting-and-domains, while the workspace service itself (isolation, roles, approvals, audit) is self-contained under static-first-service-architecture (spec §5.2.12), so nothing in the workspace requires Programme 9 first.
  - **Against:** Shipping without managed hosting means backup/domain operational layers are absent at first, so the workspace must state its own failure-mode and degraded-mode behaviour explicitly (spec §5.2.12).
- **Option (b):** depend on managed-hosting-and-domains (Programme 9) as a prerequisite
  - **For:** Hosting/backups/domains would be in place before the workspace launches.
  - **Against:** Spec §4.2 defers those layers *out* of the workspace's scope rather than requiring them, so blocking on Programme 9 would delay the heaviest P3 build for a layer the spec says is not the workspace's concern.
- **Option (c):** ship a pilot-only workspace first, defer full launch until managed hosting exists
  - **For:** Limits exposure to a pilot before committing to a full launch.
  - **Against:** Splits the launch into two phases without a spec basis — spec §4.2 and §5.2.12 treat the workspace as self-contained and only require pilot evidence, not managed hosting, before the paid build.
- **Recommended:** (a) — spec §4.2 defers hosting/backups/domains but the workspace service itself (isolation, roles, approvals, audit) is self-contained under static-first-service-architecture; blocking on Programme 9 would delay the heaviest P3 build.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

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
11. Self-check against §5: confirm each criterion, including the isolation demonstration and the free-path completeness.

## 4. Constraints (must-nots)
- Workspaces optional — never a prerequisite for declaration validity; the no-account path covers every core capability (declaration, practice register, approved-tool register, policy acknowledgement).
- A named human signer's acceptance always required; organisation policy never replaces the signer.
- Absolute tenant isolation — no tenant may read another's data; demonstrated in the threat model, not asserted.
- SSO/SCIM optional and non-biometric, shipping only after a published identity-integrations assessment.
- Workspace roles never presented as legal authority to represent the organisation.
- Offboarding removes access immediately while keeping attribution and personal declarations.
- Private admin UI chrome follows the multi-language standard (R1/R4/R12/R13); content is T4.

## 5. Acceptance criteria
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

## 6. Outputs to produce in the repository
- `docs/services/organisation-workspaces.md` — workspace service design (tenant isolation, roles/approvals, audit, exports, offboarding, legal holds, SSO/SCIM gate) + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 7. Read before building
- [`07-hosted-identity-org-services.md`](../planning/programmes/07-hosted-identity-org-services.md) — mini-plan
- [`organisation-workspaces-dsh.md`](../suggestions/organisation-workspaces-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../planning/digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; admin/manage UI chrome R1/R4/R12/R13, content T4)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
