# Group 5 — Industry / Profession Theme Variants

Base: `archive/versions/archive/versions/website-v13.html`. All 15 files keep the identical i18n/data
skeleton (40 languages, 26 spec sections rendered from JS, URL params,
localStorage prefs). These are presentation skins: every novelty below is CSS,
a decorative markup insert, or — in exactly one case — a small new JS routine.
The only per-file JS changes are the default `DEFAULT_ACCENT`/`DEFAULT_FONT`
constants and the early head-script theme default; the spec renderer template is
unchanged (`section.number.padStart(2,"0")` stays).

---

### insurance.html — calm "insurance policy" skin (navy/sky, umbrella motif, certificate close)
- **CSS-drawn umbrella logo** — `.umbrella` wraps three absolutely-positioned
  child spans (`.umbrella-canopy`, `.umbrella-shaft`, `.umbrella-hook`): the
  canopy is a top-rounded box (`border-radius: 1.5em 1.5em 0 0`, bottom border
  removed), the shaft is a thin bar, the hook a U shaped by `border-radius:
  0 0 0.9em 0.9em` with no top border. Sizes via `font-size` on
  `.umbrella-sm`/`.umbrella-lg` (all geometry in `em`), so it scales as pure CSS
  iconography. Rating: ★★ (pure-CSS logo icon; reusable motif)
- **"policy-line" header readout** — `.policy-line` (mono, uppercase) with
  `.policy-sep` and a `[data-text]` span recoloured `var(--accent)` (the live
  `statusValue`). Adds a policy-number sub-line to the sticky header.
  Rating: ★ (cosmetic metadata banner)
- **Amber "coverage" secondary** — `--amber-ink/--amber-line/--amber-soft` vars
  used for the "what this covers" framing; `--sky/--sky-soft` panel tones.
  Rating: ★ (palette)
- **Removals/notes** — default theme flipped **light** ("the office"); font
  **Rubik**; accent `#1F5F9E`; radius 0.75rem.

### legal.html — "correspondence from counsel" (letterhead, case caption, signature block)
- **Engraved letterhead system** — `.wordmark` uses `font-variant-caps:
  small-caps` + a `--display` serif stack (EB Garamond / Cormorant Garamond) and
  `--navy` ink; `.case-file` renders a mono case-file readout with `.file-sep`
  in `--gold`. This is a full "letterhead" typographic system, not a palette
  swap. Rating: ★★ (typographic identity system)
- **`.case-caption`** — centered uppercase case heading (`letter-spacing:
  0.3em`, `text-wrap: balance`) closed by a `::after` gold hairline rule;
  `.hero h1::after` draws a double-rule (`box-shadow: 0 3px 0 -1px var(--accent)`).
  Rating: ★★ (pseudo-element legal-rule technique)
- **Numbered clauses** — spec `h3`/`section-number` restyled as numbered
  clauses (serif display, small-caps feel). Rating: ★
- **Removals/notes** — default theme flipped **light**; accent `#B08D3E`
  (law gold); font **Lora**; `--navy`/`--gold`/`--display` vars.

### luxury.html — haute-luxury "the atelier" (type, space, one champagne)
- **Reductive system, not additions** — hairlines only, 2px corners, no
  shadows/gradients/glows; `--accent` champagne `#A98B5F`; `--mono-stack` +
  `--display-stack` (Cormorant Garamond / EB Garamond) carry meta and display.
  Rating: ★ (palette/typography discipline)
- **"N° " section numbering** — `.section-number::before { content: "N° "; }`
  turns each rendered spec number into `N° 01`, a maison-style monograph number.
  Rating: ★★ (semantic re-label via generated content; cleanly portable)
- **`.spec-end` monogram** — `::before { content: "+AI"; letter-spacing: 0.4em;
  font-family: var(--display-stack); }` plus an `::after` hairline divider, and
  `strong` set in the display face as a closing motto. Rating: ★★ (pseudo-element
  monogram/dividers)
