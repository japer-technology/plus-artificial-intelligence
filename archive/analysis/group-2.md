# Group 2 — Theme / "document-genre" variants of +AI (archive/versions/website-v13.html)

Base: `archive/versions/archive/versions/website-v13.html`. All 14 files keep the i18n/data skeleton (40-language
registry + spec packs, `?lang`/`?name`/`?company`/`?accent` params, localStorage prefs,
scroll-spy TOC, reading-progress bar) and only change the theme skin, the default
accent/font/theme, and (in the richer files) the header/hero/spec markup and a little JS.
Base-era techniques already present: `color-mix()` (8 uses), `repeating-linear-gradient`
(2 uses), `data-theme` light/dark blocks, print stylesheet. New-to-the-group techniques
are called out explicitly below.

---

### theme-openai.html — minimal AI-lab whitepaper (light, green #10A37F, Inter)

- **Centered editorial hero re-layout** — `.hero` becomes a flex column; `.hero-copy`
  (new class) centers everything, `min-height: 80svh`, `text-align: center`, so the
  whole first screen is a title-page rather than v13's two-column grid + meaning card.
  Rating: ★★
- **De-carded meaning list** — `.meaning-card` is no longer a card: three hairline rows
  (`border-top`/`border-bottom` on `.meaning-list > div`) with green mono index numbers
  (`.meaning-list .number` in `var(--mono)`). Comment in CSS says so explicitly.
  Rating: ★
- **Black pill primary CTA** — `.primary-link` is `background: var(--ink)` (near-black)
  with `border-radius: var(--radius-pill)`, flipping to `--accent` on hover — a
  restrained inverted-CTA technique. Rating: ★
- New `--bg`/`--surface-2`/`--radius-pill`/`--mono` vars; `--content-width: 64rem`,
  `--text-width: 44rem`.
- **Removal:** default theme flipped dark→light (early script is
  `requestedTheme === "dark" ? "dark" : "light"`, no `?dark` flag); accent → `#10A37F`.

---

### theme-anthropic.html — humane editorial / book-cloth (light, clay #D97757, EB Garamond)

- **Fixed paper vignette layer** — `body::before { position: fixed; inset: 0; z-index: -1;
  background: radial-gradient(...); }` with a darker variant under
  `:root[data-theme="dark"] body::before`. A barely-there "page vignette" behind all content.
  Rating: ★★
- **Serif book typography system** — `--font-stack` leads with `"EB Garamond",
  "Cormorant Garamond", "Lora", Georgia, ... serif`; `DEFAULT_FONT = "EB Garamond"` in JS;
  body `line-height: 1.7`, `font-size: clamp(1.05rem … 1.2rem)`. Small-caps used for h4
  labels (`font-variant-caps: small-caps`). Rating: ★★
- **Underlined display mark** — `.hero h1 .mark::after` paints a thin accent underline under
  the "+AI" wordmark. Rating: ★
- **Book-plate meaning card** — `.meaning-card` gets a double rule via `outline: 1px solid
  var(--line); outline-offset: 0.35rem` (a hairline frame floating outside the panel).
  Rating: ★
- **Terracotta corner mark on code blocks** — `pre::before` is a 0.85rem accent corner
  (two 0.14rem borders, top + inline-start). Rating: ★
- **Dotted TOC leaders** — `.toc a::after { border-bottom: 1px dotted var(--line); flex:1 }`
  classic contents-page leader line. Rating: ★
- **Contrast calc override** — JS readable-text threshold raised to `luminance > 0.179`
  (chooses dark ink on light paper vs light ink on dark) to match the warm palette. Rating: ★
- **Removal:** light default (`?dark` flag opts into dark); accent → `#D97757`.

---

### theme-google.html — Material-ish product shell (light, blue #4285F4, Roboto)

- **Four-brand accent cycle via `--s` cascade** — `.spec-section:nth-child(4n+1..4n)` set
  `--s: var(--c-blue/--c-red/--c-yellow/--c-green)`; `.section-number`,
  `h3::before` dots, `blockquote`/`canonical` borders and `h4` all read `--s`, so each
  spec section is automatically colour-coded in a repeating blue/red/yellow/green cycle
  without any JS. Data-driven UI in pure CSS. Rating: ★★★
