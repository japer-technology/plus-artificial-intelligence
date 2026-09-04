# Claim Types — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`claim-types.md`](claim-types.md).
> **Catalogue group:** AI practice registers and discovery.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the claim vocabulary for `+AI` disclosure: four separate claims — a capability is *available*, *generally used*, *approved under an organisation's policy*, or *used on a specific artifact* — together with the optional qualifiers of purpose, review practice, effective date, and status, and the `aiRole` vocabulary that records how AI materially assisted a given artifact. It exists so that disclosure states exactly one fact at a time and never lets a party-level habit masquerade as an artifact-level promise.

## 2. Placement and boundaries

This specification sits in the "AI practice registers and discovery" group and owns the *claim kinds and the `aiRole` role vocabulary*. The [Portable declaration schema](portable-declaration-schema-dsh.md) consumes `aiRole` and the practice claims; the [AI practice register](ai-practice-register-dsh.md), [Approved-tool registers](approved-tool-registers-dsh.md), and [Artifact AI bill of materials](artifact-ai-bill-of-materials-dsh.md) each attach the claim kind appropriate to their scope. Status values for artifact records are owned by [Declaration lifecycle](declaration-lifecycle-dsh.md); this document only references them. It honours the invariant that a declaration is a claim, not a verdict: claim kinds are self-authored statements, labelled `self-declared` until a checker attaches evidence.

## 3. Terminology

- **Claim** — one self-authored statement that a capability or tool has a specific status for a specific scope.
- **Claim kind** — the four-part category of that statement.
- **Scope** — what the claim is about: a party's standing practice, an organisation's policy, or one artifact.
- **`aiRole`** — how AI materially assisted a specific artifact (e.g. drafted, edited, reviewed, generated).
- **Qualifier** — an optional, independently recorded property: purpose, review practice, effective date, status.

## 4. Scope

### 4.1 In scope

- The four claim kinds, their exact meanings, and their separation rules.
- The `aiRole` role vocabulary and its open-extension rule.
- The optional qualifiers and their independence from the claim kind.
- The anti-conflation rule between party-level and artifact-level claims.
- Comprehension-testing obligations for user-facing surfaces.

### 4.2 Out of scope and deferred

- The declaration record that carries `aiRole` (owned by the portable declaration schema).
- The status vocabulary and event mechanics (owned by declaration lifecycle).
- The data objects that store each claim kind (owned by the practice register, approved-tool registers, and artifact bill of materials).
- The tool identifiers claims reference (owned by tool taxonomy).

## 5. Specification

### 5.1 Design goals and principles

1. **One claim, one fact.** Each claim states a single, checkable relationship between a capability and a scope.
2. **Scopes never bleed.** A claim about a party's habits, a policy's permission, and an artifact's provenance are different facts and must stay separate.
3. **Neutral wording.** Claim kinds are descriptive, never honourific; no kind may read as an endorsement or grade.
4. **Optional qualifiers.** Purpose, review practice, effective date, and status enrich a claim but never substitute for the kind.

### 5.2 Normative requirements

1. Tools and records MUST represent the four claim kinds as distinct values — `available`, `generally-used`, `approved`, `used-on-artifact` — and MUST NOT merge or abbreviate them into one "uses AI" flag.
2. Every claim MUST name a subject (a capability or tool, referenced by [Tool taxonomy](tool-taxonomy-dsh.md) identifier where one exists) and MUST be scoped to exactly one of: a party, an organisation policy, or an artifact.
3. `available` MUST mean only that the party has access to the capability; it MUST NOT imply the party uses it.
4. `generally-used` MUST mean the party uses the capability in its ordinary practice; it MUST NOT imply use on any specific artifact.
5. `approved` MUST mean the capability is permitted under a named organisation policy; it MUST reference that policy and MUST NOT imply the policy is followed on any artifact.
6. `used-on-artifact` MUST mean the named artifact's declaration claims the capability materially contributed; it MUST only appear in artifact-scoped records and MUST reference the artifact.
7. No tool MAY infer one claim kind from another: a `generally-used` capability MUST NOT be automatically rendered as `used-on-artifact`, and an `available` capability MUST NOT be automatically rendered as `generally-used`.
8. The `aiRole` field of a declaration MUST use this specification's role vocabulary, which is an open set including `drafted`, `edited`, `reviewed`, `generated`, `analysed`, `translated`, `researched`, `summarised`, `coded`, and `designed`; a role MUST NOT assert that the AI created everything or that no human reviewed the release.
9. The optional qualifiers `purpose`, `reviewPractice`, `effectiveDate`, and `status` MUST be recorded as separate fields, never folded into the claim kind; `status` for artifact records MUST use the [Declaration lifecycle](declaration-lifecycle-dsh.md) vocabulary, while `active`/`retired` apply to register and policy entries.
10. Any surface that shows a party-level claim (`available` or `generally-used`) MUST display, adjacent to it, the notice "this is a practice-level claim and does not state that the tool was used on any particular artifact", rendered as text.
11. The claim vocabulary MUST be stable and versioned: new claim kinds or changed meanings are governed changes announced in the changelog, never silent edits (see governance and stewardship).
12. Before broad launch, user-facing surfaces SHOULD be tested for comprehension of the four distinctions, and the results of that testing SHOULD inform wording; until tested, surfaces MUST favour the full four-way wording over any compressed label.

