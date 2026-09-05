# Agent request — pilots-and-case-studies: Pilots and Case Studies

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../../10-research-standards-deferred.md)
> **Source:** spec [`pilots-and-case-studies-dsh.md`](../../../../suggestions/pilots-and-case-studies-dsh.md) · seed [`pilots-and-case-studies.md`](../../../../suggestions/pilots-and-case-studies.md)
> **Effort:** M · **Phase:** P2 · **Position:** P2 — THE-PLAN §13's institutional pilots need this methodology; it feeds Programme 9's training/consulting
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Observatory feed (anonymised learnings + thresholds)
- **Question:** Should pilot close-outs feed anonymised learnings into the research observatory, and under which thresholds (spec §10; digest "Open: feed learnings into observatory")?
- **Options:** (a) yes — feed anonymised, aggregated learnings only, with a minimum-cell threshold (no single participant identifiable) · (b) yes — feed only when the pilot and its participants consent to a second use, per observatory privacy rules · (c) no — close-outs stay standalone; the observatory may study them only as public artifacts
- **Recommended:** (a) — the spec §7 already allows aggregated-only study; making the feed anonymised-and-thresholded (rather than consent-gated per pilot) keeps it automatic without weakening privacy.
- **Your choice:** ✏️

### D2 — Localisation posture (English-first, reviewed translations)
- **Question:** How are pilot templates and published case studies localised, given they are T2 published outcomes (spec §5.2 items 1 and 7 require serving the pilot's languages)?
- **Options:** (a) publish English-first (T2); add the pilot's languages as `reviewed` translations only, never machine-drafts presented as reviewed · (b) publish English-only unless a translation is explicitly requested · (c) allow `machine-draft` case studies with a visible draft notice
- **Recommended:** (a) — the multi-language standard (R1/R5) plus the spec's own "outputs meet the floor in the pilot's languages" obligation point to reviewed translations for published outcomes.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish the pilot-plan template (`docs/pilots-and-case-studies/pilot-plan-template.md`) capturing scope, participants, measures, duration, end point, support, conflicts, and languages (spec §5.2 item 1).
3. Publish the consent + publication-approval process (`docs/pilots-and-case-studies/consent-and-publication-approval.md`): explicit recorded consent, withdrawal honoured before release, participant approval of final identifying text (spec §5.2 items 2, 4).
4. Publish the close-out template (`docs/pilots-and-case-studies/close-out-template.md`): outcomes against measures, failures, and reusable outputs (spec §5.2 item 9).
5. Publish reusable templates/checklists openly and accessibly (`docs/pilots-and-case-studies/checklists.md`), meeting the accessibility floor (spec §5.2 item 7).
6. State the rules: failures/negative outcomes published with the same care as successes (item 5); named end point per pilot (items 1, 9); no rankings or certification framing (RL-9 — item 10); school/minor pilots require child-safe education first (item 8).
7. Specify the static rendering path: pilot plans and close-outs render as static pages linked from the changelog/RSS feed, with case studies linking back to their plan (spec §5.4).
8. Apply your §1 D1 (observatory feed) and D2 (localisation posture) in the process and templates.
9. Self-check against §4: every requirement has a home in the template or process; no surface implies certification or ranking.

## 3. Constraints (must-nots)
- No participant identified without recorded, specific approval (spec §5.2 items 2, 4).
- A participant's publication withdrawal is honoured before release and recorded, not hidden (§5.5).
- No rankings or comparative scores of participants (RL-9); no certification framing.
- Measures are defined before the pilot starts and never change mid-pilot; changes are reported as such (§5.2 item 3).
- Minors/schools require child-safe education before start (§5.2 item 8).
- Case studies must not read as endorsements or marketing (§5.2 item 6).

## 4. Acceptance criteria
- [ ] Every pilot publishes its plan before starting (scope, measures, duration, end point, support, conflicts, languages).
- [ ] No participant appears in a case study without recorded, specific approval.
- [ ] A participant's publication withdrawal is honoured before release.
- [ ] A failed pilot's close-out is published with its failures explained.
- [ ] Reusable templates are published openly and meet the accessibility floor.
- [ ] Every pilot has a named end point and a written close-out record.
- [ ] No pilot output ranks participants or implies certification.
- [ ] A school pilot satisfies child-safe education before starting.
- [ ] Plans and close-outs are linked from the changelog/RSS feed.

## 5. Outputs to produce in the repository
- `docs/pilots-and-case-studies/pilot-plan-template.md` — pre-start plan template.
- `docs/pilots-and-case-studies/consent-and-publication-approval.md` — consent and publication-approval process.
- `docs/pilots-and-case-studies/close-out-template.md` — close-out record template.
- `docs/pilots-and-case-studies/checklists.md` — reusable open checklists/guides.

## 6. Read before building
- [`10-research-standards-deferred.md`](../../10-research-standards-deferred.md) — mini-plan
- [`pilots-and-case-studies-dsh.md`](../../../../suggestions/pilots-and-case-studies-dsh.md) — full spec
- [`07-safety-operations-research.md`](../../../digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
