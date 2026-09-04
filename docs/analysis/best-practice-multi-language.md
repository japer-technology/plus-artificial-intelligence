# Best Practice: Multi-Language Content

**Status:** Analysis and draft standard. This document reads the project's one
existing multi-language implementation — the specification site — as the
beginning of a project-wide standard, keeps what it already enforces, names
where it drifts, and extends the same rules to `docs/` and `docs/suggestions/`.

**Audience:** anyone who adds a language, translates a document, reviews a
translation, or builds a new surface that will need localisation.

---

## Why this document exists

Everything the project publishes will eventually need to be readable in more
than one language: the specification, the site chrome, and every document under
`docs/` — including the ~100 suggestion seeds in `docs/suggestions/`, each of
which may become a feature, a page, or a public commitment.

The project already has one complete multi-language implementation:

- `site/translations/registry.js` — a runtime registry with validation;
- `site/translations/spec.<code>.js` — 40 language files (English plus 39);
- `site/index.html` — the wiring that consumes the registry;
- 80+ theme pages that reuse the same registry for their interface chrome;
- `docs/TRANSLATIONS.md` — the contributor and reviewer guide;
- `scripts/validate.mjs` and `scripts/render-check.mjs` — automated checks run
  by the deploy workflow (`.github/workflows/deploy.yml`).

That implementation is not an accident of one page. It encodes decisions about
what gets translated, how fallback works, how honesty about translation status
is signalled, and what must never change. This document treats those decisions
as the **standards beginning**: it inventories them, extracts the principles
they implement, records the gaps it found while reading the code against the
guide, and extends the standard so every future multi-language surface —
starting with `docs/` and `docs/suggestions/` — follows the same rules.

### Relationship to other documents

| Document | Role |
| --- | --- |
| `docs/TRANSLATIONS.md` | The operational guide for the specification site. This document generalises its rules; TRANSLATIONS.md stays the site-specific how-to. |
| `docs/suggestions/translation-governance.md` | Suggestion: maintainer groups, status labels, glossaries, source-version tracking. This document makes the parts of it that are already implemented explicit. |
| `docs/suggestions/flavour-text-localisation.md` | Suggestion: decorative theme copy needs its own status and fallback policy. Assumed here, not re-specified. |
| `docs/features.md` | Feature catalogue; line 22 summarises the 40-language system this document analyses. |
| `site/SPECIFICATION.md` | The canonical English normative text. |

---

## 1. The reference implementation

### 1.1 Inventory

| Piece | What it is |
| --- | --- |
| `site/translations/registry.js` | Global `window.PlusAISpecTranslations` registry. `register(code, payload)` validates on entry, refuses duplicates (first registration wins, later ones are reported, never silently overwrite), demotes a payload that claims `"reviewed"` but ships no sections to `"untranslated"`, and exposes `get` / `has` / `codes` / `reviewedCodes` / `problems`. |
| `site/translations/spec.<code>.js` | One file per language. Each calls `registry.register()` exactly once with a payload. Plain `<script>` tags, not `fetch()` or modules, so the page still works over `file://`. |
| `site/index.html` | Loads `registry.js` first, then all 40 language files (41 `<script>` tags), then the page script that reads the registry. |
| Theme pages (`site/*.html`) | 80+ presentation pages reuse the registry for translated interface chrome; their decorative body copy is English-only by design (see `flavour-text-localisation.md`). |
| `docs/TRANSLATIONS.md` | How to add a translation; the five normative terms; the "must not change" list; RTL guidance; template-literal escaping; the review checklist. |
| `scripts/validate.mjs` | Structural validator: runs each file against `spec.en.js` and checks the invariants in section 1.4. |
| `scripts/render-check.mjs` | Smoke test that replays what `site/index.html` does at load time and asserts every supported language resolves to reviewed sections. |
| `.github/workflows/deploy.yml` | Runs `validate.mjs`, `render-check.mjs`, a link check, and sitemap/404 freshness before any deploy. No broken translation can reach production. |

### 1.2 The translation payload

One payload per language, all fields optional except the sections when reviewed:

