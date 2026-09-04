# Authored Links — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`authored-links.md`](authored-links.md).
> **Catalogue group:** Declarations and profiles.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the authored link: a shareable URL that lets a person compose a personalised rendering of the `+AI` explanation — in their chosen name, organisation, language, theme, font, and colour — without creating an account, uploading data, or issuing a declaration. It exists to make the mark's explanation easy to share and to put in one's own words, while keeping that personalisation firmly in the presentation layer where it can never alter what `+AI` means.

## 2. Placement and boundaries

Authored links sit in the "Declarations and profiles" group but are explicitly *not* declarations, profiles, or registry entries. They consume [URL semantics and canonicalisation](url-semantics-and-canonicalization-dsh.md) for where each concern lives, [Theme engine and packs](theme-engine-and-packs-dsh.md) for presentation, and [Flavour-text localisation](flavour-text-localisation-dsh.md) for language strings. They must never be mistaken for the claimed-name identity products in [Named subdomains and identity bundles](named-subdomains-and-identity-bundles-dsh.md) or for a declaration produced by the [No-account declaration builder](no-account-declaration-builder-dsh.md). They honour the free floor: the personalisation and the explanation remain free and account-free; a paid service may never gate them.

## 3. Terminology

- **Authored link** — a URL carrying query parameters that personalise the rendered explanation; self-authored and unverified by definition.
- **Meaning text** — the canonical `+AI` meaning (the three-part promise and its obligations), which no parameter may alter.
- **Flavour text** — presentation copy such as the author's name, organisation, and chosen language, which is presentation, not meaning.
- **Allowlist** — a closed set of permitted values for a presentation parameter.

## 4. Scope

### 4.1 In scope

- The parameter set, encoding, bounds, and defaults for authored links.
- Rendering rules that keep the meaning fixed and the result labelled.
- Behaviour toward unknown, malformed, or oversized parameters.
- The standing "self-authored and unverified" label.

### 4.2 Out of scope and deferred

- The record format produced when the author escalates to a declaration (portable declaration schema).
- Verified identity and memorable addresses (named subdomains, hosted profiles).
- Theme authorship and pack mechanics (theme engine and packs).
- Interface translation governance (translation governance).

## 5. Specification

### 5.1 Design goals and principles

1. **Meaning is fixed.** Personalisation decorates the explanation; it never rewords the promise.
2. **Unverified by default.** An authored link asserts nothing about who the author is; the label says so.
3. **Non-sensitive only.** A URL is a leaky carrier; authored links carry only what a person is comfortable appearing in logs and caches.
4. **Zero infrastructure.** Composing and viewing must work from static, file://-safe resources with no account and no tracking.

### 5.2 Normative requirements

1. Personalisation MUST travel in the query string only; the path MUST remain the durable resource identity of the explanation page, and fragments MUST remain bounded local drafts per [URL semantics and canonicalisation](url-semantics-and-canonicalization-dsh.md).
2. The rendered page MUST include the normative `+AI` meaning text verbatim; no parameter MAY alter, abridge, or reword that text.
3. Every authored-link page MUST display the label "self-authored and unverified" and a note that the page is not a declaration record; the label MUST be visible text, not only an icon or colour.
4. The parameter set MUST be closed: `name`, `organisation`, `lang`, `theme`, `font`, and `colour`; unknown parameters MUST be ignored and MUST NOT change the page's behaviour or meaning.
5. `name` and `organisation` MUST be free text bounded to a documented maximum length, MUST be rendered as the author's chosen presentation identity, and MUST never be styled as verified (no checkmark, seal, or "confirmed" wording).
6. `lang` MUST accept only registered language tags; an unsupported or malformed tag MUST fall back to a documented default with no error or tracking.
7. `theme`, `font`, and `colour` MUST draw from allowlisted, safe values; any value that is a URL, CSS fragment, or otherwise unlisted MUST be ignored, so an authored link cannot inject styling, script, or a look-alike page.
8. The page MUST NOT set tracking identifiers, read or write cookies, or store the personalised link beyond what is required to serve the request; it MUST be fully readable with JavaScript disabled.
9. The composer MUST be warned, in visible text, not to place sensitive personal data in the link, because URLs appear in logs, history, and caches.
10. An authored link MUST NOT be presented as a declaration, a profile, or evidence of responsibility; if the author wants to take responsibility, the page MUST point to the no-account declaration builder rather than implying the link alone suffices.

