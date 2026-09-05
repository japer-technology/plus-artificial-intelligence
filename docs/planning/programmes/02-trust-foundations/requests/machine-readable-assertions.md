# Agent request — machine-readable-assertions: Machine-Readable Assertions

> **Programme:** 02 · Trust Foundations (the Data Spine) — [`02-trust-foundations.md`](../../02-trust-foundations.md)
> **Source:** spec [`machine-readable-assertions-dsh.md`](../../../../suggestions/machine-readable-assertions-dsh.md) · seed [`machine-readable-assertions.md`](../../../../suggestions/machine-readable-assertions.md)
> **Effort:** S · **Phase:** P1 · **Position:** after the schema; it is the checker's input surface
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — JSON-LD single vs multiple blocks
- **Question:** Should the JSON-LD surface be restricted to a single script block per page, or permitted to carry the record across multiple blocks? (spec §10.)
- **Options:** (a) Single block per page — one `<script type="application/ld+json">` holds the whole record · (b) Multiple blocks permitted, with a documented merge/assemble rule · (c) Multiple blocks permitted, but only the first is authoritative.
- **Recommended:** (a) — one block per page keeps discovery deterministic and disagreement detection simple; the per-page `<meta>` and the origin well-known file already cover richer and multi-scope cases.
- **Your choice:** ✏️

### D2 — Origin-wide `assertions` extension point
- **Question:** Should the well-known file define an `assertions` extension point for origin-wide policy overrides beyond `default`/`scopes` now, or defer it? (spec §10.)
- **Options:** (a) Defer — ship `default`/`scopes` only, and add an extension point in a later assertion-format version · (b) Define the `assertions` extension point now with an empty/placeholder shape · (c) Define it now with a concrete first override (e.g. origin-wide policy).
- **Recommended:** (a) — nothing in the P1 checker path needs an origin-wide override, and §5.2.8 already lets unknown keys be ignored, so the format can grow later without breaking readers.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Specify the three assertion surfaces — `<meta name="plus-ai" content='<canonical JSON record>'>`, the JSON-LD block (per D1), and `/.well-known/plus-ai.json` — all serialising the same portable declaration record.
2. Write the discovery order (per-page `<meta>` → per-page JSON-LD → origin well-known) and the precedence rule (per-page wins for its scope; well-known governs otherwise).
3. Specify the assertion `version` field (independent of `schemaVersion`) and the well-known wrapper shape (`format`, `version`, `default`, `scopes`).
4. Write the disagreement rule (report rather than silently choose) and the surface-attribution rule (note which surface produced the record).
5. Write the no-JavaScript/no-cookies/no-fingerprinting rule and the "no machine-readable assertion found" absence wording.
6. State the stale-data behaviour (old assertions are claims about their issue date; revoked/superseded assertions update or tombstone per declaration-lifecycle, never silently edited).
7. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- Machine form never replaces the visible human-readable disclosure.
- No cookies, tracking, or client fingerprinting required to read an assertion.
- Absence is reported as "no machine-readable assertion found", never negative.
- Assertions never claim properties the declaration record cannot express; unknown extension keys are ignored.
- Publishing, reading, and checking assertions stay free and account-free.

## 4. Acceptance criteria
- [ ] The same declaration record parses identically from `<meta>`, JSON-LD, and well-known surfaces.
- [ ] A page with both a per-page tag and an origin well-known file resolves to the per-page tag for its scope.
- [ ] Disagreeing surfaces on the same scope are reported as a disagreement.
- [ ] An assertion is fully readable with JavaScript disabled.
- [ ] A page with no assertion yields "no machine-readable assertion found".
- [ ] A stale page carrying a revoked declaration's old assertion is identified as superseded or revoked by lifecycle data, not silently corrected.
- [ ] The assertion format version is independent of the declaration schema version and both are reported.

## 5. Outputs to produce in the repository
- `docs/spec/machine-readable-assertions.md` — three surfaces, discovery order, precedence, well-known shape, disagreement and absence rules.

## 6. Read before building
- [`02-trust-foundations.md`](../../02-trust-foundations.md) — mini-plan
- [`machine-readable-assertions-dsh.md`](../../../../suggestions/machine-readable-assertions-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../../../digest/04-artifacts-and-trust.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
