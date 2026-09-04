# Message-Bearing Subdomains — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`message-bearing-subdomains.md`](message-bearing-subdomains.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the free message-bearing subdomain: a curated, slogan-style address under `plus-artificial-intelligence.org` — for example a campaign, a principle, or a community view — that resolves to canonical project content. It exists to give the project memorable, shareable addresses that carry a message, while keeping them strictly distinct from claimed-name identity products and from authored personalisation, so that no address in this space can be mistaken for a person or proof about a person.

## 2. Placement and boundaries

This is a free-floor surface, not a paid service. It owns the *slogan/campaign namespace and its resolution rules*. It is one member of a three-way split: this specification (free message addresses, project-curated), [Named subdomains and identity bundles](named-subdomains-and-identity-bundles-dsh.md) (paid claimed-name identity products), and [Authored links](authored-links-dsh.md) (free query-parameter personalisation). It consumes [URL semantics and canonicalisation](url-semantics-and-canonicalization-dsh.md) for aliases and redirects, and [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md) for apex-domain custody.

## 3. Terminology

- **Message-bearing subdomain** — a project-curated label under the apex domain that names a slogan or campaign, not a person.
- **Label** — the subdomain's leading slug (the `label` in `label.plus-artificial-intelligence.org`).
- **Target** — the canonical project resource (page, campaign, themed view) the label resolves to.
- **Reserved label** — a label withheld from this namespace for project, governance, or collision reasons.
- **Catch-all** — the apex domain's wildcard handler that resolves unknown labels to a documented default.

## 4. Scope

### 4.1 In scope

- Label allocation, curation, and the reserved-label list.
- Resolution via redirects and the catch-all.
- Canonical indexing and wildcard DNS behaviour.
- Abuse handling, accessibility, and translations.
- The practical meaning of "unlimited" addresses.

### 4.2 Out of scope and deferred

- Claimed-name identity subdomains (named subdomains and identity bundles).
- Query-parameter personalisation (authored links).
- Apex-domain custody and the full namespace inventory (continuity and namespace custody).
- The target resources' content (owned by each resource's specification).

## 5. Specification

### 5.1 Design goals and principles

1. **Message, not identity.** A label names an idea; it is never a person and never proof about a person.
2. **Curated, not claimed.** Labels are allocated by the project for message purposes; the public does not claim them.
3. **Alias to canonical content.** A label is a memorable alias resolving to an ID-based resource, per URL semantics.
4. **Free and bounded.** Addresses are free and effectively unlimited in number, within stated anti-abuse limits.
5. **Ambiguity is resolved, not exploited.** Labels that could read as a name are avoided or flagged, keeping the split crisp.

### 5.2 Normative requirements

1. Every message-bearing subdomain MUST resolve to canonical project content identified by an immutable ID, and MUST be presented as an alias to that content, never as the content's canonical identity.
2. A message-bearing subdomain MUST NOT be allocated to, or presented as, a person; any label that plausibly reads as a personal name MUST be rejected or clearly labelled as a message, not a name.
3. The namespace MUST publish a versioned reserved-label list withholding at least: the project name, the `+AI` mark, core governance and continuity terms, and labels that would collide with or imitate named subdomains; this list MUST be shared with [Named subdomains and identity bundles](named-subdomains-and-identity-bundles-dsh.md) so the two namespaces never overlap.
4. Resolution MUST use permanent redirects to the target's canonical URL; a label MUST never be repurposed to point at different content, and a retired label MUST resolve to a tombstone or archive rather than a bare 404, per URL semantics.
5. Wildcard DNS MUST be configured as a catch-all resolving unknown labels to a documented default page (not to arbitrary user content); the per-label mapping MUST be published as a versioned manifest rather than encoded in DNS records.
6. Canonical indexing MUST treat each label as an alias: the canonical resource carries the indexable content, the label emits canonical/redirect guidance, and unlisted or retired content follows the visibility consent rules rather than the label's existence.
7. Abuse handling MUST cover labels that impersonate the project, a named subdomain, or a notable person or organisation; such labels MUST be suspendable and the resolution changed to a tombstone without implying the imitated party had to act first.
8. Accessibility MUST be satisfied by the target content, which is subject to the [Accessibility floor](accessibility-floor-dsh.md); the label itself adds no interaction and the catch-all default MUST be accessible.
9. Translations: a message label MAY have per-language targets, but the label itself is language-neutral; language selection MUST follow the resource's own localisation, not a parallel per-label translation system.
10. "Unlimited" MUST mean: no per-label fee and no fixed cap on the number of curated labels, subject to enumerated anti-abuse limits (rate of new labels, review capacity, and the reserved list); it MUST NOT promise unlimited compute, bandwidth, or unmoderated creation.
11. The allocation process MUST be transparent: a published proposal and approval record per label, announced in the [Changelog and RSS](changelog-and-rss-dsh.md) feed, with labels never silently added or removed.
12. No message-bearing subdomain MAY display a trust score, rank, or endorsement, and its use MUST NEVER be a prerequisite for issuing a declaration or using the mark.

