# Agent request — public-usage-guidelines: Public Usage Guidelines

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`public-usage-guidelines-dsh.md`](../../../../suggestions/public-usage-guidelines-dsh.md) · seed [`public-usage-guidelines.md`](../../../../suggestions/public-usage-guidelines.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 — the registry's admission policy depends on it (per core-extensions §9.5)
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Misuse gallery
- **Question:** How are misleading uses illustrated, given the "misuse gallery" needs moderation input?
- **Options:** (a) include only synthetic/illustrative misleading examples inline, with no "real examples" gallery · (b) publish a full misuse gallery with real third-party examples · (c) omit misleading examples entirely
- **Recommended:** (a) — the spec requires misleading examples (§4.1) but a real-examples gallery needs moderation policy; use anonymised illustrations for now.
- **Your choice:** ✏️

### D2 — Localised versions at launch
- **Question:** Does the guidelines page ship localised versions at launch?
- **Options:** (a) English-only first; localisation follows translation governance later · (b) ship localised versions now · (c) machine-translate the page now
- **Recommended:** (a) — new surfaces inherit the reviewed-only 40-language discipline; ship the canonical language first.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/usage.html` stating the mark's meaning using the normative wording ("AI helped. I take responsibility.") and adding no meaning the specification does not contain.
3. State that the mark claims responsibility, not verification/certification/endorsement, and does not transfer responsibility to the AI.
4. State plainly that no permission, registration, membership, certification, or gatekeeper is required, and that the project does not own the notation.
5. Show six placement examples — names (`Eric Mourant +AI`), documents (author line), email (visible signature + `name+ai@domain`), code (commit/file header), presentations (title slide), metadata (a machine-readable declaration link) — each distinguishing visible disclosure from optional machine-readable detail.
6. Instruct signers to scope the mark to a defined artifact and name themselves as the responsible party.
7. Separate explanatory guidance from the enforceable project-name/logo rules, linking licensing-and-mark-policy and stating the mark policy governs only the project's own name/visual identity, not the notation.
8. Include a non-exhaustive list of claims the mark does NOT make (certification, endorsement, accuracy guarantee, human-only authorship, that a third party's work was AI-assisted), plus misleading examples per §1 D1.
9. Test every example against the current published specification (correct or remove contradicting examples); keep the page on the no-account path and offline-pack-present; localise per §1 D2; self-check against §4.

## 3. Constraints (must-nots)
- No meaning added beyond the specification.
- Responsibility claim never presented as verification/certification/endorsement.
- No ownership/licensing/gating implied over the notation.
- No prompting of mandatory tool disclosure; no framing of use as certification.

## 4. Acceptance criteria
- [ ] The guidelines restate the meaning with the normative wording and add nothing to it.
- [ ] The document states the mark claims responsibility, not verification, certification, or endorsement.
- [ ] No-permission and no-ownership statements appear unambiguously.
- [ ] Placement examples cover name, document, email, code, presentation, and metadata.
- [ ] Visible disclosure and optional machine-readable detail are distinguished in every example.
- [ ] Guidance and enforceable name/logo rules are visibly separated and cross-linked.
- [ ] Every example is verified against the current published specification.
- [ ] The guidelines are reachable on the no-account path and present in the offline pack.
- [ ] No sentence implies the notation is owned, licensed, or gated.

## 5. Outputs to produce in the repository
- `site/usage.html` — the public usage guidelines page.

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`public-usage-guidelines-dsh.md`](../../../../suggestions/public-usage-guidelines-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
