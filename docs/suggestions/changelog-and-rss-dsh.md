# Changelog and RSS — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`changelog-and-rss.md`](changelog-and-rss.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the project's changelog as a durable, machine-readable record of change events — specification releases, translations, themes, schemas, registry policy, governance decisions, and service changes — together with its human-readable rendering and an RSS/Atom feed. It exists to make every change visible and subscribable, so that the no-silent-change invariant holds in practice and anyone can audit what changed, when, and why.

## 2. Placement and boundaries

This is a commons-layer artifact. It owns the *change-event record and its presentation*. It does not own what the events describe: release and correction semantics come from [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md), governance decisions from [Governance and stewardship](governance-and-stewardship-dsh.md), schema changes from [Public snapshots and API](public-snapshots-and-api-dsh.md), and multilingual summaries from [Translation governance](translation-governance-dsh.md). It honours the static-first invariant by keeping the changelog and feed as plain static files.

## 3. Terminology

- **Change event** — one dated, identified entry describing a change.
- **Changelog** — the ordered, append-only record of change events.
- **Feed** — the RSS/Atom presentation of the changelog, generated deterministically.
- **Correction** — a later event that fixes an earlier event's content, referencing it by identifier.
- **Notice threshold** — the rule deciding which changes must be published as events.

## 4. Scope

### 4.1 In scope

- The change-event record and its categories.
- Stable item identifiers and correction handling.
- Multilingual summaries and their provenance.
- Feed generation and the human-readable rendering.
- Archival guarantees and the notice threshold.

### 4.2 Out of scope and deferred

- The semantics of the changes themselves (each owning specification).
- Translation workflow and review status (translation governance).
- Governance of who may publish events (governance and stewardship).
- Feed distribution infrastructure (static-first and public snapshots supply the file hosting).

## 5. Specification

### 5.1 Design goals and principles

1. **Data first, presentation second.** The changelog is a record; the page and the feed are renderings of it.
2. **Append-only.** Events are added; nothing is silently edited or removed.
3. **Stable identity.** Every event has an immutable identifier, never reused.
4. **Honest summaries.** A summary says what changed; a correction says what was wrong.
5. **Deterministic feeds.** The same changelog state always renders to the same feed.

### 5.2 Normative requirements

1. The changelog MUST be a versioned, append-only list of change events; an event MUST be identified by an immutable ID that is never reused.
2. Every change event MUST carry: the ID, an ISO-8601 date, a category, a severity, a human-readable summary, and links to the affected resources; optional fields include a language tag and a `corrects` reference.
3. Event categories MUST be drawn from the published set: `spec-release`, `spec-correction`, `translation`, `theme`, `schema`, `registry-policy`, `governance`, `service-change`, `security`, and `deprecation`; a new category MUST be added to the published set before it is used.
4. The normative changelog MUST be written in English; the feed and page MUST be generated from the changelog record, never hand-maintained in parallel.
5. The RSS/Atom feed MUST be generated deterministically from the changelog, with one feed entry per event using the event's ID as a stable GUID, and MUST NOT reorder or rewrite past entries.
6. Correction handling: a correction MUST be a new event referencing the original by ID via `corrects`; the original event MUST remain visible and unedited, and the feed MUST carry the correction as a new entry, not a silent edit to the old one.
7. Multilingual summaries: non-English summaries MUST be attached to the English event (not separate events), MUST carry their language tag, and MUST be labelled with their review status per [Translation governance](translation-governance-dsh.md); an unreviewed machine summary MUST be labelled as such.
8. Archival guarantees: every changelog version and every feed entry MUST remain available at permanent URLs; a changelog is never republished with its history altered, and the changelog itself MUST be hashable like any commons record.
9. Notice threshold: the following MUST always be published as events — normative specification releases and corrections, schema changes, registry-policy changes, governance decisions, security incidents, and service changes affecting availability or data; routine, non-material changes (e.g. a typo fix in non-normative copy) MAY be batched into a periodic summary event.
10. The changelog and feed MUST be static-file-safe (`file://`-openable, no required server) and MUST be included in the [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md).
11. Every sibling specification's own change records (spec versions, schema versions, mappings) MUST be referenced by, or included in, the changelog so there is one discoverable stream of change. The changelog and its feed are the single authoritative, signed channel for "what is current": siblings that need a current-version pointer (offline pack update discovery, spec-version resolution) defer to it rather than publishing competing pointers.
12. The changelog MUST NOT be used to publish trust scores, rankings, or endorsements; it records changes, not evaluations.

