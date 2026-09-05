# Agent request — evidence-and-compliance-exports: Evidence and Compliance Exports

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md)
> **Source:** spec [`evidence-and-compliance-exports-dsh.md`](../../../../suggestions/evidence-and-compliance-exports-dsh.md) · seed [`evidence-and-compliance-exports.md`](../../../../suggestions/evidence-and-compliance-exports.md)
> **Effort:** M · **Phase:** P3 · **Position:** after workspaces (it bundles workspace data)
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Scheduled bundles: on-demand vs recurring at launch
- **Question:** Are recurring (scheduled) bundles a first-tier feature, or on-demand only at launch?
- **Options:** (a) on-demand only at launch; recurring schedule is a later tier · (b) recurring schedule is a first-tier feature · (c) on-demand only permanently, never recurring
- **Recommended:** (a) — spec §10 frames recurrence as the open question; on-demand-first matches §5.2.7 ("scheduled re-issue MUST be offered where the requester needs freshness") without committing to a scheduler at launch.
- **Your choice:** ✏️

### D2 — Default expiry window per record class
- **Question:** What default expiry/staleness window applies per record class?
- **Options:** (a) defer exact windows to proofs-of-control freshness windows (spec §10); publish "follows the freshness window owned by proofs-of-control" until set · (b) set a single default now (e.g. 90 days) for all bundles · (c) set per-class defaults here (declarations, status history, control evidence, policies)
- **Recommended:** (a) — the spec §10 explicitly says expiry "should follow the freshness windows owned by proofs of control"; do not duplicate that owner here.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Specify the bundle format (spec §5.3): a required scope statement (parties, artifacts/scopes, date range, record classes) that the bundle must never exceed; per-item entries with declarationId, `sha256` hash, source snapshot version, and evidence labels; a detached manifest signature; an expiry; and a standing no-certification warning.
3. Write `scripts/verify-export-bundle.mjs` — an offline, account-free verifier that recomputes item hashes, checks the manifest signature, and flags any item outside the declared scope or any tampered item.
4. Enforce assembly-time privacy: `local` records never included; `unlisted` and `organisation-only` records excluded from public bundles; field-level redaction leaves explicit `[redacted]` markers, never silent gaps.
5. Specify provenance: each declaration carries its declarationId, dated event sequence, and control-evidence labels at issuance and last check.
6. Specify expiry per D2 and staleness labelling (an expired bundle renders "stale" and is never presented as current), with scheduled re-issue where the requester needs freshness (per D1).
7. Specify access control: bundles containing non-public records resolve only for the granted organisation role, with access grants recorded.
8. Specify optional professional review (criteria-published, reviewer-dated, criteria-versioned, never certification/endorsement/trust mark) and the standing warning that an export records facts and evidence labels and is not a certification or truth verdict.
9. Write `docs/services/evidence-and-compliance-exports.md` including the Programme 8 gates: static-first failure-mode statement (service stops → individual records remain exportable in portable formats and a final export is produced), threat model, privacy analysis, and per-record cost model; confirm payment buys scheduling/packaging/access only, never a more favourable record.
10. Keep the human-readable index and standing warning in English (R1 source of truth); note that a localised index is a later enhancement, not a launch requirement. Self-check against §4.

## 3. Constraints (must-nots)
- Never certification, endorsement, or a trust score; no bundle asserts more than "these records existed and said this".
- `local` records never included; `unlisted`/`organisation-only` records excluded from public bundles; redaction uses explicit `[redacted]` markers, never silent gaps.
- Payment never buys a more favourable record, legitimacy, rank, or permission.
- Bundles are immutable once issued; a corrected bundle is a new version, never an edit in place.
- The signer's own free export right is unchanged — portable export stays free and without justification on the no-account path.
- Bundle content is an offline data artifact with no localised chrome at launch; user-facing copy stays English (R1).

## 4. Acceptance criteria
- [ ] A bundle manifest lists every item with identifier, hash, and source snapshot.
- [ ] A bundle opens and verifies offline with no account.
- [ ] A bundle refuses to include records outside its declared scope.
- [ ] A `local` record never appears, and `unlisted`/`organisation-only` records are excluded from public bundles.
- [ ] Redaction leaves explicit `[redacted]` markers, never silent gaps.
- [ ] Tampering with any item is detectable from the signed manifest.
- [ ] An expired bundle renders "stale" and is not presented as current.
- [ ] A non-public bundle resolves only for the granted organisation role.
- [ ] No bundle or review output is presented as certification or a trust score.
- [ ] The export service publishes a privacy analysis, threat model, and failure-mode statement before launch.

## 5. Outputs to produce in the repository
- `docs/services/evidence-and-compliance-exports.md` — bundle format and assembly rules + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.
- `scripts/verify-export-bundle.mjs` — offline bundle verifier (hash recomputation, signature check, scope enforcement).

## 6. Read before building
- [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md) — mini-plan
- [`evidence-and-compliance-exports-dsh.md`](../../../../suggestions/evidence-and-compliance-exports-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../../../digest/06-funding-and-optional-services.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
