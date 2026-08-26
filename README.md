**AI helped. I take responsibility.**

<p align="left">
  <picture>
    <img src="site/assets/plus-artificial-intelligence.png" alt="plus-artificial-intelligence.org" width="200">
  </picture>
</p>

A post nominal by Eric Mourant +AI[2026.8.18]

# plus-artificial-intelligence.org

The [**+AI**](https://plus-artificial-intelligence.org/) notation marks work
that was materially assisted by artificial intelligence **and** names the
human or organisation that accepts responsibility for it. This repository is
the complete home of the +AI project:

- the **canonical specification** (v0.1, 26 sections, 40 languages),
- **80 single-file presentations** of that specification — one canonical page
  plus a gallery of themed re-skins (sci-fi, industries, art movements,
  documentation standards, brand studies, performance players, tools),
- the **translation toolchain** and validation suite,
- the **deployment pipeline** for the static site on AWS CloudFront + S3.

Everything in `site/` is self-contained and opens directly from disk — no
build step, no server. `site/` *is* the website.

## Live site

- **https://plus-artificial-intelligence.org/** — canonical specification page
  (`site/index.html`)
- **https://plus-artificial-intelligence.org/toolkit.html** — theme gallery,
  compare, URL builder, QR/barcode tools
- **https://plus-artificial-intelligence.org/random.html** — rotating showcase

## Repository layout

```
├── site/                  # ← what is deployed to S3 (the entire website)
│   ├── index.html         #    canonical +AI specification page
│   ├── *.html             #    78 themed presentations + generated 404.html
│   ├── SPECIFICATION.md   #    normative spec text (linked from every page)
│   ├── translations/      #    registry.js + spec.<code>.js for 40 languages
│   ├── assets/            #    favicon, posters
│   ├── robots.txt
│   └── sitemap.xml        #    generated — see scripts/generate-sitemap.mjs
├── .github/workflows/     # CI/CD: validate → deploy to S3 + CloudFront
├── infra/                 # copy-paste AWS artifacts (OIDC/IAM policies, www-redirect)
├── scripts/               # dev tooling (validation, link check, sitemap, analysis)
├── docs/                  # specification-adjacent documents & guides
│   ├── DEPLOYMENT.md      #    full AWS setup walkthrough
│   ├── TRANSLATIONS.md    #    how translations work, how to add one
│   ├── core-extensions.md #    architecture & roadmap for the trust layer
│   ├── features.md        #    cross-variant analysis for a future "super" page
│   ├── versions-done.md   #    inventory of the finished presentations
│   ├── versions-not-done.md # build queue
│   └── DECLARATION-HARD-VERSION.md
└── archive/               # historical website-v1…v13 builds, analysis notes,
                           # translation working notes — kept for provenance,
                           # NOT deployed
```

## Quickstart

No dependencies, no build step:

```bash
# Preview locally — just open the site folder:
open site/index.html

# Or serve it (any static server):
python3 -m http.server 8080 --directory site
```

Run the full validation suite before touching anything:

```bash
node scripts/validate.mjs        # translation data integrity (40 languages)
node scripts/render-check.mjs    # replay: every language renders 26 sections
node scripts/check-links.mjs     # all local hrefs/srcs and gallery refs resolve
node scripts/generate-sitemap.mjs
node scripts/build-404.mjs       # rebuild the 404's page directory
```

These run when the deployment workflow is started manually; the deploy job
runs only if they all pass.

## The page contract

Every themed page is a full single-file clone of the canonical page with one
visual identity swapped in. They all share one behavioural skeleton:

- the 41 translation `<script>` tags (`registry.js` + 40 `spec.<code>.js`, in
  order),
- the element ids and class hooks (`languageSelect`, `specContent`,
  `tocList`, `.meaning-card`, …),
- the `data-text`/`data-html`/`data-title` keys and inline JS (language
  resolution, theme/font persistence, accent randomisation, personalisation).

**A new theme = one new file in `site/`, nothing else touched.** Before you
build one, read `docs/core-extensions.md` (invariants) and
`docs/versions-not-done.md` (the planned build queue), and run
`node scripts/render-check.mjs` afterwards.

## Deployment

The site is a private S3 bucket behind CloudFront, deployed by a manually
dispatched GitHub Actions workflow via OIDC (no long-lived AWS keys). One-time
AWS setup is documented step by step in
[`docs/DEPLOYMENT.md`](docs/DEPLOYMENT.md); the paste-ready IAM policies and
the `www` → apex redirect CloudFront Function live in [`infra/`](infra/).

## Documentation index

| Document | What it covers |
| --- | --- |
| `site/SPECIFICATION.md` | The normative +AI specification (v0.1, draft) |
| `docs/DECLARATION-HARD-VERSION.md` | The declaration, in plain words |
| `docs/TRANSLATIONS.md` | Translation architecture, process, review checklist |
| `docs/core-extensions.md` | Trust layer, theme engine, distribution — the roadmap |
| `docs/features.md` | Feature audit of all 78 variants vs the canonical page |
| `docs/DEPLOYMENT.md` | AWS CloudFront + S3 + Route 53 + GitHub Actions setup |

## History

The project's earlier flat structure (90+ pages and 17 `website-v*.html`
iterations at the repository root) was reorganised in 2025: the current
canonical page (`site/index.html`, formerly `website-v13.html`) became the
live homepage, historical builds moved to `archive/versions/`, and the
deployment tooling was added. See `archive/README.md` for details.
