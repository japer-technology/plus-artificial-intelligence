# Theme Gallery and Community Voting — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`theme-gallery-community-voting.md`](theme-gallery-community-voting.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the expanded theme gallery: searchable previews,
contributor credit, favourites, and optional community feedback or voting that
help people discover presentations and guide future design work. Its purpose
is discovery and encouragement — never trust. The gallery's one hard rule is
that popularity about presentation must never be mistaken for anything about
meaning or people.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns the *gallery experience*. It does not own the packs
(see [Theme engine and packs](theme-engine-and-packs-dsh.md)), their standing
(see [Per-theme conformance notes](per-theme-conformance-notes-dsh.md)), or
submission moderation (see [Moderation, disputes, and
appeals](moderation-disputes-and-appeals-dsh.md)). It honours the red lines
against rankings and manipulation by keeping every feedback signal explicitly
about presentation, never about signers, and never a gate.

## 3. Terminology

- **Gallery** — the public collection of theme packs with previews.
- **Feedback signal** — favourites, votes, or comments about a pack's
  presentation.
- **Discovery order** — how packs are listed; documented and neutral by
  default.
- **Vendor capture** — the risk that a vendor's resources dominate the
  gallery's direction.

## 4. Scope

### 4.1 In scope

- Search, previews, credit, and favourites.
- Optional voting and feedback rules.
- Manipulation and vendor-capture protections.
- Privacy and the accessible neutral view.

### 4.2 Out of scope and deferred

- Pack architecture and conformance (theme engine and packs, conformance
  linter).
- Commissioned packs' terms (custom themes).
- Turning feedback into trust or certification (never; see independent
  assurance).

## 5. Specification

### 5.1 Design goals and principles

1. **Discovery, not judgement.** The gallery helps find; it never ranks
   meaning.
2. **Feedback is about packs, not people.** Votes attach to presentations,
   never to signers, contributors, or organisations.
3. **Neutral by default.** Default ordering is documented and neutral;
   feedback sorts are opt-in views.
4. **Manipulation-resistance by design.** Signals are bounded, transparent,
   and never purchased.

### 5.2 Normative requirements

1. The gallery MUST display each pack with: a searchable preview, the pack's
   per-theme conformance note summary, contributor credit (factual, no
   ranking), and the neutral-route control.
2. Default discovery order MUST be neutral and documented (e.g. publication
   date); feedback-based ordering MUST be an explicit user-chosen view, never
   the default.
3. Voting and favourites MUST attach to presentation quality only; any signal
   that could read as judging a person or organisation MUST NOT exist (RL-9).
4. No placement, ordering, or prominence in the gallery MAY be purchased or
   sponsored (RL-4); sponsors may fund gallery infrastructure only as
   disclosed support.
5. Manipulation protections MUST be published: rate limits on signals,
   transparency of counts, and no automated or coordinated voting (see
   security and abuse controls).
6. Vendor capture MUST be prevented: no single vendor's themes MAY dominate
   the default view, and any vendor relationship MUST be disclosed per
   sponsorship policy.
7. Privacy MUST be preserved: favourites, if any, MUST be stored
   locally-first or behind explicit consent; the gallery MUST NOT track or
   fingerprint visitors (RL-5).
8. Submissions MUST follow moderation, disputes, and appeals; removed or
   non-conformant packs MUST disappear from the gallery and surprise-me until
   re-conformance.
9. The accessible neutral view MUST exist: a plain list with search and
   previews meeting the accessibility floor, independent of the decorative
   gallery design.
10. Feedback results MAY guide future design work (e.g. which styles people
    find useful) and MUST be published as aggregates only, per privacy-safe
    rules.
11. The gallery's data (pack metadata and aggregate feedback) MUST be
    published through the snapshot pipeline and be mirrorable.
12. Gallery changes MUST be versioned and announced in the changelog.

### 5.3 Data model

```
{
  "galleryVersion": "integer",
  "packs": [ { "packId": "...", "conformance": "note reference",
               "credit": [ "factual contributor list" ],
               "signals": { "favourites": "count", "votes": "count",
                            "basis": "presentation-only" } } ],
  "defaultOrder": "publication-date",
  "signalPolicy": { "rateLimit": "...", "noPurchase": true }
}
```

### 5.4 Interfaces and behaviours

- Search filters on documented pack metadata (language, style tokens,
  conformance status), never on inferred visitor attributes.
- Favourites work without an account locally; synced favourites require
  explicit consent.
- Feedback views label themselves ("sorted by community favourites") and
  never appear as the default.

### 5.5 Lifecycle and operational rules

- Pack entries follow the packs' conformance lifecycle; a flagged pack is
  removed from default views until fixed.
- Aggregate feedback data is published with the gallery version and is
  corrected version by version, never silently edited.

## 6. Free floor, red lines, and invariants

The gallery and its neutral view are free-floor commons. The no-rank and
no-paid-placement red lines are structural here: feedback is presentation
scoped, opt-in sorted, and never purchasable. Popularity about looks must
never leak into trust about meaning — that boundary is the gallery's entire
job.

## 7. Relationships to sibling specifications

- [Theme engine and packs](theme-engine-and-packs-dsh.md) supplies the packs.
- [Per-theme conformance notes](per-theme-conformance-notes-dsh.md) supply
  the standing displayed per pack.
- [Surprise-me theme mode](surprise-me-theme-mode-dsh.md) draws its candidate
  set from conformant packs.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md)
  owns submission review and removal.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) owns
  anti-manipulation and rate limits.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) and
  [Privacy-respecting analytics](privacy-respecting-analytics-dsh.md) own the
  data rules for favourites and aggregate feedback.
- [Sponsorship policy](sponsorship-policy-dsh.md) owns the vendor-capture
  disclosures.
- [Public snapshots and API](public-snapshots-and-api-dsh.md) publishes
  gallery data.
- [Accessibility floor](accessibility-floor-dsh.md) guarantees the neutral
  view.

## 8. Resolution of the seed's "before implementation" concerns

- **Keep ranking separate from trust** — section 5.2 items 2-3: neutral
  default order, presentation-only signals, opt-in feedback sorts.
- **Prevent manipulation** — section 5.2 item 5: published protections and
  rate limits.
- **Prevent vendor capture** — section 5.2 item 6: disclosed relationships,
  no dominant default view.
- **Moderate submissions** — section 5.2 item 8: moderation-owned removal
  and re-conformance.
- **Protect privacy** — section 5.2 item 7: local-first favourites, no
  tracking.
- **Preserve an accessible neutral view** — section 5.2 item 9: a plain
  conformant list independent of the decorative design.

## 9. Acceptance criteria

1. Default ordering is neutral, documented, and unpaid.
2. Votes and favourites attach to packs only, never to people.
3. Feedback-based ordering is opt-in and never the default.
4. No placement or ordering can be purchased.
5. A non-conformant pack disappears from the gallery until re-conformance.
6. The neutral list view meets the accessibility floor.
7. No tracking or fingerprinting occurs in the gallery.
8. Aggregate feedback data is published and mirrorable.

## 10. Open questions

- Whether comments should exist at all, given moderation cost (see cost
  discipline), or whether favourites and votes suffice.
