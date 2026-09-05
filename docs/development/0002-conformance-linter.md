# Development task — conformance-linter: Conformance Linter

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md)
> **Source:** spec [`conformance-linter-dsh.md`](../suggestions/conformance-linter-dsh.md) · seed [`conformance-linter.md`](../suggestions/conformance-linter.md)
> **Effort:** M · **Phase:** P0 · **Position:** first — it gates the builder, generator, and pack review, and immediately audits the existing ~90 pages.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Automated check of every presentation/export/integration against the shared hooks contract — the machine that makes drift visible.
- **Why now / risk of deferring:** Ordered first because it gates the builder, generator, and pack review, and immediately audits the existing ~90 pages (mini-plan Order). Risk: "linter adoption" — a linter that only the project runs is a cost, so it must ship as the builder's gate and the `deploy.yml` CI gate to earn its keep immediately (programme Risks).
- **Features to deliver:**
  - A CLI (`scripts/conformance-lint.mjs`) and a browser-local mode (`site/linter.html`) producing identical results.
  - Error/advice rule sets with passing + failing fixtures.
  - Machine-readable output for generators and CI.
  - Error rules covering translation hooks, element ids/class hooks, verbatim declaration wording, metadata/assertion surfaces, keyboard reach + focus, and content hashes.
  - Advice rules covering contrast margins, redundant alt text, unused hooks, and pack-manifest completeness.
  - Exception records landing in per-theme conformance notes.
  - A versioned, changelog-announced rule set.
- **Depends on:** accessibility-floor (mechanical checks), machine-readable-assertions (metadata rules later)

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Hooks-contract extraction location/format
- **Question:** Where does the extracted hooks contract live, and in what format, so the linter, engine, generator, and starter kit all consume the one shared rule source?
- **Option (a):** a versioned `site/hooks-contract.json` (machine-readable, hashable) extracted from `site/index.html`, owned by the linter at P0 and formalised by `theme-engine-and-packs` at P2
  - **For:** IMPLEMENTATION-PLAN §10 requires "one machine-checkable contract extracted and documented early"; a hashable JSON is the single source the engine formalises at P2 and the generator emits against (brainstorm programme-level decision 2).
  - **Against:** JSON is not directly human-readable prose, so contributors still need a rendered form of the contract.
- **Option (b):** `site/hooks-contract.md` prose only
  - **For:** Prose is human-readable and fits the docs-first workflow.
  - **Against:** Prose-only is not machine-checkable/hashable in the way the engine and generator need, so it fails the "one machine-checkable contract" requirement the shared rule source must meet (brainstorm programme-level decision 2).
- **Option (c):** no standalone artifact — the contract lives only in the linter's rule fixtures
  - **For:** No extra artifact to maintain.
  - **Against:** Fixtures-only leaves no standalone shared source for `theme-engine-and-packs` to formalise at P2, so the contract stays duplicated across tools (brainstorm open questions: contract extraction is shared with the engine).
- **Recommended:** (a) — IMPLEMENTATION-PLAN §10 requires "one machine-checkable contract extracted and documented early"; a hashable JSON is the single source the engine formalises and the generator emits against.
- **Your choice:** ✏️

### D2 — Default advice profile
- **Question:** Do advice rules ship on or off by default for casual contributors?
- **Option (a):** all advice on by default, with a `--quiet`/CI flag to suppress it
  - **For:** The spec's principle "output teaches" (spec §5.1 item 4) wants advice visible, and advice never fails the build (spec §5.2 item 5), so a quiet flag covers CI without hiding guidance.
  - **Against:** A noisy all-advice default can overwhelm casual contributors (spec §10 flags "default on/off profile for casual contributors" as the open question).
- **Option (b):** advice off by default (errors only), opt-in via `--advice`
  - **For:** An errors-only default is less intimidating for casual contributors.
  - **Against:** Hides guidance by default, contradicting "output teaches" (spec §5.1 item 4) and the advice rules the spec requires (spec §5.2 item 4).
- **Option (c):** a named "casual" profile on by default plus a "strict" profile opt-in
  - **For:** Gives a named casual profile without suppressing all advice.
  - **Against:** Introduces a second profile concept where spec §10 only asks about a default on/off profile, adding surface to document for little gain.
