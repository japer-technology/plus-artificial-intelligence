# Translation Governance — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`translation-governance.md`](translation-governance.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how +AI content is translated and kept trustworthy:
maintainer groups, status labels, source-version tracking, glossaries,
regional-variant rules, corrections, community credit, and funded review for
normative content and interface taxonomies. The project promises its meaning
in many languages; this specification makes sure a reader can always tell
which text carries reviewed meaning and which text is still a draft.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns *translation process and status*. It does not own
the normative text itself (the specification), its versioning (see
[Specification versioning and hashing](specification-versioning-and-hashing-dsh.md)),
or decorative theme copy (see [Flavour-text localisation](flavour-text-localisation-dsh.md)
— flavour follows its own lighter rules but reuses the `reviewed` path here).
It honours the free floor: the reviewed translations are commons, and
machine-assisted drafts are always labelled, never passed off as reviewed.

## 3. Terminology

- **Normative content** — the specification text that fixes meaning.
- **Interface taxonomy** — the shared labels and UI strings of common tools.
- **Maintainer group** — the named reviewers responsible for one language.
- **Status label** — the per-string or per-document translation status.
- **Source-version tracking** — the `basedOn` pointer to the specification
  version translated.
- **Glossary** — the per-language term list binding key vocabulary.

## 4. Scope

### 4.1 In scope

- Maintainer groups and review paths.
- Status labels and source-version tracking.
- Glossaries and regional variants.
- Corrections, credit, and funded review.

### 4.2 Out of scope and deferred

- Flavour copy governance (flavour-text localisation).
- The specification's release mechanics (specification versioning and
  hashing).
- Paid translation work beyond review funding (priority review services may
  expedite, never replace, this process).

## 5. Specification

### 5.1 Design goals and principles

1. **Review is the unit of trust.** Only human review upgrades a status.
2. **Version-locked meaning.** A translation always names the specification
   version it renders.
3. **Corrections are public.** Translation fixes are recorded, never silent.
4. **Credit without rank.** Translators are credited factually, never ranked.

### 5.2 Normative requirements

1. Every translation MUST carry: a language code, a status label, and a
   `basedOn` pointer naming the normative specification version (and content
   hash where practical) it was translated from, per specification versioning
   and hashing.
2. Status labels MUST be exactly: `reviewed`, `community`, `machine`, or
   `outdated` — where `reviewed` means a maintainer group approved it against
   the current version, `community` means contributed but not yet reviewed,
   `machine` means machine-assisted and always labelled, and `outdated` means
   its `basedOn` version is no longer current.
3. Machine translation or fallback text MUST NEVER be presented as
   human-reviewed meaning: surfaces MUST label machine content as such, and
   `machine` text MUST NOT be used where normative meaning is displayed
   without a visible label.
4. Each language MUST have a named maintainer group with a published review
   path; languages without a group accept `community` and `machine` statuses
   only.
5. Glossaries MUST exist per language for the key vocabulary (the mark's
   meaning terms and the interface taxonomy), MUST be versioned, and MUST be
   consulted by reviewers; glossary changes MUST be announced in the
   changelog.
6. Regional variants MUST be declared explicitly (e.g. pt-PT versus pt-BR);
   a generic code MUST NOT silently claim a region's conventions.
7. Corrections MUST be recorded as dated correction entries with attribution
   and MUST NOT silently rewrite published translations (no-silent-change).
8. Community contributors MUST be credited factually in the translation's
   metadata and the public directory's translator listing, without rankings
   or leaderboards (RL-9).
9. Funded review (sponsorships, grants, priority review) MUST NOT change the
   status semantics: a funded review produces the same `reviewed` status a
   volunteer review produces, and funding MUST be disclosed per sponsorship
   policy and financial transparency.
10. Translation files MUST remain part of the static commons: plain files,
    file://-safe, and mirrorable, included in the offline and self-hosting
    pack.

