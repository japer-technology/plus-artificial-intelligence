# Agent request — url-semantics-and-canonicalization: URL Semantics and Canonicalisation

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../../02-trust-foundations.md)
> **Source:** spec [`url-semantics-and-canonicalization-dsh.md`](../../../../suggestions/url-semantics-and-canonicalization-dsh.md) · seed [`url-semantics-and-canonicalization.md`](../../../../suggestions/url-semantics-and-canonicalization.md)
> **Effort:** S · **Phase:** P1 · **Position:** P1 — before named subdomains and hosted profiles build URL products on top
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Maximum URL length and per-segment bounds
- **Question:** What concrete maximum URL length and per-segment/query-value bounds should the policy document? (spec §10; to be set with compatibility testing.)
- **Options:** (a) 2048 characters total, 255 characters per path segment, 1024 characters per query value · (b) 1024 characters total, 128 per segment, 512 per query value · (c) Adopt no fixed number yet — publish "bounded" with the bound deferred to compatibility testing.
- **Recommended:** (a) — 2048/255/1024 are the widely compatible defaults (browser/server-safe), and the spec §5.2.3 requires documented bounds now, so a conservative published number is better than an unbound placeholder.
- **Your choice:** ✏️

### D2 — Slugs vs ID-only
- **Question:** Should human-friendly slugs be kept as a permanent layer, or deprecated in favour of ID-only URLs? (spec §10.)
- **Options:** (a) Keep slugs as a permanent human-friendly layer alongside the immutable ID (ID remains authoritative) · (b) Deprecate slugs now in favour of ID-only URLs · (c) Keep slugs on hosted products but not on the canonical form.
- **Recommended:** (a) — the spec §5.2.1 and §5.2.7 already design slugs as an optional human layer with the ID authoritative, and there is no drift cost that justifies dropping them.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Write the path/query/fragment division rule (paths carry identity, queries carry presentation/filters, fragments carry local drafts, structured meaning lives in the manifest).
2. Write the canonical-URL and immutable-ID rules (one canonical ID-bearing URL per resource; opaque, never-reused ID; slug optional and non-authoritative per D2).
3. Write the encoding rule (UTF-8, `%2B` for `+`, `%20` for spaces) and the bound rules per D1.
4. Write the query canonicalisation rule (order-insensitive meaning; canonical sort by key; duplicate keys as a list in first-appearance order) and the documented-defaults rule (missing optional parameters never error or silently reinterpret).
5. Write the slug/alias/redirect rules (finite published aliases resolving to the same ID; slug collision disambiguation; recorded forward-only redirects; never repurpose a URL).
6. Write the version-bearing vs unversioned-redirect scheme and the tombstone/archive rule (retired resources resolve to a tombstone or archive, never a bare 404).
7. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- URLs are never repurposed to name a different resource.
- Retired resources are never a bare 404 (tombstone/archive).
- Servers and crawlers ignore fragment content.
- No URL rule introduces tracking, fingerprinting, or paid placement in directories.
- Minting, resolving, and canonicalising URLs never require payment or an account.

## 4. Acceptance criteria
- [ ] Every durable resource resolves at a single canonical, ID-bearing URL.
- [ ] Re-encoding a URL with `+` as `%2B` round-trips without corruption.
- [ ] Reordering query parameters produces the same meaning; the canonical form is sorted.
- [ ] A missing optional parameter resolves to its documented default.
- [ ] A slug collision is disambiguated without changing the immutable ID.
- [ ] A moved resource redirects to its new canonical URL and is never repurposed.
- [ ] The unversioned spec URL redirects to the current version; version URLs are permanent.
- [ ] An unlisted resource emits `noindex`; a searchable one is indexed only under consent.
- [ ] A retired resource resolves to a tombstone or archive, not a bare 404.

## 5. Outputs to produce in the repository
- `docs/policies/url-semantics.md` — URL policy doc (canonical/ID, slug/alias/redirect, encoding, bounds, versioning, tombstone rules).

## 6. Read before building
- [`02-trust-foundations.md`](../../02-trust-foundations.md) — mini-plan
- [`url-semantics-and-canonicalization-dsh.md`](../../../../suggestions/url-semantics-and-canonicalization-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../../../digest/02-declarations-and-profiles.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
