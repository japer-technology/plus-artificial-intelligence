# Group 3 — Variant Analysis Report

Base: `archive/versions/archive/versions/website-v13.html`. All files below were diffed/extracted per the protocol
(`extract.sh`, `comm`, storage-key / URL-param / markup greps) and, for the four
standalone apps, read in full.

---

## swiss.html — Swiss International Typographic Style poster

Same i18n/data skeleton, restyled as a strict modular-grid poster (red/black/white,
IBM Plex Sans, huge tabular numerals, no rounding). Only one genuinely new markup
node (`<div class="grid-rules">` with 12 `<i>` columns); the JS is identical to base
except the head theme-resolver and `DEFAULT_ACCENT`/`DEFAULT_FONT`.

- **`grid-rules` modular grid overlay** — a `position: fixed; inset: 0; z-index: 0`
  div laid out with `grid-template-columns: repeat(12, minmax(0, 1fr))`, each `<i>`
  carrying a 1px `border-inline-start` (`--gridline`), `pointer-events: none`, so 12
  hairline columns run the full viewport behind the content. Classic Swiss grid column
  scaffolding as a purely decorative layer.
  Rating: ★★ (fixed decorative grid layer; strong technique)
- **Global `border-radius: 0` reset** — `*, *::before, *::after { border-radius: 0 }`
  enforces "the Swiss grid permits no rounding anywhere" with one rule.
  Rating: ★ (technique → cosmetic enforcement)
- **Poster typography system** — hero h1 at `font-size: clamp(4.5rem, 17vw, 13rem)`
  with `line-height: 0.82`; the meaning-list `.number` (2.9rem) and `.section-number`
  (2.6–4rem) both use `--font-mono` + `font-variant-numeric: tabular-nums`;
  `.section-number::after { content: "—" }` appends an em-dash; `.hero-subtitle` is a
  huge `text-transform: uppercase` block. Numbers-as-graphics throughout.
  Rating: ★★ (typographic system)
- **Inverted chrome** — `.meaning-card h2` is a solid black bar (ink bg, paper text);
  `pre` gets a 0.35rem accent top-border; `.spec-end` is a full-bleed accent block;
  `code` uses a 1px `--line` outline instead of a filled background.
  Rating: ★

Removals/defaults: default theme **flipped to light** (head script becomes
`requestedTheme === "dark" ? "dark" : "light"`); accent `#E30613` (Swiss red); font
IBM Plex Sans; dark mode inverts paper↔ink only.

---

## country-ja.html — Japanese print design (washi / sumi / shu-iro)

Same skeleton, restyled as calm Japanese print: washi paper, sumi ink, a vermilion
hanko seal for the mark, a fixed indigo (`--ai-iro`) secondary, a faint ensō, and a
seigaiha wave band.

- **`.enso` — an incomplete circle via conic-gradient mask** — a 1px indigo circle
  (`border-radius: 50%`) whose brushstroke gap is cut with
  `mask: conic-gradient(from -38deg, #000 0 302deg, transparent 302deg 360deg)`.
  A CSS mask, not an SVG arc.
  Rating: ★★ (mask technique)
- **`.hero h1 .mark` — hanko seal stamp** — the +AI mark rendered as a square seal:
  `display: inline-grid; place-items: center`, `background: var(--accent)`,
  `transform: rotate(-2deg)`, and an inner ring drawn with
  `box-shadow: inset 0 0 0 0.09rem color-mix(in srgb, var(--paper) 30%, transparent)`.
  `color-mix()` is used to tint the inset ring.
  Rating: ★★ (novel component + modern color-mix)
- **`.seigaiha` — layered radial-gradient wave band** — the classic Japanese wave
  pattern made from three stacked `radial-gradient(circle at 50% 100%, transparent …,
  var(--ai-iro) …)` layers with `background-size: 3rem 2.75rem; repeat-x`, at
  `opacity: 0.12`.
  Rating: ★★ (pattern technique)
- **`.spec-end::before` second seal + seigaiha top band** — the closing block repeats
  the seal as a `::before` (`content: "+AI"`, same inset-ring treatment) and paints a
  faint seigaiha band along its top edge using `color-mix(in srgb, var(--ai-iro) 14%,
  transparent)`.
  Rating: ★
