# Brainstorm Pass — Findings Register

> Gaps and inconsistencies found while decomposing the programme mini-plans
> into features and decisions. Each finding is either **surfaced** (turned into
> a decision in a request file, noted where) or **unresolved** (needs a human
> call or a corpus fix). Append findings as each programme's brainstorm
> completes.

## F-001 — Programme 1: phase tension in mini-plans
`governance-and-stewardship` Order says "start P0" but Sequencing lists it
under P1; `financial-transparency` Order says "template P0" but Sequencing
lists it in P1. Request files follow the Order line.
**Status:** surfaced in requests (phases recorded); corpus wording could be
aligned later.

## F-002 — Programme 1: "Help" nav destination unassigned
`shared-project-navigation` §7 names owners for About/Use/Community/
Governance/Contact/Support but never states who owns "Help".
**Status:** surfaced as a decision in
`requests/shared-project-navigation.md`; mapped to `contribution-ladder` as
the natural owner — human call.

## F-003 — Programme 1: "Why" page vs About section conflict
The motivation mini-plan says "one static page", but
`shared-project-navigation` §5.2.2 resolves "Why" to a named section of the
About page.
**Status:** surfaced as a decision in `requests/motivation-and-prior-art.md`
(standalone page vs About section).

## F-004 — Programme 1: no top-level LICENSE in the repo
`licensing-and-mark-policy` D1 (code licence) implies the agent must add a
LICENSE file; none exists yet.
**Status:** surfaced as a decision in `requests/licensing-and-mark-policy.md`.

## F-005 — Programme 1: contact addresses unspecified
Only the founder's personal address (`eric.mourant+ai@japer.technology`)
exists; the eight contact routes need canonical addresses and custody.
**Status:** surfaced as D3 in `requests/contact-routes.md`.

## F-007 — Programme 2: claim-types non-implication wording tension
`claim-types` §5.2.10 already drafts the non-implication notice wording, yet
§10 calls the wording "undecided pending comprehension testing".
**Status:** surfaced as a decision in `requests/claim-types.md` (ship the
draft provisionally, refine after testing).

## F-008 — Programme 2: tool-taxonomy has no explicit phase
The mini-plan has no phase tag; P1 was inferred from "parallel with the
schema" (P0 is reserved for the three vocabularies per IMPLEMENTATION-PLAN
§7).
**Status:** recorded in `requests/tool-taxonomy.md` (P1); corpus could add
the tag.

## F-009 — Programme 2: member ordering differs across documents
The programme header, mini-plans, and coverage index §9 list members in
different orders. No content impact; request files are named by slug.
**Status:** cosmetic; noted.

## F-010 — Multi-language standard is a mandatory input
`docs/analysis/best-practice-multi-language.md` (rules R1–R16, tiers T0–T4,
status vocabulary, resolution order, §8 open questions) is the project-wide
draft standard every localised surface must honour. It post-dates the early
brainstorms, so it has been folded in by hand: read-references added to the
Programme 1 requests (shared-project-navigation, use-plus-ai-guide,
free-floor-covenant, public-usage-guidelines) and Programme 2 requests
(tool-taxonomy, claim-types); Programme 3 and 4 subagents were instructed
mid-flight; all later programme prompts carry it as required reading.
**Status:** in effect; see also
[`planning/programmes/README.md`](programmes/README.md) conventions.

## F-011 — Programme 4: public-adoption-dashboard phase tension
Mini-plan Order and Sequencing put the dashboard in P2, but the programme
header says P3 and IMPLEMENTATION-PLAN §7 lists it with P4 research work.
Request filed as P2 (Order line wins); tension flagged in the brainstorm.
**Status:** surfaced in
`programmes/04-registry-and-discovery/requests/public-adoption-dashboard.md`.

## F-012 — Programme 4: registry admission decisions placed
Self-service admission threshold and release cadence (§11) placed as D1–D2 in
`requests/opt-in-signatory-registry.md` with moderation-disputes-and-appeals
(Programme 8) named as joint owner; the hosted-admission gate is the
Sequencing item-4 precondition.
**Status:** surfaced.

## F-013 — Programme 4: cross-programme testability gap
Sector views' acceptance "industry theme consumes identical data + notices"
depends on theme-engine-and-packs (Programme 5, P2-late), so it can only be
asserted structurally at launch.
**Status:** noted in the P4 brainstorm; remains a sequencing risk.

## F-014 — Programme 5: plus-ai-web-component phase tension
Mini-plan Order says "P2/P3"; Sequencing and the programme header say P3.
Request follows the Order line and flags the tension.
**Status:** surfaced in
`programmes/05-presentation-themes-generators/requests/plus-ai-web-component.md`.

## F-015 — Programme 5: flavour status vocabulary mismatch
`flavour-text-localisation` uses `neutral/community` status labels while
`docs/analysis/best-practice-multi-language.md` uses
`reviewed/machine-draft/untranslated/outdated`. The request maps them
(`reviewed`→reviewed with recorded reviewer; `machine`→machine-draft always
labelled) so agents do not invent a third vocabulary; the flavour spec itself
should eventually adopt the standard's terms.
**Status:** surfaced in `requests/flavour-text-localisation.md`; corpus fix
deferred.

