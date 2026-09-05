# Development task — translation-governance: Translation Governance

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md)
> **Source:** spec [`translation-governance-dsh.md`](../suggestions/translation-governance-dsh.md) · seed [`translation-governance.md`](../suggestions/translation-governance.md)
> **Effort:** M · **Phase:** P1 (process) → P2 (glossary infra) · **Position:** process P1 (extends the existing 40-language discipline); glossary infra P2.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** How +AI content is translated: maintainer groups, status labels, source-version tracking, glossaries, corrections, credit, funded review.
- **Why now / risk of deferring:** Process half P1 (extends the existing 40-language discipline); glossary infra P2 (mini-plan Order). Risk: status drift from the binary flag to the four-status vocabulary (finding G1, multi-language standard §3.2) — the standard's §7 first steps sequence the fix.
- **Features to deliver:**
  - A translation payload schema (language code, status reviewed/community/machine/outdated, `basedOn` pointer + optional hash, maintainers, glossary version, corrections, credits) extending `site/translations/registry.js` and `spec.<code>.js`.
  - Per-language named maintainer groups with published review paths.
  - Versioned per-language glossaries (`docs/translations/glossary.<code>.md`).
  - The document registry (`docs/translations/README.md`).
  - Dated, attributed corrections.
  - Factual translator credit without ranking.
  - Funded review producing the same `reviewed` status as volunteer review.
  - Regional-variant declaration.
  - `file://`-safe static files in the offline pack.
- **Depends on:** specification-versioning-and-hashing (basedOn pointers), flavour-text-localisation, conformance-linter (translation structure checks extend scripts/validate.mjs)

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Re-review window
- **Question:** How long after a specification release before a language's `reviewed` status is considered lapsed (becomes `outdated`)?
- **Option (a):** 30 days
  - **For:** The most current — translations lapse quickly after a spec release.
  - **Against:** Too short for maintainer groups to re-review realistically (spec §10 leaves the window open; the governance notice-period schedule is 90/180 days).
- **Option (b):** 90 days
  - **For:** Gives maintainer groups a realistic window and matches the governance notice-period schedule (90/180 days).
  - **Against:** A translated page can stay `reviewed` for up to 90 days after the spec changes.
- **Option (c):** 180 days
  - **For:** Most generous for under-resourced languages.
  - **Against:** Stale `reviewed` text can persist for six months, weakening "version-locked meaning" (spec §5.1 item 2).
- **Recommended:** (b) — 90 days gives maintainer groups a realistic window and matches the governance notice-period schedule (90/180 days).
- **Your choice:** ✏️

### D2 — Shared vs separate glossary
- **Question:** Do interface taxonomies share the normative glossary, or keep a separate one?
- **Option (a):** one shared glossary per language for normative terms and interface taxonomy
  - **For:** One shared glossary is simplest and matches the "one mapping per language" intent (multi-language standard S7/R7).
  - **Against:** Mixes normative terms with interface taxonomy in one list without separation.
- **Option (b):** two separate glossaries (normative vs interface)
  - **For:** Keeps normative and interface vocabularies fully separate.
  - **Against:** Forks the vocabulary, violating the standard's "one mapping per language across all documents" (S7/R7).
- **Option (c):** one glossary per language with separate sections
  - **For:** The multi-language standard (S7/R7) mandates "one mapping per language across all documents"; separate sections keep the taxonomy distinct without forking the vocabulary.
  - **Against:** One file with sections must be kept well-organised to avoid overlap.
- **Recommended:** (c) — the multi-language standard (S7/R7) mandates "one mapping per language across all documents"; separate sections keep the taxonomy distinct without forking the vocabulary.
- **Your choice:** ✏️

### D3 — Reviewer-attribution location (multi-language standard Q2)
- **Question:** Where does reviewer attribution live long-term — front matter, the registry table, or both?
- **Option (a):** front matter only
  - **For:** Front matter keeps attribution with the document.
  - **Against:** Front matter alone is not summarised in the registry, where status per language is read (standard §4.5).
- **Option (b):** the document registry table only
  - **For:** The registry table centralises status per language.
  - **Against:** Registry-only loses the per-document canonical `reviewers` list the front matter contract requires (standard §4.3: `reviewed` requires at least one reviewer).
- **Option (c):** both — front matter carries the canonical `reviewers` list (enforced by the checker), the registry table summarises status per language
  - **For:** Matches the standard's §4.3 (front matter `reviewers`) and §4.5 (registry table); the checker enforces `reviewed` requires at least one reviewer.
  - **Against:** Two places to keep in sync.
- **Recommended:** (c) — matches the standard's §4.3 (front matter `reviewers`) and §4.5 (registry table); the checker enforces `reviewed` requires at least one reviewer.
- **Your choice:** ✏️

### D4 — Machine-draft value for T3 suggestions (multi-language standard Q3)
- **Question:** Do machine drafts of fast-churning T3 suggestions create value before promotion, or only T1/T2 get machine drafts on demand?
- **Option (a):** machine-draft any T3 suggestion on demand
  - **For:** Machine drafts of any T3 suggestion make ideas accessible early.
  - **Against:** Churn maintenance on ideas that may never ship (standard Q3 flags exactly this).
- **Option (b):** only T1/T2 documents get machine drafts on demand; T3 seeds stay English-first until a suggestion becomes a commitment (then T2 + reviewed translation)
  - **For:** The standard's candidate rule ("only T1/T2 documents get machine drafts on demand") avoids churn maintenance on ideas that may never ship.
  - **Against:** T3 ideas stay English-only until promoted.
- **Option (c):** no machine drafts of T3 at all
  - **For:** No machine drafts of T3 means zero churn.
  - **Against:** Offers no draft path for T3 at all, stricter than the standard's candidate rule.
