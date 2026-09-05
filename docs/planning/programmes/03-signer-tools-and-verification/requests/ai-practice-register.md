# Agent request — ai-practice-register: AI Practice Register

> **Programme:** 03 · Signer Tools and Verification — [`03-signer-tools-and-verification.md`](../../03-signer-tools-and-verification.md)
> **Source:** spec [`ai-practice-register-dsh.md`](../../../../suggestions/ai-practice-register-dsh.md) · seed [`ai-practice-register.md`](../../../../suggestions/ai-practice-register.md)
> **Effort:** M · **Phase:** P2 · **Position:** P2 — after the spine; it shares the builder's JSON tooling but targets organisations
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Retention of retired entries
- **Question:** Do retired register entries need a formal retention period, or does retention follow the visibility-and-consent deletion rules? (spec §10 item 1; digest "retention of retired entries".)
- **Options:** (a) Follow visibility-and-consent — a retired entry is kept with `status: retired` until the party deletes it under the visibility rules; no separate retention clock · (b) a formal retention period (24 months after retirement), then archive · (c) retire but never delete — history is append-only forever.
- **Recommended:** (a) — spec §5.5 already requires retired entries retained with `status: retired` and a retirement date, and the no-silent-change invariant is satisfied by keeping prior assertions readable; a separate clock is unnecessary burden and (c) conflicts with the party's right to delete under visibility-and-consent.
- **Your choice:** ✏️

### D2 — Capabilities vocabulary shape
- **Question:** What is the `capabilities` vocabulary shape, given tool-taxonomy's capability layer is not yet fixed? (spec §10 item 2; digest "capabilities vocabulary".)
- **Options:** (a) Free text until tool-taxonomy fixes its capability layer; entries accept a taxonomy id or free text · (b) a provisional closed list of capability strings now, expanded later · (c) defer the field entirely until tool-taxonomy ships.
- **Recommended:** (a) — spec §5.2 item 3 already permits taxonomy ids where they exist or free-text names otherwise; a provisional list would fork the vocabulary and (c) would drop a field the spec requires. Record the pending tool-taxonomy dependency in the schema docs.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Write the `.plus-ai-practices.json` JSON Schema: `practiceRegisterId` and `party` name required; every other field optional; no prompts/transcripts/provider credentials; no field that functions as reputation/rank.
2. Make each entry identify at least one of a capability, tool, or review practice; reference tool-taxonomy ids where they exist, free-text names otherwise (per D2); keep purposes, data rules, review practice, claim kinds, effective date, and status independently optional, with absence never read as a negative fact.
3. Enforce the claim boundary — a register entry may claim `available`/`generally-used`, never `used-on-artifact` (artifact claims live in declarations only).
4. Build the offline validator (`scripts/validate-practices.mjs`) that rejects prompts/provider credentials and accepts an id+party-only record.
5. Default `visibility` to `local`; require explicit, separately consented choice for anything higher, per visibility-and-consent.
6. Implement versioned assertions — a change is a new dated assertion with its own identifier; prior assertions remain readable unchanged; retired entries retain `status: retired` + retirement date per the D1 decision.
7. Build the public render (`site/practices.html`) labelling every entry `self-declared`, rendering presentation names (e.g. "AI Arsenal") as presentation-only, and never inferring "not disclosed" from "field absent".
8. **Note for the agent — boundary:** this register is party-level standing practice, distinct from any artifact declaration and from the artifact-ai-bill-of-materials; it must not be auto-sourced into any artifact AI-BOM, and an artifact declaration may reference register entries without implying they apply to every artifact.
9. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- No prompts, transcripts, or provider credentials stored or required.
- No field functioning as a reputation score or rank.
- Higher visibility requires explicit separate consent; default is `local`.
- No silent rewriting — changes are versioned assertions, prior versions stay readable.
- The register is free-floor: creating, reading, and sharing it never requires payment or an account.

## 4. Acceptance criteria
- [ ] A register containing only an identifier and a party name validates and is usable offline.
- [ ] Every field other than identifier and party name can be omitted without error.
- [ ] A register with prompts or provider credentials fails validation.
- [ ] A register defaults to `local`/`private` visibility and requires explicit consent for anything higher.
- [ ] A public view labels every entry `self-declared`.
- [ ] Editing a register produces a new dated assertion; the prior assertion remains readable unchanged.
- [ ] A retired entry remains visible with `status: retired` and a retirement date.
- [ ] A presentation layer named "AI Arsenal" renders the same normative fields unchanged.
- [ ] An artifact declaration can reference register entries without implying they apply to every artifact.

## 5. Outputs to produce in the repository
- `docs/spec/ai-practice-register.md` — register field semantics, versioning, visibility, self-declared rendering, and the tool-taxonomy dependency note.
- `site/schemas/practice-register/<version>/schema.json` — versioned JSON Schema.
- `scripts/validate-practices.mjs` — offline validator.
- `site/practices.html` — reference public render (labels every entry `self-declared`).

## 6. Read before building
- [`03-signer-tools-and-verification.md`](../../03-signer-tools-and-verification.md) — mini-plan
- [`ai-practice-register-dsh.md`](../../../../suggestions/ai-practice-register-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../../../digest/03-registers-and-discovery.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
