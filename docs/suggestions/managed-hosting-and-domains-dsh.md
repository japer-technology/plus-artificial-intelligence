# Managed Hosting and Domains — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`managed-hosting-and-domains.md`](managed-hosting-and-domains.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines the optional managed-hosting and domain service: running hosted profiles, registers, custom domains, regional or private deployments, backups, recovery, status pages, and long-term archival packages on a customer's behalf. Its organising rule is that the customer owns their records and the operator owns only the operational work — price covers hosting labour, never legitimacy, rank, or permission, and never the mark's meaning.

## 2. Placement and boundaries
This service operates infrastructure around resources defined elsewhere: the content of a hosted profile belongs to [Hosted profiles](hosted-profiles-dsh.md), the address rules of custom domains to [Named subdomains and identity bundles](named-subdomains-and-identity-bundles-dsh.md), private team deployment to the [Organisation workspaces](organisation-workspaces-dsh.md) specification, shutdown and archival to [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md), and mirroring to [Federation and mirrors](federation-and-mirrors-dsh.md). It is a paid service and therefore bound by the free-floor and red-line invariants below. The founding example `https://eric-mourant.plus-artificial-intelligence.org` is a hosted instance of what this specification generalises.

## 3. Terminology
- **Hosted instance** — a customer's profile, register, or domain operated on the project's infrastructure.
- **Portability** — the customer's ability to export and move their content without loss.
- **Ownership** — the customer's residual control over their records; the operator holds no interest in them.
- **Regional deployment** — running an instance in a chosen data-location jurisdiction.
- **Self-hosted fallback** — the customer's ability to run an equivalent read-only or full instance from the offline pack.
- **Grace period** — the interval after a renewal lapse during which the service remains reachable.

## 4. Scope
### 4.1 In scope
- Pricing of operating work and the no-legitimacy statement.
- Portability, ownership, and export.
- Renewal, suspension, shutdown, and grace periods.
- Regional/private deployment and data location.
- Backups, recovery, status pages, and archival packages.
- Security, privacy, and the self-hosted fallback.

### 4.2 Out of scope and deferred
- Profile and register content rules (hosted profiles, opt-in signatory registry).
- Domain allocation, reservation, and lapse rules (named subdomains and identity bundles).
- Team roles and approvals (organisation workspaces).
- Custody, key rotation, and wind-down execution (continuity and namespace custody).

## 5. Specification
### 5.1 Design goals and principles
1. **Customer owns, operator operates.** The operator never acquires rights in a customer's records or identity.
2. **Price the work, not the status.** Charges track operating cost; they never buy legitimacy, rank, or permission.
3. **Leave anytime.** Export and self-hosting are first-class, not escape hatches.
4. **Graceful degradation.** Lapse and shutdown degrade convenience, never destroy or hide records.
5. **Honest about location and risk.** Jurisdiction, processors, and failure modes are published.

### 5.2 Normative requirements
1. Pricing MUST be set against operating cost and MUST state, on the pricing surface and here, that payment buys convenience, scale, support, or managed operations — never legitimacy, rank, or permission, per [Free-floor covenant](free-floor-covenant-dsh.md).
2. Portability MUST be guaranteed: the customer can export their complete profile, register, and declarations in portable formats at any time, free of charge, without justification.
3. Ownership MUST be explicit: the customer retains all rights in their records; the operator MUST NOT claim, license, or transfer them, and MUST NOT use customer records for training, advertising, or any purpose beyond operating the service.
4. Renewal MUST be time-limited with a documented grace period; on lapse the service MUST degrade to a reachable read-only or tombstoned state, and the underlying declarations and records MUST remain intact at their canonical identifiers.
5. Suspension MUST be governed by a published policy (abuse, safety, legal) with an appeal route, and MUST NOT delete the customer's records or revoke their declarations.
6. Shutdown MUST follow [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md): advance notice, a stated date, and a complete final export before any service is turned off.
7. Data location MUST be published per deployment: jurisdictions, processors, and any regional option MUST be stated and updated on change, per [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md).
8. Backups and recovery MUST be documented, tested, and restored without identity documents or biometric proof (RL-6); recovery uses codes or the control proofs owned by [Proofs of control](proofs-of-control-dsh.md).
9. Security MUST follow [Security and abuse controls](security-and-abuse-controls-dsh.md): a published threat model per instance class before launch, and the private-account/public-record separation of privacy and data minimisation.
10. A self-hosted fallback MUST be documented: the customer can reproduce their read-only surface, and where feasible a full instance, from the [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md) with no dependence on this service.
11. Status pages MUST report measured facts (uptime, snapshot freshness, degraded states) in plain language, never as marketing, per [Public adoption dashboard](public-adoption-dashboard-dsh.md).
12. Long-term archival packages MUST be a distinct offering that freezes a versioned copy with honest source and freshness labels, per [Federation and mirrors](federation-and-mirrors-dsh.md).
13. The service MUST complete a privacy analysis and a threat model before launch, and MUST publish a failure-mode statement: if hosting stops, records remain readable from snapshots and the offline pack (degraded mode), per [Static-first service architecture](static-first-service-architecture-dsh.md).
14. Custom domains MUST defer to named subdomains and identity bundles: a domain is an address convenience, never proof of identity, endorsement, or verification (RL-9).

