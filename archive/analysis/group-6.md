# Group 6 — Special-mode variants (application UIs built on the +AI spec)

Scope: `credits.html`, `narration.html`, `rsvp.html`, `slideshow.html`, `speedread.html`, `typewriter.html`.
Baseline: `archive/versions/archive/versions/website-v13.html`. All six files drop the v13 reading page
(header chrome, TOC, hero, meaning card, theme/font/accent pickers) and re-skin the
**specification data only**: each still loads `site/translations/registry.js` + all 40
`spec.<lang>.js` verbatim, and each re-implements its own minimal
`status === "reviewed"` → else-English fallback + "shown in English" notice.
The language `<select>` is rebuilt by hand in every file (from `entry.endonym`),
so the v13 language/font/accent persistence (`plus-ai-language`, `plus-ai-font`,
`plus-ai-accent`) is entirely absent except where noted.

---

### credits.html — the specification performed as a film end-credits roll
A fixed black stage with a single column that rolls `translateY(100vh) → translateY(-100%)`,
a vignette overlay, a top progress line, and a bottom glass toolbar (language, 0.5/1/1.5×,
pause, restart, "Jump to" section select).

- **`readProgress()` — live CSS transform parsing** — JS recovers how far the roll has
  travelled by reading `getComputedStyle(credits).transform` and regex-parsing the
  `matrix(…)`/`matrix3d(…)` (parts[5] / parts[13]) to get the current `translateY`.
  `(startY - y) / (startY - endY)` yields 0→1 progress. This is the mechanism that lets
  speed-change/restart resume mid-roll without re-running the animation.
  Rating: ★★★
- **Negative-delay resume + longhand restart** — `startRoll(progress)` computes
  `duration = computeBaseDuration()/speed` and sets `animationDelay = -progress*duration`
  so the animation is *pre-scrolled* to the current frame. It resets with
  `animationName="none"` → `void credits.offsetWidth` (forced reflow) → re-applies
  `animationName/Duration/TimingFunction(linear)/FillMode(forwards)/Delay` as individual
  longhands — deliberately NOT the shorthand, so the CSS `:hover` / `.stage.paused` rules
  can keep controlling `animation-play-state`. Rating: ★★★
- **Height-driven duration** — `computeBaseDuration()` = `(credits.offsetHeight/100)*0.12`,
  clamped to 45–240 s, so roll speed is content-proportional (longer languages roll
  proportionally). Rating: ★★
- **`bodyToFragment()` / `inlineFrom()` — HTML→credit-line compiler** — parses each
  `section.body` via `DOMParser` and converts structure to a flat run of `.line` divs:
  `<p>`→line (`.canonical` preserved), `<ul>/<ol>`→"· " bullets (`makeBullet`),
  `<h3/h4/h5>`→`.sub` uppercase sub-headers, `<blockquote>`→`.quote` italic,
  `<pre>`→`.mono-group` of verbatim lines (`makePre`, empty lines as `\u00A0`),
  `<code>`→`.mono`, `<strong>/<b>`→`.strong`. `inlineFrom` recurses child nodes and maps
  inline tags to `<span>`s so text survives RTL/escaping cleanly. Rating: ★★★
- **Pause/hover via CSS** — `.credits:hover { animation-play-state: paused }` and
  `.stage.paused .credits { animation-play-state: paused !important }` (class toggled by
  `togglePause()`), which the longhand animation style makes possible. Rating: ★★
- **`requestAnimationFrame` tick** — a permanent rAF loop drives the top progress bar
  (`progressFill.style.transform = scaleX(p)` from `readProgress()`), rather than a CSS
  animation. Rating: ★★
- **Keyboard** — `keydown` (guarding SELECT/INPUT/TEXTAREA/BUTTON/contentEditable): `Space`
  pause, `R` restart, `ArrowLeft`/`ArrowRight` change speed through `changeSpeed(±1)` over
  `SPEED_LEVELS = [0.5, 1, 1.5]`. Rating: ★★
- **Jump-to index** — `startRef` ∈ `"start" | "s-<i>" | "fin"`; `render()` starts the column
  at that card (`logoCard` + `titleCard` only when at 0, then `sectionCard`s, then `finCard`).
  Reduced-motion path instead `scrollIntoView({behavior:"smooth"})` to the target card id.
  Rating: ★★
