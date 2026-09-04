# Digest 05 — Email, Distribution, and Presentation

### email-signature-kit — Email Signature Kit
- **What:** Generator + guidance producing accessible `Name +AI` plain-text/HTML signatures with optional badge and client setup instructions.
- **Builds:**
  - Signature generator (browser/CLI): plain-text, HTML, optional badge.
  - Content: per-client setup guidance + fallback documentation.
  - Policy: no tracking pixel/beacon; direct `https` links only.
- **Needs:** portable-declaration-schema, certificates-badges-and-qr, email-metadata, plus-addressing-convention, accessibility-floor, licensing-and-mark-policy, public-usage-guidelines, declaration-lifecycle, plus-ai-web-component
- **Must-nots:**
  - No tracking pixel, beacon, remote image, or tracking redirect.
  - Signature never implies certification, endorsement, or verification.
  - The signer's name must not be altered or normalised.
- **Done when:** plain text = `Name +AI`; images-blocked still readable; generator works from file:// with no account.
- **Open:** badge format; first client list.
- **Effort:** S — one generator + guidance doc.

### plus-addressing-convention — Plus-Addressing Convention
- **What:** Documents the optional `name+ai@domain` / `name+ai-<scope>@domain` disclosure and mailbox-filtering convention and its limits.
- **Builds:**
  - Documentation page: founding example + four limits (provider/form/encoding/inference).
  - Content: mail-filter recipes, provider-specific.
- **Needs:** proofs-of-control, email-metadata, email-signature-kit, message-bearing-subdomains, privacy-and-data-minimisation
- **Must-nots:**
  - Never described as identity proof or mailbox control.
  - No anonymity claim (base address is inferable).
  - `+` percent-encoded `%2B` in URL query/path.
- **Done when:** convention + founding example + limits documented; never presented as proof.
- **Open:** reserved scopes; provider support list.
- **Effort:** S — one documentation page.

### privacy-preserving-email-relay — Privacy-Preserving Email Relay
- **What:** Optional hosted relay with opaque, revocable aliases hiding the signer's real mailbox, with expiry, blocking, and org routing.
- **Builds:**
  - Relay service: alias create/extend/block/revoke self-service.
  - Inbound SPF/DKIM/DMARC checks; malware/active-content neutralisation.
  - Retention/deletion schedule; no-account abuse-report route.
- **Needs:** security-and-abuse-controls, privacy-and-data-minimisation, visibility-and-consent, moderation-disputes-and-appeals, proofs-of-control, contact-routes, organisation-profiles-and-policies, cost-discipline, static-first-service-architecture, plus-addressing-convention
- **Must-nots:**
  - Alias never leaks the signer's mailbox or name.
  - No tracking pixels, beacons, or read receipts.
  - Privacy is never a premium feature; free tier stays bounded.
- **Done when:** opaque aliases; expiry enforced; instant revoke/block; auth recorded; no content archive.
- **Open:** expiry length; bidirectional replies; free-tier volume.
- **Effort:** L — hosted mail relay service.

### declaration-by-email — Declaration by Email
- **What:** Cautious email workflow producing only a private draft + receipt, always with explicit preview and confirmation before anything public.
- **Builds:**
  - Email intake workflow (mailbox challenge; declaration-relevant field extraction).
  - Confirmation surface: hands off to builder/wizard with visibility preview.
  - Retention: raw message deleted on schedule; drafts expire.
- **Needs:** portable-declaration-schema, proofs-of-control, visibility-and-consent, declaration-lifecycle, no-account-declaration-builder, signing-wizard, security-and-abuse-controls, privacy-and-data-minimisation, email-metadata
- **Must-nots:**
  - Email alone never publishes or activates a declaration.
  - `From` header never trusted; challenge-gated.
  - Accidental publication structurally impossible (non-public default).
- **Done when:** no public declaration from email alone; challenge-gated; body never republished; draft defaults non-public.
- **Open:** template vs free-text; unconfirmed-draft expiry.
- **Effort:** M — email intake + confirmation integration.

### email-metadata — Email Metadata
- **What:** Versioned `Plus-AI:` email header carrying a declaration reference as a machine-readable supplement to the visible signature.
- **Builds:**
  - Header spec: `Plus-AI: <version>; <reference>` grammar.
  - Checker resolution of the reference; documentation of DKIM limits.