- **Removals/notes** — default theme flipped **light**; font **Spectral**.

### manufacturing.html — "assembly floor" (factory grey, cyan, ISO tags, LEDs)
- **Machine-status LEDs** — `.status-lamps i` are three 0.5rem dots;
  `nth-child(1/2/3)` colour them `--led-green/--led-amber/--led-red`. Rating: ★
  (cosmetic status indicator)
- **ISO station tag** — `.station-tag` (mono, letterspaced) with `.station-id`
  and `.station-value` (accent) forming an "ISO STATION · STATUS: DRAFT" readout
  in the header. Rating: ★ (metadata banner)
- **`spec-meta` as ISO tag** — `.spec-meta::before { content: "ISO TAG"; }`
  header + a `::after` concentric-ring "button" drawn with `box-shadow: inset 0 0
  0 0.14rem var(--paper), inset 0 0 0 0.22rem var(--line)` (pure-CSS rivet).
  `.section-number::before { content: "STATION"; }`. Rating: ★★ (rivet via
  double inset box-shadow; generated label)
- **Takt-time framing** — eyebrow/`toc`/footer labelled "STOP LINE" / "LINE
  INDEX" / "LINE COMPLETE" via generated content. Rating: ★
- **Removals/notes** — default theme flipped **light**; accent `#00A6C0` cyan;
  font **Roboto Condensed** (also hard-wired into the `--font-stack` template
  literal in JS).

### maritime.html — "coastal chart" (graticule, compass rose, scale bar, notice band)
- **CSS compass rose** — `.compass` (positioned, `opacity .55` light / `.32`
  dark via `:root[data-theme="dark"] .compass`) contains `.rose` (a `border-radius:
  50%` ring). `.rose::before` builds a crosshair from two stacked
  `linear-gradient(…transparent calc(50%±0.5px), var(--line)…)` (vertical +
  horizontal hairlines); `.rose::after` adds a dashed inner ring;
  `.rose-diag` (a 1px bar, `transform-origin: 50% 50%`) is rotated ±45° by
  `.rose-diag-a`/`.rose-diag-b` to give the 8 points; `.rose-letter` places
  N/E/S/W via absolute `top/left/right/bottom` + `translate`. Fully vector, no
  image/SVG. Rating: ★★★ (unusual pure-CSS vector component; self-contained,
  accent-aware, ports cleanly)
- **`.graticule`** — `position: fixed; inset: 0; z-index: -1` with two
  `repeating-linear-gradient` axes (0deg + 90deg, `var(--grid)` 1px per 2.5rem)
  as a full-page chart grid behind content. Rating: ★★ (fixed background-grid
  layer)
- **`.scale-bar`** — `.scale-rule` (a baseline) holding five `<i>` tick marks
  (`flex:1`, `height:55%`, `border-inline-start`) plus a mono label "0 · 1 · 2 · 3
  · 4 NM". Rating: ★★ (miniature CSS ruler)
- **`--accent-ink` legibility via `color-mix()`** — text accent mirrors
  `var(--accent)` in light mode but dark mode re-mixes it:
  `--accent-ink: color-mix(in srgb, var(--accent) 62%, var(--ink) 38%)` so blue
  ink stays legible on the sea-black panel. `--signal` red used only for chart
  markers. Rating: ★★ (colour-mix accent-legibility pattern)
- **`.notice-band`** — full-width "NOTICE TO MARINERS" mono band (`.band-title`
  0.22em letterspacing, `.band-readout` with `.band-no`/`.band-sep`/`.band-status`).
  Rating: ★ (metadata banner)
- **Removals/notes** — default theme flipped **light**; accent `#1B4F72`; font
  **Source Sans 3**; `scroll-padding-top: 7.5rem` added.

