# Agent request — publications-and-merchandise: Publications and Merchandise

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../../09-funding-and-sustainability.md)
> **Source:** spec [`publications-and-merchandise-dsh.md`](../../../../suggestions/publications-and-merchandise-dsh.md) · seed [`publications-and-merchandise.md`](../../../../suggestions/publications-and-merchandise.md)
> **Effort:** M · **Phase:** P3/P4 · **Position:** THE-PLAN already demands posters/the book; the storefront follows the free kit
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Initial product lines and production method
- **Question:** What initial product lines and production method?
- **Options:** (a) print-on-demand first (posters, stickers, decals, book, essays) — lower waste, no stocked inventory, with environmental disclosure per line · (b) stocked production first · (c) digital-only first, physical later
- **Recommended:** (a) — spec §10 weighs print-on-demand vs stocked for environmental trade-offs; print-on-demand matches the "durable, recyclable, low-waste" preference and needs no warehousing.
- **Your choice:** ✏️

### D2 — Stewardship margin percentage
- **Question:** What percentage of the price is directed to stewardship?
- **Options:** (a) a stated percentage (e.g. 20%) reported consistently with financial-transparency, revisable per report · (b) "a disclosed margin" without a number · (c) all profit to stewardship
- **Recommended:** (a) — spec §5.2.7 requires the margin split disclosed where feasible and §10 leaves the number to follow financial-transparency's structure; a stated, revisable percentage is honest.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy).
2. Create `site/store.html` (versioned, file://-safe, mirrorable): the storefront content model with meaning-integrity statements (the canonical short copy "AI helped. I take responsibility." and the canonical explanation reproduced verbatim, never paraphrased; flavour text clearly presentation) and no-status/no-legitimacy statements (buying merchandise confers no legitimacy, rank, permission, or signer status).
3. Define the product lines per D1 (essays, book, posters, stickers, decals), each stating author/designer + licence, and no claim over the `+AI` notation; licences carried on or with the product, never implying endorsement, certification, or a trust mark.
4. Specify production ethics and environmental impact per product line (supply chain, labour conditions asserted, evidence for claims, materials, packaging, shipping-footprint estimate, measured-vs-estimated); no unsupported ethical claims.
5. Specify fulfilment: published shipping costs, delivery estimates, returns/refunds, and an accessible non-store order path; every publication has a free, screen-reader-accessible digital equivalent.
6. Specify pricing transparency: price, what it covers (production, shipping, margin to stewardship), and the margin split per D2, reported consistently with financial-transparency.
7. State that the book/essays are retellings and never present themselves as the normative specification; physical products reference the current spec version, and any QR follows the bare-URL-plus-visible-text rule.
8. Create `docs/services/publications-and-merchandise.md`: the storefront design plus the Programme 8 gates — privacy analysis and threat model (order data: names, addresses, payment) and the static-first failure-mode statement (if the store stops, the complete online meaning, all digital formats, and the offline pack remain free and downloadable).
9. Specify versioned designs (reprints are new versions, never silent edits); discontinued products leave a labelled "no longer produced" state without removing the free digital equivalents.
10. Give the storefront a localisation path per the multi-language standard (the canonical wording and the `+AI` mark are T0 never translated; storefront copy T2 with R1/R4/R12/R13; formats via multi-format-distribution-kit).
11. Self-check against §4: walk the acceptance criteria and confirm each holds.

## 3. Constraints (must-nots)
- Purchase buys a physical object — never legitimacy, rank, permission, or signer status (payment buys convenience, scale, support, or managed operations only).
- Purchase never confers legitimacy, rank, permission, or signer status.
- No rights claimed over the `+AI` notation.
- Canonical wording never paraphrased (T0, reproduced verbatim wherever the mark is explained).
- Meaning never for sale; free digital equivalents always available.
- Unsupported ethical or environmental claims never made.
- The canonical wording and mark follow the multi-language standard (T0); storefront copy T2 (R1/R4/R12/R13).

## 4. Acceptance criteria
- [ ] Every product states its designer and licence and claims no rights over the `+AI` notation.
- [ ] The canonical wording is reproduced without paraphrase wherever the mark is explained.
- [ ] The storefront states that buying merchandise confers no legitimacy, rank, or signer status.
- [ ] Production ethics and environmental impact are disclosed per product line without unsupported claims.
- [ ] Shipping costs, returns, and a non-store order path are published.
- [ ] Every publication has a free, screen-reader-accessible digital equivalent.
- [ ] Pricing states the stewardship margin split.
- [ ] The storefront publishes a privacy analysis, threat model, and failure-mode statement before launch.
- [ ] If the store stops, the online meaning and all digital formats remain free and downloadable.

## 5. Outputs to produce in the repository
- `site/store.html` — storefront content (meaning-integrity/no-status statements, product lines, digital equivalents, non-store order path).
- `docs/services/publications-and-merchandise.md` — storefront design + Programme 8 privacy analysis, threat model, and failure-mode statement.

## 6. Read before building
- [`09-funding-and-sustainability.md`](../../09-funding-and-sustainability.md) — mini-plan
- [`publications-and-merchandise-dsh.md`](../../../../suggestions/publications-and-merchandise-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../../../digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; canonical wording T0, storefront T2)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
