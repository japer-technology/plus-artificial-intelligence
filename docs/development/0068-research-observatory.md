# Development task — research-observatory: Research Observatory

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md)
> **Source:** spec [`research-observatory-dsh.md`](../suggestions/research-observatory-dsh.md) · seed [`research-observatory.md`](../suggestions/research-observatory.md)
> **Effort:** M · **Phase:** P3 · **Position:** P3 — needs a populated registry to study; the gate exists from day one
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Controlled use of public, aggregated +AI records to study disclosure, adoption, and review practices without identifying or harming disclosers.
- **Why now / risk of deferring:** It is P3 because it needs a populated registry to study, but "the gate exists from day one". Deferring the gate itself leaves research-as-surveillance with no guardrail — the ethical-review, threshold, and anti-doxxing controls must exist before the studies do.
- **Features to deliver:**
  - Documented research governance (proposal, review, conflict-declaration, publication process).
  - Ethical-review gate before any access, recorded per study.
  - Disclosure threshold (k = 10 default) published with findings.
  - Privacy-safe export rules (aggregated, stripped of identifiers/contacts/free-text, no raw dumps).
  - Neutral categories only (artifact type, language, status, coarse voluntary categories).
  - Anti-doxxing controls (pre-publication output review, cross-linking prohibition, reporting route).
  - Open publication of methods + negative findings linked to snapshot versions.
  - Corrections issued as versioned corrections, never silent edits; prohibition on selling/licensing individual-level or below-threshold data.
  - Findings publication follows the multi-language standard (R1 English source of truth, T2 explanatory tier).
- **Depends on:** public-snapshots-and-api, privacy-and-data-minimisation, privacy-respecting-analytics, experiments-and-metrics

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Third-party researcher access
- **Question:** May third-party researchers (outside the project) access aggregated views, and on what terms?
- **Option (a):** no third-party access at launch — only project-internal researchers, with the access terms for external researchers documented as a future, governed step
  - **For:** spec §10 lists third-party access as open ("Whether third-party researchers outside the project may access aggregated views, and under what terms"); shipping the gate for project-internal researchers and deferring external terms is the honest scope, and the gate "exists from day one" (mini-plan Order).
  - **Against:** None identified in the sources.
- **Option (b):** open third-party access now under published terms (proposal → ethical review → aggregated views only)
  - **For:** open access under published terms (proposal → ethical review → aggregated only) extends the observatory's value to the research community immediately.
  - **Against:** spec §10 leaves external-access terms undecided, so no spec basis exists yet for those terms; opening external access before governance settles risks premature scope.
- **Option (c):** defer the observatory entirely until external access terms exist
  - **For:** deferring the observatory entirely avoids shipping anything before access terms exist.
  - **Against:** the observatory's gate and governance are valuable without external access (spec §5.2 items 1–12 define internal research rules), and deferring entirely would strand the P3 gate the mini-plan says "exists from day one".
- **Recommended:** (a) — spec §10 leaves external access undecided; P3 ships the gate itself, and opening external access can be a later governed step.
- **Your choice:** ✏️

### D2 — Disclosure threshold value
- **Question:** What disclosure threshold is published as "in force" at launch?
- **Option (a):** confirm the spec default k = 10 distinct parties
  - **For:** spec §5.2 item 3 sets the default threshold at "k = 10 distinct parties, adjustable only by governance with statistical advice", and the threshold in force must be published with findings; other surfaces (sector views, dashboard) defer to this value (brainstorm programme-level decision 3).
  - **Against:** None identified in the sources.
- **Option (b):** adopt a higher value (e.g. k = 30) with statistical justification
  - **For:** spec §5.2 item 3 permits a higher threshold adjusted "by governance with statistical advice", which is more conservative for small groups.
  - **Against:** "no statistical case exists yet to deviate" (recommendation), and spec §5.2 item 3 makes k = 10 the default until governance acts with statistical advice.
- **Option (c):** a lower value than k = 10
  - **For:** a lower threshold would publish more granular findings.
  - **Against:** spec §5.2 item 3 fixes the default at k = 10 and only allows adjustment upward with statistical advice; lowering it increases re-identification risk against the observatory's purpose (spec §1 "cannot identify, profile, or harm the people who disclosed").
