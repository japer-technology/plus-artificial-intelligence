# Theme Builder and Starter Kit — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`theme-builder-and-starter-kit.md`](theme-builder-and-starter-kit.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the theme builder and starter kit: an accessible
builder, documented tokens, starter files, preview tools, and conformance
checks so contributors can create themes without copying an entire page or
breaking the required hooks. Its purpose is to make the project's visual
diversity sustainable — the barrier to a new theme should be creativity, not
the 2,000-line clone that invites drift.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns the *creation experience*. It does not own the
rendering contract (see [Theme engine and packs](theme-engine-and-packs-dsh.md)),
the checks (see [Conformance linter](conformance-linter-dsh.md)), the gallery
(see [Theme gallery and community voting](theme-gallery-community-voting-dsh.md)),
or commissioned themes (see [Custom themes](custom-themes-dsh.md)). It honours
the static-first invariant: the builder outputs the same file://-safe packs
the engine consumes, and hand-authored themes remain first-class.

## 3. Terminology

- **Builder** — the interactive tool that assembles a theme pack.
- **Starter kit** — the minimal set of files a contributor copies to begin.
- **Token** — a named design value (colour, spacing, type) themes override.
- **Safe customization boundary** — the set of changes a pack may make
  without breaking meaning or the hooks.
- **Preview** — the local, offline rendering of the pack against canonical
  content during editing.

## 4. Scope

### 4.1 In scope

- The builder's required capabilities and accessibility.
- The starter kit contents and the token model.
- Safe customization boundaries.
- Packaging, submission, licensing, and compatibility.
- Maintenance of the builder itself.

### 4.2 Out of scope and deferred

- The hooks contract details (theme engine and packs, conformance linter).
- Gallery voting and discovery (theme gallery and community voting).
- Paid bespoke work (custom themes).

## 5. Specification

### 5.1 Design goals and principles

1. **Creativity over plumbing.** Contributors edit tokens and copy; the kit
   supplies the contract.
2. **Boundaries visible.** The builder shows what may change and what may
   not, before the contributor breaks it.
3. **Offline and accessible.** The builder works from `file://` and meets the
   accessibility floor itself.
4. **Output identical in kind.** Builder output and hand-authored packs are
   indistinguishable to the engine.

### 5.2 Normative requirements

1. The starter kit MUST contain: the pack manifest template, the token file,
   the flavour-text file, the neutral fallback reference, a README with the
   safe-customization boundaries, and the conformance check instructions.
2. The builder MUST be usable keyboard-only and meet the accessibility floor;
   it MUST run locally with no account and no upload.
3. The builder MUST enforce the safe customization boundaries at edit time:
   changes to normative text MUST be blocked, and changes to the required
   hooks MUST produce immediate errors (the linter's rules embedded live).
4. The token model MUST cover colour, spacing, typography, motion, and print
   tokens, each with a documented default; undocumented raw CSS overrides
   MUST be flagged as advice (never errors) where the contract permits.
5. The preview MUST render the pack against the canonical content offline,
   including the neutral fallback comparison view.
6. The builder MUST run the conformance linter on save and show the full
   report; a pack failing error rules MUST NOT be packaged.
7. Packaging MUST produce the pack structure defined by the theme engine and
   packs, with the manifest, hash, and the conformance note draft included.
8. Submission review MUST follow the gallery's rules (see theme gallery and
   community voting); the builder MUST NOT submit without the contributor's
   explicit action.
9. Licensing MUST default to the project's contribution terms (see licensing
   and mark policy), stated in the kit's README and in the packaging step.
10. Translations MUST flow through the translation governance paths; the
    builder MUST NOT bundle unreviewed machine translations of normative text.
11. The builder's own maintenance MUST be owned by a named maintainer group,
    and builder releases MUST be versioned and announced in the changelog.
12. The builder MUST work with the offline and self-hosting pack so creation
    is possible without the hosted service.

### 5.3 Data model

