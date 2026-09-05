# Agent request — translation-governance: Translation Governance

> **Programme:** 05 · Presentation, Themes, and Generators — [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md)
> **Source:** spec [`translation-governance-dsh.md`](../../../../suggestions/translation-governance-dsh.md) · seed [`translation-governance.md`](../../../../suggestions/translation-governance.md)
> **Effort:** M · **Phase:** P1 (process) → P2 (glossary infra) · **Position:** process P1 (extends the existing 40-language discipline); glossary infra P2.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Re-review window
- **Question:** How long after a specification release before a language's `reviewed` status is considered lapsed (becomes `outdated`)?
- **Options:** (a) 30 days · (b) 90 days · (c) 180 days
- **Recommended:** (b) — 90 days gives maintainer groups a realistic window and matches the governance notice-period schedule (90/180 days).
- **Your choice:** ✏️

### D2 — Shared vs separate glossary
- **Question:** Do interface taxonomies share the normative glossary, or keep a separate one?
- **Options:** (a) one shared glossary per language for normative terms and interface taxonomy · (b) two separate glossaries (normative vs interface) · (c) one glossary per language with separate sections
- **Recommended:** (c) — the multi-language standard (S7/R7) mandates "one mapping per language across all documents"; separate sections keep the taxonomy distinct without forking the vocabulary.
- **Your choice:** ✏️

### D3 — Reviewer-attribution location (multi-language standard Q2)
- **Question:** Where does reviewer attribution live long-term — front matter, the registry table, or both?
- **Options:** (a) front matter only · (b) the document registry table only · (c) both — front matter carries the canonical `reviewers` list (enforced by the checker), the registry table summarises status per language
- **Recommended:** (c) — matches the standard's §4.3 (front matter `reviewers`) and §4.5 (registry table); the checker enforces `reviewed` requires at least one reviewer.
- **Your choice:** ✏️

### D4 — Machine-draft value for T3 suggestions (multi-language standard Q3)
- **Question:** Do machine drafts of fast-churning T3 suggestions create value before promotion, or only T1/T2 get machine drafts on demand?
- **Options:** (a) machine-draft any T3 suggestion on demand · (b) only T1/T2 documents get machine drafts on demand; T3 seeds stay English-first until a suggestion becomes a commitment (then T2 + reviewed translation) · (c) no machine drafts of T3 at all
- **Recommended:** (b) — the standard's candidate rule ("only T1/T2 documents get machine drafts on demand") avoids churn maintenance on ideas that may never ship.
- **Your choice:** ✏️

### D5 — Source-version pinning for `spec.<code>.js` (multi-language standard Q4)
- **Question:** Should `site/translations/spec.<code>.js` migrate to the same `source-version`/`basedOn` pinning so stale normative translations flag as outdated?
- **Options:** (a) yes — migrate the site payloads to `basedOn` + `source-version` pinning so stale translations flag as `outdated` (joint with `specification-versioning-and-hashing`, Programme 2) · (b) no — keep the site's binary status and rely on `validate.mjs` · (c) yes, phased — pin first, flag later
- **Recommended:** (a) — closes finding G3 and mirrors the document standard; name `specification-versioning-and-hashing` (Programme 2) as joint owner for the version referents.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, the multi-language standard (rules R1–R16), and IMPLEMENTATION-PLAN §4 invariants.
2. Extend the translation payload schema (`site/translations/registry.js` + `spec.<code>.js`): language code, status (`reviewed`/`community`/`machine`/`outdated`), `basedOn` pointer (+ optional content hash), maintainers, glossary version, corrections, credits.
3. Enforce the status rules: `reviewed` requires a named maintainer group approval against the current version; `outdated` is derived when `basedOn` is no longer current; machine text is never presented as human-reviewed meaning.
4. Stand up the document registry (`docs/translations/README.md`) with one row per document × language, updated in the same commit as the translation (R6), with reviewer attribution per §1 D3.
5. Create the per-language glossaries (`docs/translations/glossary.<code>.md`) with one approved rendering per term per language, per §1 D2; version and announce glossary changes in the changelog.
6. Define the maintainer-group review process (named group per language, published review path, transition on handover); languages without a group accept `community` and `machine` statuses only.
7. Apply the re-review window per §1 D1; a new specification release marks stale translations `outdated`.
8. Implement corrections as dated, attributed entries, never silent edits; record regional variants explicitly; credit translators factually without rankings; treat funded review as producing the same `reviewed` status as volunteer review, disclosed per sponsorship policy.
9. Apply the standard's §7 first steps in order: resolve G1 (provenance in data, not comments); reconcile TRANSLATIONS.md with the tree (R16); create the es/fr/ja (+ en reference) glossaries; stand up the document registry wired into deploy.yml; translate TRANSLATIONS.md itself first; machine-draft only per §1 D4, labelled, promoting on commitment.
10. Apply §1 D5 to the site's `spec.<code>.js` pinning; keep translation files plain, file://-safe, mirrorable, and in the offline pack; self-check against §4.

## 3. Constraints (must-nots)
- Machine text MUST NEVER be presented as human-reviewed meaning.
- Corrections MUST be dated entries, never silent edits.
- Funded review MUST produce the same `reviewed` status as volunteer review (and be disclosed).
- Per the multi-language standard: English is the source of truth and every translation says so (R1); the protected set (`+AI`, URLs, code, JSON keys, names) is never altered and machine-checked (R2); a translation is per-document and complete or declared a stub (R3); `reviewed` requires a recorded reviewer and machine drafts are never presented as reviewed (R5); normative terms render in one form per language (R7); `source-version` is recorded and stale translations flagged (R8); translators write logical order, never bidi controls (R9); typography follows the language (R10); content stays readable as plain static files (R11); resolution order explicit → saved → browser → English (R12); English stays the crawler/no-JS default (R13); review follows the written checklist with a second speaker (R14); machine drafts always labelled (R15); guides update in the same commit as the implementation they describe (R16).

## 4. Acceptance criteria
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

## 5. Outputs to produce in the repository
- `site/translations/registry.js` + `site/translations/spec.<code>.js` — extended payload: status + `basedOn` + maintainers + corrections + credits.
- `docs/translations/README.md` — the document registry.
- `docs/translations/glossary.<code>.md` — per-language glossaries.
- `docs/TRANSLATIONS.md` — updated operational guide (maintainer groups, review paths, status vocabulary).

## 6. Read before building
- [`05-presentation-themes-generators.md`](../../05-presentation-themes-generators.md) — mini-plan
- [`translation-governance-dsh.md`](../../../../suggestions/translation-governance-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
