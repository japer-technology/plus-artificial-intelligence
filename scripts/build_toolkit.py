#!/usr/bin/env python3
# Build the new toolkit.html: theme-openai.html document basis + toolkit functionality.
import re

THEME = open('site/theme-openai.html', encoding='utf-8').read()
OLD = open('site/toolkit.html', encoding='utf-8').read()

# 1. QR library block from the current toolkit (bundled, offline).
qr_match = re.search(r'<script>\n/\* Bundled qrcodejs[\s\S]*?</script>', OLD)
assert qr_match, "bundled QR lib not found in current toolkit.html"
QR_LIB = qr_match.group(0)

# 2. Toolkit CSS (adapted to theme-openai design tokens).
TOOLKIT_CSS = r"""
    /* ============================================================
       Toolkit (toolkit.html) — developer tools layered on the
       theme-openai document. Tokens come from the document's palette.
       ============================================================ */
    .toolkit-section,
    .theme-directory {
      width: min(calc(100% - 2rem), var(--content-width));
      margin-inline: auto;
      padding: clamp(2.5rem, 6vw, 5rem) 0;
    }

    .toolkit-section {
      border-top: 1px solid var(--line);
    }

    .toolkit-section > h2,
    .theme-directory > h2 {
      margin: 0 0 0.4rem;
      font-size: clamp(1.9rem, 4.5vw, 3rem);
      letter-spacing: -0.045em;
      line-height: 1.05;
      text-wrap: balance;
    }

    .toolkit-section .spec-kicker,
    .theme-directory .spec-kicker {
      margin: 0 0 0.5rem;
    }

    .tk-hint {
      color: var(--muted);
      font-size: 0.88rem;
      margin: 0 0 1.2rem;
      max-width: 52rem;
    }

    .tk-note {
      font-size: 0.72rem;
      color: var(--muted);
      margin-top: 0.25rem;
    }

    .tk-card {
      background: var(--surface-2);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 1.3rem 1.4rem;
      margin: 1rem 0;
    }

    .tk-card h3 {
      margin: 0 0 0.25rem;
      font-size: 1rem;
      letter-spacing: -0.01em;
    }

    .tk-card .tk-hint {
      margin-bottom: 1rem;
    }

    .tk-btn {
      font: inherit;
      font-size: 0.78rem;
      font-weight: 700;
      cursor: pointer;
      color: var(--ink);
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 0.45rem 0.8rem;
      transition: color 150ms ease, border-color 150ms ease, background-color 150ms ease;
    }

    .tk-btn:hover {
      border-color: var(--accent);
      color: var(--accent);
    }

    .tk-btn.primary {
      background: var(--ink);
      color: var(--bg);
      border-color: var(--ink);
    }

    .tk-btn.primary:hover {
      background: var(--accent);
      color: var(--on-accent);
      border-color: var(--accent);
    }

    .tk-btn.small {
      padding: 0.25rem 0.55rem;
      font-size: 0.72rem;
    }

    .tk-field {
      margin: 0 0 0.8rem;
    }

    .tk-field label {
      display: block;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--muted);
      margin-bottom: 0.25rem;
    }

    .tk-field input[type=text],
    .tk-field input[type=url],
    .tk-field select {
      width: 100%;
      font: inherit;
      font-size: 0.9rem;
      color: var(--ink);
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 0.5rem 0.6rem;
    }

    .tk-field input:focus,
    .tk-field select:focus {
      outline: 0.15rem solid var(--accent);
      outline-offset: 0.1rem;
    }

    .tk-grid2 {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 0.8rem;
    }

    @media (max-width: 34rem) {
      .tk-grid2 {
        grid-template-columns: 1fr;
      }
    }

    /* ---------- comparison ---------- */
    .compare-bar {
      display: flex;
      flex-wrap: wrap;
      gap: 0.8rem;
      align-items: flex-end;
      margin-bottom: 1rem;
    }

    .compare-bar .tk-field {
      flex: 1;
      min-width: 130px;
      margin: 0;
    }

    .compare {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;
    }

    .pane {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 0.8rem;
      min-width: 0;
    }

    .pane .phead {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-bottom: 0.5rem;
      flex-wrap: wrap;
    }

    .pane .phead select {
      flex: 1;
      min-width: 140px;
      font: inherit;
      font-size: 0.85rem;
      background: var(--surface-2);
      color: var(--ink);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 0.4rem 0.5rem;
    }

    .pane iframe {
      width: 100%;
      height: 420px;
      border: 1px solid var(--line);
      border-radius: var(--radius);
      background: #ffffff;
    }

    .ptitle {
      font-size: 0.7rem;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      color: var(--muted);
    }

    .divider {
      display: none;
    }

    @media (min-width: 920px) {
      .compare {
        flex-direction: row;
        align-items: stretch;
      }

      .pane {
        flex: 1 1 0;
      }

      .pane iframe {
        height: 560px;
      }

      .divider {
        display: block;
        width: 10px;
        flex: 0 0 10px;
        cursor: col-resize;
        touch-action: none;
        background: var(--line);
        border-radius: var(--radius);
        margin: 0.4rem 0;
      }
    }

    /* ---------- builder workspace ---------- */
    .tk-workspace {
      display: grid;
      grid-template-columns: 1fr;
      gap: 1rem;
      margin-top: 1rem;
    }

    @media (min-width: 1000px) {
      .tk-workspace {
        grid-template-columns: minmax(360px, 440px) 1fr;
        align-items: start;
      }
    }

    /* ---------- url output ---------- */
    .urlbar {
      display: flex;
      gap: 0.5rem;
      align-items: stretch;
      margin-bottom: 1rem;
    }

    .urlbar input {
      flex: 1;
      font-family: var(--mono);
      font-size: 0.78rem;
      color: var(--ink);
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 0.5rem 0.6rem;
    }

    /* ---------- qr ---------- */
    .qrwrap {
      display: flex;
      gap: 0.9rem;
      align-items: flex-start;
      flex-wrap: wrap;
      margin-top: 0.5rem;
    }

    #qrBox {
      background: #ffffff;
      padding: 0.5rem;
      border-radius: var(--radius);
      border: 1px solid var(--line);
      min-height: 120px;
      min-width: 120px;
    }

    #qrBox canvas,
    #qrBox img {
      display: block;
    }

    #qrFallback {
      display: none;
      border: 1px dashed var(--line);
      border-radius: var(--radius);
      padding: 1rem;
      color: var(--muted);
      font-size: 0.8rem;
      max-width: 300px;
    }

    /* ---------- snippets ---------- */
    .snippet {
      margin-bottom: 0.9rem;
    }

    .snippet .head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.3rem;
    }

    .snippet .head b {
      font-size: 0.8rem;
    }

    .snippet pre {
      margin: 0;
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 0.6rem 0.8rem;
      font-family: var(--mono);
      font-size: 0.74rem;
      white-space: pre-wrap;
      word-break: break-all;
      color: var(--ink);
    }

    .preview {
      margin-top: 0.3rem;
      background: var(--surface);
      border: 1px dashed var(--line);
      border-radius: var(--radius);
      padding: 0.6rem 0.8rem;
      font-size: 0.85rem;
      min-height: 22px;
    }

    /* ---------- theme directory (gallery) ---------- */
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
      gap: 0.9rem;
    }

    .tcard {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      padding: 0.9rem;
      display: flex;
      flex-direction: column;
      gap: 0.4rem;
      position: relative;
    }

    .tcard h4 {
      margin: 0;
      font-size: 0.95rem;
      font-weight: 700;
    }

    .tcard .fname {
      font-family: var(--mono);
      font-size: 0.7rem;
      color: var(--muted);
    }

    .tcard p {
      font-size: 0.8rem;
      color: var(--muted);
      margin: 0;
      flex: 1;
    }

    .tcard .stars {
      font-size: 0.72rem;
      letter-spacing: 0.1em;
      color: var(--accent);
      font-weight: 800;
    }

    .tcard .stars .dim {
      color: var(--line);
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 0.3rem;
    }

    .tag {
      font-size: 0.65rem;
      font-weight: 700;
      padding: 2px 7px;
      border-radius: 999px;
      background: var(--soft-accent);
      color: var(--accent);
    }

    .tcard .row {
      display: flex;
      gap: 0.4rem;
    }

    /* ---------- per-component Copy / URL buttons ---------- */
    .component-bar {
      display: flex;
      justify-content: flex-end;
      gap: 0.4rem;
      margin: 0.75rem 0 0.25rem;
    }

    .component-btn {
      font: inherit;
      font-size: 0.72rem;
      font-weight: 700;
      cursor: pointer;
      color: var(--muted);
      background: transparent;
      border: 1px solid var(--line);
      border-radius: var(--radius-pill);
      padding: 0.3rem 0.75rem;
      transition: color 150ms ease, border-color 150ms ease, background-color 150ms ease;
    }

    .component-btn:hover {
      color: var(--accent);
      border-color: var(--accent);
      background: var(--soft-accent);
    }

    .spec-section > .component-bar {
      margin: 0.5rem 0 1.2rem;
    }

    .spec-end .component-bar {
      justify-content: center;
      margin-top: 1rem;
    }

    .hero-copy .component-bar {
      justify-content: center;
      margin-top: 1.25rem;
    }

    /* ---------- modal ---------- */
    .modal {
      position: fixed;
      inset: 0;
      background: rgba(0, 0, 0, 0.7);
      display: none;
      align-items: center;
      justify-content: center;
      z-index: 50;
      padding: 20px;
    }

    .modal.open {
      display: flex;
    }

    .modal .box {
      background: var(--surface);
      border: 1px solid var(--line);
      border-radius: var(--radius);
      width: min(1000px, 94vw);
      height: 84vh;
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    .modal .mhead {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.8rem 1rem;
      border-bottom: 1px solid var(--line);
    }

    .modal .mhead h3 {
      margin: 0;
      font-size: 0.95rem;
    }

    .modal iframe {
      flex: 1;
      width: 100%;
      border: 0;
      background: #ffffff;
    }

    /* ---------- test area ---------- */
    .tk-callout {
      border: 1px solid var(--line);
      border-inline-start: 3px solid var(--accent);
      border-radius: var(--radius);
      background: var(--surface-2);
      padding: 0.7rem 1rem;
      font-size: 0.85rem;
      margin: 0.8rem 0;
    }

    .checklist {
      list-style: none;
      padding: 0;
      margin: 0;
      font-size: 0.85rem;
    }

    .checklist li {
      padding: 0.3rem 0 0.3rem 1.5rem;
      position: relative;
    }

    .checklist li::before {
      content: "\2713";
      position: absolute;
      inset-inline-start: 0;
      color: var(--accent);
      font-weight: 800;
    }

    /* ---------- print: only the document itself ---------- */
    @media print {
      .toolkit-section,
      .theme-directory,
      .component-bar {
        display: none !important;
      }
    }
"""

