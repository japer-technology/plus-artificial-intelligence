# Development task — offline-and-self-hosting-pack: Offline and Self-Hosting Pack

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md)
> **Source:** spec [`offline-and-self-hosting-pack-dsh.md`](../suggestions/offline-and-self-hosting-pack-dsh.md) · seed [`offline-and-self-hosting-pack.md`](../suggestions/offline-and-self-hosting-pack.md)
> **Effort:** L · **Phase:** P2 · **Position:** P2 — meaningful once the checker and generator exist; a minimal pack (spec + themes) can ship earlier as a quick win.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Downloadable self-contained archive of the commons (spec, translations, themes, schemas, builders, checker) with reproducible signed releases.
- **Why now / risk of deferring:** P2 — meaningful once the checker and generator exist, but a minimal pack (spec + themes) can ship earlier as a quick win; deferring the whole pack delays the physical free-floor guarantee that the commons survives the loss of every hosted service.
- **Features to deliver:**
  - Reproducible build script (published, versioned, shipped inside the pack) assembling the commons: every spec version + manifests, reviewed translations with `basedOn` pointers, neutral presentation, themes, schemas, no-account builder, offline checker, verification instructions; two builds from pinned sources byte-identical.
  - Release manifest (pack version, `sha256`, component versions + hashes, signing-key id, signature, full/core sizes, build-script version) plus a detached signature and offline verification instructions, with the public key bundled.
  - Optional, user-initiated update discovery via a signed `latest` pointer — no auto-update, no phone home.
  - Full licence manifest + every bundled licence text; published size budgets (full + core) with flagged overruns; documented offline limitations and self-host instructions; permanent versioned URLs.
- **Depends on:** specification-versioning-and-hashing, public-snapshots-and-api, verification-checker, generator-pipeline, licensing-and-mark-policy

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Size budgets (full + core)
- **Question:** What are the concrete size budgets for the full pack and the core variant? (spec §10 item 1; digest "size budgets".)
- **Option (a):** provisional numbers now (e.g. full ≤ 50 MB, core ≤ 10 MB), revisable at the first reproducible build
  - **For:** The spec requires published budgets with flagged overruns (spec §5.2 item 8), and §10 defers only to "pending component measurement"; a provisional number is implementable now and revisable at the first build.
  - **Against:** Provisional numbers risk being arbitrary and may need immediate revision once components are measured.
- **Option (b):** placeholder "TBD — measured at first build" with the overrun-flag mechanism only
  - **For:** Avoids committing to numbers before component measurement, which spec §10 flags as pending.
  - **Against:** Does not satisfy the "published size budgets exist" acceptance criterion until the first build, leaving spec §5.2 item 8 unmet in the spec deliverable.
- **Option (c):** a core-variant budget only, no full-pack budget
  - **For:** The core variant is the subset the pack must guarantee, so a single budget is simpler.
  - **Against:** The spec requires a stated total for the full pack and a smaller budget for the core variant (spec §5.2 item 8); omitting the full budget under-specifies the release.
- **Recommended:** (a) — spec §5.2 item 8 requires published budgets with flagged overruns and §10 says "pending component measurement"; a provisional number is a decision the agent can implement, confirmed or revised at first build. Record them as provisional.
- **Your choice:** ✏️

### D2 — Universal vs per-platform archives
- **Question:** Should the pack ship a single universal archive or per-platform archives? (spec §10 item 2; digest "universal vs per-platform archives".)
- **Option (a):** a single universal archive (plain zip/tar) only
  - **For:** The pack is static files (spec, schemas, HTML, JS, translations), not platform binaries, so one plain archive is `file://`-openable everywhere (spec §5.2 item 2) and keeps rebuilds byte-identical (spec §5.2 item 3).
  - **Against:** A single archive cannot optimise for platform-specific packaging, but none of the bundled artifacts need it.
- **Option (b):** per-platform archives (Linux/macOS/Windows)
  - **For:** Allows platform-native packaging where a host has special needs.
  - **Against:** Adds rebuild burden with no benefit for a static-file pack, and multiplies the byte-identical-release surface (spec §5.2 item 3).
- **Option (c):** a universal archive now, per-platform variants later if ever
  - **For:** Ships the useful universal form while leaving the door open for later variants.
  - **Against:** The spec never requires platform variants (spec §5.2 items 2–3); deferring "later if ever" adds a decision point without a spec requirement.
- **Recommended:** (a) — the pack is static files (spec, schemas, HTML, JS, translations), not platform binaries; a single universal plain archive is `file://`-openable everywhere, and per-platform variants add rebuild burden with no benefit.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

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
11. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- No auto-update or phone home — update discovery is user-initiated only.
- No bundled component without its licence text.
- Packed components must be byte-identical to the hosted artifacts of the same version.
- The pack opens from `file://` with zero build steps and zero network for its core tasks (building, validating, checking a declaration).
- Components are never silently trimmed on budget overrun — an overrun is flagged in the manifest.
- Translations follow the standard: English governs with the notice carried (R1); translated content stays readable as plain static files without a build (R11); the status vocabulary (reviewed/machine-draft/untranslated/outdated) is carried as data, never as a comment (R5); every reviewed translation ships its `basedOn`/`source-version` pointer (R8). The mark `+AI`, URLs, identifiers, and code are T0 protected (R2/T0), never translated.

## 5. Acceptance criteria
- [ ] The pack opens from `file://` and supports building, validating, and checking a declaration with no network.
- [ ] Two builds from the same pinned sources produce byte-identical archives.
- [ ] Every release publishes a manifest with an archive hash, component hashes, and a signature.
- [ ] A user verifies a release's hash and signature offline using the bundled public key.
- [ ] No tool in the pack auto-updates or phones home; update discovery is user-initiated.
- [ ] The pack redistributes the full licence manifest and every bundled licence text.
- [ ] Published size budgets exist for the full and core variants, and overruns are flagged.
- [ ] Hosted-only features are listed as unavailable offline, with self-host instructions.
- [ ] Older pack versions remain downloadable at permanent URLs and are never edited in place.

## 6. Outputs to produce in the repository
- `scripts/build-pack.mjs` — the reproducible build script (byte-identical archive assembly + release-manifest generation), shipped inside the pack it produces.
- `docs/spec/offline-and-self-hosting-pack.md` — release/signature/update mechanics, size budgets, offline-limitations, archival rules, and the multi-language folding.
- The pack, release manifest, and detached signature are build outputs served at permanent versioned URLs, not checked into the repository.

## 7. Read before building
- [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md) — mini-plan
- [`offline-and-self-hosting-pack-dsh.md`](../suggestions/offline-and-self-hosting-pack-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, status vocabulary, resolution order)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