```js
registry.register("fr", {
  status: "reviewed",                 // "reviewed" | "untranslated"
  interfaceCopy: {                    // page chrome; per-key English fallback
    "documentTitle": "+AI = L’IA m’a aidé. J’en assume la responsabilité.",
    "heroTitle": "L’IA m’a aidé. J’en assume la responsabilité.",
    "translationNote": "…en cas de divergence, le texte anglais original constitue le document normatif.",
    // …
  },
  untranslatedNotice: {               // shown when this language falls back
    "badge": "Non traduit",
    "headline": "La spécification ci-dessous est affichée en anglais.",
    "detail": "…"
  },
  endonym: "Français",                // the language’s own name
  sections: [                         // 26 entries, numbers "1"–"26" in order
    { number: "1", title: "Objet", body: `<p>La notation <code>+AI</code> …</p>` }
  ],
  end: "<p>+AI Specification v0.1</p>…"  // closing panel; English fallback
});
```

Fallback is layered, never all-or-nothing across fields:

| Field | Fallback when absent |
| --- | --- |
| `interfaceCopy` | Each key falls back to English individually. Example: the French file omits `fontLabel`, `fontCurrent`, `fontAria`, `fontChanged`, so the font control stays English while the rest of the chrome is French. |
| `untranslatedNotice` | Falls back to English per key. |
| `endonym` | Falls back to the language code itself. |
| `sections` / `end` | Whole-page fallback: a language without `status: "reviewed"` sections renders the English specification with a visible "not translated" notice. Partial section fallback does not exist by design. |
| `status: "reviewed"` with no sections | Registry demotes to `"untranslated"` and records a problem. A half-finished file cannot silently present itself as complete. |

### 1.3 Runtime behaviour (`site/index.html`)

- **Language list:** 40 codes in `supportedLanguages`; each also needs a static
  `<option>` in the `<select>` and a `<script>` tag. Three edits, one language.
- **Legacy aliases:** `iw→he`, `in→id`, `tl→fil`, `mo→ro` (RFC 5646
  deprecations) are accepted before falling through to English.
- **Resolution order:** `?lang=` URL parameter → saved `plus-ai-language`
  preference → the browser’s ordered `Accept-Language` list → English. Only an
  explicit user choice is ever persisted; detection is never persisted, so a
  stale browser setting cannot permanently override a decision.
- **Direction:** `<html lang>` and `<html dir>` are set before render; the RTL
  set is `ar fa ur he ps`. The spec container gets its own `lang`/`dir` so a
  fallback (English body under an RTL page, or vice versa) still lays out
  correctly, and the untranslated notice uses `dir="auto"`.
- **Typography:** the default stack ends in per-script Noto families so all 40
  scripts render on systems without native coverage; the large CJK stylesheet
  is injected lazily only when `zh`, `ja`, `ko`, or `yue` is shown.
- **Crawlers and no-JS:** detection is client-side only — no redirects, no
  `hreflang` variants; without JavaScript the page falls back to the canonical
  English path (`<noscript>` points at `site/SPECIFICATION.md`).
- **Runtime personalisation:** `data-company-example` elements are removed when
  no company is supplied; `data-json-example` changes escaping; `Eric Mourant`
  and `JAPER Technology` are substituted from URL parameters. This is why those
  strings are in the protected set.

### 1.4 Automated checks (`scripts/validate.mjs`)

The validator runs every language against English and enforces, per section:

