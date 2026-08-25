/*!
 * +AI Site — current home theme
 *
 * Loaded by current.html (after its inline theme registry). Registers
 * the theme file the home page embeds, plus the parameters that page
 * receives.
 *
 * A configuration is:
 *   {
 *     name: "<local .html file>",  // required; the themed page to embed
 *     ...                          // every other key is forwarded to that
 *                                  // page as a query parameter (theme,
 *                                  // accent, font, lang, ...)
 *     zoom: <number>               // optional wrapper-level magnification,
 *                                  // 0 < zoom <= 4; applied to the iframe
 *                                  // by current.html, not forwarded
 *   }
 *
 * Plain <script> tags are used rather than fetch()/import so the page
 * keeps working when opened directly from disk over file://, where
 * cross-origin requests for local files are blocked — the same method
 * as translations/registry.js and the spec.<lang>.js files.
 */
(function (registry) {
  "use strict";

  registry.register({
    name: "theme-openai.html",
    theme: "dark",
    font: "roboto",
    highlight: "#AC43D9",
    zoom: 1
  });
})(window.PlusAICurrentThemeRegistry);
