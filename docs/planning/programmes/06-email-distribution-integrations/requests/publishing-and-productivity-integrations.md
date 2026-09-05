# Agent request — publishing-and-productivity-integrations: Publishing and Productivity Integrations

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../../06-email-distribution-integrations.md)
> **Source:** spec [`publishing-and-productivity-integrations-dsh.md`](../../../../suggestions/publishing-and-productivity-integrations-dsh.md) · seed [`publishing-and-productivity-integrations.md`](../../../../suggestions/publishing-and-productivity-integrations.md)
> **Effort:** L · **Phase:** P3 · **Position:** P3 — ecosystem work that pays off only after the core tools and formats are stable.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Target ecosystems (first wave)
- **Question:** Which specific CMS/SSG/editor ecosystems does the first wave of reference integrations target? (spec §10 item 1; digest "target ecosystems".)
- **Options:** (a) static-site generators (e.g. Hugo, Jekyll, Eleventy) + repository templates + CMS page-metadata workflows first · (b) the above plus one document editor (e.g. Obsidian) · (c) the above plus a newsroom/learning-platform host.
- **Recommended:** (a) — spec §5.2 item 11 prioritises static-site generators, repository templates, and CMS page-metadata workflows as proven, static-first, low-lock-in; broader hosts (proprietary/remote-only APIs) come later.
- **Your choice:** ✏️

### D2 — Formal conformance result vs self-declaration
- **Question:** Should integrations carry a formal conformance-linter result, or a plain self-declaration of target versions? (spec §10 item 2; digest "formal conformance result".)
- **Options:** (a) a formal conformance-linter result in every integration manifest · (b) a plain self-declaration (declared `schemaVersionTarget` + `interfaceVersion`), no linter result · (c) self-declaration mandatory, a linter pass optional/recommended.
- **Recommended:** (c) — spec §5.2 item 8 already makes declaring target versions mandatory (loud failure on newer versions); a mandatory linter result would gate P3 on Programme 5's linter maturity. Self-declaration required, formal linter result recommended where available.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Define the adapter contract every integration honours: adapter over the portable-declaration-schema record and the machine-readable-assertions surfaces; never a competing record format or metadata vocabulary.
2. Build the D1 reference integrations (at least one free/offline reference implementation per proven workflow), prioritising static-first, file-based hosts.
3. Enforce same-inputs-same-bytes: for the same inputs, every integration produces the same visible text, record, and metadata as the no-account builder, so results stay portable across tools.
4. Implement import/export of `.plus-ai.json` in every host; import renders the record's current lifecycle status, never a presumed `active`.
5. Separate pre-fill from issue: a pre-filled draft is visibly a draft; only an explicit user action issues; never issue, sign, or publish in another person's name.
6. Enforce data ownership: outputs go only to user-controlled locations (local file, repository, CMS content); no silent upload of the record or personal data to a third party.
7. Publish an integration manifest per integration (host, targets, `schemaVersionTarget`, `interfaceVersion`, maintainer, maintained/unmaintained status); fail loudly (never silently reinterpret) on records using newer versions.
8. Enforce permissions (no forced tool/prompt disclosure; respect the host permission model), moderation (shared-platform posts are human-authored, never project-endorsed; no automated posting without confirmation), and the no-trust-score rule (evidence labels only).
9. Never gate the no-account path: a paid CMS/platform is the user's choice, never a project requirement, and payment buys no legitimacy, rank, or permission.
10. Apply the D2 conformance-result decision.
11. Apply the multi-language constraints below: integrations emit the builder's localised visible text, so the standard governs what they render.
12. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- Never issue, sign, or publish in another person's name; the human takes the issuing step (automation may only pre-fill).
- No silent upload — outputs only to user-controlled locations.
- No trust score, rank, or single verdict; any status uses the evidence-labels vocabulary.
- Never gates the no-account path; never a competing record format or metadata vocabulary.
- No forced tool/prompt disclosure; no account with the project required.
- Outputs must match the no-account builder byte-for-byte; the localised visible text follows the multi-language standard (English governs R1, per-key fallback R4, resolution order R12), and the mark/identifiers are T0 protected (R2/T0).

## 4. Acceptance criteria
- [ ] A declaration produced in any host validates offline and matches the no-account builder's output for the same inputs.
- [ ] No integration defines a competing record format or metadata vocabulary.
- [ ] A pre-filled draft cannot be published without an explicit user action.
- [ ] An integration writes outputs only to user-controlled locations and uploads nothing silently.
- [ ] Every integration declares the schema and interface versions it targets.
- [ ] Abandoned integrations are labelled as such in their manifest.
- [ ] At least one free, offline-capable reference implementation exists per proven workflow.
- [ ] No integration renders a trust score, rank, or single verdict.
- [ ] No integration requires prompts, provider disclosure, or an account with the project.

## 5. Outputs to produce in the repository
- `docs/spec/publishing-and-productivity-integrations.md` — the adapter contract, integration-manifest schema, prioritisation rules, and reference-implementation requirements.
- `site/integrations/` — at least one free/offline reference integration per D1 proven workflow (templates/shortcodes with a README, `file://`-safe where the host permits).

## 6. Read before building
- [`06-email-distribution-integrations.md`](../../06-email-distribution-integrations.md) — mini-plan
- [`publishing-and-productivity-integrations-dsh.md`](../../../../suggestions/publishing-and-productivity-integrations-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
