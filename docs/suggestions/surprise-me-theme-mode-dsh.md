# Surprise-Me Theme Mode — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`surprise-me-theme-mode.md`](surprise-me-theme-mode.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the surprise-me mode: a random or rotating path
through public +AI presentations that lets visitors discover the breadth of
the project without browsing the whole gallery. It is a discovery affordance,
not a recommendation engine: selection is transparent, accessible, and
shareable, and it processes no unnecessary visitor data.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns the *selection and rotation rules*. It does not own
the gallery (see [Theme gallery and community voting](theme-gallery-community-voting-dsh.md)),
the accessibility floor (see [Accessibility floor](accessibility-floor-dsh.md)),
or the themes themselves (see [Theme engine and packs](theme-engine-and-packs-dsh.md)).
It honours the red lines: no tracking, no ranking, and no profile of the
visitor's taste.

## 3. Terminology

- **Surprise-me** — the explicit visitor action requesting a random or
  rotating presentation.
- **Candidate set** — the subset of presentations eligible for selection.
- **Selection rule** — the documented randomisation and repetition policy.
- **Shareable link** — a URL that reopens the same presentation without
  state.

## 4. Scope

### 4.1 In scope

- Candidate eligibility and exclusions.
- Selection and repetition rules.
- Reduced-motion behaviour.
- Shareable links and data minimisation.

### 4.2 Out of scope and deferred

- Gallery curation and voting (theme gallery and community voting).
- Themed page rendering (theme engine and packs).
- Analytics about which themes are visited (privacy-respecting analytics —
  and only in aggregate).

## 5. Specification

### 5.1 Design goals and principles

1. **Surprise without risk.** Every eligible presentation meets the
   accessibility floor.
2. **Chance, not choice-profiling.** Selection is random among candidates;
   the project never models the visitor.
3. **Stateless by default.** The same link or action behaves reproducibly
   without stored visitor data.
4. **Shareable outcomes.** What the visitor lands on can be shared.

### 5.2 Normative requirements

1. The candidate set MUST include only presentations whose per-theme
   conformance notes show current conformance, including the accessibility
   floor; non-conformant or inaccessible themes MUST be excluded.
2. Selection MUST be a documented random rule over the candidate set; the
   rule MUST be published (e.g. uniform random per click).
3. Repetition rules MUST be published: whether repeats are allowed, and how
   rotation avoids or permits them; no rule MAY depend on visitor identity.
4. The mode MUST respect `prefers-reduced-motion`: rotation and transition
   effects MUST be disabled or minimalised, and no essential function may
   depend on animation.
5. The mode MUST NOT set cookies, fingerprint, or store visitor data; any
   session memory, if ever added, MUST be opt-in and deletable.
6. Every landing MUST expose the shareable URL of the exact presentation, so
   the outcome can be shared or revisited.
7. The mode MUST offer an immediate route to the neutral presentation and to
   the gallery index, per shared project navigation.
8. Selection MUST NOT be influenced by payment, sponsorship, or votes (RL-4,
   RL-9); surprise-me is not a placement surface.
9. The mode MUST state its selection rule in plain language on the landing
   page ("picked uniformly from N conformant themes").
10. The mode MUST work offline where the gallery subset is available locally
    (offline pack).

### 5.3 Data model

Not applicable — this specification defines selection behaviour over existing
presentations, not a new data structure.

### 5.4 Interfaces and behaviours

- The surprise-me control appears in shared navigation; activating it lands
  on a presentation with the selection rule stated.
- Each landing shows: the theme's name, its per-theme conformance notes
  link, the shareable URL, and the neutral-route control.

### 5.5 Lifecycle and operational rules

- The candidate set updates when per-theme conformance notes change; an
  excluded theme is re-eligible only after re-conformance.
- Selection-rule changes are announced in the changelog.

## 6. Free floor, red lines, and invariants

Surprise-me is a free-floor feature: free, account-free, and data-free. The
no-tracking and no-ranking red lines are implemented by construction
(stateless random selection), and the accessibility floor's neutral-route
requirement is honoured on every landing.

## 7. Relationships to sibling specifications

- [Theme gallery and community voting](theme-gallery-community-voting-dsh.md)
  hosts the candidate set.
- [Per-theme conformance notes](per-theme-conformance-notes-dsh.md) determine
  eligibility.
- [Accessibility floor](accessibility-floor-dsh.md) defines the minimum every
  candidate meets.
- [Theme engine and packs](theme-engine-and-packs-dsh.md) renders the
  selected presentation.
- [Shared project navigation](shared-project-navigation-dsh.md) carries the
  control and the neutral route.
- [Privacy-respecting analytics](privacy-respecting-analytics-dsh.md) may
  count aggregate visits only, never per-visitor selection history.

## 8. Resolution of the seed's "before implementation" concerns

- **Respect reduced motion** — section 5.2 item 4: rotation effects disabled
  or minimalised.
- **Avoid inaccessible themes** — section 5.2 item 1: conformance-gated
  candidate set.
- **Keep links shareable** — section 5.2 item 6: every landing exposes its
  shareable URL.
- **Define selection and repetition rules** — section 5.2 items 2-3:
  published random rule and repetition policy.
- **Process no unnecessary visitor data** — section 5.2 item 5: stateless by
  default, no cookies or fingerprinting.

## 9. Acceptance criteria

1. A non-conformant theme never appears in the candidate set.
2. The selection rule is published and applied uniformly.
3. With reduced motion enabled, no rotation animation appears.
4. No cookie or fingerprint is set by the mode.
5. Every landing shows its shareable URL and the neutral-route control.
6. Payment or votes cannot influence selection.
7. The mode functions offline over the local gallery subset.

## 10. Open questions

- Whether "rotate" should be a second explicit control (slow tour mode) or
  one surprise per action only.
