# No-Account Declaration Builder — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`no-account-declaration-builder.md`](no-account-declaration-builder.md).
> **Catalogue group:** Declarations and profiles.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the no-account declaration builder: the free, browser-only tool that turns a person's answers into a complete `+AI` declaration — visible text, a personalised link, a portable declaration record, page metadata, and a QR target — without uploading any user data. It is the mechanical surface of the free floor: issuing a declaration must stay possible entirely on one's own machine.

## 2. Placement and boundaries

The builder is a free-floor item enumerated by the [Free-floor covenant](free-floor-covenant-dsh.md). It *produces* the record owned by [Portable declaration schema](portable-declaration-schema-dsh.md); it does not redefine the format. It is the export surface the [Signing wizard](signing-wizard-dsh.md) drives through a guided journey, and its outputs are checked by the [Verification checker](verification-checker-dsh.md). It honours the static-first invariant by working over `file://` with zero infrastructure, and the red lines by never requiring prompts, provider disclosure, identity, or an account.

## 3. Terminology

- **Draft** — a locally held, unissued set of answers, not yet a declaration.
- **Issue** — the explicit act that fixes the `issued` date and status `active` and produces the declaration record.
- **Visible text** — the human-readable rendering of the declaration.
- **Personalised link** — an authored link carrying the declaration's display values (see authored links).
- **Metadata** — the machine-readable assertion embedding the record in a page.

## 4. Scope

### 4.1 In scope

- Minimum and optional fields, their bounds, and their defaults.
- The accessible, text-first flow and multilingual labels.
- Local save/load, draft/issue separation, and export (file, copy, QR).
- The generated visible text, personalised link, and metadata block.

### 4.2 Out of scope and deferred

- The declaration record's field semantics and serialisation (portable declaration schema).
- The guided, explanatory journey (signing wizard).
- Registry submission and hosting (opt-in signatory registry, hosted profiles).
- Checking the result (verification checker).

## 5. Specification

### 5.1 Design goals and principles

1. **Minimal core.** The fewest answers that produce a valid declaration.
2. **Local-first.** All computation and storage happen in the browser.
3. **Honest drafting.** A draft is visibly a draft until the person issues it.
4. **Accessible.** Every step is keyboard- and screen-reader-operable, with plain-language labels.
5. **Nothing leaks.** No upload, no telemetry, no cross-site requests.

### 5.2 Normative requirements

1. The builder MUST work from a static, file://-openable page with no server, no account, and no network calls during composition.
2. The minimum fields MUST be exactly the required fields of the portable declaration schema — responsible party, artifact or scope, AI role, issued date, specification version — and the builder MUST auto-fill `schemaVersion` and `specVersion` with the current published versions and generate the `declarationId` locally.
3. The builder MUST offer both binding kinds (byte binding and scope binding) as owned by [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md), and MUST render the chosen kind explicitly in the visible text.
4. Every field MUST be optional unless the portable declaration schema marks it required; prompts and provider disclosure MUST NOT be required, and the builder MUST NOT suggest they are.
5. All free-text fields MUST carry documented length and character bounds, and the builder MUST sanitise output so no field can inject markup into the visible text or the link.
6. The `responsibleParty` field MUST accept a pseudonym and MUST NOT require identity, documents, or proof of control.
7. The flow MUST be text-first and accessible: labelled controls, keyboard operation, error messages in text, and no interaction that requires precise pointer or drag gestures.
8. Interface strings MUST be externalised for localisation, and the builder MUST record the declaration's `language` field from the chosen interface language or an explicit override.
9. Local save/load MUST include: export to a `.plus-ai.json` file, import from that file, and optional in-browser draft storage that is user-initiated, erasable, and never synchronised to any server.
10. The builder MUST distinguish draft from issued: a draft MUST be labelled "draft" on every surface and MUST NOT carry an `issued` date or status `active` until the person explicitly issues it.
11. Issuing MUST be a single explicit action that fixes the `issued` date and produces: the visible text, the portable record, the personalised link, the metadata block, and a QR target encoding the record or a link to it.
12. The builder MUST warn, before issuing, that issuing a declaration is taking responsibility and is not verification of any claim.
13. The generated metadata block MUST conform to [Machine-readable assertions](machine-readable-assertions-dsh.md) and MUST carry the same record as the standalone file.

