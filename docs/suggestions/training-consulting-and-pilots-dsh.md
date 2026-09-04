# Training, Consulting, and Pilots — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`training-consulting-and-pilots.md`](training-consulting-and-pilots.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines the paid professional-services offering: keynotes, workshops, implementation consulting, governance facilitation, policy mapping, accessibility help, integration work, research design, and bounded organisational pilots. Its purpose is to sell expert time and attention — not endorsement, certification, or influence over the meaning — while leaving the mark's meaning, the free guides, and self-serve adoption untouched.

## 2. Placement and boundaries
This specification governs paid engagements. It is distinct from [Pilots and case studies](pilots-and-case-studies-dsh.md), which owns the project's own free pilots and their consent rules; paid client pilots inherit that sibling's design rules on top of this document's commercial rules. Advice is separated from certification by [Independent assurance and certification](independent-assurance-and-certification-dsh.md), which today authorises nothing — so no consulting output may claim to certify. Reusable learning is published under [Licensing and mark policy](licensing-and-mark-policy-dsh.md) and the accessibility floor.

## 3. Terminology
- **Engagement** — one bounded paid project with a named client, scope, and end point.
- **Statement of work (SOW)** — the signed scope document for an engagement.
- **Reusable learning** — a workshop deck, guide, checklist, or script that can be published openly for others.
- **Conflict** — a material interest of the consultant or project that could skew the advice given.
- **Certification** — any claim that an engagement, consultant, or client is "approved" or "certified"; not offered.

## 4. Scope
### 4.1 In scope
- The service catalogue and its no-certification rule.
- Engagement scoping and end points.
- Reusable-learning publication.
- Conflict disclosure and recusal.
- Anti founder-time dependency.
- Privacy, security, and failure-mode obligations.

### 4.2 Out of scope and deferred
- The project's own free pilots (pilots and case studies).
- Certification or assurance (independent assurance and certification, not authorised).
- Governance decisions or normative-meaning changes (governance and stewardship).

## 5. Specification
### 5.1 Design goals and principles
1. **Advice, not authority.** A consultant helps a client apply the mark; they never speak for the project or rewrite meaning.
2. **Time is the product.** Payment buys attention and expertise; it never buys legitimacy, rank, permission, or a certificate.
3. **Leave reusable things behind.** Where learning can be generalised, it is published, not hoarded.
4. **No single point of failure.** Engagements are documented so another practitioner can take over.
5. **Conflicts are disclosed, not hidden.**

### 5.2 Normative requirements
1. The offering MUST state, on its pricing surface and here, that payment buys time, expertise, and support — never legitimacy, rank, permission, certification, or any change to the `+AI` meaning (RL-1).
2. Advice MUST be strictly separated from certification: no engagement, deliverable, or marketing MAY present a consultant, client, or outcome as "certified", "approved", or "accredited" by the project (RL-1, and the independent assurance boundary).
3. Every engagement MUST have a signed statement of work naming the client, the deliverables, what is explicitly excluded, the conflict disclosures, the languages, and a named end point.
4. Reusable learning MUST be published openly wherever it can be generalised without exposing client confidences: workshop decks, checklists, policy-mapping templates, and integration scripts MUST be released under the project's contribution terms, and MUST meet the accessibility floor in the engagement's languages.
5. Anti founder-time dependency MUST be designed in: every engagement MUST produce captured materials (notes, scripts, playbooks, decision records) sufficient for another qualified practitioner to continue the work, so no client depends on one named person.
6. Conflicts MUST be disclosed before an engagement starts and updated as they arise, following the recusal rules of [Governance and stewardship](governance-and-stewardship-dsh.md); a conflicted consultant MUST recuse from the affected part of the work.
7. Consultants MUST NOT hold or imply specification authority: they MAY explain the current published version but MUST NOT invent meaning, and MUST defer any normative question to the specification and its governance (no silent change).
8. Client data MUST be handled under a privacy analysis and a threat model completed against [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) and [Security and abuse controls](security-and-abuse-controls-dsh.md) before any engagement touching client records.
9. Bounded organisational pilots sold here MUST also satisfy [Pilots and case studies](pilots-and-case-studies-dsh.md): a published plan, recorded consent, defined measures, an end point, and participant approval of anything identifying them (RL-7).
10. A failure-mode statement MUST be published: if an engagement or the consultancy as a whole stops, the client retains all reusable outputs and their own declarations remain unaffected, per [Static-first service architecture](static-first-service-architecture-dsh.md).
11. Revenue and client relationships MUST be reported through [Financial transparency](financial-transparency-dsh.md); no consulting relationship MAY influence registry placement, moderation, or dispute outcomes (RL-4).
12. Research-design work MUST defer study ethics to [Experiments and metrics](experiments-and-metrics-dsh.md) and [Research observatory](research-observatory-dsh.md); it MUST NOT design around the rejected techniques of [Privacy-respecting analytics](privacy-respecting-analytics-dsh.md).