- **`four-dots` component** — new markup `<div class="four-dots">` with four `<i>` dots
  coloured `--c-blue/--c-red/--c-yellow/--c-green` (the brand quad). Rating: ★
- **Per-item meaning number chips** — `.meaning-list > div:nth-child(1/2/3) .number` get
  blue/red/yellow dots (`.number` is a `font-size:0` coloured circle). Rating: ★
- **Elevated card chrome** — `--shadow`/`--shadow-lg` used on `.primary-link`,
  `.spec-meta`, `.toc`, `.spec-end`; pill CTAs (`border-radius: 2rem`). Rating: ★
- New vars `--c-blue/--c-red/--c-yellow/--c-green`, `--soft-blue/--soft-grey/--soft-green/
  --soft-yellow`, `--radius-sm`.
- **Removal:** light default; accent → `#4285F4`; font → Roboto.

---

### theme-microsoft.html — Fluent productivity window (light, blue #0078D4, Arimo)

- **Fluent pressed-state token chain** — `--accent-hover: #106EBE`, `--accent-active:
  #005A9E`; `.primary-link` maps hover/active to `color-mix(in srgb, var(--accent) 86%,
  #000)` and a `:active` darker state. A proper interaction-state ramp. Rating: ★★
- **"Desktop window" pane layout** — `.hero`, `.plain-meaning`, `.specification` are each
  wrapped as white cards (`background: var(--surface); border: 1px solid var(--line);
  border-radius: var(--radius); box-shadow: var(--shadow)`), the whole page reading as
  stacked app panes on a `--canvas: #F3F3F3` grey. Rating: ★★
- **Square number chips in meaning list** — `.meaning-list .number` is a 2.2rem accent
  chip (`border-radius: var(--radius-small)`) instead of v13's plain numeral. Rating: ★
- **Title-bar header** — `.site-header` with `backdrop-filter: blur(6px)`; `.wordmark`
  hover → `--accent-hover`. Rating: ★
- New vars `--surface-hover/--surface-subtle/--line-strong/--soft-accent-strong/
  --soft-accent-line/--amber-bg/--amber-line/--amber-ink/--amber-strong`.
- **Removal:** light default (`?dark` flag); accent → `#0078D4`; font → Arimo.

---

### theme-github.html — developer repository README (dark canonical, blue #58A6FF)

- **Repo-bar header + breadcrumb + badges** — new markup `.repo-bar` replaces the header
  contents: `.repo-identity` (`.wordmark` "+AI", `.crumb-sep` "/", `.crumb-current`),
  plus `.repo-badge` ("Draft") and `.repo-badge--version` ("v0.1", amber,
  `border-color: color-mix(in srgb, var(--amber) 40%, var(--line))`). Rating: ★★
- **`.repo-tabs` nav** — an aria-hidden horizontal tab strip (`README / Specification /
  Translations / History`) with `.repo-tab.is-active` accent underline. Rating: ★
- **File-tree TOC (the signature feature)** — the sidebar TOC is restyled as a repository
  file explorer: `.toc a::before` paints a folded-document icon (a `linear-gradient`
  corner fold over `var(--panel)`), `.toc a span:last-child::after { content: ".md" }`
  appends a filename extension, and `.toc .toc-number::after { content: "-" }`; sticky
  sidebar (`top: 7rem; max-height: calc(100svh - 9rem)`). Rating: ★★★
- **Data-table spec-meta** — `.spec-meta` becomes a bordered `<dl>` table with
  `.spec-meta dt`/`dd` hairline rows and `dt:first-child + dd` border suppression. Rating: ★★
- **Filename caption bars on code** — `pre::before { content: "example.txt" }` and
  `pre[data-json-example]::before { content: "declaration.json" }` — a mono caption strip
  above each listing. Rating: ★★
- **Green status dot / commit-style end card** — `.spec-end strong::before` green dot with
  `box-shadow` halo; `.meaning-card h2::before` green square; `mark-plus` span isolates the
  "+" in the hero. Rating: ★
