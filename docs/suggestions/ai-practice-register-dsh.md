# AI Practice Register — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`ai-practice-register.md`](ai-practice-register.md).
> **Catalogue group:** AI practice registers and discovery.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the practice register: a voluntary, portable, neutral data object in which a party — a person or an organisation — describes its standing AI capabilities, tools, purposes, data rules, and human review practices. It exists so that a party can disclose *how it works with AI* once, at party level, separately from any single artifact declaration, and so that disclosure never demands prompts, provider accounts, or private operational detail. The optional presentation name "AI Arsenal" is flavour text over this object and has no normative weight.

## 2. Placement and boundaries

This specification sits in the "AI practice registers and discovery" group and owns the *standing-practice data object*. It feeds, but does not replace, the artifact-scoped record owned by [Portable declaration schema](portable-declaration-schema-dsh.md); a register describes a party's general habits, never a specific artifact. It defers claim semantics to [Claim types](claim-types-dsh.md), tool identifiers to [Tool taxonomy](tool-taxonomy-dsh.md), visibility mechanics to [Visibility and consent](visibility-and-consent-dsh.md), and hosted collection to [Hosted profiles](hosted-profiles-dsh.md). It honours the free floor by being fully expressible as a local JSON file with no account and no infrastructure, and it honours the red lines by making prompt disclosure and provider disclosure always optional — never required.

## 3. Terminology

- **Practice register** — the voluntary, party-level record of AI capabilities and practices defined here.
- **Party** — the person or organisation the register describes.
- **Capability** — a described AI capability (e.g. drafting, summarisation, code review) the party states it can use.
- **Standing practice** — a general habit of the party, as opposed to a claim about one artifact.
- **Presentation name** — any marketing label (e.g. "AI Arsenal") that renders the object for humans without changing its meaning.

## 4. Scope

### 4.1 In scope

- The practice register data object, its fields, and their optionality.
- Rules for local/private use, portability, and versioning of register assertions.
- The boundary between a register (party-level) and an artifact declaration (artifact-level).
- Naming-as-presentation, so that labels never alter normative meaning.

### 4.2 Out of scope and deferred

- The artifact declaration record and its `tools`/`practices` fields (owned by the portable declaration schema).
- The four claim kinds and the `aiRole` vocabulary (owned by claim types).
- The tool, product, and model vocabulary (owned by tool taxonomy).
- Organisation-internal policy records (owned by approved-tool registers).
- Visibility modes, consent, and indexing (deferred to visibility and consent).
- Hosted profile pages that collect a party's public context (deferred to hosted profiles).

## 5. Specification

### 5.1 Design goals and principles

1. **Voluntary and neutral.** The register is a self-authored disclosure, never a requirement to participate in `+AI`.
2. **Optional-field-first.** An empty or near-empty register is valid; no field must force disclosure of anything beyond a party name.
3. **Local-first.** The object must be usable and readable offline, `file://`-safe, and independent of any hosted service.
4. **Portable.** The same bytes must work as a file, in a profile, and in an export.
5. **Presentation-independent.** Any presentation name is flavour text and must not change normative meaning.
6. **Not a surveillance surface.** The register records what a party chooses to say; it must never invite prompts, transcripts, or credentials.

### 5.2 Normative requirements

1. The register MUST be valid JSON, serialised as UTF-8, and MUST be usable with no account and no network access.
2. The register MUST contain a `practiceRegisterId` and a `party` name; `party` MAY be a pseudonym and MAY carry an optional organisation context. Every other field MUST be optional.
3. Each entry MUST identify at least one of: a capability, a tool, or a review practice. Entries MUST reference [Tool taxonomy](tool-taxonomy-dsh.md) identifiers where they exist, or free-text names otherwise.
4. Each entry MAY carry, independently and optionally: purposes, data rules, a review practice, one or more claim kinds from [Claim types](claim-types-dsh.md), an effective date, and a status. Omission of any of these MUST NOT be treated as a negative fact about the party.
5. The register MUST NOT require, and MUST NOT store, prompts, prompt transcripts, provider credentials, or any field whose sole purpose is inference about how much AI the party "really" uses.
6. The register MUST default to `visibility` `local`; any higher visibility MUST be an explicit, separately consented choice owned by [Visibility and consent](visibility-and-consent-dsh.md).
7. A register entry claiming a capability is *available* or *generally used* MUST NOT imply use on any specific artifact; artifact-level claims are made only through artifact declarations (see claim types).
8. Changes to a register MUST be versioned: a new assertion carries its own date and identifier, and prior assertions remain readable. No silent rewriting is permitted.
9. The register MUST NOT embed personal data about third parties, and MUST carry no field that could function as a reputation score or rank.
10. Any presentation name over the register (e.g. "AI Arsenal") MUST be marked as presentation only, and generated surfaces MUST render the underlying normative fields unchanged.

