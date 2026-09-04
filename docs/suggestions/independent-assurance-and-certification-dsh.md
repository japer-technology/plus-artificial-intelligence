# Independent Assurance and Certification — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`independent-assurance-and-certification.md`](independent-assurance-and-certification.md).
> **Catalogue group:** Artifacts and trust.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the conditions under which the project may, much
later, consider a distinct assurance or certification programme with published
criteria and independent assessment. Its defining requirement is negative:
such a programme must never redefine ordinary `+AI` as an inferior,
unverified, or paid-only mark. The mark is complete without it; a future
credential would answer a different question — "has an independent assessor
checked this organisation's practice?" — and must look, cost, and behave like
a different thing.

## 2. Placement and boundaries

This specification sits in the "Artifacts and trust" group and owns the
*preconditions and guardrails* for a future programme. It does not own the
mark's meaning (the normative specification), the evidence labels (see
[Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)),
or the checker (see [Verification checker](verification-checker-dsh.md)).
Nothing in this document is authorised to be built until the preconditions in
section 5.2 are met and the governance body approves; until then it is a
guardrail, not a plan.

## 3. Terminology

- **Assurance programme** — a future, distinct programme assessing practices
  against published criteria.
- **Credential** — the distinct, clearly labelled output of such a programme.
- **Assessor** — the independent party performing the assessment.
- **Baseline mark** — ordinary `+AI`, which needs no credential.

## 4. Scope

### 4.1 In scope

- Preconditions for consideration.
- Guardrails: separation, criteria, independence, appeals, liability, pricing.
- The requirement of a distinct credential.

### 4.2 Out of scope and deferred

- Designing the assessment methodology (only after preconditions are met).
- Legal certification in any jurisdiction (never claimed).
- Any change to the ordinary mark's meaning or free status.

## 5. Specification

### 5.1 Design goals and principles

1. **The mark is complete.** Assurance adds an optional layer; it never
   improves the mark.
2. **Separation by construction.** The programme, its governance, its
   credential, and its funding are separate from the project's core.
3. **Assessment, not endorsement.** A credential attests criteria were met on
   a date; it is not an opinion about character.
4. **Accessible assessment.** Pricing must not make assurance de facto
   mandatory or exclusive.

### 5.2 Normative requirements

1. The programme MUST NOT be started until all of: (a) meaningful real-world
   adoption exists to justify demand; (b) the declaration, evidence-label, and
   checker specifications are stable; (c) an independent governance structure
   for the programme is approved under governance and stewardship.
2. The programme MUST NOT redefine, reword, or rank ordinary `+AI`; the
   baseline mark MUST remain equally valid, free, and unqualified by the
   credential's existence.
3. The programme MUST use a credential visually and verbally distinct from
   `+AI` (a separate name and mark), so no one can mistake an assessed
   credential for the baseline mark or vice versa.
4. Criteria MUST be published, versioned, and assessed by parties independent
   of the assessed organisation and of the project's service revenue.
5. Assessor competence MUST be defined and published (qualifications,
   conflict rules, recusal), and assessments MUST record the assessor, the
   date, the criteria version, and the evidence reviewed.
6. The programme MUST have appeals and renewal rules published before launch;
   credentials MUST carry expiry dates, and renewal MUST require a fresh
   assessment.
7. Liability MUST be bounded and disclosed: a credential states conformance
   with criteria on a date, nothing more, and the programme's disclaimers MUST
   say so on the credential itself.
8. Pricing MUST be accessible and MUST include fee waivers; payment MUST NOT
   change the criteria, the outcome, or the evidence recorded (see priority
   review services for the same rule).
9. The programme's governance MUST be separate from specification authority
   and from service operations, with its funding disclosed under financial
   transparency.
10. Until approved, the project MUST NOT issue, badge, or imply any
    certification; evidence labels remain the only form of checking.

### 5.3 Data model

```
{
  "programme": "not yet authorised",
  "preconditions": {
    "adoption": "meaningful real-world use",
    "specStability": "declaration, labels, checker stable",
    "governance": "independent structure approved"
  },
  "credential": {
    "name": "distinct from +AI",
    "criteriaVersion": "versioned criteria",
    "assessor": "independent party",
    "assessedAt": "ISO-8601",
    "expires": "ISO-8601"
  }
}
```

### 5.4 Interfaces and behaviours

- If ever built, credentials render alongside — never instead of — the
  baseline mark and the evidence labels.
- Checker results never conflate a credential with the declaration's own
  labels; a credential is one dated fact among others.

### 5.5 Lifecycle and operational rules

- The preconditions are reviewed on a fixed cadence by governance; absence of
  review does not authorise anything.
- A programme proposal that fails the guardrails is recorded as rejected with
  reasons in the changelog.

## 6. Free floor, red lines, and invariants

This specification is the guard against the most dangerous drift: assurance
becoming a paywall that redefines the free mark as inferior. RL-1 (no payment
for the mark) and RL-4 (no paid placement) bind the programme absolutely, and
the separation rules prevent the credential from inheriting the mark's
meaning. The baseline mark remains the complete, free, human-responsibility
statement.

## 7. Relationships to sibling specifications

- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)
  remains the only checking vocabulary until this programme exists, and stays
  the factual layer even after.
- [Verification checker](verification-checker-dsh.md) never issues
  credentials.
- [Certificates, badges, and QR](certificates-badges-and-qr-dsh.md) explicitly
  do not certify; this programme, if it ever exists, is the only thing that
  might.
- [Governance and stewardship](governance-and-stewardship-dsh.md) owns
  approving the independent structure.
- [Financial transparency](financial-transparency-dsh.md) owns disclosing
  programme funding.
- [Priority review services](priority-review-services-dsh.md) shares the
  payment-must-not-change-outcomes rule.
- [Standards engagement](standards-engagement-dsh.md) may later carry the
  programme's criteria toward external recognition.
- [Red lines and cautious extensions](red-lines-and-cautious-extensions-dsh.md)
  lists the reputation-score risk this programme must never become.

## 8. Resolution of the seed's "before implementation" concerns

- **Demand** — section 5.2 item 1(a): meaningful adoption as a precondition.
- **Independence** — section 5.2 items 4 and 9: independent assessors and
  separate governance.
- **Assessor competence** — section 5.2 item 5: published qualifications,
  conflicts, recusal.
- **Appeals** — section 5.2 item 6: appeals and renewal published before
  launch.
- **Renewal** — section 5.2 item 6: expiry dates and fresh assessments.
- **Liability** — section 5.2 item 7: bounded, disclosed, stated on the
  credential.
- **Accessible pricing** — section 5.2 item 8: accessible pricing with fee
  waivers.
- **Governance separation** — section 5.2 item 9: separate from specification
  authority and services.
- **A distinct credential** — section 5.2 item 3: visually and verbally
  distinct, never the mark.

## 9. Acceptance criteria

1. No credential exists until all three preconditions are recorded as met.
2. The baseline mark's wording, freedom, and validity are untouched by any
   proposal.
3. Any future credential is visually and verbally distinct from `+AI`.
4. Criteria are versioned and assessed by independent parties.
5. Appeals and renewal rules precede launch.
6. Pricing includes waivers and cannot change outcomes.
7. Programme governance and funding are separate and disclosed.
8. No certification language appears in any shipped surface today.

## 10. Open questions

- The adoption metric that counts as "meaningful real-world use" for
  precondition (a).
- Whether the programme should ever exist at all; this specification makes
  that a governed decision, not an assumption.
