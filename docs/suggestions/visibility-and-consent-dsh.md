# Visibility and Consent — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`visibility-and-consent.md`](visibility-and-consent.md).
> **Catalogue group:** AI practice registers and discovery.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the visibility modes of `+AI` records — local and
private, opaque unlisted, public and searchable, and organisation-only — and
the consent rules that govern moving between them. The mark must be usable
quietly; nobody should be pushed into public exposure to participate, and
nobody should be surprised to find their record public. Visibility is a
property of each record, chosen by its party, and changeable only with explicit
consent in the direction of more exposure.

## 2. Placement and boundaries

This specification sits in the "AI practice registers and discovery" group and
owns the *visibility vocabulary and transition rules*. It does not own how
records are stored (see [Portable declaration schema](portable-declaration-schema-dsh.md),
which carries the `visibility` field), how they are listed (see [Public
directory](public-directory-dsh.md) and [Opt-in signatory
registry](opt-in-signatory-registry-dsh.md)), or how they are deleted (see
[Declaration lifecycle](declaration-lifecycle-dsh.md) and [Privacy and data
minimisation](privacy-and-data-minimisation-dsh.md)). It honours the free floor
by making all four modes available without payment, and the red line against
mandatory registration by making "local only" a complete, first-class way to
use the mark.

## 3. Terminology

- **Visibility mode** — one of `local`, `unlisted`, `public`, or
  `organisation-only`, applying to a single record.
- **Opaque unlisted** — resolvable by anyone holding the link, but excluded
  from directories, search, and indexes.
- **Consent record** — a dated record of the party's choice to increase
  visibility, stored alongside the record.
- **Reduced visibility** — any move toward less exposure (public → unlisted →
  local), which must stay straightforward.

## 4. Scope

### 4.1 In scope

- The four visibility modes and their exact semantics.
- Transition rules, consent requirements, and consent records.
- Indexing headers and link-sharing behaviour per mode.
- Role-based access for organisation-only records.
- Safe defaults for vulnerable people.

### 4.2 Out of scope and deferred

- Storage, retention, and deletion mechanics (declaration lifecycle, privacy
  and data minimisation).
- Which records a directory may show (public directory).
- Authentication and account security (security and abuse controls,
  organisation workspaces).

## 5. Specification

### 5.1 Design goals and principles

1. **Consent ascends, ease descends.** More visibility requires explicit
   consent; less visibility must be easy and immediate.
2. **Every mode is complete.** No feature may require a more public mode than
   its purpose needs.
3. **Safe defaults.** New records default to the least exposing mode that
   satisfies the party's stated intent, and minors' records default local.
4. **Link-sharing is deliberate.** Unlisted means exactly that: shareable by
   link, hidden from indexes.

### 5.2 Normative requirements

1. Every stored record MUST carry a `visibility` field with exactly one of:
   `local`, `unlisted`, `public`, `organisation-only`.
2. `local` records MUST be stored only on the party's own device or account
   and MUST never be served to third parties by hosted services.
3. `unlisted` records MUST be excluded from all directories, sitemaps, search
   indexes, and listings, and MUST be served with
   `X-Robots-Tag: noindex, nofollow` where HTTP is involved.
4. `public` records MAY be indexed and listed; making a record `public` MUST
   require an explicit, dated consent step that states what "public" means in
   plain language, and the consent record MUST be kept for the life of the
   record.
5. `organisation-only` records MUST be resolvable only by members holding a
   role granted by the owning organisation, per organisation workspaces; they
   MUST be excluded from public indexes and MUST NOT be revealed by link alone.
6. Decreasing visibility (public → unlisted → local) MUST NOT require approval,
   payment, or justification, and hosted services MUST honour it within one
   business day.
7. Hosted services MUST remove public caches, CDN copies, and index entries
   for a record whose visibility decreases, or label remaining copies as
   outdated.
8. Interfaces MUST show the current mode of each record clearly, in text, and
   MUST preview exactly what becomes reachable before any increase in
   visibility.
9. Vulnerable parties (minors, at-risk people) MUST be offered local-only
   workflows by default, per child-safe education where applicable.
10. Exports MUST carry the `visibility` field so self-hosted copies preserve
    the same boundaries.

### 5.3 Data model

```
"visibility": "local | unlisted | public | organisation-only",
"consentRecord": {
  "action": "made-public | made-unlisted",
  "at": "ISO-8601",
  "party": "who consented",
  "statementShown": "identifier of the plain-language statement displayed"
}
```

### 5.4 Interfaces and behaviours

- The declaration builder, hosted profile settings, and registry submission
  forms share one visibility selector with identical wording and previews.
- Links to unlisted records work for anyone holding them; the record itself
  displays "Unlisted — not searchable".
- Organisation-only records render an access-required state to outsiders,
  revealing nothing beyond that.

### 5.5 Lifecycle and operational rules

- Visibility is per record, not per account: a party may hold a public
  passport and a local draft simultaneously.
- A record that is redacted or tombstoned loses its public listing regardless
  of mode (see declaration lifecycle).
- Consent records are part of the exportable record history (see evidence and
  compliance exports).

## 6. Free floor, red lines, and invariants

All four modes are free-floor provisions: no mode may be sold, and no paid
tier may offer "more private" handling as a product — privacy is not a premium
feature. The consent rules implement the red line against covert tracking and
surprise exposure, and the safe defaults for vulnerable people implement the
child-safety commitments.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) carries the
  `visibility` field this specification defines.
- [Public directory](public-directory-dsh.md) and [Sector and language
  directories](sector-and-language-directories-dsh.md) list only `public`
  records.
- [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) applies these
  modes to registry entries.
- [Hosted profiles](hosted-profiles-dsh.md) and [Artifact
  passports](artifact-passports-dsh.md) respect the modes for their resources.
- [Organisation workspaces](organisation-workspaces-dsh.md) own the role
  grants behind `organisation-only`.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) owns
  retention, deletion, and lawful erasure.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) defines how redaction
  and tombstoning interact with visibility.
- [Child-safe education](child-safe-education-dsh.md) owns the safe defaults
  for minors.

## 8. Resolution of the seed's "before implementation" concerns

- **Indexing headers** — section 5.2 item 3: unlisted records carry noindex
  headers and are excluded from sitemaps.
- **Link sharing** — section 5.2 item 3 and 5.4: unlisted resolves by link,
  hidden from indexes, and says so.
- **Consent records** — section 5.2 item 4 and 5.3: dated consent steps with
  the statement shown, kept for the record's life.
- **Role-based access** — section 5.2 item 5: organisation-only resolution via
  workspace roles.
- **Revocation** — section 5.2 items 6-7: decreasing visibility is immediate,
  cache removal required.
- **Retention** — deferred to privacy and data minimisation, which owns
  retention schedules.
- **Deletion** — deferred to declaration lifecycle (tombstones) and privacy
  and data minimisation (lawful erasure).
- **Safe defaults for vulnerable people** — section 5.2 item 9: local-only
  defaults, per child-safe education.

## 9. Acceptance criteria

1. Every record stores exactly one visibility mode.
2. No unlisted record appears in any directory, sitemap, or search index.
3. Increasing visibility always requires a dated consent step with a plain
   preview.
4. Decreasing visibility completes without payment or approval and within one
   business day.
5. An organisation-only record is unresolvable by link without a granted role.
6. Exports carry visibility so self-hosted copies preserve boundaries.
7. A minor's new record defaults to local.
8. Consent records appear in compliance exports.

## 10. Open questions

- Whether "unlisted" links should support per-link revocation tokens for
  shared URLs that later need to stop resolving.
