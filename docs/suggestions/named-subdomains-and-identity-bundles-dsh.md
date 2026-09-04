# Named Subdomains and Identity Bundles — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`named-subdomains-and-identity-bundles.md`](named-subdomains-and-identity-bundles.md).
> **Catalogue group:** Declarations and profiles.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the named-subdomain identity bundle: a claimed, memorable address such as `name.plus-artificial-intelligence.org` that resolves to a declaration or profile, with optional managed defaults, redirects, and email aliases. The founding example `https://eric-mourant.plus-artificial-intelligence.org` is the concrete instance this generalises. It exists as a paid convenience layer, and it must do so without ever turning an address into identity, legitimacy, or rank — a short reserved address is an operational convenience, nothing more.

## 2. Placement and boundaries

This is an optional paid service, so it MUST state its free floor: the no-account path, authored links, and declaration issuance all remain free, and no paid subdomain confers legitimacy, rank, or permission. It consumes [URL semantics and canonicalisation](url-semantics-and-canonicalization-dsh.md) for address rules and points at the resources owned by [Hosted profiles](hosted-profiles-dsh.md) and [Portable declaration schema](portable-declaration-schema-dsh.md). It is deliberately distinct from the free [Message-bearing subdomains](message-bearing-subdomains-dsh.md) and from free [Authored links](authored-links-dsh.md).

## 3. Terminology

- **Named subdomain** — a claimed label under the project's apex domain.
- **Identity bundle** — the paid convenience package (address, redirects, aliases) around a subdomain.
- **Holder** — the party controlling the subdomain for its current term.
- **Reserved term** — a label withheld from claiming (project names, core terms, message-bearing labels).
- **Homograph** — a visually confusable character or name used to imitate another address.

## 4. Scope

### 4.1 In scope

- Allocation, reservation, collision, and impersonation rules.
- Renewal, transfer, and lapse behaviour.
- Internationalised names and homograph handling.
- Pricing boundaries and abuse handling.
- Email-alias convenience semantics.

### 4.2 Out of scope and deferred

- The target resources' content (hosted profiles, declarations).
- The apex domain's custody and the full namespace inventory (continuity and namespace custody).
- Message-bearing (slogan/campaign) subdomains (message-bearing subdomains).
- The plus-addressing convention's detailed mechanics (plus-addressing convention).

## 5. Specification

### 5.1 Design goals and principles

1. **Address, not identity.** Controlling a subdomain proves only control of an address, never who someone is.
2. **Claimable but fair.** Allocation is transparent; impersonation is an abuse matter, not an identity-proof matter.
3. **Convenience is priced, legitimacy is not.** Price covers operation, never rank or permission.
4. **Lapse is graceful.** Payment stopping degrades the convenience, never destroys the underlying declaration.

### 5.2 Normative requirements

1. The subdomain MUST resolve to a canonical ID-based resource (a declaration or profile) and MUST be presented as an address convenience, never as the resource's canonical identity, which is the immutable ID.
2. Every named-subdomain page MUST carry visible text stating that the holder controls this address and that this is not proof of identity, endorsement, or verification.
3. Name collision MUST be resolved by a published allocation rule (e.g. first-claim under review) with a documented dispute route; a claim MUST NOT require legal-name or identity proof, because identity is not what the address asserts.
4. Impersonation MUST be treated as an abuse matter: a name that imitates a notable person, organisation, or the project itself MUST be suspendable on complaint, without implying the imitated party had to claim it first.
5. A reserved-term list MUST be published and versioned, withholding at least: the project name, the `+AI` mark, core governance and continuity terms, and the free message-bearing labels owned by [Message-bearing subdomains](message-bearing-subdomains-dsh.md).
6. Internationalised names MUST be supported via IDN with a documented normalisation (e.g. NFC), and allocation MUST reject or flag homographic names that visually confound an existing reserved or claimed name.
7. Claims MUST be time-limited with a documented renewal; on lapse or non-payment there MUST be a grace period, after which the address reverts to a default, redirects to a retained tombstone, or is released — and the underlying declaration or profile MUST remain intact and reachable at its canonical ID.
8. Transfer MUST be a recorded change of holder (a versioned event), never a silent reassignment; a transfer MUST NOT carry with it any claim about the previous holder.
9. Pricing MUST be set against operational cost and MUST state, on the pricing surface and in this specification, that payment buys convenience, scale, support, or managed operations — never legitimacy, rank, or permission, per the [Free-floor covenant](free-floor-covenant-dsh.md).
10. Email aliases offered with a bundle (e.g. `name@subdomain` or plus-addressed forms) MUST be presented as mailbox-filtering conveniences, not identity proof, per the [Plus-addressing convention](plus-addressing-convention-dsh.md), and MUST NOT be used to infer identity.
11. Abuse handling MUST include suspension, a published appeal route, and removal of the address on upheld abuse, while preserving the holder's underlying records.
12. The subdomain MUST NOT be used to present a trust score, rank, or endorsement, and MUST NOT be a prerequisite for issuing a declaration.