- **Fixed secondary accent `--ai-iro`** — indigo stays constant while the vermilion
  `--accent` is re-randomised by the Highlight control; a deliberate two-accent
  counterpoint.
  Rating: ★

Removals/defaults: default theme **flipped to light**; accent `#D04A3C` (shu-iro
vermilion); font Noto Sans.

---

## art-cubism.html — early-20th-century Cubist painting

Same skeleton; flat geometric facets, overlapping planes, fractured forms, muted earth
palette with one bright accent (burnt sienna). No new markup — everything is done by
re-styling existing blocks plus pseudo-elements.

- **`--shard` charcoal outline filter** — `--shard: drop-shadow(1.5px 0 0 var(--outline))
  drop-shadow(-1.5px 0 0 var(--outline)) drop-shadow(0 1.5px 0 var(--outline))
  drop-shadow(0 -1.5px 0 var(--outline))`. Four directional `drop-shadow()`s paint a
  1px "charcoal" keyline that follows an element's `clip-path` silhouette (which
  `box-shadow` cannot do). Applied to every facet.
  Rating: ★★ (distinctive filter technique)
- **Fractured +AI wordmark** — `.hero h1 .mark::before/::after` duplicate the text
  (`content: "+AI"`): `::before` is an ochre shard clipped to the top half
  (`clip-path: polygon(0 0, 100% 0, 100% 46%, 0 55%)`) translated up-left; `::after` is
  a charcoal outline shard (`color: transparent; -webkit-text-stroke: 2px var(--ink)`)
  clipped to the bottom half and translated down-right, behind the sienna face. Three
  offset layers assemble a "fragmented" mark.
  Rating: ★★ (layered text/clip-path typographic component; borderline ★★★)
- **Beveled "shard" clip-path system** — a repeated
  `clip-path: polygon(0.7rem 0, 100% 0, calc(100% - 0.7rem) 100%, 0 100%)`
  (parallelogram with notched corners) applied to `.spec-section > h3`, `blockquote`,
  `.canonical`, `pre`, and `.spec-end`, always paired with `filter: var(--shard)`.
  Rating: ★★ (layout system)
- **Per-section accent cycle** — `.spec-section:nth-child(4n+1/2/3/4)` each set
  `--section-accent` to sienna/ochre/clay/slate; the h3 number block, h4, and list
  markers inherit `var(--section-accent, var(--accent))`. A rotating accent that is
  pure CSS (no JS).
  Rating: ★★ (data-ish CSS mechanism)
- **Geometric planes** — `.hero::before` (hexagonal polygon) and `.hero::after`
  (diamond polygon) are offset, rotated, low-opacity `clip-path` planes behind the
  hero; `.spec-end::after` is a slate shadow-shard offset `translate(0.7rem, 0.7rem)`
  behind the bone panel.
  Rating: ★
- **`.canonical:hover { transform: rotate(-0.5deg) }`** micro-tilt on the canonical
  phrase.
  Rating: ★

Removals/defaults: default theme **flipped to light** ("the atelier"); accent
`#C2552F` (burnt sienna); font Poppins; `--radius: 0`.

---

## art-impressionist.html — Monet-style garden in pure CSS

Same skeleton; pale plein-air sky, broken-colour dabs, feathered edges, no hard lines.

- **`.atmosphere` + `.dabs` painted background layers** — two `position: fixed`,
  `pointer-events: none`, negative-z layers behind the whole page. `.atmosphere`
  holds five large soft `radial-gradient` colour fields (sky/water/garden);
  `.dabs` holds ~30 tiny pastel `radial-gradient` "brush dabs" with a single
  `filter: blur(1.5px)` (deliberately the only blur in the doc, for cheapness). Both
  drift almost imperceptibly via `@keyframes drift-atmosphere` (160s) and
  `drift-dabs` (90s) alternate, `translate3d` + `scale`, and both stop under
  `prefers-reduced-motion`.
  Rating: ★★ (broken-colour brushwork + slow drift; strong technique)