### 5.3 Data model

Change event:

```
{
  "id": "opaque, unique, never reused",
  "date": "ISO-8601",
  "category": "spec-release | spec-correction | translation | theme | schema |
               registry-policy | governance | service-change | security | deprecation",
  "severity": "material | routine",
  "summary": "human-readable English",
  "links": [ "affected resources" ],
  "corrects": "optional event id",
  "translations": [ { "lang": "ISO 639", "summary": "...", "status": "reviewed | machine" } ]
}
```

### 5.4 Interfaces and behaviours

- **Page:** the changelog renders as a dated, categorised, filterable list; filters are query-parameter presentation only, never new identity (per URL semantics).
- **Feed:** Atom/RSS generated from the record, one entry per event, stable GUIDs, full summaries, no reordering of history.
- **Correction:** a correction entry links to the original and states the difference; both remain visible.
- **Subscribe:** the feed is discoverable via a standard `<link rel="alternate">` on the changelog page.

### 5.5 Lifecycle and operational rules

The changelog is published on every material change, versioned as a whole, and archived permanently. The feed reflects the current changelog deterministically. Decommissioning an event is prohibited; the only allowed transformation is the addition of a correction or a deprecation entry pointing at it.

## 6. Free floor, red lines, and invariants

The changelog and feed are free-floor commons: reading and subscribing must never require payment or an account. Append-only publishing (items 1-2) and correction-as-new-event (item 6) implement the no-silent-change invariant in its most direct form, and keep the record honest. The no-verdict rule (item 12) keeps the changelog from becoming a reputation surface. The static-file requirement (item 10) preserves the static-first invariant.

## 7. Relationships to sibling specifications

- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md) owns the release and correction semantics this changelog announces.
- [Governance and stewardship](governance-and-stewardship-dsh.md) owns the decisions whose publication this changelog is.
- [Public snapshots and API](public-snapshots-and-api-dsh.md) owns schema-change announcements this changelog carries.
- [Translation governance](translation-governance-dsh.md) owns the review status of multilingual summaries.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md) owns the archival guarantees this changelog must satisfy.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md) bundles the changelog and feed.
- [Conformance linter](conformance-linter-dsh.md) checks that presentations render the correct current version referenced by this record.

## 8. Resolution of the seed's "before implementation" concerns

- **Event categories** — section 5.2 item 3: a published, extensible category set.
- **Stable item identifiers** — section 5.2 items 1-2: immutable, never-reused event IDs.
- **Correction handling** — section 5.2 item 6: corrections are new events referencing the original; nothing is silently edited.
- **Multilingual summaries** — section 5.2 item 7: attached to the English event, tagged and review-labelled.
- **Archival guarantees** — section 5.2 item 8: permanent URLs, append-only history, hashable record.
- **Which changes require notice** — section 5.2 item 9: a notice threshold with a mandatory list and a batched routine path.

## 9. Acceptance criteria

1. Every material change appears as a dated, categorised changelog event.
2. Every event has an immutable ID that is never reused.
3. A correction is a new entry referencing the original, and the original remains unedited.
4. The feed is generated deterministically from the changelog with stable GUIDs.
5. Non-English summaries carry language tags and review status.
6. Past changelog versions and feed entries remain available at permanent URLs.
7. The changelog and feed open from `file://` with no server.
8. The changelog is bundled in the offline pack.
9. No changelog entry carries a trust score, rank, or endorsement.
10. Every specification release, schema change, and governance decision appears in the feed without manual re-entry.

## 10. Open questions

- The concrete rendering format for the human-readable page (grouped vs. flat, default filters) is undecided.
- Whether the feed should expose a per-category filtered variant, or one combined feed only, is undecided.
