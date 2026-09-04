# Publications and Merchandise — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`publications-and-merchandise.md`](publications-and-merchandise.md).
> **Catalogue group:** Funding and optional services.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines the optional publications and merchandise line: essays, a book, posters, stickers, decals, and other physical artifacts that spread and fund the idea while the complete online meaning stays free. Its purpose is to let people carry the mark into the physical world — and to fund stewardship — without ever letting a purchase confer legitimacy, rank, or signer status.

## 2. Placement and boundaries
Goods are presentations of the idea, so they are governed by the "one normative specification, many presentations" invariant: physical and print artifacts carry the canonical meaning and must not alter it, deferring wording discipline to [Multi-format distribution kit](multi-format-distribution-kit-dsh.md). Design rights and licences defer to [Licensing and mark policy](licensing-and-mark-policy-dsh.md), which owns the project name and visual identity while never claiming the `+AI` notation. A storefront is a hosted service, so it must carry the failure-mode statement of [Static-first service architecture](static-first-service-architecture-dsh.md).

## 3. Terminology
- **Publication** — a text artifact (essay, book, zine) that retells the idea or its origin story.
- **Merchandise** — physical artifacts (posters, stickers, decals, and similar) bearing the mark or its explanation.
- **Design right** — the ownership and licence terms of an original visual design.
- **Fulfilment** — production, packing, shipping, returns, and customer support for a physical order.
- **Signer status** — a person's standing as someone who takes responsibility; a purchase never grants or changes it.

## 4. Scope
### 4.1 In scope
- Design rights and licences.
- Production ethics and environmental impact.
- Fulfilment and accessibility.
- Pricing transparency.
- Separation from signer status and meaning integrity.

### 4.2 Out of scope and deferred
- The mark policy and brand rules themselves (licensing and mark policy).
- Badge/QR honesty (certificates, badges, and QR).
- The format catalogue and meaning-preservation tests (multi-format distribution kit).
- Legal review of licences (a precondition owned by licensing and mark policy).

## 5. Specification
### 5.1 Design goals and principles
1. **Meaning is never for sale.** The online meaning and every download stay free; a purchase buys a physical object, not access or status.
2. **Meaning-preserving.** No publication or product may reword the canonical meaning; flavour text stays clearly presentation.
3. **Owned and licensed clearly.** Every design carries explicit rights and a licence.
4. **Ethically and environmentally produced.** Production choices are disclosed, not hidden.
5. **A shirt is not a credential.** Merchandise never confers legitimacy, rank, or signer status.

### 5.2 Normative requirements
1. Design rights MUST be explicit: every publication and product MUST state its author/designer and its licence, deferring to [Licensing and mark policy](licensing-and-mark-policy-dsh.md), and MUST NOT claim ownership of or rights over the `+AI` notation itself, which anyone may use without permission.
2. Licences MUST be carried on or with the product: the applicable licence identifier and, where a work is redistributable, its terms; text publications MUST follow the specification-text licence, and no licence MAY imply endorsement, certification, or a trust mark (RL-1, RL-4).
3. Meaning integrity MUST be enforced: the canonical short copy "AI helped. I take responsibility." and the canonical explanation MUST be reproduced without paraphrase wherever the mark is explained, per the meaning-preservation test of multi-format distribution kit; flavour text MUST NOT alter meaning (invariant 3).
4. Production ethics MUST be published: the supply chain (who makes the goods), the labour conditions asserted, and the certifications or evidence for those claims; unsupported ethical claims MUST NOT be made.
5. Environmental impact MUST be disclosed per product line: materials, packaging, and a shipping-footprint estimate, with a preference for durable, recyclable, and low-waste options; the disclosure MUST be honest about what is measured versus estimated.
6. Fulfilment MUST be transparent and accessible: published shipping costs, delivery estimates, a returns/refunds policy, and an accessible non-store order path (for example by email) for buyers who cannot use the storefront; every publication MUST have a digital, screen-reader-accessible equivalent that is free.
7. Pricing transparency MUST state the price, what it covers (production, margin to stewardship, shipping), and the margin split where feasible, reported consistently with [Financial transparency](financial-transparency-dsh.md).
8. Separation from signer status MUST be stated on the storefront and on product pages: buying merchandise confers no legitimacy, rank, permission, or signer status; a declaration is made by a person taking responsibility, never by owning a sticker.
9. The storefront MUST complete a privacy analysis and a threat model against [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) and [Security and abuse controls](security-and-abuse-controls-dsh.md) before launch, because it processes order data (names, addresses, payment).
10. The storefront MUST publish a failure-mode statement: if the store stops, the complete online meaning, all digital formats, and the offline pack MUST remain free and downloadable, per [Static-first service architecture](static-first-service-architecture-dsh.md) — physical goods are optional; the idea is not.
11. Physical products SHOULD reference the current published specification version and, where a QR is included, MUST follow the bare-URL-plus-visible-text rule of [Certificates, badges, and QR](certificates-badges-and-qr-dsh.md).
12. The book or essays MUST state that they are retellings and must not present themselves as the normative specification, whose current published version remains the meaning in force.