# 3. Toolkit section HTML — under the titles, above the document sections.
TOOLKIT_SECTION = """
    <section class="toolkit-section" id="toolkit" aria-labelledby="toolkitTitle">
      <p class="spec-kicker">Developer toolkit</p>
      <h2 id="toolkitTitle">Toolkit</h2>
      <p class="tk-hint">Build themed links, compare themes side-by-side, and grab any part of this document — every section below carries its own <strong>Copy</strong> (plain text) and <strong>URL</strong> (deep link) buttons.</p>

      <div class="tk-card">
        <h3>Compare two themes</h3>
        <p class="tk-hint">Pick a theme per pane, set the shared parameters, then sync both panes. <strong>Random</strong> picks a fresh pair; <strong>Open ↗</strong> loads a pane in its own window. Drag the divider to resize on desktop; panes stack on mobile. Previews load relative (<code>./file.html</code>) so they work from <code>file://</code>.</p>
        <div class="compare-bar" id="compareBar">
          <div class="tk-field"><label>Name</label><input type="text" id="c-name" value="Eric Mourant"></div>
          <div class="tk-field"><label>Company</label><input type="text" id="c-company" placeholder="(optional)"></div>
          <div class="tk-field"><label>Language</label><input type="text" id="c-lang" list="langs" placeholder="en"></div>
          <div class="tk-field"><label>Mode</label>
            <select id="c-mode">
              <option value="">auto (omit)</option>
              <option value="light">light</option>
              <option value="dark">dark</option>
            </select>
          </div>
          <div class="tk-field"><label>Font</label><input type="text" id="c-font" value="Inter"></div>
          <div class="tk-field"><label>Highlight</label><input type="text" id="c-highlight" value="#10A37F"></div>
          <div class="tk-field" style="flex:0 0 auto"><label>&nbsp;</label>
            <button class="tk-btn primary" id="syncBtn" type="button">Sync params to both</button>
          </div>
          <div class="tk-field" style="flex:0 0 auto"><label>&nbsp;</label>
            <button class="tk-btn" id="randomBtn" type="button">Random</button>
          </div>
        </div>
        <div class="compare" id="compare">
          <div class="pane" id="paneA">
            <div class="phead">
              <span class="ptitle">Pane A</span>
              <select id="selA" aria-label="Pane A theme"></select>
              <button class="tk-btn small" id="refreshA" type="button">Refresh</button>
              <button class="tk-btn small" id="openA" type="button">Open ↗</button>
            </div>
            <iframe id="frameA" title="Theme preview A" src="about:blank"></iframe>
          </div>
          <div class="divider" id="divider" title="Drag to resize"></div>
          <div class="pane" id="paneB">
            <div class="phead">
              <span class="ptitle">Pane B</span>
              <select id="selB" aria-label="Pane B theme"></select>
              <button class="tk-btn small" id="refreshB" type="button">Refresh</button>
              <button class="tk-btn small" id="openB" type="button">Open ↗</button>
            </div>
            <iframe id="frameB" title="Theme preview B" src="about:blank"></iframe>
          </div>
        </div>
      </div>

      <div class="tk-workspace">
        <div class="tk-card">
          <h3>Build a themed URL</h3>
          <p class="tk-hint">Change any field and the URL, QR and snippets update live.</p>
          <form id="builder" autocomplete="off" onsubmit="return false">
            <div class="tk-field">
              <label>Theme</label>
              <select id="f-theme"></select>
            </div>
            <div class="tk-field">
              <label>Base URL (empty = relative link)</label>
              <input type="text" id="f-base" value="https://plus-artificial-intelligence.org/">
              <div class="tk-note">Leave empty to produce <code>./theme.html?…</code> links that work offline.</div>
            </div>
            <div class="tk-grid2">
              <div class="tk-field"><label>Name</label><input type="text" id="f-name" placeholder="Eric Mourant"></div>
              <div class="tk-field"><label>Company</label><input type="text" id="f-company" placeholder="(optional)"></div>
            </div>
            <div class="tk-grid2">
              <div class="tk-field"><label>Language</label><input type="text" id="f-lang" list="langs" placeholder="en"></div>
              <div class="tk-field"><label>Mode</label>
                <select id="f-mode">
                  <option value="">auto (omit)</option>
                  <option value="light">light</option>
                  <option value="dark">dark</option>
                </select>
              </div>
            </div>
            <div class="tk-grid2">
              <div class="tk-field"><label>Font</label><input type="text" id="f-font" value="Inter" list="fonts"></div>
              <div class="tk-field"><label>Highlight</label><input type="text" id="f-highlight" value="#10A37F" list="colors"></div>
            </div>
          </form>

          <h3 style="margin-top:1.25rem">Snippets</h3>
          <p class="tk-hint">Copyable embed fragments for signing a work with the +AI mark.</p>
          <div class="snippet">
            <div class="head"><b>Plain text</b><button class="tk-btn small" id="copyPlain" type="button">Copy</button></div>
            <pre id="snipPlain"></pre>
            <div class="preview" id="prevPlain"></div>
          </div>
          <div class="snippet">
            <div class="head"><b>HTML</b><button class="tk-btn small" id="copyHtml" type="button">Copy</button></div>
            <pre id="snipHtml"></pre>
            <div class="preview" id="prevHtml"></div>
          </div>
          <div class="snippet">
            <div class="head"><b>Markdown</b><button class="tk-btn small" id="copyMd" type="button">Copy</button></div>
            <pre id="snipMd"></pre>
            <div class="preview" id="prevMd"></div>
          </div>
          <div class="snippet">
            <div class="head"><b>Badge embed</b><button class="tk-btn small" id="copyBadge" type="button">Copy</button></div>
            <pre id="snipBadge"></pre>
            <div class="preview" id="prevBadge"></div>
          </div>
        </div>

        <div class="tk-card">
          <h3>Generated URL</h3>
          <p class="tk-hint">Fully URL-encoded with <code>encodeURIComponent</code>.</p>
          <div class="urlbar">
            <input type="text" id="outUrl" readonly spellcheck="false">
            <button class="tk-btn" id="copyUrl" type="button">Copy</button>
            <button class="tk-btn primary" id="testUrl" type="button">Test ↗</button>
          </div>

          <h3 style="margin-top:1.25rem">QR code</h3>
          <div class="qrwrap">
            <div id="qrBox" aria-label="QR code"></div>
            <div id="qrFallback">QR code failed to render.</div>
          </div>

          <h3 style="margin-top:1.25rem">Test area</h3>
          <div class="tk-callout">
            <strong>Scan test:</strong> point your phone camera at the QR. It should decode to the generated URL and open the themed page with your parameters applied.
          </div>
          <ul class="checklist">
            <li>Open link → correct theme page loads.</li>
            <li>Name substitution → your <code>name</code>/<code>company</code> value appears.</li>
            <li>Language → page renders in the requested <code>lang</code>.</li>
            <li>Mode/font/highlight → dark-or-light, font, and accent applied.</li>
            <li>QR scan → resolves to the same URL.</li>
          </ul>
          <div style="margin-top:0.9rem">
            <button class="tk-btn" id="copyAll" type="button">Copy all (report)</button>
          </div>
        </div>
      </div>
    </section>
"""

