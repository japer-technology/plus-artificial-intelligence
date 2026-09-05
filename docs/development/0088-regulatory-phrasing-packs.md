# Development task — regulatory-phrasing-packs: Regulatory Phrasing Packs

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md)
> **Source:** spec [`regulatory-phrasing-packs-dsh.md`](../suggestions/regulatory-phrasing-packs-dsh.md) · seed [`regulatory-phrasing-packs.md`](../suggestions/regulatory-phrasing-packs.md)
> **Effort:** M · **Phase:** P3 · **Position:** P3 — after the schema, so packs quote the real field names; EU AI Act Article 50-style examples first
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Jurisdiction/sector example texts showing a declaration beside regulatory obligations — information, not legal advice.
- **Why now / risk of deferring:** It lands in P3, after the schema so packs quote the real field names. Deferring leaves the information-not-advice boundary undefended, risking examples drifting into compliance or certification framing (the spec's §5.2 items 2 and 6).
- **Features to deliver:**
  - The phrasing-pack format (qualified-professional reviewer metadata, label, coverage notes — §5.2 items 1–4).
  - The information-not-advice label on every example, download, and notification (§5.2 items 2–3).
  - Per-pack coverage notes with disclosed gaps (§5.2 item 4).
  - Versioning with reviewer + review date + rules version, and the `outdated`/withdrawn lifecycle (§5.2 items 5, 10).
  - Static rendering and plain-text/markdown download (§5.4).
  - Opt-in, tracking-free changelog/RSS update notifications (§5.2 item 11).
  - Free core packs mirrorable from the offline pack (§5.2 item 8).
  - Paid maintenance as an optional convenience that never changes content or labelling (§5.2 item 9).
- **Depends on:** portable-declaration-schema, public-usage-guidelines, sector-and-language-directories (placement), translation-governance.

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Re-review interval per jurisdiction class
- **Question:** What is the re-review interval for packs in fast-moving vs stable regimes (spec §10; digest "Open: re-review interval")?
- **Option (a):** class-based intervals recorded per pack (e.g. fast-moving regimes 6-monthly, stable regimes 24-monthly), plus an event-driven re-review whenever the underlying rules change
  - **For:** spec §5.5 requires "packs are re-reviewed when the underlying rules change; un-reviewed packs become `outdated`" — a class cadence plus event-driven re-review covers both the standing and the change-triggered obligations, making `outdated` predictable.
  - **Against:** recording intervals per pack adds metadata burden, and a fast-moving regime can still drift in the gap between 6-monthly reviews.
- **Option (b):** event-driven only (re-review on rule change, no standing cadence)
  - **For:** event-driven only matches the letter of §5.5 ("re-reviewed when the underlying rules change") with minimal process.
  - **Against:** with no standing cadence, a pack in a fast-moving regime could sit unreviewed for long stretches, and §5.5's "un-reviewed packs become `outdated`" would force constant `outdated` labelling with no schedule to clear it.
- **Option (c):** a single uniform interval for all packs
  - **For:** a single interval is simple and uniform across all packs.
  - **Against:** it over-reviews stable regimes (waste) or under-reviews fast-moving ones (staleness risk), contrary to §10's explicit "fast-moving versus stable regimes" axis.
- **Recommended:** (a) — spec §5.5 requires re-review when rules change and `outdated` labelling otherwise; a class-based cadence makes "outdated" predictable without over-reviewing stable regimes.
- **Your choice:** ✏️

### D2 — Sector working groups
- **Question:** Are sector packs gated behind a sector working group, and how do such groups form (spec §10; digest "Open: sector working groups")?
- **Option (a):** sector packs require a sector working group formed via community-hub + governance, published before the pack ships
  - **For:** spec §10 asks "whether sector packs should be gated behind a sector working group, and how working groups form"; community-hub + governance gives a concrete formation path, and the group carries sector-and-language-directories' non-competence-implication rules (§5.2 item 7).
  - **Against:** a working-group requirement slows first sector packs and adds governance overhead before any sector pack can ship.
- **Option (b):** sector packs ship under the same qualified-professional review, with no formal working group
  - **For:** qualified-professional review (already required by §5.2 item 1) is sufficient for sector packs, so no group is needed and packs ship faster.
  - **Against:** without a group there is no stable home for the sector non-endorsement discipline (§5.2 item 7 cites sector-and-language-directories), leaving sector competence-implying risks less controlled.
- **Option (c):** defer sector packs until a working-group mechanism exists elsewhere
  - **For:** deferring avoids creating a mechanism before it is needed elsewhere.
  - **Against:** it leaves §10's open question ("whether sector packs should be gated behind a sector working group") unanswered and blocks a whole pack class indefinitely.
- **Recommended:** (a) — a named group supplies the sector non-endorsement discipline (sector-and-language-directories) and gives the qualified-professional review a stable home.
- **Your choice:** ✏️

### D3 — Language/tier policy (English governs, reviewed-only translations)
- **Question:** How do packs handle language, given example texts sit beside jurisdiction-specific regulatory obligations (T1/T2)?
- **Option (a):** English is the source of truth; normative-adjacent pack text is T1 (reviewed translations only), example prose is T2, and every pack records its professional reviewer metadata per language
  - **For:** the multi-language standard (R1 English governs; T1/T2 tiering for normative-adjacent vs example prose) matches the packs' jurisdiction-adjacent nature, and §5.2 item 1's qualified-professional metadata requirement is naturally recorded per language.
  - **Against:** maintaining reviewed translations for T1 text across many languages is the heaviest option and depends on reviewer availability.
- **Option (b):** packs are authored in the jurisdiction's language with no English source
  - **For:** authoring in the jurisdiction's language avoids translation and reads natively.
  - **Against:** it contradicts R1 (English governs as source of truth) and breaks the project's single-source discipline; the qualified-professional review would not trace to a canonical English source.
- **Option (c):** English-only, no translation of pack content
  - **For:** English-only is simplest and cheapest.
  - **Against:** example texts sit beside jurisdiction-specific obligations (§10 framing), so an English-only pack is unusable in many jurisdictions and fails the multi-language standard's tiering for published content.
- **Recommended:** (a) — matches the multi-language standard (English governs, R1; reviewed-only for T1/T2) and the spec's qualified-professional metadata requirement (§5.2 item 1).
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish the phrasing-pack format (`docs/regulatory-phrasing-packs.md`): professional reviewer metadata (role, credentials, date), the information-not-advice label, and coverage notes (spec §5.2 items 1–4).
3. Define the mandatory label and require it on every rendered example, download, and notification: "Information, not legal advice… they do not certify or imply compliance" (items 2–3).
4. Require per-pack coverage notes listing covered rules, versions, jurisdictions, and disclosed gaps (item 4).
5. Define the versioning + lifecycle rules: each version records reviewer, review date, and rules version; `outdated` packs are labelled, never silently updated; materially wrong packs are withdrawn with a dated notice and archived versions (items 5, 10).
6. Require verbatim preservation of the normative meaning where the mark's wording is quoted; adaptations flagged and never altering the meaning (item 6).
7. Specify static rendering + plain-text/markdown download, mirrorable from the offline pack, with the core packs free (items 8, §5.4).
8. Specify opt-in, tracking-free update notifications via changelog/RSS by default (item 11); paid maintenance is an optional convenience that never changes content, coverage, or labelling (item 9).
9. Apply your §2 D1 (re-review interval), D2 (sector working groups), and D3 (language/tier policy).
10. Self-check against §5: professional review recorded per pack; label everywhere; gaps disclosed; outdated/withdrawn handled; no payment changes content.

## 4. Constraints (must-nots)
- Never certify or imply compliance — examples are information, not legal advice (spec §5.2 items 2, 6).
- Pack content is never changed by payment (item 9).
- No advertising, vendor endorsement, or paid placement (RL-4 — item 7).
- Outdated packs are labelled `outdated`, never silently updated (item 5).
- Sector packs must not imply professional competence (item 7, per sector-and-language-directories).
- The mark's normative wording is preserved verbatim where quoted; adaptations flagged (item 6).

## 5. Acceptance criteria
- [ ] Every pack records its qualified professional review (role, credentials, date).
- [ ] The information-not-advice label appears on every example and download.
- [ ] Every pack publishes coverage notes with disclosed gaps.
- [ ] An outdated pack is labelled `outdated` and never silently updated.
- [ ] Pack content is never changed by payment.
- [ ] No advertising or paid placement appears in a pack.
- [ ] Packs download from the offline pack and mirror freely.
- [ ] A withdrawn pack leaves a dated notice and archived versions.

## 6. Outputs to produce in the repository
- `docs/regulatory-phrasing-packs.md` — the pack format, label regime, coverage-note and lifecycle rules.
- `site/regulatory-phrasing-packs/` — rendered packs with downloads (starting with EU AI Act Article 50-style examples).

## 7. Read before building
- [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md) — mini-plan
- [`regulatory-phrasing-packs-dsh.md`](../suggestions/regulatory-phrasing-packs-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
