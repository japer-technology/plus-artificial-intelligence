# Agent request — offline-and-self-hosting-pack: Offline and Self-Hosting Pack

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../../06-email-distribution-integrations.md)
> **Source:** spec [`offline-and-self-hosting-pack-dsh.md`](../../../../suggestions/offline-and-self-hosting-pack-dsh.md) · seed [`offline-and-self-hosting-pack.md`](../../../../suggestions/offline-and-self-hosting-pack.md)
> **Effort:** L · **Phase:** P2 · **Position:** P2 — meaningful once the checker and generator exist; a minimal pack (spec + themes) can ship earlier as a quick win.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Size budgets (full + core)
- **Question:** What are the concrete size budgets for the full pack and the core variant? (spec §10 item 1; digest "size budgets".)
- **Options:** (a) provisional numbers now (e.g. full ≤ 50 MB, core ≤ 10 MB), revisable at the first reproducible build · (b) placeholder "TBD — measured at first build" with the overrun-flag mechanism only · (c) a core-variant budget only, no full-pack budget.
- **Recommended:** (a) — spec §5.2 item 8 requires published budgets with flagged overruns and §10 says "pending component measurement"; a provisional number is a decision the agent can implement, confirmed or revised at first build. Record them as provisional.
- **Your choice:** ✏️

### D2 — Universal vs per-platform archives
- **Question:** Should the pack ship a single universal archive or per-platform archives? (spec §10 item 2; digest "universal vs per-platform archives".)
- **Options:** (a) a single universal archive (plain zip/tar) only · (b) per-platform archives (Linux/macOS/Windows) · (c) a universal archive now, per-platform variants later if ever.
- **Recommended:** (a) — the pack is static files (spec, schemas, HTML, JS, translations), not platform binaries; a single universal plain archive is `file://`-openable everywhere, and per-platform variants add rebuild burden with no benefit.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Build the reproducible build script (published, versioned, and shipped inside the pack) that assembles the commons: every version of the normative specification and its manifests, reviewed translations with their `basedOn` pointers, the neutral presentation, themes, schemas, the no-account builder, the offline checker, and verification instructions.
2. Guarantee reproducibility: two builds from the same pinned sources produce byte-identical archives; the build script is itself part of the pack.
3. Publish the release manifest per release (pack version, `sha256` over the archive, component versions + hashes, signing-key identifier, full/core sizes, build-script version, release date) plus a detached signature and step-by-step offline verification instructions, with the public key bundled.
4. Sign releases with a key whose custody follows `continuity-and-namespace-custody`; keep older pack versions downloadable at permanent URLs, never edited in place.
5. Implement update discovery as optional and explicit: no auto-update, no phone home; a signed `latest` pointer may be published out-of-band and tools must not fetch it silently.
6. Include the full licence manifest and the complete text of every bundled licence; no third-party component without its licence.
7. Publish the D1 size budgets for the full and core variants and flag (never silently trim) any component that breaks budget.
8. Document offline limitations: hosted-only capabilities (hosted checking, registry search, live status) listed as unavailable offline, plus instructions to self-host a read-only replacement from bundled snapshots.
9. Ensure every packed component is byte-identical to the hosted artifact of the same version, and include enough namespace inventory and public keys for third-party verification without contacting the steward.
10. Fold in the multi-language rules below (R1 English governs + carried notice, R11 plain static files, status vocabulary, R8 source-version pinning).
11. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- No auto-update or phone home — update discovery is user-initiated only.
- No bundled component without its licence text.
- Packed components must be byte-identical to the hosted artifacts of the same version.
- The pack opens from `file://` with zero build steps and zero network for its core tasks (building, validating, checking a declaration).
- Components are never silently trimmed on budget overrun — an overrun is flagged in the manifest.
- Translations follow the standard: English governs with the notice carried (R1); translated content stays readable as plain static files without a build (R11); the status vocabulary (reviewed/machine-draft/untranslated/outdated) is carried as data, never as a comment (R5); every reviewed translation ships its `basedOn`/`source-version` pointer (R8). The mark `+AI`, URLs, identifiers, and code are T0 protected (R2/T0), never translated.

## 4. Acceptance criteria
- [ ] The pack opens from `file://` and supports building, validating, and checking a declaration with no network.
- [ ] Two builds from the same pinned sources produce byte-identical archives.
- [ ] Every release publishes a manifest with an archive hash, component hashes, and a signature.
- [ ] A user verifies a release's hash and signature offline using the bundled public key.
- [ ] No tool in the pack auto-updates or phones home; update discovery is user-initiated.
- [ ] The pack redistributes the full licence manifest and every bundled licence text.
- [ ] Published size budgets exist for the full and core variants, and overruns are flagged.
- [ ] Hosted-only features are listed as unavailable offline, with self-host instructions.
- [ ] Older pack versions remain downloadable at permanent URLs and are never edited in place.

## 5. Outputs to produce in the repository
- `scripts/build-pack.mjs` — the reproducible build script (byte-identical archive assembly + release-manifest generation), shipped inside the pack it produces.
- `docs/spec/offline-and-self-hosting-pack.md` — release/signature/update mechanics, size budgets, offline-limitations, archival rules, and the multi-language folding.
- The pack, release manifest, and detached signature are build outputs served at permanent versioned URLs, not checked into the repository.

## 6. Read before building
- [`06-email-distribution-integrations.md`](../../06-email-distribution-integrations.md) — mini-plan
- [`offline-and-self-hosting-pack-dsh.md`](../../../../suggestions/offline-and-self-hosting-pack-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, status vocabulary, resolution order)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
