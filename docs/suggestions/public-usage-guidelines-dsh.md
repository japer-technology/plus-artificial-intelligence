# Public Usage Guidelines — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`public-usage-guidelines.md`](public-usage-guidelines.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines the public usage guidelines: concise, accurate guidance for placing and describing `+AI` on one's own work — what the mark means, how to scope it to an artifact, how to name the responsible person, and which claims it does not make. The guidelines are explanatory, not licensing: genuine use requires no permission.

## 2. Placement and boundaries
The guidelines are one presentation of the normative meaning, so they must never change that meaning (invariant 3). They are deliberately non-enforceable: enforceability over the project name and visual identity lives in the licensing and mark policy, while the notation itself is not owned by the project and is not licensed. This document defers artifact-scope detail to the portable declaration schema and claim taxonomy, and defers all legal wording to regulatory phrasing packs.

## 3. Terminology
- **Genuine use** — using the mark to declare one's own responsibility for AI-assisted work one chose to release.
- **Accurate use** — use consistent with the normative meaning and the claim taxonomy.
- **Misuse** — use that implies a claim the mark does not make (for example certification, endorsement, or that AI did everything).
- **Artifact scope** — the specific report, page, release, image, or dataset a declaration binds to.
- **Responsible party** — the named signer who takes responsibility.

## 4. Scope
### 4.1 In scope
- Placement guidance across names, documents, email, code, presentations, and metadata.
- How to name the responsible party and scope a declaration.
- A plain-language list of claims the mark does and does not make.
- Examples of accurate and misleading use.

### 4.2 Out of scope and deferred
- Legal enforcement and the project name/logo policy (deferred to licensing and mark policy).
- The declaration record format (deferred to portable declaration schema).
- The four claim distinctions (deferred to claim types).
- Regulatory or legal drafting (deferred to regulatory phrasing packs).

## 5. Specification
### 5.1 Design goals and principles
The guidelines must be short enough to be read at the point of use, accurate enough to survive misuse, and clearly non-exclusive: they guide use, they do not grant it. They must read as help, not as terms.

### 5.2 Normative requirements
1. The guidelines MUST state the mark's meaning using the normative wording, and MUST NOT add a meaning the specification does not contain (for example no claim that AI created everything, no apology, no warning label).
2. The guidelines MUST state that the mark claims responsibility, not verification: placing `+AI` does not certify compliance, endorse the work, or transfer responsibility to the AI.
3. The guidelines MUST state plainly that no permission, registration, membership, certification, or gatekeeper is required, and that the project does not own the notation.
4. The guidelines MUST show good placement for names (`Eric Mourant +AI`), documents (author line), email (visible signature and `name+ai@domain`), code (commit or file header), presentations (title slide), and metadata (a machine-readable declaration link), distinguishing visible disclosure from optional machine-readable detail.
5. The guidelines MUST instruct the signer to scope the mark to a defined artifact, and to name themselves as the responsible party, so the declaration is a claim about specific work, not about a person or organisation in general.
6. The guidelines MUST separate explanatory guidance from the enforceable project-name and logo rules, and MUST link to the licensing and mark policy for the latter, stating that the mark policy governs the project's own name and visual identity — not the notation.
7. The guidelines MUST include a non-exhaustive list of claims the mark does NOT make: certification, endorsement, accuracy guarantee, human-only authorship, or that a third party's work was AI-assisted.
8. The guidelines MUST NOT imply exclusive ownership of the notation by the project, by any vendor, or by any jurisdiction.
9. Every example MUST be tested against the current published specification; an example that contradicts it MUST be corrected or removed rather than published.
10. The guidelines MAY offer localised versions, but translations of the meaning MUST follow translation governance, never paraphrase the normative meaning.

### 5.3 Data model
Not applicable — this specification defines no new data structures.

### 5.4 Interfaces and behaviours
The guidelines render as a static page reachable from the Use route in shared project navigation. It MUST be fully available on the no-account path and in the offline pack.

### 5.5 Lifecycle and operational rules
The guidelines are versioned with the specification they describe. When the normative meaning changes, the guidelines MUST be re-checked against it and re-published in the same release, flagged in the changelog.

## 6. Free floor, red lines, and invariants
The guidelines are themselves part of the free floor: free to read, mirror, and quote, and they must never present use as requiring payment or an account. They reassert invariant 6 by clarifying that the mark is a claim, not a verification or verdict. They must not drift into any red line: no prompting of mandatory disclosure of tools, no framing of use as certification, no suggestion that the mark requires registration.

## 7. Relationships to sibling specifications
- [Use +AI Guide](use-plus-ai-guide-dsh.md) — the adoption-oriented sibling; this specification supplies the accuracy constraints its examples must satisfy.
- [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md) — owns the enforceable project-name and logo rules this document separates itself from.
- [About the Project](about-project-dsh.md) — the plain-language frame that this document's guidance supports.
- [Portable Declaration Schema](portable-declaration-schema-dsh.md) — defines the structured record the guidelines point users toward.
- [Claim Types](claim-types-dsh.md) — owns the four distinctions the guidelines must not blur.
- [Regulatory Phrasing Packs](regulatory-phrasing-packs-dsh.md) — owns legal wording the guidelines do not provide.

## 8. Resolution of the seed's "before implementation" concerns
- **Separate explanatory guidance from enforceable project-name or logo rules** — resolved in 5.2 item 6 and section 7: guidance here, enforcement in the licensing and mark policy.
- **Avoid implying exclusive ownership of the notation** — resolved in 5.2 items 3 and 8: no permission required and no ownership claim over the notation.

## 9. Acceptance criteria
1. The guidelines restate the meaning with the normative wording and add nothing to it.
2. The document states the mark claims responsibility, not verification, certification, or endorsement.
3. No-permission and no-ownership statements appear unambiguously.
4. Placement examples cover name, document, email, code, presentation, and metadata.
5. Visible disclosure and optional machine-readable detail are distinguished in every example.
6. Guidance and enforceable name/logo rules are visibly separated and cross-linked.
7. Every example is verified against the current published specification.
8. The guidelines are reachable on the no-account path and present in the offline pack.
9. A reader can distinguish accurate use from misuse from the examples alone.
10. No sentence implies the notation is owned, licensed, or gated.

## 10. Open questions
- Whether to publish a canonical "misuse gallery" with real examples requires moderation-policy input before deciding.
