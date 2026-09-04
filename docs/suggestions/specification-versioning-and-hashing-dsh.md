# Specification Versioning and Hashing — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`specification-versioning-and-hashing.md`](specification-versioning-and-hashing.md).
> **Catalogue group:** Artifacts and trust.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how the normative `+AI` specification — the text
that fixes the meaning "AI helped. I take responsibility." — is versioned,
addressed, and hashed so that a declaration issued years ago keeps pointing at
the exact meaning its signer accepted. A promise whose referent can silently
mutate is not a promise; versioning gives every declaration a fixed referent,
and hashing makes "this matches the normative text" a fact anyone can check.

## 2. Placement and boundaries

This specification sits in the "Artifacts and trust" group and owns the
*version referent system* for the normative specification: version numbers,
canonical bytes, hashes, historical URLs, release and correction rules, and
migration policy. It does not own the declaration record (see [Portable
declaration schema](portable-declaration-schema-dsh.md)), which merely
references a `specVersion`. It honours the no-silent-change invariant as its
reason for existing, and the free-floor invariant by making every published
version and its hash permanently available without payment.

## 3. Terminology

- **Normative specification** — the canonical text defining the `+AI` meaning
  and its obligations; English is the normative fallback.
- **Specification version** — an immutable, published release of the normative
  specification (e.g. `vN.M`).
- **Canonical bytes** — the exact byte sequence hashed for a version.
- **Content hash** — a cryptographic digest over the canonical bytes.
- **Translation relationship** — the pointer a translation carries to the
  specification version it was reviewed against.

## 4. Scope

### 4.1 In scope

- Version numbering and release rules.
- Canonical byte definition and hashing algorithm.
- Historical URL and redirect policy.
- Correction policy for released versions.
- Translation version relationships.
- Deprecation and migration policy.

### 4.2 Out of scope and deferred

- Versioning of themes, schemas, and tooling (each owns its own; see conformance
  linter and per-theme conformance notes).
- Hashing of artifacts bound to declarations (owned by artifact hashing and
  binding).

## 5. Specification

### 5.1 Design goals and principles

1. **Immutable referents.** A published version never changes.
2. **Permanent addresses.** Every version has a stable URL that outlives the
   unversioned current URL.
3. **Checkable identity.** Anyone can recompute the hash of a version from the
   published bytes.
4. **Correction without mutation.** Errors in a release are fixed by a new
   release with a recorded relationship, never by editing the old bytes.

### 5.2 Normative requirements

1. The normative specification MUST carry a version number of the form `vN.M`
   (`N` = meaning-compatible major, `M` = minor revision); version numbers MUST
   increase monotonically and MUST never be reused.
2. Each published version MUST be served at a permanent URL that includes the
   version, and the unversioned URL MUST redirect to the current version;
   historical URLs MUST never be removed or repurposed.
3. Each version MUST publish: the canonical English bytes, a `sha256` content
   hash over exactly those bytes, the release date, and a human-readable change
   note comparing it to the previous version.
4. The canonical bytes MUST be defined as the normative English source file's
   UTF-8 bytes after normalising line endings to `\n` and stripping a trailing
   newline; this definition MUST be documented with the release tooling.
5. Released versions MUST be immutable: any correction — including typographical
   fixes — MUST be published as a new minor version whose change note records
   the correction and the version it corrects.
6. A declaration's `specVersion` reference MUST resolve to exactly one published
   version; checkers MUST treat unresolvable references as `check-failed`, not
   silently map them to the current version.
7. Each reviewed translation MUST carry a `basedOn` pointer naming the
   specification version (and, where practical, the content hash) it was
   translated from; translations without such a pointer MUST be labelled
   unversioned.
8. The hash MUST be displayed in canonical presentations as a short fingerprint
   (first 12 hex characters) alongside a link to the full hash and verification
   instructions; the fingerprint is presentation of the hash, not a substitute
   for it.
9. Minor releases MUST NOT change the three-part meaning (AI helped / I take
   responsibility / honest marking); a change to that meaning MUST be a new
   major version and MUST be preceded by a public consultation per governance
   and stewardship.
