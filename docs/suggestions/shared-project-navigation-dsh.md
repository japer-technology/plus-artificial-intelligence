# Shared Project Navigation — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`shared-project-navigation.md`](shared-project-navigation.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification defines one shared navigation contract so that every page carrying the project's name — the canonical pages and every generated, themed, translated, or mirrored presentation — exposes a consistent, accessible route to About, Why, Use, Help, Community, Governance, Support, and Contact content, without importing any of that content into the normative specification itself.

## 2. Placement and boundaries
Navigation is presentation infrastructure, not meaning. It therefore sits beside, and depends on, the theme engine and conformance tooling: the engine renders the hooks, and the linter enforces them. This specification defers page-level accessibility rules to the accessibility floor, wording and localisation to translation governance, and offline behaviour to the static-first and offline/self-hosting siblings. It honours the free floor by requiring the route to work on the no-account, file://-safe commons with no infrastructure, and the red lines by never making any route conditional on registration, payment, or identity.

## 3. Terminology
- **Navigation set** — the fixed list of destination groups: About, Why, Use, Help, Community, Governance, Support, Contact.
- **Navigation hook** — a named, machine-checkable insertion point that the rendering engine fills with a standard route block.
- **Route block** — the rendered, localised, accessible cluster of links produced from one hook.
- **Canonical pages** — pages published by the steward at the apex domain or its equivalent.
- **Generated pages** — profile, declaration, directory, checker, theme, and other pages produced from templates or data.

## 4. Scope
### 4.1 In scope
- The destination groups and their target URLs.
- The shared hook names and placement contract.
- Rules for rendering, localisation, offline fallback, and ordering.
- Which pages carry the navigation and which deliberately do not.

### 4.2 Out of scope and deferred
- The content of the destination pages (owned by the About, Use, Community, Governance, Support, Contact, and Free-Floor siblings).
- Theme authoring mechanics (deferred to the theme engine and theme builder).
- Accessibility conformance measurement (deferred to the accessibility floor and conformance linter).
- Translation process (deferred to translation governance).

## 5. Specification
### 5.1 Design goals and principles
Navigation must be defined once and rendered everywhere, so a theme author never hand-edits route markup. It must be quiet: discoverable from any page without dominating normative content. It must be static-first: the same source renders in a browser, in an offline pack, and in a mirror with no server. And it must be translatable and checkable as a shared invariant.

### 5.2 Normative requirements
1. The navigation set MUST comprise exactly the eight destination groups About, Why, Use, Help, Community, Governance, Support, and Contact; adding a ninth group is a versioned change to this specification, not a theme decision.
2. Each destination group MUST map to one canonical URL published by the steward, recorded in a versioned navigation manifest (see 5.3); the "Why" destination resolves to a named section of the About page, not a standalone page.
3. The engine MUST expose one navigation hook per destination group, keyed by a stable machine identifier (for example `nav.about`, `nav.why`, `nav.use`, `nav.help`, `nav.community`, `nav.governance`, `nav.support`, `nav.contact`).
4. Every canonical page and every generated page MUST render all eight hooks through the engine's route block; a page MAY additionally render deeper in-page links, but MUST NOT omit or reword a hook.
5. The normative specification document itself MUST NOT contain or require the navigation set; it MAY link to navigation content as ordinary prose, never as a structural requirement.
6. The route block MUST be operable by keyboard, expose accessible names, and be visible on the accessibility floor presentation; specific success criteria are owned by the accessibility floor.
7. The route block MUST render from local assets only, so the no-account path and offline pack show the same links with no network call.
8. Localised route labels MUST come from the translation system and MUST fall back to the canonical language when a translation is absent; flavour text MUST NOT alter route destinations.
9. A theme MAY restyle the route block but MUST NOT change destination URLs, remove any group from the primary cluster, or hide any group behind interaction.
10. The conformance linter MUST treat a missing, miskeyed, or reworded hook as an error against the presentation contract.

