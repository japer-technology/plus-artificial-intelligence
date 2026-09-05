# Development task — continuity-and-namespace-custody: Continuity and Namespace Custody

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`continuity-and-namespace-custody-dsh.md`](../suggestions/continuity-and-namespace-custody-dsh.md) · seed [`continuity-and-namespace-custody.md`](../suggestions/continuity-and-namespace-custody.md)
> **Effort:** M · **Phase:** P1 · **Position:** inventory P1 (domain/registrar/keys are already live — protect them); full process with P2 trust work
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Protect the apex domain, declaration identifiers, signing keys, exports and links: custody, renewal, recovery, succession, shutdown, archival rules.
- **Why now / risk of deferring:** The domain/registrar/keys are already live, so the inventory lands P1 to protect them, with the full process following P2 trust work (mini-plan Order). Risk: a single person holding sole recovery power — guarded by m-of-n (brainstorm open risks).
- **Features to deliver:**
  - A published namespace inventory (`site/continuity-inventory.json`) of domains, identifiers, keys, exports, custodians, dates.
  - A key rotation schedule + revocation path (forward-only, never reuse).
  - Declaration-identifier non-reuse with tombstones.
  - m-of-n emergency recovery.
  - Scheduled mirrorable exports.
  - A successor-transfer checklist.
  - Wind-down notice + final export.
  - ≥10-year retention.
  - Founding addresses covered.
- **Depends on:** governance-and-stewardship, portable-declaration-schema (identifier rules), declaration-lifecycle (tombstones), specification-versioning-and-hashing, proofs-of-control (key custody), federation-and-mirrors, offline-and-self-hosting-pack

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — m-of-n recovery threshold and custodians
- **Question:** What emergency-recovery threshold and custodians protect the apex domain and signing authority?
- **Option (a):** 3-of-5 named custodians
  - **For:** Spec §5.2.5 requires a published recovery threshold with no single person holding sole power; 3-of-5 balances resilience (tolerates two unavailable custodians) and practicality.
  - **Against:** The m-of-n threshold and choice of custodians are undecided (spec §10; digest "Open: m-of-n threshold"), so 3-of-5 is a proposal that still needs the five custodians actually named.
- **Option (b):** 2-of-3 named custodians
  - **For:** 2-of-3 is simpler to staff with a smaller group.
  - **Against:** A 2-of-3 threshold leaves only one custodian's failure to absorb, and naming three custodians still requires the same undecided custodian choice (spec §10).
- **Option (c):** defer the numbers; publish the procedure shape and name custodians later
  - **For:** Publishes the procedure shape without committing to names/numbers before they are decided.
  - **Against:** Spec §5.2.5 requires a published threshold ("for example m-of-n") as part of the recovery procedure, so deferring the numbers leaves the procedure incomplete and the digest's "Done when" (recovery procedure exists) unmet.
- **Recommended:** (a) — spec §5.2.5 requires a published threshold with no single-person power; 3-of-5 balances resilience and practicality.
- **Your choice:** ✏️

### D2 — Apex domain registrar and custody
- **Question:** Who holds the apex domain and its registrar record?
- **Option (a):** a neutral third-party registrar with multi-year auto-renew, custody separate from any single service provider
  - **For:** Spec §5.2.2 requires domain custody held "by a party separate from any single service provider where feasible" with multi-year auto-renew; a neutral registrar satisfies that.
  - **Against:** Spec §10 leaves the registrar choice undecided, and the domain is already live with the current registrar, so (a) requires a migration that isn't done yet.
- **Option (b):** keep JAPER Technology as registrar-of-record now, with a documented path to (a)
  - **For:** The domain is already live, so documenting the current JAPER registrar-of-record honestly (with a documented separation plan) matches the mini-plan Order "protect them" and spec §10's undecided status.
  - **Against:** Keeps custody with the founder's company in the interim, which is exactly the single-provider concentration spec §5.2.2 asks to separate from "where feasible".
- **Option (c):** a dedicated entity from day one
  - **For:** A dedicated entity maximises separation from day one.
  - **Against:** Requires a dedicated entity that does not yet exist (spec §10 undecided; governance phases not complete), so it pre-empts the legal structure still being decided.
- **Recommended:** (b) then (a) — the domain is already live; document the current registrar honestly and the separation plan (spec §10 leaves this undecided).
- **Your choice:** ✏️

### D3 — Pack-manifest signing keys
- **Question:** Should pack manifests be signed, and by which keys?
- **Option (a):** yes — sign pack manifests with the project release/signing keys (the same key set used for exports)
  - **For:** Signing pack manifests with the project release/signing keys keeps one authoritative key set (spec §5.2.3's published current public keys) and makes pack integrity verifiable offline (spec §5.2.11).
  - **Against:** This is a joint decision with theme-engine-and-packs (shared owner), so (a) must be aligned with that sibling before either ships — an extra coordination step.
- **Option (b):** no signing for now, defer
  - **For:** Avoids committing to signing before the joint owner (theme-engine-and-packs) is aligned.
  - **Against:** Defers an integrity property the spec §5.2.11 offline-verification path relies on, leaving pack authenticity unverifiable in the interim.
- **Option (c):** each theme author signs their own pack
  - **For:** Distributes signing to each theme author, who knows their own pack best.
  - **Against:** Fragments trust across many author keys rather than one published project key set (spec §5.2.3), weakening the "verify from the offline pack" acceptance criterion.
- **Recommended:** (a) — note this is a joint decision with theme-engine-and-packs (shared owner); align before either ships.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a namespace inventory (`site/continuity-inventory.json`) listing the apex domain, all canonical domains/subdomains, key identifiers, signing keys in use, and public exports/archives — each with custodian and renewal/rotation dates; cover the founding addresses `https://eric-mourant.plus-artificial-intelligence.org` and `eric.mourant+ai@japer.technology`.
3. Specify domain custody (multi-year registration, auto-renew, renewal reminders, custodian separate from any single service provider) per §2 D2.
4. Specify the key rotation schedule, published current public keys, and a forward-only revocation path (old keys revoked, never reused).
5. Specify declaration-identifier non-reuse: identifiers assigned once, retired identifiers resolve to a tombstone stating status, never to a different declaration.
6. Specify emergency recovery per §2 D1 (m-of-n, no single person with sole power) as the default path on abandonment.
7. Specify scheduled public exports to at least one mirrorable location independent of the primary host, and wind-down obligations (advance notice, stated date, complete final export before shutdown).
8. Specify tombstones for every retired namespace item and ≥10-year retention of archived records and historical redirects; specify historical-link preservation (redirect or tombstone).
9. Specify the successor-transfer checklist (domain, DNS, keys, identifiers, accounts, backups, archives, changelog) with a dated, announced handover; ensure the offline/self-hosting pack carries the inventory, public keys, and archive locations for third-party verification.
10. Record the pack-manifest signing decision per §2 D3 (joint with theme-engine-and-packs); self-check against §5.

## 4. Constraints (must-nots)
- Declaration identifiers never reused (tombstone, never new declaration).
- No single person holds sole recovery power.
- Wind-down requires advance notice + complete final export.
- The commons must remain self-contained and mirrorable; history is append-only.

## 5. Acceptance criteria
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

## 6. Outputs to produce in the repository
- `site/continuity-inventory.json` — the namespace inventory (domains, identifiers, keys, exports, custodians, dates) + the custody/rotation/recovery/tombstone policy document it accompanies.

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`continuity-and-namespace-custody-dsh.md`](../suggestions/continuity-and-namespace-custody-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