- `--green`/`--amber`/`--canvas`/`--panel`/`--code-bg`/`--mono` vars; full light-mode block
  under `:root[data-theme="light"]`.
- **Removal:** none (stays dark); accent → `#58A6FF`; font unchanged (Inter).

---

### theme-youtube.html — long-form video watch page (dark, red #FF0000, Roboto)

- **`player` 16:9 hero** — `.player { aspect-ratio: 16/9; max-height: min(56rem,
  calc(100svh - 8rem)); background: radial-gradient(...), var(--player) }` — a dedicated
  `--player`/`--player-ink`/`--player-muted`/`--player-line` token set keeps the media
  surface dark even in light mode. Rating: ★★
- **Shimmering title card** — `.player-mark .mark` uses `background-clip: text;
  -webkit-text-fill-color: transparent` with a moving `linear-gradient` highlight, driven
  by `@keyframes mark-shimmer` (12s infinite, background-position sweep). The +AI mark
  glints like a video title card. Rating: ★★★
- **Decorative scrubber** — `.player-bar` with `.player-bar-buffered` (58% grey),
  `.player-bar-progress` (accent), and `.player-bar-knob`; plus corner glyphs
  (`.glyph-tl/tr/bl/br`: "◀◀" "▶▶" "VOL" "HD"). All aria-hidden. Rating: ★★
- **Search pill** — `.search-pill` (aria-hidden) with inline SVG magnifier
  (`.search-glyph`), `.search-placeholder`, and a `.search-key` "/" keycap. Rating: ★
- **`hero-meta` watch-page layout** — the title + `.meaning-card` (with a `.meaning-more`
  "show more" strip) sit in a two-column description block under the player. Rating: ★★
- **Chapters TOC + END screen** — `.section-number::after` "—" chapter dash; `.spec-end`
  gets a pill `::before { content: "END" }` end-screen card. Rating: ★
- New `--blue`/`--amber` secondary accents used for links and notices.
- **Removal:** none (stays dark); accent → `#FF0000`; font → Roboto.

---

### theme-adobe.html — creative-tool workspace (dark, red #FA0F00, Manrope)

- **Artboard hero on a checkerboard** — `.artboard { background: repeating-conic-gradient(
  var(--checker-a) 0% 25%, var(--checker-b) 0% 50%) 0 0 / 22px 22px }` (transparency
  checkerboard); `.artboard-canvas` is a 16:9 `--artboard` panel with corner labels
  (`.label-tl/tr/bl/br`: "AA", "+AI", "0.1", "RGB") and selection `.handle-*` corner
  handles (`background: var(--artboard-ink); border: 1px solid var(--accent)`). Rating: ★★★
- **Docked panel bars** — `.panel-bar` (`.panel-bar::before` accent square) labels the
  meaning card "PROPERTIES" and the TOC "PAGES", with `letter-spacing: 0.16em` uppercase
  mono, like tool panel headers. Rating: ★★
- **Blinking editor cursor in code** — `pre code::after` is a 2px accent caret with
  `@keyframes cursor-blink { 50%,100% { opacity:0 } }` (steps(1)); the code listings look
  like a live editor. Rating: ★★
- **"PAGE n" section numbering** — `.section-number::before { content: "PAGE " }`;
  `.spec-meta::before { content: "INFO" }`. Rating: ★
- **Export-complete end card** — `.spec-end::before` "✓" badge and `.spec-end::after
  { content: "EXPORTED · 0.1" }`. Rating: ★
- **Custom scrollbars** — `* { scrollbar-width: thin; scrollbar-color: var(--line)
  transparent }` + `*::-webkit-scrollbar{,-thumb,-track}` styling. Rating: ★★
- `--workspace/--panel/--artboard/--checker-a/--checker-b/--editor-bg` token set.
- **Removal:** none (stays dark); accent → `#FA0F00`; font → Manrope.

---

### dec-manual.html — 1970s DEC field-service handbook (light, orange #CE4A1E, Arimo)

