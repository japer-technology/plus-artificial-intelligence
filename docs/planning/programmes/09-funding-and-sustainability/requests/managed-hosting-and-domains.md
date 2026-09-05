# Agent request — managed-hosting-and-domains: Managed Hosting and Domains

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../../09-funding-and-sustainability.md)
> **Source:** spec [`managed-hosting-and-domains-dsh.md`](../../../../suggestions/managed-hosting-and-domains-dsh.md) · seed [`managed-hosting-and-domains.md`](../../../../suggestions/managed-hosting-and-domains.md)
> **Effort:** L · **Phase:** P4 · **Position:** last of the services — it hosts everything else, so it needs everything else to be stable first
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Grace-period length and lapse schedule
- **Question:** What is the default grace period and lapse schedule?
- **Options:** (a) a provisional default (e.g. 30 days) with degradation to a labelled read-only/tombstoned state, set with abuse and cost modelling and revisable · (b) no grace period — immediate tombstone on non-renewal · (c) defer the number, publishing only "a documented grace period"
- **Recommended:** (a) — spec §5.2.4 requires a documented grace period; a provisional number keeps the policy concrete while §10 leaves the exact length to abuse/cost modelling.
- **Your choice:** ✏️

### D2 — Private deployment timing
- **Question:** Is private deployment offered initially or deferred until organisation workspaces is specified?
- **Options:** (a) defer private deployment until organisation-workspaces (Programme 7) is specified; launch with profile/register/domain hosting only · (b) offer private deployment at launch · (c) omit private deployment entirely
- **Recommended:** (a) — spec §10 leaves private deployment to organisation-workspaces being specified first; deferring avoids operating team infrastructure without the role/isolation model.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy).
2. Create `docs/services/managed-hosting-and-domains.md`: the managed-hosting service design — cost-based pricing with the no-legitimacy statement; portability (complete export of profile/register/declarations in portable formats, free, without justification); ownership (customer retains all rights, operator claims/licences none, no training/ads use); renewal and lapse per D1 (grace then labelled read-only/tombstoned state, declarations intact at canonical identifiers); suspension by published policy (abuse/safety/legal) with appeal, never deleting records or revoking declarations; shutdown with advance notice and a complete final export; published data location (jurisdictions, processors, updated on change); backups/recovery without identity documents or biometric proof (codes/control proofs); per-instance threat model and privacy analysis; self-hosted fallback reproduced from the offline pack; status pages reporting measured facts in plain language; long-term archival packages as versioned freezes with honest source/freshness labels; custom domains as address convenience, never proof of identity, endorsement, or verification; private deployment per D2.
3. Include the Programme 8 gates: static-first failure-mode statement (if hosting stops, records remain readable from snapshots and the offline pack), threat model, privacy analysis, and per-record cost model.
4. **Note for the agent (dependency, not a decision here):** managed hosting is a P4 extension gated on the "meaningful adoption" metric owned by Programme 10 / Programme 4 (IMPLEMENTATION-PLAN §11); this request states the dependency and must not define the metric.
5. Give the pricing/status/manage-UI chrome a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13); customer record content is T4 and never machine-translated.
6. Self-check against §4: walk the acceptance criteria and confirm each holds.

## 3. Constraints (must-nots)
- Payment buys convenience, scale, support, or managed operations — never legitimacy, rank, or permission.
- Customer owns records — the operator claims/licences none.
- Lapse degrades to read-only/tombstone with declarations intact.
- Recovery never requires identity documents or biometrics.
- Suspension never deletes records or revokes declarations, and offers an appeal.
- A custom domain is an address convenience, never proof of identity, endorsement, or verification.
- Self-hosted fallback is documented; export is free and without justification.
- Chrome follows the multi-language standard (R1/R4/R12/R13); customer content is T4.

## 4. Acceptance criteria
- [ ] The pricing surface states that payment buys no legitimacy, rank, or permission.
- [ ] A customer exports their complete records in portable formats without payment or justification.
- [ ] The operator's terms assert no rights over customer records.
- [ ] Non-renewal triggers grace, then a labelled read-only/tombstoned state, with declarations intact.
- [ ] A suspension never deletes records or revokes declarations, and offers an appeal.
- [ ] Shutdown publishes advance notice and a final export before turn-off.
- [ ] Jurisdictions and processors are published and updated on change.
- [ ] Recovery completes without identity documents or biometric proof.
- [ ] A threat model and privacy analysis are published before launch.
- [ ] A customer can reproduce their read-only surface from the offline pack.

## 5. Outputs to produce in the repository
- `docs/services/managed-hosting-and-domains.md` — hosting service design + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 6. Read before building
- [`09-funding-and-sustainability.md`](../../09-funding-and-sustainability.md) — mini-plan
- [`managed-hosting-and-domains-dsh.md`](../../../../suggestions/managed-hosting-and-domains-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../../../digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; chrome R1/R4/R12/R13, customer content T4)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
