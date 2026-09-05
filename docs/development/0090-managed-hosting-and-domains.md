# Development task — managed-hosting-and-domains: Managed Hosting and Domains

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md)
> **Source:** spec [`managed-hosting-and-domains-dsh.md`](../suggestions/managed-hosting-and-domains-dsh.md) · seed [`managed-hosting-and-domains.md`](../suggestions/managed-hosting-and-domains.md)
> **Effort:** L · **Phase:** P4 · **Position:** last of the services — it hosts everything else, so it needs everything else to be stable first
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Optional managed hosting of profiles/registers/custom domains/private deployments with backups, recovery, status pages, archival.
- **Why now / risk of deferring:** Last of the services (P4): it hosts everything else, so everything else must be stable first. Hosting records before ownership, portability, and lapse rules exist would put customer records at risk, and opening early would fund nothing ("Premature monetisation").
- **Features to deliver:**
  - optional managed hosting of profiles/registers/custom domains/private deployments
  - cost-based pricing with the no-legitimacy statement
  - guaranteed portability (free export in portable formats, no justification)
  - explicit customer ownership (operator claims/licences none, no training/ads use)
  - time-limited renewal with a documented grace period, lapse degrading to a labelled read-only/tombstoned state with declarations intact at canonical identifiers
  - suspension by published policy with appeal, never deleting records
  - shutdown with advance notice and final export
  - published data location (jurisdictions/processors)
  - non-biometric recovery (codes/control proofs)
  - per-instance threat model
  - self-hosted fallback from the offline pack
  - measured status pages
  - versioned long-term archival packages
  - custom domains as address convenience, never proof of identity
- **Depends on:** hosted-profiles, opt-in-signatory-registry, named-subdomains-and-identity-bundles, organisation-workspaces, continuity-and-namespace-custody, federation-and-mirrors, offline-and-self-hosting-pack

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Grace-period length and lapse schedule
- **Question:** What is the default grace period and lapse schedule?
- **Option (a):** a provisional default (e.g. 30 days) with degradation to a labelled read-only/tombstoned state, set with abuse and cost modelling and revisable
  - **For:** spec §5.2.4 requires a documented grace period and lapse to a reachable read-only/tombstoned state with declarations intact; a provisional number keeps the policy concrete while §10 leaves the exact length to abuse/cost modelling.
  - **Against:** the 30-day figure is provisional and may be revised by abuse/cost modelling (spec §10).
- **Option (b):** no grace period — immediate tombstone on non-renewal
  - **For:** immediate tombstone is simple and avoids unpaid service lingering.
  - **Against:** contradicts spec §5.2.4's "documented grace period" requirement, and an immediate tombstone gives customers no transition window to export or renew.
- **Option (c):** defer the number, publishing only "a documented grace period"
  - **For:** avoids stating a number before abuse/cost modelling (spec §10).
  - **Against:** spec §5.2.4 requires a documented grace period, not just a statement that one exists — a placeholder leaves lapse behaviour undefined.
- **Recommended:** (a) — spec §5.2.4 requires a documented grace period; a provisional number keeps the policy concrete while §10 leaves the exact length to abuse/cost modelling.
- **Your choice:** ✏️

### D2 — Private deployment timing
- **Question:** Is private deployment offered initially or deferred until organisation workspaces is specified?
- **Option (a):** defer private deployment until organisation-workspaces (Programme 7) is specified; launch with profile/register/domain hosting only
  - **For:** spec §10 leaves private deployment to organisation-workspaces being specified first, and spec §2 defers private team deployment roles to organisation-workspaces; deferring avoids operating team infrastructure without the role/isolation model.
  - **Against:** customers wanting private deployment must wait until organisation-workspaces is specified.
- **Option (b):** offer private deployment at launch
  - **For:** private deployment is available immediately as a priced option.
  - **Against:** operates team infrastructure before organisation-workspaces (Programme 7) defines roles/approvals (spec §2, §10), risking an under-specified isolation model.
- **Option (c):** omit private deployment entirely
  - **For:** simplifies the launch scope to profile/register/domain hosting only.
  - **Against:** drops a scoped offering the spec lists as a kind of instance (spec §5.3 "private-deployment"), foreclosing a future revenue path.
- **Recommended:** (a) — spec §10 leaves private deployment to organisation-workspaces being specified first; deferring avoids operating team infrastructure without the role/isolation model.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy).
2. Create `docs/services/managed-hosting-and-domains.md`: the managed-hosting service design — cost-based pricing with the no-legitimacy statement; portability (complete export of profile/register/declarations in portable formats, free, without justification); ownership (customer retains all rights, operator claims/licences none, no training/ads use); renewal and lapse per D1 (grace then labelled read-only/tombstoned state, declarations intact at canonical identifiers); suspension by published policy (abuse/safety/legal) with appeal, never deleting records or revoking declarations; shutdown with advance notice and a complete final export; published data location (jurisdictions, processors, updated on change); backups/recovery without identity documents or biometric proof (codes/control proofs); per-instance threat model and privacy analysis; self-hosted fallback reproduced from the offline pack; status pages reporting measured facts in plain language; long-term archival packages as versioned freezes with honest source/freshness labels; custom domains as address convenience, never proof of identity, endorsement, or verification; private deployment per D2.
3. Include the Programme 8 gates: static-first failure-mode statement (if hosting stops, records remain readable from snapshots and the offline pack), threat model, privacy analysis, and per-record cost model.
4. **Note for the agent (dependency, not a decision here):** managed hosting is a P4 extension gated on the "meaningful adoption" metric owned by Programme 10 / Programme 4 (IMPLEMENTATION-PLAN §11); this request states the dependency and must not define the metric.
5. Give the pricing/status/manage-UI chrome a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13); customer record content is T4 and never machine-translated.
6. Self-check against §5: walk the acceptance criteria and confirm each holds.

## 4. Constraints (must-nots)
- Payment buys convenience, scale, support, or managed operations — never legitimacy, rank, or permission.
- Customer owns records — the operator claims/licences none.
- Lapse degrades to read-only/tombstone with declarations intact.
- Recovery never requires identity documents or biometrics.
- Suspension never deletes records or revokes declarations, and offers an appeal.
- A custom domain is an address convenience, never proof of identity, endorsement, or verification.
- Self-hosted fallback is documented; export is free and without justification.
- Chrome follows the multi-language standard (R1/R4/R12/R13); customer content is T4.

## 5. Acceptance criteria
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

## 6. Outputs to produce in the repository
- `docs/services/managed-hosting-and-domains.md` — hosting service design + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 7. Read before building
- [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md) — mini-plan
- [`managed-hosting-and-domains-dsh.md`](../suggestions/managed-hosting-and-domains-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../planning/digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; chrome R1/R4/R12/R13, customer content T4)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
