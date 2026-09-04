# Motivation and Prior Art — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`motivation-and-prior-art.md`](motivation-and-prior-art.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the project's motivation-and-prior-art document: an honest account of why existing AI-disclosure language felt incomplete, what the Terence Tao lecture contributed, and a novelty claim scoped narrowly enough to be credible and verifiable — while openly acknowledging adjacent and earlier practices.

## 2. Placement and boundaries

This document is explanatory, not normative; it must not change the canonical `+AI` meaning. It owns the novelty claim and the prior-art register. The origin narrative (who, when) defers to [Founder Story](founder-story-dsh.md); the citation of the founding examples is shared with [Plus-Addressing Convention](plus-addressing-convention-dsh.md) and [Named Subdomains and Identity Bundles](named-subdomains-and-identity-bundles-dsh.md). It must not claim ownership of the characters `+AI` (deferred to [Public Usage Guidelines](public-usage-guidelines-dsh.md) and [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md)).

## 3. Terminology

- **novelty claim** — the specific, checkable statement of what +AI adds beyond prior art.
- **prior art** — earlier or adjacent practices of AI disclosure, attribution, or responsibility signalling.
- **prior-art register** — the maintained, dated, sourced list of prior and adjacent practices.
- **situational responsibility post-nominal** — a notation whose meaning is scoped to a specific artifact and names a responsible person, as opposed to a blanket claim about all of a person's work.

## 4. Scope

### 4.1 In scope

- The motivation narrative and its evidentiary basis.
- The Terence Tao lecture contribution and its citation.
- The narrow novelty claim and its wording.
- The prior-art register: schema, maintenance, and correction.

### 4.2 Out of scope and deferred

- The founder's personal origin story — [Founder Story](founder-story-dsh.md).
- Guidance on accurate use — [Public Usage Guidelines](public-usage-guidelines-dsh.md).
- Trademark/ownership of the notation — [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md).

## 5. Specification

### 5.1 Design goals and principles

- Credibility over sweep: a narrow, defensible claim beats a broad, false one.
- Verification: every claim is sourced and dated.
- Generosity: adjacent practices are acknowledged, not disparaged.

### 5.2 Normative requirements

1. The document MUST explain why existing AI-disclosure language felt incomplete, with dated references to the practices it responds to.
2. The document MUST describe the Terence Tao lecture's contribution with an accurate, checkable citation; if the exact lecture cannot be verified it MUST be identified as a best-effort reference, not asserted as fact.
3. The novelty claim MUST be stated only in the narrow form: a situational, responsibility-bearing post-nominal convention with a fixed one-line meaning, usable without permission, registration, membership, certification, or gatekeeper.
4. The document MUST NOT claim ownership of the characters `+AI`, and MUST NOT claim primacy over AI-disclosure or AI-attribution in general.
5. The document MUST distinguish "novel" from "first ever": the claim is about the specific combination of a responsibility post-nominal with a fixed meaning and a no-permission convention, not about inventing the idea of disclosing AI use.
6. The document MUST maintain a prior-art register; each entry records at least `{ id, title, source, date, relation (adjacent | overlap | precursor), note, checked-date }`.
7. The document MUST acknowledge at least the main adjacent practices: AI-use disclosure badges, provenance standards (e.g. C2PA), existing byline and disclosure conventions, and any directly comparable post-nominal or signing conventions.
8. Every motivational or historical assertion MUST carry a source or be removed or marked unverified.
9. The document MUST be static, file://-safe, and mirrorable (invariant 4), and changes MUST be visible and dated (invariant 5).
10. The document SHOULD cite the founding examples `https://eric-mourant.plus-artificial-intelligence.org` and `eric.mourant+ai@japer.technology` as concrete instances.

### 5.3 Data model

The prior-art register is the only new structure: an ordered, versioned list of entries as specified in §5.2.6. Each entry is a factual record, not a rank or endorsement.

### 5.4 Interfaces and behaviours

Not applicable — this specification defines a document and a register; machine-readable export of the register defers to [Machine-Readable Assertions](machine-readable-assertions-dsh.md) and [Public Snapshots and API](public-snapshots-and-api-dsh.md).

### 5.5 Lifecycle and operational rules

The register is append-and-correct: entries are added, corrected, or retired with a dated change record; nothing is silently rewritten. Change visibility defers to [Changelog and RSS](changelog-and-rss.md).

## 6. Free floor, red lines, and invariants

The document MUST NOT claim to verify anyone's AI use or to gate the mark. It MUST NOT turn the register into a ranking or reputation score (watchlist). The novelty claim MUST NOT assert ownership of the notation or of disclosure generally, preserving the free, permissionless use.

## 7. Relationships to sibling specifications

- [Founder Story](founder-story-dsh.md) — owns the personal origin narrative this document references.
- [Public Usage Guidelines](public-usage-guidelines-dsh.md) — owns accurate-use guidance distinct from this motivation account.
- [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md) — owns any rights claims over the notation, which this document avoids.
- [Machine-Readable Assertions](machine-readable-assertions-dsh.md) — owns the export format for the register.

## 8. Resolution of the seed's "before implementation" concerns

The seed's concern — "Research prior art and phrase the novelty claim narrowly enough to remain credible, verifiable, and distinct from ownership of the characters `+AI`" — is resolved by §5.2.3 (narrow novelty claim), §5.2.4 (no ownership of the characters), §5.2.5 (novel vs first-ever), §5.2.6–7 (prior-art register and required acknowledgements), and §5.2.8 (every claim sourced).

## 9. Acceptance criteria

1. The novelty claim is stated in the narrow form and nowhere claims character ownership.
2. The document explicitly disclaims primacy over AI disclosure generally.
3. The Tao lecture is cited accurately or flagged as best-effort.
4. A prior-art register exists with dated sources and relation labels.
5. The main adjacent practices are acknowledged by name.
6. Every motivational assertion carries a source or is removed.
7. "Novel" and "first ever" are distinguished.

## 10. Open questions

- The exact citation for the Terence Tao lecture requires confirmation.
- The definitive wording of the novelty claim needs sign-off, as it will be repeated across materials.