# 4. Theme directory section — under the document sections.
DIRECTORY_SECTION = """
    <section class="theme-directory" id="themes" aria-labelledby="themesTitle">
      <p class="spec-kicker">Theme directory</p>
      <h2 id="themesTitle">All themes</h2>
      <p class="tk-hint">Every theme page renders the same specification and accepts the same URL parameters (<code>name</code>, <code>company</code>, <code>lang</code>, <code>theme</code>/<code>mode</code>, <code>font</code>, <code>highlight</code>/<code>color</code>). The ★ rating comes from the feature analysis in <code>analysis/</code>: ★★★ distinctive mechanisms, ★★ strong techniques, ★ palette and flavor variants. <strong>Preview</strong> opens a theme in a pane; <strong>Open ↗</strong> visits it directly.</p>
      <div class="gallery" id="gallery"></div>
    </section>
"""

# 5. Toolkit JS.
TOOLKIT_JS = r"""<script>
'use strict';

/* ============================================================
   THEME DIRECTORY — one entry per theme page in this directory.
   stars reflect the feature analysis in analysis/group-*.md:
   3 = distinctive mechanisms worth porting to a super version,
   2 = strong techniques, 1 = palette/flavor variants.
   ============================================================ */
var THEMES = [
  {file:"accounting.html",          name:"Accounting",          description:"Ruled paper ledger with trial-balance tables and a sign-off block.", tags:["corporate","finance"],   stars:2},
  {file:"theme-adobe.html",         name:"Adobe",               description:"Creative-tool workspace with a checkerboard artboard and panel bars.", tags:["brand","creative"],    stars:3},
  {file:"advertising.html",         name:"Advertising",         description:"Agency campaign board with moodboard swatches and sticky-note labels.", tags:["creative","corporate"], stars:2},
  {file:"aerospace.html",           name:"Aerospace",           description:"Split-flap departures board with a live clock.",             tags:["technical","industrial"], stars:3},
  {file:"theme-anthropic.html",     name:"Anthropic",           description:"Bookish editorial with serif type and a paper vignette.",    tags:["brand","editorial"],   stars:2},
  {file:"architecture.html",        name:"Architecture",        description:"Competition board with drawing-sheet frame and title block.", tags:["technical","design"],  stars:2},
  {file:"banking.html",             name:"Banking",             description:"Retail banking app with an account-card hero.",             tags:["corporate","finance"], stars:2},
  {file:"biotech.html",             name:"Biotech",             description:"Lab protocol with gel lanes and a DNA sequence strip.",      tags:["science","corporate"], stars:2},
  {file:"bladerunner2049.html",     name:"Blade Runner 2049",   description:"Neon-noir megacity archive with drifting fog.",             tags:["sci-fi","cyberpunk"],  stars:2},
  {file:"blueprint.html",           name:"Blueprint",           description:"Technical drafting sheet with hatched display type and registration marks.", tags:["technical","design"], stars:3},
  {file:"chemicals.html",           name:"Chemicals",           description:"Lab MSDS with an NFPA 704 safety diamond.",                 tags:["industrial","science"], stars:3},
  {file:"construction.html",        name:"Construction",        description:"Building site with scaffolding lattice and hazard stripes.", tags:["industrial","corporate"], stars:2},
  {file:"consulting.html",          name:"Consulting",          description:"Strategy deck with a 2×2 framework matrix.",                tags:["corporate","minimal"], stars:3},
  {file:"art-cubism.html",          name:"Cubism",              description:"Cubist facets, fractured typography and charcoal keylines.", tags:["art"],               stars:2},
  {file:"cyberpunk.html",           name:"Cyberpunk",           description:"Neon street terminal with a perspective grid horizon and glitch type.", tags:["sci-fi","cyberpunk"], stars:3},
  {file:"dec-manual.html",          name:"DEC Manual",          description:"1970s DEC field-service handbook with dotted-decimal chapter numbering.", tags:["technical","retro"], stars:3},
  {file:"dental.html",              name:"Dental",              description:"Dental practice with a smile-arc motif and appointment slip.", tags:["corporate","minimal"], stars:2},
  {file:"energy.html",              name:"Energy",              description:"Plant control room with status lamps and hazard stripes.",  tags:["industrial"],         stars:2},
  {file:"occupation-ceo.html",      name:"Executive: CEO",      description:"Executive Series boardroom letter, gold embossed seal.",    tags:["corporate","executive"], stars:2},
  {file:"occupation-cfo.html",      name:"Executive: CFO",      description:"Executive Series boardroom letter, ledger green.",          tags:["corporate","executive"], stars:1},
  {file:"occupation-cio.html",      name:"Executive: CIO",      description:"Executive Series boardroom letter, indigo.",                tags:["corporate","executive"], stars:1},
  {file:"occupation-coo.html",      name:"Executive: COO",      description:"Executive Series boardroom letter, steel blue.",           tags:["corporate","executive"], stars:1},
  {file:"occupation-cto.html",      name:"Executive: CTO",      description:"Executive Series boardroom letter, azure.",                tags:["corporate","executive"], stars:1},
  {file:"finance.html",             name:"Finance",             description:"Private-bank statement with a ticker and gold rules.",      tags:["corporate","finance"], stars:2},
  {file:"fintech.html",             name:"Fintech",             description:"Neobank terminal with a masked ticker and status chips.",  tags:["corporate","finance"], stars:2},
  {file:"fitness.html",             name:"Fitness",             description:"Gym programme with data-driven effort load bars.",         tags:["sports","minimal"],   stars:3},
  {file:"games.html",               name:"Games",               description:"Arcade cabinet with CRT scanlines and pixel shadows.",      tags:["retro","gaming"],     stars:2},
  {file:"theme-github.html",        name:"GitHub",              description:"Repository README with a file-tree contents sidebar.",      tags:["brand","technical"],  stars:3},
  {file:"theme-google.html",        name:"Google",              description:"Material shell with a four-colour section cycle.",          tags:["brand","minimal"],    stars:3},
  {file:"hal9000.html",             name:"HAL 9000",            description:"HAL-9000 console with a fisheye lens and status line.",    tags:["sci-fi","retro"],     stars:2},
  {file:"hr.html",                  name:"HR",                  description:"Employee handbook with org-ring motifs and warm cards.",    tags:["corporate","minimal"], stars:2},
  {file:"ibm-manual.html",          name:"IBM Manual",          description:"IBM manual with two-column pages and CSS-counter page numbers.", tags:["technical","retro"], stars:3},
  {file:"art-impressionist.html",   name:"Impressionist",       description:"Monet garden with painted brushwork and feathered edges.",  tags:["art"],                stars:2},
  {file:"index-v1.html",            name:"Index I",             description:"Site index in the orbital HUD theme.",                      tags:["sci-fi","minimal"],   stars:2},
  {file:"index-v2.html",            name:"Index II",            description:"Site index in the orbital HUD theme.",                      tags:["sci-fi","minimal"],   stars:2},
  {file:"insurance.html",           name:"Insurance",           description:"Insurance policy with a CSS umbrella and coverage notes.",  tags:["corporate","finance"], stars:2},
  {file:"country-ja.html",          name:"Japan",               description:"Japanese print with ensō, hanko seal and seigaiha waves.",  tags:["country","minimal"],  stars:2},
  {file:"lcars-mono.html",          name:"LCARS Mono",          description:"Monochrome amber Star Trek console with sounds.",          tags:["sci-fi","retro"],     stars:2},
  {file:"legal.html",               name:"Legal",               description:"Correspondence from counsel with engraved letterhead.",    tags:["corporate","legal"],  stars:2},
  {file:"luxury.html",              name:"Luxury",              description:"Haute-luxury atelier: type, space and one champagne.",      tags:["minimal","luxury"],   stars:2},
  {file:"manpage.html",             name:"Man Page",            description:"troff man(1) page with NAME/SYNOPSIS framing.",             tags:["technical","retro"],  stars:2},
  {file:"manufacturing.html",       name:"Manufacturing",       description:"Assembly floor with ISO tags and status LEDs.",             tags:["industrial"],         stars:2},
  {file:"maritime.html",            name:"Maritime",            description:"Coastal chart with a pure-CSS compass rose and graticule.", tags:["technical","industrial"], stars:3},
  {file:"medical.html",             name:"Medical",             description:"Clinical document with a reticle and chart readouts.",      tags:["corporate","medical"], stars:2},
  {file:"mentalhealth.html",        name:"Mental Health",       description:"Quiet reading room with a calm palette.",                   tags:["minimal","medical"],  stars:2},
  {file:"theme-microsoft.html",     name:"Microsoft",           description:"Fluent productivity window with stacked panes.",            tags:["brand","minimal"],    stars:2},
  {file:"military-spec.html",       name:"MIL-SPEC",            description:"Military standard document with stencil chrome and i18n-aware fallbacks.", tags:["technical","retro"], stars:3},
  {file:"mining.html",              name:"Mining",              description:"Mining claim with strata bands and claim data.",            tags:["industrial"],         stars:2},
  {file:"museum.html",              name:"Museum",              description:"Gallery exhibition with spotlit artwork and wall text.",    tags:["art","classic"],      stars:2},
  {file:"music.html",               name:"Music",               description:"Album sleeve and ticket stub with perforation notches.",    tags:["creative","retro"],   stars:2},
  {file:"neogenesis.html",          name:"Neo Genesis",         description:"Mecha manual with clip-path armour and telemetry.",         tags:["sci-fi"],             stars:2},
  {file:"newsroom.html",            name:"Newsroom",            description:"Front-page news with a live locale-aware dateline.",        tags:["editorial","corporate"], stars:3},
  {file:"notary.html",              name:"Notary",              description:"Notarised certificate with a pure-CSS wax seal and filing stamps.", tags:["corporate","legal"], stars:3},
  {file:"theme-openai.html",        name:"OpenAI",              description:"Minimal lab whitepaper — the basis of this toolkit page.",  tags:["brand","minimal"],    stars:2},
  {file:"pharma.html",              name:"Pharma",              description:"Regulatory monograph with DRUG-FACTS labels.",              tags:["corporate","medical"], stars:2},
  {file:"quantumlab.html",          name:"Quantum Lab",         description:"Research lab notes with annotation callouts.",               tags:["sci-fi","technical"], stars:2},
  {file:"realestate.html",          name:"Real Estate",         description:"Listing brochure with a CSS-grid floor plan.",               tags:["corporate","design"], stars:3},
  {file:"retro.html",               name:"Retro",               description:"50s diner with checkerboard chrome and neon flicker.",      tags:["retro","classic"],    stars:2},
  {file:"sci-fi-1.html",            name:"Sci-Fi I",            description:"Orbital HUD with a holo sweep and corner brackets.",        tags:["sci-fi"],             stars:2},
  {file:"sci-fi-2.html",            name:"Sci-Fi II",           description:"Atomic retro-futurism with orbiting electron rings.",       tags:["sci-fi","retro"],     stars:3},
  {file:"spaceinvaders.html",       name:"Space Invaders",      description:"1978 arcade cabinet with SVG pixel-art sprites.",           tags:["retro","gaming"],     stars:3},
  {file:"spaceodyssey.html",        name:"Space Odyssey (2001)",description:"Monolith minimalism with a breathing red light.",          tags:["sci-fi","retro"],     stars:2},
  {file:"startrek.html",            name:"Star Trek",           description:"Full-colour LCARS console with live stardate and sounds.",  tags:["sci-fi","retro"],     stars:3},
  {file:"starwars.html",            name:"Star Wars",           description:"Worn galactic datapad with a twinkling starfield.",         tags:["sci-fi","retro"],     stars:2},
  {file:"swiss.html",               name:"Swiss",               description:"Swiss International Typographic Style poster.",             tags:["country","minimal"],  stars:2},
  {file:"the-borg.html",            name:"The Borg",            description:"Borg console with a hex hive grid and re-voiced interface copy.", tags:["sci-fi","cyberpunk"], stars:3},
  {file:"university.html",          name:"University",          description:"Faculty handbook with a crest seal.",                       tags:["corporate","classic"], stars:2},
  {file:"utilities.html",           name:"Utilities",           description:"Grid-operator dashboard with a CSS gauge and telemetry.",   tags:["technical","industrial"], stars:3},
  {file:"veterinary.html",          name:"Veterinary",          description:"Warm vet clinic with a CSS paw print.",                     tags:["corporate","medical"], stars:2},
  {file:"theme-youtube.html",       name:"YouTube",             description:"Watch page with a 16:9 player and shimmer title card.",     tags:["brand","media"],      stars:3}
];

function $(id){ return document.getElementById(id); }
function escapeHtml(s){
  return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;").replace(/'/g,"&#39;");
}

/* ============================================================
   URL builder
   ============================================================ */
function buildURL(o){
  var base = (o.base || "").trim();
  var href;
  if (base){
    base = base.replace(/\/+$/,"");
    href = base + "/" + o.file;
  } else {
    href = "./" + o.file;
  }
  var p = [];
  if (o.name)      p.push("name="      + encodeURIComponent(o.name));
  if (o.company)   p.push("company="   + encodeURIComponent(o.company));
  if (o.lang)      p.push("lang="      + encodeURIComponent(o.lang));
  if (o.mode && o.mode !== "auto") p.push("theme=" + encodeURIComponent(o.mode));
  if (o.font)      p.push("font="      + encodeURIComponent(o.font));
  if (o.highlight) p.push("highlight=" + encodeURIComponent(o.highlight));
  if (p.length) href += "?" + p.join("&");
  return href;
}

function readForm(){
  return {
    file: $("f-theme").value,
    base: $("f-base").value,
    name: $("f-name").value.trim(),
    company: $("f-company").value.trim(),
    lang: $("f-lang").value.trim(),
    mode: $("f-mode").value,
    font: $("f-font").value.trim(),
    highlight: $("f-highlight").value.trim()
  };
}

/* ============================================================
   QR (bundled library above — works fully offline)
   ============================================================ */
function qrAvailable(){
  return typeof window.QRCode === "function";
}

function renderQR(text){
  var box = $("qrBox");
  box.innerHTML = "";
  if (qrAvailable()){
    try {
      new QRCode(box, { text: text, width: 220, height: 220, correctLevel: QRCode.CorrectLevel.M });
      $("qrFallback").style.display = "none";
    } catch (e){
      showQrFallback();
    }
  } else {
    showQrFallback();
  }
}

function showQrFallback(){
  $("qrBox").innerHTML = "";
  $("qrFallback").style.display = "block";
}

/* ============================================================
   Snippets
   ============================================================ */
var BADGE_CSS = ".plus-ai{display:inline-block;font:700 13px/1 ui-monospace,SFMono-Regular,Menlo,Consolas,monospace;color:#0b1220;background:#10A37F;padding:5px 9px;border-radius:6px;text-decoration:none;letter-spacing:.03em}.plus-ai:hover{filter:brightness(1.08)}";

function displayName(o){
  return o.name || o.company || "Eric Mourant";
}

function buildSnippets(o, url){
  var dname = displayName(o);
  var label = dname + " +AI";
  var plain = label;
  var html = '<a href="' + escapeHtml(url) + '">' + escapeHtml(label) + '</a>';
  var md = "[" + label + "](" + url + ")";
  var badge = '<a class="plus-ai" href="' + escapeHtml(url) + '" title="' + escapeHtml(label) + '">+AI</a>\n'
            + "<style>\n" + BADGE_CSS + "\n</style>";
  return {plain:plain, html:html, md:md, badge:badge, label:label, url:url};
}

function renderSnippets(o, url){
  var s = buildSnippets(o, url);
  $("snipPlain").textContent = s.plain;
  $("snipHtml").textContent = s.html;
  $("snipMd").textContent = s.md;
  $("snipBadge").textContent = s.badge;

  $("prevPlain").textContent = s.plain;

  var h = $("prevHtml");
  h.textContent = "";
  var a = document.createElement("a");
  a.setAttribute("href", url);
  a.textContent = s.label;
  h.appendChild(a);

  var m = $("prevMd");
  m.textContent = "";
  var a2 = document.createElement("a");
  a2.setAttribute("href", url);
  a2.textContent = s.label;
  m.appendChild(a2);

  var b = $("prevBadge");
  b.textContent = "";
  var styleEl = document.getElementById("badgeStyle");
  if (!styleEl){
    styleEl = document.createElement("style");
    styleEl.id = "badgeStyle";
    styleEl.textContent = BADGE_CSS;
    document.head.appendChild(styleEl);
  }
  var sp = document.createElement("a");
  sp.className = "plus-ai";
  sp.setAttribute("href", url);
  sp.textContent = "+AI";
  b.appendChild(sp);
}

/* ============================================================
   Copy helpers (clipboard + fallback)
   ============================================================ */
function fallbackCopy(text){
  var ta = document.createElement("textarea");
  ta.value = text;
  ta.setAttribute("readonly", "");
  ta.style.position = "fixed";
  ta.style.top = "-1000px";
  ta.style.opacity = "0";
  document.body.appendChild(ta);
  ta.focus();
  ta.select();
  try { document.execCommand("copy"); } catch (e) {}
  document.body.removeChild(ta);
}

function copyText(text, btn){
  function done(){
    if (btn){
      var old = btn.textContent;
      btn.textContent = "Copied ✓";
      setTimeout(function(){ btn.textContent = old; }, 1200);
    }
  }
  if (navigator.clipboard && navigator.clipboard.writeText){
    navigator.clipboard.writeText(text).then(done, function(){ fallbackCopy(text); done(); });
  } else {
    fallbackCopy(text);
    done();
  }
}

/* ============================================================
   Master update
   ============================================================ */
var currentUrl = "";
var renderTimer = null;

function updateAll(){
  var o = readForm();
  currentUrl = buildURL(o);
  $("outUrl").value = currentUrl;
  renderQR(currentUrl);
  renderSnippets(o, currentUrl);
}

function schedule(){
  if (renderTimer) clearTimeout(renderTimer);
  renderTimer = setTimeout(updateAll, 120);
}

/* ============================================================
   Theme directory (gallery)
   ============================================================ */
function starsFor(n){
  var out = "";
  for (var i = 0; i < 3; i++){
    out += '<span class="' + (i < n ? "" : "dim") + '">★</span>';
  }
  return out;
}

function renderGallery(){
  var g = $("gallery");
  g.textContent = "";
  var sorted = THEMES.slice().sort(function(a, b){
    if (b.stars !== a.stars) return b.stars - a.stars;
    return a.name.localeCompare(b.name);
  });
  sorted.forEach(function(t){
    var card = document.createElement("div");
    card.className = "tcard";

    var h4 = document.createElement("h4");
    h4.textContent = t.name;
    card.appendChild(h4);

    var fn = document.createElement("div");
    fn.className = "fname";
    fn.textContent = t.file;
    card.appendChild(fn);

    var p = document.createElement("p");
    p.textContent = t.description;
    card.appendChild(p);

    var stars = document.createElement("div");
    stars.className = "stars";
    stars.innerHTML = starsFor(t.stars);
    card.appendChild(stars);

    var tags = document.createElement("div");
    tags.className = "tags";
    t.tags.forEach(function(tag){
      var s = document.createElement("span");
      s.className = "tag";
      s.textContent = tag;
      tags.appendChild(s);
    });
    card.appendChild(tags);

    var row = document.createElement("div");
    row.className = "row";
    var pb = document.createElement("button");
    pb.type = "button";
    pb.className = "tk-btn small";
    pb.textContent = "Preview";
    pb.addEventListener("click", function(){ openPreview(t); });
    var ob = document.createElement("a");
    ob.className = "tk-btn small";
    ob.textContent = "Open ↗";
    ob.href = "./" + t.file;
    ob.target = "_blank";
    ob.rel = "noopener";
    row.appendChild(pb);
    row.appendChild(ob);
    card.appendChild(row);
    g.appendChild(card);
  });
}

/* ============================================================
   Preview modal
   ============================================================ */
function openPreview(t){
  $("previewTitle").textContent = t.name + " — " + t.file;
  $("previewFrame").src = "./" + t.file;
  $("previewModal").classList.add("open");
}

function closePreview(){
  $("previewModal").classList.remove("open");
  $("previewFrame").src = "about:blank";
}

/* ============================================================
   Comparison
   ============================================================ */
function fillThemeSelect(sel){
  sel.textContent = "";
  THEMES.slice().sort(function(a, b){ return a.name.localeCompare(b.name); }).forEach(function(t){
    var opt = document.createElement("option");
    opt.value = t.file;
    opt.textContent = t.name + " (" + t.file + ")";
    sel.appendChild(opt);
  });
}

function readCompareParams(){
  return {
    name: $("c-name").value.trim(),
    company: $("c-company").value.trim(),
    lang: $("c-lang").value.trim(),
    mode: $("c-mode").value,
    font: $("c-font").value.trim(),
    highlight: $("c-highlight").value.trim()
  };
}

function compareUrlFor(file){
  var cp = readCompareParams();
  return buildURL({file:file, base:"", name:cp.name, company:cp.company, lang:cp.lang, mode:cp.mode, font:cp.font, highlight:cp.highlight});
}

function refreshPane(selId, frameId){
  var url = compareUrlFor($(selId).value);
  $(frameId).src = url;
}

function syncBoth(){
  refreshPane("selA", "frameA");
  refreshPane("selB", "frameB");
}

function randomThemes(){
  if (THEMES.length < 2) return;
  var a = THEMES[Math.floor(Math.random() * THEMES.length)];
  var b;
  do {
    b = THEMES[Math.floor(Math.random() * THEMES.length)];
  } while (b.file === a.file);
  $("selA").value = a.file;
  $("selB").value = b.file;
  refreshPane("selA", "frameA");
  refreshPane("selB", "frameB");
}

/* ============================================================
   Per-component Copy / URL buttons
   ============================================================ */
function componentPlainText(el){
  var clone = el.cloneNode(true);
  var bar = clone.querySelector(".component-bar");
  if (bar) bar.remove();
  var actions = clone.querySelector(".hero-actions");
  if (actions) actions.remove();
  return (clone.innerText || clone.textContent || "").replace(/\n{3,}/g, "\n\n").trim();
}

function componentUrl(anchor){
  var params = new URLSearchParams(window.location.search);
  params.set("lang", document.documentElement.lang || "en");
  var theme = document.documentElement.dataset.theme || "";
  if (theme) params.set("theme", theme);
  var fontSelect = document.querySelector("#fontSelect");
  if (fontSelect && fontSelect.value) params.set("font", fontSelect.value);
  var accent = "";
  try {
    accent = (getComputedStyle(document.documentElement).getPropertyValue("--accent") || "").trim();
  } catch (e) {
    accent = "";
  }
  if (accent) params.set("highlight", accent);
  var base = window.location.href.split("#")[0].split("?")[0];
  return base + "?" + params.toString() + "#" + anchor;
}

function makeComponentBar(el, anchor, label){
  if (!el || el.querySelector(".component-bar")) return;
  var bar = document.createElement("div");
  bar.className = "component-bar";
  bar.setAttribute("role", "group");
  bar.setAttribute("aria-label", label + " actions");

  var copyBtn = document.createElement("button");
  copyBtn.type = "button";
  copyBtn.className = "component-btn";
  copyBtn.textContent = "Copy";
  copyBtn.title = "Copy this " + label.toLowerCase() + " as plain text";
  copyBtn.addEventListener("click", function(){ copyText(componentPlainText(el), copyBtn); });

  var urlBtn = document.createElement("button");
  urlBtn.type = "button";
  urlBtn.className = "component-btn";
  urlBtn.textContent = "URL";
  urlBtn.title = "Copy a deep link to this " + label.toLowerCase();
  urlBtn.addEventListener("click", function(){ copyText(componentUrl(anchor), urlBtn); });

  bar.append(copyBtn, urlBtn);

  if (el.classList.contains("spec-section")){
    var h3 = el.querySelector("h3");
    if (h3) h3.after(bar);
    else el.prepend(bar);
  } else {
    el.append(bar);
  }
}

function addStaticComponentBars(){
  makeComponentBar(document.querySelector(".hero-copy"), "meaning", "Title and declaration");
  makeComponentBar(document.querySelector(".meaning-card"), "meaning", "What the mark says");
  makeComponentBar(document.querySelector(".plain-meaning"), "plain-meaning", "Plain meaning");
}

function addSpecComponentBars(){
  var content = document.getElementById("specContent");
  if (!content) return;
  content.querySelectorAll(".spec-section").forEach(function(s){
    makeComponentBar(s, s.id, "Section " + (s.dataset.section || ""));
  });
  var end = content.querySelector(".spec-end");
  if (end){
    if (!end.id) end.id = "spec-end";
    makeComponentBar(end, "spec-end", "End of document");
  }
}

/* ============================================================
   Wiring
   ============================================================ */
function initToolkit(){
  fillThemeSelect($("f-theme"));
  fillThemeSelect($("selA"));
  fillThemeSelect($("selB"));

  var sorted = THEMES.slice().sort(function(a, b){ return a.name.localeCompare(b.name); });
  if (sorted.length > 1){ $("selA").value = sorted[0].file; $("selB").value = sorted[1].file; }

  renderGallery();
  updateAll();

  ["f-theme","f-base","f-name","f-company","f-lang","f-mode","f-font","f-highlight"].forEach(function(id){
    $(id).addEventListener("input", schedule);
    $(id).addEventListener("change", schedule);
  });

  $("copyUrl").addEventListener("click", function(){ copyText(currentUrl, this); });
  $("testUrl").addEventListener("click", function(){
    window.open(currentUrl, "_blank", "noopener");
  });

  $("copyPlain").addEventListener("click", function(){ copyText($("snipPlain").textContent, this); });
  $("copyHtml").addEventListener("click", function(){ copyText($("snipHtml").textContent, this); });
  $("copyMd").addEventListener("click", function(){ copyText($("snipMd").textContent, this); });
  $("copyBadge").addEventListener("click", function(){ copyText($("snipBadge").textContent, this); });

  $("copyAll").addEventListener("click", function(){
    var o = readForm();
    var s = buildSnippets(o, currentUrl);
    var report =
      "+AI Toolkit report\n" +
      "Generated URL:\n" + s.url + "\n\n" +
      "Plain text:\n" + s.plain + "\n\n" +
      "HTML:\n" + s.html + "\n\n" +
      "Markdown:\n" + s.md + "\n\n" +
      "Badge embed:\n" + s.badge + "\n";
    copyText(report, this);
  });

  $("syncBtn").addEventListener("click", syncBoth);
  $("randomBtn").addEventListener("click", randomThemes);
  $("refreshA").addEventListener("click", function(){ refreshPane("selA","frameA"); });
  $("refreshB").addEventListener("click", function(){ refreshPane("selB","frameB"); });
  $("openA").addEventListener("click", function(){
    window.open(compareUrlFor($("selA").value), "_blank", "noopener");
  });
  $("openB").addEventListener("click", function(){
    window.open(compareUrlFor($("selB").value), "_blank", "noopener");
  });
  $("selA").addEventListener("change", function(){ refreshPane("selA","frameA"); });
  $("selB").addEventListener("change", function(){ refreshPane("selB","frameB"); });
  ["c-name","c-company","c-lang","c-mode","c-font","c-highlight"].forEach(function(id){
    $(id).addEventListener("input", function(){ /* params apply on sync/random/open */ });
  });

  syncBoth();

  $("previewClose").addEventListener("click", closePreview);
  $("previewModal").addEventListener("click", function(e){
    if (e.target === $("previewModal")) closePreview();
  });
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") closePreview();
  });

  initDivider();

  addStaticComponentBars();
  addSpecComponentBars();
  var content = document.getElementById("specContent");
  if (content && "MutationObserver" in window){
    new MutationObserver(addSpecComponentBars).observe(content, { childList: true });
  }
}

function initDivider(){
  var div = $("divider");
  var paneA = $("paneA");
  var paneB = $("paneB");
  var startX, startW;
  div.addEventListener("pointerdown", function(e){
    if (window.innerWidth < 920) return;
    div.setPointerCapture(e.pointerId);
    startX = e.clientX;
    startW = paneA.getBoundingClientRect().width;
    document.body.style.cursor = "col-resize";
    document.body.style.userSelect = "none";
  });
  div.addEventListener("pointermove", function(e){
    if (startW == null) return;
    var rect = $("compare").getBoundingClientRect();
    var total = rect.width;
    var w = startW + (e.clientX - startX);
    var min = Math.max(180, total * 0.18);
    w = Math.min(Math.max(w, min), total - min - 10);
    paneA.style.flex = "0 0 " + w + "px";
    paneB.style.flex = "1 1 0";
  });
  function stop(){ startW = null; document.body.style.cursor = ""; document.body.style.userSelect = ""; }
  div.addEventListener("pointerup", stop);
  div.addEventListener("pointercancel", stop);
}

if (document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", initToolkit);
} else {
  initToolkit();
}
</script>
"""

