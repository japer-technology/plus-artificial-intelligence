# Generator Pipeline — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`generator-pipeline.md`](generator-pipeline.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the generator pipeline: the tooling that produces
repeated theme pages, navigation, metadata, social cards, indexes, and offline
assets from canonical content plus versioned presentation data. It exists to
replace hand-edited repetition — the source of drift — with reproducible,
reviewable generation that still emits the static, file://-safe pages the
project's invariants demand.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns the *generation process*. It does not own the
rendering architecture (see [Theme engine and packs](theme-engine-and-packs-dsh.md)),
the rule checks (see [Conformance linter](conformance-linter-dsh.md)), or the
theme creation experience (see [Theme builder and starter
kit](theme-builder-and-starter-kit-dsh.md)). It honours the static-first
invariant: generation is a convenience, and its output remains plain static
pages anyone can read, fork, or mirror without the generator.

## 3. Terminology

- **Generation** — producing output pages and assets from canonical sources.
- **Canonical source** — the normative content and versioned presentation
  data the generator consumes.
- **Reproducible build** — identical sources produce byte-identical output.
- **Escape hatch** — a documented way for a special mode or page to opt out
  of generation without breaking the contract.
- **Reviewable diff** — the output change set reviewed before publication.

## 4. Scope

### 4.1 In scope

- Sources, outputs, and the generation rules.
- Reproducibility and diff review.
- Extension points and escape hatches.
- Offline outputs and ownership of generated files.

### 4.2 Out of scope and deferred

- Theme creation UI (theme builder and starter kit).
- The linter's rule definitions (conformance linter).
- Serving the outputs (static-first service architecture).

## 5. Specification

### 5.1 Design goals and principles

1. **Generation is a shortcut, not a gate.** The outputs must be as
   first-class as hand-written pages.
2. **Deterministic bytes.** Same sources, same output, every time.
3. **Sources are the review surface.** Humans review canonical changes and
   diffs, never raw generated blobs alone.
4. **Opt-out is designed.** Special modes exist by explicit, documented
   exception, not by accident.

### 5.2 Normative requirements

1. The pipeline MUST consume canonical content and versioned presentation
   data only; generated pages MUST render normative text verbatim from the
   canonical source.
2. Generation MUST be reproducible: identical sources MUST produce
   byte-identical outputs, with timestamps and environment data excluded from
   output or normalised.
3. Every generation run MUST produce a reviewable diff against the previous
   output, and the diff MUST be reviewed before publication (no silent
   change).
4. Generated pages MUST keep stable URLs and MUST remain file://-safe:
   zero build step to open, zero fetch, zero remote assets.
5. Generated assets MUST include the required outputs: theme pages, shared
   navigation (see shared project navigation), metadata and social cards (per
   machine-readable assertions), indexes, and offline assets (per the offline
   and self-hosting pack).
6. Extension points MUST be declared in the pipeline manifest: what may be
   overridden per pack, per page, and per language, and what may never be
   overridden (normative text).
7. Escape hatches MUST be explicit: a page opting out of generation MUST
   record the reason in its per-theme conformance notes, and the opt-out MUST
   be visible in the pipeline manifest.
8. Generated output MUST pass the conformance linter before publication;
   linter errors MUST block generation's output from shipping.
9. Source ownership MUST be documented per asset: canonical content, pack
   assets, and generated output each name their owner and review path (see
   governance and stewardship for authority).
10. The pipeline itself MUST be versioned and its releases announced in the
    changelog; a pipeline change that alters output MUST be a versioned
    release with the diff reviewed.

### 5.3 Data model

```
{
  "pipelineVersion": "integer",
  "sources": [ "canonical content reference", "packs reference" ],
  "outputs": [ "pages", "navigation", "metadata", "socialCards", "indexes", "offlineAssets" ],
  "overrides": { "allowed": [ "..." ], "forbidden": [ "normative text" ] },
  "escapeHatches": [ { "page": "...", "reason": "...", "recordedIn": "per-theme notes" } ],
  "generated": "ISO-8601 (excluded from output bytes)"
}
```

### 5.4 Interfaces and behaviours

- The generator runs locally as a CLI; outputs are committed as ordinary
  static files.
- The linter runs inside the pipeline as a publication gate; the diff is
  presented for human review.
- Special modes (e.g. a hand-crafted anniversary page) use the escape hatch
  and carry their conformance notes.

### 5.5 Lifecycle and operational rules

- Output files are regenerated from sources on release; hand edits to
  generated files are treated as bugs against the sources and reverted or
  promoted into the sources with a review.
- The pipeline's version pins the output contract; older outputs remain
  valid per their version.

## 6. Free floor, red lines, and invariants

The pipeline is a free-floor tool: anyone can run it locally on the commons.
Its determinism implements the no-silent-change invariant at build level, its
file://-safe outputs preserve the static-first invariant, and its
verbatim-normative-text rule preserves "one normative specification, many
presentations" mechanically.

## 7. Relationships to sibling specifications

- [Theme engine and packs](theme-engine-and-packs-dsh.md) owns the rendering
  architecture the pipeline emits into.
- [Conformance linter](conformance-linter-dsh.md) is the publication gate.
- [Shared project navigation](shared-project-navigation-dsh.md) is one of the
  generated outputs.
- [Machine-readable assertions](machine-readable-assertions-dsh.md) supplies
  the metadata and social-card rules.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md) owns
  the offline assets.
- [Per-theme conformance notes](per-theme-conformance-notes-dsh.md) records
  escape hatches.
- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md)
  owns the canonical content versions.
- [Developer integrations](developer-integrations-dsh.md) packages the CI
  usage.
- [Changelog and RSS](changelog-and-rss-dsh.md) announces pipeline releases.

## 8. Resolution of the seed's "before implementation" concerns

- **Stable output and URLs** — section 5.2 item 4: generated pages keep
  stable URLs and remain file://-safe.
- **Reproducible builds** — section 5.2 item 2: identical sources,
  byte-identical output.
- **Reviewable diffs** — section 5.2 item 3: diff reviewed before
  publication.
- **Offline files** — section 5.2 items 4-5: offline assets among the
  required outputs.
- **Extension points** — section 5.2 item 6: declared per-pack, per-page,
  per-language overrides with a forbidden zone.
- **Source ownership** — section 5.2 item 9: per-asset owner and review path.
- **Escape hatches for special modes** — section 5.2 item 7: explicit,
  documented opt-outs recorded in per-theme notes.

## 9. Acceptance criteria

1. Two runs over identical sources produce byte-identical output.
2. Every generation run presents a reviewable diff before publication.
3. Generated pages open from disk with no build step or fetch.
4. Normative text in generated pages is byte-identical to canonical content.
5. Linter errors block generated output from shipping.
6. An escape hatch appears in both the pipeline manifest and the page's
   per-theme conformance notes.
7. A pipeline version that changes output is released with a reviewed diff
   and changelog entry.
8. Generated URLs remain stable across versions.

## 10. Open questions

- Whether the generator should also emit the multi-format distribution kit
  assets, or whether that remains a separate pipeline.
- The diff review workflow (pull-request based) to adopt for pipeline
  releases.
