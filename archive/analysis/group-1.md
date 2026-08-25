# Group 1 — Sci-Fi / Space / Arcade / Retro theme variants

Base: `archive/versions/archive/versions/website-v13.html`. All 14 files keep the identical i18n/data skeleton
(40-language registry, 26 spec sections, personalization, accent/theme/font systems).
Only genuinely NEW behavior vs v13 is reported below.

---

### startrek.html — full-colour LCARS bridge console
- **Live chronometer + stardate** — JS `tickChronometer()` writes HH:MM:SS to `#lcarsClock`
  and computes a Star-Trek-2009-style stardate (`STARDATE YYYY.###`, year + fraction-of-year)
  to `#lcarsStardate`; driven by `setInterval(tickChronometer, 1000)`. Rating: ★★★
- **Tactile sound system (Web Audio)** — `blip(freq, dur, vol)` synthesizes square-wave
  beeps via `AudioContext`/`webkitAudioContext` + `createOscillator`/`createGain` with
  `exponentialRampToValueAtTime` decay. Toggled by `#audioToggle` (aria-pressed, `is-muted`
  class), persisted in localStorage key `plus-ai-lcars-audio`, and wired to global
  `click` (`.control, a[href^="#"]`) and `change` (selects) listeners with distinct pitches
  (740/880/660 Hz). Rating: ★★★
- **LCARS elbow-bar strip** — `.lcars-strip` renders a row of `<i>` colour blocks
  (`:nth-child` width+background from `--lcars-*` vars); `.chip`/`.chip-blue`/`.chip-mauve`
  squares in the header; `.status-dot` "systems nominal" light. Rating: ★
- **Dressing layers** — fixed `.starfield` (two stacked radial-gradient star layers with
  `lcars-twinkle` opacity keyframes), `.scanlines` (repeating-linear-gradient + vignette),
  `.sweep` (4px gradient band, `lcars-sweep` translateY 0→100vh loop). All hidden in
  light mode. Rating: ★★
- **Changed defaults** — accent `#FF9C00`, font Oswald (Antonio + Oswald appended to the
  picker → 41 fonts), font-stack `"Oswald", "Antonio", Inter, …`; `readableTextColour`
  threshold text now `#17131A`. Theme stays dark.

### lcars-mono.html — monochrome amber LCARS
- Identical to startrek.html (chronometer, stardate, `blip()` audio, `plus-ai-lcars-audio`,
  `.lcars-strip`, starfield/scanlines/sweep) but every accent is one amber family
  (`--lcars-amber-bright/gold/pale/deep`). Rating: ★ (the audio/chronometer mechanism is
  counted under startrek.html; this is a palette re-skin of it)
- **Light theme redefined as a dim console** — `:root[data-theme="light"]` sets dark
  `--bg: #1a1a18` / `--panel: #232320` (not paper), so "light" is a dim amber-on-dark-grey
  console rather than the base pale theme. Rating: ★★
- Star colours reduced to amber tints; `status-dot`/untranslated badge also amber.

### starwars.html — worn galactic datapad
- **Deep-space starfield** — fixed `.starfield` with two stacked radial-gradient star
  layers; `::after` layer twinkles via `star-twinkle` opacity keyframes; hidden in light
  mode. Rating: ★★
- **Holo-flicker wordmark** — `.wordmark` animated with `holo-flicker` (brief opacity dips
  at 90–97% to fake a flickering hologram). Rating: ★
- **Crawl-in header entrance** — `.header-controls` uses `crawl-in`: 3D
  `perspective(620px) rotateX(16deg) translateY` → flat, a one-shot title-crawl nod.
  Rating: ★★
- **Bronze/holo panel chrome** — `.hero-subtitle::after` accent rule; `--bronze`/`--dune`
  warm tones against blue (`--accent` holographic). Rating: ★
- **Changed defaults** — accent `#4FC3F7`, font Jura. Theme stays dark.

### spaceodyssey.html — monolith minimalism (white void)
- **Monolith slab hero** — `.monolith` is a centered black `aspect-ratio: 4/9` slab
  (grid `place-items:center`) containing the `h1`; `.monolith-edge` is a 1px vertical
  accent line; `.red-light` is the single radial-gradient "breathing" red dot
  (`breathe` opacity keyframes, no box-shadow anywhere per the theme constraint).
  Rating: ★★
