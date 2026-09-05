# Development task — static-first-service-architecture: Static-First Service Architecture

> **Programme:** 08 · Safety and Operations — [`08-safety-and-operations.md`](../planning/programmes/08-safety-and-operations.md)
> **Source:** spec [`static-first-service-architecture-dsh.md`](../suggestions/static-first-service-architecture-dsh.md) · seed [`static-first-service-architecture.md`](../suggestions/static-first-service-architecture.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 — it is the admission ticket for every P3 service in Programmes 6, 7, and 9
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** The architectural ordering rule: static commons → deterministic exports → optional hosted services around, never instead of, the base.
- **Why now / risk of deferring:** P0 gate — the layering policy is the admission ticket for every P3 service in Programmes 6, 7, and 9, so it must exist before any hosted service launches. Risk of deferring: the layering rule could be honoured in prose but not in launch review (the programme's "policy-only safety" risk); the hosted-service gate is the countermeasure.
- **Features to deliver:**
  - Layering policy at `docs/static-first-service-architecture.md` — commons → export → service with one-way dependency direction.
  - Failure-mode statement template (spec §5.3 shape: `degradesTo`, `export`, `shutdownNotice`).
  - Degraded-mode demonstration requirement + minimum evidence bar.
  - Export-first wind-down rule.
  - Third-party regeneration posture.
- **Depends on:** public-snapshots-and-api, offline-and-self-hosting-pack, continuity-and-namespace-custody

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Minimum degraded-mode evidence
- **Question:** What minimum evidence must a new hosted service provide to prove its degraded mode before launch?
- **Option (a):** the published failure-mode statement plus a scripted from-disk demonstration in the offline pack showing the commons/export path still works with the service simulated-down (no live outage drill required)
  - **For:** spec §5.2.10 requires the degraded mode be "demonstrated in the offline pack"; a scripted from-disk demonstration satisfies that wording. Digest "Open: degraded-mode evidence minimum" is resolved by defining a bar without a destructive drill.
  - **Against:** a simulated-down demo is weaker than a real outage; a service could pass while its actual failure path is untested, and spec §5.2.6 (database loss leaves records readable) is approximated rather than proven.
- **Option (b):** require a full live database-outage drill for every service
  - **For:** strongest evidence — proves spec §5.2.6 (database loss leaves records readable) with a real drill rather than a simulation.
  - **Against:** spec §5.2.10 only asks for demonstration "in the offline pack", not a destructive drill; a full outage drill is disruptive and disproportionate for every P3 launch.
- **Option (c):** the statement alone, with no demonstration
  - **For:** cheapest — the failure-mode statement alone documents the degraded mode.
  - **Against:** fails spec §5.2.10, which requires the degraded mode to be *demonstrated*, not just stated; the acceptance criterion "the minimum degraded-mode evidence bar is defined (D1)" would be vacuous.
- **Recommended:** (a) — spec §5.2.10 requires the degraded mode "demonstrated in the offline pack"; a scripted from-disk demonstration satisfies that without demanding a destructive drill on every launch.
- **Your choice:** ✏️

### D2 — Third-party regeneration of the export pipeline
- **Question:** Should the export pipeline be independently reproducible by third parties, and if so how?
- **Option (a):** yes — publish the deterministic pipeline (script + inputs) so third parties can regenerate and diff snapshots, as the mirrorability proof federation-and-mirrors consumes
  - **For:** spec §5.2.3 already requires deterministic, regenerable, mirrorable exports, and federation-and-mirrors consumes them (spec §7); publishing the pipeline is the cheapest proof of the "export layer is the bridge" claim (spec §5.1.4).
  - **Against:** adds a publication and reproducibility obligation beyond what §5.2.3 literally demands — it requires regenerable/mirrorable, but does not require third-party regeneration as a launch gate.
- **Option (b):** publish the pipeline but do not require third-party reproducibility as a launch gate
  - **For:** publishes transparency without making third-party regeneration a hard launch gate, so launches are not blocked on third-party tooling maturity.
  - **Against:** digest "Open: third-party regeneration" stays unresolved; without requiring reproducibility, the "regenerable and mirrorable" claim (spec §5.2.3) is asserted, not demonstrated.
- **Option (c):** keep regeneration project-internal only
  - **For:** least work, and keeps the pipeline internal until it stabilises.
  - **Against:** contradicts spec §5.2.3's "regenerable and mirrorable" requirement and the federation-and-mirrors dependency; the digest flags third-party regeneration as the open question this decision must answer.
- **Recommended:** (a) — spec §5.2.3 already requires deterministic, regenerable, mirrorable exports, and federation-and-mirrors depends on them; publishing the pipeline is the cheapest proof of the "export layer is the bridge" claim.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (static-first, file://-safe, no silent change, free floor).
2. Publish `docs/static-first-service-architecture.md` — the layering policy: three layers (commons → export → service), strictly inward-to-outward dependency direction, failure-mode definitions and required behaviour per layer, and the compliance-statement requirement for every optional-service specification.
3. Publish the failure-mode statement template (spec §5.3 shape: `service`, `layer`, `dependsOn`, `publishesVia`, `failureMode[degradesTo, export, shutdownNotice]`) at `docs/static-first/failure-mode-statement.template.json`, including the minimum degraded-mode evidence bar per D1.
4. State the export-first wind-down rule: a final export is published before any service shutdown (continuity-and-namespace-custody owns wind-down).
5. State the third-party regeneration posture per D2 (the pipeline is published and regenerable; regeneration is the mirrorability proof).
6. Require each hosted service to publish a failure-mode statement and demonstrate its degraded mode in the offline pack before launch (the hosted-service gate slice); degraded modes render explicit offline labels ("offline mode — hosted checks unavailable"), never silent failure.
7. Give failure-mode statements and degraded-mode labels a localisation path per the multi-language standard: English source of truth (R1), per-key UI fallback (R4), resolution order `?lang=` → saved preference → browser → English (R12), English crawler/no-JS default (R13).
8. Self-check against §5.

## 4. Constraints (must-nots)
- No commons capability requires a hosted service; optional-service integration points degrade to a clearly labelled offline state.
- No service may be the only place a public record can be read — services publish through the export layer.
- Billing loss never revokes or hides issued records; a paid feature's loss must not revoke or hide declarations.
- Every commons artifact opens from disk (`file://`) with no build step, no fetch, and no account.
- Integrations consume published, versioned interfaces — never private service internals.
- No commons capability may be removed from the commons to make room for a paid version.
- Hosted-service gate: a new hosted service may ship only after its failure-mode statement is published and its degraded mode is demonstrated (D1).

## 5. Acceptance criteria
- [ ] Every commons artifact opens from disk with no fetch and no build step.
- [ ] Killing the live database leaves all public declarations readable from the latest snapshot.
- [ ] Stopping billing does not hide or revoke any issued public record.
- [ ] Every optional service publishes a failure-mode statement before launch.
- [ ] No commons capability exists only in a paid form.
- [ ] Integrations use published versioned interfaces, not service internals.
- [ ] A service wind-down publishes its final export before shutdown.
- [ ] Degraded modes render explicit offline labels.
- [ ] The minimum degraded-mode evidence bar is defined (D1) and the third-party regeneration posture is stated (D2).

## 6. Outputs to produce in the repository
- `docs/static-first-service-architecture.md` — the layering policy and dependency-direction rules.
- `docs/static-first/failure-mode-statement.template.json` — machine-readable failure-mode statement template (spec §5.3).

## 7. Read before building
- [`08-safety-and-operations.md`](../planning/programmes/08-safety-and-operations.md) — mini-plan
- [`static-first-service-architecture-dsh.md`](../suggestions/static-first-service-architecture-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
