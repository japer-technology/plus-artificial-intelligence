# Group 4 — Variant Analysis (+AI spec site themes)

Base: `archive/versions/archive/versions/website-v13.html` (dark default, accent #AC43D9, Inter, glassmorphism header).

Scope note: all 16 assigned files keep the identical i18n/data skeleton and the same main JS,
differing only in (a) the early theme-resolution head script (light↔dark default flip), (b) the
`DEFAULT_ACCENT` / `DEFAULT_FONT` / `DEFAULT_FONT_STACK` constants, (c) the full `<style>` block,
and (d) new markup in the body. Only **aerospace** adds genuinely new JS behavior (a live clock).
Every other "mechanism" below is CSS + markup.

---

### accounting.html — paper ledger / bookkeeping skin (sage ink, Tinos serif, light default)
- **Ruled ledger paper background** — `body` background is `repeating-linear-gradient(0deg, transparent 0, transparent calc(1.9rem - 1px), var(--line) …)`, i.e. faint horizontal rules at a fixed 1.9rem baseline across the whole page. CSS only. Rating: ★★
- **Trial-balance meta table** — `.spec-meta` becomes a "TRIAL BALANCE" table (`::before` header) whose `dt`/`dd` rows use `border-bottom: 1px dotted var(--rule)` dotted leaders and right-aligned `font-variant-numeric: tabular-nums` mono values. Rating: ★★
- **Debit/credit money column** — `.meaning-card::after` draws a vertical money-column gutter (`border-inline: 1px solid var(--line)`) on the card's right edge. Rating: ★
- **Ledger meaning rows** — `.meaning-list > div` is a 3-column grid (`::before` "✓" check + `.number` + term/def) replacing the base 2-column layout. Rating: ★
- **Firm letterhead** — `.letterhead` (small-caps serif wordmark) + `.workpaper-ref` mono reference line with `[data-text]` accent value. Rating: ★
- **Sign-off block** — `.spec-end` uses flex `order` + `::before`("PREPARED BY…")/`::after`("REVIEWED BY…") signature lines under a 2px ink rule. Rating: ★
- Removals: light default (flipped), `DEFAULT_FONT = Tinos`, serif font stack, square corners (2px), no shadows.

### advertising.html — ad-agency campaign board (black/orange, Montserrat, light default)
- **Moodboard swatch strip** — `.moodboard` full-width bar with `.moodboard-label` + four `.swatch` chips (`.swatch-orange/black/grey/white`; white/black get `inset box-shadow` outlines). Rating: ★★
- **Tilted sticker labels** — `.rotate-label` (+ `.rotate-ccw`/−2°, `.rotate-cw`/2°), `.wall-tag` (rotate −2°), and notice tabs `.translation-note::before`("CLIENT NOTE", rotate −2°) / `.untranslated-note::before`("HEADS UP", rotate 2°) — a consistent "sticky-note on the board" motif. Rating: ★★
- **Oversized poster type** — `.hero h1 .mark` set to `clamp(3.6rem, 14vw, 11rem)`, weight 800, tight −0.03em, with an accent underline `::after`. Rating: ★
- **Board-black blocks** — `pre` and `.translation-note` use `--board-black`/`--board-black-text` solid near-black fills (with "CLIENT NOTE" corner tab). Rating: ★
- Flavor labels: `::before` "CLIENT BRIEF" on `.spec-meta`, "THAT'S A WRAP" + "CAMPAIGN: +AI · 0.1" on `.spec-end`. Rating: ★
- Removals: light default, `DEFAULT_FONT = Montserrat`, accent orange #FF5A1F (dark mode brightens to #FF6A33).

### aerospace.html — split-flap departures board (amber, IBM Plex Mono, dark default)
- **Split-flap lettering** — `.flap`, `.board-departures`, `.board-clock`, `.hero h1 .mark`, `.meaning-list .number`, `.spec-end strong` get `color: transparent` + `background-image: linear-gradient(to bottom, var(--flap-top) 0 48.5%, var(--flap-line) 48.5% 51.5%, var(--flap-bottom) 51.5% 100%)` clipped to text (`background-clip: text`). Glyphs render split in two amber shades with a dark "hinge" line at the vertical centre — a mechanical split-flap face recreated purely in CSS. Rating: ★★★
- **Live board clock** — new JS: `elements.boardClock` (`#boardClock`, aria-hidden), `tickClock()` reads `new Date()` and repaints `HH:MM:SS` via `padStart`, driven by `setInterval(tickClock, 1000)`. The only real JS mechanism in the group. Rating: ★★★
- **Static hinge on non-flap rows** — `.spec-section > h3`, `.meaning-list > div`, `.toc a`, `.translation-note` etc. get a faint `linear-gradient` hinge line (transparent → `--hinge` → transparent at 49.6–50.4%). Rating: ★
- **Departure-row section headers** — `.spec-section > h3` becomes a 3-column grid: mono `.section-number` (prefixed "+AI " via `::before`) + destination title + a decorative `::after` chip `content: "GATE · ON TIME"`. `.spec-meta` is a bordered board table. Rating: ★★
- **Board sign header** — `.board-sign`/`.board-sign-row` replace the glass header with a flat terminal panel ("DEPARTURES" + `.board-sub` + `.board-clock` + `.board-meta` label/value rows); `.primary-link::before` adds a "GATE" chip; `.spec-end::before` "THANK YOU FOR FLYING +AI". Rating: ★
- `@keyframes board-flap` — a subtle 7s brightness pulse (`filter: brightness(1→1.14→1)`) on `.hero h1 .mark`. Rating: ★
- Removals: dark default kept, `--radius: 0` (square), solid panel header (no glassmorphism), `DEFAULT_FONT = Arimo` with a mono stack.

### architecture.html — competition-board studio (blue, Jost, light default)
- **Drawing-sheet frame** — fixed `.sheet` (inset 1rem, hairline border) with four corner brackets (`.corner-1..4`, 2px L-shaped borders) and top/bottom annotation tick rulers (`.sheet::before/::after` `repeating-linear-gradient(90deg, …1px 1.7rem)`). Rating: ★★
- **Plan-grid backdrop** — `.hero::before` = two `linear-gradient` 1px grid lines at `background-size: 3.4rem 3.4rem` (0.5 opacity), faded vertically with `mask-image: linear-gradient(180deg, transparent, black 12%, black 88%, transparent)`. Rating: ★★
- **Title block** — `.title-block` competition title strip: `.tb-brand` (accent cell) + `.tb-rows` of mono uppercase `label/value` cells (`b` bold value), separated by hairlines. Rating: ★★
- **Figure plate** — `.figure-frame` (4:3 `aspect-ratio`, center crosshair via `::before/::after` 1px lines) + `.figure-caption` below. Rating: ★
- **Drawing numbers** — `.section-number::after` appends " /"; `.spec-end::after` "SCALE 1:1 · SHEET 01/01". Rating: ★
- **`--accent-bright` contrast var** — in dark mode accent is brightened via `color-mix(in srgb, var(--accent) 55%, white)` so the blue stays legible. Rating: ★
- Removals: light default, `DEFAULT_FONT = Jost`, square corners, no shadows, hairline-only.

### banking.html — retail banking app (blue, Inter, light default)
- **Account-card hero** — `.account-card` is the only gradient in the skin: `linear-gradient(135deg, var(--accent) 0%, color-mix(in srgb, var(--accent) 58%, #002b7a) 100%)`, plus a radial sheen (`.account-card::before`) and a frosted `.account-chip` (`backdrop-filter: blur(4px)`, translucent border). Hero title/subtitle move inside the card. Rating: ★★
- **Pill chrome** — `border-radius: 999px` on `.control`/`.language-control`/`.font-control`/`.primary-link`/`.skip-link`; `.accent-sample` is a ringed dot. Rating: ★
- **✓ check circles** — `.meaning-list .number` renders a circular check icon via `font-size: 0` + `::before{content:"✓"}`. Rating: ★
- **Statement-row sections** — `.spec-section > h3` restyled as a rounded card row (border + shadow) with `.section-number` mono chip; `::before` "ACCOUNT DETAILS" on `.spec-meta`, "You're all set" + green `✓ Confirmed` on `.spec-end`. Rating: ★
- Custom thin rounded scrollbars. Rating: ★
- Removals: light default, `DEFAULT_FONT` stays Inter, rounded (0.875rem radius).

### biotech.html — lab protocol (bio-green, Inter, light default)
- **Gel-lane readout** — `.gel-lanes` (decorative, hidden in print): six `.gel-lanes span` bands with per-child `width`/`opacity` (100/84/66/92/40/58%, opacity 0.35–0.85) in `color-mix(in srgb, var(--accent) 60%, transparent)`, one amber band (nth-child 5) — a pure-CSS gel-electrophoresis lane. Rating: ★★
- **Sequence strip** — `.sequence-strip` full-width readout: `.seq-label` chip + `.seq-bases` mono `letter-spacing: 0.32em` bases string (nowrap, clipped). Rating: ★
- **Protocol header** — `.wordmark-group` + `.protocol-line` (`.protocol-id` / `.protocol-dot` / `.protocol-status`) mono metadata line. Rating: ★
- **CAUTION notice re-grid** — `.untranslated-note` uses explicit grid placement: `::before` "CAUTION" spans the row, `.badge` gets `::before "▲ "`, and `strong`/`span` are pinned to grid columns 2/rows 2–3. Rating: ★
- Flavor: `::before` "REAGENTS" on `.spec-meta` (tabular-nums values), "METHODS INDEX" on `.toc h3`, "PROTOCOL " prefix on `.section-number`, "ABSTRACT" on `.hero-lead`, "✓ RESULTS CONFIRMED" on `.spec-end`. Rating: ★
- Removals: light default, Inter unchanged, accent #16A05C.

### chemicals.html — lab / MSDS (sulfur yellow, Inter, light default)
- **NFPA 704 safety diamond** — `.safety-diamond`: `display: grid; grid-template-columns/rows: 1fr 1fr; gap: 1px; transform: rotate(45deg)` over a 4.5rem square, with four `.diamond-cell` quadrants (`.diamond-health` reagent-blue / `.diamond-flame` #B8342C / `.diamond-react` accent-yellow / `.diamond-special` panel) whose `.diamond-cell i` labels are counter-rotated `rotate(-45deg)`. A reusable hazard-placard component built with grid + counter-rotation. Rating: ★★★
- **Rotated-square motif** — `.mini-diamond` (wordmark), `.eyebrow::before`, `.toc h3::before` are all 45°-rotated accent squares. Rating: ★
- **Centred spine line** — `body` background adds a `linear-gradient(90deg, transparent 0 49.8%, …line 49.8% 50.2%…)` faint vertical centre rule. Rating: ★
- **Grid-orb backdrop** — `.hero::before` (masked `repeating-linear-gradient` grid orb, same technique as fintech/energy). Rating: ★★
- Flavor: `.header-brand` two-line brand (`.wordmark` + `.sheet-line`), `::before` "LOGGED · THE RESPONSIBLE PARTY" on `.spec-end`, `.spec-heading` left accent bar. Rating: ★
- Removals: light default, Inter unchanged, accent #E3B23C, square corners.

### construction.html — building-site declaration (safety orange, Roboto Condensed, light default)
- **Scaffolding lattice** — `.scaffold` background = four `repeating-linear-gradient` layers (90°, 0°, 45°, −45° 1px ink lines at 64/90px spacing), opacity 0.07 (0.1 dark) — cross-braced scaffold behind the hero. Rating: ★★
- **Hazard-stripe motif** — `.site-header::after` (7px −45° `repeating-linear-gradient(stripe-ink/hazard)` strip), `.plain-meaning h2::after` (stripe underline), and `.untranslated-note` (8px stripe top + tinted body). Rating: ★★
- **Bolt/rivet corners** — `.bolt` (+ `.bolt-tl/tr/bl/br`) on `.hero-copy`: `radial-gradient(circle at 35% 30%, #efeade, var(--bolt) 70%)` circle with an offset inner `.bolt::after` dark disc — a CSS screw head. Rating: ★★
- **Permit card** — `.permit-block` (dashed border, `.permit-no`) in the header, `.spec-meta::before` "PERMIT CARD" + `::after` perforation line (`repeating-linear-gradient(90deg, …5px 11px)`), `.section-number::before` "PERMIT". Rating: ★★
- **Stencil signage type** — `.hero h1 .mark` and `.spec-end::before` use `-webkit-text-stroke: 2px` + `text-shadow` for outlined lettering. Rating: ★★
- **`\A` multi-line content** — `.spec-end::after` "WORK COMPLETE — SIGNED OFF \A THE RESPONSIBLE PARTY \A SITE CLEAR" with `white-space: pre`. Rating: ★
- Removals: light default, `DEFAULT_FONT = Roboto Condensed`, separate `--display-stack`/`--mono-stack`, near-black `--code-bg` code blocks.

### consulting.html — strategy deck (navy, IBM Plex Sans, light default)
- **2×2 framework matrix** — `.matrix` grid with named areas `grid-template-areas: "y grid" ". x"`; `.matrix-y` is the vertical axis label (`writing-mode: vertical-rl; transform: rotate(180deg)`), `.matrix-x` the horizontal label, `.matrix-grid` a 2×2 with `.matrix-cell` (one `.matrix-mark` filled). A Boston-style quadrant chart in CSS. Rating: ★★★
- **Slide-deck framing** — `.section-number::before "SLIDE "`, `.slide-footer` mono strip, `::before` "AGENDA" on `.toc h3`, "PROJECT FACT SHEET" on `.spec-meta`, "RECOMMENDATION" on `.meaning-card h2`. Rating: ★
- **`--accent-text` contrast var** — dark mode brightens accent to #84a8e8 for small text legibility. Rating: ★
- **Risk accent** — `--risk`/`--risk-ink` orange reserved for the untranslated-note. Rating: ★
- Removals: light default, `DEFAULT_FONT = IBM Plex Sans`, accent #2456A6.

### dental.html — dental practice (blue + mint, Mukta, light default)
- **Pure-CSS theme (zero new markup)** — the only variant with no added classes/ids/elements; everything is done via CSS on the base skeleton (pseudo-elements + palette). Rating: ★ (notable property)
- **Smile-arc motif** — bottom-only elliptical borders (`border: 0.38rem solid transparent; border-bottom-color: var(--accent); border-radius: 50%`) render a smile arc on `.wordmark::after`, `.hero::before` (large mint arc), and `.hero h1::after` (signature arc under "+AI"). Rating: ★★
- **Appointment slip** — `.spec-meta` becomes a recall slip: `::before` "DATE — TODAY", `::after` "RECALL" corner tag, `border-bottom: 2px dashed` tear edge, `dt::after ":"`. Rating: ★★
- **Visit numbering** — `.section-number` is a two-line chip with `::before "VISIT"`; `::before` "SEE YOU SOON" / "NEXT VISIT: WHENEVER YOU'RE READY" on `.spec-end` (mint ✓ circle). Rating: ★
- Removals: light default, `DEFAULT_FONT = Mukta`, accent #2E86AB, rounded (0.85/1.1rem).

### energy.html — plant control room (safety yellow, Roboto Condensed, dark default)
- **Hazard stripe** — `--hazard: repeating-linear-gradient(45deg, #FFC400 0 12px, #101214 12px 24px)` reused as `.hazard-strip` (header/footer strip) and `.untranslated-note::before` warning bar. Rating: ★★
- **Status lamps** — `.status-lamps` with `.lamp-green`/`.lamp-amber` dots whose `box-shadow: 0 0 8px color-mix(...)` gives a soft glow; sit inside a mono `.status-strip` readout (`.status-unit`/`.status-value`/`.status-sep`). Rating: ★★
- **Blueprint grid backdrop** — `.hero::before` = `repeating-linear-gradient` grid (90°+0°, color-mix accent 4%) masked with `radial-gradient` to fade. Rating: ★★
- **Corner brackets** — `.hero-copy::before/::after` 1.1rem L-shaped corners (2px accent borders with two sides zeroed). Rating: ★★
- **Nominal end state** — `.spec-end::before` green glowing dot + `::after` "ALL SYSTEMS NOMINAL". Rating: ★
- Removals: dark default kept, `DEFAULT_FONT = Roboto Condensed`, accent #FFC400, fixed signal-green/alarm-red secondaries.

### finance.html — private-bank statement (forest green, Libre Baskerville, light default)
- **Ticker marquee** — `.ticker` > `.ticker-track` (flex, `width: max-content`) animated by `@keyframes ticker-scroll` (`translateX(0 → -50%)`, 46s linear infinite) with duplicated `.ticker-run` content for seamless loop; items are `.tk-accent`/`.tk-sep`. Pure CSS marquee, disabled under `prefers-reduced-motion`. Rating: ★★
- **Dot leaders in TOC** — `.toc a::after` renders `border-bottom: 1px dotted` leaders between number and label using flex `order` (0 number / 1 dotted line / 2 label). Rating: ★★
- **Ledger meta** — `.spec-meta` "account summary" mono rows, right-aligned tabular-nums. Rating: ★
- **Letterhead** — `.header-inner` + `.letterhead` small-caps wordmark (`.wordmark-tag` mono), `.wordmark-rule` double gold rule, `.eyebrow` gold rules on both sides, `.hero h1::before/::after` gold rules. Rating: ★
- **"CONFIRMED" end** — `.spec-end::before` letter-spaced border chip; gold `--gold` reserved for rules. Rating: ★
- Removals: light default, `DEFAULT_FONT = Libre Baskerville`, serif `--display` + mono `--mono`, 3px radius.

### fintech.html — neobank terminal (mint/indigo, Manrope, dark default)
- **Ticker marquee with fade masks** — `.ticker` wraps `.ticker-track` (`@keyframes ticker-scroll`, 34s) whose duplicated `.ticker-group` of `.ticker-item`/`.ticker-status`/`.ticker-arrow`/`.ticker-dot` scrolls behind left/right gradient fades (`.ticker::before/::after`, `linear-gradient(90deg, var(--surface), transparent)`). Rating: ★★
- **Grid-orb hero backdrop** — `.hero::before` = two `repeating-linear-gradient` mesh layers (accent 8% / indigo 8%) clipped into a circle via `border-radius: 50%` + `mask-image: radial-gradient(circle, black 0 30%, transparent 72%)`. Rating: ★★
- **`--accent-text` contrast var** — light mode darkens neon mint via `color-mix(in srgb, var(--accent) 52%, #052A1D)` so small accent text stays legible on white. Rating: ★★
- **`status-chip`** (pulsing dot `::before`) + `.panel-label` (`::before "// "`) + `.wordmark-dot` indigo dot. Rating: ★
- **Transaction framing** — `::before` "TRANSACTION DATA" on `.spec-meta`, `::before "LEDGER"` on section `h3`, `::before "✓"` circle + "TRANSACTION COMPLETE · SETTLED · THE RESPONSIBLE PARTY" on `.spec-end`. Rating: ★
- Removals: dark default kept, `DEFAULT_FONT = Manrope`, `backdrop-filter: blur(18px) saturate(150%)`, thin custom scrollbars.

### fitness.html — gym training programme (lime/orange, Oswald, dark default)
- **Effort load bars (data-driven via CSS)** — each `.spec-section` carries `--effort` and its `h3::after` renders a horizontal load bar: `linear-gradient(90deg, var(--accent) 0 var(--effort), var(--line) var(--effort) 100%)`. Values are distributed by `:nth-child(4n+1){--effort:92%} … 4n{38%}` — a workout-app chart with no JS. Rating: ★★★
- **Warm-up effort bars** — `.meaning-list dd::after` renders partial-width accent bars (46%/68%/30% via `:nth-child`). Rating: ★★
- **Chalk-mark backdrop** — `.hero::before` diagonal `repeating-linear-gradient(135deg, …)` thin line + `.hero::after` a `skewX(-14deg)` orange stripe; `.hero h1::after` a skewed orange tick. Rating: ★★
- **`--accent-ink` contrast var** — lime darkened to #4D7C0F in light mode for text use. Rating: ★
- Flavor: `.reps-tag`, `::before "SESSION DATA"` / "COACH'S NOTE" / "FORM CHECK" / "SET" / "COOLDOWN", "WORK COMPLETE · THE RESPONSIBLE PARTY". Rating: ★
- Removals: dark default kept, `DEFAULT_FONT = Oswald`, accent #A3E635, lime `pre` code.

### games.html — arcade cabinet (coin gold, Press Start 2P, dark default)
- **CRT scanlines + vignette** — fixed `.scanlines` overlay (`z-index: 3000`, `pointer-events: none`) using `repeating-linear-gradient(0deg, rgba(0,0,0,0.14) 0 1px, transparent 1px 3px)` plus `.scanlines::after` a radial vignette (`radial-gradient(ellipse at center, transparent 58%, rgba(0,0,0,0.5) 100%)`); softened in light mode. Rating: ★★
- **Hard pixel-shadow system** — `--px: 4px` and `box-shadow: var(--px) var(--px) 0 0 var(--shadow-ink)` on cards/buttons/wordmark; press states (`:active`) translate by `--px` and drop the shadow, hover raises it — a chunky "pixel button" press effect. Rating: ★★
- **Arcade blink** — `@keyframes arcade-blink` (hard `steps(1)` toggle) drives `.press-start` ("PRESS START") and `.spec-end::after` ("CONTINUE? 9…8…7…"). Rating: ★★
- **i18n-aware pixel font** — `--font-display` leads with "Press Start 2P" then falls through to per-script Noto Sans so non-Latin headings stay readable while Latin chrome stays pixelated. Rating: ★★
- **HUD strip** — `.hud-strip` fixed dark LED strip (`.hud-label`/`.hud-value`/`.hud-sep`/`.hud-lives`), decorative aria-hidden. Rating: ★
- **Chroma text-shadow** — `.hero h1 .mark`, `.plain-meaning h2`, `.spec-header h2` use `text-shadow: 0.06em 0.06em 0 var(--arcade-cyan)`. Rating: ★
- Flavor: "STAGE"/"LEVEL SELECT"/"GAME CLEAR" chips, `▸` markers, colored `.number` tiles (nth-child cyan/magenta/green). Rating: ★
- Removals: dark default kept, accent #FFD23F, "Press Start 2P" added to the font `<link>`.

### hr.html — people-ops employee handbook (coral/peach, Nunito Sans, light default)
- **Org-rings motif** — `.org-rings` concentric circles (`::before`/`::after` nested dashed/solid rings, `color-mix` accent) with `.org-core` centre dot and five positioned `.dot-1..5` "people" dots (peach/accent) — an SVG-free org-chart decoration that recolours with the accent. Rating: ★★
- **Warm radial backdrop** — `body` background adds a `radial-gradient(1100px 540px at 84% -6%, color-mix(accent 10%), transparent 62%)` corner glow. Rating: ★
- **Handbook card sections** — `.spec-section` becomes a rounded white card (margin + border + shadow) instead of base hairline separators; `.section-number` is a coral pill, `h4::before` a ringed dot. Rating: ★★
- **People-ops framing** — `.header-meta` (`.hm` accent), `::before` "People Team Notice" / "A friendly note" / "Welcome aboard" / "— with thanks · the responsible party —". Rating: ★
- Removals: light default, `DEFAULT_FONT = Nunito Sans`, accent #E26D5C, pill radius 999px.

---

## Cross-cutting patterns (2+ files in this group)

1. **Light-default flip** — 11 of 16 files flip the base dark default to light via the early head script (`requestedTheme === "dark" ? … : "light"` and the same in the render function). Dark-default files: aerospace, energy, fintech, fitness, games. (hr uses the simpler `? "dark" : "light"` ternary, dropping the `?light`/`?mode=light` alias in two spots.)
2. **`--accent-text` / `--accent-ink` / `--accent-bright` contrast variable** — a per-theme darkened/brightened copy of the accent for small-text legibility (architecture, consulting, fintech, fitness, chemicals).
3. **Fixed `--accent` + fixed secondary(s)** — nearly every variant re-randomises `--accent` via the base Highlight button but pins one or two fixed secondaries (amber, indigo, signal-green/alarm-red, orange, magenta, mint) so the theme always reads correctly.
4. **Masked `repeating-linear-gradient` grid/blueprint backdrop** — a decorative grid orb/sheet behind the hero via `mask-image: radial-gradient`/`linear-gradient` (fintech, energy, chemicals, architecture).
5. **Animated CSS marquee/ticker** — `.ticker` + `@keyframes ticker-scroll` `translateX(-50%)` with duplicated content (finance, fintech).
6. **Dotted-leader tables** — `border-bottom: 1px dotted` used for ledger/TOC leaders (accounting, finance).
7. **Hazard/industrial stripe** — diagonal `repeating-linear-gradient` yellow/black or orange/black (energy, construction).
8. **Flavor `::before`/`::after` content labels** — every file re-labels `.spec-meta`, `.toc h3`, `.section-number`, and `.spec-end` with theme-appropriate text ("TRIAL BALANCE", "PERMIT CARD", "TRANSACTION DATA", "SESSION DATA", "REAGENTS", "PROJECT FACT SHEET", "CLIENT BRIEF", "GAME CLEAR", "ALL SYSTEMS NOMINAL", etc.).
9. **Custom thin scrollbars** — `scrollbar-width: thin` + `::-webkit-scrollbar` styling (fintech, energy, banking, fitness, and others).
10. **Rotated/outlined decoration** — `rotate(45deg)` diamonds (chemicals) and `-webkit-text-stroke` stencil type (construction, games).
