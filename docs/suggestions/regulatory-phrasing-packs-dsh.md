# Regulatory Phrasing Packs — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`regulatory-phrasing-packs.md`](regulatory-phrasing-packs.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines jurisdiction- and sector-oriented phrasing packs:
maintained example texts showing how a `+AI` declaration may sit beside
existing disclosure, procurement, or regulatory obligations. Their purpose is
to reduce the friction of adopting the mark in regulated settings — while
staying scrupulously clear that examples are information, not legal advice,
and that showing the mark beside a rule never implies compliance with it.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns the *phrasing packs and their disclaimer regime*.
It does not own the mark's meaning (the specification), the declaration
record (see [Portable declaration schema](portable-declaration-schema-dsh.md)),
or professional advice services (see [Training, consulting, and
pilots](training-consulting-and-pilots-dsh.md)). It honours the free floor:
the core packs stay free and maintained; paid maintenance and update
notifications are optional convenience that change nothing about the packs'
authority, which is none.

## 3. Terminology

- **Phrasing pack** — a maintained collection of example texts for a
  jurisdiction or sector.
- **Example** — a sample formulation showing placement beside an obligation;
  never a template of record.
- **Coverage note** — the pack's stated statement of which rules it covers
  and which it does not.
- **Qualified professional** — the named, credentialed reviewer behind a
  pack's examples.

## 4. Scope

### 4.1 In scope

- Pack structure, versioning, and coverage notes.
- The qualified-professional requirement.
- The information-not-advice labelling regime.
- Optional paid maintenance and notifications.

### 4.2 Out of scope and deferred

- Giving legal advice (never).
- Certifying compliance (never; see independent assurance and
  certification).
- The mark's normative wording (the specification).

## 5. Specification

### 5.1 Design goals and principles

1. **Examples, not templates.** Packs show how, never claim that.
2. **Qualified input, permanent humility.** Professionals draft; the project
   labels.
3. **Coverage is stated.** Every pack says what it covers and what it does
   not.
4. **Free core, paid upkeep.** The packs are free; the maintenance service is
   optional.

### 5.2 Normative requirements

1. Every pack MUST be drafted or reviewed by a qualified professional in the
   relevant jurisdiction or sector, with the professional's role and
   credentials recorded in the pack metadata.
2. Every pack and every example MUST carry the label: "Information, not legal
   advice. Examples show how a declaration may sit beside existing rules;
   they do not certify or imply compliance."
3. The label MUST be visible on every rendered example, in the pack's
   download, and in any notification the pack generates.
4. Coverage notes MUST be published per pack: which rules, versions, and
   jurisdictions are covered, and which gaps exist; gaps MUST be disclosed
   rather than glossed.
5. Packs MUST be versioned, with each version recording the professional
   reviewer, the review date, and the rules version covered; outdated packs
   MUST be labelled `outdated`, never silently updated.
6. Examples MUST preserve the normative meaning verbatim where they quote the
   mark's wording; adaptations MUST be flagged and MUST NOT alter the meaning.
7. Packs MUST NOT contain advertising, vendor endorsement, or paid placement
   (RL-4); sector packs MUST avoid implying professional competence per
   sector and language directories.
8. The core packs MUST be free and part of the static commons, downloadable
   and mirrorable from the offline and self-hosting pack.
9. Paid maintenance and update notifications MAY exist as a convenience;
   payment MUST NOT change pack content, coverage, or labelling, and MUST be
   disclosed as an optional service, per API scale and reliability's
   pricing-discipline rules.
10. A pack that becomes materially wrong MUST be withdrawn with a dated
    notice and a correction entry, per no-silent-change.
11. Update notifications MUST be opt-in, tracking-free, and delivered by the
    changelog and RSS feed by default; email notifications MUST follow
    privacy-preserving and anti-spam rules.

### 5.3 Data model

```
{
  "packId": "opaque identifier",
  "jurisdiction": "ISO 3166 code(s)",
  "sector": "optional sector",
  "version": "integer",
  "reviewedBy": { "role": "qualified professional role", "credentials": "...",
                  "at": "ISO-8601" },
  "coverage": { "rules": [ "..." ], "gaps": [ "..." ] },
  "status": "current | outdated | withdrawn",
  "examples": [ { "id": "...", "text": "...", "label": "information-not-advice" } ]
}
```

### 5.4 Interfaces and behaviours

- Packs render as static pages with the label on every example, and download
  as plain text or markdown files.
- Notifications arrive via the changelog and RSS feed; optional email is
  opt-in.

### 5.5 Lifecycle and operational rules

- Packs are re-reviewed when the underlying rules change; un-reviewed packs
  become `outdated`.
- Withdrawals are announced and archived; old versions remain available with
  their labels intact.

## 6. Free floor, red lines, and invariants

The packs are free-floor commons, and no payment may alter their content or
labelling. The information-not-advice regime is the honesty invariant applied
to regulated contexts: the project never lets its examples be mistaken for
certification or compliance, which keeps the mark free of the paid-credential
drift the red lines forbid.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) defines
  the declarations the examples illustrate.
- [Public usage guidelines](public-usage-guidelines-dsh.md) owns the general
  guidance these packs specialise.
- [Independent assurance and certification](independent-assurance-and-certification-dsh.md)
  is what these packs must never become.
- [Sector and language directories](sector-and-language-directories-dsh.md)
  supply the non-competence-implication rules for sector packs.
- [Translation governance](translation-governance-dsh.md) owns translations
  of pack text.
- [Changelog and RSS](changelog-and-rss-dsh.md) delivers update
  notifications.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md)
  distributes the packs.
- [Training, consulting, and pilots](training-consulting-and-pilots-dsh.md)
  is the paid human advice path, kept separate from the packs.

## 8. Resolution of the seed's "before implementation" concerns

- **Use qualified professionals** — section 5.2 item 1: recorded
  professional review per pack.
- **Label examples as information rather than legal advice** — section 5.2
  items 2-3: mandatory, visible label everywhere.
- **Track versions** — section 5.2 item 5: versioned packs with reviewer and
  rules version.
- **Disclose coverage gaps** — section 5.2 item 4: published coverage notes
  with disclosed gaps.
- **Never imply compliance** — sections 5.2 items 2, 6: the label and the
  verbatim-meaning rule.

## 9. Acceptance criteria

1. Every pack records its qualified professional review.
2. The information-not-advice label appears on every example and download.
3. Every pack publishes coverage notes with disclosed gaps.
4. An outdated pack is labelled `outdated` and never silently updated.
5. Pack content is never changed by payment.
6. No advertising or paid placement appears in a pack.
7. Packs download from the offline pack and mirror freely.
8. A withdrawn pack leaves a dated notice and archived versions.

## 10. Open questions

- The re-review interval per jurisdiction class (fast-moving versus stable
  regimes).
- Whether sector packs should be gated behind a sector working group, and
  how working groups form.
