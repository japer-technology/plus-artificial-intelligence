# Agent request — sector-and-language-directories: Sector and Language Directories

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md)
> **Source:** spec [`sector-and-language-directories-dsh.md`](../../../../suggestions/sector-and-language-directories-dsh.md) · seed [`sector-and-language-directories.md`](../../../../suggestions/sector-and-language-directories.md)
> **Effort:** M · **Phase:** P2 · **Position:** after the directory — gives the ~30 existing industry themes their first real content
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Sector vocabulary alignment
- **Question:** How does the sector filter vocabulary relate to external classifications at launch?
- **Options:** (a) ship a minimal project-owned sector vocabulary now (declared values only), and defer alignment with external classifications to standards-engagement · (b) adopt an external classification (e.g. ISIC/NACE) as the vocabulary now · (c) no fixed vocabulary — filter on free-text declared sectors
- **Recommended:** (a) — spec §10 defers alignment to standards engagement; a minimal owned vocabulary keeps views filterable without freezing on a premature external scheme.
- **Your choice:** ✏️

### D2 — Low-count suppression threshold
- **Question:** What suppression minimum do sector/language/region/artifact-type views enforce?
- **Options:** (a) inherit the research-observatory disclosure threshold (k = 10) with no per-view override at launch · (b) adopt a stricter per-view minimum (e.g. k = 30) for region/language views with published justification · (c) a looser threshold below k = 10
- **Recommended:** (a) — spec §5.2 item 5 defaults to k = 10 owned by research-observatory; deviating now would split the shared threshold before the observatory sets it.
- **Your choice:** ✏️

### D3 — Language machine-detection labelling
- **Question:** Do language views machine-detect unlabelled records and show them as "detected"?
- **Options:** (a) no machine detection at launch — language views list only declared languages, and unlabelled records are omitted · (b) enable detection to label unlabelled records as "detected" (never "declared") · (c) detect and treat as declared
- **Recommended:** (a) — the design principle is "declared, never inferred"; spec §5.2 item 2 makes detection optional, and omitting unlabelled records is the safest reading (aligns with the multi-language standard's T4 tier: user-generated content is never machine-translated into "reviewed" meaning).
- **Your choice:** ✏️

### D4 — Language filter vocabulary vs the multi-language standard
- **Question:** How does the language filter vocabulary handle the multi-language standard's tiers and status vocabulary (T0–T4; reviewed/machine-draft/untranslated/outdated)?
- **Options:** (a) treat every record as T4 user-generated content — filter only on declared record languages, never machine-translate record content, and never attach a translation-status label to a record; the status vocabulary applies only to the view's own chrome and to content translations, never to a user-declared language · (b) surface the standard's status vocabulary alongside each record's declared language · (c) treat record languages as T1 normative content requiring reviewed translations
- **Recommended:** (a) — the standard's T4 tier puts directory/declaration content out of scope and forbids machine-translating it into "reviewed" meaning (best-practice-multi-language.md §4.1, §4.4).
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (static-first, no trust scores, accessibility, privacy).
2. Create static filtered view pages under `site/directory/` for the four view types — sector, artifact-type, language, and coarse-region — filtering only on values the record holder declared (no inference, no geolocation, no precise location).
3. Version the filter vocabulary in `registry/filter-vocabulary.json` and announce vocabulary changes in the changelog; per D1 use a minimal owned sector vocabulary.
4. Enforce low-count suppression per D2: a filtered view below the minimum shows "fewer than N records" and no list, and renders no member-identifying counts.
5. Repeat the public directory's non-endorsement notice on every view; avoid any implication of professional competence, endorsement, or certification; apply a stereotyping review to copy/imagery/ordering before release.
6. Ensure themed industry pages can consume the identical neutral view data + notices as presentation layers (registered in the theme gallery with per-theme conformance notes once Programme 5 exists).
7. Regenerate views from each snapshot so a record removed from the directory disappears from every view in the same snapshot; meet the accessibility floor and shared navigation; publish views through the snapshot pipeline; self-check against §4.
8. Apply the multi-language standard to language views: treat record content as T4 (never machine-translate; no translation-status on declared languages, per D4), and give the view chrome a localisation path per R4/R12/R13 (per-key fallback, resolution order, English crawler/no-JS default).

## 3. Constraints (must-nots)
- No filtering on values the holder did not declare; no geolocation.
- No implying professional competence, endorsement, or certification.
- Low-count views suppressed (default k = 10).
- No inferred sectors/locations; precise locations never collected, displayed, or inferred.
- No stereotypes — copy, imagery, and ordering reviewed for stereotyping risk.
- Record content is T4 (multi-language standard): never machine-translated into "reviewed" meaning; the translation status vocabulary applies to chrome, never to a user-declared language.

## 4. Acceptance criteria
- [ ] No view filters on a value the record holder did not declare.
- [ ] No view displays or infers precise location.
- [ ] A view below the minimum count shows the suppression notice and no list.
- [ ] Every view repeats the non-endorsement notice.
- [ ] A record removed from the directory disappears from all views in the same snapshot.
- [ ] An industry theme page over a sector view consumes identical data and notices.
- [ ] Filter vocabulary changes appear in the changelog.
- [ ] Views meet the accessibility floor.

## 5. Outputs to produce in the repository
- `site/directory/sectors/<value>.html` — static sector views (declared values only).
- `site/directory/artifact-types/<value>.html` — static artifact-type views.
- `site/directory/languages/<value>.html` — static language views.
- `site/directory/regions/<value>.html` — static coarse-region views.
- `registry/filter-vocabulary.json` — versioned filter vocabulary (sector/artifact-type/language/region values).

## 6. Read before building
- [`04-registry-and-discovery.md`](../../04-registry-and-discovery.md) — mini-plan
- [`sector-and-language-directories-dsh.md`](../../../../suggestions/sector-and-language-directories-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../../../digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (tiers T0–T4, status vocabulary, R4/R12/R13)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