### 5.3 Data model

```
{
  "language": "ISO 639 or regional code",
  "status": "reviewed | community | machine | outdated",
  "basedOn": "specification version and optional hash",
  "maintainers": [ "named group" ],
  "glossaryVersion": "integer",
  "corrections": [ { "at": "ISO-8601", "by": "...", "note": "..." } ],
  "credits": [ "factual contributor list" ]
}
```

### 5.4 Interfaces and behaviours

- Language selectors show the status label next to each language option
  where statuses differ.
- The checker and linter verify the `basedOn` pointer and status metadata.
- Review submissions follow the contribution ladder's translation rung and
  the moderation rules for public submissions.

### 5.5 Lifecycle and operational rules

- When the normative specification releases a new version, translations
  become `outdated` until their maintainers re-review them against the new
  version.
- A maintainer group may step down; handover requires a published transition
  so no language is silently orphaned.

## 6. Free floor, red lines, and invariants

Reviewed translations are free-floor commons, and the no-silent-change
invariant applies to them exactly as to the normative text. The machine-label
rule protects the honesty invariant in the project's own multilingual
surfaces, and the no-ranking rule keeps translator credit factual rather than
competitive.

## 7. Relationships to sibling specifications

- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md)
  owns the `basedOn` referents and content hashes.
- [Flavour-text localisation](flavour-text-localisation-dsh.md) governs
  decorative copy with lighter rules but reuses the `reviewed` path.
- [Theme engine and packs](theme-engine-and-packs-dsh.md) consumes the
  translation hooks these files feed.
- [Conformance linter](conformance-linter-dsh.md) checks status metadata.
- [Contribution ladder](contribution-ladder-dsh.md) owns the translation
  contributor rungs.
- [Public directory](public-directory-dsh.md) lists translators factually.
- [Sponsorship policy](sponsorship-policy-dsh.md) and [Grants and
  public-benefit programmes](grants-and-public-benefit-programmes-dsh.md)
  fund review without changing semantics.
- [Priority review services](priority-review-services-dsh.md) may expedite,
  never replace, review.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md)
  distributes the translation files.

## 8. Resolution of the seed's "before implementation" concerns

- **Maintainer groups** — section 5.2 item 4: named groups with published
  review paths.
- **Status labels** — section 5.2 item 2: the four-status vocabulary.
- **Source-version tracking** — section 5.2 item 1: `basedOn` pointers.
- **Glossaries** — section 5.2 item 5: versioned per-language glossaries.
- **Regional-variant rules** — section 5.2 item 6: explicit region codes.
- **Corrections** — section 5.2 item 7: dated, attributed correction entries.
- **Community credit** — section 5.2 item 8: factual credit, no ranking.
- **Funded review** — section 5.2 item 9: same status semantics, disclosed
  funding.
- **Keep normative, interface, flavour, and user-authored text distinct** —
  sections 5.1-5.2 plus the flavour-text localisation deferral: normative and
  interface taxonomy follow this document; flavour follows its sibling;
  user-authored text is never translated by the project.
- **Never present machine translation or fallback text as human-reviewed
  meaning** — section 5.2 item 3: absolute labelling rule.

## 9. Acceptance criteria

1. Every translation carries language code, status, and `basedOn` pointer.
2. Machine text is labelled wherever rendered and never shown as reviewed.
3. Each language with `reviewed` status has a named maintainer group.
4. A new specification release marks stale translations `outdated`.
5. Corrections ship as dated entries, never silent edits.
6. Regional variants are declared explicitly.
7. Translator credit appears factually with no ranking.
8. Funded review produces the same status as volunteer review and is
   disclosed.
9. Translation files open from disk and ship in the offline pack.

## 10. Open questions

- The re-review window after a specification release before a language's
  `reviewed` status is considered lapsed.
- Whether interface taxonomies should share the normative glossary or keep a
  separate one.
