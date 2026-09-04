# Use +AI Guide — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`use-plus-ai-guide.md`](use-plus-ai-guide.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the Use +AI guide: a short adoption page that gives a visitor a working, testable example of the mark across names, documents, email, code, presentations, metadata, and links — before any registration, joining, or payment.

## 2. Placement and boundaries

The guide is guidance and examples, not normative meaning; every example must conform to the current published specification and must not alter it (invariant 3). It honours the no-account path: all examples must work with zero required infrastructure. Visible disclosure is the floor; machine-readable detail is an optional supplement that can never replace visible disclosure. Email conventions defer to [Email Signature Kit](email-signature-kit-dsh.md) and [Plus-Addressing Convention](plus-addressing-convention-dsh.md); code and metadata examples defer to [Developer Integrations](developer-integrations-dsh.md); link examples defer to [URL Semantics and Canonicalisation](url-semantics-and-canonicalization-dsh.md).

## 3. Terminology

- **visible disclosure** — human-readable `+AI` marking (a name, a signature line) that carries the declaration.
- **machine-readable detail** — optional structured data (metadata, schema fields, headers) that supplements, never replaces, visible disclosure.
- **example** — a concrete, conforming usage pattern in the guide.
- **no-account path** — the free, browser-only, local-first route.
- **signer**, **declaration**, **artifact** — as in the shared vocabulary.

## 4. Scope

### 4.1 In scope

- The required example categories and their content.
- Conformance testing of every example against the specification.
- The visible-vs-machine-readable distinction.

### 4.2 Out of scope and deferred

- Email signature generation mechanics — [Email Signature Kit](email-signature-kit-dsh.md).
- Plus-addressing rules and caveats — [Plus-Addressing Convention](plus-addressing-convention-dsh.md).
- Code/CI/developer metadata formats — [Developer Integrations](developer-integrations-dsh.md).
- Link parameter and fragment semantics — [URL Semantics and Canonicalisation](url-semantics-and-canonicalization-dsh.md).
- Accurate-use guidance and false claims — [Public Usage Guidelines](public-usage-guidelines-dsh.md).

## 5. Specification

### 5.1 Design goals and principles

- Use-first: a visitor can adopt the mark in one session without any account.
- Tested: no example ships that fails a documented conformance check.
- Honest separation: what the reader sees always carries the meaning; metadata only adds machine convenience.

### 5.2 Normative requirements

1. The guide MUST include at least one conforming example for each of: names, documents, email, code, presentations, metadata, and links.
2. Every example MUST be tested against the current published specification and MUST be removed or corrected if it does not conform.
3. The guide MUST distinguish visible human-readable disclosure from optional machine-readable detail, and MUST state that machine-readable detail can never replace visible disclosure.
4. The guide MUST give a usable result before any registration, joining, or payment: the first examples MUST work on the no-account path.
5. The guide MUST state that using the mark requires no permission, registration, membership, certification, or gatekeeper.
6. Email examples MUST follow the visible-signature and plus-addressing conventions, including the founding example `eric.mourant+ai@japer.technology`, and MUST note that plus-addressing is a disclosure convention, not identity proof.
7. Code examples MUST separate a human-readable comment or attribution from optional machine-readable metadata, deferring formats to [Developer Integrations](developer-integrations-dsh.md).
8. Link examples MUST follow durable-path/query/fragment semantics and defer to [URL Semantics and Canonicalisation](url-semantics-and-canonicalization-dsh.md).
9. The guide MUST NOT present paid services as granting legitimacy, rank, or permission.
10. The guide SHOULD cite the founding examples `https://eric-mourant.plus-artificial-intelligence.org` and `eric.mourant+ai@japer.technology`.

### 5.3 Data model

The guide maintains an example inventory: `{ id, category, content, spec-version-tested, visible | machine-readable, tested-date, reviewer }`. This makes the conformance-testing obligation checkable and repeatable.

### 5.4 Interfaces and behaviours

Not applicable — the guide is a static page; interactive builders defer to [No-Account Declaration Builder](no-account-declaration-builder-dsh.md) and [Email Signature Kit](email-signature-kit-dsh.md).

### 5.5 Lifecycle and operational rules

When the normative specification changes, examples are re-tested against the version in force and updated with a dated change record (invariant 5); examples are versioned with the specification (each example records the version it was tested against) and there is no separate example version stream; drift detection defers to [Conformance Linter](conformance-linter-dsh.md).

## 6. Free floor, red lines, and invariants

The guide MUST keep all core examples on the no-account path and MUST NOT require registration, payment for use, or any disclosure beyond what the mark itself entails. It MUST NOT infer or claim to verify AI use, and MUST NOT present machine-readable detail as a replacement for visible disclosure.

## 7. Relationships to sibling specifications

- [Email Signature Kit](email-signature-kit-dsh.md) — owns signature generation the email examples use.
- [Plus-Addressing Convention](plus-addressing-convention-dsh.md) — owns the `name+ai@domain` rules the email examples cite.
- [Developer Integrations](developer-integrations-dsh.md) — owns code and metadata formats.
- [URL Semantics and Canonicalisation](url-semantics-and-canonicalization-dsh.md) — owns link example semantics.
- [Public Usage Guidelines](public-usage-guidelines-dsh.md) — owns accurate-use and false-claim guidance.
- [Conformance Linter](conformance-linter-dsh.md) — owns automated example-conformance checks.

## 8. Resolution of the seed's "before implementation" concerns

The seed's concern — "Test every example against the specification and clearly distinguish visible disclosure from optional machine-readable detail" — is resolved by §5.2.2 (every example tested), §5.2.3 (visible vs machine-readable distinction), §5.3 (example inventory recording test status), and §5.5 (re-testing on specification change).

## 9. Acceptance criteria

1. All seven example categories are present with at least one example each.
2. Every example passes a documented conformance check against the current specification.
3. Visible disclosure is clearly distinguished from machine-readable detail.
4. The first examples are usable with no account and no payment.
5. Email examples honour signature and plus-addressing conventions, including the founding example.
6. Machine-readable examples are labelled optional and non-replacing.
7. No example implies payment grants legitimacy or permission.

## 10. Open questions

- The precise set of metadata examples to include before [Developer Integrations](developer-integrations-dsh.md) stabilises.
