# Variant Analysis Protocol

Goal: for each assigned non-website*.html file, find everything that was **added or changed
relative to `plus-ai/archive/versions/website-v13.html`** (the base), and report the unique features.

## What the base (archive/versions/website-v13.html) already has

- 40-language i18n via `site/translations/registry.js` + `spec.*.js` (41 script tags)
- Language resolution: URL `?lang=` → localStorage `plus-ai-language` → browser Accept-Language → `en`
- RTL support (ar/fa/ur/he/ps), legacy ISO alias mapping, CJK font lazy-load
- 39-font Google Fonts picker (localStorage `plus-ai-font`), live specimen dropdown
- Dark/light theme via `data-theme` (+ early head script for `?theme=`/`?light`)
- Accent color randomizer (`--accent` CSS var + readable-text contrast calc), `?accent=`/`?highlight=` etc.
- Reading progress bar, IntersectionObserver scroll-spy TOC (`aria-current`)
- URL personalization `?name=`/`?company=` replacing "Eric Mourant"/"JAPER Technology"
- Announcement live region (aria-live), untranslated/translation notices, noscript fallback
- Glassmorphism sticky header, grid hero + meaning card, spec sections rendered from JS
- Print stylesheet, prefers-reduced-motion, skip link, focus-visible, safe-area insets
- Defaults: accent #AC43D9, font Inter, theme dark, light/dark via `:root[data-theme]`

Anything a variant does BEYOND this is a "unique feature" candidate.

## Recipe

All commands run in `site`.

```bash
# 1. One-shot overview: what did this file change?
diff archive/versions/website-v13.html site/FILE.html | head -80
#    (shows head comment describing theme intent, default theme/font/accent changes, first CSS)

# 2. Extract base and variant CSS+JS into comparable forms:
scripts/extract.sh archive/versions/website-v13.html > /tmp/base.extract
scripts/extract.sh site/FILE.html > /tmp/f.extract

# 3. New CSS class selectors in variant (theme components):
comm -13 \
  <(awk '/=====CSS_END_JS_START=====/{exit}{print}' /tmp/base.extract | grep -oE '^\s*\.[a-zA-Z][a-zA-Z0-9-]*(,|:|\.| |\{|$)' | tr -d ' .{}' | sort -u) \
  <(awk '/=====CSS_END_JS_START=====/{exit}{print}' /tmp/f.extract  | grep -oE '^\s*\.[a-zA-Z][a-zA-Z0-9-]*(,|:|\.| |\{|$)' | tr -d ' .{}' | sort -u)

# 4. New JS identifiers/functions/APIs in variant:
diff /tmp/base.extract /tmp/f.extract | grep '^>' | grep -oE '(function [a-zA-Z]+|const [A-Z_]+|new [A-Za-z]+|[A-Za-z]*Observer|AudioContext|localStorage|sessionStorage|navigator\.[a-z]+|matchMedia|requestAnimationFrame|addEventListener\("[^"]+"|\.get\("[^"]+"\))' | sort | uniq -c | sort -rn

# 5. New storage keys / URL params / keyboard handlers:
grep -oE 'plus-ai-[a-z-]+' FILE.html | sort -u
grep -oE 'parameters\.get\("[^"]+"\)' FILE.html | sort -u
grep -n 'keydown\|keyup\|keypress' FILE.html | head

# 6. New markup components (things not in v13 body):
comm -13 \
  <(grep -oE 'class="[a-zA-Z0-9-]+"|id="[a-zA-Z0-9]+"|<[a-z]+-[a-z]+' archive/versions/website-v13.html | sort -u) \
  <(grep -oE 'class="[a-zA-Z0-9-]+"|id="[a-zA-Z0-9]+"|<[a-z]+-[a-z]+' FILE.html | sort -u)
```

Also READ the head comment block of the file (`head -60 FILE.html`) — every variant
documents its own intent there — and skim unique-looking CSS blocks in full so you can
describe HOW an effect is achieved (not just name the class). For files where extract.sh
fails (different skeleton, e.g. attract/crawl/credits/narration/rsvp/slideshow/speedread/
typewriter/toolkit/random), read the file directly and describe its features from the code.

## Report format

Write your full report to `archive/analysis/group-N.md`
(replace N with your group number), and return a compact summary in your final message.

Per file:

```markdown
### FILE.html — one-line identity
- **Feature name** — 1-2 sentences: what it does, where (CSS/HTML/JS), how it extends v13.
  Rating: ★★★ (distinctive mechanism worth porting to a super version)
        : ★★ (strong technique, candidate for porting)
        : ★ (theme cosmetics only — palette/fonts/flavor text)
```

Rules:
- Only report what is genuinely NEW vs v13. Do not relist base features.
- A ★★★ rating means: a real behavioral/mechanical innovation (new JS system, novel
  component, unusual technique) that would work in a combined "super" page.
- Be concrete: name classes/functions/ids, mention the CSS technique (blend modes,
  masks, filters, animations, grid tricks) and JS APIs used.
- Note REMOVALS of base behavior (e.g. default theme flipped to light, font changed,
  feature dropped) in one line per file.

At the end of your group report add: **Cross-cutting patterns** — anything that appears
in 2+ files in your group (e.g. "fixed decorative background layer div", "adds a theme
nav/links", "flips default theme").

## Rating calibration (shared across groups)

- ★★★ = mechanisms: audio synthesis, animations engine, canvas/SVG rendering, data-driven
  UI (e.g. tickers, charts), kiosk/slideshow state machines, RSVP/speed-reading, keyboard
  systems, import/export, URL-param systems beyond base, novel accessibility work.
- ★★ = notable techniques: distinctive layout systems, background/shimmer effects, scanline/
  noise/CRT layers, typographic systems, animated marquees/tickers, 3D transforms, print/
  alternate-output modes.
- ★ = palette, font swaps, flavor text, restyled existing blocks, one-off decorations.