### 5.3 Data model
```
{
  "product": "identifier",
  "kind": "essay | book | poster | sticker | decal | other",
  "designer": "named author/designer",
  "licence": "licence identifier and terms reference",
  "production": { "supplyChain": "...", "ethicsEvidence": [ "..." ] },
  "environment": { "materials": "...", "packaging": "...", "shippingEstimate": "..." },
  "price": { "amount": "...", "covers": "...", "stewardshipMargin": "..." },
  "accessibilityNote": "digital equivalent and print accessibility"
}
```

### 5.4 Interfaces and behaviours
- Product pages render the meaning-integrity, no-status, and no-certification statements derived from the covenant, not hand-written.
- Every publication lists its free digital equivalent and the specification version it was generated against.
- The storefront offers a non-store order path for accessibility and for buyers without an account.

### 5.5 Lifecycle and operational rules
- Designs and publications are versioned; a reprint or revision is a new version with a changelog entry, never a silent edit (no silent change).
- Discontinued products leave a labelled "no longer produced" state without ever removing the free digital equivalents.
- Environmental and supply-chain disclosures are re-stated when production changes.

## 6. Free floor, red lines, and invariants
The free floor cited here is: the complete online meaning, the declaration builder, every digital format, and the offline pack stay free and account-free; merchandise and print are optional. This specification enforces RL-1 (the meaning is never sold), RL-4 (no paid placement or endorsement framing), and RL-9 (no merchandise-derived status or rank). The "one normative specification, many presentations" invariant is honoured by the meaning-preservation requirement, and the static-first invariant by the guarantee that the idea survives any storefront outage.

## 7. Relationships to sibling specifications
- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) — owns design rights, licences, and the mark policy these goods must follow.
- [Multi-format distribution kit](multi-format-distribution-kit-dsh.md) — owns the canonical wording and meaning-preservation test applied to print and products.
- [Certificates, badges, and QR](certificates-badges-and-qr-dsh.md) — owns the QR and badge honesty rules.
- [Accessibility floor](accessibility-floor-dsh.md) — owns the accessibility contract every digital equivalent meets.
- [Financial transparency](financial-transparency-dsh.md) — reports the revenue and the margin split this line discloses.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) and [Security and abuse controls](security-and-abuse-controls-dsh.md) — own the privacy analysis and threat model for the storefront.
- [Static-first service architecture](static-first-service-architecture-dsh.md) — owns the storefront's failure-mode statement.
- [Free-floor covenant](free-floor-covenant-dsh.md) and [Red lines and cautious extensions](red-lines-and-cautious-extensions-dsh.md) — bind this line's floor and prohibitions.

## 8. Resolution of the seed's "before implementation" concerns
- **Design rights** — 5.2 item 1 and 5.3: explicit designer and licence, with no claim over the notation.
- **Licences** — 5.2 item 2: carried on or with the product, never implying endorsement.
- **Production ethics** — 5.2 item 4: published supply chain and evidence; no unsupported claims.
- **Fulfilment** — 5.2 item 6: transparent shipping, returns, and an accessible non-store order path.
- **Accessibility** — 5.2 item 6 and 5.3: free digital, screen-reader-accessible equivalents.
- **Pricing transparency** — 5.2 item 7: price, coverage, and stewardship margin disclosed.
- **Environmental impact** — 5.2 item 5: materials, packaging, and shipping footprint disclosed honestly.
- **Separation from signer status** — 5.2 item 8: purchase confers no legitimacy, rank, permission, or signer status.

## 9. Acceptance criteria
1. Every product states its designer and licence and claims no rights over the `+AI` notation.
2. The canonical wording is reproduced without paraphrase wherever the mark is explained.
3. The storefront states that buying merchandise confers no legitimacy, rank, or signer status.
4. Production ethics and environmental impact are disclosed per product line without unsupported claims.
5. Shipping costs, returns, and a non-store order path are published.
6. Every publication has a free, screen-reader-accessible digital equivalent.
7. Pricing states the stewardship margin split.
8. The storefront publishes a privacy analysis, threat model, and failure-mode statement before launch.
9. If the store stops, the online meaning and all digital formats remain free and downloadable.

## 10. Open questions
- The initial product lines and whether print-on-demand versus stocked production is used, given the environmental trade-offs.
- The percentage margin directed to stewardship is undecided and should follow financial transparency's reporting structure.
