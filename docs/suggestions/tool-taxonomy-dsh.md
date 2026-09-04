# Tool Taxonomy — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`tool-taxonomy.md`](tool-taxonomy.md).
> **Catalogue group:** AI practice registers and discovery.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the tool taxonomy: an open, versioned, provider-neutral vocabulary of capabilities, tools, products, and models, with stable identifiers and a community contribution path through the repository. It exists so that practice registers, declarations, and bills of materials can name the same tool the same way across parties and over time, without any vendor owning the name or the record.

## 2. Placement and boundaries

This specification sits in the "AI practice registers and discovery" group and owns the *vocabulary and its identifiers*. It is a data layer consumed by [AI practice register](ai-practice-register-dsh.md), [Portable declaration schema](portable-declaration-schema-dsh.md), [Claim types](claim-types-dsh.md), and [Artifact AI bill of materials](artifact-ai-bill-of-materials-dsh.md), but it does not define those records. It defers change authority to [Governance and stewardship](governance-and-stewardship-dsh.md), licensing to [Licensing and mark policy](licensing-and-mark-policy-dsh.md), and translation to [Translation governance](translation-governance-dsh.md). It honours the free floor by keeping the vocabulary a mirrorable commons with no fee and no account, and the red line against paid placement by forbidding advertising and ranked ordering.

## 3. Terminology

- **Entry** — one named term in the vocabulary, of a fixed type.
- **Capability** — a described AI ability (e.g. drafting, summarisation, code review).
- **Tool** — a named assistant, agent, or application; **Product** — a commercial or branded offering; **Model** — a named model or model family.
- **Canonical identifier** — the stable, opaque identifier every other record references.
- **Alias** — an alternative name that resolves to a canonical identifier.
- **Custom entry** — a namespaced, non-canonical term a party adds for its own use.

## 4. Scope

### 4.1 In scope

- The entry types and their semantics.
- Identifier stability, aliasing, retirement, and custom-entry namespacing.
- Provider-neutrality and vendor-conflict rules.
- Community contribution and versioning of the vocabulary.
- Icons as presentation and safeguards against advertising or ranked placement.

### 4.2 Out of scope and deferred

- The declaration, register, and bill-of-materials records that reference identifiers (owned by their own specifications).
- The normative `+AI` meaning and its versioning (owned by specification versioning and hashing).
- Translation governance detail (deferred to translation governance).
- Sponsored content policy beyond this vocabulary (deferred to sponsorship policy).

## 5. Specification

### 5.1 Design goals and principles

1. **Neutrality.** The vocabulary describes, it never recommends, and no vendor may own an identifier or its description.
2. **Stability.** Identifiers are permanent once assigned; a name may change, but the identifier it resolves to does not.
3. **Openness.** Anyone may propose an entry; acceptance follows a published, reviewed process.
4. **Honest change.** Retirement and deprecation are visible status changes, never silent deletion.
5. **Presentation-free meaning.** Icons and ordering are presentation and must never carry the only meaning.

### 5.2 Normative requirements

1. The taxonomy MUST be published as an open, versioned dataset, mirrorable and usable offline with no account; every released version MUST remain available at a stable location.
2. Every entry MUST have exactly one `type` of `capability`, `tool`, `product`, or `model`, and the four types MUST be kept distinct so a capability is never conflated with a branded product.
3. Canonical identifiers MUST be opaque, globally unique, and never reused, including after retirement.
4. Each entry MUST carry a provider-neutral, factual description; descriptions MUST NOT contain marketing copy, superlatives, or claims of superiority.
5. Aliases MUST resolve to exactly one canonical identifier, and a resolver MUST report an alias that maps to a retired term as retired rather than resolving silently.
6. Retirement MUST be a recorded status change (`deprecated` then `retired`) with an optional `replacedBy` pointer; retired terms MUST remain resolvable forever and MUST NOT be deleted.
7. Custom entries MUST be namespaced (for example a reverse-domain or `x-` prefix), MUST be clearly marked non-canonical, and MUST NOT shadow or reuse a canonical identifier.
8. Icons are presentation only: an icon MUST be accompanied by its text label, MUST NOT carry meaning alone, and MUST NOT be required to reference an entry.
9. Vendor conflicts MUST be managed by recusal: a contributor or editor with a commercial interest in a vendor MUST NOT author or approve that vendor's own entries, and any such interest MUST be declared.
10. The taxonomy MUST NOT carry, and MUST NOT be ordered by, advertising, sponsorship, or any rank; no payment MAY buy placement, ordering, or the presence or wording of an entry (red line against paid placement).
11. Community contribution MUST flow through the repository with a published proposal, review, and merge process; the acceptance criteria and the named reviewers MUST be public.
12. Changes MUST be versioned and announced: each released vocabulary version MUST carry a change note, and the versioning MUST follow the same no-silent-change discipline as the specification (see specification versioning and hashing), with a monotonic version and no republishing of released bytes.
13. The taxonomy's default presentation MUST order entries alphabetically or by identifier, never by a popularity, sponsor, or relevance score.

