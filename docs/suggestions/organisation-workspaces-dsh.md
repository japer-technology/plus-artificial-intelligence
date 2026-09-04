# Organisation Workspaces — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`organisation-workspaces.md`](organisation-workspaces.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines the optional private workspaces an organisation may use to manage teams, delegated roles, approvals, publication flows, SSO/SCIM, practice registers, policy acknowledgements, templates, retention, legal holds, and consolidated history. It exists so that organisations can run governed, auditable AI-declaration practice privately, while every capability they need remains reachable without a workspace and without payment.

## 2. Placement and boundaries
Workspaces are a paid, hosted service in the service layer of [Static-First Service Architecture](static-first-service-architecture-dsh.md): they add team and approval convenience around, never instead of, the commons. They defer the public view to [Organisation Profiles and Policies](organisation-profiles-and-policies-dsh.md), the policy register to [Approved-Tool Registers](approved-tool-registers-dsh.md), role-granted `organisation-only` visibility to [Visibility and Consent](visibility-and-consent-dsh.md), and legal holds to [Declaration Lifecycle](declaration-lifecycle-dsh.md). They honour the [Free-Floor Covenant](free-floor-covenant-dsh.md) by keeping the no-account path a complete free alternative.

## 3. Terminology
- **Workspace** — a private, organisation-scoped area managing teams, roles, and approvals.
- **Tenant** — one organisation's isolated workspace and its data.
- **Role** — a named permission grant within a workspace.
- **Approval flow** — a defined sequence of role-held sign-offs before a record publishes.
- **Policy acknowledgement** — a record that a named party confirmed a policy version.
- **Consolidated history** — the append-only audit log of workspace actions.
- **Legal hold** — a suspension of deletion while a legal process is active.

## 4. Scope
### 4.1 In scope
- Tenant isolation, roles, and authority.
- Approvals, publication flows, and offboarding.
- Exports, deletion, retention, and legal holds.
- Auditability and consolidated history.
- SSO/SCIM and identity-provider links.
- Accessibility and the free alternative.

### 4.2 Out of scope and deferred
- Public organisation profiles and authority evidence (organisation profiles and policies; proofs of control).
- Approved-tool register contents (approved-tool registers).
- Organisation-only visibility semantics (visibility and consent).
- Audit-bundle packaging for procurement (evidence and compliance exports).
- Hosting, backups, and domains (managed hosting and domains).

## 5. Specification
### 5.1 Design goals and principles
A workspace is a governance tool, not a legitimacy tool. It must isolate tenants absolutely, keep every consequential act attributed to a human, and degrade to the free no-account path when the service is absent.

### 5.2 Normative requirements
1. Workspaces MUST be optional, and the no-account path plus the file://-safe local tools MUST cover every core capability — declaration, practice register, approved-tool register, policy acknowledgement — without a workspace; this MUST be stated at join.
2. Workspaces MUST NOT be a prerequisite for any declaration's validity, and publication from a workspace MUST still require a named human signer's own acceptance (RL-7, RL-8); organisation policy never replaces the signer.
3. Tenant isolation MUST be absolute: one organisation's workspace data and roles MUST NOT be reachable from another tenant, and isolation MUST be demonstrated in the threat model (security and abuse controls).
4. Roles and permissions MUST be enforced server-side, take effect immediately, and revoke active sessions on change; workspace roles grant access within the organisation only, and MUST NOT be presented as legal authority to represent the organisation, which is owned by organisation profiles and proofs of control.
5. Offboarding MUST immediately remove a person's workspace access as of the recorded event, while their past actions remain attributed and their own declarations remain their own.
6. Exports MUST be available on request, free of charge, in the portable declaration, practice-register, and approved-tool-register formats, including the consolidated history.
7. Deletion MUST cascade to backups and derived indexes within the privacy-and-data-minimisation deletion window, except where a legal hold applies; legal holds MUST use the declaration-lifecycle `legal-hold` and `hold-released` events.
8. Retention MUST follow published schedules owned by privacy and data minimisation; templates and acknowledgements carry the organisation's own retention choices where they are stricter.
9. Auditability MUST hold: every consequential workspace action (role change, approval, publication, deletion) MUST be recorded in a consolidated, append-only history with actor, action, and date, and MUST be exportable; the audit-bundle format defers to evidence and compliance exports.
10. SSO/SCIM and identity-provider links are watchlist-adjacent ("identity integrations"): they MAY be offered only after a published assessment per red lines and cautious extensions, MUST NOT require biometrics (RL-6), and MUST remain optional — no workspace MAY require SSO/SCIM to function.
11. Workspaces MUST meet the accessibility floor for every role, including approval and audit review.
12. Workspaces MUST publish the static-first failure-mode statement: if the workspace service stops, all previously published records remain readable, every member can export, the free no-account path remains a complete alternative, and the shutdown notice period is stated.
13. Workspaces MUST complete the privacy analysis and threat model of [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md) and [Security and Abuse Controls](security-and-abuse-controls-dsh.md) before launch, and MUST demonstrate real organisational demand through pilot evidence before being built as a paid service.

