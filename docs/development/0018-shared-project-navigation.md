# Development task — shared-project-navigation: Shared Project Navigation

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`shared-project-navigation-dsh.md`](../suggestions/shared-project-navigation-dsh.md) · seed [`shared-project-navigation.md`](../suggestions/shared-project-navigation.md)
> **Effort:** M · **Phase:** P1 · **Position:** policy half P1; hook + linter half P2 with the presentation programme
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** One navigation contract (exactly 8 destination groups) rendered consistently on every canonical/generated/themed page.
- **Why now / risk of deferring:** Navigation is defined once and rendered everywhere so theme authors never hand-edit route markup (spec §5.1); the policy/manifest half is P1, the hook + linter half P2 with the presentation programme (mini-plan Order). Risk: the nav set creeping past 8 groups — guarded by "ninth group = versioned spec change" (brainstorm open risks).
- **Features to deliver:**
  - Exactly 8 destination groups (About, Why, Use, Help, Community, Governance, Support, Contact).
  - A versioned navigation manifest (stable hook id → canonical URL → label → spec version).
  - One engine hook per group (`nav.about` … `nav.contact`).
  - A route block that is keyboard-operable, local-assets-only, localised with fallback.
  - A linter rule (missing/miskeyed/reworded hook = error).
  - "Why" resolving to a section of About, not a standalone page.
- **Depends on:** theme-engine-and-packs, conformance-linter (implementation half — P2); accessibility-floor; translation-governance (labels localised)

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Canonical URL scheme
- **Question:** Which URL scheme does the manifest record for the 8 destinations?
- **Option (a):** top-level paths (e.g. `/about.html`, `/use.html`) matching the existing `site/*.html` layout
  - **For:** Matches the current static `site/*.html` layout (programme-level decision 1), and spec §5.2.2 requires each group mapped to "one canonical URL published by the steward"; top-level paths do that now.
  - **Against:** The canonical URL scheme is an open question until URL Semantics is drafted (spec §10; digest "Open: canonical URL scheme"), so (a) may need revisiting.
- **Option (b):** a `/nav/` registry of destination URLs
  - **For:** A `/nav/` registry centralises all destination URLs in one place, which could ease manifest maintenance.
  - **Against:** Introduces a new URL indirection not present in the current static layout, and spec §10 leaves the scheme undecided until URL Semantics — inventing a registry pre-empts that.
- **Option (c):** defer the scheme to URL Semantics and record placeholder paths
  - **For:** Defers to the owning sibling and records no premature scheme.
  - **Against:** Placeholder paths fail spec §5.2.2's requirement that each group map to "one canonical URL" in the manifest, leaving the contract unusable until URL Semantics lands.
- **Recommended:** (a) — matches the current static site layout; revisit when URL Semantics is drafted.
- **Your choice:** ✏️

### D2 — Manifest format
- **Question:** What format is the versioned navigation manifest?
- **Option (a):** a hashable JSON document (stable hook id → canonical URL → canonical label → spec version)
  - **For:** Spec §5.3 requires "a static, hashable document so mirrors and offline packs can verify they render the current routes", and a JSON mapping of hook id → URL → label → spec version matches it exactly.
  - **Against:** JSON is not directly human-readable prose, so it needs the page to render the manifest for people (spec §5.4 has the engine consume it).
- **Option (b):** Markdown
  - **For:** Markdown is human-readable and fits the docs-first workflow.
  - **Against:** Markdown is not inherently machine-hashable/verifiable in the structured way spec §5.3 requires for mirror verification.
- **Option (c):** HTML embedded in the site
  - **For:** HTML embedded in the site avoids a second artifact.
  - **Against:** Embedding the manifest in HTML mixes content with structure, defeating the "hashable document" spec §5.3 requires for offline/mirror verification, and risks the spec's prohibition on embedding nav in normative text (spec §5.2.5).
- **Recommended:** (a) — the spec requires a static, hashable document so mirrors/offline packs can verify routes.
- **Your choice:** ✏️

### D3 — Page-coverage rule (which pages carry nav)
- **Question:** Which pages render the route block and which deliberately do not?
- **Option (a):** every canonical and generated page renders all 8 hooks; the normative specification renders none
  - **For:** Spec §5.2.4 requires every canonical and generated page to render all eight hooks, and §5.2.5 forbids the normative specification from containing them; (a) matches both.
  - **Against:** Broadest coverage, so the hook/linter half (P2, with the presentation programme) is the largest implementation slice.
- **Option (b):** only canonical pages render it
  - **For:** Reduces the render surface to only the canonical pages.
  - **Against:** Fails spec §5.2.4, which explicitly requires generated pages to carry the hooks too, leaving themed/generated pages inconsistent.
- **Option (c):** only the home page and toolkit render it
  - **For:** Smallest possible surface to stand up.
  - **Against:** Far narrower than spec §5.2.4 requires, so it breaks the "rendered everywhere" invariant (spec §5.1) and the acceptance criterion "every canonical and generated page renders all eight hooks".
- **Recommended:** (a) — spec §5.2.4–5 requires all canonical/generated pages to carry it and forbids the spec from embedding it.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Publish the eight destination groups — About, Why, Use, Help, Community, Governance, Support, Contact — mapping each to one canonical URL in a versioned manifest per §2 D1–D2; record "Why" as a named section of the About page, not a standalone page.
3. Define one stable hook identifier per group (`nav.about`, `nav.why`, `nav.use`, `nav.help`, `nav.community`, `nav.governance`, `nav.support`, `nav.contact`) and document the placement/rendering contract the theme engine consumes.
4. State that the normative specification must not contain or require the navigation set (links as prose only).
5. Specify the route block as keyboard-operable, accessible-named, local-assets-only (no network call), localised with fallback to the canonical language, and restyleable-but-not-rewordable/removable by themes.
6. Specify the linter rule: a missing, miskeyed, or reworded hook is an error, and a ninth group is a versioned spec change (implementation half lands with the presentation programme, P2).
7. Specify deprecated-destination redirects for the continuity notice period before removal.
8. Mark the policy/manifest half as P1 and the hook + linter integration as P2 (joint with the presentation programme); self-check against §5.

## 4. Constraints (must-nots)
- No ninth group without a versioned spec change.
- The normative spec must not embed or require the nav set.
- Themes restyle but never change destination URLs, remove a group, or hide a group behind interaction.
- No route may require an account, registration, identity, or payment to reach.

## 5. Acceptance criteria
- [ ] The eight destination groups and their canonical URLs are published in a versioned manifest.
- [ ] One hook exists per group with a stable, machine-checkable identifier.
- [ ] The contract requires every canonical and generated page to render all eight hooks through the engine.
- [ ] The normative specification contains no structural navigation requirement.
- [ ] The route block is specified as keyboard-operable and visible on the accessibility floor.
- [ ] The no-account path and offline pack render identical routes from local assets.
- [ ] The linter rule treats missing/miskeyed/reworded hooks as errors, not advice.
- [ ] A theme change cannot alter destinations, hide a group, or reword a label without a manifest release.
- [ ] Deprecated destinations redirect for the required notice period before removal.

## 6. Outputs to produce in the repository
- `site/nav-manifest.json` — versioned navigation manifest + documented hook contract.

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`shared-project-navigation-dsh.md`](../suggestions/shared-project-navigation-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
