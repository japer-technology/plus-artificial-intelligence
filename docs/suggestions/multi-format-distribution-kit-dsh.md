# Multi-Format Distribution Kit — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`multi-format-distribution-kit.md`](multi-format-distribution-kit.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the multi-format distribution kit: the set of ready-to-use formats — plain text, linked names, HTML, Markdown, SVG/PNG badges, monochrome print, QR, document footers, slides, captions, packaging references, social cards, and short/long copy — through which the mark and its explanation are distributed. Its purpose is one normative meaning rendered faithfully in many presentations, each accessible, offline-usable, and meaning-preserving.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and inclusion" group and owns *the format set and the per-format meaning-preservation contract*. It does not own the meaning itself (the normative specification), the brand rules ([Licensing and mark policy](licensing-and-mark-policy-dsh.md)), accessibility ([Accessibility floor](accessibility-floor-dsh.md)), badge/QR export semantics ([Certificates, badges, and QR](certificates-badges-and-qr-dsh.md)), or the offline archive ([Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md)). It honours the "one normative specification, many presentations" invariant as its reason for existing.

## 3. Terminology

- **Format** — one concrete rendering of the mark and explanation (plain text, SVG, print, …).
- **Canonical wording** — the short and long copy drawn from the normative specification; the meaning-bearing text.
- **Flavour text** — optional, non-normative presentation copy that must never change meaning.
- **Meaning-preservation test** — a check that a format renders the canonical wording intact and adds no false meaning.
- **Version link** — a pointer to the current published specification version and its fingerprint.

## 4. Scope

### 4.1 In scope

- The format catalogue and the required canonical wording per format.
- Accessibility, monochrome, export sizes, and offline behaviour per format.
- Version links and the meaning-preservation test for every format.

### 4.2 Out of scope and deferred

- Brand and logo policy (licensing and mark policy).
- Badge/QR honesty rules (certificates, badges, and QR).
- Theme styling ([Theme engine and packs](theme-engine-and-packs-dsh.md)).
- The offline archive packaging ([Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md)).

## 5. Specification

### 5.1 Design goals and principles

1. **Meaning first.** Every format carries the canonical wording; flavour text is decoration.
2. **Degrades to text.** Any format that fails to render must fall back to plain text without losing meaning.
3. **Accessible by default.** Every format meets the accessibility floor, including monochrome print.
4. **Small and static.** Formats are `file://`-safe, mirrorable, and carry no required infrastructure.
5. **Tested for drift.** No format ships without a meaning-preservation test.

### 5.2 Normative requirements

1. The kit MUST provide at least the following formats: plain text, a linked name, HTML, Markdown, SVG and PNG badges, monochrome print, QR, a document footer, a slide, a caption, a packaging reference, a social card, and accessible short and long copy.
2. The canonical short copy MUST be the normative statement "AI helped. I take responsibility." and the long copy MUST reproduce the normative explanation without paraphrase; flavour text MUST be clearly separated and MUST NOT change meaning (see [Flavour-text localisation](flavour-text-localisation-dsh.md) and [Public usage guidelines](public-usage-guidelines-dsh.md)).
3. Every format MUST carry a version link to the current published specification version, including its short fingerprint per [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md); a format MUST NOT state a version it was not generated against.
4. Every format MUST preserve meaning: a meaning-preservation test MUST compare each format's rendered canonical wording against the source wording, and a format that fails MUST NOT ship.
5. Text-bearing formats (plain text, Markdown, HTML, footer, caption, slide) MUST carry the canonical wording in a screen-reader-accessible form, with colour and imagery redundant, per [Accessibility floor](accessibility-floor-dsh.md).
6. Image formats (SVG, PNG, social card, packaging) MUST carry alternative text or an adjacent text equivalent, MUST be monochrome-safe (legible in a single ink), and SVG MUST be preferred over PNG where scalability matters.
7. The QR format MUST encode the bare destination URL and MUST be accompanied by the same URL in visible text; QR semantics defer to [Certificates, badges, and QR](certificates-badges-and-qr-dsh.md).
8. Export sizes MUST be bounded and documented per format (file bytes for images, character counts for text), and no format MAY require a network fetch to render its core meaning.
9. Offline behaviour MUST follow [Static-first service architecture](static-first-service-architecture-dsh.md): every format opens from `file://` with no build step, no fetch, and no account.
10. Brand rules MUST defer to [Licensing and mark policy](licensing-and-mark-policy-dsh.md): no format MAY imply certification, endorsement, or a trust mark, and the project name/logo use follows the mark policy.

