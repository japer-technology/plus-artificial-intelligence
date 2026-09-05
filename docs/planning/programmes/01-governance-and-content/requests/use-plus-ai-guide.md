# Agent request — use-plus-ai-guide: Use +AI Guide

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`use-plus-ai-guide-dsh.md`](../../../../suggestions/use-plus-ai-guide-dsh.md) · seed [`use-plus-ai-guide.md`](../../../../suggestions/use-plus-ai-guide.md)
> **Effort:** S · **Phase:** P1 · **Position:** P1; refresh examples after P3 signer tools ship (they become the canonical walkthrough)
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Metadata examples pre-stabilisation
- **Question:** Which machine-readable metadata example ships before Developer Integrations stabilises?
- **Options:** (a) a single minimal declaration-link example, explicitly labelled optional/draft · (b) omit the metadata category until Developer Integrations stabilises · (c) include a full JSON-LD example now
- **Recommended:** (a) — keeps all 7 categories present while honestly flagging that metadata formats are not yet stabilised.
- **Your choice:** ✏️

### D2 — Conformance-check method before the linter exists
- **Question:** How are examples tested against the spec before the conformance linter (P2) exists?
- **Options:** (a) manual documented check against the current spec, recorded in the example inventory · (b) defer all examples until the linter exists · (c) write a small one-off check script now
- **Recommended:** (a) — satisfies "no example ships that fails a documented conformance check" without blocking on P2 tooling.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/use.html` with at least one conforming example per category: names, documents, email, code, presentations, metadata, links.
3. Distinguish visible human-readable disclosure from optional machine-readable detail, and state that machine-readable detail can never replace visible disclosure.
4. Put the first examples on the no-account path (usable before any registration, joining, or payment).
5. State that using the mark requires no permission, registration, membership, certification, or gatekeeper.
6. Make email examples honour the visible-signature and plus-addressing conventions (including `eric.mourant+ai@japer.technology`) and note plus-addressing is a disclosure convention, not identity proof.
7. Keep code examples separating human-readable attribution from optional metadata; keep link examples following durable-path/query/fragment semantics.
8. Maintain the example inventory `{ id, category, content, spec-version-tested, visible|machine-readable, tested-date, reviewer }` and test each example per §1 D2.
9. Cite the founding examples; ensure no example implies payment grants legitimacy/rank/permission; self-check against §4.

## 3. Constraints (must-nots)
- Machine-readable detail never replaces visible disclosure.
- No example implies payment grants legitimacy, rank, or permission.
- Must not infer or claim to verify AI use.
- Core examples stay on the no-account path with zero required infrastructure.

## 4. Acceptance criteria
- [ ] All seven example categories present with at least one example each.
- [ ] Every example passes a documented conformance check against the current specification.
- [ ] Visible disclosure clearly distinguished from machine-readable detail.
- [ ] The first examples are usable with no account and no payment.
- [ ] Email examples honour signature and plus-addressing conventions, including the founding example.
- [ ] Machine-readable examples labelled optional and non-replacing.
- [ ] No example implies payment grants legitimacy or permission.

## 5. Outputs to produce in the repository
- `site/use.html` — the Use +AI guide page (with the example inventory recorded inline or in a companion `site/use-examples.json`).

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`use-plus-ai-guide-dsh.md`](../../../../suggestions/use-plus-ai-guide-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