### 5.3 Data model
A workspace carries: `workspaceId`, `organisation`, the tenant boundary, `roles` (each with a permission set), `members` (person, role, joined/left dates), `approvalFlows`, `acknowledgements`, `retentionSchedule`, `legalHolds`, and the `auditLog` (append-only events). Members' declarations and registers remain owned by their own schemas, referenced not copied.

### 5.4 Interfaces and behaviours
Manage views expose role administration, approval queues, and the audit log; the public view is the organisation profile, never the private workspace. Offboarding is a single action that revokes access and records the event; nothing in the workspace is visible to a non-member beyond `organisation-only` boundaries.

### 5.5 Lifecycle and operational rules
Workspace creation, membership, role, and approval changes are dated, append-only events. A workspace may be archived on organisation wind-down per continuity and namespace custody; archival never deletes members' own declarations. Legal holds pause scheduled deletion until a recorded release.

## 6. Free floor, red lines, and invariants
Workspaces are an optional convenience over a floor they cannot gate: the no-account path, portable formats, and local tools stay free and complete, and payment buys convenience — never legitimacy, rank, or permission. This specification implements RL-2 (workspaces never required), RL-6 (no biometric SSO), RL-7 and RL-8 (a human signer always accepts publication), and the watchlist item "identity integrations" through the assessment gate in 5.2 item 10, and it honours the static-first invariant by degrading to the free path.

## 7. Relationships to sibling specifications
- [Static-First Service Architecture](static-first-service-architecture-dsh.md) — the layer and failure-mode rules workspaces must satisfy.
- [Organisation Profiles and Policies](organisation-profiles-and-policies-dsh.md) — the public view and organisation-authority boundary.
- [Approved-Tool Registers](approved-tool-registers-dsh.md) — the policy register and acknowledgements workspaces host.
- [AI Practice Register](ai-practice-register-dsh.md) — the practice register workspaces host.
- [Visibility and Consent](visibility-and-consent-dsh.md) — owns `organisation-only` visibility.
- [Declaration Lifecycle](declaration-lifecycle-dsh.md) — owns legal holds and approval/authorisation events.
- [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md) and [Security and Abuse Controls](security-and-abuse-controls-dsh.md) — the analysis, isolation, and deletion rules.
- [Evidence and Compliance Exports](evidence-and-compliance-exports-dsh.md) — owns the audit-bundle format.
- [Managed Hosting and Domains](managed-hosting-and-domains-dsh.md) — owns hosting, backups, and domains.
- [Red Lines and Cautious Extensions](red-lines-and-cautious-extensions-dsh.md) — the identity-integrations watchlist gate.
- [Accessibility Floor](accessibility-floor-dsh.md) — mandatory for all workspace roles.

## 8. Resolution of the seed's "before implementation" concerns
- **Validate real organisational demand** — 5.2 item 13: pilot evidence before building as paid.
- **Tenant isolation** — 5.2 item 3.
- **Authority** — 5.2 item 4: workspace roles versus legal authority to represent the organisation.
- **Offboarding** — 5.2 item 5.
- **Exports** — 5.2 item 6.
- **Deletion** — 5.2 item 7.
- **Auditability** — 5.2 item 9.
- **Accessibility** — 5.2 item 11.
- **Free alternatives** — 5.2 items 1 and 12.

## 9. Acceptance criteria
1. Every core capability is completable on the free no-account path without a workspace.
2. A declaration published from a workspace carries a named human signer who accepted it.
3. No tenant can read another tenant's data, demonstrated in the threat model.
4. A role change revokes active sessions immediately.
5. Offboarding removes access immediately while keeping attribution and the person's own declarations.
6. A full export includes records, registers, and the consolidated history, free of charge.
7. A legal hold pauses deletion until a recorded release event.
8. SSO/SCIM is optional and ships only after a published identity-integrations assessment.
9. Every workspace role meets the accessibility floor.
10. The workspace publishes a failure-mode statement and a demonstrated degraded mode.

## 10. Open questions
- The exact permission set per role is undecided and should be derived from pilot demand.
- Whether workspaces should ship before managed hosting exists, or depend on it, is undecided.
