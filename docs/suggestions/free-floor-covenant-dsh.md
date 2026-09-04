# Free-Floor Covenant — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`free-floor-covenant.md`](free-floor-covenant.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines the Free-Floor Covenant: a versioned, durable public promise that the core of +AI — the notation, the canonical meaning, reviewed translations, no-account tools, portable formats, basic checking, public governance, correction, and revocation — remains available without payment, and that no future service, licence, or governance change may quietly move that floor.

## 2. Placement and boundaries
The covenant is a governance instrument, not a service. It sits between the licensing policy (which makes the floor legally durable), the governance specification (which owns amendment authority), and the financial transparency and cost-discipline specifications (which keep the floor sustainable). It binds every paid service specification: each must state what remains free and that payment buys convenience, scale, support, or operations — never legitimacy, rank, or permission. It does not itself license anything; that is the licensing policy's job.

## 3. Terminology
- **Free floor** — the minimum set of capabilities that must remain usable at no cost and with no required account or infrastructure.
- **Covenant** — the versioned public promise itself, published as a stable document.
- **Free-floor item** — one named capability in the floor (for example "basic checking").
- **Notice period** — the minimum interval between announcing and applying an amendment that narrows the floor.
- **Anti-abuse limit** — a bounded, stated restriction on free use imposed solely to prevent misuse of shared infrastructure.

## 4. Scope
### 4.1 In scope
- The enumerated free-floor items.
- Amendment rules and notice periods.
- Anti-abuse limits and their boundaries.
- Archival guarantees for every published covenant version.
- The relationship between the covenant and licences and governance.

### 4.2 Out of scope and deferred
- Choice of specific licence texts (deferred to licensing and mark policy).
- Who may amend and how disputes resolve (deferred to governance and stewardship).
- Operating-cost budgeting that keeps the floor sustainable (deferred to cost discipline).
- The mechanics of offline availability (deferred to static-first and offline/self-hosting siblings).

## 5. Specification
### 5.1 Design goals and principles
The floor must be enumerated, not assumed, so every capability is checkable. It must be durable: changeable only through a visible, versioned process, never by service config, pricing page, or repository edit. It must be enforceable: a licence grants the free use, and governance polices amendment. And it must be honest about limits: the covenant promises free use, not unlimited free computation or free personal service.

### 5.2 Normative requirements
1. The covenant MUST be published as a versioned document, listed in the changelog, and hashable exactly as the specification-versioning sibling requires.
2. The free floor MUST include at least: use of the notation; the canonical meaning; reviewed translations of the normative specification; the no-account declaration builder; portable declaration formats and schemas; basic syntax and integrity checking; the public governance record; and correction and revocation of one's own declarations.
3. The covenant MUST state, for each free-floor item, what "free" means in that case: no payment, no required account, no mandatory registration, and usable via the file://-safe commons.
4. Any paid service specification MUST cite this covenant and state its own free floor explicitly: what remains free and that payment buys convenience, scale, support, or managed operations — never legitimacy, rank, or permission.
5. Narrowing the free floor MUST be treated as a specification change: versioned, announced with a notice period, and subject to the governance body that owns the covenant; it MAY NOT be done by a service operator unilaterally.
6. The notice period for narrowing the floor MUST be fixed in the covenant itself and MUST be no shorter than the period governance fixes for specification changes (at least 180 days for floor narrowing, per governance and stewardship).
7. Anti-abuse limits MUST be enumerated, proportional, and stated in the covenant; a limit MAY restrict volume, rate, or a specific free capability to prevent abuse, but MUST NOT remove a floor item entirely or make it conditional on payment, identity, or an account.
8. Every version of the covenant MUST remain publicly archived at a stable URL, with older versions never altered or removed, so a signer can show the floor in force when a declaration was issued.
9. The covenant MUST be published under a licence that permits mirroring and redistribution, and its free-floor obligations MUST be carried by any successor custodian or fork of the public layer.
10. A signer's free rights to use the notation and issue declarations MUST NOT be affected by whether they hold a paid account, membership, or sponsorship.
11. Basic checking MUST include free self-service rechecking of control proofs (freshness re-checks), usable repeatedly without payment or approval; hosted capacity limits MAY queue or delay on-demand checks but MUST NOT remove or paywall the capability (see cost discipline).