### medical.html — "calm clinical document" (reticle, patient-chart readouts, cross motifs)
- **`.reticle` crosshair over hero mark** — an absolutely-positioned dashed ring
  (`border: 1px dashed color-mix(…var(--accent) 34%…)`) whose `::before` is a
  192%-wide 1px horizontal hairline and `::after` a 192%-tall vertical hairline
  (both centered, `color-mix` accent), overlaid on `.mark-stage h1`.
  Rating: ★★ (pure-CSS crosshair/reticle)
- **Hero grid disc** — `.hero::before` draws a 42rem circle from two
  `repeating-linear-gradient` grids, faded by
  `mask-image: radial-gradient(circle, black 0 30%, transparent 72%)`.
  Rating: ★★ (masked grid-glow background)
- **`.chart-strip`** — a patient-chart banner above the hero: `.chart-readout`
  mono `label`+`value` pairs (`.chart-label` muted / `.chart-value` accent)
  separated by `.chart-sep`. `.card-banner` (`.card-banner-label` /
  `.card-banner-code`) tops the meaning card like a chart header.
  Rating: ★ (metadata banner / cosmetic)
- **Removals/notes** — default theme flipped **light**; accent `#0E7C86` teal;
  font **Open Sans**.

### mentalhealth.html — "quiet reading room" (soft cream/lavender/sage, minimal diff)
- **Calm palette + fully-rounded controls** — `--accent #8B7FC7` lavender with
  cream/sage; `.control`/`.language-control`/`.font-control` use
  `border-radius: 999px`; `.header-note` adds a muted mono reassurance line.
  Rating: ★ (cosmetic)
- **Luminance threshold lift** — JS `readable` contrast function threshold
  raised `0.179 → 0.26` (commented in-file) so the ~0.248-luminance lavender
  default takes **white** text while darker random highlights still get white and
  brighter ones get ink. Rating: ★★ (small but deliberate contrast-mechanism
  tune)
- **`.spec-end` restyle** — `::before`/`::after` dividers and a reassuring
  closing card. Rating: ★
- **Removals/notes** — default theme flipped **light**; font **Lora**.

### mining.html — "mining claim / registered title" (strata, claim framing, dark kept)
- **`.strata`** — an 8-segment rock-strata band: `display:flex; height:0.5rem`
  with eight `<i>` (`flex:1`), each coloured via `nth-child(1..8)` from
  `--clay/--shale/--coal/--accent/--ochre`. Placed above the header and again
  before the footer. Rating: ★★ (CSS strata/bedding motif; data-driven colour
  order)
- **`.claim-line`** — a "CLAIM NO. +AI-0.1 · STATUS: DRAFT" bar in `--coal`
  background with `.claim-no` (accent), `.claim-sep` (rust) and `.claim-status`
  (forced light/dark text). Rating: ★ (metadata banner)
- **`spec-meta` as "CLAIM DATA"** — `::before { content: "CLAIM DATA"; }` with a
  `border-bottom: 0.14rem solid var(--rust)`; `.section-number::before { content:
  "SEAM "; }`; footer closes with `content: "CLAIM REGISTERED"`. Rating: ★★
  (generated label set)
- **Removals/notes** — **keeps dark default** (only file in the group except
  music/utilities); accent `#E8B34B` ore gold; font **Oswald**.

### music.html — "album sleeve / ticket stub / set list" (keeps dark default)
- **Ticket-stub perforation** — `.ticket-perf` is a zero-height block with
  `border-top: 2px dashed var(--line)`; its `::before`/`::after` are 1.15rem
  paper-coloured circles (`background: var(--paper); border-radius: 50%`) hanging
  at `inset-inline-start/end: -0.6rem` — the punched notches of a ticket stub.
  Rating: ★★ (perforation-notch technique, genuinely reusable)
- **Poster/venue identity** — `.wordmark` uppercase with `border-bottom:
  0.14rem solid var(--cyan)` underline; `.venue-tag` (mono, `letter-spacing:
  0.3em`); controls switch to `border: 1px dashed var(--line)`. `--cyan-ink`
  secondary. Rating: ★
