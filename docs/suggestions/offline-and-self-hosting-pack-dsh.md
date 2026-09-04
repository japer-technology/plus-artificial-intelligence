# Offline and Self-Hosting Pack — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`offline-and-self-hosting-pack.md`](offline-and-self-hosting-pack.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the offline and self-hosting pack: the downloadable, self-contained archive of the commons — the normative specification, translations, neutral presentation, themes, schemas, builders, checker, and verification instructions — with reproducible releases, signatures, and update discovery. It exists so the public layer of `+AI` survives the loss of every hosted service, and so any party can verify a declaration with zero required infrastructure.

## 2. Placement and boundaries

This specification is the *distributable form* of the commons layer defined by [Static-first service architecture](static-first-service-architecture-dsh.md). It packages, not redefines: the specification bytes come from [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md), the data from [Public snapshots and API](public-snapshots-and-api-dsh.md), the checker from [Verification checker](verification-checker-dsh.md), licence notices from [Licensing and mark policy](licensing-and-mark-policy-dsh.md), and archival custody from [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md). It owns the *release, signature, and update mechanics* of the pack itself.

## 3. Terminology

- **Pack** — the complete, self-contained archive defined here.
- **Release manifest** — the versioned document describing a pack's contents, hashes, and signatures.
- **Reproducible build** — a build that produces byte-identical output from the same pinned sources.
- **Signing key** — the key that signs release manifests; custody follows continuity and namespace custody.
- **Update discovery** — the mechanism by which a user learns a newer pack exists.
- **Core variant** — a minimal pack subset within a smaller size budget.

## 4. Scope

### 4.1 In scope

- Pack contents and required variants.
- Reproducible release mechanics and hashing.
- Signatures and their verification instructions.
- Update discovery and its privacy bounds.
- Licence notices and size budgets.
- Offline limitations and long-term archival ownership.

### 4.2 Out of scope and deferred

- The content's own formats and versions (each owning specification).
- Snapshot generation (public snapshots and API).
- Key custody and rotation (continuity and namespace custody).
- The generator that assembles repeated assets (generator pipeline).

## 5. Specification

### 5.1 Design goals and principles

1. **Self-contained.** The pack opens from disk with no network and no build step.
2. **Reproducible.** Anyone can rebuild the pack and get identical bytes.
3. **Verifiable.** Every release is hashed and signed so integrity is checkable offline.
4. **Discoverable but quiet.** Users can learn of updates without silent phone-home behaviour.
5. **Honest about limits.** Hosted-only features are labelled, never silently stubbed.

### 5.2 Normative requirements

1. The pack MUST contain, at minimum: every version of the normative specification and its manifests, reviewed translations with their `basedOn` pointers, the neutral presentation, themes, schemas, the no-account builder, the offline checker, and verification instructions.
2. The pack MUST be openable over `file://` with zero build steps and zero network calls for its core tasks (building a declaration, validating it, checking it against bundled versions).
3. Reproducible releases: the pack MUST be built by a published, versioned build script from pinned sources, and two builds from the same pinned sources MUST produce byte-identical archives; the build script MUST itself be shipped in the pack.
4. Every release MUST publish a release manifest containing: the pack version, the `sha256` hash of the archive, the list of contained components with their versions and hashes, the signing key identifier, and the release date.
5. Releases MUST be signed with a key whose custody follows [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md); the pack MUST include the public key, the detached signature, and step-by-step verification instructions usable offline.
6. Update discovery MUST be optional and explicit: the pack MUST NOT phone home or auto-update; a signed `latest` pointer MAY be published out-of-band, and tools MUST NOT fetch it silently — the user initiates any update check.
7. Licence notices MUST include the full [Licensing and mark policy](licensing-and-mark-policy-dsh.md) manifest and the complete text of every licence the pack redistributes; no third-party component MAY be bundled without its licence.
8. Size budgets MUST be published: a stated total size for the full pack and a smaller budget for the core variant (specification, schema, builder, checker, and instructions, without themes and translations); a component that breaks budget MUST be flagged in the manifest, not silently trimmed.
9. Offline limitations MUST be documented in the pack: hosted-only capabilities (hosted checking, registry search, live status) MUST be listed as unavailable offline, and the pack MUST state how to self-host a read-only replacement from bundled snapshots, per [Static-first service architecture](static-first-service-architecture-dsh.md).
10. Long-term archival ownership MUST follow [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md): the pack is published to at least one archive independent of the primary host, is included in wind-down final exports, and older pack releases MUST remain downloadable at permanent URLs.
11. The pack MUST contain enough of the namespace inventory and public keys (per continuity and namespace custody) for a third party to verify declarations without contacting the steward.
12. Components inside the pack MUST be the same artifacts served elsewhere: a declaration validated against the packed schema MUST validate identically against the hosted schema of the same version.

