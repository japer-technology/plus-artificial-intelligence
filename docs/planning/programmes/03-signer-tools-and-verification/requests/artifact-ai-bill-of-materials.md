# Agent request — artifact-ai-bill-of-materials: Artifact AI Bill of Materials (AI-BOM)

> **Programme:** 03 · Signer Tools and Verification — [`03-signer-tools-and-verification.md`](../../03-signer-tools-and-verification.md)
> **Source:** spec [`artifact-ai-bill-of-materials-dsh.md`](../../../../suggestions/artifact-ai-bill-of-materials-dsh.md) · seed [`artifact-ai-bill-of-materials.md`](../../../../suggestions/artifact-ai-bill-of-materials.md)
> **Effort:** M · **Phase:** P2 · **Position:** with the practice register; both are P2 schema+UI pairs
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Material-contribution threshold
- **Question:** What counts as a "material" contribution — the threshold separating a listed entry from a trivial/routine contribution to aggregate or omit? (spec §10 item 1; digest "material-contribution threshold".)
- **Options:** (a) A published plain-language rule ("materially shaped the artifact's content, structure, or meaning") with worked examples and no numeric floor — the signer judges · (b) a numeric floor (contributed at least N% of the artifact or at least 1 section) · (c) a checklist rule (shaped substance vs. merely formatted/checked spelling).
- **Recommended:** (a) — spec §5.2 item 8 already defines "material" as what "meaningfully shaped the artifact, as judged by the signer" and permits aggregation of trivial contributions; a numeric floor would be unenforceable and invent measurement; pair the rule with worked examples (optionally via pilot wording studies).
- **Your choice:** ✏️

### D2 — Aggregation disclosure minimum
- **Question:** When trivial contributions are aggregated, must the signer disclose tool *categories* rather than nothing, or names? (spec §10 item 2; digest "category-level aggregation".)
- **Options:** (a) Aggregated entries must name at least a general tool category (e.g. "spelling/grammar tools") — no silent "assorted tools" · (b) aggregation may be an opaque general description with no category requirement · (c) no aggregation — every materially-contributing tool is named individually.
- **Recommended:** (a) — keeps the AI-BOM honest (the fact that AI assisted stays visible, per spec §5.1 principle 5) without demanding exhaustive naming; (c) contradicts spec §5.2 item 8's explicit permission to aggregate.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Write the AI-BOM JSON Schema (`aiBomVersion`, `declarationRef`, `entries`) attached to exactly one artifact declaration; each entry carries a `used-on-artifact` claim + `aiRole`, never `available`/`generally-used`/`approved`.
2. Enforce the D1 material-contribution threshold in the entry rules, and the D2 aggregation disclosure minimum; forbid duplicating the whole practice register and forbid a full interaction transcript (no prompts, prompt logs, or message content).
3. Make version references optional and recorded only when material; a version that cannot be determined is omitted, never guessed.
4. Implement the confidential toggle: a public rendering shows a neutral "undisclosed" placeholder without revealing the tool, notes withheld entries, and keeps the declaration's `aiRole` and AI-BOM presence visible.
5. Make the AI-BOM optional and valid when empty (a declaration with an `aiRole` and no entries is valid); an absent entry is never a negative fact.
6. Enforce the derivative rule — a derivative carries its own AI-BOM and references the upstream declaration rather than inheriting upstream entries; no tool may auto-populate an AI-BOM from a party's practice register.
7. Build the offline validator (`scripts/validate-ai-bom.mjs`) and the table renderer (tool, role, capability, optional version, `self-declared` per entry) on the declaration/passport pages, plus the builder entry UI with the confidential flag.
8. **Note for the agent — boundary:** the AI-BOM is artifact-scoped (claims use), distinct from the party-level practice register (claims availability/general use); never conflate the two or import entries across them.
9. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- No prompts, prompt logs, or transcript content.
- Never auto-populated from a party's practice register.
- Derivatives carry their own AI-BOM, never inherit upstream entries.
- Confidentiality must not conceal that AI assisted at all — the declaration's `aiRole` and the AI-BOM's presence stay visible.
- The AI-BOM is free-floor: creating and reading it never requires payment or an account.

## 4. Acceptance criteria
- [ ] An AI-BOM references exactly one artifact declaration.
- [ ] Every entry carries a `used-on-artifact` claim and an `aiRole`, never `available` or `approved`.
- [ ] A declaration with an `aiRole` and no entries is valid.
- [ ] A prompt or message transcript cannot be stored in an AI-BOM.
- [ ] A confidential entry renders "undisclosed" publicly while the declaration's `aiRole` remains visible.
- [ ] A version field is absent when the version is unknown, never guessed.
- [ ] A derivative carries its own AI-BOM and references the upstream instead of inheriting its tools.
- [ ] A tool from the practice register does not appear in an AI-BOM unless the signer claims it for that artifact.
- [ ] A rendered AI-BOM labels every entry `self-declared`.

## 5. Outputs to produce in the repository
- `docs/spec/artifact-ai-bill-of-materials.md` — AI-BOM schema, material-contribution threshold, aggregation rules, confidentiality, derivative rules.
- `site/schemas/ai-bom/<version>/schema.json` — versioned JSON Schema.
- `scripts/validate-ai-bom.mjs` — offline validator.
- `site/assets/ai-bom.js` — table renderer + builder entry UI (confidential flag) consumed by the builder/passport pages.

## 6. Read before building
- [`03-signer-tools-and-verification.md`](../../03-signer-tools-and-verification.md) — mini-plan
- [`artifact-ai-bill-of-materials-dsh.md`](../../../../suggestions/artifact-ai-bill-of-materials-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../../../digest/03-registers-and-discovery.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
