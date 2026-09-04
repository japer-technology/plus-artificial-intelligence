# Workflow Automation Services — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`workflow-automation-services.md`](workflow-automation-services.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines the paid automation conveniences the project may offer — connectors, bulk operations, scheduled validation, review reminders, webhooks, identity-provider links, document and publishing automation, and customer-controlled deployment — and the rules that keep automation from changing outcomes, hiding failures, or locking customers in. It exists so that repetitive organisational work can be reduced without any machine decision taking a human's place or any workflow becoming a prerequisite.

## 2. Placement and boundaries
Workflow automation is a paid service layer over records owned elsewhere: declarations by [Portable Declaration Schema](portable-declaration-schema-dsh.md), registers by [Approved-Tool Registers](approved-tool-registers-dsh.md) (which already defers reminder delivery here), and check results by [Verification Checker](verification-checker-dsh.md). It defers the no-outcome-change rule to [Moderation, Disputes, and Appeals](moderation-disputes-and-appeals-dsh.md), scale pricing to [API Scale and Reliability](api-scale-and-reliability-dsh.md), and the static-first failure-mode to [Static-First Service Architecture](static-first-service-architecture-dsh.md). Identity-provider links are watchlist-adjacent and gated by [Red Lines and Cautious Extensions](red-lines-and-cautious-extensions-dsh.md).

## 3. Terminology
- **Workflow** — a defined, repeatable sequence of automated steps over records.
- **Connector** — an integration point between the commons and an external system.
- **Bulk operation** — one action applied to many records at once.
- **Scheduled validation** — a check run on a timetable rather than on demand.
- **Review reminder** — a notification that a review date is due.
- **Customer-controlled deployment** — the customer runs the workflow on their own infrastructure.

## 4. Scope
### 4.1 In scope
- Workflow eligibility and pilot provenance.
- Permissions, retries, and idempotency.
- Audit logs and data minimisation.
- Portability and customer-controlled deployment.
- Failure handling and maintenance ownership.
- Identity-provider links and webhooks.

### 4.2 Out of scope and deferred
- Check semantics and fetch limits (verification checker).
- Review-date policy (approved-tool registers own the dates; this document owns delivery only).
- Pricing for volume and service levels (api scale and reliability).
- Moderation outcomes (moderation, disputes, and appeals).
- Audit-bundle packaging (evidence and compliance exports).

## 5. Specification
### 5.1 Design goals and principles
Automation performs objective, repeatable work; it never decides consequence. Every workflow must be proven in a pilot before it is sold, reversible where possible, observable through audit logs, and runnable by the customer, not only by the project.

### 5.2 Normative requirements
1. A workflow MAY be offered only after the underlying workflow has been demonstrated in a pilot per pilots and case studies; the offer MUST cite the pilot evidence.
2. Automation MUST perform only objective steps (formatting, scheduling, delivery, validation); every consequential decision (publication, removal, dispute) MUST remain with a human reviewer per moderation, disputes, and appeals, and no payment MAY change a substantive outcome.
3. Permissions MUST be least-privilege and enforced server-side, with immediate revocation on role change (security and abuse controls); a workflow MUST run with only the permissions its steps need.
4. Retries MUST be bounded, with backoff, idempotency keys, and a visible failure state; a workflow MUST NOT silently retry a consequential action into a different outcome.
5. Audit logs MUST be append-only and record actor, workflow, step, records affected, and date; the audit-bundle format defers to evidence and compliance exports.
6. Data minimisation MUST apply: a workflow MUST collect only what its steps need, MUST NOT infer or store sensitive attributes, and MUST complete the privacy analysis and threat model of [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md) and [Security and Abuse Controls](security-and-abuse-controls-dsh.md) before launch.
7. Portability MUST hold: workflow definitions, configurations, and outputs MUST be exportable in documented formats, and no workflow MAY be the only way to perform its underlying action — the manual, free path MUST remain.
8. Customer-controlled deployment MUST be supported: every workflow MUST be runnable on the customer's own infrastructure using the commons and published interfaces, not only as a hosted service.
9. Failure handling MUST follow the static-first failure-mode statement: if a workflow or the service stops, all records remain readable and correct, the free path still performs the underlying action, and the shutdown notice period is stated.
10. Maintenance ownership MUST be explicit: every connector and workflow names an owner and a maintenance responsibility; an unmaintained workflow MUST be flagged or disabled with notice, never left to fail silently.
11. Webhooks MUST be delivered over signed, rate-limited channels with retries per item 4, and MUST NOT be used for covert tracking (RL-5).
12. Identity-provider links are watchlist-adjacent ("identity integrations") and MAY be offered only after a published assessment per red lines and cautious extensions, MUST be optional, and MUST NOT require biometrics (RL-6).
13. Scheduled validation and review reminders MUST defer to the checker's rate limits and the register's review dates respectively, and MUST NOT let a paid schedule produce a better evidence label than the free check produces.