- **Needs:** email-signature-kit, plus-addressing-convention, portable-declaration-schema, machine-readable-assertions, verification-checker, proofs-of-control, evidence-labels-not-trust-scores, specification-versioning-and-hashing
- **Must-nots:**
  - Header never replaces visible disclosure.
  - Header treated as self-declared, never evidence of control.
  - Malformed values rejected, never guessed.
- **Done when:** grammar unambiguous; unresolvable → "no usable metadata"; self-declared labelled.
- **Open:** header-name registration; content hash in value.
- **Effort:** S — header spec + tooling integration.

### multi-format-distribution-kit — Multi-Format Distribution Kit
- **What:** Ready-to-use formats (text, HTML, Markdown, badges, print, QR, footers, slides, captions, packaging, social cards, copy) for one meaning in many presentations.
- **Builds:**
  - Generator: full format catalogue from canonical wording + current version.
  - Content: per-format conformance notes; meaning-preservation test.
  - Policy: bounded export sizes; no network fetch to render.
- **Needs:** licensing-and-mark-policy, accessibility-floor, certificates-badges-and-qr, specification-versioning-and-hashing, static-first-service-architecture, public-usage-guidelines, flavour-text-localisation, offline-and-self-hosting-pack, email-signature-kit
- **Must-nots:**
  - Canonical wording never paraphrased; flavour clearly separated.
  - No certification/endorsement/trust-mark framing.
  - No format states a version it was not generated against.
- **Done when:** catalogue complete; short copy verbatim everywhere; version+fingerprint on each; failing format cannot ship.
- **Open:** size bounds; social-card brand review.
- **Effort:** M — format generator + catalogue + tests.

### publishing-and-productivity-integrations — Publishing and Productivity Integrations
- **What:** Adapter layer bringing +AI into CMSs, SSGs, editors, newsrooms, learning platforms, email-admin, and repo templates.
- **Builds:**
  - Reference integrations (≥1 free/offline per proven workflow).
  - Import/export of `.plus-ai.json`; pre-fill vs issue separation.
  - Compatibility: emit identical output to the no-account builder.
- **Needs:** developer-integrations, plus-ai-web-component, no-account-declaration-builder, portable-declaration-schema, machine-readable-assertions, verification-checker, evidence-labels-not-trust-scores, conformance-linter, multi-format-distribution-kit, email-signature-kit
- **Must-nots:**
  - Never issue/sign/publish in another person's name.
  - No silent upload; outputs only to user-controlled locations.
  - No trust score/rank; never gates the no-account path.
- **Done when:** outputs match builder; no competing format; pre-filled draft requires explicit issue.
- **Open:** target ecosystems; formal conformance result.
- **Effort:** L — adapter layer across ecosystems.

### developer-integrations — Developer Integrations
- **What:** Minimal stable developer surfaces — package metadata, Git trailers, CI checks, browser indicators, client libraries, schemas.
- **Builds:**
  - Package-metadata keys + compatibility table; `Plus-AI:` Git trailer.
  - CI lint check with distinct exit codes; client libraries (network-free).
  - Conformance fixtures (canonical input/output) for each surface.
- **Needs:** machine-readable-assertions, plus-ai-web-component, portable-declaration-schema, verification-checker, evidence-labels-not-trust-scores, public-snapshots-and-api, conformance-linter, publishing-and-productivity-integrations, provenance-interoperability
- **Must-nots:**
  - CI checks lint-only, never truth claims or verdicts.
  - No phoning home; no second record shape.
  - Browser indicators render evidence labels or "none found", never negative.
- **Done when:** one record shape everywhere; CI structural-only; fixtures pass offline; surfaces versioned.
- **Open:** reserved-key spellings; commit-signature binding.
- **Effort:** M — fixtures + libraries + CI conventions.

### plus-ai-web-component — Reusable +AI Web Component
- **What:** `<plus-ai-mark>` custom element rendering mark, meaning, signer, optional link/status consistently; styling is presentation only.
- **Builds:**
  - Web component with static-HTML light-DOM fallback.
  - Attributes: `signer`, `declaration-url`, `spec-version`, `lang`.
  - Status resolution via evidence labels (dated), never a score.
