# Developer Integrations — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`developer-integrations.md`](developer-integrations.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the minimal stable core of developer-facing integration surfaces — package metadata, Git trailers, CI checks, browser indicators, client libraries, and open schemas — each a thin carrier of the one declaration record, so that code repositories, packages, and tooling can carry and check `+AI` responsibility without adopting a proprietary stack. It keeps the machine-facing side of the mark interoperable and lock-in-free, while drawing a hard line between linting (does the field exist and parse?) and verification (is the claim true?).

## 2. Placement and boundaries

This is a commons-layer specification. It owns the *developer format core*; it does not own the declaration record ([Portable declaration schema](portable-declaration-schema-dsh.md)), the page-embedding surfaces HTML metadata / JSON-LD / `.well-known` ([Machine-readable assertions](machine-readable-assertions-dsh.md)), the visual component ([Reusable web component](plus-ai-web-component-dsh.md)), the change feeds and read API ([Public snapshots and API](public-snapshots-and-api-dsh.md)), factual checking ([Verification checker](verification-checker-dsh.md)), or project-presentation drift detection ([Conformance linter](conformance-linter-dsh.md)). It honours the free floor: every format is plain text or JSON readable without a library.

## 3. Terminology

- **Integration surface** — one concrete place a declaration reference can live (package file, trailer, CI output).
- **Carrier** — the surface's only job: to point at or embed the declaration record, never to reinterpret it.
- **Lint** — a structural check (field present, parseable, references a real identifier); produces no truth claim.
- **Verification** — the factual checking owned by the verification checker; out of scope here.
- **Conformance fixture** — a published example input/output pair used to test an implementation.

## 4. Scope

### 4.1 In scope

- Package-metadata fields across ecosystems.
- Git trailer and commit-signature conventions.
- CI check behaviour and exit semantics.
- Browser-indicator and client-library contracts.
- Interface versioning and conformance fixtures.

### 4.2 Out of scope and deferred

- Page embedding and discovery (machine-readable assertions).
- The web component's rendering (reusable web component).
- Change feeds, webhooks, and the read API (public snapshots and API).
- Factual checking and evidence labels (verification checker, evidence labels).
- External provenance mapping (provenance interoperability).

## 5. Specification

### 5.1 Design goals and principles

1. **Minimal stable core.** A handful of surfaces, chosen for reach and stability, not completeness.
2. **Plain-text readable.** No surface may require a library to be read by a human.
3. **Carrier, not interpreter.** A surface references the declaration; it never derives or alters meaning.
4. **Lint is not verify.** Structural conformance and factual truth are reported by different tools.
5. **Interface-first.** Versioned interfaces published before wide adoption, so consumers can pin.

### 5.2 Normative requirements

1. Every developer surface MUST reference or embed the [Portable declaration schema](portable-declaration-schema-dsh.md) record and MUST NOT define a second record shape.
2. Package metadata MUST use a single reserved key per ecosystem (e.g. `"plus-ai"` in `package.json`, a `[project] plus-ai` or equivalent in others) whose value is either a declaration reference (URL or identifier) or the inline record; the key MUST be documented per ecosystem in a published compatibility table.
3. Git trailers MUST use the reserved trailer `Plus-AI:` whose value is a declaration reference or identifier; a declaration MAY also be signalled by the founding-style author line `Name +AI`, but the trailer is the machine-checkable form and the two MUST NOT disagree.
4. CI checks MUST be lint checks only: they MUST verify presence, parseability, and identifier resolvability, MUST NOT assert truth, and MUST exit with distinct codes for "absent", "malformed", "unresolvable reference", and "passed".
5. Client libraries MUST be thin wrappers that read and write the portable record and the integration surfaces; they MUST NOT require network access, MUST NOT phone home, and MUST NOT hide or alter fields.
6. Browser indicators MUST render only evidence labels ([Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)) from the assertion the page carries, and MUST render "no machine-readable assertion found" when absent — never a negative mark.
7. Every surface MUST be fully expressible as UTF-8 text and MUST parse with no JavaScript and no cookies.
8. Interfaces MUST be versioned with a monotonic integer from first publication; a change to a surface's meaning MUST bump the version and MUST be announced in the [Changelog and RSS](changelog-and-rss-dsh.md) feed before adoption.
9. The project MUST publish conformance fixtures — canonical input/output pairs — for each surface, and MUST keep them in the offline pack so tests run without the network.
10. No surface MAY be proprietary or vendor-specific in a way that makes a declaration unreadable elsewhere; ecosystem keys are namespaced, not owned.
11. Webhooks and change feeds are deferred to [Public snapshots and API](public-snapshots-and-api-dsh.md); this specification MUST NOT define a competing push channel.

