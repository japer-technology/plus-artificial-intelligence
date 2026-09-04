# Flavour-Text Localisation — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`flavour-text-localisation.md`](flavour-text-localisation.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification governs decorative theme copy — the flavour text that gives
each presentation its voice — as optional presentation content with its own
localisation status, contributor path, and neutral fallback, kept strictly
separate from the human-reviewed normative specification. Its purpose is to
let themes be playful without ever letting playfulness touch the meaning of
`+AI`.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns *flavour copy governance*. It does not own the
normative specification's translations (see [Translation
governance](translation-governance-dsh.md)), the rendering isolation (see
[Theme engine and packs](theme-engine-and-packs-dsh.md)), or theme creation
(see [Theme builder and starter kit](theme-builder-and-starter-kit-dsh.md)).
It exists to keep the line sharp: normative text is reviewed and authoritative;
flavour is optional, adaptable, and always replaceable by the neutral fallback.

## 3. Terminology

- **Flavour text** — decorative, theme-specific copy (headers, slogans,
  asides) that carries no normative weight.
- **Normative text** — the specification content that fixes meaning; only
  human-reviewed translations may carry it.
- **Adaptation** — allowed rewriting of flavour for localisation (cultural
  references, humour, tone).
- **Neutral fallback** — the plain, untranslated-or-reviewed baseline copy
  used when no reviewed flavour exists.

## 4. Scope

### 4.1 In scope

- What may and may not be adapted.
- Cultural review and attribution.
- Language fallback order.
- Humour and quotation policy.
- Checks that flavour never changes meaning.

### 4.2 Out of scope and deferred

- Normative translation (translation governance).
- Flavour authoring tools (theme builder and starter kit).
- The hooks that keep flavour isolated (theme engine and packs).

## 5. Specification

### 5.1 Design goals and principles

1. **Flavour is replaceable.** Every flavour string degrades to the neutral
   fallback without loss.
2. **Adaptation is localisation, not meaning.** Flavour may change words, not
   claims.
3. **Reviewed where it claims to be.** A flavour string's translation status
   is displayed, never assumed.
4. **Humour has rules.** Jokes may be adapted or dropped; they may never
   mock, mislead, or displace the normative point.

### 5.2 Normative requirements

1. Flavour text MUST be stored separately from normative text, keyed so the
   engine can substitute the neutral fallback per string (see theme engine and
   packs).
2. Flavour MUST NOT restate, paraphrase, or "improve" normative meaning; any
   string that would change a reader's understanding of `+AI` if it were the
   only text shown MUST be treated as normative and moved to translation
   governance.
3. Each flavour string MUST carry a localisation status: `neutral`,
   `reviewed`, `community`, or `machine` — with `reviewed` requiring the
   translation governance review path and `machine` always labelled as such.
4. The fallback order MUST be: reviewed local flavour, community local
   flavour, neutral flavour; machine flavour MUST never render without a
   visible "machine-translated flavour" label.
5. Adaptations MUST be recorded with attribution: who adapted it, when, and
   from which source string; community adaptations follow the contribution
   terms in licensing and mark policy.
6. Cultural review MUST apply to adapted humour and cultural references: a
   string that is insulting, misleading, or untranslatable in a target
   culture MUST be replaced by the neutral fallback rather than forced.
7. Quotations in flavour MUST be accurate, attributed, and licensed where
   rights attach; misattributed or unlicensed quotations MUST NOT ship.
8. The conformance linter MUST include a flavour rule: strings that overlap
   normative wording or lack a status MUST produce errors.
9. Flavour changes MUST be versioned with the pack (see theme engine and
   packs); flavour never changes meaning, so flavour changes never trigger
   specification versioning.
10. The neutral fallback MUST itself meet the accessibility floor and be
    reviewed under translation governance like any interface text.

### 5.3 Data model

```
{
  "flavourStrings": [
    { "id": "opaque key", "neutral": "fallback text",
      "localised": [ { "lang": "ISO 639", "text": "...",
                       "status": "reviewed | community | machine",
                       "adaptedBy": "name or role", "at": "ISO-8601",
                       "source": "string id adapted from" } ] }
  ],
  "packVersion": "the pack version this flavour set belongs to"
}
```

### 5.4 Interfaces and behaviours

- The engine renders flavour by the fallback order and displays the status
  label where a non-reviewed string is shown.
- The builder flags strings that would violate the meaning boundary at edit
  time.

### 5.5 Lifecycle and operational rules

- Flavour sets ship with pack versions; a reviewed translation upgrade is a
  pack version change announced in the changelog only if it changes
  user-visible strings materially.
- Machine flavour is re-labelled or removed when a reviewed translation
  arrives.

## 6. Free floor, red lines, and invariants

Flavour is free-floor presentation: no flavour may be paywalled, and the
neutral fallback guarantees the free route. The meaning-boundary rules are
the local enforcement of the invariant that flavour never changes normative
meaning, and the status labelling keeps the honesty invariant inside the
project's own copy.

## 7. Relationships to sibling specifications

- [Theme engine and packs](theme-engine-and-packs-dsh.md) isolates flavour
  and enforces the fallback.
- [Translation governance](translation-governance-dsh.md) owns normative
  translation and the `reviewed` path.
- [Theme builder and starter kit](theme-builder-and-starter-kit-dsh.md) edits
  flavour within these boundaries.
- [Conformance linter](conformance-linter-dsh.md) checks the flavour rules.
- [Per-theme conformance notes](per-theme-conformance-notes-dsh.md) record
  flavour language coverage per pack.
- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) owns
  contribution terms and quotation licensing.
- [Accessibility floor](accessibility-floor-dsh.md) applies to the neutral
  fallback.
- [Custom themes](custom-themes-dsh.md) may commission bespoke flavour under
  these rules.

## 8. Resolution of the seed's "before implementation" concerns

- **What may be adapted** — section 5.2 items 1-2: separate storage, meaning
  boundary, adaptation limits.
- **Cultural review** — section 5.2 item 6: forced-replacement rule for
  untranslatable or insulting strings.
- **Attribution** — section 5.2 item 5: recorded adaptations with
  attribution.
- **Language fallback** — section 5.2 item 4: the documented fallback order
  and machine labelling.
- **Humour and quotation policy** — section 5.2 items 6-7: cultural review
  for humour, accuracy and licensing for quotations.
- **Checks that flavour never changes meaning** — section 5.2 items 2 and 8:
  the meaning boundary plus linter enforcement.

## 9. Acceptance criteria

1. Every flavour string degrades to the neutral fallback without loss.
2. No flavour string restates normative meaning.
3. Every string carries a localisation status and machine strings are
   labelled when rendered.
4. Adapted strings record attribution and source.
5. An insulting or untranslatable string is replaced by the neutral
   fallback.
6. Quotations are accurate, attributed, and licensed.
7. The linter errors on strings that overlap normative wording or lack
   status.
8. Flavour changes ship with pack versions and never trigger specification
   versioning.

## 10. Open questions

- Whether `community` flavour should require a minimum review before
  appearing in default galleries.