- **Strict design constraint** — the palette is white/black/one red (`#E63946`); reading
  progress is a 0.12rem top hairline (`inset: 0 0 auto`). Rating: ★
- **Changed defaults** — accent `#E63946`, font Montserrat (quoted in stack),
  **default theme flipped to light** (head + main script use
  `requestedTheme === "dark" ? "dark" : "light"`).

### bladerunner2049.html — neon-noir megacity archive
- **Ambient haze** — fixed `.haze` with two `vmax`-sized radial-gradient `::before`/`::after`
  blobs built from `color-mix(in srgb, var(--accent/--teal) N%, transparent)`; separate
  light-mode variants. Rating: ★★
- **Drifting fog bands** — `.fog-bands` holds three `.fog-bands i` horizontal
  `linear-gradient` stripes, `filter: blur(24px)`, animated by `fog-drift`
  (translateX 0→58%, 54/72s loops, staggered `animation-delay`). Rating: ★★
- **Concrete hero slab** — `.hero-slab` is a `--grain`+linear-gradient concrete bar with
  border and deep shadow. Rating: ★
- **Changed defaults** — accent `#F5A83B` (haze amber), font Roboto Condensed (quoted in
  stack). Theme stays dark.

### cyberpunk.html — neon street terminal
- **Perspective grid horizon** — fixed `.grid-horizon` uses `perspective: 360px` +
  `perspective-origin`; `.grid-plane` is two `repeating-linear-gradient` grids (cyan
  verticals, pink horizontals) on `transform: rotateX(62deg)`, with a `.horizon-glow`
  radial breathing (`horizon-breathe`). A pure-CSS receding neon street grid.
  Rating: ★★★
- **Glitch typography** — the hero title is duplicated into two clipped layers animated by
  `glitch-a`/`glitch-b` (discrete `clip-path: inset()` jumps with `steps(1,end)` + tiny
  translate offsets). Rating: ★★
- **CRT scanlines** — fixed `.scanlines` repeating-linear-gradient overlay. Rating: ★
- **Changed defaults** — accent `#FF2D95` (hot pink), font Oswald. Theme stays dark.

### neogenesis.html — anime-mecha dormant machine manual
- **Angular armour system** — shared `.clip` (two-notch) and `.clip-corner` (one-corner)
  `clip-path: polygon(...)` helpers, reused across skip-link, buttons, cards, meaning-card,
  spec cards; plus `.hazard-strip` (`repeating-linear-gradient(-45deg)` warning tape) and
  a hex-plate `.emblem-plate` (three 60/-60/0-deg `repeating-linear-gradient` hairlines +
  hex `clip-path`). Rating: ★★
- **Telemetry readout** — `.telemetry` mono strip with `.telemetry-key`/`.telemetry-val`
  pairs and diamond `.telemetry-sep` separators; `.emblem-status` uses
  `writing-mode: vertical-rl` label + `.ticks i` segmented bars (`.on` glows).
  Rating: ★★
- **Corner brackets** — `.emblem-plate .corner-tl/.corner-br` absolute 2px accent corners.
  Rating: ★
- **Changed defaults** — accent `#9BF76D` (bio-green), font Jura. Theme stays dark.

### sci-fi-1.html — orbital holographic HUD
- **Nebula + masked dot grid** — fixed `.space` with `::before` radial nebula gradients
  and `::after` a `radial-gradient` dot grid whose `mask-image: radial-gradient(...)`
  fades it out from the centre. Rating: ★★
- **Telemetry readout** — `.telemetry` mono strip with `.t-readout b`, pulsing
  `.t-pulse` dot (`hud-pulse`), `.t-spacer` right-align. Rating: ★
- **Holo sweep + drift** — `.holo-scan` is a 1px gradient line sweeping the `+AI` mark
  (`holo-sweep` translateY loop); `.mark` text drifts via `holo-drift`. Rating: ★★
- **Corner-bracket system** — one shared `::before`/`::after` rule adds 0.75rem glass-edge
  corner brackets to `.meaning-card`, `.spec-meta`, `.toc`, `.spec-section`. Rating: ★★
- **Changed defaults** — accent `#35D0FF`, font Exo 2 (hardcoded `"Exo 2"` first in stack).
  Theme stays dark.