MODAL_AND_LISTS = """
<!-- preview modal -->
<div class="modal" id="previewModal" role="dialog" aria-modal="true" aria-label="Theme preview">
  <div class="box">
    <div class="mhead">
      <h3 id="previewTitle">Preview</h3>
      <button class="tk-btn small" id="previewClose" type="button">Close ✕</button>
    </div>
    <iframe id="previewFrame" title="Theme preview" src="about:blank"></iframe>
  </div>
</div>

<datalist id="langs">
  <option value="en"></option><option value="es"></option><option value="fr"></option>
  <option value="de"></option><option value="it"></option><option value="pt"></option>
  <option value="nl"></option><option value="ja"></option><option value="zh"></option>
</datalist>
<datalist id="fonts">
  <option value="Inter"></option><option value="IBM Plex Sans"></option>
  <option value="JetBrains Mono"></option><option value="ui-monospace"></option>
  <option value="Georgia"></option><option value="Times New Roman"></option>
</datalist>
<datalist id="colors">
  <option value="#10A37F"></option><option value="#22c55e"></option>
  <option value="#ff5555"></option><option value="#55aaff"></option>
  <option value="gold"></option>
</datalist>
"""

# ---------------------------------------------------------------- assemble
out = THEME

# a) toolkit CSS before </style>
anchor = "  </style>\n</head>"
assert out.count(anchor) == 1, "style anchor"
out = out.replace(anchor, TOOLKIT_CSS.rstrip() + "\n" + anchor, 1)

