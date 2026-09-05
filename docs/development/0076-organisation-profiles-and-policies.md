# Development task — organisation-profiles-and-policies: Organisation Profiles and Policies

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../planning/programmes/07-hosted-identity-org-services.md)
> **Source:** spec [`organisation-profiles-and-policies-dsh.md`](../suggestions/organisation-profiles-and-policies-dsh.md) · seed [`organisation-profiles-and-policies.md`](../suggestions/organisation-profiles-and-policies.md)
> **Effort:** L · **Phase:** P3 · **Position:** after hosted-profiles; before workspaces (workspaces are its management backend)
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Public page disclosing an organisation's versioned AI policy, contacts, teams, practice register, artifact declarations — responsibility stays with named humans.
- **Why now / risk of deferring:** Ships after hosted-profiles and before workspaces, whose public view and management backend it is (mini-plan Order), so deferring blocks the heaviest build in the programme. Risk: the profile drifting into certification/reputation, guarded by the mandatory non-endorsement text and the human-signer rule (brainstorm).
- **Features to deliver:**
  - Public organisation profile + manage view under mandatory visible non-endorsement text.
  - Content model of organisation name and declared context, versioned policy reference, representatives (role/dates/authority evidence), disclosed teams and contacts (each consented), approved-tool register reference, and declaration references — each with its own visibility flag and revision pointer.
  - Versioned, dated, change-noted policy-revision flow (never in-place edits; references the spec version it aligns with).
  - Role/representative change events (offboarded representatives lose edit as of the event; historical edits stay attributed).
  - Domain-control evidence display (a claimed domain never rendered as controlled without a control proof).
  - Member-consent listing and withdrawal (a person's own declarations never owned by the organisation).
  - Human `responsibleParty` on every listed declaration (organisation never a sole signer).
  - Four-way claim-type separation.
  - No trust score/rank/verdict.
- **Depends on:** hosted-profiles, approved-tool-registers, proofs-of-control, visibility-and-consent, declaration-lifecycle

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Domain-control proof: precondition vs stronger label
- **Question:** Is a domain-control proof a precondition for publishing an organisation profile, or only a stronger label on it?
- **Option (a):** precondition — no organisation profile publishes without a domain-control proof
  - **For:** Ensures every published profile carries at least one evidenced control fact, closing the gap between self-declared authority and verifiable control (spec §5.2.7).
  - **Against:** Spec §5.2.9 only forbids *rendering* a domain as controlled without proof — it does not gate publishing on a proof — so a hard precondition would block a legitimate self-declared profile and contradict "disclosure, not certification" (spec §5.1).
- **Option (b):** stronger label only — the profile publishes with self-declared authority, and the `domain-controlled` label appears only when the proof exists
  - **For:** Matches spec §5.2.9 exactly (a claimed domain MUST NOT be rendered as controlled unless the proof exists) while letting disclosure proceed without proof, per the "disclosure, not certification" principle (spec §5.1); it also keeps the digest 02 "Open: domain-proof precondition" item open as the spec left it.
  - **Against:** A profile with no control proof is only self-declared authority, so readers get weaker assurance unless the label is shown; the profile must be careful never to imply control it cannot evidence (spec §5.2.7).
- **Option (c):** precondition only for showing the `domain-controlled` label, never for the profile
  - **For:** Keeps the `domain-controlled` label strictly gated on proof while never blocking a self-declared profile, consistent with spec §5.2.9.
  - **Against:** Functionally duplicates option (b) — the profile publishes without proof and the label is conditional on proof — so it offers no distinct decision; spec §5.2.9 already makes the label conditional on proof.
- **Recommended:** (b) — matches "disclosure, not certification" (spec §5.1) and §5.2.9 (a domain is never *rendered* controlled without proof, but publishing is not gated on it).
- **Your choice:** ✏️

### D2 — Non-endorsement wording at launch
- **Question:** Which non-endorsement wording ships at launch, given legal review is still pending?
- **Option (a):** adopt the shared canonical sentence now, flagged "to be finalised with legal review"
  - **For:** The visible non-endorsement text is a hard MUST (spec §5.2.2), and spec §10 says the exact wording is "to be finalised with legal review", so shipping the canonical sentence draft-labelled satisfies the MUST without blocking launch.
  - **Against:** A draft-labelled sentence is not yet legally reviewed, so it could still be revised after publication, requiring a visible change later (no silent change).
- **Option (b):** defer public launch until legal review finalises the exact wording
  - **For:** Avoids publishing wording that might later need changing, so the first public version is final.
  - **Against:** Spec §5.2.2 makes the text a hard MUST, and deferring the whole launch over wording would delay the profile that workspaces depend on; nothing in spec §10 requires legal review to block launch — it only flags the wording as pending.
- **Option (c):** ship a generic placeholder to be replaced later
  - **For:** Quick to ship; unblocks launch with minimal effort.
  - **Against:** A generic placeholder risks reading as a weaker disclaimer than the mandatory non-endorsement text spec §5.2.2 requires, and replacing it later is a change to a normative surface.
- **Recommended:** (a) — the visible non-endorsement text is a hard MUST (§5.2.2); publish draft-labelled rather than silently omitting it.
- **Your choice:** ✏️

### D3 — Policy-document translation tier
- **Question:** At which tier are the organisation's declared AI policy documents translated?
- **Option (a):** T1 normative — only `reviewed` translations published, English governs (R1/R5)
  - **For:** A declared AI policy is legal-adjacent, so only `reviewed` translations may present it (mission: "reviewed translations only for policy text"); R1/R5 keeps English as the source of truth and stops unreviewed machine drafts being presented as the policy.
  - **Against:** Reviewed-only translation is slower and costlier to publish than a per-document fallback, so policy documents may lag behind chrome in other languages.
- **Option (b):** T2 explanatory — reviewed translations with per-document fallback + notice
  - **For:** A per-document fallback lets the organisation publish a policy in more languages sooner, with a notice where a review is pending.
  - **Against:** For legal-adjacent policy text the mission standard is reviewed-only, and a fallback that presents an unreviewed translation risks misstating the normative policy (R5).
- **Option (c):** English-only at launch, no translation path
  - **For:** Zero translation risk at launch; English is the R1 source of truth.
  - **Against:** Leaves no path for non-English readers of a legal-adjacent policy, which the multi-language standard exists to address, and forgoes the reviewed-translation route the mission explicitly permits.
- **Recommended:** (a) — a declared AI policy is legal-adjacent; only `reviewed` translations may present it (mission: "reviewed translations only for policy text").
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Design the organisation profile as a presentation object over owned records (portable-declaration-schema, approved-tool-registers, hosted-profiles), defining no new record type; document the content model (organisation name and declared context, versioned policy reference, representatives with role/dates/authority evidence, consented teams/contacts, approved-tool register reference, declaration references — each with visibility flag and revision pointer).
3. Specify the public view (declared context, versioned policy, teams, and declarations with human signers and statuses, all under the standing non-endorsement text per D2) and the manage view (policy revisions, role changes, and domain claims as recorded events, never silent edits).
4. Enforce the human-signer rule: the `responsibleParty` of every listed declaration is a human; the organisation appears only as `organization` context and is never a valid signer.
5. Specify the versioned policy-revision flow: every policy revision is a new dated version with a change note and a reference to the normative spec version it aligns with.
6. Specify authority evidence per D1: a human representative is named; factual control evidence (e.g. `domain-controlled`) is presented and labelled by strength per evidence-labels-not-trust-scores; legal authority is never claimed without a stated basis.
7. Specify role/representative change events (offboarded representatives lose edit as of the recorded event; historical edits stay attributed) and domain-control evidence display (a claimed domain never shown as controlled without a proof).
8. Specify member-consent listing and withdrawal: no individual appears as contact/team member/signer without consent, each can withdraw, and their own declarations remain their own.
9. Separate the four claim types (available, generally-used, approved-under-policy, used-on-artifact); an approved-tool entry never implies use on every artifact; no trust score, rank, or single verdict; the profile never implies endorsement of third parties.
10. Write `docs/services/organisation-profiles-and-policies.md` including the Programme 8 gates: static-first failure-mode statement, threat model, privacy analysis, and per-record cost model; document archival/tombstoning per continuity-and-namespace-custody on wind-down.
11. Give the page chrome and the policy documents a localisation path per D3 and the multi-language standard (English source R1, per-key fallback R4 for chrome, resolution order R12, English crawler/no-JS default R13); team/member/register content is T4 and never machine-translated.
12. Self-check against §5: walk the acceptance criteria against the design and confirm each holds.

## 4. Constraints (must-nots)
- Organisation profile optional — never a prerequisite for any person to declare; the no-account path stays primary.
- Organisation never a sole signer — a human responsibleParty is required on every declaration.
- No trust score, rank, or single verdict; no endorsement of third parties implied.
- Domain never shown as controlled without a control proof; legal authority never claimed without stating its basis.
- Policy revisions are never in-place edits; role changes are recorded events, never silent.
- No individual disclosed without consent; withdrawal is honoured; personal declarations never owned by the organisation.
- Policy text is T1: only `reviewed` translations (R1/R5), never machine-drafts presented as reviewed; chrome follows R1/R4/R12/R13.

## 5. Acceptance criteria
- [ ] A person can issue a declaration with no organisation profile involved.
- [ ] The profile displays the mandatory non-endorsement text.
- [ ] A policy revision appears as a new dated version, never an in-place edit.
- [ ] An approved-tool entry is labelled with its claim type and never implies use on every artifact.
- [ ] Every listed artifact declaration names a human responsible party.
- [ ] A claim of organisation authority shows its factual evidence and basis, or is labelled self-declared.
- [ ] An offboarded representative loses edit rights as of the recorded event.
- [ ] A domain is shown as controlled only when a control proof exists.
- [ ] No individual appears as a member or contact without consent, and withdrawal is honoured.
- [ ] No profile surface shows a trust score or single verdict.
- [ ] The failure-mode statement, threat model, privacy analysis, and cost model are published (Programme 8 gate).

## 6. Outputs to produce in the repository
- `docs/services/organisation-profiles-and-policies.md` — organisation profile service design (content model, non-endorsement text, policy-versioning flow, authority evidence, consent model) + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 7. Read before building
- [`07-hosted-identity-org-services.md`](../planning/programmes/07-hosted-identity-org-services.md) — mini-plan
- [`organisation-profiles-and-policies-dsh.md`](../suggestions/organisation-profiles-and-policies-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../planning/digest/02-declarations-and-profiles.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; chrome R1/R4/R12/R13, policy text T1 reviewed-only)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
