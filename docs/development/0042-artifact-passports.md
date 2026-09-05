# Development task — artifact-passports: Artifact Passports

> **Programme:** 03 · Signer Tools and Verification — [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md)
> **Source:** spec [`artifact-passports-dsh.md`](../suggestions/artifact-passports-dsh.md) · seed [`artifact-passports.md`](../suggestions/artifact-passports.md)
> **Effort:** M · **Phase:** P2 · **Position:** after the checker's input conventions are fixed (same discovery path)
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Stable, addressable resource presenting one declaration for one scope: status timeline, bindings, evidence, derivative links.
- **Why now / risk of deferring:** It must land after the checker's input conventions are fixed so both consume the same discovery path. Its red-line risk is responsibility-laundering: if the `derivesFrom`/`derivedBy` links ever imply a derivative inherits the upstream signer's responsibility, the trust model is broken, so the no-inheritance rule must be enforced at resource level.
- **Features to deliver:**
  - A stable passport resource keyed by a permanent identifier (`= declarationId`) resolvable at a stable URL; one scope per passport.
  - Content assembly: canonical declaration record, status timeline (lifecycle events), binding kind, evidence labels with dates, and directed derivative links (`derivesFrom`/`derivedBy`), each carrying a direction and the linked identifier.
  - Static HTML + JSON bundle (self-hosted, mirrorable, exportable); builder emits a complete self-hosted passport bundle with no upload.
  - Dynamic artifacts use scope bindings and show a labelled point-in-time "last snapshot"; visibility modes (`unlisted` excluded from directories, `public` indexable, `organisation-only` role-gated); supersession/revocation dates rendered; no rank/score/verdict.