- **`spec-meta` as "PRESSING INFO"** — `::before { content: "PRESSING INFO"; }`
  with `color: var(--cyan-ink)`; eyebrow labelled `content: "LINER NOTE — "`;
  spec sections framed as "TRACKS". Rating: ★★ (generated label set)
- **Removals/notes** — **keeps dark default** ("the venue"); accent `#FF2E63`;
  font **Oswald**.

### newsroom.html — "front-page news" (masthead, slugline, LIVE dateline JS)
- **Live locale-aware dateline (`tickDateline`)** — the group's only new JS
  system. `#datelineDate` is queried into `elements.datelineDate`; `tickDateline()`
  writes `new Date().toLocaleDateString(currentLanguage, { weekday:"long",
  year:"numeric", month:"long", day:"numeric" }).toUpperCase()` (with a
  `toDateString()` fallback), and is invoked from the language-change path so the
  dateline re-renders in the active locale. Rating: ★★★ (new JS behaviour; the
  one port-worthy scripted feature)
- **Newspaper masthead** — `.masthead`/`.masthead-row` (baseline spread of
  `.slugline` + `.wordmark`), `.masthead-rule` (a double rule via
  `border-top: 0.22rem solid var(--ink)` + `border-bottom: 0.08rem solid
  var(--accent-bright)`). Rating: ★★ (masthead layout system)
- **Drop-cap lead** — `.hero-lead::first-letter { float: inline-start;
  font-size: 3.1em; line-height: 0.82; color: var(--accent-bright) }`.
  Rating: ★★ (float drop-cap)
- **Story furniture** — `.dateline`/`.dateline-src`/`.dateline-date`,
  `.story-slug` + `.factbox-label`, `.editors-note-label`, `.slugline-end`,
  `.footer-left`; `.section-number::after { content: " —" }`. Rating: ★ (cosmetic
  furniture)
- **Removals/notes** — default theme flipped **light**; accent `#C8102E`
  (news red); font **Merriweather** (serif stack switched to `ui-serif, Georgia,
  "Times New Roman", "Noto Serif", serif`).

### pharma.html — "pharmaceutical regulatory monograph" (DRUG-FACTS labels, wordmark-mono)
- **`.spec-meta` as "MONOGRAPH DATA"** — `::before { content: "MONOGRAPH DATA";
  }` over a 2-col `dl` (`dt` uppercase left / `dd` mono right-aligned,
  `text-align: end`, `white-space: nowrap`), topped by `border-top: 0.4rem solid
  var(--accent)` — a DRUG-FACTS-style structured label. Rating: ★★ (structured
  data-table label system)
- **`.wordmark-mark` + `.wordmark-mono`** — split wordmark: `+AI` mark plus a
  mono "MONOGRAPH +AI-0.1 · DRAFT" sub-line. Rating: ★
- **`.section-number::after { content: "—" }`** — em-dash separator after each
  monograph section number. Rating: ★
- **Removals/notes** — default theme flipped **light**; accent `#1668A8`; font
  kept **Inter** (only accent/theme changed).

### realestate.html — "property-listing brochure" (floor plan, facts table, MLS line)
- **CSS floor-plan** — `.floor-plan` is a `display:grid` with named
  `grid-template-areas: "living living kitchen" / "living living bath" /
  "bed hall bath"` and fixed `grid-template-rows: repeat(3, 3.2rem)`, a 3px
  `gap` + `background: var(--line)` acting as the walls, and `.fp-room`
  tiles (`.fp-living/.fp-kitchen/.fp-bath/.fp-bed/.fp-hall`) each mapped by
  `grid-area`. A complete room layout drawn in pure CSS grid. Rating: ★★★ (novel
  reusable component; the wall-gap trick is clever)
