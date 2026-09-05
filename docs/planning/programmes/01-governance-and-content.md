# Programme 1 — Governance and Content Foundation

> Covers the 14 "Human layer and governance" suggestions. Almost entirely
> documents, policies, and static pages: cheap, unblocking, and prerequisites
> for every hosted service that later needs published rules (registry
> admission, moderation, licensing). Runnable in parallel with engineering
> programmes from day one.

- **Agent requests:** [`01-governance-and-content/`](01-governance-and-content/) — brainstorm + one agent request per suggestion.
- **Effort:** 10 × S, 4 × M (community-hub, shared-project-navigation, governance-and-stewardship, continuity-and-namespace-custody)
- **Prerequisites:** none (governance docs may reference later specs as "future", never as existing)
- **Phase:** P0 (policy half) / P1 (pages that depend on P1-P2 surfaces)
- **Free floor:** these pages ARE the published free floor; every one is
  file://-safe and no-account.

## Mini-plans

### about-project — About the Project
- **Goal:** Canonical static page explaining what +AI is and is not, with factual JAPER/legal-home statements.
- **Build:** one static page; dated legal-home statement; links to covenant, guidelines, licensing, governance, continuity.
- **Needs:** free-floor-covenant, governance-and-stewardship (text), financial-transparency, licensing-and-mark-policy, shared-project-navigation.
- **Must-nots:** no exclusivity claim over `+AI`; no service prerequisite framing; future direction never reads as established governance.
- **Done when:** meaning verbatim, "is not" list published, JAPER stated factually, versioned + file://-safe.
- **Effort:** S. **Order:** after covenant + usage guidelines drafts exist (needs their canonical wording); early P1.

### founder-story — Founder Story
- **Goal:** First-person origin account naming Eric Mourant as originator and first signer, with honest AI-role disclosure.
- **Build:** one static page; per-claim source or "unverified" flags; the page itself signed `Eric Mourant +AI` via a live declaration link.
- **Needs:** governance-and-stewardship, motivation-and-prior-art, declaration tooling (signature link), continuity-and-namespace-custody.
- **Must-nots:** founder never presented as gatekeeper/certifier; no unflagged claims; stewardship path presented as intent, not installed governance.
- **Done when:** originator named, claims sourced/flagged, AI disclosure present, page signed with a live declaration.
- **Effort:** S. **Order:** with motivation-and-prior-art (shared sourcing pass); P1.

### motivation-and-prior-art — Motivation and Prior Art
- **Goal:** Honest "why" account with a narrowly-scoped, verifiable novelty claim and a maintained prior-art register.
- **Build:** one static page + prior-art register (`{id, title, source, date, relation, note, checked-date}`); adjacent practices named (badges, C2PA, byline conventions, post-nominals).
- **Needs:** founder-story; docs/analysis/prior-art-dsh.md (already drafted — promote and maintain it); public-usage-guidelines.
- **Must-nots:** no ownership claim over `+AI`; no "first ever" primacy claim; no unsourced assertion.
- **Done when:** novelty claim stated as "no earlier proposal identified", register published, "novel ≠ first ever" explicit.
- **Effort:** S. **Order:** P0/P1 — the prior-art register is a standing maintenance task.

### use-plus-ai-guide — Use +AI Guide
- **Goal:** Adoption page with working, conforming examples across 7 categories, all usable before any registration.
- **Build:** one static page: names, documents, email, code, presentations, metadata, links; visible-vs-machine-readable distinction.
- **Needs:** email-signature-kit, plus-addressing-convention, developer-integrations, public-usage-guidelines; examples re-checked via conformance-linter once it exists.
- **Must-nots:** machine-readable detail never replaces visible disclosure; no example implies payment grants legitimacy/rank/permission.
- **Done when:** ≥1 conforming example per category; each passes conformance; fully no-account.
- **Effort:** S. **Order:** P1; refresh examples after P3 signer tools ship (they become the canonical walkthrough).

### contribution-ladder — Contribution Ladder
- **Goal:** Catalogue of bounded ways to help (sign, test, translate, accessibility, themes, engineering, prior-art, moderation, pilots) with named reviewers and credit.
- **Build:** one static page, ≥9 rung families × 5 fields (result, reviewer, terms, credit, first step); authority-bearing rungs separated.
- **Needs:** licensing-and-mark-policy (contribution terms), moderation-disputes-and-appeals, governance-and-stewardship, translation-governance.
- **Must-nots:** no credit aggregation into scores/levels/leaderboards; contributing never required to use the mark; no forced tool disclosure.
- **Done when:** all rung families present with 5 fields; entry rungs no-account; credit attribution-only.
- **Effort:** S. **Order:** after licensing policy (terms); P1.