### 5.3 Data model

```
{
  "format": "plain-text | linked-name | html | markdown | svg | png | print | qr | footer | slide | caption | packaging | social-card | short-copy | long-copy",
  "canonicalWording": "the exact meaning-bearing text used",
  "specVersion": "the published version the format was generated against",
  "specFingerprint": "short hash from specification versioning and hashing",
  "altText": "required for image formats",
  "monochromeSafe": true,
  "sizeBytes": "documented bound"
}
```

### 5.4 Interfaces and behaviours

- A generator (offline, part of the commons) produces the format set from the canonical wording and the current version; hosted generation, if any, MUST emit identical output.
- A per-format conformance note records the meaning-preservation test result and any accessibility limitations, following the per-theme conformance notes pattern.

### 5.5 Lifecycle and operational rules

- Formats are regenerated, never hand-edited, when the specification version changes; a regenerated format MUST update its version link and fingerprint.
- A format whose canonical wording changes MUST be re-tested before re-publication (no silent change).

## 6. Free floor, red lines, and invariants

The kit is a free-floor commons: every format is free to generate, use, and mirror, with no account or payment, and no paid tier may offer a "more meaningful" format. The meaning-preservation test implements the "one normative specification, many presentations" invariant, and the no-certification rule plus brand deferral implements the red line against turning the mark into a certificate. The offline requirement keeps the kit `file://`-safe and mirrorable.

## 7. Relationships to sibling specifications

- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) owns brand rules and licences the formats.
- [Accessibility floor](accessibility-floor-dsh.md) is the accessibility contract every format meets.
- [Certificates, badges, and QR](certificates-badges-and-qr-dsh.md) owns the badge and QR export honesty rules this kit's badge/QR must follow.
- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md) supplies the version link and fingerprint.
- [Static-first service architecture](static-first-service-architecture-dsh.md) owns the offline/`file://` obligations.
- [Public usage guidelines](public-usage-guidelines-dsh.md) governs the canonical and flavour wording.
- [Flavour-text localisation](flavour-text-localisation-dsh.md) governs optional non-normative copy.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md) distributes the kit in the offline archive.
- [Email signature kit](email-signature-kit-dsh.md) is one consumer of the plain-text and badge formats.

## 8. Resolution of the seed's "before implementation" concerns

- **Canonical wording** — section 5.2 item 2: normative short and long copy, flavour separated.
- **Accessibility** — section 5.2 items 5–6: screen-reader forms, alt text, redundant colour.
- **Export sizes** — section 5.2 item 8: bounded and documented per format.
- **Version links** — section 5.2 item 3 and 5.5: every format links the version and fingerprint it was generated against.
- **Brand rules** — section 5.2 item 10: deferred to licensing and mark policy.
- **Offline behaviour** — section 5.2 item 9: `file://`-safe, no fetch, no account.
- **Tests that every format preserves meaning** — section 5.2 item 4 and 5.4: the meaning-preservation test gates shipment.

## 9. Acceptance criteria

1. The full format catalogue (the formats named in 5.2 item 1) exists.
2. The canonical short copy is "AI helped. I take responsibility." in every text-bearing format.
3. Every format carries the version link and fingerprint it was generated against.
4. Every image format is monochrome-safe and carries alt text or an adjacent text equivalent.
5. The QR encodes the bare URL and shows it in visible text.
6. Every format renders from `file://` with no network fetch and no account.
7. No format implies certification, endorsement, or a trust mark.
8. A meaning-preservation test runs per format and a failing format cannot ship.
9. Export sizes are documented and within their bounds.
10. Regeneration on a version change updates the version link and fingerprint.

## 10. Open questions

- The exact size bounds per format, to be fixed with accessibility and bandwidth testing.
- Whether the social-card and packaging formats require a separate brand-review step, is undecided.
