# AN.UPGRADE — site-v2: one entry point, many languages, many themes

**Status:** Draft for review — nothing below has been executed yet.
**Scope:** Every proposed file lives under `site-v2/`. No other directory in
the repository is modified by this refactor.

This document explains what I propose to build, and why, before any code
changes are made. It is structured as: measured current state → the five
constraints and what each forces → the proposed architecture → the build
pipeline → the migration plan → risks → open decisions.

---

## 0. Executive summary

Today the site is **83 hand-cloned HTML pages**. Each of the ~72 themed pages
is the same application — identical body skeleton, identical application
script, all 40 language packs — differing only in (a) one `<style>` block,
(b) three constants (`DEFAULT_ACCENT`, `DEFAULT_FONT`, `DEFAULT_FONT_STACK`)
and (c) a handful of decorative DOM fragments. The repository's own planning
corpus already names this its biggest structural liability ("~90 hand-cloned
theme pages that drift", Programme 5, *theme-engine-and-packs*).

I propose to turn the site into **one engine, many packs**:

- **`index.html`** — a single self-contained runtime file: all HTML, all CSS
  for every theme, all JavaScript and all 40 languages inlined. One server
  request serves the whole application.
- **`index-fat.html`** — the same application for development and testing,
  but with `<script src>` / `<link rel="stylesheet">` inclusions so a file can
  be edited and reloaded without a build step.
- **Themes defined in code, exactly like languages.** A theme registry
  (`themes/registry.js`) plus one pack file per theme (`themes/<code>.css` +
  `themes/<code>.js`), registering `accent`, `font`, `css`, decorative
  fragments and its own translatable interface copy. `?theme=sci-fi-1`
  selects a pack at runtime, a new **Theme** control in the header switches
  it interactively, and the choice persists like the language choice.
- **Every new suggestion is additive**: a new look is one new theme pack and
  one registry line; a new language is one new `translations/spec.<code>.js`;
  nothing shared is edited for either.
- **Every word is multi-language.** Theme-specific "flavour" copy goes
  through the same per-language `interfaceCopy` mechanism the page chrome
  already uses, with the existing English fallback while translations catch
  up.
- **A small deterministic build** (`site-v2/build.mjs`, no dependencies)
  assembles `index-fat.html` and `index.html` from the sources, so the two
  can never drift apart.

Measured, this means `index.html` lands at roughly **3.7 MB raw / ~1.1 MB
gzipped** (fonts remain external and lazy-load by unicode range, as today).
That is the deliberate trade the "single file" constraint asks for: one
request instead of 42+.

---

## 1. Current state (measured, not guessed)

Facts gathered from the working tree on the day this report was written:

| Fact | Measurement |
|---|---|
| HTML files in `site-v2/` | 83 |
| Themed spec pages (have `DEFAULT_ACCENT`) | ~72 |
| Special-purpose pages (404, attract, current, random, crawl, credits, narration, slideshow, speedread, typewriter, rsvp, toolkit) | ~11 |
| Translation files | `translations/registry.js` + 40 `spec.<lang>.js` = 1.30 MB |
| Application script (identical across theme pages) | ~28 KB, differs only in 3 constants |
| Theme CSS, summed across all pages | ~2.40 MB (nearly all unique per theme; largest ~40 KB) |
| Existing single-file prototypes | `world-openai.html`, `world-sci-fi-1.html` (~1.37 MB each) — one theme + all 40 languages inlined |
| Total site-v2 size | ~13 MB (includes assets) |

Structural findings:

1. **The theme pages are clones.** Comparing `index.html` with
   `sci-fi-1.html`: the static body markup differs only by decorative
   fragments — a `.space` background layer, a `.telemetry` readout strip,
   a `.mark-frame` wrapper, a `.holo-scan` sweep. Four pages
   (`index.html`, `art-cubism.html`, `dental.html`, `theme-microsoft.html`)
   have *byte-identical* static markup.
2. **The application script is identical everywhere** except
   `DEFAULT_ACCENT`, `DEFAULT_FONT` and the default font stack. Everything
   else — language detection, RTL handling, font dropdown, accent
   randomisation, ToC, reading progress, `?name=` personalisation — is
   already shared behaviour that is merely copied.
3. **Decorations are presentational.** The largest divergence
   (`hal9000.html`, ~150 word-level diffs) is still only extra readouts,
   status lines and background layers. No theme changes the normative
   specification content.
4. **The language mechanism is already a registry.** `translations/registry.js`
   exposes `window.PlusAISpecTranslations` with `register()/get()/has()/
   codes()/reviewedCodes()/problems()`; each `spec.<lang>.js` registers
   itself. Plain `<script></script>` tags are deliberate so the page works from
   `file://`. This is the pattern the theme mechanism should copy.
5. **A single-file build already exists as a prototype.** The `world-*.html`
   files prove the 1.4 MB single-file shape works today, but each embeds
   only *one* theme and was assembled by hand.
6. **`current.html` + `current.js`** is an iframe wrapper that embeds one
   theme file. It is a stopgap — the iframe breaks deep-linking, doubles
   requests, and is not "themes defined in code".
7. **Repository tooling precedents exist**: `scripts/validate.mjs`,
   `scripts/render-check.mjs`, `scripts/audit.mjs` (Node, no dependencies)
   and `scripts/build_toolkit.py` (Python). A build step is an established
   pattern here; those scripts live outside `site-v2/` and stay untouched.

---

## 2. The five constraints, and what each one forces

### 2.1 — "A single entry point: index.html"

**Forces:** one HTML document that renders every theme and every language;
no per-theme HTML files as entry points. Every other artifact becomes either
a source file consumed by the build (theme packs, translation files, the
shared shell) or a compatibility redirect.

**Why this is the right shape:** with one document there is one place where
the specification, the accessibility behaviour, the URL-parameter handling
and the translation machinery live. The current 83-page arrangement means a
fix to the language machinery has to be applied 83 times; the planning
corpus's conformance-linter idea exists precisely because that drift is
already real.

### 2.2 — "index.html has one more parameter: ?theme=sci-fi-1"

**Forces:** the URL parameter family (`?lang=`, `?font=`, `?highlight=`,
`?name=`, `?companyname=`, `?light`, `?mode=`) gains `?theme=` as the pack
selector, resolved by the same client-side code that resolves `?lang=`.

**Why:** the existing `?theme=`/`?mode=` parameters only toggle
light/dark. Backward compatibility is kept by the precedence rule in §3.4 —
a `theme` value that names a registered pack selects the pack; the legacy
values `light`/`dark` keep their old meaning; `?mode=` remains the explicit
light/dark override. URLs like `sci-fi-1.html` can therefore be expressed
canonically as `index.html?theme=sci-fi-1` without breaking anyone who
still passes `?theme=light`.

### 2.3 — "Every new suggestion is additive"

**Forces:** an extension model where adding a theme or a language never
requires editing shared code. The engine must read its palette from
registries, not from hard-coded branches.

**Why:** the current model is subtractive-in-practice — every new theme
clones 2,000+ lines and every future fix must be re-applied to all clones.
A registry + packs model makes each suggestion a self-contained, reviewable
unit (the planning corpus calls these "theme packs" and already reserves
`surprise-me-theme-mode`, `custom-themes` and `theme-gallery` as future
additive features that all assume exactly this mechanism).

### 2.4 — "Every word multi-language; suggestions are variations of the language mechanism"

**Forces:** any new visible string — including a theme's own chrome, its
flavour readouts ("SYS:// +AI", "SPEC 0.1", "ORBITAL LINK · NOMINAL"), its
display name in the theme dropdown — must travel through the existing
per-language `interfaceCopy` mechanism, never appear as raw text in HTML.

**Why:** the page already treats language as data (`data-text`,
`data-html`, `data-title` keys resolved against `interfaceCopy[lang]`).
Making theme copy follow the same path means one mechanism serves both
dimensions, the English fallback already exists, and a theme with missing
translations degrades gracefully instead of breaking. The planning corpus's
*flavour-text-localisation* suggestion ("decorative theme copy as
presentation with its own localisation status and neutral fallback, never
touching meaning") is exactly this rule.

### 2.5 — "index-fat.html for testing with inclusions; runtime upload is a single index.html"

**Forces:** two build products from one source tree: a development/testing
file with separate requests (fast edit-reload cycle, no tooling in the loop)
and a production file with zero local-file dependencies (one request, works
from `file://`, offline, and as the upload artifact).

**Why:** editing inside a 3.7 MB generated file is unworkable; editing many
small files is pleasant. A deterministic assembler means the tested
`index-fat.html` and the deployed `index.html` are the same bytes modulo
the inclusions — the exact property the cloned-pages world lost.

---

## 3. Proposed architecture

### 3.1 Target layout (all new files inside `site-v2/`)

```
site-v2/
  AN.UPGRADE.md              ← this report
  SPECIFICATION.md           ← unchanged
  index.html                 ← BUILT: single-file runtime (html+js+css inline)
  index-fat.html             ← BUILT: dev/test version with inclusions
  build.mjs                  ← the assembler (+ --check drift mode)
  src/
    shell.html               ← <head> + the one body skeleton, with anchor points
    app.js                   ← the engine (language + theme + font + accent + ToC + progress)
    base.css                 ← structural CSS shared by every pack (layout skeleton, controls)
  themes/
    registry.js              ← window.PlusAISpecThemes  (mirror of translations/registry.js)
    default.css / default.js ← the current index.html look, as a pack
    sci-fi-1.css / sci-fi-1.js
    …one pair per existing theme…
  translations/              ← unchanged: registry.js + spec.<lang>.js (40 languages)
  assets/                    ← unchanged (posters, favicon)
  legacy/                    ← OPTIONAL (Decision D2): built redirect stubs for old permalinks
```

**Why this split:** `src/` holds what every pack shares (the skeleton and
the engine — the "hooks contract" the planning corpus already names);
`themes/` holds only presentation; `translations/` is untouched so all 40
existing language files carry over as-is. The build concatenates; nothing
at runtime fetches.

### 3.2 The runtime: one document, mounted CSS

`index.html` ships with:

- the `<head>` (one theme-detection script, the Google Fonts links, which
  stay external as progressive enhancement — the page already degrades to
  system fonts offline),
- **all** theme CSS embedded as one `<style id="theme-<code>">` block per
  pack, all **disabled** by default (`media="not all"`),
- the theme registry, the 41 translation files and the engine, inlined,
- the one body skeleton with anchor points for decorations.

At load, the engine resolves the active pack (§3.4), enables exactly that
pack's `<style>` block and its decoration fragments, and applies its tokens
(accent, default font, `meta theme-color`, default light/dark mode). No
other pack's CSS is live, so the packs cannot clash — each stays as
self-contained as the stylesheets are today.

**Why mount-per-pack rather than extracting "deltas":** the 72 stylesheets
are already full, independent, tested documents. Deriving a shared
super-CSS with per-theme variable overrides would be a rewrite of every
theme with no user-visible benefit and high regression risk. The
single-file constraint costs bytes, not structure; we accept the ~2.4 MB
because the constraint explicitly prefers one request over many.

### 3.3 Theme packs: defined in code, like the languages

`themes/registry.js` is a copy of the translation registry's shape:

```js
window.PlusAISpecThemes = {
  register(code, payload) { /* validate; never overwrite an existing pack */ },
  get(code), has(code), codes(), reviewedCodes(), problems()
};
```

A pack registers (example, `themes/sci-fi-1.js`):

```js
(function (registry) {
  registry.register("sci-fi-1", {
    name: { en: "Sci-Fi 1 — Orbital HUD", /* + translations as they arrive */ },
    status: "reviewed",                 // "reviewed" | "experimental" — like languages
    defaultMode: "dark",                // the pack's own light/dark starting point
    accent: "#35D0FF",                  // was DEFAULT_ACCENT
    font: "Exo 2",                      // was DEFAULT_FONT
    fontStack: "\"Exo 2\", ui-sans-serif, …", // was DEFAULT_FONT_STACK
    themeColor: "#35D0FF",              // <meta name="theme-color">
    cssId: "sci-fi-1",                  // matches the <style id="theme-sci-fi-1"> block
    decorations: [                      // presentational DOM ops, applied on activation
      { op: "insertBefore", anchor: ".hero", html: "<div class=\"space\" aria-hidden=\"true\"></div>" },
      { op: "insertAfter",  anchor: ".site-header", html: "<div class=\"telemetry\" aria-hidden=\"true\">…</div>" },
      { op: "wrap",         anchor: ".hero h1", htmlBefore: "<div class=\"mark-frame\">", htmlAfter: "</div>" }
    ],
    interfaceCopy: {                    // flavour text, keyed by language like the page chrome
      en: { telemetrySpec: "SPEC", telemetryStatus: "ORBITAL LINK · NOMINAL", … },
      ja: { … }                          // absent languages fall back: pack[lang] → pack.en → page copy
    }
  });
})(window.PlusAISpecThemes);
```

The CSS lives in `themes/<code>.css` and the build embeds it into the
corresponding `<style>` block; in `index-fat.html` it is a
`<link rel="stylesheet" href="themes/sci-fi-1.css" media="not all">` the
engine flips on activation.

**Why CSS and JS in two files per pack:** CSS stays plain, lintable,
diff-able, editable CSS (no JS string escaping); the manifest stays data.
Together they form one reviewable unit — "one file pair per suggestion".

**Why decorations are ops and not variant skeletons:** the measured markup
differences across all 72 themes are insertions and small wrappers around
the *same* skeleton. Anchor-based ops (`insertBefore/insertAfter/wrap/
setAttribute`) cover every case found; they are applied only on activation
and removed on theme change, and they are forbidden from touching
`#specContent` so no theme can alter normative meaning. `hal9000.html` and
`startrek.html` are the stress-test cases for the exact op set; the DSL is
finalised against them in Phase 2, before mass migration.

### 3.4 Theme selection and precedence

New header control: a **Theme** `<select>`, sibling of the Language and
Font controls (label text comes from new `interfaceCopy` keys:
`themePack`, `themePackAria`).

Resolution on load (mirrors `detectLanguage`):

1. `?theme=<code>` — explicit per-visit request, never persisted over a
   saved choice;
2. saved `plus-ai-theme` preference (like `plus-ai-language`);
3. the default pack (`"default"` — today's index look).

`?theme=light`/`?theme=dark` (and `?mode=`) keep their current meaning
when the value does not name a registered pack; a pack may still be
combined with `?mode=light` to force the light variant of that pack. The
existing per-pack light/dark toggle (the button) continues to operate on
`<html data-theme>`, now per pack via the pack's own `:root[data-theme]`
rules.

**Why persist and mirror the language logic:** the two dimensions are the
same problem — a user-visible choice with URL override and stored
preference. Reusing the same precedence makes behaviour predictable and
the code small. The `data-language-source` observability pattern is copied
as `data-theme-source` for the same testability reasons.

### 3.5 Multi-language flavour copy (constraint 4)

The engine already resolves `interfaceCopy[language]` for chrome. Theme
flavour is resolved as a chain:

```
pack.interfaceCopy[activeLanguage]
  → pack.interfaceCopy[en]
  → the page's base interfaceCopy[activeLanguage]
```

So a theme in Japanese shows its Japanese flavour where translated and
English where not — the same honest fallback the specification body uses
today. New *base* chrome keys introduced by this refactor (`themePack`,
`themePackAria`, and any wording for the theme dropdown) are added to
`spec.en.js` and to every `spec.<lang>.js` that has the capacity; until a
language catches up, the existing English-fallback spreads them
automatically. **No new visible word is allowed to ship outside this
mechanism.**

Theme display names: pack `name` is itself a per-language map (a proper
noun like "LCARS" simply repeats across languages, which is legitimate
translation output).

### 3.6 What stays exactly as it is

- `translations/` — untouched; the 40 languages load in `index-fat.html`
  exactly as they do in today's theme pages.
- URL parameters `lang/language`, `font`, `highlight/highlightcolour/
  highlightcolor/accent/colour/color`, `name`, `companyname/company`,
  `light`, `mode` — unchanged semantics.
- Accessibility behaviour: skip link, `aria-live` announcement, RTL
  handling, reduced-motion, print stylesheet, contrast-safe accent
  computation — one implementation for all packs now, instead of 72
  copies.
- The normative content: packs cannot touch `#specContent`; the engine
  remains the only writer of specification text.

---

## 4. Build pipeline (constraint 5)

`site-v2/build.mjs` — plain Node, no dependencies, following the
`scripts/*.mjs` precedent.

Inputs: `src/shell.html`, `src/base.css`, `src/app.js`, every
`themes/*.{css,js}`, every `translations/*.js`.

Outputs:

| Output | Shape |
|---|---|
| `index-fat.html` | skeleton + `<link rel="stylesheet" href="themes/<code>.css" media="not all">` + `<script src="themes/registry.js">` + one `<script src="themes/<code>.js">` per pack + translation `<script src>` tags + `<script src="src/app.js">` |
| `index.html` | the same document with every referenced file inlined: CSS into per-pack `<style media="not all">` blocks, JS into `<script>` blocks, in the exact load order of the fat file |

Properties the build must guarantee:

1. **Deterministic** — same inputs, same bytes; file order sorted; no
   timestamps.
2. **Drift-checked** — `node build.mjs --check` rebuilds to a temp file and
   compares; a mismatch exits non-zero. This is the conformance-linter
   idea from the planning corpus, applied at the only place drift can now
   occur: between sources and the uploaded file.
3. **`file://`-safe** — `index.html` must contain no fetch/import of local
   files; opening it from disk must behave identically to today's pages
   (the whole reason the registry pattern exists).
4. **Verifiable** — `render-check.mjs`-style smoke tests run against both
   products.

Estimated product sizes (measured inputs today):

| Product | Size |
|---|---|
| `index.html` (all 72 packs + 40 languages + engine) | ~3.7 MB raw · ~1.1 MB gzip (fonts external) |
| `index-fat.html` | ~90 KB of markup + the same sources served as separate files |

---

## 5. Migration plan (additive, each phase shippable)

**Phase 0 — this report.** Nothing executed yet; decisions D1–D7 below
answered first.

**Phase 1 — engine extraction (no visual change).**
Extract the shared skeleton, `app.js` and `base.css` from the current
`index.html`; parameterise the three constants onto the `default` pack;
write `build.mjs`; generate `index-fat.html` and `index.html`. Success
criterion: the built `index.html` renders byte-equivalent to today's
`index.html` (same DOM, same strings, same behaviour) for the default
theme, all 40 languages, `?name=` personalisation, RTL and print. The old
83 pages remain untouched and fully working throughout.

**Phase 2 — the theme mechanism.**
Theme registry, theme `<select>`, `?theme=` resolution and precedence,
pack activation (CSS mount + tokens + decorations + flavour copy), the
`default` pack plus **`sci-fi-1`** first (it is the constraint's named
example), then the two `world-*` prototypes' themes (`openai`). Finalise
the decoration DSL against `hal9000` and `startrek`.

**Phase 3 — pack migration, in tranches.**
Convert the remaining ~69 theme pages into pack pairs. This is mechanical
per theme — extract `<style>`, the three constants, decoration ops and
flavour strings — and fully additive: one new file pair and one registry
line each, no shared-file edits. Tranches keep every batch reviewable;
`--check` keeps the build honest.

**Phase 4 — permalinks and retirement.**
Per decision D2: either replace each legacy `*.html` with a tiny
meta-refresh/canonical stub built into `legacy/`, or rely on a host-level
rewrite (an `infra/` change — outside this refactor's scope) or retire the
URLs. Remove `current.html`/`current.js` (superseded by the theme
selector) and the `world-*` prototypes per decision D3.

**Phase 5 — additive future suggestions (constraints 3 and 4).**
A new theme = `themes/<code>.css` + `themes/<code>.js`; a new language =
`translations/spec.<code>.js`; a "surprise me" mode = a `?theme=random`
behaviour in the engine and one `interfaceCopy` key across language
packs — all additive, all through the two registries. `custom-themes`,
`theme-gallery` and `surprise-me-theme-mode` from the planning corpus
become straightforward next increments.

---

## 6. The special-purpose pages (out of scope of the merge)

`404.html`, `attract.html`, `random.html`, `crawl.html`, `credits.html`,
`narration.html`, `slideshow.html`, `typewriter.html`, `speedread.html`,
`rsvp.html`, `toolkit.html` are not visual themes of the specification
page; they are separate experiences (a screensaver loop, a narration view,
a toolkit application) that embed the same translations. 

**Recommendation:** leave them as additive standalone pages for now.
They already share the translation mechanism; they are not part of the
"one spec, many looks" problem, and folding them into `index.html` would
bloat the entry point with behaviour most visitors never run. They become
candidates for `?view=`-style unification only if a later suggestion asks
for it. This keeps the single-entry-point constraint honest: `index.html`
is the one entry point for the multi-language, multi-theme *specification
site*.

---

## 7. Testing and conformance

- **Parity tests (Phase 1):** the built default `index.html` must produce
  the same DOM, strings and control states as today's `index.html` across
  a fixed matrix: 40 languages × {default theme} × {dark, light} ×
  {`?name=`, `?companyname=`, `?highlight=`, `?font=`, `?lang=`}.
- **Pack conformance (Phase 2+):** `build.mjs --check` plus a pack linter
  that enforces: valid `cssId` with matching CSS block; decoration anchors
  that exist in the skeleton; decoration ops that never target
  `#specContent`; `interfaceCopy` keys resolved against the base key set;
  contrast of `accent` against both modes.
- **Manual matrix:** `file://` open, HTTP open, `?theme=sci-fi-1`, theme
  switch + reload persistence, language switch under each theme, RTL
  (Arabic/Hebrew/Urdu/Persian/Pashto) under each theme, CJK font
  injection, keyboard-only navigation, reduced-motion, print, 320 px
  reflow, offline (fonts disabled).
- **Reproducibility:** `--check` in CI (or a pre-upload hook) refuses to
  ship `index.html` that does not match the sources.

---

## 8. Risks and mitigations

| Risk | Mitigation |
|---|---|
| 3.7 MB single file is large | It is the constraint's explicit trade; fonts stay external, gzip serves ~1.1 MB, the whole file cacheable; the `world-*` prototypes already prove the shape |
| CSS collisions between packs | Only the active pack's `<style>` is mounted; packs never share selectors at runtime |
| Decoration DSL cannot express some theme | Finalise the DSL against the two worst cases (`hal9000`, `startrek`) before mass migration; fallback is a vetted small set of skeleton variants, still engine-rendered |
| Legacy `?theme=light` breakage | Precedence rule §3.4 keeps `light`/`dark` working when the value is not a pack name |
| Translation backlog for new chrome keys | English fallback is automatic; the same honest "untranslated" notice pattern as the spec body |
| Drift between fat and single products | One build produces both; `--check` makes drift a hard failure |
| Regression across 72 themes | Tranche migration with parity checks per tranche; old pages stay live until their pack is verified |
| `name`/`zoom` semantics from `current.html` | Retired with the wrapper; the theme selector replaces it (D3) |

---

## 9. Open decisions (please answer before Phase 1)

**D1 — Default theme.** Which pack is the out-of-the-box look of
`index.html`? *(Recommendation: `default` = the current index look.)*

**D2 — Legacy permalink fate.** Replace the 72 legacy `*.html` files with
tiny built redirect stubs under `site-v2/legacy/` (keeps URLs, still
single-file *application*), rely on a host rewrite (an `infra/` change,
outside this refactor), or retire the URLs? *(Recommendation: built
redirect stubs.)*

**D3 — Prototypes.** Delete `current.html`/`current.js` and the
`world-*.html` prototypes once `index.html` ships? *(Recommendation: yes,
after the migrated packs pass parity.)*

**D4 — Pack file format.** Two files per pack (`<code>.css` + `<code>.js`,
recommended) or one JS file embedding the CSS as a string (closer
parallel to "one file per language")?

**D5 — Theme dropdown.** Place the Theme control in the header next to
Language (recommended) or expose theme switching only via URL?

**D6 — Build tool.** Plain Node `build.mjs` (recommended, matches
`scripts/*.mjs`) or Python (matches `scripts/build_toolkit.py`)?

**D7 — Tranche order for Phase 3.** Migrate the sci-fi / popular themes
first (recommended), or migrate alphabetically?

---

## 10. Why this satisfies the five constraints, in one table

| # | Constraint | How the proposal satisfies it |
|---|---|---|
| 1 | Single entry point `index.html` | One built runtime document; theme packs and translations are source data, not pages |
| 2 | `?theme=sci-fi-1` displays themes defined in code like languages | Theme registry + packs mirroring `translations/registry.js`; URL param + header control + persistence, same precedence as languages |
| 3 | Every new suggestion additive | New theme = one pack pair + one registry line; new language = one translation file; shared files untouched |
| 4 | Every word multi-language | All chrome and theme flavour copy flows through per-language `interfaceCopy` with English fallback; no new visible string ships outside the mechanism |
| 5 | Fat file for testing, single file at runtime | One deterministic build emits `index-fat.html` (inclusions) and `index.html` (fully inlined); `--check` keeps them equivalent |

---

*This report proposes the architecture and the migration path, and stops
there. No file has been modified; execution begins only after the decisions
above are confirmed.*

---

# 11. Execution status (appended after approval)

**Decisions confirmed by the human:** D1 sci-fi-1 default · D2 built redirect
stubs · D3 delete current.html/current.js and world-*.html · D4 two files per
pack · D5 header control + URL · D6 Node build.mjs · D7 migrate every theme.
**Later directives:** toolkit.html is in scope (it becomes the `toolkit`
pack — an application layered on the openai theme); the corpus under
`docs/development/` and `docs/suggestions/` governs the design ("look deeply
… as designed before this processing"); `world-*.html` are deleted outright
(the author's first optimisation attempt, superseded); the top-left `+AI`
wordmark is repurposed as the super menu on every page.

**Corpus deltas adopted beyond this report** (with sources):

- Pack layout follows the designed corpus, not the two-file proposal:
  `packs/<code>/{manifest.json, theme.css, flavour.json, note.json}`
  (theme-engine-and-packs 0052 §6) + optional `behaviour.js`; the build
  generates `pack.js` registrations so `file://` needs no fetch.
- Neutral fallback pack `packs/neutral` (accessibility floor, 0001) with a
  visible notice on broken packs (0052 §5.2.7); its own CSS stays below
  20 KB against the 100 KB neutral-route budget (0001 D1).
- Pack manifest fields per 0052 §5.3 (packId, version, hash, languages,
  accessibility, conformanceChecked, assets) extended with `name`,
  `maintainer`, `license`, `tokens`, `decorations`,
  `interfaceCopyOverrides`, `script`.
- Flavour copy follows flavour-text-localisation 0053: `flavour.json` with
  `neutral` fallback + `localised` entries carrying status
  (neutral/reviewed/community/machine); machine flavour renders labelled;
  `+AI` stays literal (T0 protected set).
- Per-theme conformance notes `note.json` per 0054 §5.3.
- The wordmark is the super menu: the shared-project-navigation route block
  (the eight `nav.*` groups) plus site links, rendered by the engine from a
  versioned manifest (`src/nav.json`) with localised labels and per-key
  English fallback (0018 §5.2.8); destination pages ship additively.
- Spec fingerprint slot: the footer shows the 12-char sha256 of
  SPECIFICATION.md linking to it (0004 §5.2.8); hash definition 0004 §5.2.4.
- Legacy stubs are param-preserving, forward-only, with `rel="canonical"`
  and a recorded reason (0034 §5.2.9); `current.html` becomes a stub,
  `current.js` and `world-*.html` are deleted.
- Query canonical form: parameters order-insensitive, canonical links sorted
  (0034 §5.2.4); `?theme=` resolution mirrors R12 and only explicit choices
  are persisted.
- Per-script font fallbacks belong to the translation layer, not the pack
  (0001): the engine forces the per-script Noto chain onto every pack stack.
- The theme index is generated (`packs/index.js` from the pack collection),
  not hand-maintained (0058); random/attract/404 consume it.
- New interface chrome keys (`themePack`, `themePackAria`,
  `flavourMachineLabel`, `packFallback*`, `nav*`) added to `spec.en.js` and
  spread to all languages by the existing per-key fallback (R4).

**Deviations from the corpus, recorded deliberately:**

- Everything lives under `site-v2/` (the human's scope), not `site/`.
- The corpus wants legacy pages kept as frozen instances; the human chose
  redirect stubs instead. Frozen copies of the same pages remain in
  `site/` and the archive for reference (no silent change is possible: the
  redirect is a recorded, versioned replacement).
- `hooks-contract.json` lives in `site-v2/` and records the eight `nav.*`
  hooks as reserved-with-exception until their destination pages exist
  (escape-hatch pattern, 0058 §5.2.7).
- The eight nav destination pages, the builder, the gallery, surprise-me
  mode and custom themes remain future additive increments of this same
  engine (constraint 3).

**Post-completion fix round (user-reported):** the sci-fi-1 holo-scan
effect was rendering outside its mark-frame because several packs split one
HTML wrapper across two decoration ops; browsers auto-close the bare
`<div>` in `insertAdjacentHTML`, so the wrapper ended up empty. Root fixes:
the engine's `wrap`/new `wrapInner` now parse `before`+`after` around a slot
(and resolve flavour placeholders inside them); 37 packs' decorations were
rewritten to balanced ops (wrap/wrapInner/move) preserving their intended
structure; `build.mjs` now REFUSES to build any pack with an unbalanced
fragment, and `tools/balance-check.mjs` + `tools/runtime-check.mjs` verify
balance and, via headless Chromium, that every pack renders exactly the
intended structure (all 70 checked packs pass; toolkit is the dynamic
application and is checked separately). Re-voiced chrome on data-text/
data-title/data-html elements matches the legacy pages' runtime behaviour
(the engine always applied the interface copy there, then as now).

**Fonts fix round (user-reported):** `tokens.fontStack` in 68 packs
still carried raw template-literal syntax from re-extraction runs, making
every `font-family: var(--font-stack)` declaration invalid and falling back
to the browser default. The stacks are now resolved from each pack's own
`theme.css` (the authoritative value), the extractor's resolver handles
concatenated template literals, and `build.mjs` refuses any pack whose
fontStack still contains template syntax. Verified by computed-style probes
in headless Chromium: every probed theme computes its correct face (Exo 2,
Oswald, Rajdhani, Tinos, Arimo, IBM Plex Mono, Cormorant Garamond, …), and
the union Google Fonts link serves all 45 families (HTTP 200).

**Dropdowns fix round (user-reported):** two bugs combined to break the
font dropdown on decorated themes. (1) The hal9000 and spaceinvaders packs
carried legacy decorations that replaced the entire font/language control
with the original page's static one-option select, wiping the engine-built
dropdown; the engine now refuses decoration ops that replace, remove or
re-text its owned controls (language/font/theme selects, their labels, the
mode toggle and the accent button) — at runtime the original pages'
re-voiced labels were always overwritten by the interface copy, so refusing
is parity-correct — and those dead ops were pruned from the two manifests.
(2) The first version of that guard referenced `op` before its declaration
(TDZ), which aborted decoration application on every decorated pack; fixed
and regression-verified: hal9000 shows 41 font options (its extended list),
spaceinvaders 42, default/sci-fi-1 40, and the whole battery (build --check,
balance, verify-all, runtime structure) is green again.

**index-fat navigation fix (user-reported):** theme loading and
switching in `index-fat.html` was verified working (pack mount, CSS
activation via `media` flip, 26 sections, full font dropdowns), but the
super menu and the toolkit's directory hardcoded `index.html` links, so any
theme/document link threw the developer out of the fat build into the
single file. The engine's super menu, the standalone super menu, and the
toolkit behaviour now rewrite `index.html` links to the current document
when it is an index variant (`index-fat.html`), while the canonical
`index.html` URLs remain unchanged on the runtime build.

**Status: EXECUTED AND VERIFIED.** All 69 migrated packs pass
`node build.mjs --verify-pack` (plus the authored `default` and `neutral`
packs); `index.html` (3.99 MB single file: 71 packs, 40 languages) and
`index-fat.html` both build deterministically and pass `--check`. Browser
smoke tests (Chromium headless): default sci-fi-1 theme renders 26 sections
with decorations and the super menu; `?theme=toolkit` runs the full toolkit
application (69 gallery cards, compare panes, QR, snippets);
`?theme=neutral` + RTL, `?theme=light` legacy mode, and broken-`?theme=`
fallback (visible notice + neutral view) all behave per the corpus. The
the-borg pack re-voices chrome via `interfaceCopyOverrides`, dec-manual
renders its `1.0`/`1-1` numbering, and the legacy stubs redirect
param-preservingly (`sci-fi-1.html?lang=ja` → pack with language kept).
`current.html` is a redirect stub; `current.js`, `world-openai.html` and
`world-sci-fi-1.html` are deleted. `random.html`, `attract.html` and
`404.html` consume the generated `packs/index.js`; the player pages carry
the standalone super menu.

Remaining: the last pack repairs, then `node build.mjs`, `node build.mjs
--stubs` (71 param-preserving redirect stubs), deletion of `current.js` and
`world-*.html`, and the closing verification matrix.
**Current state at time of writing:** engine (`src/app.js`), base styles,
super menu, build (`build.mjs`), packs/registry.js, default + neutral packs,
and the extractor (`tools/extract-pack.mjs`) are in place; `index.html` /
`index-fat.html` build at ~3.6 MB with all packs. Pack parity against the
legacy pages is being completed (`node build.mjs --verify-all`); the
remaining manual packs (aerospace, dec-manual, lcars-mono, manpage,
newsroom, startrek, the-borg, toolkit) are authored next; then stubs and
deletions land in the final build.
