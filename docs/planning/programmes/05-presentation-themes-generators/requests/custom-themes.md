# Agent request — custom-themes: Custom Themes

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md)
> **Source:** spec [`custom-themes-dsh.md`](../../../../suggestions/custom-themes-dsh.md) · seed [`custom-themes.md`](../../../../suggestions/custom-themes.md)
> **Effort:** S · **Phase:** P3 · **Position:** P3 — a paid-service lane, shipped only after the free builder proves the capability.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Public price guide
- **Question:** Should the project maintain a public price guide for commissions?
- **Options:** (a) yes — publish a public price guide now · (b) no — keep pricing quote-based, deferring any guide to `publications-and-merchandise` (joint owner), and require pricing transparency only where a commission is listed publicly · (c) publish only indicative price bands
- **Recommended:** (b) — commissions don't exist yet, and pricing transparency is owned by `publications-and-merchandise` (Programme 9); the spec's transparency rule (5.2 item 11) applies only "where commissions are listed publicly".
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Publish the commission terms template (`site/custom-themes.html`) covering non-endorsement, brand use, accessibility, ownership, maintenance, publication, security, and flavour scope — terms on record before work starts.
3. Write the mandatory non-endorsement statement into every commission: it confers no legitimacy, rank, endorsement, or certification, and the `+AI` meaning presented is identical to the free presentation.
4. Define the delivery review: the commissioned pack must conform to the theme engine contract, pass the linter's error rules, and meet the accessibility floor before delivery as complete.
5. Set brand rules per licensing-and-mark-policy (client brand is presentation; it must not alter, obscure, or replace the mark's meaning or the specification text).
6. Specify ownership (agreed in advance, client-owned under the agreed licence, voluntary commons contributions follow contribution terms) and maintenance scope (named owner and duration; unmaintained packs flagged in conformance notes).
7. Specify publication as the client's choice, following the gallery's rules with the client's conformance note if published.
8. Require a security review before delivery: no remote dependencies, no tracking, no executable content beyond static assets.
9. Scope flavour under flavour-text-localisation (bespoke copy is presentation, never meaning); state the free builder remains equally capable in meaning.
10. Set the price-guide posture per §1 D1; self-check against §4.

## 3. Constraints (must-nots)
- No commission confers legitimacy, rank, endorsement, or certification.
- The client's brand MUST NOT alter, obscure, or replace the mark's meaning.
- No tracking or remote dependencies ship in a commissioned pack.
- The free builder MUST remain equally capable in meaning (paid themes are more polished, never more capable).

## 4. Acceptance criteria
- [ ] Every commission has published terms on record before work starts.
- [ ] No commission implies legitimacy, rank, endorsement, or certification.
- [ ] A commissioned pack passes the linter's error rules and meets the floor before delivery.
- [ ] The pack renders normative content byte-identically to free packs.
- [ ] Ownership and maintenance are agreed in advance and recorded.
- [ ] An unmaintained published pack is flagged in its conformance note.
- [ ] The free builder remains capable of everything a commission can do in meaning.
- [ ] No tracking or remote dependency ships in a commissioned pack.

## 5. Outputs to produce in the repository
- `site/custom-themes.html` — the commission terms template + delivery review process.

## 6. Read before building
- [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md) — mini-plan
- [`custom-themes-dsh.md`](../../../../suggestions/custom-themes-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
