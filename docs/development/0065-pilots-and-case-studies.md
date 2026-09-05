# Development task — pilots-and-case-studies: Pilots and Case Studies

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md)
> **Source:** spec [`pilots-and-case-studies-dsh.md`](../suggestions/pilots-and-case-studies-dsh.md) · seed [`pilots-and-case-studies.md`](../suggestions/pilots-and-case-studies.md)
> **Effort:** M · **Phase:** P2 · **Position:** P2 — THE-PLAN §13's institutional pilots need this methodology; it feeds Programme 9's training/consulting
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Small bounded pilots with creators/teams/schools/publishers plus published outcomes, failures, templates, and case studies.
- **Why now / risk of deferring:** THE-PLAN §13's institutional pilots need this methodology, and it feeds Programme 9's training/consulting. Deferring leaves the publication-ethics control — the close-out approval step — undefined, and that step is the guard against the pilot-publication-ethics risk.
- **Features to deliver:**
  - A pilot-plan template (scope, participants, measures, duration, end point, support, conflicts, languages — §5.2 item 1).
  - A consent + publication-approval process (explicit recorded consent, withdrawal honoured, participant approval of final identifying text — §5.2 items 2, 4).
  - A close-out template (outcomes vs measures, failures, reusable outputs — §5.2 item 9).
  - The failures-published-with-equal-care rule (§5.2 item 5).
  - Reusable templates/checklists published openly and meeting the accessibility floor (§5.2 item 7).
  - A named end point per pilot (§5.2 items 1, 9).
  - No rankings/certification framing (RL-9 — §5.2 item 10).
  - The child-safe-education precondition for school pilots (§5.2 item 8).
  - Static plan/close-out pages linked from changelog/RSS (§5.4).
- **Depends on:** experiments-and-metrics (measurement), child-safe-education (school pilots), sector-and-language-directories (audience), community-hub (publication).

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Observatory feed (anonymised learnings + thresholds)
- **Question:** Should pilot close-outs feed anonymised learnings into the research observatory, and under which thresholds (spec §10; digest "Open: feed learnings into observatory")?
- **Option (a):** yes — feed anonymised, aggregated learnings only, with a minimum-cell threshold (no single participant identifiable)
  - **For:** spec §7 already says the research observatory "may study pilot outcomes only in aggregated forms" — an anonymised, thresholded feed honours that while keeping the flow automatic, closing the digest's open item without a per-pilot consent gate.
  - **Against:** the minimum-cell threshold must actually guarantee "no single participant identifiable"; it is left to be set here, and a small-cell pilot could still risk re-identification if the threshold is too low.
- **Option (b):** yes — feed only when the pilot and its participants consent to a second use, per observatory privacy rules
  - **For:** consent-gating matches the spec's consent-first ethos (§5.2 items 2, 4: explicit recorded consent, publication approval).
  - **Against:** it burdens every pilot with an extra consent decision, and where consent is withheld the observatory loses learnings the spec §7 otherwise permits in aggregated form.
- **Option (c):** no — close-outs stay standalone; the observatory may study them only as public artifacts
  - **For:** keeping close-outs standalone is the simplest reading of §5.2 item 9 (written close-out record) and avoids any data-movement risk.
  - **Against:** it ignores the digest's open item ("feed learnings into observatory") and forgoes the cross-pilot learning the observatory's aggregation (§7) is meant to enable.
- **Recommended:** (a) — the spec §7 already allows aggregated-only study; making the feed anonymised-and-thresholded (rather than consent-gated per pilot) keeps it automatic without weakening privacy.
- **Your choice:** ✏️

