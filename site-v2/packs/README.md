# +AI site-v2 — theme packs

One engine (`src/app.js`), many identities. A theme pack is a self-contained
directory under `packs/<code>/`:

```
packs/<code>/
  manifest.json    pack identity + tokens + decorations (authored)
  theme.css        the pack's complete visual stylesheet (authored)
  flavour.json     decorative copy with per-language status (authored)
  note.json        per-theme conformance note (authored)
  behaviour.js     OPTIONAL pack behaviour script (authored)
  pack.js          GENERATED registration script — never edit
```

`build.mjs` inlines every pack into the single-file `index.html` (one
`<style id="theme-<code>" media="not all">` block per pack, plus its
generated `pack.js` registration) and links them in the dev build
`index-fat.html`. The engine mounts exactly one pack at a time.

## Adding a theme (additive — nothing shared is edited)

1. Create `packs/<code>/` with the four authored files above.
2. Run `node build.mjs` — the pack is now selectable via
   `index.html?theme=<code>`, the Theme control, and listed in
   `packs/index.js` for the standalone pages.
3. Run `node build.mjs --check` and `node build.mjs --verify-all`.

## manifest.json

```json
{
  "packId": "sci-fi-1",
  "version": 1,
  "hash": "",
  "languages": ["*"],
  "accessibility": { "contrast": "AA", "reducedMotion": true, "notes": "…" },
  "conformanceChecked": "2025-09-05",
  "assets": ["theme.css", "flavour.json", "note.json"],
  "name": { "en": "Sci-Fi 1 — Orbital HUD" },
  "maintainer": "JAPER Technology",
  "license": "Project contribution terms (docs/development/0007)",
  "tokens": {
    "accent": "#35D0FF", "font": "Exo 2", "fontStack": "…",
    "fontOptions": ["…"], "defaultMode": "dark",
    "onAccentDark": "#05121d", "onAccentLight": "#FFFFFF",
    "onAccentThreshold": 0.179, "themeColor": "#35D0FF"
  },
  "decorations": [ … ],
  "script": "",
  "interfaceCopyOverrides": { "en": { "heroTitle": "…" } }
}
```

- `tokens` are the per-pack defaults the engine applies on activation
  (accent, font, font dropdown, light/dark starting point, accent ink and
  theme colour).
- `decorations` transform the shared skeleton into the pack's markup.
  Ops: `insertBefore | insertAfter | prependTo | appendTo | wrap | replaceWith
  | remove | setAttribute | addClass | text`, each with an `anchor` selector
  (tag + optional `#id` + optional `.class`). `wrap` uses `before`/`after`.
  Anchors are FORBIDDEN inside `#specContent` — no theme may touch normative
  content. Decoration markup may contain `{{flavour:<id>}}` placeholders.
- `interfaceCopyOverrides` lets a pack re-voice interface chrome per
  language (flavour voice); base chrome stays the fallback.

## flavour.json (flavour-text-localisation)

```json
{
  "flavourStrings": [
    {
      "id": "telemetry-status",
      "neutral": "ORBITAL LINK · NOMINAL",
      "localised": [
        { "lang": "ja", "text": "…", "status": "community",
          "adaptedBy": "…", "at": "2025-09-05", "source": "" }
      ]
    }
  ],
  "packVersion": 1
}
```

Resolution order: reviewed local → community local → neutral. `machine`
strings render with a visible "machine-translated flavour" label. The mark
`+AI` and other protected strings stay literal — never flavour, never
translated. Flavour never restates normative meaning.

## note.json (per-theme conformance notes)

`themeId`, `noteVersion`, `supportedFeatures` (each with `basis:
measured|reviewed`, `by`, `at`), `accessibility`, `limitations` (each naming
its neutral fallback), `languageCoverage`, `contentVersion`, `lastCheck`.

## Neutral route and fallback

`packs/neutral` is the accessibility-floor plain view (WCAG AA, no motion,
monochrome print; its own CSS stays below 20 KB). A requested pack that
fails to load or validate falls back to neutral with a visible notice; the
Theme selector always offers it.

## Parity verification

`node build.mjs --verify-pack <code>` replays the pack's decorations on the
skeleton and compares against the legacy single-file page. All migrated
packs pass this check; keep it green when editing decorations.
