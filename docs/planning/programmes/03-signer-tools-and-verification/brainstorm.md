# Brainstorm — Programme 03: Signer Tools and Verification

> Companion to [`03-signer-tools-and-verification.md`](../03-signer-tools-and-verification.md). Every member suggestion is decomposed here into **definitive features** and **pre-implementation decisions**; each has one agent request in [`requests/`](requests/). Workflow: open a request, record your choices in its §1, then give the file to your agent.

## Programme-level decisions (affect more than one request)

- **Builder → wizard → checker round-trip contract.** The builder and wizard MUST emit byte-identical records (same schema, same serialisation), and both — plus the artifact passport — MUST round-trip through the checker using the same discovery order as `machine-readable-assertions` (page metadata → JSON-LD → `.well-known` → passport URL → raw `.plus-ai.json`). This is the programme's coherence gate: if any two emit or consume a different shape, the whole suite pays. Noted in the builder, wizard, checker, and passport requests (§2).
- **Issuing ≠ verification framing.** Every surface — builder, wizard, authored links, passports, exports, checker — repeats the "declaration, not verification" disclaimer, and uses `self-declared`/`self-authored and unverified` labels rather than any score, rank, verdict, checkmark, or seal. This is the free floor's honesty contract and must be rendered as visible text, not only colour or icon. Noted in each request's §3.
- **Output-path convention.** Human normative docs/policies → `docs/`; machine-readable schemas → `site/schemas/` (the `file://`-served commons the offline pack carries); browser pages/SPAs → `site/`; offline CLI tooling → `scripts/`. Keeps served commons and human docs apart without inventing any new service or surface (same convention as Programme 2).
- **§11 cross-cutting decisions placed in named requests.** Default rate-limit numbers → `verification-checker` (joint owners: `security-and-abuse-controls` owns the baseline, `cost-discipline` models the operating cost — both named in the decision text). No other Programme-3 member carries a §11 item.
- **Multi-language standard applies to every surface that renders copy.** The project's draft standard [`best-practice-multi-language.md`](../../../analysis/best-practice-multi-language.md) (rules R1–R16, tiers T0–T4) governs all five language-touching members: per-key English fallback (R4), fixed resolution order `?lang=` → saved preference → browser → English with only explicit choices persisted (R12), CJK/RTL-correct typography (R9/R10/R11), and a protected set never translated (R2/T0). The checker's evidence-label vocabulary is T1 normative, so its translations are `reviewed`-only (R5). Of the standard's §8 open questions, only Q1 (machine-draft reachability) falls in this programme — it became `no-account-declaration-builder` D4 and `signing-wizard` D3; Q2–Q4 (reviewer attribution, T3 machine-draft value, `spec.<code>.js` source-version pinning) belong to the translation-governance / specification-versioning programmes, not here.

## Member-by-member brainstorm

### authored-links — Authored Links
- **Request:** [`requests/authored-links.md`](requests/authored-links.md)
- **Definitive features:**
  - A static compose form building a query-string link (`name`, `organisation`, `lang`, `theme`, `font`, `colour`) with a copy button.
  - Render logic over a closed parameter set: unknown parameters ignored; `lang` from registered tags only; `theme`/`font`/`colour` from allowlisted safe values; any URL/CSS-fragment value ignored so no styling, script, or look-alike page can be injected.
  - The normative `+AI` meaning text rendered verbatim and unalterable; the mandatory visible label "self-authored and unverified" plus a "not a declaration record" note on every authored-link page.
  - A visible sensitive-data warning in the composer; JS-disabled readability; no cookies, tracking, or storage.
- **Decisions:** D1 — `name`/`organisation` maximum length; D2 — short share token.
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: this surface is the mark's lowest-friction sharing vector — if the "not a declaration" label ever drifts, it becomes a look-alike identity channel; keep the label in the constraints, not just the copy.

### no-account-declaration-builder — No-Account Declaration Builder
- **Request:** [`requests/no-account-declaration-builder.md`](requests/no-account-declaration-builder.md)
- **Definitive features:**
  - A static, `file://`-openable single-page app with zero network during composition; minimum fields exactly the portable-declaration-schema required fields, with `schemaVersion`/`specVersion` auto-filled and `declarationId` generated locally.
  - Both binding kinds (byte, scope) offered and the chosen kind rendered in the visible text; `responsibleParty` accepts a pseudonym.
  - Outputs: visible text, `.plus-ai.json` download, personalised (authored) link, machine-readable-assertions metadata block, and a QR target.
  - Local save/load (import/export `.plus-ai.json` + optional in-browser draft storage); draft vs issued separation (draft labelled "draft", no `issued`/`active` until the explicit, warned issue action); markup-injection sanitisation on every free-text field.
  - Interface strings externalised for localisation; the declaration's `language` recorded from interface language or override.
