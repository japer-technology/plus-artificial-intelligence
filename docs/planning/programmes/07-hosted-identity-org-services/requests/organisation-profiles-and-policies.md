# Agent request — organisation-profiles-and-policies: Organisation Profiles and Policies

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md)
> **Source:** spec [`organisation-profiles-and-policies-dsh.md`](../../../../suggestions/organisation-profiles-and-policies-dsh.md) · seed [`organisation-profiles-and-policies.md`](../../../../suggestions/organisation-profiles-and-policies.md)
> **Effort:** L · **Phase:** P3 · **Position:** after hosted-profiles; before workspaces (workspaces are its management backend)
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Domain-control proof: precondition vs stronger label
- **Question:** Is a domain-control proof a precondition for publishing an organisation profile, or only a stronger label on it?
- **Options:** (a) precondition — no organisation profile publishes without a domain-control proof · (b) stronger label only — the profile publishes with self-declared authority, and the `domain-controlled` label appears only when the proof exists · (c) precondition only for showing the `domain-controlled` label, never for the profile
- **Recommended:** (b) — matches "disclosure, not certification" (spec §5.1) and §5.2.9 (a domain is never *rendered* controlled without proof, but publishing is not gated on it).
- **Your choice:** ✏️

### D2 — Non-endorsement wording at launch
- **Question:** Which non-endorsement wording ships at launch, given legal review is still pending?
- **Options:** (a) adopt the shared canonical sentence now, flagged "to be finalised with legal review" · (b) defer public launch until legal review finalises the exact wording · (c) ship a generic placeholder to be replaced later
- **Recommended:** (a) — the visible non-endorsement text is a hard MUST (§5.2.2); publish draft-labelled rather than silently omitting it.
- **Your choice:** ✏️

### D3 — Policy-document translation tier
- **Question:** At which tier are the organisation's declared AI policy documents translated?
- **Options:** (a) T1 normative — only `reviewed` translations published, English governs (R1/R5) · (b) T2 explanatory — reviewed translations with per-document fallback + notice · (c) English-only at launch, no translation path
- **Recommended:** (a) — a declared AI policy is legal-adjacent; only `reviewed` translations may present it (mission: "reviewed translations only for policy text").
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

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
12. Self-check against §4: walk the acceptance criteria against the design and confirm each holds.

## 3. Constraints (must-nots)
- Organisation profile optional — never a prerequisite for any person to declare; the no-account path stays primary.
- Organisation never a sole signer — a human responsibleParty is required on every declaration.
- No trust score, rank, or single verdict; no endorsement of third parties implied.
- Domain never shown as controlled without a control proof; legal authority never claimed without stating its basis.
- Policy revisions are never in-place edits; role changes are recorded events, never silent.
- No individual disclosed without consent; withdrawal is honoured; personal declarations never owned by the organisation.
- Policy text is T1: only `reviewed` translations (R1/R5), never machine-drafts presented as reviewed; chrome follows R1/R4/R12/R13.

## 4. Acceptance criteria
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

## 5. Outputs to produce in the repository
- `docs/services/organisation-profiles-and-policies.md` — organisation profile service design (content model, non-endorsement text, policy-versioning flow, authority evidence, consent model) + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 6. Read before building
- [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md) — mini-plan
- [`organisation-profiles-and-policies-dsh.md`](../../../../suggestions/organisation-profiles-and-policies-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../../../digest/02-declarations-and-profiles.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; chrome R1/R4/R12/R13, policy text T1 reviewed-only)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
