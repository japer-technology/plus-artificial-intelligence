# Organisation Profiles and Policies — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`organisation-profiles-and-policies.md`](organisation-profiles-and-policies.md).
> **Catalogue group:** Declarations and profiles.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the organisation profile: a public page where an organisation discloses its declared AI policy, responsible contacts, teams, public practice register, and artifact declarations — while making precise that one profile, one policy, or one register makes no organisational work trustworthy, and that responsibility for any given artifact still rests with a named human signer.

## 2. Placement and boundaries

An organisation profile is a distinct entity from a person's [Hosted profile](hosted-profiles-dsh.md), and it complements rather than replaces the private [Organisation workspaces](organisation-workspaces-dsh.md) that manage teams and approvals. It renders declarations whose records are owned by [Portable declaration schema](portable-declaration-schema-dsh.md) and an approved-tool register owned by [Approved-tool registers](approved-tool-registers-dsh.md). It defers the question of proving organisation authority to [Proofs of control](proofs-of-control-dsh.md), keeping authority as a separate, stronger question than artifact-level responsibility.

## 3. Terminology

- **Organisation profile** — the public page disclosing an organisation's AI context.
- **Representative** — a human authorised to speak for the organisation on the profile.
- **Organisation authority** — the separate, stronger question of who may legally act for the organisation.
- **Declared AI policy** — the organisation's versioned statement of its AI stance and rules.
- **Approved-tool register** — the organisation's disclosed set of approved capabilities and their conditions.

## 4. Scope

### 4.1 In scope

- The profile's content model and its non-endorsement language.
- Authority to represent the organisation and role-change handling.
- Domain claims and policy versioning.
- Member consent for disclosure.
- The boundary between organisational policy and artifact declarations.

### 4.2 Out of scope and deferred

- Legal determination of organisation authority (out of scope; only factual evidence is presented).
- Private team, role, and approval mechanics (organisation workspaces).
- The approved-tool register's full field set (approved-tool registers).
- Person-level profiles (hosted profiles).

## 5. Specification

### 5.1 Design goals and principles

1. **Disclosure, not certification.** The profile states what the organisation declares; it certifies nothing.
2. **Humans still sign.** Organisational policy never replaces a named human signer on an artifact declaration.
3. **Authority is evidenced, not assumed.** Claims to represent the organisation are presented with whatever control evidence exists, labelled by strength.
4. **Policy is versioned.** A policy change is a visible revision, never a silent edit.
5. **Consent first.** No individual is disclosed as a member or contact without their consent.

### 5.2 Normative requirements

1. The organisation profile MUST be optional and MUST NOT be a prerequisite for any person to issue a declaration; the no-account path remains free.
2. The profile MUST state, in visible text, that it discloses the organisation's declared context and does not make the organisation's work trustworthy, endorsed, or verified.
3. A declared AI policy MUST be versioned and dated, and each revision MUST be published as a new version with a change note rather than edited in place; the policy MUST reference the normative specification version it aligns with.
4. The profile MUST separate the four claim types: a capability being *available*, *generally used*, *approved under policy*, and *used on a specific artifact* — and an approved-tool entry MUST NOT imply use on every artifact, per [Claim types](claim-types-dsh.md).
5. Artifact declarations listed on the profile MUST each carry their own human responsible party, scope, AI role, and status; the profile MUST NOT present an organisational policy as if it were that declaration's signer.
6. The `responsibleParty` of any declaration MUST remain a human being; the organisation MAY appear as the `organization` context field, but the organisation alone is not a valid signer for the `+AI` promise.
7. Authority to represent the organisation MUST be asserted by naming a human representative, and MUST be presented with whatever factual control evidence exists (e.g. `domain-controlled`), labelled per [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md); legal authority MUST NOT be claimed without stating its basis, and the profile MUST NOT imply legal authority it cannot evidence.
8. A change of representative or role MUST be recorded as a versioned event with a date; offboarded representatives MUST lose the ability to edit the profile as of that event, and historical edits MUST remain attributed.
9. A domain claim by the organisation MUST be evidenced through the control proofs owned by [Proofs of control](proofs-of-control-dsh.md); a claimed domain MUST NOT be rendered as controlled unless the proof exists.
10. Publishing an individual as a contact, team member, or signer MUST require that individual's consent, and each such person MUST be able to withdraw their listing; their own declarations remain their own and are never owned by the organisation.
11. The profile MUST NOT display a trust score, rank, or single verdict for the organisation or its work, and MUST NOT use the organisation profile to imply endorsement of third parties.
12. The profile MUST honour the visibility and consent rules ([Visibility and consent](visibility-and-consent-dsh.md)) for every field, including organisation-only visibility for internal disclosures.