- **Depends on:** portable-declaration-schema, declaration-lifecycle, artifact-hashing-and-binding, verification-checker, url-semantics-and-canonicalization

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Snapshot production (scope-bound passports)
- **Question:** For scope-bound (dynamic-artifact) passports, should the point-in-time snapshot be produced on demand by the checker, or stored by the passport service? (spec §10 item 1; digest "on-demand vs stored snapshots".)
- **Option (a):** On demand by the checker at check time (no storage; the snapshot is the check's own capture)
  - **For:** Self-hosted passports are fully static and cannot store snapshots (spec §5.2 item 10), and the checker's own check-run capture is already a point-in-time record.
  - **Against:** No persistent snapshot exists between checks, so a viewer must run a check to see a snapshot.
- **Option (b):** stored by a passport service when the passport is published
  - **For:** A snapshot is always available without a fresh check.
  - **Against:** Imposes a hosted storage requirement, conflicting with the static/self-hosted passport rule (spec §5.2 item 10) and the free-floor rule that hosted passports are an optional convenience, never a prerequisite (spec §2/§6).
- **Option (c):** hybrid — self-hosted passports embed a snapshot; hosted passports may refresh a stored snapshot
  - **For:** Matches spec §5.2 item 7's "last snapshot" as a point-in-time record, with self-hosted bundles embedding and hosted passports optionally refreshing.
  - **Against:** Two code paths (embed vs refresh) add complexity and risk drift between the two snapshot behaviours.
- **Recommended:** (a) or (c) — self-hosted passports are fully static and cannot store snapshots, so the checker (or the self-hosted bundle) must produce/carry them; (c) matches spec §5.2 item 7's "last snapshot" as a point-in-time record without imposing a hosted storage requirement.
- **Your choice:** ✏️

### D2 — Snapshot retention after supersession
- **Question:** How long are snapshot records retained after a passport is superseded? (spec §10 item 2; digest "snapshot retention".)
- **Option (a):** Retain the last snapshot indefinitely with the passport (append-only; old snapshots stay readable)
  - **For:** The no-silent-change invariant and append-only lifecycle (spec §5.5 and §6) favour keeping the last snapshot as a historical referent, and "artifacts move, passports persist" (spec §5.1 item 4) makes the snapshot the responsibility anchor.
  - **Against:** Unbounded growth over very long histories (though each snapshot is small).
- **Option (b):** retain for 12 months after supersession, then archive
  - **For:** Bounds storage with a predictable archive schedule.
  - **Against:** An arbitrary clock that erases the historical referent; "artifacts move, passports persist" (spec §5.1 item 4) suggests the snapshot should stay rather than expire.
- **Option (c):** retain only the current snapshot — supersession replaces it
  - **For:** Minimal storage footprint.
  - **Against:** Silently replaces the historical snapshot, violating the append-only / no-silent-change invariant (spec §5.5 and §6).
- **Recommended:** (a) — the no-silent-change invariant and append-only lifecycle favour keeping the last snapshot as a historical referent; passports are tiny, so indefinite retention is cheap and matches "artifacts move, passports persist".
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Build the static passport page template (HTML + JSON bundle) keyed by a permanent identifier equal to the declaration identifier, resolvable at a stable URL that includes that identifier.
2. Assemble passport content: the canonical declaration record, the status timeline from declaration-lifecycle, the binding kind (byte/scope/C2PA) labelled, evidence labels with dates, and the last-checked date.
3. Implement derivative links as explicit directed relationships — `derivesFrom` (upstream) and `derivedBy` (downstream) — each carrying a direction and the linked passport identifier; never imply a derivative inherits upstream responsibility.
4. Handle dynamic artifacts: scope bindings plus a labelled point-in-time "last snapshot" (date + hash), produced/stored per the D1 decision and retained per the D2 decision.
5. Respect visibility modes — `unlisted` excluded from directories but link-shareable, `public` indexable, `organisation-only` role-gated; render the issue date, spec version in force, and supersession/revocation/dispute dates.
6. Render supersession as "superseded by <id>" / "supersedes <id>"; show an honest binding mismatch when bytes change without a new declaration.
7. Emit a complete self-hosted passport bundle from the builder with no upload; keep the data exportable in the portable record format.
8. **Note for the agent — checker round-trip:** the passport URL must be consumable by the verification-checker as a declaration reference and return the same labels as checking the raw declaration (same discovery order as machine-readable-assertions).
9. **Note for the agent — page-chrome localisation:** the passport's page chrome falls back to English per key (R4), resolves language per R12 (`?lang=` → saved preference → browser → English), and sets `lang`/`dir` per content language with CJK/RTL-correct typography (R9/R10/R11); the declaration record, identifier, status URL, and binding values are protected content and never translated (R2/T0).
10. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- No implying a derivative inherits the upstream signer's responsibility.
- No rank, score, or verdict mark on any passport surface.
- Dynamic artifacts show a labelled point-in-time snapshot, never a live claim.
- No hotlinking or proxying of artifact content beyond the checker's fetch policy.
- A passport must remain creatable and keepable without payment — hosted passports are an optional convenience, never a prerequisite.
- Page chrome falls back to English per key, never all-or-nothing (R4); the declaration record, identifier, status URL, and binding values are protected content and never translated (R2/T0).
- Language resolution is fixed (R12): `?lang=` → saved preference → browser → English; only explicit choices are persisted; English stays the no-JS/crawler default (R13).
- Translations are written in logical order with no bidi control characters; surfaces set `lang`/`dir` per content language, and typography (per-script fallback fonts, CJK/RTL) follows the language (R9/R10/R11).

## 5. Acceptance criteria
- [ ] Every passport resolves at a stable URL containing its permanent identifier.
- [ ] A passport renders the declaration record, status timeline, binding kind, and last-checked date from static files alone.
- [ ] An unlisted passport is excluded from directory listings but shareable by link.
- [ ] A superseded passport displays "superseded by" with the successor's identifier.
- [ ] A dynamic-artifact passport shows a snapshot record labelled as a point-in-time capture.
- [ ] Derivative links render with direction and never imply inherited responsibility.
- [ ] The no-account builder emits a complete self-hosted passport bundle with no upload.
- [ ] A checker consumes a passport URL and returns the same labels as checking the raw declaration.
- [ ] No passport surface displays a rank, score, or verdict mark.

## 6. Outputs to produce in the repository
- `site/passport.html` — static passport page template (HTML + JSON bundle) rendering declaration/timeline/bindings/evidence/derivative links.
- `docs/spec/artifact-passports.md` — passport resource spec (identifier/URL stability, content assembly, derivative-link rules, snapshot semantics).

## 7. Read before building
- [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md) — mini-plan
- [`artifact-passports-dsh.md`](../suggestions/artifact-passports-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../planning/digest/04-artifacts-and-trust.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order, RTL/CJK)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
