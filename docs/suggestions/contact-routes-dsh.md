# Contact Routes — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`contact-routes.md`](contact-routes.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the project's contact routes: distinct, documented paths for general questions, media, partnerships, privacy, security, abuse, child safety, and legal requests, so urgent reports never share one unstructured inbox.

## 2. Placement and boundaries

Contact routes are operational infrastructure, not normative meaning. Each route's recipient, response expectation, retention, escalation, and attachment handling are specified here; the underlying security, privacy, and child-safety practices defer to [Security and Abuse Controls](security-and-abuse-controls-dsh.md), [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md), and [Child-Safe Education](child-safe-education-dsh.md). Route stability and canonical addresses defer to [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md). Privacy-preserving relaying of sensitive routes is a deferred option in [Privacy-Preserving Email Relay](privacy-preserving-email-relay-dsh.md).

## 3. Terminology

- **route** — one named contact path with a defined purpose and owner.
- **recipient role** — the named team or person who receives a route.
- **response expectation** — the acknowledgement and resolution targets for a route.
- **retention** — how long submissions are kept before deletion.
- **escalation** — the defined path for a report that exceeds the route's authority.
- **sensitive report** — a privacy, security, abuse, child-safety, or legal submission.

## 4. Scope

### 4.1 In scope

- The route catalogue and its required fields.
- Response expectations, retention, escalation, and attachment handling per route.
- Safe handling of sensitive reports.

### 4.2 Out of scope and deferred

- Security controls on forms, mail, and storage — [Security and Abuse Controls](security-and-abuse-controls-dsh.md).
- Field-level privacy and lawful deletion — [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md).
- Child-safety specialist review — [Child-Safe Education](child-safe-education-dsh.md).
- Address custody and renewal — [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md).
- Masked relay aliases — [Privacy-Preserving Email Relay](privacy-preserving-email-relay-dsh.md).

## 5. Specification

### 5.1 Design goals and principles

- Separation: sensitive reports reach the right specialist without passing through a general inbox.
- Safety-first: report first, attachments later; nothing auto-executes.
- Predictable: every route states who receives it and when to expect a response.

### 5.2 Normative requirements

1. The project MUST provide distinct routes for at least: general, media, partnerships, privacy, security, abuse, child safety, and legal.
2. Each route MUST name its recipient role; no route MAY be an unstructured, unowned shared inbox.
3. Each route MUST state its response expectations: an acknowledgement target and a resolution target, both checkable.
4. Each route MUST state its retention period, consistent with [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md).
5. Each route MUST define an escalation path; the child-safety and abuse routes MUST escalate to named specialists, per [Child-Safe Education](child-safe-education-dsh.md) and [Security and Abuse Controls](security-and-abuse-controls-dsh.md).
6. Submission handling MUST be safe: plain-text-first forms; attachments optional and never required for an initial sensitive report; executable or active content rejected or sandboxed before any human opens it, per [Security and Abuse Controls](security-and-abuse-controls-dsh.md).
7. Contact forms and messages MUST NOT use covert tracking or fingerprinting (red line); any analytics MUST be limited to what [Privacy-Respecting Analytics](privacy-respecting-analytics-dsh.md) permits.
8. The media route MUST be distinct from the general route and MUST NOT imply that any inquiry constitutes endorsement.
9. The legal route MUST document its retention and MUST NOT publish correspondence by default.
10. Urgent routes (security, abuse, child safety) MUST be reachable on the no-account path, without registration or payment.
11. Route addresses MUST be stable; any change MUST redirect the old address and be announced (defer to [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md)). Routes MAY use plus-addressing as a disclosure convention per [Plus-Addressing Convention](plus-addressing-convention-dsh.md).

### 5.3 Data model

A route record: `{ id, purpose, recipient-role, acknowledgement-target, resolution-target, retention, escalation, attachment-policy, sensitive-handling, visibility }`. This catalogue is the single new structure and is published openly (the route definitions, not the submissions).

### 5.4 Interfaces and behaviours

Submission interfaces are plain-text-first: a report can be filed with no attachment; attachments are accepted only after the initial message, with active content blocked. No-account submission is the default for urgent routes.

### 5.5 Lifecycle and operational rules

Route changes are versioned and announced; a decommissioned route redirects to its successor and keeps a dated tombstone entry. Change visibility defers to [Changelog and RSS](changelog-and-rss.md).

## 6. Free floor, red lines, and invariants

Contact routes MUST remain free and no-account for reporting; payment or registration MUST NOT gate urgent reports. Routes MUST NOT covertly track, sell personal data, or require identity. Sensitive reports MUST NOT be routed through unmoderated public channels.

## 7. Relationships to sibling specifications

- [Security and Abuse Controls](security-and-abuse-controls-dsh.md) — owns the safety controls for forms, mail, and attachments.
- [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md) — owns retention, purpose, and deletion rules.
- [Child-Safe Education](child-safe-education-dsh.md) — owns child-safety specialist review and escalation.
- [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md) — owns address stability and custody.
- [Plus-Addressing Convention](plus-addressing-convention-dsh.md) — owns the optional plus-addressing disclosure convention.
- [Privacy-Preserving Email Relay](privacy-preserving-email-relay-dsh.md) — owns optional masked relay aliases for sensitive routes.

## 8. Resolution of the seed's "before implementation" concerns

The seed's concern — "Define who receives each route, response expectations, retention, escalation, and safe handling of attachments and sensitive reports" — is resolved by §5.2.2 (recipient role), §5.2.3 (response expectations), §5.2.4 (retention), §5.2.5 (escalation), §5.2.6 (safe attachment handling), §5.4 (plain-text-first submission), and §5.3 (the route record model).

## 9. Acceptance criteria

1. All eight routes are present and distinct.
2. Every route names its recipient role and states response targets, retention, and escalation.
3. Attachment handling is plain-text-first with active content blocked.
4. No covert tracking or fingerprinting exists on contact forms.
5. Child-safety and abuse routes escalate to named specialists.
6. The media route is separate from general and implies no endorsement.
7. The legal route documents retention and does not publish by default.
8. Urgent routes are reachable without an account or payment.

## 10. Open questions

- Exact acknowledgement and resolution targets per route (to be set against staffing reality).
- Whether sensitive routes adopt masked relay aliases (deferred to [Privacy-Preserving Email Relay](privacy-preserving-email-relay-dsh.md)).
