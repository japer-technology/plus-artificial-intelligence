# Development task — experiments-and-metrics: Experiments and Metrics

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md)
> **Source:** spec [`experiments-and-metrics-dsh.md`](../suggestions/experiments-and-metrics-dsh.md) · seed [`experiments-and-metrics.md`](../suggestions/experiments-and-metrics.md)
> **Effort:** M · **Phase:** A–F (Astra-6 overlay; inherited P4 applies only to the mature research programme) · **Position:** registration, consent and comprehension work start in A; later studies precede their expansion gates.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.
> **Schedule:** [Astra-6 execution schedule](#8-astra-6-execution-schedule) — stage gates and reconciliation rules take precedence over inherited P-phase ordering; §2 decisions remain unselected unless already recorded.

## 1. Task details
- **Goal:** Product experiments and outcome measurement (comprehension, trust, CTAs, maintenance burden, WTP, multilingual equivalence) without fingerprinting or only-wins.
- **Why now / risk of deferring:** Consented comprehension and no-account usability studies must precede expansion, not wait for a P4 analytics platform. Establish registration, review, consent and retention first; the observatory and analytics catalogue support later research without becoming prerequisites for basic learning.
- **Features to deliver:**
  - A study registration template + public registry (question, hypothesis, method, data sources, population, duration, success criteria — §5.2 item 1).
  - A consent/retention model (§5.2 item 3).
  - The ordered method preference (voluntary records → consented surveys → public artifacts → bounded observation; fingerprinting/cross-site tracking prohibited — §5.2 item 2).
  - The willingness-to-pay safeguard (never gates a free-floor feature — §5.2 item 4).
  - The multilingual-equivalence method (meaning, not wording, using translation statuses — §5.2 item 5).
  - Review-behaviour measurement without AI-use inference (§5.2 item 6).
  - Equal-prominence publication of negative/null findings (§5.2 item 7).
  - Versioned corrections (§5.2 item 8).
  - Open study artifacts (§5.2 item 11).
  - No rankings/scores of participants (RL-9 — §5.2 item 9).
- **Depends on:** governance-and-stewardship and privacy-and-data-minimisation for early study approval; privacy-respecting-analytics, research-observatory and pilots-and-case-studies for the later studies that consume their outputs. Early consented studies do not depend on a public registry, hosted analytics, or completed pilots.

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Review body for study registrations
- **Question:** Who reviews study registrations before they run (spec §10; digest "Open: review body")?
- **Option (a):** an interim self-registration with a published checklist until governance-and-stewardship designates a research-review body
  - **For:** spec §10 asks for "the review body for study registrations (jointly with governance and stewardship)"; a checklist-gated interim keeps §5.2 item 1's register-before-start rule enforceable without stalling learning while governance forms the body.
  - **Against:** a self-registration checklist is a weaker control than an independent body, so the interim period could admit studies a later designated body would reject.
- **Option (b):** governance must designate the review body before any study runs (studies blocked meanwhile)
  - **For:** a governance-designated review body is the spec's stated direction (§10 "jointly with governance and stewardship") and the strongest quality control.
  - **Against:** it blocks all studies until the body exists, stalling the learning the mini-plan orders for P4 and leaving the registry empty.
- **Option (c):** no review — registration alone is sufficient
  - **For:** registration alone is simple and keeps the process moving.
  - **Against:** it ignores §10's open question and the digest's "review body" item, and removes the human-review control the spec's joint-governance framing implies.
- **Recommended:** (a) — the spec (jointly with governance) wants a review body, but blocking studies until one exists would stall learning; a checklist-gated interim keeps the registration-before-start rule enforceable now.
- **Your choice:** ✏️

### D2 — Third-party recruiters for survey panels
- **Question:** May survey panels use third-party recruiters, and under what privacy terms (spec §10; digest "Open: third-party recruiters")?
- **Option (a):** permitted only under a published privacy-terms template (data-minimisation, consent, no fingerprinting, per privacy-and-data-minimisation)
  - **For:** third-party recruiters are a practical route to the willingness-to-pay panels the spec names (§5.2 item 4); a published privacy-terms template keeps RL-5's no-fingerprinting rule and privacy-and-data-minimisation's data-handling rules binding.
  - **Against:** the template must actually be written and enforced, and any recruiter handling data introduces a third party the project must hold to its no-tracking rules.
- **Option (b):** prohibited — the project recruits its own panels only
  - **For:** self-recruited panels keep all data handling in-project, fully under the no-fingerprinting red line (RL-5) and privacy-and-data-minimisation.
  - **Against:** it forecloses a practical route to survey panels — §10's open question presumes recruiters may be possible — and limits sample reach.
- **Option (c):** deferred until privacy-and-data-minimisation defines the terms
  - **For:** deferring until privacy-and-data-minimisation defines the terms avoids premature policy.
  - **Against:** it blocks consented surveys now (the ordered method preference §5.2 item 2 includes them) and leaves the digest's "third-party recruiters" item unresolved.
- **Recommended:** (a) — recruiters are a practical route for willingness-to-pay panels; a published terms template keeps the no-fingerprinting red line intact.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish the study registration template + public registry (`docs/experiments-and-metrics/registration-template.md` + registry page): question, hypothesis, method, data sources, population, duration, and success criteria (spec §5.2 item 1).
3. Publish the consent/retention model: informed consent, storage per privacy-and-data-minimisation, deletion per the study's published retention schedule (item 3).
4. Record the ordered method preference — voluntary records, consented surveys, public artifacts, then bounded observation of aggregates — with fingerprinting and cross-site tracking prohibited (RL-5 — item 2).
5. Record the safeguards: willingness-to-pay studies never gate a free-floor feature and state answers don't change the floor (item 4); multilingual-equivalence studies test meaning, not wording, using translation statuses (item 5); review-behaviour studies never infer individual tool use (item 6); no rankings/scores/leaderboards (RL-9 — item 9); minors/vulnerable groups defer to child-safe education + specialist review (item 10).
6. Record the publication duties: methods with results, negative/null findings with equal prominence (item 7), versioned corrections (item 8), and open study artifacts where privacy permits (item 11).
7. Apply your §2 D1 (review body) and D2 (third-party recruiters).
8. Self-check against §5: registration before start; no fingerprinting; consent/retention; equal-prominence negatives; versioned corrections; open artifacts.
9. Maintain §8 as the development portfolio's scheduling overlay: record owners, dependency evidence, decisions, gate outcomes and explicit deferrals before handing work to an implementation agent. Register the §8.5 studies before their corresponding release gates.

## 4. Constraints (must-nots)
- No fingerprinting or cross-site tracking (RL-5 — spec §5.2 item 2).
- Negative and null findings are published with the same prominence as positive ones (item 7).
- No rankings, scores, or leaderboards of participants (RL-9 — item 9).
- No willingness-to-pay study gating a free-floor feature (item 4).
- No unregistered results published as studies (item 1, §5.5).
- Corrections are versioned, never silent edits (item 8).

## 5. Acceptance criteria
- [ ] Every study is registered before it starts and the registration is public.
- [ ] No study uses fingerprinting or cross-site tracking.
- [ ] Participant data follows a published consent and retention model.
- [ ] A negative finding is published with the same prominence as a positive one.
- [ ] A willingness-to-pay study states that answers do not change the free floor.
- [ ] A multilingual-equivalence study reports meaning equivalence, not wording similarity alone.
- [ ] A correction to results is issued as a versioned correction.
- [ ] No study produces rankings or scores of participants.
- [ ] Study artifacts are published openly where privacy permits.
- [ ] Every existing request and every additional Astra-6 proposal has a stage, accountable task and explicit build, experiment, review-only or rejected disposition in §8.
- [ ] Early comprehension, local-journey and language-equivalence findings are reviewed before expansion, without waiting for hosted analytics.
- [ ] No stage is marked passed without a named approver, predeclared criteria, linked evidence and a recorded decision; an unchecked criterion or recommendation is not evidence.

## 6. Outputs to produce in the repository
- `docs/experiments-and-metrics/registration-template.md` — study registration template.
- `docs/experiments-and-metrics/consent-and-retention.md` — consent/retention model.
- `site-v2/experiments/` — proposed public study registry (registrations and published results), linked from changelog/RSS; map authored sources and built output under 0003 before implementation.
- This file's §8 — the maintained development schedule and proposal coverage register; not a claim that any scheduled feature exists.

## 7. Read before building
- [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md) — mini-plan
- [`experiments-and-metrics-dsh.md`](../suggestions/experiments-and-metrics-dsh.md) — full spec
- [`07-safety-operations-research.md`](../planning/digest/07-safety-operations-research.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing

## 8. Astra-6 execution schedule

### 8.1 Authority, ownership and scheduling rules

This is the dependency-ordered scheduling overlay for **all 95 existing requests**,
the **three business hypotheses**, **12 practical combinations**, **40 speculative
concepts**, and **eight experiments** in
[`astra-6.md`](../possibilities/astra-6.md). It schedules decisions and bounded
experiments as well as implementation. It is not an instruction to build every
idea, a calendar commitment, a price list, or approval of any deferred service.
Stages are relative milestones: no dates, staffing commitments or durations have
been agreed. Existing task numbers are identifiers, not execution order.

- **Meaning authority:** `site-v2/SPECIFICATION.md`. A task cannot narrow or
  strengthen the canonical mark. The source specifications and selected task
  decisions remain binding within that boundary.
- **Execution precedence:** this section supersedes inherited P0–P4 ordering
  where it conflicts with Astra-6's A–F sequence. Older programme plans remain
  historical context. Existing acceptance criteria still apply; unanswered §2
  choices stay unanswered. Resolve a contradiction explicitly before building.
- **Architecture:** 0003 owns the per-task mapping of old `site/` targets to
  `site-v2` authored sources, generated outputs and intended compatibility.
  Extend the existing engine, packs, translations and navigation. Do not
  hand-edit generated runtime files or assume deployment has switched.
- **Accountability:** 0008 appoints a portfolio coordinator and an end-to-end
  journey owner at R. Each row's owning task supplies a named delivery owner;
  a task ID is not a substitute for an assigned person. The journey owner
  coordinates contracts and tests, not unilateral changes to their meaning.
- **Decision record required at stage entry:** proposal/task ID, named owner,
  assessment author, approver, status maintainer, prerequisite artifacts and
  versions, selected decisions, scope, measurable pass/stop criteria, evidence,
  privacy/retention terms, disposition, and next review trigger. All remain
  **unassigned / not evaluated** until actually recorded.
- **Gate process:** 0008 designates the deciding body; 0050 owns observed adoption
  measures; 0091 owns study methods. The deciding body records thresholds and
  required evidence *before* evaluation. A count is not a threshold, and passing
  prerequisites only permits reconsideration, never automatic launch.
- **Status vocabulary:** scheduled, blocked, approved for bounded experiment,
  approved for implementation, demonstrated, deferred for review, rejected.
  The tables below mean **scheduled, not yet evaluated** unless explicitly
  marked review-only or rejected. No existing implementation is certified here.
- **Dependency discipline:** table dependencies supplement each task's §1.
  Complete the relevant prerequisite artifact, not every later phase of its
  owner. If an inherited dependency points to a later stage, split policy,
  interface, local implementation and hosted rollout explicitly; never waive a
  privacy, security or normative gate to break a cycle.
- **New scope:** the additions in §8.6–§8.8 are explicitly proposed expansions,
  not silently selected §2 decisions. Before an experiment, its owning task
  records the approved bounded scope, acceptance criteria and dependencies;
  otherwise the scheduled deliverable is only a proposal/decision record.
- **Review cadence:** review this register at every stage exit, before each
  optional-service launch, and when a relevant spec, privacy rule, funding
  assumption or independent implementation changes. Record a next trigger for
  every blocked or deferred item so that “later” never means forgotten.

### 8.2 Stages and release gates

| Stage | Scheduled outcome and entry | Exit evidence and decision |
| --- | --- | --- |
| **R — Reconcile** | Before execution: appoint owners, audit existing implementation and target paths, resolve §8.3 seams, split policy/interface/runtime dependencies. Plain-text use of the mark does not wait. | 0008 approves the ownership and decision register; 0003 records source/output/deployment mapping; joint contract owners record unresolved blockers. No contradictory task is handed off as ready. |
| **A — Make meaning usable** | After applicable R decisions: human-layer content, neutral accessible routes, signature guidance, early research safeguards. Audit and extend existing site-v2 machinery rather than rebuild it. | Registered comprehension and language studies show users distinguish assistance, adoption and assurance; neutral/print/keyboard/RTL/CJK routes and measured delivery cost meet the chosen baseline. Persistent misunderstanding blocks expansion, not voluntary plain-text use. |
| **B — Complete the local journey** | After meaning and policy contracts: jointly freeze schema/binding/lifecycle/visibility/labels; build local composer, explicit adoption, exports and checker. | One record completes understand → compose → adopt → export → publish optionally → inspect → correct → leave. An independent local reader preserves claims, unknown/stale states and version references with service access disabled. No account, billing, directory or live network required. |
| **C — Test bounded use** | After relevant B contracts: permissioned pilots, selected adapters, practice registers and candidate experiments. A manual non-service study may start once its own A/B prerequisites pass. | Evidence of a useful release/handover, comprehension, consent, accessibility, language equivalence and published shortcomings; stop or redesign harmful/unhelpful proposals. Candidate selection is explicit, not all-at-once execution. |
| **D — Voluntary public infrastructure** | After bounded demand and applicable B/C evidence: opt-in registry, snapshots, discovery, moderation and one-writer mirrors. | Demonstrate public-field projection, consent, removal across derived data and mirrors, disputes/appeals, fetch safety, operational capacity, stale/offline behaviour and wind-down. No launch on documentation alone. |
| **E — Optional paid operations** | After demonstrated free equivalents and relevant C/D evidence: individually approved coordination, hosting, reporting, storefront or managed-service pilots. A storefront need not wait for an unrelated registry. | Each service has validated demand, cost model, privacy/security/failure assessments, responsible operator, accessible billing/cancellation, isolation where applicable, and an exercised export/downgrade/exit path independent of payment. Paid value cannot change discovery rank or evidence. |
| **F — Ecosystem and deferred review** | After applicable interoperability/stewardship evidence: independent implementations, standards feedback, continuity exercises and separate extension reviews. Preparatory standards research may start in C. | Governed, versioned decision for each extension; independent implementation and semantic review where required. “Keep deferred” and “reject” are valid completed review outcomes. No automatic certification, agentic feature, marketplace or multi-writer federation launch. |

**Critical path and parallel lanes.** R decisions → A usable meaning → B shared
contract freeze → B complete journey → C bounded evidence → D public launch
where needed → E individual service approval → F extension reconsideration.
Rights, governance, accessibility, translation and continuity run alongside
delivery and gate every applicable release. R policy work must not wait for a
later engine rewrite; B local checking must not wait for a hosted registry;
A consented research must not wait for the C/D analytics system; a C experiment
does not itself authorise a D/E service.

### 8.3 Reconciliation work scheduled before handoff

These rows cover all ten seams in Astra-6 §20.2. Their decision records belong
to the listed existing tasks; this register coordinates rather than invents
parallel contracts.

| ID / when | Accountable task and collaborators | Required decision or demonstrated contract |
| --- | --- | --- |
| R1 / R, checked each release | 0003; 0001, 0002, 0018, 0052, 0058, 0063 | Map every affected authored source/output to site-v2; audit existing functionality, deployed `site/` target, migration, old links and rollback. Maintainer assembly is allowed; readers need no build or mandatory font/network service. |
| R2 / R before B freeze | 0021; 0008, 0036, 0037, 0076 | Preserve person **or organisation** adoption allowed by the canonical spec. Additional named-human attribution/authority is a separately stated workflow requirement, not a restriction of ordinary +AI. |
| R3 / R design, B freeze | 0021; 0027, 0036, 0037 | One minimal record: decide `aiRole`, required/optional fields and visibility serialization together; distinguish authoring defaults from deliberate adoption and public-consent decisions. Round-trip one fixture through composer, wizard and checker. |
| R4 / A wording, B issuance | 0037; 0006, 0021, 0040 | Material assistance and adoption do not assert component-by-component review. Draft preparation is not issuance; no plugin, employer or assistant supplies another party's acceptance. |
| R5 / B before checker release | 0028; 0013, 0023, 0026, 0063 | Define local checks of supplied bytes and evidence; fresh remote control, unseen revocations and independent timestamps remain unknown unless evidenced. Hash integrity, key verification, identity and authority stay separate. |
| R6 / R policy, B local, D hosted | 0014; 0024, 0027, 0047, 0049 | Agree public projections, lawful retention/erasure, derived-index/backup/removal propagation and tombstone limits; do not publish sensitive history in permanent Git snapshots or promise recall of independent copies. |
| R7 / R policy, E address gate | 0022; 0034, 0079, 0090 | Old identity-bearing URLs cannot silently refer to a different party after cancellation, rename or expiry. Separate declaration-ID non-reuse from domain/subdomain referent continuity. |
| R8 / A before studies, each later gate | 0008; 0050, 0091 | Name deciding body, required evidence and decision thresholds; measurements report observed samples and uncertainty, not a complete global adopter census. |
| R9 / R ownership, each service gate | 0008; 0003, 0011, 0014, 0031, 0041 | Separate assessment author, approver and status maintainer; agree ownership of privacy, threat, cost and failure-mode assessments. Disclose combined roles; an assessment is not launch approval. |
| R10 / B freeze and integration gate | 0021; 0023–0028, 0036–0037, 0042, 0046, 0061 | Joint versioned schema/binding/lifecycle/visibility/label/adapter freeze and one-record cross-tool demonstration; 0008's journey owner owns integration evidence, not schema semantics. |

### 8.4 Existing portfolio — all 95 requests

Each row links to its execution request. “R/A policy → later implementation”
is a split deliverable, not a requirement to complete a future service early.
Numbers in the prerequisite column refer to requests in this table; the stage
gate and the request's own applicable dependencies both apply.

| ID / owning request | Scheduled delivery | Required predecessor or release condition |
| --- | --- | --- |
| [0001 Accessibility floor](0001-accessibility-floor.md) | R/A policy and existing neutral-route audit; B tools; every later surface | 0003 source map, 0017 language contract; 0002/0018/0052 integrate floor, measure actual bundle cost |
| [0002 Conformance linter](0002-conformance-linter.md) | A existing-engine contract checks; B tool checks; continuous | 0001/0004 policies and existing site-v2 hooks; no wait for a new engine |
| [0003 Static-first service architecture](0003-static-first-service-architecture.md) | R source/deploy reconciliation; A/B commons; D/E service gates | 0008 ownership; local exports and tested failure modes before hosted launch |
| [0004 Specification versioning and hashing](0004-specification-versioning-and-hashing.md) | R/A version and byte contracts; B bindings | 0007 rights, 0010 announcement interface; canonical site-v2 source |
| [0005 Free-floor covenant](0005-free-floor-covenant.md) | R/A policy; enforce D/E/F | 0007 rights and 0008 governance decisions; 0011 limits cannot gate legitimacy |
| [0006 Public usage guidelines](0006-public-usage-guidelines.md) | A explanation/examples; B reader and adoption checks | 0005/0007/0013; R4 and comprehension study |
| [0007 Licensing and mark policy](0007-licensing-and-mark-policy.md) | R/A rights inventory and policy | 0008 approval; distinguish text/code/translations/artwork/content/notation |
| [0008 Governance and stewardship](0008-governance-and-stewardship.md) | R owners/decision process; A publication; every gate | Appoint journey owner, approvers and successors; disclose role overlap |
| [0009 Claim types](0009-claim-types.md) | A vocabulary; B frozen record distinctions | 0004/0013; available, generally used, approved and used-on-artifact remain distinct |
| [0010 Changelog and RSS](0010-changelog-and-rss.md) | A versioned announcements; B lifecycle feed interface | 0004 version contract; no silent changes |
| [0011 Cost discipline](0011-cost-discipline.md) | R/A budget rules; D/E per-service evidence | 0003/0005/0008; public failure modes and measured operating burden |
| [0012 Motivation and prior art](0012-motivation-and-prior-art.md) | A content; C/F update with findings | 0006/0007; preserve plain-text use and honest comparisons |
| [0013 Evidence labels, not trust scores](0013-evidence-labels-not-trust-scores.md) | A meaning; B checker contract; C comprehension | 0004/0009; distinguish claim, observation, integrity, identity and authority |
| [0014 Privacy and data minimisation](0014-privacy-and-data-minimisation.md) | R/A retention/consent; B local; D/E propagation | R6 with 0024/0027/0047/0049; no unconditional permanent personal history |
| [0015 Contact routes](0015-contact-routes.md) | A project contact; B concern/correction route | 0008/0014; no compulsory public personal mailbox or implied response SLA |
| [0016 Financial transparency](0016-financial-transparency.md) | A reporting policy; C funding; E service reports | 0008/0011; disclosed funding cannot buy evidence or meaning control |
| [0017 Translation governance](0017-translation-governance.md) | A terminology/review; B tools; C community tests | 0004/0008; distinguish normative, interface, flavour and user-authored text |
| [0018 Shared project navigation](0018-shared-project-navigation.md) | A audit/extend existing manifest; B journey links | 0001/0003; advertise real destinations, preserve neutral route and language |
| [0019 About project](0019-about-project.md) | A human-layer destination | 0006/0008/0012/0015; no account-first introduction |
| [0020 Tool taxonomy](0020-tool-taxonomy.md) | B optional tool vocabulary; C registers | 0009/0017; unknown or undisclosed tools never invalidate the mark |
| [0021 Portable declaration schema](0021-portable-declaration-schema.md) | R semantics; B joint freeze and fixtures | R2/R3/R10; 0004/0009/0013 and interfaces 0023–0027 |
| [0022 Continuity and namespace custody](0022-continuity-and-namespace-custody.md) | R inventory; B record continuity; D/E/F exercises | 0008/0014; R7, actual custodians, keys, recovery and wind-down |
| [0023 Artifact hashing and binding](0023-artifact-hashing-and-binding.md) | B byte-binding contract and fixtures | 0004/0021; original vs transformed artifact scope explicit |
| [0024 Declaration lifecycle](0024-declaration-lifecycle.md) | R retention decision; B correction/export; D propagation | 0014/0021/0022 and R6; history/current contact separate |
| [0025 Machine-readable assertions](0025-machine-readable-assertions.md) | B record serialization; C adapters | 0004/0009/0021/0023/0024; canonical interpretation survives formats |
| [0026 Proofs of control](0026-proofs-of-control.md) | B evidence/unknown contract; D online challenges | 0013/0014/0021/0031; dated control is not identity or authority |
| [0027 Visibility and consent](0027-visibility-and-consent.md) | R shared decision; B local defaults; D publication | 0014/0021/0024 and R3/R6; unlisted is not private access control |
| [0028 Verification checker](0028-verification-checker.md) | B local inspection; D optional remote checking | 0013/0021/0023–0027; R5, 0031 fetch controls before remote retrieval |
| [0029 Opt-in signatory registry](0029-opt-in-signatory-registry.md) | D only | B contracts, C need, 0006/0014/0027/0030/0031 and 0047 projection |
| [0030 Moderation, disputes and appeals](0030-moderation-disputes-and-appeals.md) | A policy ownership; C pilot process; D operations | 0008/0014/0015/0031; operational rehearsal before public submissions |
| [0031 Security and abuse controls](0031-security-and-abuse-controls.md) | R/A threat ownership; B inputs; D/E service controls | 0003/0008/0014; destination limits, hostile packs/imports, isolation, abuse |
| [0032 Founder story](0032-founder-story.md) | A permissioned human context | 0014/0019; real contributors and limitations, no invented credentials |
| [0033 Contribution ladder](0033-contribution-ladder.md) | A contribution routes; C community expansion | 0007/0008/0017; no compulsory membership or status hierarchy |
| [0034 URL semantics and canonicalization](0034-url-semantics-and-canonicalization.md) | R address policy; B URL contract; E identity continuity | 0004/0014/0021/0022; R7 and explicit exposure preview |
| [0035 Authored links](0035-authored-links.md) | B local preview and safe links | 0021/0027/0031/0034; personalization is not authenticated issuance |
| [0036 No-account declaration builder](0036-no-account-declaration-builder.md) | B reference local journey | Joint 0021–0028 freeze, 0034; optional detail, readable/structured export |
| [0037 Signing wizard](0037-signing-wizard.md) | B guided explicit adoption | 0036 and R3/R4; compose ≠ issue ≠ opt-in publication |
| [0038 Email signature kit](0038-email-signature-kit.md) | A plain guidance; B generated signatures | 0006/0017/0040; 0034/0035 for authored links, client limitations disclosed |
| [0039 Plus-addressing convention](0039-plus-addressing-convention.md) | A accurate guide; C provider tests | 0006/0038; provider-specific routing is not universal or proof of control |
| [0040 Use +AI guide](0040-use-plus-ai-guide.md) | A no-account adoption guide; B complete example | 0006/0013/0017; R4 and reader-comprehension evidence |
| [0041 Red lines and cautious extensions](0041-red-lines-and-cautious-extensions.md) | R/A rejected/deferred register; each gate; F review | 0005/0008/0014/0031; maintain §8.9 dispositions |
| [0042 Artifact passports](0042-artifact-passports.md) | B readable record view; C release bundles | 0021/0023–0028; who/work/date/meaning first, history/freshness visible |
| [0043 Certificates, badges and QR](0043-certificates-badges-and-qr.md) | B accessible renderings; C physical trials | 0013/0034/0042; no assurance implication, visible URL and scope |
| [0044 Multi-format distribution kit](0044-multi-format-distribution-kit.md) | A core artwork/text; B records/print; C kits | 0001/0004/0007/0017; 0042/0043 for declaration formats |
| [0045 AI practice register](0045-ai-practice-register.md) | C local practice; D opt-in views; E managed proposals | 0009/0020/0021/0027; §8.6 stats proposal separate from telemetry |
| [0046 Artifact AI bill of materials](0046-artifact-ai-bill-of-materials.md) | B optional interface; C bounded use | 0009/0020/0021/0023/0025; no inferred exhaustive use or required prompts |
| [0047 Public snapshots and API](0047-public-snapshots-and-api.md) | B projection/export contract; D publication | 0014/0024/0027/0029/0031; R6, private owner export separate |
| [0048 Public directory](0048-public-directory.md) | C bounded discovery study; D free directory | 0029/0030/0045/0047 and consent; ordinary discovery cannot depend on payment |
| [0049 Federation and mirrors](0049-federation-and-mirrors.md) | B synthetic correction fixture; D one-writer mirrors; F wider review | 0014/0022/0024/0047; freshness/removal evidence; multi-writer remains deferred |
| [0050 Public adoption dashboard](0050-public-adoption-dashboard.md) | A metric/threshold separation; C samples; D public view | 0008/0014/0091; 0029/0047 only for registry-derived metrics, not early studies |
| [0051 Privacy-respecting analytics](0051-privacy-respecting-analytics.md) | A measurement boundaries; C/D allowed operational metrics | 0014/0091; no personal provider-usage imports or covert inference |
| [0052 Theme engine and packs](0052-theme-engine-and-packs.md) | A audit/extend existing engine; B tool integration | 0001/0002/0003/0018; authored sources, not cloned pages or generated edits |
| [0053 Flavour-text localisation](0053-flavour-text-localisation.md) | A existing pack audit; B/C new surfaces | 0017/0052; flavour cannot alter canonical claims or hide fallback |
| [0054 Per-theme conformance notes](0054-per-theme-conformance-notes.md) | A evidence audit; every theme release | 0001/0002/0052; metadata presence is not proof of independent review |
| [0055 Sector and language directories](0055-sector-and-language-directories.md) | C community research; D opt-in views | 0017/0048; no implied sector competence, endorsement or paid placement |
| [0056 Community hub](0056-community-hub.md) | A contribution/contact links; C bounded events; D hosted interaction | 0015/0017/0030/0033; consent/moderation before public contributions |
| [0057 Theme builder and starter kit](0057-theme-builder-and-starter-kit.md) | C free authoring kit | A engine/linter contracts, 0007/0052/0053/0054; reviewed pack boundaries |
| [0058 Generator pipeline](0058-generator-pipeline.md) | A audit current assembler; B deterministic integration; C extensions | 0002/0003/0004/0052; byte drift/source checks and intentional deployment |
| [0059 +AI web component](0059-plus-ai-web-component.md) | C optional embedding adapter | 0025/0028/0034/0042; safe inputs and no stronger claim from embedding |
| [0060 Email metadata](0060-email-metadata.md) | B contract; C client experiments | 0025/0038/0039/0042; visible fallback survives metadata stripping |
| [0061 Developer integrations](0061-developer-integrations.md) | B reference consumer; C selected adapters; F interoperability | 0021/0025/0028/0036; drafts require explicit release adoption |
| [0062 Message-bearing subdomains](0062-message-bearing-subdomains.md) | C non-identity messaging; E identity-related dependency review | 0022/0034/0052; DNS/TLS/renewal and message scope; not hosted email |
| [0063 Offline and self-hosting pack](0063-offline-and-self-hosting-pack.md) | B independent local bundle; C low-connectivity test; F archive exercise | 0003/0004/0017/0028/0058; measured bytes, font fallbacks, stale evidence |
| [0064 Child-safe education](0064-child-safe-education.md) | A safety policy; C specialist-approved materials/pilots | 0001/0014/0030/0044/0091; no child profiles or participation leaderboards |
| [0065 Pilots and case studies](0065-pilots-and-case-studies.md) | A pilot design; C bounded releases; E service evidence | 0008/0014/0091 registration, relevant B contracts; permissioned negative findings |
| [0066 Support and donations](0066-support-and-donations.md) | A free support route; C optional funding | 0005/0015/0016; funding cannot buy meaning or priority evidence |
| [0067 Sponsorship policy](0067-sponsorship-policy.md) | A screening policy; C sponsorship | 0005/0008/0016; editorial/meaning/evidence independence |
| [0068 Research observatory](0068-research-observatory.md) | C methods/findings repository; F synthesis | 0007/0014/0091; not a dependency for A comprehension work |
| [0069 Theme gallery and community voting](0069-theme-gallery-community-voting.md) | C gallery; D optional moderated voting | 0030/0052/0054/0057; rank presentations, never people's accountability |
| [0070 Surprise-me theme mode](0070-surprise-me-theme-mode.md) | C optional presentation experiment | 0001/0002/0052/0054; immediate plain route, no below-floor core task |
| [0071 Custom themes](0071-custom-themes.md) | E bespoke service | 0057 free kit, C demand, 0007/0054; same meaning/accessibility checks |
| [0072 Publishing and productivity integrations](0072-publishing-and-productivity-integrations.md) | C manual adapters/pilot; E managed integrations | 0025/0036/0037/0061; explicit adoption, export and narrow permissions |
| [0073 Declaration by email](0073-declaration-by-email.md) | C non-service flow study; F hosted-mail reconsideration | 0026/0031/0060 plus separate 0041 review; no live mail service until approved |
| [0074 Privacy-preserving email relay](0074-privacy-preserving-email-relay.md) | F deferred service review only | 0014/0026/0031/0041; authentication, spam capacity, retention and exit case |
| [0075 Hosted profiles](0075-hosted-profiles.md) | E optional hosting / paid Arsenal hypothesis | 0045/0048 free alternatives, 0022/0027, C demand; downgrade/export/address rules |
| [0076 Organisation profiles and policies](0076-organisation-profiles-and-policies.md) | B authority/policy interface; C manual snapshots; E hosting | R2, 0009/0021/0075; profile/policy is not blanket employee adoption |
| [0077 Approved tool registers](0077-approved-tool-registers.md) | C local policy context; E managed organisation register | 0009/0020/0045/0076; approval ≠ actual use, no employee surveillance |
| [0078 Organisation workspaces](0078-organisation-workspaces.md) | E coordination pilot/service | 0075–0077, 0031 isolation, 0024/0027; authority to stop/escalate/correct, offboarding |
| [0079 Named subdomains and identity bundles](0079-named-subdomains-and-identity-bundles.md) | E naming-only review/service; F mail/external-identity review | R7, 0022/0034/0075; never silently recycle referents; split deferred components |
| [0080 Evidence and compliance exports](0080-evidence-and-compliance-exports.md) | B open export contract; C reconstruction; E managed packaging | 0021/0024/0028/0078 as applicable; export does not establish legal compliance |
| [0081 Membership model](0081-membership-model.md) | E optional stewardship funding | 0005/0008/0016/0022; real custody and free participation; no member legitimacy |
| [0082 Grants and public-benefit programmes](0082-grants-and-public-benefit-programmes.md) | C transparent grant proposal/round; E repeat operation | 0008/0016/0067; fair criteria, conflicts, outcomes and failed experiments |
| [0083 API scale and reliability](0083-api-scale-and-reliability.md) | E paid capacity | D 0047, 0011/0031; open exports, equal evidence and no billing lock-in |
| [0084 Workflow automation services](0084-workflow-automation-services.md) | E approved managed drafts/reminders/reporting | 0078/0077/0028 and 0072; publication remains a separate human decision |
| [0085 Training, consulting and pilots](0085-training-consulting-and-pilots.md) | C manual usefulness trials; E paid help | 0040/0044/0065, C demand; no credential or unsupported expert advice |
| [0086 Publications and merchandise](0086-publications-and-merchandise.md) | A free assets; C samples/margin test; E storefront | 0007/0016/0044, §8.6 H1, privacy/fulfilment/accessibility approval |
| [0087 Provenance interoperability](0087-provenance-interoperability.md) | C mappings; F independent compatibility | 0021/0023/0025/0028/0092; preserve semantics/unknowns, no automatic endorsement |
| [0088 Regulatory phrasing packs](0088-regulatory-phrasing-packs.md) | C needs research; E reviewed optional packs | 0007/0017/0040/0085; dated jurisdiction/expert review, not legal compliance claims |
| [0089 Priority review services](0089-priority-review-services.md) | E bounded turnaround service review | 0005/0013/0028/0030; payment changes turnaround, never evidence/outcomes |
| [0090 Managed hosting and domains](0090-managed-hosting-and-domains.md) | E optional operation; F deferred mail/identity components | 0003/0022/0063/0079, R7; exercised recovery, cancellation and old-link continuity |
| [0091 Experiments and metrics](0091-experiments-and-metrics.md) | R schedule; A early studies; B–F gate evidence | 0008/0014, §2 review decisions; no analytics/observatory cycle |
| [0092 Standards engagement](0092-standards-engagement.md) | C gap/mapping research; F external proposals | 0008/0021/0087; draft clearly labelled, no unsupported recognition claim |
| [0093 Marketplace and matching](0093-marketplace-and-matching.md) | C interviews only; F deferred decision record | 0041, D neutral discovery/moderation, conflicts and business case; no bookings/fees launch |
| [0094 Agentic accountability](0094-agentic-accountability.md) | F deferred sketch/synthetic study and gate record | Reviewed semantics, independent open interoperable implementation, governed approval; recorded principal acceptance remains required |
| [0095 Independent assurance and certification](0095-independent-assurance-and-certification.md) | R standing prohibition; F decision/precondition record only | Meaningful adoption decision, stable specs and independent governance; no credential authorised |

### 8.5 Evidence programme — eight scheduled experiments

All studies use §2's approved review process, registration before recruitment,
informed consent, retention limits, no participant scores, and equal prominence
for negative/null findings. Evidence must meet the predeclared criteria; merely
running a study does not pass a gate.

| ID / Astra-6 §21.2 question | When / owning task | Bounded experiment and evidence | Stop or redesign trigger |
| --- | --- | --- | --- |
| E1 Understand the mark? | A before expansion / 0091 with 0006/0040 | Consenting readers interpret marked examples; record assistance/adoption/assurance distinctions | Persistent certification or blanket-use interpretation |
| E2 Use it without help? | B before local release / 0036 with 0091 | Observe local composition, explicit adoption and export; record completion, scope mistakes and disclosure | Users cannot identify what they adopt or believe accounts are mandatory |
| E3 Does detail help readers? | B/C before richer public views / 0028 with 0091 | Compare mark alone and scoped record; locate responsible party/work and separate facts from claims | More fields increase confidence without comprehension |
| E4 Can correction work? | B local fixture, D mirror gate / 0024 with 0049/0091 | Correct a fictional release through export and compliant mirror; inspect supersession, removal and freshness | An old view appears current or removed private data reappears |
| E5 Is a directory useful? | C study, D launch gate / 0048 with 0065/0091 | Opt-in bounded community completes named discovery tasks | Utility requires ranking people or unnecessary data collection |
| E6 Is paid coordination valuable? | C manual pilot, E gate / 0078 with 0065/0091 | Measure repeated administrative work and voluntary willingness to pay | Demand is only prestige or compulsory employee monitoring |
| E7 Can the service disappear? | B local reconstruction, D/E service gates / 0063 with 0022/0080/0091 | Disable network/service/billing; another tool reconstructs a permitted bundle with honest status limits | Essential interpretation or export requires a proprietary live endpoint or active billing |
| E8 Does translation preserve meaning? | A language baseline, B tools, C communities / 0017 with 0091 | Consenting language communities test key distinctions, mixed-language fallbacks and review provenance | Altered implications or “reviewed” labels without evidence |

Report correct-use examples, no-account completion, independent interpretation,
correction propagation, inclusion findings, operational burden and recurring
service demand with methods, sample coverage and uncertainty (Astra-6 §21.3).
Registrations, theme count, impressions and attention are supporting signals,
never a global census or proxy for an individual's AI use.

**Sector application queue (Astra-6 §10).** 0065 owns candidate selection in C,
after A study safeguards and the relevant B contracts; no row claims actual
adoption or mandates all pilots. The listed collaborator owns domain-specific
scope. High-stakes examples require specialist review before recruitment.

| Candidate / collaborator | Scheduled bounded evidence and boundary |
| --- | --- |
| Independent writing and publishing / 0042 | Reader study of scoped bylines and correction-linked articles; disclosure is not fact-checking |
| Software and open source / 0061 | Package and amend a release with portable records; distinguish commit, PR, package and deployment scopes |
| Research and mathematics / 0068 | Permissioned methods/declaration example; identify adopted work without replacing journal, authorship or data obligations |
| Design, images, film and music / 0044 | Export/republication of visible credits and derivative links; test attribution survival, never imply rights clearance |
| Translation and localisation / 0017 | Linked source/translation release; readers identify language, source version and review status without inherited source accuracy |
| Education / 0064 | Specialist-approved private assignment examples; comprehension without cheating/permission equivalence or default child profiles |
| Professional services / 0085 | Permissioned client-handover simulation with versioned policy; measure clarification work, not legal/financial assurance |
| Healthcare and scientific communication / 0064 with 0068 | Specialist-reviewed non-clinical examples with no patient data; no substitution for clinical responsibility, safety or confidentiality |
| Public administration / 0055 | Fictional or permitted public report; readers find responsible office/correction route; statutory/accessibility/appeal duties unchanged |
| Journalism / 0042 | Story/amendment reader study; distinguish process disclosure from source verification or editorial independence |
| Small organisations and nonprofits / 0045 | Recurring local templates/register/handover trial; prove no-account path suffices without new compliance burden |
| Large organisations / 0078 | Manual release/offboarding exercise before E workspace; preserve attribution and organisational duties, administrative access is not legal authority |
| Libraries, archives and museums / 0063 | Interpret a historical local bundle without its originating service; historical evidence is not current status |

**Distribution queue (Astra-6 §11).** Schedule A visible guidance and B format
contracts, then select C adapters for email/messaging (0038/0039/0060),
documents/presentations/print (0044/0072), websites/newsletters/CMS
(0059/0072), repositories/releases/packages/build artifacts (0061),
images/audio/video/captions/credits (0044/0087), and internal
approval/handovers (0076/0078). Test round-trip scope, explicit adoption,
readable fallbacks and corrections for each selected channel. An installed
plugin, standing preference or detected tool never supplies consent. Live
email infrastructure remains in the F register; plus-address receiving and
sending capabilities must be tested separately.

### 8.6 Three explicit business hypotheses

These are separate scope proposals with independent go/no-go decisions; no
prices, subscription tiers or demand are assumed proven.

| ID / source | Owning task and schedule | Proposal deliverables and expansion gate |
| --- | --- | --- |
| H1 / §14.5 **Merch store** | 0086; A free assets → C samples → E storefront | Evaluate all nine lines: everyday wear; desk/laptop; work/print; public-space signage; books/learning; art collaborations; personalised goods; digital/fabrication files; community/event kits. Compare print-on-demand, preorders, bulk/wholesale, commissions and pop-ups using samples and full margins (manufacture, fees, shipping, tax, refunds/damage, support, accessibility and artist pay) before inventory. Publish seller/supplier identity, rights, materials/sizes/availability, delivery/returns, environmental evidence and what proceeds fund; accessible checkout and alternative ordering; order data separate from profiles. Core artwork and accessible educational equivalents remain free; clothing is support, not blanket adoption; QR needs readable scope/destination. |
| H2 / §14.6 **Paid AI Arsenal directory** | 0075 coordinates 0045/0048/0055/0076–0084; C need study → D free directory → E optional managed pilot | Evaluate free card, individual managed presence, studio/team, institutional/private deployment, community operation and developer capacity separately. Preserve equally discoverable free/manual/self-hosted alternatives, local stats and exports. Test paid maintenance/reporting value without paid placement; publish billing, cancellation, downgrade, export and address-continuity rules before subscriptions. Availability/showcases/saved searches are voluntary; matching, bookings, jobs and transaction fees stay in 0093's F review. |
| H3 / §14.7 **Chosen AI-usage statistics** | 0045 owns separate proposal with 0014/0027/0091; C local prototype → D optional public snapshot → E managed drafts | Approve a distinct consent/data model, not an addition to 0051 telemetry. Cover selected tools/models; requests/sessions/tokens; spending with currency/period/source; declared artifacts; explicitly scoped disclosure ratio; review/correction events; declared workflow mix; uncertain self-estimated time saved; bounded project cost allocation; optional method-labelled resource footprint. Start manual/user-selected exports in a private no-account notebook. Each metric states provenance, definition, coverage/omissions, dates and uncertainty; absent/disconnected data is unknown, not zero. Public card has per-metric/audience preview, separate publication consent, revocation, import deletion and export; suppress sensitive/small team groups. Paid reporting uses identical definitions and cannot auto-publish. Provider connectors require separate 0014/0031/0061 review, minimum read-only revocable authorisation and retention rules; no prompts, conversations, client documents, credentials in records/URLs, telemetry joins, scraping, AI detection or employee/hiring/leaderboard scores. |

### 8.7 Practical combinations — all 12 scheduled

Source: Astra-6 §18.1. Each row is a **proposed bounded experiment**, subject to
§8.1 approval; it is not added silently to the original task's build mandate.

| ID / combination | Accountable task; stage / prerequisites | Smallest experiment, evidence and boundary |
| --- | --- | --- |
| P1 Responsibility receipt | 0042 with 0044; B/C after record freeze | Readable declaration plus portable release bundle; test ordinary copying/conversion preserves scope and version rather than implying authenticity |
| P2 Correction subscription | 0024 with 0010/0015; C feed prototype, D opt-in delivery | Declaration-specific amendment feed; observe notification and freshness without tracking readers or promising responses |
| P3 Release responsibility map | 0046 with 0021/0076; C after lifecycle contract | Link preparation/editing/translation/release scopes; no inherited adoption or invented responsibility percentages |
| P4 Policy-context snapshot | 0076 with 0077; C local, E managed | Versioned policy beside a release; approved tools never imply actual use or compliance |
| P5 Exit-ready evidence bundle | 0080 with 0063; B/C reconstruction, E managed | Records, permitted evidence, events and interpretation guide; another tool reconstructs without private third-party data |
| P6 Reader comprehension lab | 0091 with 0013/0028/0054; A/B then C | Consented plain/themed comparison; publish misunderstandings and negative results, not participant scores |
| P7 Community adoption kit | 0044 with 0017/0056; C after A language/floor review | Reviewed local examples and accessible formats; test cultural usefulness without changing canonical meaning |
| P8 Responsibility handover | 0022 with 0024/0078; C manual, E workflow | Preserve historical adopter separately from current contact; no transfer of personal declarations to employer/successor |
| P9 Independent compatibility demonstration | 0087 with 0061/0063; C trial, F independent evidence | One tool issues, another reads, a third reconstructs; preserve claims/unknowns, no enhanced label merely from agreement |
| P10 Public-interest methods library | 0068 with 0065/0044; C after permissions review | Reusable permissioned disclosure/correction examples; no compulsory profiles or confidential work |
| P11 Low-connectivity edition | 0063 with 0001/0058; B measure, C trial | Lightweight source-derived distribution; measure delivery/offline behaviour, same meaning/versioning, no drifting fork |
| P12 Organisational failure exercise | 0065 with 0030/0078/0080; C manual, E service rehearsal | Fictional incident through reporting, correction, export and offboarding; demonstrate authority to stop/escalate/correct, not merely checklist completion |

### 8.8 Speculative catalogue — all 40 scheduled

Source: Astra-6 §18.2, in source order. IDs X01–X40 are scheduling identifiers
introduced here. **Every row is a proposal/review, not an approved build.**
C means candidate selection and, only after approval, a bounded experiment;
E means a separate commercial-service decision; F means deferred research or
reconsideration, never automatic production. Inherit the source's audience,
funding hypothesis and boundaries; each registration must make those explicit.
Privacy, rights, accessibility and 0091 study safeguards apply to every row;
0064 specialist approval precedes any involvement of children.

| ID / possibility | Accountable task; stage / dependencies | First experiment and go/no-go boundary |
| --- | --- | --- |
| X01 +AI festival | 0056 with 0065/0067; C, E event decision | One small community event; participants author scoped declarations; listing is not endorsement |
| X02 Museum of human–AI collaboration | 0086 with 0065/0007; C, E exhibition decision | Permissioned pop-up showing choices/drafts; exhibit only rights-cleared, consented material |
| X03 AI blooper theatre | 0056 with 0030/0065; C | Consented storytelling night; no private conversations or humiliation of identifiable people |
| X04 Live “show your working” studio | 0065 with 0085; C, E commissions | One moderated demonstration; live performance does not prove the whole workflow |
| X05 +AI radio and documentary series | 0086 with 0032/0067; C pilot, E publication | Permissioned episode with editorial independence, including disagreements/corrections |
| X06 Alternate-reality accountability mystery | 0086 with 0030; C prototype | Short fictional release/correction trail; no real-organisation or emergency impersonation |
| X07 Disclosure board game | 0086 with 0044/0064; C prototype, E physical edition | Print-and-play exercise; education, not a professional competence credential |
| X08 Touring responsibility booth | 0056 with 0014/0001; C | One staffed booth; separate recording/publication opt-ins and non-video alternative |
| X09 Responsibility receipt printer | 0043 with 0042/0037; C, E kit review | Ordinary receipt-printer prototype; explicit adoption before print and non-QR explanation |
| X10 E-ink desk plaque | 0043 with 0045/0027; C, E device review | Manually updated display; freshness visible, no default broadcast of private activity |
| X11 Deliberate-adoption button | 0037 with 0001/0031; C accessibility trial | Tactile button and preview; informed scope/authority, no accidental blanket acceptance |
| X12 NFC studio objects | 0043 with 0034/0007; C, E commissions | Permissioned exhibit; NFC is a pointer, not authenticity proof; readable text alternative |
| X13 Physical correction ribbon | 0086 with 0024/0044; C, E print service | One dated amended exhibit/insert; preserve original context without shaming |
| X14 Makerspace label station | 0043 with 0065/0064; C | Supervised workbench pilot; mark does not certify object safety |
| X15 Solar/offline commons kiosk | 0063 with 0001/0014; C after B offline gate | Battery/local demo; no current-online-status claim or retained visitor data by default |
| X16 Generative +AI art editions | 0086 with 0007/0067; C, E art sales | Small rights-cleared edition with adopted final work; no investment promises or scarcity-based legitimacy |
| X17 AI Arsenal salon | 0056 with 0045/0014; C | Voluntary show-and-tell; no compelled employer-tool/spending/prompt/client disclosure |
| X18 Accountable-creation residency | 0082 with 0065/0067; C proposal | One hosted residency; no certification or funder control of conclusions |
| X19 Human–AI creative jam | 0056 with 0065/0046; C | Bounded team event; state release adopters, no permanent accountability rankings |
| X20 Correction clinics | 0085 with 0024/0056; C, E specialist help | Drop-in clinic; basic correction free, advice within competence |
| X21 Tool-lending and learning library | 0064 with 0007/0085; C | Licensed demonstrations; respect provider terms, no shared credentials or mandatory tracking |
| X22 Commissioned methods cookbook | 0086 with 0068/0007; C, E commissions | Small openly reusable collection; no client leaks or guaranteed outcomes |
| X23 Collaborator exchange | 0093 with 0048/0030; C interviews, F deferred matching review | Needs interviews only; neutral discovery, moderation/conflicts and separate approval before bookings/fees |
| X24 Community experiment fund | 0082 with 0016/0067; C proposal/round | Transparent small funding round with published failures; funding cannot buy labels or meaning control |
| X25 Your year with AI | 0045 with H3/0086; C local, E print/report review | Illustrated report from chosen inputs; private by default, not a competition or universal history |
| X26 AI budget weather report | 0045 with H3/0001; C local, E reporting review | Accessible monthly comparison with currency/coverage; no financial/personal-circumstance inference |
| X27 Workflow wind tunnel | 0085 with 0065/0078; C tabletop, E facilitation | Fictional missed deadlines/tools/staff absence; no compliance or safety certification |
| X28 Permissioned methods remix library | 0068 with 0007/0085; C, E curation review | Small openly reusable recipe set; no private prompts/confidential material or implied provider endorsement |
| X29 Declaration rehearsal room | 0085 with 0037/0091; C role-play | Consented reader explanation practice; rehearsal does not verify the actual work |
| X30 Private tool-switching diary | 0045 with H3/0014; C local prototype | Manual before/after diary; subjective experience, not covert measurement or universal vendor ranking |
| X31 Correction-aware portfolio | 0075 with 0024/0042; C static, E hosting review | Static linked portfolio; withdrawals/freshness visible rather than curated perfect history |
| X32 Closure rehearsal service | 0090 with 0063/0080; C exercise, E service review | Reconstruct one permitted bundle elsewhere; actual portability, no perpetual-hosting promise |
| X33 Personal declaration wallet | 0063 with 0021/0027; F research review | Offline wallet prototype if approved; no mandatory identity system or trust score |
| X34 Private proof of a bounded fact | 0087 with 0014/0026; F research review | Synthetic-data feasibility study; cryptography does not establish correctness/responsible conduct |
| X35 Human-authority control room | 0094 with 0078; F deferred research only | Simulated agents; §17 semantic, governance and independent-implementation gates remain; no production agent extension |
| X36 Supply-chain responsibility atlas | 0087 with 0046/0024; F research review | Permissioned synthetic handover chain; missing links unknown, no inherited responsibility |
| X37 Fifty-year time capsule | 0022 with 0063/0014; F archive research | Durable local bundle and interpretation exercise; preservation rights, consent/withdrawal limits, no fifty-year service guarantee |
| X38 Delay-tolerant declaration network | 0049 with 0024/0063; F deferred network research | Simulated intermittent links; explicit stale data and unresolved conflicts; no unapproved multi-writer production |
| X39 Civic deliberation lab | 0068 with 0091/0014; F specialist research review | Fictional or consented submissions; no political inference or citizen ranking |
| X40 Multi-species or extraterrestrial thought experiment | 0086 with 0007/0041; F fiction proposal only | Commissioned original stories/exhibition; clearly fiction, canonical human responsibility unchanged |

### 8.9 Rejected mechanisms and deferred-service register

0008 approves and 0041 maintains these dispositions from Astra-6 §19. Rejecting
a mechanism does not delete the underlying need or authorise a renamed version.

| Disposition / review point | Mechanisms and owning requests |
| --- | --- |
| **Rejected at R; checked every release** | Paid permission (0005); mandatory registration/government identity/biometrics/approved tools (0006/0021/0026/0077); compulsory prompts/transcripts/AI percentages (0021/0046); inferred “verified human” or “trusted user” status (0013/0028); person-level scores/rankings/leaderboards (0048/0050/H3); declarations issued in others' names (0037/0072/0084/0094); badges implying correctness/safety/legal compliance/endorsement (0043/0080/0095); selling personal disclosure data (0014/0067); pressure on non-participants (0006/0056/0064); proprietary exit-blocking formats (0021/0063/0080); silently changing old declarations' meaning (0004/0024). None has an implementation slot. |
| **F review only: hosted mail** | 0073/0074 and mail portions of 0079/0090. Reconsider only on a separately approved case with consent, authentication, abuse capacity, retention, cost and failure/exit evidence. Ordinary signatures/plus-addressing guidance remain A/C. |
| **F review only: professional matching** | 0093 and H2/X23. Neutral discovery is not booking, hiring, transaction fees or a marketplace. Require moderation, conflicts, operating capacity, consent and demonstrated need. |
| **F review only: broad external identity** | 0026/0079/0090. Require bounded semantics, authority/identity limitations, privacy, recovery, revocation and continuity; ordinary proof-of-control work does not approve broad integration. |
| **F review only: autonomous-agent extensions** | 0094/X35. Preserve delegation ≠ action receipt ≠ adoption; reviewed semantics, independent interoperable implementation, recorded principal acceptance and governed experimental versioning before reconsideration. |
| **F review only: assurance/certification** | 0095. Adoption gate, spec stability and approved independent governance permit a decision, not a credential. Distinct name, assessor independence, appeals, renewal, waivers and separate funding would still precede any launch. |
| **F review only: multi-writer federation** | 0049/0087/X38. The D deliverable is canonical one-writer replication. Reconsider wider exchange only with ownership, collision, authority, lifecycle/conflict, privacy and removal rules plus independent demonstrations. |

At each scheduled review record **remain deferred**, **reject**, or **approve a
separately scoped next experiment**, with rationale, evidence and next trigger.
An unmet gate remains blocked; there is no “build automatically when time permits”.

### 8.10 Portfolio acceptance and maintenance

- [ ] All 0001–0095 requests appear exactly once in §8.4, with staged delivery and prerequisites.
- [ ] All ten §20.2 seams have an accountable reconciliation row and recorded outcome before affected implementation.
- [ ] H1–H3, P1–P12, X01–X40 and E1–E8 retain their source scope, owners, stage and stop/approval boundaries.
- [ ] All 13 sector candidates and six distribution channels have a bounded selection/review slot; none implies adoption, high-stakes suitability or mandatory execution.
- [ ] 0008 has assigned the journey owner, task owners and gate approvers; no assignment or approval is implied by this document.
- [ ] The complete journey and degraded network/operator/billing/key-loss cases are demonstrated using permitted data, not just independent component checklists.
- [ ] Every applicable implementation request has a site-v2 source/output mapping, compatibility decision and existing-check plan under 0003.
- [ ] Rejected mechanisms have no build slot; each deferred item has a governed review trigger, not an automatic release date.
- [ ] Completed work links evidence and records actual decisions without treating recommendations, file presence or unchecked boxes as proof.
- [ ] At each gate, reconcile additions against the source catalogue and this register; new proposals use §18.3's audience, funding, smallest experiment, risks and boundaries.
