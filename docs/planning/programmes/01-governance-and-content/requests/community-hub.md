# Agent request — community-hub: Community Hub

> **Programme:** 01 · Governance and Content Foundation — [`01-governance-and-content.md`](../../01-governance-and-content.md)
> **Source:** spec [`community-hub-dsh.md`](../../../../suggestions/community-hub-dsh.md) · seed [`community-hub.md`](../../../../suggestions/community-hub.md)
> **Effort:** M · **Phase:** P2 · **Position:** late P1/P2 — publish read-only links version first; open submissions only after moderation programme ships
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Launch mode (read-only vs discussions)
- **Question:** Does the hub launch with discussions, or read-only/link-only first?
- **Options:** (a) read-only/link-only first; discussions deferred until moderation rules publish · (b) launch discussions now · (c) link-only permanently (never host discussions)
- **Recommended:** (a) — spec §5.2.4 gates submissions and discussions on published moderation rules; the mini-plan orders "read-only links version first".
- **Your choice:** ✏️

### D2 — Directory ordering rule
- **Question:** What ordering rule governs directory views before Public Directory settles it?
- **Options:** (a) defer ordering to public-directory; use a neutral placeholder (e.g. listed-date) until then · (b) specify alphabetical ordering now · (c) no ordering (unstructured list)
- **Recommended:** (a) — the spec §10 defers the exact ordering rule to Public Directory.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants.
2. Create `site/community.html` composing links to signers, contributors, translators, sector groups, pilots, case studies, and discussions (or explicitly deferring the not-yet-built kinds).
3. Display no popularity metrics: no follower counts, likes/upvotes, leaderboards, reputation scores, or paid rank; no algorithmic feed.
4. State prominently the canonical non-endorsement notice: "Inclusion is a record of voluntary listing, not approval, certification, or endorsement."
5. Keep public submissions closed until moderation, inclusion, governance, archival, and multilingual rules are published; operate read-only/link-only per §1 D1.
6. Honour visibility modes and consent for every public listing; minimise personal data by linking to records rather than re-hosting them.
7. Provide an accessible, low-bandwidth read route; mark machine translation distinctly from human-reviewed meaning.
8. Use the hub-entry shape `{ id, kind, source-record, visibility, language, moderation-status, listed-date }` holding links and status only.
9. Ensure the index works file://-safe and mirrorable; self-check against §4.

## 3. Constraints (must-nots)
- No follower counts, likes, leaderboards, reputation scores, or paid rank.
- No algorithmic social feed; discussions (if any) moderated and archived.
- Must not require an account to read participation.
- Must not sell placement or personal data; listing buys no legitimacy, rank, or permission.

## 4. Acceptance criteria
- [ ] All participation kinds represented or explicitly deferred.
- [ ] No popularity metric, leaderboard, follower count, or reputation score exists.
- [ ] A visible no-endorsement disclaimer is present.
- [ ] Public submissions remain closed until the five prerequisite rule sets are published.
- [ ] Visibility consent is honoured for every public listing.
- [ ] An accessible, low-bandwidth read route exists.
- [ ] The hub index works file://-safe and mirrorable.
- [ ] Machine translation is never presented as human-reviewed meaning.

## 5. Outputs to produce in the repository
- `site/community.html` — the community hub index.

## 6. Read before building
- [`01-governance-and-content.md`](../../01-governance-and-content.md) — mini-plan
- [`community-hub-dsh.md`](../../../../suggestions/community-hub-dsh.md) — full spec
- [`01-human-layer-and-governance.md`](../../../digest/01-human-layer-and-governance.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
