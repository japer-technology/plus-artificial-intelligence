# Agent request — specification-versioning-and-hashing: Specification Versioning and Hashing

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../../02-trust-foundations.md)
> **Source:** spec [`specification-versioning-and-hashing-dsh.md`](../../../../suggestions/specification-versioning-and-hashing-dsh.md) · seed [`specification-versioning-and-hashing.md`](../../../../suggestions/specification-versioning-and-hashing.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 — unblocks the schema's `specVersion` field and every hash comparison
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Signing release manifests
- **Question:** Should release manifests be signed, and if so by which keys? (spec §10; jointly with continuity-and-namespace-custody.)
- **Options:** (a) Unsigned for now — ship the versioning/hash discipline without signature, and add manifest signing once continuity-and-namespace-custody establishes key custody · (b) Signed now with a project release key · (c) Signed now, with per-maintainer keys and a published public key list.
- **Recommended:** (a) — the spec's load-bearing guarantee (immutable referents + checkable hashes) does not require signatures, and §5.5 defers key custody to continuity-and-namespace-custody; signing too early risks a key-management retrofit.
- **Your choice:** ✏️

### D2 — Minimum consultation window for major-version meaning changes
- **Question:** What minimum public consultation window must precede a major-version change to the three-part meaning (AI helped / I take responsibility / honest marking)? (spec §10; jointly with governance-and-stewardship.)
- **Options:** (a) 30 days · (b) 60 days · (c) 90 days · (d) no fixed minimum — a change ships when governance completes its consultation, however long that takes.
- **Recommended:** (d) — a fixed day-count is arbitrary here; the spec's §5.2.9 already requires a public consultation per governance-and-stewardship, so the window should be governed there, not hard-coded.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Write the versioning policy: the `vN.M` scheme (meaning-compatible major, minor revision), monotonic increase, and never-reuse rule.
2. Write the canonical-bytes definition (normative English UTF-8, line endings → `\n`, strip trailing newline) and the `sha256`-over-canonical-bytes requirement with a human-readable change note per release.
3. Write the permanent-URL and redirect policy: every version lives at a version-bearing URL, the unversioned URL redirects to current, and historical URLs are never removed or repurposed.
4. Write the deprecation and migration policy (announced with reason and migration; deprecated versions stay valid referents) and the correction rule (typo fixes ship as a new minor version naming the corrected version).
5. Specify the version manifest shape and the 12-character fingerprint display rule (presentation of the hash, not a substitute).
6. Specify translation `basedOn` pointers (version and, where practical, content hash; unversioned translations labelled).
7. Build the release tooling that refuses to publish a version whose hash does not match its canonical bytes (per D1, with or without manifest signing).
8. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- Version numbers never reused.
- Typo fixes ship as new minor versions — released bytes are never edited.
- An unresolvable `specVersion` is `check-failed`, never silently remapped.
- Minor releases never change the three-part meaning; a meaning change is a new major version preceded by consultation.
- Deprecation never invalidates old declarations.

## 4. Acceptance criteria
- [ ] Every published version resolves at a permanent URL containing its version number.
- [ ] The unversioned URL redirects to the current version and has never 404'd a historical version.
- [ ] Recomputing `sha256` over the published canonical bytes equals the published hash for every version.
- [ ] A typo fix ships as a new minor version whose change note names the version it corrects, and the old bytes remain downloadable unchanged.
- [ ] A declaration referencing a deleted or unknown version is reported as `check-failed`, never silently remapped.
- [ ] Every reviewed translation carries a `basedOn` pointer.
- [ ] Canonical presentations display the 12-character fingerprint with a verify link.
- [ ] The offline pack contains every version and manifest.
- [ ] A deprecated version remains a valid referent for old declarations.

## 5. Outputs to produce in the repository
- `docs/policies/specification-versioning.md` — versioning, canonical-bytes, hash, URL/redirect, deprecation, and correction policy.
- `scripts/release-spec.mjs` — release tooling that refuses mismatched hashes and emits the version manifest.
- `site/spec-versions.json` — the version manifest (one entry per release).

## 6. Read before building
- [`02-trust-foundations.md`](../../02-trust-foundations.md) — mini-plan
- [`specification-versioning-and-hashing-dsh.md`](../../../../suggestions/specification-versioning-and-hashing-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../../../digest/04-artifacts-and-trust.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; §8 Q4 joint owner with translation-governance)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
