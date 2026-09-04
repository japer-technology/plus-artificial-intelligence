# Email Signature Kit — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`email-signature-kit.md`](email-signature-kit.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the email signature kit: a generator and guidance set that produces accessible plain-text and HTML signatures of the form `Name +AI`, optionally linked to a concise explanation or declaration, with setup instructions for common mail clients and an optional badge. A signature is a visible disclosure of responsibility — "AI helped. I take responsibility." — attached to mail the signer sends. It is presentation of the mark, never a proof, and never the only place the mark appears on the artifact it accompanies.

## 2. Placement and boundaries

The signature kit sits in the "Email, distribution, presentation, and inclusion" group and owns *signature generation and guidance*. It does not own the mark's meaning (the normative specification), the record format a signature may link to ([Portable declaration schema](portable-declaration-schema-dsh.md)), badge and QR export semantics ([Certificates, badges, and QR](certificates-badges-and-qr-dsh.md)), the reusable in-page mark ([Reusable +AI web component](plus-ai-web-component-dsh.md)), the supplementary machine-readable header ([Email metadata](email-metadata-dsh.md)), or the optional disclosure address ([Plus-addressing convention](plus-addressing-convention-dsh.md)). It honours the free floor: generating a signature must cost nothing and require no account.

## 3. Terminology

- **Signature** — the visible block a signer appends to mail: name, mark, optional link, optional badge.
- **Plain-text form** — the canonical signature: characters only, no markup, no images.
- **HTML form** — an enhanced rendering of the same information; must degrade to the plain-text form.
- **Badge** — a small static image or inline SVG that restates the mark and links to an explanation or declaration; not a trust seal.
- **Tracking-free link** — a direct URL to a stable page with no redirect, no query-string tracking parameters, and no third-party pixels.

## 4. Scope

### 4.1 In scope

- The canonical plain-text signature and the HTML enhancement.
- Link policy and the optional badge.
- Client-specific setup guidance and fallback behaviour.
- International-name handling and accessibility of every emitted form.

### 4.2 Out of scope and deferred

- The declaration record a signature may link to (portable declaration schema).
- Badge and QR format semantics (certificates, badges, and QR).
- The machine-readable email header (email metadata).
- Brand and logo rules (licensing and mark policy).
- The in-page mark component (plus-ai-web-component seed).

## 5. Specification

### 5.1 Design goals and principles

1. **Plain text is the floor.** Every capability must be conveyed by characters alone; HTML and images are enhancements.
2. **Visible first, machine later.** The signature is human-readable disclosure; any metadata is a supplement (email metadata).
3. **No tracking.** Signatures carry no pixels, no beacons, no tracking parameters.
4. **Names are respected.** A signer's name renders exactly as they write it.
5. **Degrades gracefully.** Blocked images and rewritten HTML must never remove the meaning.

### 5.2 Normative requirements

1. The canonical signature MUST be plain text of the form `Name +AI`, where `Name` is the signer's chosen name or pseudonym and `+AI` is the mark; the kit MUST NOT alter, transliterate, or normalise the name.
2. The plain-text signature MAY add at most one link line containing the full, visible URL (e.g. `https://…`) to a concise explanation or the signer's declaration; the URL MUST be written out so it survives as text.
3. The HTML signature MUST carry the same name, mark, and link as the plain-text form, MUST include a plain-text alternative for clients that block HTML, and MUST NOT rely on images to convey the name, mark, or link.
4. No emitted signature MAY contain a tracking pixel, web beacon, remote image fetch, or redirect/tracking URL; links MUST be direct, `https`, and free of query parameters used for tracking.
5. An optional badge MUST be a static image or inline SVG that restates the mark, MUST carry alternative text for screen readers, and MUST NOT fetch or run anything when displayed; badge semantics defer to [Certificates, badges, and QR](certificates-badges-and-qr-dsh.md).
6. Every signature MUST meet the [Accessibility floor](accessibility-floor-dsh.md): the plain-text form must be legible to screen readers, and any colour in the HTML or badge form MUST be redundant with text.
7. Setup guidance MUST cover the common clients and MUST state, per client, what happens when images are blocked or HTML is rewritten, with the plain-text form as the documented fallback.
8. The kit MUST be usable offline and from `file://`, per the static-first invariant, and MUST require no account or payment.
9. Wording in signatures MUST follow [Public usage guidelines](public-usage-guidelines-dsh.md) and [Licensing and mark policy](licensing-and-mark-policy-dsh.md); a signature MUST NOT imply certification, endorsement, or verification.
10. A signature is disclosure of responsibility, not proof: where a signer also uses a metadata header or plus-address, the signature remains the visible disclosure those supplements never replace.