### 5.3 Data model

Not applicable — this specification defines parameter semantics, not new data structures. The parameter name, type, bound, and default are documented in a single reference table owned here and consumed by the composer.

### 5.4 Interfaces and behaviours

- **Compose:** a small form (name, organisation, language, theme, font, colour) that builds the query string and offers a copy button.
- **Render:** the server or static page reads only recognised parameters and applies the allowlisted presentation; everything else is dropped.
- **Share:** the composer MAY generate a shortened or prettified form, but the full parameter set is authoritative and the label travels with every form.

### 5.5 Lifecycle and operational rules

Authored links are ephemeral presentation; they have no lifecycle of their own. If a composed link becomes stale because a theme or language pack is retired, the page MUST fall back to a default rather than erroring, and MUST NOT silently reinterpret the parameters.

## 6. Free floor, red lines, and invariants

The explanation and its personalisation are free-floor items: no payment or account may be required to compose or view them. The fixed-meaning rule implements the "one normative specification, many presentations" invariant, and the closed allowlist prevents an authored link from becoming a vector for covert tracking or for a look-alike page that launders meaning. The "self-authored and unverified" label keeps this free, open surface from being confused with verification — protecting the mark from turning into an identity or endorsement channel.

## 7. Relationships to sibling specifications

- [URL semantics and canonicalisation](url-semantics-and-canonicalization-dsh.md) owns the path/query/fragment split this specification uses.
- [Theme engine and packs](theme-engine-and-packs-dsh.md) owns the theme mechanism the `theme` parameter selects.
- [Flavour-text localisation](flavour-text-localisation-dsh.md) owns the language strings the `lang` parameter selects.
- [No-account declaration builder](no-account-declaration-builder-dsh.md) is the escalation path when the author wants a real declaration.
- [Named subdomains and identity bundles](named-subdomains-and-identity-bundles-dsh.md) is the paid, claimed-name product this free surface must never be conflated with.
- [Free-floor covenant](free-floor-covenant-dsh.md) enumerates the free explanation and personalisation this specification must protect.

## 8. Resolution of the seed's "before implementation" concerns

- **Label the result as self-authored and unverified** — section 5.2 item 3: a mandatory visible label on every authored-link page.
- **Limit it to non-sensitive public data** — section 5.2 items 5 and 9: bounded free text, a visible warning against sensitive data, no tracking or storage.
- **Ensure unknown parameters cannot change the mark's meaning** — section 5.2 items 2 and 4: the meaning text is verbatim and unalterable; unknown and unsafe parameters are ignored.

## 9. Acceptance criteria

1. A link with any combination of recognised parameters renders the normative meaning text unchanged.
2. Every authored-link page shows "self-authored and unverified" as visible text.
3. An unknown parameter is ignored and changes nothing.
4. A `font` or `colour` value that is a URL or CSS fragment is rejected and the page still renders safely.
5. An unsupported `lang` falls back to a default without error or tracking.
6. The page is fully readable with JavaScript disabled and sets no cookies.
7. The composer shows the sensitive-data warning before producing the link.
8. The page is never styled or worded to imply verification, endorsement, or that a declaration exists.

## 10. Open questions

- The exact maximum length for `name` and `organisation`, to be set with accessibility and abuse testing.
- Whether to offer a shorter share token, and if so its retention policy, is undecided.