### 5.3 Data model

```
{
  "practiceRegisterId": "opaque, stable, versioned",
  "party": { "name": "person or pseudonym", "organization": "optional" },
  "asserted": "ISO-8601 date this version was asserted",
  "visibility": "local | unlisted | public | organisation-only",
  "entries": [
    {
      "entryId": "stable within the register",
      "tool": { "id": "tool-taxonomy id", "name": "free-text fallback" },
      "capabilities": [ "capability ids or free text" ],
      "purposes": [ "optional" ],
      "dataRules": [ "optional" ],
      "reviewPractice": "optional",
      "claims": [ "available", "generally-used" ],
      "effectiveDate": "optional ISO-8601",
      "status": "active | retired"
    }
  ]
}
```

### 5.4 Interfaces and behaviours

- The register is exchanged as a JSON file (`.plus-ai-practices.json`), embedded in a hosted profile, or referenced by an artifact declaration's `practices`/`tools` fields; all forms MUST carry the same meaning.
- Readers MUST ignore unknown fields and MUST NOT infer "not disclosed" from "field absent".
- A public view of a register MUST label every entry `self-declared` per [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md).

### 5.5 Lifecycle and operational rules

- The register is an assertion about the party's practice at its `asserted` date; later changes are new assertions, never edits to old bytes.
- Retired entries are retained with `status: retired` and their retirement date, so history is not silently erased.
- Export and reduction of visibility must remain straightforward (see visibility and consent); no service may hold a register hostage.

## 6. Free floor, red lines, and invariants

The practice register is part of the free floor: creating, reading, and sharing one must never require payment or an account. This specification enforces the red line against forced tool or prompt disclosure by making every such field optional in section 5.2 items 2-5, and against reputation systems by forbidding any score or rank field in item 9. The no-silent-change invariant is honoured by versioned assertions in item 8. A paid service may host, sync, or prettify registers but must never gate the underlying object or sell a "better" register.

## 7. Relationships to sibling specifications

- [Claim types](claim-types-dsh.md) owns the claim kinds (`available`, `generally-used`) and the `aiRole` vocabulary that register entries reference.
- [Tool taxonomy](tool-taxonomy-dsh.md) supplies the identifiers for capabilities, tools, products, and models.
- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the artifact-scoped record that may reference this register's entries.
- [Approved-tool registers](approved-tool-registers-dsh.md) is the organisation-internal policy twin; a practice register describes what a party *does*, an approved-tool register what a policy *permits*.
- [Artifact AI bill of materials](artifact-ai-bill-of-materials-dsh.md) selects a subset of these practices for one artifact.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) owns the `self-declared` labelling of register entries.
- [Visibility and consent](visibility-and-consent-dsh.md) owns the visibility modes and consent rules referenced here.
- [Hosted profiles](hosted-profiles-dsh.md) owns the hosted page that may collect a register.
- [Organisation profiles and policies](organisation-profiles-and-policies-dsh.md) owns the organisation context and authority questions.

## 8. Resolution of the seed's "before implementation" concerns

- **Validate the name across cultures and sectors** — sections 2, 5.1 principle 5, and 5.2 item 10: any name (including "AI Arsenal") is presentation-only, never normative, and must be marked as such; the object itself is the neutral, portable data shape defined in 5.3.
- **Keep fields optional** — section 5.2 items 2 and 4: only identifier and party name are required; every other field is independently optional, and absence is never read as a negative fact.
- **Support local/private use** — section 5.2 items 1 and 6: JSON, `file://`-safe, no account, `local`/`private` visibility by default.
- **Never require prompts or provider disclosure** — section 5.2 items 4-5 and section 6: prompts, transcripts, and provider credentials are prohibited from the register entirely.

## 9. Acceptance criteria

1. A register containing only an identifier and a party name validates and is usable offline.
2. Every field other than identifier and party name can be omitted without error.
3. A register with prompts or provider credentials fails validation.
4. A register defaults to `local`/`private` visibility and requires explicit consent for anything higher.
5. A public view labels every entry `self-declared`.
6. Editing a register produces a new dated assertion; the prior assertion remains readable unchanged.
7. A retired entry remains visible with `status: retired` and a retirement date.
8. A presentation layer named "AI Arsenal" renders the same normative fields unchanged.
9. An artifact declaration can reference register entries without implying they apply to every artifact.

## 10. Open questions

- Whether the register needs a formal retention period for retired entries, or whether retention follows the visibility-and-consent deletion rules.
- The exact shape of the `capabilities` vocabulary is undecided until tool taxonomy fixes its capability layer; until then free text is permitted.
