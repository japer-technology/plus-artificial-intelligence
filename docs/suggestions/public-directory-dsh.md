# Public Directory — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`public-directory.md`](public-directory.md).
> **Catalogue group:** AI practice registers and discovery.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the public directory: discoverable collections of
opt-in people, organisations, projects, declarations, practice registers,
pilots, integrations, translators, and case studies, with clear filters and
documented ordering. The directory makes voluntary records findable without
endorsing them: inclusion is a statement that someone chose to be listed, not
that the project approves of them, and discoverability is never for sale.

## 2. Placement and boundaries

This specification sits in the "AI practice registers and discovery" group and
owns *collection, filtering, ordering, and non-endorsement*. It does not own
the underlying records (see [Opt-in signatory registry](opt-in-signatory-registry-dsh.md),
[Portable declaration schema](portable-declaration-schema-dsh.md)), their
visibility (see [Visibility and consent](visibility-and-consent-dsh.md)), or
the evidence shown alongside them (see [Evidence labels, not trust
scores](evidence-labels-not-trust-scores-dsh.md)). Sector and language views
are a sibling (see [Sector and language directories](sector-and-language-directories-dsh.md)).
It honours the free floor: listing and browsing are free, and paid placement
or rank is prohibited (RL-4, RL-9).

## 3. Terminology

- **Collection** — a named grouping of records (people, organisations,
  projects, declarations, registers, pilots, integrations, translators, case
  studies).
- **Filter** — a user-selected criterion that narrows a collection view.
- **Ordering** — the documented default sort applied to a collection.
- **Non-endorsement notice** — the standing statement that inclusion is not
  approval.

## 4. Scope

### 4.1 In scope

- The collections and their filters.
- Inclusion criteria (public visibility, consent).
- Ordering rules and the non-endorsement notice.
- Personal-data minimisation in listings.
- Correction, revocation, and abuse routes.

### 4.2 Out of scope and deferred

- Registry admission (opt-in signatory registry).
- Search implementation at scale (public snapshots and API).
- Community discussion surfaces (community hub).

## 5. Specification

### 5.1 Design goals and principles

1. **Discovery, not endorsement.** The directory helps find; it never
   certifies.
2. **Minimal exposure.** Rows show the least personal data needed to identify
   and reach a record.
3. **Deterministic ordering.** Default sorts are documented and neutral.
4. **Self-service exit.** Correction and revocation are as easy as listing.

### 5.2 Normative requirements

1. The directory MUST include only records whose visibility is `public` and
   whose inclusion was consented to, per visibility and consent.
2. Every directory page MUST display the non-endorsement notice: "Inclusion is
   a record of voluntary listing, not approval, certification, or
   endorsement."
3. Ordering MUST be neutral and documented (e.g. publication date); no
   position may be purchased, sponsored, or influenced by any payment (RL-4).
4. Collections MUST NOT display aggregate scores, rankings, or popularity
   metrics (RL-9); counts of collections MAY appear only as neutral totals.
5. Rows MUST minimise personal data: identifiers and links only, with contact
   details only where the record itself publishes them.
6. Every row MUST link to the record's canonical page or passport, where the
   full evidence labels live; the directory row itself MUST NOT duplicate
   evidence presentation beyond the binding kind and last-checked date.
7. Filters MUST be documented per collection and MUST NOT expose inferred or
   sensitive attributes; sector and language filters defer to sector and
   language directories.
8. The directory MUST provide correction, revocation, and abuse routes on
   every page, including a no-account path per contact routes.
9. Removed records MUST disappear from the directory within one business day
   of revocation or visibility decrease, including from indexes and caches.
10. Directory data MUST be published through the public snapshots pipeline and
    MUST be mirrorable under the same licence as the registry.
11. Directory pages MUST meet the accessibility floor, including text-first
    rendering of every row.
12. The directory MUST NOT be required for any declaration to be valid: the
    no-account path never touches it.

### 5.3 Data model

```
{
  "directoryVersion": "integer",
  "collections": [
    { "id": "people", "records": [ { "recordId": "...", "label": "...",
      "link": "canonical URL", "listedAt": "ISO-8601",
      "bindingKind": "if a declaration", "lastChecked": "ISO-8601" } ],
      "ordering": "publication-date",
      "filters": [ "language", "sector", "record-type" ] }
  ],
  "notice": "non-endorsement notice text"
}
```

### 5.4 Interfaces and behaviours

- Collection pages render as static views over snapshot data, with the shared
  navigation and accessibility floor.
- Rows are links to canonical records; no interstitial pages or tracking
  redirects.
- Search operates over the published snapshot index (see public snapshots and
  API).

### 5.5 Lifecycle and operational rules

- Listings follow record lifecycles: revoked or superseded records show only
  in their lifecycle-appropriate state on the canonical page, and superseded
  rows point to the successor.
- Directory versions are announced in the changelog when collection structure
  changes.

## 6. Free floor, red lines, and invariants

The directory is a free-floor commons: browsing and listing never cost money,
and the directory is never a gate to the mark (RL-2). Paid placement and
ranking are absolutely prohibited (RL-4, RL-9), and the non-endorsement notice
keeps the directory from becoming a certificate. Minimal rows implement
privacy by default, and the no-account correction route keeps exit credible.

## 7. Relationships to sibling specifications

- [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) supplies the
  records the directory lists.
- [Visibility and consent](visibility-and-consent-dsh.md) defines which
  records may appear.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)
  defines what directory rows may show about checks.
- [Sector and language directories](sector-and-language-directories-dsh.md)
  owns the specialised views.
- [Public snapshots and API](public-snapshots-and-api-dsh.md) publishes
  directory data.
- [Public usage guidelines](public-usage-guidelines-dsh.md) and [Licensing and
  mark policy](licensing-and-mark-policy-dsh.md) govern how listed marks are
  presented.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md)
  owns the abuse routes and removal decisions.
- [Accessibility floor](accessibility-floor-dsh.md) is mandatory for all
  pages.
- [Research observatory](research-observatory-dsh.md) may study directory data
  only in aggregated, privacy-safe forms.

## 8. Resolution of the seed's "before implementation" concerns

- **Inclusion is not approval** — section 5.2 item 2: standing non-endorsement
  notice on every page.
- **Forbid paid rank** — section 5.2 items 3-4: neutral documented ordering,
  no purchased or sponsored positions.
- **Minimize personal data** — section 5.2 item 5: identifiers and links
  only.
- **Document ordering** — section 5.2 item 3 and 5.3: per-collection
  documented default sorts.
- **Correction, revocation, abuse routes** — section 5.2 item 8: visible on
  every page, no-account path included.

## 9. Acceptance criteria

1. No record appears without public visibility and recorded consent.
2. Every page displays the non-endorsement notice.
3. No ordering position can be purchased or sponsored.
4. No collection displays scores, rankings, or popularity metrics.
5. A revoked record disappears from the directory within one business day.
6. Rows contain identifiers and links, not personal details beyond what the
   record publishes.
7. Directory data is published in the snapshot pipeline and is mirrorable.
8. Every page meets the accessibility floor.
9. The no-account declaration path works without ever touching the directory.

## 10. Open questions

- Whether collection pages should offer per-collection RSS feeds, and where
  those are owned (changelog and RSS).
