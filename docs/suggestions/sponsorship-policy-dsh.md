# Sponsorship Policy — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`sponsorship-policy.md`](sponsorship-policy.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines when and how the project accepts mission-aligned sponsorship for named public work — translation review, accessibility testing, events, hosting, and the like — and how that support is recognised factually, outside normative content. It exists so that money can fund public work without ever buying specification control, vendor preference, directory rank, user-data access, category exclusivity, evidence advantage, or the suppression of findings.

## 2. Placement and boundaries
Sponsorship is watchlist-adjacent by definition: "vendor sponsorship" sits on the watchlist maintained by [Red Lines and Cautious Extensions](red-lines-and-cautious-extensions-dsh.md), so this specification does not make sponsorship safe by assertion — it makes the programme conditional on the governed assessment process that document owns. It defers funder disclosure to [Financial Transparency](financial-transparency-dsh.md), the no-influence rule to [Governance and Stewardship](governance-and-stewardship-dsh.md), and the free-floor statement to [Free-Floor Covenant](free-floor-covenant-dsh.md).

## 3. Terminology
- **Sponsorship** — funding from a named sponsor for named public work, recognised factually.
- **Sponsor** — the organisation or person providing the funding.
- **Named public work** — a specific, finite deliverable (for example "French translation review" or "the October accessibility audit").
- **Recognition** — a factual, dated credit placed outside normative content.
- **Category exclusivity** — granting a sponsor the sole right to fund, or to appear in, a whole category of work.
- **Vendor preference** — the project favouring a sponsor's products or services in its commons, tools, or guidance.