### 5.3 Data model

Release manifest:

```
{
  "packVersion": "integer",
  "released": "ISO-8601",
  "hash": "sha256 over archive bytes",
  "components": [ { "name": "...", "version": "...", "hash": "..." } ],
  "signingKey": "key identifier",
  "signature": "detached signature",
  "size": { "full": "bytes", "core": "bytes" },
  "buildScriptVersion": "integer"
}
```

### 5.4 Interfaces and behaviours

- **Download:** the pack is a plain archive (plus the manifest and signature as separate files) served at permanent versioned URLs; the unversioned URL redirects to the current release.
- **Verify:** a user recomputes the archive hash and checks the signature against the bundled public key, entirely offline.
- **Update:** a user optionally fetches the signed `latest` pointer; nothing updates on its own.
- **Self-host:** the pack's instructions describe serving the neutral presentation and snapshots as a static read-only site.

### 5.5 Lifecycle and operational rules

Pack releases are event-driven (on material component changes), versioned, and announced in the [Changelog and RSS](changelog-and-rss-dsh.md) feed. Old pack versions remain downloadable and verifiable; a pack is never edited in place. Wind-down and archival follow [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md), with the pack as a first-class item of the final export.

## 6. Free floor, red lines, and invariants

The pack is the physical embodiment of the free floor: its download, use, and self-hosting must stay free and account-free. The reproducible-release rule (item 3) is the no-silent-change invariant applied to distribution; the quiet-update rule (item 6) enforces the red line against covert tracking by forbidding silent phone-home. Honest offline-limitation labelling (item 9) keeps hosted conveniences from masquerading as prerequisites, preserving the static-first invariant.

## 7. Relationships to sibling specifications

- [Static-first service architecture](static-first-service-architecture-dsh.md) owns the layering this pack distributes.
- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md) owns the specification bytes and versions the pack carries.
- [Public snapshots and API](public-snapshots-and-api-dsh.md) owns the data snapshots bundled for self-hosting.
- [Verification checker](verification-checker-dsh.md) is the offline checker the pack ships.
- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) owns the licence manifest and texts the pack redistributes.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md) owns signing-key custody, archival ownership, and final-export obligations.
- [Generator pipeline](generator-pipeline-dsh.md) and [Theme engine and packs](theme-engine-and-packs-dsh.md) produce the assets the pack bundles.
- [Changelog and RSS](changelog-and-rss-dsh.md) announces pack releases.

## 8. Resolution of the seed's "before implementation" concerns

- **Reproducible releases** — section 5.2 item 3: published pinned build script, byte-identical output.
- **Signatures** — section 5.2 items 4-5: signed manifests, bundled public key, offline verification instructions.
- **Update discovery** — section 5.2 item 6: optional, explicit, signed `latest` pointer; no silent fetch.
- **Licence notices** — section 5.2 item 7: full manifest and licence texts; no unlicensed bundling.
- **Size budgets** — section 5.2 item 8: published budgets, full and core variants, flagged overruns.
- **Offline limitations** — section 5.2 item 9: hosted-only features listed as unavailable with self-host guidance.
- **Long-term archival ownership** — section 5.2 items 10-11 and 5.5: independent archives, permanent URLs, final-export inclusion.

## 9. Acceptance criteria

1. The pack opens from `file://` and supports building, validating, and checking a declaration with no network.
2. Two builds from the same pinned sources produce byte-identical archives.
3. Every release publishes a manifest with an archive hash, component hashes, and a signature.
4. A user verifies a release's hash and signature offline using the bundled public key.
5. No tool in the pack auto-updates or phones home; update discovery is user-initiated.
6. The pack redistributes the full licence manifest and every bundled licence text.
7. Published size budgets exist for the full and core variants, and overruns are flagged.
8. Hosted-only features are listed as unavailable offline, with self-host instructions.
9. Older pack versions remain downloadable at permanent URLs and are never edited in place.

## 10. Open questions

- The concrete size budgets (full and core) are undecided pending component measurement.
- Whether the pack should ship a single universal archive or per-platform archives is undecided.