- **Listing facts table** — `.facts-row` 3-col grid with `.fact` cells divided
  by `border-inline-start` (first-child stripped) and `dt`/`dd` (uppercase label
  + mono value). `.mls-line` header readout with `.mls-id`/`.mls-dot`/`.mls-status`.
  `.open-tag` accent "OPEN" badge. Rating: ★★ (brochure data-table + MLS
  banner)
- **`.section-number::before { content: "LOT "; }`** — spec sections framed as
  property lots. Rating: ★
- **Removals/notes** — default theme flipped **light**; accent `#C0392B`
  (yard-sign red); font kept **Inter**; `--amber-*` secondary.

### university.html — "faculty handbook" (crest seal, ivy serif, maroon/gold)
- **CSS crest seal** — `.crest` is a circular seal: `border-radius: 50%`,
  `border: 2px solid var(--gold)` plus `box-shadow: inset 0 0 0 3px
  var(--accent)` (an inner maroon ring) around a `.crest-mark` (`+AI` monogram);
  `::after` drops a gold dot below centre (`translate(-50%, 108%)`) forming a
  `+` with the mark. `--crest-size` is a local variable so `.crest-hero`
  (4.6rem) scales it. Rating: ★★ (pure-CSS seal; custom-property sizing)
- **Parchment + radial-glow ground** — `:root[data-theme=light]` body background
  layered with two `radial-gradient(circle at …, color-mix(in srgb, var(--gold)/
  var(--accent) N%, transparent) …)` washes. Rating: ★★ (colour-mix background
  wash)
- **Removals/notes** — default theme flipped **light**; accent `#8C2236` maroon
  + `--gold #C9A227`; font **Playfair Display**; `--accent-bright`/`--font-mono`.

### utilities.html — "grid-operator dashboard" (gauge, network diagram, telemetry, chips; dark kept)
- **CSS gauge** — `.gauge` (aspect-ratio 2/1) contains `.gauge-arc`, a
  semicircle drawn with `conic-gradient(from 270deg at 50% 100%, var(--accent)
  0deg 180deg, var(--line) 180deg 360deg)` then masked into a ring by
  `mask: radial-gradient(farthest-side at 50% 100%, transparent calc(100% -
  1.1rem), #000 calc(100% - 1.05rem))`; `.gauge-needle` (2px bar,
  `transform-origin: 50% 100%`, `transform: rotate(88deg)`), `.gauge-hub`
  (accent dot) and `.gauge-readout`/`.gauge-value`/`.gauge-caption` complete it.
  Rating: ★★★ (conic-gradient + mask ring gauge; the standout CSS mechanism)
- **Node-link network diagrams** — `.hero .network` and `.network-strip` paint
  grids (`linear-gradient` 1px lines) plus scattered node dots from a stack of
  `radial-gradient(circle at x y, var(--accent) 0 2-3px, transparent …)`
  positions; `.network-strip::before` adds a horizontal bus line. Rating: ★★
  (gradient-composed node/link diagram)
- **Status chips + telemetry** — `.chip`/`.chip-stable`/`.chip-degraded`
  (accent/amber bordered mono chips), `.ops-bar`/`.ops-feed`/`.feed-line`
  (ellipsized status feed), `.telemetry`/`.telemetry-kicker`/`.status-dot`,
  `.card-kicker`. Rating: ★ (dashboard furniture)
- **Removals/notes** — **keeps dark default** (the ops room); accent `#3DDC84`
  grid green with fixed `--amber #FFB000`; font kept **Inter**; `--line-strong`,
  `--code-bg`.

### veterinary.html — "warm vet clinic" (pure-CSS paw print, visit-note framing)
- **Pure-CSS paw print** — `.paw` is an `inline-block` whose `background-image`
  stacks four gradients: three toe circles (`radial-gradient(circle,
  currentColor 0 13%, transparent 14%)` positioned top-left/center/top-right)
  plus a pad ellipse (`radial-gradient(ellipse at 50% 100%, currentColor 0 64%,
  transparent 65%)`), each with its own `background-position`/`background-size`.
  Colour follows `currentColor` so it inherits accent/coral. Reused as
  `.paw-dot` (header), `.hero-signature`, `.footer-paw`. Rating: ★★ (single
  reusable multi-gradient icon; currentColor makes it theme-aware)