```
{
  "kitVersion": "integer",
  "tokens": { "colour": { "background": "#...", "text": "#...", "accent": "#..." },
              "spacing": { "unit": "0.5rem" }, "type": { "family": "...", "scale": "..." },
              "motion": { "respectReducedMotion": true }, "print": { "monochrome": true } },
  "safeBoundaries": { "editable": [ "tokens", "flavour", "optional styles" ],
                      "blocked": [ "normative text", "required hooks" ] },
  "pack": { "manifest": "...", "hash": "...", "conformanceNote": "draft" }
}
```

### 5.4 Interfaces and behaviours

- The builder opens a starter kit, edits tokens and flavour, previews
  against canonical content, lints on save, and packages.
- Comparison view toggles between the pack preview and the neutral route so
  contributors see exactly what they changed.
- Packaging requires the licensing confirmation and names the pack's
  languages per its flavour and translation status.

### 5.5 Lifecycle and operational rules

- Kit and builder versions are released together with the engine contract;
  a contract change ships with an updated kit and migration notes.
- Packs built with an older kit remain valid per their manifest version (see
  theme engine and packs).

## 6. Free floor, red lines, and invariants

The builder and kit are free-floor commons: creating a theme costs nothing
and needs no account. The blocked-boundary rule implements the invariant that
flavour never changes normative meaning at the tool level, and the local,
offline operation preserves the static-first invariant.

## 7. Relationships to sibling specifications

- [Theme engine and packs](theme-engine-and-packs-dsh.md) owns the pack
  structure the builder emits.
- [Conformance linter](conformance-linter-dsh.md) supplies the embedded live
  rules.
- [Flavour-text localisation](flavour-text-localisation-dsh.md) governs the
  flavour file's status.
- [Translation governance](translation-governance-dsh.md) owns normative
  translation flows the builder must not bypass.
- [Theme gallery and community voting](theme-gallery-community-voting-dsh.md)
  owns submission review.
- [Per-theme conformance notes](per-theme-conformance-notes-dsh.md) is the
  note draft the packaging step produces.
- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) owns the
  contribution terms.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md)
  distributes the kit.
- [Custom themes](custom-themes-dsh.md) is the paid bespoke path that may
  use the same kit.
- [Accessibility floor](accessibility-floor-dsh.md) applies to the builder
  itself.

## 8. Resolution of the seed's "before implementation" concerns

- **Accessible builder** — section 5.2 item 2: keyboard-only, floor
  conformant, local.
- **Documented tokens** — section 5.2 item 4: named token model with
  documented defaults.
- **Starter files** — section 5.2 item 1: the complete kit contents.
- **Preview tools** — section 5.2 item 5: offline preview with neutral
  comparison.
- **Conformance checks** — section 5.2 item 6: linter on save, packaging
  blocked on errors.
- **Safe customization boundaries** — section 5.2 item 3: blocked normative
  text and hooks, flagged raw overrides.
- **Packaging** — section 5.2 item 7: engine pack structure with manifest,
  hash, and note draft.
- **Submission review** — section 5.2 item 8: explicit action into the
  gallery's review process.
- **Licensing** — section 5.2 item 9: default contribution terms confirmed at
  packaging.
- **Translations** — section 5.2 item 10: governance paths only.
- **Security** — sections 5.2 items 3 and 6: boundaries enforced live; no
  remote dependencies (item 2).
- **Compatibility** — section 5.5: older kits stay valid per manifest
  version.
- **Who maintains the generator** — section 5.2 item 11: named maintainer
  group, versioned releases.

## 9. Acceptance criteria

1. A contributor creates a conformant pack from the kit without copying a
   full page.
2. The builder blocks edits to normative text and required hooks with
   immediate errors.
3. The builder runs keyboard-only and offline.
4. The preview renders against canonical content with the neutral
   comparison.
5. Packaging is blocked while error rules fail.
6. Packaging confirms licensing before completion.
7. A pack built with an older kit remains valid per its manifest.
8. Builder releases appear in the changelog.

## 10. Open questions

- Whether the builder should also scaffold the per-theme conformance note
  reviewed-claims checklist for the maintainer's human assessment.
