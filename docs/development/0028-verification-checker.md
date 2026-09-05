# Development task — verification-checker: Verification Checker

> **Programme:** 03 · Signer Tools and Verification — [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md)
> **Source:** spec [`verification-checker-dsh.md`](../suggestions/verification-checker-dsh.md) · seed [`verification-checker.md`](../suggestions/verification-checker.md)
> **Effort:** L · **Phase:** P1→P2 · **Position:** the programme's capstone — starts after assertions + proofs-of-control; offline CLI first, hosted web/API second
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Free tool that inspects a declaration and reports what it found as dated evidence labels — offline and hosted, never an endorsement engine.
- **Why now / risk of deferring:** It is the programme's capstone and the only L, so it must start after assertions + proofs-of-control and be staged offline-first (CLI → web → API) rather than built as one monolith. Its hosted half carries the SSRF security-review risk, so skipping offline-first staging would concentrate that risk into a single late release.
- **Features to deliver:**
  - Three surfaces — offline CLI, web UI, read-only API — accepting paste/file/URL/QR input and emitting a dated evidence-label table (never a score/rank/verdict).
  - Ordered check pipeline: discovery/retrieval → syntax + schema validation → spec-version resolution → signature verification (where present) → artifact-hash comparison → control-evidence evaluation → lifecycle-status resolution → freshness recording.
  - Offline checker with bundled, versioned schemas and spec files (`file://`, zero build); hosted fetch policy (SSRF guard: resolve-validate-deny-private-ranges, bounded redirects, size/time caps); per-client and per-target-domain rate limits; no caching/reselling beyond the check.
  - Check-run record shape (`runId`, `target`, `startedAt`, dated `labels`, `schemaVersionChecked`, `specVersionChecked`); CLI exit codes distinguishing completed-with-labels from failed-run.
- **Depends on:** evidence-labels-not-trust-scores, machine-readable-assertions, portable-declaration-schema, specification-versioning-and-hashing, proofs-of-control, artifact-hashing-and-binding, declaration-lifecycle, security-and-abuse-controls

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Hosted bounded result cache
- **Question:** Should the hosted checker keep a bounded public cache of recent check runs for shareable result links, and for how long? (spec §10 item 1; digest "bounded result cache".)
- **Option (a):** No cache — results are recomputed per request and returned directly, no shareable result link
  - **For:** The strictest reading of spec §5.2 item 8 ("no caching or reselling fetched content beyond the check"), with no stored results to misread or leak.
  - **Against:** No shareable result link, and every view recomputes the check, which raises fetch volume and cost.
- **Option (b):** a short-lived cache (24 hours) with results marked by their original check date
  - **For:** Spec §5.5 requires any cached result to carry its original date and be marked as such — a 24-hour marked cache satisfies that while enabling shareable links.
  - **Against:** Even 24 hours of stored check results is a store beyond the check, and the privacy-and-data-minimisation invariant argues against any long-lived store.
- **Option (c):** a 7-day cache for shareable links, always labelled with the original check date
  - **For:** A longer window for shareable result links to stay live.
  - **Against:** Seven days is a longer retention that spec §5.2 item 8's "no caching beyond the check" and the data-minimisation invariant both argue against, and older results risk being read as current.
- **Recommended:** (b) or (a) — spec §5.5 requires any cached result to carry its original date and be marked as such, but the privacy-and-data-minimisation invariant and "no caching beyond the check" (spec §5.2 item 8) argue against any long-lived store; (b) 24-hour marked cache is the conservative middle, (a) is the strictest reading.
- **Your choice:** ✏️

### D2 — Default rate-limit numbers (cross-cutting; joint owners)
- **Question:** What are the default rate-limit numbers for the hosted checker's API and fetch path — per client and per target domain? (spec §10 item 2 + digest "rate-limit numbers"; assigned §11 cross-cutting decision from IMPLEMENTATION-PLAN. Joint owners: `security-and-abuse-controls` owns the baseline, `cost-discipline` models the operating cost — this request records the number, those two programmes finalise it before launch.)
- **Option (a):** 60 requests/hour per client and 10 fetches/minute per target domain
  - **For:** Conservative per-client and per-domain limits keep the free read path generous for humans while bounding fetch cost and abuse — satisfying spec §5.2 item 8's requirement to rate-limit per client and per target domain.
  - **Against:** The concrete numbers are a guess until `cost-discipline` models operating cost (spec §10 defers the numbers to cost-discipline modelling).
- **Option (b):** 100 requests/hour per client and 30 fetches/minute per target domain
  - **For:** More generous headroom for legitimate automated and human use.
  - **Against:** A higher fetch ceiling raises SSRF/abuse exposure and operating cost, which is less conservative than the spec's security posture (spec §5.2 item 7).
