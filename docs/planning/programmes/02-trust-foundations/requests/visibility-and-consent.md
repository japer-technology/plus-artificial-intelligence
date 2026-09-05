# Agent request — visibility-and-consent: Visibility and Consent

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../../02-trust-foundations.md)
> **Source:** spec [`visibility-and-consent-dsh.md`](../../../../suggestions/visibility-and-consent-dsh.md) · seed [`visibility-and-consent.md`](../../../../suggestions/visibility-and-consent.md)
> **Effort:** M · **Phase:** P1 · **Position:** after schema; before registry/directory (they only publish `public`)
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Per-link revocation tokens for unlisted
- **Question:** Should unlisted links support per-link revocation tokens so a shared URL can later stop resolving? (spec §10.)
- **Options:** (a) No — unlisted links stop resolving when the record's visibility decreases or it is tombstoned; no per-link token in v1 · (b) Yes — add an optional revocation token to unlisted share links now · (c) Yes, but as a later optional extension, not part of this build.
- **Recommended:** (a) — the decrease-without-approval rule already stops exposure within one business day, and per-link tokens add token custody and revocation state that the free floor does not yet need; revisit if hosted links ship.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Write the four visibility-mode semantics — `local` (device/account only), `unlisted` (link-resolvable, never indexed), `public` (indexable with dated consent), `organisation-only` (role-gated, never revealed by link alone).
2. Write the consent-record requirements: increasing visibility requires an explicit, dated, plain-language consent step whose statement is recorded; decreasing visibility requires no approval, payment, or justification.
3. Write the indexing rules: unlisted emits `X-Robots-Tag: noindex, nofollow` (and `noindex`/robots guidance generally); public indexed only under consent.
4. Write the one-business-day cache purge rule and the safe-default rules (minors default local; vulnerable parties offered local-only workflows).
5. Specify the shared visibility selector component (identical wording and previews across builder/profile/registry) and the exports-carry-visibility rule.
6. State the redaction/tombstone interaction (a redacted or tombstoned record loses its public listing regardless of mode).
7. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- No record without a `visibility` field.
- Unlisted records never indexed.
- Decreasing visibility needs no approval, payment, or justification, and is honoured within one business day.
- Organisation-only records are never revealed by link alone.
- All four modes are free-floor provisions; no mode is sold, and privacy is never a premium feature.

## 4. Acceptance criteria
- [ ] Every record stores exactly one visibility mode.
- [ ] No unlisted record appears in any directory, sitemap, or search index.
- [ ] Increasing visibility always requires a dated consent step with a plain preview.
- [ ] Decreasing visibility completes without payment or approval and within one business day.
- [ ] An organisation-only record is unresolvable by link without a granted role.
- [ ] Exports carry visibility so self-hosted copies preserve boundaries.
- [ ] A minor's new record defaults to local.
- [ ] Consent records appear in compliance exports.

## 5. Outputs to produce in the repository
- `docs/policies/visibility-and-consent.md` — mode semantics, consent/transition rules, indexing and cache-purge rules, safe defaults.
- `site/assets/visibility-selector.js` — shared visibility selector component (file://-safe, identical wording/previews).

## 6. Read before building
- [`02-trust-foundations.md`](../../02-trust-foundations.md) — mini-plan
- [`visibility-and-consent-dsh.md`](../../../../suggestions/visibility-and-consent-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../../../digest/03-registers-and-discovery.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