### D2 — Localisation posture (English-first, reviewed translations)
- **Question:** How are pilot templates and published case studies localised, given they are T2 published outcomes (spec §5.2 items 1 and 7 require serving the pilot's languages)?
- **Option (a):** publish English-first (T2); add the pilot's languages as `reviewed` translations only, never machine-drafts presented as reviewed
  - **For:** spec §5.2 item 7 requires reusable outputs to "meet the accessibility floor in the pilot's languages"; the multi-language standard (R1 English governs, R5 reviewed-only for T2) makes English-first + reviewed translations the compliant path.
  - **Against:** reviewed translations cost reviewer effort per language, so a pilot in a language with no available reviewer cannot fully satisfy item 7 until one exists.
- **Option (b):** publish English-only unless a translation is explicitly requested
  - **For:** English-only is the cheapest path, and R1 already makes English the source of truth.
  - **Against:** spec §5.2 items 1 and 7 explicitly require stating the pilot's languages and meeting the accessibility floor in them — English-only leaves those obligations unmet.
- **Option (c):** allow `machine-draft` case studies with a visible draft notice
  - **For:** machine-draft case studies with a notice spread outcomes faster and cheaply.
  - **Against:** the multi-language standard (R5) says machine-draft text "MUST NOT be presented as reviewed meaning"; case studies are published T2 outcomes, where only reviewed translations qualify for item 7's floor.
- **Recommended:** (a) — the multi-language standard (R1/R5) plus the spec's own "outputs meet the floor in the pilot's languages" obligation point to reviewed translations for published outcomes.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish the pilot-plan template (`docs/pilots-and-case-studies/pilot-plan-template.md`) capturing scope, participants, measures, duration, end point, support, conflicts, and languages (spec §5.2 item 1).
3. Publish the consent + publication-approval process (`docs/pilots-and-case-studies/consent-and-publication-approval.md`): explicit recorded consent, withdrawal honoured before release, participant approval of final identifying text (spec §5.2 items 2, 4).
4. Publish the close-out template (`docs/pilots-and-case-studies/close-out-template.md`): outcomes against measures, failures, and reusable outputs (spec §5.2 item 9).
5. Publish reusable templates/checklists openly and accessibly (`docs/pilots-and-case-studies/checklists.md`), meeting the accessibility floor (spec §5.2 item 7).
6. State the rules: failures/negative outcomes published with the same care as successes (item 5); named end point per pilot (items 1, 9); no rankings or certification framing (RL-9 — item 10); school/minor pilots require child-safe education first (item 8).
7. Specify the static rendering path: pilot plans and close-outs render as static pages linked from the changelog/RSS feed, with case studies linking back to their plan (spec §5.4).
8. Apply your §2 D1 (observatory feed) and D2 (localisation posture) in the process and templates.
9. Self-check against §5: every requirement has a home in the template or process; no surface implies certification or ranking.

## 4. Constraints (must-nots)
- No participant identified without recorded, specific approval (spec §5.2 items 2, 4).
- A participant's publication withdrawal is honoured before release and recorded, not hidden (§5.5).
- No rankings or comparative scores of participants (RL-9); no certification framing.
- Measures are defined before the pilot starts and never change mid-pilot; changes are reported as such (§5.2 item 3).
- Minors/schools require child-safe education before start (§5.2 item 8).
- Case studies must not read as endorsements or marketing (§5.2 item 6).

## 5. Acceptance criteria
- [ ] Every pilot publishes its plan before starting (scope, measures, duration, end point, support, conflicts, languages).
- [ ] No participant appears in a case study without recorded, specific approval.
- [ ] A participant's publication withdrawal is honoured before release.
- [ ] A failed pilot's close-out is published with its failures explained.
- [ ] Reusable templates are published openly and meet the accessibility floor.
- [ ] Every pilot has a named end point and a written close-out record.
- [ ] No pilot output ranks participants or implies certification.
- [ ] A school pilot satisfies child-safe education before starting.
- [ ] Plans and close-outs are linked from the changelog/RSS feed.

## 6. Outputs to produce in the repository
- `docs/pilots-and-case-studies/pilot-plan-template.md` — pre-start plan template.
- `docs/pilots-and-case-studies/consent-and-publication-approval.md` — consent and publication-approval process.
- `docs/pilots-and-case-studies/close-out-template.md` — close-out record template.
- `docs/pilots-and-case-studies/checklists.md` — reusable open checklists/guides.

## 7. Read before building
- [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md) — mini-plan
- [`pilots-and-case-studies-dsh.md`](../suggestions/pilots-and-case-studies-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