10. Deprecation MUST be announced with the affected version, the reason, and
    the recommended migration; deprecated versions MUST remain available and
    valid referents — deprecation never invalidates old declarations.

### 5.3 Data model

Version manifest (one per release):

```
{
  "version": "vN.M",
  "released": "ISO-8601",
  "hash": "sha256 hex over canonical bytes",
  "canonicalUrl": "permanent versioned URL",
  "corrects": "optional previous version",
  "supersedes": "previous version",
  "changeNote": "human-readable",
  "translations": [ { "lang": "ISO 639", "basedOn": "vN.M", "status": "reviewed|draft" } ]
}
```

### 5.4 Interfaces and behaviours

- The checker resolves a declaration's `specVersion` against the published
  manifest list, then verifies the fingerprint of the fetched canonical bytes
  where requested.
- Mirrors and the offline pack carry all versions and manifests so resolution
  works without the hosted service.
- Publishing tooling MUST refuse to release a version whose hash does not match
  the canonical bytes it declares.

### 5.5 Lifecycle and operational rules

- Release cadence is event-driven (when the text actually changes), never
  scheduled-for-its-own-sake.
- Major-version consultations are announced through the changelog and RSS feed
  with notice periods defined there.
- Key custody for signing release manifests, if adopted, follows continuity and
  namespace custody.

## 6. Free floor, red lines, and invariants

Every published version, its hash, and its manifest are free-floor commons:
permanently available, mirrorable, and includable in the offline pack without
payment. The no-silent-change invariant is this specification's core: nothing
may edit released bytes, and any change to the meaning must be a new major
version — protecting the red line that responsibility stays human by keeping
the promise's wording stable for everyone who relied on it.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) defines the
  `specVersion` field that references versions defined here.
- [Verification checker](verification-checker-dsh.md) resolves and verifies
  these references.
- [Machine-readable assertions](machine-readable-assertions-dsh.md) carry the
  reference on pages.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) defines when a
  specification change requires a new declaration rather than an event.
- [Translation governance](translation-governance-dsh.md) owns the `basedOn`
  relationships for translations.
- [Changelog and RSS](changelog-and-rss-dsh.md) announces releases and
  corrections.
- [Conformance linter](conformance-linter-dsh.md) checks that presentations
  display the correct version and fingerprint.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md)
  owns the long-term custody of version URLs and release keys.

## 8. Resolution of the seed's "before implementation" concerns

- **Canonical bytes** — section 5.2 item 4: documented byte normalisation.
- **Release and correction rules** — section 5.2 items 1, 5: monotonic
  versions; corrections as new minors with recorded relationships.
- **Historical URLs** — section 5.2 item 2: permanent versioned URLs, redirects
  that never repurpose.
- **Translation relationships** — section 5.2 item 7: `basedOn` pointers.
- **Hash algorithms** — section 5.2 item 3: `sha256` over canonical bytes.
- **Deprecation** — section 5.2 item 10: announced, never invalidating.
- **Migration policy** — section 5.2 items 9-10 plus 5.5: meaning changes are
  major releases with consultation; migration is recommended, never forced.

## 9. Acceptance criteria

1. Every published version resolves at a permanent URL containing its version
   number.
2. The unversioned URL redirects to the current version and has never 404'd a
   historical version.
3. Recomputing `sha256` over the published canonical bytes equals the published
   hash for every version.
4. A typo fix ships as a new minor version whose change note names the version
   it corrects, and the old bytes remain downloadable unchanged.
5. A declaration referencing a deleted or unknown version is reported as
   `check-failed`, never silently remapped.
6. Every reviewed translation carries a `basedOn` pointer.
7. Canonical presentations display the 12-character fingerprint with a verify
   link.
8. The offline pack contains every version and manifest.
9. A deprecated version remains a valid referent for old declarations.

## 10. Open questions

- Whether release manifests should be signed, and by which keys (jointly with
  continuity and namespace custody).
- The minimum consultation window for major-version meaning changes (jointly
  with governance and stewardship).
