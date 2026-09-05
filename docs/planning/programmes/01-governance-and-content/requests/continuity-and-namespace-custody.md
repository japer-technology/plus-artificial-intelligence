# Agent request — continuity-and-namespace-custody: Continuity and Namespace Custody

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`continuity-and-namespace-custody-dsh.md`](../../../../suggestions/continuity-and-namespace-custody-dsh.md) · seed [`continuity-and-namespace-custody.md`](../../../../suggestions/continuity-and-namespace-custody.md)
> **Effort:** M · **Phase:** P1 · **Position:** inventory P1 (domain/registrar/keys are already live — protect them); full process with P2 trust work
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — m-of-n recovery threshold and custodians
- **Question:** What emergency-recovery threshold and custodians protect the apex domain and signing authority?
- **Options:** (a) 3-of-5 named custodians · (b) 2-of-3 named custodians · (c) defer the numbers; publish the procedure shape and name custodians later
- **Recommended:** (a) — spec §5.2.5 requires a published threshold with no single-person power; 3-of-5 balances resilience and practicality.
- **Your choice:** ✏️

### D2 — Apex domain registrar and custody
- **Question:** Who holds the apex domain and its registrar record?
- **Options:** (a) a neutral third-party registrar with multi-year auto-renew, custody separate from any single service provider · (b) keep JAPER Technology as registrar-of-record now, with a documented path to (a) · (c) a dedicated entity from day one
- **Recommended:** (b) then (a) — the domain is already live; document the current registrar honestly and the separation plan (spec §10 leaves this undecided).
- **Your choice:** ✏️

### D3 — Pack-manifest signing keys
- **Question:** Should pack manifests be signed, and by which keys?
- **Options:** (a) yes — sign pack manifests with the project release/signing keys (the same key set used for exports) · (b) no signing for now, defer · (c) each theme author signs their own pack
- **Recommended:** (a) — note this is a joint decision with theme-engine-and-packs (shared owner); align before either ships.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a namespace inventory (`site/continuity-inventory.json`) listing the apex domain, all canonical domains/subdomains, key identifiers, signing keys in use, and public exports/archives — each with custodian and renewal/rotation dates; cover the founding addresses `https://eric-mourant.plus-artificial-intelligence.org` and `eric.mourant+ai@japer.technology`.
3. Specify domain custody (multi-year registration, auto-renew, renewal reminders, custodian separate from any single service provider) per §1 D2.
4. Specify the key rotation schedule, published current public keys, and a forward-only revocation path (old keys revoked, never reused).
5. Specify declaration-identifier non-reuse: identifiers assigned once, retired identifiers resolve to a tombstone stating status, never to a different declaration.
6. Specify emergency recovery per §1 D1 (m-of-n, no single person with sole power) as the default path on abandonment.
7. Specify scheduled public exports to at least one mirrorable location independent of the primary host, and wind-down obligations (advance notice, stated date, complete final export before shutdown).
8. Specify tombstones for every retired namespace item and ≥10-year retention of archived records and historical redirects; specify historical-link preservation (redirect or tombstone).
9. Specify the successor-transfer checklist (domain, DNS, keys, identifiers, accounts, backups, archives, changelog) with a dated, announced handover; ensure the offline/self-hosting pack carries the inventory, public keys, and archive locations for third-party verification.
10. Record the pack-manifest signing decision per §1 D3 (joint with theme-engine-and-packs); self-check against §4.

## 3. Constraints (must-nots)
- Declaration identifiers never reused (tombstone, never new declaration).
- No single person holds sole recovery power.
- Wind-down requires advance notice + complete final export.
- The commons must remain self-contained and mirrorable; history is append-only.

## 4. Acceptance criteria
- [ ] A published namespace inventory lists domains, identifiers, keys, and exports with custodians and dates.
- [ ] The apex domain is multi-year registered and auto-renewed.
- [ ] Key rotation is scheduled, and old keys are revoked, never reused.
- [ ] Retired declaration identifiers resolve to tombstones, never to new declarations.
- [ ] An emergency recovery procedure with a custody threshold is published.
- [ ] Public exports are mirrored off the primary host on a schedule.
- [ ] Wind-down requires advance notice and a complete final export.
- [ ] A successor-transfer checklist exists and is exercised before any real handover.
- [ ] Historical links resolve by redirect or tombstone for the fixed period.
- [ ] A third party can verify a declaration from the offline pack without contacting the steward.

## 5. Outputs to produce in the repository
- `site/continuity-inventory.json` — the namespace inventory (domains, identifiers, keys, exports, custodians, dates) + the custody/rotation/recovery/tombstone policy document it accompanies.

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`continuity-and-namespace-custody-dsh.md`](../../../../suggestions/continuity-and-namespace-custody-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