### 5.3 Data model
The covenant is a versioned document carrying: a version identifier, effective date, the enumerated floor items with per-item definitions of "free", anti-abuse limits, the notice period, and the specification version it references. A machine-readable copy of the floor items MAY be published for the conformance linter to check service pages against.

### 5.4 Interfaces and behaviours
A paid service page MUST render a free-floor statement derived from the covenant, not hand-written marketing copy that could drift from normative meaning. The conformance linter MUST be able to verify that a service's stated floor does not contradict the current covenant.

### 5.5 Lifecycle and operational rules
Amendments proceed: proposal, public notice of at least the fixed period, governance decision, versioned publication, changelog entry, archive of the prior version. Withdrawal of the covenant or its de-facto abandonment by a custodian triggers the continuity and namespace custody succession and final-export obligations.

## 6. Free floor, red lines, and invariants
This document is the free floor made explicit, so the first global invariant is its subject, not merely a constraint. The covenant MUST reassert, verbatim, that the +AI meaning and a usable no-account path stay free. It MUST forbid any paid tier from conferring legitimacy, rank, or permission, and MUST list the red lines so that a free-floor amendment can never become a backdoor to payment-for-use, mandatory identity, or covert tracking. As a versioned promise, it is itself the no-silent-change invariant applied to pricing and access.

## 7. Relationships to sibling specifications
- [Governance and Stewardship](governance-and-stewardship-dsh.md) — owns amendment authority, notice, and dispute; the covenant is one of its protected instruments.
- [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md) — grants the licences that make free use legally durable.
- [Financial Transparency](financial-transparency-dsh.md) — reports whether the floor is actually being funded without influence.
- [Cost Discipline](cost-discipline-dsh.md) — keeps the free layer sustainable per record.
- [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md) — guarantees the covenant survives custodian succession and wind-down.
- [Specification Versioning and Hashing](specification-versioning-and-hashing-dsh.md) — defines the versioning and hashing the covenant must use.
- [Offline and Self-Hosting Pack](offline-and-self-hosting-pack-dsh.md) and [Static-First Service Architecture](static-first-service-architecture-dsh.md) — make the floor physically usable without the service.

## 8. Resolution of the seed's "before implementation" concerns
- **Amendment rules** — resolved in 5.2 items 5–6 and 5.5: versioned, governed, never unilateral.
- **Notice periods** — resolved in 5.2 item 6 and 5.5: fixed in the covenant, no shorter than specification-change notice.
- **Anti-abuse limits** — resolved in 5.2 item 7: enumerated, proportional, and forbidden from removing a floor item.
- **Archival guarantees** — resolved in 5.2 item 8 and 5.5: stable URLs, versions never altered or removed.
- **How governance or licences make the promise durable** — resolved in 5.2 items 5 and 9, 5.5, and section 7: governance owns amendments; licences bind successors and mirrors.

## 9. Acceptance criteria
1. A versioned covenant document exists with a version identifier and effective date.
2. Every free-floor item is enumerated with a per-item definition of "free".
3. The covenant states the notice period and the amendment process.
4. Anti-abuse limits are enumerated and do not remove any floor item.
5. Every paid service specification cites the covenant and states its own free floor.
6. Prior covenant versions are archived at stable URLs and never altered.
7. The covenant is licensed for mirroring and binds successor custodians.
8. The conformance linter can detect a service page that contradicts the current floor.
9. A signer with no account can use the notation and issue a declaration, verified end-to-end.
10. Narrowing the floor is impossible without a versioned, governed, announced change.

## 10. Open questions
- The precise volume at which hosted on-demand checks queue, to be set with cost-discipline modelling (the free capability itself is settled by item 11).