### 5.3 Data model

```
{
  "kind": "available | generally-used | approved | used-on-artifact",
  "subject": "tool-taxonomy id or free text",
  "scope": "party | organisation-policy | artifact",
  "artifactRef": "required when kind is used-on-artifact",
  "policyRef": "required when kind is approved",
  "purpose": "optional",
  "reviewPractice": "optional",
  "effectiveDate": "optional ISO-8601",
  "status": "optional"
}
```

### 5.4 Interfaces and behaviours

- Practice registers render `available` and `generally-used`; approved-tool registers render `approved`; artifact bills of materials and declarations render `used-on-artifact` and `aiRole`.
- A claim rendered without an attached evidence label MUST be shown as `self-declared` per [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md).
- Importers MUST reject a `used-on-artifact` claim that lacks an `artifactRef`, and an `approved` claim that lacks a `policyRef`.

### 5.5 Lifecycle and operational rules

- A claim's `effectiveDate` and `status` may change over time; for artifact records those changes follow declaration lifecycle events, and for register and policy entries they are `active`/`retired` changes recorded without silent rewriting.
- Claim kinds are not mutable per record: changing what a claim means (e.g. from `generally-used` to `used-on-artifact`) is a new claim on the appropriate scope, not an edit of the old one.

## 6. Free floor, red lines, and invariants

The claim vocabulary is a free-floor commons: using it, including in the no-account builder, must never require payment or an account. This specification enforces the invariant that a declaration is a claim, not verification — claim kinds are self-declared by default and never presented as findings. The anti-conflation rule implements the red line against automated AI-use inference: no surface may derive artifact use from party-level habits, so disclosure stays an act of the signer, not an inference about them.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) consumes `aiRole` and the practice claims in its declaration record.
- [AI practice register](ai-practice-register-dsh.md) stores the `available` and `generally-used` claims.
- [Approved-tool registers](approved-tool-registers-dsh.md) stores the `approved` claim and its policy reference.
- [Artifact AI bill of materials](artifact-ai-bill-of-materials-dsh.md) stores the `used-on-artifact` claim and the `aiRole`.
- [Tool taxonomy](tool-taxonomy-dsh.md) supplies the capability and tool identifiers that claims reference.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) owns the `status` values for artifact records.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) owns the `self-declared` labelling applied to these claims.
- [Governance and stewardship](governance-and-stewardship-dsh.md) owns the change process for this vocabulary.

## 8. Resolution of the seed's "before implementation" concerns

- **Test whether users understand each distinction** — section 5.2 item 12 and section 9 item 9: comprehension testing is a launch obligation, and surfaces favour full four-way wording until tested.
- **Prevent a profile-level tool entry from implying use on every artifact** — section 5.2 items 4, 7, and 10: `generally-used` is scoped to practice, inference across scopes is forbidden, and a mandatory visible notice states the non-implication on every affected surface.

## 9. Acceptance criteria

1. The four claim kinds are stored and rendered as distinct values, never merged into one flag.
2. A `used-on-artifact` claim without an `artifactRef` is rejected.
3. An `approved` claim without a `policyRef` is rejected.
4. A party-level `generally-used` claim never causes an artifact to be shown as `used-on-artifact`.
5. The non-implication notice appears as text on every surface showing a party-level claim.
6. A declaration's `aiRole` uses the role vocabulary and never asserts "created everything" or "no human review".
7. A claim without evidence renders as `self-declared`.
8. The qualifiers are stored as separate fields, not folded into the claim kind.
9. Comprehension testing of the four distinctions is recorded before broad launch.

## 10. Open questions

- Whether the role vocabulary should be a closed list with an extension registry, or an open set with only the forbidden assertions named, is undecided.
- The exact wording of the non-implication notice is undecided pending comprehension testing.
