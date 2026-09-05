# Agent request — conformance-linter: Conformance Linter

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md)
> **Source:** spec [`conformance-linter-dsh.md`](../../../../suggestions/conformance-linter-dsh.md) · seed [`conformance-linter.md`](../../../../suggestions/conformance-linter.md)
> **Effort:** M · **Phase:** P0 · **Position:** first — it gates the builder, generator, and pack review, and immediately audits the existing ~90 pages.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Hooks-contract extraction location/format
- **Question:** Where does the extracted hooks contract live, and in what format, so the linter, engine, generator, and starter kit all consume the one shared rule source?
- **Options:** (a) a versioned `site/hooks-contract.json` (machine-readable, hashable) extracted from `site/index.html`, owned by the linter at P0 and formalised by `theme-engine-and-packs` at P2 · (b) `site/hooks-contract.md` prose only · (c) no standalone artifact — the contract lives only in the linter's rule fixtures
- **Recommended:** (a) — IMPLEMENTATION-PLAN §10 requires "one machine-checkable contract extracted and documented early"; a hashable JSON is the single source the engine formalises and the generator emits against.
- **Your choice:** ✏️

### D2 — Default advice profile
- **Question:** Do advice rules ship on or off by default for casual contributors?
- **Options:** (a) all advice on by default, with a `--quiet`/CI flag to suppress it · (b) advice off by default (errors only), opt-in via `--advice` · (c) a named "casual" profile on by default plus a "strict" profile opt-in
- **Recommended:** (a) — the spec's principle "output teaches" wants advice visible; advice never fails the build, so a quiet flag covers CI without hiding guidance from contributors.
- **Your choice:** ✏️

### D3 — Fixture format
- **Question:** What fixture format does every rule ship passing and failing fixtures in?
- **Options:** (a) full-page fixtures only · (b) HTML fragments only · (c) both — HTML fragments for per-rule unit fixtures and full pages for integration fixtures
- **Recommended:** (c) — fragments keep individual rules cheap to author, full pages prove the rule against the real ~90-page shape.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Extract the hooks contract from `site/index.html` per §1 D1: shared element ids (`languageSelect`, `specContent`, `tocList`, …), class hooks (`.spec-section`, `.meaning-card`, …), the `data-text`/`data-html`/`data-title` keys, the translation script order, and the inline behavioural JS — publish it as the single versioned artifact.
3. Implement the CLI (`scripts/conformance-lint.mjs`) and a browser-local mode (`site/linter.html`) that produce identical results over the same files, run locally on `file://` with no network/build/account, and are included in the offline pack.
4. Implement the error rule set covering at least: required translation hooks in documented order; required element ids and class hooks; normative declaration wording verbatim from canonical data; metadata/assertion surfaces per machine-readable assertions; keyboard-reachable elements and visible focus per the accessibility floor; content hashes matching declared versions.
5. Implement the advice rule set covering at least: contrast margins beyond the floor, redundant alt text, unused hooks, and pack-manifest completeness — with the default profile per §1 D2.
6. Ship passing and failing fixtures per §1 D3 for every rule; every rule must cite its contract item (page contract, accessibility floor, machine-readable assertions, or this document).
7. Separate errors from advice in output: errors produce a failing exit code, advice never does; every violation names the file, line/element, rule id, contract citation, and a fix suggestion.
8. Emit machine-readable output for generators and CI, plus human-readable default output; document invocation for community contributors.
9. Implement exceptions: an exception must be recorded in the affected surface's per-theme conformance notes with reason and review date; an unrecorded exception is an error.
10. Version the rule set, announce tightening/weakening in the changelog (weakening requires a contract change), and wire the linter into `.github/workflows/deploy.yml` as a CI gate.
11. Self-check against §4; confirm the linter never modifies checked files.

## 3. Constraints (must-nots)
- The linter MUST NOT modify checked files; suggestions are reported, never applied silently.
- Advice MUST never produce a failing exit code.
- Every rule MUST cite its contract item.
- Checking signer declarations is out of scope (that is the verification checker); theme design guidance and per-theme documentation are out of scope.

## 4. Acceptance criteria
- [ ] The linter runs locally with no network, build step, or account.
- [ ] Every rule cites its contract item and ships passing and failing fixtures.
- [ ] A page missing required translation hooks fails with a precise report.
- [ ] Advice never produces a failing exit code.
- [ ] Every violation names file, element, rule, citation, and fix.
- [ ] An exception appears in the surface's per-theme conformance notes or is an error.
- [ ] The linter never modifies checked files.
- [ ] Rule-set changes appear in the changelog with migration notes.
- [ ] The linter is wired into deploy.yml and audits the existing ~90 pages.

## 5. Outputs to produce in the repository
- `scripts/conformance-lint.mjs` — the CLI linter with error/advice separation and machine-readable output.
- `site/linter.html` — the browser-local linter mode.
- `site/hooks-contract.json` — the extracted, versioned hooks contract (per §1 D1; later formalised by `theme-engine-and-packs`).
- `scripts/rules/` + `scripts/fixtures/` — the rule set and its passing/failing fixtures.

## 6. Read before building
- [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md) — mini-plan
- [`conformance-linter-dsh.md`](../../../../suggestions/conformance-linter-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