- **Recommended:** (a) — the spec's principle "output teaches" wants advice visible; advice never fails the build, so a quiet flag covers CI without hiding guidance from contributors.
- **Your choice:** ✏️

### D3 — Fixture format
- **Question:** What fixture format does every rule ship passing and failing fixtures in?
- **Option (a):** full-page fixtures only
  - **For:** Full pages prove each rule against the real ~90-page shape the linter audits.
  - **Against:** Expensive to author per rule, and spec §5.2 item 2 requires passing and failing fixtures for every rule.
- **Option (b):** HTML fragments only
  - **For:** Fragments keep individual rules cheap to author.
  - **Against:** Fragments alone never prove a rule against the real full-page shape, so integration failures on the ~90 pages can slip through.
- **Option (c):** both — HTML fragments for per-rule unit fixtures and full pages for integration fixtures
  - **For:** Fragments keep individual rules cheap to author, while full pages prove the rule against the real ~90-page shape.
  - **Against:** Two fixture forms to maintain in the fixture corpus.
- **Recommended:** (c) — fragments keep individual rules cheap to author, full pages prove the rule against the real ~90-page shape.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Extract the hooks contract from `site/index.html` per §2 D1: shared element ids (`languageSelect`, `specContent`, `tocList`, …), class hooks (`.spec-section`, `.meaning-card`, …), the `data-text`/`data-html`/`data-title` keys, the translation script order, and the inline behavioural JS — publish it as the single versioned artifact.
3. Implement the CLI (`scripts/conformance-lint.mjs`) and a browser-local mode (`site/linter.html`) that produce identical results over the same files, run locally on `file://` with no network/build/account, and are included in the offline pack.
4. Implement the error rule set covering at least: required translation hooks in documented order; required element ids and class hooks; normative declaration wording verbatim from canonical data; metadata/assertion surfaces per machine-readable assertions; keyboard-reachable elements and visible focus per the accessibility floor; content hashes matching declared versions.
5. Implement the advice rule set covering at least: contrast margins beyond the floor, redundant alt text, unused hooks, and pack-manifest completeness — with the default profile per §2 D2.
6. Ship passing and failing fixtures per §2 D3 for every rule; every rule must cite its contract item (page contract, accessibility floor, machine-readable assertions, or this document).
7. Separate errors from advice in output: errors produce a failing exit code, advice never does; every violation names the file, line/element, rule id, contract citation, and a fix suggestion.
8. Emit machine-readable output for generators and CI, plus human-readable default output; document invocation for community contributors.
9. Implement exceptions: an exception must be recorded in the affected surface's per-theme conformance notes with reason and review date; an unrecorded exception is an error.
10. Version the rule set, announce tightening/weakening in the changelog (weakening requires a contract change), and wire the linter into `.github/workflows/deploy.yml` as a CI gate.
11. Self-check against §5; confirm the linter never modifies checked files.

## 4. Constraints (must-nots)
- The linter MUST NOT modify checked files; suggestions are reported, never applied silently.
- Advice MUST never produce a failing exit code.
- Every rule MUST cite its contract item.
- Checking signer declarations is out of scope (that is the verification checker); theme design guidance and per-theme documentation are out of scope.

## 5. Acceptance criteria
- [ ] The linter runs locally with no network, build step, or account.
- [ ] Every rule cites its contract item and ships passing and failing fixtures.
- [ ] A page missing required translation hooks fails with a precise report.
- [ ] Advice never produces a failing exit code.
- [ ] Every violation names file, element, rule, citation, and fix.
- [ ] An exception appears in the surface's per-theme conformance notes or is an error.
- [ ] The linter never modifies checked files.
- [ ] Rule-set changes appear in the changelog with migration notes.
- [ ] The linter is wired into deploy.yml and audits the existing ~90 pages.

## 6. Outputs to produce in the repository
- `scripts/conformance-lint.mjs` — the CLI linter with error/advice separation and machine-readable output.
- `site/linter.html` — the browser-local linter mode.
- `site/hooks-contract.json` — the extracted, versioned hooks contract (per §2 D1; later formalised by `theme-engine-and-packs`).
- `scripts/rules/` + `scripts/fixtures/` — the rule set and its passing/failing fixtures.

## 7. Read before building
- [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md) — mini-plan
- [`conformance-linter-dsh.md`](../suggestions/conformance-linter-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
