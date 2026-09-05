# Brainstorm — Programme 01: Governance and Content Foundation

> Companion to [`01-governance-and-content.md`](../01-governance-and-content.md). Every member suggestion is decomposed here into **definitive features** and **pre-implementation decisions**; each has one agent request in [`requests/`](requests/). Workflow: open a request, record your choices in its §1, then give the file to your agent.

## Programme-level decisions (affect more than one request)

1. **Output locations.** Canonical public pages live as `site/<slug>.html` beside the existing ~90 theme pages; policy/governance documents are published as `site/<name>.html` (file://-safe, mirrorable, linked from navigation); structured, hashable records (navigation manifest, licence manifest, namespace inventory) live as `site/*.json`; the prior-art register is promoted from the already-drafted `docs/analysis/prior-art-dsh.md`. This keeps every deliverable on the existing static path (IMPLEMENTATION-PLAN §3).
2. **One canonical wording source.** The meaning `AI helped. I take responsibility.` and the "is not" list are reproduced **verbatim**, never paraphrased, by `about-project`, `public-usage-guidelines`, `use-plus-ai-guide`, and `free-floor-covenant`; all four link `site/SPECIFICATION.md` as the single upstream, so a later normative change is one edit, not four.
3. **P1 freeze/coordination.** The P0 documents (covenant, usage guidelines, licensing) settle the canonical wording, founding addresses (`https://eric-mourant.plus-artificial-intelligence.org`, `eric.mourant+ai@japer.technology`), and free-floor phrasing; the P1 pages (about, founder-story, use guide, contribution ladder) consume that wording verbatim rather than re-drafting it.
4. **§11 cross-cutting decisions are placed in named requests:** legal home / named maintainers / JAPER relationship → `about-project` + `governance-and-stewardship`; licence identifiers + registry data-licence → `licensing-and-mark-policy`; materiality threshold + accounting basis → `financial-transparency`; registry governance form → `governance-and-stewardship`; pack-manifest signing keys → `continuity-and-namespace-custody` (joint with `theme-engine-and-packs`).

## Member-by-member brainstorm

### about-project — About the Project
- **Request:** [`requests/about-project.md`](requests/about-project.md)
- **Definitive features:** one static `site/about.html`; verbatim meaning + normative "is not" list; dated legal-home and maintainer-role statement (undecided items marked undecided); factual JAPER relationship statement; free-floor and no-account-path assertions; no-service-prerequisite framing; future direction labelled as intent; version identifier + publication date; links to covenant, guidelines, licensing, governance, continuity, and the 8 nav routes.
- **Decisions:** D1 — Current legal home and named maintainers; D2 — JAPER Technology relationship wording; D3 — About page licence.
- **Open questions / risks:** legal home and maintainers must be confirmed before publication (else publish "undecided"); the page's own licence is deferred to the licensing policy (D3). Risk: presenting future governance as installed (guarded by intent-labelling).

### founder-story — Founder Story
- **Request:** [`requests/founder-story.md`](requests/founder-story.md)
- **Definitive features:** one static first-person `site/founder-story.html`; names Eric Mourant as originator and first signer; founding address stated and linked; per-claim source or "unverified" flag (claim-record model `{claim, date, source, status, reviewed-by, reviewed-date}`); AI-contribution disclosure; stewardship path labelled intent and linked to governance; the page signed `Eric Mourant +AI` via a live declaration link.
- **Decisions:** D1 — Narrative voice (first vs third person); D2 — Founding dates and origin-moment wording; D3 — Signing the page before declaration tooling exists.
- **Open questions / risks:** exact founding dates and origin-moment wording need founder confirmation; first- vs third-person voice (first-person assumed). Risk: sourcing discipline — unverifiable claims invite credibility attacks, so flag rather than guess.

### motivation-and-prior-art — Motivation and Prior Art
- **Request:** [`requests/motivation-and-prior-art.md`](requests/motivation-and-prior-art.md)
- **Definitive features:** one static `site/why.html` ("Why" destination); honest "why" account with dated references; Terence Tao lecture contribution with checkable citation; narrow novelty claim (situational, responsibility-bearing post-nominal, fixed one-line meaning, no-permission); explicit "novel ≠ first ever"; maintained prior-art register (`{id, title, source, date, relation, note, checked-date}`) with append-and-correct lifecycle; adjacent practices named (badges, C2PA, byline conventions, post-nominals); founding examples cited.
- **Decisions:** D1 — Terence Tao citation handling; D2 — Novelty-claim wording; D3 — Prior-art register location and promotion.
- **Open questions / risks:** exact Tao citation requires confirmation; novelty wording needs sign-off (repeated across materials). Risk: sourcing discipline — the register is a standing maintenance task, not a one-off.

### use-plus-ai-guide — Use +AI Guide
- **Request:** [`requests/use-plus-ai-guide.md`](requests/use-plus-ai-guide.md)
- **Definitive features:** one static `site/use.html`; ≥1 conforming example per 7 categories (names, documents, email, code, presentations, metadata, links); visible-vs-machine-readable distinction; no-account first examples; per-example inventory (`{id, category, content, spec-version-tested, visible|machine-readable, tested-date, reviewer}`); re-test-on-spec-change discipline.
- **Decisions:** D1 — Metadata examples pre-stabilisation; D2 — Conformance-check method before the linter exists.
- **Open questions / risks:** which metadata examples to include before Developer Integrations stabilises (D1). Risk: examples silently drifting from the spec (guarded by per-example spec-version tracking + re-testing).

### contribution-ladder — Contribution Ladder
- **Request:** [`requests/contribution-ladder.md`](requests/contribution-ladder.md)
- **Definitive features:** one static `site/contribute.html`; ≥9 rung families (sign, test, translation, accessibility, themes, engineering, prior-art, moderation, pilots), each with 5 fields (result, reviewer, terms, credit, first step) + optional difficulty/time; authority-bearing rungs separated; credit as factual attribution only; rung record `{id, title, category, expected-result, reviewer, contribution-terms, credit, first-step, difficulty, time-estimate, status, requires-authority}`; open/pause/retire with tombstone.
- **Decisions:** D1 — Reviewer assignment approach; D2 — Institutional-pilots rung handling.
- **Open questions / risks:** exact reviewer assignment pending governance (D1); whether institutional pilots require a funded/organisational arrangement (D2). Risk: credit aggregating into a score (guarded by attribution-only rule).

### community-hub — Community Hub
- **Request:** [`requests/community-hub.md`](requests/community-hub.md)
- **Definitive features:** composite static `site/community.html` linking signers, contributors, translators, sector groups, pilots, case studies, discussions; canonical no-endorsement notice; accessible low-bandwidth read route; hub-entry model `{id, kind, source-record, visibility, language, moderation-status, listed-date}` (links + status, never re-authored content); submissions gated on published moderation/inclusion/governance/archival/multilingual rules.
- **Decisions:** D1 — Launch mode (read-only vs discussions); D2 — Directory ordering rule.
- **Open questions / risks:** whether to launch discussions at all given the social-feed watchlist (D1); exact ordering rule deferred to public-directory (D2). Risk: drifting into a popularity ranking (guarded by no-metrics rule + no-endorsement notice).

### contact-routes — Contact Routes
- **Request:** [`requests/contact-routes.md`](requests/contact-routes.md)
- **Definitive features:** one static `site/contact.html`; 8 distinct routes (general, media, partnerships, privacy, security, abuse, child safety, legal); per-route recipient role, acknowledgement + resolution targets, retention, escalation, attachment policy; route record `{id, purpose, recipient-role, acknowledgement-target, resolution-target, retention, escalation, attachment-policy, sensitive-handling, visibility}`; plain-text-first forms; active-content rejection; stable addresses + redirect plan.
- **Decisions:** D1 — Response targets; D2 — Sensitive-route relay aliases; D3 — Canonical contact addresses.
- **Open questions / risks:** exact ack/resolution targets set against staffing reality (D1); masked relay aliases deferred to privacy-preserving-email-relay (D2). Risk: urgent reports sharing one inbox (guarded by distinct routes + escalation).

### shared-project-navigation — Shared Project Navigation
- **Request:** [`requests/shared-project-navigation.md`](requests/shared-project-navigation.md)
- **Definitive features:** exactly 8 destination groups (About, Why, Use, Help, Community, Governance, Support, Contact); versioned navigation manifest (stable hook id → canonical URL → label → spec version); one engine hook per group (`nav.about` … `nav.contact`); route block keyboard-operable, local-assets-only, localised with fallback; linter rule (missing/miskeyed/reworded hook = error); "Why" resolves to a section of About, not a standalone page.
- **Decisions:** D1 — Canonical URL scheme; D2 — Manifest format; D3 — Page-coverage rule (which pages carry nav).
- **Open questions / risks:** exact canonical URL scheme (top-level vs `/nav/`) undecided until URL semantics is drafted (D1). Risk: nav set creeping past 8 groups (guarded by "ninth group = versioned spec change").

### free-floor-covenant — Free-Floor Covenant
- **Request:** [`requests/free-floor-covenant.md`](requests/free-floor-covenant.md)
- **Definitive features:** versioned covenant document (`site/covenant.html`) with version + effective date; enumerated free-floor items each with a per-item "free" definition; amendment rules + notice period (≥180 days for narrowing); enumerated anti-abuse limits that never remove/paywall a floor item; paid-service free-floor statement template; machine-readable floor list (optional) for the linter; every prior version archived at a stable URL.
- **Decisions:** D1 — Hosted check queue threshold; D2 — Covenant licence; D3 — Machine-readable floor items.
- **Open questions / risks:** precise queue volume for hosted on-demand checks, to be set with cost-discipline modelling (D1 — the free capability itself is already settled). Risk: a service operator narrowing the floor unilaterally (guarded by governed, versioned, announced change).

### public-usage-guidelines — Public Usage Guidelines
- **Request:** [`requests/public-usage-guidelines.md`](requests/public-usage-guidelines.md)
- **Definitive features:** one static `site/usage.html`; normative meaning restated verbatim with no added meaning; responsibility-not-verification statement; no-permission / no-ownership statements; 6 placement examples (name, document, email, code, presentation, metadata) distinguishing visible vs machine-readable; non-exhaustive "claims the mark does not make" list; guidance-vs-enforceable-rules separation linked to licensing policy; examples verified against the current spec.
- **Decisions:** D1 — Misuse gallery; D2 — Localised versions at launch.
- **Open questions / risks:** whether to publish a canonical misuse gallery with real examples needs moderation-policy input (D1). Risk: guidance drifting into red lines (certification framing, forced tool disclosure) — guarded by must-nots.

### licensing-and-mark-policy — Licensing and Mark Policy
- **Request:** [`requests/licensing-and-mark-policy.md`](requests/licensing-and-mark-policy.md)
- **Definitive features:** licence manifest mapping each asset class (code, spec text, translations, themes, schemas, registry data) to a recognised licence + canonical text URL; single inbound-equals-outbound contribution policy (no copyright transfer); mark policy governing project name + visual identity only (no claim over `+AI` notation); anti-certification/anti-endorsement rules; draft-labelling until legal review; versioned, governed, never-retroactive changes; offline pack carries manifest + full texts.
- **Decisions:** D1 — Code licence; D2 — Spec text and translations licence; D3 — Themes, schemas, and machine-readable formats licence; D4 — Registry data licence + sui generis statement; D5 — Legal review posture.
- **Open questions / risks:** specific licence identifiers and whether registry data needs a sui generis statement are undecided pending legal review (D1–D4). Risk: legal review dependency — ship draft-labelled, never silently (D5).

### governance-and-stewardship — Governance and Stewardship
- **Request:** [`requests/governance-and-stewardship.md`](requests/governance-and-stewardship.md)
- **Definitive features:** governance record page (`site/governance.html`) + published decision-rights matrix (specification changes, free-floor amendments, mark-policy changes, registry policy, service-provider approval, financial decisions); phase-transition checklists (founder-led → fiscal-sponsor → mission-locked custodian); succession plan + transfer checklist; conflict/recusal register; independent appeals route; JAPER role statement; notice-period schedule (90/180 days); versioned + archived decisions.
- **Decisions:** D1 — Current legal home, named maintainers, JAPER role; D2 — Specification authority form; D3 — Phase-transition triggers; D4 — Custodian legal form; D5 — Registry governance form.
- **Open questions / risks:** transition triggers, spec-authority form, and custodian legal form are undecided (D2–D4); registry governance form is policy-first/project-operated/mirrorable (D5). Risk: "governance theatre" — publishing a matrix before the project can staff it is worse than honest "founder-led, here is the path".

### financial-transparency — Financial Transparency
- **Request:** [`requests/financial-transparency.md`](requests/financial-transparency.md)
- **Definitive features:** annual report template (`site/finances/` + latest report) with period, currency, accounting basis, responsible party; cost/income categories split public-good vs paid-service; funder disclosure above materiality threshold (name + amount band + purpose); in-kind disclosure with non-audit note; conflicts + funded-deliverable disclosure; payment-recipient table; assurance level stated honestly; stable-URL archive with dated errata only.
- **Decisions:** D1 — Materiality threshold and amount bands; D2 — Accounting basis; D3 — Assurance level and review threshold.
- **Open questions / risks:** materiality threshold + amount-band sizes, audit level, and cash-vs-accrual are undecided (D1–D3). Risk: large funders hiding behind the privacy threshold (guarded by "cannot opt out" rule).

### continuity-and-namespace-custody — Continuity and Namespace Custody
- **Request:** [`requests/continuity-and-namespace-custody.md`](requests/continuity-and-namespace-custody.md)
- **Definitive features:** published namespace inventory (`site/continuity-inventory.json`) of domains, identifiers, keys, exports, custodians, dates; key rotation schedule + revocation path (forward-only, never reuse); declaration-identifier non-reuse with tombstones; m-of-n emergency recovery; scheduled mirrorable exports; successor-transfer checklist; wind-down notice + final export; ≥10-year retention; founding addresses covered.
- **Decisions:** D1 — m-of-n recovery threshold and custodians; D2 — Apex domain registrar and custody; D3 — Pack-manifest signing keys.
- **Open questions / risks:** m-of-n threshold + choice of custodians undecided (D1); apex domain held by neutral registrar vs dedicated entity undecided (D2); pack-manifest signing is a shared question with theme-engine-and-packs (D3 — joint owner). Risk: a single person holding sole recovery power (guarded by m-of-n).