- **Feathered edges via `mask-image`** — `.meaning-card::before` and `.hero::before`
  use `mask-image: radial-gradient(...)` so panels fade out at the edges instead of
  ending in hard lines; combined with `isolation: isolate` on the parents.
  Rating: ★★ (mask technique)
- **Broken-colour gradient hairlines** — `.spec-section::before`, `.spec-section > h3::after`,
  and `.plain-meaning::before / .specification::before` are 1–2px rules built from
  multi-stop `linear-gradient(90deg, transparent, color-mix(in srgb, var(--waterlily)
  55%, transparent) 22%, …)` so every divider is a fading pastel "painted" line.
  Rating: ★★ (technique, used pervasively)
- **Pastel number dabs** — `.meaning-list .number` and `.section-number` are round
  pastel chips; the three meaning numbers get fixed per-child `:nth-child(1/2/3)`
  colours (waterlily/lavender/gold) plus a `box-shadow` glow.
  Rating: ★
- **`.spec-end` sunset gradient** — `linear-gradient(115deg, gold → blush → lavender)`
  closing band.
  Rating: ★

Removals/defaults: default theme **flipped to light** ("plein air"); accent `#5F8F73`
(waterlily green, also the JS `DEFAULT_ACCENT`); font Lora.

---

## occupation-ceo.html (anchor) + cfo / cio / coo / cto — "+AI Executive Series"

Five files sharing one "boardroom at night" design system; the CEO file is the anchor
and the other four copy its structure, changing only role code, role title and accent.
Reported once, with per-file deltas below.

Shared across all five (★/★★):
- **Navy "boardroom at night" palette** — base `#10151F`, panels `#1A2029`, hairlines
  `#2A3342`, text `#E8EBF2`, muted `#8A93A6`; light mode re-maps to "daylight office".
  Dark stays the default (the head theme-resolver is unchanged from v13).
  Rating: ★
- **Series gold `#C9A227` reserved for series mark / colophon / rules** (var name
  `--series-gold` in CEO, `--gold` in the siblings) vs a per-office `--accent`.
  Rating: ★
- **Mono "ORDER / AGENDA / SIGNED" document chrome** — `.toc h3::before { content:
  "AGENDA" }`, `.spec-section > h3::before { content: "ORDER" }`,
  `.spec-end strong::before { content: "SIGNED" }`, all in `--mono`, letterspaced
  gold. In the siblings the same idea is expressed as explicit `<p class="*-kicker">`
  markup. Paired with `.section-number::before` gold diamond and
  `.spec-section h4 { font-variant: small-caps }`.
  Rating: ★★ (typographic chrome system)
- **`.hero::before` crosshatch grid** — two `repeating-linear-gradient`s (90deg and
  0deg, 1px lines 3.1rem apart, tinted `color-mix(in srgb, var(--accent) 7%,
  transparent)`) clipped to a circle with `mask-image: radial-gradient(circle, black 0
  30%, transparent 72%)`. The "ledger/graph paper" backdrop behind the hero, tinted in
  the office accent.
  Rating: ★★ (technique)
- **Series tag + role badge in header** — a mono letterspaced series label plus a
  small accent-filled role code (`role-code` / `role-badge`) in the sticky header.
  Rating: ★

CEO-only (anchor page):
- **`.embossed-seal` corporate seal** — a `position: absolute` circle behind the +AI
  mark drawn entirely with `background:` composed of a
  `repeating-conic-gradient(from 0deg, var(--series-gold) 0 0.9deg, transparent …)`
  (short radial ticks) over a `repeating-radial-gradient` (concentric hairline rings),
  then masked to a ring band with
  `mask-image: radial-gradient(circle, transparent 0 68%, #000 68.5% 82%, transparent 82.5%)`,
  plus `::before`/`::after` solid and dashed concentric circles.
  Rating: ★★ (repeating-gradient + mask seal)
- **`.spec-end` signed document via flex `order`** — the closing block is a flex
  column whose pseudo-elements are interleaved with real content using `order`:
  `::before { content:"+AI" }` (1), `strong` → "SIGNED" (2), the signature line
  `p:nth-of-type(2)::before` gold hairline (3), caption (4), and
  `::after { content:"EXECUTIVE SERIES · +AI · 0.1" }` colophon (5).
  Rating: ★★ (flex-order composition)

