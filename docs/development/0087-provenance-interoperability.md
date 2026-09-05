# Development task — provenance-interoperability: Provenance Interoperability

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md)
> **Source:** spec [`provenance-interoperability-dsh.md`](../suggestions/provenance-interoperability-dsh.md) · seed [`provenance-interoperability.md`](../suggestions/provenance-interoperability.md)
> **Effort:** M · **Phase:** P3 · **Position:** P3 — after the spine stabilises; advisory mappings first (core-extensions §1.5's "document first, integrate later")
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Map +AI declarations to C2PA, IPTC, Schema.org, and signature formats without reimplementing them.
- **Why now / risk of deferring:** It lands in P3, after the spine stabilises — advisory mappings first (core-extensions §1.5's "document first, integrate later"). Deferring leaves the honesty invariant unguarded: without these mappings, external production facts could be conflated with the declaration's responsibility claim.
- **Features to deliver:**
  - A versioned field-mapping document per external format — C2PA, IPTC, Schema.org, and signature formats — listing every mapped field, direction, and semantic note (§5.2 items 1–6).
  - `no equivalent` recording for unaligned IPTC cases (§5.2 item 4).
  - The C2PA `check-failed` reporting rule (external validation kept separate from declaration labels — §5.2 item 3).
  - Open, offline-capable reference implementations for the C2PA/IPTC/Schema.org mappings (§5.2 item 7).
  - The checker-integration contract requiring external provenance as a distinct labelled section (§5.2 item 8 — the checker code itself is Programme 3's).
  - Versioned releases with changelog + deprecation notes (§5.2 item 9).
- **Depends on:** portable-declaration-schema, artifact-hashing-and-binding, machine-readable-assertions, evidence-labels-not-trust-scores.

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Schema.org property choice
- **Question:** Which Schema.org properties carry the declaration long-term, pending external review (spec §10; digest "Open: Schema.org property choice")?
- **Option (a):** reuse existing creative-work properties (e.g. `schema:creator`, `schema:creditText`, `schema:isBasedOn`, `schema:hasPart`) documented now as an advisory mapping, with final choice deferred to standards engagement
  - **For:** spec §5.2 item 5 requires "reusing existing properties before proposing new ones"; an advisory mapping now delivers the Schema.org mapping (acceptance criterion 5) while the final choice waits on standards engagement, per §10.
  - **Against:** an advisory mapping could be mistaken for a settled choice; until standards engagement confirms the properties, downstream consumers may adopt an interim mapping that later changes (§5.5 mapping reviews on external-standard change).
- **Option (b):** propose a new `+AI`-specific property now
  - **For:** a purpose-built property would be unambiguous for the declaration.
  - **Against:** it directly contradicts §5.2 item 5 ("reusing existing properties before proposing new ones") and §5.1's design goal "ride the rail, don't build one" — the project must not fork external standards.
- **Option (c):** omit Schema.org until external review completes
  - **For:** it avoids publishing a mapping before external review settles the question.
  - **Against:** acceptance criterion 5 requires the Schema.org mapping to reuse existing properties; omitting it fails the deliverable and leaves the digest's "Schema.org property choice" open item unresolved.
- **Recommended:** (a) — spec §5.2 item 5 requires reusing existing properties before proposing new ones; an advisory mapping now keeps the deliverable while the final choice waits on standards engagement.
- **Your choice:** ✏️

### D2 — Machine-readable mapping registry
- **Question:** Publish a machine-readable mapping registry for third-party tools (spec §10; digest "Open: machine-readable mapping registry")?
- **Option (a):** publish it now beside the mapping documents, as a versioned machine-readable list of mappings
  - **For:** spec §5.3 already defines a structured mapping data model (`fields`, `noEquivalent`, `deprecated`); emitting it as a versioned registry answers the digest's open item and makes the mappings consumable "without reimplementing them" (spec §1 purpose).
  - **Against:** it adds a second artifact that must stay versioned and changelogged in sync with the prose docs (§5.2 item 9 versioning discipline), which is extra maintenance.
- **Option (b):** defer it until third-party demand is demonstrated
  - **For:** deferring until demand avoids building a registry nobody consumes yet.
  - **Against:** §10's open question asks "whether to publish" it, and §5.2 item 7's "open, offline-capable" ethos favours machine-readable outputs; deferral leaves the open item unresolved.
- **Option (c):** skip it (prose mapping docs only)
  - **For:** prose mapping docs alone are simpler and sufficient for human readers.
  - **Against:** it ignores the machine-readable direction of the spec's §5.3 data model and the digest's open item, forgoing tool consumption of the mappings.
- **Recommended:** (a) — the spec §5.3 data model is already structured; emitting it as a versioned registry is cheap and makes the mappings consumable without reimplementation.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish a versioned field-mapping document per external format — C2PA, IPTC, Schema.org, and signature formats — under `docs/provenance-interoperability/`, each listing every mapped field, its direction (declaration → external / external → declaration), and the semantic difference preserved (spec §5.2 item 1).
3. Preserve the core distinction in every mapping: external records state *what happened in production*; the declaration states *who takes responsibility* — never present one as the other (item 2).
4. For C2PA: reference content credentials by identifier and hash, state that a referenced credential failing external validation is reported `check-failed` in the C2PA context, and never claim validation the project did not perform (item 3).
5. For IPTC: map Digital Source Type to claim-type `aiRole` where meanings align and record unaligned cases as `no equivalent`, never forced (item 4).
6. For Schema.org: express the declaration as structured metadata reusing existing creative-work properties before proposing new ones (item 5); apply your §2 D1 choice.
7. For signatures: document interop with standard detached-signature formats, leaving key/proof semantics to proofs of control (item 6).
8. Ship open, offline-capable reference implementations for the C2PA/IPTC/Schema.org mappings (item 7), and publish the checker-integration contract requiring external provenance as a distinct labelled section (item 8) — the checker code change itself is Programme 3's, not built here.
9. Version every mapping release, announce it in the changelog, and deprecate obsolete mappings with a migration note (item 9); emit the machine-readable registry per your §2 D2 choice.
10. Self-check against §5: every format has a mapping doc; no mapping conflates production facts with responsibility.

## 4. Constraints (must-nots)
- No mapping presents production-facts as responsibility, or vice versa (spec §5.2 item 2).
- No claiming C2PA validation the project did not perform (item 3).
- Unaligned IPTC cases are recorded `no equivalent`, never forced (item 4).
- No forking external standards — the project maps and references, never re-certifies (RL-8; §5.1).
- External formats are never required — the declaration always stands alone (static-first).
- Field names, identifiers, and JSON/wire keys are T0 protected content and must not be altered by any translation (multi-language standard R2).

## 5. Acceptance criteria
- [ ] Every external format (C2PA, IPTC, Schema.org, signatures) has a published, versioned mapping document.
- [ ] No mapping presents production facts as responsibility or vice versa.
- [ ] A C2PA reference that fails external validation is reported `check-failed` in the C2PA context, separately from declaration labels.
- [ ] The IPTC mapping documents unaligned cases as `no equivalent`.
- [ ] The Schema.org mapping reuses existing properties before new ones.
- [ ] Reference implementations run offline from the offline pack.
- [ ] A checker reports external provenance as a distinct labelled section (contract published).
- [ ] Mapping changes appear in the changelog with deprecation notes.

## 6. Outputs to produce in the repository
- `docs/provenance-interoperability/c2pa-mapping.md` — C2PA field-mapping document.
- `docs/provenance-interoperability/iptc-mapping.md` — IPTC Digital Source Type mapping document.
- `docs/provenance-interoperability/schemaorg-mapping.md` — Schema.org mapping document.
- `docs/provenance-interoperability/signature-mapping.md` — signature-format interop document.
- `docs/provenance-interoperability/mappings.json` — machine-readable mapping registry (per §2 D2).
- `scripts/provenance-interoperability/` — offline reference implementations for the C2PA/IPTC/Schema.org mappings.

## 7. Read before building
- [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md) — mini-plan
- [`provenance-interoperability-dsh.md`](../suggestions/provenance-interoperability-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../planning/digest/04-artifacts-and-trust.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
