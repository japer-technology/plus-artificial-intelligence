# Artifact Hashing and Binding — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`artifact-hashing-and-binding.md`](artifact-hashing-and-binding.md).
> **Catalogue group:** Artifacts and trust.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how a `+AI` declaration binds to what it covers.
When the artifact has stable bytes — a file, a canonical text, a release, a
page region, a C2PA manifest, a source-system version — the declaration binds
to a hash of those bytes; when stable bytes do not exist, the declaration binds
to a described scope. Both forms are first-class, and every surface must say
plainly which kind of binding a declaration carries, so that "hash matched"
never quietly becomes "we think this is about the same thing".

## 2. Placement and boundaries

This specification sits in the "Artifacts and trust" group and owns the
*binding object* inside a declaration. It does not own the declaration record
(see [Portable declaration schema](portable-declaration-schema-dsh.md)), which
embeds the binding, nor the checks that compare hashes (see [Verification
checker](verification-checker-dsh.md)), nor the labels used to report results
(see [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)).
It honours the free-floor invariant: byte-binding and scope-binding must both be
usable without payment, and the honest distinction between them may never be
reserved for paying customers.

## 3. Terminology

- **Binding** — the part of a declaration that identifies what the declaration
  covers.
- **Byte binding** — a binding over stable, canonicalised bytes (file, text,
  region, manifest, version).
- **Scope binding** — a binding over a described scope when stable bytes do
  not exist (living pages, APIs, collections).
- **Canonicalisation** — the deterministic transform that produces the bytes
  that are hashed.
- **Revalidation** — re-deriving a hash at check time and comparing it to the
  declared value.

## 4. Scope

### 4.1 In scope

- Binding kinds and their fields.
- Canonicalisation rules per kind.
- Hash algorithm and encoding.
- Handling of dynamic content and derivatives.
- Missing-artifact and revalidation behaviour.
- Labelling rules for byte-bound versus scope-bound claims.

### 4.2 Out of scope and deferred

- The checks that evaluate bindings (verification checker).
- Hashing the normative specification itself (specification versioning and
  hashing).
- C2PA/IPTC manifest *creation* (see provenance interoperability, which maps
  rather than duplicates those formats).

## 5. Specification

### 5.1 Design goals and principles

1. **Honest strength.** The binding kind is always visible; stronger bindings
   are never implied by weaker ones.
2. **Determinism.** The same artifact always canonicalises to the same bytes.
3. **Bounded work.** Checking a binding must not require downloading unbounded
   content (range requests, size caps).
4. **Change-friendly.** When content legitimately changes, supersession via the
   declaration lifecycle is the answer — not a silently updated hash.

### 5.2 Normative requirements

1. A declaration's binding MUST be exactly one of: byte binding, scope binding,
   or C2PA-manifest binding; a declaration MAY carry several bindings only when
   each covers a distinct part of the declared scope and each is labelled.
2. A byte binding MUST contain: `algorithm` (SHA-256 minimum), `hash` (hex
   digest), `canonicalisation` (one of the named methods below), and either a
   retrieval URL or a content identifier.
3. A byte binding over a single file MUST hash the file's raw bytes with
   canonicalisation `raw`.
4. A byte binding over canonical text MUST normalise line endings to `\n`,
   strip a single trailing newline, and encode UTF-8, with canonicalisation
   `text-normalised`.
5. A byte binding over a page region MUST define the region by a stable
   selector plus the retrieved text of that region, with canonicalisation
   `region-<selector>`; the selector must be recorded in the binding.
6. A byte binding over a source-system version MUST record the system, the
   version identifier, and the hash of the exported bytes, with
   canonicalisation `exported`.
7. A C2PA-manifest binding MUST reference the manifest by its content
   credentials identifier and hash, without claiming any C2PA validation the
   project did not perform (see provenance interoperability).
8. A scope binding MUST contain a human-readable `description` of the scope and
   a URL or identifier where the scope is defined; it MUST NOT contain a hash.
9. Every binding MUST be displayed with its kind: surfaces MUST render
   "byte-bound" or "scope-bound" (or the named sub-kind) next to the claim, and
   checkers MUST report `hash-matched` only for byte and manifest bindings.
10. For scope bindings, checkers MUST report the binding as `self-declared`
    scope coverage, never as hash evidence.
11. Revalidation MUST compare the hash computed at check time with the declared
    hash; a mismatch MUST be reported as `check-failed` (hash mismatch), never
    silently ignored or "corrected".
