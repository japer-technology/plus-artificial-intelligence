# Sector and Language Directories — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`sector-and-language-directories.md`](sector-and-language-directories.md).
> **Catalogue group:** AI practice registers and discovery.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the sector, artifact-type, language, and
coarse-region views over public +AI records, so that relevant signers,
practices, pilots, and guidance are easier to find. It is the answer to "who
else in my field signs?" — answered without stereotyping, without inferring
sensitive attributes, and without implying professional competence. Existing
industry theme pages may become presentation layers over these views, not
separate data silos.

## 2. Placement and boundaries

This specification sits in the "AI practice registers and discovery" group and
owns the *specialised views* over [Public directory](public-directory-dsh.md)
data. It does not own the underlying records (see [Opt-in signatory
registry](opt-in-signatory-registry-dsh.md)) or their visibility rules (see
[Visibility and consent](visibility-and-consent-dsh.md)). It inherits the
directory's non-endorsement and no-paid-rank rules and adds the specific
protections against inferred, sensitive, or low-count disclosure that sector
views invite.

## 3. Terminology

- **Sector view** — a directory view filtered to a voluntarily declared
  sector.
- **Artifact-type view** — a view filtered by the type of artifact declared
  (reports, code, images, datasets, …).
- **Language view** — a view filtered by the language of records.
- **Coarse region** — a voluntarily declared, low-precision geographic
  grouping (e.g. continent), never precise location.
- **Low-count disclosure** — the risk that a small filtered group effectively
  identifies its members.

## 4. Scope

### 4.1 In scope

- The four view types and their filters.
- Rules against inferred attributes, geographic precision, and stereotypes.
- Low-count suppression.
- The relationship to industry theme pages.

### 4.2 Out of scope and deferred

- Record admission and ordering (public directory).
- Sector-specific guidance content (regulatory phrasing packs, training).
- Community discussion per sector (community hub).

## 5. Specification

### 5.1 Design goals and principles

1. **Declared, never inferred.** Views filter on what records voluntarily
   declare.
2. **Relevance without stereotype.** A sector view is a filter, not a
   characterisation of the sector's people.
3. **Privacy in small groups.** Views suppress counts and listings below safe
   thresholds.
4. **Themes as presentation.** Industry themes restyle these views; the data
   stays one neutral source.

### 5.2 Normative requirements

1. Sector views MUST filter only on a sector value the record holder declared
   voluntarily; the project MUST NOT assign sectors by inference from names,
   domains, tools, or other signals.
2. Language views MUST use declared record languages; machine detection MAY be
   used only to label unlabelled records as "detected", never as declared
   fact.
3. Region views MUST use only coarse voluntary groupings; precise locations
   MUST NOT be collected, displayed, or inferred, and geolocation MUST NOT be
   used.
4. Views MUST NOT display or imply professional competence, endorsement, or
   certification; each view repeats the public directory non-endorsement
   notice.
5. Low-count protection MUST apply: a filtered view with fewer than a
   published minimum of records MUST show only "fewer than N records" without
   listing them, and MUST NOT render counts that identify members; the minimum
   defaults to the disclosure threshold owned by research observatory
   (k = 10 by default) unless a stricter per-view value is published with
   justification.
6. Views MUST NOT create stereotypes: copy, imagery, and ordering MUST avoid
   implying what a sector's people are like; the guidance MUST be reviewed for
   stereotyping risk before release.
7. Industry theme pages MAY present sector views as themed layers, but MUST
   consume the same neutral view data, MUST keep all filters and the
   non-endorsement notice, and MUST be registered in the theme gallery with
   per-theme conformance notes.
8. View definitions MUST be versioned and announced in the changelog when the
   filter vocabulary changes.
9. Views MUST meet the accessibility floor and the shared navigation
   requirements.
10. Views MUST be published through the snapshot pipeline so mirrors serve
    identical filtered data.

### 5.3 Data model

```
{
  "viewId": "opaque identifier",
  "type": "sector | artifact-type | language | region",
  "value": "declared filter value",
  "source": "snapshot version",
  "count": "integer | suppressed",
  "records": [ "recordId..." ] // empty when count is suppressed
}
```

### 5.4 Interfaces and behaviours

- View pages render as static filtered lists with the shared navigation.
- Suppressed views render the suppression notice and link to the general
  directory.
- Theme layers swap presentation only; filters, ordering rules, and notices
  are identical underneath.

### 5.5 Lifecycle and operational rules

- Views are regenerated from each snapshot; removal of a record from the
  directory removes it from every view at the same time.
- The filter vocabulary changes only through the versioned, announced
  process.

## 6. Free floor, red lines, and invariants

Views are free-floor commons: browsing any view never costs money and never
requires an account. The no-paid-rank rule (RL-4, RL-9) applies unchanged, and
the anti-inference rules implement the privacy red lines (RL-5) for the
sensitive-attribute case. Low-count suppression keeps the directory's
discovery purpose from turning into de-anonymisation.

## 7. Relationships to sibling specifications

- [Public directory](public-directory-dsh.md) owns the collections, ordering,
  and non-endorsement rules these views inherit.
- [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) supplies the
  records.
- [Visibility and consent](visibility-and-consent-dsh.md) defines which
  records may appear in views.
- [Theme engine and packs](theme-engine-and-packs-dsh.md) and [Theme gallery
  and community voting](theme-gallery-community-voting-dsh.md) host the
  industry themes as presentation layers.
- [Per-theme conformance notes](per-theme-conformance-notes-dsh.md) document
  each themed view's conformance.
- [Public snapshots and API](public-snapshots-and-api-dsh.md) publishes view
  data.
- [Accessibility floor](accessibility-floor-dsh.md) applies to every view.
- [Research observatory](research-observatory-dsh.md) may study view usage
  only in aggregated forms.

## 8. Resolution of the seed's "before implementation" concerns

- **Inferred or sensitive attributes** — section 5.2 items 1-3: filters use
  declared values only; no inference, no geolocation, no precise location.
- **Low-count disclosures** — section 5.2 item 5: suppression below a
  published minimum.
- **Geographic precision** — section 5.2 item 3: coarse voluntary groupings
  only.
- **Stereotypes** — section 5.2 item 6: stereotyping review before release.
- **Implication of professional competence** — section 5.2 item 4: repeated
  non-endorsement notice, no competence implication.
- **Industry themes as presentation layers** — section 5.2 item 7: themes
  consume the same neutral data and stay conformant.

## 9. Acceptance criteria

1. No view filters on a value the record holder did not declare.
2. No view displays or infers precise location.
3. A view below the minimum count shows the suppression notice and no list.
4. Every view repeats the non-endorsement notice.
5. A record removed from the directory disappears from all views in the same
   snapshot.
6. An industry theme page over a sector view consumes identical data and
   notices.
7. Filter vocabulary changes appear in the changelog.
8. Views meet the accessibility floor.

## 10. Open questions

- Whether sector vocabularies should align with external classifications, and
  if so which (deferred to standards engagement).