Per-file deltas (all ★ cosmetics — same system, renamed chrome + own accent):
- **occupation-cfo.html** — accent `#2F6B4F` ledger green; uses `--gold`; adds a
  `header-inner` flex wrapper, `hero-role` line, and `footer-series` (gold footer);
  hides `.series-tag-text` under 58rem.
- **occupation-cio.html** — accent `#4F5BD5` indigo; `gold-rule` hairline, `role-badge`,
  and markup `card-kicker` / `toc-kicker` labels.
- **occupation-coo.html** — accent `#5B7A9D` steel blue; a reusable `mono-kicker`
  (used on both the meaning card and toc), `series-tag-label`, `role-badge`.
- **occupation-cto.html** — accent `#2F7FD0` azure; `hero-rule`, `summary-kicker` /
  `toc-kicker`, `role-badge`, and `footer-mark`.

Removals/defaults (all five): font Manrope; accents as above; dark remains default.

---

## random.html — rotating theme showcase (standalone app)

A kiosk page that loads theme pages into an iframe and rotates them every 60s. Shares
only the translation data (indirectly, via the loaded theme pages).

- **Iframe rotating showcase** — `THEMES` array (23 theme files), `cycleNow()` picks a
  random non-repeating theme, language, light/dark mode, and accent, builds a
  `?lang=&theme=&highlight=` URL, and sets `frame.src`.
  Rating: ★★★ (kiosk state machine + URL-param system)
- **`applyZoom(factor)` iframe magnification** — sets the iframe to
  `width/height = 100/factor %` and `transform: scale(factor)` (origin 0 0), so the
  embedded page is rendered at a random 0.75–1.25× zoom. Magnification via scale +
  proportional resize, not `zoom`.
  Rating: ★★★ (novel mechanism)
- **Cross-cycle scroll/clause persistence** — `captureScroll()` reads the child's
  `[aria-current]` href (the scroll-spy section) or `contentWindow.scrollY`, and
  `restoreScroll()` re-applies it after the next load via `scrollIntoView` /
  `win.scrollTo`. Every access is wrapped in try/catch for the `file://` cross-origin
  case. State survives a full page swap.
  Rating: ★★★ (persistence mechanism)
- **Randomized URL-param generation** — `randomHighlight()` (HSL→hex via `hslToHex`),
  alternating English↔non-English per cycle, random light/dark.
  Rating: ★★
- **Focus/keyboard handling** — Space advances; a `blur` listener returns focus from
  the iframe to the parent unless the user is inside a child `<select>/<input>/<textarea>`.
  Rating: ★★
- **Copy-URL with `execCommand` fallback + rAF countdown bar**.
  Rating: ★

---

## attract.html — kiosk attract mode (standalone app)

Like random.html but deterministic: a guided, section-by-section "reading streak" tour
rather than random jumps. Shares the same iframe + status-strip + copy/focus plumbing.

- **Deterministic section walk** — `currentSection() = (stepCount % 26) + 1` walks all
  26 spec clauses in order, loading `#section-N` deep links each step.
  Rating: ★★★ (kiosk state machine)
- **"Reading streak" state machine** — `beginNewStreak()` fires every
  `STREAK_LENGTH = 4` steps: it changes theme (≠ current), toggles light/dark
  randomly, picks a new highlight, and alternates English ↔ random non-English by
  streak parity (`streakNumber() % 2`). Within a streak the theme/mode/language hold
  steady while the section advances.
  Rating: ★★★ (novel streak rotation)
- **Playback controls** — Space skips a step; `P` toggles pause/resume (preserving
  `remainingOnPause`); `←`/`→` cycle the interval through `[10s, 20s, 30s, 45s]`.
  Rating: ★★
- **`prefers-reduced-motion` aware default** — default interval 45s when reduced
  motion, else 20s.
  Rating: ★★