### 5.3 Data model
```
{
  "instance": "identifier",
  "kind": "profile | register | domain | private-deployment",
  "owner": "customer identifier",
  "region": "jurisdiction",
  "processors": [ "..." ],
  "term": { "renewal": "ISO-8601", "grace": "period" },
  "failureMode": { "degradesTo": "read-only | offline pack", "finalExport": "path" }
}
```

### 5.4 Interfaces and behaviours
- **Provision:** a customer selects kind, region, and term; the service binds to the customer's canonical identifiers, never re-minting identity.
- **Manage:** export, renewal, region change, and recovery are one-page actions with plain-language states.
- **Lapse:** grace, then degrade to a labelled read-only or tombstoned state; the canonical record stays reachable.
- **Shutdown:** final export precedes turn-off; tombstones and redirects preserve historical links.

### 5.5 Lifecycle and operational rules
- Instances have terms, renewals, suspensions, and shutdowns — all recorded events, never silent transitions.
- Regional relocation is a recorded change of jurisdiction with the customer's consent and a published processor update.
- Archival packages freeze at a snapshot and are never edited in place; a newer archive is a new version (no silent change).

## 6. Free floor, red lines, and invariants
The free floor cited here is: the no-account declaration builder, the offline checker, the offline and self-hosting pack, and the ability to self-host a read-only replacement all remain free and account-free; hosting is an optional convenience, never a prerequisite. This specification enforces RL-1 (no payment for the mark or meaning), RL-2 (no mandatory identity — pseudonyms and local-only use stay first-class), RL-6 (no biometric proof for recovery), and RL-9 (a domain is an address, never a rank or trust score). The static-first invariant is honoured by the guaranteed self-hosted fallback.

## 7. Relationships to sibling specifications
- [Hosted profiles](hosted-profiles-dsh.md) and [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) — own the content this service operates.
- [Named subdomains and identity bundles](named-subdomains-and-identity-bundles-dsh.md) — owns domain allocation, renewal, and lapse rules this service executes.
- [Organisation workspaces](organisation-workspaces-dsh.md) — owns private-deployment roles.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md) — owns shutdown, final exports, and archival custody.
- [Federation and mirrors](federation-and-mirrors-dsh.md) — owns the mirror/archival labels and freshness rules.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md) — is the self-hosted fallback target.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) and [Security and abuse controls](security-and-abuse-controls-dsh.md) — own the privacy analysis and threat model this service must complete.
- [Cost discipline](cost-discipline-dsh.md) — prices the operating work, informed by its model.
- [Static-first service architecture](static-first-service-architecture-dsh.md) — owns the failure-mode statement.
- [Free-floor covenant](free-floor-covenant-dsh.md) and [Red lines and cautious extensions](red-lines-and-cautious-extensions-dsh.md) — bind this paid service's floor and prohibitions.

## 8. Resolution of the seed's "before implementation" concerns
- **Price operating work rather than legitimacy** — 5.2 item 1 and 6: cost-based pricing with the no-legitimacy statement.
- **Portability** — 5.2 item 2: complete export in portable formats, free and on request.
- **Ownership** — 5.2 item 3: customer retains all rights; operator holds none.
- **Renewal** — 5.2 item 4 and 5.4: time-limited terms with a documented grace period.
- **Suspension** — 5.2 item 5: published policy with appeal, never deleting records.
- **Shutdown** — 5.2 item 6 and 5.4: advance notice and a final export first.
- **Data location** — 5.2 item 7 and 5.3: published jurisdictions and processors, updated on change.
- **Security** — 5.2 items 8-9: threat model, non-biometric recovery, account/public separation.
- **Self-hosted fallback** — 5.2 item 10: documented reproduction from the offline pack.

## 9. Acceptance criteria
1. The pricing surface states that payment buys no legitimacy, rank, or permission.
2. A customer exports their complete records in portable formats without payment or justification.
3. The operator's terms assert no rights over customer records.
4. Non-renewal triggers grace, then a labelled read-only/tombstoned state, with declarations intact.
5. A suspension never deletes records or revokes declarations, and offers an appeal.
6. Shutdown publishes advance notice and a final export before turn-off.
7. Jurisdictions and processors are published and updated on change.
8. Recovery completes without identity documents or biometric proof.
9. A threat model and privacy analysis are published before launch.
10. A customer can reproduce their read-only surface from the offline pack.

## 10. Open questions
- The default grace-period length and lapse schedule, to be set with abuse and cost modelling.
- Whether "private deployment" is offered initially or deferred until organisation workspaces is specified.
