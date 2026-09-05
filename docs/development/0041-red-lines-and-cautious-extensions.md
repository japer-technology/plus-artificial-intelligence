# Development task — red-lines-and-cautious-extensions: Red Lines and Cautious Extensions

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md)
> **Source:** spec [`red-lines-and-cautious-extensions-dsh.md`](../suggestions/red-lines-and-cautious-extensions-dsh.md) · seed [`red-lines-and-cautious-extensions.md`](../suggestions/red-lines-and-cautious-extensions.md)
> **Effort:** S · **Phase:** P1/P2 · **Position:** P1/P2 — publish before the surfaces exist that might tempt violations; every later spec review cites its RL IDs
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Single source of truth for what must never be built (RL-1…RL-9) plus a watchlist of high-risk extensions gated by published assessment.
- **Why now / risk of deferring:** It must publish in P1/P2 before the surfaces exist that might tempt violations, and it is the single gate against the programme's headline risk — deferred-register drift, where the three deferred members get built anyway without this doc.
- **Features to deliver:**
  - A versioned policy document (`docs/red-lines-and-cautious-extensions.md`) as the single source of truth.
  - Nine red lines RL-1…RL-9 with stable identifiers and canonical wording (spec §5.2 items 1–9).
  - The watchlist (social feeds, rankings, automated AI-use inference, hosted mail, vendor sponsorship, identity integrations, blockchain anchoring, reputation scores) with per-item status.
  - The assessment template (proposal, risk, safeguards, sunset, approving body) and recording process (§5.2 item 11).
  - The sibling-citation rule (cite RL IDs, state how each stays clear — §5.2 item 12).
  - The governed amendment rule (§5.2 item 13).
  - A machine-readable red-line/watchlist/assessment record (`docs/red-lines-and-cautious-extensions.json`, §5.3).
  - The published blockchain-anchoring watchlist assessment (cross-cutting, before any anchoring ships).
- **Depends on:** free-floor-covenant, governance-and-stewardship (the approving body), moderation-disputes-and-appeals.

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Red-line review interval
- **Question:** How often does the governance body review the red lines and the watchlist (spec §10; digest "Open: review interval")?
- **Option (a):** at least annually, tied to each major specification release cycle
  - **For:** spec §5.5 requires the red lines to be "reviewed at fixed intervals by the governance body"; tying review to the release cycle satisfies that cadence and surfaces each review in the changelog/RSS (§5.4) without a separate process.
  - **Against:** an annual cadence may churn a list the spec wants kept stable — §5.1 design goal 2 ("Stability") says red lines "change rarely, never by drift".
- **Option (b):** a fixed 24-month cadence
  - **For:** a longer cadence honours §5.1's stability principle (red lines change rarely) and reduces churn.
  - **Against:** two years between reviews lets new capability candidates named in §10 (voice-cloning, autonomous deployment chains) sit unassessed, weakening the watchlist gate (§5.2 item 11).
- **Option (c):** only when an amendment is proposed (no standing cadence)
  - **For:** amendment-only review aligns with §5.1's "never by drift" — no review without a concrete change.
  - **Against:** §5.5 explicitly requires review "at fixed intervals"; an amendment-only trigger has no standing cadence, so the fixed-interval obligation is unmet and new capabilities can slip in by default.
- **Recommended:** (a) — absence of review does not suspend the red lines (§5.5), but an annual tie to the release cycle keeps the list alive without churn.
- **Your choice:** ✏️

### D2 — Watchlist expansion mechanism
- **Question:** Who may propose watchlist additions (e.g. voice-cloning publication, autonomous deployment chains) and how are they accepted (spec §10; digest "Open: watchlist expansion")?
- **Option (a):** any contributor proposes via a published template; the governance body accepts or rejects, recording each outcome
  - **For:** spec §10 raises "whether the watchlist should be expanded as new capabilities appear … and who proposes additions"; an open intake answers "who" (any contributor) and "how" (published template + recorded outcome), closing the digest's open item.
  - **Against:** open intake adds governance load — every proposal must run the §5.2 item 11 assessment path (proposal, risk, safeguards, sunset, approving body), which is heavy for speculative additions.
- **Option (b):** governance-only proposals, no open intake
  - **For:** keeping proposals governance-only is consistent with §5.2 item 13 (amendments only via governance) and keeps control tight.
  - **Against:** it leaves §10's "who proposes additions" unanswered for contributors, so capabilities are only flagged when governance happens to notice them — the same default-slippage the assessment gate (§5.2 item 11) exists to prevent.
- **Option (c):** the watchlist is frozen at the eight listed items
  - **For:** a frozen list is maximally stable, matching §5.1's stability principle.
  - **Against:** §10 explicitly contemplates new capabilities (voice-cloning, autonomous deployment chains) being added; freezing at eight ignores that and lets unlisted capabilities escape the assessment gate.
- **Recommended:** (a) — the spec's open question names new capability candidates; an open, recorded intake prevents capabilities slipping in by default.
- **Your choice:** ✏️

### D3 — Blockchain-anchoring assessment posture
- **Question:** IMPLEMENTATION-PLAN §11 requires a published blockchain-anchoring assessment before any anchoring ships. Publish the assessment now, or record a deferral?
- **Option (a):** publish the blockchain-anchoring assessment now (proposal, risk, safeguards, sunset, approving body) with a recorded *deferral* decision
  - **For:** it meets acceptance criterion 6 (every watchlist item has an assessment or recorded deferral), and IMPLEMENTATION-PLAN §11 lists blockchain anchoring among the "watchlist assessments still outstanding … each needs a published assessment before its spec ships", with the assessment assigned to this request (brainstorm decision 4).
  - **Against:** a full assessment for a proposal that does not exist yet writes speculative risk/safeguards/sunset content (§5.2 item 11) that may not match any future anchoring proposal.