- (No iframe zoom — attract.html deliberately drops random.html's magnification.)
- Shared: `hslToHex`, iframe focus recovery, copy-URL fallback, rAF bar, status strip.
  Rating: ★

---

## toolkit.html — developer & signer tools (standalone app)

A full toolbox: theme gallery, side-by-side comparison, URL builder, native barcode,
QR, snippets, print label. Uses its own `plusai-toolkit-theme` storage key (different
namespace from the theme pages' `plus-ai-*`).

- **Native Code 128 barcode (zero-dependency)** — a complete Code Set B encoder:
  `C128` (107 pattern strings), `code128Values(text)` (START B = 104, mod-103
  checksum, STOP = 106 + termination bar), and `barcodeSVG()` which emits inline SVG
  bars plus the "+AI" label and human-readable text. Works fully offline.
  Rating: ★★★ (real barcode-encoding mechanism)
- **Resizable side-by-side comparison** — `initDivider()` implements a drag handle
  with `setPointerCapture`, `pointermove` recomputing `paneA.style.flex = "0 0 Wpx"`
  (clamped to 18%–82% of the container), two iframes loading `./file.html` relatively
  so it works from `file://`.
  Rating: ★★★ (pointer-capture split-pane)
- **Print label** — `@page { size: landscape }`, a hidden `#printArea`, and the
  `body * { visibility: hidden }` / `#printArea, #printArea * { visibility: visible }`
  technique so only the label prints; `printLabel()` clones the live barcode SVG and
  QR canvas into the print area.
  Rating: ★★ (alternate-output mode)
- **QR via optional CDN with graceful fallback** — `qrcodejs` loads with
  `onerror="window.__qrFailed=true"`; `qrAvailable()` gates rendering and
  `showQrFallback()` explains QR needs the network while barcode stays offline.
  Rating: ★★
- **URL builder + live debounced update** — `buildURL()` uses `encodeURIComponent`
  for name/company/lang/theme/font/highlight; inputs call `schedule()` (120ms
  debounce) → `updateAll()`.
  Rating: ★★
- **Snippet generator with safe rendering** — plain text / HTML / Markdown / badge
  (inline `<style>` `BADGE_CSS`) snippets; previews are built with DOM APIs
  (`createElement`/`textContent`), never `innerHTML` from user input (XSS-safe).
  Rating: ★★
- **Download SVG** via `Blob` + `URL.createObjectURL`; copy-with-"Copied ✓" feedback;
  theme registry `THEMES` (name/description/tags/status) driving the gallery.
  Rating: ★

---

## crawl.html — cinematic opening crawl (standalone app)

The spec as a Star Wars-style opening crawl. Shares the translation registry + all 40
`spec.<lang>.js` scripts; renders them as a scrolling crawl.

- **CSS crawl with scale-based recede** — `.crawl-wrap` sets `perspective: 1600px`
  and `perspective-origin: 50% 15%`; `.crawl` animates
  `translateY(10vh) scale(1) → translateY(-100%) scale(0.7)` (`@keyframes crawl`).
  A comment documents that a hard 3D `rotateX` tilt crossed the camera plane and
  destroyed readability, so distance is faked with `scale` instead.
  Rating: ★★★ (cinematic animation + a real technique lesson)
- **Duration computed from content height** — `computeDuration()` =
  `(crawl.offsetHeight + innerHeight) / 60px-per-sec / speed`, clamped 25–240s, pushed
  through the `--duration` custom property so the crawl pace is constant regardless of
  text length or language.
  Rating: ★★★ (content-aware pacing)
- **HTML→plain-text crawl converter** — `bodyToBlocks()` parses each section's HTML
  body into a DOM and walks it (`inlineText`, `walk`) emitting typed blocks
  (title / note / head / sub / li / pre / p / final / endline), preserving `<pre>`
  verbatim and rendering `<li>` as "· text". The whole crawl is data-driven off the
  translated spec.
  Rating: ★★★ (data-driven rendering)
- **Playback state machine** — play/pause toggles `animation-play-state`; 0.5×/1×/1.5×
  speed buttons (recompute duration); Restart re-applies the animation with a
  `style.animation = "none"; void el.offsetWidth` forced-reflow trick; a Section
  `<select>` jumps to `#section-N` via `fromSection`; Language `<select>` re-renders.
  Rating: ★★★ (playback/transport system)
- **Reduced-motion → static fallback** — under `prefers-reduced-motion: reduce` the
  crawl plane is hidden and replaced by a `hidden`-toggled `.static` scrollable list
  (`overflow-y: auto`, `tabindex="0"`), and the transport controls are hidden. An
  accessible alternate rendering rather than just freezing the animation.
  Rating: ★★★ (accessibility mechanism)
- **Hover-to-pause** — `mouseenter`/`mouseleave` on the stage pause/resume the crawl so
  a reader can stop and read.
  Rating: ★★
- **RTL + script support** — `dir` set per resolved language on the document and the
  crawl/static containers; two-layer twinkle starfield (`.stars-1/2` + `twinkle`);
  keyboard (Space / R / ←/→); debounced resize recompute; `document.fonts.ready`
  re-run so font load doesn't skew the height-based duration.
  Rating: ★★

---

## Cross-cutting patterns (2+ files in this group)

- **Default theme flipped to light** — swiss, country-ja, art-cubism, art-impressionist
  all invert the head theme-resolver so light is the default (the occupation-* series
  keeps dark).
- **`color-mix(in srgb, …)` as a pervasive tinting tool** — country-ja (seal ring,
  seigaiha tint), art-cubism (`--shard` outline is drop-shadow but the palette uses
  color-mix throughout), art-impressionist (glows, hairlines, gradients), and the
  occupation series (crosshatch grid tint, seal rings).
- **Fixed decorative background layer via `pointer-events: none` + negative `z-index`**
  — swiss `grid-rules`, art-impressionist `atmosphere`/`dabs`, art-cubism `hero::before/
  ::after` planes, occupation `.hero::before` crosshatch, crawl `stars-1/2`.
- **`mask-image` to soften or shape a layer** — country-ja `enso` (conic mask),
  art-impressionist `meaning-card::before`/`hero::before` (radial feather), occupation
  crosshatch (radial ring mask), occupation-ceo `embossed-seal` (ring mask).
- **`repeating-*-gradient` patterns** — occupation-ceo `embossed-seal`
  (repeating-conic + repeating-radial), occupation siblings + CEO `.hero::before`
  crosshatch (repeating-linear).
- **Mono "document chrome" labels via `content:` pseudo-elements** — occupation series
  ORDER/AGENDA/SIGNED; also swiss `.section-number::after` em-dash and
  art-cubism `::before/::after` text duplication.
- **Kiosk/standalone apps share an iframe + status-strip + copy/focus/HSL plumbing**
  — random.html and attract.html share `hslToHex`, `randomHighlight`, iframe
  focus-recovery (`blur` → `childInteracting()`), `execCommand` clipboard fallback,
  and an rAF countdown bar; crawl.html and toolkit.html also re-use the translation
  registry data (as `<script src>` tags or via the loaded pages).
- **`prefers-reduced-motion` honored as a real behavior change** — crawl.html swaps to
  a static list, attract.html lengthens its interval, random.html and the theme pages
  drop transitions/animations.

---

## Top ★★★ mechanisms found (most portable to a "super" page)

1. **crawl.html** — HTML→plain-text block converter + data-driven crawl with
   content-height-computed `--duration` and a scale-based (not rotateX) 3D recede;
   plus the reduced-motion static-list fallback and transport state machine.
2. **toolkit.html** — native, zero-dependency **Code 128 barcode encoder** (Code Set B,
   mod-103 checksum, inline SVG) and the pointer-capture **resizable split-pane**
   comparison.
3. **random.html** — **iframe zoom magnification** (`scale(factor)` + proportional
   resize) and cross-cycle **scroll/clause persistence** that reads the child's
   `[aria-current]` section.
4. **attract.html** — the **"reading streak" kiosk state machine**: deterministic
   section walk with theme/mode/language held constant for a streak, then rotated.
5. **crawl.html / random.html / attract.html** — cross-origin-safe iframe
   instrumentation (`childInteracting()`, focus recovery, `contentDocument` guards)
   and URL-param composition beyond the base page.
