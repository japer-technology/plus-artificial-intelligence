# Agent request — email-signature-kit: Email Signature Kit

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../../06-email-distribution-integrations.md)
> **Source:** spec [`email-signature-kit-dsh.md`](../../../../suggestions/email-signature-kit-dsh.md) · seed [`email-signature-kit.md`](../../../../suggestions/email-signature-kit.md)
> **Effort:** S · **Phase:** P1 · **Position:** P1 — the cheapest distribution win (core-extensions §3.4) and a THE-PLAN launch-stack item.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Badge format and minimum legible size
- **Question:** Should the optional badge default to inline SVG, PNG, or both, and what is the documented minimum legible size? (spec §10 item 1; digest "badge format".)
- **Options:** (a) inline SVG only · (b) PNG only · (c) inline SVG default with a PNG alternative for clients that strip SVG · (d) both emitted and the signer picks.
- **Recommended:** (c) — inline SVG stays crisp and carries the screen-reader alternative text; the PNG covers SVG-stripping clients; document a minimum legible size (e.g. 88×31 px) so it stays readable at badge scale.
- **Your choice:** ✏️

### D2 — First client list (desktop + mobile)
- **Question:** Which mail clients must the first guidance release cover, at minimum? (spec §10 item 2 + §9 item 8 requires at least one desktop and one mobile client; digest "first client list".)
- **Options:** (a) Gmail, Outlook, Apple Mail (the mini-plan trio) only · (b) Gmail, Outlook, Apple Mail plus one explicitly mobile client (iOS Mail or the Gmail app) · (c) Gmail, Outlook, Apple Mail plus one mobile client plus one privacy-first client (e.g. Thunderbird).
- **Recommended:** (b) — the mini-plan names Gmail/Outlook/Apple Mail as the core set, and adding one explicitly mobile client satisfies §9 item 8 unambiguously.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Build the offline generator (browser page + CLI) that takes a display name and an optional link URL and emits: the canonical plain-text signature `Name +AI` with the name rendered exactly as entered (never altered, transliterated, or normalised); the HTML signature carrying the identical name, mark, and link plus a plain-text alternative; and the optional badge per D1.
2. Enforce the link policy: at most one link line containing the full visible URL (e.g. `https://…`) so it survives as text; the URL must be direct `https` with no redirect and no query parameters used for tracking.
3. Implement the badge per D1 as a static image or inline SVG that restates the mark, carries alternative text for screen readers, and never fetches or runs anything when displayed; badge semantics stay deferred to `certificates-badges-and-qr`.
4. Write per-client setup guidance covering the D2 client list, stating per client what happens when images are blocked or HTML is rewritten, with the plain-text form as the documented fallback.
5. Write the general fallback documentation (plain-text-first, image-blocking, client-rewriting, mobile clients).
6. Honour the accessibility floor: the plain-text form legible to screen readers; any colour in the HTML or badge redundant with text.
7. Apply the multi-language constraints below; the mark `+AI` and the `Name +AI` form are T0 protected, and localised guidance follows R1/R4/R12.
8. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- No tracking pixel, web beacon, remote image fetch, or redirect/tracking URL; links direct `https` and free of tracking query parameters.
- A signature never implies certification, endorsement, or verification.
- The signer's name must not be altered, transliterated, or normalised.
- No paid tier may offer a "better" signature that the free path cannot produce identically.
- The generator runs from `file://` with no account and no network call; hosted generation, if any, must not differ from the local output.
- The mark `+AI` and the `Name +AI` form are T0 protected — never translated (R2/T0); localised guidance follows R1 (English governs, notice carried) and R4 (per-key English fallback), resolved per R12 (`?lang=` → saved preference → browser → English).

## 4. Acceptance criteria
- [ ] The plain-text signature is exactly `Name +AI` with the name unaltered.
- [ ] The link URL appears in full as visible text in both forms.
- [ ] Blocking images in any client leaves the name, mark, and link fully readable.
- [ ] No signature emits a tracking pixel, beacon, or tracking parameter.
- [ ] A screen reader announces the badge's meaning via alternative text.
- [ ] The generator runs from `file://` with no account and no network call.
- [ ] No signature wording implies certification, endorsement, or verification.
- [ ] Setup guidance documents the fallback behaviour for at least one desktop and one mobile client.
- [ ] The HTML and plain-text forms carry identical name, mark, and link.

## 5. Outputs to produce in the repository
- `site/signature-kit.html` — `file://`-safe browser generator (name + optional link → plain-text, HTML, badge) with the setup guidance inline.
- `scripts/generate-signature.mjs` — offline CLI emitting the same plain-text, HTML, and badge output.
- `docs/spec/email-signature-kit.md` — the guidance spec: link policy, badge policy, per-client fallback, and the multi-language rules.

## 6. Read before building
- [`06-email-distribution-integrations.md`](../../06-email-distribution-integrations.md) — mini-plan
- [`email-signature-kit-dsh.md`](../../../../suggestions/email-signature-kit-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