- **Cover band** — new markup `.cover-band` (full-width accent bar with a darker 3px
  bottom edge via `color-mix`) holding `.cover-inner` (`.wordmark`, `.cover-meta` with
  `.cover-subtitle` + `.cover-docno` "AA-0V10A-TE", and `.cover-edition` with
  label/value/dot). The header is a book cover rather than a sticky bar. Rating: ★★
- **Dotted-decimal chapter numbering in JS** — the spec renderer is patched: the heading
  tab shows `${section.number}.0` ("1.0", "2.0"…) and each TOC link shows
  `${section.number}-1` ("1-1", "2-1"…) via `link.innerHTML = '<span class="toc-number">
  …-1</span><span>…'`, keeping the raw `section.number` in the anchor ids. A genuine
  numbering-system extension beyond the base renderer. Rating: ★★★
- **Dotted TOC leaders** — `.toc a > span:last-child::after { border-bottom: 1px dotted
  var(--muted); flex:1 }` (baseline leaders like a manual contents page). Rating: ★
- **NOTE/WARNING labelled notices** — `.translation-note::before { content: "NOTE" }`
  (blue-grey `--annotation`) and `.untranslated-note::before { content: "WARNING" }`
  (`--warning` amber), with a grid badge layout. Rating: ★
- **LISTING captions + ruled READER'S COMMENTS** — `pre::before { content: "LISTING" }`;
  `.spec-end::after` renders a tear-out comments page with `repeating-linear-gradient`
  ruled lines. Rating: ★
- `--annotation`/`--warning`/`--mono` vars; `--radius: 2px` square corners.
- **Removal:** light default ("the manual"; `?theme=dark`/`?mode=dark` = night lab, `?light`
  flag is ignored); accent → `#CE4A1E`; font → Arimo.

---

### ibm-manual.html — IBM Systems Reference Library copy (light, blue #0057B8, IBM Plex Sans)

- **Fixed spine stripe** — `body::before { position: fixed; inset-block: 0;
  inset-inline-start: 0; width: var(--stripe-w); background: var(--accent) }`, with
  `--stripe-w` scaling from 0.6rem → 1.6rem at `@media (min-width: 58rem)` and the whole
  page padding-inline-start shifted by the same var (logical properties ⇒ mirrors to the
  right edge under RTL). Rating: ★★★
- **Two-column spec body (CSS multi-column)** — `.spec-content { columns: 2;
  column-gap: 2.6rem; column-rule: 1px solid var(--line); orphans: 2; widows: 2 }`, with
  `.spec-section { break-inside: avoid }` — a real book-page column layout the base lacks.
  Rating: ★★★
- **Counter-generated page numbers** — `.toc { counter-reset: page }` and
  `.toc a::after { content: counter(page, decimal-leading-zero); counter-increment: page }`
  produce "01, 02 …" page references with no data in the markup. Rating: ★★★
- **Publication block + double rules** — `.header-top`/`.pub-block` (`.pub-number`,
  `.pub-edition`); `.site-header::after` a 3px accent band; `.spec-meta` uses
  `border-top: 3px double var(--accent)`. Rating: ★
- **Tear-out comment form** — `.spec-end::after` "COMMENTS AND SUGGESTIONS" with
  `repeating-linear-gradient` ruled lines (`background-position` offset). Rating: ★
- `--accent-text` (light/dark legible variant) + `--caution` tokens; `DEFAULT_FONT = "IBM
  Plex Sans"`.
- **Removal:** light default (`?dark` flag); accent → `#0057B8`; font → IBM Plex Sans.

---

### manpage.html — troff `man(1)` page (light, IBM Plex Mono)

- **Man-page framing** — `.man-header`/`.man-footer` with `.man-frame` (`.mf-left`/`.mf-
  center`/`.mf-right` columns) reproduce the `AI(1) … +AI Specification … AI(1)` page
  header/footer of a rendered man page. Rating: ★★
- **`man-label` section labels** — NAME / SYNOPSIS / DESCRIPTION / (AUTHORS / SEE ALSO)
  rendered as underlined uppercase `.man-label` headings; `.man-title` uses a 4ch hanging
  indent (`padding-inline-start: 4ch`) for the classic man title style. Rating: ★★
