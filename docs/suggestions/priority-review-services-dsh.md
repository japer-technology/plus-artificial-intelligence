# Priority Review Services — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`priority-review-services.md`](priority-review-services.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines the paid priority-review offering: coordination and expedited professional review of translations, localisation, accessibility, security, and custom integrations. Its defining rule is negative and absolute — payment changes coordination and queue position only, and can never change a substantive outcome, a safety priority, public evidence, or dispute handling — so the free contribution and correction path stays credible.

## 2. Placement and boundaries
Review consumes the criteria owned by the subject's specification: translation review by [Translation governance](translation-governance-dsh.md), accessibility by [Accessibility floor](accessibility-floor-dsh.md), security by [Security and abuse controls](security-and-abuse-controls-dsh.md), integrations by [Developer integrations](developer-integrations-dsh.md). Review output is evidence labels and findings, never certification or a verdict mark, so it defers to [Independent assurance and certification](independent-assurance-and-certification-dsh.md) and [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md). Dispute and moderation outcomes are owned by [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md) and are off-limits to this service.

## 3. Terminology
- **Priority review** — a paid request that advances a review in the queue without changing its outcome.
- **Reviewer** — a named, qualified practitioner performing the review against published criteria.
- **Queue** — the ordered set of pending review requests, free and paid, with published rules.
- **Finding** — one dated, evidence-based observation returned by a review; not a verdict.
- **Substantive outcome** — the factual result of a review (accept, reject, change-required) and its reasons.

## 4. Scope
### 4.1 In scope
- The no-outcome-change rule and its enforcement.
- Queue rules and the free-path guarantee.
- Reviewer qualifications, conflicts, and recusal.
- Review output as findings, never certification.
- Privacy, security, and failure-mode obligations.

### 4.2 Out of scope and deferred
- The review criteria themselves (translation governance, accessibility floor, security and abuse controls, developer integrations).
- Moderation and dispute decisions (moderation, disputes, and appeals).
- Certification or assurance (independent assurance and certification, not authorised).

## 5. Specification
### 5.1 Design goals and principles
1. **Payment buys time, not truth.** Priority advances coordination; it never buys a better, faster-favourable, or different result.
2. **The free path stays credible.** Free review and correction remain available with published, non-starving queue rules.
3. **Published reviewers, published criteria.** Anyone can see who reviews and against what.
4. **Findings, not verdicts.** Review output is dated facts against criteria, never a score or certificate.
5. **Outcomes are off the market.** No revenue arrangement may touch evidence, safety, or disputes.

### 5.2 Normative requirements
1. Payment MUST change coordination and queue position only: it MUST NOT change substantive outcomes, safety priorities, public evidence, or dispute handling (RL-1, RL-4).
2. The free contribution and correction path MUST remain credible and MUST NOT be starved: a published share of review capacity MUST be reserved for the free queue, and free requests MUST advance even when paid requests are pending.
3. Queue rules MUST be published before the service launches: ordering, capacity, the free-tier reservation, expected wait times per track, and what "priority" means in plain language.
4. Reviewer qualifications MUST be published per track: who is qualified, their competence evidence, and their conflict and recusal rules, following [Governance and stewardship](governance-and-stewardship-dsh.md); reviews MUST record the reviewer, the date, and the criteria version.
5. Review output MUST be evidence-based findings with dates, using the vocabulary of [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md); it MUST NOT be a trust score, rank, endorsement, or certification (RL-9).
6. The same reviewer, criteria, and standards MUST apply to free and paid requests; a paid review MUST NOT use a laxer or stricter bar, and MUST NOT suppress any finding.
7. Safety priorities MUST be non-purchasable: an urgent safety matter MUST advance on safety grounds regardless of payment, and MUST never be displaced by a paid request.
8. Public evidence and dispute handling MUST be untouched: this service MUST NOT alter what is published as evidence or how a dispute is decided, and MUST NOT be offered for dispute outcomes (see moderation, disputes, and appeals).
9. The service MUST complete a privacy analysis and a threat model against [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) and [Security and abuse controls](security-and-abuse-controls-dsh.md) before launch, because it handles submitted materials.
10. A failure-mode statement MUST be published: if the priority service stops, free review, the checker, and the published criteria MUST remain available, per [Static-first service architecture](static-first-service-architecture-dsh.md).
11. The pricing surface MUST state that payment buys convenience, scale, support, or managed operations — never legitimacy, rank, permission, or a changed outcome.
12. Review outcomes MUST be published where the subject's specification requires (for example reviewed translations), and a paid review MUST NOT be privileged in how its findings are recorded or displayed.