- **`prefers-reduced-motion` fallback** — `.stage` becomes `overflow-y:auto`, `.credits` is
  `position:static` with `animation:none !important`, card min-heights shrink, `.progress`
  hidden, and the `.anim-only` controls (speed/pause/restart) are `display:none`; the whole
  document degrades to a scrollable reading page. Rating: ★★
- **Cosmetics** — radial `vignette`, `text-shadow` glow on the `+AI` mark, serif EB Garamond
  + `letter-spacing`, `role="toolbar"`/`role="group"` on controls, `dir="ltr"` pinned on
  section-number spans. Rating: ★
- **Removals vs v13** — no theme toggle/accent/font picker; no localStorage; only `?lang=`
  is honoured (`params.get("lang")`). Dark-only, `color-scheme: dark`.

---

### narration.html — read-aloud player with karaoke word/sentence highlighting
A sticky mono "transport bar" (play/pause, stop, prev/next sentence, prev/next section,
language, rate slider, voice select, live status) over a serif reading column where every
sentence is a `.seg` span and every word a `.w` span. Light room default (`data-theme="light"`,
accent `#C25B3F`); only `?theme=dark` flips it.

- **SpeechSynthesis karaoke engine** — `speakSegment(index, mySession)` builds a
  `SpeechSynthesisUtterance(seg.text)` and wires `onboundary` → `handleBoundary()`, which maps
  `event.charIndex` into the segment's pre-computed word `{el,start,end}` offsets (built by
  `buildSegment()` from `text.split(/(\s+)/)`) and toggles `.w.active`. Word offsets are
  measured against the exact utterance text, so `charIndex` maps 1:1. Sentence → sentence
  chaining happens in `utterance.onend` (and `onerror`, skipping only
  `canceled`/`interrupted`). Rating: ★★★
- **Session counter for callback invalidation** — every stop/restart/language change bumps
  `session`; every utterance closure checks `if (session !== mySession) return`, so stale
  `onend`/`onboundary` callbacks from a cancelled voice can never fire a stray advance.
  `endPlayback()` / `stopPlayback()` / `restartCurrentIfPlaying()` / `jumpToSegment()` all
  increment it and `speechSynthesis.cancel()` first. Rating: ★★★
- **Multilingual sentence segmentation** — `splitIntoSentences()` uses
  `SENTENCE_ENDERS = /[.!?。！？｡．…؟।॥]/` (ASCII + CJK fullwidth + Arabic `؟` + Devanagari
  danda `।॥`) and a `CLOSERS = /["'”’)\]]/` absorber so a trailing quote/bracket stays with
  its sentence; it special-cases decimal points ("v0.1", "1.0") so they don't split.
  Newlines are sentence boundaries and are preserved (for `<pre>`). Rating: ★★★
- **TreeWalker segmentation** — `splitTextNodesInto()` walks `document.createTreeWalker(container,
  NodeFilter.SHOW_TEXT)` and collects nodes before `processTextNode()` replaces each with a
  fragment of `.seg`/`.w` spans and inter-sentence whitespace text nodes, so inserted spans are
  never re-walked. Rating: ★★
- **Voice matching** — `voiceMatches()` compares base 2-letter tags (`v === code.slice(0,2)`),
  and treats `zh` voices as valid for both `zh` and `yue`; `populateVoiceSelect()` filters
  `getVoices()` to the current language, refreshed on `speechSynthesis.onvoiceschanged`.
  Rating: ★★
- **Playback state machine** — `mode ∈ "stopped"|"playing"|"paused"`; `togglePlayPause()` maps
  Play/Pause/Resume to `speechSynthesis.pause()/resume()/speak()`; `updateTransportState()`
  disables prev/next/section/play buttons at the segment boundaries (`sectionsMeta` +
  `sectionMetaFor()`). Rating: ★★
- **Karaoke CSS** — `.seg.active` gets `background: var(--accent-soft)` + an inset
  `box-shadow` left rule (mirrored via `[dir="rtl"] .seg.active`), `.seg .w.active` gets the
  stronger word background; both use `border-radius` + `box-decoration-break: clone` so
  multi-line words highlight per-line. Rating: ★★
