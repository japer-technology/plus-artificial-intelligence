# Development task — named-subdomains-and-identity-bundles: Named Subdomains and Identity Bundles

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../planning/programmes/07-hosted-identity-org-services.md)
> **Source:** spec [`named-subdomains-and-identity-bundles-dsh.md`](../suggestions/named-subdomains-and-identity-bundles-dsh.md) · seed [`named-subdomains-and-identity-bundles.md`](../suggestions/named-subdomains-and-identity-bundles.md)
> **Effort:** L · **Phase:** P3 · **Position:** after hosted-profiles; the free message-bearing variant (Programme 6) defines the shared label rules first
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Claimed memorable address (e.g. `name.plus-artificial-intelligence.org`) resolving to a declaration/profile — a paid convenience, never identity or rank.
- **Why now / risk of deferring:** Ships after hosted-profiles, in parallel with registers and workspaces; the free message-bearing variant (Programme 6) defines the shared reserved-label rules first (mini-plan Order). Deferring risks the address being read as identity/rank, guarded by the always-shown address-not-identity label (brainstorm).
- **Features to deliver:**
  - Subdomain claim/resolve/manage/lapse flow resolving a claimed label to a canonical ID-based target (declaration or profile), never a new identity.
  - Published, versioned allocation rule plus a reserved-term list (project name, `+AI` mark, core governance/continuity terms, free message-bearing labels).
  - IDN normalisation (NFC) with homograph flagging/rejection.
  - Time-limited claims with renewal, grace, then revert-to-tombstone or release, the underlying target always intact at its canonical ID.
  - Transfer-as-event (a recorded change of holder carrying no claim about the prior holder).
  - Abuse handling with suspension, a published appeal route, and removal on upheld abuse while preserving the holder's records.
  - The address-not-identity label on every response.
  - Email aliases as mailbox-filtering conveniences (plus-addressing), never identity proof.
  - Operational-cost pricing with the no-legitimacy statement.
- **Depends on:** url-semantics-and-canonicalization, hosted-profiles, continuity-and-namespace-custody, free-floor-covenant

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Grace period and release schedule for lapsed names
- **Question:** What is the grace period and subsequent release schedule when a subdomain lapses or payment stops?
- **Option (a):** fix the lifecycle shape now (grace → revert-to-tombstone with target intact → release-to-pool) and defer exact durations to continuity-and-namespace-custody + abuse modelling
  - **For:** The lifecycle shape is normative (spec §5.2.7 requires grace → revert/tombstone/release with the target intact), so fixing the shape now satisfies the MUST while deferring only the numeric durations, which spec §10 and §7 say need abuse modelling owned by continuity-and-namespace-custody.
  - **Against:** Leaves the actual durations undecided at launch, so the operator must still finalise numbers with continuity-and-namespace-custody before enabling claims.
- **Option (b):** set concrete defaults now (e.g. 30-day grace, 90-day release hold) flagged provisional
  - **For:** Gives operators concrete numbers to build against immediately.
  - **Against:** Spec §10 says the durations "need abuse modelling" and continuity-and-namespace-custody owns the inventory (spec §7), so inventing numbers here duplicates an owner and risks a wrong default that could enable squatting.
- **Option (c):** leave the durations entirely unspecified until a later pass
  - **For:** Minimal commitment now.
  - **Against:** Spec §5.2.7 requires a grace period to exist on lapse, so "entirely unspecified" leaves the normative lapse behaviour unimplemented; the shape at least must be fixed.
- **Recommended:** (a) — the lifecycle shape is normative (§5.2.7, §5.5); the durations need abuse modelling owned by continuity-and-namespace-custody (spec §7).
- **Your choice:** ✏️

### D2 — Mailbox control proof at claim
- **Question:** Does claiming a subdomain require a mailbox control proof at allocation?
- **Option (a):** yes — require a control-proof-verified mailbox as a contact channel only (never identity)
  - **For:** A control-proof mailbox gives a suspension/renewal/abuse contact channel without asserting identity, consistent with proofs-of-control's "control, not identity" principle (spec §10); it also supports the abuse/suspension route in spec §5.2.11.
  - **Against:** It adds a step to claiming that spec §5.2.3 does not otherwise require (collision is by allocation rule, not identity proof), so it must be scoped strictly as a contact channel and never become an identity or entitlement check.
- **Option (b):** no — allocate on the allocation rule alone; a contact route is optional
  - **For:** Keeps claiming frictionless and strictly rule-based, matching spec §5.2.3's "a claim MUST NOT require legal-name or identity proof".
  - **Against:** Without a verified contact, suspension/renewal/abuse notices have no guaranteed delivery channel, weakening the abuse route spec §5.2.11 depends on.
