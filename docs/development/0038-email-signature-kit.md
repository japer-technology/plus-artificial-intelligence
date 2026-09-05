# Development task — email-signature-kit: Email Signature Kit

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md)
> **Source:** spec [`email-signature-kit-dsh.md`](../suggestions/email-signature-kit-dsh.md) · seed [`email-signature-kit.md`](../suggestions/email-signature-kit.md)
> **Effort:** S · **Phase:** P1 · **Position:** P1 — the cheapest distribution win (core-extensions §3.4) and a THE-PLAN launch-stack item.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Generator + guidance producing accessible `Name +AI` plain-text/HTML signatures with optional badge and per-client setup instructions.
- **Why now / risk of deferring:** The signature is the cheapest distribution win (core-extensions §3.4) and a THE-PLAN launch-stack item; deferring it leaves email — the adoption channel the programme calls the signature loop — without the visible `Name +AI` disclosure that every later email surface (plus-addressing, the metadata header, the relay) sits beside.
- **Features to deliver:**
  - Offline generator (browser + CLI) that, from a signer's chosen name and optional link URL, emits the canonical plain-text signature `Name +AI` (name never altered/transliterated/normalised), an HTML signature carrying the identical name/mark/link plus a plain-text alternative, and the optional badge.
  - Link policy: at most one link line with the full visible URL, direct `https`, no redirect, no query-string tracking parameters, no remote image.
  - Optional badge: static image or inline SVG restating the mark, with screen-reader alternative text, never fetching or running anything.
  - Per-client setup guidance with documented image-blocking/HTML-rewriting fallback (the plain-text form), plus general fallback documentation.
  - Accessibility floor: plain-text legible to screen readers; any colour redundant with text.
- **Depends on:** certificates-badges-and-qr, plus-addressing-convention, accessibility-floor, public-usage-guidelines

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Badge format and minimum legible size
- **Question:** Should the optional badge default to inline SVG, PNG, or both, and what is the documented minimum legible size? (spec §10 item 1; digest "badge format".)
- **Option (a):** inline SVG only
  - **For:** Inline SVG stays crisp at any scale and can carry screen-reader alternative text, satisfying the spec's alt-text requirement (spec §5.2 item 5); it also never fetches or runs anything, honouring the no-tracking rule (spec §5.2 item 4).
  - **Against:** Clients that strip inline SVG would lose the badge entirely, breaking the graceful-degradation principle that blocked images must never remove the meaning (spec §5.1 principle 5; §5.2 item 7).
- **Option (b):** PNG only
  - **For:** PNG is a static image accepted nearly everywhere, so it survives client rewriting that strips SVG.
  - **Against:** A raster cannot stay crisp at badge scale, and its alt text depends on surrounding markup rather than being native, which is weaker than the inline-SVG alternative the spec permits (spec §5.2 item 5); §5.1 principle 5's graceful-degradation also argues for more than a single image form.
- **Option (c):** inline SVG default with a PNG alternative for clients that strip SVG
  - **For:** Matches the spec's "static image or inline SVG" requirement, keeps the crisp alt-text-carrying SVG as default, and the PNG covers SVG-stripping clients (spec §5.2 items 5–7; §5.1 principle 5).
  - **Against:** Emits and documents two badge assets, slightly more generator output to maintain.
- **Option (d):** both emitted and the signer picks
  - **For:** Gives signers maximum flexibility to match their own mail client.
  - **Against:** Pushes a rendering decision onto the signer that the spec assigns to the kit (per-client fallback documentation, spec §5.2 item 7), and emitting both unconditionally adds surface without the guided default the degradation principle implies (spec §5.1 principle 5).
- **Recommended:** (c) — inline SVG stays crisp and carries the screen-reader alternative text; the PNG covers SVG-stripping clients; document a minimum legible size (e.g. 88×31 px) so it stays readable at badge scale.
- **Your choice:** ✏️

### D2 — First client list (desktop + mobile)
- **Question:** Which mail clients must the first guidance release cover, at minimum? (spec §10 item 2 + §9 item 8 requires at least one desktop and one mobile client; digest "first client list".)
- **Option (a):** Gmail, Outlook, Apple Mail (the mini-plan trio) only
  - **For:** Matches the mini-plan's named trio, the smallest scope that still covers the common desktop/web clients (spec §5.2 item 7; mini-plan Build).
  - **Against:** The trio is desktop/web-centric, so it leaves mobile-client coverage ambiguous and risks failing the explicit "at least one desktop and one mobile client" acceptance criterion (spec §9 item 8).