### 5.3 Data model
```
{
  "engagementId": "opaque identifier",
  "client": "party",
  "kind": "keynote | workshop | consulting | facilitation | policy-mapping | accessibility | integration | research-design | pilot",
  "sow": { "deliverables": [ "..." ], "excluded": [ "..." ],
           "conflicts": [ "..." ], "languages": [ "..." ], "endPoint": "..." },
  "reusableOutputs": [ "published artifact references" ],
  "closedOut": "ISO-8601"
}
```

### 5.4 Interfaces and behaviours
- The services page renders the catalogue with the no-certification and no-legitimacy statements derived from the covenant, not hand-written.
- Each engagement publishes its SOW summary (client confidences redacted) and, on close-out, its reusable outputs.
- A client can request continuation by a different practitioner, using the captured materials.

### 5.5 Lifecycle and operational rules
- Engagements end on their named end point; an extension requires a new SOW.
- Close-out records what was delivered, what was published as reusable, and what remains client-confidential.
- Reusable outputs are versioned and corrected by errata, never silent edits (no silent change).

## 6. Free floor, red lines, and invariants
The free floor cited here is: the mark's meaning, the public guides, the use guide, and self-serve adoption all remain free; consulting is optional. This specification enforces RL-1 (no payment for the mark or meaning, and no paid credential), RL-4 (no paid influence over placement or outcomes), RL-7 (no automated publication in a participant's name without approval), and RL-9 (no ranking of clients or consultants). The one-normative-specification invariant is honoured by the no-authority rule: consultants explain, they never redefine.

## 7. Relationships to sibling specifications
- [Independent assurance and certification](independent-assurance-and-certification-dsh.md) — the boundary that keeps advice from becoming certification.
- [Pilots and case studies](pilots-and-case-studies-dsh.md) — owns the design and consent rules that paid client pilots must also satisfy.
- [Governance and stewardship](governance-and-stewardship-dsh.md) — owns conflict, recusal, and the specification authority consultants must not claim.
- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) — licences the reusable learning published from engagements.
- [Accessibility floor](accessibility-floor-dsh.md) and [Translation governance](translation-governance-dsh.md) — bound the accessibility and language obligations of outputs.
- [Experiments and metrics](experiments-and-metrics-dsh.md) and [Research observatory](research-observatory-dsh.md) — own the study ethics behind research-design work.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) and [Security and abuse controls](security-and-abuse-controls-dsh.md) — own the privacy analysis and threat model for client data.
- [Financial transparency](financial-transparency-dsh.md) — reports engagement revenue and the no-influence guarantee.
- [Static-first service architecture](static-first-service-architecture-dsh.md) — owns the failure-mode statement.
- [Free-floor covenant](free-floor-covenant-dsh.md) and [Red lines and cautious extensions](red-lines-and-cautious-extensions-dsh.md) — bind this service's floor and prohibitions.

## 8. Resolution of the seed's "before implementation" concerns
- **Separate advice from certification** — 5.2 items 1-2 and 7: no certification framing, no specification authority.
- **Publish reusable learning where possible** — 5.2 item 4: generalisable outputs released openly under the accessibility floor.
- **Avoid founder-time dependency** — 5.2 item 5: captured materials allow handover to another practitioner.
- **Scope engagements clearly** — 5.2 item 3 and 5.3: a signed SOW with deliverables, exclusions, and an end point.
- **Disclose conflicts** — 5.2 item 6: declared before start, updated, with recusal per governance.

## 9. Acceptance criteria
1. The services page states that payment buys no legitimacy, rank, permission, or certification.
2. No deliverable or marketing claims a client, consultant, or outcome is "certified" or "approved".
3. Every engagement has a signed SOW with deliverables, exclusions, and an end point.
4. At least one reusable output is published per engagement where client confidences permit.
5. Handover materials are sufficient for another practitioner to continue the work.
6. Conflicts are declared before start and recusals are recorded.
7. No consultant invents or changes the normative meaning.
8. A paid pilot publishes its plan, consents, and participant approvals.
9. The consultancy publishes a privacy analysis, threat model, and failure-mode statement.

## 10. Open questions
- Whether a named-consultant roster is maintained, and how admission avoids becoming an endorsement list, is undecided.
- The degree of client-confidential redaction permitted in published SOW summaries is undecided.
