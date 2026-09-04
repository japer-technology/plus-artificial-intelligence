# Digest 01 — Human Layer and Governance

### about-project — About the Project
- **What:** Canonical static About page explaining what +AI is and is not, the free floor, and the current legal home, without presenting intentions as governance.
- **Builds:**
  - Static "About" web page: verbatim meaning + normative "is not" list + JAPER facts.
  - Doc: dated legal-home and maintainer-role statement (undecided items marked undecided).
  - Policy link-out: free floor, no-account path, no service prerequisite.
- **Needs:** free-floor-covenant, governance-and-stewardship, financial-transparency, licensing-and-mark-policy, shared-project-navigation, continuity-and-namespace-custody
- **Must-nots:**
  - No exclusivity claim over `+AI` characters.
  - No service may be a prerequisite for using the mark.
  - Future direction must not read as commitment or established governance.
- **Done when:** meaning verbatim + spec linked; JAPER stated factually; page versioned/dated and file://-safe.
- **Open:** confirm exact legal home and named maintainers.
- **Effort:** S — one static page + fact review.

### founder-story — Founder Story
- **What:** Candid first-person account naming Eric Mourant as originator and first signer, disclosing the AI's role in creating the project and the founder→stewardship path as intent.
- **Builds:**
  - Static "founder story" web page (first-person).
  - Signed declaration `Eric Mourant +AI` binding the page as its artifact.
  - Doc: per-claim source or "unverified" flag; AI-contribution disclosure.
- **Needs:** governance-and-stewardship, motivation-and-prior-art, named-subdomains-and-identity-bundles, continuity-and-namespace-custody, hosted-profiles, url-semantics-and-canonicalization
- **Must-nots:**
  - Founder not presented as gatekeeper/certifier/permission source.
  - No unverifiable claims published unflagged.
  - Stewardship path not presented as governance already in place.
- **Done when:** originator named; claims sourced/flagged; AI disclosure present; page signed with live declaration.
- **Open:** confirm founding dates; first- vs third-person voice.
- **Effort:** S — one static page + declaration link.

### motivation-and-prior-art — Motivation and Prior Art
- **What:** Honest account of why existing AI-disclosure language felt incomplete, the Tao lecture's contribution, and a narrowly-scoped, verifiable novelty claim.
- **Builds:**
  - Static "motivation" web page with accurate Tao citation or best-effort flag.
  - Doc/register: prior-art register `{id, title, source, date, relation, note, checked-date}`.
  - Content: named adjacent practices (badges, C2PA, byline conventions, post-nominals).
- **Needs:** founder-story, public-usage-guidelines, licensing-and-mark-policy, machine-readable-assertions
- **Must-nots:**
  - No ownership of `+AI` characters; no "first ever" primacy claim.
  - No unsourced motivational/historical assertion.
- **Done when:** narrow novelty claim stated; prior-art register exists; adjacent practices named; "novel"≠"first ever" distinguished.
- **Open:** confirm exact Tao citation and novelty wording.
- **Effort:** S — one page + prior-art register.

### use-plus-ai-guide — Use +AI Guide
- **What:** Short adoption page giving working, conforming `+AI` examples across names, documents, email, code, presentations, metadata, and links before any registration.
- **Builds:**
  - Static "Use +AI guide" web page with ≥1 conforming example per 7 categories.
  - Content: visible-vs-machine-readable distinction; no-account first examples.
  - Doc: conformance-checked examples against current spec.
- **Needs:** email-signature-kit, plus-addressing-convention, developer-integrations, url-semantics-and-canonicalization, public-usage-guidelines, conformance-linter
- **Must-nots:**
  - Machine-readable detail never replaces visible disclosure.
  - No example implies payment grants legitimacy/rank/permission.
- **Done when:** all 7 categories present; each example passes conformance check; usable with no account.
- **Open:** which metadata examples to include pre-stabilisation.
- **Effort:** S — one static page with tested examples.

### contribution-ladder — Contribution Ladder
- **What:** Catalogue of bounded ways to help (sign, test, translate, accessibility, themes, engineering, prior-art, moderation, pilots), each rung naming result, reviewer, terms, credit, first step.
- **Builds:**
  - Static "ladder" web page: ≥9 rung families, each with 5 required fields.
  - Policy: authority-bearing rungs listed separately from ordinary rungs.
  - Doc: contribution terms referencing applicable licence.
- **Needs:** licensing-and-mark-policy, moderation-disputes-and-appeals, governance-and-stewardship, translation-governance, accessibility-floor, pilots-and-case-studies
- **Must-nots:**
  - No credit aggregated into score/level/leaderboard/rank.
  - Using the mark never requires contributing.
  - No forced tool disclosure from contributors.
- **Done when:** all rung families present; 5 fields each; entry rungs no-account; credit attribution-only.
- **Open:** reviewer assignment; funded institutional pilots.
- **Effort:** S — one catalogue page.