- **Keyboard** — `Space` play/pause, `←`/`→` sentence, `PageUp`/`PageDown` section; skips when
  `ctrl/meta/alt` held or focus is in a form field. `stepSentence`/`stepSection` clamp and
  restart speech if playing. Rating: ★★
- **URL params** — `?lang=` and `?section=` (`jumpToSectionNumber`); no localStorage.
  `scrollIntoView({block:"center"})` honors reduced-motion with `behavior:"auto"`.
  Rating: ★★
- **A11y** — `aria-live="polite"` status line, `aria-live="off"` on the reader,
  `unsupported` panel when `speechSynthesis` is missing, buttons carry `title` hints.
  Rating: ★★
- **Removals vs v13** — no TOC/scroll-spy/reading-progress bar; no font/accent picker; the
  theme head script accepts only `?theme=dark`.

---

### rsvp.html — RSVP (Rapid Serial Visual Presentation) reader, 1–3 words at a time
A centered word display fed one chunk at a time, with WPM/speed controls, chunk-size toggle,
section navigation, and a "Signed +AI" end card. Dark default (`?theme=light` to flip),
accent `#2FD4FF`.

- **ORP (Optimal Recognition Point) highlighting** — `orpIndex(text)` computes
  `round(len*0.3)` (first char for 1–2 char words) and `withOrp()` wraps exactly that middle
  character in `<span class="orp">` (accent-red `--orp: #ff4d5e`). `renderChunk()` applies ORP
  to the **middle token** of each multi-word chunk — the classic RSVP fixation-point trick.
  Rating: ★★★
- **Unicode-property-escape CJK tokenizer** — `CJK_RE` is built with
  `\p{Script=Han|Hiragana|Katakana|Hangul}` inside try/catch, falling back to explicit
  `\u4e00-\u9fff` etc. ranges. `tokenizeCJK()` iterates `Array.from(text)` (code-point safe),
  groups CJK chars into **2-character tokens** (`flushCjk` at length ≥ 2) while keeping
  embedded Latin runs (`+AI`, `0.1`) as whole tokens and flushing on whitespace. Rating: ★★★
- **Chunking + resync state machine** — `buildStream()` flattens sections into a token array
  with `isHeader` banners ("SECTION n — title") and `isEnd` tokens; `buildChunks()` groups
  non-header tokens by `chunkSize` (1/2/3, headers always solo); `syncChunkFromPos()` maps a
  token position back to a chunk index when chunk size changes mid-stream. Rating: ★★★
- **WPM scheduler** — `schedule()` uses `setTimeout` with `delay = chunkSize * 60000/wpm`
  (headers get a fixed `HEADER_DELAY = 1100 ms`); `advance()` steps `chunkIndex`/`tokenPos`,
  re-renders, and re-arms the timer. `MIN_WPM=200`, `MAX_WPM=1000`, default 400. Rating: ★★
- **Verbatim-`<pre>` HTML stripper** — `htmlToText()` hides `<pre>` blocks behind
  `\uE000<n>\uE001` placeholders, collapses whitespace on the rest, then restores the pre
  text on its own lines — preserving e.g. the section-17 JSON. Plus `escapeHtml`/`decodeEntities`.
  Rating: ★★
- **Section navigation with position preservation** — `jumpToSection()`/`prevSection()`/
  `nextSection()` use `sectionStartIds`; `loadLanguage()` re-targets the *same* section number
  after a language switch (falling back to "1"). `PageUp`/`PageDown`, a section `<select>`, and
  prev/next buttons. Rating: ★★
- **Keyboard** — `Space` play/pause, `←`/`→` ∓10 WPM, `↑`/`↓` chunk size, `PageUp`/`PageDown`
  section (all `preventDefault` + form-field guard). Rating: ★★
- **A11y** — `wordDisplay` has `dir="auto"` and its `aria-live` is toggled
  `"polite"` ↔ `"off"` depending on `state.playing` (so a screen reader isn't spammed at
  400 WPM); chunk buttons use `aria-pressed`; a visually-hidden `#announcer` (`aria-live`) with
  `announce()` re-inserting text after a `requestAnimationFrame` to force re-announcement.
  Rating: ★★
