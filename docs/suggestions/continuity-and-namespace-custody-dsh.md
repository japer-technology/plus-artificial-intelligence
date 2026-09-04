# Continuity and Namespace Custody — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`continuity-and-namespace-custody.md`](continuity-and-namespace-custody.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines how the +AI project protects the things that give it continuity — the apex domain, declaration identifiers, signing keys, public exports, and historical links — through documented custody, renewal, recovery, succession, shutdown notice, and archival arrangements, so that an issued declaration and its meaning outlive any single operator.

## 2. Placement and boundaries
Continuity is the operational guarantee underneath governance and the free floor: it makes sure the records the other specifications create can survive. It owns the mechanics of keys, identifiers, and archives; it defers policy authority over who the successor custodian is to governance and stewardship, and defers the schema and identifier format to the portable declaration schema and opt-in registry siblings. It is static-first by construction: the commons must remain readable even if every hosted service stops.

## 3. Terminology
- **Apex domain** — the primary domain under which canonical pages and identities live.
- **Declaration identifier** — a stable, unique reference to one declaration record.
- **Signing key** — a key used to sign published exports and releases.
- **Final export** — the complete, self-contained archive published at wind-down.
- **Tombstone** — the minimal record left after a namespace item is retired, stating what was there and where it went.
- **Successor custodian** — the named next holder of continuity responsibilities.

## 4. Scope
### 4.1 In scope
- Inventory and custody of domains, identifiers, keys, and exports.
- Renewal, rotation, recovery, and non-reuse rules.
- Succession and transfer to a successor custodian.
- Shutdown notice and final-export/tombstone obligations.

### 4.2 Out of scope and deferred
- Who the successor is and how they are chosen (deferred to governance and stewardship).
- The declaration identifier format (deferred to portable declaration schema and the registry).
- Proof-of-control mechanics (deferred to proofs of control).
- Mirror and federation freshness rules (deferred to federation and mirrors).

## 5. Specification
### 5.1 Design goals and principles
Assume the operator can disappear. Design so that everything a signer or verifier needs is either under multiple custody, published and mirrorable, or both. Treat identifiers as never-reused and history as append-only: retirement leaves a tombstone, never a rewrite.

### 5.2 Normative requirements
1. The steward MUST maintain and publish a namespace inventory listing the apex domain, all canonical domains and subdomains, key identifiers, the signing keys in use, and the public exports and archives, with their custodian and renewal dates.
2. Domain custody MUST be held by a party separate from any single service provider where feasible, with renewal reminders set well before expiry and the apex domain registered for multiple years and auto-renewed.
3. Signing keys MUST have a documented rotation schedule, a published set of current public keys, and a stated revocation path; rotation MUST be forward-only, with old keys revoked rather than reused.
4. Declaration identifiers MUST be assigned once and never reused, even after revocation or redaction; a retired identifier resolves to a tombstone stating its status, never to a different declaration.
5. Emergency recovery MUST be defined in advance: a published recovery procedure with a threshold of custodians (for example m-of-n) able to restore the apex domain and signing authority if the primary operator is unavailable, without any single person holding sole power.
6. Public exports and snapshots MUST be published to at least one mirrorable location independent of the primary host, and MUST be generated on a schedule so the last-known-good export is never older than the stated interval.
7. Service wind-down MUST require advance public notice, a stated date, and the publication of a final export containing the specification, translations, schemas, builders, checker, registry snapshots, and verification instructions, before any service is turned off.
8. Every retired namespace item MUST leave a tombstone with the original location, what it held, and where its content moved or that it was removed; tombstones MUST persist indefinitely, and archived records and historical redirects MUST be retained for a minimum of 10 years, extensible by governance. The declaration lifecycle sibling defers these retention periods to this document.
9. Transfer to a successor custodian MUST follow a published checklist covering domain, DNS, keys, identifiers, accounts, backups, archives, and the changelog, with the handover recorded as a dated event and the public notified.
10. Historical links MUST be preserved: URLs that pointed to a declaration or page MUST continue to resolve, by redirect or tombstone, for the period continuity fixes, and the URL semantics sibling's rules govern the path/query/fragment handling.
11. The offline and self-hosting pack MUST contain enough of the namespace inventory, public keys, and archive locations for a third party to verify declarations without contacting the steward.
12. The founding addresses `https://eric-mourant.plus-artificial-intelligence.org` and `eric.mourant+ai@japer.technology` MUST be covered by this inventory and by its renewal, recovery, and succession rules. Custody of the addresses themselves rests with the steward; product and allocation rules for subdomains and aliases are owned by named subdomains and identity bundles and by the plus-addressing convention, which defer custody here.

