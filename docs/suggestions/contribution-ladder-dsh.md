# Contribution Ladder — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`contribution-ladder.md`](contribution-ladder.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the contribution ladder: a catalogue of bounded ways to help the project — from signing one artifact through translation, accessibility, themes, engineering, prior-art research, moderation, and institutional pilots — where each rung names its expected result, reviewer, contribution terms, credit, and a small first step.

## 2. Placement and boundaries

The ladder is participation infrastructure, not normative meaning and not governance. Contribution terms and credit defer to [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md); reviewer authority and moderation roles defer to [Governance and Stewardship](governance-and-stewardship-dsh.md) and [Moderation, Disputes, and Appeals](moderation-disputes-and-appeals-dsh.md); translation, accessibility, theme, and pilot rungs defer to [Translation Governance](translation-governance-dsh.md), [Accessibility Floor](accessibility-floor-dsh.md), [Theme Builder and Starter Kit](theme-builder-and-starter-kit-dsh.md), and [Pilots and Case Studies](pilots-and-case-studies-dsh.md). Credit is factual attribution only — never a ranking or reputation score.

## 3. Terminology

- **rung** — one bounded, completable contribution task.
- **expected result** — the concrete deliverable a rung produces.
- **reviewer** — the role or process that accepts the result.
- **contribution terms** — the licence and rights conditions under which the result is accepted.
- **credit** — factual attribution of who did the work.
- **first step** — the smallest action that starts the rung in a short session.

## 4. Scope

### 4.1 In scope

- The rung catalogue and its required fields.
- The no-account path for entry rungs.
- The rule that credit is attribution, not rank.

### 4.2 Out of scope and deferred

- Contribution licences and rights — [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md).
- Moderation and reviewer authority — [Moderation, Disputes, and Appeals](moderation-disputes-and-appeals-dsh.md) and [Governance and Stewardship](governance-and-stewardship-dsh.md).
- Translation, accessibility, theme, and pilot execution — their owning siblings listed above.
- Financial support and membership — [Support and Donations](support-and-donations-dsh.md) and [Membership Model](membership-model-dsh.md).

## 5. Specification

### 5.1 Design goals and principles

- Bounded: every rung has a small, discoverable first step.
- Legible: every rung states its result, reviewer, terms, and credit up front.
- Non-ranking: participation widens ownership of the work without creating a leaderboard.

### 5.2 Normative requirements

1. The ladder MUST include at least the following rungs: signing one real artifact; testing an explanation; translation review; accessibility work; theme creation; engineering; prior-art research; moderation; institutional pilots.
2. Each rung MUST record all five required fields — expected result, reviewer, contribution terms, credit, and first step — and MAY add difficulty and time estimate.
3. The entry rungs (signing one artifact, testing an explanation) MUST be completable on the no-account path with zero required infrastructure.
4. Every rung's contribution terms MUST reference the applicable licence from [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md), and MUST NOT require contributors to surrender rights beyond those terms.
5. Credit MUST be factual attribution (name and work, where the contributor consents to be named) and MUST NOT be aggregated into a score, level, leaderboard, or rank; this honours the reputation-score watchlist.
6. Rungs that carry moderation or governance authority MUST be listed separately from ordinary contribution rungs and MUST defer authority rules to [Moderation, Disputes, and Appeals](moderation-disputes-and-appeals-dsh.md) and [Governance and Stewardship](governance-and-stewardship-dsh.md).
7. Each rung MUST state its reviewer as a named role or a documented process, not an unnamed gate.
8. The ladder MUST state that using the mark never requires contributing, and contributing never grants the project the right to speak in the contributor's name.
9. The ladder MUST be static, file://-safe, and mirrorable (invariant 4), with changes visible and dated (invariant 5).
10. The ladder SHOULD welcome contributions without mandating disclosure of the contributor's AI tools beyond what the mark itself entails (no forced tool disclosure).

### 5.3 Data model

A rung record: `{ id, title, category, expected-result, reviewer, contribution-terms (link), credit, first-step, difficulty, time-estimate, status (open | paused | retired), requires-authority (bool) }`. This is the single new structure.

### 5.4 Interfaces and behaviours

Not applicable — the ladder is a rendered catalogue; any interactive submission flow defers to [Moderation, Disputes, and Appeals](moderation-disputes-and-appeals-dsh.md) and the hosting siblings.

### 5.5 Lifecycle and operational rules

Rungs are opened, paused, or retired with a dated change record; a retired rung keeps its record (tombstone) rather than disappearing. Change visibility defers to [Changelog and RSS](changelog-and-rss.md).

## 6. Free floor, red lines, and invariants

The ladder MUST NOT gate use of the mark behind contribution, MUST NOT require payment or registration to contribute at the entry rungs, and MUST NOT produce reputation scores or rankings. It MUST NOT force disclosure of a contributor's AI tools or prompts.

## 7. Relationships to sibling specifications

- [Licensing and Mark Policy](licensing-and-mark-policy-dsh.md) — owns the contribution terms every rung references.
- [Moderation, Disputes, and Appeals](moderation-disputes-and-appeals-dsh.md) — owns moderation rung authority and acceptance process.
- [Governance and Stewardship](governance-and-stewardship-dsh.md) — owns reviewer and decision rights.
- [Translation Governance](translation-governance-dsh.md) — owns the translation-review rung.
- [Accessibility Floor](accessibility-floor-dsh.md) — owns the accessibility rung.
- [Pilots and Case Studies](pilots-and-case-studies-dsh.md) — owns the institutional-pilots rung.

## 8. Resolution of the seed's "before implementation" concerns

The seed's concern — "For each task, name the expected result, reviewer, contribution terms, credit, and a small first step" — is resolved by §5.2.2 (all five fields required per rung), §5.2.7 (reviewer named as role or process), §5.2.4 (contribution terms reference the licence), §5.2.5 (credit as attribution), §5.2.3 (first step reachable), and §5.3 (the rung record model).

## 9. Acceptance criteria

1. All listed rung families are present.
2. Every rung records all five required fields.
3. Entry rungs are completable on the no-account path.
4. Credit is attribution-only, with no score, level, or leaderboard.
5. Contribution terms are linked and consistent with the licensing policy.
6. Authority-bearing rungs are separated from ordinary contributions.
7. Using the mark is never contingent on contributing.

## 10. Open questions

- The exact reviewer assignment for each rung (pending governance decisions).
- Whether institutional pilots require a funded or organisational arrangement (deferred to [Pilots and Case Studies](pilots-and-case-studies-dsh.md)).