### community-hub — Community Hub
- **Goal:** Static home composing links to signers, directories, sectors, pilots, case studies, discussions — participation without popularity ranking.
- **Build:** composite static page + no-endorsement notice + accessible low-bandwidth route.
- **Needs:** opt-in-signatory-registry, public-directory, sector-and-language-directories (targets to link); moderation rules before any submission gate opens; visibility-and-consent honoured in listings.
- **Must-nots:** no follower counts, likes, leaderboards, reputation scores, paid rank; no algorithmic feed.
- **Done when:** participation kinds present or explicitly deferred; disclaimer everywhere; consent honoured; file://-safe.
- **Effort:** M. **Order:** late P1/P2 — publish read-only links version first; open submissions only after moderation programme ships.

### contact-routes — Contact Routes
- **Goal:** Eight distinct documented paths (general, media, partnerships, privacy, security, abuse, child safety, legal) so urgent reports never share one inbox.
- **Build:** one static page; per-route role/targets/retention/escalation; plain-text-first forms; stable addresses + redirect plan.
- **Needs:** security-and-abuse-controls, privacy-and-data-minimisation (form rules), continuity-and-namespace-custody (address custody), privacy-preserving-email-relay (later, optional).
- **Must-nots:** no tracking/fingerprinting on forms; media route implies no endorsement; urgent routes reachable with no account/payment.
- **Done when:** 8 routes distinct with role/targets/retention/escalation; active content blocked; no tracking.
- **Effort:** S. **Order:** early P0 (unblocks security/abuse handling for everything else).

### shared-project-navigation — Shared Project Navigation
- **Goal:** One navigation contract (exactly 8 destination groups) rendered consistently on every canonical/generated/themed page.
- **Build:** versioned navigation manifest; engine hooks (`nav.about`…`nav.contact`); linter rule (missing/miskeyed/reworded hook = error).
- **Needs:** theme-engine-and-packs, conformance-linter (implementation half — P2); accessibility-floor; translation-governance (labels localised).
- **Must-nots:** no ninth group without a versioned spec change; normative spec must not embed the nav set; themes restyle but never hide destinations.
- **Done when:** 8 hooks render everywhere; manifest versioned; linter enforces; offline identical.
- **Effort:** M. **Order:** policy half P1; hook + linter half P2 with the presentation programme.

### free-floor-covenant — Free-Floor Covenant
- **Goal:** Versioned public promise of what stays free (notation, meaning, translations, no-account tools, checking, governance, correction/revocation) and how it changes.
- **Build:** versioned covenant doc with per-item definitions and amendment notice period; paid-service free-floor statement template; linter rule detecting contradictory service pages.
- **Needs:** governance-and-stewardship, licensing-and-mark-policy, cost-discipline, specification-versioning-and-hashing, static-first-service-architecture.
- **Must-nots:** floor never narrowed by a service operator unilaterally; paid services add convenience/scale/support/ops only; anti-abuse limits may not paywall floor items.
- **Done when:** versioned covenant + per-item definitions published; prior versions archived; linter detects contradictions.
- **Effort:** S. **Order:** P0 — it is the constitution every other policy cites.

### public-usage-guidelines — Public Usage Guidelines
- **Goal:** Concise, accurate placement guidance: the meaning, scoping to an artifact, naming the responsible person, and the claims the mark does not make.
- **Build:** one static page + 6 placement examples; guidance vs enforceable mark rules clearly separated.
- **Needs:** use-plus-ai-guide, licensing-and-mark-policy, portable-declaration-schema (metadata examples), claim-types, regulatory-phrasing-packs (later linkage).
- **Must-nots:** no meaning beyond the specification; responsibility claim never presented as verification/certification/endorsement; no ownership/gating over the notation.
- **Done when:** meaning verbatim; examples verified; separation explicit; offline present.
- **Effort:** S. **Order:** P0 — the registry's admission policy depends on it (per core-extensions §9.5).