- **Needs:** specification-versioning-and-hashing, translation-governance, portable-declaration-schema, machine-readable-assertions, evidence-labels-not-trust-scores, theme-engine-and-packs, accessibility-floor, per-theme-conformance-notes, offline-and-self-hosting-pack, publishing-and-productivity-integrations
- **Must-nots:**
  - Meaning text never alterable/abridgeable by any attribute.
  - `signer` never styled as verified without separate evidence labels.
  - No score/verdict; no network request when merely rendering.
- **Done when:** JS-disabled readable; meaning byte-identical to spec version; no tracking; loads from file://.
- **Open:** shadow vs slotted DOM; CSS custom-property list.
- **Effort:** M — component + fallback + status resolver.

### message-bearing-subdomains — Message-Bearing Subdomains
- **What:** Free curated slogan-style subdomains resolving to canonical content — messages, never persons or proofs about people.
- **Builds:**
  - Subdomain allocate/resolve/retire flow; catch-all default page.
  - Reserved-label list shared with named subdomains; versioned mapping manifest.
- **Needs:** named-subdomains-and-identity-bundles, authored-links, url-semantics-and-canonicalization, continuity-and-namespace-custody, free-floor-covenant, accessibility-floor, changelog-and-rss
- **Must-nots:**
  - Never allocated to or presented as a person.
  - Label never repurposed to different content; retired → tombstone.
  - No trust score/rank; never a prerequisite for declaring.
- **Done when:** no personal labels; permanent redirects to ID resources; manifest published; impersonation suspendable.
- **Open:** allocation rate limit; per-language targets.
- **Effort:** M — subdomain manifest + allocation + DNS.

### federation-and-mirrors — Federation and Mirrors
- **What:** Independent compatible mirrors and alternative interfaces over open versioned public data — never alternate sources of truth.
- **Builds:**
  - Mirror descriptor (identity/source/lag/compatibility) + ingest tooling.
  - Source/freshness/compatibility labels; removal-propagation rules.
- **Needs:** public-snapshots-and-api, static-first-service-architecture, continuity-and-namespace-custody, url-semantics-and-canonicalization, portable-declaration-schema, opt-in-signatory-registry, declaration-lifecycle, moderation-disputes-and-appeals, evidence-labels-not-trust-scores, licensing-and-mark-policy
- **Must-nots:**
  - Mirror never accepts writes to the canonical record.
  - Mirror URLs never impersonate canonical addresses or IDs.
  - No trust score, rank, or single verdict.
- **Done when:** labels rendered; removals propagated in window; forks declare divergence; descriptors self-describing.
- **Open:** removal-lag window; project mirror directory.
- **Effort:** M — mirror spec + reference ingest tool.

### offline-and-self-hosting-pack — Offline and Self-Hosting Pack
- **What:** Downloadable self-contained archive of the commons (spec, translations, themes, schemas, builders, checker) with reproducible signed releases.
- **Builds:**
  - Reproducible build script (byte-identical archives).
  - Release manifest + detached signature + offline verification instructions.
  - Size budgets; permanent versioned URLs.
- **Needs:** static-first-service-architecture, specification-versioning-and-hashing, public-snapshots-and-api, verification-checker, licensing-and-mark-policy, continuity-and-namespace-custody, generator-pipeline, theme-engine-and-packs, changelog-and-rss
- **Must-nots:**
  - No auto-update or phone home; update discovery user-initiated.
  - No bundled component without its licence text.
  - Packed components must be byte-identical to hosted artifacts.
- **Done when:** file:// openable; byte-identical rebuilds; signed manifests; old versions permanent.
- **Open:** size budgets; universal vs per-platform archives.
- **Effort:** L — release build + signing + archival pipeline.

### theme-engine-and-packs — Theme Engine and Packs
- **What:** Separates canonical content/behaviour from visual theme packs so one engine renders many identities while the meaning stays fixed.
- **Builds:**
  - Theme engine (renders canonical data + pack manifest).
  - Pack manifest schema (id/version/hash/languages/accessibility/conformance).
  - Hooks contract + neutral fallback path.
