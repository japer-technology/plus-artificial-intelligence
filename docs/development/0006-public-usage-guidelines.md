# Development task — public-usage-guidelines: Public Usage Guidelines

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`public-usage-guidelines-dsh.md`](../suggestions/public-usage-guidelines-dsh.md) · seed [`public-usage-guidelines.md`](../suggestions/public-usage-guidelines.md)
> **Effort:** S · **Phase:** P0 · **Position:** P0 — the registry's admission policy depends on it (per core-extensions §9.5)
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Concise, accurate placement guidance: the meaning, scoping to an artifact, naming the responsible person, and the claims the mark does not make.
- **Why now / risk of deferring:** The registry's admission policy depends on the usage guidelines (mini-plan Order: "P0 — the registry's admission policy depends on it (per core-extensions §9.5)"). Risk: guidance drifting into red lines (certification framing, forced tool disclosure) — guarded by must-nots (brainstorm open risks).
- **Features to deliver:**
  - One static `site/usage.html`.
  - The normative meaning restated verbatim with no added meaning.
  - A responsibility-not-verification statement.
  - No-permission / no-ownership statements.
  - 6 placement examples (name, document, email, code, presentation, metadata) distinguishing visible vs machine-readable.
  - A non-exhaustive "claims the mark does not make" list.
  - A guidance-vs-enforceable-rules separation linked to the licensing policy.
  - Examples verified against the current spec.
- **Depends on:** use-plus-ai-guide, licensing-and-mark-policy, portable-declaration-schema (metadata examples), claim-types, regulatory-phrasing-packs (later linkage)

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Misuse gallery
- **Question:** How are misleading uses illustrated, given the "misuse gallery" needs moderation input?
- **Option (a):** include only synthetic/illustrative misleading examples inline, with no "real examples" gallery
  - **For:** Spec §4.1 includes "examples of accurate and misleading use" in scope, and the acceptance criteria want a reader to distinguish accurate from misuse; synthetic illustrations satisfy this without the moderation input a real-examples gallery needs (spec §10 open question).
  - **Against:** Synthetic examples are weaker than real ones for teaching, and spec §10 leaves a real misuse gallery for later moderation-policy input.
- **Option (b):** publish a full misuse gallery with real third-party examples
  - **For:** Real third-party examples are the most instructive for readers.
  - **Against:** A real-examples gallery needs moderation-policy input first (spec §10 open question; digest "Open: whether to publish a misuse gallery"), and publishing real examples without that policy risks misrepresenting third parties.
- **Option (c):** omit misleading examples entirely
  - **For:** Avoids the moderation and fairness issues of illustrating misuse at all.
  - **Against:** Fails spec §4.1's in-scope "examples of accurate and misleading use" and the acceptance criterion "a reader can distinguish accurate use from misuse from the examples alone".
- **Recommended:** (a) — the spec requires misleading examples (§4.1) but a real-examples gallery needs moderation policy; use anonymised illustrations for now.
- **Your choice:** ✏️

### D2 — Localised versions at launch
- **Question:** Does the guidelines page ship localised versions at launch?
- **Option (a):** English-only first; localisation follows translation governance later
  - **For:** Spec §5.2.10 permits localised versions but defers translations to translation governance (reviewed-only, never paraphrased); shipping the canonical language first honours the reviewed-only discipline.
  - **Against:** Non-English readers lack localised guidelines at launch until translation governance produces reviewed translations.
- **Option (b):** ship localised versions now
  - **For:** Reaches a wider audience immediately.
  - **Against:** Producing reviewed translations before translation governance is stood up risks unreviewed paraphrasing of the normative meaning, which spec §5.2.10 forbids.
- **Option (c):** machine-translate the page now
  - **For:** Fastest way to offer other languages.
  - **Against:** Machine translation risks paraphrasing the normative meaning, which spec §5.2.10 explicitly forbids ("never paraphrase the normative meaning").
- **Recommended:** (a) — new surfaces inherit the reviewed-only 40-language discipline; ship the canonical language first.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/usage.html` stating the mark's meaning using the normative wording ("AI helped. I take responsibility.") and adding no meaning the specification does not contain.
3. State that the mark claims responsibility, not verification/certification/endorsement, and does not transfer responsibility to the AI.
4. State plainly that no permission, registration, membership, certification, or gatekeeper is required, and that the project does not own the notation.
5. Show six placement examples — names (`Eric Mourant +AI`), documents (author line), email (visible signature + `name+ai@domain`), code (commit/file header), presentations (title slide), metadata (a machine-readable declaration link) — each distinguishing visible disclosure from optional machine-readable detail.
6. Instruct signers to scope the mark to a defined artifact and name themselves as the responsible party.
7. Separate explanatory guidance from the enforceable project-name/logo rules, linking licensing-and-mark-policy and stating the mark policy governs only the project's own name/visual identity, not the notation.
8. Include a non-exhaustive list of claims the mark does NOT make (certification, endorsement, accuracy guarantee, human-only authorship, that a third party's work was AI-assisted), plus misleading examples per §2 D1.
9. Test every example against the current published specification (correct or remove contradicting examples); keep the page on the no-account path and offline-pack-present; localise per §2 D2; self-check against §5.

## 4. Constraints (must-nots)
- No meaning added beyond the specification.
- Responsibility claim never presented as verification/certification/endorsement.
- No ownership/licensing/gating implied over the notation.
- No prompting of mandatory tool disclosure; no framing of use as certification.

## 5. Acceptance criteria
- [ ] The guidelines restate the meaning with the normative wording and add nothing to it.
- [ ] The document states the mark claims responsibility, not verification, certification, or endorsement.
- [ ] No-permission and no-ownership statements appear unambiguously.
- [ ] Placement examples cover name, document, email, code, presentation, and metadata.
- [ ] Visible disclosure and optional machine-readable detail are distinguished in every example.
- [ ] Guidance and enforceable name/logo rules are visibly separated and cross-linked.
- [ ] Every example is verified against the current published specification.
- [ ] The guidelines are reachable on the no-account path and present in the offline pack.
- [ ] No sentence implies the notation is owned, licensed, or gated.

## 6. Outputs to produce in the repository
- `site/usage.html` — the public usage guidelines page.

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`public-usage-guidelines-dsh.md`](../suggestions/public-usage-guidelines-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
