# Development task — privacy-and-data-minimisation: Privacy and Data Minimisation

> **Programme:** 08 · Safety and Operations — [`08-safety-and-operations.md`](../planning/programmes/08-safety-and-operations.md)
> **Source:** spec [`privacy-and-data-minimisation-dsh.md`](../suggestions/privacy-and-data-minimisation-dsh.md) · seed [`privacy-and-data-minimisation.md`](../suggestions/privacy-and-data-minimisation.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 template — every service's launch review must attach a completed analysis
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Privacy obligations for every service: collect only what a feature needs, separate public/private data, support pseudonyms, make export/redaction/revocation/deletion practical.
- **Why now / risk of deferring:** P0 gate — every service's launch review must attach a completed privacy analysis, so the template has to exist before any P3 service ships. Risk of deferring: policy-only safety — the analysis template must be wired into launch review or it decays into prose nobody re-reads.
- **Features to deliver:**
  - Privacy policy at `docs/privacy-and-data-minimisation.md` covering collection minimisation, public/private separation, pseudonym support, retention schedules, exit rights (export/redaction/revocation/deletion), and jurisdiction/processor lists.
  - Machine-readable per-field privacy-analysis template (spec §5.3 shape).
  - Published analyses for the static site (collects nothing) and the no-account builder (local-only).
  - Public `site/privacy.html` notice + analysis index.
  - Account-settings page requirement (export / redaction-revocation / deletion / analysis view), instantiated per hosted service at P3.
- **Depends on:** declaration-lifecycle, visibility-and-consent, security-and-abuse-controls

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Deletion-cascade window
- **Question:** What is the default window within which lawful deletion must cascade to backups and derived indexes, given the spec only requires "a documented window" per service?
- **Option (a):** the template requires each service to publish its own documented window, with a suggested project default of 30 days that a service may override only with a published reason
  - **For:** spec §5.2.8 requires only "a documented window" per service, and a per-service default with a justified override matches that wording. Digest "Open: deletion-cascade window" marks the number unresolved, so a template default avoids premature commitment.
  - **Against:** a suggested 30-day default is a number the spec never supplies; a service could lean on the override and erode the uniform expectation the acceptance criterion ("cascades ... within the documented window (D1)") implies.
- **Option (b):** fix a single project-wide 30-day window for all backup tiers and services
  - **For:** one fixed window makes the obligation uniformly checkable across every service and every backup tier.
  - **Against:** spec §5.2.8 deliberately says "a documented window" per service, not one global number; fixing 30 days over-commits before any hosted service exists and ignores that backup tiers may legitimately need different windows.
- **Option (c):** leave the window blank in the template until the first hosted service defines it
  - **For:** invents no number the spec never supplies and leaves the field honest until a real service needs it.
  - **Against:** a blank template fails the acceptance criterion that the window is documented (spec §5.2.8), leaving the obligation unenforceable at launch review — exactly the "policy-only safety" decay risk.
- **Recommended:** (a) — spec §5.2.8 requires "a documented window" per service, not one global number; a template default with a justified override keeps the obligation enforceable without over-committing before any hosted service exists.
- **Your choice:** ✏️

### D2 — Pseudonym abuse carve-out
- **Question:** Does pseudonym support need an explicit abuse-reporting carve-out so pseudonymity cannot shield abuse?
- **Option (a):** yes — state explicitly that pseudonyms receive every right of a named signer but do not shield abuse: moderation-disputes-and-appeals and security-and-abuse-controls may act on a pseudonymous record exactly as on a named one, and the policy records this carve-out
  - **For:** spec §5.2.4 grants pseudonyms full rights; an explicit carve-out preserves those rights while letting moderation-disputes-and-appeals and security-and-abuse-controls act on abuse — the exact tension spec §10 and digest "Open: pseudonym abuse carve-out" raise.
  - **Against:** adds a separate clause the spec does not spell out; if worded loosely it could be read as weakening the "pseudonyms are people" principle (spec §5.1.3).
- **Option (b):** no — pseudonyms are treated identically to named identities with no separate clause
  - **For:** simplest, and it matches spec §5.1.3 "pseudonyms are people" with no extra wording.
  - **Against:** leaves the abuse question unaddressed — spec §10 explicitly asks whether a carve-out is needed and the digest lists it as "Open", so silence risks pseudonymity becoming an abuse shield.
- **Option (c):** defer the wording to moderation-disputes-and-appeals entirely
  - **For:** keeps this policy clean and puts enforcement wording where enforcement lives (moderation).
  - **Against:** spec §10 raises it as this spec's own open question; deferring entirely means the policy publishes nothing about abuse, leaving the pseudonym journey and abuse handling able to conflict later.
- **Recommended:** (a) — spec §5.2.4 grants pseudonyms full rights; an explicit carve-out (with moderation owning enforcement) prevents pseudonymity from becoming an abuse shield while preserving those rights.
- **Your choice:** ✏️

### D3 — Jurisdiction erasure vs tombstone (joint with declaration-lifecycle, Programme 2)
- **Question:** How does this policy handle a jurisdiction-erasure request that forbids even a tombstone identifier, given the append-only declaration lifecycle?
- **Option (a):** record the tension as a known legal risk and defer the mechanics to declaration-lifecycle (joint owner): lawful deletion is honoured within the jurisdiction's period, tombstones are governed by the lifecycle, and the append-only conflict is flagged for legal review — this policy does not unilaterally override either side
  - **For:** spec §5.2.7 requires lawful deletion be honoured within the jurisdiction's period, while §2 says this spec does not own deletion mechanics (declaration-lifecycle does); (a) honours both without overriding either. Brainstorm D3 notes it is escalated to legal review rather than resolved here.
  - **Against:** defers a real legal conflict to legal review rather than resolving it, so the append-only/tombstone tension stays open until that review happens.
- **Option (b):** mandate full tombstone removal on jurisdictional erasure, overriding the lifecycle
  - **For:** honours spec §5.2.7's lawful-deletion obligation to the letter — erasure within the period even where tombstones are prohibited.
  - **Against:** overrides the append-only declaration lifecycle that this spec's §2 says it does not own, breaking the tombstone and no-silent-change guarantees declaration-lifecycle provides.
- **Option (c):** mandate that tombstones always survive, refusing jurisdiction erasure
  - **For:** protects the append-only integrity and tombstone-based accountability the lifecycle depends on.
  - **Against:** refuses a jurisdiction-erasure requirement, conflicting with spec §5.2.7's obligation to honour lawful deletion within the jurisdiction's period.
- **Recommended:** (a) — this is explicitly an IMPLEMENTATION-PLAN §11 open question with declaration-lifecycle as joint owner; a privacy policy must not unilaterally override the append-only design, so record it as a decision-to-escalate for legal review.
- **Your choice:** ✏️

### D4 — Translation tier of published analyses/notices
- **Question:** At what tier are published privacy analyses and notices offered, given they are legal-adjacent text?
- **Option (a):** T1 — only `reviewed` translations are offered and English governs (R1), with the caveat that legal notices require their own legal review before any translation is marked `reviewed`
  - **For:** privacy analyses and notices are legal-adjacent text, matching T1 "reviewed-only"; the brainstorm multi-language placement records these as T1 with R1 English-governs. The legal-notice caveat matches instruction step 8's requirement that legal notices get their own review.
  - **Against:** T1 is the highest bar — every translation needs a recorded reviewer (R5), which is slower and costlier before any hosted service exists.
- **Option (b):** T2 — explanatory tier with per-document fallback to English plus notice
  - **For:** T2 is faster and cheaper, still giving non-English readers a fallback rather than nothing.
  - **Against:** legal-adjacent notices at T2 would let a machine or partial translation stand in for a legal document; the brainstorm explicitly places analyses/notices at T1, not T2.
- **Option (c):** English-only with no translation path for now
  - **For:** cheapest and avoids any risk of a mistranslated legal notice.
  - **Against:** fails the multi-language standard's accessibility expectation, and contradicts the brainstorm's recorded T1 placement for analyses/notices.
- **Recommended:** (a) — published privacy analyses and notices are legal-adjacent (T1); R1 English-governs applies, and the legal-notice caveat means a translation of a legal notice is `reviewed` only after legal review, not just linguistic review.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy and data minimisation, accessibility).
2. Publish `docs/privacy-and-data-minimisation.md` — the privacy policy: collection minimisation, public-record/private-data separation, pseudonym support, retention schedules, exit rights (export, redaction, revocation, deletion), jurisdiction/processor list obligation, and the no-account local-only rule ("nothing leaves this device").
3. Publish the machine-readable per-field privacy-analysis template (spec §5.3 shape: `service`, `fields[name, purpose, recipients, retention, inferenceRisk, visibility, jurisdictions, processors]`, `published`) at `docs/privacy/privacy-analysis.template.json`, with the deletion-cascade window set per D1.
4. State the pseudonym abuse carve-out per D2; record the jurisdiction-erasure-vs-tombstone position per D3 (lawful deletion within the jurisdiction's period; tombstones governed by declaration-lifecycle; append-only conflict flagged for legal review).
5. Publish initial privacy analyses for the current surfaces — the static site (collects nothing) and the no-account builder (local-only, uploads nothing without an explicit previewed action) — and publish `site/privacy.html` as the public privacy notice plus the index of analyses, retention schedules, and jurisdiction/processor lists.
6. Document the account-settings requirement every hosted service must meet (one page each for export, redaction/revocation, deletion, and the service's own analysis view); the pages themselves are instantiated per hosted service at P3.
7. State that privacy analyses and notices are versioned documents announced through the changelog, and that retention schedules are reviewed when a service changes.
8. Give published analyses/notices a localisation path per the multi-language standard and D4: English source of truth (R1), per-document completeness or declared stub (R3), reviewed status requires a recorded reviewer (R5), resolution order `?lang=` → saved preference → browser → English (R12), English crawler/no-JS default (R13); legal notices need their own legal review before a translation is marked `reviewed`.
9. Self-check against §5.

## 4. Constraints (must-nots)
- No field collected without a documented purpose — the burden of justifying each field lies with the service.
- No selling, renting, or trading private data or public records (RL-5); derived insights only in the aggregated forms permitted by research observatory.
- No inferred or stored sensitive attributes (health, religion, politics, sexuality, biometrics) unless a party explicitly publishes them in a public record.
- Public records must be stored separately from authentication and billing data, with no cross-linking beyond what the record itself publishes.
- The no-account path uploads nothing without an explicit, previewed action.
- Export, redaction, revocation, and deletion are free-floor provisions — no payment and no justification required.
- Hosted-service gate: no P3 service ships without a completed privacy analysis against this policy (a launch-review condition, not negotiable).

## 5. Acceptance criteria
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

## 6. Outputs to produce in the repository
- `docs/privacy-and-data-minimisation.md` — the privacy policy (collection, separation, pseudonyms, retention, exit, jurisdiction/processors).
- `docs/privacy/privacy-analysis.template.json` — machine-readable per-field template (spec §5.3).
- `site/privacy.html` — public privacy notice + index of published analyses + retention schedules + jurisdiction/processor lists.

## 7. Read before building
- [`08-safety-and-operations.md`](../planning/programmes/08-safety-and-operations.md) — mini-plan
- [`privacy-and-data-minimisation-dsh.md`](../suggestions/privacy-and-data-minimisation-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
