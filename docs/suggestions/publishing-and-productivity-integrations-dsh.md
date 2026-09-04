# Publishing and Productivity Integrations — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`publishing-and-productivity-integrations.md`](publishing-and-productivity-integrations.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the adapter layer that brings `+AI` into everyday authoring and publishing tools — CMSs, static-site generators, document editors, presentation and design tools, newsroom workflows, learning platforms, email administration, and repository templates — so that a person working inside those tools can produce the same declaration the [No-account declaration builder](no-account-declaration-builder-dsh.md) produces. It exists to put the mark where work is actually authored, without letting any tool become the source of the declaration, its format, or its meaning.

## 2. Placement and boundaries

This is a commons-layer specification, not a paid service: integrations are free adapters over the free floor. It owns the *workflow adapter contract*; it does not own the record format ([Portable declaration schema](portable-declaration-schema-dsh.md)), the page/package metadata formats ([Developer integrations](developer-integrations-dsh.md)), on-page rendering ([Reusable web component](plus-ai-web-component-dsh.md)), composition ([No-account declaration builder](no-account-declaration-builder-dsh.md)), checking ([Verification checker](verification-checker-dsh.md)), or drift detection ([Conformance linter](conformance-linter-dsh.md)). Every integration defers to those owners rather than redefining their content.

## 3. Terminology

- **Integration** — a plugin, add-on, template, or extension that adapts `+AI` into a host authoring tool.
- **Host application** — the CMS, editor, platform, or repository tool the integration extends.
- **Adapter** — the integration's role: it maps the host's inputs to the portable declaration record and surfaces, never a competing format.
- **Integration manifest** — the machine-readable descriptor of what an integration targets and produces.
- **Neutral reference implementation** — a free, open-source, dependency-light implementation that shows the contract working.

## 4. Scope

### 4.1 In scope

- The adapter contract every integration MUST honour.
- The integration manifest and its versioning.
- Data ownership, portability, permission, and moderation rules.
- Prioritisation of proven workflows and neutral reference implementations.
- Maintenance and abandonment status.

### 4.2 Out of scope and deferred

- The declaration record's fields and serialisation (portable declaration schema).
- HTML/JSON-LD/well-known/package/Git/CI formats (developer integrations).
- The mark's visual rendering (reusable web component).
- Checking and labelling outputs (verification checker, evidence labels).
- Distribution formats for the mark itself (multi-format distribution kit, email signature kit).

## 5. Specification

### 5.1 Design goals and principles

1. **Adapter, not authority.** An integration maps to the shared record; it never invents its own.
2. **Same inputs, same bytes.** A given set of answers produces identical output in any host.
3. **Local-first.** Data stays where the user put it; no integration silently exfiltrates it.
4. **Proven workflows first.** Invest where the mark will actually be read, starting with static-first surfaces.
5. **Neutral references.** The project's own implementations are free and open, never paid exemplars.

### 5.2 Normative requirements

