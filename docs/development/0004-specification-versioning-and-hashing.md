# Development task — specification-versioning-and-hashing: Specification Versioning and Hashing

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md)
> **Source:** spec [`specification-versioning-and-hashing-dsh.md`](../suggestions/specification-versioning-and-hashing-dsh.md) · seed [`specification-versioning-and-hashing.md`](../suggestions/specification-versioning-and-hashing.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 — unblocks the schema's `specVersion` field and every hash comparison
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Pin every declaration to the exact normative spec meaning its signer accepted: `vN.M` versions, permanent URLs, content hashes.
- **Why now / risk of deferring:** It is a P0 member — it unblocks the schema's `specVersion` field and every hash comparison (mini-plan Order). Deferring risks a versioning retrofit: hashing the live v0.1 spec means touching every themed page's footer/referent, so pages and versions must change together (programme Risks).
- **Features to deliver:**
  - The `vN.M` version scheme (meaning-compatible major, minor revision), monotonic, never reused.
  - The canonical-bytes definition (UTF-8, line endings → `\n`, strip trailing newline) + `sha256` + change note per release.
  - Release tooling that refuses mismatched hashes; a version manifest; 12-character fingerprint display; translation `basedOn` pointers.
  - Permanent version-bearing URLs + an unversioned redirect; deprecation announced but never invalidating old referents.
- **Depends on:** translation-governance, changelog-and-rss, conformance-linter

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Signing release manifests
- **Question:** Should release manifests be signed, and if so by which keys? (spec §10; jointly with continuity-and-namespace-custody.)
- **Option (a):** Unsigned for now — ship the versioning/hash discipline without signature, and add manifest signing once continuity-and-namespace-custody establishes key custody
  - **For:** The spec's load-bearing guarantee (immutable referents + checkable hashes) is met by §5.2.3's `sha256`-over-canonical-bytes, not by signatures, and §5.5 defers key custody to continuity-and-namespace-custody.
  - **Against:** Until signatures exist, releases are unauthenticated in transit, so a substitute manifest could be served between hash publication and fetch (the hash still catches it on verification).
- **Option (b):** Signed now with a project release key
  - **For:** A project release key gives immediate authenticity for manifest distribution.
  - **Against:** §5.5 routes key custody to continuity-and-namespace-custody, which is not built yet, so signing now risks a key-management retrofit when that spec lands.
- **Option (c):** Signed now, with per-maintainer keys and a published public key list.
  - **For:** Per-maintainer keys distribute signing authority and avoid a single point of compromise.
  - **Against:** Requires publishing and maintaining a key list plus a revocation story — key infrastructure the spec does not currently scope and that continuity-and-namespace-custody will own.
- **Recommended:** (a) — the spec's load-bearing guarantee (immutable referents + checkable hashes) does not require signatures, and §5.5 defers key custody to continuity-and-namespace-custody; signing too early risks a key-management retrofit.
- **Your choice:** ✏️

### D2 — Minimum consultation window for major-version meaning changes
- **Question:** What minimum public consultation window must precede a major-version change to the three-part meaning (AI helped / I take responsibility / honest marking)? (spec §10; jointly with governance-and-stewardship.)
- **Option (a):** 30 days
  - **For:** A 30-day floor ships genuinely urgent meaning changes faster.
  - **Against:** A fixed day-count is arbitrary — §5.2.9 requires a public consultation per governance-and-stewardship but does not fix a number, and 5.5 notes the notice periods are defined in the changelog/RSS announcement.
- **Option (b):** 60 days
  - **For:** A mid-range window balances speed against notice for a high-stakes meaning change.
  - **Against:** Still an arbitrary number not grounded in the spec; §5.2.9 leaves the consultation process to governance-and-stewardship.
- **Option (c):** 90 days
  - **For:** The longest floor maximises notice before the three-part meaning changes — the highest-stakes change the spec defines.
  - **Against:** Same as (a)/(b) — no source fixes 90 days; §5.2.9 defers the consultation to governance-and-stewardship.
- **Option (d):** no fixed minimum — a change ships when governance completes its consultation, however long that takes.
  - **For:** §5.2.9 already requires a public consultation per governance-and-stewardship, and 5.5 says major-version consultations are announced through the changelog and RSS "with notice periods defined there" — so the window belongs there, not hard-coded.
  - **Against:** Without a numeric floor, a meaning change could in principle ship on an arbitrarily short consultation, weakening the protection for signers relying on the current meaning.
- **Recommended:** (d) — a fixed day-count is arbitrary here; the spec's §5.2.9 already requires a public consultation per governance-and-stewardship, so the window should be governed there, not hard-coded.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Write the versioning policy: the `vN.M` scheme (meaning-compatible major, minor revision), monotonic increase, and never-reuse rule.
2. Write the canonical-bytes definition (normative English UTF-8, line endings → `\n`, strip trailing newline) and the `sha256`-over-canonical-bytes requirement with a human-readable change note per release.
3. Write the permanent-URL and redirect policy: every version lives at a version-bearing URL, the unversioned URL redirects to current, and historical URLs are never removed or repurposed.
4. Write the deprecation and migration policy (announced with reason and migration; deprecated versions stay valid referents) and the correction rule (typo fixes ship as a new minor version naming the corrected version).
5. Specify the version manifest shape and the 12-character fingerprint display rule (presentation of the hash, not a substitute).
6. Specify translation `basedOn` pointers (version and, where practical, content hash; unversioned translations labelled).
7. Build the release tooling that refuses to publish a version whose hash does not match its canonical bytes (per D1, with or without manifest signing).
8. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- Version numbers never reused.
- Typo fixes ship as new minor versions — released bytes are never edited.
- An unresolvable `specVersion` is `check-failed`, never silently remapped.
- Minor releases never change the three-part meaning; a meaning change is a new major version preceded by consultation.
- Deprecation never invalidates old declarations.

## 5. Acceptance criteria
- [ ] Every published version resolves at a permanent URL containing its version number.
- [ ] The unversioned URL redirects to the current version and has never 404'd a historical version.
- [ ] Recomputing `sha256` over the published canonical bytes equals the published hash for every version.
- [ ] A typo fix ships as a new minor version whose change note names the version it corrects, and the old bytes remain downloadable unchanged.
- [ ] A declaration referencing a deleted or unknown version is reported as `check-failed`, never silently remapped.
- [ ] Every reviewed translation carries a `basedOn` pointer.
- [ ] Canonical presentations display the 12-character fingerprint with a verify link.
- [ ] The offline pack contains every version and manifest.
- [ ] A deprecated version remains a valid referent for old declarations.

## 6. Outputs to produce in the repository
- `docs/policies/specification-versioning.md` — versioning, canonical-bytes, hash, URL/redirect, deprecation, and correction policy.
- `scripts/release-spec.mjs` — release tooling that refuses mismatched hashes and emits the version manifest.
- `site/spec-versions.json` — the version manifest (one entry per release).

## 7. Read before building
- [`02-trust-foundations.md`](../planning/programmes/02-trust-foundations.md) — mini-plan
- [`specification-versioning-and-hashing-dsh.md`](../suggestions/specification-versioning-and-hashing-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../planning/digest/04-artifacts-and-trust.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; §8 Q4 joint owner with translation-governance)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
