# Verification Checker — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`verification-checker.md`](verification-checker.md).
> **Catalogue group:** Artifacts and trust.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the free `+AI` verification checker: a tool that
independently inspects a declaration and reports what it found — declaration
syntax, schema and specification versions, hash consistency, control evidence,
artifact binding, status, and the date of each check — as a dated set of
evidence labels rather than a verdict. The checker is the mechanical bridge
between "someone claims X" and "this is what we could check", and it must work
both offline and against hosted records without ever becoming an endorsement
engine.

## 2. Placement and boundaries

This specification sits in the "Artifacts and trust" group and owns the *check
pipeline and result surface*. It consumes definitions owned elsewhere: the
declaration record format ([Portable declaration schema](portable-declaration-schema-dsh.md)),
the on-page discovery mechanisms ([Machine-readable assertions](machine-readable-assertions-dsh.md)),
the status vocabulary ([Declaration lifecycle](declaration-lifecycle-dsh.md)),
the control challenge methods ([Proofs of control](proofs-of-control-dsh.md)),
the binding methods ([Artifact hashing and binding](artifact-hashing-and-binding-dsh.md)),
the label display rules ([Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)),
and the version referents ([Specification versioning and hashing](specification-versioning-and-hashing-dsh.md)).
It honours the static-first invariant: the offline checker must be fully
functional from the offline and self-hosting pack with no network, and the
basic hosted checker must remain free — paid tiers may add volume, monitoring,
or scheduling, never better results.

## 3. Terminology

- **Check** — one bounded inspection producing one evidence label with a date.
- **Check run** — an ordered set of checks over one declaration reference,
  producing a label set.
- **Declaration reference** — a URL, file, QR target, or pasted record that
  locates the declaration to inspect.
- **SSRF** — server-side request forgery; the risk that a hosted checker's
  fetcher is abused to reach internal networks.

## 4. Scope

### 4.1 In scope

- The offline and hosted check pipelines and their ordering.
- Result rendering as evidence labels with dates, per the evidence labels
  specification.
- Handling of unknown, failed, stale, and rate-limited states.
- Fetch policy, SSRF protection, and freshness semantics for the hosted
  checker.
- Non-endorsement obligations of every result surface.

### 4.2 Out of scope and deferred

- The definitions of the underlying methods (schema, hashes, proofs of
  control).
- Registry publication and directory ranking (no checker output may feed a
  rank).
- Certification or assurance verdicts (deferred to independent assurance and
  certification).

## 5. Specification

### 5.1 Design goals and principles

1. **Independence.** The checker verifies a copy of the record against the
   published specification, not against the project's opinion of the signer.
2. **Dated facts.** Every output is a label with a check date.
3. **Offline first.** The offline checker ships with the specification versions
   and schema files it validates against.
4. **Fail-safe fetching.** The hosted checker treats unreachable targets as
   "check failed", never as evidence of wrongdoing.
5. **Accessibility.** Results render as plain text with redundant visuals.

### 5.2 Normative requirements

1. The checker MUST expose a free self-service path: pasted declarations, local
   files, and URLs, with no account required.
2. The offline checker MUST validate syntax and schema against bundled,
   versioned schema and specification files with no network access.
3. A check run MUST include, in order: (a) declaration discovery and retrieval;
   (b) syntax and schema validation; (c) specification version resolution;
   (d) signature verification where present; (e) artifact hash comparison where
   declared; (f) control evidence evaluation where presented; (g) lifecycle
   status resolution; (h) freshness recording.
4. Every check result MUST be an evidence label with a check date, per
   [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md);
   the checker MUST NOT emit scores, ranks, or verdict marks.
5. Unknown states MUST be reported explicitly: a field the checker cannot
   verify MUST be labelled `self-declared` or `not-checked`, never omitted.
6. A failed retrieval MUST render as `check-failed` with a reason category
   (unreachable, timeout, blocked, malformed, permission).
7. The hosted checker MUST enforce fetch policy against SSRF: resolve and
   validate targets before fetching, deny private and link-local ranges,
   disable redirects to disallowed addresses, and cap fetch size and time.
8. The hosted checker MUST rate-limit per client and per target domain, and
   MUST NOT cache or resell fetched content beyond the check.
9. Results MUST state what was checked, when, and against which specification
   and schema versions; the checker MUST NOT imply endorsement or truth of the
   claims.
10. The checker SHOULD accept a QR target, a `.well-known` URL, page metadata,
    or a portable declaration file as input (see machine-readable assertions).
11. The offline checker MUST be redistributable in the offline and
    self-hosting pack and MUST work over `file://` with zero build steps.