## F-016 — Programme 5: accessibility-floor digest location
The full digest entry for accessibility-floor is in
`05-email-distribution-presentation.md`, not `07-safety-operations-research.md`
(which only references it in other specs' Needs lines).
**Status:** request §6 points at digest 05; cosmetic.

## F-017 — Programme 6: within-P3 ordering tension
`declaration-by-email` Order says "after the relay … deliberately the last
email feature" while `privacy-preserving-email-relay` Order says "the last
item", and Sequencing places declaration-by-email before the relay. Requests
follow their own Order lines.
**Status:** flagged in the P6 brainstorm; corpus wording could be aligned.

## F-018 — Programme 6: email header registration undecided
`email-metadata` §5.2.11 requires the header name to be "registered or
namespaced before non-experimental use", but §10 leaves registration
undecided and §11 calls it unregistered. Resolved in the request's D1: keep
`X-Plus-AI` for experimentation, document limits honestly, defer the
registration-body decision to standards-engagement (Programme 10).
**Status:** surfaced in `requests/email-metadata.md`.

## F-019 — Programme 6: message-bearing-subdomains dependency gap
The mini-plan's "Needs" omits `named-subdomains-and-identity-bundles` even
though its Build line says the reserved-label list is shared with named
subdomains (the digest does list the need). The sharing requirement is still
captured in the request instructions.
**Status:** captured in
`requests/message-bearing-subdomains.md`; corpus "Needs" list could add the
sibling spec.

## F-020 — Programme 7: SSO/SCIM watchlist tri-referenced, single-assigned
hosted-profiles §5.2.17, organisation-workspaces §5.2.10 and
workflow-automation-services §5.2.12 all reference the SSO/SCIM watchlist
assessment, but only workspaces owns it — and hosted-profiles ships first, so
it would reference an assessment that does not exist yet. Resolved by
deferring (hosted-profiles D2, workflow §2 note); the programme file never
states the inheritance.
**Status:** surfaced; corpus could state the ownership once.

## F-021 — Programme 7: "MUST but undecided" pattern
Several specs make a value a hard MUST while §10 leaves it undecided:
org-profiles non-endorsement wording (§5.2.2 vs legal review),
approved-tool-registers retention schedule (§5.2.9 vs §10),
evidence-export expiry windows (§5.2.7 vs §10). Each became a decision with a
draft-labelled-or-defer recommendation.
**Status:** surfaced in the respective requests.

## F-022 — Programme 7: workspaces §4.2 vs §10 tension
§4.2 already defers hosting/backups/domains to managed-hosting-and-domains,
yet §10 asks whether workspaces ship before/after managed hosting. Treated
§4.2 as authoritative (ship before) — D3(a).
**Status:** surfaced in `requests/organisation-workspaces.md`.

## F-023 — Programme 8: child-safe-education Order-vs-Sequencing wording
The Order line says "template flows with workspaces P3" but Sequencing's P3
list only enumerates per-service gates and does not restate school-template
flows. No phase disagreement; the Order line was followed and the tension
flagged.
**Status:** flagged in the P8 brainstorm.

## F-024 — Programme 8: jurisdiction erasure stays a legal risk
The jurisdiction-erasure question (whether a tombstone identifier may even
exist under some laws) cannot be resolved by this programme; privacy D3
records it as an escalate-to-legal-review item with declaration-lifecycle
(Programme 2) as joint owner, rather than overriding the append-only
lifecycle.
**Status:** surfaced in `requests/privacy-and-data-minimisation.md`; needs
legal advice before the lifecycle freezes.

## F-025 — Programme 10: red-lines phase tension
Mini-plan Order says `P1/P2`; the programme header and Sequencing both say
P2. Request follows the Order line (`P1/P2`) and flags the tension.
**Status:** flagged in the P10 brainstorm.

## F-026 — Programme 10: "meaningful adoption" vs standards-engagement preconditions
IMPLEMENTATION-PLAN §11 groups standards-engagement under the "meaningful
adoption" gate, but the spec's own §5.2.1 lists only stability / independent
implementations / pilots. Adoption was made a co-precondition
(standards-engagement D1) and the tension noted.
**Status:** surfaced in `requests/standards-engagement.md`.

## F-027 — Programme 10: deferred vocabulary drift
`independent-assurance-and-certification` says `P4-deferred` in its Order
line; `marketplace-and-matching` and `agentic-accountability` say plain
`deferred`. All three mapped to `P4-deferred`; noted in the brainstorm.
**Status:** noted; corpus could align the wording.

## F-028 — Programme 10: digest home-file spread
Members are scattered across digest files (04, 05, 07) because the digest
pass used a different 9-programme partition; each request §6 points at the
correct digest file.
**Status:** cosmetic; noted.

## F-029 — Programme 9: publications-and-merchandise phase wording
Mini-plan Order says `P3/P4`; Sequencing puts it in the P4 group. Phase
recorded as P3/P4 per the Order line; flagged in the brainstorm.
**Status:** flagged.

## F-030 — Programme 9: membership-model §10 vs mini-plan
Spec §10 still asks "before vs after custodian" but the mini-plan Order line
already resolves it (after the custodian path is real). D2 confirms the Order
line.
**Status:** surfaced in `requests/membership-model.md`.

## F-031 — Programme 9: privacy-respecting-analytics collection scope
Spec §5.2.9 leaves the hosted analytics surface's collection scope
underspecified; handled as §2 notes (collection follows Programme 4
dashboards; the k=10 threshold is owned by research-observatory).
**Status:** surfaced in `requests/privacy-respecting-analytics.md`.

## F-032 — Programme 9: divergent screening rubrics risk
sponsorship-policy and grants-and-public-benefit-programmes both delegate
screening rubrics to governance-and-stewardship + red-lines; the risk of two
divergent screens is harmonised in the brainstorm's programme-level decision
7.
**Status:** noted; corpus could define one shared rubric location.

## F-033 — Programme 9: digest 06 contains 16 entries, 10 belong here
Digest `06-funding-and-optional-services.md` covers 16 specs; only 10 belong
to Programme 9 (organisation-workspaces, workflow-automation-services,
evidence-and-compliance-exports are Programme 7). Requests reference only the
10 members.
**Status:** cosmetic; noted.