- **Recommended:** (b) — the standard's candidate rule ("only T1/T2 documents get machine drafts on demand") avoids churn maintenance on ideas that may never ship.
- **Your choice:** ✏️

### D5 — Source-version pinning for `spec.<code>.js` (multi-language standard Q4)
- **Question:** Should `site/translations/spec.<code>.js` migrate to the same `source-version`/`basedOn` pinning so stale normative translations flag as outdated?
- **Option (a):** yes — migrate the site payloads to `basedOn` + `source-version` pinning so stale translations flag as `outdated` (joint with `specification-versioning-and-hashing`, Programme 2)
  - **For:** Closes finding G3 and mirrors the document standard (standard §4.3 `source-version`); names `specification-versioning-and-hashing` (Programme 2) as joint owner for the version referents.
  - **Against:** A migration of all 40 payloads at once.
- **Option (b):** no — keep the site's binary status and rely on `validate.mjs`
  - **For:** No migration; the binary status plus `validate.mjs` already works.
  - **Against:** Leaves finding G3 unresolved — stale normative translations do not flag as outdated when the English source changes.
- **Option (c):** yes, phased — pin first, flag later
  - **For:** Pin first, flag later reduces the risk of a big-bang migration.
  - **Against:** Two-phase means stale translations stay unflagged until the second phase, and spec §10 asks only whether to migrate, not how to phase it.
- **Recommended:** (a) — closes finding G3 and mirrors the document standard; name `specification-versioning-and-hashing` (Programme 2) as joint owner for the version referents.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, the multi-language standard (rules R1–R16), and IMPLEMENTATION-PLAN §4 invariants.
2. Extend the translation payload schema (`site/translations/registry.js` + `spec.<code>.js`): language code, status (`reviewed`/`community`/`machine`/`outdated`), `basedOn` pointer (+ optional content hash), maintainers, glossary version, corrections, credits.
3. Enforce the status rules: `reviewed` requires a named maintainer group approval against the current version; `outdated` is derived when `basedOn` is no longer current; machine text is never presented as human-reviewed meaning.
4. Stand up the document registry (`docs/translations/README.md`) with one row per document × language, updated in the same commit as the translation (R6), with reviewer attribution per §2 D3.
5. Create the per-language glossaries (`docs/translations/glossary.<code>.md`) with one approved rendering per term per language, per §2 D2; version and announce glossary changes in the changelog.
6. Define the maintainer-group review process (named group per language, published review path, transition on handover); languages without a group accept `community` and `machine` statuses only.
7. Apply the re-review window per §2 D1; a new specification release marks stale translations `outdated`.
8. Implement corrections as dated, attributed entries, never silent edits; record regional variants explicitly; credit translators factually without rankings; treat funded review as producing the same `reviewed` status as volunteer review, disclosed per sponsorship policy.
9. Apply the standard's §7 first steps in order: resolve G1 (provenance in data, not comments); reconcile TRANSLATIONS.md with the tree (R16); create the es/fr/ja (+ en reference) glossaries; stand up the document registry wired into deploy.yml; translate TRANSLATIONS.md itself first; machine-draft only per §2 D4, labelled, promoting on commitment.
10. Apply §2 D5 to the site's `spec.<code>.js` pinning; keep translation files plain, file://-safe, mirrorable, and in the offline pack; self-check against §5.

## 4. Constraints (must-nots)
- Machine text MUST NEVER be presented as human-reviewed meaning.
- Corrections MUST be dated entries, never silent edits.
- Funded review MUST produce the same `reviewed` status as volunteer review (and be disclosed).
- Per the multi-language standard: English is the source of truth and every translation says so (R1); the protected set (`+AI`, URLs, code, JSON keys, names) is never altered and machine-checked (R2); a translation is per-document and complete or declared a stub (R3); `reviewed` requires a recorded reviewer and machine drafts are never presented as reviewed (R5); normative terms render in one form per language (R7); `source-version` is recorded and stale translations flagged (R8); translators write logical order, never bidi controls (R9); typography follows the language (R10); content stays readable as plain static files (R11); resolution order explicit → saved → browser → English (R12); English stays the crawler/no-JS default (R13); review follows the written checklist with a second speaker (R14); machine drafts always labelled (R15); guides update in the same commit as the implementation they describe (R16).

## 5. Acceptance criteria
- [ ] Every translation carries language code, status, and `basedOn` pointer.
- [ ] Machine text is labelled wherever rendered and never shown as reviewed.
- [ ] Each language with `reviewed` status has a named maintainer group.
- [ ] A new specification release marks stale translations `outdated`.
- [ ] Corrections ship as dated entries, never silent edits.
- [ ] Regional variants are declared explicitly.
- [ ] Translator credit appears factually with no ranking.
- [ ] Funded review produces the same status as volunteer review and is disclosed.
- [ ] Translation files open from disk and ship in the offline pack.
- [ ] The document registry and glossaries are wired into the deploy workflow and a mismatch fails the deploy (R6).

## 6. Outputs to produce in the repository
- `site/translations/registry.js` + `site/translations/spec.<code>.js` — extended payload: status + `basedOn` + maintainers + corrections + credits.
- `docs/translations/README.md` — the document registry.
- `docs/translations/glossary.<code>.md` — per-language glossaries.
- `docs/TRANSLATIONS.md` — updated operational guide (maintainer groups, review paths, status vocabulary).

## 7. Read before building
- [`05-presentation-themes-generators.md`](../planning/programmes/05-presentation-themes-generators.md) — mini-plan
- [`translation-governance-dsh.md`](../suggestions/translation-governance-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
