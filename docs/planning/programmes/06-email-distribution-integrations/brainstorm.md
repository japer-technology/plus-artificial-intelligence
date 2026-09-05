# Brainstorm — Programme 06: Email, Distribution, and Integrations

> Companion to [`06-email-distribution-integrations.md`](../06-email-distribution-integrations.md). Every member suggestion is decomposed here into **definitive features** and **pre-implementation decisions**; each has one agent request in [`requests/`](requests/). Workflow: open a request, record your choices in its §1, then give the file to your agent.

## Programme-level decisions (affect more than one request)

1. **One-record-shape invariant (the shared spec invariant).** Every integration surface — `developer-integrations`' package-metadata / Git-trailer / CI / client-library surfaces and `publishing-and-productivity-integrations`' adapters — references or embeds the ONE [`portable-declaration-schema`](../../../suggestions/portable-declaration-schema-dsh.md) record, emits the builder's exact record, and passes the conformance linter's fixtures (mini-plan Sequencing item 4). No second record shape anywhere. Noted in `developer-integrations` §2/§3 and `publishing-and-productivity-integrations` §2/§3.
2. **Email-header legitimacy posture (the `Plus-AI:` token).** `Plus-AI:` is unregistered, and the same token is used as both the email header (`email-metadata`) and the Git trailer (`developer-integrations`). Both are self-declared carriers — never evidence of control — and their DKIM limits must be documented honestly (a DKIM signature proves presence-when-signed, not truth, and not mailbox/domain control). Placed as `email-metadata` D1 (the IMPLEMENTATION-PLAN §11 "Email header legitimacy" risk); `developer-integrations` repeats the identical self-declared posture for the trailer. Which body would register the name, and when, defers to `standards-engagement` (Programme 10) — this programme only documents the honest-limits posture.
3. **§11 cross-cutting decisions placed in named requests.** Free-quota sizes for the email relay → `privacy-preserving-email-relay` D3 (joint owner: `cost-discipline`, Programme 8, owns the cost model — this request records the number, Programme 8 finalises it before launch). The hosted-mail-relay watchlist assessment → `privacy-preserving-email-relay` §2 note (the assessment itself is owned by `red-lines-and-cautious-extensions`, Programme 10, and must be published before the relay spec ships).
4. **Hosted-service gate (Programme 8 rule).** The two P3 hosted members — `declaration-by-email` and `privacy-preserving-email-relay` — ship only with their static-first failure-mode statement, threat model, privacy analysis, and cost model published (IMPLEMENTATION-PLAN §11.6). Both requests carry this as a "note for the agent" gate; neither may stand up a live service without it.
5. **Output-path convention.** Human normative docs → `docs/spec/<slug>.md`; machine-readable schemas/manifests → `site/schemas/` or `site/*.json`; browser pages/SPAs → `site/*.html`; offline CLI tooling → `scripts/*.mjs`; shared JS components → `site/assets/`; reference-integration templates → `site/integrations/` (a new subdirectory inside the existing `site/` convention, not a new service). Same convention as Programmes 2–4.
6. **Multi-language standard folding.** The draft standard [`best-practice-multi-language.md`](../../../analysis/best-practice-multi-language.md) (rules R1–R16, tiers T0–T4, status vocabulary, resolution order) governs six localised surfaces here: `email-signature-kit` (the mark and `Name +AI` are T0 protected; localised guidance follows R1/R4/R12), `offline-and-self-hosting-pack` (bundles the translated commons: R1 English-governs + carried notice, R11 plain static files, the status vocabulary, R8 source-version pinning), `plus-addressing-convention` (founding example + tag syntax T0), `message-bearing-subdomains` (labels are language-neutral T0; targets follow the resource's own localisation), `publishing-and-productivity-integrations` (emits the builder's localised visible text), and `developer-integrations` (browser indicators render T1 evidence labels plus a localised "none found" state). The three remaining members — `email-metadata`, `declaration-by-email`, `privacy-preserving-email-relay` — are machine-grammar/back-end surfaces with no localised chrome of their own; their T0/T1 strings (the header name/value grammar, the responsibility warning, the `self-declared` label) are protected and never translated, noted as constraints where salient. The standard's §8 open questions fall outside this programme (translation-governance / specification-versioning).

## Member-by-member brainstorm