### 5.3 Data model
A workflow record: `{ workflowId, name, steps, permissions, owner, maintenance, pilotRef, status (draft | active | deprecated) }`. Each run writes audit events: `{ runId, workflowId, actor, records, outcome, retries, at }`. Workflow definitions are exportable documents; run history follows the audit-bundle format.

### 5.4 Interfaces and behaviours
Workflows are configured through documented, versioned interfaces over the commons and exports, never through private service internals (static-first). A failed run renders a plain-language failure state with the step and reason, never a silent gap. The free manual path is always reachable alongside any automation.

### 5.5 Lifecycle and operational rules
Workflows move draft → active → deprecated with dated records; deprecation includes a migration or manual-path note. Unmaintained workflows are flagged at a fixed cadence. Shutdown of a workflow service exports all definitions and run histories before it stops.

## 6. Free floor, red lines, and invariants
Automation is convenience, never a gate: the manual, free path performs every underlying action, and payment buys scale and scheduling — never legitimacy, rank, or permission, and never a better outcome or label. This specification implements RL-3 (no forced tool disclosure — automation never demands prompts), RL-4 (no paid outcome change), RL-5 (no covert tracking via webhooks), RL-7 and RL-8 (no automated publication in another's name — consequential actions stay human), and the watchlist item "identity integrations" via the assessment gate in 5.2 item 12.

## 7. Relationships to sibling specifications
- [Static-First Service Architecture](static-first-service-architecture-dsh.md) — the failure-mode and interface rules.
- [Pilots and Case Studies](pilots-and-case-studies-dsh.md) — the pilot provenance every workflow must cite.
- [Moderation, Disputes, and Appeals](moderation-disputes-and-appeals-dsh.md) — the human-decision and no-outcome-change rules.
- [Approved-Tool Registers](approved-tool-registers-dsh.md) — owns the review dates whose reminders this document delivers.
- [Verification Checker](verification-checker-dsh.md) — owns check semantics and fetch limits.
- [API Scale and Reliability](api-scale-and-reliability-dsh.md) — owns pricing for volume and webhook delivery at scale.
- [Evidence and Compliance Exports](evidence-and-compliance-exports-dsh.md) — owns the audit-bundle format.
- [Red Lines and Cautious Extensions](red-lines-and-cautious-extensions-dsh.md) — the identity-integrations watchlist gate.
- [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md) and [Security and Abuse Controls](security-and-abuse-controls-dsh.md) — the analysis and permission rules.
- [Offline and Self-Hosting Pack](offline-and-self-hosting-pack-dsh.md) — the customer-controlled deployment target.

## 8. Resolution of the seed's "before implementation" concerns
- **Prioritise workflows proven by pilots** — 5.2 item 1.
- **Permissions** — 5.2 item 3.
- **Retries** — 5.2 item 4.
- **Audit logs** — 5.2 item 5.
- **Data minimisation** — 5.2 item 6.
- **Portability** — 5.2 item 7.
- **Failure handling** — 5.2 item 9.
- **Maintenance ownership** — 5.2 item 10.

## 9. Acceptance criteria
1. Every offered workflow cites pilot evidence.
2. No workflow performs a consequential decision; a human reviewer always remains.
3. No payment changes a substantive outcome or an evidence label.
4. Retries are bounded, idempotent, and visible.
5. Every run writes append-only audit events, exportable in the audit-bundle format.
6. A workflow collects only its steps' needed data, with a published privacy analysis and threat model.
7. Workflow definitions and outputs export, and the manual free path performs the same action.
8. Every workflow runs on customer-controlled infrastructure.
9. An unmaintained workflow is flagged or disabled with notice.
10. Identity-provider links ship only after a published assessment and never require biometrics.

## 10. Open questions
- Which workflows warrant paid status versus remaining free client-side tools is undecided pending cost-discipline input.
- The retry and backoff defaults per workflow class are undecided.