## 4. Scope
### 4.1 In scope
- Admission conditions and the assessment gate.
- The prohibition list (the seed's "before implementation" items).
- Factual recognition rules and where recognition may appear.
- The sponsor relationship lifecycle (start, end, correction).

### 4.2 Out of scope and deferred
- Funder disclosure amounts and thresholds (financial transparency).
- Donations and memberships (support and donations; membership model).
- Grants and public-benefit programmes (grants and public-benefit programmes).
- The assessment process mechanics (red lines and cautious extensions).

## 5. Specification
### 5.1 Design goals and principles
Sponsorship funds work, not influence. The sponsor's name appears only as a factual credit next to the work it funded, never inside the specification, the declaration meaning, or any surface that ranks or evidences parties.

### 5.2 Normative requirements
1. The sponsorship programme MUST NOT open before a published assessment records the specific proposal, its risk to the red lines, its safeguards, its sunset condition, and the approving body, per red lines and cautious extensions; sponsorship is watchlist-adjacent and treated as such.
2. Sponsorship MUST fund named public work only; the project MUST NOT accept sponsorship of the normative specification, the free floor, the mark's meaning, or undifferentiated general operations presented as such.
3. The project MUST screen every sponsor for mission alignment and conflicts before acceptance, and MUST record the screening outcome.
4. Recognition MUST be factual, dated, and placed outside normative content: it MAY say "French translation review supported by X" and MUST NOT appear in the specification text, the declaration meaning, or any interface that presents a party's evidence labels or status.
5. Sponsorship MUST NOT confer specification control, governance rights, or decision rights of any kind, per governance and stewardship (5.2 items 4 and 10).
6. Sponsorship MUST NOT create vendor preference: the project MUST NOT endorse, list as approved, or otherwise favour a sponsor's products or services in the commons, tooling, or guidance.
7. Sponsorship MUST NOT confer directory rank or placement: no listing, ordering, or search position may be sponsored (RL-4, RL-9).
8. Sponsorship MUST NOT confer user-data access: no sponsor may receive personal data, public records, or supporter data beyond what the sponsor's own funded work legitimately requires and the parties consented to.
9. Sponsorship MUST NOT grant category exclusivity: no sponsor may hold the sole right to fund or appear in a category of work.
10. Sponsorship MUST NOT confer evidence advantages: no sponsor may receive different evidence labels, earlier checks, or altered verification outcomes for itself or anyone else.
11. Sponsorship MUST NOT buy the suppression or delay of any finding, audit, translation critique, or negative result; the project MUST retain sole editorial control over what funded work publishes.
12. Every sponsorship MUST be disclosed in the financial-transparency report (funder, amount band, purpose) and as a funded deliverable with completion status.
13. Recognition of an ended sponsorship MUST be dated and retained as history where factual; a corrected or retracted sponsorship MUST be corrected by dated errata, never silently.
14. Any hosted component that manages sponsor records MUST complete the privacy analysis and threat model of [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md) and [Security and Abuse Controls](security-and-abuse-controls-dsh.md), and MUST publish the static-first failure-mode statement: if sponsorship infrastructure stops, all funded work already published remains, no record is gated, and the shutdown notice period is stated.

### 5.3 Data model
A sponsorship record: `{ sponsorshipId, sponsor, fundedWork (named), amountBand, assessmentRef, screeningOutcome, recognitionText, startDate, endDate, status (proposed | active | ended | declined) }`. The disclosure copy lives in the financial-transparency report; this record governs acceptance and recognition.

### 5.4 Interfaces and behaviours
Recognition renders on the funded work's own page and in the changelog, never in the specification or in third-party directory rows. A public sponsorship ledger MAY list active and past sponsorships with their funded work and dates; it MUST NOT order sponsors by amount and MUST carry the standing statement that sponsorship buys no influence, rank, or endorsement.

### 5.5 Lifecycle and operational rules
Sponsorships are proposed, assessed, accepted, delivered, and ended; each transition is a dated record. Ending a sponsorship never removes the funded work, only the sponsor's relationship to it; historical credits remain factual.

## 6. Free floor, red lines, and invariants
The free floor is unaffected by any sponsorship: the meaning, the no-account path, reviewed translations, and the tools stay free, and no sponsor funds or gates them. Sponsorship buys none of legitimacy, rank, or permission. This specification implements RL-1 (no payment for use), RL-4 (no paid placement), RL-9 (no ranking), and the watchlist item "vendor sponsorship" by making the programme conditional on a published assessment, and it enforces the governance no-influence rule in every clause above.

## 7. Relationships to sibling specifications
- [Red Lines and Cautious Extensions](red-lines-and-cautious-extensions-dsh.md) — owns the watchlist and the assessment gate this programme requires.
- [Governance and Stewardship](governance-and-stewardship-dsh.md) — owns the no-influence and decision-rights rules restated here.
- [Financial Transparency](financial-transparency-dsh.md) — owns funder disclosure and funded-deliverable reporting.
- [Free-Floor Covenant](free-floor-covenant-dsh.md) — the floor sponsorship must never fund or gate.
- [Support and Donations](support-and-donations-dsh.md) — donations, a distinct route this policy must not absorb.
- [Public Directory](public-directory-dsh.md) — the surface where no sponsored rank may ever appear.
- [Evidence Labels, Not Trust Scores](evidence-labels-not-trust-scores-dsh.md) — the labels sponsorship must never alter.
- [Static-First Service Architecture](static-first-service-architecture-dsh.md), [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md), and [Security and Abuse Controls](security-and-abuse-controls-dsh.md) — the failure-mode and analysis obligations for any sponsor-record component.

## 8. Resolution of the seed's "before implementation" concerns
- **Forbid specification control** — 5.2 item 5.
- **Forbid vendor preference** — 5.2 item 6.
- **Forbid directory rank** — 5.2 item 7.
- **Forbid user-data access** — 5.2 item 8.
- **Forbid category exclusivity** — 5.2 item 9.
- **Forbid evidence advantages** — 5.2 item 10.
- **Forbid suppression of findings** — 5.2 item 11.

## 9. Acceptance criteria
1. No sponsorship is accepted before a published assessment records the proposal and safeguards.
2. Sponsorship is accepted only for named public work, never for the specification or the mark's meaning.
3. Recognition is factual, dated, and never appears in normative content or evidence surfaces.
4. No sponsor gains specification control, governance rights, vendor preference, directory rank, user-data access, category exclusivity, evidence advantage, or finding suppression.
5. Every sponsorship is disclosed in the financial report as a funded deliverable.
6. An ended sponsorship keeps its dated factual credit; corrections are dated errata.
7. A sponsorship ledger, if any, does not order sponsors by amount and carries the no-influence statement.

## 10. Open questions
- The exact mission-alignment screening rubric is undecided and should be fixed with governance before the programme opens.
- Whether sponsorship recognition may include a logo, and under what size and placement rules, is undecided pending mark-policy review.
