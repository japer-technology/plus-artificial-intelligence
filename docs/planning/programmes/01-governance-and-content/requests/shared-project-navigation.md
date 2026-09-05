# Agent request — shared-project-navigation: Shared Project Navigation

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`shared-project-navigation-dsh.md`](../../../../suggestions/shared-project-navigation-dsh.md) · seed [`shared-project-navigation.md`](../../../../suggestions/shared-project-navigation.md)
> **Effort:** M · **Phase:** P1 · **Position:** policy half P1; hook + linter half P2 with the presentation programme
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Canonical URL scheme
- **Question:** Which URL scheme does the manifest record for the 8 destinations?
- **Options:** (a) top-level paths (e.g. `/about.html`, `/use.html`) matching the existing `site/*.html` layout · (b) a `/nav/` registry of destination URLs · (c) defer the scheme to URL Semantics and record placeholder paths
- **Recommended:** (a) — matches the current static site layout; revisit when URL Semantics is drafted.
- **Your choice:** ✏️

### D2 — Manifest format
- **Question:** What format is the versioned navigation manifest?
- **Options:** (a) a hashable JSON document (stable hook id → canonical URL → canonical label → spec version) · (b) Markdown · (c) HTML embedded in the site
- **Recommended:** (a) — the spec requires a static, hashable document so mirrors/offline packs can verify routes.
- **Your choice:** ✏️

### D3 — Page-coverage rule (which pages carry nav)
- **Question:** Which pages render the route block and which deliberately do not?
- **Options:** (a) every canonical and generated page renders all 8 hooks; the normative specification renders none · (b) only canonical pages render it · (c) only the home page and toolkit render it
- **Recommended:** (a) — spec §5.2.4–5 requires all canonical/generated pages to carry it and forbids the spec from embedding it.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Publish the eight destination groups — About, Why, Use, Help, Community, Governance, Support, Contact — mapping each to one canonical URL in a versioned manifest per §1 D1–D2; record "Why" as a named section of the About page, not a standalone page.
3. Define one stable hook identifier per group (`nav.about`, `nav.why`, `nav.use`, `nav.help`, `nav.community`, `nav.governance`, `nav.support`, `nav.contact`) and document the placement/rendering contract the theme engine consumes.
4. State that the normative specification must not contain or require the navigation set (links as prose only).
5. Specify the route block as keyboard-operable, accessible-named, local-assets-only (no network call), localised with fallback to the canonical language, and restyleable-but-not-rewordable/removable by themes.
6. Specify the linter rule: a missing, miskeyed, or reworded hook is an error, and a ninth group is a versioned spec change (implementation half lands with the presentation programme, P2).
7. Specify deprecated-destination redirects for the continuity notice period before removal.
8. Mark the policy/manifest half as P1 and the hook + linter integration as P2 (joint with the presentation programme); self-check against §4.

## 3. Constraints (must-nots)
- No ninth group without a versioned spec change.
- The normative spec must not embed or require the nav set.
- Themes restyle but never change destination URLs, remove a group, or hide a group behind interaction.
- No route may require an account, registration, identity, or payment to reach.

## 4. Acceptance criteria
- [ ] The eight destination groups and their canonical URLs are published in a versioned manifest.
- [ ] One hook exists per group with a stable, machine-checkable identifier.
- [ ] The contract requires every canonical and generated page to render all eight hooks through the engine.
- [ ] The normative specification contains no structural navigation requirement.
- [ ] The route block is specified as keyboard-operable and visible on the accessibility floor.
- [ ] The no-account path and offline pack render identical routes from local assets.
- [ ] The linter rule treats missing/miskeyed/reworded hooks as errors, not advice.
- [ ] A theme change cannot alter destinations, hide a group, or reword a label without a manifest release.
- [ ] Deprecated destinations redirect for the required notice period before removal.

## 5. Outputs to produce in the repository
- `site/nav-manifest.json` — versioned navigation manifest + documented hook contract.

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`shared-project-navigation-dsh.md`](../../../../suggestions/shared-project-navigation-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
