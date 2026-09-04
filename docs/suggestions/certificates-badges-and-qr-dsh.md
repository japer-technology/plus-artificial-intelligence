# Certificates, Badges, and QR — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`certificates-badges-and-qr.md`](certificates-badges-and-qr.md).
> **Catalogue group:** Artifacts and trust.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the exportable, visible references to a live +AI
declaration: printable certificates, compact badges, and QR codes for reports,
packaging, events, education, and offline archives. These exports are pointers,
not proofs — their only claim is "a declaration exists at this address, and it
said this when it was issued" — and they must say so, visibly, including that
a static export can go stale or be revoked.

## 2. Placement and boundaries

This specification sits in the "Artifacts and trust" group and owns the
*export formats and their honesty rules*. It does not own the declaration they
point to (see [Portable declaration schema](portable-declaration-schema-dsh.md)
and [Artifact passports](artifact-passports-dsh.md)), its status (see
[Declaration lifecycle](declaration-lifecycle-dsh.md)), or the mark's brand
rules (see [Licensing and mark policy](licensing-and-mark-policy-dsh.md)).
It honours the free floor: exports for genuine use are free to generate, and
paid printing or fulfilment is an optional convenience that changes nothing
about what an export claims.

## 3. Terminology

- **Export** — a static artifact (certificate, badge, QR) referencing a live
  declaration.
- **Status page** — the canonical passport or declaration page the export
  links to.
- **Stale export** — an export whose referenced declaration has since been
  superseded, revoked, or changed.
- **Honest copy-resistance** — measures that deter casual copying without
  pretending a static image can be secure.

## 4. Scope

### 4.1 In scope

- Certificate, badge, and QR formats.
- Required honesty content: issue date, status address, staleness warning.
- Accessibility of exports.
- Honest copy-resistance rules.

### 4.2 Out of scope and deferred

- The declaration record and status mechanics (their owning specifications).
- Branding and logo policy (licensing and mark policy).
- Physical production and fulfilment (multi-format distribution kit,
  publications and merchandise).

## 5. Specification

### 5.1 Design goals and principles

1. **Pointers, not proofs.** Exports reference; the live page answers.
2. **Dated honesty.** Every export carries its issue date and the declaration
   identifier it references.
3. **Staleness is stated.** Every export warns that the live status may have
   changed.
4. **Accessible by default.** Exports work in print, monochrome, and screen
   readers.

### 5.2 Normative requirements

1. Every export MUST carry: the declaration identifier, the stable status-page
   URL, the issue date of the export, and the statement "This export is a
   reference to a live declaration. Its status may have changed — check the
   address."
2. A QR export MUST encode the status-page URL directly (no tracking
   redirect), MUST be scannable at a documented minimum size, and MUST be
   accompanied by the same URL in visible text.
3. A badge export MUST render at small sizes (favicon to banner) in colour and
   monochrome, with text fallback for screen readers, and MUST NOT animate,
   track, or fetch content when displayed.
4. A certificate export MUST be printable on A4 and letter, monochrome-safe,
   and MUST include the mark, the declaration identifier, the issue date, the
   status URL, and the staleness statement.
5. Exports MUST NOT claim validity, certification, or endorsement; wording
   MUST follow public usage guidelines and the mark policy.
6. Exports MUST NOT be copy-protected in ways that are dishonest (DRM,
   blockchain, biometrics); watermarks and serial numbers MAY be used only as
   visible provenance aids, never as security.
7. An export referencing a superseded declaration MUST state "superseded" with
   the successor reference; one referencing a revoked declaration MUST state
   "revoked" — exports MUST NOT silently present old status as current.
8. Export generation MUST be available through the no-account builder and
   MUST work offline from the offline and self-hosting pack.
9. Exports MUST NOT require the viewer to run scripts to read the core
   information.
10. Batch export for organisations MAY be a paid convenience but MUST produce
    the same formats as the free path.

### 5.3 Data model

```
{
  "exportType": "certificate | badge | qr",
  "declarationId": "...",
  "statusUrl": "stable URL",
  "issued": "ISO-8601",
  "statusAtIssue": "active | superseded | revoked",
  "variant": "colour | monochrome",
  "size": "for badges and QR"
}
```

### 5.4 Interfaces and behaviours

- The builder renders exports locally; hosted generation is optional.
- Badges embed as static images or inline SVG with text fallback; no
  telemetry.
- QR targets open the status page directly; checkers accept QR as a
  declaration reference (see verification checker).

### 5.5 Lifecycle and operational rules

- Exports are never edited after generation; a stale export is replaced by a
  newly generated one, never silently rewritten.
- The status page remains the single source of truth; exports cache nothing
  about status beyond `statusAtIssue`.

## 6. Free floor, red lines, and invariants

Export generation for genuine use is part of the free floor and must work
offline and without an account. The honesty rules implement the
no-silent-change invariant at the export level, and the prohibition on DRM and
biometrics keeps the red lines intact. Exports must never imply certification —
that boundary protects the ordinary mark from becoming a paid credential.

## 7. Relationships to sibling specifications

- [Artifact passports](artifact-passports-dsh.md) is the live resource exports
  point to.
- [Portable declaration schema](portable-declaration-schema-dsh.md) supplies
  the declaration identifier.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) supplies status and
  supersession facts exports must state.
- [Verification checker](verification-checker-dsh.md) accepts QR targets as
  declaration references.
- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) and [Public
  usage guidelines](public-usage-guidelines-dsh.md) govern wording and brand.
- [Multi-format distribution kit](multi-format-distribution-kit-dsh.md) owns
  the wider format set these exports belong to.
- [No-account declaration builder](no-account-declaration-builder-dsh.md)
  generates exports locally.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md)
  distributes the generators.
- [Independent assurance and certification](independent-assurance-and-certification-dsh.md)
  is explicitly not what these exports are — exports never certify.

## 8. Resolution of the seed's "before implementation" concerns

- **Accessible exports** — section 5.2 items 2-4 and 9: text fallback,
  monochrome, no scripts required.
- **Copy-resistant only in honest ways** — section 5.2 item 6: watermarks as
  provenance aids; no DRM or biometrics.
- **Visibly dated** — section 5.2 item 1: issue date on every export.
- **Clear that a static artifact may become stale or be revoked** — section
  5.2 items 1 and 7: the mandatory staleness statement and superseded/revoked
  rendering.

## 9. Acceptance criteria

1. Every export carries identifier, status URL, issue date, and staleness
   statement.
2. A QR encodes the bare status URL and the URL appears in visible text.
3. A badge renders in monochrome with screen-reader text and no scripts.
4. A certificate prints monochrome-safe on A4 and letter.
5. No export claims validity, certification, or endorsement.
6. An export of a superseded declaration states "superseded" with the
   successor.
7. The no-account builder generates all export types offline.
8. No export uses DRM or biometric copy protection.

## 10. Open questions

- Whether QR exports should include the declaration identifier as a second
  encoding for offline checker use, and the format for it.