- **Needs:** conformance-linter, theme-builder-and-starter-kit, per-theme-conformance-notes, flavour-text-localisation, generator-pipeline, accessibility-floor, surprise-me-theme-mode, theme-gallery-community-voting, specification-versioning-and-hashing, offline-and-self-hosting-pack
- **Must-nots:**
  - Theme never changes normative meaning.
  - No remote dependencies in engine or packs.
  - Legacy single-file pages stay byte-identical or versioned.
- **Done when:** any pack renders byte-identical normative text; broken pack → neutral fallback; file://-safe.
- **Open:** signed manifests; single-page vs build step.
- **Effort:** M — engine + pack manifest + hooks contract.

### theme-builder-and-starter-kit — Theme Builder and Starter Kit
- **What:** Accessible builder + tokens + starter files + preview + conformance checks for creating themes without cloning whole pages.
- **Builds:**
  - Starter kit (manifest template, token file, flavour file, README, fallback reference).
  - Builder UI (keyboard-only, offline) with live lint + preview + packaging.
- **Needs:** theme-engine-and-packs, conformance-linter, flavour-text-localisation, translation-governance, theme-gallery-community-voting, per-theme-conformance-notes, licensing-and-mark-policy, offline-and-self-hosting-pack, custom-themes, accessibility-floor
- **Must-nots:**
  - Normative-text edits blocked at edit time.
  - Unreviewed machine translations never bundled.
  - Packaging blocked while error rules fail.
- **Done when:** conformant pack without full-page copy; keyboard-only; linter gates packaging; licensing confirmed.
- **Open:** scaffold conformance checklist.
- **Effort:** M — builder tool + starter kit.

### conformance-linter — Conformance Linter
- **What:** Automated tool checking every presentation/export/integration for shared invariants (hooks, IDs, wording, metadata, accessibility).
- **Builds:**
  - CLI + browser-local linter; error/advice rule sets with fixtures.
  - Machine-readable output for generators and CI.
- **Needs:** theme-engine-and-packs, accessibility-floor, machine-readable-assertions, per-theme-conformance-notes, generator-pipeline, verification-checker, developer-integrations, offline-and-self-hosting-pack, changelog-and-rss
- **Must-nots:**
  - Never modifies checked files.
  - Advice never produces a failing exit code.
  - Every rule cites its contract item.
- **Done when:** local no-network run; errors vs advice separated; fixtures ship; exceptions recorded.
- **Open:** advice profile; fixture format.
- **Effort:** M — linter + rule set + fixtures.

### generator-pipeline — Generator Pipeline
- **What:** Tooling producing theme pages, navigation, metadata, social cards, indexes, and offline assets from canonical content plus versioned presentation data.
- **Builds:**
  - Generator CLI (reproducible, reviewable diff).
  - Pipeline manifest + declared extension points and escape hatches.
  - Linter as publication gate.
- **Needs:** theme-engine-and-packs, conformance-linter, shared-project-navigation, machine-readable-assertions, offline-and-self-hosting-pack, per-theme-conformance-notes, specification-versioning-and-hashing, developer-integrations, changelog-and-rss
- **Must-nots:**
  - Normative text verbatim only; never from theme copy.
  - No silent change — diff reviewed before publication.
  - Timestamps/environment excluded from output.
- **Done when:** byte-identical rebuilds; diff reviewed; linter blocks shipping; stable URLs.
- **Open:** emit multi-format kit; diff workflow.
- **Effort:** M — generator CLI + pipeline manifest.

### surprise-me-theme-mode — Surprise-Me Theme Mode
- **What:** Random/rotating path through conformant public presentations — a discovery affordance, not a recommendation engine.
- **Builds:**
  - Selection control + landing page (shareable URL, selection rule, neutral-route control).
  - Candidate-set gating on conformance notes + accessibility floor.
- **Needs:** theme-gallery-community-voting, per-theme-conformance-notes, accessibility-floor, theme-engine-and-packs, shared-project-navigation, privacy-respecting-analytics
- **Must-nots:**
  - Non-conformant themes never in the candidate set.
  - No cookies or fingerprinting.
  - Payment/votes never influence selection.
- **Done when:** only conformant candidates; rule published; reduced-motion honoured; offline-capable.
- **Open:** rotate control.
- **Effort:** S — small selection feature over gallery.