### 5.3 Data model
A versioned navigation manifest records, for each hook: the stable identifier, the canonical URL, the canonical-language label, and the specification version this mapping applies to. The manifest is a static, hashable document so mirrors and offline packs can verify they render the current routes.

### 5.4 Interfaces and behaviours
The engine consumes the manifest and emits the route block; presentations never construct the block themselves. When a destination URL is unavailable in a degraded or offline context, the block MUST remain visible with the link intact and MUST NOT degrade into an error or hide the destination.

### 5.5 Lifecycle and operational rules
Navigation destinations change only through a versioned manifest release, announced through the changelog. Deprecated destinations MUST redirect for at least the notice period defined by the continuity and namespace custody sibling before removal.

## 6. Free floor, red lines, and invariants
The full navigation set, the manifest, and the rendered route block stay free and file://-safe — part of the commons, never a paid feature. No route MAY require an account, registration, identity, or payment to reach. The manifest is versioned and changes are visible, honouring the no-silent-change invariant. Navigation presents destinations, never endorsements or rankings, so it raises no red-line concern and must remain free of sponsorship or directory positioning.

## 7. Relationships to sibling specifications
- [Theme Engine and Packs](theme-engine-and-packs-dsh.md) — the engine owns rendering the hooks; this specification defines the hooks it must render.
- [Theme Builder and Starter Kit](theme-builder-and-starter-kit-dsh.md) — themes must consume, not copy, the route block.
- [Conformance Linter](conformance-linter-dsh.md) — enforces hook presence and destination stability.
- [Accessibility Floor](accessibility-floor-dsh.md) — owns the measurable accessibility criteria the route block must meet.
- [Translation Governance](translation-governance-dsh.md) — owns localised labels and fallback rules.
- [Flavour-Text Localisation](flavour-text-localisation-dsh.md) — flavour copy may decorate but never change destinations.
- [Continuity and Namespace Custody](continuity-and-namespace-custody-dsh.md) — owns URL permanence and redirect notice periods.
- Destination content is owned by [About the Project](about-project-dsh.md), [Use +AI Guide](use-plus-ai-guide-dsh.md), [Community Hub](community-hub-dsh.md), [Governance and Stewardship](governance-and-stewardship-dsh.md), [Contact Routes](contact-routes-dsh.md), and the [Free-Floor Covenant](free-floor-covenant-dsh.md) (Support).

## 8. Resolution of the seed's "before implementation" concerns
- **Avoid hand-editing every theme** — resolved in 5.2 items 3–5 and 5.4: hooks are defined once and rendered by the engine; themes restyle, never reauthor.
- **Shared hooks** — resolved in 5.2 item 3 and 5.3: a fixed, keyed, versioned set with a manifest.
- **Accessible placement** — resolved in 5.2 item 6 and deferred in detail to the accessibility floor.
- **Offline behaviour** — resolved in 5.2 item 7 and 5.4: local-asset rendering and intact links when degraded.
- **Translations** — resolved in 5.2 item 8 and deferred in detail to translation governance.
- **Conformance checks first** — resolved in 5.2 item 10 and deferred in detail to the conformance linter.

## 9. Acceptance criteria
1. The eight destination groups and their canonical URLs are published in a versioned manifest.
2. One hook exists per group with a stable, machine-checkable identifier.
3. Every canonical and generated page renders all eight hooks through the engine.
4. The normative specification contains no structural navigation requirement.
5. The route block is keyboard-operable and visible on the accessibility floor.
6. The no-account path and offline pack render identical routes from local assets.
7. Missing or miskeyed hooks are reported as errors by the linter, not advice.
8. A theme change cannot alter destinations, hide a group, or reword a label without a manifest release.
9. Deprecated destinations redirect for the required notice period before removal.
10. A contributor can add a new generated page and receive the navigation automatically without editing it.

## 10. Open questions
- The exact canonical URL scheme (top-level paths versus a `/nav/` registry) is undecided until URL semantics is drafted.
