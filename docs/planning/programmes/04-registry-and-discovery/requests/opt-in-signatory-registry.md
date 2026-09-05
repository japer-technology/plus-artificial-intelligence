# Agent request — opt-in-signatory-registry: Opt-In Signatory Registry

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md)
> **Source:** spec [`opt-in-signatory-registry-dsh.md`](../../../../suggestions/opt-in-signatory-registry-dsh.md) · seed [`opt-in-signatory-registry.md`](../../../../suggestions/opt-in-signatory-registry.md)
> **Effort:** L · **Phase:** P1 · **Position:** start P1 as a repo-hosted JSON file + PR/email admission (zero infrastructure — core-extensions §1.3's bootstrap); hosted admission tooling later
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Release cadence (joint with moderation-disputes-and-appeals, Programme 8)
- **Question:** On what cadence is the registry versioned/released once it holds live entries?
- **Options:** (a) every admission batch plus a guaranteed daily floor, each release announced via the changelog and RSS feed · (b) every admission batch only, with no periodic floor · (c) weekly regardless of volume · (d) only after each admission batch, with the floor deferred to a later phase
- **Recommended:** (a) — matches spec §5.5 ("on a documented cadence and after every admission batch") and keeps the one-business-day removal rule satisfiable.
- **Your choice:** ✏️

### D2 — Self-service admission threshold (joint with moderation-disputes-and-appeals, Programme 8)
- **Question:** What moderation-capacity threshold gates opening self-service (non-human-reviewed) admission?
- **Options:** (a) no numeric threshold here — self-service opens only after moderation-disputes-and-appeals (Programme 8) publishes its admission rules and the Sequencing gate clears; until then admission stays human-reviewed via PR/email · (b) set concrete provisional numbers now (e.g. median review < 24 h, backlog < 50, volunteer/staff coverage plan approved) · (c) keep human review indefinitely, with no self-service ever
- **Recommended:** (a) — the threshold is owned jointly with Programme 8 (Sequencing gate item 4: its admission rules must be published before any hosted admission queue opens); publishing numbers here would pre-empt that owner.
- **Your choice:** ✏️

### D3 — Registry data licence
- **Question:** Which licence does `registry.json` and the rendered registry page carry at launch?
- **Options:** (a) defer to licensing-and-mark-policy (Programme 1) — publish the non-endorsement notice now and mark the licence line "open licence, TBD pending legal review" · (b) publish under CC0 now · (c) publish under CC BY 4.0 now
- **Recommended:** (a) — the registry data licence is owned by licensing-and-mark-policy (spec §7; IMPLEMENTATION-PLAN §11 licence-identifiers item); nothing here should pre-empt that review.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Create `registry/registry.json` — a versioned dataset with the party-entry and declaration-entry shapes from spec §5.3 (never-reused `entryId`, `type`, `submitted`/`published` ISO-8601 dates, `status` in `active|revoked|superseded|disputed`, dated `consent` record, optional `evidence` labels).
3. Enforce code-level admission filters: only records with `public` visibility appear; every entry carries a dated public-visibility consent note; revocation sets `status: "revoked"` with a date and the entry stays visible (tombstone per declaration lifecycle); corrections are recorded as correction events, never silent edits.
4. Create `scripts/validate-registry.mjs` performing objective-only checks (format/syntax, public-visibility filter, consent presence, status/date fields); it must reject any entry lacking dated consent or with non-`public` visibility.
5. Create `site/registry.html` — a rendered directory page listing entries in a documented neutral order (publication date), labelling every entry self-asserted, showing the non-endorsement notice, and linking moderation and appeal routes; state the open licence line per D3.
6. Publish the admission process (repo-hosted JSON + PR/email, human review for consequential decisions, self-service gated per D2) and the release cadence per D1; reference governance-and-stewardship for registry governance and moderation-disputes-and-appeals for review/disputes.
7. Confirm deterministic export: identical registry state produces identical snapshot bytes (the contract public-snapshots-and-api will implement); verify file://-safe rendering, then self-check against §4.
8. Give the rendered page's chrome a localisation path per the multi-language standard: English source of truth (R1), per-key fallback (R4), resolution order `?lang=` → saved preference → browser `Accept-Language` → English (R12), English crawler/no-JS default (R13).

## 3. Constraints (must-nots)
- No entry without dated public-visibility consent; only `public` records ever appear (`local`/`unlisted`/`organisation-only` excluded).
- Revoked entries stay visible as `revoked` — never silently removed.
- No paid placement, ordering, or prominence of any kind (RL-4); no funder/sponsor influence on ordering or admission.
- Entries are self-asserted claims — never presented as verified or endorsed (even with evidence labels attached).
- No silent edits — corrections are events; policy changes are versioned and announced.
- No field exposed beyond those the entry type defines.
- Page chrome follows the multi-language standard (R1/R4/R12/R13); entry content is T4 and is never machine-translated.

## 4. Acceptance criteria
- [ ] Registry ships as a versioned, hash-pinned dataset plus a rendered page.
- [ ] Every entry carries a stable identifier, submission/publication dates, status, and a dated consent record.
- [ ] No entry appears without a dated public-visibility consent step.
- [ ] A revoked entry stays visible with status `revoked` and its date.
- [ ] Only `public` records appear in the registry.
- [ ] The dataset carries the open licence (per D3) and the non-endorsement notice.
- [ ] No entry or ordering is purchasable or sponsor-influenced.
- [ ] Identical registry state produces identical snapshot bytes.
- [ ] A policy change appears in the changelog with its version.

## 5. Outputs to produce in the repository
- `registry/registry.json` — versioned, hash-pinned dataset (party + declaration entries).
- `site/registry.html` — rendered registry page (neutral order, self-asserted labels, non-endorsement notice, moderation/appeal links).
- `scripts/validate-registry.mjs` — objective-only admission validation (format/syntax, public-visibility, consent, status/date).

## 6. Read before building
- [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md) — mini-plan
- [`opt-in-signatory-registry-dsh.md`](../../../../suggestions/opt-in-signatory-registry-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../../../digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (R1/R4/R12/R13 for chrome; T4 for entry content)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
