# Development task — privacy-preserving-email-relay: Privacy-Preserving Email Relay

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md)
> **Source:** spec [`privacy-preserving-email-relay-dsh.md`](../suggestions/privacy-preserving-email-relay-dsh.md) · seed [`privacy-preserving-email-relay.md`](../suggestions/privacy-preserving-email-relay.md)
> **Effort:** L · **Phase:** P3 · **Position:** P3 — the last item; ships only with its static-first failure-mode statement published (Programme 8 rule).
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Optional hosted relay with opaque, revocable aliases hiding the signer's real mailbox, with expiry, blocking, and org routing.
- **Why now / risk of deferring:** P3 — the last item, and ships only with its static-first failure-mode statement published; a free hosted relay is an abuse magnet, so its no-account abuse route and cost-discipline modelling must exist before launch or it fails its own free-floor promise.
- **Features to deliver:**
  - Hosted relay with opaque, revocable, expiring aliases (self-service create/extend/block/revoke) that never reveal the signer's mailbox or name.
  - Inbound SPF/DKIM/DMARC checks (results recorded, never silently trusted); malware/active-content neutralisation (executables/scripted HTML stripped or refused); honest bounces (never a silent drop).
  - No tracking pixels/beacons/read receipts; forward-then-delete retention on a published schedule with no content archive beyond delivery-proof + abuse minimum; no-account abuse-report route with published response targets.
  - Consent (publishing an alias is explicit; the relay never lists the real mailbox); optional organisation-managed routing under organisation workspaces; a bounded free tier with payment buying only volume/features/operations.
- **Depends on:** security-and-abuse-controls, privacy-and-data-minimisation, moderation-disputes-and-appeals, cost-discipline, static-first-service-architecture

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Default alias expiry length
- **Question:** What is the default alias expiry length (spec §5.2 item 3 makes expiry mandatory)? (spec §10 item 1; digest "expiry length".)
- **Option (a):** 30 days
  - **For:** Shortest default fits the watchlist caution and the "expiring by default" principle (spec §5.1 principle 5; §2), and since the signer can extend, it is a floor not a ceiling (spec §5.2 item 3).
  - **Against:** Signers must actively extend, which is more friction for long-lived contact points.
- **Option (b):** 90 days
  - **For:** Less maintenance friction while still bounding the alias's lifetime.
  - **Against:** Longer default exposure for a watchlist service the spec keeps "cautious by default" (spec §5.1 principle 5).
- **Option (c):** 365 days
  - **For:** Minimal re-extension burden for stable aliases.
  - **Against:** A year-long default runs against the expiring-by-default caution and the watchlist posture (spec §5.1 principle 5; §2), leaving an alias live long after the signer may have stopped using it.
- **Recommended:** (a) — a short cautious default fits watchlist territory and the "expiring by default" principle; the signer can extend, so it is a floor not a ceiling.
- **Your choice:** ✏️

### D2 — Bidirectional replies vs forward-only
- **Question:** Should the relay support replies through the alias (bidirectional), or be forward-only at launch? (spec §10 item 2; digest "bidirectional replies".)
- **Option (a):** forward-only — the reader sends, the signer replies from their own mailbox
  - **For:** Matches the spec, where the reader "receives a bounce or a reply from the signer's mailbox without learning it" (spec §5.4); simplest, and hides the mailbox.
  - **Against:** No through-alias reply path, so the reader always sees the signer's real reply address.
- **Option (b):** bidirectional — replies route back through the alias, hiding the mailbox both ways
  - **For:** Hides the mailbox both ways by routing replies back through the alias.
  - **Against:** Adds reply-routing complexity and mailbox-hiding risk that the spec's opaque-by-construction principle makes secondary (spec §5.1 principle 1); it is not what §5.4 describes.
- **Option (c):** forward-only at launch, bidirectional later
  - **For:** Ships the spec's described forward-only behaviour now and defers the risky bidirectional path until the forward path is proven.
  - **Against:** Bidirectional support remains absent at launch, so the two-way-hiding benefit waits.
- **Recommended:** (c) — spec §5.4 describes forward-only behaviour ("receives a bounce or a reply from the signer's mailbox without learning it"); bidirectional adds reply-routing complexity and mailbox-hiding risk, so defer it until the forward path is proven.
- **Your choice:** ✏️

### D3 — Free-tier volume bound (cross-cutting §11)
- **Question:** What is the free-tier volume bound for the relay? (assigned IMPLEMENTATION-PLAN §11 "free-quota sizes"; spec §10 item 3 + digest "free-tier volume". Joint owner: `cost-discipline`, Programme 8, owns the operating-cost model — this request records the number, that programme finalises it before launch.)
- **Option (a):** 100 messages/month and 5 active aliases per signer
  - **For:** Conservative per-signer volume and alias counts keep the free tier a bounded anti-abuse promise (spec §5.2 item 13) without creating a deliverability burden, addressing the "relay abuse" programme risk.
  - **Against:** The lowest bound may feel restrictive to a genuine heavy-but-free user.
