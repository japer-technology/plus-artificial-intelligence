# Development task — security-and-abuse-controls: Security and Abuse Controls

> **Programme:** 08 · Safety and Operations — [`08-safety-and-operations.md`](../planning/programmes/08-safety-and-operations.md)
> **Source:** spec [`security-and-abuse-controls-dsh.md`](../suggestions/security-and-abuse-controls-dsh.md) · seed [`security-and-abuse-controls.md`](../suggestions/security-and-abuse-controls.md)
> **Effort:** M · **Phase:** P1 · **Position:** baseline P1 (the checker's hosted half cannot launch without it); per-service models at each P3 launch
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Security/abuse controls for every hosted surface: accounts, text, links, registries, mail, uploads, APIs, and verification fetches.
- **Why now / risk of deferring:** P1 gate — the security baseline must land before the verification checker's hosted half can launch. Risk of deferring: a hosted surface launching before its threat model exists — guarded only by the hosted-service gate (brainstorm decision 1), so the baseline has to be ready first.
- **Features to deliver:**
  - Security baseline at `docs/security-and-abuse-controls.md` — auth (second factors, no biometrics), server-side authorization + immediate revocation, output encoding, strict CSP, URL policy, upload limits, SSRF guard, network isolation, anti-scraping via limits only, dependency patching.
  - Threat-model template (spec §5.3 shape).
  - Incident-response process.
  - Canonical CSP + URL policy + rate-limit defaults on `site/security.html`.
- **Depends on:** verification-checker, moderation-disputes-and-appeals, contact-routes, continuity-and-namespace-custody

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Default rate-limit numbers (joint with verification-checker P3; cost-discipline + api-scale-and-reliability inform)
- **Question:** What are the default rate-limit numbers for the checker and hosted APIs, given they depend on cost modelling?
- **Option (a):** not fixed now — publish the per-surface rate-limit framework (which surfaces, which metric, plain-language states) and set the numeric defaults only after cost-discipline models the numbers and api-scale-and-reliability sets volume tiers; until then defaults are marked "pending modelling" and no hosted surface launches without numbers
  - **For:** spec §5.2.9 says numbers "MUST be published here once set operationally", and cost-discipline must model first (§5.1.1 measure-before-promising); IMPLEMENTATION-PLAN §11 assigns the numbers jointly with cost-discipline. Digest "Open: default rate limits".
  - **Against:** no numeric defaults at P1 means no hosted surface can launch until modelling lands — but that is also the gate spec §5.2.9 imposes ("no hosted surface launches without numbers").
- **Option (b):** set provisional per-surface numbers now (e.g. requests/minute per surface)
  - **For:** gives per-surface numbers immediately, unblocking surfaces.
  - **Against:** violates cost-discipline §5.1.1 "measure before promising" — numbers before modelling; spec §5.2.9 says they are set "once set operationally", not provisionally.
- **Option (c):** leave rate limits undefined and delegate them entirely to each service
  - **For:** minimal — leaves each service to self-manage its limits.
  - **Against:** spec §5.2.9 says "This document owns the default rate limits for all hosted surfaces" — delegating entirely contradicts that ownership, and the digest's "Open: default rate limits" would stay unresolved.
- **Recommended:** (a) — IMPLEMENTATION-PLAN §11 assigns the numbers jointly with cost-discipline (which must model first), and spec §5.2.9 says the numbers "MUST be published here once set operationally"; the framework ships P1, the numbers land when modelled.
- **Your choice:** ✏️

### D2 — CSP publishing location
- **Question:** Where are Content-Security-Policies published — per-theme conformance notes or a separate security page?
- **Option (a):** a single `site/security.html` carries the canonical CSP baseline, URL policy, and rate-limit defaults, and per-theme conformance notes only reference it (no duplication)
  - **For:** one canonical location avoids drift, and the conformance linter can check served headers against the single published baseline (spec §5.4 machine-checkable; §7 conformance-linter relationship). Digest "Open: CSP publishing location".
  - **Against:** themes with distinct CSP needs must reference rather than own their policy, which is slightly less self-contained per theme.
- **Option (b):** each theme's conformance note publishes its own CSP
  - **For:** each theme documents its own CSP alongside its own conformance note — self-contained.
  - **Against:** duplication invites drift between themes; spec §5.2.9's "one canonical wording" ownership pattern argues for a single baseline, and the conformance linter checks against a single source.
- **Option (c):** both the security page and every conformance note
  - **For:** both locations maximise discoverability.
  - **Against:** redundant copies drift out of sync, defeating the canonical-wording purpose and making linter checks ambiguous.
- **Recommended:** (a) — one canonical location avoids drift (the same "one canonical wording source" pattern Programme 1 uses), and the conformance linter can check served headers against the single published baseline.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, privacy, no silent change).
2. Publish `docs/security-and-abuse-controls.md` — the security baseline: authentication (strong second factors, no biometrics), server-side authorization with immediate session revocation on role change, output encoding of user text (allowlist formatting), strict CSP, URL policy (protocol allowlists, visible destinations, redirect validation), upload limits (type/size, non-executable paths, separate origin), SSRF guard (denied private/link-local ranges, bounded redirects, size/time caps), network isolation, anti-scraping via rate limits only, and the dependency rule (known-vulnerable dependencies block release).
3. Publish the threat-model template (spec §5.3 shape: `service`, `assets`, `attackers`, `controls`, `reviewed`, `nextReview`) at `docs/security/threat-model.template.json`.
4. Publish the rate-limit framework + defaults per D1 (surfaces, metrics, plain-language states; numeric defaults published here once cost-discipline models them; verification-checker named as joint owner for the checker's limits).
5. Publish the canonical CSP + URL policy + rate-limit defaults on `site/security.html` per D2, with per-theme conformance notes referencing it.
6. Publish the incident-response process: containment, notification to affected parties, public disclosure, post-incident record in the changelog, and a no-account security report route (contact-routes).
7. State the hosted-service gate slice: every P3 service publishes a threat model against this baseline before launch and updates it on material change.
8. Self-check against §5.

## 4. Constraints (must-nots)
- No biometric-only authentication.
- No covert tracking or fingerprinting — scraping resistance via rate limits and terms only.
- SSRF targets refused — private and link-local ranges denied.
- Known-vulnerable dependencies block release.
- Authorization enforced server-side only; client-side checks are presentation only.
- Role changes take effect immediately, including revocation of active sessions.
- No stored user content executed; rich formatting uses an allowlist only.

## 5. Acceptance criteria
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

## 6. Outputs to produce in the repository
- `docs/security-and-abuse-controls.md` — the security baseline (controls, URL policy, incident-response process, dependency rule).
- `docs/security/threat-model.template.json` — machine-readable threat-model template (spec §5.3).
- `site/security.html` — public security page (CSP baseline, URL policy, rate-limit defaults, no-account report route).

## 7. Read before building
- [`08-safety-and-operations.md`](../planning/programmes/08-safety-and-operations.md) — mini-plan
- [`security-and-abuse-controls-dsh.md`](../suggestions/security-and-abuse-controls-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
