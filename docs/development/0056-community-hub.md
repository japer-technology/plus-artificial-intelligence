# Development task — community-hub: Community Hub

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md)
> **Source:** spec [`community-hub-dsh.md`](../suggestions/community-hub-dsh.md) · seed [`community-hub.md`](../suggestions/community-hub.md)
> **Effort:** M · **Phase:** P2 · **Position:** late P1/P2 — publish read-only links version first; open submissions only after moderation programme ships
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Static home composing links to signers, directories, sectors, pilots, case studies, discussions — participation without popularity ranking.
- **Why now / risk of deferring:** The hub shows participation without popularity, and it lands late P1/P2 — read-only links first, submissions only after the moderation programme ships (mini-plan Order). Risk: drifting into a popularity ranking — guarded by the no-metrics rule and the no-endorsement notice (brainstorm open risks).
- **Features to deliver:**
  - A composite static `site/community.html` linking signers, contributors, translators, sector groups, pilots, case studies, discussions.
  - The canonical no-endorsement notice.
  - An accessible low-bandwidth read route.
  - A hub-entry model `{id, kind, source-record, visibility, language, moderation-status, listed-date}` (links + status, never re-authored content).
  - Submissions gated on published moderation/inclusion/governance/archival/multilingual rules.
- **Depends on:** opt-in-signatory-registry, public-directory, sector-and-language-directories (targets to link); moderation rules before any submission gate opens; visibility-and-consent honoured in listings

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Launch mode (read-only vs discussions)
- **Question:** Does the hub launch with discussions, or read-only/link-only first?
- **Option (a):** read-only/link-only first; discussions deferred until moderation rules publish
  - **For:** Spec §5.2.4 gates submissions on published moderation/inclusion/governance/archival/multilingual rules, and the mini-plan orders "read-only links version first" (also digest "Open: launch discussions vs read-only/link-only").
  - **Against:** A read-only launch means discussions — one of the seven required surfaces (spec §5.2.1) — are only explicitly deferred until the moderation rules publish.
- **Option (b):** launch discussions now
  - **For:** Launches the full participation surface immediately, including discussions.
  - **Against:** Opens discussions before the moderation rules publish, violating spec §5.2.4 and §5.2.6 (discussions moderated and archived), and brushes the social-feed watchlist (spec §5.2.2 and §6) — the mini-plan explicitly forbids this ordering.
- **Option (c):** link-only permanently (never host discussions)
  - **For:** Permanently avoids the moderation and social-feed risks of hosting discussions.
  - **Against:** Spec §5.2.1 requires a surface for "open discussions" (or explicit deferral), so "never host discussions" forecloses a required participation kind rather than deferring it.
- **Recommended:** (a) — spec §5.2.4 gates submissions and discussions on published moderation rules; the mini-plan orders "read-only links version first".
- **Your choice:** ✏️

### D2 — Directory ordering rule
- **Question:** What ordering rule governs directory views before Public Directory settles it?
- **Option (a):** defer ordering to public-directory; use a neutral placeholder (e.g. listed-date) until then
  - **For:** Spec §10 defers the exact ordering rule to Public Directory, and a neutral listed-date placeholder avoids pre-empting it.
  - **Against:** Listed-date is a placeholder, not a durable rule, so the ordering will change once Public Directory settles — requiring a later edit.
- **Option (b):** specify alphabetical ordering now
  - **For:** Gives an immediate, deterministic, popularity-neutral ordering.
  - **Against:** Pre-empts the rule Public Directory owns (spec §10 defers the exact ordering rule there), risking a conflict with the sibling's eventual decision.
- **Option (c):** no ordering (unstructured list)
  - **For:** Simplest possible view with no ordering decision to maintain.
  - **Against:** An unstructured list is not a stable, checkable ordering and under-specifies the directory view the spec's required surfaces need; it also risks looking arbitrary to readers.
- **Recommended:** (a) — the spec §10 defers the exact ordering rule to Public Directory.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/community.html` composing links to signers, contributors, translators, sector groups, pilots, case studies, and discussions (or explicitly deferring the not-yet-built kinds).
3. Display no popularity metrics: no follower counts, likes/upvotes, leaderboards, reputation scores, or paid rank; no algorithmic feed.
4. State prominently the canonical non-endorsement notice: "Inclusion is a record of voluntary listing, not approval, certification, or endorsement."
5. Keep public submissions closed until moderation, inclusion, governance, archival, and multilingual rules are published; operate read-only/link-only per §2 D1.
6. Honour visibility modes and consent for every public listing; minimise personal data by linking to records rather than re-hosting them.
7. Provide an accessible, low-bandwidth read route; mark machine translation distinctly from human-reviewed meaning.
8. Use the hub-entry shape `{ id, kind, source-record, visibility, language, moderation-status, listed-date }` holding links and status only.
9. Ensure the index works file://-safe and mirrorable; self-check against §5.

## 4. Constraints (must-nots)
- No follower counts, likes, leaderboards, reputation scores, or paid rank.
- No algorithmic social feed; discussions (if any) moderated and archived.
- Must not require an account to read participation.
- Must not sell placement or personal data; listing buys no legitimacy, rank, or permission.

## 5. Acceptance criteria
- [ ] All participation kinds represented or explicitly deferred.
- [ ] No popularity metric, leaderboard, follower count, or reputation score exists.
- [ ] A visible no-endorsement disclaimer is present.
- [ ] Public submissions remain closed until the five prerequisite rule sets are published.
- [ ] Visibility consent is honoured for every public listing.
- [ ] An accessible, low-bandwidth read route exists.
- [ ] The hub index works file://-safe and mirrorable.
- [ ] Machine translation is never presented as human-reviewed meaning.

## 6. Outputs to produce in the repository
- `site/community.html` — the community hub index.

## 7. Read before building
- [`01-governance-and-content.md`](../planning/programmes/01-governance-and-content.md) — mini-plan
- [`community-hub-dsh.md`](../suggestions/community-hub-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../planning/digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