- the section count (26) and the numbering `"1"`–`"26"` in order;
- titles without markup characters (they are injected into a `<span>`);
- unescaped `` `${` `` in template literals (must be `` \${ ``);
- **identical HTML tag signature** to English — a translation may reorder
  words, never tags or `class`/`data-*` attributes;
- **counted tokens**: `data-company-example`, `data-json-example`,
  `Eric Mourant`, `JAPER Technology`, `+AI` appear the same number of times;
- **literal anchors**: the section 4 counter-examples (`+Ai`, `+aI`, `+ ai`,
  `AI+`, `AI assisted`), the section 5 sub-headings, and the section 17 JSON
  keys (`provenance`, `ai_assistance`, `material`, `responsibility`,
  `responsible_party`, `notation`) survive byte-for-byte;
- a ban on Unicode bidi control characters;
- no non-canonical mark variants (`+Ai`, `+aI`, `+ AI`, `+ ai`, `＋AI`, `+AL`)
  outside the section 4 counter-example list;
- a warning when a body is byte-identical to English (untranslated?);
- `end`, when present, must contain `+AI`.

`render-check.mjs` then reads the page’s *own* `supportedLanguages` list and
asserts the registry produces reviewed sections for every one, plus balanced
HTML after the runtime’s heading/body concatenation.

### 1.5 Current state at a glance

| Layer | State |
| --- | --- |
| Languages wired | 40 (`en` + 39), all listed in `supportedLanguages`, the `<select>`, and the `<script>` block |
| Specification body | All 40 files ship 26 sections; `render-check.mjs` asserts none falls back |
| Interface chrome | All 40 files ship `interfaceCopy`; the French file shows field-level English fallback in action (4 font keys omitted) |
| `end` panel | All 40 files set it |
| Provenance in payload | All 40 payloads claim `status: "reviewed"` |
| Provenance in header comments | 4 say "reviewed human translation" (`en`, `es`, `fr`, `ja`); 19 say "AI-generated translation, pending native-speaker review"; 17 say "reviewed translation" with no provenance recorded |

The last two rows are the most important finding in this document — see
section 3.2, finding G1.

---

## 2. The standards the implementation already establishes

Each entry states the principle, where it is implemented, and what it means
for any new multi-language surface (documents included).

### S1 — English is the source of truth, and every translation says so

Implemented: `site/SPECIFICATION.md` is canonical; every non-English
`interfaceCopy` carries a `translationNote` saying English governs any
discrepancy; `docs/TRANSLATIONS.md` opens with the same rule.

Consequence: a translation of a document is a **derived artifact**. It must
carry the same note, and the English document is the only text whose wording
is normative. For `docs/suggestions/`, this matters twice: suggestions are
already "not commitments" (`docs/suggestions/README.md`), and their
translations inherit both the non-commitment and the English-governs rule.

### S2 — A translation is a complete unit, or it is declared absent

Implemented: every language ships all 26 sections; a file without them is a
stub, demoted by the registry, and the page shows the orange notice. There is
no half-translated page.

Consequence: document translations are per-document, never per-paragraph.
A partially translated document is either published with an explicit status
(see the status vocabulary in section 4.4) or not published as "translated".

### S3 — Fallback is per field, not structural

Implemented: chrome keys merge over English individually; whole sections fall
back only as a unit with a visible notice.

Consequence: for documents, the fallback unit is the document (English
document shown with a notice), while UI strings fall back per key. Never mix
translated and English paragraphs silently.

### S4 — Status is declared, and code enforces it

Implemented: `status: "reviewed"` without sections is demoted; duplicate
registration is rejected; problems are surfaced (`console.warn`, and
`render-check.mjs` asserts the list is empty).

Consequence: a translation's status must be data, not a comment, so a checker
can enforce it. This is exactly where the current implementation falls short
(G1) and where the document standard must do better.

### S5 — The reader is always told when content is not translated

Implemented: the orange badge + headline + detail, localised where possible,
with the language's endonym, `dir="auto"` so it renders correctly regardless
of page direction.

Consequence: any page or document presented in a fallback language must say
so, in a form the reader can understand.

### S6 — There is a protected set that must never change

Implemented and machine-enforced (section 1.4): the mark `+AI`, the JSON wire
keys, the personalisation attributes, the example names, the invalid
counter-examples, section numbering.

Consequence: every document needs its own short protected list — the mark,
URLs, identifiers, code, names, anchors — checked by the same kind of
validator.

### S7 — Normative vocabulary is mapped once per language, used consistently

Implemented: each language file's header records its five mappings
(MUST → `DOIT`, MUST NOT → `NE DOIT PAS`, …), section 3 defines them with the
English term in parentheses at first use, and TRANSLATIONS.md forbids varying
the rendering ("in a normative document that reads as a change in requirement
strength").

Consequence: the mapping must live in one shared glossary per language, so
every document — specification, guide, suggestion — uses the same rendering.
See section 4.7.

### S8 — Explicit choice beats automatic detection, and detection is never persisted

Implemented: the four-step resolution order in section 1.3, with comments in
the code explaining why each step exists.

Consequence: any future multi-language surface (docs site, readers, builders)
reuses this exact order, including the rule that only explicit choices are
saved.

### S9 — Typography is part of the translation

Implemented: per-script Noto fallback chains; lazy CJK stylesheet injection.

Consequence: a translation is not done when the strings are done; it is done
when the target script renders. The font policy follows the language, not the
theme.

### S10 — The delivery mechanism is static and dependency-free

Implemented: plain `<script>` tags so the page works from `file://`; no build
step required to view a translation; validation happens in scripts, never at
view time.

Consequence: translated documents must remain plain files that are useful
without a build; any tooling (registry, linter) may assist but must not be
required to read a translation.

### S11 — RTL is handled by the browser, never by the translator

Implemented: `dir` on the document and per-container for fallback content;
logical-order HTML; bidi control characters banned by the validator.

Consequence: translators never insert bidi controls and never reorder tags;
rendered surfaces set `lang`/`dir` per content language.

### S12 — Review is gated by a written checklist

Implemented: the TRANSLATIONS.md review checklist — 26 sections present and
ordered, consistent normative terms, `+AI` unmodified, JSON keys untranslated,
attributes preserved, example names unchanged, renders clean, and a second
speaker reads the three highest-weight sections (3, 7, 26).

Consequence: the same pattern — a named, minimal, high-weight subset plus
mechanical checks — scales to every document type.

---

## 3. Findings: what holds, and where the implementation drifts

### 3.1 What holds

- **Machine enforcement of the protected set.** A translation that breaks the
  tag signature, drops a JSON key, or misspells the mark cannot ship, because
  the deploy workflow runs the validator first. This is the strongest single
  asset and the one to copy everywhere.
- **Layered fallback with honesty signals.** Field-level fallback for chrome,
  whole-unit fallback for content, an always-visible notice, and an endonym —
  a reader is never silently shown a language they did not ask for.
- **The one-file-per-language unit of contribution.** Adding or reviewing a
  language is one file plus three wiring edits; the diff is the review.
- **Static-first delivery.** The whole system works from disk, survives
  mirroring, and costs nothing to serve.

### 3.2 Drift and gaps

**G1 — Status provenance lives in comments, not in data.** All 40 payloads
claim `status: "reviewed"`, but the header comments tell a different story:
4 human-reviewed, 19 AI-generated "pending native-speaker review", 17
"reviewed" with no recorded provenance. The registry's binary flag cannot
distinguish them, and no checker can. The standard must upgrade the status
vocabulary (section 4.4) and put provenance in the payload.

**G2 — The guide has drifted from the tree.** `docs/TRANSLATIONS.md` states
that interface chrome is "translated for 25 languages" with 15 falling back
to English, that the untranslated notice is translated for 25, and that `end`
is optional/`null` — while the tree shows all 40 files shipping translated
chrome, notice, and `end`. It also lists the RTL languages as `ar`, `fa`,
`ur`, while `site/index.html` sets RTL for `ar fa ur he ps`. None of this
breaks the page (fallback absorbs it), but a guide that disagrees with the
code teaches the next contributor the wrong thing. Rule R16 addresses this.

**G3 — No source-version pinning.** A translation records *what* it translates
only implicitly, by when it was written. When `spec.en.js` changes, nothing
flags which translations are stale — a translated page can quietly state
requirements the English text has since changed. The fix is the
`source-version` field in section 4.3, mirroring the intent of the
`specification-versioning-and-hashing` suggestion.

**G4 — Documents and suggestions have no localisation path.** Everything
under `docs/` is English-only Markdown. The standard stops at the
specification and interface chrome. Sections 4 and 5 define the path.

**G5 — The single-page assumption.** The registry is designed for one page
with one `<select>`. Documents are many files, so the standard needs a
per-document variant of the same ideas (status, protected set, registry) —
which is what section 4 specifies.

---

## 4. Extending the standard to documents and suggestions

### 4.1 Translation tiers

Not everything under `docs/` deserves the same treatment. The standard
divides content into four tiers:

| Tier | Content | Presentation rule |
| --- | --- | --- |
| **T0 — Never translated** | `+AI` itself, JSON/wire keys, URLs, identifiers, example names, section numbering | Untouched everywhere, enforced by validator |
| **T1 — Normative** | The specification, declaration wording, legal-adjacent text | Only `reviewed` translations are shown; English governs |
| **T2 — Explanatory** | `docs/features.md`, project guides, use guides, process docs | Translated with per-document fallback to English + notice |
| **T3 — Idea seeds** | `docs/suggestions/` and `docs/possibilities/` | English-first. Translations MAY be machine drafts, but a draft MUST be labelled and MUST NOT be presented as reviewed. A suggestion that becomes a commitment moves to T2 and needs a reviewed translation before the commitment ships |
| **T4 — User-generated** | Directory entries, declarations, community content | Out of scope; never machine-translated into "reviewed" meaning (see `translation-governance.md`) |

The tier lives in the document registry (section 4.5), not in a hundred
separate files.

### 4.2 File layout

Mirror the source tree under a single translations root:

```
docs/
  TRANSLATIONS.md                       # operational guide (site) — stays
  analysis/best-practice-multi-language.md   # this document
  suggestions/flavour-text-localisation.md   # canonical English
  translations/
    README.md                           # the document registry (4.5)
    glossary.fr.md                      # per-language glossary (4.7)
    suggestions/flavour-text-localisation.fr.md
    features.fr.md
```

- A translation keeps the English file's **path and basename**, with
  `.<code>` inserted before `.md`.
- English files keep working exactly as today: no front matter is added to
  them unless a document grows its own protected list.
- A translation with no reviewed status still exists on disk; the registry —
  not the filename — decides whether it is offered.

### 4.3 Front matter contract

Every translated document starts with:

```markdown
---
lang: fr
endonym: Français
translation-of: ../../suggestions/flavour-text-localisation.md
status: machine-draft          # reviewed | machine-draft | untranslated
source-version: 276dc59        # commit of the English file this translates
reviewers: []                  # names/handles once reviewed
translation-note: true         # "English governs" note rendered from a template
---
```

- `translation-of` MUST resolve to an existing English file.
- `source-version` MUST be a commit present in history; a checker compares it
  with the current commit of the English file and derives an `outdated` flag
  when they differ.
- `status` MUST be one of the vocabulary below; `reviewed` additionally
  requires at least one entry in `reviewers`.
- The `translation-note` flag renders the standard "in case of discrepancy
  the English text governs" sentence from the per-language glossary, so no
  translator retypes it.

### 4.4 The status vocabulary (upgrading the binary flag)

| Status | Meaning | Behaviour |
| --- | --- | --- |
| `reviewed` | A human (ideally native) speaker has read it; reviewer recorded | Offered by default |
| `machine-draft` | Machine translation, no human review | Offered only when explicitly requested or with a visible draft notice; never silently |
| `untranslated` | Stub or missing | English shown with the untranslated notice (S5) |
| `outdated` *(derived)* | `source-version` ≠ current English commit | Rendered with a "may not reflect the current English text" notice; never a stored status |

Rules: `machine-draft` MUST NOT be presented as reviewed meaning, and
`reviewed` MUST NOT be claimed without a recorded reviewer. This upgrades the
current registry's binary flag (and is the resolution of finding G1); the
same vocabulary applies to the specification site if its payload grows a
third status.

### 4.5 The document registry

`docs/translations/README.md` holds one table row per document × language
pair — the Markdown analogue of `registry.js`:

```markdown
| Document | en | es | fr | ja | latest `source-version` |
| --- | --- | --- | --- | --- | --- |
| suggestions/flavour-text-localisation.md | reviewed | — | machine-draft | — | `<commit>` |
```

- A new translation updates the table in the same commit as the file; a
  checker compares the table with the files on disk and fails on mismatch
  (the analogue of `register()` + `problems()`).
- The checker (`scripts/validate-docs.mjs`, or a mode of `validate.mjs`)
  enforces: `translation-of` targets exist; statuses are legal; `reviewed`
  implies reviewers; protected strings (section 4.6) are untouched; headings
  count and anchors match the English source; no bidi control characters;
  Markdown parses. It is run by the same deploy workflow, so an inconsistent
  or broken translation cannot ship — the property that already protects the
  specification site.
- The registry remains **assistive, never required to read**: the documents
  are plain files (S10).

### 4.6 Protected content per document

Every translated document inherits the universal protected set and MAY add
its own:

- **Universal:** `+AI` (exact case), URLs, anchors and heading structure,
  code and JSON keys, the example names `Eric Mourant` and
  `JAPER Technology`, any `data-*` attribute contract.
- **Document-specific:** anything a script or another document keys off.
  A document that needs one declares it in a short `protected:` front matter
  list; the validator treats those strings like `LITERAL_ANCHORS`.

### 4.7 The per-language glossary

The normative-term mappings that today live in each `spec.<code>.js` header
comment become one shared file per language — `docs/translations/glossary.<code>.md`
— holding:

- the five normative terms (MUST / MUST NOT / SHOULD / SHOULD NOT / MAY) and
  their single approved rendering, with the English term in parentheses at
  first use in any document;
- key project terms (`responsible party`, `artifact`, `declaration`,
  `material assistance`) once the reviewed translations agree on them;
- the standard "English governs" sentence template.

One mapping per language across **all** documents — specification, guides,
suggestions — so a French reader never meets two renderings of MUST. The
glossary itself is a T1 document: English normative, translations reviewed
before use.

### 4.8 Language resolution for documents (rendered view)

Wherever documents are rendered (docs site, reader, builder), reuse the exact
resolution order of `site/index.html`: `?lang=` → saved preference → browser
`Accept-Language` → English. Detection is never persisted; explicit choice
always wins; the canonical English document is always reachable and remains
the crawler-facing default.

### 4.9 RTL and typography for documents

Markdown sources stay in logical order with no bidi control characters
(S11). The rendered surface sets `lang`/`dir` per document language, applies
the per-script font fallback chain, and shows the untranslated/outdated
notices with `dir="auto"`.

---

## 5. The standard, stated as rules

These rules apply to every future multi-language surface in the project,
starting with `docs/` and `docs/suggestions/`. They use the specification's
own normative vocabulary (section 3 of the specification). This document is
English, so the terms appear in their canonical English form; when the rules
are translated, the glossary convention (target-language term plus the
English term in parentheses at first definition) applies as usual.

**Source of truth**

- **R1** The English document **MUST** remain the source of truth; every
  translation **MUST** carry a visible statement that English governs
  discrepancies.
- **R2** The protected set — `+AI`, wire keys, URLs, anchors, code, names,
  and any declared `protected:` strings — **MUST NOT** be altered by a
  translation, and **SHOULD** be machine-checked.

**Completeness and fallback**

- **R3** A translation is per-document and complete, or it is declared a
  stub; partial silent mixing of languages within one document
  **MUST NOT** occur.
- **R4** UI strings **MAY** fall back to English per key; document
  content falls back per document, with a visible notice.

**Status and honesty**

- **R5** Every translation carries a machine-readable status; `reviewed`
  **MUST NOT** be claimed without a recorded reviewer, and a machine draft
  **MUST NOT** be presented as reviewed meaning.
- **R6** The document registry is updated in the same commit as the
  translation, and a checker **MUST** fail the deploy on mismatch.
- **R7** The normative terms are rendered in exactly one form per language,
  defined in the per-language glossary and used consistently across every
  document.
- **R8** A translation **SHOULD** record the `source-version` it translates;
  surfaces **SHOULD** mark translations whose source has since changed as
  outdated.

**Mechanics**

- **R9** Translators write in logical order, never insert bidi control
  characters, and never reorder markup; surfaces set `lang`/`dir` per
  content language.
- **R10** Typography follows the language: per-script fallback fonts are
  part of the translation, not the theme.
- **R11** Translated content remains readable as plain static files without
  a build step; tooling assists, never gates reading.
- **R12** Language resolution uses the order: explicit parameter → saved
  preference → browser preference → English; only explicit choices are
  persisted.
- **R13** The English text stays the default for crawlers and no-JS readers.

**Process**

- **R14** `reviewed` status requires the documented review checklist,
  including a second speaker of the language on the document's
  highest-weight sections.
- **R15** Machine translation **MAY** seed drafts (T3 and below) but is
  always labelled.
- **R16** A guide that describes an implementation **MUST** be updated in
  the same commit as the implementation it describes — the rule the project
  broke in finding G2.

---

## 6. Checklists

### 6.1 Adding a translated document

1. Confirm the target document's tier (section 4.1); T1 targets need a
   reviewer before they ship as `reviewed`.
2. Create `docs/translations/<path>.<code>.md` with the front matter from
   section 4.3; set `status: machine-draft` unless a human has reviewed it.
3. Follow the glossary (`docs/translations/glossary.<code>.md`) for the
   normative terms and key vocabulary.
4. Leave the protected set untouched; do not retype URLs, code, JSON keys,
   names, or `+AI`.
5. Logical order only; no bidi control characters.
6. Add the row to `docs/translations/README.md` in the same commit.
7. Run the document validator (and the existing `scripts/validate.mjs` if the
   change touches the specification site).

### 6.2 Reviewing a document translation (before `reviewed`)

- [ ] Whole document translated; no silent English paragraphs (R3).
- [ ] Front matter correct: `translation-of` resolves, `source-version`
      current, status and reviewer recorded.
- [ ] Normative terms match the glossary exactly, everywhere.
- [ ] `+AI`, URLs, code, JSON keys, names unchanged.
- [ ] Heading structure and anchors match the English source.
- [ ] Renders in the target script; direction correct.
- [ ] A second speaker of the language has read the sections where a
      mistranslation carries the most weight (for the specification: 3, 7,
      26; for other documents: the ones named in their review note).

---

## 7. Suggested first steps

In order, smallest highest-value first:

1. **Resolve G1 in the payload.** Add provenance to the site's translation
   payload (`provenance: { method, reviewers }`) or a third status, so the
   registry's claim matches the header comments; reclassify the 19
   "AI-generated, pending review" files honestly.
2. **Reconcile TRANSLATIONS.md with the tree** (chrome coverage, `end`,
   RTL list) under rule R16.
3. **Create the glossaries** for the four human-reviewed languages (`es`,
   `fr`, `ja` — and `en` as reference) from the mappings already in the
   file headers.
4. **Stand up the document registry** (`docs/translations/README.md`) with
   the current inventory, all rows English, and the validator wired into
   `.github/workflows/deploy.yml`.
5. **Translate `docs/TRANSLATIONS.md` itself first** (T2), into `es`, `fr`,
   `ja` — the process must be readable by the people who will do the work.
6. **Machine-draft the highest-traffic T3 suggestions** on demand, labelled
   `machine-draft`, and promote any suggestion that becomes a commitment
   through a reviewed translation.

---

## 8. Open questions

- Should `machine-draft` content be reachable only via an explicit
  `?lang=`/toggle, or shown with a persistent notice? (Explicit opt-in is
  consistent with S8: explicit choice beats automatic detection.)
- Where should reviewer attribution live long-term — front matter, the
  registry table, or both?
- Do machine drafts of fast-churning T3 suggestions create more
  maintenance than value before a suggestion is promoted? (A candidate rule:
  only T1/T2 documents get machine drafts on demand.)
- Should `site/translations/spec.<code>.js` migrate to the same
  `source-version` pinning, so stale normative translations are flagged the
  same way documents will be?

---

## 9. References

- `docs/TRANSLATIONS.md` — operational guide for the specification site
- `site/translations/registry.js` — runtime registry
- `site/index.html` — wiring: `supportedLanguages`, resolution order, RTL
  set, font policy
- `scripts/validate.mjs`, `scripts/render-check.mjs` — machine enforcement
- `.github/workflows/deploy.yml` — where enforcement runs
- `docs/suggestions/translation-governance.md` — the governance half of this
  standard, as a suggestion
- `docs/suggestions/flavour-text-localisation.md` — policy for decorative
  copy
- `docs/suggestions/specification-versioning-and-hashing.md` — the idea
  behind `source-version` pinning
- `docs/features.md` — feature catalogue entry for the 40-language system
