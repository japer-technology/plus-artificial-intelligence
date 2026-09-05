# Development task — authored-links: Authored Links

> **Programme:** 03 · Signer Tools and Verification — [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md)
> **Source:** spec [`authored-links-dsh.md`](../suggestions/authored-links-dsh.md) · seed [`authored-links.md`](../suggestions/authored-links.md)
> **Effort:** S · **Phase:** P1 · **Position:** early P1 — reuses the existing `?name=&company=` personalisation mechanics and ships fast
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Shareable URL rendering a personalised +AI explanation (name/org/lang/theme/font/colour) with no account, upload, or declaration.
- **Why now / risk of deferring:** It ships fast by reusing the existing `?name=&company=` personalisation mechanics, front-loading the P1 adoption path before the builder. Its risk is that it is the mark's lowest-friction sharing vector: if the "not a declaration" label ever drifts, it becomes a look-alike identity channel, so the fixed-meaning and self-authored-unverified framing must be locked in now.
- **Features to deliver:**
  - A static compose form building a query-string link (`name`, `organisation`, `lang`, `theme`, `font`, `colour`) with a copy button.
  - Render logic over a closed parameter set: unknown parameters ignored; `lang` from registered tags only; `theme`/`font`/`colour` from allowlisted safe values; any URL/CSS-fragment value ignored so no styling, script, or look-alike page can be injected.
  - The normative `+AI` meaning text rendered verbatim and unalterable; the mandatory visible label "self-authored and unverified" plus a "not a declaration record" note on every authored-link page.
  - A visible sensitive-data warning in the composer; JS-disabled readability; no cookies, tracking, or storage.
- **Depends on:** url-semantics-and-canonicalization, theme-engine-and-packs, free-floor-covenant

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — `name`/`organisation` maximum length
- **Question:** What is the exact maximum length for the `name` and `organisation` query parameters? (spec §10 item 1; digest "name/org max length".)
- **Option (a):** 80 characters each
  - **For:** Short enough to keep URLs tidy and reduce what leaks into logs and caches.
  - **Against:** 80 chars may truncate legitimate long organisation names, and spec §5.2 item 5 requires names to render as the author's chosen presentation identity rather than an abbreviated one.
- **Option (b):** 120 characters each
  - **For:** Long enough for real organisation names without inviting sensitive data into a URL — matching spec §5.2 item 5's bounded free text and item 9's warning against sensitive data in URLs.
  - **Against:** 120 chars still lets a fair amount of text appear in logs/history/caches, and spec §10 notes the exact bound is still to be set by accessibility and abuse testing.
- **Option (c):** 40 characters each
  - **For:** Tightest bound, minimising URL leakage the most.
  - **Against:** Too short for many legitimate names and organisations, harming the "chosen presentation identity" purpose (spec §5.2 item 5).
- **Option (d):** one shared 255-character bound for both
  - **For:** One simple, uniform bound to implement and document.
  - **Against:** 255 invites longer sensitive text into a leaky URL carrier (spec §5.2 item 9), and it fails to distinguish a person's name from an organisation's.
- **Recommended:** (b) — 120 is long enough for real organisation names without inviting sensitive data into a URL; anything over the bound is rejected or truncated, and the sensitive-data warning (spec §5.2 item 9) still applies regardless.
- **Your choice:** ✏️

### D2 — Short share token
- **Question:** Should the composer offer a shorter share token, and with what retention? (spec §10 item 2; digest "short share token".)
- **Option (a):** No short token — the full query string is authoritative and the only form
  - **For:** The full parameter set stays authoritative, and no server-side storage is needed — matching spec §5.4 ("the full parameter set is authoritative") and §5.2 item 8 ("no storing the personalised link").
  - **Against:** Full query-string links are long and less pretty to share.
- **Option (b):** Yes, via a hosted shortening service with a documented retention, the label travelling with every form
  - **For:** Produces short, pretty links for easy sharing.
  - **Against:** Requires storing the personalised link server-side, which violates spec §5.2 item 8's "no storing the personalised link".
- **Option (c):** Yes, client-side only (a fragment/hash), no server storage
  - **For:** No server storage, so it does not violate the no-storing rule.
  - **Against:** Adds no real value over the full link, and fragments are bounded local drafts per url-semantics (spec §5.2 item 1), so a fragment token would confuse the path/query/fragment split.
- **Recommended:** (a) — a server-side token would require storing the link (against spec §5.2 item 8 "no storing the personalised link") and a client-side fragment adds no real value over the full link; the full parameter set stays authoritative and the label travels with it.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Build the static compose form (name, organisation, lang, theme, font, colour) that builds the query-string link and offers a copy button; apply the D1 bound to `name`/`organisation` and show the sensitive-data warning before the link is produced.
2. Implement the render logic: personalisation travels in the query string only (path stays the durable explanation-page identity, fragments stay local drafts); the normative `+AI` meaning text renders verbatim and is never alterable by any parameter.
3. Implement the closed parameter set — `name`, `organisation`, `lang`, `theme`, `font`, `colour`; unknown parameters are ignored and change nothing.
4. Implement the allowlists: `lang` accepts only registered tags (unsupported/malformed → documented default, no error/tracking); `theme`/`font`/`colour` draw from allowlisted safe values, and any value that is a URL, CSS fragment, or unlisted is ignored.
5. Render the mandatory visible label "self-authored and unverified" and the "not a declaration record" note on every authored-link page, as text (never icon/colour only); point to the no-account declaration builder as the escalation path.
6. Honour the D2 decision (no short token / hosted token / client-side fragment) exactly.
7. Ensure the page is fully readable with JavaScript disabled and sets no cookies/tracking/storage.
8. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- No parameter may alter, abridge, or reword the normative meaning text.
- No cookies, tracking, or storing the personalised link.
- Never styled as verified or presented as a declaration, profile, or evidence of responsibility (no checkmark, seal, or "confirmed" wording on `name`/`organisation`).
- No unknown/unsafe parameter may inject styling, script, or a look-alike page.
- Composing or viewing never requires payment or an account.

## 5. Acceptance criteria
- [ ] A link with any combination of recognised parameters renders the normative meaning text unchanged.
- [ ] Every authored-link page shows "self-authored and unverified" as visible text.
- [ ] An unknown parameter is ignored and changes nothing.
- [ ] A `font` or `colour` value that is a URL or CSS fragment is rejected and the page still renders safely.
- [ ] An unsupported `lang` falls back to a default without error or tracking.
- [ ] The page is fully readable with JavaScript disabled and sets no cookies.
- [ ] The composer shows the sensitive-data warning before producing the link.
- [ ] The page is never styled or worded to imply verification, endorsement, or that a declaration exists.

## 6. Outputs to produce in the repository
- `site/links.html` — static compose form + query-string render logic (file://-safe, JS-disabled readable).
- `docs/spec/authored-links.md` — the parameter reference table (name, type, bound, default, allowlists) owned here and consumed by the composer.

## 7. Read before building
- [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md) — mini-plan
- [`authored-links-dsh.md`](../suggestions/authored-links-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../planning/digest/02-declarations-and-profiles.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
