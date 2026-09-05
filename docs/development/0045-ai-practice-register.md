# Development task — ai-practice-register: AI Practice Register

> **Programme:** 03 · Signer Tools and Verification — [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md)
> **Source:** spec [`ai-practice-register-dsh.md`](../suggestions/ai-practice-register-dsh.md) · seed [`ai-practice-register.md`](../suggestions/ai-practice-register.md)
> **Effort:** M · **Phase:** P2 · **Position:** P2 — after the spine; it shares the builder's JSON tooling but targets organisations
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Voluntary, portable JSON register of a party's standing AI capabilities, tools, purposes, data rules, review practices — separate from any artifact declaration.
- **Why now / risk of deferring:** P2, after the spine — it shares the builder's JSON tooling but targets organisations. Its risk is that a party-level surface can drift into a reputation ledger, so the "no reputation/rank field" must-not and the `self-declared` render are load-bearing guards that must be built in from the schema up.
- **Features to deliver:**
  - A `.plus-ai-practices.json` object (UTF-8, `file://`-safe, no account) with `practiceRegisterId` + `party` name required and every other field optional; no prompts/transcripts/provider credentials; no reputation/rank field.
  - Entries reference tool-taxonomy ids where they exist, or free-text names; independent optional purposes, data rules, review practice, claim kinds, effective date, status per entry.
  - Versioned assertions (a new dated assertion on change, prior assertions readable); default `local` visibility with explicit consent for anything higher; public render labelling every entry `self-declared`.
- **Depends on:** claim-types, tool-taxonomy, portable-declaration-schema, evidence-labels-not-trust-scores, visibility-and-consent

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Retention of retired entries
- **Question:** Do retired register entries need a formal retention period, or does retention follow the visibility-and-consent deletion rules? (spec §10 item 1; digest "retention of retired entries".)
- **Option (a):** Follow visibility-and-consent — a retired entry is kept with `status: retired` until the party deletes it under the visibility rules; no separate retention clock
  - **For:** Spec §5.5 already requires retired entries to be retained with `status: retired` and a retirement date, and the no-silent-change invariant is satisfied by keeping prior assertions readable (spec §5.2 item 8).
  - **Against:** No fixed retention clock — deletion timing depends on the party acting under the visibility-and-consent rules, so history could be removed whenever the party chooses.
- **Option (b):** a formal retention period (24 months after retirement), then archive
  - **For:** A predictable archive schedule for operators and auditors.
  - **Against:** Adds a separate clock the spec does not require, and risks erasing history that the versioned-assertion invariant (spec §5.2 item 8) wants kept readable.
- **Option (c):** retire but never delete — history is append-only forever
  - **For:** Append-only history forever, maximising auditability.
  - **Against:** Conflicts with the party's right to delete under visibility-and-consent (spec §5.2 item 6 defers consent and deletion to that spec).
- **Recommended:** (a) — spec §5.5 already requires retired entries retained with `status: retired` and a retirement date, and the no-silent-change invariant is satisfied by keeping prior assertions readable; a separate clock is unnecessary burden and (c) conflicts with the party's right to delete under visibility-and-consent.
- **Your choice:** ✏️

### D2 — Capabilities vocabulary shape
- **Question:** What is the `capabilities` vocabulary shape, given tool-taxonomy's capability layer is not yet fixed? (spec §10 item 2; digest "capabilities vocabulary".)
- **Option (a):** Free text until tool-taxonomy fixes its capability layer; entries accept a taxonomy id or free text
  - **For:** Spec §5.2 item 3 already permits taxonomy ids where they exist or free-text names otherwise, so this avoids forking the vocabulary before tool-taxonomy ships.
  - **Against:** Free text makes the `capabilities` field less machine-comparable until tool-taxonomy's capability layer lands.
- **Option (b):** a provisional closed list of capability strings now, expanded later
  - **For:** Immediate structure and comparability for the field.
  - **Against:** Would fork the vocabulary from tool-taxonomy's eventual capability layer, and spec §10 defers the capability shape to tool-taxonomy rather than inventing one now.
- **Option (c):** defer the field entirely until tool-taxonomy ships
  - **For:** Avoids guessing at a vocabulary before tool-taxonomy fixes it.
  - **Against:** Drops a field the spec requires — spec §5.2 item 3 requires each entry to identify at least one of a capability, tool, or review practice — and loses the register's expressiveness.
- **Recommended:** (a) — spec §5.2 item 3 already permits taxonomy ids where they exist or free-text names otherwise; a provisional list would fork the vocabulary and (c) would drop a field the spec requires. Record the pending tool-taxonomy dependency in the schema docs.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Write the `.plus-ai-practices.json` JSON Schema: `practiceRegisterId` and `party` name required; every other field optional; no prompts/transcripts/provider credentials; no field that functions as reputation/rank.
2. Make each entry identify at least one of a capability, tool, or review practice; reference tool-taxonomy ids where they exist, free-text names otherwise (per D2); keep purposes, data rules, review practice, claim kinds, effective date, and status independently optional, with absence never read as a negative fact.
3. Enforce the claim boundary — a register entry may claim `available`/`generally-used`, never `used-on-artifact` (artifact claims live in declarations only).
4. Build the offline validator (`scripts/validate-practices.mjs`) that rejects prompts/provider credentials and accepts an id+party-only record.
5. Default `visibility` to `local`; require explicit, separately consented choice for anything higher, per visibility-and-consent.
6. Implement versioned assertions — a change is a new dated assertion with its own identifier; prior assertions remain readable unchanged; retired entries retain `status: retired` + retirement date per the D1 decision.
7. Build the public render (`site/practices.html`) labelling every entry `self-declared`, rendering presentation names (e.g. "AI Arsenal") as presentation-only, and never inferring "not disclosed" from "field absent".
8. **Note for the agent — boundary:** this register is party-level standing practice, distinct from any artifact declaration and from the artifact-ai-bill-of-materials; it must not be auto-sourced into any artifact AI-BOM, and an artifact declaration may reference register entries without implying they apply to every artifact.
9. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- No prompts, transcripts, or provider credentials stored or required.
- No field functioning as a reputation score or rank.
- Higher visibility requires explicit separate consent; default is `local`.
- No silent rewriting — changes are versioned assertions, prior versions stay readable.
- The register is free-floor: creating, reading, and sharing it never requires payment or an account.

## 5. Acceptance criteria
- [ ] A register containing only an identifier and a party name validates and is usable offline.
- [ ] Every field other than identifier and party name can be omitted without error.
- [ ] A register with prompts or provider credentials fails validation.
- [ ] A register defaults to `local`/`private` visibility and requires explicit consent for anything higher.
- [ ] A public view labels every entry `self-declared`.
- [ ] Editing a register produces a new dated assertion; the prior assertion remains readable unchanged.
- [ ] A retired entry remains visible with `status: retired` and a retirement date.
- [ ] A presentation layer named "AI Arsenal" renders the same normative fields unchanged.
- [ ] An artifact declaration can reference register entries without implying they apply to every artifact.

## 6. Outputs to produce in the repository
- `docs/spec/ai-practice-register.md` — register field semantics, versioning, visibility, self-declared rendering, and the tool-taxonomy dependency note.
- `site/schemas/practice-register/<version>/schema.json` — versioned JSON Schema.
- `scripts/validate-practices.mjs` — offline validator.
- `site/practices.html` — reference public render (labels every entry `self-declared`).

## 7. Read before building
- [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md) — mini-plan
- [`ai-practice-register-dsh.md`](../suggestions/ai-practice-register-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../planning/digest/03-registers-and-discovery.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
