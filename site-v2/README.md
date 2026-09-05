# site-v2 — the +AI website (single entry point, many languages, many themes)

One engine, many identities. This directory is the +AI specification site:
a single `index.html` hosts all 40 languages and every visual theme.

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | **Built** — the runtime upload: one self-contained file (html + js + css; fonts stay external). |
| `index-fat.html` | **Built** — the same site for development, with `<script src>`/`<link>` inclusions. |
| `build.mjs` | The deterministic assembler. `node build.mjs` builds; `--check` fails on drift; `--verify-pack <code>` proves a pack's decorations reproduce its legacy page; `--stubs` writes the legacy redirect stubs. |
| `src/shell.html` | The one document skeleton (head + body with anchor points). |
| `src/app.js` | The engine: language + theme + font + accent + super menu. |
| `src/base.css` | The structural minimum shared by every pack (focus, reset, super menu). |
| `src/nav.json` | The versioned navigation manifest for the super menu (shared-project-navigation). |
| `packs/` | Theme packs (see `packs/README.md`) + `packs/registry.js` + generated `packs/index.js`. |
| `translations/` | The language mechanism: `registry.js` + 40 `spec.<lang>.js`. |
| `hooks-contract.json` | The machine-checkable hooks contract every pack honours. |
| `tools/` | Migration tooling (`extract-pack.mjs`, `html-tokens.mjs`, `split-shell.py`). |
| `SPECIFICATION.md` | The canonical English specification (also the content-hash source). |
| `AN.UPGRADE.md` | The refactor proposal, decisions and execution status. |
| `*.html` (other) | Standalone experiences (attract, random, credits, players, 404) and legacy redirect stubs. |

## Using the site

- `index.html` — the default theme (sci-fi-1), language auto-detected.
- `index.html?theme=sci-fi-1` — a specific theme pack.
- `index.html?theme=neutral` — the accessibility-floor plain view.
- `index.html?lang=ja&theme=swiss` — combine parameters freely
  (`theme`, `mode`, `lang`, `font`, `highlight`, `name`, `company`).
- The **+AI wordmark** in the header is the super menu (project navigation).
- Legacy URLs such as `sci-fi-1.html` redirect to
  `index.html?theme=sci-fi-1` (param-preserving, recorded).

## Working on the site

Edit the sources (`src/`, `packs/`, `translations/`), then:

```sh
node build.mjs             # rebuild index.html + index-fat.html
node build.mjs --check     # refuse drift between sources and builds
node build.mjs --verify-all
```

Never edit `index.html`, `index-fat.html`, `packs/*/pack.js`, `src/nav.js`
or the stub pages by hand — they are generated.