- **Record/visit framing** — `.record-line` (mono `RECORD +AI-0.1 · DRAFT` with
  `.record-prefix` muted) and `.header-brand`; `--coral`/`--coral-deep`/`--on-coral`
  secondary; `backdrop-filter: blur(18px) saturate(145%)` on the header.
  Rating: ★ (metadata banner / palette)
- **Removals/notes** — default theme flipped **light**; accent `#2AA198` teal;
  font **Catamaran**.

---

## Cross-cutting patterns

1. **Default theme flip** — 12 of 15 files flip the base's dark default to
   **light** (all except `mining`, `music`, `utilities`, which keep dark). Each
   does it both in the early head script (`requestedTheme === "dark" ? "dark" :
   "light"`) and in `:root[data-theme="light"]` palette blocks.
2. **Document-metadata banner in the header** — nearly every file adds a
   mono, letterspaced "ID/status" readout above or inside the sticky header:
   `policy-line` (insurance), `case-file` (legal), `station-tag` +
   `status-lamps` (manufacturing), `notice-band` (maritime), `chart-strip` +
   `card-banner` (medical), `header-note` (mentalhealth), `claim-line` (mining),
   `venue-tag` (music), `slugline`/`dateline` (newsroom), `wordmark-mono` (pharma),
   `mls-line` (realestate), `record-line` (veterinary), `ops-bar`/`chip`/`feed-line`
   (utilities). All render the live `data-text="statusValue"` value.
3. **Generated section labels via pseudo-elements** — the shared
   `section-number`/`spec-meta`/`spec-end` classes are re-labelled with
   `::before`/`::after { content: … }`: luxury `"N° "`, manufacturing `"STATION"`
   + `"ISO TAG"`, mining `"SEAM "` + `"CLAIM DATA"`, music `"PRESSING INFO"` +
   `"LINER NOTE — "`, pharma `"MONOGRAPH DATA"` + `" —"`, realestate `"LOT "`,
   newsroom `" —"`. A single mechanism (generated content) repurposes the shared
   skeleton per theme.
4. **Pure-CSS decorative motifs (no image/SVG)** — umbrella (insurance), compass
   rose + scale bar + graticule (maritime), reticle (medical), strata (mining),
   ticket perforation (music), floor-plan (realestate), crest seal (university),
   gauge + network diagram (utilities), paw print (veterinary). All are
   accent-aware (`var(--accent)`/`currentColor`) so the base Highlight randomiser
   re-themes them live.
5. **Secondary accent variables** — `--amber*` (insurance, realestate,
   utilities), `--gold` (legal, university), `--signal` (maritime), `--coral`
   (veterinary), `--rust`/`--ochre`/`--clay`/`--shale`/`--coal` (mining),
   `--cyan*` (music), `--amber` (manufacturing). A fixed warm/warning secondary
   sits alongside the randomised `--accent`.
6. **`color-mix()` legibility / accent variants** — maritime
   `--accent-ink: color-mix(in srgb, var(--accent) 62%, var(--ink) 38%)`,
   university's radial background washes, and several hover shadows use
   `color-mix(… var(--accent) N%, transparent)` — the group's shared approach to
   accent-derived shades.
7. **`spec-end` re-styled as a closing certificate** — the JS-rendered closing
   node is re-dressed as a "certificate of responsibility" (insurance), "master's
   log" (maritime), "executed signature" (legal), "ENCORE" (music), "deed"
   (realestate), "CLAIM REGISTERED" (mining), "LINE COMPLETE" (manufacturing),
   "until next time" (veterinary) — each via `.spec-end::before/::after` + copy.
