# Agent request — named-subdomains-and-identity-bundles: Named Subdomains and Identity Bundles

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md)
> **Source:** spec [`named-subdomains-and-identity-bundles-dsh.md`](../../../../suggestions/named-subdomains-and-identity-bundles-dsh.md) · seed [`named-subdomains-and-identity-bundles.md`](../../../../suggestions/named-subdomains-and-identity-bundles.md)
> **Effort:** L · **Phase:** P3 · **Position:** after hosted-profiles; the free message-bearing variant (Programme 6) defines the shared label rules first
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Grace period and release schedule for lapsed names
- **Question:** What is the grace period and subsequent release schedule when a subdomain lapses or payment stops?
- **Options:** (a) fix the lifecycle shape now (grace → revert-to-tombstone with target intact → release-to-pool) and defer exact durations to continuity-and-namespace-custody + abuse modelling · (b) set concrete defaults now (e.g. 30-day grace, 90-day release hold) flagged provisional · (c) leave the durations entirely unspecified until a later pass
- **Recommended:** (a) — the lifecycle shape is normative (§5.2.7, §5.5); the durations need abuse modelling owned by continuity-and-namespace-custody (spec §7).
- **Your choice:** ✏️

### D2 — Mailbox control proof at claim
- **Question:** Does claiming a subdomain require a mailbox control proof at allocation?
- **Options:** (a) yes — require a control-proof-verified mailbox as a contact channel only (never identity) · (b) no — allocate on the allocation rule alone; a contact route is optional · (c) require it only at renewal, never at initial claim
- **Recommended:** (a) — a control-proof mailbox gives a suspension/renewal/abuse contact channel without asserting identity, consistent with proofs-of-control's "control, not identity" principle (spec §10).
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

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
11. Self-check against §4: confirm each criterion holds against the rules and the reserved-term list.

## 3. Constraints (must-nots)
- Address never presented as identity, endorsement, or verification; never a trust score or rank.
- No legal-name or identity proof required to claim; never a prerequisite for declaring.
- Collision by published rule, not identity; impersonation suspendable without the imitated party claiming first.
- Lapse degrades gracefully — the target always stays intact at its canonical ID; transfers are recorded events, never silent reassignments.
- Email aliases never used to infer identity; payment never buys legitimacy, rank, or permission.
- Resolution-page chrome follows the multi-language standard (R1/R4/R12/R13); reserved terms are T0.

## 4. Acceptance criteria
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

## 5. Outputs to produce in the repository
- `docs/services/named-subdomains.md` — address rules (allocation, reservation, IDN/homograph, renewal/grace/tombstone, transfer, abuse) + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.
- `site/reserved-subdomain-terms.json` — published, versioned reserved-term list.

## 6. Read before building
- [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md) — mini-plan
- [`named-subdomains-and-identity-bundles-dsh.md`](../../../../suggestions/named-subdomains-and-identity-bundles-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../../../digest/02-declarations-and-profiles.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; resolution-page chrome R1/R4/R12/R13, reserved terms T0)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