### 5.3 Data model

Not applicable — the builder emits the portable declaration record owned by [Portable declaration schema](portable-declaration-schema-dsh.md); it defines no new data structures of its own. The only local additions are the draft state (a superset of the same fields plus a `draft` marker) and the generated visible text, link, and metadata as derived outputs.

### 5.4 Interfaces and behaviours

- **Fields:** a form over the required and optional schema fields, with plain-language help per field stating what the field asserts and does not assert.
- **Outputs:** a results view offering copy-to-clipboard for the visible text, download of the `.plus-ai.json` file, the personalised link, the metadata snippet, and the QR target.
- **Save/load:** import/export of the file, plus opt-in local draft storage.

### 5.5 Lifecycle and operational rules

The builder does not own lifecycle: an issued record's later status changes are governed by [Declaration lifecycle](declaration-lifecycle-dsh.md). The builder MUST, however, emit the record with status `active` at issue time and MUST render the current status from any imported record rather than assuming it is still `active`.

## 6. Free floor, red lines, and invariants

The builder is a named free-floor item and must remain usable at no cost, with no account, and over `file://`. Its local-first design satisfies the static-first invariant and the covert-tracking red line (no telemetry or upload). The no-forced-disclosure rule is enforced by making prompts and provider disclosure optional. The draft/issue distinction keeps the mark honest: nothing becomes a declaration until a human takes the explicit step of issuing it, and no transfer of responsibility to the machine occurs.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the record this builder produces.
- [Signing wizard](signing-wizard-dsh.md) drives this builder through a guided journey; both emit the identical record.
- [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md) supplies the two binding choices.
- [Machine-readable assertions](machine-readable-assertions-dsh.md) owns the metadata output.
- [Authored links](authored-links-dsh.md) owns the personalised-link output.
- [Certificates, badges, and QR](certificates-badges-and-qr-dsh.md) owns the QR target semantics.
- [Verification checker](verification-checker-dsh.md) validates the output.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) governs what happens after issue.
- [Free-floor covenant](free-floor-covenant-dsh.md) enumerates this builder as a protected item.

## 8. Resolution of the seed's "before implementation" concerns

- **Minimum fields** — section 5.2 item 2: exactly the schema's required fields.
- **Accessible flow** — section 5.2 item 7: text-first, keyboard-operable.
- **Local save/load** — section 5.2 item 9: file import/export plus opt-in erasing draft storage.
- **Safe field limits** — section 5.2 item 5: documented bounds and output sanitisation.
- **Multilingual labels** — section 5.2 item 8: externalised strings and a recorded `language` field.
- **Drafts versus published records** — section 5.2 items 10 and 12: a draft is labelled draft; issuing is an explicit, warned, single action.

## 9. Acceptance criteria

1. A declaration is fully composed and exported from a file://-opened page with no network activity.
2. The minimum valid record contains exactly the schema's required fields and validates offline.
3. Both binding kinds are offered and the chosen kind appears in the visible text.
4. No field requires prompts, provider disclosure, or identity.
5. Free-text fields reject over-length or markup-bearing input safely.
6. The flow is operable end-to-end by keyboard and screen reader.
7. A draft is labelled "draft" and has no `issued` date or active status until issued.
8. The exported `.plus-ai.json`, metadata block, and visible text carry the same record.
9. Imported records render their current lifecycle status, not a presumed `active`.

## 10. Open questions

- The precise free-text length bounds, to be fixed by accessibility and abuse testing.
- Whether in-browser draft storage should use localStorage, IndexedDB, or file handles only, and the default retention, is undecided.
