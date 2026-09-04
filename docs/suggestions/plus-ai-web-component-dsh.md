# Reusable +AI Web Component — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`plus-ai-web-component.md`](plus-ai-web-component.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the `<plus-ai-mark>` custom element: a small, dependency-free component that renders the `+AI` mark, its accessible meaning, the responsible party, an optional declaration link, and status consistently across any site. It exists so that the visible, human-readable promise is reproduced identically everywhere it appears, with a hard rule that the mark's meaning is fixed and the component's styling and enhancement are presentation only.

## 2. Placement and boundaries

This is a commons-layer artifact. It owns the *component's attribute contract and rendering behaviour*; it does not own the meaning text ([Specification versioning and hashing](specification-versioning-and-hashing-dsh.md) and the normative specification), the record it may link to ([Portable declaration schema](portable-declaration-schema-dsh.md)), how that record is discovered on a page ([Machine-readable assertions](machine-readable-assertions-dsh.md)), theming ([Theme engine and packs](theme-engine-and-packs-dsh.md)), or the accessibility baseline ([Accessibility floor](accessibility-floor-dsh.md)). It honours the static-first invariant by working as plain HTML with no script, and the no-verdict invariant by rendering evidence labels, never a score.

## 3. Terminology

- **Mark** — the `+AI` notation itself.
- **Meaning text** — the canonical three-part promise ("AI helped. I take responsibility." plus its obligations), which no attribute may alter.
- **Responsible party** — the signer the component names.
- **Status** — the declaration's lifecycle status or evidence labels, shown only from a real record.
- **Fallback** — the no-JavaScript, dependency-free rendering from static markup.
- **Shadow DOM** — the encapsulation boundary used to keep styles isolated.

## 4. Scope

### 4.1 In scope

- The element name and attribute set.
- The dependency-free fallback markup.
- Styling boundaries and theme hooks.
- Localisation, versioning, and security/privacy behaviour.
- Offline behaviour and remote-data-unavailable handling.

### 4.2 Out of scope and deferred

- The normative meaning text and its versions (the normative specification, specification versioning and hashing).
- The declaration record's fields (portable declaration schema).
- Discovery of page-level declarations (machine-readable assertions).
- Theme authorship and pack mechanics (theme engine and packs).
- Accessibility conformance testing itself (accessibility floor, per-theme conformance notes).

## 5. Specification

### 5.1 Design goals and principles

1. **Meaning is fixed.** The component decorates the mark; it never rewrites the promise.
2. **Falls back completely.** With JavaScript disabled, the full human meaning still renders.
3. **Styles are optional.** The component imposes no visual identity; hosts theme it, or it degrades to neutral text.
4. **No tracking.** Rendering the mark never phones home on its own.
5. **Versioned and explicit.** The component states which specification version's meaning it renders.

### 5.2 Normative requirements

