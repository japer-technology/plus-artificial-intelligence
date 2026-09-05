# Programme 6 — Email, Distribution, and Integrations

> The adoption channels: email (THE-PLAN's signature loop), developer
> surfaces, embeddable references, and the offline pack that keeps the commons
> usable without any service. Free-floor tools first; hosted relay last, and
> always optional.

- **Members (9):** email-signature-kit, plus-addressing-convention,
  privacy-preserving-email-relay, declaration-by-email, email-metadata,
  publishing-and-productivity-integrations, developer-integrations,
  message-bearing-subdomains, offline-and-self-hosting-pack
- **Agent requests:** [`06-email-distribution-integrations/`](06-email-distribution-integrations/) — brainstorm + one agent request per suggestion.
- **Effort:** 3 × S (signature kit, plus-addressing, email metadata),
  3 × M (declaration-by-email, developer integrations, message-bearing
  subdomains), 3 × L (email relay, publishing integrations, offline pack)
- **Prerequisites:** Programme 2 (schema, assertions, proofs-of-control);
  Programme 3 builder (as the canonical output reference); Programme 5
  generator (the offline pack packages its outputs)
- **Phase:** P1 → P3

## Mini-plans

### email-signature-kit — Email Signature Kit
- **Goal:** Generator + guidance producing accessible `Name +AI` plain-text/HTML signatures with optional badge and per-client setup instructions.
- **Build:** signature generator (browser/CLI): plain text, HTML, optional badge; per-client guidance (Gmail/Outlook/Apple Mail); fallback documentation.
- **Needs:** certificates-badges-and-qr (badge), plus-addressing-convention (companion doc), accessibility-floor, public-usage-guidelines.
- **Must-nots:** no tracking pixel/beacon/remote image/tracking redirect; signature never implies certification/endorsement/verification; the signer's name must not be altered or normalised.
- **Done when:** plain text = `Name +AI`; readable with images blocked; generator works from file:// with no account.
- **Effort:** S. **Order:** P1 — the cheapest distribution win (core-extensions §3.4) and a THE-PLAN launch-stack item.

### plus-addressing-convention — Plus-Addressing Convention
- **Goal:** Document the optional `name+ai@domain` / `name+ai-<scope>@domain` disclosure and mailbox-filtering convention and its limits.
- **Build:** documentation page: founding example + four limits (provider/form/encoding/inference); mail-filter recipes per provider.
- **Needs:** proofs-of-control (to state what it is NOT), email-signature-kit, privacy-and-data-minimisation.
- **Must-nots:** never described as identity proof or mailbox control; no anonymity claim (base address is inferable); `+` percent-encoded `%2B` in URLs.
- **Done when:** convention + founding example + limits documented; never presented as proof.
- **Effort:** S. **Order:** P1 — pairs with the signature kit.

### email-metadata — Email Metadata
- **Goal:** Versioned `Plus-AI:` email header carrying a declaration reference as a machine-readable supplement to the visible signature.
- **Build:** header grammar spec (`Plus-AI: <version>; <reference>`); checker resolution of the reference; DKIM-limits documentation.
- **Needs:** portable-declaration-schema, machine-readable-assertions, verification-checker, evidence-labels-not-trust-scores.
- **Must-nots:** header never replaces visible disclosure; treated as self-declared, never evidence of control; malformed values rejected, never guessed.
- **Done when:** grammar unambiguous; unresolvable → "no usable metadata"; self-declared labelled.
- **Effort:** S. **Order:** P2 — after the schema and checker exist (there must be something to resolve).

### developer-integrations — Developer Integrations
- **Goal:** Minimal stable developer surfaces: package metadata, Git trailers, CI checks, browser indicators, client libraries, schemas.
- **Build:** package-metadata keys + compatibility table; `Plus-AI:` Git trailer; CI lint check with distinct exit codes; network-free client libraries; conformance fixtures per surface.
- **Needs:** machine-readable-assertions, portable-declaration-schema, verification-checker, conformance-linter (the CI gate).
- **Must-nots:** CI checks lint-only, never truth claims or verdicts; no phoning home; no second record shape; indicators render evidence labels or "none found", never negative.
- **Done when:** one record shape everywhere; CI structural-only; fixtures pass offline; surfaces versioned.
- **Effort:** M. **Order:** P2 — after the spine stabilises so the fixtures don't churn.

### message-bearing-subdomains — Message-Bearing Subdomains
- **Goal:** Free curated slogan-style subdomains resolving to canonical content — messages, never persons or proofs about people.
- **Build:** subdomain allocate/resolve/retire flow; catch-all default page; reserved-label list (shared with named subdomains); versioned mapping manifest.
- **Needs:** url-semantics-and-canonicalization, continuity-and-namespace-custody, free-floor-covenant (they stay free), changelog-and-rss.
- **Must-nots:** never allocated to or presented as a person; label never repurposed to different content — retired → tombstone; no trust score/rank; never a prerequisite for declaring.
- **Done when:** no personal labels; permanent redirects to ID resources; manifest published; impersonation suspendable.
- **Effort:** M. **Order:** P2 — the free tier of the subdomain family (the paid named-subdomains product in Programme 7 comes later; the shared reserved-label list is defined here).

### offline-and-self-hosting-pack — Offline and Self-Hosting Pack
- **Goal:** Downloadable self-contained archive of the commons (spec, translations, themes, schemas, builders, checker) with reproducible signed releases.
- **Build:** reproducible build script (byte-identical archives); release manifest + detached signature + offline verification instructions; size budgets; permanent versioned URLs.
- **Needs:** specification-versioning-and-hashing, public-snapshots-and-api, verification-checker (the offline tool), generator-pipeline (the artifacts), licensing-and-mark-policy (bundled licence texts).
- **Must-nots:** no auto-update or phone home — update discovery user-initiated; no bundled component without its licence text; packed components byte-identical to hosted artifacts.
- **Done when:** file:// openable; byte-identical rebuilds; signed manifests; old versions permanent.
- **Effort:** L. **Order:** P2 — meaningful once the checker and generator exist; a minimal pack (spec + themes) can ship earlier as a quick win.

### publishing-and-productivity-integrations — Publishing and Productivity Integrations
- **Goal:** Adapter layer bringing +AI into CMSs, SSGs, editors, newsrooms, learning platforms, email-admin, and repo templates.
- **Build:** reference integrations (≥1 free/offline per proven workflow); import/export of `.plus-ai.json`; pre-fill vs issue separation; outputs identical to the no-account builder.
- **Needs:** developer-integrations, plus-ai-web-component, no-account-declaration-builder, machine-readable-assertions.
- **Must-nots:** never issue/sign/publish in another person's name; no silent upload — outputs only to user-controlled locations; no trust score/rank; never gates the no-account path.
- **Done when:** outputs match the builder; no competing format; pre-filled draft requires explicit issue.
- **Effort:** L. **Order:** P3 — ecosystem work that pays off only after the core tools and formats are stable.

### declaration-by-email — Declaration by Email
- **Goal:** Cautious email workflow producing only a private draft + receipt, always with explicit preview and confirmation before anything public.
- **Build:** email intake (mailbox challenge; declaration-relevant field extraction); confirmation surface handing off to builder/wizard with visibility preview; retention (raw message deleted on schedule; drafts expire).
- **Needs:** proofs-of-control (mailbox challenge), no-account-declaration-builder + signing-wizard (the confirmation surface), visibility-and-consent, security-and-abuse-controls.
- **Must-nots:** email alone never publishes or activates a declaration; `From` header never trusted; accidental publication structurally impossible (non-public default).
- **Done when:** no public declaration from email alone; challenge-gated; body never republished; drafts default non-public.
- **Effort:** M. **Order:** P3 — after the relay and the builder; deliberately the last email feature.

### privacy-preserving-email-relay — Privacy-Preserving Email Relay
- **Goal:** Optional hosted relay with opaque, revocable aliases hiding the signer's real mailbox, with expiry, blocking, and org routing.
- **Build:** relay service (alias create/extend/block/revoke self-service); inbound SPF/DKIM/DMARC checks; malware/active-content neutralisation; retention/deletion schedule; no-account abuse-report route.
- **Needs:** security-and-abuse-controls, privacy-and-data-minimisation, moderation-disputes-and-appeals, cost-discipline (free-tier economics), static-first-service-architecture (failure-mode statement).
- **Must-nots:** alias never leaks the signer's mailbox or name; no tracking pixels/beacons/read receipts; privacy never a premium feature — free tier stays bounded.
- **Done when:** opaque aliases; expiry enforced; instant revoke/block; auth recorded; no content archive.
- **Effort:** L. **Order:** P3 — the last item; ships only with its static-first failure-mode statement published (Programme 8 rule).

## Sequencing

1. **P1:** email-signature-kit → plus-addressing-convention (the launch-stack pair).
2. **P2:** email-metadata → developer-integrations → message-bearing-subdomains → offline-and-self-hosting-pack.
3. **P3:** publishing-and-productivity-integrations → declaration-by-email → privacy-preserving-email-relay.
4. Cross-check: every integration must emit the builder's exact record and pass the linter's fixtures — one record shape, everywhere (the specs' shared invariant).

## Risks

- **Email header legitimacy:** `Plus-AI:` is unregistered; document DKIM limits and self-declared status honestly, or the header invites spoofing claims against the project.
- **Relay abuse:** a free hosted relay is an abuse magnet; the no-account abuse route and cost-discipline modelling must exist before launch, or it fails its own free-floor promise.
- **Integration sprawl:** publishing integrations are unbounded; cap by "≥1 proven free/offline reference per workflow" and let the community carry the long tail.