### sci-fi-2.html — atomic space-age retro-futurism
- **Atom mark** — `.atom` holds three elliptical `.orbit` rings (`.orbit-a/-b/-c`, distinct
  `--tilt`/`--dur`) whose `.orbit i` rotate (`orbit-spin`) with a `.orbit i::after` coral
  electron dot. The +AI mark is the nucleus. Rating: ★★
- **Starburst stamp badge** — `.stamp` is a rotated circular badge whose `::before` is a
  `repeating-conic-gradient` starburst masked to a ring via `mask: radial-gradient(...)`;
  `.hero::before` does the same at page scale behind the hero. `.stamp--mustard/--turquoise/--card/--header`
  variants position/recolour it. Rating: ★★
- **Boomerang ornament** — `.boomerang` is a 2rem-thick partial border-radius arc
  (`border-top-color/border-inline-end-color: transparent`) rotated as a retro motif.
  Rating: ★
- **Changed defaults** — accent `#FF5A5F` (coral), font Jost,
  **default theme flipped to light** (dark = "cosmic lounge").

### hal9000.html — HAL-9000 console
- **Fisheye eye lens** — `.hal-eye` is a large radial-gradient sphere (two nested
  `radial-gradient` layers: a specular highlight + a red `color-mix` glow falloff) that
  breathes via `hal-breath`; positioned behind the hero as the +AI mark-as-eye.
  Rating: ★★
- **Mission-log status line** — `.status-line` mono diagnostic strip
  ("HAL 9000 · HEURISTIC ACCOUNTABILITY UNIT · +AI-0.1 · OPERATIONAL") with a
  `.status-dot` that blinks via `hal-blink` (steps). Rating: ★
- **CRT scanlines** — fixed `.scanlines` overlay, dimmed in light mode. Rating: ★
- **Changed defaults** — accent `#FF2B3A`, font IBM Plex Mono (added to picker → 40 fonts),
  monospace-first font-stack. Theme stays dark.

### spaceinvaders.html — 1978 arcade cabinet
- **SVG pixel-art sprite system** — a hidden `<svg><defs>` defines `<symbol id="plusaiMark">`
  (17×7), `id="invader"` (11×8 crab), `id="bunker"` (16×5) as `<rect>` grids with
  `shape-rendering="crispEdges"`; reused everywhere via `<svg><use href="#…"/></svg>` and
  recoloured by `currentColor`/`--accent`. A real, reusable SVG sprite + dithering technique.
  Rating: ★★★
- **Marching invaders** — `.invader-strip` is `width:max-content` with `invader-march`
  animation (`steps(2,end)`, translateX −3.5rem, alternate) producing the classic
  two-frame side-step march; pure CSS, no JS. Rating: ★★
- **Arcade chrome** — `.hud` SCORE/HI-SCORE/CREDIT strip, `.coin-plate-text` "INSERT COIN"
  blink (`pixel-blink` steps), `.ready-prompt` "PLAYER ONE — READY?", `.bunker-line`
  pixel-bunker divider, `.wordmark` framed as the instruction plate. Rating: ★
- **Laser-shot reading progress** — `.reading-progress span::after` adds a glowing 6px tip.
  Rating: ★
- **English chrome re-voiced in markup** — `data-text`/`data-html` fallbacks carry arcade
  copy ("SKIP TO THE BRIEFING", "START GAME", "PLAYER ONE — +AI POST NOMINAL DESCRIPTION",
  "DEFEND THE MEANING OF THE MARK … WAVE 1") in place of the base English. Rating: ★★
- **Changed defaults** — accent `#3DFF6E` (phosphor green), font IBM Plex Mono, "Press Start
  2P" added (41 fonts). Theme stays dark.

### the-borg.html — Borg collective console
- **i18n English re-voicing via JS** — after the registry loads, `Object.assign` on
  `englishEntry.interfaceCopy` / `untranslatedNotice` / `end` rewrites the English chrome
  ("RESISTANCE IS FUTILE — AI HELPED. YOU WILL TAKE RESPONSIBILITY.",
  "ASSIMILATE THE SPEC", "COLLECTIVE INDEX", "DIRECTIVES", "ADAPTATION IN PROGRESS", …).
  A data-driven re-skin of interface copy that leaves every translation pack untouched.
  Rating: ★★★
