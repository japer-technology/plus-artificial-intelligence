# Artifact AI Bill of Materials — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`artifact-ai-bill-of-materials.md`](artifact-ai-bill-of-materials.md).
> **Catalogue group:** AI practice registers and discovery.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the artifact AI bill of materials (AI-BOM): the focused, scoped list of the particular tools, capabilities, and review practices that materially contributed to one artifact, attached to that artifact's declaration. It exists to make "AI helped with *this*" concrete — which tools, in which roles, under which review — as a deliberate selection, not a full interaction transcript, and never an inference from a party's general habits.

## 2. Placement and boundaries

This specification sits in the "AI practice registers and discovery" group and owns the *artifact-scoped selection* of tools and practices. It is a subset of the party's [AI practice register](ai-practice-register-dsh.md), narrowed to one artifact, and is expressed through the `tools`/`practices` content of the [Portable declaration schema](portable-declaration-schema-dsh.md) record. It defers claim semantics to [Claim types](claim-types-dsh.md), tool identifiers to [Tool taxonomy](tool-taxonomy-dsh.md), byte-binding to [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md), and the stable resource that carries it to [Artifact passports](artifact-passports-dsh.md). It honours the free floor by being fully expressible offline, and the red line against forced prompt disclosure by prohibiting transcripts and prompt text.

## 3. Terminology

- **AI-BOM** — the artifact-scoped bill of materials defined here.
- **Material contribution** — a tool, capability, or review practice that meaningfully shaped the artifact, as judged by the signer.
- **Entry** — one named contribution: a tool or capability with a role.
- **Transcript** — a full interaction log (prompts, messages, timings), which this specification forbids.
- **Confidential entry** — a contribution the signer records but marks for non-public rendering.

## 4. Scope

### 4.1 In scope

- The AI-BOM object, its entries, and the material-contribution threshold.
- Optionality and version references for tools and models.
- Confidential-field handling.
- Derivative relationships and the ban on silent inheritance.
- The boundary between the AI-BOM and the general practice register.

### 4.2 Out of scope and deferred

- The declaration record's fields and serialisation (owned by the portable declaration schema).
- The claim kinds and `aiRole` vocabulary (owned by claim types).
- Binding the artifact to bytes (owned by artifact hashing and binding).
- Mapping to C2PA/IPTC/Schema.org (deferred to provenance interoperability).

## 5. Specification

### 5.1 Design goals and principles

1. **Focused, not exhaustive.** The AI-BOM lists what materially mattered, never everything the party can do.
2. **A selection, not a transcript.** It is the signer's account of contributions, not a raw log.
3. **Per-artifact truth.** Every entry is an independent `used-on-artifact` claim; nothing is imported by default from a practice register.
4. **Honest confidence.** Where a version or tool is unknown, omission is preferable to guessing.
5. **Confidentiality without concealment.** Entries may be hidden, but the fact that AI assisted stays visible.

### 5.2 Normative requirements

1. An AI-BOM MUST attach to exactly one artifact declaration and MUST reference that declaration or artifact.
2. Entries MUST be limited to tools, capabilities, and review practices that materially contributed; the AI-BOM MUST NOT be a full interaction transcript, and MUST NOT require prompts, prompt logs, or message content (red line against forced prompt disclosure).
3. Each entry MUST carry a `used-on-artifact` claim and an `aiRole` from [Claim types](claim-types-dsh.md); an entry MUST NOT be expressed with `available`, `generally-used`, or `approved`.
4. Entries MUST reference [Tool taxonomy](tool-taxonomy-dsh.md) identifiers where they exist, or free-text names otherwise; a free-text entry MUST be clearly distinguishable from a taxonomy-resolved one.
5. A version reference is optional and SHOULD be recorded when the tool or model version materially affects the artifact; where the version cannot be determined, the field MUST be omitted rather than guessed.
6. An entry MAY be marked confidential; a public rendering of a confidential entry MUST show a neutral "undisclosed" placeholder and MUST NOT reveal the tool, while the full form remains in the authoritative private copy. Confidentiality MUST NOT be used to conceal that AI assisted at all — the declaration's `aiRole` and the presence of the AI-BOM remain visible.
7. The AI-BOM MUST be optional and may be empty: a declaration carrying an `aiRole` with no entries is valid, and an absent tool entry MUST NOT be read as a negative fact.
8. Granularity MUST follow the material-contribution rule: the signer SHOULD list materially contributing tools and capabilities, MAY aggregate trivial or routine contributions under a general description, and MUST NOT duplicate the entire practice register.
9. A derivative artifact MUST carry its own AI-BOM; it MUST NOT silently inherit the upstream's entries. Where a derivative reuses upstream material, it MUST reference the upstream declaration rather than copying the upstream's tools as if it had used them directly.
10. The AI-BOM MUST be serialised consistently with the declaration record it belongs to, and, where the artifact has stable bytes, MUST be bound to those bytes per [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md).
11. No tool MAY auto-populate an artifact's AI-BOM from a party's practice register: an entry appears only when the signer claims it for that artifact (see claim types anti-conflation).
12. A rendered AI-BOM MUST label every entry `self-declared` until a checker attaches evidence, per [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md).