- **`--content-width: 80ch` measure** — the layout is sized in characters
  (`--toc-width: 14rem; --spec-width: calc(80ch + 14rem + 4rem)`), a typographic
  measure-based system. Rating: ★★
- **Date injection** — a tiny extra inline `<script>` sets `#manDate` to
  `new Date().toISOString().slice(0, 10)` (the man-page "date" line in the footer).
  Rating: ★
- **SEE-ALSO trailer** — `.spec-end::after { content: "SEE ALSO: +AI(1),
  SPECIFICATION(26)" }` and `::before { content: "AUTHORS" }`. Rating: ★
- IBM Plex Mono is *appended to the 39-font list* in JS (new 40th face), `DEFAULT_FONT =
  "IBM Plex Mono"`; `--link` (blue in light / terminal-green `#33B366` in dark) is
  separated from the randomised `--accent`.
- **Removal:** light default; accent → `#0057B8`; font → IBM Plex Mono.

---

### blueprint.html — technical drafting sheet (dark, amber #FFC53D, Oswald + Antonio)

- **Fixed drafting-sheet grid** — `.sheet { position: fixed; inset: 0; pointer-events: none
  }` with `.sheet::before` a 2.5rem grid of `linear-gradient(var(--grid) 1px, transparent
  1px)` in both axes, plus `.sheet-frame` double border and four `.reg-mark` registration
  crosshairs (`.reg-tl/tr/bl/br`) built from two crossing `linear-gradient` lines. Rating: ★★★
- **Hatch-filled display type** — `.hero h1 .mark { -webkit-text-stroke: 1.5px var(--ink) }`
  and inside `@supports ((-webkit-background-clip: text) …)` it becomes
  `background-clip: text` over a `repeating-linear-gradient(135deg, var(--accent) 0 2px,
  transparent 2px 8px)` — the "+AI" letters are filled with diagonal drafting hatching.
  Rating: ★★★
- **Dimension-line arrowheads on section headings** — `.spec-section > h3::before/::after`
  are 0.66rem squares at the heading's ends shaped with `clip-path: polygon(...)` into
  inward-pointing triangles, like dimension ticks on a drawing. Rating: ★★
- **Drawing title block** — new markup `.title-block` with `.tb-head` (`.tb-title`,
  `.tb-sub`), `.tb-cells` (a 4-column `.tb-cell` grid: Status / Version / Scale "1:1" /
  Sheet "1 / 1") and `.tb-foot` — a technical-drawing title box. Rating: ★★
- **Stamped footer + double-rule end card** — `.spec-end` border with
  `border: 0.28rem double var(--accent); transform: rotate(-0.5deg)` (an "APPROVED" style
  stamp). Rating: ★
- Antonio (stencil display) is *appended to the 39-font list*; `DEFAULT_FONT = "Oswald"`.
- **Removal:** none (stays dark); accent → `#FFC53D`; font → Oswald.

---

### military-spec.html — fictional MIL-STD document (light, olive #4B5320, Oswald + Saira Stencil One)

- **i18n-aware stencil suppression** — the stencil/tracking display treatment is lifted for
  scripts it would break: `html[lang="zh"], html[lang="ja"], html[lang="ko"], html[lang=
  "yue"], html[lang="ar"], html[lang="fa"], html[lang="ur"], html[lang="he"], html[lang=
  "ps"] .stencil { font-family: var(--font-stack); letter-spacing: 0; text-transform:
  none }`. Genuinely novel accessibility work tied to the base's 40-language system.
  Rating: ★★★
- **Cover-sheet chrome** — `.classification` (black banner, `::before/::after` "◆" markers,
  text "PUBLIC DOCUMENT · NO EXPORT CONTROL"), `.doc-strip` (`.doc-number` "MIL-STD-+AI-0.1",
  `.doc-replaces`, `.doc-date`). Rating: ★★
- **Paper-grain texture** — `body` background layers two `repeating-linear-gradient`
  scans (horizontal + vertical at ~1px/3px) over `--paper` for aged-paper grain, with a
  dark variant under `:root[data-theme="dark"] body`. Rating: ★★
