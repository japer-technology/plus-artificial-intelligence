# Agent request — free-floor-covenant: Free-Floor Covenant

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`free-floor-covenant-dsh.md`](../../../../suggestions/free-floor-covenant-dsh.md) · seed [`free-floor-covenant.md`](../../../../suggestions/free-floor-covenant.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 — it is the constitution every other policy cites
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Hosted check queue threshold
- **Question:** At what volume do hosted on-demand checks queue, given cost-discipline modelling is not done yet?
- **Options:** (a) defer the numeric threshold to cost-discipline modelling; publish the covenant stating the free capability is settled and the number will be added when modelled · (b) set an explicit placeholder number now · (c) omit the anti-abuse threshold detail entirely
- **Recommended:** (a) — the free capability itself is settled (spec §5.2.11); only the queue number is deferred to cost discipline.
- **Your choice:** ✏️

### D2 — Covenant licence
- **Question:** Under which licence is the covenant itself published?
- **Options:** (a) inherit the spec-text licence from licensing-and-mark-policy once set (mirrorable/redistributable) · (b) CC BY 4.0 now · (c) no licence line until the policy exists
- **Recommended:** (a) — spec §5.2.9 requires a mirroring-permissive licence; defer the identifier to Licensing and Mark Policy.
- **Your choice:** ✏️

### D3 — Machine-readable floor items
- **Question:** Is a machine-readable copy of the floor items published now?
- **Options:** (a) publish a machine-readable floor list now so the linter can later check service pages · (b) defer the machine-readable copy until the conformance linter exists · (c) skip it
- **Recommended:** (a) — spec §5.3 permits it and it future-proofs the linter rule; it is a cheap static file.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a versioned covenant document (e.g. `site/covenant.html`) with a version identifier and effective date, listed in the changelog and hashable.
3. Enumerate the free-floor items — use of the notation; the canonical meaning; reviewed translations; the no-account declaration builder; portable declaration formats and schemas; basic syntax and integrity checking; the public governance record; correction and revocation of one's own declarations — each with a per-item definition of "free" (no payment, no required account, no mandatory registration, file://-safe).
4. Reassert, verbatim, that the `+AI` meaning and a usable no-account path stay free, and that paid services add convenience, scale, support, or managed operations — never legitimacy, rank, or permission.
5. Fix the amendment process and notice period: floor narrowing is a versioned, announced, governed specification change (≥180 days notice), never done by a service operator unilaterally.
6. Enumerate proportional anti-abuse limits that may restrict volume/rate but must not remove or paywall any floor item; note the hosted-check queue threshold per §1 D1.
7. Provide the paid-service free-floor statement template (services cite the covenant and state their own floor).
8. License the covenant per §1 D2, bind successors/mirrors to its obligations, and archive every prior version at a stable URL (never altered or removed).
9. Publish the machine-readable floor list per §1 D3 for linter use; self-check against §4.

## 3. Constraints (must-nots)
- Floor never narrowed by a service operator unilaterally.
- Paid services add convenience/scale/support/ops only — never legitimacy/rank/permission.
- Anti-abuse limits may not remove or paywall a floor item.
- No paid tier may confer legitimacy, rank, or permission; no mandatory identity or covert tracking.

## 4. Acceptance criteria
- [ ] A versioned covenant document exists with a version identifier and effective date.
- [ ] Every free-floor item is enumerated with a per-item definition of "free".
- [ ] The covenant states the notice period and the amendment process.
- [ ] Anti-abuse limits are enumerated and do not remove any floor item.
- [ ] The paid-service free-floor statement template is provided.
- [ ] Prior covenant versions are archived at stable URLs and never altered.
- [ ] The covenant is licensed for mirroring and binds successor custodians.
- [ ] Narrowing the floor is impossible without a versioned, governed, announced change.

## 5. Outputs to produce in the repository
- `site/covenant.html` — the versioned free-floor covenant.
- `site/covenant-floor.json` — machine-readable floor items (per §1 D3).

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`free-floor-covenant-dsh.md`](../../../../suggestions/free-floor-covenant-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
