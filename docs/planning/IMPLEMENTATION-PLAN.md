# +AI Suggestions — Implementation Plan

> **Status:** Draft implementation plan. Plans how to build the 95 draft
> specifications in [`docs/suggestions/`](../suggestions/) (`*-dsh.md`).
> The specs themselves remain drafts: this plan sequences, groups, scopes and
> de-risks them — it does not promote any spec to a normative commitment.

## 1. How to read this plan

- This file is the master plan: baseline, invariants, programme overview,
  phased roadmap, cross-cutting concerns, risks, and a coverage index of all
  95 suggestions.
- One file per **programme** lives in [`programmes/`](programmes/) and contains
  a mini implementation plan for every suggestion in that programme.
- [`digest/`](digest/) holds the per-specification digests this plan was
  synthesised from (one file per catalogue group, plus a synthesis).
- Each programme also has a companion folder
  (e.g. [`programmes/02-trust-foundations/`](programmes/02-trust-foundations/))
  holding a **brainstorm** (every suggestion decomposed into definitive
  features and pre-implementation decisions) and a **`requests/`** directory
  with one agent request per suggestion — the execution layer, described in
  §13.
- Suggestions are grouped into programmes where implementing them together is
  prudent — shared foundations, shared data models, or shared audiences. No
  suggestion is dropped; the coverage index (§9) maps every one of the 95.

> **Reconciliation note.** The digest pass (`digest/00-synthesis.md`) proposed
> a 9-programme partition, phased P0–P3, with a top-10 dependency-hub list and
> risk register. This plan adopts its findings (hubs, risks, cross-cutting
> concerns, policy-only classification) but keeps 10 programmes: grouping by
> the README's catalogue taxonomy so every suggestion is traceable to its
> catalogue group, and so free-floor client tools and later hosted services
> are never forced into one phase together. Differences are deliberate, not
> oversight.

## 2. Method

1. Read [`docs/suggestions/README.md`](../suggestions/README.md) (the catalogue
   and its 7 groups) and every `*-dsh.md` specification.
2. Audited the repository's current state (§3) so every plan builds on what
   exists rather than re-imagining it.
3. Extracted per-specification digests (purpose, deliverables, dependencies,
   prohibitions, acceptance criteria, open questions, effort).
4. Grouped specifications into programmes by shared foundation or audience,
   and sequenced programmes by dependency and free-floor priority.

Alignment anchors: the campaign strategy in [`THE-PLAN.md`](../THE-PLAN.md)
("make millions of people perform one tiny, visible act: **Name +AI**"), and
the architecture roadmap in [`core-extensions.md`](../core-extensions.md)
(which pre-dates the `-dsh` specifications and describes the same trust and
presentation layers at lower fidelity).

## 3. Current-state baseline (repository audit)

What already exists and must be built on, not replaced:

| Area | State |
|---|---|
| Canonical spec | `site/SPECIFICATION.md` v0.1 (26 sections), English normative; rendered by `site/index.html` |
| Presentations | ~90 hand-built single-file theme pages (`site/*.html`), each ~2,000–2,600 lines cloning the spec data |
| Translations | 40 languages via `site/translations/registry.js` + `spec.<code>.js`, loaded as plain `<script>` tags (file://-safe) |
| Hooks contract | Shared element ids, class hooks, `data-text`/`data-html`/`data-title` keys, inline behavioural JS — the contract every theme copies |
| Toolkit | `site/toolkit.html`: theme gallery, compare, URL builder, QR/barcode, snippets |
| Tooling | `scripts/validate.mjs` (translation structure), `render-check.mjs` (render smoke test), `check-links.mjs`, `generate-sitemap.mjs`, `build-404.mjs`, `audit.mjs` (translation audit), `build_toolkit.py` |
| CI/CD | `.github/workflows/deploy.yml` — manual dispatch: validate → deploy to S3 + CloudFront (OIDC, least-privilege IAM, `www` redirect function, Route 53) |
| Hosting | Static-only: private S3 bucket behind CloudFront; no servers, no database, no accounts |
| Planning corpus | `docs/THE-PLAN.md` (90-day launch campaign), `docs/core-extensions.md` (phases 0–4 roadmap), `docs/features.md` (variant analysis), `docs/analysis/prior-art-dsh.md` |

Consequences for the plan:

- **Static-first is the existing architecture, not an aspiration.** Everything
  new must remain openable from `file://` with no build step unless the spec
  explicitly and deliberately adds an optional hosted layer.
- **The trust leg is the missing leg.** Meaning and presentation are strong;
  verification (machine-readable assertions, hashing, registry, checker) does
  not exist yet. Trust work is therefore the backbone of early phases.
- **Drift is the structural risk.** ~90 hand-cloned pages cannot absorb spec
  revisions; the generator/linter/theme-engine specifications exist precisely
  to retire that cost.

## 4. Load-bearing invariants (apply to every programme)

From the catalogue README, the specifications' shared free-floor sections, and
`core-extensions.md` §0.2:

1. **Free floor.** The `+AI` meaning and a usable no-account path stay free,
   forever. Paid services may add convenience, scale, support, or managed
   operations — never legitimacy, rank, or permission.
2. **One normative spec, many presentations.** Themes may re-voice interface
   copy; they may never change normative meaning. Flavour text is
   presentation, keyed to the same `data-*` hooks.
3. **Static-first, mirrorable, file://-safe.** No page may require a build
   step, fetch, or server to render. Hosted services are optional layers
   *around* the commons, never dependencies of it.
4. **No silent change.** Spec text, themes, packs, and registry records are
   versioned; changes are announced (changelog/RSS) and hash-pinned where
   verifiable.
5. **Declaration ≠ verification; evidence labels, never trust scores.** The
   project reports checkable, dated facts. No scores, ranks, verdicts,
   certification, or endorsement.
6. **The signer chooses the presentation; the project guarantees the meaning.**
7. **Privacy and data minimisation.** No mandatory accounts, no tracking or
   fingerprinting, meaningful exit; analytics only with consent and
   aggregation.
8. **Accessibility floor.** A neutral accessible route exists through every
   core task; decorative themes disclose their characteristics.
9. **Campaign primacy.** `THE-PLAN.md`'s objective — millions of people
   performing one visible act — outranks feature completeness. Tools exist to
   remove friction and deepen trust; they must never gate adoption.

## 5. Decision principles for grouping and sequencing

1. **Drift-proofing first.** Versioning, hashing, and machine-checkable
   conformance precede everything that emits or depends on spec pages.
2. **Trust before scale.** The verification path (schema → assertions →
   lifecycle → proofs of control → checker) precedes mass adoption surfaces,
   so the mark has teeth before it spreads.
3. **Foundations before services.** Shared data models and vocabularies are
   defined once, then consumed by directories, checkers, exports, and hosted
   services.
4. **Policy pages are cheap and unblocking.** Content/governance documents
   (about, guidelines, usage, licensing) can be written in parallel with any
   phase and are prerequisites only for services that depend on their rules
   (e.g. registry admission needs usage guidelines).
5. **Optional paid services come last** and only after their free-floor
   counterparts exist, per the catalogue's core boundary.
6. **Explicitly deferred ideas stay deferred** (see red-lines spec) unless a
   later phase re-opens them deliberately.

## 6. Programme overview

Ten programmes cover all 95 suggestions, each suggestion in exactly one
programme. Details and per-suggestion mini-plans: [`programmes/`](programmes/).

| # | Programme (file) | Suggestions | Effort | Phase |
|---|---|---|---|---|
| 1 | [Governance and Content Foundation](programmes/01-governance-and-content.md) | 14 | 10S + 4M | P0–P2 |
| 2 | [Trust Foundations (Data Spine)](programmes/02-trust-foundations.md) | 11 | 5S + 6M | P0–P1 |
| 3 | [Signer Tools and Verification](programmes/03-signer-tools-and-verification.md) | 8 | 2S + 5M + 1L | P1–P2 |
| 4 | [Registry and Discovery](programmes/04-registry-and-discovery.md) | 7 | 1S + 4M + 2L | P1–P2 |
| 5 | [Presentation, Themes, and Generators](programmes/05-presentation-themes-generators.md) | 14 | 5S + 9M | P0–P3 |
| 6 | [Email, Distribution, and Integrations](programmes/06-email-distribution-integrations.md) | 9 | 3S + 3M + 3L | P1–P3 |
| 7 | [Hosted Identity and Organisation Services](programmes/07-hosted-identity-org-services.md) | 7 | 2M + 5L | P3 |
| 8 | [Safety and Operations](programmes/08-safety-and-operations.md) | 6 | 3S + 3M | P0–P3 |
| 9 | [Funding and Sustainability](programmes/09-funding-and-sustainability.md) | 10 | 3S + 6M + 1L | P2–P4 |
| 10 | [Research, Standards, and Deferred Scope](programmes/10-research-standards-deferred.md) | 9 | 5S + 4M | P2–P4 |

Dependency hubs (in-degree from the digest pass) confirm the phasing:
portable-declaration-schema (36), declaration-lifecycle (28),
evidence-labels-not-trust-scores (27), privacy-and-data-minimisation (24),
security-and-abuse-controls (24), accessibility-floor (23),
free-floor-covenant (22), governance-and-stewardship (22),
continuity-and-namespace-custody (22), verification-checker (21).

Roughly a fifth of the 95 are document/policy-only (no code, or a small tool
at most), including:
free-floor-covenant, governance-and-stewardship, licensing-and-mark-policy,
red-lines-and-cautious-extensions, financial-transparency,
motivation-and-prior-art, public-usage-guidelines, changelog-and-rss,
claim-types, evidence-labels-not-trust-scores, machine-readable-assertions,
specification-versioning-and-hashing, url-semantics-and-canonicalization,
static-first-service-architecture, cost-discipline,
privacy-and-data-minimisation, standards-engagement,
independent-assurance-and-certification, marketplace-and-matching,
agentic-accountability. Their sequencing cost is documentation and governance
discipline, not engineering.

## 7. Phased roadmap

**P0 — Foundations (do first; all cheap).**
Free-floor policy (covenant, usage guidelines, licensing, contact routes),
prior-art register, the three trust vocabularies (claim-types, evidence
labels, specification versioning + hashing), and the policy halves of the
safety programme (privacy, cost, static-first layering). Rationale: everything
else is written in these vocabularies and must obey these policies.

**P1 — Trust core + first signer tools.**
The record trio (portable declaration schema, artifact hashing and binding,
declaration lifecycle), machine-readable assertions, proofs of control,
visibility and consent, URL semantics; then authored links, the no-account
declaration builder, the signing wizard, and the checker's offline CLI.
Governance content pages land in parallel. Rationale: trust before scale —
the mark gets teeth before it spreads (core-extensions §8).

**P2 — Adoption surfaces, registry, presentation.**
Registry + public snapshots, directories, practice register, AI-BOM,
passports and certificate/badge/QR exports, checker web/API; the theme
programme's linter → engine/packs → builder/starter-kit → generator;
email/distribution kit and offline pack. Rationale: only now does
distribution make sense, and it rides on a drift-proofed presentation layer.

**P3 — Hosted optional services.**
Hosted profiles, named subdomains, organisation profiles/workspaces, email
relay and declaration-by-email, moderation tooling, analytics. Each ships
only with its static-first failure-mode statement published (see Programme 8).

**P4 — Funding maturity and research.**
Funding/sustainability services and policies mature; research observatory,
adoption dashboard, pilots and case studies operate on real data; standards
engagement and regulatory phrasing packs track external developments; the
deferred register (agentic accountability, assurance programme, marketplace)
is re-opened only by its own gates.



## 8. Programme file format

Each `programmes/NN-name.md` file follows one convention:

- **Programme header** — goal, member suggestions (linked), total effort,
  prerequisite programmes, and how the programme honours the free floor.
- **One mini-plan per suggestion**:

  > ### Suggestion — title
  > - **Goal.** One sentence.
  > - **Deliverables.** What to build (surfaces named: page / CLI / API / doc /
  >   policy).
  > - **Dependencies.** Sibling specs and repo assets it needs first.
  > - **Must-nots.** The prohibitions that shape the build.
  > - **Done when.** The acceptance essence.
  > - **Effort.** S / M / L with one-line rationale.
  > - **Order within programme.** When to do it relative to its siblings.

- **Sequencing** — build order inside the programme and the phase it belongs
  to.
- **Risks** — programme-specific risks beyond the master list.

## 9. Coverage index

Every `docs/suggestions/*-dsh.md` specification appears below, exactly once.

**Programme 1 — Governance and Content Foundation:** about-project ·
founder-story · motivation-and-prior-art · use-plus-ai-guide ·
contribution-ladder · community-hub · contact-routes ·
shared-project-navigation · free-floor-covenant · public-usage-guidelines ·
licensing-and-mark-policy · governance-and-stewardship ·
financial-transparency · continuity-and-namespace-custody

**Programme 2 — Trust Foundations:** claim-types ·
evidence-labels-not-trust-scores · specification-versioning-and-hashing ·
portable-declaration-schema · artifact-hashing-and-binding ·
declaration-lifecycle · machine-readable-assertions · proofs-of-control ·
visibility-and-consent · url-semantics-and-canonicalization · tool-taxonomy

**Programme 3 — Signer Tools and Verification:** authored-links ·
no-account-declaration-builder · signing-wizard · verification-checker ·
artifact-passports · certificates-badges-and-qr · ai-practice-register ·
artifact-ai-bill-of-materials

**Programme 4 — Registry and Discovery:** opt-in-signatory-registry ·
public-snapshots-and-api · public-directory · sector-and-language-directories ·
research-observatory · public-adoption-dashboard · federation-and-mirrors

**Programme 5 — Presentation, Themes, and Generators:** conformance-linter ·
theme-engine-and-packs · generator-pipeline · theme-builder-and-starter-kit ·
surprise-me-theme-mode · per-theme-conformance-notes ·
flavour-text-localisation · custom-themes · theme-gallery-community-voting ·
accessibility-floor · translation-governance · changelog-and-rss ·
multi-format-distribution-kit · plus-ai-web-component

**Programme 6 — Email, Distribution, and Integrations:** email-signature-kit ·
plus-addressing-convention · privacy-preserving-email-relay ·
declaration-by-email · email-metadata · publishing-and-productivity-integrations ·
developer-integrations · message-bearing-subdomains ·
offline-and-self-hosting-pack

**Programme 7 — Hosted Identity and Organisation Services:** hosted-profiles ·
named-subdomains-and-identity-bundles · organisation-profiles-and-policies ·
approved-tool-registers · organisation-workspaces ·
workflow-automation-services · evidence-and-compliance-exports

**Programme 8 — Safety and Operations:** privacy-and-data-minimisation ·
moderation-disputes-and-appeals · security-and-abuse-controls ·
child-safe-education · static-first-service-architecture · cost-discipline

**Programme 9 — Funding and Sustainability:** support-and-donations ·
sponsorship-policy · membership-model · grants-and-public-benefit-programmes ·
api-scale-and-reliability · managed-hosting-and-domains ·
privacy-respecting-analytics · training-consulting-and-pilots ·
publications-and-merchandise · priority-review-services

**Programme 10 — Research, Standards, and Deferred Scope:** pilots-and-case-studies ·
experiments-and-metrics · marketplace-and-matching · agentic-accountability ·
red-lines-and-cautious-extensions · independent-assurance-and-certification ·
provenance-interoperability · standards-engagement · regulatory-phrasing-packs

## 10. Cross-cutting concerns

- **Hooks contract** (`site/index.html`): linter, generator, engine, packs and
  starter kit are all defined against it; it must be extracted and documented
  as the single machine-checkable contract early (P0).
- **Translations:** every new surface inherits the 40-language, reviewed-only
  discipline; new UI copy needs a localisation path before it ships.
- **Security & abuse controls** apply to every hosted surface (checker fetch
  policy/SSRF, rate limits, moderation of public submissions, key custody).
- **Cost discipline:** every hosted service carries a per-record operating
  cost model before it launches.
- **Accessibility floor** gates every public surface, including themed ones.

## 11. Risks and open questions

Top cross-programme risks (per-programme detail in each programme file):

1. **Spine coherence.** The schema/lifecycle/binding/labels quartet is drafted
   by four specs that cross-reference each other; if they are built
   independently, later tools pay the incoherence cost. Mitigation: joint
   review + freeze check before Programme 3 starts.
2. **Account gravity.** Hosted profiles/workspaces will be pressured into
   becoming prerequisites ("sign in to check"). Mitigation: the no-account
   builder path stays the documented primary path; launch reviews enforce it.
3. **Registry as endorsement gravity.** Founding-signatory momentum will push
   the registry toward listing anyone. Mitigation: visibility-consent and
   non-endorsement as code-level filters, not prose.
4. **Spec drift during transition.** Until the generator imports legacy theme
   skeletons, spec edits still cost ~90 page edits. Mitigation: freeze spec
   text during P2 or run a managed migration window; the linter makes drift
   visible immediately.
5. **Permalink question.** Engine URLs vs per-theme files decides whether the
   archive is product or museum (core-extensions §9.2). Recommendation:
   archive stays; engine is the forward path.
6. **Hosted-service gate discipline.** Every P3 service (relay, profiles,
   workspaces, hosting, priority review) must ship its static-first
   failure-mode statement, threat model, privacy analysis, and cost model —
   or the free floor erodes one convenience at a time.
7. **Moderation scale.** The registry's success is the moderation queue's
   load; the "human reviewer for consequential decisions" rule needs
   volunteer/staff planning before any hosted admission opens.
8. **Premature standards engagement.** Engagement before stability could
   freeze the model while it is still learning; the forbidden zone must be
   enforceable.
9. **Deferred-register drift.** Agentic accountability, the assurance
   programme, and the marketplace exist to NOT be built yet; without the
   red-lines doc as the single gate, contributors will build them anyway.
10. **Email header legitimacy.** `Plus-AI:` is unregistered; DKIM limits and
    self-declared status must be documented honestly or spoofing claims
    rebound on the project.

Key open questions to resolve during P0/P1 (owners in brackets):

- Legal home, named maintainers, and the JAPER relationship — blocks truthful
  About/Governance pages (about-project, governance-and-stewardship).
- Licence identifiers per asset class and the registry data-licence, pending
  legal review (licensing-and-mark-policy).
- Deprecation window length for schema field removal
  (portable-declaration-schema).
- Default rate-limit numbers for the checker and hosted APIs
  (verification-checker + security-and-abuse-controls, with cost-discipline
  modelling).
- Control-proof expiry windows and label staleness defaults
  (proofs-of-control + evidence-labels-not-trust-scores).
- Jurisdiction erasure that forbids even a tombstone identifier — legal risk
  to the append-only lifecycle design (declaration-lifecycle +
  privacy-and-data-minimisation).
- Registry governance form: policy-first, project-operated, mirrorable —
  grown only as the ledger grows (governance-and-stewardship); self-service
  admission threshold and release cadence (opt-in-signatory-registry +
  moderation-disputes-and-appeals).
- Engine initial scope: single-page runtime vs a small build step that still
  emits file://-safe pages (theme-engine-and-packs).
- Whether pack manifests should be signed, and by which keys
  (theme-engine-and-packs + continuity-and-namespace-custody).
- Materiality threshold and accounting basis for the first financial report
  (financial-transparency).
- Free-quota sizes for the read API and the email relay
  (api-scale-and-reliability + cost-discipline).
- The "meaningful adoption" metric that gates P3/P4 extensions
  (independent-assurance-and-certification, marketplace-and-matching,
  standards-engagement).
- Watchlist assessments still outstanding: SSO/SCIM, hosted mail relay,
  blockchain anchoring — each needs a published assessment before its spec
  ships (red-lines-and-cautious-extensions, organisation-workspaces,
  privacy-preserving-email-relay).

## 12. Relationship to other planning documents

- `THE-PLAN.md` — campaign sequencing (90 days); this plan is the engineering
  complement. Where they overlap (launch stack, first tools), this plan defers
  to THE-PLAN's day-1 friction-removers but keeps the free-floor tools first.
- `core-extensions.md` — precursor architecture; its phase 0–4 table maps
  closely onto this plan's P0–P3, and this plan supersedes it in detail.
- `versions-not-done.md` — theme build queue; absorbed by the presentation
  programme once the generator pipeline exists.

## 13. Brainstorms and agent requests (the execution layer)

This plan stops at scoping; implementation starts one question at a time. The
funnel is:

```
docs/possibilities/   open-ended explorations of what could be
        ↓
docs/suggestions/     95 draft specifications (the `-dsh` catalogue)
        ↓
docs/planning/        this plan: programmes, digests, phasing, risks
        ↓
programmes/NN-name/   brainstorm.md  — features + decisions per suggestion
        ↓             requests/      — one agent request per suggestion
implementation        the agent executes each request, one file at a time
```

For each programme, the companion folder under
[`programmes/`](programmes/) contains:

- **`brainstorm.md`** — every member suggestion decomposed into **definitive
  features** (what will exist) and **pre-implementation decisions** (choices
  that must be made first). This is the "no rock left unturned" pass: every
  digest "Open:" item, every specification's §10 open questions, and the
  relevant items from §11 above are surfaced as decisions.
- **`requests/`** — one agent request per suggestion, one file per request,
  named after the specification slug (95 files across the ten programmes).
  Each request file has the fixed scope (§2), the must-nots (§3), acceptance
  criteria (§4), outputs (§5) and reading list (§6) derived from the spec and
  its mini-plan, plus **§1: decisions to make** — the only section the human
  needs to edit.

Execution loop: open a request → make its §1 decisions (your choices become
the instructions) → hand the whole file to your agentic AI → review the result
against the §4 acceptance criteria. Conventions:
[`programmes/README.md`](programmes/README.md). Spec gaps and inconsistencies
found during the brainstorm pass are tracked in
[`FINDINGS.md`](FINDINGS.md).

The programme `.md` files above remain the canonical mini-plans; the
brainstorm and request files derive from them and from the specifications, and
must never silently widen or narrow the scope stated there.

> **Status:** all ten companion folders exist — 95 request files (one per
> suggestion), 10 brainstorms, 222 pre-implementation decisions. Every file
> was machine-checked: required sections present, decision blocks complete,
> all 666 relative links resolve. Gaps found during the brainstorm pass are
> tracked in [`FINDINGS.md`](FINDINGS.md).
