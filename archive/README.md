# Archive

Everything here is **provenance, not production**. Nothing under `archive/` is
deployed to S3; it exists so no historical state is ever lost.

| Directory | Contents |
| --- | --- |
| `versions/` | The historical canonical-page lineage: `website.html` and `website-v2.html` … `website-v13.html`, plus `index-v1.html` / `index-v2.html`. `website-v13.html` (Aug 2025) was promoted to `site/index.html` — the live homepage — and the rest are kept for diffing and history. |
| `analysis/` | The variant-analysis working notes (`group-1.md` … `group-6.md`) and the protocol (`PROTOCOL.md`) that produced `docs/features.md`. |
| `translation-notes/` | Per-language correction notes (`spec.<code>-corrections-N.md`) kept during translation review. The reviewed payloads themselves live in `site/translations/spec.<code>.js`. |
| `commands.txt` | Scratch task note from the build era — retained for context. |

## Notes on the archived HTML builds

The `versions/*.html` files reference their translations as
`translations/spec.<code>.js` relative to the page. That directory now lives
at `site/translations/`, so an archived file opened from disk falls back to
its own English content and logs missing-script errors. To inspect an old
build with translations, temporarily copy it into `site/` or open it next to a
`translations/` symlink:

```bash
# quick look at an old build with its translations, from the repo root:
mkdir -p /tmp/oldbuild && cp archive/versions/website-v12.html /tmp/oldbuild/
ln -s "$PWD/site/translations" /tmp/oldbuild/translations
open /tmp/oldbuild/website-v12.html
```

The canonical lineage, and what changed at each step, is summarised in
`docs/versions-done.md`.
