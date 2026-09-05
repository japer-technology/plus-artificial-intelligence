# Development task — use-plus-ai-guide: Use +AI Guide

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`use-plus-ai-guide-dsh.md`](../suggestions/use-plus-ai-guide-dsh.md) · seed [`use-plus-ai-guide.md`](../suggestions/use-plus-ai-guide.md)
> **Effort:** S · **Phase:** P1 · **Position:** P1; refresh examples after P3 signer tools ship (they become the canonical walkthrough)
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Adoption page with working, conforming examples across 7 categories, all usable before any registration.
- **Why now / risk of deferring:** The guide is the "use-first" adoption path — a visitor can adopt the mark in one session before any registration (spec §5.1) — and it consumes the canonical wording the P0 docs settle (brainstorm §4). Risk: examples silently drifting from the spec — guarded by per-example spec-version tracking and re-testing (brainstorm open risks).
- **Features to deliver:**
  - One static `site/use.html`.
  - ≥1 conforming example per 7 categories (names, documents, email, code, presentations, metadata, links).
  - The visible-vs-machine-readable distinction.
  - No-account first examples.
  - A per-example inventory (`{id, category, content, spec-version-tested, visible|machine-readable, tested-date, reviewer}`).
  - A re-test-on-spec-change discipline.
- **Depends on:** email-signature-kit, plus-addressing-convention, developer-integrations, public-usage-guidelines; examples re-checked via conformance-linter once it exists

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Metadata examples pre-stabilisation
- **Question:** Which machine-readable metadata example ships before Developer Integrations stabilises?
- **Option (a):** a single minimal declaration-link example, explicitly labelled optional/draft
  - **For:** Keeps all 7 categories present (spec §5.2.1 requires at least one per category) while honestly flagging that metadata formats are not yet stabilised (spec §10; digest "Open: which metadata examples to include pre-stabilisation").
  - **Against:** Ships a draft/optional metadata example that must be re-checked once Developer Integrations stabilises (spec §5.5 re-test discipline), adding a refresh obligation.
- **Option (b):** omit the metadata category until Developer Integrations stabilises
  - **For:** Avoids shipping any metadata example that could later contradict the stabilised Developer Integrations format.
  - **Against:** Leaves the metadata category with no example, violating spec §5.2.1's "at least one conforming example for each" requirement and the digest's "Done when" (all 7 categories present).
- **Option (c):** include a full JSON-LD example now
  - **For:** Gives a richer machine-readable example immediately.
  - **Against:** A full JSON-LD example now risks contradicting the not-yet-stabilised Developer Integrations format (spec §10 open question), and the spec only requires a minimal conforming example.
- **Recommended:** (a) — keeps all 7 categories present while honestly flagging that metadata formats are not yet stabilised.
- **Your choice:** ✏️

### D2 — Conformance-check method before the linter exists
- **Question:** How are examples tested against the spec before the conformance linter (P2) exists?
- **Option (a):** manual documented check against the current spec, recorded in the example inventory
  - **For:** Spec §5.2.2 requires every example tested against the current spec, and the example inventory (spec §5.3) records the check; a manual documented check satisfies "no example ships that fails a documented conformance check" without blocking on P2 tooling.
  - **Against:** Manual checks are slower and less repeatable than the eventual linter (spec §7 defers automated checks to Conformance Linter), so it is a stopgap until P2.
- **Option (b):** defer all examples until the linter exists
  - **For:** Guarantees the check is automated and consistent from day one.
  - **Against:** Blocks a P1 deliverable on P2 tooling (the conformance linter), contradicting the mini-plan Order (P1; refresh later) and leaving the guide absent in the interim.
- **Option (c):** write a small one-off check script now
  - **For:** Provides repeatable automated checking earlier than the official linter.
  - **Against:** Duplicates work the Conformance Linter will own (spec §7), and a one-off script is not the documented project check the spec's §5.3 inventory expects to reference.
- **Recommended:** (a) — satisfies "no example ships that fails a documented conformance check" without blocking on P2 tooling.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/use.html` with at least one conforming example per category: names, documents, email, code, presentations, metadata, links.
3. Distinguish visible human-readable disclosure from optional machine-readable detail, and state that machine-readable detail can never replace visible disclosure.
4. Put the first examples on the no-account path (usable before any registration, joining, or payment).
5. State that using the mark requires no permission, registration, membership, certification, or gatekeeper.
6. Make email examples honour the visible-signature and plus-addressing conventions (including `eric.mourant+ai@japer.technology`) and note plus-addressing is a disclosure convention, not identity proof.
7. Keep code examples separating human-readable attribution from optional metadata; keep link examples following durable-path/query/fragment semantics.
8. Maintain the example inventory `{ id, category, content, spec-version-tested, visible|machine-readable, tested-date, reviewer }` and test each example per §2 D2.
9. Cite the founding examples; ensure no example implies payment grants legitimacy/rank/permission; self-check against §5.

## 4. Constraints (must-nots)
- Machine-readable detail never replaces visible disclosure.
- No example implies payment grants legitimacy, rank, or permission.
- Must not infer or claim to verify AI use.
- Core examples stay on the no-account path with zero required infrastructure.

## 5. Acceptance criteria
- [ ] All seven example categories present with at least one example each.
- [ ] Every example passes a documented conformance check against the current specification.
- [ ] Visible disclosure clearly distinguished from machine-readable detail.
- [ ] The first examples are usable with no account and no payment.
- [ ] Email examples honour signature and plus-addressing conventions, including the founding example.
- [ ] Machine-readable examples labelled optional and non-replacing.
- [ ] No example implies payment grants legitimacy or permission.

## 6. Outputs to produce in the repository
- `site/use.html` — the Use +AI guide page (with the example inventory recorded inline or in a companion `site/use-examples.json`).

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`use-plus-ai-guide-dsh.md`](../suggestions/use-plus-ai-guide-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
