# Programme 10 — Research, Standards, and Deferred Scope

> The learning layer (pilots, case studies, experiments) and the deliberately
> gated futures: standards engagement, provenance interoperability,
> regulatory phrasing packs, and the red-lined/deferred ideas that must NOT be
> built until their own published preconditions are met.

- **Members (9):** pilots-and-case-studies, experiments-and-metrics,
  marketplace-and-matching, agentic-accountability,
  red-lines-and-cautious-extensions, independent-assurance-and-certification,
  provenance-interoperability, standards-engagement, regulatory-phrasing-packs
- **Agent requests:** [`10-research-standards-deferred/`](10-research-standards-deferred/) — brainstorm + one agent request per suggestion.
- **Effort:** 5 × S (red lines, marketplace, agentic, assurance, standards
  engagement), 4 × M (pilots, experiments, provenance, phrasing packs)
- **Prerequisites:** Programme 4 (data to study), Programme 2 (formats to
  map), Programme 1 (governance that owns the gates)
- **Phase:** P2 (pilots, red lines) → P3 (provenance, phrasing packs) →
  P4 (experiments, standards engagement, and re-opening the deferred register
  only via its gates)

## Mini-plans

### red-lines-and-cautious-extensions — Red Lines and Cautious Extensions
- **Goal:** Single source of truth for what must never be built (RL-1…RL-9) plus a watchlist of high-risk extensions gated by published assessment.
- **Build:** red-line list with canonical wording and stable identifiers; watchlist + assessment template (proposal, risk, safeguards, sunset, approving body).
- **Needs:** free-floor-covenant, governance-and-stewardship (the approving body), moderation-disputes-and-appeals.
- **Must-nots:** never charge for use of the mark; never require registration/identity; never require tool/prompt disclosure; never sell placement or personal data; never biometrics; never auto-publish in another's name; never AI as responsible party; never reputation scores.
- **Done when:** stable identifiers; no surface violates; watchlist items assessed/deferred; sibling specs cite RL IDs.
- **Effort:** S. **Order:** P1/P2 — publish before the surfaces exist that might tempt violations; every later spec review cites its RL IDs.

### pilots-and-case-studies — Pilots and Case Studies
- **Goal:** Small bounded pilots with creators/teams/schools/publishers plus published outcomes, failures, templates, and case studies.
- **Build:** pilot plan/close-out template; consent + publication-approval process; reusable templates/checklists published openly.
- **Needs:** experiments-and-metrics (measurement), child-safe-education (school pilots), sector-and-language-directories (audience), community-hub (publication).
- **Must-nots:** no participant identified without recorded, specific approval; no rankings/certification framing of participants; minors require child-safe education before start.
- **Done when:** plan before start; failures published; templates open + accessible; named end point.
- **Effort:** M. **Order:** P2 — THE-PLAN §13's institutional pilots need this methodology; it feeds Programme 9's training/consulting.

