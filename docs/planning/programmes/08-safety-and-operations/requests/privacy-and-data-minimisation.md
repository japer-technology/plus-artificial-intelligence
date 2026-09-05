# Agent request — privacy-and-data-minimisation: Privacy and Data Minimisation

> **Programme:** 08 · Safety and Operations — [`08-safety-and-operations.md`](../../08-safety-and-operations.md)
> **Source:** spec [`privacy-and-data-minimisation-dsh.md`](../../../../suggestions/privacy-and-data-minimisation-dsh.md) · seed [`privacy-and-data-minimisation.md`](../../../../suggestions/privacy-and-data-minimisation.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 template — every service's launch review must attach a completed analysis
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Deletion-cascade window
- **Question:** What is the default window within which lawful deletion must cascade to backups and derived indexes, given the spec only requires "a documented window" per service?
- **Options:** (a) the template requires each service to publish its own documented window, with a suggested project default of 30 days that a service may override only with a published reason · (b) fix a single project-wide 30-day window for all backup tiers and services · (c) leave the window blank in the template until the first hosted service defines it
- **Recommended:** (a) — spec §5.2.8 requires "a documented window" per service, not one global number; a template default with a justified override keeps the obligation enforceable without over-committing before any hosted service exists.
- **Your choice:** ✏️

### D2 — Pseudonym abuse carve-out
- **Question:** Does pseudonym support need an explicit abuse-reporting carve-out so pseudonymity cannot shield abuse?
- **Options:** (a) yes — state explicitly that pseudonyms receive every right of a named signer but do not shield abuse: moderation-disputes-and-appeals and security-and-abuse-controls may act on a pseudonymous record exactly as on a named one, and the policy records this carve-out · (b) no — pseudonyms are treated identically to named identities with no separate clause · (c) defer the wording to moderation-disputes-and-appeals entirely
- **Recommended:** (a) — spec §5.2.4 grants pseudonyms full rights; an explicit carve-out (with moderation owning enforcement) prevents pseudonymity from becoming an abuse shield while preserving those rights.
- **Your choice:** ✏️

### D3 — Jurisdiction erasure vs tombstone (joint with declaration-lifecycle, Programme 2)
- **Question:** How does this policy handle a jurisdiction-erasure request that forbids even a tombstone identifier, given the append-only declaration lifecycle?
- **Options:** (a) record the tension as a known legal risk and defer the mechanics to declaration-lifecycle (joint owner): lawful deletion is honoured within the jurisdiction's period, tombstones are governed by the lifecycle, and the append-only conflict is flagged for legal review — this policy does not unilaterally override either side · (b) mandate full tombstone removal on jurisdictional erasure, overriding the lifecycle · (c) mandate that tombstones always survive, refusing jurisdiction erasure
- **Recommended:** (a) — this is explicitly an IMPLEMENTATION-PLAN §11 open question with declaration-lifecycle as joint owner; a privacy policy must not unilaterally override the append-only design, so record it as a decision-to-escalate for legal review.
- **Your choice:** ✏️

### D4 — Translation tier of published analyses/notices
- **Question:** At what tier are published privacy analyses and notices offered, given they are legal-adjacent text?
- **Options:** (a) T1 — only `reviewed` translations are offered and English governs (R1), with the caveat that legal notices require their own legal review before any translation is marked `reviewed` · (b) T2 — explanatory tier with per-document fallback to English plus notice · (c) English-only with no translation path for now
- **Recommended:** (a) — published privacy analyses and notices are legal-adjacent (T1); R1 English-governs applies, and the legal-notice caveat means a translation of a legal notice is `reviewed` only after legal review, not just linguistic review.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy and data minimisation, accessibility).
2. Publish `docs/privacy-and-data-minimisation.md` — the privacy policy: collection minimisation, public-record/private-data separation, pseudonym support, retention schedules, exit rights (export, redaction, revocation, deletion), jurisdiction/processor list obligation, and the no-account local-only rule ("nothing leaves this device").
3. Publish the machine-readable per-field privacy-analysis template (spec §5.3 shape: `service`, `fields[name, purpose, recipients, retention, inferenceRisk, visibility, jurisdictions, processors]`, `published`) at `docs/privacy/privacy-analysis.template.json`, with the deletion-cascade window set per D1.
4. State the pseudonym abuse carve-out per D2; record the jurisdiction-erasure-vs-tombstone position per D3 (lawful deletion within the jurisdiction's period; tombstones governed by declaration-lifecycle; append-only conflict flagged for legal review).
5. Publish initial privacy analyses for the current surfaces — the static site (collects nothing) and the no-account builder (local-only, uploads nothing without an explicit previewed action) — and publish `site/privacy.html` as the public privacy notice plus the index of analyses, retention schedules, and jurisdiction/processor lists.
6. Document the account-settings requirement every hosted service must meet (one page each for export, redaction/revocation, deletion, and the service's own analysis view); the pages themselves are instantiated per hosted service at P3.
7. State that privacy analyses and notices are versioned documents announced through the changelog, and that retention schedules are reviewed when a service changes.
8. Give published analyses/notices a localisation path per the multi-language standard and D4: English source of truth (R1), per-document completeness or declared stub (R3), reviewed status requires a recorded reviewer (R5), resolution order `?lang=` → saved preference → browser → English (R12), English crawler/no-JS default (R13); legal notices need their own legal review before a translation is marked `reviewed`.
9. Self-check against §4.

## 3. Constraints (must-nots)
- No field collected without a documented purpose — the burden of justifying each field lies with the service.
- No selling, renting, or trading private data or public records (RL-5); derived insights only in the aggregated forms permitted by research observatory.
- No inferred or stored sensitive attributes (health, religion, politics, sexuality, biometrics) unless a party explicitly publishes them in a public record.
- Public records must be stored separately from authentication and billing data, with no cross-linking beyond what the record itself publishes.
- The no-account path uploads nothing without an explicit, previewed action.
- Export, redaction, revocation, and deletion are free-floor provisions — no payment and no justification required.
- Hosted-service gate: no P3 service ships without a completed privacy analysis against this policy (a launch-review condition, not negotiable).

## 4. Acceptance criteria
- [ ] Every public-facing service publishes a complete privacy analysis (initial set: static site + no-account builder).
- [ ] No service collects a field without a documented purpose.
- [ ] Public records are stored separately from authentication and billing data (stated as a binding rule).
- [ ] A pseudonymous signer completes the full journey without a legal name (stated as a binding rule).
- [ ] Every retained item has a published retention period that is enforced.
- [ ] Export, redaction, revocation, and deletion each complete without payment or justification.
- [ ] A lawful deletion request cascades to backups and indexes within the documented window (D1).
- [ ] No service sells or trades private data or public records.
- [ ] The no-account builder uploads nothing without an explicit previewed action.
- [ ] Jurisdiction/processor lists and retention schedules are published and updated when they change.
- [ ] The jurisdiction-erasure tension is recorded with declaration-lifecycle as joint owner (D3).
- [ ] Published analyses/notices carry the multi-language status (D4).

## 5. Outputs to produce in the repository
- `docs/privacy-and-data-minimisation.md` — the privacy policy (collection, separation, pseudonyms, retention, exit, jurisdiction/processors).
- `docs/privacy/privacy-analysis.template.json` — machine-readable per-field template (spec §5.3).
- `site/privacy.html` — public privacy notice + index of published analyses + retention schedules + jurisdiction/processor lists.

## 6. Read before building
- [`08-safety-and-operations.md`](../../08-safety-and-operations.md) — mini-plan
- [`privacy-and-data-minimisation-dsh.md`](../../../../suggestions/privacy-and-data-minimisation-dsh.md) — full spec
- [`07-safety-operations-research.md`](../../../digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