### 5.3 Data model

```
{
  "taxonomyVersion": "monotonic version",
  "entries": [
    {
      "id": "stable, opaque, namespaced",
      "type": "capability | tool | product | model",
      "label": "human-readable name",
      "aliases": [ "alternative names" ],
      "description": "provider-neutral, factual",
      "parent": "optional broader term id",
      "status": "active | deprecated | retired",
      "replacedBy": "optional successor id",
      "translations": [ { "lang": "ISO 639", "label": "...", "status": "reviewed | draft" } ],
      "contributedBy": "optional attribution"
    }
  ]
}
```

### 5.4 Interfaces and behaviours

- A resolver accepts an identifier or alias and returns the canonical entry plus its current status; unknown identifiers resolve to `not-found`, never to a guessed term.
- Registries, declarations, and bills of materials reference entries by canonical identifier, optionally with a fallback free-text label for unlisted tools.
- The published dataset ships in the offline pack so resolution works with no network.

### 5.5 Lifecycle and operational rules

- A term moves `active` → `deprecated` → `retired`; each transition is a versioned change with a change note, and retired terms are retained indefinitely.
- Correction of a description is a new vocabulary version; the prior version remains downloadable unchanged.
- Mirrors must propagate vocabulary versions in order and label themselves stale if they cannot (see federation and mirrors).

## 6. Free floor, red lines, and invariants

The vocabulary is a free-floor commons: reading it, resolving identifiers, and contributing proposals must never require payment, an account, or a licence fee beyond the open licence it is published under. The red line against paid placement is enforced by sections 5.2 items 10 and 13: no payment buys ordering, placement, or wording. The red line against rankings is honoured by the alphabetical default ordering, and the no-silent-change invariant by permanent identifiers and versioned releases.

## 7. Relationships to sibling specifications

- [Governance and stewardship](governance-and-stewardship-dsh.md) owns the authority under which taxonomy changes and contributor review are decided.
- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) assigns the licence under which the vocabulary is reused and mirrored.
- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md) owns the versioning discipline this vocabulary follows by analogy.
- [AI practice register](ai-practice-register-dsh.md), [Portable declaration schema](portable-declaration-schema-dsh.md), and [Artifact AI bill of materials](artifact-ai-bill-of-materials-dsh.md) consume these identifiers.
- [Claim types](claim-types-dsh.md) references capabilities from this vocabulary in its claims.
- [Translation governance](translation-governance-dsh.md) owns the reviewed translations of labels and descriptions.
- [Sponsorship policy](sponsorship-policy-dsh.md) and [Research observatory](research-observatory-dsh.md) set the surrounding no-influence and study rules that keep the vocabulary neutral.

## 8. Resolution of the seed's "before implementation" concerns

- **Governance** — section 5.2 item 11 and section 7: published contribution process and named reviewers under governance and stewardship.
- **Aliases** — section 5.2 item 5: aliases resolve to one canonical identifier and honour retirement.
- **Retirement** — section 5.2 items 5-6 and 5.5: visible `deprecated`/`retired` status, optional successor, never deleted.
- **Custom entries** — section 5.2 item 7: namespaced, non-canonical, never shadowing canonical identifiers.
- **Icons** — section 5.2 item 8: presentation only, always accompanied by text.
- **Translations** — section 5.2 item 11 in the data model and section 7: delegated to translation governance with `reviewed`/`draft` status.
- **Vendor conflicts** — section 5.2 items 4 and 9: provider-neutral descriptions and recusal of conflicted editors.
- **Safeguards against advertising or ranked placement** — section 5.2 items 10 and 13 plus section 6: no paid placement, no ranking, alphabetical default ordering.

## 9. Acceptance criteria

1. Every entry carries exactly one of the four types and a stable, never-reused identifier.
2. An alias resolves to its canonical identifier, and a retired alias resolves to `retired`.
3. A retired term remains resolvable forever and is never deleted from the dataset.
4. A custom entry is namespaced and cannot shadow a canonical identifier.
5. No entry description contains marketing copy, and no ordering reflects sponsorship or popularity.
6. A contributor with a vendor interest is recused from that vendor's entries, and the interest is declared.
7. Every released vocabulary version has a change note and remains downloadable unchanged.
8. The dataset resolves offline from the offline pack with no network.
9. Icons never appear without their text label.
10. The default ordering is alphabetical or by identifier, never by a score.

## 10. Open questions

- The precise namespacing convention for custom entries (reverse-domain versus `x-` prefix) is undecided.
- Whether the four types should be further subdivided (e.g. a separate `service` type) is undecided pending real contribution volume.