- **Recommended:** (a) — spec §5.2 item 3 sets k = 10 as default, adjustable only by governance with statistical advice; no statistical case exists yet to deviate.
- **Your choice:** ✏️

### D3 — Ethical review body
- **Question:** Who performs ethical review before the observatory has its own committee?
- **Option (a):** the specification authority / named maintainer acts as interim review body, with a documented path to an independent committee
  - **For:** spec §5.2 item 7 requires research governance to be documented (who reviews, how conflicts are declared) but does not name a specific body; spec §5.2 item 2 requires review before access, which an interim named reviewer satisfies; an interim reviewer with a published path to independence is honest and unblocks the gate.
  - **Against:** None identified in the sources.
- **Option (b):** an independent external ethics committee from day one
  - **For:** an independent external ethics committee from day one provides the strongest independence guarantee for the review gate.
  - **Against:** spec §5.2 item 7 does not require a specific (or external) body, and standing up an external committee from day one is a large dependency the P3 gate does not need (mini-plan Order: "the gate exists from day one").
- **Option (c):** no studies run until an independent committee exists
  - **For:** running no studies until an independent committee exists is the most conservative reading of "reviewed before studied".
  - **Against:** spec §5.2 items 1–12 define the observatory's rules as implementable now; blocking all studies until an external committee exists would strand the gate and contradict the mini-plan's "the gate exists from day one".
- **Recommended:** (a) — spec §5.2 item 7 requires documented governance but not a specific body; an interim named reviewer with a published path is honest and unblocks the gate.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (privacy, data minimisation, no silent change, free floor).
2. Publish `docs/research-observatory.md` documenting research governance: who may propose studies, who reviews them (per D3), how conflicts are declared, and how findings are published.
3. Require an ethical-review gate before any data access, recorded per study (purpose, re-identification risk, vulnerable groups, publication plan); use only records with `public` visibility from published snapshots.
4. Enforce the disclosure threshold per D2 and publish it with every finding; no statistic about fewer than the minimum distinct parties is published.
5. Specify privacy-safe exports: aggregated per the threshold, stripped of identifiers, contact details, and re-identifying free text; raw record dumps never exported; neutral categories only (artifact type, language, status, coarse voluntary categories).
6. Specify anti-doxxing controls: pre-publication output review, prohibition on cross-linking public records with outside datasets to identify people, and a reporting route for anyone who believes an output exposes them.
7. Require open publication of methods and negative findings alongside positive results, linked to the snapshot versions used; corrections issued as versioned corrections, never silent edits; a below-threshold breach triggers public withdrawal and correction.
8. Provide a study-record template and findings index under `docs/research/`; state that individual-level or below-threshold data is never sold or licensed; self-check against §5.
9. Apply the multi-language standard to findings publication: English is the source of truth (R1); findings are T2 explanatory content, so any translation is per-document with a visible notice (R3/R4) and machine drafts are always labelled (R15).

## 4. Constraints (must-nots)
- Only `public` snapshot data — no private/unlisted/organisation-only data.
- No identifier, contact, or raw-record exports.
- No below-threshold statistics.
- Below-threshold data never sold or licensed.
- No inferred sensitive attributes; no cross-linking to identify people.
- Published findings follow the multi-language standard (R1 English source of truth, T2 explanatory tier; machine drafts always labelled — R15).

## 5. Acceptance criteria
- [ ] No study uses anything but public snapshot data.
- [ ] Every study has a recorded ethical review before access.
- [ ] Every published statistic satisfies the published disclosure threshold.
- [ ] No research export contains identifiers, contact details, or raw records.
- [ ] Methods and negative findings are published with every study.
- [ ] A below-threshold breach triggers public withdrawal and correction.
- [ ] No individual-level data is sold or licensed.
- [ ] Findings link their source snapshot versions.

## 6. Outputs to produce in the repository
- `docs/research-observatory.md` — research governance, ethical-review gate, threshold, export rules, anti-doxxing controls.
- `docs/research/` — study-record template (`study-record.template.json`) and a findings index.

## 7. Read before building
- [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md) — mini-plan
- [`research-observatory-dsh.md`](../suggestions/research-observatory-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../planning/digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (R1/R3/R4/R15; findings as T2)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