### community-hub — Community Hub
- **What:** Home for signers, contributors, translators, sector groups, pilots, case studies, and discussions that shows participation without popularity ranking.
- **Builds:**
  - Static "hub" web page composing links to signer/directory/sector/pilot records.
  - Content: canonical no-endorsement notice; accessible low-bandwidth read route.
  - Policy gate: submissions closed until moderation/inclusion/governance/archival/multilingual rules publish.
- **Needs:** opt-in-signatory-registry, public-directory, sector-and-language-directories, pilots-and-case-studies, moderation-disputes-and-appeals, governance-and-stewardship, translation-governance, visibility-and-consent, privacy-and-data-minimisation, accessibility-floor
- **Must-nots:**
  - No follower counts, likes, leaderboards, reputation scores, or paid rank.
  - No algorithmic social feed; discussions moderated and archived.
- **Done when:** participation kinds present/deferred; no-endorsement disclaimer; visibility consent honoured; index file://-safe.
- **Open:** launch discussions vs read-only/link-only.
- **Effort:** M — composite hub + gating rule sets.

### contact-routes — Contact Routes
- **What:** Distinct documented paths for general, media, partnerships, privacy, security, abuse, child safety, and legal, so urgent reports never share one inbox.
- **Builds:**
  - Static "contact" web page with 8 distinct routes.
  - Policy: per-route recipient role, acknowledgement/resolution targets, retention, escalation.
  - Doc: plain-text-first forms; active-content rejection; stable address + redirect plan.
- **Needs:** security-and-abuse-controls, privacy-and-data-minimisation, child-safe-education, continuity-and-namespace-custody, plus-addressing-convention, privacy-preserving-email-relay
- **Must-nots:**
  - No covert tracking or fingerprinting on forms.
  - Media route must not imply endorsement; legal route not published by default.
  - Urgent routes reachable with no account/payment.
- **Done when:** 8 routes distinct with role/targets/retention/escalation; active content blocked; no tracking.
- **Open:** per-route response targets; masked relay aliases.
- **Effort:** S — page + route policy (forms may add effort).

### shared-project-navigation — Shared Project Navigation
- **What:** One navigation contract (exactly 8 destination groups) so every canonical/generated/themed page exposes consistent, accessible routes.
- **Builds:**
  - Doc/API: versioned navigation manifest (canonical URL per group).
  - Engine hook per group (`nav.about` … `nav.contact`) rendered through theme engine.
  - Linter rule: missing/miskeyed/reworded hook = error.
- **Needs:** theme-engine-and-packs, theme-builder-and-starter-kit, conformance-linter, accessibility-floor, translation-governance, flavour-text-localisation, continuity-and-namespace-custody
- **Must-nots:**
  - No ninth group without a versioned spec change.
  - Normative spec must not embed/require the nav set.
  - Themes may restyle but never change destinations/hide groups.
- **Done when:** 8 hooks render everywhere; manifest versioned; linter errors on violations; offline identical.
- **Open:** canonical URL scheme (top-level vs `/nav/`).
- **Effort:** M — manifest + engine hook + linter integration.

### free-floor-covenant — Free-Floor Covenant
- **What:** Versioned public promise that the +AI core (notation, meaning, translations, no-account tools, checking, governance, correction/revocation) stays free, and no change may quietly move the floor.
- **Builds:**
  - Doc: versioned covenant with per-item "free" definition and amendment notice period.
  - Policy: enumerated anti-abuse limits; paid-service free-floor statement template.
  - Linter rule: detect service pages contradicting the current floor.
- **Needs:** governance-and-stewardship, licensing-and-mark-policy, financial-transparency, cost-discipline, continuity-and-namespace-custody, specification-versioning-and-hashing, offline-and-self-hosting-pack, static-first-service-architecture
- **Must-nots:**
  - Floor narrowing never by a service operator unilaterally.
  - Paid services add convenience/scale/support/ops, never legitimacy/rank/permission.
  - Anti-abuse limits may not remove or paywall a floor item.
- **Done when:** versioned covenant + per-item definitions; prior versions archived; linter detects contradictions.
- **Open:** queue threshold for hosted on-demand checks.
- **Effort:** S — versioned covenant doc + statement template.

### public-usage-guidelines — Public Usage Guidelines
- **What:** Concise accurate guidance for placing `+AI`: the meaning, scoping to an artifact, naming the responsible person, and the claims it does not make.
- **Builds:**
  - Static "guidelines" web page (no-account + offline pack).
  - Content: 6 placement examples (name/doc/email/code/presentation/metadata).
  - Content: separation of explanatory guidance from enforceable mark rules.