# b) toolkit section after hero, and id on plain-meaning
anchor = '    </section>\n\n    <section class="plain-meaning" aria-labelledby="plainTitle">'
assert out.count(anchor) == 1, "hero anchor"
replacement = ('    </section>\n' + TOOLKIT_SECTION.lstrip('\n') +
               '\n    <section class="plain-meaning" id="plain-meaning" aria-labelledby="plainTitle">')
out = out.replace(anchor, replacement, 1)

# c) theme directory before the footer
anchor = "  </main>\n\n  <footer>"
assert out.count(anchor) == 1, "footer anchor"
out = out.replace(anchor, "  </main>\n" + DIRECTORY_SECTION.lstrip('\n') + "\n  <footer>", 1)

# d) QR lib + toolkit JS + modal/datalists before </body>
anchor = "    updateReadingProgress();\n  </script>\n</body>"
assert out.count(anchor) == 1, "script anchor"
out = out.replace(anchor, "    updateReadingProgress();\n  </script>\n" + QR_LIB + "\n" + TOOLKIT_JS.strip() + "\n" + MODAL_AND_LISTS.strip() + "\n</body>", 1)

# e) title and description reflect the toolkit role
assert '<title>+AI — AI helped. I take responsibility.</title>' in out
out = out.replace('<title>+AI — AI helped. I take responsibility.</title>',
                  '<title>+AI Toolkit — Specification & Developer Tools</title>', 1)
out = out.replace('<meta name="description" content="+AI means artificial intelligence materially assisted the work and a named person or organisation accepts responsibility for it.">',
                  '<meta name="description" content="The +AI specification as a toolkit: theme directory, side-by-side comparison, URL builder, QR code, snippets, and copy/URL buttons for every component of the document.">', 1)

open('site/toolkit.html', 'w', encoding='utf-8').write(out)
print("toolkit.html written:", len(out), "bytes")