### email-signature-kit — Email Signature Kit
- **Request:** [`requests/email-signature-kit.md`](requests/email-signature-kit.md)
- **Definitive features:**
  - Offline generator (browser + CLI) emitting, from a signer's chosen name and optional link URL: the canonical plain-text signature `Name +AI` (name never altered/transliterated/normalised), an HTML signature carrying the identical name/mark/link plus a plain-text alternative, and the optional badge.
  - Link policy: at most one link line with the full visible URL, direct `https`, no redirect, no query-string tracking parameters, no remote image.
  - Optional badge: static image or inline SVG restating the mark, with screen-reader alternative text, never fetching or running anything.
  - Per-client setup guidance with documented image-blocking/HTML-rewriting fallback (plain-text form), plus general fallback documentation.
  - Accessibility floor: plain-text legible to screen readers; any colour redundant with text.
- **Decisions:** D1 — Badge format and minimum legible size; D2 — First client list (desktop + mobile).
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: the signature is the mark's most-copied presentation — if the no-tracking or name-alteration rule ever softens, the free floor and the responsibility-not-certification framing erode silently; keep both in the constraints, not just the copy. Multi-language: the mark and `Name +AI` are T0; guidance follows R1/R4/R12.

### plus-addressing-convention — Plus-Addressing Convention
- **Request:** [`requests/plus-addressing-convention.md`](requests/plus-addressing-convention.md)
- **Definitive features:**
  - Documentation page introducing `name+ai@domain` and `name+ai-<scope>@domain`, keeping the founding example `eric.mourant+ai@japer.technology` wherever the convention is introduced.
  - The four limits stated plainly: provider dependence, form incompatibility, `%2B` URL encoding, base-address inference (no anonymity).
  - What the tag is (visible disclosure + mailbox-filtering convenience) and is NOT (identity proof, mailbox-control proof, a separate identity, a security boundary).
  - Mail-filter recipes per provider, clearly marked provider-specific; scoped-tag syntax with the lowercase non-sensitive-scope rule.
- **Decisions:** D1 — Reserved scopes (fixed set vs open); D2 — Provider support list (maintain vs not).
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: the whole point of this spec is stopping a mailbox tag from being laundered into identity proof — the "never presented as proof" must-not is the load-bearing guard, not prose. Multi-language: the founding example and tag syntax are T0; the surrounding guidance is T2.

### email-metadata — Email Metadata
- **Request:** [`requests/email-metadata.md`](requests/email-metadata.md)
- **Definitive features:**
  - Header grammar spec: `Plus-AI: <version>; <reference>` — `<version>` a positive integer, `<reference>` a URL or `declarationId`+source; one version token, one reference, no free-form prose; malformed values rejected, never guessed.
  - The `X-Plus-AI` experimentation alias with an identical value format; gateway-stripping / forwarding / RFC 5322 unfolding tolerance documented.
  - DKIM-limits documentation (a signature over the header proves presence-when-signed, not truth, and not mailbox/domain control) and the self-declared labelling rule per evidence-labels.
  - The checker-resolution contract: the verification checker MAY accept the header value as a declaration reference, resolved via machine-readable assertions.
- **Decisions:** D1 — Header-name registration / how the unregistered header's limits are documented (cross-cutting §11 risk); D2 — Content hash in the value.
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: this is the programme's "Email header legitimacy" risk (IMPLEMENTATION-PLAN §11.10) — an unregistered header invites spoofing claims unless the DKIM/self-declared limits are documented honestly. Multi-language: the header name and value grammar are T0 machine syntax, never translated; the `self-declared` label is the evidence-labels T1 vocabulary owned elsewhere.

### developer-integrations — Developer Integrations
- **Request:** [`requests/developer-integrations.md`](requests/developer-integrations.md)
- **Definitive features:**
  - Package-metadata carrier: one reserved key per ecosystem (`"plus-ai"` in `package.json`, equivalents elsewhere) whose value is a declaration reference or inline record, documented in a published compatibility table.
  - The `Plus-AI:` Git trailer (value = declaration reference/identifier); the founding-style `Name +AI` author line may also signal, but the trailer is machine-checkable and the two must not disagree.
  - CI lint check with distinct exit codes (absent / malformed / unresolvable / passed), structural only — never a truth claim or verdict.
  - Network-free client libraries (thin wrappers over the portable record and surfaces; no phone home; fields preserved byte-for-byte).
  - Browser-indicator contract: evidence labels only, or the honest "no machine-readable assertion found" state — never a negative mark.
  - Conformance fixtures (canonical input/output) per surface, kept in the offline pack; versioned interfaces (monotonic integer, changelog-announced before adoption).
