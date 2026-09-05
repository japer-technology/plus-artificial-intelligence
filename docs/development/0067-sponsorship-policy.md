# Development task — sponsorship-policy: Sponsorship Policy

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md)
> **Source:** spec [`sponsorship-policy-dsh.md`](../suggestions/sponsorship-policy-dsh.md) · seed [`sponsorship-policy.md`](../suggestions/sponsorship-policy.md)
> **Effort:** S · **Phase:** P2 · **Position:** before any sponsor money is accepted (even the first one)
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** When/how to accept mission-aligned sponsorship for named public work, recognised factually outside normative content.
- **Why now / risk of deferring:** Must exist before any sponsor money is accepted, even the first one (Order line) — the policy defines what money may never buy before money flows. Deferring it risks accepting a sponsor before the screening and no-influence rules exist, the exact "payment buys X" attack the programme flags.
- **Features to deliver:**
  - sponsorship programme policy + assessment gate (watchlist-adjacent, preconditioned on the published assessment owned by red-lines-and-cautious-extensions)
  - mission-alignment screening rubric (with the seven prohibited effects as automatic declines)
  - the prohibition list (no specification control, vendor preference, directory rank, user-data access, category exclusivity, evidence advantage, finding suppression)
  - factual, dated recognition placed outside normative content and evidence surfaces
  - public sponsorship ledger (no amount ordering, carries the no-influence statement)
  - lifecycle (proposed/assessed/accepted/ended/declined, ended keeps its dated credit, corrections as dated errata)
  - financial-transparency disclosure as funded deliverables
- **Depends on:** governance-and-stewardship, financial-transparency, red-lines-and-cautious-extensions, support-and-donations

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Watchlist assessment gate (pre-first-sponsor)
- **Question:** How is the pre-acceptance watchlist assessment satisfied before the first sponsor?
- **Option (a):** hard dependency — the programme does not open until red-lines-and-cautious-extensions (Programme 10) publishes the "vendor sponsorship" watchlist assessment (proposal, red-line risk, safeguards, sunset condition, approving body); this request records the dependency and writes nothing that pre-empts it
  - **For:** spec §5.2.1 makes the published assessment a precondition and sponsorship is watchlist-adjacent (spec §2, §6), so recording the dependency keeps the assessment authority with red-lines-and-cautious-extensions.
  - **Against:** the programme cannot accept any sponsor until Programme 10's assessment exists, so the P2 policy page ships ahead of any actual sponsorship being accepted.
- **Option (b):** draft a provisional assessment here, marked subject to Programme 10
  - **For:** gives the policy page a concrete assessment text immediately rather than a placeholder dependency.
  - **Against:** pre-empts red-lines-and-cautious-extensions (Programme 10), which owns the watchlist assessment (spec §2, §5.2.1); a provisional assessment could diverge from the governed one.
- **Option (c):** open the programme with an internal-only gate and publish the assessment later
  - **For:** lets sponsorship begin promptly under an internal gate.
  - **Against:** violates spec §5.2.1, which requires a published (not internal-only) assessment before the programme opens, and spec §9 item 1 makes "no sponsorship before a published assessment" an acceptance criterion.
- **Recommended:** (a) — spec §5.2.1 makes the published assessment a precondition and it is owned by red-lines-and-cautious-extensions (Programme 10); this policy states the dependency, it does not author the assessment.
- **Your choice:** ✏️

### D2 — Mission-alignment screening rubric
- **Question:** What rubric screens sponsors for mission alignment and conflicts?
- **Option (a):** publish a draft rubric now (mission-alignment questions + the seven prohibited effects as automatic declines + governance recusal), marked for governance sign-off
  - **For:** spec §5.2.3 requires screening every sponsor and recording the outcome, and a draft rubric with the seven prohibitions as hard declines keeps the gate usable while governance owns final wording (spec §10).
  - **Against:** the wording is provisional and could be revised by governance, so the published rubric may change after launch.
- **Option (b):** defer the rubric text to governance-and-stewardship, publishing only the prohibition list and "screened against the published rubric (owned by governance)"
  - **For:** keeps the rubric authority cleanly with governance-and-stewardship, matching spec §10's "fixed with governance".
  - **Against:** leaves the screening gate unusable until governance writes the rubric, yet spec §5.2.3 still requires a recorded screening outcome per sponsor — which a placeholder cannot produce.
- **Option (c):** no rubric — ad-hoc screening per sponsorship
  - **For:** no upfront rubric work; screening happens case by case.
  - **Against:** contradicts spec §5.2.3 (screen against a published rubric and record the outcome) and §9 item 4's no-advantage guarantees; ad-hoc screening risks inconsistent, capture-prone decisions.
