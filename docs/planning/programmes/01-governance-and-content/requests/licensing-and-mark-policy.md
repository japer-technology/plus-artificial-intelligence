# Agent request — licensing-and-mark-policy: Licensing and Mark Policy

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`licensing-and-mark-policy-dsh.md`](../../../../suggestions/licensing-and-mark-policy-dsh.md) · seed [`licensing-and-mark-policy.md`](../../../../suggestions/licensing-and-mark-policy.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 — blocks contribution-ladder, tool-taxonomy contributions, registry data licensing
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Code licence
- **Question:** Which recognised free/open-source licence covers code (tools, builders, checker)?
- **Options:** (a) MIT · (b) Apache-2.0 · (c) BSD-3-Clause
- **Recommended:** (a) MIT — widely understood, permissive, permits commercial hosting (spec §5.2.1); the repo currently carries no top-level LICENSE, so this adds one.
- **Your choice:** ✏️

### D2 — Spec text and translations licence
- **Question:** Which licence covers the specification text and reviewed translations?
- **Options:** (a) CC BY 4.0 · (b) CC BY-SA 4.0 · (c) CC0
- **Recommended:** (a) CC BY 4.0 — permits verbatim + derived redistribution with attribution; integrity is protected by versioning, not licence restriction (spec §2, §5.2.2).
- **Your choice:** ✏️

### D3 — Themes, schemas, and machine-readable formats licence
- **Question:** Which permissive licence covers themes, schemas, and machine-readable formats?
- **Options:** (a) CC0 (dedicate to public domain) · (b) CC BY 4.0 · (c) MIT
- **Recommended:** (a) CC0 — schemas/formats are interfaces needing fee-free tooling reuse (spec §5.2.4); themes must still state their own licence per §5.2.3.
- **Your choice:** ✏️

### D4 — Registry data licence + sui generis statement
- **Question:** Which licence covers public registry data, and does it carry a sui generis no-accuracy statement?
- **Options:** (a) CC BY 4.0 only · (b) CC BY 4.0 + a sui generis statement (reuse/mirroring/federation permitted, attribution to opt-in parties, no claim of accuracy) · (c) ODbL
- **Recommended:** (b) — spec §5.2.5 requires an explicit data licence with attribution and no accuracy claim; the sui generis statement addresses the "sui generis" open question (pending legal review).
- **Your choice:** ✏️

### D5 — Legal review posture
- **Question:** How are the licences/policies treated until legal review completes?
- **Options:** (a) publish draft-labelled pending review · (b) block publication until review completes · (c) proceed without review
- **Recommended:** (a) — spec §5.2.10: obtain review before reliance, but ship draft-labelled rather than silently un-reviewed.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a licence manifest (e.g. `site/licensing.html` + `site/licence-manifest.json`) mapping each asset class — code, specification text, reviewed translations, themes, schemas, public registry data — to the licence chosen in §1 D1–D4, with each licence's canonical text URL.
3. Adopt a single inbound-equals-outbound contribution policy: contributors retain ownership and license their contribution under the same outbound licence; any CLA must not transfer copyright.
4. Write the mark policy governing only the project name and visual identity, stating explicitly it grants no rights over and claims no ownership of the `+AI` notation (anyone may use it without permission).
5. Permit descriptive, non-misleading uses of the project name; prohibit uses implying endorsement, certification, partnership, or official status.
6. Forbid presenting the `+AI` mark or the project name as a certification/quality/compliance/trust mark, and require badges/certificates to reference a live declaration record rather than assert a verdict.
7. State the legal-review posture per §1 D5 (draft-labelled until reviewed).
8. Version the policy, publish it in the changelog, and make licence changes governed/announced/never-retroactive; ensure the offline pack carries the manifest and full licence texts.
9. Self-check against §4.

## 3. Constraints (must-nots)
- Mark policy grants/claims no ownership of the `+AI` notation.
- No certification/quality/compliance/trust-mark framing.
- No silent licence change — versioned, governed, announced, never retroactive.
- Must never license away the no-account path or free use of the notation.

## 4. Acceptance criteria
- [ ] Each asset class has an explicit, recognised licence in a published manifest.
- [ ] Specification text and translations are mirrorable and quotable with attribution.
- [ ] Public registry data carries a data licence permitting reuse and mirroring.
- [ ] A single inbound-equals-outbound contribution policy is adopted and applied uniformly.
- [ ] The mark policy governs only the project name and visual identity, not the notation.
- [ ] The mark policy explicitly forbids endorsement, certification, and trust-mark framing.
- [ ] Legal review has been obtained, or the documents are clearly labelled as draft pending review.
- [ ] The offline pack includes the licence manifest and full licence texts.
- [ ] Licence changes are versioned, governed, announced, and never retroactive.

## 5. Outputs to produce in the repository
- `site/licensing.html` — the licensing and mark policy page.
- `site/licence-manifest.json` — the licence manifest mapping asset class → licence.

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`licensing-and-mark-policy-dsh.md`](../../../../suggestions/licensing-and-mark-policy-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