- **Decisions:** D1 — Free-text length/character bounds; D2 — Draft storage mechanism + default retention; D3 — QR target content; D4 — Machine-draft interface-copy reachability.
- **Open questions / risks:** the builder's spec §7 makes `certificates-badges-and-qr` (P2) the owner of QR-target semantics, but the builder itself is P1 and emits a QR target — a sequencing tension (QR arrives before its export-format owner). Resolution: D3 keeps P1 unblocked with a bare-link QR and defers richer exports to the P2 request; flag for the human. Also the programme's "builder creep" risk lives here — the builder must not absorb the wizard, passports, certificates, or AI-BOM editing. Multi-language: interface copy follows the standard (R4 per-key fallback, R12 resolution, R9/R10/R11 CJK/RTL); the standard's §8 Q1 became D4.

### signing-wizard — Signing Wizard
- **Request:** [`requests/signing-wizard.md`](requests/signing-wizard.md)
- **Definitive features:**
  - A static guided step UI opening on the six-word meaning ("AI helped. I take responsibility.") plus the responsibility-not-verification warning before any field.
  - Shortest valid path: confirm understanding → name responsible party (pseudonym allowed, no documents) → choose artifact/scope (both binding kinds with a strength explanation) → issue, with no account, identity, or payment.
  - Optional AI-role step drawn from claim-types vocabulary, never offering "AI created everything" / "no human review"; optional fields visibly labelled and never nudged/pre-filled.
  - Per-field plain-language help (what it asserts / does not assert); local draft save/resume; final step hands off to the builder's results view producing exactly one identical record.
- **Decisions:** D1 — Recap step; D2 — Usability-test sample + pass criteria per language; D3 — Machine-draft interface-copy reachability.
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: the wizard is the pedagogical front-end — if per-field help understates the "declaration ≠ verification" boundary, the exact moment users first meet the mark is where the evidence-labels contract gets undermined (programme "issuing ≠ verification" risk). Multi-language: interface copy follows the standard (R4 per-key fallback, R12 resolution, R9/R10/R11 CJK/RTL); the standard's §8 Q1 became D3 (shared with the builder's D4).

### verification-checker — Verification Checker
- **Request:** [`requests/verification-checker.md`](requests/verification-checker.md)
- **Definitive features:**
  - Three surfaces — offline CLI, web UI, read-only API — accepting paste/file/URL/QR input and emitting a dated evidence-label table (never a score/rank/verdict).
  - Ordered check pipeline: discovery/retrieval → syntax + schema validation → spec-version resolution → signature verification (where present) → artifact-hash comparison → control-evidence evaluation → lifecycle-status resolution → freshness recording.
  - Offline checker with bundled, versioned schemas and spec files (`file://`, zero build); hosted fetch policy (SSRF guard: resolve-validate-deny-private-ranges, bounded redirects, size/time caps); per-client and per-target-domain rate limits; no caching/reselling beyond the check.
  - Check-run record shape (`runId`, `target`, `startedAt`, dated `labels`, `schemaVersionChecked`, `specVersionChecked`); CLI exit codes distinguishing completed-with-labels from failed-run.
- **Decisions:** D1 — Hosted bounded result cache; D2 — Default rate-limit numbers (cross-cutting, joint owners `security-and-abuse-controls` + `cost-discipline`).
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: this is the programme's only L and its hosted half needs security review (SSRF) before public exposure — the "checker scope" risk; build offline-first so the L is staged, not monolithic. Multi-language: labels/results render per the standard (R4/R12/R9), and the evidence-label vocabulary is T1 normative — its translations are `reviewed`-only (R5); no §8 open question falls here.

### artifact-passports — Artifact Passports
- **Request:** [`requests/artifact-passports.md`](requests/artifact-passports.md)
- **Definitive features:**
  - A stable passport resource keyed by a permanent identifier (`= declarationId`) resolvable at a stable URL; one scope per passport.
  - Content assembly: canonical declaration record, status timeline (lifecycle events), binding kind, evidence labels with dates, and directed derivative links (`derivesFrom`/`derivedBy`), each carrying a direction and the linked identifier.
  - Static HTML + JSON bundle (self-hosted, mirrorable, exportable); builder emits a complete self-hosted passport bundle with no upload.
  - Dynamic artifacts use scope bindings and show a labelled point-in-time "last snapshot"; visibility modes (`unlisted` excluded from directories, `public` indexable, `organisation-only` role-gated); supersession/revocation dates rendered; no rank/score/verdict.