### licensing-and-mark-policy — Licensing and Mark Policy
- **Goal:** Explicit licence per asset class (code, spec text, translations, themes, schemas, registry data) + inbound=outbound contribution terms + name/identity policy.
- **Build:** licence manifest; contribution policy (no copyright transfer); mark policy covering project name/visual identity only.
- **Needs:** free-floor-covenant, public-usage-guidelines, governance-and-stewardship; legal review or draft-labelling.
- **Must-nots:** mark policy grants/claims no ownership of `+AI` notation; no certification/quality/compliance framing; no silent licence change.
- **Done when:** licence per asset class; mark policy name-only; review obtained or labelled draft; offline pack carries the texts.
- **Effort:** S. **Order:** P0 — blocks contribution-ladder, tool-taxonomy contributions, registry data licensing.

### governance-and-stewardship — Governance and Stewardship
- **Goal:** The founder-led → fiscal-sponsor → mission-locked-custodian path: decision rights, change discipline, succession, conflicts, funding-influence controls.
- **Build:** governance record page + decision-rights matrix + appeals route; phase-transition checklists; succession plan; conflict/recusal register; JAPER role statement; notice-period schedule (90/180 days).
- **Needs:** free-floor-covenant, licensing-and-mark-policy, financial-transparency, continuity-and-namespace-custody; later: sponsorship-policy, membership-model, moderation rules.
- **Must-nots:** only the specification authority may change normative meaning; funders/sponsors/members may not buy decision rights or dispute outcomes; no claiming a later phase before its checklist completes.
- **Done when:** decision matrix published; succession plan exists; independent appeals route; JAPER role disclosed.
- **Effort:** M. **Order:** start P0 (record of current founder-led state), complete transitions only when triggered — this is a process, not a one-off.

### financial-transparency — Financial Transparency
- **Goal:** Disclosure of money: operating costs, income categories, funders, in-kind support, conflicts, funded deliverables, public-good vs paid-service split.
- **Build:** annual report template; materiality + privacy thresholds; payment-recipient table; stable-URL report archive with dated errata.
- **Needs:** governance-and-stewardship, cost-discipline (cost data), support-and-donations/sponsorship-policy/grants (income categories).
- **Must-nots:** large funders cannot hide behind the privacy threshold; no implying an assurance level the report lacks; prior reports never altered.
- **Done when:** first annual report published; funders/conflicts/deliverables disclosed; archive static and stable.
- **Effort:** S. **Order:** P1 (first report after the launch campaign's money flows begin); template P0.

### continuity-and-namespace-custody — Continuity and Namespace Custody
- **Goal:** Protect the apex domain, declaration identifiers, signing keys, exports and links: custody, renewal, recovery, succession, shutdown, archival rules.
- **Build:** namespace inventory page (domains, identifiers, keys, exports, custodians, dates); key rotation/revocation; m-of-n emergency recovery; successor-transfer checklist; tombstone process; wind-down final export.
- **Needs:** governance-and-stewardship, portable-declaration-schema (identifier rules), declaration-lifecycle (tombstones), specification-versioning-and-hashing, proofs-of-control (key custody), federation-and-mirrors, offline-and-self-hosting-pack.
- **Must-nots:** declaration identifiers never reused; no single person holds sole recovery power; wind-down requires advance notice + complete final export.
- **Done when:** inventory published; tombstones resolve; recovery procedure exists; ≥10-year retention; offline verify path works.
- **Effort:** M. **Order:** inventory P1 (domain/registrar/keys are already live — protect them); full process with P2 trust work.

## Sequencing

1. **P0 (immediate):** contact-routes → free-floor-covenant → public-usage-guidelines → licensing-and-mark-policy → motivation-and-prior-art (register from existing analysis doc).
2. **P1:** about-project, founder-story, use-plus-ai-guide, contribution-ladder, governance-and-stewardship (record current state), financial-transparency (template), continuity inventory, shared-project-navigation (policy half).
3. **P2:** community-hub (read-only links first), shared-project-navigation (hook + linter half, with presentation programme).
4. Recurring: prior-art register checks, annual financial report, governance transition checklists, namespace custody reviews.

## Risks

- **Legal review dependency:** licensing/mark policy has real legal exposure; ship draft-labelled if review is slow, never silently.
- **Sourcing discipline:** founder-story and motivation pages make historical claims; weak sourcing invites credibility attacks on the whole project — flag, don't guess.
- **Governance theatre:** publishing a decision matrix before the project can staff it would be worse than honest "founder-led, here is the path". Sequence the phases honestly.