- **Option (b):** 200 messages/month and 10 active aliases per signer
  - **For:** More generous for genuine free users.
  - **Against:** A larger free tier raises the abuse surface and deliverability/cost burden before `cost-discipline` finalises the model (spec §5.2 item 13; programme Risks "relay abuse").
- **Option (c):** alias-count cap only (e.g. 5 active aliases), no message cap
  - **For:** A cap on active aliases is easy to enforce and understand.
  - **Against:** Without a message cap, the free tier could be driven to high volume through a few aliases, weakening the bounded anti-abuse promise (spec §5.2 item 13).
- **Recommended:** (a) — conservative per-signer volume and alias counts keep the free tier a bounded anti-abuse promise (spec §5.2 item 13) without creating a deliverability burden; confirm against `cost-discipline` before launch.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Specify the relay service design: self-service alias create/extend/block/revoke, working without payment for the free tier.
2. Enforce opacity: an alias is an opaque local part revealing neither the signer's mailbox nor their name; the real address never appears in headers delivered to the reader.
3. Enforce expiry per D1: every alias carries an expiry set at creation, extendable only by the signer; on expiry the alias stops accepting mail and responds per the bounce policy.
4. Specify instant revocation and blocking, taking effect immediately.
5. Specify sender authentication: inbound mail checked against SPF, DKIM, and DMARC where available, results recorded and never silently trusted.
6. Specify malware/active-content neutralisation: executable attachments and scripted HTML stripped or refused.
7. Enforce the no-tracking rule: no pixels, beacons, or read receipts; no reader-behaviour recording beyond what routing and abuse response require.
8. Specify bounces: a failed delivery produces a bounce or a recorded non-delivery, never a silent drop.
9. Specify retention: message content forwarded then deleted on a published schedule; no content archive beyond the minimum to prove delivery and answer abuse reports.
10. Specify abuse response: per-alias and per-sender rate limits, a no-account abuse-report route, and published response targets (per `moderation-disputes-and-appeals` + `security-and-abuse-controls`).
11. Specify consent: publishing an alias is the signer's explicit act; the relay never adds the real mailbox to any directory or contact list; optional organisation-managed routing under `organisation-profiles-and-policies` keeps a member's alias member-revocable.
12. Apply the D3 free-tier bound; if paid, the service states the bounded free tier and that payment buys volume/features/operations — never legitimacy, rank, permission, or better privacy.
13. **Note for the agent — watchlist + failure-mode gate:** hosted mail is on the project watchlist; the relay must not go public until (a) the hosted-mail-relay watchlist assessment (owned by `red-lines-and-cautious-extensions`, Programme 10) is published, and (b) the static-first failure-mode statement, threat model, privacy analysis, and cost model (Programme 8) are published. Ship the design plus the failure-mode statement first; live stand-up is gated.
14. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- An alias never leaks the signer's mailbox or name to a reader.
- No tracking pixels, beacons, or read receipts; no reader-behaviour recording beyond routing + abuse.
- Privacy is never a premium feature — the free tier stays bounded, and payment buys no better privacy.
- No content archive beyond the delivery-proof + abuse-response minimum.
- The real mailbox is never added to any directory or contact list by the relay.
- The relay is optional: the mark, the visible signature, and the no-account path work without it.
- Payment buys volume, features, or managed operations — never legitimacy, rank, or permission.

## 5. Acceptance criteria
- [ ] No alias leaks the signer's mailbox or name to a reader.
- [ ] Every alias carries an expiry and stops accepting mail after it.
- [ ] A signer revokes an alias and blocks a sender instantly.
- [ ] Inbound mail is SPF/DKIM/DMARC-checked and the result recorded.
- [ ] Executable attachments and scripted HTML are stripped or refused.
- [ ] No pixel, beacon, or read receipt is ever injected.
- [ ] A failed delivery produces a bounce or recorded non-delivery, never a silent drop.
- [ ] Message content is deleted on the published schedule and never archived for insight.
- [ ] A no-account abuse-report route exists with published response targets.
- [ ] If paid, the service publishes a bounded free tier and states payment buys no legitimacy.

## 6. Outputs to produce in the repository
- `docs/spec/privacy-preserving-email-relay.md` — the relay design: alias lifecycle, SPF/DKIM/DMARC checks, neutralisation, retention, abuse route, free-tier bounds, bounce policy, consent, and the failure-mode statement reference.
- `site/schemas/relay-alias/<version>/schema.json` — the alias record schema (opaque local part, expires, status, blocks, organisation, retention).

## 7. Read before building
- [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md) — mini-plan
- [`privacy-preserving-email-relay-dsh.md`](../suggestions/privacy-preserving-email-relay-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
