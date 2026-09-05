# Development task — contact-routes: Contact Routes

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`contact-routes-dsh.md`](../suggestions/contact-routes-dsh.md) · seed [`contact-routes.md`](../suggestions/contact-routes.md)
> **Effort:** S · **Phase:** P0 · **Position:** early P0 (unblocks security/abuse handling for everything else)
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Eight distinct documented paths (general, media, partnerships, privacy, security, abuse, child safety, legal) so urgent reports never share one inbox.
- **Why now / risk of deferring:** Contact routes unblock security/abuse handling for everything else (mini-plan Order: "early P0 (unblocks security/abuse handling for everything else)"). Risk: urgent reports sharing one inbox — guarded by distinct routes plus escalation (brainstorm open risks).
- **Features to deliver:**
  - One static `site/contact.html`.
  - 8 distinct routes (general, media, partnerships, privacy, security, abuse, child safety, legal).
  - A per-route recipient role, acknowledgement + resolution targets, retention, escalation, attachment policy.
  - A route record `{id, purpose, recipient-role, acknowledgement-target, resolution-target, retention, escalation, attachment-policy, sensitive-handling, visibility}`.
  - Plain-text-first forms.
  - Active-content rejection.
  - Stable addresses + redirect plan.
- **Depends on:** security-and-abuse-controls, privacy-and-data-minimisation (form rules), continuity-and-namespace-custody (address custody), privacy-preserving-email-relay (later, optional)

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Response targets
- **Question:** What acknowledgement and resolution targets are published per route?
- **Option (a):** publish defaults (e.g. acknowledgement 2 business days, resolution 10 business days) with an honest "may vary with staffing" note
  - **For:** Spec §5.2.3 requires each route to state "checkable" acknowledgement and resolution targets; publishing defaults with an honest staffing note satisfies that without over-promising (digest "Open: per-route response targets").
  - **Against:** Any published number is provisional until staffing is real, so the targets may need revision as the project grows.
- **Option (b):** publish "staffing-dependent — to be set" placeholders
  - **For:** Avoids committing to numbers the project cannot yet staff.
  - **Against:** "To be set" placeholders fail spec §5.2.3's "checkable" targets requirement, and the digest's "Done when" (role/targets/retention/escalation) is unmet.
- **Option (c):** publish targets for urgent routes only
  - **For:** Focuses the checkable-targets obligation on the routes where responsiveness matters most.
  - **Against:** Spec §5.2.3 applies to "each route", not just urgent ones, so (c) leaves general/media/partnership/legal routes without the required targets.
- **Recommended:** (a) — spec §5.2.3 requires checkable targets; state them honestly against staffing reality.
- **Your choice:** ✏️

### D2 — Sensitive-route relay aliases
- **Question:** Do sensitive routes adopt masked relay aliases at launch?
- **Option (a):** defer masked relays to privacy-preserving-email-relay; use stable direct addresses now
  - **For:** Spec §10 defers masked relay aliases to Privacy-Preserving Email Relay, and spec §5.2.11 permits plus-addressing as an optional disclosure convention; stable direct addresses keep the routes live now.
  - **Against:** Direct addresses expose the recipient's real address and lack the relay's privacy properties until the relay sibling ships.
- **Option (b):** use plus-addressed aliases now
  - **For:** Plus-addressed aliases give route separation immediately, using an existing convention.
  - **Against:** Spec §5.2.11 treats plus-addressing as a disclosure convention, not a privacy mechanism, so it does not substitute for the masked relay the spec defers (spec §10).
- **Option (c):** use masked relay aliases from day one
  - **For:** Gives sensitive routes the strongest privacy from day one.
  - **Against:** Builds the relay before its owning sibling (Privacy-Preserving Email Relay) ships, pre-empting spec §10's deferral and adding hosted infrastructure not yet in scope.
- **Recommended:** (a) — spec §10 defers masked relay aliases to Privacy-Preserving Email Relay.
- **Your choice:** ✏️

### D3 — Canonical contact addresses
- **Question:** Which addresses carry the routes?
- **Option (a):** project addresses on the apex domain (plus-artificial-intelligence.org), with the plus-addressing convention optional
  - **For:** Spec §5.2.11 requires stable route addresses with a redirect plan, and continuity-and-namespace-custody owns address custody (spec §2); apex-domain project addresses keep routes independent of any individual or company.
  - **Against:** Requires apex-domain mail provisioning and custody to be in place (deferred to continuity-and-namespace-custody), which is more setup than reusing an existing address.
- **Option (b):** plus-addressed aliases on japer.technology
  - **For:** Reuses the already-live japer.technology domain and the plus-addressing convention immediately.
  - **Against:** Ties the project's contact routes to JAPER Technology's domain, which spec §2 and §5.2.11 prefer to keep stable and separate from any single service provider/company.
- **Option (c):** reuse the founder's personal address
  - **For:** Zero setup — an address that already works.
  - **Against:** Fails spec §5.2.11's stability/redirect requirement and ties project routes to one person, which the continuity sibling's custody rules exist to avoid.
- **Recommended:** (a) — stable project addresses whose custody is documented in continuity-and-namespace-custody, with a redirect plan.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/contact.html` with eight distinct routes: general, media, partnerships, privacy, security, abuse, child safety, legal.
3. Name each route's recipient role (no unstructured, unowned shared inbox).
4. State each route's acknowledgement and resolution targets per §2 D1, its retention period, and its escalation path (child-safety and abuse escalate to named specialists).
5. Specify plain-text-first forms, attachments optional and never required for an initial sensitive report, and active/executable content rejected or sandboxed.
6. Keep media distinct from general and state it implies no endorsement; keep the legal route's retention documented and correspondence not published by default.
7. Ensure urgent routes (security, abuse, child safety) are reachable with no account or payment.
8. Publish the route record `{ id, purpose, recipient-role, acknowledgement-target, resolution-target, retention, escalation, attachment-policy, sensitive-handling, visibility }` (route definitions, not submissions).
9. Make addresses stable with a redirect plan and changelog announcement for any change; forbid covert tracking/fingerprinting on forms; self-check against §5.

## 4. Constraints (must-nots)
- No tracking or fingerprinting on forms.
- Media route must not imply endorsement; legal route not published by default.
- Urgent routes reachable with no account/payment.
- Sensitive reports must not be routed through unmoderated public channels.

## 5. Acceptance criteria
- [ ] All eight routes present and distinct.
- [ ] Every route names its recipient role and states response targets, retention, and escalation.
- [ ] Attachment handling is plain-text-first with active content blocked.
- [ ] No covert tracking or fingerprinting exists on contact forms.
- [ ] Child-safety and abuse routes escalate to named specialists.
- [ ] The media route is separate from general and implies no endorsement.
- [ ] The legal route documents retention and does not publish by default.
- [ ] Urgent routes are reachable without an account or payment.

## 6. Outputs to produce in the repository
- `site/contact.html` — the contact routes page (route catalogue inline).

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`contact-routes-dsh.md`](../suggestions/contact-routes-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