12. If the artifact is missing or unreachable, the check MUST report
    `check-failed` with reason "artifact unavailable", and the binding MUST NOT
    be treated as matched or unmatched.
13. Derivative works MUST carry their own bindings; a declaration MUST NOT
    claim a hash of an upstream artifact as if it covered the derivative.
14. A hash that no longer matches because the signer intentionally changed the
    artifact MUST be handled by issuing a new declaration (supersession), not
    by editing the old binding.

### 5.3 Data model

```
"binding": {
  "kind": "byte | scope | c2pa",
  "algorithm": "sha256",            // byte and c2pa only
  "hash": "hex digest",             // byte and c2pa only
  "canonicalisation": "raw | text-normalised | region-* | exported",
  "url": "retrieval URL (optional)",
  "contentId": "opaque identifier (optional)",
  "regionSelector": "for region bindings",
  "description": "for scope bindings; also recommended for byte bindings"
}
```

### 5.4 Interfaces and behaviours

- The checker performs ranged or bounded fetches for byte bindings where the
  server supports them, and enforces size caps per the checker specification.
- The no-account declaration builder offers both binding kinds and renders the
  chosen kind explicitly in the visible text it produces.
- Registry and directory views show the binding kind as a column or label, so
  a scope-bound declaration is never mistaken for a byte-bound one.

### 5.5 Lifecycle and operational rules

- Bindings are immutable once issued; artifact changes flow through declaration
  lifecycle supersession.
- Revalidation is a check-time operation only; no background service may edit
  stored bindings to keep them "fresh".
- Cached check results record the binding kind and the artifact bytes fetched
  (length, range) so results remain auditable.

## 6. Free floor, red lines, and invariants

Both binding kinds and all revalidation checks belong to the free floor; paid
services may offer scheduled revalidation at scale but may never own or hide
the kind distinction. The honesty rule implements the no-silent-change
invariant at the artifact level, and the derivative rule prevents the mark from
being used to launder upstream responsibility onto an unsigned derivative —
keeping responsibility human and correctly attached.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) embeds the
  binding object defined here.
- [Verification checker](verification-checker-dsh.md) executes revalidation and
  bounded fetches.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)
  defines the `hash-matched` and `check-failed` labels.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) governs supersession
  when artifacts change.
- [Provenance interoperability](provenance-interoperability-dsh.md) defines the
  C2PA-manifest binding's relationship to content credentials.
- [Artifact passports](artifact-passports-dsh.md) is the stable resource that
  carries bindings for one defined scope.
- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md)
  is the analogous byte-pinning system for the normative specification itself.

## 8. Resolution of the seed's "before implementation" concerns

- **Canonicalisation** — section 5.2 items 2-6: named methods per binding
  kind.
- **Algorithms** — section 5.2 item 2: SHA-256 minimum, hex encoding.
- **Dynamic-content handling** — section 5.2 item 8: scope bindings for living
  content, plus region bindings where a stable part exists.
- **Derivatives** — section 5.2 item 13: derivatives carry their own bindings.
- **Missing artifacts** — section 5.2 item 12: `check-failed` with reason,
  never a guessed outcome.
- **Revalidation** — section 5.2 items 11-12 and 5.5: check-time comparison,
  immutable stored bindings.
- **Clear labels for byte-bound versus scope-bound** — section 5.2 items 9-10
  and 5.4: the kind is rendered on every surface and reported per label rules.

## 9. Acceptance criteria

1. A byte-bound declaration over an unchanged file yields `hash-matched`.
2. The same declaration after the file changes yields `check-failed` (hash
   mismatch), and the stored binding is unchanged.
3. A scope-bound declaration never yields `hash-matched`; it is reported as
   self-declared scope coverage.
4. A text binding hashes identically regardless of the platform's line endings
   after `text-normalised` canonicalisation.
5. A region binding records its selector and revalidates only the region.
6. An unreachable artifact yields `check-failed` with reason "artifact
   unavailable".
7. A derivative of a hashed artifact requires its own declaration and binding.
8. All surfaces (builder output, checker results, directory rows) display the
   binding kind explicitly.

## 10. Open questions

- Which canonicalisation methods to standardise beyond the four named here
  (e.g. PDFs, images, archives).
- Whether large-artifact bindings should adopt Merkle-range hashing to support
  partial verification.