### per-theme-conformance-notes — Per-Theme Conformance Notes
- **What:** Public notes per theme: features, accessibility characteristics, limitations, language coverage, content version, last check.
- **Builds:**
  - Note schema (measured/reviewed claims) + accessible rendering page.
  - Linter integration emitting measured fields.
- **Needs:** conformance-linter, theme-engine-and-packs, theme-gallery-community-voting, surprise-me-theme-mode, accessibility-floor, generator-pipeline, custom-themes, theme-builder-and-starter-kit
- **Must-nots:**
  - No gallery/surprise-me entry without a note.
  - Failures never silently dropped.
  - Limitations must name their neutral fallback.
- **Done when:** note required; claims labelled measured/reviewed; non-conformant flagged/excluded.
- **Open:** review cadence; upstream dependencies.
- **Effort:** S — note schema + rendering + linter hook.

### flavour-text-localisation — Flavour-Text Localisation
- **What:** Governs decorative theme copy as optional presentation content with its own localisation status and neutral fallback, never touching meaning.
- **Builds:**
  - Flavour file format + fallback keying; status labels (neutral/reviewed/community/machine).
  - Linter flavour rule (overlap/lack-of-status = error).
- **Needs:** theme-engine-and-packs, translation-governance, theme-builder-and-starter-kit, conformance-linter, per-theme-conformance-notes, licensing-and-mark-policy, accessibility-floor, custom-themes
- **Must-nots:**
  - Flavour never restates normative meaning.
  - Machine flavour never rendered without a label.
  - Insulting/untranslatable strings → neutral fallback.
- **Done when:** fallback degrades losslessly; statuses carried; linter errors on overlap; versioned with pack.
- **Open:** community flavour review minimum.
- **Effort:** S — flavour format + linter rule.

### custom-themes — Custom Themes
- **What:** Commissioned bespoke theme packs (paid design work) that never buy meaning, rank, or legitimacy.
- **Builds:**
  - Commission terms template (non-endorsement, ownership, maintenance, security).
  - Delivery review: linter error rules + accessibility floor + security.
- **Needs:** theme-engine-and-packs, theme-builder-and-starter-kit, theme-gallery-community-voting, per-theme-conformance-notes, flavour-text-localisation, licensing-and-mark-policy, security-and-abuse-controls, publications-and-merchandise, support-and-donations
- **Must-nots:**
  - No legitimacy/rank/endorsement/certification conferred.
  - Client brand never alters/obscures the mark's meaning.
  - No tracking or remote dependencies ship.
- **Done when:** terms on record; pack passes linter + floor; free builder equally capable; maintenance flagged.
- **Open:** public price guide.
- **Effort:** S — terms + review process (paid service).

### theme-gallery-community-voting — Theme Gallery and Community Voting
- **What:** Searchable gallery with previews, contributor credit, favourites, and optional voting — discovery, never trust.
- **Builds:**
  - Gallery page: search, previews, credit, neutral-route control.
  - Favourites/voting signals with anti-manipulation and rate limits.
  - Accessible neutral list view.
- **Needs:** theme-engine-and-packs, per-theme-conformance-notes, surprise-me-theme-mode, moderation-disputes-and-appeals, security-and-abuse-controls, privacy-and-data-minimisation, privacy-respecting-analytics, sponsorship-policy, public-snapshots-and-api, accessibility-floor
- **Must-nots:**
  - Votes/favourites attach to packs only, never to people.
  - No purchased/sponsored placement; neutral default ordering.
  - No tracking or fingerprinting.
- **Done when:** default neutral/unpaid; non-conformant hidden; neutral accessible view; aggregate data mirrorable.
- **Open:** whether comments exist at all.
- **Effort:** M — gallery + voting + moderation.

### changelog-and-rss — Changelog and RSS
- **What:** Durable machine-readable changelog of change events + human rendering + RSS/Atom feed, making every change visible and subscribable.
- **Builds:**
  - Changelog record schema (immutable ID/date/category/severity/summary/links).
  - Deterministic RSS/Atom generation (stable GUIDs); page rendering.
