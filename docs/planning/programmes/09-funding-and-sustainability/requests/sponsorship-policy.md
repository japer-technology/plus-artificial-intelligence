# Agent request — sponsorship-policy: Sponsorship Policy

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../../09-funding-and-sustainability.md)
> **Source:** spec [`sponsorship-policy-dsh.md`](../../../../suggestions/sponsorship-policy-dsh.md) · seed [`sponsorship-policy.md`](../../../../suggestions/sponsorship-policy.md)
> **Effort:** S · **Phase:** P2 · **Position:** before any sponsor money is accepted (even the first one)
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Watchlist assessment gate (pre-first-sponsor)
- **Question:** How is the pre-acceptance watchlist assessment satisfied before the first sponsor?
- **Options:** (a) hard dependency — the programme does not open until red-lines-and-cautious-extensions (Programme 10) publishes the "vendor sponsorship" watchlist assessment (proposal, red-line risk, safeguards, sunset condition, approving body); this request records the dependency and writes nothing that pre-empts it · (b) draft a provisional assessment here, marked subject to Programme 10 · (c) open the programme with an internal-only gate and publish the assessment later
- **Recommended:** (a) — spec §5.2.1 makes the published assessment a precondition and it is owned by red-lines-and-cautious-extensions (Programme 10); this policy states the dependency, it does not author the assessment.
- **Your choice:** ✏️

### D2 — Mission-alignment screening rubric
- **Question:** What rubric screens sponsors for mission alignment and conflicts?
- **Options:** (a) publish a draft rubric now (mission-alignment questions + the seven prohibited effects as automatic declines + governance recusal), marked for governance sign-off · (b) defer the rubric text to governance-and-stewardship, publishing only the prohibition list and "screened against the published rubric (owned by governance)" · (c) no rubric — ad-hoc screening per sponsorship
- **Recommended:** (a) — spec §5.2.3 requires a recorded screening outcome and §10 says the rubric should be fixed with governance; a draft rubric with the seven prohibitions as hard declines keeps the gate usable while governance owns final wording.
- **Your choice:** ✏️

### D3 — Logo recognition
- **Question:** May sponsorship recognition include a sponsor logo, and under what rules?
- **Options:** (a) text-only recognition at launch (name + funded work + date), logos deferred pending mark-policy review · (b) allow a text-mark/wordmark logo at a fixed size and placement, never in normative or evidence surfaces · (c) allow full logo recognition
- **Recommended:** (a) — spec §10 leaves logo/size/placement to mark-policy review; text-only recognition is the safest factual default and satisfies "factual, dated, outside normative content".
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Create `site/sponsorship.html` (versioned, file://-safe, mirrorable): what sponsorship is (funding from a named sponsor for named public work); the assessment gate per D1; the screening rubric per D2; the full prohibition list (spec §5.2.5–11); recognition rules (factual, dated, outside normative content, per D3); the lifecycle (proposed/assessed/accepted/ended/declined as dated records, ended sponsorships keep their dated credit, corrections/retractions as dated errata).
3. Create `site/sponsorship-ledger.json`: records `{ sponsorshipId, sponsor, fundedWork, amountBand, assessmentRef, screeningOutcome, recognitionText, startDate, endDate, status }`; never order sponsors by amount; the page carries the standing statement that sponsorship buys no influence, rank, or endorsement.
4. State the financial-transparency disclosure obligation (funder, amount band, purpose) and funded-deliverable completion status.
5. If a hosted sponsor-record component is later built, note (do not build) its privacy analysis, threat model, and failure-mode statement obligations (§5.2.14).
6. Give the ledger page a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13; the ledger page is T2).
7. Self-check against §4: walk the acceptance criteria and confirm each holds.

## 3. Constraints (must-nots)
- Sponsorship buys convenience, scale, support, or managed operations — never legitimacy, rank, or permission.
- Never sponsors the specification, the meaning, or the free floor.
- No vendor preference, directory rank, data access, exclusivity, or evidence advantage; no finding suppression.
- Recognition never appears in normative content or evidence surfaces.
- The ledger never orders sponsors by amount and carries the no-influence statement.
- No sponsorship is accepted before the published watchlist assessment exists (red-lines-and-cautious-extensions, Programme 10).
- The ledger page follows the multi-language standard (R1/R4/R12/R13; T2).

## 4. Acceptance criteria
- [ ] No sponsorship is accepted before a published assessment records the proposal and safeguards.
- [ ] Sponsorship is accepted only for named public work, never for the specification or the mark's meaning.
- [ ] Recognition is factual, dated, and never appears in normative content or evidence surfaces.
- [ ] No sponsor gains specification control, governance rights, vendor preference, directory rank, user-data access, category exclusivity, evidence advantage, or finding suppression.
- [ ] Every sponsorship is disclosed in the financial report as a funded deliverable.
- [ ] An ended sponsorship keeps its dated factual credit; corrections are dated errata.
- [ ] The sponsorship ledger does not order sponsors by amount and carries the no-influence statement.

## 5. Outputs to produce in the repository
- `site/sponsorship.html` — sponsorship policy, assessment gate, screening rubric, recognition rules, and ledger view.
- `site/sponsorship-ledger.json` — machine-readable ledger (never amount-ordered, no-influence statement).

## 6. Read before building
- [`09-funding-and-sustainability.md`](../../09-funding-and-sustainability.md) — mini-plan
- [`sponsorship-policy-dsh.md`](../../../../suggestions/sponsorship-policy-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../../../digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; ledger page T2, chrome R1/R4/R12/R13)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
