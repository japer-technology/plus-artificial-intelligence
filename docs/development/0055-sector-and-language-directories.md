# Development task — sector-and-language-directories: Sector and Language Directories

> **Programme:** 04 · Registry and Discovery — [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md)
> **Source:** spec [`sector-and-language-directories-dsh.md`](../suggestions/sector-and-language-directories-dsh.md) · seed [`sector-and-language-directories.md`](../suggestions/sector-and-language-directories.md)
> **Effort:** M · **Phase:** P2 · **Position:** after the directory — gives the ~30 existing industry themes their first real content
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Sector/artifact-type/language/region views over public records, filtering only on declared values, without stereotyping or implying competence.
- **Why now / risk of deferring:** It follows the directory and gives the ~30 existing industry themes their first real content. Deferring leaves the anti-inference and anti-stereotype protections unimplemented while those ~30 industry themes pressure the directory toward characterising sectors.
- **Features to deliver:**
  - Static filtered view pages for sector, artifact-type, language, and coarse-region at `site/directory/` subpaths, filtering only on declared values.
  - Non-endorsement notice repeated on every view.
  - Low-count suppression ("fewer than N records") with no member-identifying counts.
  - No inferred sectors/locations, no geolocation, no precise location (coarse voluntary regions only).
  - No competence/endorsement/certification implication, with a stereotyping review before release.
  - Versioned filter vocabulary announced in the changelog on change.
  - Industry theme pages may consume the identical neutral view data + notices as themed layers.
  - Published through the snapshot pipeline; accessibility floor.
- **Depends on:** public-directory, opt-in-signatory-registry, theme-engine-and-packs, per-theme-conformance-notes

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Sector vocabulary alignment
- **Question:** How does the sector filter vocabulary relate to external classifications at launch?
- **Option (a):** ship a minimal project-owned sector vocabulary now (declared values only), and defer alignment with external classifications to standards-engagement
  - **For:** spec §10 defers "whether sector vocabularies should align with external classifications" to standards engagement; spec §5.2 item 1 requires filtering only on declared sector values, which a minimal owned vocabulary satisfies.
  - **Against:** None identified in the sources.
- **Option (b):** adopt an external classification (e.g. ISIC/NACE) as the vocabulary now
  - **For:** an external classification (ISIC/NACE) gives the sector vocabulary immediate external interoperability.
  - **Against:** spec §10 defers external-classification alignment to standards engagement (itself gated on stability — digest 05 standards-engagement "No engagement before all preconditions recorded met"); adopting a scheme now freezes on a premature external choice.
- **Option (c):** no fixed vocabulary — filter on free-text declared sectors
  - **For:** free-text declared sectors avoid vocabulary maintenance entirely.
  - **Against:** spec §5.2 item 8 requires the filter vocabulary to be versioned and changelog-announced, which free-text cannot provide; a fixed vocabulary is what keeps views filterable.
- **Recommended:** (a) — spec §10 defers alignment to standards engagement; a minimal owned vocabulary keeps views filterable without freezing on a premature external scheme.
- **Your choice:** ✏️

### D2 — Low-count suppression threshold
- **Question:** What suppression minimum do sector/language/region/artifact-type views enforce?
- **Option (a):** inherit the research-observatory disclosure threshold (k = 10) with no per-view override at launch
  - **For:** spec §5.2 item 5 sets the minimum to "the disclosure threshold owned by research observatory (k = 10 by default) unless a stricter per-view value is published with justification"; inheriting k = 10 keeps all surfaces on one shared threshold (brainstorm programme-level decision 3).
  - **Against:** None identified in the sources.
- **Option (b):** adopt a stricter per-view minimum (e.g. k = 30) for region/language views with published justification
  - **For:** a stricter per-view minimum (e.g. k = 30) is explicitly permitted by spec §5.2 item 5 with justification, and is more conservative for region/language views where small groups are more identifying.
  - **Against:** no statistical justification exists yet to deviate (research-observatory owns the default and "no statistical case exists yet"), so a stricter value now would split the shared threshold before the observatory sets it (brainstorm programme-level decision 3).
- **Option (c):** a looser threshold below k = 10
  - **For:** a looser threshold shows more data in filtered views.
  - **Against:** spec §5.2 item 5 fixes the default at k = 10 owned by research-observatory, and a looser threshold increases low-count disclosure risk (spec §5.1 principle 3 "Privacy in small groups").
- **Recommended:** (a) — spec §5.2 item 5 defaults to k = 10 owned by research-observatory; deviating now would split the shared threshold before the observatory sets it.
- **Your choice:** ✏️

### D3 — Language machine-detection labelling
- **Question:** Do language views machine-detect unlabelled records and show them as "detected"?
- **Option (a):** no machine detection at launch — language views list only declared languages, and unlabelled records are omitted
  - **For:** spec §5.1 principle 1 is "Declared, never inferred"; spec §5.2 item 2 makes machine detection optional ("MAY be used only to label ... never as declared fact"), and omitting unlabelled records is the safest reading consistent with the T4 tier (user-generated content is never machine-translated into "reviewed" meaning).
  - **Against:** spec §5.2 item 2 explicitly permits detection to label unlabelled records as "detected", so omitting unlabelled records forgoes a spec-permitted feature that could improve language discovery.
- **Option (b):** enable detection to label unlabelled records as "detected" (never "declared")
  - **For:** spec §5.2 item 2 permits detection to label unlabelled records as "detected" (never declared), which could improve language discovery.
  - **Against:** "detected" still risks sliding toward inference, and the design principle is "declared, never inferred" (spec §5.1 principle 1); the multi-language standard's T4 tier keeps record content out of machine-translation scope.
