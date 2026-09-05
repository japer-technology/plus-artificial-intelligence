# Agent request — authored-links: Authored Links

> **Programme:** 03 · Signer Tools and Verification — [`03-signer-tools-and-verification.md`](../../03-signer-tools-and-verification.md)
> **Source:** spec [`authored-links-dsh.md`](../../../../suggestions/authored-links-dsh.md) · seed [`authored-links.md`](../../../../suggestions/authored-links.md)
> **Effort:** S · **Phase:** P1 · **Position:** early P1 — reuses the existing `?name=&company=` personalisation mechanics and ships fast
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — `name`/`organisation` maximum length
- **Question:** What is the exact maximum length for the `name` and `organisation` query parameters? (spec §10 item 1; digest "name/org max length".)
- **Options:** (a) 80 characters each · (b) 120 characters each · (c) 40 characters each · (d) one shared 255-character bound for both.
- **Recommended:** (b) — 120 is long enough for real organisation names without inviting sensitive data into a URL; anything over the bound is rejected or truncated, and the sensitive-data warning (spec §5.2 item 9) still applies regardless.
- **Your choice:** ✏️

### D2 — Short share token
- **Question:** Should the composer offer a shorter share token, and with what retention? (spec §10 item 2; digest "short share token".)
- **Options:** (a) No short token — the full query string is authoritative and the only form · (b) Yes, via a hosted shortening service with a documented retention, the label travelling with every form · (c) Yes, client-side only (a fragment/hash), no server storage.
- **Recommended:** (a) — a server-side token would require storing the link (against spec §5.2 item 8 "no storing the personalised link") and a client-side fragment adds no real value over the full link; the full parameter set stays authoritative and the label travels with it.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Build the static compose form (name, organisation, lang, theme, font, colour) that builds the query-string link and offers a copy button; apply the D1 bound to `name`/`organisation` and show the sensitive-data warning before the link is produced.
2. Implement the render logic: personalisation travels in the query string only (path stays the durable explanation-page identity, fragments stay local drafts); the normative `+AI` meaning text renders verbatim and is never alterable by any parameter.
3. Implement the closed parameter set — `name`, `organisation`, `lang`, `theme`, `font`, `colour`; unknown parameters are ignored and change nothing.
4. Implement the allowlists: `lang` accepts only registered tags (unsupported/malformed → documented default, no error/tracking); `theme`/`font`/`colour` draw from allowlisted safe values, and any value that is a URL, CSS fragment, or unlisted is ignored.
5. Render the mandatory visible label "self-authored and unverified" and the "not a declaration record" note on every authored-link page, as text (never icon/colour only); point to the no-account declaration builder as the escalation path.
6. Honour the D2 decision (no short token / hosted token / client-side fragment) exactly.
7. Ensure the page is fully readable with JavaScript disabled and sets no cookies/tracking/storage.
8. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- No parameter may alter, abridge, or reword the normative meaning text.
- No cookies, tracking, or storing the personalised link.
- Never styled as verified or presented as a declaration, profile, or evidence of responsibility (no checkmark, seal, or "confirmed" wording on `name`/`organisation`).
- No unknown/unsafe parameter may inject styling, script, or a look-alike page.
- Composing or viewing never requires payment or an account.

## 4. Acceptance criteria
- [ ] A link with any combination of recognised parameters renders the normative meaning text unchanged.
- [ ] Every authored-link page shows "self-authored and unverified" as visible text.
- [ ] An unknown parameter is ignored and changes nothing.
- [ ] A `font` or `colour` value that is a URL or CSS fragment is rejected and the page still renders safely.
- [ ] An unsupported `lang` falls back to a default without error or tracking.
- [ ] The page is fully readable with JavaScript disabled and sets no cookies.
- [ ] The composer shows the sensitive-data warning before producing the link.
- [ ] The page is never styled or worded to imply verification, endorsement, or that a declaration exists.

## 5. Outputs to produce in the repository
- `site/links.html` — static compose form + query-string render logic (file://-safe, JS-disabled readable).
- `docs/spec/authored-links.md` — the parameter reference table (name, type, bound, default, allowlists) owned here and consumed by the composer.

## 6. Read before building
- [`03-signer-tools-and-verification.md`](../../03-signer-tools-and-verification.md) — mini-plan
- [`authored-links-dsh.md`](../../../../suggestions/authored-links-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../../../digest/02-declarations-and-profiles.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