1. The element MUST be named `<plus-ai-mark>` and MUST be usable as a custom element and as static HTML with identical visible meaning.
2. The component MUST render, at minimum: the mark, the meaning text verbatim, and the responsible party; the meaning text MUST be the canonical wording for the specification version declared, with no attribute able to alter or abridge it.
3. The dependency-free fallback MUST be plain semantic HTML: the mark and meaning MUST be present in the light DOM (or in the component's slotted content) before any script runs, so disabling JavaScript loses nothing essential.
4. The component MUST support the attributes `signer`, `declaration-url`, `spec-version`, and `lang`; unknown attributes MUST be ignored and MUST NOT change behaviour.
5. `signer` MUST be rendered as the responsible party, MAY be a pseudonym, and MUST NOT be styled as verified (no checkmark, seal, or "confirmed" wording) unless the page separately carries verification evidence rendered as labels.
6. `declaration-url`, when present, MUST render as a plain visible link labelled as linking to the declaration; when absent, the component MUST NOT imply a declaration exists.
7. `spec-version` MUST state the specification version whose meaning text is rendered; if omitted, the component MUST default to the specification version it bundles, and the component MUST only ever render meaning text for a version it bundles — offline or without a resolvable version it MUST show "status unavailable" rather than render a version it cannot produce.
8. `lang` MUST select a reviewed translation of the meaning text via the [Translation governance](translation-governance-dsh.md) strings; an unsupported or malformed `lang` MUST fall back to the normative English text with no error.
9. Status MUST be rendered only from a real declaration record resolved via `declaration-url` or the page's machine-readable assertion, and MUST use evidence labels with dates ([Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md)); the component MUST NEVER compute or display a trust score, rank, or single verdict mark.
10. Styling MUST be bounded: the component MUST expose a documented set of CSS custom properties and named parts (or an equivalent light-DOM hook) and MUST NOT inject global styles, scripts, or fonts; without host styling it MUST render as readable neutral text.
11. Security and privacy: the component MUST make no network request unless it is resolving `declaration-url` or a page assertion, MUST set no cookies or storage, and MUST NOT track the visitor.
12. Offline use: with no network and no `declaration-url` resolution, the component MUST render the mark, meaning, and signer from attributes alone; when remote data is unavailable it MUST show a visible "status unavailable" label rather than a stale or invented status.
13. The component MUST be distributable in the offline pack and MUST load from `file://` with no build step; its version MUST be independent of, and reported alongside, the specification version it renders.

### 5.3 Data model

Not applicable — the component renders the portable declaration record and meaning text owned elsewhere; it defines no new data structures. Its attribute contract is the interface described in 5.2 items 4-8 and 5.4.

### 5.4 Interfaces and behaviours

- **Static fallback:** `<plus-ai-mark signer="Name" spec-version="vN.M">` renders the mark, the meaning text, and the signer as plain HTML.
- **Enhancement:** with JavaScript, the element upgrades to resolve `declaration-url` for status labels and to apply theme hooks; the fallback content remains the source of truth for meaning.
- **Status resolution:** on upgrade, the component fetches only the declaration it was pointed at (or the page assertion), renders labels with dates, and on failure shows "status unavailable".
- **Theming:** hosts style via the published custom properties/parts; the component's own default styles are minimal and neutral.

### 5.5 Lifecycle and operational rules

Component releases are versioned and announced in the changelog; a release that changes rendered wording MUST accompany a specification-version change, never a silent edit. The component MUST remain backward-compatible: markup authored for an older component version MUST continue to render its meaning against the `spec-version` it declared.

## 6. Free floor, red lines, and invariants

The component is a free-floor commons artifact: using and self-hosting it must never require payment or an account. The fixed-meaning rule (items 2-3) implements the one-normative-specification invariant; the no-verdict rule (item 9) implements the red line against reputation scores; the no-network-unless-asked rule (item 11) implements the red line against covert tracking. The fallback guarantee (item 3) is the static-first invariant made concrete.

## 7. Relationships to sibling specifications

- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md) owns the `spec-version` referent and its meaning text.
- [Translation governance](translation-governance-dsh.md) owns the reviewed translations `lang` selects.
- [Portable declaration schema](portable-declaration-schema-dsh.md) and [Machine-readable assertions](machine-readable-assertions-dsh.md) own the record the component links to and resolves.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) constrains the status rendering.
- [Theme engine and packs](theme-engine-and-packs-dsh.md) and [Accessibility floor](accessibility-floor-dsh.md) own theming and accessibility; the component exposes hooks but does not define themes.
- [Per-theme conformance notes](per-theme-conformance-notes-dsh.md) records the component's accessibility characteristics per theme.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md) distributes the component.
- [Publishing and productivity integrations](publishing-and-productivity-integrations-dsh.md) embeds the component in authoring tools.

## 8. Resolution of the seed's "before implementation" concerns

- **Dependency-free fallback** — section 5.2 item 3: meaning in the light DOM before script.
- **Styling boundaries** — section 5.2 item 10: documented custom properties/parts, no global injection.
- **Localisation** — section 5.2 item 8: `lang` selects reviewed translations, normative English fallback.
- **Versioning** — section 5.2 items 7 and 13, and 5.5: component version independent of, and reported with, `spec-version`.
- **Security** — section 5.2 items 9-11: no score computation, no injection, no untrusted script.
- **Privacy** — section 5.2 item 11: no network unless asked, no cookies or tracking.
- **Offline use** — section 5.2 item 12: attributes render fully offline.
- **Remote data unavailable** — section 5.2 item 12 and 5.4: visible "status unavailable", never stale or invented.

## 9. Acceptance criteria

1. With JavaScript disabled, the mark, meaning, and signer are fully present and readable.
2. The meaning text is byte-identical to the declared `spec-version`'s canonical wording.
3. `signer` is never styled as verified without separate evidence labels.
4. With `declaration-url` absent, no declaration is implied.
5. Status is rendered only as dated evidence labels, never a score or single verdict.
6. With no network and no declaration link, the component renders from attributes and shows "status unavailable" when enhancement is attempted.
7. The component makes no network request, cookie, or storage write when merely rendering.
8. An unsupported `lang` falls back to normative English.
9. The component loads from `file://` with no build step and themes only via published hooks.

## 10. Open questions

- Whether the component should use shadow DOM or slotted light DOM as the default encapsulation model is undecided and affects theme authoring.
- The exact list of exposed CSS custom properties/parts is undecided pending the theme engine's hook contract.