### 5.3 Data model

Label mapping entry (a namespace inventory item owned with [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md)):

```
{
  "label": "slogan-slug",
  "kind": "slogan | campaign | community-view",
  "target": "immutable resource ID",
  "canonicalUrl": "target's canonical URL",
  "translations": [ { "lang": "ISO 639", "target": "optional" } ],
  "status": "active | retired",
  "tombstoneUrl": "optional"
}
```

### 5.4 Interfaces and behaviours

- **Propose:** a label is proposed with a message purpose and target; the approval is recorded.
- **Resolve:** the label redirects to the target's canonical URL; unknown labels hit the catch-all default.
- **Retire:** a retired label resolves to its tombstone; the mapping entry is updated, never silently deleted.
- **Publish:** the full mapping manifest is published and versioned so resolution is auditable offline.

### 5.5 Lifecycle and operational rules

Labels are created, renamed only via a new label plus a redirect from the old one, and retired to tombstones — all recorded, versioned events. The catch-all default and the reserved list are part of the same published manifest. Long-term custody of the apex domain and the manifest follows [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md).

## 6. Free floor, red lines, and invariants

Message-bearing subdomains are free-floor commons: creating and visiting them must never require payment or an account, and no paid product may reserve this namespace. The message-not-identity rule (items 2 and 12) enforces the red line against treating an address as identity or rank, and keeps this free surface from drifting into the identity business reserved for the named-subdomain product. The never-repurpose rule (item 4) is the no-silent-change invariant applied to addresses, and the curated-allocation rule (item 11) keeps change visible.

## 7. Relationships to sibling specifications

- [Named subdomains and identity bundles](named-subdomains-and-identity-bundles-dsh.md) is the paid identity product this namespace must remain distinct from.
- [Authored links](authored-links-dsh.md) is the free personalisation surface this namespace must not be conflated with.
- [URL semantics and canonicalisation](url-semantics-and-canonicalization-dsh.md) owns the alias/redirect/tombstone rules this namespace uses.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md) owns the apex domain and the namespace inventory this manifest is part of.
- [Free-floor covenant](free-floor-covenant-dsh.md) binds the free status of these addresses.
- [Accessibility floor](accessibility-floor-dsh.md) binds the target content and the catch-all default.
- [Changelog and RSS](changelog-and-rss-dsh.md) announces label allocations and retirements.

## 8. Resolution of the seed's "before implementation" concerns

- **Reserved labels** — section 5.2 item 3: a versioned reserved list shared with the identity product.
- **Redirects** — section 5.2 item 4: permanent redirects to canonical content, tombstones on retirement.
- **Canonical indexing** — section 5.2 item 6: labels are aliases; the canonical resource carries the indexable content.
- **Wildcard DNS** — section 5.2 item 5: catch-all to a documented default, mapping in a versioned manifest.
- **Abuse handling** — section 5.2 item 7: impersonating labels suspendable, resolved to tombstones.
- **Accessibility** — section 5.2 item 8: target content and catch-all satisfy the accessibility floor.
- **Translations** — section 5.2 item 9: per-language targets, language-neutral labels.
- **The practical meaning of "unlimited"** — section 5.2 item 10: free and uncapped in number within enumerated anti-abuse limits.

## 9. Acceptance criteria

1. No message-bearing subdomain is allocated to a person or presented as proof about a person.
2. The reserved-label list is published, versioned, and enforced against both this namespace and named subdomains.
3. Every label resolves by permanent redirect to an ID-based canonical resource.
4. An unknown label resolves to the accessible catch-all default, never to arbitrary content.
5. A retired label resolves to a tombstone, not a bare 404.
6. The full label mapping manifest is published and versioned.
7. An impersonating label is suspendable without the imitated party acting first.
8. No label is added or removed without a changelog entry.
9. Creating and visiting labels requires no payment and no account.

## 10. Open questions

- The rate-of-allocation anti-abuse limit (labels per period) is undecided and needs review-capacity modelling.
- Whether per-language targets are needed at launch, or whether labels always point to one canonical resource whose page handles language, is undecided.
