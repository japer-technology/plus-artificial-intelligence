#!/usr/bin/env node
/*!
 * +AI — 404 page builder
 *
 * Usage:  node scripts/build-404.mjs
 *
 * Generates site/404.html from the template below. The page carries:
 *   - the +AI identity (mark, the three meanings, canonical design tokens),
 *   - "did you mean?" fuzzy suggestions against the real page inventory,
 *   - a searchable directory of every page on the site.
 *
 * The directory data is extracted from site/toolkit.html's THEMES array and
 * completed from a curated supplement, then asserted against the actual
 * files in site/: every site/*.html (except 404.html) plus SPECIFICATION.md
 * must appear exactly once, and no entry may point at a missing file.
 *
 * CI regenerates this file and fails if it is stale (see
 * .github/workflows/deploy.yml).
 */
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SITE = join(ROOT, "site");

/* ---- 1. names from toolkit.html's THEMES array ---- */
const toolkit = readFileSync(join(SITE, "toolkit.html"), "utf8");
const themesNames = new Map();
for (const m of toolkit.matchAll(/\{file:"([a-z0-9-]+\.html)",\s*name:"([^"]+)"/g)) {
  themesNames.set(m[1], m[2]);
}

/* ---- 2. supplement for pages the THEMES array does not cover ---- */
const SUPPLEMENT = {
  "index.html": "Canonical specification",
  "SPECIFICATION.md": "Specification — markdown",
  "attract.html": "Attract mode",
  "crawl.html": "Crawl",
  "credits.html": "Credits",
  "narration.html": "Narration",
  "rsvp.html": "RSVP reader",
  "slideshow.html": "Slideshow",
  "speedread.html": "Speed reader",
  "typewriter.html": "Typewriter",
  "toolkit.html": "Toolkit",
  "random.html": "Random showcase",
  "occupation-coo.html": "COO",
  "occupation-cfo.html": "CFO",
  "occupation-cto.html": "CTO",
  "occupation-cio.html": "CIO",
};

/* ---- 3. groups ---- */
const GROUPS = [
  "Canonical",
  "Sci-fi & machines",
  "Arts & design",
  "Industries & sectors",
  "Documentation standards",
  "Brand studies",
  "Countries",
  "Occupations",
  "Performance modes",
  "Tools",
];
const GROUP_OF = {
  "index.html": "Canonical",
  "SPECIFICATION.md": "Canonical",
  "startrek.html": "Sci-fi & machines", "lcars-mono.html": "Sci-fi & machines", "spaceodyssey.html": "Sci-fi & machines",
  "bladerunner2049.html": "Sci-fi & machines", "neogenesis.html": "Sci-fi & machines", "quantumlab.html": "Sci-fi & machines",
  "sci-fi-1.html": "Sci-fi & machines", "sci-fi-2.html": "Sci-fi & machines", "starwars.html": "Sci-fi & machines",
  "cyberpunk.html": "Sci-fi & machines", "spaceinvaders.html": "Sci-fi & machines", "hal9000.html": "Sci-fi & machines",
  "military-spec.html": "Sci-fi & machines", "the-borg.html": "Sci-fi & machines",
  "art-cubism.html": "Arts & design", "art-impressionist.html": "Arts & design", "retro.html": "Arts & design",
  "swiss.html": "Arts & design", "blueprint.html": "Arts & design", "notary.html": "Arts & design", "museum.html": "Arts & design",
  "legal.html": "Industries & sectors", "medical.html": "Industries & sectors", "finance.html": "Industries & sectors",
  "newsroom.html": "Industries & sectors", "university.html": "Industries & sectors", "architecture.html": "Industries & sectors",
  "aerospace.html": "Industries & sectors", "maritime.html": "Industries & sectors", "energy.html": "Industries & sectors",
  "luxury.html": "Industries & sectors", "games.html": "Industries & sectors", "music.html": "Industries & sectors",
  "consulting.html": "Industries & sectors", "accounting.html": "Industries & sectors", "insurance.html": "Industries & sectors",
  "hr.html": "Industries & sectors", "advertising.html": "Industries & sectors", "realestate.html": "Industries & sectors",
  "pharma.html": "Industries & sectors", "biotech.html": "Industries & sectors", "dental.html": "Industries & sectors",
  "veterinary.html": "Industries & sectors", "fitness.html": "Industries & sectors", "mentalhealth.html": "Industries & sectors",
  "banking.html": "Industries & sectors", "fintech.html": "Industries & sectors", "construction.html": "Industries & sectors",
  "mining.html": "Industries & sectors", "chemicals.html": "Industries & sectors", "manufacturing.html": "Industries & sectors",
  "utilities.html": "Industries & sectors",
  "dec-manual.html": "Documentation standards", "ibm-manual.html": "Documentation standards",
  "manpage.html": "Documentation standards", "theme-adobe.html": "Documentation standards",
  "theme-openai.html": "Brand studies", "theme-anthropic.html": "Brand studies", "theme-google.html": "Brand studies",
  "theme-microsoft.html": "Brand studies", "theme-github.html": "Brand studies", "theme-youtube.html": "Brand studies",
  "country-ja.html": "Countries",
  "occupation-ceo.html": "Occupations", "occupation-coo.html": "Occupations",
  "occupation-cfo.html": "Occupations", "occupation-cto.html": "Occupations",
  "occupation-cio.html": "Occupations",
  "rsvp.html": "Performance modes", "narration.html": "Performance modes", "credits.html": "Performance modes",
  "crawl.html": "Performance modes", "typewriter.html": "Performance modes", "slideshow.html": "Performance modes",
  "speedread.html": "Performance modes", "attract.html": "Performance modes",
  "toolkit.html": "Tools", "random.html": "Tools",
};

