# Privacy-Preserving Email Relay — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`privacy-preserving-email-relay.md`](privacy-preserving-email-relay.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines an optional hosted relay service that lets readers contact a signer through opaque, revocable aliases without publishing the signer's real mailbox, with expiry, blocking, and organisation-managed routing. Its purpose is a narrow privacy gain — a stable public contact point that hides the underlying address — without becoming surveillance, identity, or a deliverability burden. This is a hosted-mail-adjacent service and is therefore treated with the caution the project reserves for its watchlist.

## 2. Placement and boundaries

The relay sits in the "Email, distribution, presentation, and inclusion" group and owns *alias creation, routing, and revocation*. It is an optional hosted service, not part of the commons: the free floor is that no relay is required to use the mark — a signer may publish a plus-address ([Plus-addressing convention](plus-addressing-convention-dsh.md)) or a mailbox directly, with no infrastructure. It defers threat controls to [Security and abuse controls](security-and-abuse-controls-dsh.md), data rules to [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md), consent to [Visibility and consent](visibility-and-consent-dsh.md), policy moderation to [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md), and cost to [Cost discipline](cost-discipline-dsh.md). Because hosted mail is on the project watchlist, every claim here is explicitly cautious.

## 3. Terminology

- **Alias** — an opaque `@relay-domain` address that forwards to the signer's real mailbox; it reveals nothing about that mailbox.
- **Signer** — the person who publishes an alias and receives through it.
- **Reader** — the person who contacts the signer through the alias.
- **Expiry** — an automatic end date after which an alias stops accepting mail.
- **Block** — a signer-initiated stop on a specific sender or alias.
- **Organisation-managed routing** — aliases owned and routed under an organisation workspace.

## 4. Scope

### 4.1 In scope

- Alias creation, expiry, blocking, and revocation.
- Sender authentication, deliverability, bounces, and malware handling.
- Retention, consent, tracking prohibition, and abuse response.
- Organisation-managed routing and the free floor for the optional service.

### 4.2 Out of scope and deferred

- Identity or mailbox control proof (proofs of control).
- Moderation policy decisions (moderation, disputes, and appeals).
- Contact-route definitions for the project's own sensitive inboxes (contact routes).
- Cost modelling beyond the anti-abuse budget (cost discipline).

## 5. Specification

### 5.1 Design goals and principles

1. **Opaque by construction.** An alias reveals the signer's mailbox to no one.
2. **Revocable and expiring.** Every alias can be killed instantly and must carry an expiry by default.
3. **No tracking.** The relay must not add pixels, beacons, or read receipts.
4. **Least retention.** Messages are forwarded and forgotten on schedule, never archived for insight.
5. **Cautious by default.** Hosted mail is watchlist territory; every capability is bounded.

### 5.2 Normative requirements

1. The relay MUST be an optional service: the mark, the visible signature, and the no-account path MUST work without it; a signer MAY publish a plus-address or direct mailbox instead.
2. An alias MUST be an opaque local part that reveals neither the signer's mailbox nor their name; the signer's real address MUST NOT appear in headers delivered to the reader.
3. Every alias MUST carry an expiry date, set at creation and extendable only by the signer; on expiry the alias MUST stop accepting mail and MUST respond per the bounce policy.
4. A signer MUST be able to revoke an alias instantly and to block a specific sender or alias, with the block taking effect immediately.
5. Sender authentication MUST be enforced: inbound mail to the relay MUST be checked against SPF, DKIM, and DMARC where available, and results MUST be recorded, never silently trusted (see [Security and abuse controls](security-and-abuse-controls-dsh.md)).
6. Malware and active content MUST be neutralised: executable attachments and scripted HTML MUST be stripped or the message refused, per [Security and abuse controls](security-and-abuse-controls-dsh.md) and [Contact routes](contact-routes-dsh.md).
7. The relay MUST NOT inject tracking pixels, beacons, or read receipts, and MUST NOT record reader behaviour beyond what routing and abuse response require (red line: covert tracking).
8. Bounces MUST be handled: a failed delivery MUST produce a bounce to the reader or a recorded non-delivery, never a silent drop that impersonates success.
9. Retention MUST follow [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md): message content is forwarded and then deleted on a published schedule; no content archive is kept beyond the minimum needed to prove delivery and answer abuse reports.
10. Abuse response MUST follow [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md) and [Security and abuse controls](security-and-abuse-controls-dsh.md): rate limits per alias and per sender, a no-account report route, and published response targets.
11. Consent MUST follow [Visibility and consent](visibility-and-consent-dsh.md): publishing an alias is the signer's explicit act; the signer's real mailbox MUST NEVER be added to any directory or contact list by the relay itself.
12. Organisation-managed routing MAY be offered, owned under [Organisation profiles and policies](organisation-profiles-and-policies-dsh.md); a member's alias MUST remain revocable by that member.
13. If the relay is paid, it MUST state its free floor explicitly: a bounded free tier for genuine contact, with payment buying volume, features, or managed operations — never legitimacy, rank, or permission, and never better privacy (privacy is not a premium feature).

