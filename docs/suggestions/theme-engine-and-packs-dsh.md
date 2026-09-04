# Theme Engine and Packs — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`theme-engine-and-packs.md`](theme-engine-and-packs.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the theme engine and theme packs: the separation of
canonical content and shared behaviour from visual theme packs, so one engine
renders many identities while legacy single-file pages remain stable and
mirrorable. Its purpose is to make the project's "one normative specification,
many presentations" principle an engineered fact rather than a maintenance
hope: themes restyle, the engine guarantees the meaning.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns the *rendering architecture*. It does not own the
normative content (the specification), the page contract details (see
[Conformance linter](conformance-linter-dsh.md), which turns the contract into
rules), the builder experience (see [Theme builder and starter
kit](theme-builder-and-starter-kit-dsh.md)), or individual theme quality (see
[Per-theme conformance notes](per-theme-conformance-notes-dsh.md)). It honours
the static-first invariant: the engine runs without a build step or server,
and legacy pages remain first-class citizens.

## 3. Terminology

- **Engine** — the shared runtime that renders canonical content under a
  chosen theme pack.
- **Theme pack** — a self-contained set of presentation assets (styles,
  tokens, flavour text, fonts) with a manifest.
- **Canonical content** — the normative specification data and the shared
  page structure.
- **Hooks contract** — the stable set of identifiers, keys, and behaviours
  themes must honour (the existing page contract).
- **Legacy page** — an existing single-file themed page, which must keep
  working unchanged.

## 4. Scope

### 4.1 In scope

- Engine/theme separation and the pack manifest.
- Rendering invariants: meaning preservation, hooks, fallback.
- Legacy-page compatibility and content hashing.
- Offline and mirrorability requirements.

### 4.2 Out of scope and deferred

- Theme creation tooling (theme builder and starter kit).
- Gallery, voting, and custom commissions (theme gallery, custom themes).
- The linter's rule definitions (conformance linter).

## 5. Specification

### 5.1 Design goals and principles

1. **Meaning is engine property.** No theme may alter normative content.
2. **Packs are replaceable.** A page's identity is a manifest choice, not a
   fork of the content.
3. **Legacy is sacred.** Old URLs and old single-file pages keep working and
   stay mirrorable.
4. **Degrade gracefully.** A broken or missing pack falls back to the neutral
   route, never to broken content.

### 5.2 Normative requirements

1. The engine MUST render canonical content from the shared data source, with
   the normative text verbatim and keyed to the existing `data-*` hooks so
   translations and tooling keep working.
2. A theme pack MUST be declared in a manifest naming: pack identifier,
   version, content hash of the pack, supported languages, accessibility
   characteristics, and the conformance-check date (see per-theme conformance
   notes).
3. The engine MUST honour the hooks contract: the translation script order,
   element identifiers (`languageSelect`, `specContent`, `tocList`, …), class
   hooks (`.spec-section`, `.meaning-card`, …), and the data-text/data-html
   keys remain the contract themes are checked against.
4. Flavour text MUST be isolated in theme packs and MUST NEVER change
   normative meaning (see flavour-text localisation); the engine MUST render
   normative text from canonical data, never from theme copy.
5. A pack MUST NOT introduce remote dependencies: the engine and packs MUST
   run from `file://` with no fetch, no build step, and no tracking.
6. Legacy single-file pages MUST remain valid: the engine MUST treat them as
   frozen theme instances, and any regeneration MUST be byte-identical or a
   recorded version change (no silent change).
7. The engine MUST provide graceful fallback: if a pack fails to load or
   validate, the neutral accessible route renders instead, with a visible
   notice.
8. Content hashes MUST cover the canonical content per version (see
   specification versioning and hashing) and the pack per version; checkers
   and the linter MUST be able to verify both.
9. The signer's presentation choice MUST be preserved: a declaration linking a
   themed explanation keeps its theme by URL or manifest reference (see URL
   semantics and canonicalisation).