/* ---- 4. assemble and assert against the real files ---- */
const htmlFiles = readdirSync(SITE).filter((f) => f.endsWith(".html") && f !== "404.html");
const expected = new Set([...htmlFiles, "SPECIFICATION.md"]);
for (const f of expected) {
  if (!existsSync(join(SITE, f))) throw new Error(`expected file missing: site/${f}`);
}

const entries = [...expected]
  .map((f) => {
    const group = GROUP_OF[f];
    if (!group) throw new Error(`no group assigned for ${f}`);
    const name = themesNames.get(f) || SUPPLEMENT[f];
    if (!name) throw new Error(`no display name for ${f}`);
    return { f, n: name, g: group };
  })
  .sort((a, b) => a.f.localeCompare(b.f));

const assigned = new Set(entries.map((e) => e.f));
for (const f of expected) if (!assigned.has(f)) throw new Error(`unmapped site file: ${f}`);
for (const f of Object.keys(GROUP_OF)) if (!expected.has(f)) throw new Error(`GROUP_OF lists missing file: ${f}`);
for (const g of GROUPS) if (!entries.some((e) => e.g === g)) throw new Error(`empty group: ${g}`);

const DIRECTORY_JSON = JSON.stringify(entries.map(({ f, n, g }) => [f, n, g]));
const GROUPS_JSON = JSON.stringify(GROUPS);