- **URL params** — `?lang=`, `?section=` (validated 1–26); no localStorage.
- **Removals vs v13** — single-purpose app; drops scroll-spy/TOC/font picker entirely.

---

### slideshow.html — auto-playing kiosk deck (one slide per clause)
A 28-slide deck (title + 26 sections + closing) with a Ken Burns background, crossfade
transitions, top progress bar, bottom controls (prev/play/next, dot tablist, speed, language,
counter, fullscreen), and an idle fade.

- **Ken Burns per-slide background via CSS custom property** — each `.kb` layer is three
  `radial-gradient(… hsl(var(--kb-h) …))` blobs + `filter: saturate(1.15) blur(1px)`, animated
  by `@keyframes kenburns` (120 s infinite alternate `translate3d` + `scale`). `buildSlides()`
  sets `node.style.setProperty("--kb-h", 38 + (index*3) % 24)` so every slide gets a slightly
  rotated hue while sharing one stylesheet. A `.slide::before` scrim (radial + linear gradients)
  keeps text legible. Rating: ★★★
- **Idle/kiosk fade state machine** — `resetIdle()` adds `body.is-idle` after a 3 s `setTimeout`
  (reset by `mousemove/pointerdown/keydown/touchstart`, all `{passive:true}`); `body.is-idle`
  sets `cursor:none` and fades `.chrome--top/.chrome--bottom` to `opacity:0.12` (bottom re-shows
  on hover) — a kiosk "hands-off" mode. Rating: ★★★
- **Single-clock auto-advance** — one `setInterval(50 ms)` reads `performance.now()` against
  `slideStartTime` to drive BOTH the progress-bar width and the slide advance
  (`if (elapsed >= duration) next()`); `showSlide()` resets `slideStartTime` and the bar.
  Duration comes from the speed select (5/10/12/20/30 s, default 12). Rating: ★★★
- **Fullscreen kiosk** — `toggleFullscreen()` uses `requestFullscreen` +
  `webkitRequestFullscreen` fallbacks, `exitFullscreen()` on Escape, `F` key toggle, and
  `fullscreenchange`/`webkitfullscreenchange` listeners sync the button label
  (`updateFullscreenButton`). Rating: ★★
- **Dot tablist** — `renderDots()` builds `role="tab"` buttons inside a `role="tablist"`
  container with `aria-label="Go to slide n"`; `updateDots()` toggles `.is-active`.
  Rating: ★★
- **Crossfade transition** — `.slide` is `opacity:0; visibility:hidden` with
  `transition: opacity .7s, visibility 0s linear .7s`; `.is-active` flips to visible with a 0 s
  visibility delay and `z-index:1`, and `showSlide()` sets `aria-hidden` per slide. Inactive
  slides get `visibility:hidden` so they're unfocusable/unreadable. Rating: ★★
- **Keyboard** — `Space`/`ArrowRight` next, `ArrowLeft` prev, `KeyF` fullscreen, `Escape` exit
  (form-field guard). Rating: ★★
- **URL params** — `?lang=`, `?slide=` (1-based). Replay uses delegated click on
  `[data-action="replay"]`. No localStorage.
- **Reduced-motion** — kills `.kb` animation and all slide/progress transitions.
- **Removals vs v13** — dark-only kiosk; Oswald display type; no reading-page chrome.

---

### speedread.html — "60-Second Challenge" (timed RSVP sprint + scorecard)
A three-panel game: setup → timed reader → scorecard. Words flash one at a time, accelerating,
for 60 s, then it scores you. Dark, green accent `#34D399`, Oswald display.

- **rAF-driven timed RSVP with WPM ramp** — `start()` records `performance.now()` and arms a
  single `requestAnimationFrame(frame)` loop; each frame updates the countdown
  (`ceil((DURATION-elapsed)/1000)`), recomputes WPM, and **drains** all tokens whose
  `nextTokenTime <= now` in a `while` loop, advancing `nextTokenTime = now + 60000/currentWpm(now)`.
  `currentWpm(elapsed) = BASE_WPM * (1 + RAMP_RATE)^floor(elapsed/RAMP_STEP)` → +10 % every
  10 s from 400 WPM (held flat under reduced-motion). `finish()` runs at 60 s or token exhaustion.
  Rating: ★★★
