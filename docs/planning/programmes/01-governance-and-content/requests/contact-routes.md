# Agent request — contact-routes: Contact Routes

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`contact-routes-dsh.md`](../../../../suggestions/contact-routes-dsh.md) · seed [`contact-routes.md`](../../../../suggestions/contact-routes.md)
> **Effort:** S · **Phase:** P0 · **Position:** early P0 (unblocks security/abuse handling for everything else)
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Response targets
- **Question:** What acknowledgement and resolution targets are published per route?
- **Options:** (a) publish defaults (e.g. acknowledgement 2 business days, resolution 10 business days) with an honest "may vary with staffing" note · (b) publish "staffing-dependent — to be set" placeholders · (c) publish targets for urgent routes only
- **Recommended:** (a) — spec §5.2.3 requires checkable targets; state them honestly against staffing reality.
- **Your choice:** ✏️

### D2 — Sensitive-route relay aliases
- **Question:** Do sensitive routes adopt masked relay aliases at launch?
- **Options:** (a) defer masked relays to privacy-preserving-email-relay; use stable direct addresses now · (b) use plus-addressed aliases now · (c) use masked relay aliases from day one
- **Recommended:** (a) — spec §10 defers masked relay aliases to Privacy-Preserving Email Relay.
- **Your choice:** ✏️

### D3 — Canonical contact addresses
- **Question:** Which addresses carry the routes?
- **Options:** (a) project addresses on the apex domain (plus-artificial-intelligence.org), with the plus-addressing convention optional · (b) plus-addressed aliases on japer.technology · (c) reuse the founder's personal address
- **Recommended:** (a) — stable project addresses whose custody is documented in continuity-and-namespace-custody, with a redirect plan.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/contact.html` with eight distinct routes: general, media, partnerships, privacy, security, abuse, child safety, legal.
3. Name each route's recipient role (no unstructured, unowned shared inbox).
4. State each route's acknowledgement and resolution targets per §1 D1, its retention period, and its escalation path (child-safety and abuse escalate to named specialists).
5. Specify plain-text-first forms, attachments optional and never required for an initial sensitive report, and active/executable content rejected or sandboxed.
6. Keep media distinct from general and state it implies no endorsement; keep the legal route's retention documented and correspondence not published by default.
7. Ensure urgent routes (security, abuse, child safety) are reachable with no account or payment.
8. Publish the route record `{ id, purpose, recipient-role, acknowledgement-target, resolution-target, retention, escalation, attachment-policy, sensitive-handling, visibility }` (route definitions, not submissions).
9. Make addresses stable with a redirect plan and changelog announcement for any change; forbid covert tracking/fingerprinting on forms; self-check against §4.

## 3. Constraints (must-nots)
- No tracking or fingerprinting on forms.
- Media route must not imply endorsement; legal route not published by default.
- Urgent routes reachable with no account/payment.
- Sensitive reports must not be routed through unmoderated public channels.

## 4. Acceptance criteria
- [ ] All eight routes present and distinct.
- [ ] Every route names its recipient role and states response targets, retention, and escalation.
- [ ] Attachment handling is plain-text-first with active content blocked.
- [ ] No covert tracking or fingerprinting exists on contact forms.
- [ ] Child-safety and abuse routes escalate to named specialists.
- [ ] The media route is separate from general and implies no endorsement.
- [ ] The legal route documents retention and does not publish by default.
- [ ] Urgent routes are reachable without an account or payment.

## 5. Outputs to produce in the repository
- `site/contact.html` — the contact routes page (route catalogue inline).

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`contact-routes-dsh.md`](../../../../suggestions/contact-routes-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
