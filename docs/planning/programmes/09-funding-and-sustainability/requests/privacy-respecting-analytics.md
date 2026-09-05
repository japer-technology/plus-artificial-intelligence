# Agent request — privacy-respecting-analytics: Privacy-Respecting Analytics

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../../09-funding-and-sustainability.md)
> **Source:** spec [`privacy-respecting-analytics-dsh.md`](../../../../suggestions/privacy-respecting-analytics-dsh.md) · seed [`privacy-respecting-analytics.md`](../../../../suggestions/privacy-respecting-analytics.md)
> **Effort:** S · **Phase:** P2 · **Position:** P2 policy (the catalogue) — so every earlier surface ships opt-in-ready; collection follows P3 dashboards
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Default retention periods per event family
- **Question:** What default retention periods apply per event family?
- **Options:** (a) a provisional schedule (e.g. 30 days default, with shorter or longer periods per family justified in the catalogue), set jointly with privacy-and-data-minimisation (Programme 8) and revisable · (b) a single uniform period for all events · (c) defer all numbers, publishing only "bounded retention"
- **Recommended:** (a) — spec §5.2.5 requires per-event published retention with a default and §10 fixes periods jointly with privacy-and-data-minimisation; a provisional schedule keeps the catalogue concrete.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy).
2. Create `site/analytics.html` (versioned, file://-safe, mirrorable): the versioned event catalogue listing every telemetry event with purpose, fields, retention period (per D1), and whether aggregate-only; the absolute rejections list; opt-in rules (default-off, immediate and complete opt-out, plain-language opt-in control); aggregation thresholds with "fewer than N" low-count suppression; the no-sale and no-cross-service-profile rules; and the statement that measurement is never on the dependency path.
3. Create `site/analytics-events.json`: the machine-readable, versioned event catalogue matching the §5.3 data model (events with `aggregateOnly`/`retention`/`optIn`, rejections, `minimumGroup`).
4. Specify measurement preference: server-side aggregate counts first, then explicit user-initiated events; no per-visitor identifiers, persistent cookies, or tracking pixels.
5. Specify retention enforcement: expired events deleted or irreversibly aggregated on schedule; a retention change applies prospectively.
6. **Note for the agent (dependency, not a decision here):** the low-count suppression minimum defers to the disclosure threshold owned by research-observatory (k = 10 by default, Programme 4) — this request references it, does not set it.
7. **Note for the agent (sequencing, not a decision here):** the catalogue is the P2 deliverable; actual collection follows Programme 4's public-adoption-dashboard (P3). A hosted analytics surface, if any, ships later with its own privacy analysis, threat model, and failure-mode statement (§5.2.9).
8. State that catalogue changes are versioned and announced in the changelog, and that an analytics incident follows the security-and-abuse-controls incident process with public disclosure.
9. Give the catalogue and opt-in control copy a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13; catalogue and control copy T2).
10. Self-check against §4: walk the acceptance criteria and confirm each holds.

## 3. Constraints (must-nots)
- Telemetry buys convenience, scale, support, or managed operations — never legitimacy, rank, permission, or a more favourable measurement (and never gates the free floor).
- No ad-tech, fingerprinting, or tracking cookies/pixels.
- No cross-service profiles; no inferred tool/AI use; no contact lists or invasive reader tracking.
- Telemetry data never sold; never gates free-floor features.
- Catalogue before collection; opt-in default-off; retention enforced; below-threshold statistics render "fewer than N".
- Measurement is never on the dependency path — disabling analytics changes no core feature's behaviour.
- The catalogue and control copy follow the multi-language standard (R1/R4/R12/R13; T2).

## 4. Acceptance criteria
- [ ] A versioned event catalogue lists every event before it is collected.
- [ ] The no-account path collects nothing by default, and opt-in is explicit and revocable.
- [ ] No surface uses ad-tech, fingerprinting, cookies-for-tracking, or tracking pixels.
- [ ] No cross-site, cross-device, or cross-service profile is built from analytics.
- [ ] No event infers tool use or an individual's AI use.
- [ ] No contact list is harvested or measured.
- [ ] Every event has a published retention period that is enforced.
- [ ] Below the published threshold, a statistic renders "fewer than N".
- [ ] Disabling analytics changes no core feature's behaviour.
- [ ] Any hosted analytics surface would publish a privacy analysis, threat model, and failure-mode statement.

## 5. Outputs to produce in the repository
- `site/analytics.html` — the versioned event catalogue + rejections + opt-in control + thresholds.
- `site/analytics-events.json` — the machine-readable, versioned event catalogue.

## 6. Read before building
- [`09-funding-and-sustainability.md`](../../09-funding-and-sustainability.md) — mini-plan
- [`privacy-respecting-analytics-dsh.md`](../../../../suggestions/privacy-respecting-analytics-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../../../digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; catalogue + control copy T2)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
