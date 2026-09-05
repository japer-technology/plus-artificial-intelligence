#!/usr/bin/env python3
# One-shot scaffold: split the current site-v2/index.html into
#   src/shell.html            (head + body skeleton with build markers)
#   src/app.js                (the application script, pre-theme-engine)
#   packs/default/theme.css   (the default pack stylesheet)
# Run from site-v2/ — it overwrites src/shell.html and src/app.js.
import re, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "index.html"

src = SRC.read_text(encoding="utf-8")

# 1. Head theme-detection script -> parameterized (DEFAULT_MODE baked by build)
head_script = re.search(r'<script>\n    \(\(\) => \{\n(.*?)\n  </script>', src, re.S)
assert head_script, "head theme script not found"
new_head_script = (
    "<script>\n"
    "    (() => {\n"
    "      const parameters = new URLSearchParams(window.location.search);\n"
    "      const requestedTheme = (parameters.get(\"theme\") || parameters.get(\"mode\") || \"\").toLowerCase();\n"
    "      // __DEFAULT_MODE__ is baked in by the build (the default pack's\n"
    "      // defaultMode), so the default pack paints with no flash of the\n"
    "      // wrong mode. A ?theme=<pack> visit applies the pack's own mode\n"
    "      // when the engine initialises at the end of the body.\n"
    "      const fallback = \"__DEFAULT_MODE__\";\n"
    "      document.documentElement.dataset.theme =\n"
    "        requestedTheme === \"light\" || (!requestedTheme && parameters.has(\"light\"))\n"
    "          ? \"light\"\n"
    "          : requestedTheme === \"dark\" || (!requestedTheme && parameters.has(\"dark\"))\n"
    "            ? \"dark\"\n"
    "            : fallback;\n"
    "    })();\n"
    "  </script>"
)
src = src[:head_script.start()] + new_head_script + src[head_script.end():]

# 2. Font <link>s -> marker
font_links = re.search(r'  <link rel="preconnect" href="https://fonts\.googleapis\.com">\n.*?display=swap&subset=[a-z0-9,]+">\n', src, re.S)
assert font_links, "font links not found"
src = src[:font_links.start()] + "  <!--FONT-LINKS-->\n" + src[font_links.end():]

# 3. The default pack <style> -> packs/default/theme.css
style = re.search(r'  <style>\n(.*?)\n  </style>', src, re.S)
assert style, "inline style not found"
css = style.group(1)
default_dir = ROOT / "packs" / "default"
default_dir.mkdir(parents=True, exist_ok=True)
(default_dir / "theme.css").write_text(
    "/*\n * +AI Specification — default theme pack stylesheet (packs/default/theme.css)\n"
    " * Extracted from the original index.html; the canonical site look.\n"
    " * Mounted by the engine on <style id=\"theme-default\" media=\"not all\">.\n */\n"
    + css + "\n",
    encoding="utf-8")
src = src[:style.start()] + "  <!--PACK-CSS-->\n" + src[style.end():]

# 4. Translation <script src> block -> marker
trans = re.search(r'  <!--\n    Specification translations\..*?-->\n(  <script src="translations/[^"]*"></script>\n)+', src, re.S)
assert trans, "translation script block not found"
src = src[:trans.start()] + "  <!--TRANSLATIONS-->\n" + src[trans.end():]

# 5. The app <script> -> src/app.js + marker
app = re.search(r'  <script>\n(    const DEFAULT_ACCENT.*?)\n  </script>', src, re.S)
assert app, "app script not found"
app_js = app.group(1)
(ROOT / "src").mkdir(parents=True, exist_ok=True)
(ROOT / "src" / "app.js").write_text(
    "/*!\n * +AI Specification — engine (src/app.js)\n"
    " * Extracted from the original index.html application script. Theme-pack\n"
    " * machinery is layered on top of the original language/font/accent logic;\n"
    " * every original behaviour is preserved.\n */\n"
    + app_js + "\n",
    encoding="utf-8")
src = src[:app.start()] + "  <!--APP-->\n" + src[app.end():]

# 6. Write shell
(ROOT / "src" / "shell.html").write_text(src, encoding="utf-8")

print("wrote src/shell.html", len(src), "bytes")
print("wrote src/app.js")
print("wrote packs/default/theme.css", len(css), "bytes")
