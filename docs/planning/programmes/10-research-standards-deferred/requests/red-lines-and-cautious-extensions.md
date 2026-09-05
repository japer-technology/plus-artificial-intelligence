# Agent request — red-lines-and-cautious-extensions: Red Lines and Cautious Extensions

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../../10-research-standards-deferred.md)
> **Source:** spec [`red-lines-and-cautious-extensions-dsh.md`](../../../../suggestions/red-lines-and-cautious-extensions-dsh.md) · seed [`red-lines-and-cautious-extensions.md`](../../../../suggestions/red-lines-and-cautious-extensions.md)
> **Effort:** S · **Phase:** P1/P2 · **Position:** P1/P2 — publish before the surfaces exist that might tempt violations; every later spec review cites its RL IDs
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Red-line review interval
- **Question:** How often does the governance body review the red lines and the watchlist (spec §10; digest "Open: review interval")?
- **Options:** (a) at least annually, tied to each major specification release cycle · (b) a fixed 24-month cadence · (c) only when an amendment is proposed (no standing cadence)
- **Recommended:** (a) — absence of review does not suspend the red lines (§5.5), but an annual tie to the release cycle keeps the list alive without churn.
- **Your choice:** ✏️

### D2 — Watchlist expansion mechanism
- **Question:** Who may propose watchlist additions (e.g. voice-cloning publication, autonomous deployment chains) and how are they accepted (spec §10; digest "Open: watchlist expansion")?
- **Options:** (a) any contributor proposes via a published template; the governance body accepts or rejects, recording each outcome · (b) governance-only proposals, no open intake · (c) the watchlist is frozen at the eight listed items
- **Recommended:** (a) — the spec's open question names new capability candidates; an open, recorded intake prevents capabilities slipping in by default.
- **Your choice:** ✏️

### D3 — Blockchain-anchoring assessment posture
- **Question:** IMPLEMENTATION-PLAN §11 requires a published blockchain-anchoring assessment before any anchoring ships. Publish the assessment now, or record a deferral?
- **Options:** (a) publish the blockchain-anchoring assessment now (proposal, risk, safeguards, sunset, approving body) with a recorded *deferral* decision · (b) record a bare deferral ("no proposal") and schedule the assessment · (c) leave the item unassessed until a spec proposes anchoring
- **Recommended:** (a) — the watchlist item needs a recorded assessment-or-deferral (acceptance criterion 6), and §11 assigns this assessment to this request; assessing-then-deferring closes the loop before any anchoring ships.
- **Your choice:** ✏️

### D4 — Sibling-owned watchlist items (hosted mail, identity/SSO)
- **Question:** How does this document record the two watchlist items owned by sibling specs — hosted mail relay (`privacy-preserving-email-relay`) and identity integrations/SSO-SCIM (`organisation-workspaces`)?
- **Options:** (a) record a deferral with a pointer to the owning spec's assessment, leaving the assessment itself to that spec · (b) publish this document's own full assessment of both items · (c) list the items with no status until the owning specs ship
- **Recommended:** (a) — one assessment per item, owned by the spec that ships it; this document stays the single watchlist with status + pointer (acceptance criterion 6 met without double-assessing).
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish `docs/red-lines-and-cautious-extensions.md` as the single source of truth, versioned with an effective date and changelog entry.
3. Write the nine red lines RL-1…RL-9 with their exact canonical wording from spec §5.2 items 1–9 and §5.3 (never paraphrase the prohibition).
4. Maintain the watchlist of the eight high-risk extensions (social feeds, rankings, automated AI-use inference, hosted mail, vendor sponsorship, identity integrations, blockchain anchoring, reputation scores) with a per-item status: assessed, deferred, or deferred-with-pointer — using your §1 D3/D4 choices.
5. Publish the assessment template (proposal, risk, safeguards, sunset, approving body) and the recording process (spec §5.2 item 11); record every assessment in the changelog.
6. Record the sibling-citation rule (spec §5.2 item 12): every sibling whose subject borders a watchlist item must cite this document and state how it stays clear.
7. Record the amendment rule (spec §5.2 item 13): amendments only via governance, with the governance-defined notice period, announced in the changelog.
8. Publish the machine-readable record (`docs/red-lines-and-cautious-extensions.json`) matching the §5.3 data model (redLines, watchlist, assessments).
9. Apply your §1 D1 (review interval) and D2 (expansion mechanism) in the document's operational rules.
10. Self-check against §4: every red line has a stable identifier and single wording; every watchlist item has an assessment or recorded deferral.

## 3. Constraints (must-nots)
- Never charge for use of the mark (RL-1); never require registration/identity (RL-2); never require tool/prompt disclosure (RL-3).
- Never sell paid placement (RL-4); never sell personal data or permit covert tracking (RL-5); never biometrics (RL-6).
- Never auto-publish in another's name (RL-7); never represent AI as responsible (RL-8); never reputation scores, trust scores, social feeds, or rankings of people (RL-9).
- The red lines cannot be sold, waived, or pay-walled away (§2); they are part of the free floor.
- No watchlist item may be explored without a published, governed assessment (spec §5.2 item 11).
- No amendment may weaken a red line outside the governed process with its notice period.

## 4. Acceptance criteria
- [ ] Every red line has a stable identifier (RL-1…RL-9) and a single canonical wording.
- [ ] The watchlist of eight items is maintained with a per-item status.
- [ ] Every watchlist item has either an assessment or a recorded deferral.
- [ ] The blockchain-anchoring assessment is published (or a deferral recorded) before any anchoring ships.
- [ ] The assessment template records proposal, risk, safeguards, sunset, and approving body.
- [ ] The sibling-citation rule (cite RL IDs, never restate wording) is stated.
- [ ] The amendment process and notice period are stated; amendments appear in the changelog.
- [ ] A machine-readable record (`docs/red-lines-and-cautious-extensions.json`) matches the §5.3 model.

## 5. Outputs to produce in the repository
- `docs/red-lines-and-cautious-extensions.md` — the versioned single source of truth (red lines, watchlist, assessment template and process, amendment rule).
- `docs/red-lines-and-cautious-extensions.json` — machine-readable redLines/watchlist/assessments (spec §5.3).

## 6. Read before building
- [`10-research-standards-deferred.md`](../../10-research-standards-deferred.md) — mini-plan
- [`red-lines-and-cautious-extensions-dsh.md`](../../../../suggestions/red-lines-and-cautious-extensions-dsh.md) — full spec
- [`07-safety-operations-research.md`](../../../digest/07-safety-operations-research.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
