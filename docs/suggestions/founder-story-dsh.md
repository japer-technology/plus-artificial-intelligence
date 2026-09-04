# Founder Story — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`founder-story.md`](founder-story.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the founder story: a candid, dated, first-person account that makes Eric Mourant visible as the originator and first signer of +AI, discloses the AI's part in the project's own creation, and states the intended path from founder-led work to broader stewardship.

## 2. Placement and boundaries

The founder story is biographical presentation, not normative meaning. It depends on the canonical `+AI` meaning and must not alter it. It defers the stewardship transition to [Governance and Stewardship](governance-and-stewardship-dsh.md), the founding address's custody to [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md) and [Named Subdomains and Identity Bundles](named-subdomains-and-identity-bundles-dsh.md), and the prior-art narrative to [Motivation and Prior Art](motivation-and-prior-art-dsh.md). The page is itself an artifact bound by a declaration signed `Eric Mourant +AI`.

## 3. Terminology

- **originator** — the person who first articulated the +AI idea.
- **first signer** — the person who first issued a declaration under the mark.
- **founder** — the originator acting in the project's early, founder-led phase.
- **signer**, **declaration**, **artifact** — as in the shared vocabulary.
- **stewardship** — the future, deliberately transferred custody of the project.
- **founding address** — `https://eric-mourant.plus-artificial-intelligence.org`.

## 4. Scope

### 4.1 In scope

- The narrative structure and required disclosures of the founder story.
- Verification of history, dates, attribution, and AI contributions before publication.
- Signing the page as an artifact.

### 4.2 Out of scope and deferred

- Governance succession and the role of JAPER Technology — [Governance and Stewardship](governance-and-stewardship-dsh.md).
- The prior-art and novelty narrative — [Motivation and Prior Art](motivation-and-prior-art-dsh.md).
- Address resolution, reserved terms, and renewals — [Named Subdomains and Identity Bundles](named-subdomains-and-identity-bundles-dsh.md) and [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md).
- Hosting and profile mechanics — [Hosted Profiles](hosted-profiles-dsh.md).

## 5. Specification

### 5.1 Design goals and principles

- Candour: the story discloses AI use honestly, including on the story itself.
- Factuality: dates, names, and contributions are sourced or marked unverified.
- Humanity: responsibility stays visibly with the person, not the machine.

### 5.2 Normative requirements

1. The page MUST identify Eric Mourant as the originator and first signer and tell the story in a candid, first-person voice.
2. The page MUST state the founding address `https://eric-mourant.plus-artificial-intelligence.org` as the founder's public address and link it consistently with [URL Semantics and Canonicalisation](url-semantics-and-canonicalization-dsh.md).
3. The page MUST be signed `Eric Mourant +AI` and MUST link to or embed a live declaration binding the page as its artifact.
4. Every historical claim (dates, events, contributions) MUST carry a source or be explicitly marked unverified; unverifiable claims MUST be removed or flagged before publication.
5. The page MUST disclose the AI's material contribution to producing the page itself, mirroring the mark's self-referential honesty.
6. Attribution of outside influences (including the Terence Tao lecture and prior art) MUST be accurate and MUST defer to [Motivation and Prior Art](motivation-and-prior-art-dsh.md) for the full record.
7. The page MUST present the path from founder to broader stewardship as intended direction, not as governance already in place, and MUST link [Governance and Stewardship](governance-and-stewardship-dsh.md).
8. The page MUST NOT present the founder as a gatekeeper, certifier, or source of permission to use the mark.
9. The page MUST be static, file://-safe, and mirrorable (invariant 4).
10. Corrections to facts MUST be made visibly and dated (invariant 5); a corrected version supersedes the prior one.

### 5.3 Data model

The story's verifiable claims are recorded as claim records: `{ claim, date, source, status (verified | unverified | corrected), reviewed-by, reviewed-date }`. This supports the before-implementation verification pass and later corrections without silent rewriting.

### 5.4 Interfaces and behaviours

Not applicable — presentation and theme are owned by the theme/presentation siblings; this specification defines content and disclosure requirements.

### 5.5 Lifecycle and operational rules

The page is a versioned artifact; its declaration follows [Declaration Lifecycle](declaration-lifecycle-dsh.md) (active, superseded, corrected). Correction of a factual claim produces a new dated version, never a silent edit.

## 6. Free floor, red lines, and invariants

The story MUST NOT gate the mark behind the founder's approval or any payment, registration, or certification. It MUST NOT claim to verify others' declarations or to rank anyone. It keeps the meaning free and the responsibility human.

## 7. Relationships to sibling specifications

- [Governance and Stewardship](governance-and-stewardship-dsh.md) — owns the founder-to-stewardship transition the story only narrates.
- [Motivation and Prior Art](motivation-and-prior-art-dsh.md) — owns the origin narrative and novelty claim the story points to.
- [Named Subdomains and Identity Bundles](named-subdomains-and-identity-bundles-dsh.md) — owns the mechanics of the founder's address.
- [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md) — owns custody and renewal of the founding address over time.
- [Hosted Profiles](hosted-profiles-dsh.md) — owns the profile mechanics if the story is also served as a profile.

## 8. Resolution of the seed's "before implementation" concerns

The seed's concern — "Confirm the history, dates, AI contributions, attribution, and intended path from visible founder to broader stewardship" — is resolved by §5.2.4 (dates and history sourced or marked unverified), §5.2.5 (AI contributions disclosed), §5.2.6 (attribution accurate and deferred to Motivation and Prior Art), §5.2.7 (stewardship path labelled intent), and §5.3 (claim records supporting the verification pass).

## 9. Acceptance criteria

1. Eric Mourant is identified as originator and first signer.
2. All dates and historical claims carry sources or are flagged unverified.
3. The AI's contribution to producing the page is disclosed.
4. The page is signed `Eric Mourant +AI` with a live declaration.
5. The founding address is used as the founder's public address.
6. The stewardship path is labelled as intent and links Governance and Stewardship.
7. Outside attribution (including the Tao lecture) is accurate.
8. The page is static and mirrorable, and corrections are visible and dated.

## 10. Open questions

- Exact founding dates and the definitive wording of the origin moment to be confirmed with the founder before publication.
- Whether the page is first-person or a third-person profile style (first-person is assumed above).
