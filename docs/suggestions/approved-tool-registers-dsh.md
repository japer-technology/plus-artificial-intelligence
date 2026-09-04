# Approved-Tool Registers — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`approved-tool-registers.md`](approved-tool-registers.md).
> **Catalogue group:** AI practice registers and discovery.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the approved-tool register: an organisation's internal policy record of the AI capabilities it has approved, the permitted purposes and data rules for each, the owner, the next review date, and the retired policies it no longer permits. It exists so that "approved under our policy" is a real, inspectable statement — private by default, optionally public — rather than an unbacked claim.

## 2. Placement and boundaries

This specification sits in the "AI practice registers and discovery" group and owns the *organisation-internal policy register*. It is the policy twin of the [AI practice register](ai-practice-register-dsh.md), which records what a party *does*; this register records what a policy *permits*. It defers the authority to speak for an organisation to [Organisation profiles and policies](organisation-profiles-and-policies-dsh.md) and [Proofs of control](proofs-of-control-dsh.md), role-based access and approvals to [Organisation workspaces](organisation-workspaces-dsh.md), visibility modes to [Visibility and consent](visibility-and-consent-dsh.md), and audit packaging to [Evidence and compliance exports](evidence-and-compliance-exports-dsh.md). It honours the free floor by keeping the format free and file-usable, and the red line against paid placement by forbidding any ranking or endorsement of the tools an organisation approves.

## 3. Terminology

- **Approved-tool register** — the organisation's internal policy register defined here.
- **Approval entry** — one record that a capability or tool is permitted under policy.
- **Owner** — the role or person accountable for an entry and its review.
- **Exception** — a recorded, time-bounded departure from a general rule.
- **Acknowledgement** — a record that a named party confirmed a policy version.
- **Retired policy** — a prior approval that no longer applies, retained for history.

## 4. Scope

### 4.1 In scope

- The register data object and its entries.
- Ownership, review dates, exceptions, acknowledgements, and retention.
- Default organisation-only visibility and safe optional publication.
- The boundary between policy approval and actual use.

### 4.2 Out of scope and deferred

- Who may represent the organisation (deferred to organisation profiles and policies and proofs of control).
- Team roles, SSO/SCIM, approvals, and tenant isolation (deferred to organisation workspaces).
- Visibility mechanics and consent records (deferred to visibility and consent).
- Audit-bundle packaging (deferred to evidence and compliance exports).
- Review-due alerts and procurement automation (deferred to workflow automation services).

## 5. Specification

### 5.1 Design goals and principles

1. **Private by default.** The register is an internal governance object; publication is a separate, explicit choice.
2. **Policy, not practice.** Approval states what is permitted; it never claims a tool was used on any artifact.
3. **Owned and reviewed.** Every approval has an accountable owner and a next review date; nothing is approved indefinitely by default.
4. **History retained.** Retired policies are kept as history, never silently deleted.
5. **Security-conscious.** A published register discloses policy intent, not defensive or security posture.

### 5.2 Normative requirements

1. The register MUST be valid JSON, usable offline and `file://`-safe, with no account required to author or read a local copy.
2. Each approval entry MUST record: a subject (capability or tool, referenced by [Tool taxonomy](tool-taxonomy-dsh.md) identifier where one exists), the permitted purposes, the data rules, an owner, a review date, and a status of `active` or `retired`.
3. Each entry MUST carry the `approved` claim from [Claim types](claim-types-dsh.md) with a policy reference, and MUST NOT carry `used-on-artifact`; use on an artifact is claimed only in an artifact bill of materials or declaration.
4. Every entry MUST record who authorised it (the acting party) and when; the authority to speak for the organisation is a separate, stronger question owned by organisation profiles and proofs of control, and this register MUST NOT itself assert that authority.
5. Default visibility MUST be organisation-only; any public visibility MUST be an explicit, separately consented choice, and a public register MUST be rendered as a snapshot with a stated publication date, not a live internal system.
6. Exceptions MUST be first-class records: each exception MUST carry an identifier, a description, an owner, an expiry or review date, and a justification category, and MUST NOT extend silently past its date.
7. Acknowledgements MUST record the acknowledging party, the policy version acknowledged, and the date; an acknowledgement MUST NOT be taken to mean use on any artifact.
8. Retired policies MUST be retained with a retirement date and, where useful, a reason category; retirement is a status change, never deletion.
9. The register MUST state a retention schedule for entries and acknowledgements, and removal of a record MUST follow that schedule, not ad hoc deletion (see visibility and consent for erasure).
10. Access control MUST be role-based and inherited from organisation workspaces; before such workspaces exist, the register MUST default to organisation-only and MUST NOT be publicly indexed.
11. Procurement references are optional, non-normative pointers to an organisation's internal system; they MUST NOT be required, and their presence MUST NOT imply any external validity.
12. A public register MUST omit or redact fields that reveal internal security choices — for example infrastructure detail, defensive posture, or unlisted tooling — while still disclosing the policy intent (what is approved, for what, and who owns it).
13. Past-due reviews MUST be detectable: the register MUST store review dates as machine-comparable values, and any surface MAY flag past-due entries; reminder delivery is deferred to workflow automation services.
14. No surface MAY order, rank, or endorse the tools an organisation approves; the register is a policy record, not a recommendation list (red line against paid placement).