- **Stamped hero mark** — `.hero h1 .mark` gets `border: 3px double var(--ink)` +
  `outline: 1px solid var(--accent)` + `::after { content: "THE RESPONSIBLE PARTY" }` in
  micro stencil type — a rubber-stamp box. Rating: ★
- **Signature / doc-control block** — `.doc-control` with `.doc-control-row`
  (`.doc-control-label` "Prepared by / Reviewed by / Approved by", `.sig-line`, `.sig-date`).
  Rating: ★
- `--font-display: "Saira Stencil One"`, `--font-mono: "IBM Plex Mono"`; **41 fonts** in JS
  (Oswald, IBM Plex Mono, Saira Stencil One added); `DEFAULT_FONT = "IBM Plex Mono"`.
- **Removal:** light default (`?dark` flag); accent → `#4B5320`; font → IBM Plex Mono.

---

### museum.html — white-cube gallery exhibition (light, red #B3261E, Cormorant Garamond)

- **Spotlit artwork hero** — `.artwork` (new wrapper) uses `.artwork::before` a
  `radial-gradient(ellipse at 44% 42%, var(--spot), transparent 68%)` spotlight pool and
  `.artwork::after` a floor/plinth line (`box-shadow` shadowed hairline); `main { overflow:
  clip }` contains the glow. `--spot` re-tints with theme. Rating: ★★
- **Museum "wall" text** — `.spec-section blockquote` and `.canonical` become large italic
  wall-text with a thin `border-inline-start: 0.16rem solid var(--accent)` and no box.
  Rating: ★
- **Object label / curator note / conservation notice** — `.spec-meta` is an "object label
  card" (`.spec-meta dt` small-caps wayfinding text); `.translation-note` a "curator's
  note"; `.untranslated-note` a "conservation notice" (`.untranslated-note .badge` ochre).
  Rating: ★
- **"Panel n" exhibition numbering** — `.section-number::before { content: "Panel" }` and
  `.spec-end::before/::after` hairline rules as "end of exhibition" signage. Rating: ★
- `--wall`/`--ochre`/`--spot`/`--font-sans` (Inter wayfinding) token set; `DEFAULT_FONT =
  "Cormorant Garamond"`.
- **Removal:** light default (`?dark` flag); accent → `#B3261E`; font → Cormorant Garamond.

---

### notary.html — notarised certificate (dark, wax-seal red #A63A2F, EB Garamond)

- **Certificate frame with corner ornaments** — `.certificate-frame { position: fixed;
  inset: 0.8rem; border: 1px solid var(--hairline); box-shadow: inset 0 0 0 4px var(--paper),
  inset 0 0 0 5px var(--hairline) }` (a double-ruled fixed frame over the page) with four
  `.corner` diamonds (`.corner-tl/tr/bl/br`) rotated 45°, ringed with paper + gold.
  Rating: ★★
- **Wax-seal medallion** — the hero `.mark` becomes a circular seal:
  `background: radial-gradient(circle at 30% 26%, …)` plus a *stack of five inset
  box-shadows* (`inset 0 0 0 3px/5px/6px …`, a top highlight, a bottom shade) and a drop
  shadow — a believable wax seal that re-colours with the randomised `--accent`.
  Rating: ★★★
- **Filing stamps** — `.filing-stamps` (absolute, top-right) holds rotated
  `.filing-stamp stamp-registered` ("Registered Declaration", `rotate(-2deg)`) and
  `.stamp-draft` ("Draft · 0.1", `rotate(1.6deg)`), each with an inset double border
  (`box-shadow: inset 0 0 0 2px var(--paper), inset 0 0 0 3px currentColor`).
  Rating: ★★
- **Stamp-corner spec-meta** — `.spec-meta-wrap` adds `.stamp-corner sc-tl/tr/bl/br`
  (2px registrar-blue corner ticks) around the meta panel, itself double-framed.
  Rating: ★