- **Option (b):** Gmail, Outlook, Apple Mail plus one explicitly mobile client (iOS Mail or the Gmail app)
  - **For:** Satisfies spec §9 item 8 unambiguously by adding an explicitly mobile client, while keeping the mini-plan trio as the core set (spec §9 item 8; mini-plan Build).
  - **Against:** A single mobile client leaves other mobile platforms undocumented in the first release, so broader coverage must wait for a later pass.
- **Option (c):** Gmail, Outlook, Apple Mail plus one mobile client plus one privacy-first client (e.g. Thunderbird)
  - **For:** Adds a privacy-first desktop client that fits the project's no-tracking posture and widens the fallback documentation beyond the minimum.
  - **Against:** Expands the first-release surface beyond what the mini-plan names and beyond what spec §9 item 8 minimally requires, adding maintenance with no requirement forcing it (spec §9 item 8; mini-plan Build).
- **Recommended:** (b) — the mini-plan names Gmail/Outlook/Apple Mail as the core set, and adding one explicitly mobile client satisfies §9 item 8 unambiguously.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Build the offline generator (browser page + CLI) that takes a display name and an optional link URL and emits: the canonical plain-text signature `Name +AI` with the name rendered exactly as entered (never altered, transliterated, or normalised); the HTML signature carrying the identical name, mark, and link plus a plain-text alternative; and the optional badge per D1.
2. Enforce the link policy: at most one link line containing the full visible URL (e.g. `https://…`) so it survives as text; the URL must be direct `https` with no redirect and no query parameters used for tracking.
3. Implement the badge per D1 as a static image or inline SVG that restates the mark, carries alternative text for screen readers, and never fetches or runs anything when displayed; badge semantics stay deferred to `certificates-badges-and-qr`.
4. Write per-client setup guidance covering the D2 client list, stating per client what happens when images are blocked or HTML is rewritten, with the plain-text form as the documented fallback.
5. Write the general fallback documentation (plain-text-first, image-blocking, client-rewriting, mobile clients).
6. Honour the accessibility floor: the plain-text form legible to screen readers; any colour in the HTML or badge redundant with text.
7. Apply the multi-language constraints below; the mark `+AI` and the `Name +AI` form are T0 protected, and localised guidance follows R1/R4/R12.
8. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- No tracking pixel, web beacon, remote image fetch, or redirect/tracking URL; links direct `https` and free of tracking query parameters.
- A signature never implies certification, endorsement, or verification.
- The signer's name must not be altered, transliterated, or normalised.
- No paid tier may offer a "better" signature that the free path cannot produce identically.
- The generator runs from `file://` with no account and no network call; hosted generation, if any, must not differ from the local output.
- The mark `+AI` and the `Name +AI` form are T0 protected — never translated (R2/T0); localised guidance follows R1 (English governs, notice carried) and R4 (per-key English fallback), resolved per R12 (`?lang=` → saved preference → browser → English).

## 5. Acceptance criteria
- [ ] The plain-text signature is exactly `Name +AI` with the name unaltered.
- [ ] The link URL appears in full as visible text in both forms.
- [ ] Blocking images in any client leaves the name, mark, and link fully readable.
- [ ] No signature emits a tracking pixel, beacon, or tracking parameter.
- [ ] A screen reader announces the badge's meaning via alternative text.
- [ ] The generator runs from `file://` with no account and no network call.
- [ ] No signature wording implies certification, endorsement, or verification.
- [ ] Setup guidance documents the fallback behaviour for at least one desktop and one mobile client.
- [ ] The HTML and plain-text forms carry identical name, mark, and link.

## 6. Outputs to produce in the repository
- `site/signature-kit.html` — `file://`-safe browser generator (name + optional link → plain-text, HTML, badge) with the setup guidance inline.
- `scripts/generate-signature.mjs` — offline CLI emitting the same plain-text, HTML, and badge output.
- `docs/spec/email-signature-kit.md` — the guidance spec: link policy, badge policy, per-client fallback, and the multi-language rules.

## 7. Read before building
- [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md) — mini-plan
- [`email-signature-kit-dsh.md`](../suggestions/email-signature-kit-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