12. Where a check would reach a third party (e.g. an artifact URL), the checker
    MUST fetch the minimum bytes needed (e.g. ranged requests for hashing) and
    MUST respect robots and rate guidance.

### 5.3 Data model

Check run record:

```
{
  "runId":      "opaque identifier",
  "target":     "declaration reference checked",
  "startedAt":  "ISO-8601",
  "labels":     [ { "label": "...", "value": "...", "checkedAt": "...",
                   "method": "...", "window": "..." } ],
  "schemaVersionChecked":  "e.g. portable-declaration-schema vN",
  "specVersionChecked":    "the normative specification version resolved"
}
```

The label vocabulary and shapes are owned by evidence labels, not trust scores.

### 5.4 Interfaces and behaviours

- **Web:** paste box, URL box, file picker, QR-camera entry; results as a
  label table with dates and the mandatory disclaimer.
- **CLI:** offline command taking a file or URL; JSON output conforming to the
  check run record; exit codes distinguishing completed-with-labels from
  failed-run.
- **API:** hosted endpoints accept a declaration reference and return the check
  run record; read-only, rate-limited, no write path.

### 5.5 Lifecycle and operational rules

- Freshness: hosted results are recomputed per request or labelled with their
  check date; cached results carry the original date and are marked as such.
- Recheck policy: control labels degrade to `stale` per the expiry windows
  owned by proofs of control.
- Status changes (revoked, disputed) are resolved from the declaration
  lifecycle events at each run.
- The checker's own software is versioned; results record the checker version
  so older outputs remain interpretable.

## 6. Free floor, red lines, and invariants

The checker is part of the free floor: basic checking for the public must
remain free, including offline use. Paid services may offer volume, monitoring,
and scheduled checks, but no payment may change a check's outcome or suppress a
label. The no-verdict rule implements the red line against reputation scores,
and the fetch policy implements the security controls requirement that hosted
verification fetches cannot become an attack vector.

## 7. Relationships to sibling specifications

- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)
  owns the output vocabulary and display rules this checker must follow.
- [Machine-readable assertions](machine-readable-assertions-dsh.md) defines the
  discovery mechanisms the checker resolves.
- [Portable declaration schema](portable-declaration-schema-dsh.md) defines
  what syntax and schema validation mean.
- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md)
  supplies the version referents the checker resolves.
- [Proofs of control](proofs-of-control-dsh.md) defines the control evidence
  the checker evaluates and the expiry windows it applies.
- [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md) defines
  the binding checks.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) supplies status
  resolution rules.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md)
  distributes the offline checker.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) owns the
  SSRF, rate-limit, and fetch policy requirements this specification repeats
  as checker-specific rules.
- [Conformance linter](conformance-linter-dsh.md) is a related but distinct
  tool: it checks project presentations against the page contract, while this
  checker inspects signer declarations.

## 8. Resolution of the seed's "before implementation" concerns

- **Offline versus hosted checks** — section 5.2 items 2 and 11: offline is
  fully bundled; hosted adds URL fetching.
- **Unknown and failure states** — section 5.2 items 5-6: `self-declared`,
  `not-checked`, and `check-failed` with reason categories.
- **Accessible results** — section 5.2 item 9 plus the evidence labels display
  rules: text-first rendering with the mandatory disclaimer.
- **Rate limits** — section 5.2 item 8: per-client and per-target limits.
- **Evidence freshness** — section 5.5: dated labels, stale degradation,
  recheck policy.
- **SSRF protection** — section 5.2 item 7: validated targets, blocked private
  ranges, bounded redirects and fetches.
- **Non-endorsement** — section 5.2 item 9 and section 6: results are facts
  with dates, never endorsements.

## 9. Acceptance criteria

1. A pasted or local declaration is fully checked offline with no network.
2. Every result label carries a check date and the schema and specification
   versions checked.
3. No result surface contains a score, rank, or single verdict mark.
4. A declaration with an unreachable artifact URL renders `check-failed` with
   reason "unreachable", not a negative label.
5. The hosted checker refuses targets that resolve to private or link-local
   addresses.
6. An expired control label renders as `stale` with its original date.
7. A revoked declaration is reported `revoked` with the lifecycle event date.
8. The checker API is read-only and rate-limited.
9. The offline checker opens from disk with zero build steps and no fetch.

## 10. Open questions

- Whether the hosted checker should keep a bounded public cache of recent check
  runs for shareable result links, and if so its retention period.
- The default rate-limit numbers, to be set with cost discipline modelling.
