# Development task — opt-in-signatory-registry: Opt-In Signatory Registry

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md)
> **Source:** spec [`opt-in-signatory-registry-dsh.md`](../suggestions/opt-in-signatory-registry-dsh.md) · seed [`opt-in-signatory-registry.md`](../suggestions/opt-in-signatory-registry.md)
> **Effort:** L · **Phase:** P1 · **Position:** start P1 as a repo-hosted JSON file + PR/email admission (zero infrastructure — core-extensions §1.3's bootstrap); hosted admission tooling later
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Voluntary, versioned public record of parties and declarations with stable IDs, dates, statuses, revocation, and mirrorable snapshots.
- **Why now / risk of deferring:** This is the P1 foundation every later surface (snapshots, directory, sector views, observatory, dashboard) reads, so it must land first. Deferring lets the "registry as endorsement gravity" risk compound — the visibility-consent and non-endorsement rules are "the only brakes" and must ship as code-level filters, not prose.
- **Features to deliver:**
  - Versioned, hash-pinned `registry/registry.json` with party + declaration entry types (never-reused stable IDs, submission/publication dates, `active|revoked|superseded|disputed` status, dated consent record, optional evidence labels).
  - Rendered `site/registry.html` directory page in neutral publication-date order, with the self-asserted label and non-endorsement notice plus moderation/appeal links.
  - Consent-recorded admission with human review for consequential decisions (repo JSON + PR/email submission paths).
  - Correction events and revocation-as-status (never deletion) per the declaration lifecycle.
  - Deterministic snapshot export contract (identical state → identical bytes).
  - `scripts/validate-registry.mjs` for objective-only admission checks (format/syntax, public-visibility filter, consent presence).
  - Multilingual chrome on the rendered page following the multi-language standard (R4/R12/R13).
- **Depends on:** portable-declaration-schema, declaration-lifecycle, visibility-and-consent, moderation-disputes-and-appeals, governance-and-stewardship

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Release cadence (joint with moderation-disputes-and-appeals, Programme 8)
- **Question:** On what cadence is the registry versioned/released once it holds live entries?
- **Option (a):** every admission batch plus a guaranteed daily floor, each release announced via the changelog and RSS feed
  - **For:** spec §5.5 requires releases "on a documented cadence and after every admission batch", announced via the changelog and RSS feed; the guaranteed daily floor keeps the one-business-day removal rule satisfiable (programme risk "snapshot cadence vs revocation urgency"; brainstorm programme-level decision 1).
  - **Against:** None identified in the sources.
- **Option (b):** every admission batch only, with no periodic floor
  - **For:** spec §5.5's literal minimum is "after every admission batch", so batch-only satisfies the spec with the least operational overhead.
  - **Against:** without a periodic floor a removal could wait indefinitely between admission batches, threatening the one-business-day removal rule the daily floor exists to protect (programme risk "snapshot cadence vs revocation urgency"; programme-level decision 1 requires a guaranteed daily floor, not batch-only).
- **Option (c):** weekly regardless of volume
  - **For:** a fixed weekly cadence is simple and predictable for operators and subscribers.
  - **Against:** weekly is slower than the one-business-day removal rule requires (a removal could wait up to a week), and spec §5.5 ties releases to admission batches rather than a calendar week; programme-level decision 1 requires change-feed-first with a daily floor, not weekly.
- **Option (d):** only after each admission batch, with the floor deferred to a later phase
  - **For:** defers the daily floor, consistent with the cadence being jointly owned with moderation-disputes-and-appeals and "publish later" until Programme 8's rules exist.
  - **Against:** deferring the floor leaves removal propagation unbounded in the interim, so the one-business-day removal rule is not yet satisfiable (programme-level decision 1 says the cadence must be change-feed-first with a guaranteed daily floor now).
- **Recommended:** (a) — matches spec §5.5 ("on a documented cadence and after every admission batch") and keeps the one-business-day removal rule satisfiable.
- **Your choice:** ✏️

### D2 — Self-service admission threshold (joint with moderation-disputes-and-appeals, Programme 8)
- **Question:** What moderation-capacity threshold gates opening self-service (non-human-reviewed) admission?
- **Option (a):** no numeric threshold here — self-service opens only after moderation-disputes-and-appeals (Programme 8) publishes its admission rules and the Sequencing gate clears; until then admission stays human-reviewed via PR/email
  - **For:** spec §5.2 item 8 keeps automation to objective checks "per moderation, disputes, and appeals", and the Sequencing gate (item 4) requires Programme 8's admission rules to be published before any hosted admission queue opens; spec §5.1 principle 5 defers self-service "until moderation scales".
  - **Against:** None identified in the sources.
- **Option (b):** set concrete provisional numbers now (e.g. median review < 24 h, backlog < 50, volunteer/staff coverage plan approved)
  - **For:** concrete provisional numbers (review latency, backlog, coverage plan) give operators a measurable, checkable gate.
  - **Against:** publishing numbers here pre-empts the joint owner — the threshold is owned by moderation-disputes-and-appeals (Sequencing gate item 4; brainstorm programme-level decision 2), and spec §10 leaves the threshold open, so no spec basis exists for specific numbers yet.
- **Option (c):** keep human review indefinitely, with no self-service ever
  - **For:** keeping human review indefinitely is the most conservative reading of spec §5.2 item 8 ("Submission review MUST be human for consequential decisions").
  - **Against:** spec §5.1 principle 5 explicitly contemplates self-service opening "once moderation scales", so "never" contradicts the spec's stated trajectory and strands the moderation-capacity scaling work.
- **Recommended:** (a) — the threshold is owned jointly with Programme 8 (Sequencing gate item 4: its admission rules must be published before any hosted admission queue opens); publishing numbers here would pre-empt that owner.
- **Your choice:** ✏️

### D3 — Registry data licence
- **Question:** Which licence does `registry.json` and the rendered registry page carry at launch?
- **Option (a):** defer to licensing-and-mark-policy (Programme 1) — publish the non-endorsement notice now and mark the licence line "open licence, TBD pending legal review"
  - **For:** spec §5.2 item 9 requires an open licence plus the non-endorsement statement, and spec §7 assigns the registry data licence to licensing-and-mark-policy; IMPLEMENTATION-PLAN §11 lists "licence identifiers per asset class and the registry data-licence, pending legal review" as open.
  - **Against:** spec §5.2 item 9 is a MUST ("MUST be published under an open licence"), so a "TBD pending legal review" line leaves that MUST unfulfilled until Programme 1's review lands.
- **Option (b):** publish under CC0 now
  - **For:** CC0 is a concrete open licence that immediately satisfies the spec §5.2 item 9 "open licence" MUST.
  - **Against:** choosing CC0 now pre-empts licensing-and-mark-policy, which owns licence identifiers per asset class (spec §7; IMPLEMENTATION-PLAN §11 marks the registry data-licence "pending legal review").
- **Option (c):** publish under CC BY 4.0 now
  - **For:** CC BY 4.0 is open and preserves attribution, satisfying the open-licence MUST.
  - **Against:** same pre-emption of licensing-and-mark-policy (spec §7; IMPLEMENTATION-PLAN §11); adopting an attribution requirement now could conflict with the later reviewed decision.
- **Recommended:** (a) — the registry data licence is owned by licensing-and-mark-policy (spec §7; IMPLEMENTATION-PLAN §11 licence-identifiers item); nothing here should pre-empt that review.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Create `registry/registry.json` — a versioned dataset with the party-entry and declaration-entry shapes from spec §5.3 (never-reused `entryId`, `type`, `submitted`/`published` ISO-8601 dates, `status` in `active|revoked|superseded|disputed`, dated `consent` record, optional `evidence` labels).
3. Enforce code-level admission filters: only records with `public` visibility appear; every entry carries a dated public-visibility consent note; revocation sets `status: "revoked"` with a date and the entry stays visible (tombstone per declaration lifecycle); corrections are recorded as correction events, never silent edits.
4. Create `scripts/validate-registry.mjs` performing objective-only checks (format/syntax, public-visibility filter, consent presence, status/date fields); it must reject any entry lacking dated consent or with non-`public` visibility.
5. Create `site/registry.html` — a rendered directory page listing entries in a documented neutral order (publication date), labelling every entry self-asserted, showing the non-endorsement notice, and linking moderation and appeal routes; state the open licence line per D3.
6. Publish the admission process (repo-hosted JSON + PR/email, human review for consequential decisions, self-service gated per D2) and the release cadence per D1; reference governance-and-stewardship for registry governance and moderation-disputes-and-appeals for review/disputes.
7. Confirm deterministic export: identical registry state produces identical snapshot bytes (the contract public-snapshots-and-api will implement); verify file://-safe rendering, then self-check against §5.
8. Give the rendered page's chrome a localisation path per the multi-language standard: English source of truth (R1), per-key fallback (R4), resolution order `?lang=` → saved preference → browser `Accept-Language` → English (R12), English crawler/no-JS default (R13).

## 4. Constraints (must-nots)
- No entry without dated public-visibility consent; only `public` records ever appear (`local`/`unlisted`/`organisation-only` excluded).
- Revoked entries stay visible as `revoked` — never silently removed.
- No paid placement, ordering, or prominence of any kind (RL-4); no funder/sponsor influence on ordering or admission.
- Entries are self-asserted claims — never presented as verified or endorsed (even with evidence labels attached).
- No silent edits — corrections are events; policy changes are versioned and announced.
- No field exposed beyond those the entry type defines.
- Page chrome follows the multi-language standard (R1/R4/R12/R13); entry content is T4 and is never machine-translated.

## 5. Acceptance criteria
- [ ] Registry ships as a versioned, hash-pinned dataset plus a rendered page.
- [ ] Every entry carries a stable identifier, submission/publication dates, status, and a dated consent record.
- [ ] No entry appears without a dated public-visibility consent step.
- [ ] A revoked entry stays visible with status `revoked` and its date.
- [ ] Only `public` records appear in the registry.
- [ ] The dataset carries the open licence (per D3) and the non-endorsement notice.
- [ ] No entry or ordering is purchasable or sponsor-influenced.
- [ ] Identical registry state produces identical snapshot bytes.
- [ ] A policy change appears in the changelog with its version.

## 6. Outputs to produce in the repository
- `registry/registry.json` — versioned, hash-pinned dataset (party + declaration entries).
- `site/registry.html` — rendered registry page (neutral order, self-asserted labels, non-endorsement notice, moderation/appeal links).
- `scripts/validate-registry.mjs` — objective-only admission validation (format/syntax, public-visibility, consent, status/date).

## 7. Read before building
- [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md) — mini-plan
- [`opt-in-signatory-registry-dsh.md`](../suggestions/opt-in-signatory-registry-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../planning/digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (R1/R4/R12/R13 for chrome; T4 for entry content)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
