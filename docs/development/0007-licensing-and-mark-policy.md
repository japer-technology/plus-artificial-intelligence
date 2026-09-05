# Development task — licensing-and-mark-policy: Licensing and Mark Policy

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`licensing-and-mark-policy-dsh.md`](../suggestions/licensing-and-mark-policy-dsh.md) · seed [`licensing-and-mark-policy.md`](../suggestions/licensing-and-mark-policy.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 — blocks contribution-ladder, tool-taxonomy contributions, registry data licensing
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Explicit licence per asset class (code, spec text, translations, themes, schemas, registry data) + inbound=outbound contribution terms + name/identity policy.
- **Why now / risk of deferring:** Licensing is how the free floor is made legally durable (spec §2), and it blocks contribution-ladder, tool-taxonomy contributions, and registry data licensing (mini-plan Order P0). Risk: legal review dependency — ship draft-labelled if review is slow, never silently (programme Risks).
- **Features to deliver:**
  - A licence manifest mapping each asset class (code, spec text, translations, themes, schemas, registry data) to a recognised licence + canonical text URL.
  - A single inbound-equals-outbound contribution policy (no copyright transfer).
  - A mark policy governing project name + visual identity only (no claim over the `+AI` notation).
  - Anti-certification/anti-endorsement rules.
  - Draft-labelling until legal review.
  - Versioned, governed, never-retroactive changes.
  - An offline pack carrying the manifest + full texts.
- **Depends on:** free-floor-covenant, public-usage-guidelines, governance-and-stewardship; legal review or draft-labelling

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Code licence
- **Question:** Which recognised free/open-source licence covers code (tools, builders, checker)?
- **Option (a):** MIT
  - **For:** Spec §5.2.1 requires a recognised free/open-source licence permitting use, modification, redistribution, and commercial hosting; MIT is widely understood and permissive, and the repo currently carries no top-level LICENSE, so this adds one.
  - **Against:** MIT is thin on patent and contribution-grant language compared with Apache-2.0, which matters for some corporate contributors.
- **Option (b):** Apache-2.0
  - **For:** Apache-2.0 adds an explicit patent grant and clearer contribution terms, which suits a project with many corporate contributors.
  - **Against:** Heavier than the spec §5.2.1 minimum and less universally recognised than MIT for tiny utilities; spec §10 leaves the identifier undecided pending review.
- **Option (c):** BSD-3-Clause
  - **For:** BSD-3-Clause is permissive like MIT and adds a no-endorsement clause.
  - **Against:** The spec §5.2.1 minimum is satisfied by any of the three, and BSD-3-Clause's no-endorsement clause is redundant with the mark policy's separate anti-endorsement rules; spec §10 leaves the choice pending review.
- **Recommended:** (a) MIT — widely understood, permissive, permits commercial hosting (spec §5.2.1); the repo currently carries no top-level LICENSE, so this adds one.
- **Your choice:** ✏️

### D2 — Spec text and translations licence
- **Question:** Which licence covers the specification text and reviewed translations?
- **Option (a):** CC BY 4.0
  - **For:** Spec §5.2.2 requires verbatim and derived redistribution with attribution; CC BY 4.0 does that while spec §2 protects integrity by versioning, not licence restriction.
  - **Against:** The attribution requirement means downstream copies must carry it, a small burden on reuse compared with CC0.
- **Option (b):** CC BY-SA 4.0
  - **For:** CC BY-SA 4.0's share-alike keeps derivatives open.
  - **Against:** Spec §5.2.2 asks only for attribution (not share-alike), and share-alike can impede reuse in otherwise-permissive tooling; integrity is already protected by versioning (spec §2).
- **Option (c):** CC0
  - **For:** CC0 maximises reuse with no attribution burden.
  - **Against:** Spec §5.2.2 explicitly requires attribution, so CC0 under-satisfies the normative requirement.
- **Recommended:** (a) CC BY 4.0 — permits verbatim + derived redistribution with attribution; integrity is protected by versioning, not licence restriction (spec §2, §5.2.2).
- **Your choice:** ✏️

### D3 — Themes, schemas, and machine-readable formats licence
- **Question:** Which permissive licence covers themes, schemas, and machine-readable formats?
- **Option (a):** CC0 (dedicate to public domain)
  - **For:** Spec §5.2.4 requires schemas/formats under a permissive licence permitting fee-free tooling use; CC0 is the strongest permissive option and avoids attribution friction on interfaces.
  - **Against:** Themes must still state their own licence per spec §5.2.3, so CC0 for the schema class does not settle theme licensing in one stroke.
- **Option (b):** CC BY 4.0
  - **For:** A single CC BY 4.0 across text-like assets is simpler to explain.
  - **Against:** Attribution on interfaces (schemas/formats) adds friction to tooling reuse, which spec §5.2.4 specifically wants fee-free and frictionless.
- **Option (c):** MIT
  - **For:** MIT is a recognised permissive licence familiar to developers.
  - **Against:** MIT is a software licence, less natural for non-code schemas/formats, and spec §5.2.4's fee-free tooling goal is better served by CC0.
- **Recommended:** (a) CC0 — schemas/formats are interfaces needing fee-free tooling reuse (spec §5.2.4); themes must still state their own licence per §5.2.3.
- **Your choice:** ✏️

### D4 — Registry data licence + sui generis statement
- **Question:** Which licence covers public registry data, and does it carry a sui generis no-accuracy statement?
- **Option (a):** CC BY 4.0 only
  - **For:** CC BY 4.0 is a recognised licence that permits reuse/mirroring with attribution, satisfying the core of spec §5.2.5.
  - **Against:** Spec §5.2.5 also requires "no claim of accuracy", which a bare licence does not state; it also leaves the spec §10 "sui generis" open question unaddressed.
- **Option (b):** CC BY 4.0 + a sui generis statement (reuse/mirroring/federation permitted, attribution to opt-in parties, no claim of accuracy)
  - **For:** Satisfies spec §5.2.5 fully (explicit data licence + attribution + no accuracy claim) and addresses the spec §10 "sui generis" open question.
  - **Against:** The sui generis statement is itself pending legal review (spec §10), so (b) ships an extra statement that must be reviewed.
- **Option (c):** ODbL
  - **For:** ODbL is a purpose-built database licence.
  - **Against:** ODbL's share-alike obligations exceed spec §5.2.5's requirement (reuse/mirroring/federation with attribution), adding restrictions the spec does not ask for.
- **Recommended:** (b) — spec §5.2.5 requires an explicit data licence with attribution and no accuracy claim; the sui generis statement addresses the "sui generis" open question (pending legal review).
- **Your choice:** ✏️

### D5 — Legal review posture
- **Question:** How are the licences/policies treated until legal review completes?
- **Option (a):** publish draft-labelled pending review
  - **For:** Spec §5.2.10 requires review before reliance but ships draft-labelled rather than silently un-reviewed, and the programme Risks line says "ship draft-labelled if review is slow, never silently".
  - **Against:** Draft-labelled documents are not yet safe to rely on, so downstream consumers must treat them as provisional until review.
- **Option (b):** block publication until review completes
  - **For:** Guarantees no unreviewed licence/mark text is ever published.
  - **Against:** Blocks the P0 deliverables on legal review availability, contradicting spec §5.2.10's "ship draft-labelled" path and the programme's sequencing (licensing blocks contribution-ladder and registry data licensing).
- **Option (c):** proceed without review
  - **For:** Fastest publication with no review friction.
  - **Against:** Directly violates spec §5.2.10 (obtain review before reliance) and the programme Risks line "never silently" — publishing unreviewed legal text silently is exactly the failure mode flagged.
- **Recommended:** (a) — spec §5.2.10: obtain review before reliance, but ship draft-labelled rather than silently un-reviewed.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a licence manifest (e.g. `site/licensing.html` + `site/licence-manifest.json`) mapping each asset class — code, specification text, reviewed translations, themes, schemas, public registry data — to the licence chosen in §2 D1–D4, with each licence's canonical text URL.
3. Adopt a single inbound-equals-outbound contribution policy: contributors retain ownership and license their contribution under the same outbound licence; any CLA must not transfer copyright.
4. Write the mark policy governing only the project name and visual identity, stating explicitly it grants no rights over and claims no ownership of the `+AI` notation (anyone may use it without permission).
5. Permit descriptive, non-misleading uses of the project name; prohibit uses implying endorsement, certification, partnership, or official status.
6. Forbid presenting the `+AI` mark or the project name as a certification/quality/compliance/trust mark, and require badges/certificates to reference a live declaration record rather than assert a verdict.
7. State the legal-review posture per §2 D5 (draft-labelled until reviewed).
8. Version the policy, publish it in the changelog, and make licence changes governed/announced/never-retroactive; ensure the offline pack carries the manifest and full licence texts.
9. Self-check against §5.

## 4. Constraints (must-nots)
- Mark policy grants/claims no ownership of the `+AI` notation.
- No certification/quality/compliance/trust-mark framing.
- No silent licence change — versioned, governed, announced, never retroactive.
- Must never license away the no-account path or free use of the notation.

## 5. Acceptance criteria
- [ ] Each asset class has an explicit, recognised licence in a published manifest.
- [ ] Specification text and translations are mirrorable and quotable with attribution.
- [ ] Public registry data carries a data licence permitting reuse and mirroring.
- [ ] A single inbound-equals-outbound contribution policy is adopted and applied uniformly.
- [ ] The mark policy governs only the project name and visual identity, not the notation.
- [ ] The mark policy explicitly forbids endorsement, certification, and trust-mark framing.
- [ ] Legal review has been obtained, or the documents are clearly labelled as draft pending review.
- [ ] The offline pack includes the licence manifest and full licence texts.
- [ ] Licence changes are versioned, governed, announced, and never retroactive.

## 6. Outputs to produce in the repository
- `site/licensing.html` — the licensing and mark policy page.
- `site/licence-manifest.json` — the licence manifest mapping asset class → licence.

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`licensing-and-mark-policy-dsh.md`](../suggestions/licensing-and-mark-policy-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
