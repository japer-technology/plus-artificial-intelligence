# +AI Variant Analysis — Features Worth a Super Version

> Deep-dive comparison of the **78 non-`website*.html` variants** against the base
> `site/index.html`, with a curated list of the best unique features to combine into
> a single "super" page. Working files for this analysis: `archive/analysis/group-1.md` …
> `archive/analysis/group-6.md` (per-file detail) and `archive/analysis/PROTOCOL.md` (method).

---

## 1. Scope and method

- **Base:** `site/index.html (formerly site/index.html)` (2,033 lines) — the canonical +AI specification page.
- **Variants:** 78 files (94 total HTML files minus the 16 `website*` builds).
- **Method:** each variant was diffed against the base (full-file diff, CSS/JS block
  extraction, selector-set diff, storage-key/URL-param/API scans) and the special-mode
  apps were read in full.
- **Rating scale:** ★★★ = a genuine mechanism worth porting to a super page ·
  ★★ = a strong technique, port candidate · ★ = theme cosmetics (palette/fonts/flavor).

### What the base already provides (do not re-implement)

- 40-language i18n via `site/translations/registry.js` + `spec.*.js` (41 plain `<script>` tags, file://-safe)
- Language resolution: `?lang=` → `localStorage plus-ai-language` → browser Accept-Language → `en`; RTL support, legacy ISO aliases, lazy CJK font injection
- 39-font Google Fonts picker (live specimen dropdown), persisted as `plus-ai-font`
- Dark/light via `data-theme` + early head script (`?theme=`/`?light`); accent randomiser (`--accent` + WCAG luminance contrast calc, `?accent=` etc., `meta theme-color` sync)
- Reading-progress bar, IntersectionObserver scroll-spy TOC (`aria-current`)
- `?name=`/`?company=` personalisation of "Eric Mourant"/"JAPER Technology"
- Announcement live region, untranslated/translation notices, `noscript` fallback
- Print stylesheet, `prefers-reduced-motion`, skip-link, focus-visible, safe-area insets

---

## 2. Common changes — the anatomy of a variant

Nearly every variant is made from the same recipe. This is what "changing site/index.html"
actually means across the archive:

1. **Design-token palette swap (universal).** Replace `:root` + `:root[data-theme]`
   tokens: `--accent` (base `#AC43D9` → theme hue), `--paper/--surface/--ink/--muted/--line/--soft-accent`,
   plus new theme tokens (`--gold`, `--amber`, `--canvas`, `--mono`, …). ~70/78 files do this
   and nothing else structural.
2. **Default-theme flip.** Base defaults to dark. 41 variants default to **light** (via the
   `data-theme` attribute and/or the head resolver rewritten to
   `requestedTheme === "dark" ? "dark" : "light"`), 30 keep dark, and 7 standalone apps
   (`attract`, `crawl`, `credits`, `random`, `rsvp`, `slideshow`, `speedread`) carry no theme attribute.
3. **Default-font swap.** `DEFAULT_FONT` + `--font-stack` change (Tinos→accounting,
   Libre Baskerville→finance, Lora→legal, IBM Plex Mono→hal9000/manpage, Oswald→blueprint/cyberpunk…).
   Six variants also **append new faces to the picker** (Press Start 2P, Antonio, Saira Stencil One,
   Pacifico, Rajdhani, IBM Plex Mono) for 40–41 selectable fonts.
4. **Fixed decorative background layer (the #1 visual change).** A `position:fixed`,
   `pointer-events:none`, often `aria-hidden` layer behind or over content: starfields,
   scanlines, CRT vignettes, radar sweeps, perspective grids, fog, brushwork. Implemented
   with stacked `repeating-*-gradient`s, `mask-image`, `mix-blend` and keyframes; hidden
   or dimmed per theme and always disabled under `prefers-reduced-motion`.
5. **Bespoke dressing of the same semantic blocks.** The hero, `.meaning-card`, `.spec-meta`,
   `.toc` and `.spec-section` keep their ids/classes (the "hooks contract") but are restyled
   as bank cards, patient charts, HUDs, certificates, ticket stubs… New markup, when added,
   is decorative only.
6. **Pseudo-element relabeling.** `::before/::after { content: "…" }` re-voices shared
   chrome per genre: `TRIAL BALANCE`, `PERMIT CARD`, `ISO TAG`, `CLAIM DATA`, `PRESSING INFO`,
   `MONOGRAPH DATA`, `AGENDA/ORDER/SIGNED`, `PANEL n`, `N° `, `SLIDE`, `LOT`, `STATION`, `SEAM`…
   One mechanism, ~40 different voices.
7. **Metadata banner in the header.** A mono, letterspaced id/status readout
   (`.policy-line`, `.case-file`, `.station-tag`, `.claim-line`, `.mls-line`, `.slugline`,
   `.chart-strip`, `.ops-bar`…) usually rendering the live `statusValue` copy.
8. **Live header widgets (4 files).** Clocks: `aerospace` (`tickClock`), `startrek`/`lcars-mono`
   (`tickChronometer` + computed stardate), `newsroom` (`tickDateline`, locale-aware).
9. **Flavor re-voicing via two mechanisms.** (a) markup: `data-text`/`data-html` fallbacks
   carry theme copy (spaceinvaders, hal9000); (b) JS: `Object.assign` onto the registry's
   English entry, leaving all 40 translation packs untouched (the-borg).
10. **Accessibility parity everywhere.** All 78 files honor `prefers-reduced-motion`
    (many with a *behavioral* fallback, not just frozen animation); theme pages keep the
    skip-link, focus-visible, `aria-live` announcements and print stylesheet (the 9 app
    modes drop print, as they're display apps).
11. **Fixed secondary accents.** Most themes pin one or two non-randomised secondaries
    (`--gold`, `--amber`, `--signal`, `--rust`) alongside the randomisable `--accent`, and
    several derive a legible text accent via `color-mix(in srgb, var(--accent) N%, …)`.

### Gaps nobody filled (opportunities for the super page)

- **Theme is never persisted** — no `plus-ai-theme` key exists anywhere; theme is URL-only.
- **No system-theme detection** — no `prefers-color-scheme` auto mode.
- **No cross-links** between theme pages (only `toolkit`/`attract`/`random` reference other files).
- **No `<canvas>`** anywhere; the only SVG is spaceinvaders' sprite library.
- **No service worker / offline caching** (fonts degrade gracefully, pages don't).

---

## 3. Feature catalog (all 78 variants)

### 3.1 Sci-fi / space / arcade / retro (14)

| File | Identity | Unique features (★ = port value) |
|---|---|---|
| `startrek.html` | Full-colour LCARS bridge console | ★★★ Web Audio `blip()` system (square-wave oscillator + gain envelope, pitch per control, persisted `plus-ai-lcars-audio`, global click/change hooks); ★★★ live chronometer + Star Trek 2009-convention stardate; ★★ starfield/scanlines/radar-sweep layers (`.lcars-strip`, `.chip`, `.status-dot`) |
| `lcars-mono.html` | Monochrome amber LCARS | same audio/chronometer as startrek; ★★ "light" theme redefined as a dim dark console (semantic inversion of the theme system) |
| `starwars.html` | Worn galactic datapad | ★★ twinkling starfield; ★★ `crawl-in` 3D header entrance (`perspective`+`rotateX`); ★ holo-flicker wordmark |
| `spaceodyssey.html` | Monolith minimalism | ★★ 4:9 black monolith slab hero + breathing red dot; light default; strict 3-colour constraint |
| `bladerunner2049.html` | Neon-noir megacity archive | ★★ `color-mix` haze blobs; ★★ `blur(24px)` drifting fog bands; ★ concrete hero-slab |
| `cyberpunk.html` | Neon street terminal | ★★★ pure-CSS perspective grid horizon (`perspective`+`rotateX(62deg)`+repeating gradients, breathing glow); ★★ `clip-path` glitch title (duplicated clipped layers, `steps()`); ★ CRT scanlines |
| `neogenesis.html` | Mecha manual | ★★ shared `clip-path` armour helpers; ★★ hazard stripes, hex emblem-plate, `vertical-rl` telemetry; ★ corner brackets |
| `sci-fi-1.html` | Orbital HUD | ★★ masked nebula dot-grid; ★★ holo-sweep scanline over the mark; ★★ one-rule corner-bracket system for cards/TOC/sections |
| `sci-fi-2.html` | Atomic retro-futurism | ★★★ CSS atom engine — three elliptical orbit rings with per-orbit `--tilt`/`--dur`, spinning electron dots; ★★ conic starburst stamp (masked ring); light default |
| `hal9000.html` | HAL-9000 console | ★★ radial-gradient fisheye eye (`hal-breath`); ★ mission-log status line with `steps()` blinking dot; ★ scanlines |
| `spaceinvaders.html` | 1978 arcade cabinet | ★★★ SVG `<symbol>/<use>` pixel-art sprite library (`crispEdges`, currentColor); ★★ `steps(2)` marching invader animation; ★★ markup-level English re-voicing; ★ HUD/INSERT-COIN chrome |
| `the-borg.html` | Borg collective console | ★★★ JS `Object.assign` re-voicing of the registry's English entry (data-driven re-skin, zero new markup); ★★ hex hive background (6-layer gradients); ★★ circuit traces, pulsing accent dot |
| `quantumlab.html` | Research lab notes | ★★ annotation callouts (`.ref-num`, `.anno-top/side` with drawn arrow tails); ★★ particle-collision arc traces; light default |
| `retro.html` | 50s Americana diner | ★★ conic checkerboard strip; ★★ neon-flicker wordmark (stacked text-shadow + keyframes); ★ neon board slabs; light default |

### 3.2 Brand shells & document genres (14)

| File | Identity | Unique features (★ = port value) |
|---|---|---|
| `theme-openai.html` | Minimal lab whitepaper | ★★ centered 80svh editorial hero; ★ de-carded meaning rows; ★ black-pill CTA |
| `theme-anthropic.html` | Bookish editorial | ★★ fixed paper vignette; ★★ serif book typography + small-caps; ★ dotted TOC leaders; ★ book-plate card (`outline` frame) |
| `theme-google.html` | Material shell | ★★★ JS-free per-section 4-colour accent cycle (`:nth-child(4n+k)` → `--s` cascade); ★ four-dots component; ★ per-item colour chips |
| `theme-microsoft.html` | Fluent window | ★★ pressed-state accent ramp (`--accent-hover/active`, `color-mix`); ★★ stacked window panes on grey canvas; ★ title-bar header |
| `theme-github.html` | Repo README | ★★★ file-tree TOC (folded-document icon via gradients + `.md` extensions + `-` numbers); ★★ repo-bar/badges/tabs breadcrumb; ★★ `pre::before` filename caption bars |
| `theme-youtube.html` | Watch page | ★★★ shimmer title card (`background-clip:text` + sweeping gradient keyframes); ★★ 16:9 player surface with its own token set; ★★ decorative scrubber (buffered/progress/knob); ★ END-screen pill |
| `theme-adobe.html` | Creative workspace | ★★★ artboard hero on a checkerboard with corner labels + selection handles; ★★ docked panel bars (`PROPERTIES`/`PAGES`); ★★ blinking editor caret in `pre`; ★★ custom scrollbars |
| `dec-manual.html` | 1970s DEC handbook | ★★★ chapter-numbering override in the JS renderer (`1.0` heading tabs, `1-1` TOC entries, stable anchor ids); ★★ cover band; ★ NOTE/WARNING notice labels; ★ LISTING captions + ruled comments page |
| `ibm-manual.html` | IBM SRL copy | ★★★ CSS multi-column spec body (`columns:2`, `column-rule`, `break-inside:avoid`); ★★★ CSS-counter pagination (`counter-reset:page` + `counter(page, decimal-leading-zero)`); ★★★ fixed RTL-aware spine stripe (logical properties); ★ tear-out comments form |
| `manpage.html` | troff `man(1)` page | ★★ man-frame header/footer (`AI(1)`); ★★ NAME/SYNOPSIS label system + hanging indent; ★★ `80ch` measure-based layout; ★ date injection |
| `blueprint.html` | Drafting sheet | ★★★ fixed drafting grid + registration crosshairs; ★★★ hatched display type (`background-clip:text` over diagonal repeating gradient, `-webkit-text-stroke` fallback); ★★ clip-path dimension arrowheads; ★★ title block |
| `military-spec.html` | MIL-STD document | ★★★ i18n-aware stencil suppression (`html[lang=zh|ja|ko|yue|ar|fa|ur|he|ps] .stencil` lifts decorative letterforms); ★★ paper-grain texture; ★★ classification banner + doc-control/signature block |
| `museum.html` | White-cube gallery | ★★ spotlit artwork hero (radial spotlight pool); ★ object label / curator note / conservation notice cards; ★ "Panel n" numbering |
| `notary.html` | Notarised certificate | ★★★ pure-CSS wax-seal medallion (radial-gradient + five stacked inset box-shadows, recolours with `--accent`); ★★ fixed double certificate frame + corner diamonds; ★★ rotated filing stamps; ★ clause marginalia |

### 3.3 Culture, art & executive series (11 theme files + 2 apps)

| File | Identity | Unique features (★ = port value) |
|---|---|---|
| `swiss.html` | Swiss grid poster | ★★ fixed 12-column `grid-rules` overlay; ★ global `border-radius:0` reset; ★★ poster typography (huge tabular numerals, 0.82 line-height) |
| `country-ja.html` | Japanese print | ★★ ensō brushstroke via `conic-gradient` mask; ★★ hanko seal mark (`inset box-shadow` + `color-mix` ring); ★★ seigaiha wave band (layered radial gradients); ★ fixed secondary `--ai-iro` |
| `art-cubism.html` | Cubist painting | ★★ `--shard` 4-directional drop-shadow keyline that follows `clip-path` silhouettes; ★★ fractured +AI wordmark (3 offset clipped layers); ★★ per-section accent cycle; ★ beveled shard clip-path system |
| `art-impressionist.html` | Monet garden | ★★ `atmosphere`+`dabs` fixed brushwork layers (~30 gradient dabs, one blur, 90–160s drift); ★★ `mask-image` feathered edges; ★★ broken-colour gradient hairlines |
| `occupation-ceo.html` | Executive Series anchor | ★★ embossed corporate seal (`repeating-conic` + `repeating-radial` masked to a ring); ★★ mono ORDER/AGENDA/SIGNED chrome; ★★ flex-`order` signed spec-end composition; ★ crosshatch hero grid |
| `occupation-cfo/cio/coo/cto.html` | Executive Series siblings | same boardroom system; role-code/accent/kicker deltas only (★ cosmetics) |
| `random.html` *(app)* | Rotating theme showcase | ★★★ iframe rotation with `applyZoom()` magnification (`scale(factor)` + proportional resize); ★★★ cross-cycle scroll/clause persistence (reads child's `[aria-current]`, survives page swaps, try/catch-guarded for file://); ★★ focus recovery; ★ copy-URL + rAF countdown |
| `attract.html` *(app)* | Kiosk attract mode | ★★★ deterministic 26-section walk with deep links; ★★★ "reading streak" state machine (theme/mode/language held per 4-section streak, then rotated); ★★ Space/P/←→ transport; ★★ reduced-motion-aware interval |
| `toolkit.html` *(app)* | Developer & signer tools | ★★★ zero-dependency Code 128 barcode encoder (Code Set B, mod-103 checksum → inline SVG, offline); ★★★ pointer-capture resizable split-pane comparison (`setPointerCapture`, clamped 18–82%, two iframes); ★★ print-label technique (`visibility` swap + `@page landscape`); ★★ QR via optional CDN with graceful offline fallback; ★★ XSS-safe snippet generator; ★ URL builder with debounced live updates; ★ theme gallery registry |
| `crawl.html` *(app)* | Opening crawl | ★★★ HTML→typed-blocks converter (data-driven crawl off translated spec); ★★★ content-height-computed duration (`--duration`, constant px/s pace in any language); ★★★ scale-based 3D recede (documented: rotateX crosses the camera plane — use scale); ★★★ transport state machine (play/pause/speed/restart via forced-reflow trick); ★★★ reduced-motion → static scrollable list fallback; ★★ hover-to-pause, RTL, `document.fonts.ready` re-measure |

### 3.4 Industry A–M (16)

| File | Identity | Unique features (★ = port value) |
|---|---|---|
| `accounting.html` | Paper ledger | ★★ ruled-paper baseline background; ★★ trial-balance meta table (dotted leaders, tabular-nums); ★ debit/credit gutter; ★ sign-off block |
| `advertising.html` | Campaign board | ★★ moodboard swatch strip; ★★ tilted sticky-note labels (rotate ±2° system); ★ oversized poster type |
| `aerospace.html` | Split-flap departures board | ★★★ split-flap lettering (`background-clip:text` over a two-tone gradient with a hinge line — mechanical flap face, no images); ★★★ live board clock (`tickClock`, `setInterval`, `padStart`); ★★ departure-row section headers; ★ board-flap brightness pulse |
| `architecture.html` | Competition board | ★★ drawing-sheet frame with corner brackets + tick rulers; ★★ masked plan-grid backdrop; ★★ title block; ★ figure plate |
| `banking.html` | Retail bank app | ★★ account-card hero (single gradient + radial sheen + frosted chip via `backdrop-filter`); ★ pill chrome; ★ statement rows |
| `biotech.html` | Lab protocol | ★★ gel-lane band readout; ★ DNA sequence strip; ★ protocol header; ★ CAUTION notice re-grid |
| `chemicals.html` | MSDS lab | ★★★ NFPA 704 safety diamond (rotated 2×2 grid + counter-rotated glyphs); ★★ masked grid-orb backdrop; ★ rotated-square motif |
| `construction.html` | Building site | ★★ scaffolding lattice (4-angle repeating gradients); ★★ hazard-stripe motif; ★★ CSS bolt/rivet corners; ★★ permit card with perforation edge; ★★ stencil text-stroke signage |
| `consulting.html` | Strategy deck | ★★★ 2×2 framework matrix (`grid-template-areas: "y grid" ". x"`, `vertical-rl` axis label); ★ slide-deck framing; ★ risk accent reserved for warnings |
| `dental.html` | Dental practice | ★★ zero-new-markup theme (pure CSS on base skeleton); ★★ smile-arc motif (bottom-only elliptical borders); ★★ appointment slip (dashed tear edge + RECALL tag) |
| `energy.html` | Plant control room | ★★ hazard stripe token; ★★ glowing status lamps; ★★ masked blueprint grid; ★ corner brackets |
| `finance.html` | Private bank | ★★ CSS ticker marquee (duplicated content, `translateX(-50%)`, reduced-motion disabled); ★★ dotted TOC leaders; ★ letterhead; ★ CONFIRMED end |
| `fintech.html` | Neobank terminal | ★★ ticker with left/right fade masks; ★★ grid-orb hero; ★★ `--accent-text` contrast var; ★ status chips |
| `fitness.html` | Gym programme | ★★★ effort load bars via `--effort` custom property + `:nth-child(4n±k)` + gradient (data-driven charts, zero JS); ★★ chalk-mark backdrop; ★ SET/SESSION framing |
| `games.html` | Arcade cabinet | ★★ CRT scanlines + vignette; ★★ hard pixel-shadow press system (`--px` offset shadows, translate on `:active`); ★★ i18n-aware pixel font (Press Start 2P → per-script Noto fallback); ★ HUD strip |
| `hr.html` | Employee handbook | ★★ org-rings motif (concentric rings + positioned people dots); ★ warm radial backdrop; ★★ handbook card sections |

### 3.5 Industry N–Z (15)

| File | Identity | Unique features (★ = port value) |
|---|---|---|
| `insurance.html` | Insurance policy | ★★ pure-CSS umbrella logo (all geometry in `em`, scales via font-size); ★ policy-line readout |
| `legal.html` | Correspondence from counsel | ★★ engraved letterhead system (small-caps serif + navy/gold); ★★ case caption with gold rule + double-rule hero; ★ numbered clauses |
| `luxury.html` | Haute-luxury atelier | ★★ "N° " section numbering; ★★ spec-end monogram; ★ reductive system (no shadows/gradients) |
| `manufacturing.html` | Assembly floor | ★ status LEDs; ★★ ISO tag + CSS rivet (double inset box-shadow); ★ STATION framing |
| `maritime.html` | Coastal chart | ★★★ pure-CSS compass rose (gradient crosshair + dashed ring + ±45° diagonals + N/E/S/W letters); ★★ graticule grid; ★★ scale bar; ★★ `color-mix` accent-legibility pattern |
| `medical.html` | Clinical document | ★★ CSS reticle crosshair over the mark; ★★ masked hero grid-disc; ★ patient-chart readout |
| `mentalhealth.html` | Quiet reading room | ★★ luminance threshold lift (0.179→0.26) for pastel accents — a documented contrast-mechanism tune; ★ pill controls |
| `mining.html` | Mining claim | ★★ 8-band strata strip (nth-child colour order); ★ CLAIM framing; keeps dark default |
| `music.html` | Album/ticket stub | ★★ ticket perforation notches (paper-coloured circles hanging off a dashed rule); ★★ PRESSING INFO/TRACK framing; keeps dark default |
| `newsroom.html` | Front-page news | ★★★ locale-aware live dateline (`tickDateline`, `toLocaleDateString(lang, {weekday…})`, re-renders on language change); ★★ newspaper masthead + double rule; ★★ float drop-cap lead; ★ slugline/factbox furniture |
| `pharma.html` | Regulatory monograph | ★★ MONOGRAPH DATA structured label (2-col `dl`, tabular values, accent top bar); ★ split wordmark |
| `realestate.html` | Listing brochure | ★★★ CSS grid floor-plan (named `grid-template-areas`, gap-as-walls trick, room tiles); ★★ listing facts table; ★ MLS banner + OPEN tag |
| `university.html` | Faculty handbook | ★★ pure-CSS crest seal (inset ring + gold dot monogram, `--crest-size` scaling); ★★ colour-mix parchment washes |
| `utilities.html` | Grid-operator dashboard | ★★★ CSS gauge (`conic-gradient` arc + radial mask ring + rotated needle/hub/readout); ★★ gradient-composed node-link network diagram; ★ status chips + telemetry feed |
| `veterinary.html` | Vet clinic | ★★ pure-CSS paw print (4 stacked radial gradients, currentColor → accent-aware); ★ record-line framing |

### 3.6 Performance / reader modes (6 apps)

| File | Identity | Unique features (★ = port value) |
|---|---|---|
| `credits.html` | Film end-credits roll | ★★★ `readProgress()` — parses live `getComputedStyle().transform` matrix to recover animation position; ★★★ negative `animation-delay` mid-animation resume + longhand-only restart (keeps CSS `:hover` play-state control); ★★★ HTML→credit-line compiler (DOMParser → typed `.line` divs, RTL-safe); ★★ content-height-proportional duration; ★★ full reduced-motion fallback (degrades to a scrollable reading page) |
| `narration.html` | Read-aloud with karaoke | ★★★ SpeechSynthesis karaoke engine (`onboundary` charIndex → pre-computed word offsets, sentence chaining); ★★★ session-counter callback invalidation (stale voice callbacks can never fire); ★★★ multilingual sentence segmentation (ASCII + CJK fullwidth + Arabic `؟` + Devanagari danda, decimal-point protection, quote-closer absorption); ★★ voice matching incl. zh→yue; ★★ transport state machine; ★★ per-line word highlighting via `box-decoration-break:clone` |
| `rsvp.html` | RSVP reader | ★★★ ORP (Optimal Recognition Point) middle-character fixation highlight (`round(len*0.3)`); ★★★ Unicode-property-escape CJK tokenizer (`\p{Script=Han|Hiragana|Katakana|Hangul}` with range fallback, 2-char grouping, code-point safe); ★★★ chunking + resync state machine (chunk-size change mid-stream re-syncs position); ★★ aria-live toggled off while playing (no screen-reader spam at 400 WPM) |
| `slideshow.html` | Kiosk deck | ★★★ Ken Burns background per slide via one shared keyframes + per-slide `--kb-h` hue; ★★★ idle/kiosk fade state machine (3s timeout, `cursor:none`, chrome fades to 0.12); ★★★ single 50ms interval clock drives progress bar *and* advance; ★★ fullscreen API with vendor fallback; ★★ dot tablist; ★★ crossfade with `visibility` gating |
| `speedread.html` | 60-second RSVP game | ★★★ rAF token-drain loop with exponential WPM ramp (+10%/10s from 400); ★★★ scoring/rank ladder + per-language best (`plus-ai-speedread-best-<lang>`); ★★ DOM-walker HTML→text flattener (cleaner than regex strippers); ★★ CJK 2-char tokenization; ★★ stream cache |
| `typewriter.html` | Typewriter with sound | ★★★ fully procedural WebAudio typewriter (white-noise buffer → bandpass click, triangle thunk, sine ding; gesture-resumed, rate-limited); ★★★ code-point-safe incremental typing engine (section offsets via `Array.from`, slice rendering, "Start at" jumps); ★★ caret auto-scroll follow; ★★ reduced-motion → instant static text mode |

---

## 4. The super version — best unique features to combine

Curated, de-duplicated, ranked by (uniqueness × value × portability). Each entry names the
source file and the concrete mechanism so it can be lifted directly.

### Tier 1 — Applications & engines (build modes, not decorations)

1. **RSVP reader engine** (`rsvp.html`) — ORP fixation highlight + CJK-aware tokenizer +
   chunk resync. The single most portable reading innovation. Combine with `speedread.html`'s
   rAF drain loop + WPM ramp for timed mode.
2. **Speech narration / karaoke** (`narration.html`) — sentence segmentation + boundary
   highlighting + session invalidation. Pair with RSVP ("listen" vs "read" modes).
3. **Typewriter engine with synthesized sound** (`typewriter.html`) — code-point typing +
   procedural WebAudio keys. The sound synthesis is the reusable gem (no assets).
4. **Film-credits roll** (`credits.html`) — transform-matrix progress reading + negative
   animation-delay resume. Also the generic lesson: *resume any CSS animation mid-flight*.
5. **Opening crawl** (`crawl.html`) — data-driven blocks + height-derived duration + scale
   recede + static reduced-motion fallback.
6. **Slideshow/kiosk deck** (`slideshow.html`) — Ken Burns hue system, idle fade, single-clock
   advance, fullscreen, dot tablist.
7. **Attract-mode state machine** (`attract.html`) — deterministic section walk + reading
   streaks. The "ambient demo" mode for the super page.
8. **Cross-origin-safe iframe rotator** (`random.html`) — zoom magnification + scroll/clause
   persistence reading `[aria-current]`. The pattern to reuse if the super page previews
   other themes.

### Tier 2 — Live data & tooling widgets

9. **Locale-aware live dateline** (`newsroom.html`) — re-renders on language switch.
10. **Stardate chronometer** (`startrek.html`) — year-fraction stardate + HH:MM:SS.
11. **Code 128 barcode encoder** (`toolkit.html`) — zero-dependency, offline, SVG output.
12. **URL builder + snippet generator + print label** (`toolkit.html`) — debounced live
    updates, XSS-safe DOM-built previews, visibility-swap print technique.
13. **Ticker marquee system** (`finance.html`/`fintech.html`) — duplicated-track CSS scroll
    with optional fade masks, reduced-motion disabled.
14. **Effort/load bar charts** (`fitness.html`) — `--effort` custom property + nth-child,
    data-driven bars with zero JS.

### Tier 3 — Pure-CSS component library (accent-aware, no images)

15. **Gauge** (`utilities.html`) — conic arc + radial mask ring + needle.
16. **Compass rose** (`maritime.html`) — full 8-point vector rose.
17. **NFPA safety diamond** (`chemicals.html`) — rotated grid + counter-rotated glyphs.
18. **Floor plan** (`realestate.html`) — named grid areas + gap-as-walls.
19. **Wax seal** (`notary.html`) — radial gradient + stacked inset shadows.
20. **Split-flap lettering** (`aerospace.html`) — background-clip text with hinge line.
21. **Hatched/stencil display type** (`blueprint.html` + `military-spec.html`) — hatched
    clip-text **with** the i18n-aware stencil suppression fallback.
22. **Umbrella / paw / smile-arc icons** (`insurance.html` / `veterinary.html` / `dental.html`) —
    the "pure-CSS logo" pattern: geometry in `em`, colour via currentColor.
23. **SVG pixel sprite library** (`spaceinvaders.html`) — `<symbol>`/`<use>` + `crispEdges`.

### Tier 4 — Background & atmosphere layer system

24. **Layer manager** — the cross-cutting idea: one fixed, `pointer-events:none`,
    reduced-motion-gated layer stack. Pick from: starfield (startrek/starwars), scanlines+CRT
    vignette (cyberpunk/games/hal9000), perspective grid horizon (cyberpunk), radar sweep
    (startrek), fog bands (bladerunner2049), brushwork dabs (art-impressionist), drafting grid
    + registration marks (blueprint), graticule (maritime), 12-column Swiss grid (swiss),
    hex hive (the-borg), Ken Burns blobs (slideshow).
25. **Glitch / shimmer / neon-flicker typography effects** (`cyberpunk`, `theme-youtube`,
    `retro`) — clip-path glitch, background-clip shimmer sweep, text-shadow neon flicker.

### Tier 5 — Typography & layout systems

26. **Book layout** (`ibm-manual.html`) — CSS multi-column spec + CSS-counter pagination,
    zero JS. The strongest "print the whole spec" option.
27. **File-tree TOC** (`theme-github.html`) — folded-document icons + `.md` extensions.
28. **2×2 matrix** (`consulting.html`) — grid-template-areas quadrant chart.
29. **Per-section colour cycle** (`theme-google.html`/`art-cubism.html`) — nth-child +
    custom-property cascade, JS-free section theming.
30. **Drop caps, dotted leaders, small-caps letterheads** (`newsroom`, `finance`, `legal`,
    `anthropic`) — the editorial micro-library.

### Tier 6 — Accessibility & personalization upgrades the base is missing

31. **Theme persistence** — add `plus-ai-theme` (pattern: existing `plus-ai-language`/`plus-ai-font`).
32. **System-theme auto mode** — `prefers-color-scheme` detection; no variant has it.
33. **Behavioral reduced-motion fallbacks** — the archive's best practice: static list
    (crawl), scrollable page (credits), static text (typewriter), flat WPM (speedread).
    A super page should pick one per mode.
34. **Contrast guardrails** — the luminance-threshold tune (mentalhealth), `--accent-text`
    contrast vars (fintech/maritime), and the i18n-aware stencil suppression (military-spec)
    are three proven ways to keep decorative themes safe.

---

## 5. Build notes for the combined page

- **Keep the hooks contract.** Every variant preserves the base ids/classes/`data-*` keys;
  the super page must too, or the 40-language data layer breaks. All the features above are
  additive layers around that skeleton.
- **One data source, many views.** All six reader apps independently re-implement
  "reviewed → else English fallback" and HTML→text flattening (four different strategies in
  `credits`/`rsvp`/`speedread`/`typewriter`). The super page should implement it **once**
  and feed every mode.
- **Sound needs a gesture.** Both Web Audio systems (`blip()`, typewriter) resume the
  AudioContext from a user gesture — keep that pattern or autoplay policies will mute you.
- **Layer budget.** Decorative layers are cheap individually but stack: scanlines + starfield
  + grid + fog at once will tax low-end GPUs. Gate layers behind a "dressing" control and
  always behind `prefers-reduced-motion`.
- **Mode conflicts to watch:** RSVP and TTS both own the Space key (use a mode-scoped keymap);
  the credits/crawl/slideshow all own a progress bar (share one component); kiosk modes should
  pause `aria-live` updates (rsvp's polite↔off toggle is the pattern).
- **Ship the gaps as features:** persist theme, add system-theme auto, cross-link themes —
  none of the 78 files does these, so the super version gains them "for free" as differentiators.

---

*Analysis artifacts: `archive/analysis/group-1.md` … `archive/analysis/group-6.md` (per-file reports),
`archive/analysis/PROTOCOL.md` (method). 94 HTML files scanned; 78 variants compared against
`site/index.html (formerly site/index.html)`.*