- **Decisions:** D1 — Reserved-key spellings per ecosystem; D2 — Commit-signature binding (defer vs include).
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: "lint vs verify" is the whole point — if a CI check ever emits a verdict, the no-reputation-scores red line and the no-responsibility-transfer red line break at once; keep the exit-code contract sharp. Multi-language: browser-indicator labels are T1 evidence vocabulary; JSON keys, the `Plus-AI:` trailer name, and CI status tokens are T0.

### message-bearing-subdomains — Message-Bearing Subdomains
- **Request:** [`requests/message-bearing-subdomains.md`](requests/message-bearing-subdomains.md)
- **Definitive features:**
  - Curated slogan/campaign subdomain allocate/resolve/retire flow under the apex domain, each label an alias resolving by permanent redirect to an ID-based canonical resource (never a person, never proof about a person).
  - Versioned reserved-label list (project name, the `+AI` mark, governance/continuity terms, named-subdomain-collision labels) shared with named subdomains.
  - Wildcard-DNS catch-all resolving unknown labels to an accessible documented default (never arbitrary content); per-label mapping published as a versioned manifest, not encoded in DNS.
  - Retired labels → tombstones (never bare 404); impersonating labels suspendable without the imitated party acting first; every add/remove changelog-announced.
- **Decisions:** D1 — Allocation rate limit; D2 — Per-language targets at launch.
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: this free surface must never drift into the identity business reserved for `named-subdomains-and-identity-bundles` (Programme 7) — the message-not-identity and no-repurpose rules are the guards, not prose. Multi-language: labels are language-neutral T0; per-language targets follow the target resource's own localisation, never a parallel per-label translation system.

### offline-and-self-hosting-pack — Offline and Self-Hosting Pack
- **Request:** [`requests/offline-and-self-hosting-pack.md`](requests/offline-and-self-hosting-pack.md)
- **Definitive features:**
  - Reproducible build script (published, versioned, shipped inside the pack) assembling the commons: every spec version + manifests, reviewed translations with `basedOn` pointers, neutral presentation, themes, schemas, no-account builder, offline checker, verification instructions; two builds from pinned sources byte-identical.
  - Release manifest (pack version, `sha256`, component versions + hashes, signing-key id, signature, full/core sizes, build-script version) plus a detached signature and offline verification instructions, with the public key bundled.
  - Optional, user-initiated update discovery via a signed `latest` pointer — no auto-update, no phone home.
  - Full licence manifest + every bundled licence text; published size budgets (full + core) with flagged overruns; documented offline limitations and self-host instructions; permanent versioned URLs.
- **Decisions:** D1 — Size budgets (full + core); D2 — Universal vs per-platform archives.
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: the pack is the physical embodiment of the free floor — if update discovery ever becomes silent phone-home, the covert-tracking red line breaks; keep "user-initiated only" in the constraints. Multi-language: R1 (English governs + carried notice), R11 (plain static files), the status vocabulary, and R8 (source-version pinning) are folded in; the mark, URLs, identifiers, and code are T0.

### publishing-and-productivity-integrations — Publishing and Productivity Integrations
- **Request:** [`requests/publishing-and-productivity-integrations.md`](requests/publishing-and-productivity-integrations.md)
- **Definitive features:**
  - Adapter contract every integration honours: adapter over the portable-declaration-schema record and machine-readable-assertions surfaces; never a competing record format or metadata vocabulary.
  - Reference integrations (≥1 free/offline per proven workflow), prioritising static-site generators, repository templates, and CMS page-metadata workflows first.
  - Same-inputs-same-bytes: integration output identical to the no-account builder's visible text, record, and metadata; import/export of `.plus-ai.json` in every host; import renders current lifecycle status, never a presumed `active`.
  - Pre-fill vs issue separation: pre-filled draft visibly a draft; explicit user action issues; never issue/sign/publish in another person's name.
  - Data ownership (outputs only to user-controlled locations), permissions (no forced tool/prompt disclosure), integration manifest (schemaVersionTarget + interfaceVersion, maintainer + maintained/unmaintained status, loud failure on newer versions).