### 5.3 Data model

The organisation profile is a presentation object referencing owned records. Its content model is: an organisation name and declared context, a versioned policy reference, a list of representatives (each with role, dates, and authority evidence), disclosed teams and contacts (each with consent), an approved-tool register reference, and a list of declaration references. Each field carries its own visibility flag and edit-revision pointer; the referenced records keep their own schemas.

### 5.4 Interfaces and behaviours

- **Public view:** renders the declared context, the versioned policy, the disclosed teams, and the declarations with their human signers and statuses, under the standing non-endorsement text.
- **Manage view:** representatives edit the profile; policy revisions, role changes, and domain claims are recorded events, not silent edits.
- **Consent:** member listings are added only with the member's consent and removable by the member.

### 5.5 Lifecycle and operational rules

Policy versions and representative changes are append-only recorded events. Depublishing the organisation profile does not revoke the declarations it listed; those follow the declaration lifecycle. When an organisation ceases to exist or its authority lapses, the profile is archived or tombstoned per [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md), without deleting the individual declarations.

## 6. Free floor, red lines, and invariants

The organisation profile is an optional convenience; the free no-account path and individual declaration issuance remain free and never depend on it. The human-signer rule enforces the red line against transferring responsibility to the machine, and the non-endorsement and no-score rules keep the profile from becoming a reputation or certification channel. The versioned-policy rule is the no-silent-change invariant applied to organisational disclosure.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the declaration records and the `organization` context field.
- [Claim types](claim-types-dsh.md) owns the four-way claim separation this profile must preserve.
- [Approved-tool registers](approved-tool-registers-dsh.md) owns the policy register the profile discloses.
- [Organisation workspaces](organisation-workspaces-dsh.md) owns the private team, role, and approval mechanics behind this public view.
- [Hosted profiles](hosted-profiles-dsh.md) is the person-level sibling this entity must remain distinct from.
- [Proofs of control](proofs-of-control-dsh.md) owns domain control and the authority-evidence methods.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) owns how authority evidence is labelled.
- [Visibility and consent](visibility-and-consent-dsh.md) owns per-field visibility and organisation-only mode.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) owns the statuses of the listed declarations.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md) owns archival of the profile.

## 8. Resolution of the seed's "before implementation" concerns

- **Authority to represent the organisation** — section 5.2 item 7: a named representative with factual evidence, labelled by strength.
- **Role changes** — section 5.2 item 8: recorded versioned events, offboarding revokes editing.
- **Domain claims** — section 5.2 item 9: evidenced via proofs of control, never asserted unproven.
- **Policy versioning** — section 5.2 item 3: versioned, dated, change-noted revisions.
- **Member consent** — section 5.2 item 10: consent required and withdrawable.
- **Precise non-endorsement language** — section 5.2 items 2 and 11: mandatory visible text and a no-verdict rule.

## 9. Acceptance criteria

1. A person can issue a declaration with no organisation profile involved.
2. The profile displays the mandatory non-endorsement text.
3. A policy revision appears as a new dated version, never an in-place edit.
4. An approved-tool entry is labelled with its claim type and never implies use on every artifact.
5. Every listed artifact declaration names a human responsible party.
6. A claim of organisation authority shows its factual evidence and basis, or is labelled self-declared.
7. An offboarded representative loses edit rights as of the recorded event.
8. A domain is shown as controlled only when a control proof exists.
9. No individual appears as a member or contact without consent, and withdrawal is honoured.
10. No profile surface shows a trust score or single verdict.

## 10. Open questions

- Whether a domain control proof should be a precondition for publishing an organisation profile, or merely a stronger label, is undecided.
- The exact non-endorsement wording is to be finalised with legal review.