### provenance-interoperability — Provenance Interoperability
- **Goal:** Map +AI declarations to C2PA, IPTC, Schema.org, and signature formats without reimplementing them.
- **Build:** versioned field-mapping document per external format; offline reference implementations for C2PA/IPTC/Schema.org mappings; checker integration showing external provenance as a distinct labelled section.
- **Needs:** portable-declaration-schema, artifact-hashing-and-binding, machine-readable-assertions, evidence-labels-not-trust-scores.
- **Must-nots:** no mapping production-facts ↔ responsibility conflation; no claiming C2PA validation the project did not perform; unaligned IPTC cases recorded "no equivalent", never forced.
- **Done when:** mapping doc per format; distinct checker section; offline reference impls; versioned + changelogged.
- **Effort:** M. **Order:** P3 — after the spine stabilises; advisory mappings first (core-extensions §1.5's "document first, integrate later").

### regulatory-phrasing-packs — Regulatory Phrasing Packs
- **Goal:** Jurisdiction/sector example texts showing a declaration beside regulatory obligations — information, not legal advice.
- **Build:** phrasing-pack format (professional reviewer metadata, label, coverage notes); static rendering/download; changelog/RSS update notifications.
- **Needs:** portable-declaration-schema, public-usage-guidelines, sector-and-language-directories (placement), translation-governance.
- **Must-nots:** never certifies or implies compliance; pack content never changed by payment; no advertising or paid placement; outdated labelled.
- **Done when:** professional review recorded; label everywhere; coverage gaps disclosed; withdrawal dated.
- **Effort:** M. **Order:** P3 — after the schema, so packs quote the real field names; EU AI Act Article 50-style examples first.

### experiments-and-metrics — Experiments and Metrics
- **Goal:** Product experiments and outcome measurement (comprehension, trust, CTAs, maintenance burden, WTP, multilingual equivalence) without fingerprinting or only-wins.
- **Build:** study registration template + public registry; consent/retention model; open study artifacts (instruments, scripts).
- **Needs:** privacy-respecting-analytics, research-observatory, pilots-and-case-studies, privacy-and-data-minimisation.
- **Must-nots:** no fingerprinting or cross-site tracking; negative findings published with equal prominence; no rankings; no WTP study gating a free-floor feature.
- **Done when:** registration before start; consent + retention; corrections versioned; artifacts published.
- **Effort:** M. **Order:** P4 — after the observatory and analytics catalogue define what measurement is even allowed.

### standards-engagement — Standards Engagement
- **Goal:** When/how to engage standards bodies — only after stability, independent implementations, and pilots — to improve interop without handing over meaning.
- **Build:** engagement policy + mandate template (documents, fora, representatives, forbidden zone); forum-selection criteria + exit safeguards.
- **Needs:** governance-and-stewardship, provenance-interoperability (the interop agenda), pilots-and-case-studies (the stability evidence), financial-transparency.
- **Must-nots:** no engagement before all preconditions recorded met; never propose the normative meaning itself; reject IP terms assigning formats/mark to a third party.
- **Done when:** mandate published; preconditions recorded; IP reviewed; exit preserves rights.
- **Effort:** S. **Order:** P4 — by design, the precondition recording is the deliverable until real use stabilises the model (README's own instruction).

### independent-assurance-and-certification — Independent Assurance and Certification
- **Goal:** Conditions under which a distinct future assurance programme may exist — never redefining ordinary +AI as inferior or paid-only.
- **Build:** policy doc: precondition gates; distinct credential name/mark; criteria versioning; assessor independence; appeals/renewal; liability disclaimers; fee waivers; governance separated from spec authority and service revenue.
- **Needs:** evidence-labels-not-trust-scores, verification-checker, governance-and-stewardship, financial-transparency, red-lines-and-cautious-extensions.
- **Must-nots:** not started before all three preconditions recorded met; baseline mark's freedom and validity untouched; payment never changes criteria/outcomes/recorded evidence.
- **Done when:** no credential exists today; preconditions recorded before any build; credential distinct from +AI.
- **Effort:** S. **Order:** P4-deferred — the spec's own acceptance is "no credential exists"; ship only the decision doc and the precondition record.

### marketplace-and-matching — Marketplace and Matching
- **Goal:** Future opt-in collaborator/mentor/job/project/procurement discovery over directory data — only after meaningful adoption, never an endorsement market.
- **Build:** matching policy + assessment gate; opt-in matching consent; neutral ordering + liability disclaimer; sunset condition.
- **Needs:** public-directory (the data), proofs-of-control, moderation-disputes-and-appeals, red-lines-and-cautious-extensions.
- **Must-nots:** no ship before adoption + assessment + inheritance preconditions; no competence/quality/endorsement display; no advertising; no paid placement.
- **Done when:** preconditions recorded; opt-in separate; neutral ordering; sunset condition present.
- **Effort:** S. **Order:** deferred — decision/policy doc only until adoption metrics (Programme 4 dashboard) clear the gate.

### agentic-accountability — Agentic Accountability
- **Goal:** Future bounded exploration of declarations for delegated AI-agent actions, anchored on human responsibility and acceptance.
- **Build:** delegation-record schema (principal, agent, scope, expiry, escalation, revocation); action receipts as dated evidence labels; failure semantics.
- **Needs:** portable-declaration-schema, declaration-lifecycle, evidence-labels-not-trust-scores, proofs-of-control, red-lines-and-cautious-extensions.
- **Must-nots:** agent never recordable as the responsible party; no publication/deployment without the principal's recorded acceptance; no ship before all preconditions (documented, independent impl, governed).
- **Done when:** no feature today; delegation fields defined; principal acceptance; experimental-labelled extension.
- **Effort:** S. **Order:** deferred — schema sketches only; re-opened by the red-lines watchlist assessment when agent use stabilises.

## Sequencing

1. **P2:** red-lines-and-cautious-extensions → pilots-and-case-studies.
2. **P3:** provenance-interoperability → regulatory-phrasing-packs.
3. **P4:** experiments-and-metrics → standards-engagement (precondition recording); independent-assurance, marketplace-and-matching, and agentic-accountability stay decision-docs behind their gates.

## Risks

- **Premature standards engagement:** the README and the spec agree — engagement before stability would freeze the model while it is still learning. The policy's "forbidden zone" must be enforceable, or a single eager partner could capture the mark's meaning.
- **Deferred-register drift:** three of these specs exist to NOT be built; without the red-lines doc as the single gate, well-meaning contributors will build them anyway.
- **Pilot publication ethics:** publishing failures is the point, but participant privacy is absolute; the close-out template's approval step is the control — never skip it for a good story.