### 5.3 Data model

```
{
  "approvedToolRegisterId": "organisation-scoped, versioned",
  "organisation": "named organisation",
  "policyVersion": "organisation's own policy version",
  "visibility": "organisation-only | public",
  "entries": [
    {
      "entryId": "stable within the register",
      "subject": { "id": "tool-taxonomy id", "name": "free-text fallback" },
      "claim": { "kind": "approved", "policyRef": "..." },
      "permittedPurposes": [ "..." ],
      "dataRules": [ "..." ],
      "owner": "role or person",
      "authorisedBy": "acting party",
      "authorisedAt": "ISO-8601",
      "reviewDate": "ISO-8601",
      "status": "active | retired",
      "retiredOn": "optional ISO-8601",
      "exceptions": [ { "id", "description", "owner", "expiry", "justification" } ],
      "acknowledgements": [ { "party", "policyVersion", "acknowledgedAt" } ],
      "procurementRef": "optional"
    }
  ]
}
```

### 5.4 Interfaces and behaviours

- The register is edited as a file or through organisation workspaces; every edit records the acting party and produces a new dated version.
- A public view renders a redacted snapshot with a publication date and labels every field `self-declared` per [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md).
- Compliance exports (see evidence and compliance exports) may request a full entry history including exceptions and acknowledgements.

### 5.5 Lifecycle and operational rules

- Entries move `active` → `retired` by a recorded change; retired entries remain readable.
- Exceptions expire or are reviewed on their stated date; expiry does not silently revert an entry, it flags the exception for review.
- Review dates are inputs to workflow automation, but the register itself only stores them; it does not send reminders.

## 6. Free floor, red lines, and invariants

The register format is a free-floor commons: authoring and reading a local register must never require payment or an account, and organisation-only visibility is a free capability, not a paid feature. The red line against paid placement is honoured by section 5.2 item 14: nothing may rank or endorse the tools an organisation approves. The security-conscious rule protects the organisation from exposing defensive choices, and the policy-not-practice rule keeps the `approved` claim honest — approval is a permission, never a claim of use, which keeps responsibility human and correctly attached.

## 7. Relationships to sibling specifications

- [Claim types](claim-types-dsh.md) owns the `approved` claim this register stores.
- [AI practice register](ai-practice-register-dsh.md) is the practice twin; this register records permission, that one records actual use.
- [Tool taxonomy](tool-taxonomy-dsh.md) supplies the subject identifiers.
- [Artifact AI bill of materials](artifact-ai-bill-of-materials-dsh.md) claims `used-on-artifact` separately from this register's `approved`.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) owns the `self-declared` labelling of public registers.
- [Organisation profiles and policies](organisation-profiles-and-policies-dsh.md) and [Proofs of control](proofs-of-control-dsh.md) own the authority to represent the organisation.
- [Organisation workspaces](organisation-workspaces-dsh.md) owns roles, approvals, and tenant isolation.
- [Visibility and consent](visibility-and-consent-dsh.md) owns organisation-only visibility and erasure.
- [Evidence and compliance exports](evidence-and-compliance-exports-dsh.md) packages register histories for audit.
- [Workflow automation services](workflow-automation-services-dsh.md) owns review-due alerts and procurement connectors.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) owns access control and isolation for hosted registers.

## 8. Resolution of the seed's "before implementation" concerns

- **Roles** — section 5.2 items 4-5 and 5.4: each entry records its owner and authorising party; role-based edit permissions are deferred to organisation workspaces, and organisational authority to organisation profiles and proofs of control.
- **Acknowledgements** — section 5.2 item 7 and 5.3: recorded with party, policy version, and date, never read as use.
- **Exceptions** — section 5.2 item 6: first-class, owned, time-bounded, never silently extended.
- **Retention** — section 5.2 item 9: a stated schedule governs removal, never ad hoc deletion.
- **Access control** — section 5.2 items 5 and 10: organisation-only by default, role-based, inherited from workspaces.
- **Procurement links** — section 5.2 item 11: optional, non-normative pointers, never required.
- **Alerts** — section 5.2 item 13: past-due reviews are detectable; reminders are deferred to workflow automation services.
- **Risk of exposing internal security choices** — section 5.2 item 12 and section 6: public registers redact security posture while disclosing policy intent.

## 9. Acceptance criteria

1. A local register validates offline with no account.
2. Every entry carries an owner, a review date, permitted purposes, data rules, and a status.
3. A register defaults to organisation-only and is not publicly indexed.
4. A public register is a redacted, dated snapshot that omits security-posture fields.
5. An exception without an owner or expiry is rejected.
6. A retired policy remains readable with its retirement date.
7. A register never renders `used-on-artifact` for an approval entry.
8. Past-due review dates are machine-detectable.
9. No surface ranks or endorses the tools an organisation approves.

## 10. Open questions

- The default retention schedule lengths are undecided and should be set with the privacy and compliance siblings.
- Whether the register should embed the full policy text or reference the organisation's policy version by pointer is undecided.
