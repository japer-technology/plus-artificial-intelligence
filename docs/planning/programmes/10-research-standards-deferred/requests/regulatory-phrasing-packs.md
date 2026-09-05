# Agent request — regulatory-phrasing-packs: Regulatory Phrasing Packs

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../../10-research-standards-deferred.md)
> **Source:** spec [`regulatory-phrasing-packs-dsh.md`](../../../../suggestions/regulatory-phrasing-packs-dsh.md) · seed [`regulatory-phrasing-packs.md`](../../../../suggestions/regulatory-phrasing-packs.md)
> **Effort:** M · **Phase:** P3 · **Position:** P3 — after the schema, so packs quote the real field names; EU AI Act Article 50-style examples first
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Re-review interval per jurisdiction class
- **Question:** What is the re-review interval for packs in fast-moving vs stable regimes (spec §10; digest "Open: re-review interval")?
- **Options:** (a) class-based intervals recorded per pack (e.g. fast-moving regimes 6-monthly, stable regimes 24-monthly), plus an event-driven re-review whenever the underlying rules change · (b) event-driven only (re-review on rule change, no standing cadence) · (c) a single uniform interval for all packs
- **Recommended:** (a) — spec §5.5 requires re-review when rules change and `outdated` labelling otherwise; a class-based cadence makes "outdated" predictable without over-reviewing stable regimes.
- **Your choice:** ✏️

### D2 — Sector working groups
- **Question:** Are sector packs gated behind a sector working group, and how do such groups form (spec §10; digest "Open: sector working groups")?
- **Options:** (a) sector packs require a sector working group formed via community-hub + governance, published before the pack ships · (b) sector packs ship under the same qualified-professional review, with no formal working group · (c) defer sector packs until a working-group mechanism exists elsewhere
- **Recommended:** (a) — a named group supplies the sector non-endorsement discipline (sector-and-language-directories) and gives the qualified-professional review a stable home.
- **Your choice:** ✏️

### D3 — Language/tier policy (English governs, reviewed-only translations)
- **Question:** How do packs handle language, given example texts sit beside jurisdiction-specific regulatory obligations (T1/T2)?
- **Options:** (a) English is the source of truth; normative-adjacent pack text is T1 (reviewed translations only), example prose is T2, and every pack records its professional reviewer metadata per language · (b) packs are authored in the jurisdiction's language with no English source · (c) English-only, no translation of pack content
- **Recommended:** (a) — matches the multi-language standard (English governs, R1; reviewed-only for T1/T2) and the spec's qualified-professional metadata requirement (§5.2 item 1).
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish the phrasing-pack format (`docs/regulatory-phrasing-packs.md`): professional reviewer metadata (role, credentials, date), the information-not-advice label, and coverage notes (spec §5.2 items 1–4).
3. Define the mandatory label and require it on every rendered example, download, and notification: "Information, not legal advice… they do not certify or imply compliance" (items 2–3).
4. Require per-pack coverage notes listing covered rules, versions, jurisdictions, and disclosed gaps (item 4).
5. Define the versioning + lifecycle rules: each version records reviewer, review date, and rules version; `outdated` packs are labelled, never silently updated; materially wrong packs are withdrawn with a dated notice and archived versions (items 5, 10).
6. Require verbatim preservation of the normative meaning where the mark's wording is quoted; adaptations flagged and never altering the meaning (item 6).
7. Specify static rendering + plain-text/markdown download, mirrorable from the offline pack, with the core packs free (items 8, §5.4).
8. Specify opt-in, tracking-free update notifications via changelog/RSS by default (item 11); paid maintenance is an optional convenience that never changes content, coverage, or labelling (item 9).
9. Apply your §1 D1 (re-review interval), D2 (sector working groups), and D3 (language/tier policy).
10. Self-check against §4: professional review recorded per pack; label everywhere; gaps disclosed; outdated/withdrawn handled; no payment changes content.

## 3. Constraints (must-nots)
- Never certify or imply compliance — examples are information, not legal advice (spec §5.2 items 2, 6).
- Pack content is never changed by payment (item 9).
- No advertising, vendor endorsement, or paid placement (RL-4 — item 7).
- Outdated packs are labelled `outdated`, never silently updated (item 5).
- Sector packs must not imply professional competence (item 7, per sector-and-language-directories).
- The mark's normative wording is preserved verbatim where quoted; adaptations flagged (item 6).

## 4. Acceptance criteria
- [ ] Every pack records its qualified professional review (role, credentials, date).
- [ ] The information-not-advice label appears on every example and download.
- [ ] Every pack publishes coverage notes with disclosed gaps.
- [ ] An outdated pack is labelled `outdated` and never silently updated.
- [ ] Pack content is never changed by payment.
- [ ] No advertising or paid placement appears in a pack.
- [ ] Packs download from the offline pack and mirror freely.
- [ ] A withdrawn pack leaves a dated notice and archived versions.

## 5. Outputs to produce in the repository
- `docs/regulatory-phrasing-packs.md` — the pack format, label regime, coverage-note and lifecycle rules.
- `site/regulatory-phrasing-packs/` — rendered packs with downloads (starting with EU AI Act Article 50-style examples).

## 6. Read before building
- [`10-research-standards-deferred.md`](../../10-research-standards-deferred.md) — mini-plan
- [`regulatory-phrasing-packs-dsh.md`](../../../../suggestions/regulatory-phrasing-packs-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