- **Option (c):** detect and treat as declared
  - **For:** detection plus treating as declared would fill language views fully.
  - **Against:** spec §5.2 item 2 forbids treating detected as declared ("never as declared fact"); this directly violates "declared, never inferred".
- **Recommended:** (a) — the design principle is "declared, never inferred"; spec §5.2 item 2 makes detection optional, and omitting unlabelled records is the safest reading (aligns with the multi-language standard's T4 tier: user-generated content is never machine-translated into "reviewed" meaning).
- **Your choice:** ✏️

### D4 — Language filter vocabulary vs the multi-language standard
- **Question:** How does the language filter vocabulary handle the multi-language standard's tiers and status vocabulary (T0–T4; reviewed/machine-draft/untranslated/outdated)?
- **Option (a):** treat every record as T4 user-generated content — filter only on declared record languages, never machine-translate record content, and never attach a translation-status label to a record; the status vocabulary applies only to the view's own chrome and to content translations, never to a user-declared language
  - **For:** best-practice-multi-language.md §4.1 defines T4 as "User-generated — directory entries, declarations, community content — out of scope; never machine-translated into 'reviewed' meaning"; treating every record as T4 keeps translation status off user-declared languages.
  - **Against:** None identified in the sources.
- **Option (b):** surface the standard's status vocabulary alongside each record's declared language
  - **For:** surfacing the status vocabulary alongside declared languages gives readers translation-status context.
  - **Against:** the status vocabulary (reviewed/machine-draft/untranslated/outdated) describes translations, not user-declared record languages (best-practice-multi-language.md §4.4); attaching it to a record's declared language conflates content-translation status with the record's own language (spec §5.2 item 2: declared record languages only).
- **Option (c):** treat record languages as T1 normative content requiring reviewed translations
  - **For:** treating record languages as T1 imposes reviewed-translation discipline.
  - **Against:** best-practice-multi-language.md §4.1 assigns records to T4, not T1; requiring reviewed translations would machine-translate user-generated content into "reviewed" meaning, which T4 forbids.
- **Recommended:** (a) — the standard's T4 tier puts directory/declaration content out of scope and forbids machine-translating it into "reviewed" meaning (best-practice-multi-language.md §4.1, §4.4).
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (static-first, no trust scores, accessibility, privacy).
2. Create static filtered view pages under `site/directory/` for the four view types — sector, artifact-type, language, and coarse-region — filtering only on values the record holder declared (no inference, no geolocation, no precise location).
3. Version the filter vocabulary in `registry/filter-vocabulary.json` and announce vocabulary changes in the changelog; per D1 use a minimal owned sector vocabulary.
4. Enforce low-count suppression per D2: a filtered view below the minimum shows "fewer than N records" and no list, and renders no member-identifying counts.
5. Repeat the public directory's non-endorsement notice on every view; avoid any implication of professional competence, endorsement, or certification; apply a stereotyping review to copy/imagery/ordering before release.
6. Ensure themed industry pages can consume the identical neutral view data + notices as presentation layers (registered in the theme gallery with per-theme conformance notes once Programme 5 exists).
7. Regenerate views from each snapshot so a record removed from the directory disappears from every view in the same snapshot; meet the accessibility floor and shared navigation; publish views through the snapshot pipeline; self-check against §5.
8. Apply the multi-language standard to language views: treat record content as T4 (never machine-translate; no translation-status on declared languages, per D4), and give the view chrome a localisation path per R4/R12/R13 (per-key fallback, resolution order, English crawler/no-JS default).

## 4. Constraints (must-nots)
- No filtering on values the holder did not declare; no geolocation.
- No implying professional competence, endorsement, or certification.
- Low-count views suppressed (default k = 10).
- No inferred sectors/locations; precise locations never collected, displayed, or inferred.
- No stereotypes — copy, imagery, and ordering reviewed for stereotyping risk.
- Record content is T4 (multi-language standard): never machine-translated into "reviewed" meaning; the translation status vocabulary applies to chrome, never to a user-declared language.

## 5. Acceptance criteria
- [ ] No view filters on a value the record holder did not declare.
- [ ] No view displays or infers precise location.
- [ ] A view below the minimum count shows the suppression notice and no list.
- [ ] Every view repeats the non-endorsement notice.
- [ ] A record removed from the directory disappears from all views in the same snapshot.
- [ ] An industry theme page over a sector view consumes identical data and notices.
- [ ] Filter vocabulary changes appear in the changelog.
- [ ] Views meet the accessibility floor.

## 6. Outputs to produce in the repository
- `site/directory/sectors/<value>.html` — static sector views (declared values only).
- `site/directory/artifact-types/<value>.html` — static artifact-type views.
- `site/directory/languages/<value>.html` — static language views.
- `site/directory/regions/<value>.html` — static coarse-region views.
- `registry/filter-vocabulary.json` — versioned filter vocabulary (sector/artifact-type/language/region values).

## 7. Read before building
- [`04-registry-and-discovery.md`](../planning/programmes/04-registry-and-discovery.md) — mini-plan
- [`sector-and-language-directories-dsh.md`](../suggestions/sector-and-language-directories-dsh.md) — full spec
- [`03-registers-and-discovery.md`](../planning/digest/03-registers-and-discovery.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (tiers T0–T4, status vocabulary, R4/R12/R13)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