- **Option (c):** 30 requests/minute per client and 1 fetch per 10 seconds per target domain
  - **For:** The tightest bound, giving the strongest abuse protection.
  - **Against:** May throttle legitimate human use, and it is the most restrictive of the free read path the checker must keep generous (spec §5.2 item 1).
- **Recommended:** (a) — conservative per-client and per-domain limits keep the free read path generous for humans while bounding fetch cost and abuse; confirm against `security-and-abuse-controls` and `cost-discipline` before the hosted surface goes public.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Build the offline CLI first: takes a file or URL, validates syntax and schema against bundled, versioned schema and spec files with no network, emits JSON conforming to the check-run record, and exits with codes distinguishing completed-with-labels from failed-run.
2. Implement the ordered check pipeline: (a) discovery/retrieval, (b) syntax + schema validation, (c) specification-version resolution, (d) signature verification where present, (e) artifact-hash comparison where declared, (f) control-evidence evaluation where presented, (g) lifecycle-status resolution, (h) freshness recording.
3. Emit every result as a dated evidence label per evidence-labels-not-trust-scores; never a score, rank, or verdict. Unknown states render `self-declared`/`not-checked`, never omitted; failed retrieval renders `check-failed` with a reason category (unreachable/timeout/blocked/malformed/permission).
4. Build the hosted web UI (paste/file/URL/QR input → label-table output) and the read-only API; both enforce the SSRF fetch policy — resolve and validate targets, deny private/link-local ranges, disable redirects to disallowed addresses, cap fetch size and time.
5. Apply the D2 rate limits per client and per target domain; implement the D1 result-cache decision exactly; never cache or resell fetched content beyond the check.
6. Accept QR targets, `.well-known` URLs, page metadata, and portable declaration files as input; for third-party fetches use minimum bytes (ranged requests) and respect robots/rate guidance.
7. Record what was checked, when, and against which schema and spec versions; record the checker's own version so older outputs stay interpretable; never imply endorsement or truth of claims.
8. **Note for the agent — hosted deployment gate:** the offline CLI ships with no gate; the hosted web UI and API must not go public until `security-and-abuse-controls` (SSRF) has reviewed them and the static-first failure-mode statement is published (Programme 8). Keep the offline-first staging so the L is sequenced, not monolithic.
9. **Note for the agent — label/result language:** render labels and results in the language resolved per R12 (`?lang=` → saved preference → browser → English), with per-key English fallback (R4) and `lang`/`dir` set per rendered label (R9) so a fallback label inside an RTL page still lays out; the evidence-label vocabulary is T1 normative, so its translations are `reviewed`-only (R5) — never machine-draft, never presented as reviewed without a recorded reviewer.
10. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- No scores, ranks, or single verdict marks; no aggregate verdict on any surface.
- Unknown states labelled `self-declared`/`not-checked`, never omitted.
- No caching or reselling of fetched content beyond the check; the API is read-only with no write path.
- "Schema valid"/"signature valid" never implies claims are true; unreachable targets are "check failed", never evidence of wrongdoing.
- Basic checking stays free; no payment may change an outcome or suppress a label.
- The evidence-label vocabulary is T1 normative — its translations are `reviewed`-only, never machine-draft, and never presented as reviewed without a recorded reviewer (R5/R7); where a translation could be misread, the English label term stays visible.
- Results/label rendering falls back to English per key (R4) and resolves language per R12; `lang`/`dir` are set per rendered label so a fallback label renders correctly regardless of page direction (R9).
- The checker's protected set (`+AI`, label-vocabulary tokens, JSON wire keys, schema/spec version strings) is never translated (R2/T0).

## 5. Acceptance criteria
- [ ] A pasted or local declaration is fully checked offline with no network.
- [ ] Every result label carries a check date and the schema and specification versions checked.
- [ ] No result surface contains a score, rank, or single verdict mark.
- [ ] A declaration with an unreachable artifact URL renders `check-failed` with reason "unreachable", not a negative label.
- [ ] The hosted checker refuses targets that resolve to private or link-local addresses.
- [ ] An expired control label renders as `stale` with its original date.
- [ ] A revoked declaration is reported `revoked` with the lifecycle event date.
- [ ] The checker API is read-only and rate-limited.
- [ ] The offline checker opens from disk with zero build steps and no fetch.

## 6. Outputs to produce in the repository
- `scripts/check-declaration.mjs` — offline CLI with bundled schemas, `file://`-safe, zero build.
- `site/checker.html` — web UI (paste/file/URL/QR input, label-table output, mandatory disclaimer).
- `docs/spec/verification-checker.md` — check pipeline + discovery order, fetch policy (SSRF), the D2 rate-limit table, the read-only API contract, and the check-run record schema.

## 7. Read before building
- [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md) — mini-plan
- [`verification-checker-dsh.md`](../suggestions/verification-checker-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../planning/digest/04-artifacts-and-trust.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order, RTL/CJK)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