### 5.3 Data model

```
{
  "alias": "opaque local part at the relay domain",
  "signer": "internal identifier; the real mailbox is never part of the public alias record",
  "expires": "ISO-8601",
  "status": "active | expired | revoked",
  "blocks": [ "sender or alias" ],
  "organisation": "optional workspace identifier",
  "retention": "published schedule reference"
}
```

### 5.4 Interfaces and behaviours

- A signer creates, extends, blocks, and revokes aliases through a self-service surface that MUST work without payment for the free tier.
- A reader sends to the alias and receives a bounce or a reply from the signer's mailbox without learning it.
- The relay renders a status page for an alias — "active until <date>" or "revoked" — and never exposes the underlying address.

### 5.5 Lifecycle and operational rules

- Aliases are created, extended, and revoked only by the signer (or an organisation role under organisation workspaces); no party may silently extend an alias.
- Expiry is automatic and re-verifiable; the signer is notified before an alias expires only if they opted in.
- Wind-down follows [Static-first service architecture](static-first-service-architecture-dsh.md): on shutdown, a final export of the signer's alias list is published and mail stops cleanly with a documented failure-mode statement.

## 6. Free floor, red lines, and invariants

The relay is optional; the free floor is the mark itself plus the no-account path, and a signer who never uses the relay loses nothing. If offered as a paid service, it MUST state a bounded free tier and that payment buys convenience, scale, or operations — never legitimacy, rank, or permission. The no-tracking rule implements the covert-tracking red line; the no-malware and sender-authentication rules implement the security controls; and the consent rule implements the red line against automated publication in another's name. Hosted mail's watchlist status is acknowledged in section 2 and reflected in the cautious defaults above.

## 7. Relationships to sibling specifications

- [Security and abuse controls](security-and-abuse-controls-dsh.md) owns threat modelling, sender authentication, malware neutralisation, and rate limits the relay must implement.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) owns retention, separation, and deletion the relay's schedule must satisfy.
- [Visibility and consent](visibility-and-consent-dsh.md) owns the consent rules around publishing and removing aliases.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md) owns abuse policy and response.
- [Proofs of control](proofs-of-control-dsh.md) owns mailbox control proof, which the relay's routing does not itself constitute.
- [Contact routes](contact-routes-dsh.md) is the consumer for the project's own sensitive-inbox aliases.
- [Organisation profiles and policies](organisation-profiles-and-policies-dsh.md) owns organisation-managed routing.
- [Cost discipline](cost-discipline-dsh.md) owns the per-alias operating cost and the anti-abuse budget.
- [Static-first service architecture](static-first-service-architecture-dsh.md) owns the failure-mode and wind-down obligations.
- [Plus-addressing convention](plus-addressing-convention-dsh.md) is the free, infrastructure-free alternative this service is optional against.

## 8. Resolution of the seed's "before implementation" concerns

- **Abuse response** — section 5.2 item 10 and the moderation/security siblings: rate limits, no-account reports, published targets.
- **Spam** — section 5.2 item 10: per-alias and per-sender rate limits and blocks.
- **Malware** — section 5.2 item 6: active content stripped or refused.
- **Sender authentication** — section 5.2 item 5: SPF/DKIM/DMARC checks, recorded.
- **Deliverability** — section 5.2 items 5 and 8: authenticated forwarding and honest bounces.
- **Bounces** — section 5.2 item 8: a bounce or recorded non-delivery, never a silent drop.
- **Retention** — section 5.2 item 9: forward-then-delete on a published schedule.
- **Consent** — section 5.2 item 11: publication is explicit; the relay never lists the real mailbox.
- **Tracking** — section 5.2 item 7: no pixels, beacons, or read receipts.
- **Moderation** — section 5.2 item 10 and the moderation sibling: policy and appeals.
- **Operating cost** — section 5.2 item 13 and cost discipline: free tier bounded by anti-abuse limits, paid tier for scale.

## 9. Acceptance criteria

1. No alias leaks the signer's mailbox or name to a reader.
2. Every alias carries an expiry and stops accepting mail after it.
3. A signer revokes an alias and blocks a sender instantly.
4. Inbound mail is SPF/DKIM/DMARC-checked and the result recorded.
5. Executable attachments and scripted HTML are stripped or refused.
6. No pixel, beacon, or read receipt is ever injected.
7. A failed delivery produces a bounce or recorded non-delivery, never a silent drop.
8. Message content is deleted on the published schedule and never archived for insight.
9. A no-account abuse-report route exists with published response targets.
10. If paid, the service publishes a bounded free tier and states payment buys no legitimacy.

## 10. Open questions

- The default alias expiry length and whether expiry should be mandatory or optional is undecided.
- Whether the relay should support replies through the alias (bidirectional) or forward-only, and how that affects mailbox hiding, is undecided.
- The free-tier volume bound, to be set with cost-discipline modelling.
