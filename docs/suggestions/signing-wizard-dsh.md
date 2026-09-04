# Signing Wizard — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`signing-wizard.md`](signing-wizard.md).
> **Catalogue group:** Declarations and profiles.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the signing wizard: the guided, explanatory journey that takes a visitor from the six-word meaning ("AI helped. I take responsibility.") through naming a responsible party, choosing an artifact or scope, adding optional AI-role detail, and exporting exactly one usable declaration. It exists so that a first-time signer understands what they are asserting before they assert it, without being coerced into disclosing anything the mark does not require.

## 2. Placement and boundaries

The wizard is the pedagogical wrapper around the [No-account declaration builder](no-account-declaration-builder-dsh.md): it explains and sequences the same fields, and both emit the identical record owned by [Portable declaration schema](portable-declaration-schema-dsh.md). It owns the journey and its wording; it does not own the record format, the field semantics, or the export mechanics. It honours the free floor by keeping the shortest path account-free, and the red lines by making every non-essential detail optional.

## 3. Terminology

- **Six-word meaning** — the compressed statement "AI helped. I take responsibility.", the entry point of the journey.
- **Step** — one screen of the journey, each advancing a single decision.
- **Responsible party** — the person who takes responsibility; may be a pseudonym.
- **AI role** — how AI materially assisted, drawn from the claim-types vocabulary.
- **Coercive detail** — any field framed as required when the mark does not require it (e.g. prompts, provider, identity).

## 4. Scope

### 4.1 In scope

- The ordered journey and its plain-language explanations.
- The shortest valid path and the optional expansions.
- Per-claim explanation and the no-verification boundary.
- Local draft support and single-declaration export.

### 4.2 Out of scope and deferred

- The record format and field semantics (portable declaration schema).
- The export/QR/metadata mechanics (no-account declaration builder).
- Interface translation governance (translation governance).

## 5. Specification

### 5.1 Design goals and principles

1. **Understand before asserting.** Every claim is explained in plain language.
2. **Shortest path stays free.** No step, branch, or export may require an account or payment.
3. **Nothing coercive.** Optional fields are marked optional and never nudged toward disclosure.
4. **One declaration per journey.** The wizard ends with one issued record, not a profile or an account.
5. **Tested across languages.** The journey is usability-tested, not merely translated.

### 5.2 Normative requirements

1. The journey MUST open with the six-word meaning and a plain-language statement that issuing a declaration means taking responsibility, not being verified.
2. The shortest valid path MUST be: (a) confirm understanding, (b) name the responsible party (pseudonym allowed), (c) choose an artifact or scope, and (d) issue — and MUST complete without an account, identity, or payment.
3. The `responsibleParty` step MUST state that the named person takes responsibility and MAY be a pseudonym; it MUST NOT ask for identity documents, proof of control, or a legal name.
4. The artifact/scope step MUST offer byte binding and scope binding as owned by [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md), with an explanation of the strength difference between them.
5. The AI-role step MUST be optional and MUST use the claim-types role vocabulary; it MUST NOT offer options that assert AI created everything or that no human reviewed the release.
6. Every optional field MUST be visibly labelled optional, and the wizard MUST NOT pre-fill, nudge, or re-order steps to encourage disclosure of prompts, providers, or identity.
7. Each step MUST carry plain-language help stating what the field asserts and what it does not assert (a declaration is a claim, not verification), per [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md).
8. The wizard MUST support local drafts: save and resume progress in the browser without an account, with drafts clearly labelled draft and never presented as issued.
9. The final step MUST produce exactly one declaration via the no-account declaration builder and MUST present the visible text, portable record, and the standing warning that issuing is taking responsibility and is not verification.
10. The journey MUST be usability-tested in each supported language, with the results recorded; languages that fail testing MUST be marked as such rather than shipped as fully supported.

### 5.3 Data model

Not applicable — the wizard sequences fields owned by the portable declaration schema and emits through the builder; it defines no new data structures.

### 5.4 Interfaces and behaviours

- **Steps:** ordered screens, one decision each, with back navigation and persistent progress.
- **Help:** inline plain-language explanations per field, with the claim-versus-verification boundary restated where relevant.
- **Draft:** save/resume and clear controls, all local.
- **Export:** hands off to the builder's results view for the single declaration.

### 5.5 Lifecycle and operational rules

The wizard is a one-shot authoring flow and owns no lifecycle of its own. Once a declaration is issued, later changes flow through [Declaration lifecycle](declaration-lifecycle-dsh.md); the wizard MUST NOT silently edit an issued declaration and MUST route changes to supersession or revocation rather than in-place rewriting.

## 6. Free floor, red lines, and invariants

The shortest path is a free-floor item and must never require payment or an account. The anti-coercion rule implements the red line against forced tool or prompt disclosure, and the pseudonym rule implements the red line against mandatory identity. The explicit understanding step and the final warning keep responsibility human and prevent the wizard from presenting automation as a transfer of responsibility to the machine.

## 7. Relationships to sibling specifications

- [No-account declaration builder](no-account-declaration-builder-dsh.md) is the export surface the wizard drives; the two MUST stay output-identical.
- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the fields the wizard explains.
- [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md) supplies the binding choices and their strength explanation.
- [Claim types](claim-types-dsh.md) supplies the AI-role vocabulary.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) owns the claim-versus-verification wording.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) governs post-issue changes.
- [Translation governance](translation-governance-dsh.md) owns the language strings and their review status.
- [Free-floor covenant](free-floor-covenant-dsh.md) protects the account-free path.

## 8. Resolution of the seed's "before implementation" concerns

- **Keep the shortest path account-free** — section 5.2 items 2 and 6: minimal path, no account, identity, or payment.
- **Avoid coercive detail** — section 5.2 item 6: optional fields labelled and never nudged.
- **Explain every claim** — section 5.2 items 1 and 7: per-field plain-language help and the claim-versus-verification boundary.
- **Support local drafts** — section 5.2 item 8: save/resume in the browser, drafts labelled.
- **Usability-test across languages** — section 5.2 item 10: tested per language, failures marked.

## 9. Acceptance criteria

1. A visitor completes the shortest path with no account, identity, or payment.
2. The six-word meaning and responsibility warning appear before any field.
3. The responsible-party step accepts a pseudonym and asks for no documents.
4. Both binding kinds are offered with a strength explanation.
5. No field is presented as required unless the schema requires it, and prompts are never required.
6. Each field's help states what it asserts and that a declaration is not verification.
7. A draft can be saved and resumed locally and is always labelled draft.
8. Exactly one declaration is exported, identical to the builder's output.
9. Each supported language has a recorded usability-test result.

## 10. Open questions

- Whether the wizard should offer a "review your declaration" recap step before issue, and how long it should be, is undecided.
- The minimum usability-test sample and pass criteria per language are undecided.