- **Option (b):** record a bare deferral ("no proposal") and schedule the assessment
  - **For:** it is honest about "no proposal" — §5.2 item 11's assessment is keyed to a *specific proposal*, which does not exist yet.
  - **Against:** it leaves IMPLEMENTATION-PLAN §11's "needs a published assessment" open, so the item stays unassessed and acceptance criterion 6 is only weakly satisfied by a bare deferral.
- **Option (c):** leave the item unassessed until a spec proposes anchoring
  - **For:** it avoids speculative work entirely until someone actually proposes anchoring.
  - **Against:** acceptance criterion 6 requires every watchlist item to have an assessment or recorded deferral now; leaving it unassessed fails that, and §11 flags anchoring specifically as outstanding.
- **Recommended:** (a) — the watchlist item needs a recorded assessment-or-deferral (acceptance criterion 6), and §11 assigns this assessment to this request; assessing-then-deferring closes the loop before any anchoring ships.
- **Your choice:** ✏️

### D4 — Sibling-owned watchlist items (hosted mail, identity/SSO)
- **Question:** How does this document record the two watchlist items owned by sibling specs — hosted mail relay (`privacy-preserving-email-relay`) and identity integrations/SSO-SCIM (`organisation-workspaces`)?
- **Option (a):** record a deferral with a pointer to the owning spec's assessment, leaving the assessment itself to that spec
  - **For:** brainstorm programme decision 4 says these are "recorded in the red-lines doc as *deferrals with pointers* to their owning spec's assessment, not re-assessed here" — one assessment per item, owned by the spec that ships it.
  - **Against:** a pointer defers the actual assessment, so until the owning spec ships, the item has no substantive assessment on record in this document.
- **Option (b):** publish this document's own full assessment of both items
  - **For:** publishing full assessments here closes acceptance criterion 6 without waiting on sibling specs.
  - **Against:** it double-assesses and pre-empts the owning spec's assessment (brainstorm decision 4 says "not re-assessed here"); hosted mail and SSO-SCIM are outside this spec's §4.1 scope.
- **Option (c):** list the items with no status until the owning specs ship
  - **For:** it avoids making a call before the owning specs ship.
  - **Against:** acceptance criterion 6 requires every watchlist item to have an assessment or a recorded deferral; "no status" satisfies neither, leaving the single-gate record incomplete.
- **Recommended:** (a) — one assessment per item, owned by the spec that ships it; this document stays the single watchlist with status + pointer (acceptance criterion 6 met without double-assessing).
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish `docs/red-lines-and-cautious-extensions.md` as the single source of truth, versioned with an effective date and changelog entry.
3. Write the nine red lines RL-1…RL-9 with their exact canonical wording from spec §5.2 items 1–9 and §5.3 (never paraphrase the prohibition).
4. Maintain the watchlist of the eight high-risk extensions (social feeds, rankings, automated AI-use inference, hosted mail, vendor sponsorship, identity integrations, blockchain anchoring, reputation scores) with a per-item status: assessed, deferred, or deferred-with-pointer — using your §2 D3/D4 choices.
5. Publish the assessment template (proposal, risk, safeguards, sunset, approving body) and the recording process (spec §5.2 item 11); record every assessment in the changelog.
6. Record the sibling-citation rule (spec §5.2 item 12): every sibling whose subject borders a watchlist item must cite this document and state how it stays clear.
7. Record the amendment rule (spec §5.2 item 13): amendments only via governance, with the governance-defined notice period, announced in the changelog.
8. Publish the machine-readable record (`docs/red-lines-and-cautious-extensions.json`) matching the §5.3 data model (redLines, watchlist, assessments).
9. Apply your §2 D1 (review interval) and D2 (expansion mechanism) in the document's operational rules.
10. Self-check against §5: every red line has a stable identifier and single wording; every watchlist item has an assessment or recorded deferral.

## 4. Constraints (must-nots)
- Never charge for use of the mark (RL-1); never require registration/identity (RL-2); never require tool/prompt disclosure (RL-3).
- Never sell paid placement (RL-4); never sell personal data or permit covert tracking (RL-5); never biometrics (RL-6).
- Never auto-publish in another's name (RL-7); never represent AI as responsible (RL-8); never reputation scores, trust scores, social feeds, or rankings of people (RL-9).
- The red lines cannot be sold, waived, or pay-walled away (§2); they are part of the free floor.
- No watchlist item may be explored without a published, governed assessment (spec §5.2 item 11).
- No amendment may weaken a red line outside the governed process with its notice period.

## 5. Acceptance criteria
- [ ] Every red line has a stable identifier (RL-1…RL-9) and a single canonical wording.
- [ ] The watchlist of eight items is maintained with a per-item status.
- [ ] Every watchlist item has either an assessment or a recorded deferral.
- [ ] The blockchain-anchoring assessment is published (or a deferral recorded) before any anchoring ships.
- [ ] The assessment template records proposal, risk, safeguards, sunset, and approving body.
- [ ] The sibling-citation rule (cite RL IDs, never restate wording) is stated.
- [ ] The amendment process and notice period are stated; amendments appear in the changelog.
- [ ] A machine-readable record (`docs/red-lines-and-cautious-extensions.json`) matches the §5.3 model.

## 6. Outputs to produce in the repository
- `docs/red-lines-and-cautious-extensions.md` — the versioned single source of truth (red lines, watchlist, assessment template and process, amendment rule).
- `docs/red-lines-and-cautious-extensions.json` — machine-readable redLines/watchlist/assessments (spec §5.3).

## 7. Read before building
- [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md) — mini-plan
- [`red-lines-and-cautious-extensions-dsh.md`](../suggestions/red-lines-and-cautious-extensions-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
