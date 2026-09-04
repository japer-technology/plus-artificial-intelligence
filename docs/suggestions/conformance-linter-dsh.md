# Conformance Linter — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`conformance-linter.md`](conformance-linter.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the conformance linter: the automated tool that
checks every presentation, generated export, and integration for the shared
invariants — required translation hooks, identifiers, keyboard behaviour,
declaration wording, metadata, and the rest of the page contract. It exists
because drift is the project's most predictable failure: with many themes, a
specification change becomes many edits, and only a mechanical check catches
what humans miss.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns the *rule set and tool behaviour*. It does not own
the contract itself (see [Theme engine and packs](theme-engine-and-packs-dsh.md),
which defines the architecture, and the accessibility floor it must test), nor
the verification of signer declarations (see [Verification
checker](verification-checker-dsh.md) — a different tool for a different
purpose). It honours the static-first invariant: the linter runs locally, on
files, with no server.

## 3. Terminology

- **Rule** — one checkable requirement over a page, pack, or export.
- **Error** — a violation that breaks meaning or the contract; blocks
  publication.
- **Advice** — a style or quality suggestion; never blocks.
- **Fixture** — a canonical test case a rule is validated against.
- **Exception** — a documented, versioned waiver for a rule in a specific
  surface.

## 4. Scope

### 4.1 In scope

- Rule categories and their sources (contract, accessibility floor,
  metadata).
- Error/advice separation and exit codes.
- Exceptions and their governance.
- Output usability for community contributors.

### 4.2 Out of scope and deferred

- Checking signer declarations (verification checker).
- Theme design guidance (theme builder and starter kit).
- Per-theme documentation of results (per-theme conformance notes).

## 5. Specification

### 5.1 Design goals and principles

1. **The contract is the source of truth.** Every rule cites the contract
   item it checks.
2. **Errors are few and load-bearing.** Advice is loud and separate; only
   meaning-breaking violations block.
3. **Fixtures first.** No rule ships without a passing and a failing fixture.
4. **Output teaches.** A linter report explains how to fix, not just what
   broke.

### 5.2 Normative requirements

1. The linter MUST run locally on static files (`file://`) with no network,
   no build step, and no account, and MUST be included in the offline and
   self-hosting pack.
2. Every rule MUST cite the contract item it checks (page contract,
   accessibility floor, machine-readable assertions, or this document) and
   MUST ship with passing and failing fixtures.
3. Error rules MUST cover at least: (a) required translation hooks present in
   the documented order; (b) required element identifiers and class hooks
   present; (c) normative declaration wording verbatim from canonical data;
   (d) metadata and assertion surfaces valid per machine-readable assertions;
   (e) keyboard-reachable interactive elements and visible focus per the
   accessibility floor; (f) content hashes matching the declared versions.
4. Advice rules MUST cover at least: contrast margins beyond the floor,
   redundant alt text, unused hooks, and pack manifest completeness.
5. Output MUST separate errors from advice; errors MUST produce a failing
   exit code, advice MUST NOT.
6. Every violation MUST name the file, the line or element, the rule
   identifier, the contract citation, and a concrete fix suggestion.
7. Exceptions MUST be recorded in the affected surface's per-theme
   conformance notes with a reason and review date; an unrecorded exception is
   an error.
8. The linter MUST be usable by community contributors: documented
   invocation, human-readable default output, machine-readable output for
   generators and CI (see developer integrations).
9. The linter's own rule set MUST be versioned and announced in the
   changelog; tightening is a new version, weakening requires a contract
   change.
10. The linter MUST NOT modify files; suggestions are reported, never applied
    silently.

### 5.3 Data model

```
{
  "ruleId": "opaque identifier",
  "severity": "error | advice",
  "contract": "citation to the owning document and item",
  "fixtures": { "pass": "fixture path", "fail": "fixture path" },
  "message": "human-readable explanation and fix"
}
```

### 5.4 Interfaces and behaviours

- CLI and a browser-local mode; both produce identical results over the same
  files.
- CI integration consumes the machine-readable output and fails on errors
  only.

### 5.5 Lifecycle and operational rules

- The rule set follows the page contract's evolution: a contract change ships
  with its linter rules and fixtures in the same release.
- Rule deprecations are announced with migration notes, never silently
  removed.

## 6. Free floor, red lines, and invariants

The linter is a free-floor commons: free, local, and included in the offline
pack. It enforces the invariants mechanically — one normative specification
(many presentations), no silent change (hash and wording checks), and the
accessibility floor — and its no-modification rule keeps tooling from
silently rewriting other people's work (RL-7 spirit).

## 7. Relationships to sibling specifications

- [Theme engine and packs](theme-engine-and-packs-dsh.md) owns the contract
  the linter checks.
- [Accessibility floor](accessibility-floor-dsh.md) supplies the
  accessibility rules.
- [Machine-readable assertions](machine-readable-assertions-dsh.md) supplies
  the metadata rules.
- [Per-theme conformance notes](per-theme-conformance-notes-dsh.md) records
  the results and exceptions.
- [Generator pipeline](generator-pipeline-dsh.md) runs the linter as a
  publication gate.
- [Verification checker](verification-checker-dsh.md) is the distinct tool for
  signer declarations; the two share output conventions but not scope.
- [Developer integrations](developer-integrations-dsh.md) packages the CI
  usage.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md)
  distributes the linter.
- [Changelog and RSS](changelog-and-rss-dsh.md) announces rule-set versions.

## 8. Resolution of the seed's "before implementation" concerns

- **Turn the page contract into explicit rules and fixtures** — section 5.2
  items 1-2: cited rules with passing and failing fixtures.
- **Separate errors from advice** — section 5.2 items 4-5: severity classes,
  exit codes only for errors.
- **Define exceptions** — section 5.2 item 7: recorded, versioned, reviewed
  exceptions in per-theme notes.
- **Make output useful to community contributors** — section 5.2 items 6 and
  8: file/line/element, citation, fix suggestion, human and machine output.

## 9. Acceptance criteria

1. The linter runs locally with no network, build step, or account.
2. Every rule cites its contract item and ships passing and failing
   fixtures.
3. A page missing required translation hooks fails with a precise report.
4. Advice never produces a failing exit code.
5. Every violation names file, element, rule, citation, and fix.
6. An exception appears in the surface's per-theme conformance notes or is an
   error.
7. The linter never modifies checked files.
8. Rule-set changes appear in the changelog with migration notes.

## 10. Open questions

- Whether advice rules should carry a default on/off profile for casual
  contributors.
- The exact fixture format (HTML fragments versus full pages) to be adopted.
