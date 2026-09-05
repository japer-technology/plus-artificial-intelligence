# Agent request — security-and-abuse-controls: Security and Abuse Controls

> **Programme:** 08 · Safety and Operations — [`08-safety-and-operations.md`](../../08-safety-and-operations.md)
> **Source:** spec [`security-and-abuse-controls-dsh.md`](../../../../suggestions/security-and-abuse-controls-dsh.md) · seed [`security-and-abuse-controls.md`](../../../../suggestions/security-and-abuse-controls.md)
> **Effort:** M · **Phase:** P1 · **Position:** baseline P1 (the checker's hosted half cannot launch without it); per-service models at each P3 launch
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Default rate-limit numbers (joint with verification-checker P3; cost-discipline + api-scale-and-reliability inform)
- **Question:** What are the default rate-limit numbers for the checker and hosted APIs, given they depend on cost modelling?
- **Options:** (a) not fixed now — publish the per-surface rate-limit framework (which surfaces, which metric, plain-language states) and set the numeric defaults only after cost-discipline models the numbers and api-scale-and-reliability sets volume tiers; until then defaults are marked "pending modelling" and no hosted surface launches without numbers · (b) set provisional per-surface numbers now (e.g. requests/minute per surface) · (c) leave rate limits undefined and delegate them entirely to each service
- **Recommended:** (a) — IMPLEMENTATION-PLAN §11 assigns the numbers jointly with cost-discipline (which must model first), and spec §5.2.9 says the numbers "MUST be published here once set operationally"; the framework ships P1, the numbers land when modelled.
- **Your choice:** ✏️

### D2 — CSP publishing location
- **Question:** Where are Content-Security-Policies published — per-theme conformance notes or a separate security page?
- **Options:** (a) a single `site/security.html` carries the canonical CSP baseline, URL policy, and rate-limit defaults, and per-theme conformance notes only reference it (no duplication) · (b) each theme's conformance note publishes its own CSP · (c) both the security page and every conformance note
- **Recommended:** (a) — one canonical location avoids drift (the same "one canonical wording source" pattern Programme 1 uses), and the conformance linter can check served headers against the single published baseline.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, privacy, no silent change).
2. Publish `docs/security-and-abuse-controls.md` — the security baseline: authentication (strong second factors, no biometrics), server-side authorization with immediate session revocation on role change, output encoding of user text (allowlist formatting), strict CSP, URL policy (protocol allowlists, visible destinations, redirect validation), upload limits (type/size, non-executable paths, separate origin), SSRF guard (denied private/link-local ranges, bounded redirects, size/time caps), network isolation, anti-scraping via rate limits only, and the dependency rule (known-vulnerable dependencies block release).
3. Publish the threat-model template (spec §5.3 shape: `service`, `assets`, `attackers`, `controls`, `reviewed`, `nextReview`) at `docs/security/threat-model.template.json`.
4. Publish the rate-limit framework + defaults per D1 (surfaces, metrics, plain-language states; numeric defaults published here once cost-discipline models them; verification-checker named as joint owner for the checker's limits).
5. Publish the canonical CSP + URL policy + rate-limit defaults on `site/security.html` per D2, with per-theme conformance notes referencing it.
6. Publish the incident-response process: containment, notification to affected parties, public disclosure, post-incident record in the changelog, and a no-account security report route (contact-routes).
7. State the hosted-service gate slice: every P3 service publishes a threat model against this baseline before launch and updates it on material change.
8. Self-check against §4.

## 3. Constraints (must-nots)
- No biometric-only authentication.
- No covert tracking or fingerprinting — scraping resistance via rate limits and terms only.
- SSRF targets refused — private and link-local ranges denied.
- Known-vulnerable dependencies block release.
- Authorization enforced server-side only; client-side checks are presentation only.
- Role changes take effect immediately, including revocation of active sessions.
- No stored user content executed; rich formatting uses an allowlist only.

## 4. Acceptance criteria
- [ ] Every hosted service publishes a threat model before launch.
- [ ] No surface accepts a login without a non-biometric second-factor option.
- [ ] Injected markup in user text renders inert in every surface.
- [ ] Every page serves a strict CSP and enforces the URL allowlist.
- [ ] A checker fetch targeting a private address is refused.
- [ ] Uploaded files are never served from an executable path.
- [ ] Revoking a role terminates active sessions immediately.
- [ ] A security report can be filed without an account and receives a documented response.
- [ ] A known-vulnerable dependency blocks release.
- [ ] The rate-limit framework + defaults are recorded (D1) and the CSP publishing location is set (D2).

## 5. Outputs to produce in the repository
- `docs/security-and-abuse-controls.md` — the security baseline (controls, URL policy, incident-response process, dependency rule).
- `docs/security/threat-model.template.json` — machine-readable threat-model template (spec §5.3).
- `site/security.html` — public security page (CSP baseline, URL policy, rate-limit defaults, no-account report route).

## 6. Read before building
- [`08-safety-and-operations.md`](../../08-safety-and-operations.md) — mini-plan
- [`security-and-abuse-controls-dsh.md`](../../../../suggestions/security-and-abuse-controls-dsh.md) — full spec
- [`07-safety-operations-research.md`](../../../digest/07-safety-operations-research.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
