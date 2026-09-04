# About the Project — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`about-project.md`](about-project.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the project's canonical About page: a plain-language, static, versioned document that explains what +AI is, what it is not, how the normative specification relates to optional hosted services, and where the work may go next — without presenting intentions as established governance.

## 2. Placement and boundaries

The About page is presentation, not normative meaning. It must reproduce the `+AI` meaning verbatim and link to the current published specification; it must never paraphrase the meaning in a way that changes it (invariant 3). Governance status, the legal home, and the JAPER Technology relationship are stated here factually, while their rules and evolution are deferred to [Governance and Stewardship](governance-and-stewardship-dsh.md), [Financial Transparency](financial-transparency-dsh.md), and [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md). The free floor is asserted here and owned by [Free-Floor Covenant](free-floor-covenant-dsh.md). Navigation placement defers to [Shared Project Navigation](shared-project-navigation-dsh.md).

## 3. Terminology

- **the mark** — the `+AI` notation.
- **the specification / the normative specification** — the canonical `+AI` meaning document.
- **the project** — the governed commons (specification, translations, schemas, tools, records).
- **optional services** — hosted conveniences around the commons, never prerequisites.
- **no-account path** — the free, browser-only, local-first route.
- **signer**, **declaration**, **artifact** — as in the shared vocabulary.
- **JAPER Technology** — the founding operator and domain custodian, disclosed factually, not as a governance claim.

## 4. Scope

### 4.1 In scope

- Required content of the About page: what +AI is, what it is not, the specification/services relationship, current status, future direction.
- Required factual statements: legal home, maintainer roles, JAPER relationship.
- Versioning, dating, and visible change for the page itself.

### 4.2 Out of scope and deferred

- Governance decision rights, succession, and service-provider separation — [Governance and Stewardship](governance-and-stewardship-dsh.md).
- Funding and conflicts disclosure — [Financial Transparency](financial-transparency-dsh.md).
- The free-floor promise's durability and amendment rules — [Free-Floor Covenant](free-floor-covenant-dsh.md).
- Licensing of the page's text and identity — [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md).
- Navigation placement and conformance checks — [Shared Project Navigation](shared-project-navigation-dsh.md).

## 5. Specification

### 5.1 Design goals and principles

- Plain language: a first-time reader should grasp the idea in under a minute.
- Factual and dated: governance and ownership are reported, not implied.
- Static-first: the page works file://-safe, mirrorable, with no infrastructure.
- Honest about status: intentions are labelled intentions.

### 5.2 Normative requirements

1. The page MUST reproduce the canonical meaning "AI helped. I take responsibility." verbatim and link to the current published specification.
2. The page MUST state what +AI is not using the normative list: not an apology, not a warning label, not a certificate, not a claim that AI created everything, and not requiring permission, registration, membership, certification, or a gatekeeper.
3. The page MUST state that the `+AI` meaning and a usable no-account path remain free, and that paid services provide convenience, scale, support, or managed operations but never legitimacy, rank, or permission.
4. The page MUST state the project's current legal home and maintainer roles as dated facts; where these are undecided it MUST say so rather than imply they exist.
5. The page MUST disclose the relationship to JAPER Technology factually (e.g. founding operator, domain custodian, founding address `eric.mourant+ai@japer.technology`) without presenting that relationship as established governance.
6. The page MUST distinguish the normative specification from optional hosted services and MUST NOT make any service a prerequisite for using the mark.
7. Any statement about where the work may go next MUST be labelled as direction or intent, not as established governance or commitment.
8. The page MUST NOT claim exclusivity over the characters `+AI` or over AI-assisted disclosure generally.
9. The page MUST carry a version identifier and publication date, and every change MUST be visible and versioned (invariant 5).
10. The page SHOULD link the canonical routes (About, Why, Use, Help, Community, Governance, Support, Contact) in line with [Shared Project Navigation](shared-project-navigation-dsh.md).

### 5.3 Data model

Not applicable — this specification defines content and factual-statement requirements, not new data structures.

### 5.4 Interfaces and behaviours

Not applicable — this specification defines no new interfaces; the page is a static document.

### 5.5 Lifecycle and operational rules

The About page is versioned like any published page: corrections and restatements are visible, never silent. Versioning and change-visibility mechanics are owned by [Changelog and RSS](changelog-and-rss.md) and [Specification Versioning and Hashing](specification-versioning-and-hashing-dsh.md).

## 6. Free floor, red lines, and invariants

The page MUST assert the free floor (meaning + no-account path free; payment buys no legitimacy, rank, or permission). It MUST NOT imply mandatory registration, payment for use, certification, or any gatekeeper (red lines). It MUST NOT introduce rankings, reputation scores, or AI-use inference. As presentation, it MUST NOT change normative meaning, and it MUST remain static-first and mirrorable.

## 7. Relationships to sibling specifications

- [Free-Floor Covenant](free-floor-covenant-dsh.md) — owns the versioned promise the About page asserts.
- [Governance and Stewardship](governance-and-stewardship-dsh.md) — owns the legal home, maintainer roles, and JAPER relationship rules the About page only reports.
- [Financial Transparency](financial-transparency-dsh.md) — owns funder and conflict disclosure referenced from About.
- [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md) — owns the rights and identity rules the About page links.
- [Shared Project Navigation](shared-project-navigation-dsh.md) — owns the route placement the About page adopts.
- [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md) — owns the addresses and record durability the About page relies on.

## 8. Resolution of the seed's "before implementation" concerns

The seed's single concern — "Define the project's current legal home, maintainer roles, and relationship to JAPER Technology without presenting future governance as already established" — is resolved by §5.2.4 (legal home and maintainer roles stated as dated facts, undecided items stated as undecided), §5.2.5 (JAPER relationship stated factually, not as governance), §5.2.7 (future direction labelled as intent), and §2 (rules deferred to Governance and Stewardship rather than invented here).

## 9. Acceptance criteria

1. The page reproduces the canonical meaning verbatim and links the normative specification.
2. The "is not" list matches the normative meaning with no additions that change it.
3. Legal home and maintainer roles are stated and dated, with undecided items marked undecided.
4. The JAPER Technology relationship is stated factually without implying established governance.
5. Future-direction statements are labelled as intent, not commitment.
6. The free floor and no-account path are stated, and no service is a prerequisite for use.
7. The page works file://-safe and mirrorable with no infrastructure.
8. The page carries a version and date, and changes are visible.
9. The page makes no exclusivity claim over `+AI`.

## 10. Open questions

- The precise current legal home and named maintainers to be confirmed before publication.
- Whether the About page is published under a dedicated licence (deferred to [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md)).