1. An integration MUST be an adapter over the [Portable declaration schema](portable-declaration-schema-dsh.md) record and the [Machine-readable assertions](machine-readable-assertions-dsh.md) surfaces; it MUST NOT define a competing record format or metadata vocabulary.
2. An integration MUST NOT issue, sign, or publish a declaration in another person's name without that person's explicit action; automation MAY pre-fill a draft, but the human MUST take the issuing step (red line against automated publication in another's name).
3. For the same inputs, an integration MUST produce the same visible text, record, and metadata the no-account builder produces, so results remain portable across tools.
4. Data ownership: the integration MUST write outputs to a location the user controls (a local file, their repository, their CMS content) and MUST NOT silently upload the record or personal data to a third party.
5. Portability: a record produced in one host MUST import into another and validate offline; integrations MUST NOT store declarations only in a proprietary internal format that cannot be exported as `.plus-ai.json`.
6. Permissions: an integration MUST NOT require tool or prompt disclosure, MUST respect the host's own permission model, and MUST NOT read or write files beyond what the user directed.
7. Moderation: an integration that posts to a shared platform MUST present the post as authored by the human signer (never as project-endorsed) and MUST NOT automate posting without confirmation.
8. Version updates: every integration MUST declare the declaration `schemaVersion` and the interface version it targets, and MUST fail loudly (never silently reinterpret) on records using newer versions it does not understand.
9. Maintenance: every integration MUST publish a maintainer, a support status, and a changelog entry; abandoned integrations MUST be labelled as such rather than silently left to drift.
10. Neutral reference implementations: the project MUST publish at least one free, open-source reference implementation per proven workflow, usable offline over `file://` where the host permits.
11. Prioritisation: the project SHOULD prioritise static-site generators, repository templates, and CMS page-metadata workflows (proven, static-first, low-lock-in) before editors and platforms whose extension APIs are proprietary or remote-only.
12. An integration MUST NOT render a trust score, rank, or single verification verdict; any status it shows MUST use the [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) vocabulary.
13. Integrations MUST NOT gate the no-account path: a paid CMS or platform is the user's own choice, never a project requirement, and payment to any vendor buys no legitimacy, rank, or permission.

### 5.3 Data model

Integration manifest (shipped with each integration, not stored in declarations):

```
{
  "integration": "name",
  "host": "cms | editor | static-site | presentation | repository | learning | email",
  "targets": [ "portable-declaration-record", "machine-readable-assertions", "visible-text" ],
  "schemaVersionTarget": "integer",
  "interfaceVersion": "integer",
  "referenceImplementation": "boolean",
  "maintainer": "name",
  "status": "maintained | unmaintained"
}
```

### 5.4 Interfaces and behaviours

- **Attach:** the integration collects the host's inputs (author, scope, role) and emits the same outputs as the builder: visible text, record, and metadata block.
- **Import/export:** every integration reads and writes `.plus-ai.json`; import of an existing record MUST render its current lifecycle status, not a presumed `active`.
- **Pre-fill versus issue:** a pre-filled draft is visibly a draft; only an explicit user action turns it into an issued declaration.

### 5.5 Lifecycle and operational rules

Integrations are versioned alongside the schema and interface they target. A schema release triggers integration updates announced through the [Changelog and RSS](changelog-and-rss-dsh.md) feed. Unmaintained integrations retain their record but are flagged in the manifest and any directory view.

## 6. Free floor, red lines, and invariants

The adapter contract and reference implementations are free-floor commons: using an integration must never require payment to the project or an account with it. The red lines against forced tool/prompt disclosure and automated publication in another's name are enforced in items 2 and 6. The static-first invariant is honoured by prioritising file-based, offline-capable hosts (item 10). The one-normative-specification invariant is honoured by item 1: integrations adapt the shared meaning, they never reword it.

## 7. Relationships to sibling specifications

- [Developer integrations](developer-integrations-dsh.md) owns the underlying metadata, trailer, CI, and library formats this layer composes.
- [Reusable web component](plus-ai-web-component-dsh.md) owns the on-page mark rendering integrations embed.
- [No-account declaration builder](no-account-declaration-builder-dsh.md) is the reference output every integration must reproduce.
- [Portable declaration schema](portable-declaration-schema-dsh.md) and [Machine-readable assertions](machine-readable-assertions-dsh.md) own what integrations emit.
- [Verification checker](verification-checker-dsh.md) checks the outputs; [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) constrains any status display.
- [Conformance linter](conformance-linter-dsh.md) detects drift between integration outputs and the shared contract.
- [Multi-format distribution kit](multi-format-distribution-kit.md) and [Email signature kit](email-signature-kit-dsh.md) are adjacent distribution surfaces, not adapters.

## 8. Resolution of the seed's "before implementation" concerns

- **Prioritise proven workflows** — section 5.2 item 11: static-first, low-lock-in hosts first.
- **Data ownership** — section 5.2 item 4: outputs go to user-controlled locations; no silent upload.
- **Portability** — section 5.2 item 5: import/export of `.plus-ai.json` in every host.
- **Permissions** — section 5.2 item 6: no forced disclosure, host permission model respected.
- **Moderation** — section 5.2 item 7: shared-platform posts are human-authored, never project-endorsed.
- **Version updates** — section 5.2 items 8 and 5.5: declared targets, loud failure, changelog-announced updates.
- **Maintenance** — section 5.2 item 9: published maintainer and abandonment status.
- **Neutral reference implementations** — section 5.2 item 10: free, open, offline-capable per proven workflow.

## 9. Acceptance criteria

1. A declaration produced in any host validates offline and matches the no-account builder's output for the same inputs.
2. No integration defines a competing record format or metadata vocabulary.
3. A pre-filled draft cannot be published without an explicit user action.
4. An integration writes outputs only to user-controlled locations and uploads nothing silently.
5. Every integration declares the schema and interface versions it targets.
6. Abandoned integrations are labelled as such in their manifest.
7. At least one free, offline-capable reference implementation exists per proven workflow.
8. No integration renders a trust score, rank, or single verdict.
9. No integration requires prompts, provider disclosure, or an account with the project.

## 10. Open questions

- Which specific CMS and editor ecosystems to target first, pending demand and extension-API assessment.
- Whether integrations should carry a formal conformance result from the conformance linter, or a plain self-declaration, is undecided.