- **Game scoring + per-language persistence** — `pct = wordsRead/totalTokens`; `rankFor(pct)`
  maps thresholds to a ladder (`>=100 "FULLY SIGNED"`, `>=75 "Sovereign Reader"`, `>=50
  "Notary"`, `>=25 "Signatory"`, else `"Reader"`). Personal best is stored per language under
  `localStorage` key `plus-ai-speedread-best-<lang>` (`readBest`/`writeBest` in try/catch), and
  a "New personal best" flag shows when `pct > previousBest && previousBest > 0`.
  Rating: ★★★
- **`htmlToPlainText()` DOM walker** — recursive node walk that keeps `<pre>` verbatim
  (`textContent` + surrounding newlines), prefixes `<li>` with "· ", emits newlines after
  block tags (`P/LI/H4/BLOCKQUOTE/OL/UL`), and treats `<BR>` as a newline — a cleaner
  DOM-native alternative to the regex strippers in rsvp/typewriter. Rating: ★★
- **CJK 2-char tokenization** — `tokenize(text, isCJK)` splits on whitespace normally, but for
  CJK languages compacts whitespace and slices into 2-character tokens. Rating: ★★
- **Stream cache** — `streamCache = {lang, tokens, labels}` avoids rebuilding the token stream
  on "Run again" for the same language; `labels[]` carries the per-token section banner shown
  in the reader meta. Rating: ★★
- **Three-panel state machine** — `state ∈ "idle"|"running"|"scored"`; `show(which)` toggles the
  `hidden` attribute on `#setup`/`#reader`/`#scorecard`. `wordEl.dir="auto"` + `wordEl.lang`
  per language. Rating: ★★
- **Keyboard** — `Space`/`Enter`/`Spacebar` starts the run from idle/scored (guarding
  BUTTON/SELECT/INPUT/TEXTAREA/A focus so native controls still work). Rating: ★
- **URL param** — `?lang=` only. `aria-live="polite"` on the scorecard, `aria-live="off"` on
  the reader; `font-variant-numeric: tabular-nums` on timer/pct.
- **Removals vs v13** — full game wrapper; no reading page, no theme/font/accent controls.

---

### typewriter.html — the spec "typed" char-by-char on a vintage typewriter, with synthesized keys
A skeuomorphic desk/platen/paper stage; the text types in character-by-character with
procedural Web Audio key clicks, a bell at line ends, a blinking caret, speed control, sound
toggle, language and "Start at" section selects.

- **Procedural WebAudio typewriter sound engine (no assets)** — `ensureAudio()` lazily creates
  and resumes an `AudioContext` (`window.AudioContext || webkitAudioContext`); `noiseBufferFor()`
  generates a one-shot 50 ms white-noise `AudioBuffer` (`ctx.sampleRate`). Three synth voices:
  `playClick()` (bandpass-filtered noise burst, `frequency = 1700 + random*700`, `Q=1.1`, fast
  `exponentialRampToValueAtTime` decay), `playThunk()` (triangle oscillator `120 + random*50` Hz
  for space/tab/return), and `playDing()` (2 kHz sine bell on newline). `playCharSound(ch)`
  dispatches newline→thunk+ding, space/tab→thunk, else→click. Everything is try/catch-wrapped
  and rate-limited (`lastKeySound` 50 ms, `lastDing` 120 ms) so a blocked/absent context never
  breaks the page. Audio is a user-gesture: `togglePlay`/`restart` call `ensureAudio()` on press.
  Rating: ★★★
- **Code-point-safe incremental typing engine** — `buildDocument()` flattens the spec to plain
  text and records each section's **code-point offset** (`sectionOffsets`, counted via
  `Array.from(piece).length`); `docChars = Array.from(docText)` so `tick()` indexes by
  code point (RTL/CJK/emoji-safe). Rendering slices `docChars.slice(startIndex, startIndex+pos)`,
  so "Start at" (`offsetOf`/`applySectionStart`) jumps without rebuilding. Rating: ★★★