- **Needs:** use-plus-ai-guide, licensing-and-mark-policy, about-project, portable-declaration-schema, claim-types, regulatory-phrasing-packs
- **Must-nots:**
  - No meaning added beyond the specification.
  - Responsibility claim ≠ verification/certification/endorsement.
  - No ownership/licensing/gating implied over the notation.
- **Done when:** meaning verbatim; examples verified; guidance vs mark rules separated; offline present.
- **Open:** whether to publish a misuse gallery.
- **Effort:** S — one static page.

### licensing-and-mark-policy — Licensing and Mark Policy
- **What:** Assigns an explicit licence to every asset class (code, spec text, translations, themes, schemas, registry data) plus contribution terms and project-name/identity policy.
- **Builds:**
  - Doc: licence manifest mapping each asset class to a recognised licence.
  - Policy: single inbound-equals-outbound contribution policy (no copyright transfer).
  - Policy: mark policy governing project name/visual identity only, forbidding certification framing.
- **Needs:** free-floor-covenant, public-usage-guidelines, governance-and-stewardship, specification-versioning-and-hashing, translation-governance, offline-and-self-hosting-pack, certificates-badges-and-qr
- **Must-nots:**
  - Mark policy grants/claims no ownership of the `+AI` notation.
  - No certification/quality/compliance/trust-mark framing.
  - No silent licence change — versioned, governed, announced.
- **Done when:** licence per asset class; mark policy name-only; legal review obtained or draft-labelled; offline pack carries texts.
- **Open:** specific licence identifiers; data-licence sui generis statement.
- **Effort:** S — policy docs + manifest (pending legal review).

### governance-and-stewardship — Governance and Stewardship
- **What:** Defines the founder-led → fiscal-sponsor → mission-locked-custodian path, decision rights, change discipline, succession, conflicts, and funding-influence controls.
- **Builds:**
  - Page: governance record + decision-rights matrix + appeals route.
  - Doc: phase transition checklists; succession plan + transfer checklist.
  - Policy: conflict/recusal register; JAPER role statement; notice-period schedule (90/180 days).
- **Needs:** free-floor-covenant, licensing-and-mark-policy, financial-transparency, continuity-and-namespace-custody, about-project, founder-story, sponsorship-policy, membership-model, opt-in-signatory-registry, moderation-disputes-and-appeals, changelog-and-rss
- **Must-nots:**
  - Only the specification authority may change normative meaning.
  - Funders/sponsors/members may not buy decision rights or dispute outcomes.
  - No claiming a later governance phase before its checklist completes.
- **Done when:** decision matrix published; succession plan exists; independent appeals route; JAPER role disclosed.
- **Open:** phase triggers; spec-authority form; custodian legal form.
- **Effort:** M — governance docs + record page (foundational).

### financial-transparency — Financial Transparency
- **What:** Defines disclosure of money: operating costs, income categories, funders, in-kind support, conflicts, funded deliverables, public-good vs paid-service split.
- **Builds:**
  - Doc/process: annual report template (period, currency, basis, responsible party).
  - Policy: materiality + privacy thresholds; payment-recipient table.
  - Page: stable-URL report archive with dated errata only.
- **Needs:** governance-and-stewardship, free-floor-covenant, support-and-donations, sponsorship-policy, grants-and-public-benefit-programmes, membership-model, cost-discipline, priority-review-services
- **Must-nots:**
  - Large funders cannot hide behind the privacy threshold.
  - No implying an assurance level the report does not have.
  - Prior reports never altered; corrections as dated errata.
- **Done when:** annual report published; funders/conflicts/deliverables disclosed; archive stable and static-first.
- **Open:** materiality threshold; audit level; accounting basis.
- **Effort:** S — report template + annual process.

### continuity-and-namespace-custody — Continuity and Namespace Custody
- **What:** Protects the apex domain, declaration identifiers, signing keys, exports, and links via custody, renewal, recovery, succession, shutdown, and archival rules.
- **Builds:**
  - Page: namespace inventory (domains, identifiers, keys, exports, custodians, dates).
  - Policy: key rotation/revocation; m-of-n emergency recovery; successor-transfer checklist.
  - Process: tombstones for retired identifiers; wind-down final export; mirrorable snapshots.
- **Needs:** governance-and-stewardship, portable-declaration-schema, opt-in-signatory-registry, specification-versioning-and-hashing, proofs-of-control, declaration-lifecycle, federation-and-mirrors, offline-and-self-hosting-pack, named-subdomains-and-identity-bundles
- **Must-nots:**
  - Declaration identifiers never reused (tombstone, never new declaration).
  - No single person holds sole recovery power.
  - Wind-down requires advance notice + complete final export.
- **Done when:** inventory published; tombstones resolve; recovery procedure; ≥10-yr retention; offline verify path.
- **Open:** m-of-n threshold; registrar choice for apex domain.
- **Effort:** M — custody policies + inventory page + tombstone process.