### 5.3 Data model
A namespace inventory document records each item: type (domain, identifier, key, export), name, custodian, renewal/rotation date, status, and tombstone location. It is versioned and published like any commons record, and it is itself covered by a checksum so its integrity can be verified offline.

### 5.4 Interfaces and behaviours
The continuity document MUST be linked from the Governance and Support destinations in shared project navigation. The checker MUST be able to verify a declaration against archived snapshots and published keys, and MUST report "archived" or "tombstone" status distinctly from "live" without implying failure.

### 5.5 Lifecycle and operational rules
Rotation and renewal are scheduled, logged events. Succession and wind-down are governed transitions: they require notice, a checklist, and a recorded handover. Abandonment (no renewal, no notice, no successor) triggers the emergency recovery procedure as the default path.

## 6. Free floor, red lines, and invariants
Continuity is what makes the free floor durable in practice: the no-account path, the builders, and the checker must remain usable from archived exports with zero infrastructure. This document MUST keep the commons self-contained and mirrorable (invariant 4) and honour no-silent-change (invariant 5) by making history append-only with tombstones. It introduces no red-line concern, but must avoid identity integrations and reputation scoring in any recovery or verification design.

## 7. Relationships to sibling specifications
- [Governance and Stewardship](governance-and-stewardship-dsh.md) — chooses the successor and sets succession policy; this document executes it.
- [Portable Declaration Schema](portable-declaration-schema-dsh.md) and [Opt-In Signatory Registry](opt-in-signatory-registry-dsh.md) — own the identifier format and record semantics this document keeps stable.
- [Specification Versioning and Hashing](specification-versioning-and-hashing-dsh.md) — the versioning discipline the archive must preserve.
- [Proofs of Control](proofs-of-control-dsh.md) — the key and domain control evidence this document's rotation supports.
- [Declaration Lifecycle](declaration-lifecycle-dsh.md) — defers tombstone and archive retention periods to this document.
- [Federation and Mirrors](federation-and-mirrors-dsh.md) — the mirror targets for public exports.
- [Offline and Self-Hosting Pack](offline-and-self-hosting-pack-dsh.md) — the final-export content and offline verification path.
- [Named Subdomains and Identity Bundles](named-subdomains-and-identity-bundles-dsh.md) — the subdomain products this inventory covers.

## 8. Resolution of the seed's "before implementation" concerns
- **Key rotation** — resolved in 5.2 item 3: scheduled, forward-only, revoked never reused.
- **Identifier non-reuse** — resolved in 5.2 item 4: assigned once, retired to a tombstone.
- **Emergency recovery** — resolved in 5.2 item 5: published m-of-n procedure, no single point of failure.
- **Final exports** — resolved in 5.2 items 6–7: scheduled exports and a complete final export before wind-down.
- **Service wind-down** — resolved in 5.2 item 7: advance notice, stated date, final export first.
- **Transfer to a successor custodian** — resolved in 5.2 item 9: a published checklist and recorded handover.

## 9. Acceptance criteria
1. A published namespace inventory lists domains, identifiers, keys, and exports with custodians and dates.
2. The apex domain is multi-year registered and auto-renewed.
3. Key rotation is scheduled, and old keys are revoked, never reused.
4. Retired declaration identifiers resolve to tombstones, never to new declarations.
5. An emergency recovery procedure with a custody threshold is published.
6. Public exports are mirrored off the primary host on a schedule.
7. Wind-down requires advance notice and a complete final export.
8. A successor-transfer checklist exists and is exercised before any real handover.
9. Historical links resolve by redirect or tombstone for the fixed period.
10. A third party can verify a declaration from the offline pack without contacting the steward.

## 10. Open questions
- The m-of-n custody threshold and the choice of custodians are undecided.
- Whether the apex domain should be held by a neutral third-party registrar or a dedicated entity is undecided.