- **Clause numbering + blue/red marginalia** — `.spec-section > h3::before { content:
  "Clause" }`; `.translation-note` styled as blue-ink annotation and `.untranslated-note`
  as red-ink marginal note (`.badge` rotated -2°); `.spec-end::before` is a second wax
  seal with `content: "+AI"`. Rating: ★
- `--registrar`/`--gold`/`--hairline` tokens; serif `--font-stack` (EB Garamond +
  Libre Baskerville), `DEFAULT_FONT = "EB Garamond"` (no font-URL change needed).
- **Removal:** none (stays dark); accent → `#A63A2F`; font → EB Garamond.

---

## Cross-cutting patterns

- **Default-theme flip to light** (9 files): openai, anthropic, google, microsoft,
  dec-manual, ibm-manual, manpage, military-spec, museum. Four stay dark (github, youtube,
  adobe, notary). The light flip is always done in BOTH the early head script and the
  `applyTheme` JS (`?dark` flag = opt-in dark in the "light-default" files).
- **`wordmark` class** (7 files): anthropic, microsoft, github, adobe, dec-manual,
  ibm-manual, blueprint — the header brand link is renamed `.wordmark` and re-styled.
- **Fixed decorative background/frame layer** (6 files): anthropic `body::before` vignette,
  ibm-manual `body::before` spine stripe, blueprint `.sheet` grid, notary
  `.certificate-frame`, military-spec paper-grain, youtube `--player` surface. All use
  `position: fixed` + `pointer-events: none`.
- **Dotted TOC "contents-page" leaders** (3 files): dec-manual, anthropic, ibm-manual —
  `.toc a::after` / `span:last-child::after` with `border-bottom: 1px dotted`.
- **Themed NOTE/WARNING notice labels** (most files): `::before { content: "NOTE"/"WARNING"/
  "LISTING"/"INFO" }` on `.translation-note`, `.untranslated-note`, `pre`, `.spec-meta` —
  each theme gives the base's notice boxes a genre-specific caption and colour.
- **Font-list extension** (3 files): manpage adds IBM Plex Mono, blueprint adds Antonio,
  military-spec adds Oswald + IBM Plex Mono + Saira Stencil One (41 fonts); all keep the
  "Current Font" pinning behaviour.
- **Custom print stylesheet** (all 14): every variant overrides
  `:root[data-theme="dark"], :root[data-theme="light"]` to force its own palette to
  black/white monochrome for print.
- **`--mono` / display-font tokenisation** (7+ files): github, openai, anthropic,
  dec-manual, ibm-manual (`--mono`), military-spec (`--font-mono`/`--font-display`),
  museum (`--font-sans`) — mono/display faces extracted to custom properties.
- **`section-number` / `spec-end` re-skin** (all 14): the section heading numeral and the
  closing "end of document" card are the most consistently restyled base elements, each
  with a theme-appropriate `::before`/`::after` label (END, EXPORTED, SEE ALSO, AUTHORS,
  READER'S COMMENTS, END OF DOCUMENT, APPROVED stamp, wax seal, exhibition rules).

## Top ★★★ mechanisms (worth porting to a "super" page)

1. **ibm-manual** — CSS multi-column spec body (`columns: 2; column-rule`) + CSS-counter
   pagination (`counter-reset: page` / `counter(page, decimal-leading-zero)`) for a book
   layout with zero JS.
2. **military-spec** — i18n-aware stencil/tracking suppression via
   `html[lang=…] .stencil` (lifts decorative letterforms for CJK + RTL scripts).
3. **dec-manual** — chapter-numbering override in the spec renderer ("1.0" tabs,
   "1-1" TOC entries) that keeps anchor ids stable.
4. **notary** — pure-CSS wax-seal medallion (radial-gradient + stacked inset box-shadow
   rings) that re-colours with the randomised `--accent`.
5. **google** — per-section four-colour accent cycle via `:nth-child(4n+k)` +
   `--s` custom-property cascade (automatic, JS-free section colouring).
6. **blueprint** — drafting-sheet system (fixed grid + registration marks) and
   clip-path "hatched" display text (`background-clip: text` over a
   `repeating-linear-gradient`).
