# Per-Theme Conformance Notes — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`per-theme-conformance-notes.md`](per-theme-conformance-notes.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the concise public notes that accompany every
theme: supported features, accessibility characteristics, known limitations,
language coverage, content version, and the last conformance check. Their
purpose is honest presentation of each theme's standing — what it does, what
it cannot do, and how recently that was checked — so visitors, signers, and
reviewers never mistake a decorative surface for a fully conformant one.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns the *note schema and publication duties*. It does
not own the checks that produce the claims (see [Conformance
linter](conformance-linter-dsh.md) and [Accessibility
floor](accessibility-floor-dsh.md)), the gallery that displays the notes (see
[Theme gallery and community voting](theme-gallery-community-voting-dsh.md)),
or the themes' architecture (see [Theme engine and
packs](theme-engine-and-packs-dsh.md)). It honours the no-silent-change
invariant by making conformance status a dated, versioned public fact.

## 3. Terminology

- **Conformance note** — the per-theme record defined here.
- **Measured claim** — a property established by automated checks.
- **Reviewed claim** — a property established by human assessment.
- **Neutral fallback** — the accessible plain route that covers any
  limitation.
- **Last conformance check** — the date and tool version of the most recent
  validation.

## 4. Scope

### 4.1 In scope

- The note fields and their meaning.
- Automated versus reviewed claims and their labels.
- Update responsibility and failure visibility.
- The neutral fallback requirement per limitation.

### 4.2 Out of scope and deferred

- The linter's rule set (conformance linter).
- Gallery curation (theme gallery and community voting).
- Theme design guidance (theme builder and starter kit).

## 5. Specification

### 5.1 Design goals and principles

1. **Dated facts, not boasts.** Notes report standing as of a date, with the
   method that established it.
2. **Limitations are features.** A known limitation with a fallback is honest
   product; a hidden one is a defect.
3. **Automation labels itself.** Claims say "measured" or "reviewed", never
   an undifferentiated "supports".
4. **Responsibility is named.** Each note names who updates it and when.

### 5.2 Normative requirements

1. Every published theme MUST carry a conformance note with the fields in
   5.3; a theme without one MUST NOT appear in the gallery or in surprise-me
   selection.
2. Each claim MUST be labelled `measured` (established by the linter or
   automated tests) or `reviewed` (established by human assessment), with the
   tool version or reviewer role and the date.
3. The note MUST state: supported features (from the hooks contract),
   accessibility characteristics (contrast, motion, keyboard, screen reader),
   known limitations, language coverage, the content version rendered, and
   the last conformance check (date and linter version).
4. Every limitation MUST name its neutral fallback (e.g. "no theme-specific
   print styles — plain route prints correctly"); a limitation without a
   fallback MUST be labelled a blocker for default use.
5. Update responsibility MUST be named: the theme's maintainer updates the
   note when the theme changes, and the note MUST be re-issued after every
   conformance check.
6. Failures MUST be visible: a failed check MUST appear as a dated `failed`
   entry with the failing rules, never silently dropped.
7. The note MUST be versioned with the theme pack, and the note's version
   MUST appear in the theme manifest (see theme engine and packs).
8. Notes MUST be machine-readable (the data model in 5.3) and rendered as an
   accessible summary page per theme.
9. A theme that loses conformance MUST be flagged in the gallery and excluded
   from surprise-me until re-checked.
10. The notes themselves MUST meet the accessibility floor when rendered.

### 5.3 Data model

```
{
  "themeId": "pack identifier",
  "noteVersion": "integer",
  "supportedFeatures": [ { "feature": "...", "basis": "measured | reviewed",
                           "by": "tool version or role", "at": "ISO-8601" } ],
  "accessibility": { "contrast": "AA", "motion": "reduced-motion-aware",
                     "keyboard": "complete", "screenReader": "complete",
                     "basis": "measured | reviewed" },
  "limitations": [ { "limitation": "...", "fallback": "...",
                     "blocker": false } ],
  "languageCoverage": [ "ISO 639..." ],
  "contentVersion": "the normative content version rendered",
  "lastCheck": { "at": "ISO-8601", "linter": "version", "result": "passed | failed",
                 "failedRules": [ "ruleId..." ] }
}
```

### 5.4 Interfaces and behaviours

- The gallery renders each theme's note summary with a link to the full
  note; surprise-me landings link the note (see surprise-me theme mode).
- The linter emits the measured fields directly into the note draft, which
  the maintainer then publishes.

### 5.5 Lifecycle and operational rules

- Notes are re-issued on theme change and on each conformance run; old note
  versions remain visible (no silent change).
- A note correction is a new note version with a correction entry, never an
  edit.

## 6. Free floor, red lines, and invariants

Notes are free-floor commons: reading them costs nothing, and the neutral
fallback they document is the accessibility floor's promise. The
measured-versus-reviewed labelling keeps the project's honesty invariant in
its own marketing surfaces, and dated, versioned notes implement no-silent
change for presentation quality.

## 7. Relationships to sibling specifications

- [Conformance linter](conformance-linter-dsh.md) produces the measured
  claims.
- [Theme engine and packs](theme-engine-and-packs-dsh.md) requires the note
  in the pack manifest.
- [Theme gallery and community voting](theme-gallery-community-voting-dsh.md)
  displays the notes and flags non-conformance.
- [Surprise-me theme mode](surprise-me-theme-mode-dsh.md) gates its candidate
  set on the notes.
- [Accessibility floor](accessibility-floor-dsh.md) defines the fallback's
  baseline.
- [Generator pipeline](generator-pipeline-dsh.md) records escape hatches in
  the notes.
- [Custom themes](custom-themes-dsh.md) and [Theme builder and starter
  kit](theme-builder-and-starter-kit-dsh.md) must produce notes for their
  outputs.

## 8. Resolution of the seed's "before implementation" concerns

- **Measurable properties** — section 5.3: each field with a basis
  (measured/reviewed) and a date.
- **Automated versus reviewed claims** — section 5.2 item 2: mandatory
  labelling with tool version or reviewer role.
- **Update responsibility** — section 5.2 item 5: named maintainer duty,
  re-issue on change and check.
- **Failure visibility** — section 5.2 item 6: dated `failed` entries with
  failing rules.
- **A neutral fallback for every limitation** — section 5.2 item 4: named
  fallback or labelled blocker.

## 9. Acceptance criteria

1. No theme appears in the gallery without a conformance note.
2. Every claim is labelled measured or reviewed with its date and basis.
3. A failed check appears as a dated failure with rule identifiers.
4. Every limitation names its neutral fallback or is labelled a blocker.
5. The note is versioned with the pack and referenced from the manifest.
6. A non-conformant theme is excluded from surprise-me.
7. Rendered notes meet the accessibility floor.
8. A note correction ships as a new version, never an edit.

## 10. Open questions

- The review cadence for `reviewed` claims (human re-assessment intervals).
- Whether the note schema should also record upstream dependencies of the
  theme pack.