- **Decisions:** D1 — Target ecosystems (first wave); D2 — Formal conformance result vs self-declaration.
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). Risk: "integration sprawl" (programme risk) — unbounded unless capped by "≥1 proven free/offline reference per workflow"; the community carries the long tail. Multi-language: integrations emit the builder's localised visible text, so the standard applies to what they render.

### declaration-by-email — Declaration by Email
- **Request:** [`requests/declaration-by-email.md`](requests/declaration-by-email.md)
- **Definitive features:**
  - Email intake gated by the mailbox control challenge (one-time code round-trip, per proofs-of-control); the `From` header never trusted; a failed challenge produces no draft in that mailbox's name.
  - Field extraction of only declaration-relevant fields (name, scope, AI role); the message body and third-party addresses never quoted, stored, or republished.
  - Private draft + archive receipt only — never publish, register, or mark `active` from email alone; confirmation hands off to the builder/wizard with a visibility preview and the responsibility warning.
  - Non-public default (draft `local`/`unlisted`, never `public`); attachments never executed/copied; malware neutralised before review; raw message deleted on schedule; drafts expire; fresh challenge at recovery.
- **Decisions:** D1 — Inbound template (structured vs free-text); D2 — Unconfirmed-draft expiry (joint owner: privacy-and-data-minimisation).
- **Open questions / risks:** both digest "Open:" items and both spec §10 items became decisions (D1/D2). **Sequencing tension (flag for the human):** the mini-plan Order line says "after the relay and the builder; deliberately the last email feature", while `privacy-preserving-email-relay`'s Order line says "the last item" and the programme Sequencing list places `declaration-by-email` *before* the relay — a within-P3 ordering tension; phases agree (both P3) so request files follow their own Order lines. Risk: this is the "accidental publication" red line exercised at workflow level — non-public default and explicit preview are structural, not prose. The responsibility warning is T1 normative wording, never reworded.

### privacy-preserving-email-relay — Privacy-Preserving Email Relay
- **Request:** [`requests/privacy-preserving-email-relay.md`](requests/privacy-preserving-email-relay.md)
- **Definitive features:**
  - Hosted relay with opaque, revocable, expiring aliases (self-service create/extend/block/revoke) that never reveal the signer's mailbox or name.
  - Inbound SPF/DKIM/DMARC checks (results recorded, never silently trusted); malware/active-content neutralisation (executables/scripted HTML stripped or refused); honest bounces (never a silent drop).
  - No tracking pixels/beacons/read receipts; forward-then-delete retention on a published schedule with no content archive beyond delivery-proof + abuse minimum; no-account abuse-report route with published response targets.
  - Consent (publishing an alias is explicit; the relay never lists the real mailbox); optional organisation-managed routing under organisation workspaces; a bounded free tier with payment buying only volume/features/operations.
- **Decisions:** D1 — Default alias expiry length; D2 — Bidirectional replies vs forward-only; D3 — Free-tier volume bound (cross-cutting §11; joint owner: cost-discipline).
- **Open questions / risks:** all three digest "Open:" items and all three spec §10 items became decisions (D1/D2/D3). **Sequencing tension (flag for the human):** Order line "P3 — the last item" conflicts with `declaration-by-email`'s "deliberately the last email feature" and with the Sequencing list that places declaration-by-email first (see above); phases agree (P3). Risks: "relay abuse" (programme risk) — the no-account abuse route and cost-discipline modelling must exist before launch; and the watchlist assessment + static-first failure-mode statement are a hard gate (§2 note), not optional. No localised chrome of its own; the `self-declared`/status vocabulary is T1.

## Coverage note

All 9 members have exactly one request file in [`requests/`](requests/). Every digest "Open:" item and every spec §10 open question was converted into a decision (D1…D3) in its request file; no open item was left as a bare unanswered question — the only items not framed as choices are the two hosted-service deployment gates (the watchlist assessment and the static-first failure-mode statement), flagged inline as "note for the agent" items in `privacy-preserving-email-relay` §2 and `declaration-by-email` §2. The three assigned §11 cross-cutting items are placed: free-quota sizes → `privacy-preserving-email-relay` D3; watchlist assessment → `privacy-preserving-email-relay` §2 note; email-header legitimacy → `email-metadata` D1. The multi-language standard's §8 open questions fall outside this programme.
