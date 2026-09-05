# Development task — free-floor-covenant: Free-Floor Covenant

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`free-floor-covenant-dsh.md`](../suggestions/free-floor-covenant-dsh.md) · seed [`free-floor-covenant.md`](../suggestions/free-floor-covenant.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 — it is the constitution every other policy cites
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Versioned public promise of what stays free (notation, meaning, translations, no-account tools, checking, governance, correction/revocation) and how it changes.
- **Why now / risk of deferring:** The covenant is the constitution every other policy cites (mini-plan Order: "P0 — it is the constitution every other policy cites"). Risk: a service operator narrowing the floor unilaterally — guarded by governed, versioned, announced change (brainstorm open risks).
- **Features to deliver:**
  - A versioned covenant document (`site/covenant.html`) with version + effective date.
  - Enumerated free-floor items each with a per-item "free" definition.
  - Amendment rules + notice period (≥180 days for narrowing).
  - Enumerated anti-abuse limits that never remove/paywall a floor item.
  - A paid-service free-floor statement template.
  - A machine-readable floor list (optional) for the linter.
  - Every prior version archived at a stable URL.
- **Depends on:** governance-and-stewardship, licensing-and-mark-policy, cost-discipline, specification-versioning-and-hashing, static-first-service-architecture

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Hosted check queue threshold
- **Question:** At what volume do hosted on-demand checks queue, given cost-discipline modelling is not done yet?
- **Option (a):** defer the numeric threshold to cost-discipline modelling; publish the covenant stating the free capability is settled and the number will be added when modelled
  - **For:** Spec §5.2.11 settles the free capability (freshness re-checks stay free) and only the hosted queue number is deferred to cost discipline (spec §10 open question; digest "Open: queue threshold for hosted on-demand checks").
  - **Against:** The covenant publishes without a concrete queue number, so the anti-abuse limit is stated as a principle rather than a figure until cost-discipline modelling lands.
- **Option (b):** set an explicit placeholder number now
  - **For:** Gives the covenant a concrete number immediately.
  - **Against:** A placeholder number set without cost-discipline modelling could be wrong, and spec §10 explicitly defers the number to cost-discipline modelling — inventing one pre-empts that.
- **Option (c):** omit the anti-abuse threshold detail entirely
  - **For:** Avoids publishing any threshold the project cannot yet justify.
  - **Against:** Spec §5.2.7 requires anti-abuse limits to be "enumerated, proportional, and stated in the covenant", so omitting the threshold detail entirely fails the enumeration requirement.
- **Recommended:** (a) — the free capability itself is settled (spec §5.2.11); only the queue number is deferred to cost discipline.
- **Your choice:** ✏️

### D2 — Covenant licence
- **Question:** Under which licence is the covenant itself published?
- **Option (a):** inherit the spec-text licence from licensing-and-mark-policy once set (mirrorable/redistributable)
  - **For:** Spec §5.2.9 requires the covenant published under a mirroring/redistributable licence, and inheriting the spec-text licence from Licensing and Mark Policy keeps it consistent (spec §2 defers licence choice to that sibling).
  - **Against:** Ships temporarily without a specific licence line until the licensing policy sets the identifier.
- **Option (b):** CC BY 4.0 now
  - **For:** Gives the covenant an immediately clear, mirroring-permissive licence.
  - **Against:** Pre-empts the licensing policy's licence selection (spec §2 defers choice to that sibling), risking a mismatch with the spec-text class later.
- **Option (c):** no licence line until the policy exists
  - **For:** Avoids asserting any licence before the policy exists.
  - **Against:** Spec §5.2.9 explicitly requires a mirroring-permissive licence, so no licence line fails a normative requirement and leaves redistribution ambiguous.
- **Recommended:** (a) — spec §5.2.9 requires a mirroring-permissive licence; defer the identifier to Licensing and Mark Policy.
- **Your choice:** ✏️

### D3 — Machine-readable floor items
- **Question:** Is a machine-readable copy of the floor items published now?
- **Option (a):** publish a machine-readable floor list now so the linter can later check service pages
  - **For:** Spec §5.3 permits a machine-readable copy of the floor items, and spec §5.4 wants the linter to verify service pages against the floor; publishing it now future-proofs the linter rule at the cost of one static file.
  - **Against:** It is a machine-readable artifact that must stay in sync with the covenant's enumerated floor items whenever the floor changes (a maintenance obligation).
- **Option (b):** defer the machine-readable copy until the conformance linter exists
  - **For:** Avoids publishing an artifact before the linter that consumes it exists.
  - **Against:** Defers a spec §5.4 capability (linter checking against the floor) and loses the cheap early win the spec §5.3 permits now.
- **Option (c):** skip it
  - **For:** Simplest — no extra artifact to maintain.
  - **Against:** Drops the machine-readable copy the spec §5.3 explicitly permits and §5.4 relies on for the linter, weakening the "detect contradictions" acceptance criterion.
- **Recommended:** (a) — spec §5.3 permits it and it future-proofs the linter rule; it is a cheap static file.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a versioned covenant document (e.g. `site/covenant.html`) with a version identifier and effective date, listed in the changelog and hashable.
3. Enumerate the free-floor items — use of the notation; the canonical meaning; reviewed translations; the no-account declaration builder; portable declaration formats and schemas; basic syntax and integrity checking; the public governance record; correction and revocation of one's own declarations — each with a per-item definition of "free" (no payment, no required account, no mandatory registration, file://-safe).
4. Reassert, verbatim, that the `+AI` meaning and a usable no-account path stay free, and that paid services add convenience, scale, support, or managed operations — never legitimacy, rank, or permission.
5. Fix the amendment process and notice period: floor narrowing is a versioned, announced, governed specification change (≥180 days notice), never done by a service operator unilaterally.
6. Enumerate proportional anti-abuse limits that may restrict volume/rate but must not remove or paywall any floor item; note the hosted-check queue threshold per §2 D1.
7. Provide the paid-service free-floor statement template (services cite the covenant and state their own floor).
8. License the covenant per §2 D2, bind successors/mirrors to its obligations, and archive every prior version at a stable URL (never altered or removed).
9. Publish the machine-readable floor list per §2 D3 for linter use; self-check against §5.

## 4. Constraints (must-nots)
- Floor never narrowed by a service operator unilaterally.
- Paid services add convenience/scale/support/ops only — never legitimacy/rank/permission.
- Anti-abuse limits may not remove or paywall a floor item.
- No paid tier may confer legitimacy, rank, or permission; no mandatory identity or covert tracking.

## 5. Acceptance criteria
- [ ] A versioned covenant document exists with a version identifier and effective date.
- [ ] Every free-floor item is enumerated with a per-item definition of "free".
- [ ] The covenant states the notice period and the amendment process.
- [ ] Anti-abuse limits are enumerated and do not remove any floor item.
- [ ] The paid-service free-floor statement template is provided.
- [ ] Prior covenant versions are archived at stable URLs and never altered.
- [ ] The covenant is licensed for mirroring and binds successor custodians.
- [ ] Narrowing the floor is impossible without a versioned, governed, announced change.

## 6. Outputs to produce in the repository
- `site/covenant.html` — the versioned free-floor covenant.
- `site/covenant-floor.json` — machine-readable floor items (per §2 D3).

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`free-floor-covenant-dsh.md`](../suggestions/free-floor-covenant-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
