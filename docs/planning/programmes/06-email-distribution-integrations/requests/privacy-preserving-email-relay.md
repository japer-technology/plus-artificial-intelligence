# Agent request — privacy-preserving-email-relay: Privacy-Preserving Email Relay

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../../06-email-distribution-integrations.md)
> **Source:** spec [`privacy-preserving-email-relay-dsh.md`](../../../../suggestions/privacy-preserving-email-relay-dsh.md) · seed [`privacy-preserving-email-relay.md`](../../../../suggestions/privacy-preserving-email-relay.md)
> **Effort:** L · **Phase:** P3 · **Position:** P3 — the last item; ships only with its static-first failure-mode statement published (Programme 8 rule).
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Default alias expiry length
- **Question:** What is the default alias expiry length (spec §5.2 item 3 makes expiry mandatory)? (spec §10 item 1; digest "expiry length".)
- **Options:** (a) 30 days · (b) 90 days · (c) 365 days.
- **Recommended:** (a) — a short cautious default fits watchlist territory and the "expiring by default" principle; the signer can extend, so it is a floor not a ceiling.
- **Your choice:** ✏️

### D2 — Bidirectional replies vs forward-only
- **Question:** Should the relay support replies through the alias (bidirectional), or be forward-only at launch? (spec §10 item 2; digest "bidirectional replies".)
- **Options:** (a) forward-only — the reader sends, the signer replies from their own mailbox · (b) bidirectional — replies route back through the alias, hiding the mailbox both ways · (c) forward-only at launch, bidirectional later.
- **Recommended:** (c) — spec §5.4 describes forward-only behaviour ("receives a bounce or a reply from the signer's mailbox without learning it"); bidirectional adds reply-routing complexity and mailbox-hiding risk, so defer it until the forward path is proven.
- **Your choice:** ✏️

### D3 — Free-tier volume bound (cross-cutting §11)
- **Question:** What is the free-tier volume bound for the relay? (assigned IMPLEMENTATION-PLAN §11 "free-quota sizes"; spec §10 item 3 + digest "free-tier volume". Joint owner: `cost-discipline`, Programme 8, owns the operating-cost model — this request records the number, that programme finalises it before launch.)
- **Options:** (a) 100 messages/month and 5 active aliases per signer · (b) 200 messages/month and 10 active aliases per signer · (c) alias-count cap only (e.g. 5 active aliases), no message cap.
- **Recommended:** (a) — conservative per-signer volume and alias counts keep the free tier a bounded anti-abuse promise (spec §5.2 item 13) without creating a deliverability burden; confirm against `cost-discipline` before launch.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

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
14. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- An alias never leaks the signer's mailbox or name to a reader.
- No tracking pixels, beacons, or read receipts; no reader-behaviour recording beyond routing + abuse.
- Privacy is never a premium feature — the free tier stays bounded, and payment buys no better privacy.
- No content archive beyond the delivery-proof + abuse-response minimum.
- The real mailbox is never added to any directory or contact list by the relay.
- The relay is optional: the mark, the visible signature, and the no-account path work without it.
- Payment buys volume, features, or managed operations — never legitimacy, rank, or permission.

## 4. Acceptance criteria
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

## 5. Outputs to produce in the repository
- `docs/spec/privacy-preserving-email-relay.md` — the relay design: alias lifecycle, SPF/DKIM/DMARC checks, neutralisation, retention, abuse route, free-tier bounds, bounce policy, consent, and the failure-mode statement reference.
- `site/schemas/relay-alias/<version>/schema.json` — the alias record schema (opaque local part, expires, status, blocks, organisation, retention).

## 6. Read before building
- [`06-email-distribution-integrations.md`](../../06-email-distribution-integrations.md) — mini-plan
- [`privacy-preserving-email-relay-dsh.md`](../../../../suggestions/privacy-preserving-email-relay-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
