# Agent request — evidence-labels-not-trust-scores: Evidence Labels, Not Trust Scores

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../../02-trust-foundations.md)
> **Source:** spec [`evidence-labels-not-trust-scores-dsh.md`](../../../../suggestions/evidence-labels-not-trust-scores-dsh.md) · seed [`evidence-labels-not-trust-scores.md`](../../../../suggestions/evidence-labels-not-trust-scores.md)
> **Effort:** S · **Phase:** P0 · **Position:** first — the checker's contract is written in it
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Default expiry/staleness windows per check method
- **Question:** What default expiry windows make each label go `stale` when its evidence can no longer be reproduced? (spec §10; owned jointly with proofs-of-control — keep the answer identical there.)
- **Options:** (a) Per-method table (e.g. mailbox 90 days, domain 90 days, artifact-location 90 days, key 365 days, account session-scoped) · (b) One uniform window (e.g. 180 days) for all non-session methods · (c) Session-scoped only — every label is recomputed per check and nothing persists past the session.
- **Recommended:** (a) — §5.2.7 of proofs-of-control and §5.2.10 here both require per-method windows, and account proof is session-scoped while key proof may last longer.
- **Your choice:** ✏️

### D2 — `spec-version-valid` default view
- **Question:** Should `spec-version-valid` distinguish "current" from "archived but legitimate" in the default view, or report both as simply valid?
- **Options:** (a) Distinguish: render "current" vs "archived but legitimate" so old-but-honest declarations read differently from newly-issued ones · (b) Collapse both to one `spec-version-valid` value, with the current/archived distinction available only on request · (c) Report only "current" as valid and flag archived versions separately.
- **Recommended:** (a) — "archived but legitimate" is exactly the kind of honest, dated fact this vocabulary exists to preserve, and it keeps old declarations valid referents without implying they are current.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Write the canonical label vocabulary with a one-line meaning and production method per label (`self-declared`, `mailbox-confirmed`, `domain-controlled`, `account-controlled`, `artifact-controlled`, `key-controlled`, `schema-valid`, `signature-valid`, `hash-matched`, `spec-version-valid`, `last-checked`, `stale`, `check-failed`, `revoked`, `disputed`).
2. Specify custom-label namespacing and the rule that custom labels are clearly separated from canonical ones.
3. Write the label + check-date rendering rules, the `stale`/`never checked`/`check-failed` states, and the freshness reporting that is separate from the label itself.
4. Write the mandatory disclaimer text (spec §5.2.12 verbatim) and the rule that it appears on every results surface, including QR targets and directory rows.
5. Specify the structured label-set output shape with no aggregate score field, and the rendering order (status → control → integrity → freshness).
6. Record the expiry/staleness windows per D1 and the `spec-version-valid` behaviour per D2.
7. Self-check the result against §4 acceptance criteria before finishing.
8. **Spine freeze check (note for the agent):** this spec is one of the four freeze-check members. Ensure the labels it defines (`hash-matched`, `check-failed`, `schema-valid`, `signature-valid`, `self-declared`) are worded so they compose exactly with artifact-hashing-and-binding, portable-declaration-schema, and declaration-lifecycle; flag any mismatch in your result for the joint review before Programme 3.

## 3. Constraints (must-nots)
- No single colour/checkmark/badge/score summarising multiple labels — no aggregate verdict anywhere.
- "Schema valid"/"signature valid" never imply claims are true.
- Failed checks are `check-failed` + reason, never negative trust.
- Colour, icons, and numerals are decorations only; text alone must carry the full meaning.
- No paid service may suppress or upgrade a label; the full vocabulary stays free.

## 4. Acceptance criteria
- [ ] No shipped interface displays a single aggregated verdict for a declaration.
- [ ] Every displayed label includes its check date or "never checked".
- [ ] A declaration with only self-declared fields is presented with `self-declared` on every such field.
- [ ] A failed check renders as `check-failed` plus a reason category, not as a negative score.
- [ ] Reading a results page with styles disabled still conveys every label and its date.
- [ ] The mandatory disclaimer appears on every results surface, including QR targets and directory rows.
- [ ] Status labels update from lifecycle events without requiring a recheck.
- [ ] An expired control label renders as `stale` with its original check date.
- [ ] The API exposes labels as structured data with no aggregate score field.

## 5. Outputs to produce in the repository
- `docs/vocabularies/evidence-labels.md` — canonical label vocabulary, namespacing rules, rendering rules, disclaimer text, expiry/staleness windows, structured label-set output shape.

## 6. Read before building
- [`02-trust-foundations.md`](../../02-trust-foundations.md) — mini-plan
- [`evidence-labels-not-trust-scores-dsh.md`](../../../../suggestions/evidence-labels-not-trust-scores-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../../../digest/03-registers-and-discovery.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