### 5.3 Data model

```
{
  "aiBomVersion": "version of this AI-BOM",
  "declarationRef": "the artifact declaration this AI-BOM belongs to",
  "entries": [
    {
      "entryId": "stable within the AI-BOM",
      "subject": { "id": "tool-taxonomy id", "name": "free-text fallback" },
      "role": "claim-types aiRole",
      "capabilities": [ "contributed capabilities" ],
      "reviewPractice": "optional",
      "versionRef": "optional tool/model version",
      "confidential": false
    }
  ]
}
```

### 5.4 Interfaces and behaviours

- The AI-BOM renders as a table on the declaration and artifact passport: tool, role, capability, optional version, and a `self-declared` label per entry.
- The no-account declaration builder offers entry creation with a confidential toggle and renders "undisclosed" for confidential entries in any export.
- A confidential entry omitted from a public rendering MUST be noted as "entries withheld", so the public form never implies fewer contributions than were recorded.

### 5.5 Lifecycle and operational rules

- An AI-BOM is immutable once issued; a changed contribution set is a new declaration or a supersession per [Declaration lifecycle](declaration-lifecycle-dsh.md), never an edit.
- Confidentiality is decided at issuance; later un-confidentialising or adding an entry is a new version, not a silent change.

## 6. Free floor, red lines, and invariants

The AI-BOM is a free-floor commons: creating and reading one must never require payment or an account. The red line against forced tool or prompt disclosure is enforced by section 5.2 item 2 — no transcript, no prompts — while confidentiality (item 6) protects the signer without letting them hide that AI assisted. The no-inference rule (item 11) keeps responsibility human and correctly attached: an artifact's AI-BOM is the signer's own account, never a derived attribution.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the declaration record whose `tools`/`practices` this AI-BOM populates.
- [Claim types](claim-types-dsh.md) owns the `used-on-artifact` claim and the `aiRole` vocabulary each entry uses.
- [Tool taxonomy](tool-taxonomy-dsh.md) supplies the subject identifiers and version naming.
- [AI practice register](ai-practice-register-dsh.md) is the party-level source this AI-BOM narrows; the two are never conflated.
- [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md) binds the AI-BOM's artifact to bytes and owns the derivative rule this specification restates at artifact level.
- [Artifact passports](artifact-passports-dsh.md) is the stable resource that carries an AI-BOM for one defined scope.
- [Provenance interoperability](provenance-interoperability-dsh.md) maps the AI-BOM into C2PA/IPTC/Schema.org rather than duplicating those formats.
- [Machine-readable assertions](machine-readable-assertions-dsh.md) embeds the declaration, and with it the AI-BOM, on pages.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) governs supersession when the contribution set changes.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) owns the `self-declared` labelling applied to entries.

## 8. Resolution of the seed's "before implementation" concerns

- **Useful granularity** — section 5.2 items 2 and 8: the material-contribution threshold bounds detail, with aggregation permitted and a ban on duplicating the practice register.
- **Optionality** — section 5.2 item 7: the AI-BOM may be empty or minimal, and absence is never a negative fact.
- **Version references** — section 5.2 item 5: optional, recorded when material, omitted rather than guessed.
- **Confidential fields** — section 5.2 item 6 and 5.4: `confidential` entries render "undisclosed" publicly while the full form stays private, and AI assistance itself stays visible.
- **Derivative relationships** — section 5.2 item 9 and 5.5: derivatives carry their own AI-BOM and reference, never silently inherit, the upstream.
- **How this differs from a general practice register** — sections 1, 2, 5.2 item 3, and 7: the AI-BOM is artifact-scoped and claims use; the practice register is party-level and claims availability or general use.

## 9. Acceptance criteria

1. An AI-BOM references exactly one artifact declaration.
2. Every entry carries a `used-on-artifact` claim and an `aiRole`, never `available` or `approved`.
3. A declaration with an `aiRole` and no entries is valid.
4. A prompt or message transcript cannot be stored in an AI-BOM.
5. A confidential entry renders "undisclosed" publicly while the declaration's `aiRole` remains visible.
6. A version field is absent when the version is unknown, never guessed.
7. A derivative carries its own AI-BOM and references the upstream instead of inheriting its tools.
8. A tool from the practice register does not appear in an AI-BOM unless the signer claims it for that artifact.
9. A rendered AI-BOM labels every entry `self-declared`.

## 10. Open questions

- The exact material-contribution threshold (what counts as "material") is undecided and may benefit from pilot wording studies.
- Whether aggregation of trivial contributions needs a minimum disclosure of tool *categories* rather than names is undecided.