- **Decisions:** D1 — Snapshot production (on demand vs stored); D2 — Snapshot retention after supersession.
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: responsibility-laundering via derivatives — the `derivesFrom`/`derivedBy` links must never imply a derivative inherits the upstream signer's responsibility; this is the one place the red line against responsibility transfer is exercised at resource level. Multi-language: page chrome follows the standard (R4/R12/R9/R10/R11); the record/identifier/status URL are protected (R2/T0) and never translated.

### certificates-badges-and-qr — Certificates, Badges, and QR
- **Request:** [`requests/certificates-badges-and-qr.md`](requests/certificates-badges-and-qr.md)
- **Definitive features:**
  - Offline export generators (certificate, badge, QR) inside the builder; every export carries the declaration identifier, stable status-page URL, export issue date, and the staleness statement ("This export is a reference to a live declaration. Its status may have changed — check the address.").
  - QR encodes the bare status URL (no tracking redirect), scannable at a documented minimum size, URL repeated in visible text; monochrome-safe badges with screen-reader text fallback and no animation/tracking/fetch; printable certificate (A4 + letter).
  - Superseded → "superseded" with successor; revoked → "revoked"; never silent presentation of old status as current; no validity/certification/endorsement claims; honest copy-resistance only (watermarks/serial numbers as provenance aids, never DRM/blockchain/biometrics).
- **Decisions:** D1 — QR second encoding of the declaration identifier.
- **Open questions / risks:** the single digest "Open:" item and spec §10 item became D1. Risk: these exports are the "pointers, not proofs" that leave the mark's hands — if the staleness wording is ever dropped or softened, static copies silently go stale; keep the mandatory statement in the acceptance criteria, not just the copy. Multi-language: badge text follows the standard (R4/R12/R9/R10/R11); the identifier, status URL, and mandatory staleness statement are protected/normative and never translated or reworded (R2/T0/T1).

### ai-practice-register — AI Practice Register
- **Request:** [`requests/ai-practice-register.md`](requests/ai-practice-register.md)
- **Definitive features:**
  - A `.plus-ai-practices.json` object (UTF-8, `file://`-safe, no account) with `practiceRegisterId` + `party` name required and every other field optional; no prompts/transcripts/provider credentials; no reputation/rank field.
  - Entries reference tool-taxonomy ids where they exist, or free-text names; independent optional purposes, data rules, review practice, claim kinds, effective date, status per entry.
  - Versioned assertions (a new dated assertion on change, prior assertions readable); default `local` visibility with explicit consent for anything higher; public render labelling every entry `self-declared`.
- **Decisions:** D1 — Retention of retired entries; D2 — Capabilities vocabulary shape.
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: this is a party-level surface that must never drift into a reputation ledger — the "no field functioning as reputation/rank" must-not and the `self-declared` render are the load-bearing guards, not prose.

### artifact-ai-bill-of-materials — Artifact AI Bill of Materials (AI-BOM)
- **Request:** [`requests/artifact-ai-bill-of-materials.md`](requests/artifact-ai-bill-of-materials.md)
- **Definitive features:**
  - An AI-BOM object (`aiBomVersion`, `declarationRef`, `entries`) attached to exactly one artifact declaration; each entry carries a `used-on-artifact` claim + `aiRole`, never `available`/`generally-used`/`approved`.
  - Material-contribution bound with aggregation permitted (never duplicating the practice register); optional version reference omitted when unknown (never guessed); confidential toggle rendering "undisclosed" publicly while the declaration's `aiRole` and AI-BOM presence stay visible.
  - Table renderer on the declaration/passport pages with `self-declared` per entry; builder entry UI with confidential flag; derivatives carry their own AI-BOM (reference upstream, never inherit); no auto-population from the practice register.
- **Decisions:** D1 — Material-contribution threshold; D2 — Aggregation disclosure minimum (categories vs names).
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: conflation with the practice register — the anti-inference rule (no auto-population) is the guard; if the builder ever offers "import from practice register" as a convenience, the artifact-scoped truth collapses into a party-level habit list.

## Coverage note

All 8 members have exactly one request file in [`requests/`](requests/). Every digest "Open:" item and every spec §10 open question was converted into a decision (D1…D4) in its request file; no open item was left as a bare unanswered question — the only items not framed as choices are flagged inline as "note for the agent" items in §2 (sequencing/deployment gates and multi-language rendering), and none remain open. The multi-language standard's §8 open questions are placed where they fall: Q1 → `no-account-declaration-builder` D4 and `signing-wizard` D3; Q2–Q4 fall outside this programme (translation-governance / specification-versioning).