### 5.3 Data model

Not applicable — this specification defines address rules, not new data structures. The subdomain is an alias entry in the namespace inventory owned by [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md), recording the label, holder, target ID, term dates, and status.

### 5.4 Interfaces and behaviours

- **Claim:** request a label, receive a reserved/available decision under the allocation rule, then point it at a target.
- **Resolve:** the subdomain serves the target resource or a redirect, with the address-not-identity label on every response.
- **Manage:** the holder edits the target, redirects, and aliases; transfers and renewals are recorded events.
- **Lapse:** grace, then revert to default or tombstone; the target stays live at its canonical URL.

### 5.5 Lifecycle and operational rules

Claims have terms, renewals, transfers, and lapses — all recorded events with dates. The subdomain's fate on lapse is defined in advance and never involves deleting the target resource. Retention and tombstoning follow [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md); the subdomain label is an inventory item whose retirement leaves a tombstone.

## 6. Free floor, red lines, and invariants

This is a paid service, so the free floor must be stated and preserved: the no-account path, authored links, and declaration issuance stay free, and no paid subdomain buys legitimacy, rank, or permission. The address-not-identity rule enforces the red line against treating control as identity or authority, and the no-score rule keeps this convenience from becoming a reputation system. The never-repurpose invariant (URL semantics) governs the address's whole life.

## 7. Relationships to sibling specifications

- [URL semantics and canonicalisation](url-semantics-and-canonicalization-dsh.md) owns the address rules this product follows.
- [Hosted profiles](hosted-profiles-dsh.md) and [Portable declaration schema](portable-declaration-schema-dsh.md) own the targets the subdomain resolves to.
- [Message-bearing subdomains](message-bearing-subdomains-dsh.md) is the free, non-identity sibling this product must remain distinct from.
- [Authored links](authored-links-dsh.md) is the free, unverified personalisation this product must not be conflated with.
- [Plus-addressing convention](plus-addressing-convention-dsh.md) owns the email-alias semantics.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md) owns the subdomain inventory and its retention.
- [Free-floor covenant](free-floor-covenant-dsh.md) binds this paid product to its free floor.
- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) owns the reserved project names and marks.

## 8. Resolution of the seed's "before implementation" concerns

- **Name collisions** — section 5.2 item 3: a published allocation rule with a dispute route.
- **Impersonation** — section 5.2 item 4: abuse-based suspension, no identity proof required.
- **Renewals** — section 5.2 item 7: time-limited claims with documented renewal.
- **Transfers** — section 5.2 item 8: recorded change of holder, never silent.
- **Reserved terms** — section 5.2 item 5: a published, versioned reserved list.
- **International names** — section 5.2 item 6: IDN with normalisation and homograph handling.
- **Pricing** — section 5.2 item 9: operational-cost pricing with the no-legitimacy statement.
- **Abuse** — section 5.2 item 11: suspension, appeal, removal while preserving records.
- **What happens when payment stops** — section 5.2 item 7 and 5.5: graceful lapse, target preserved at its canonical ID.

## 9. Acceptance criteria

1. Every named-subdomain page displays the address-not-identity label.
2. The subdomain resolves to a canonical ID-based target, not a new identity.
3. A collision is decided by the published allocation rule with a recorded outcome.
4. An impersonating name is suspendable without requiring the imitated party to claim it.
5. The reserved-term list is published, versioned, and enforced at claim time.
6. An internationalised name is normalised and a homographic impostor is flagged.
7. Non-payment triggers grace, then revert/tombstone, with the target intact at its canonical URL.
8. A transfer is a recorded event and carries no claim about the prior holder.
9. The pricing surface states that payment buys no legitimacy, rank, or permission.
10. The free no-account path and authored links remain fully free and distinct.

## 10. Open questions

- The length of the grace period and the release schedule for lapsed names are undecided and need abuse modelling.
- Whether claiming should require a mailbox control proof at allocation is undecided (it would not assert identity, only a contact).