10. The engine MUST expose a stable, versioned API for generators and the
    linter (see generator pipeline and conformance linter), so packs are
    validated before publication.

### 5.3 Data model

```
{
  "packId": "opaque identifier",
  "version": "integer",
  "hash": "sha256 over pack assets",
  "languages": [ "ISO 639..." ],
  "accessibility": { "contrast": "AA", "reducedMotion": true, "notes": "..." },
  "conformanceChecked": "ISO-8601",
  "assets": [ "styles.css", "flavour.json", "fonts..." ]
}
```

### 5.4 Interfaces and behaviours

- The engine reads canonical content plus the chosen pack manifest and
  renders; pack selection travels in the URL or a documented default.
- The linter validates packs against the hooks contract before they enter the
  gallery.
- Mirror copies of a themed page reproduce identically because all assets are
  local.

### 5.5 Lifecycle and operational rules

- Pack versions are permanent; a pack change is a new version announced in
  the changelog.
- A pack that loses conformance is flagged in the gallery with per-theme
  conformance notes, and its pages fall back to the neutral route until
  fixed.

## 6. Free floor, red lines, and invariants

The engine and the public pack collection are free-floor commons: rendering
and browsing cost nothing and work offline. Flavour never changes meaning
(invariant 3), pages stay file://-safe and mirrorable (invariant 4), and no
silent change applies to both content and packs (invariant 5). The engine is
the mechanism that keeps "one normative specification, many presentations"
true at scale.

## 7. Relationships to sibling specifications

- [Conformance linter](conformance-linter-dsh.md) turns this contract into
  checkable rules.
- [Theme builder and starter kit](theme-builder-and-starter-kit-dsh.md) makes
  packs creatable without copying whole pages.
- [Per-theme conformance notes](per-theme-conformance-notes-dsh.md) document
  each pack's standing.
- [Flavour-text localisation](flavour-text-localisation-dsh.md) governs the
  pack copy separately from normative text.
- [Generator pipeline](generator-pipeline-dsh.md) produces pages from
  canonical content plus packs.
- [Accessibility floor](accessibility-floor-dsh.md) is the minimum every pack
  renders above.
- [Surprise-me theme mode](surprise-me-theme-mode-dsh.md) selects among packs.
- [Theme gallery and community voting](theme-gallery-community-voting-dsh.md)
  hosts packs.
- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md)
  owns the canonical content hashes.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md)
  distributes engine and packs.

## 8. Resolution of the seed's "before implementation" concerns

- **Preserve old URLs** — section 5.2 item 6: legacy pages remain valid
  frozen instances.
- **Offline use** — section 5.2 item 5: file://-safe, no remote dependencies.
- **Signer choice** — section 5.2 item 9: presentation choice preserved by
  URL or manifest reference.
- **Accessibility** — section 5.2 item 7 plus the accessibility floor: packs
  render above the floor, fallback to the neutral route.
- **Content hashes** — section 5.2 items 2 and 8: pack and content hashes,
  verifiable by the linter and checker.
- **Theme isolation** — section 5.2 items 1 and 4: meaning is engine
  property; flavour is isolated.
- **Graceful fallback** — section 5.2 item 7: neutral route with visible
  notice.
- **The invariant that flavour never changes normative meaning** — section
  5.2 item 4: normative text always from canonical data.

## 9. Acceptance criteria

1. Rendering any pack produces byte-identical normative text.
2. A pack manifest is required for gallery publication and carries its hash.
3. The engine runs from `file://` with no fetch or build step.
4. A broken pack falls back to the neutral route with a visible notice.
5. Legacy pages remain byte-identical or show a recorded version change.
6. The linter validates packs against the hooks contract.
7. A signer's themed link keeps its theme without an account.
8. Pack versions are announced in the changelog.

## 10. Open questions

- Whether pack manifests should be signed, and by which keys (jointly with
  continuity and namespace custody).
- The engine's initial scope: single-page runtime versus a small build step
  that still emits file://-safe pages.