### 5.3 Data model
```
{
  "requestId": "opaque identifier",
  "track": "translation | localisation | accessibility | security | integration",
  "queueClass": "free | priority",
  "criteriaVersion": "versioned criteria reference",
  "reviewer": "named qualified reviewer",
  "findings": [ { "label": "evidence label", "detail": "...", "at": "ISO-8601" } ],
  "outcome": "findings only — no verdict mark"
}
```

### 5.4 Interfaces and behaviours
- The queue status shows free and priority positions separately, with the free-tier reservation visible.
- Review requests accept submissions with or without payment; the same intake form is used for both.
- Results render as dated findings with the standing "not certification, not a trust score" disclaimer.

### 5.5 Lifecycle and operational rules
- Queue rules and reviewer rosters are versioned and announced in the changelog; a change to capacity or reservation is a visible change, never silent (no silent change).
- A review is closed with a dated record; a correction to findings is issued as a new version, never an edit.
- Reviewer conflicts trigger recusal and reassignment, recorded publicly.

## 6. Free floor, red lines, and invariants
The free floor cited here is: basic checking, free contribution, correction, and a credible free review path all remain free and account-free. This specification enforces RL-1 (no payment for the mark or meaning, and no payment for a changed outcome), RL-4 (no paid placement — a paid review is never displayed as superior), and RL-9 (no score, rank, or verdict). The no-silent-change invariant is honoured by published, versioned queue rules and dated findings.

## 7. Relationships to sibling specifications
- [Translation governance](translation-governance-dsh.md), [Accessibility floor](accessibility-floor-dsh.md), [Security and abuse controls](security-and-abuse-controls-dsh.md), and [Developer integrations](developer-integrations-dsh.md) — own the review criteria per track.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md) — owns dispute outcomes, which this service must never touch, and restates the no-outcome-change rule.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) — owns the findings vocabulary and the no-verdict rule.
- [Independent assurance and certification](independent-assurance-and-certification-dsh.md) — the certification boundary this service must not cross; it shares the payment-must-not-change-outcomes rule.
- [Governance and stewardship](governance-and-stewardship-dsh.md) — owns conflict and recusal rules and the reviewer-qualification authority.
- [Verification checker](verification-checker-dsh.md) — the free checker that must remain free and unchanged by this service.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) and [Security and abuse controls](security-and-abuse-controls-dsh.md) — own the privacy analysis and threat model.
- [Financial transparency](financial-transparency-dsh.md) — reports this service's revenue and the no-outcome-change guarantee.
- [Static-first service architecture](static-first-service-architecture-dsh.md) — owns the failure-mode statement.
- [Free-floor covenant](free-floor-covenant-dsh.md) and [Red lines and cautious extensions](red-lines-and-cautious-extensions-dsh.md) — bind this service's floor and prohibitions.

## 8. Resolution of the seed's "before implementation" concerns
- **Prevent payment changing substantive outcomes** — 5.2 items 1 and 6: priority changes queue position only; the same standards and no suppressed findings apply.
- **Prevent payment changing safety priorities** — 5.2 item 7: safety advances on safety grounds, never displaced by payment.
- **Prevent payment changing public evidence** — 5.2 item 8: evidence publication is untouched.
- **Prevent payment changing dispute handling** — 5.2 item 8: dispute outcomes are off-limits, owned by moderation, disputes, and appeals.
- **Publish reviewer qualifications** — 5.2 item 4: per-track qualifications, competence evidence, and conflict rules.
- **Publish queue rules** — 5.2 items 2-3: ordering, capacity, free-tier reservation, and expected wait times.

## 9. Acceptance criteria
1. The pricing surface states that payment changes queue position only, never outcomes.
2. A paid request and a free request for the same material receive the same findings from the same standards.
3. The free queue advances under load and never starves.
4. Queue rules and reviewer qualifications are published before launch.
5. Review output is dated findings with no score, rank, verdict, or certification.
6. A safety-urgent matter advances on safety grounds ahead of paid requests.
7. No review outcome is altered or suppressed by payment.
8. A reviewer conflict triggers recorded recusal and reassignment.
9. The service publishes a privacy analysis, threat model, and failure-mode statement.

## 10. Open questions
- The percentage of review capacity reserved for the free queue is undecided and needs demand modelling.
- Whether "priority" permits queue-jumping or only guaranteed-capacity scheduling is undecided.