### 5.3 Data model

Package-metadata carrier (illustrative, ecosystem namespaced):

```
{ "plus-ai": { "ref": "declarationId | URL", "specVersion": "vN.M" } }
```

Git trailer:

```
Plus-AI: <declarationId | URL>
```

CI result (lint only, never a verdict):

```
{ "surface": "package|trailer", "status": "passed|absent|malformed|unresolvable",
  "targets": [ "schemaVersion", "specVersion" ] }
```

### 5.4 Interfaces and behaviours

- **Package metadata:** a package MAY carry one primary declaration reference; multiple scopes use the record's own scoping, not multiple keys.
- **Git trailer:** the trailer travels with the commit; a tool MAY collect trailers across a range to build a per-release list, but each trailer remains a claim about its own commit.
- **CI check:** read-only over the repository, emits the structured result above, and never publishes a declaration or a verdict.
- **Browser indicator:** resolves the page's assertion via the machine-readable assertions discovery order, then renders labels or the honest "none found" state.

### 5.5 Lifecycle and operational rules

Surfaces are versioned and additive within a major interface version. Deprecation of a surface is announced in the changelog with a migration note and a compatibility window, never a silent removal. Conformance fixtures are regenerated whenever a schema version ships.

## 6. Free floor, red lines, and invariants

All developer surfaces are free-floor commons: reading, writing, and linting must never require payment, an account, or a proprietary library. The lint-versus-verify split (item 4) protects the red line against reputation scores by keeping structural tooling from issuing verdicts, and against transfer of responsibility by ensuring a CI check never "certifies" a claim. Plain-text readability (item 7) enforces the static-first invariant; the no-competing-format rule (item 1) enforces one normative specification, many presentations.

## 7. Relationships to sibling specifications

- [Machine-readable assertions](machine-readable-assertions-dsh.md) owns the HTML metadata, JSON-LD, and `.well-known` surfaces this document references but does not redefine.
- [Reusable web component](plus-ai-web-component-dsh.md) owns the visual mark this document's surfaces may point at.
- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the record every carrier references.
- [Verification checker](verification-checker-dsh.md) performs the factual checking that linting must not.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) constrains browser indicators and any status display.
- [Public snapshots and API](public-snapshots-and-api-dsh.md) owns change feeds, webhooks, and the read API.
- [Conformance linter](conformance-linter-dsh.md) checks project presentations; this document's lint checks apply to third-party integrations.
- [Publishing and productivity integrations](publishing-and-productivity-integrations-dsh.md) composes these surfaces into authoring tools.
- [Provenance interoperability](provenance-interoperability-dsh.md) owns external-format mapping, which these surfaces must not duplicate.

## 8. Resolution of the seed's "before implementation" concerns

- **Choose a minimal stable core** — section 5.1 principle 1 and 5.2 items 1-7: a named handful, not an exhaustive list.
- **Publish conformance fixtures** — section 5.2 item 9: canonical input/output pairs in the offline pack.
- **Avoid vendor lock-in** — section 5.2 items 2, 7, 10: plain-text namespaced keys, no proprietary formats.
- **Version interfaces early** — section 5.2 item 8: monotonic versioned interfaces, announced before adoption.
- **Distinguish linting from factual verification** — section 5.2 item 4 and 5.4: distinct tools, exit codes, and outputs.

## 9. Acceptance criteria

1. Every surface references or embeds the portable declaration record and nothing else.
2. A declaration written in one ecosystem's package file is readable in another without a library.
3. A CI check never emits a truth claim or verdict; it reports only structural status.
4. The Git trailer and author line, when both present, are checked for disagreement.
5. Client libraries are network-free and preserve fields byte-for-byte.
6. A browser indicator renders evidence labels only, or the honest "none found" state.
7. Every surface parses with JavaScript disabled and no cookies.
8. Conformance fixtures pass offline from the offline pack.
9. Interface changes are versioned and changelog-announced before adoption.

## 10. Open questions

- The exact reserved-key spellings per package ecosystem are undecided and require a compatibility survey.
- Whether commit-signature binding (beyond trailers) should join the minimal core, or defer to proofs of control, is undecided.