/* ---- 5. template ---- */
const html = `<!doctype html>
<html lang="en" data-theme="dark">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="robots" content="noindex">
  <meta name="color-scheme" content="light dark">
  <meta name="theme-color" content="#AC43D9">
  <meta name="description" content="Page not found — the +AI mark still stands: AI helped. I take responsibility.">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <title>404 — +AI · AI helped. I take responsibility.</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <script>
    (() => {
      const parameters = new URLSearchParams(window.location.search);
      const requestedTheme = (parameters.get("theme") || parameters.get("mode") || "").toLowerCase();
      document.documentElement.dataset.theme =
        requestedTheme === "light" || (!requestedTheme && parameters.has("light"))
          ? "light"
          : "dark";
    })();
  </script>
  <style>
    :root {
      --accent: #AC43D9;
      --paper: #120e18;
      --surface: #1a1424;
      --surface-2: #221a30;
      --ink: #f4f0f9;
      --muted: #a89fbd;
      --line: #322943;
      --radius: 14px;
      --shadow: 0 12px 40px rgba(0, 0, 0, 0.35);
    }
    :root[data-theme="light"] {
      --paper: #f6f3fa;
      --surface: #ffffff;
      --surface-2: #efe9f7;
      --ink: #231b2e;
      --muted: #645a78;
      --line: #ddd3ea;
      --shadow: 0 12px 30px rgba(80, 50, 120, 0.10);
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { font-family: Inter, "Segoe UI", system-ui, -apple-system, sans-serif; scroll-behavior: smooth; }
    body {
      min-height: 100vh; min-height: 100dvh;
      display: flex; flex-direction: column;
      background-color: var(--paper);
      background-image: radial-gradient(1100px 520px at 50% -12%, rgba(172, 67, 217, 0.16) 0%, rgba(0, 0, 0, 0) 62%);
      color: var(--ink);
      transition: background-color 220ms ease, color 220ms ease;
    }
    a { color: inherit; }
    :focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }
    .skip {
      position: absolute; left: 1rem; top: -3rem; z-index: 10;
      background: var(--accent); color: #fff; text-decoration: none;
      padding: 0.6rem 1rem; border-radius: 999px; font-size: 0.9rem;
      transition: top 160ms ease;
    }
    .skip:focus { top: 1rem; }
    header.site {
      display: flex; align-items: center; gap: 1rem; justify-content: space-between;
      width: min(72rem, calc(100% - 2rem)); margin: 0 auto; padding: 1.1rem 0;
    }
    .brand { display: inline-flex; align-items: baseline; gap: 0.2rem; font-weight: 700; font-size: 1.15rem; text-decoration: none; }
    .brand .plus { color: var(--accent); }
    header.site nav { display: flex; gap: 0.4rem; flex-wrap: wrap; }
    header.site nav a {
      text-decoration: none; color: var(--muted); font-size: 0.88rem;
      padding: 0.35rem 0.75rem; border-radius: 999px; border: 1px solid transparent;
      transition: color 150ms ease, border-color 150ms ease;
    }
    header.site nav a:hover { color: var(--ink); border-color: var(--line); }
    main { width: min(72rem, calc(100% - 2rem)); margin: 0 auto; padding: 2rem 0 4rem; flex: 1; }
    .hero { display: grid; gap: 1.5rem; }
    .kicker { color: var(--accent); font-size: 0.8rem; font-weight: 700; letter-spacing: 0.22em; text-transform: uppercase; }
    h1 { font-size: clamp(2.6rem, 8vw, 4.6rem); letter-spacing: -0.035em; line-height: 1.02; text-wrap: balance; }
    h1 .glow {
      display: inline-block; position: relative; color: var(--accent);
      text-shadow: 0 0 24px rgba(172, 67, 217, 0.55);
    }
    .lead { color: var(--muted); font-size: 1.05rem; line-height: 1.65; max-width: 44rem; }
    code.path {
      font-family: ui-monospace, "SF Mono", Menlo, Consolas, monospace;
      font-size: 0.9em; background: var(--surface-2); border: 1px solid var(--line);
      padding: 0.15rem 0.5rem; border-radius: 8px; word-break: break-all;
    }
    .card {
      background: var(--surface); border: 1px solid var(--line);
      border-radius: var(--radius); box-shadow: var(--shadow);
      padding: clamp(1.25rem, 3vw, 1.75rem);
    }
    .suggestions h2, .meanings h2, .directory > h2 { font-size: 0.78rem; letter-spacing: 0.14em; text-transform: uppercase; color: var(--muted); margin-bottom: 0.9rem; }
    .suggestions ul { list-style: none; display: grid; gap: 0.5rem; }
    .suggestions a {
      display: flex; justify-content: space-between; gap: 1rem; align-items: center;
      text-decoration: none; padding: 0.7rem 0.9rem; border: 1px solid var(--line);
      border-radius: 10px; background: var(--surface-2);
      transition: border-color 150ms ease, transform 150ms ease;
    }
    .suggestions a:hover { border-color: var(--accent); transform: translateX(2px); }
    .suggestions a .group { color: var(--muted); font-size: 0.8rem; }
    blockquote.promise {
      border: 1px solid var(--line); border-left: 0.35rem solid var(--accent);
      padding: 0.9rem 1.2rem; font-style: italic; font-size: 1.15rem;
      border-radius: 0 var(--radius) var(--radius) 0; background: var(--surface);
    }
    .meanings { margin-top: 2.5rem; }
    .meanings dl { display: grid; gap: 0.9rem; }
    .meanings dl > div { display: grid; grid-template-columns: 2.2rem 1fr; gap: 0.6rem; align-items: baseline; }
    .meanings dt { font-weight: 700; }
    .meanings dd { color: var(--muted); line-height: 1.55; }
    .meanings .num { color: var(--accent); font-variant-numeric: tabular-nums; font-size: 0.85rem; }
    .directory { margin-top: 2.5rem; }
    .dir-toolbar { display: flex; gap: 0.75rem; align-items: center; flex-wrap: wrap; margin-bottom: 1.25rem; }
    .dir-toolbar input[type="search"] {
      flex: 1; min-width: 14rem; font: inherit; color: inherit;
      background: var(--surface); border: 1px solid var(--line); border-radius: 999px;
      padding: 0.65rem 1.1rem;
    }
    .dir-toolbar input[type="search"]::placeholder { color: var(--muted); }
    .dir-toolbar .count { color: var(--muted); font-size: 0.85rem; }
    .dir-groups { display: grid; gap: 1.5rem; grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr)); }
    .dir-groups section h3 { font-size: 0.72rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.6rem; }
    .dir-groups ul { list-style: none; display: grid; gap: 0.2rem; }
    .dir-groups a {
      display: block; text-decoration: none; color: var(--muted);
      padding: 0.32rem 0.55rem; margin-left: -0.55rem; border-radius: 8px; font-size: 0.92rem;
      transition: color 120ms ease, background 120ms ease;
    }
    .dir-groups a:hover { color: var(--ink); background: var(--surface-2); }
    .dir-groups a .file { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 0.74rem; opacity: 0.65; margin-left: 0.4rem; }
    .empty { color: var(--muted); padding: 0.5rem; font-size: 0.95rem; }
    footer.site {
      width: min(72rem, calc(100% - 2rem)); margin: 0 auto; padding: 1.4rem 0 1.8rem;
      display: flex; gap: 1rem; flex-wrap: wrap; align-items: center; justify-content: space-between;
      border-top: 1px solid var(--line); color: var(--muted); font-size: 0.85rem;
    }
    footer.site a { color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--line); }
    footer.site a:hover { border-color: var(--accent); color: var(--accent); }
    .accent-shuffle {
      font: inherit; color: var(--muted); background: none; cursor: pointer;
      border: 1px solid var(--line); border-radius: 999px; padding: 0.35rem 0.8rem; font-size: 0.82rem;
      transition: color 150ms ease, border-color 150ms ease;
    }
    .accent-shuffle:hover { color: var(--ink); border-color: var(--accent); }
    @media (prefers-reduced-motion: reduce) {
      *, *::before, *::after { animation: none !important; transition: none !important; scroll-behavior: auto !important; }
    }
  </style>
</head>
<body>
  <a class="skip" href="#directory">Skip to page directory</a>
  <header class="site">
    <a class="brand" href="/"><span class="plus">+</span>AI</a>
    <nav aria-label="Site">
      <a href="/">Home</a>
      <a href="/toolkit.html">Toolkit</a>
      <a href="/random.html">Random</a>
      <a href="/SPECIFICATION.md">Spec</a>
    </nav>
  </header>

  <main>
    <section class="hero" aria-labelledby="notFoundTitle">
      <p class="kicker">Error 404</p>
      <h1 id="notFoundTitle"><span class="glow">Lost in transmission.</span><br>This page is not here.</h1>
      <p class="lead" id="lead">No page exists at <code class="path" id="pathChip">/</code> on this site.</p>

      <section class="suggestions card" id="suggestions" hidden aria-labelledby="suggestionsTitle">
        <h2 id="suggestionsTitle">Did you mean…</h2>
        <ul id="suggestionList"></ul>
      </section>

      <blockquote class="promise">+AI = AI helped. I take responsibility.</blockquote>
    </section>

    <section class="meanings card" aria-labelledby="meaningsTitle">
      <h2 id="meaningsTitle">What the mark still says</h2>
      <dl>
        <div>
          <span class="num" aria-hidden="true">01</span>
          <div><dt>AI participated</dt><dd>AI materially helped create, analyse, transform or present the work.</dd></div>
        </div>
        <div>
          <span class="num" aria-hidden="true">02</span>
          <div><dt>A human chose</dt><dd>A person or organisation knowingly adopted and released the result.</dd></div>
        </div>
        <div>
          <span class="num" aria-hidden="true">03</span>
          <div><dt>Responsibility stays human</dt><dd>The named party does not transfer accountability to an AI system or provider.</dd></div>
        </div>
      </dl>
    </section>

    <section class="directory" id="directory" aria-labelledby="directoryTitle">
      <h2 id="directoryTitle">Everything on this site</h2>
      <div class="dir-toolbar">
        <input type="search" id="filter" placeholder="Filter pages — try &ldquo;bank&rdquo; or &ldquo;LCARS&rdquo;…" aria-label="Filter pages">
        <span class="count" id="count" role="status" aria-live="polite"></span>
        <button type="button" class="accent-shuffle" id="shuffle" title="Shuffle the accent colour">Shuffle accent</button>
      </div>
      <div class="dir-groups" id="dirGroups"></div>
    </section>
  </main>

  <footer class="site">
    <span>+AI · Open notation. Human responsibility.</span>
    <span><a href="/">plus-artificial-intelligence.org</a> · <a href="/SPECIFICATION.md">Specification v0.1</a></span>
  </footer>

  <script>
  window.__PLUS_AI_DIRECTORY__ = ${DIRECTORY_JSON};

  (function () {
    "use strict";

    var DIRECTORY = window.__PLUS_AI_DIRECTORY__;
    var GROUPS = ${GROUPS_JSON};

    /* ---- requested path ---- */
    var rawPath = "";
    try { rawPath = decodeURIComponent(window.location.pathname || ""); } catch (e) { rawPath = window.location.pathname || ""; }
    var segments = rawPath.split("/").filter(Boolean);
    var requested = segments.length ? segments[segments.length - 1] : "";
    requested = requested.replace(/\\.[a-z0-9]{1,6}$/i, ""); // any extension (.html, .htm, .jpg, …)
    var chip = document.getElementById("pathChip");
    if (requested) {
      chip.textContent = rawPath;
    } else {
      document.getElementById("lead").textContent = "No page exists at this address on this site.";
    }

    /* ---- fuzzy suggestions (Levenshtein over the page inventory) ---- */
    function levenshtein(a, b) {
      var m = a.length, n = b.length, d = [], i, j;
      for (i = 0; i <= m; i++) { d[i] = [i]; }
      for (j = 0; j <= n; j++) { d[0][j] = j; }
      for (i = 1; i <= m; i++) {
        for (j = 1; j <= n; j++) {
          var cost = a[i - 1] === b[j - 1] ? 0 : 1;
          d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
        }
      }
      return d[m][n];
    }
    function normalize(f) { return f.replace(/\\.html$/i, "").replace(/\\.md$/i, "").toLowerCase(); }

    if (requested && requested.length > 2 && !/^favicon|^apple-touch/i.test(requested)) {
      var q = requested.toLowerCase();
      var ranked = DIRECTORY
        .map(function (e) {
          var norm = normalize(e[0]);
          // Exact prefix (e.g. "lcars" → lcars-mono.html) outranks any edit distance.
          var d = norm.indexOf(q) === 0 ? 0.5 : levenshtein(q, norm);
          return { e: e, d: d };
        })
        .sort(function (x, y) { return x.d - y.d || x.e[1].localeCompare(y.e[1]); });
      var threshold = requested.length >= 9 ? 3 : 2;
      var best = ranked.filter(function (r) { return r.d <= threshold; }).slice(0, 3);
      var box = document.getElementById("suggestions");
      if (best.length) {
        var list = document.getElementById("suggestionList");
        best.forEach(function (r) {
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.href = "/" + r.e[0];
          var name = document.createElement("span");
          name.textContent = r.e[1];
          var group = document.createElement("span");
          group.className = "group";
          group.textContent = r.e[2];
          a.appendChild(name); a.appendChild(group); li.appendChild(a); list.appendChild(li);
        });
        box.hidden = false;
      }
    }

    /* ---- searchable directory ---- */
    var groupsEl = document.getElementById("dirGroups");
    var countEl = document.getElementById("count");
    var filterEl = document.getElementById("filter");

    function render(query) {
      var q = (query || "").trim().toLowerCase();
      groupsEl.textContent = "";
      var total = 0;
      GROUPS.forEach(function (groupName) {
        var rows = DIRECTORY.filter(function (e) {
          if (e[2] !== groupName) return false;
          if (!q) return true;
          return (e[1] + " " + e[0] + " " + e[2]).toLowerCase().indexOf(q) !== -1;
        });
        if (!rows.length) return;
        total += rows.length;
        var section = document.createElement("section");
        var h3 = document.createElement("h3");
        h3.textContent = groupName;
        var ul = document.createElement("ul");
        rows.forEach(function (e) {
          var li = document.createElement("li");
          var a = document.createElement("a");
          a.href = "/" + e[0];
          a.appendChild(document.createTextNode(e[1]));
          var file = document.createElement("span");
          file.className = "file";
          file.textContent = e[0];
          a.appendChild(file);
          li.appendChild(a); ul.appendChild(li);
        });
        section.appendChild(h3); section.appendChild(ul); groupsEl.appendChild(section);
      });
      countEl.textContent = q
        ? total + " page" + (total === 1 ? "" : "s") + " match"
        : DIRECTORY.length + " pages";
      if (!total && q) {
        var empty = document.createElement("p");
        empty.className = "empty";
        empty.textContent = "Nothing matches \u201c" + query.trim() + "\u201d.";
        groupsEl.appendChild(empty);
      }
    }

    filterEl.addEventListener("input", function () { render(filterEl.value); });
    render("");

    document.addEventListener("keydown", function (ev) {
      if (ev.key === "/" && document.activeElement !== filterEl && !/INPUT|TEXTAREA/.test(document.activeElement.tagName)) {
        ev.preventDefault();
        filterEl.focus();
      }
      if (ev.key === "Escape" && document.activeElement === filterEl) {
        filterEl.value = ""; render(""); filterEl.blur();
      }
    });

    /* ---- accent shuffle (echoes the canonical page's playful identity) ---- */
    var PALETTE = ["#AC43D9", "#35D0FF", "#FF2D95", "#00C853", "#F5A83B", "#FF5A5F", "#2CE5A7",
      "#4285F4", "#10A37F", "#E30613", "#4FC3F7", "#A3E635", "#C9A227", "#FF6A00"];
    var shuffle = document.getElementById("shuffle");
    shuffle.addEventListener("click", function () {
      document.documentElement.style.setProperty("--accent",
        PALETTE[Math.floor(Math.random() * PALETTE.length)]);
    });

    /* ---- optional ?accent= override ---- */
    try {
      var accent = new URLSearchParams(window.location.search).get("accent");
      if (accent && /^#[0-9a-fA-F]{6}$/.test(accent)) {
        document.documentElement.style.setProperty("--accent", accent);
      }
    } catch (e) { /* no-op */ }
  })();
  </script>
</body>
</html>
`;

/* ---- 6. write + self-checks ---- */
const out = join(SITE, "404.html");
writeFileSync(out, html, "utf8");

const written = readFileSync(out, "utf8");
const jsonMatch = written.match(/window\.__PLUS_AI_DIRECTORY__ = (\[[^\n]*\]);/);
if (!jsonMatch) throw new Error("directory injection not found in generated 404.html");
const parsed = JSON.parse(jsonMatch[1]);
if (parsed.length !== entries.length) throw new Error("directory JSON length mismatch");

// Node-syntax-check the page's inline script.
const scriptMatch = written.match(/<script>\n  window\.__PLUS_AI_DIRECTORY__[\s\S]*?\n  <\/script>/);
if (!scriptMatch) throw new Error("could not isolate 404 inline script");
const tmp = join(ROOT, ".404-check.mjs");
writeFileSync(tmp, scriptMatch[0].replace(/<\/?script>/g, ""), "utf8");
try {
  execFileSync(process.execPath, ["--check", tmp], { stdio: "pipe" });
} finally {
  rmSync(tmp, { force: true });
}

console.log(`Wrote site/404.html — ${entries.length} pages in ${GROUPS.length} groups, all asserted against site/.`);