### 5.3 Data model

Not applicable — the kit defines presentation templates, not new data structures. The one structured input is the signer's chosen display name and optional link URL, both ordinary strings.

### 5.4 Interfaces and behaviours

- A generator emits, from a name and optional link: the plain-text signature, the HTML signature, and the optional badge, plus per-client setup snippets.
- The generator runs locally (browser or CLI); hosted generation, if any, is optional and MUST NOT differ from the local output.

### 5.5 Lifecycle and operational rules

Not applicable — see the sibling specifications that own lifecycle rules. A signature's linked declaration changes status per [Declaration lifecycle](declaration-lifecycle-dsh.md); a static signature MUST NOT silently restate an old status (a reader follows the link to the live record).

## 6. Free floor, red lines, and invariants

Generating and using a signature is part of the free floor and must never require payment, registration, or an account. The no-tracking requirement implements the covert-tracking red line; the plain-text-first rule keeps meaning intact under image blocking and client rewriting (the "one normative specification, many presentations" invariant); and the wording rules keep the mark from drifting into a certificate or warning label. No paid tier may offer a "better" signature that the free path cannot produce identically.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the declaration a signature may link to.
- [Certificates, badges, and QR](certificates-badges-and-qr-dsh.md) owns badge and QR export semantics this kit consumes.
- [Email metadata](email-metadata-dsh.md) defines the machine-readable header that supplements, never replaces, this signature.
- [Plus-addressing convention](plus-addressing-convention-dsh.md) defines the optional visible disclosure address the signature may sit beside.
- [Accessibility floor](accessibility-floor-dsh.md) is the accessibility contract every signature meets.
- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) and [Public usage guidelines](public-usage-guidelines-dsh.md) govern brand and wording.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) governs the status of any linked declaration.
- [Reusable +AI web component](plus-ai-web-component-dsh.md) is the in-page counterpart; the signature kit is email-specific.

## 8. Resolution of the seed's "before implementation" concerns

- **Accessibility** — section 5.2 item 6 and the accessibility floor: plain-text legibility, redundant colour, alt text.
- **Image blocking** — section 5.2 items 3 and 7: HTML carries a plain-text alternative; images never convey the meaning alone.
- **Client rewriting** — section 5.2 items 2–3 and 7: the URL is written out; the plain-text form is the documented fallback.
- **Tracking-free links** — section 5.2 item 4: direct `https`, no pixels, no tracking parameters.
- **International names** — section 5.2 item 1: names render exactly as written, never transliterated.
- **Mobile clients** — section 5.2 item 7: setup guidance covers mobile clients and their image-blocking behaviour.
- **Graceful plain-text fallback** — sections 5.1 principle 1 and 5.2 items 2–3: plain text is the floor and the fallback.

## 9. Acceptance criteria

1. The plain-text signature is exactly `Name +AI` with the name unaltered.
2. The link URL appears in full as visible text in both forms.
3. Blocking images in any client leaves the name, mark, and link fully readable.
4. No signature emits a tracking pixel, beacon, or tracking parameter.
5. A screen reader announces the badge's meaning via alternative text.
6. The generator runs from `file://` with no account and no network call.
7. No signature wording implies certification, endorsement, or verification.
8. Setup guidance documents the fallback behaviour for at least one desktop and one mobile client.
9. The HTML and plain-text forms carry identical name, mark, and link.

## 10. Open questions

- Whether the optional badge should default to inline SVG, PNG, or both, and the documented minimum legible size.
- The exact list of mail clients the first guidance release must cover.