- **Needs:** specification-versioning-and-hashing, governance-and-stewardship, public-snapshots-and-api, translation-governance, continuity-and-namespace-custody, offline-and-self-hosting-pack, conformance-linter
- **Must-nots:**
  - History never rewritten; corrections are new events (`corrects`).
  - No trust scores, rankings, or endorsements.
  - Feed never reorders or rewrites past entries.
- **Done when:** material changes appear; stable GUIDs; corrections referenced; file://-safe; in offline pack.
- **Open:** page format; per-category feeds.
- **Effort:** S — changelog schema + feed generator.

### translation-governance — Translation Governance
- **What:** How +AI content is translated: maintainer groups, status labels, source-version tracking, glossaries, corrections, credit, funded review.
- **Builds:**
  - Translation file format (language code/status/`basedOn`).
  - Per-language glossaries; maintainer-group review process.
- **Needs:** specification-versioning-and-hashing, flavour-text-localisation, theme-engine-and-packs, conformance-linter, contribution-ladder, public-directory, sponsorship-policy, grants-and-public-benefit-programmes, priority-review-services, offline-and-self-hosting-pack
- **Must-nots:**
  - Machine text never presented as human-reviewed meaning.
  - Corrections as dated entries, never silent edits.
  - Funded review produces the same `reviewed` status as volunteer.
- **Done when:** status + basedOn everywhere; machine labelled; outdated marked on release; glossaries versioned.
- **Open:** re-review window; shared vs separate glossary.
- **Effort:** M — translation process + glossary infrastructure.

### accessibility-floor — Accessibility Floor
- **What:** Neutral, high-contrast, low-bandwidth route through every core task, above all decorative themes.
- **Builds:**
  - Neutral-route pages + consistent "plain view" control.
  - WCAG AA conformance + mechanical linter checks.
- **Needs:** theme-engine-and-packs, per-theme-conformance-notes, conformance-linter, shared-project-navigation, surprise-me-theme-mode, multi-format-distribution-kit, email-signature-kit, security-and-abuse-controls, child-safe-education, translation-governance
- **Must-nots:**
  - No trapped focus; no colour-only state/error.
  - Visual CAPTCHA never the sole human-verification route.
  - No essential function may depend on motion.
- **Done when:** keyboard-only tasks; AA contrast; 320px reflow; reduced-motion; CJK/RTL; bandwidth budget.
- **Open:** bandwidth budget number; WCAG 2.2 AA baseline.
- **Effort:** M — neutral route + conformance (cross-cutting).

### regulatory-phrasing-packs — Regulatory Phrasing Packs
- **What:** Jurisdiction/sector example texts showing a declaration beside regulatory obligations — information, not legal advice.
- **Builds:**
  - Phrasing-pack format (professional reviewer metadata, label, coverage notes).
  - Static rendering/download; changelog/RSS update notifications.
- **Needs:** portable-declaration-schema, public-usage-guidelines, independent-assurance-and-certification, sector-and-language-directories, translation-governance, changelog-and-rss, offline-and-self-hosting-pack, training-consulting-and-pilots
- **Must-nots:**
  - Never certifies or implies compliance.
  - Pack content never changed by payment.
  - No advertising or paid placement; outdated labelled.
- **Done when:** professional review recorded; label everywhere; coverage gaps disclosed; withdrawal dated.
- **Open:** re-review interval; sector working groups.
- **Effort:** M — pack format + professional review process.

### standards-engagement — Standards Engagement
- **What:** When/how to engage standards bodies — only after stability, independent implementations, and pilots — to improve interop without handing over meaning.
- **Builds:**
  - Engagement policy + mandate template (documents, fora, representatives, forbidden zone).
  - Forum-selection criteria + exit safeguards.
- **Needs:** governance-and-stewardship, portable-declaration-schema, evidence-labels-not-trust-scores, provenance-interoperability, pilots-and-case-studies, developer-integrations, sponsorship-policy, financial-transparency, community-hub, changelog-and-rss, continuity-and-namespace-custody
- **Must-nots:**
  - No engagement before all preconditions recorded met.
  - Never propose the normative meaning itself.
  - Reject IP terms assigning formats/mark to a third party.
- **Done when:** mandate published; preconditions recorded; IP reviewed; exit preserves rights.
- **Open:** which fora per document class.
- **Effort:** S — engagement policy doc (gated, later).