- **Recommended:** (a) — spec §5.2.3 requires a recorded screening outcome and §10 says the rubric should be fixed with governance; a draft rubric with the seven prohibitions as hard declines keeps the gate usable while governance owns final wording.
- **Your choice:** ✏️

### D3 — Logo recognition
- **Question:** May sponsorship recognition include a sponsor logo, and under what rules?
- **Option (a):** text-only recognition at launch (name + funded work + date), logos deferred pending mark-policy review
  - **For:** spec §10 leaves logo/size/placement to mark-policy review; text-only is the safest factual default and satisfies spec §5.2.4's "factual, dated, outside normative content".
  - **Against:** sponsors often expect a logo as part of recognition, so text-only may reduce sponsor attractiveness while the logo question stays open (spec §10).
- **Option (b):** allow a text-mark/wordmark logo at a fixed size and placement, never in normative or evidence surfaces
  - **For:** a fixed-size wordmark still gives sponsors visual recognition while staying outside normative/evidence surfaces (spec §5.2.4).
  - **Against:** introduces size/placement rules that mark policy hasn't yet set (spec §10), and a logo is easier to misplace into evidence surfaces than text-only recognition.
- **Option (c):** allow full logo recognition
  - **For:** maximises sponsor recognition value.
  - **Against:** contradicts the deferral to mark-policy review (spec §10) and risks recognition creeping into normative content or evidence surfaces (spec §5.2.4 and the brainstorm risk note).
- **Recommended:** (a) — spec §10 leaves logo/size/placement to mark-policy review; text-only recognition is the safest factual default and satisfies "factual, dated, outside normative content".
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Create `site/sponsorship.html` (versioned, file://-safe, mirrorable): what sponsorship is (funding from a named sponsor for named public work); the assessment gate per D1; the screening rubric per D2; the full prohibition list (spec §5.2.5–11); recognition rules (factual, dated, outside normative content, per D3); the lifecycle (proposed/assessed/accepted/ended/declined as dated records, ended sponsorships keep their dated credit, corrections/retractions as dated errata).
3. Create `site/sponsorship-ledger.json`: records `{ sponsorshipId, sponsor, fundedWork, amountBand, assessmentRef, screeningOutcome, recognitionText, startDate, endDate, status }`; never order sponsors by amount; the page carries the standing statement that sponsorship buys no influence, rank, or endorsement.
4. State the financial-transparency disclosure obligation (funder, amount band, purpose) and funded-deliverable completion status.
5. If a hosted sponsor-record component is later built, note (do not build) its privacy analysis, threat model, and failure-mode statement obligations (§5.2.14).
6. Give the ledger page a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13; the ledger page is T2).
7. Self-check against §5: walk the acceptance criteria and confirm each holds.

## 4. Constraints (must-nots)
- Sponsorship buys convenience, scale, support, or managed operations — never legitimacy, rank, or permission.
- Never sponsors the specification, the meaning, or the free floor.
- No vendor preference, directory rank, data access, exclusivity, or evidence advantage; no finding suppression.
- Recognition never appears in normative content or evidence surfaces.
- The ledger never orders sponsors by amount and carries the no-influence statement.
- No sponsorship is accepted before the published watchlist assessment exists (red-lines-and-cautious-extensions, Programme 10).
- The ledger page follows the multi-language standard (R1/R4/R12/R13; T2).

## 5. Acceptance criteria
- [ ] No sponsorship is accepted before a published assessment records the proposal and safeguards.
- [ ] Sponsorship is accepted only for named public work, never for the specification or the mark's meaning.
- [ ] Recognition is factual, dated, and never appears in normative content or evidence surfaces.
- [ ] No sponsor gains specification control, governance rights, vendor preference, directory rank, user-data access, category exclusivity, evidence advantage, or finding suppression.
- [ ] Every sponsorship is disclosed in the financial report as a funded deliverable.
- [ ] An ended sponsorship keeps its dated factual credit; corrections are dated errata.
- [ ] The sponsorship ledger does not order sponsors by amount and carries the no-influence statement.

## 6. Outputs to produce in the repository
- `site/sponsorship.html` — sponsorship policy, assessment gate, screening rubric, recognition rules, and ledger view.
- `site/sponsorship-ledger.json` — machine-readable ledger (never amount-ordered, no-influence statement).

## 7. Read before building
- [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md) — mini-plan
- [`sponsorship-policy-dsh.md`](../suggestions/sponsorship-policy-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../planning/digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; ledger page T2, chrome R1/R4/R12/R13)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
