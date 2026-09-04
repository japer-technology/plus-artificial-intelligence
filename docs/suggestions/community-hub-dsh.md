# Community Hub — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`community-hub.md`](community-hub.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the community hub: a home for signers, contributors, translators, sector groups, pilots, case studies, and open discussions that shows participation without turning the community into a popularity ranking.

## 2. Placement and boundaries

The hub is a discoverable view over voluntary records and community activity, not a social feed and not an endorsement mechanism. It shows participation by linking to records owned elsewhere: signers to [Opt-In Signatory Registry](opt-in-signatory-registry-dsh.md) and [Public Directory](public-directory-dsh.md), sector groups to [Sector and Language Directories](sector-and-language-directories-dsh.md), pilots and case studies to [Pilots and Case Studies](pilots-and-case-studies-dsh.md). Moderation, inclusion, governance, archival, and multilingual rules are prerequisites owned by their siblings, and the hub MUST NOT open public submissions until those rules are published.

## 3. Terminology

- **participation** — voluntary, attributable activity in the project.
- **directory** — a discoverable view over voluntary records.
- **discussion** — moderated, archived public conversation (distinct from a social feed).
- **endorsement** — a claim of approval; the hub never makes it.
- **visibility modes** — local/private, opaque unlisted, public searchable, organisation-only.

## 4. Scope

### 4.1 In scope

- The hub's participation surfaces and their ordering principles.
- The no-ranking rule and the no-endorsement disclaimer.
- Gating public submissions on published moderation/inclusion/governance/archival/multilingual rules.

### 4.2 Out of scope and deferred

- Registry and directory mechanics — [Opt-In Signatory Registry](opt-in-signatory-registry-dsh.md), [Public Directory](public-directory-dsh.md), [Sector and Language Directories](sector-and-language-directories-dsh.md).
- Moderation and appeals — [Moderation, Disputes, and Appeals](moderation-disputes-and-appeals-dsh.md).
- Governance of community decisions — [Governance and Stewardship](governance-and-stewardship-dsh.md).
- Archival and continuity — [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md).
- Multilingual participation — [Translation Governance](translation-governance-dsh.md).
- Privacy and consent — [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md), [Visibility and Consent](visibility-and-consent-dsh.md).

## 5. Specification

### 5.1 Design goals and principles

- Show participation, never popularity.
- Opt-in and consent-respecting.
- A hub of links to owned records, not a silo that re-hosts authority.

### 5.2 Normative requirements

1. The hub MUST provide surfaces for at least: signers, contributors, translators, sector groups, pilots, case studies, and open discussions.
2. The hub MUST NOT display popularity metrics: no follower counts, no like/upvote tallies, no leaderboards, no reputation scores, no paid rank (invariant 2 watchlist).
3. The hub MUST state prominently the canonical non-endorsement notice owned by public directory: "Inclusion is a record of voluntary listing, not approval, certification, or endorsement."
4. The hub MUST NOT open public submissions until moderation, inclusion, governance, archival, and multilingual participation rules are published; until then it MAY operate read-only or link-only.
5. All public listings MUST respect visibility modes and appear publicly only with the participant's explicit consent, per [Visibility and Consent](visibility-and-consent-dsh.md).
6. Discussion spaces MUST be moderated and archived, and MUST NOT function as an algorithmic social feed.
7. The hub MUST provide an accessible, low-bandwidth route for reading participation, per [Accessibility Floor](accessibility-floor-dsh.md).
8. The hub MUST minimise personal data: link to records rather than re-hosting them, and defer field-level privacy to [Privacy and Data Minimisation](privacy-and-data-minimisation-dsh.md).
9. Multilingual surfaces MUST follow [Translation Governance](translation-governance-dsh.md), including marking machine translation and fallback text distinctly from human-reviewed meaning.
10. The hub MUST be static-first: its index and directory views MUST work file://-safe and mirrorable (invariant 4).

### 5.3 Data model

A hub entry: `{ id, kind (signer | contributor | translator | sector-group | pilot | case-study | discussion), source-record (link), visibility, language, moderation-status, listed-date }`. The hub holds links and status, never re-authored authoritative content.

### 5.4 Interfaces and behaviours

Not applicable — discovery and discussion interfaces defer to [Public Directory](public-directory-dsh.md) and [Moderation, Disputes, and Appeals](moderation-disputes-and-appeals-dsh.md); the hub composes links to them.

### 5.5 Lifecycle and operational rules

Entries are added, removed, or tombstoned with a dated record; removal reflects the source record's status (e.g. revoked or redacted), never a silent disappearance. Archival defers to [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md).

## 6. Free floor, red lines, and invariants

The hub MUST NOT rank, score, or feed; MUST NOT sell placement or personal data; MUST NOT require an account to read participation; and MUST NOT infer or assert AI use. Listing buys no legitimacy, rank, or permission.

## 7. Relationships to sibling specifications

- [Opt-In Signatory Registry](opt-in-signatory-registry-dsh.md) and [Public Directory](public-directory-dsh.md) — own the signer/directory records the hub links.
- [Sector and Language Directories](sector-and-language-directories-dsh.md) — own sector-group views.
- [Pilots and Case Studies](pilots-and-case-studies-dsh.md) — own pilot and case-study records.
- [Moderation, Disputes, and Appeals](moderation-disputes-and-appeals-dsh.md) — own the discussion and submission rules that gate the hub.
- [Governance and Stewardship](governance-and-stewardship-dsh.md) — owns community decision rights.
- [Translation Governance](translation-governance-dsh.md) — owns multilingual participation.
- [Visibility and Consent](visibility-and-consent-dsh.md) — owns visibility consent.

## 8. Resolution of the seed's "before implementation" concerns

The seed's concern — "Choose moderation, inclusion, governance, archival, and multilingual participation rules before opening public submissions" — is resolved by §5.2.4 (submissions gated on published rules), §5.2.6 (moderation and archival of discussions), §5.2.8–9 (inclusion via accessibility and privacy), §5.2.3 (no endorsement), and §2 (each rule owned by its sibling specification rather than duplicated here).

## 9. Acceptance criteria

1. All participation kinds are represented or explicitly deferred.
2. No popularity metric, leaderboard, follower count, or reputation score exists.
3. A visible no-endorsement disclaimer is present.
4. Public submissions remain closed until the five prerequisite rule sets are published.
5. Visibility consent is honoured for every public listing.
6. An accessible, low-bandwidth read route exists.
7. The hub index works file://-safe and mirrorable.
8. Machine translation is never presented as human-reviewed meaning.

## 10. Open questions

- Whether to launch discussions at all, given the social-feed watchlist, or to begin read-only/link-only.
- The exact ordering rule for directory views (deferred to [Public Directory](public-directory-dsh.md)).