- **`htmlToPlainText()` with BLOCK_TAGS set** — recursive walk with a `Set` of block tag names;
  `<pre>` verbatim, `<li>`→"· ", `<h4>`→uppercase newline, `<br>`→newline, blocks append `\n`,
  then whitespace cleanup. Rating: ★★
- **Caret auto-scroll follow** — `keepCaretVisible()` (throttled to 60 ms) reads
  `els.caret.getBoundingClientRect()` and `window.scrollBy()`s when the caret nears the
  viewport edge — keeping the typing point on screen as the paper grows. Rating: ★★
- **Blinking caret CSS** — `.caret` uses `@keyframes caret-blink { 50% { opacity: 0 } }` with
  `animation: caret-blink 1.06s steps(1, end) infinite` (disabled under reduced-motion).
  Rating: ★
- **Typing scheduler** — `scheduleNext()` uses `setTimeout` with `delay = max(1000/cps, 1000/120)`;
  `cps` ranges 5–120 (default 40) via −/+ buttons (Δ5) and Arrow keys. Rating: ★★
- **Reduced-motion static fallback** — when `prefers-reduced-motion`, sound is forced off, the
  full text is shown instantly (`showFullText()`), the play button reads "Static", and the caret
  stops blinking — the whole app degrades to a plain reading of the spec. Rating: ★★
- **Skeuomorphic CSS** — paper is layered `repeating-linear-gradient` ruled lines (both axes)
  over a cream `linear-gradient`; `.platen` and `.paper-foot` use inset `box-shadow` for the
  roller; the `.strip` toolbar is a metal gradient with key-shadowed buttons; desk background is
  radial + horizontal scanlines. Ribbon-red accent `#A63A2F`. Rating: ★★
- **Keyboard** — `Space` play/pause, `R` restart, `←`/`→` speed (form-field guard).
- **URL params** — `?lang=`/`?language=` and `?section=` (validated via `parseSectionParam`);
  no localStorage. Sound toggle uses `aria-pressed`.
- **Removals vs v13** — full skeuomorphic app; no theme switch, no font picker.

---

## Cross-cutting patterns

- **All six** replace the reading UI with an application but keep the 40-language registry
  load and re-implement the *same* "reviewed → else English + untranslated note" logic locally
  (no shared helper file).
- **All six** hand-build their own language `<select>` from `entry.endonym`; none reuse v13's
  header controls, and none persist `plus-ai-language`/`plus-ai-font`/`plus-ai-accent`.
  Only `speedread.html` touches localStorage (`plus-ai-speedread-best-<lang>`).
- **`?lang=` URL param** is honoured by all six; **`?section=`** by narration/rsvp/typewriter;
  **`?slide=`** by slideshow. `?theme=` only where a theme exists (narration `light` default,
  rsvp `dark` default, both light/dark in narration; credits/slideshow/speedread/typewriter are
  single-theme dark).
- **Space = play/pause** keyboard chord appears in credits, narration, rsvp, typewriter
  (toggle) and speedread (start), with slideshow using Space to advance; all six guard against
  firing when focus is in a form control (`SELECT`/`INPUT`/`TEXTAREA`/`BUTTON`).
- **`prefers-reduced-motion` handling in every file**, each with a genuinely different fallback:
  static scroll page (credits), `behavior:"auto"` scroll + still-available TTS (narration),
  transition-duration kill (rsvp), disabled Ken Burns (slideshow), flat WPM (speedread), and a
  full static-text "Static" mode (typewriter).
- **HTML→plain-text spec flatteners** are re-implemented four times with different strategies:
  DOMParser+recursive `inlineFrom` (credits), placeholder-restored regex (rsvp), DOM walker
  (speedread), DOM walker + `BLOCK_TAGS` set (typewriter); slideshow/narration instead render
  the HTML directly.
- **CJK-specific tokenization** in rsvp (Unicode property escapes + 2-char grouping) and
  speedread (naive 2-char slicing); narration handles CJK at the sentence level instead.
- **Dark-default "stage" aesthetic** dominates (5 of 6), with glow `text-shadow`, thin
  progress bars, and mono-font chrome; `role="toolbar"` strips appear in credits and typewriter,
  and `role="tablist"` dots in slideshow.