- **Hexagonal hive grid** — `body` background is the classic 6-layer
  `linear-gradient` (30/150/60-deg pairs, `background-size: 56px 98px`) hexagon tile,
  tinted by `--grid`. Rating: ★★
- **Circuit trace + angular chrome** — `.site-header::after` is a segmented
  `linear-gradient` circuit line; `.wordmark` is a hex `clip-path` emblem;
  `.accent-sample` pulses via `node-pulse`; `.meaning-card::before/::after` corner brackets.
  Rating: ★★
- **Changed defaults** — accent `#2EFF5B` (Borg green), font Rajdhani + IBM Plex Mono added
  (41 fonts). Theme stays dark. (No new markup: everything is CSS/JS over the base DOM.)

### quantumlab.html — research-group lab notes
- **Annotation callout system** — `.mark-figure` wraps the +AI mark; `.ref-num` is a circled
  reference numeral and `.anno-top`/`.anno-side` are mono callouts with hand-drawn arrow
  tails (`.anno-top::after` vertical rule, `.anno-side::before` horizontal rule).
  Rating: ★★
- **Particle collision traces** — `.particle-traces` behind the hero holds `.arc-a/-b/-c`
  (partial `border-radius:50%` rings with only some `border-*-color` set) and `.node-a…-d`
  collision dots. Rating: ★★
- **Changed defaults** — accent `#00C853` (signal green), font stays Inter (deliberately:
  mono readouts use `ui-monospace` system face, no Google mono loaded),
  **default theme flipped to light** (engineering-paper grid).

### retro.html — 50s Americana diner
- **Checkerboard + chrome trims** — `.checkerstrip` uses a `conic-gradient` two-tone
  checkerboard (`--checker-a/-b`, 1.8rem tile); `.chrome-bar` is a metallic strip.
  Rating: ★★
- **Neon flicker** — the wordmark/hero title glow via stacked `text-shadow` + `neon-flicker`
  keyframes (brief random opacity dips), the classic buzzing-sign effect. Rating: ★★
- **Neon sign slabs** — blockquotes/canonical lines are restyled as glowing neon boards
  (`--neon-board`/`--neon-cream`). Rating: ★
- **Changed defaults** — accent `#E23D28` (cherry red), font Rubik with Pacifico appended
  (40 fonts) used only for the script wordmark flourish,
  **default theme flipped to light** (dark = "after-hours neon").

---

## Cross-cutting patterns

- **Fixed decorative background/dressing layer** (a `position: fixed` `aria-hidden` div
  layered under or over content): startrek/lcars-mono (`starfield`, `scanlines`, `sweep`),
  starwars (`starfield`), bladerunner2049 (`haze`, `fog-bands`), cyberpunk (`grid-horizon`,
  `scanlines`), sci-fi-1 (`space`), hal9000 (`scanlines`), spaceinvaders (`crt`).
- **Scanline/CRT overlay** (repeating-linear-gradient + vignette): startrek, lcars-mono,
  cyberpunk, hal9000, spaceinvaders (5 files).
- **Starfield via stacked radial-gradient dots + twinkle keyframes**: startrek, lcars-mono,
  starwars (3 files).
- **Telemetry / status readout strip** (mono, uppercase, label:value pairs + pulsing dot):
  neogenesis, sci-fi-1, hal9000, spaceinvaders (HUD) (4 files).
- **Corner-bracket / clipped-corner chrome** (shared `::before`/`::after` or `clip-path`
  helpers): sci-fi-1, neogenesis, the-borg (3 files).
- **English chrome re-voicing** (replace base English interface copy with theme copy):
  the-borg (via JS `Object.assign` on the registry entry) and spaceinvaders (via markup
  `data-text`/`data-html` fallbacks).
- **Default theme flipped to light**: spaceodyssey, sci-fi-2, quantumlab, retro (4 files).
- **Pixel/SVG mark replacement**: spaceinvaders (SVG `<symbol>` sprite) — the only file
  that replaces the `+AI` mark and section dividers with authored pixel art.
- **New font faces appended to the picker** (beyond base's 39): startrek/lcars-mono (Oswald,
  Antonio), spaceinvaders (IBM Plex Mono, Press Start 2P), the-borg (Rajdhani, IBM Plex Mono),
  hal9000 (IBM Plex Mono), retro (Pacifico); quantumlab keeps Inter and uses system mono.
