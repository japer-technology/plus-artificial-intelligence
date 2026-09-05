# Agent request — static-first-service-architecture: Static-First Service Architecture

> **Programme:** 08 · Safety and Operations — [`08-safety-and-operations.md`](../../08-safety-and-operations.md)
> **Source:** spec [`static-first-service-architecture-dsh.md`](../../../../suggestions/static-first-service-architecture-dsh.md) · seed [`static-first-service-architecture.md`](../../../../suggestions/static-first-service-architecture.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 — it is the admission ticket for every P3 service in Programmes 6, 7, and 9
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Minimum degraded-mode evidence
- **Question:** What minimum evidence must a new hosted service provide to prove its degraded mode before launch?
- **Options:** (a) the published failure-mode statement plus a scripted from-disk demonstration in the offline pack showing the commons/export path still works with the service simulated-down (no live outage drill required) · (b) require a full live database-outage drill for every service · (c) the statement alone, with no demonstration
- **Recommended:** (a) — spec §5.2.10 requires the degraded mode "demonstrated in the offline pack"; a scripted from-disk demonstration satisfies that without demanding a destructive drill on every launch.
- **Your choice:** ✏️

### D2 — Third-party regeneration of the export pipeline
- **Question:** Should the export pipeline be independently reproducible by third parties, and if so how?
- **Options:** (a) yes — publish the deterministic pipeline (script + inputs) so third parties can regenerate and diff snapshots, as the mirrorability proof federation-and-mirrors consumes · (b) publish the pipeline but do not require third-party reproducibility as a launch gate · (c) keep regeneration project-internal only
- **Recommended:** (a) — spec §5.2.3 already requires deterministic, regenerable, mirrorable exports, and federation-and-mirrors depends on them; publishing the pipeline is the cheapest proof of the "export layer is the bridge" claim.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (static-first, file://-safe, no silent change, free floor).
2. Publish `docs/static-first-service-architecture.md` — the layering policy: three layers (commons → export → service), strictly inward-to-outward dependency direction, failure-mode definitions and required behaviour per layer, and the compliance-statement requirement for every optional-service specification.
3. Publish the failure-mode statement template (spec §5.3 shape: `service`, `layer`, `dependsOn`, `publishesVia`, `failureMode[degradesTo, export, shutdownNotice]`) at `docs/static-first/failure-mode-statement.template.json`, including the minimum degraded-mode evidence bar per D1.
4. State the export-first wind-down rule: a final export is published before any service shutdown (continuity-and-namespace-custody owns wind-down).
5. State the third-party regeneration posture per D2 (the pipeline is published and regenerable; regeneration is the mirrorability proof).
6. Require each hosted service to publish a failure-mode statement and demonstrate its degraded mode in the offline pack before launch (the hosted-service gate slice); degraded modes render explicit offline labels ("offline mode — hosted checks unavailable"), never silent failure.
7. Give failure-mode statements and degraded-mode labels a localisation path per the multi-language standard: English source of truth (R1), per-key UI fallback (R4), resolution order `?lang=` → saved preference → browser → English (R12), English crawler/no-JS default (R13).
8. Self-check against §4.

## 3. Constraints (must-nots)
- No commons capability requires a hosted service; optional-service integration points degrade to a clearly labelled offline state.
- No service may be the only place a public record can be read — services publish through the export layer.
- Billing loss never revokes or hides issued records; a paid feature's loss must not revoke or hide declarations.
- Every commons artifact opens from disk (`file://`) with no build step, no fetch, and no account.
- Integrations consume published, versioned interfaces — never private service internals.
- No commons capability may be removed from the commons to make room for a paid version.
- Hosted-service gate: a new hosted service may ship only after its failure-mode statement is published and its degraded mode is demonstrated (D1).

## 4. Acceptance criteria
- [ ] Every commons artifact opens from disk with no fetch and no build step.
- [ ] Killing the live database leaves all public declarations readable from the latest snapshot.
- [ ] Stopping billing does not hide or revoke any issued public record.
- [ ] Every optional service publishes a failure-mode statement before launch.
- [ ] No commons capability exists only in a paid form.
- [ ] Integrations use published versioned interfaces, not service internals.
- [ ] A service wind-down publishes its final export before shutdown.
- [ ] Degraded modes render explicit offline labels.
- [ ] The minimum degraded-mode evidence bar is defined (D1) and the third-party regeneration posture is stated (D2).

## 5. Outputs to produce in the repository
- `docs/static-first-service-architecture.md` — the layering policy and dependency-direction rules.
- `docs/static-first/failure-mode-statement.template.json` — machine-readable failure-mode statement template (spec §5.3).

## 6. Read before building
- [`08-safety-and-operations.md`](../../08-safety-and-operations.md) — mini-plan
- [`static-first-service-architecture-dsh.md`](../../../../suggestions/static-first-service-architecture-dsh.md) — full spec
- [`07-safety-operations-research.md`](../../../digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