- **Option (c):** require it only at renewal, never at initial claim
  - **For:** Low-friction first claim, with a verified contact established before renewal.
  - **Against:** The abuse/suspension route (spec §5.2.11) needs a contact during the initial term too, so deferring to renewal leaves the first term without a guaranteed channel; spec §10 frames the question as at allocation, not at renewal.
- **Recommended:** (a) — a control-proof mailbox gives a suspension/renewal/abuse contact channel without asserting identity, consistent with proofs-of-control's "control, not identity" principle (spec §10).
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Specify the subdomain claim/resolve/manage/lapse flow: a claimed label resolves to a canonical ID-based target (declaration or profile), never a new identity; every named-subdomain page carries the address-not-identity label ("holder controls this address; not proof of identity, endorsement, or verification").
3. Publish the allocation rule and a versioned reserved-term list at `site/reserved-subdomain-terms.json`, withholding at least the project name, the `+AI` mark, core governance/continuity terms, and the free message-bearing labels owned by message-bearing-subdomains; collision is decided by the published rule with a documented dispute route, never by identity proof.
4. Specify IDN normalisation (NFC) and homograph handling: allocate/reject or flag names that visually confound an existing reserved or claimed name; treat impersonation as an abuse matter (suspendable on complaint, without the imitated party claiming first).
5. Specify renewal/grace/tombstone per D1: time-limited claims with documented renewal; on lapse the address reverts to a default, redirects to a retained tombstone, or is released — the underlying declaration/profile stays intact at its canonical ID.
6. Specify transfer-as-event (a recorded change of holder, never silent, carrying no claim about the prior holder) and abuse handling (suspension, published appeal route, removal on upheld abuse while preserving the holder's records).
7. Specify email aliases as mailbox-filtering conveniences (plus-addressing), never identity proof, and never used to infer identity.
8. State the free floor and pricing: payment buys convenience/scale/support/managed operations only, never legitimacy, rank, or permission; the no-account path, authored links, and declaration issuance stay free and distinct.
9. Write `docs/services/named-subdomains.md` — the address rules plus the Programme 8 gates (static-first failure-mode statement, threat model, privacy analysis, and per-record cost model) for the hosted allocation product.
10. Give the resolution page chrome a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13); reserved terms are T0 and never translated.
11. Self-check against §5: confirm each criterion holds against the rules and the reserved-term list.

## 4. Constraints (must-nots)
- Address never presented as identity, endorsement, or verification; never a trust score or rank.
- No legal-name or identity proof required to claim; never a prerequisite for declaring.
- Collision by published rule, not identity; impersonation suspendable without the imitated party claiming first.
- Lapse degrades gracefully — the target always stays intact at its canonical ID; transfers are recorded events, never silent reassignments.
- Email aliases never used to infer identity; payment never buys legitimacy, rank, or permission.
- Resolution-page chrome follows the multi-language standard (R1/R4/R12/R13); reserved terms are T0.

## 5. Acceptance criteria
- [ ] Every named-subdomain page displays the address-not-identity label.
- [ ] The subdomain resolves to a canonical ID-based target, not a new identity.
- [ ] A collision is decided by the published allocation rule with a recorded outcome.
- [ ] An impersonating name is suspendable without requiring the imitated party to claim it.
- [ ] The reserved-term list is published, versioned, and enforced at claim time.
- [ ] An internationalised name is normalised and a homographic impostor is flagged.
- [ ] Non-payment triggers grace, then revert/tombstone, with the target intact at its canonical URL.
- [ ] A transfer is a recorded event and carries no claim about the prior holder.
- [ ] The pricing surface states that payment buys no legitimacy, rank, or permission.
- [ ] The free no-account path and authored links remain fully free and distinct.
- [ ] The failure-mode statement, threat model, privacy analysis, and cost model are published (Programme 8 gate).

## 6. Outputs to produce in the repository
- `docs/services/named-subdomains.md` — address rules (allocation, reservation, IDN/homograph, renewal/grace/tombstone, transfer, abuse) + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.
- `site/reserved-subdomain-terms.json` — published, versioned reserved-term list.

## 7. Read before building
- [`07-hosted-identity-org-services.md`](../planning/programmes/07-hosted-identity-org-services.md) — mini-plan
- [`named-subdomains-and-identity-bundles-dsh.md`](../suggestions/named-subdomains-and-identity-bundles-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../planning/digest/02-declarations-and-profiles.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; resolution-page chrome R1/R4/R12/R13, reserved terms T0)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
