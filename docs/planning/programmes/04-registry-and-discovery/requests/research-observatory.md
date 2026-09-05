# Agent request — research-observatory: Research Observatory

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md)
> **Source:** spec [`research-observatory-dsh.md`](../../../../suggestions/research-observatory-dsh.md) · seed [`research-observatory.md`](../../../../suggestions/research-observatory.md)
> **Effort:** M · **Phase:** P3 · **Position:** P3 — needs a populated registry to study; the gate exists from day one
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Third-party researcher access
- **Question:** May third-party researchers (outside the project) access aggregated views, and on what terms?
- **Options:** (a) no third-party access at launch — only project-internal researchers, with the access terms for external researchers documented as a future, governed step · (b) open third-party access now under published terms (proposal → ethical review → aggregated views only) · (c) defer the observatory entirely until external access terms exist
- **Recommended:** (a) — spec §10 leaves external access undecided; P3 ships the gate itself, and opening external access can be a later governed step.
- **Your choice:** ✏️

### D2 — Disclosure threshold value
- **Question:** What disclosure threshold is published as "in force" at launch?
- **Options:** (a) confirm the spec default k = 10 distinct parties · (b) adopt a higher value (e.g. k = 30) with statistical justification · (c) a lower value than k = 10
- **Recommended:** (a) — spec §5.2 item 3 sets k = 10 as default, adjustable only by governance with statistical advice; no statistical case exists yet to deviate.
- **Your choice:** ✏️

### D3 — Ethical review body
- **Question:** Who performs ethical review before the observatory has its own committee?
- **Options:** (a) the specification authority / named maintainer acts as interim review body, with a documented path to an independent committee · (b) an independent external ethics committee from day one · (c) no studies run until an independent committee exists
- **Recommended:** (a) — spec §5.2 item 7 requires documented governance but not a specific body; an interim named reviewer with a published path is honest and unblocks the gate.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (privacy, data minimisation, no silent change, free floor).
2. Publish `docs/research-observatory.md` documenting research governance: who may propose studies, who reviews them (per D3), how conflicts are declared, and how findings are published.
3. Require an ethical-review gate before any data access, recorded per study (purpose, re-identification risk, vulnerable groups, publication plan); use only records with `public` visibility from published snapshots.
4. Enforce the disclosure threshold per D2 and publish it with every finding; no statistic about fewer than the minimum distinct parties is published.
5. Specify privacy-safe exports: aggregated per the threshold, stripped of identifiers, contact details, and re-identifying free text; raw record dumps never exported; neutral categories only (artifact type, language, status, coarse voluntary categories).
6. Specify anti-doxxing controls: pre-publication output review, prohibition on cross-linking public records with outside datasets to identify people, and a reporting route for anyone who believes an output exposes them.
7. Require open publication of methods and negative findings alongside positive results, linked to the snapshot versions used; corrections issued as versioned corrections, never silent edits; a below-threshold breach triggers public withdrawal and correction.
8. Provide a study-record template and findings index under `docs/research/`; state that individual-level or below-threshold data is never sold or licensed; self-check against §4.
9. Apply the multi-language standard to findings publication: English is the source of truth (R1); findings are T2 explanatory content, so any translation is per-document with a visible notice (R3/R4) and machine drafts are always labelled (R15).

## 3. Constraints (must-nots)
- Only `public` snapshot data — no private/unlisted/organisation-only data.
- No identifier, contact, or raw-record exports.
- No below-threshold statistics.
- Below-threshold data never sold or licensed.
- No inferred sensitive attributes; no cross-linking to identify people.
- Published findings follow the multi-language standard (R1 English source of truth, T2 explanatory tier; machine drafts always labelled — R15).

## 4. Acceptance criteria
- [ ] No study uses anything but public snapshot data.
- [ ] Every study has a recorded ethical review before access.
- [ ] Every published statistic satisfies the published disclosure threshold.
- [ ] No research export contains identifiers, contact details, or raw records.
- [ ] Methods and negative findings are published with every study.
- [ ] A below-threshold breach triggers public withdrawal and correction.
- [ ] No individual-level data is sold or licensed.
- [ ] Findings link their source snapshot versions.

## 5. Outputs to produce in the repository
- `docs/research-observatory.md` — research governance, ethical-review gate, threshold, export rules, anti-doxxing controls.
- `docs/research/` — study-record template (`study-record.template.json`) and a findings index.

## 6. Read before building
- [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md) — mini-plan
- [`research-observatory-dsh.md`](../../../../suggestions/research-observatory-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../../../digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (R1/R3/R4/R15; findings as T2)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
