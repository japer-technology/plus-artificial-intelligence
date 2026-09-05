/*!
 * +AI Specification — engine (src/app.js)
 * Extracted from the original index.html application script. Theme-pack
 * machinery is layered on top of the original language/font/accent logic;
 * every original behaviour is preserved.
 */
    const DEFAULT_ACCENT = "#AC43D9";
    const DEFAULT_EXAMPLE_NAME = "Eric Mourant";
    const DEFAULT_EXAMPLE_COMPANY = "JAPER Technology";

    // ---------------------------------------------------------------- themes
    // Theme packs mirror the language mechanism: packs/registry.js registers
    // each pack, and the engine selects one the same way it selects a
    // language. The default pack is baked into the build (decision D1:
    // sci-fi-1). "neutral" is the accessibility-floor plain view — the
    // fallback for a missing or broken pack, always reachable.
    const themeRegistry = window.PlusAISpecThemes || null;
    const DEFAULT_THEME = "sci-fi-1";
    const NEUTRAL_THEME = "neutral";

    // The sha256 content hash of the canonical specification bytes, baked in
    // by the build (specification-versioning-and-hashing). Empty when absent.
    const SPEC_SHA256 = "__SPEC_SHA256__";

    // Pack behaviour scripts self-register here: packs/<code>/behaviour.js is
    // a plain script assigning a function; the engine invokes it on pack
    // activation and its returned cleanup (if any) on deactivation.
    const packScripts = window.PlusAISpecPackScripts =
      window.PlusAISpecPackScripts || {};
    const supportedLanguages = [
      "en", "ar", "bn", "fil", "fr", "de", "ha", "hi", "id", "ja", "ko", "zh",
      "mr", "fa", "pt", "pa", "ru", "es", "sw", "ta", "te", "th", "tr", "ur", "vi",
      "am", "yue", "nl", "el", "gu", "he", "it", "jv", "kn", "ms", "ml", "ps", "pl", "ro", "uk"
    ];

    // The language shown when nothing more specific is available. Naming it
    // once keeps the fallback behaviour explicit instead of implicit.
    const FALLBACK_LANGUAGE = "en";

    // Browsers occasionally still report legacy ISO 639 codes (RFC 5646
    // deprecations). Each means the same language as its modern replacement,
    // so accept them rather than falling through to the English fallback.
    const LEGACY_LANGUAGE_ALIASES = {
      iw: "he",   // Hebrew
      in: "id",   // Indonesian
      tl: "fil",  // Filipino (Tagalog)
      mo: "ro"    // Moldavian → Romanian
    };

    const RIGHT_TO_LEFT_LANGUAGES = ["ar", "fa", "ur", "he", "ps"];

    // Typography. The Google fonts offered by the font dropdown, in
    // alphabetical order. DEFAULT_FONT is the face the site ships with — the
    // "Current Font" option that stays pinned at the top of the list.
    // FONT_OPTIONS is mutable: a pack may declare its own list (some packs
    // add display faces such as Antonio, Rajdhani or Press Start 2P), and
    // the engine rebuilds the dropdown when the pack changes.
    const DEFAULT_FONT = "Inter";
    const BASE_FONT_OPTIONS = [
      "Alegreya", "Arimo", "Assistant", "Cairo", "Catamaran", "Cormorant Garamond",
      "EB Garamond", "Exo 2", "Frank Ruhl Libre", "Heebo", "IBM Plex Sans", "Inter",
      "Jost", "Jura", "Lato", "Libre Baskerville", "Lora", "Manrope", "Merriweather",
      "Montserrat", "Mukta", "Noto Sans", "Noto Serif", "Nunito Sans", "Open Sans",
      "Oswald", "Playfair Display", "Poppins", "PT Sans", "Raleway", "Roboto",
      "Roboto Condensed", "Roboto Slab", "Rubik", "Source Sans 3", "Spectral",
      "Tinos", "Ubuntu", "Work Sans"
    ];
    let FONT_OPTIONS = BASE_FONT_OPTIONS.slice();

    // The per-script Noto fallback chain belongs to the translation layer
    // (accessibility floor: typography follows the language, never the
    // theme). Every pack font stack is forced to end in this chain.
    const SCRIPT_FALLBACK_CHAIN =
      `ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, ` +
      `"Noto Sans", "Noto Sans Arabic", "Noto Sans Hebrew", "Noto Sans Bengali", ` +
      `"Noto Sans Gujarati", "Noto Sans Gurmukhi", "Noto Sans Tamil", "Noto Sans Telugu", ` +
      `"Noto Sans Kannada", "Noto Sans Malayalam", "Noto Sans Thai", "Noto Sans Ethiopic", ` +
      `"Noto Sans SC", "Noto Sans JP", "Noto Sans KR", sans-serif`;

    // Every applied stack ends in the same international fallback chain: the
    // system faces first, then per-script Noto Sans families (loaded by the
    // second stylesheet in the head) so all 40 site languages render even on
    // systems with no native coverage for their script. The CJK families only
    // resolve once the third stylesheet is injected for a CJK language.
    // Kept in sync with --font-stack in the default pack stylesheet.
    const DEFAULT_FONT_STACK = `"${DEFAULT_FONT}", ${SCRIPT_FALLBACK_CHAIN}`;

    const CJK_LANGUAGES = new Set(["zh", "ja", "ko", "yue"]);
    const CJK_FONTS_URL =
      "https://fonts.googleapis.com/css2?family=Noto+Sans+SC:wght@400;700" +
      "&family=Noto+Sans+JP:wght@400;700&family=Noto+Sans+KR:wght@400;700&display=swap";

    const specTranslations = window.PlusAISpecTranslations || null;

    // Interface chrome, the "not translated" notice and each language's endonym
    // now ship inside translations/spec.<code>.js alongside the specification
    // body, so all of a language's content lives in one file. English is the
    // fallback source for any language whose file does not carry these fields.
    const englishEntry = specTranslations?.get("en") ?? null;
    const englishInterfaceCopy = englishEntry?.interfaceCopy ?? {};
    const englishNotice = englishEntry?.untranslatedNotice ?? {};

    const interfaceCopy = {};
    const untranslatedNotice = {};
    const LANGUAGE_ENDONYMS = {};

    for (const language of supportedLanguages) {
      const entry = specTranslations?.get(language) ?? null;
      interfaceCopy[language] = entry?.interfaceCopy
        ? { ...englishInterfaceCopy, ...entry.interfaceCopy }
        : { ...englishInterfaceCopy };
      untranslatedNotice[language] = entry?.untranslatedNotice
        ? { ...englishNotice, ...entry.untranslatedNotice }
        : { ...englishNotice };
      LANGUAGE_ENDONYMS[language] = entry?.endonym || language;
    }

    // Specification bodies come from the translation registry rather than being
    // inlined. A language with no reviewed translation falls back to English and
    // is recorded so the interface can say so out loud.
    const englishSections = specTranslations?.get("en")?.sections ?? [];
    const englishEnd = specTranslations?.get("en")?.end ?? "";
    const specificationCopy = {};
    const specificationEndCopy = {};
    const untranslatedLanguages = new Set();

    for (const language of supportedLanguages) {
      const entry = specTranslations?.get(language) ?? null;

      if (entry && entry.status === "reviewed") {
        specificationCopy[language] = entry.sections;
        specificationEndCopy[language] = entry.end ?? englishEnd;
      } else {
        untranslatedLanguages.add(language);
        specificationCopy[language] = englishSections;
        specificationEndCopy[language] = englishEnd;
      }
    }

    if (!englishSections.length) {
      console.error(
        "[+AI] The English specification failed to load. Check that translations/registry.js " +
        "and translations/spec.en.js are present next to this file."
      );
    }

    for (const problem of specTranslations?.problems() ?? []) {
      console.warn("[+AI] " + problem);
    }

    const elements = {
      languageSelect: document.querySelector("#languageSelect"),
      themeSelect: document.querySelector("#themeSelect"),
      themeToggle: document.querySelector("#themeToggle"),
      headerAccent: document.querySelector("#headerAccent"),
      fontSelect: document.querySelector("#fontSelect"),
      specContent: document.querySelector("#specContent"),
      tocList: document.querySelector("#tocList"),
      translationNote: document.querySelector("#translationNote"),
      untranslatedNote: document.querySelector("#untranslatedNote"),
      untranslatedBadge: document.querySelector("#untranslatedBadge"),
      untranslatedHeadline: document.querySelector("#untranslatedHeadline"),
      untranslatedDetail: document.querySelector("#untranslatedDetail"),
      packFallbackNote: document.querySelector("#packFallbackNote"),
      packFallbackBadge: document.querySelector("#packFallbackBadge"),
      packFallbackHeadline: document.querySelector("#packFallbackHeadline"),
      packFallbackDetail: document.querySelector("#packFallbackDetail"),
      specFingerprint: document.querySelector("#specFingerprint"),
      announcement: document.querySelector("#announcement"),
      readingProgress: document.querySelector("#readingProgress"),
      metaDescription: document.querySelector('meta[name="description"]'),
      themeColour: document.querySelector('meta[name="theme-color"]')
    };

    let currentLanguage = "en";
    let currentTheme = null;
    let activePack = null;   // { code, pack, decorations, cleanup }
    let userToggledMode = false;
    let fallbackReason = null; // the requested pack code when the neutral view stands in
    let sectionObserver;
    const pageParameters = readPageParameters();

    function readPreference(key) {
      try {
        return localStorage.getItem(key);
      } catch {
        return null;
      }
    }

    function savePreference(key, value) {
      try {
        localStorage.setItem(key, value);
      } catch {
        // The application remains fully usable when storage is unavailable.
      }
    }

    function readFirstParameter(parameters, names) {
      for (const name of names) {
        if (parameters.has(name)) return parameters.get(name);
      }
      return null;
    }

    // Reduces a language tag to its base language, using Intl.Locale when it
    // exists so case, scripts, regions and legacy separators ("zh_Hant",
    // "EN-us") are canonicalised rather than guessed at. Language and locale
    // are deliberately not conflated: en-AU, en-US and en-GB all resolve to
    // "en" because this site ships language-level translations only and
    // applies no regional conventions (dates, currency, spelling,
    // measurements, formatting).
    function baseLanguageOf(tag) {
      if (typeof tag !== "string") return null;
      const value = tag.trim();
      if (!value || value === "*") return null;
      try {
        if (typeof Intl !== "undefined" && Intl.Locale) {
          return new Intl.Locale(value).language || null;
        }
      } catch {
        // Unparseable tag: fall through to the lenient parser.
      }
      const match = value.toLowerCase().match(/^([a-z]{2,3})/);
      return match ? match[1] : null;
    }

    function normalizeLanguage(language) {
      const baseLanguage = baseLanguageOf(language);
      const resolved = LEGACY_LANGUAGE_ALIASES[baseLanguage] || baseLanguage;
      return supportedLanguages.includes(resolved) ? resolved : null;
    }

    function normalizeAccent(colour) {
      const value = colour?.trim().replace(/^#/, "") || "";
      if (/^[0-9A-F]{3}$/i.test(value)) {
        return `#${[...value].map((character) => character.repeat(2)).join("").toUpperCase()}`;
      }
      return /^[0-9A-F]{6}$/i.test(value)
        ? `#${value.toUpperCase()}`
        : DEFAULT_ACCENT;
    }

    // Resolves a requested font name to one of the 39 offered families.
    // URL separators ("cormorant-garamond", "Open_Sans", "roboto+condensed")
    // are accepted, matching is case-insensitive, and "current"/"default"
    // mean the site's own face. An empty string is the "Current Font"
    // option; anything unrecognised resolves to null so callers can fall
    // back safely.
    function normalizeFont(value) {
      if (typeof value !== "string") return null;
      const normalized = value.trim().replace(/[-_+]+/g, " ").replace(/\s+/g, " ").toLowerCase();
      if (!normalized || normalized === "current" || normalized === "default") return "";
      return FONT_OPTIONS.find((font) => font.toLowerCase() === normalized) ?? null;
    }

    // The active pack's own default stack (its leading face + the per-script
    // chain); falls back to the default pack's stack before any pack mounts.
    function activeFontStack() {
      const pack = themeRegistry?.get(currentTheme) ?? null;
      if (pack?.tokens?.fontStack) return pack.tokens.fontStack;
      return DEFAULT_FONT_STACK;
    }

    function fontStackFor(font) {
      return font ? `"${font}", ${activeFontStack()}` : activeFontStack();
    }

    function applyFont(font) {
      const resolved = normalizeFont(font) ?? "";
      const stack = fontStackFor(resolved);
      document.documentElement.style.setProperty("--font-stack", stack);
      elements.fontSelect.value = resolved;
      // The closed <select> does not take the selected <option>'s face in
      // every browser, so point the control itself at the active stack.
      elements.fontSelect.style.fontFamily = stack;
      return resolved;
    }

    function setFont(font, persist = true) {
      const resolved = applyFont(font);
      if (persist) savePreference("plus-ai-font", resolved);
      if (resolved) {
        const message = interfaceCopy[currentLanguage].fontChanged || "Font changed to {font}.";
        elements.announcement.textContent = message.replace("{font}", resolved);
      }
    }

    function normalizeExampleParameter(value) {
      const normalizedValue = value?.replace(/\s+/g, " ").trim();
      return normalizedValue || null;
    }

    function readPageParameters() {
      const parameters = new URLSearchParams(window.location.search);
      const requestedTheme =
        (readFirstParameter(parameters, ["theme", "mode"]) || "").trim().toLowerCase();

      // ?theme=<pack code> selects a theme pack (like ?lang= selects a
      // language). The legacy values "light"/"dark" keep their old meaning
      // as mode values when they do not name a registered pack, and ?mode=
      // remains the explicit light/dark override. A theme value that is
      // neither a pack nor a mode is a broken request: the engine renders
      // the neutral view with a visible notice rather than silently
      // ignoring it.
      const requestedPack = themeRegistry?.has(requestedTheme) ? requestedTheme : null;
      const requestedMode = requestedTheme === "light" || requestedTheme === "dark"
        ? requestedTheme
        : parameters.has("light") ? "light" : parameters.has("dark") ? "dark" : null;
      const brokenPack =
        requestedTheme && !requestedPack && requestedTheme !== "light" && requestedTheme !== "dark"
          ? requestedTheme
          : null;

      const suppliedName = normalizeExampleParameter(parameters.get("name"));
      const suppliedCompanyName = normalizeExampleParameter(
        readFirstParameter(parameters, ["companyname", "company"])
      );
      const hasCustomExamples = suppliedName || suppliedCompanyName;
      const exampleName = suppliedName || suppliedCompanyName || DEFAULT_EXAMPLE_NAME;
      const exampleCompanyName = hasCustomExamples
        ? suppliedName && suppliedCompanyName && suppliedName !== suppliedCompanyName
          ? suppliedCompanyName
          : null
        : DEFAULT_EXAMPLE_COMPANY;

      return {
        pack: requestedPack,
        mode: requestedMode,
        brokenPack,
        accent: normalizeAccent(readFirstParameter(parameters, [
          "highlight",
          "highlightcolour",
          "highlightcolor",
          "accent",
          "colour",
          "color"
        ])),
        font: normalizeFont(parameters.get("font")),
        language: normalizeLanguage(readFirstParameter(parameters, ["language", "lang"])),
        exampleName,
        exampleCompanyName
      };
    }

    // The languages the browser reports, in preference order. navigator.languages
    // (Accept-Language) is a preference list, not proof of the user's language:
    // a device may be shared, the browser may be configured by someone else, or
    // "en" may merely be its last-resort fallback. Legacy single-value
    // properties are appended so very old browsers still get a fair attempt.
    function browserLanguageList() {
      const list = navigator.languages?.length ? navigator.languages.slice() : [];
      for (const tag of [navigator.language, navigator.userLanguage, navigator.browserLanguage]) {
        if (typeof tag === "string" && tag.trim() && !list.includes(tag)) list.push(tag);
      }
      return list;
    }

    // Finds the first browser language the site can serve. The full tag is
    // tried before its base language, so a future regional variant (e.g.
    // "pt-br" added to supportedLanguages) starts working with no further
    // changes.
    function firstSupportedBrowserLanguage(browserLanguages) {
      for (const tag of browserLanguages || []) {
        if (typeof tag !== "string") continue;
        const value = tag.trim();
        if (!value || value === "*") continue;

        const canonical = baseLanguageOf(value);
        const fullTag = canonical ? value.toLowerCase().replace(/_/g, "-") : "";
        if (fullTag && supportedLanguages.includes(fullTag)) return { language: fullTag, tag };
        const baseLanguage = normalizeLanguage(canonical);
        if (baseLanguage) return { language: baseLanguage, tag };
      }
      return null;
    }

    // Resolves the language to show on load, most specific preference first:
    //
    //   1. ?lang= / ?language= URL parameter — an explicit per-visit request;
    //      it applies to this visit only and never overwrites a stored choice.
    //   2. The saved "plus-ai-language" preference — an explicit choice the
    //      user made here before. Explicit always beats automatic: detection
    //      is skipped entirely once this exists, so a shared device, stale
    //      browser settings or a different Accept-Language list can never
    //      silently override the user's decision.
    //   3. The browser's ordered preference list — a hint only.
    //   4. FALLBACK_LANGUAGE — the documented fallback when nothing matches.
    //
    // Steps 3-4 are never persisted, so each visit re-reads the (possibly
    // updated) browser configuration. The resolved language is applied to
    // <html lang>/<html dir> before the specification renders, which is what
    // screen readers, translation tools and text-to-speech rely on. Detection
    // is client-side only: no URLs redirect, no hreflang variants are
    // emitted, and crawlers without JavaScript still receive the canonical
    // English content, so indexing and search interpretation are unaffected.
    function detectLanguage(urlLanguage) {
      if (urlLanguage) {
        return { language: urlLanguage, source: "url", checked: [urlLanguage] };
      }

      const saved = normalizeLanguage(readPreference("plus-ai-language"));
      if (saved) {
        return { language: saved, source: "saved", checked: ["plus-ai-language"] };
      }

      const browserLanguages = browserLanguageList();
      const matched = firstSupportedBrowserLanguage(browserLanguages);
      if (matched) {
        return { language: matched.language, source: "browser", checked: browserLanguages };
      }

      return { language: FALLBACK_LANGUAGE, source: "fallback", checked: browserLanguages };
    }

    function formatTitle(title) {
      return title.replace(/\.\s+(?=\S)/g, ".\n");
    }

    function applyInterfaceLanguage(language) {
      // A pack may override interface chrome per language (flavour voice, as
      // the-borg pack does); base chrome always remains the fallback.
      const packOverrides = themeRegistry?.get(currentTheme)?.interfaceCopyOverrides || {};
      const override = { ...(packOverrides.en || {}), ...(packOverrides[language] || {}) };
      const copy = { ...interfaceCopy[language], ...override };
      document.documentElement.lang = language;
      document.documentElement.dir =
        RIGHT_TO_LEFT_LANGUAGES.includes(language) ? "rtl" : "ltr";
      document.title = copy.documentTitle;
      elements.metaDescription.setAttribute("content", copy.description);

      document.querySelectorAll("[data-text]").forEach((element) => {
        const key = element.dataset.text;
        if (copy[key]) element.textContent = copy[key];
      });

      document.querySelectorAll("[data-html]").forEach((element) => {
        const key = element.dataset.html;
        if (copy[key]) element.innerHTML = copy[key];
      });

      document.querySelectorAll("[data-title]").forEach((element) => {
        const key = element.dataset.title;
        if (copy[key]) element.textContent = formatTitle(copy[key]);
      });

      document.querySelector(".skip-link").textContent = copy.skip;
      elements.languageSelect.setAttribute("aria-label", copy.languageAria);
      elements.fontSelect.setAttribute("aria-label", copy.fontAria);
      elements.themeSelect.setAttribute("aria-label", copy.themePackAria);
      elements.headerAccent.setAttribute("aria-label", copy.highlightAria);
      updateThemeControl(copy);

      elements.translationNote.hidden = !copy.translationNote;
      elements.translationNote.textContent = copy.translationNote;

      updateUntranslatedNotice(language);
      updatePackFallbackNotice(language);
      updateThemeOptionLabels(language);
      updateNavLabels(language);
      applyFlavour(currentTheme, language);
    }

    function updateUntranslatedNotice(language) {
      const isUntranslated = untranslatedLanguages.has(language) && language !== "en";
      elements.untranslatedNote.hidden = !isUntranslated;

      if (!isUntranslated) {
        elements.untranslatedHeadline.textContent = "";
        elements.untranslatedDetail.textContent = "";
        return;
      }

      // A pack may re-voice the notice (flavour voice); base copy is the fallback.
      const packNoticeOverrides =
        themeRegistry?.get(currentTheme)?.untranslatedNoticeOverrides || {};
      const notice = {
        ...(untranslatedNotice[language] || untranslatedNotice.en),
        ...(packNoticeOverrides.en || {}),
        ...(packNoticeOverrides[language] || {})
      };
      const endonym = LANGUAGE_ENDONYMS[language] || language;

      elements.untranslatedBadge.textContent = notice.badge;
      elements.untranslatedHeadline.textContent = notice.headline;
      elements.untranslatedDetail.textContent = `${notice.detail} (${endonym})`;
      // The notice text may be in a different script from the page direction,
      // so let the browser resolve it per element.
      elements.untranslatedNote.setAttribute("dir", "auto");
    }

    // ------------------------------------------------------- theme machinery
    // Resolves a requested theme code to a registered pack, or null.
    function normalizeTheme(code) {
      if (typeof code !== "string") return null;
      const value = code.trim().toLowerCase();
      return themeRegistry?.has(value) ? value : null;
    }

    // The pack's display name for a language: pack name[lang] → name.en → code.
    function packName(pack, language) {
      const names = pack?.name || {};
      return names[language] || names.en || pack?.packId || "";
    }

    // Flavour resolution (flavour-text-localisation): per-string fallback
    // order reviewed local → community local → neutral; machine flavour
    // renders only with a visible label. Returns { text, machine }.
    function resolveFlavour(pack, id, language) {
      if (!pack?.flavour) return { text: "", machine: false };
      const entry = (pack.flavour.flavourStrings || []).find((string) => string.id === id);
      if (!entry) return { text: "", machine: false };
      const local = (entry.localised || []).find((item) => item.lang === language);
      if (local && (local.status === "reviewed" || local.status === "community")) {
        return { text: local.text || "", machine: false };
      }
      if (local && local.status === "machine") {
        return { text: local.text || "", machine: true };
      }
      return { text: entry.neutral || "", machine: false };
    }

    // Re-resolves every flavour node in the document for the active pack.
    // Flavour nodes carry data-flavour=<id>; machine nodes additionally get
    // the visible "machine-translated flavour" label (base interfaceCopy).
    function applyFlavour(themeCode, language) {
      const pack = themeRegistry?.get(themeCode) ?? null;
      document.querySelectorAll("[data-flavour]").forEach((node) => {
        const id = node.dataset.flavour;
        const resolved = resolveFlavour(pack, id, language);
        node.textContent = resolved.text;
        node.classList.toggle("flavour-machine", resolved.machine);
        const existingLabel =
          node.nextElementSibling?.classList.contains("flavour-machine-label")
            ? node.nextElementSibling
            : null;
        if (resolved.machine) {
          if (!existingLabel) {
            const label = document.createElement("span");
            label.className = "flavour-machine-label";
            label.setAttribute("data-text", "flavourMachineLabel");
            label.textContent = interfaceCopy[language].flavourMachineLabel || "machine-translated flavour";
            node.after(label);
          } else {
            existingLabel.textContent = interfaceCopy[language].flavourMachineLabel || "machine-translated flavour";
          }
        } else if (existingLabel) {
          existingLabel.remove();
        }
      });
    }

    // Converts decoration HTML to nodes, replacing {{flavour:<id>}}
    // placeholders with resolvable <span data-flavour="<id>"> nodes.
    function decorationNodes(html) {
      const template = document.createElement("template");
      template.innerHTML = html.replace(/\{\{flavour:([a-zA-Z0-9._-]+)\}\}/g,
        '<span data-flavour="$1"></span>');
      return [...template.content.childNodes];
    }

    // Applies a pack's decorations (presentational DOM ops only). Returns a
    // list of undo records used by removeDecorations(). Ops are refused if
    // their anchor resolves inside #specContent — no theme may touch
    // normative content.
    function applyDecorations(pack) {
      const records = [];
      for (const decoration of pack?.decorations || []) {
        const anchor = document.querySelector(decoration.anchor);
        if (!anchor) {
          console.warn(`[+AI] Theme "${pack.packId}" decoration anchor "${decoration.anchor}" not found.`);
          continue;
        }
        if (anchor.closest && anchor.closest("#specContent")) {
          console.warn(`[+AI] Theme "${pack.packId}" decoration targeting #specContent refused.`);
          continue;
        }
        const op = decoration.op;
        // The engine owns the interactive controls: legacy pages re-voiced
        // their labels statically, but at runtime the engine always rebuilt
        // the dropdowns and overwrote those labels, so ops that replace or
        // remove the controls are runtime-dead and would break the engine's
        // element references. Refuse them.
        const ENGINE_CONTROLS = [
          "#languageSelect", "#fontSelect", "#themeSelect",
          ".language-control", ".font-control", ".theme-control",
          "#themeToggle", "#headerAccent"
        ];
        if (
          ["replaceWith", "remove", "text"].includes(op) &&
          ENGINE_CONTROLS.includes(decoration.anchor)
        ) {
          console.warn(`[+AI] Theme "${pack.packId}" decoration ${op} ${decoration.anchor} refused (engine-owned control).`);
          continue;
        }
        const html = decoration.html ? decorationNodes(decoration.html) : [];
        if (op === "insertBefore") {
          anchor.before(...html);
          records.push({ type: "insert", nodes: html });
        } else if (op === "insertAfter") {
          anchor.after(...html);
          records.push({ type: "insert", nodes: html });
        } else if (op === "prependTo") {
          anchor.prepend(...html);
          records.push({ type: "insert", nodes: html });
        } else if (op === "appendTo") {
          anchor.append(...html);
          records.push({ type: "insert", nodes: html });
        } else if (op === "wrap" || op === "wrapInner") {
          // Wrap must parse before+after as ONE fragment around a slot:
          // insertAdjacentHTML of a bare "<div>" auto-closes it, so the
          // partial-fragment form cannot be used. Flavour placeholders are
          // converted to resolvable spans exactly like other ops.
          const flavourSpan = '<span data-flavour="$1"></span>';
          const beforeHtml = (decoration.before || "").replace(/\{\{flavour:([a-zA-Z0-9._-]+)\}\}/g, flavourSpan);
          const afterHtml = (decoration.after || "").replace(/\{\{flavour:([a-zA-Z0-9._-]+)\}\}/g, flavourSpan);
          const template = document.createElement("template");
          template.innerHTML = beforeHtml + '<span id="__pack_slot__"></span>' + afterHtml;
          const slot = template.content.querySelector("#__pack_slot__");
          if (!slot) {
            console.warn(`[+AI] Theme "${pack.packId}" wrap on "${decoration.anchor}" produced no slot.`);
            continue;
          }
          if (op === "wrap") {
            const previousParent = anchor.parentNode;
            const previousNext = anchor.nextSibling;
            anchor.before(template.content);
            slot.replaceWith(anchor);
            records.push({ type: "unwrap", anchor, previousParent, previousNext });
          } else {
            const children = [...anchor.childNodes];
            anchor.replaceChildren(template.content);
            slot.replaceWith(...children);
            records.push({ type: "unwrapInner", anchor, children });
          }
        } else if (op === "replaceWith") {
          const nodes = decorationNodes(decoration.html || "");
          anchor.replaceWith(...nodes);
          records.push({ type: "replace", anchor, nodes });
        } else if (op === "text") {
          const nodes = decorationNodes(decoration.html || "");
          const originalChildren = [...anchor.childNodes];
          anchor.replaceChildren(...nodes);
          records.push({ type: "text", anchor, originalChildren });
        } else if (op === "remove") {
          anchor.remove();
          records.push({ type: "remove", anchor, parent: anchor.parentNode, next: anchor.nextSibling });
        } else if (op === "setAttribute") {
          const previous = anchor.getAttribute(decoration.name);
          anchor.setAttribute(decoration.name, decoration.value ?? "");
          records.push({ type: "attribute", anchor, name: decoration.name, previous });
        } else if (op === "addClass") {
          const classes = String(decoration.className || "").split(/\s+/).filter(Boolean);
          anchor.classList.add(...classes);
          records.push({ type: "class", anchor, classes });
        } else if (op === "move" || op === "moveAfter") {
          const target = document.querySelector(decoration.target);
          if (!target) {
            console.warn(`[+AI] Theme "${pack.packId}" move target "${decoration.target}" not found.`);
            continue;
          }
          if (target.closest && target.closest("#specContent")) continue;
          const previousParent = target.parentNode;
          const previousNext = target.nextSibling;
          if (op === "moveAfter") anchor.after(target);
          else anchor.append(target);
          records.push({ type: "move", target, previousParent, previousNext });
        }
      }
      return records;
    }

    function removeDecorations(records) {
      for (const record of [...records].reverse()) {
        if (record.type === "insert") {
          record.nodes.forEach((node) => node.remove());
        } else if (record.type === "unwrap") {
          const wrapper = record.anchor.parentNode;
          record.previousParent.insertBefore(record.anchor, record.previousNext);
          wrapper?.remove();
        } else if (record.type === "unwrapInner") {
          record.anchor.replaceChildren(...record.children);
        } else if (record.type === "replace") {
          record.nodes.forEach((node) => node.replaceWith(record.anchor));
        } else if (record.type === "text") {
          record.anchor.replaceChildren(...record.originalChildren);
        } else if (record.type === "remove") {
          record.parent.insertBefore(record.anchor, record.next);
        } else if (record.type === "attribute") {
          if (record.previous === null) record.anchor.removeAttribute(record.name);
          else record.anchor.setAttribute(record.name, record.previous);
        } else if (record.type === "class") {
          record.anchor.classList.remove(...record.classes);
        } else if (record.type === "move") {
          record.previousParent.insertBefore(record.target, record.previousNext);
        }
      }
    }

    // Mounts a pack's stylesheet (a <style media="not all"> block in the
    // single-file build, a <link media="not all"> in index-fat.html).
    function setPackStylesheetActive(code, active) {
      const node = document.getElementById(`theme-${code}`);
      if (node) node.media = active ? "all" : "not all";
    }

    function mountPack(code) {
      const pack = themeRegistry.get(code);
      setPackStylesheetActive(code, true);
      document.body.classList.add(`pack-${code}`);

      // Tokens: accent and font defaults come from the pack; the font
      // dropdown is rebuilt from the pack's own option list. Decorations
      // apply BEFORE the dropdown rebuild: some legacy pages replace the
      // font control wholesale, and the engine must win that fight.
      applyAccent(pack.tokens.accent);
      FONT_OPTIONS = pack.tokens.fontOptions.length ? pack.tokens.fontOptions.slice() : BASE_FONT_OPTIONS.slice();
      if (!FONT_OPTIONS.includes(pack.tokens.font) && pack.tokens.font) {
        FONT_OPTIONS = [pack.tokens.font, ...FONT_OPTIONS];
      }

      const records = applyDecorations(pack);
      applyFlavour(code, currentLanguage);

      buildFontOptions();
      applyFont(pack.tokens.font);

      const cleanupFns = [];
      const languageHooks = [];
      const api = {
        code,
        pack,
        elements,
        getLanguage: () => currentLanguage,
        applyFlavour: (language = currentLanguage) => applyFlavour(code, language),
        onCleanup: (fn) => { if (typeof fn === "function") cleanupFns.push(fn); },
        onLanguageChange: (fn) => { if (typeof fn === "function") languageHooks.push(fn); }
      };

      let scriptCleanup = null;
      if (pack.script && typeof packScripts[code] === "function") {
        scriptCleanup = packScripts[code](api);
      }

      return {
        code,
        pack,
        decorations: records,
        cleanup: () => {
          cleanupFns.forEach((fn) => { try { fn(); } catch (error) { console.warn("[+AI] pack cleanup failed", error); } });
          if (typeof scriptCleanup === "function") {
            try { scriptCleanup(); } catch (error) { console.warn("[+AI] pack script cleanup failed", error); }
          }
        },
        languageHooks
      };
    }

    function unmountPack(state) {
      if (!state) return;
      if (typeof state.cleanup === "function") {
        try { state.cleanup(); } catch (error) { console.warn("[+AI] pack cleanup failed", error); }
      }
      removeDecorations(state.decorations);
      document.body.classList.remove(`pack-${state.pack.packId}`);
      setPackStylesheetActive(state.pack.packId, false);
    }

    // The visible notice for a missing or broken pack (theme-engine-and-packs:
    // graceful fallback to the neutral route with a visible notice).
    function updatePackFallbackNotice(language) {
      const copy = interfaceCopy[language];
      elements.packFallbackNote.hidden = fallbackReason === null;
      if (fallbackReason === null) return;
      elements.packFallbackBadge.textContent = copy.packFallbackBadge || "Theme unavailable";
      elements.packFallbackHeadline.textContent = copy.packFallbackHeadline || "";
      elements.packFallbackDetail.textContent =
        (copy.packFallbackDetail || "").replace("{theme}", fallbackReason);
      elements.packFallbackNote.setAttribute("dir", "auto");
    }

    function updateThemeOptionLabels(language) {
      [...elements.themeSelect.options].forEach((option) => {
        const pack = themeRegistry.get(option.value);
        if (pack) option.textContent = packName(pack, language);
      });
    }

    function buildThemeOptions() {
      const fragment = document.createDocumentFragment();
      for (const code of themeRegistry?.codes() ?? []) {
        const option = document.createElement("option");
        option.value = code;
        option.textContent = packName(themeRegistry.get(code), currentLanguage);
        fragment.append(option);
      }
      elements.themeSelect.replaceChildren(fragment);
    }

    function setTheme(code, { persist = true, source = "default" } = {}) {
      const resolved = normalizeTheme(code);
      const valid = resolved ?? NEUTRAL_THEME;

      // A request that names no registered pack (and is not the neutral
      // pack itself) is a broken request: the neutral view stands in with
      // a visible notice naming what failed.
      fallbackReason =
        valid === NEUTRAL_THEME && resolved === null && String(code).toLowerCase() !== NEUTRAL_THEME
          ? String(code).toLowerCase()
          : null;
      currentTheme = valid;
      elements.themeSelect.value = valid;
      unmountPack(activePack);
      activePack = mountPack(valid);

      // A pack carries its own light/dark starting point unless the visitor
      // chose one explicitly for this visit (?mode= / ?theme=light|dark) or
      // via the toggle before a switch.
      if (pageParameters.mode) {
        document.documentElement.dataset.theme = pageParameters.mode;
      } else if (!userToggledMode && themeRegistry.has(valid)) {
        document.documentElement.dataset.theme = themeRegistry.get(valid).tokens.defaultMode;
      }
      updateThemeControl();

      if (persist && valid !== NEUTRAL_THEME) savePreference("plus-ai-theme", valid);
      document.documentElement.dataset.themeSource = source;
      updatePackFallbackNotice(currentLanguage);
    }

    // ------------------------------------------------------------ super menu
    // The wordmark is repurposed as the super menu: the shared-project-
    // navigation route block (the eight destination groups) plus the site's
    // other documents and tools, rendered from the versioned navigation
    // manifest (src/nav.json → window.PlusAISpecNav). Labels come from the
    // translation mechanism with per-key English fallback; a theme may
    // restyle the menu but never remove or reword the routes.
    const navigationManifest = window.PlusAISpecNav || null;

    function navLabel(key, language) {
      return interfaceCopy[language][key] || interfaceCopy.en[key] || key;
    }

    // The navigation manifest declares the canonical index.html URLs; when
    // the page actually being viewed is a development variant (index-fat),
    // those links are rewritten to stay inside the current document so the
    // menu never throws the developer into the single-file build.
    function navUrl(url) {
      const self = (window.location.pathname.split("/").pop() || "index.html");
      if (self === "index.html" || !self.endsWith(".html")) return url;
      return url.startsWith("index.html") ? url.replace(/^index\.html/, self) : url;
    }

    function buildSuperMenu() {
      const wordmark = document.querySelector(".wordmark");
      if (!wordmark) return;

      wordmark.setAttribute("role", "button");
      wordmark.setAttribute("tabindex", "0");
      wordmark.setAttribute("aria-expanded", "false");
      wordmark.setAttribute("aria-haspopup", "true");
      wordmark.setAttribute("aria-controls", "superMenu");
      // The href stays "#top": without JavaScript the wordmark still returns
      // to the top of the page instead of pointing at a hidden menu.

      const menu = document.createElement("nav");
      menu.id = "superMenu";
      menu.className = "super-menu";
      menu.setAttribute("aria-label", navLabel("navMenuAria", currentLanguage));
      menu.hidden = true;

      const site = document.createElement("div");
      site.className = "super-menu-group";
      const siteTitle = document.createElement("h2");
      siteTitle.textContent = navLabel("navSectionSite", currentLanguage);
      site.append(siteTitle);
      for (const item of navigationManifest?.site ?? []) {
        const link = document.createElement("a");
        link.href = navUrl(item.url);
        link.dataset.labelKey = item.labelKey;
        link.textContent = navLabel(item.labelKey, currentLanguage);
        site.append(link);
      }
      menu.append(site);

      const project = document.createElement("div");
      project.className = "super-menu-group";
      const projectTitle = document.createElement("h2");
      projectTitle.textContent = navLabel("navSectionProject", currentLanguage);
      project.append(projectTitle);
      for (const group of navigationManifest?.groups ?? []) {
        const link = document.createElement("a");
        link.href = navUrl(group.url);
        link.dataset.labelKey = group.labelKey;
        link.textContent = navLabel(group.labelKey, currentLanguage);
        project.append(link);
      }
      menu.append(project);

      wordmark.after(menu);
      return menu;
    }

    let superMenu = null;

    function updateNavLabels(language) {
      superMenu?.setAttribute("aria-label", navLabel("navMenuAria", language));
      superMenu?.querySelectorAll("[data-label-key]").forEach((link) => {
        link.textContent = navLabel(link.dataset.labelKey, language);
      });
      superMenu?.querySelectorAll("h2").forEach((heading, index) => {
        heading.textContent = navLabel(index === 0 ? "navSectionSite" : "navSectionProject", language);
      });
    }

    function toggleSuperMenu(open) {
      if (!superMenu) return;
      const wordmark = document.querySelector(".wordmark");
      const shouldOpen = open === undefined ? superMenu.hidden : open;
      superMenu.hidden = !shouldOpen;
      wordmark?.setAttribute("aria-expanded", String(shouldOpen));
      if (shouldOpen) {
        superMenu.querySelector("a")?.focus();
      } else {
        wordmark?.focus();
      }
    }

    // --------------------------------------------------- theme pack helpers
    // (helpers used by setTheme above continue below)

    function personalizeExamples(root) {
      if (!pageParameters.exampleCompanyName) {
        root.querySelectorAll("[data-company-example]").forEach((element) => element.remove());
      }

      const textNodes = [];
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) textNodes.push(walker.currentNode);

      for (const node of textNodes) {
        const exampleName = node.parentElement.closest("[data-json-example]")
          ? JSON.stringify(pageParameters.exampleName).slice(1, -1)
          : pageParameters.exampleName;
        node.nodeValue = node.nodeValue.replace(
          /Eric Mourant|JAPER Technology/g,
          (example) => example === DEFAULT_EXAMPLE_NAME
            ? exampleName
            : pageParameters.exampleCompanyName || pageParameters.exampleName
        );
      }
    }

    function renderSpecification(language) {
      if (sectionObserver) sectionObserver.disconnect();

      const sections = specificationCopy[language] ?? englishSections;
      const fragment = document.createDocumentFragment();
      const tocFragment = document.createDocumentFragment();

      // A translated body may be shown while the page direction is RTL (or the
      // reverse, when falling back to English). Tag the article so the browser
      // lays each out correctly.
      const bodyLanguage = untranslatedLanguages.has(language) ? "en" : language;
      elements.specContent.lang = bodyLanguage;
      elements.specContent.dir =
        RIGHT_TO_LEFT_LANGUAGES.includes(bodyLanguage) ? "rtl" : "ltr";

      for (const section of sections) {
        const sectionElement = document.createElement("section");
        sectionElement.className = "spec-section";
        sectionElement.id = `section-${section.number}`;
        sectionElement.dataset.section = section.number;
        // A pack may present section numbers differently (e.g. the DEC
        // manual's "1.0"/"1-1"); the canonical number itself never changes.
        // Custom formats receive the raw number; the default renders the
        // zero-padded form ("01") as before.
        const pack = themeRegistry?.get(currentTheme) ?? null;
        const paddedNumber = section.number.padStart(2, "0");
        const sectionNumber = pack?.numbering?.section
          ? pack.numbering.section.replace("${number}", section.number)
          : paddedNumber;
        const tocNumber = pack?.numbering?.toc
          ? pack.numbering.toc.replace("${number}", section.number)
          : paddedNumber;
        sectionElement.innerHTML = `
          <h3>
            <span class="section-number" aria-hidden="true">${sectionNumber}</span>
            <span>${section.title}</span>
          </h3>
          ${section.body}`;
        personalizeExamples(sectionElement);
        fragment.append(sectionElement);

        const item = document.createElement("li");
        const link = document.createElement("a");
        link.href = `#section-${section.number}`;
        link.innerHTML = `<span class="toc-number">${tocNumber}</span><span>${section.title}</span>`;
        item.append(link);
        tocFragment.append(item);
      }

      const end = document.createElement("div");
      end.className = "spec-end";
      // A pack may re-voice the closing panel (flavour voice); the canonical
      // end stays the fallback. Carried over from legacy pages that did this.
      const packEnd = themeRegistry?.get(currentTheme)?.endOverride || {};
      end.innerHTML = packEnd[bodyLanguage] ?? packEnd.en ??
        (specificationEndCopy[language] ?? englishEnd);
      fragment.append(end);

      elements.specContent.replaceChildren(fragment);
      elements.tocList.replaceChildren(tocFragment);
      observeSections();
    }

    function setLanguage(language, persist = true) {
      const resolvedLanguage = normalizeLanguage(language) || "en";
      currentLanguage = resolvedLanguage;
      elements.languageSelect.value = resolvedLanguage;
      ensureCJKFonts(resolvedLanguage);
      applyInterfaceLanguage(resolvedLanguage);
      renderSpecification(resolvedLanguage);
      if (persist) savePreference("plus-ai-language", resolvedLanguage);
      activePack?.languageHooks.forEach((hook) => {
        try { hook(resolvedLanguage); } catch (error) { console.warn("[+AI] pack language hook failed", error); }
      });
    }

    // The Noto Sans SC/JP/KR stylesheet is far larger than the others, so it
    // is only injected when a language that needs CJK glyphs is actually
    // shown. Once injected it stays (the browser caches it), and only the
    // unicode-ranges the page renders are downloaded.
    let cjkFontsInjected = false;
    function ensureCJKFonts(language) {
      if (cjkFontsInjected || !CJK_LANGUAGES.has(language)) return;
      cjkFontsInjected = true;
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = CJK_FONTS_URL;
      document.head.append(link);
    }

    // Builds the 39 offered fonts beneath the static "Current Font" option.
    // Each entry is labelled in its own face so the open dropdown is a live
    // specimen sheet; the pinned first option is set in the site's own face.
    function buildFontOptions() {
      // Rebuild the whole list: the pinned "Current Font" option first, then
      // the pack's offered families. Called again on every pack switch.
      const current = document.createElement("option");
      current.value = "";
      current.textContent = interfaceCopy[currentLanguage].fontCurrent || "Current Font";
      current.style.fontFamily = activeFontStack();
      elements.fontSelect.replaceChildren(current);

      const fragment = document.createDocumentFragment();
      for (const font of FONT_OPTIONS) {
        const option = document.createElement("option");
        option.value = font;
        option.textContent = font;
        option.style.fontFamily = fontStackFor(font);
        fragment.append(option);
      }
      elements.fontSelect.append(fragment);
    }

    function updateThemeControl(copy = interfaceCopy[currentLanguage]) {
      const isDark = document.documentElement.dataset.theme === "dark";
      elements.themeToggle.querySelector("span").textContent =
        isDark ? copy.themeLight : copy.themeDark;
      elements.themeToggle.setAttribute(
        "aria-label",
        isDark ? copy.themeLightAria : copy.themeDarkAria
      );
    }

    function toggleTheme() {
      const nextTheme =
        document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      document.documentElement.dataset.theme = nextTheme;
      userToggledMode = true;
      updateThemeControl();
    }

    function channelToLinear(channel) {
      const value = channel / 255;
      return value <= 0.03928
        ? value / 12.92
        : Math.pow((value + 0.055) / 1.055, 2.4);
    }

    function readableTextColour(hex) {
      const channels = hex.match(/[a-f\d]{2}/gi).map((value) => parseInt(value, 16));
      const luminance =
        0.2126 * channelToLinear(channels[0]) +
        0.7152 * channelToLinear(channels[1]) +
        0.0722 * channelToLinear(channels[2]);
      const pack = themeRegistry?.get(currentTheme) ?? null;
      const threshold = pack?.tokens?.onAccentThreshold ?? 0.179;
      return luminance > threshold
        ? (pack?.tokens?.onAccentDark ?? "#111013")
        : (pack?.tokens?.onAccentLight ?? "#FFFFFF");
    }

    function hslToHex(hue, saturation, lightness) {
      const saturationRatio = saturation / 100;
      const lightnessRatio = lightness / 100;
      const chroma = (1 - Math.abs(2 * lightnessRatio - 1)) * saturationRatio;
      const segment = hue / 60;
      const secondary = chroma * (1 - Math.abs(segment % 2 - 1));
      const offset = lightnessRatio - chroma / 2;
      let red = 0;
      let green = 0;
      let blue = 0;

      if (segment < 1) [red, green] = [chroma, secondary];
      else if (segment < 2) [red, green] = [secondary, chroma];
      else if (segment < 3) [green, blue] = [chroma, secondary];
      else if (segment < 4) [green, blue] = [secondary, chroma];
      else if (segment < 5) [red, blue] = [secondary, chroma];
      else [red, blue] = [chroma, secondary];

      return `#${[red, green, blue]
        .map((channel) => Math.round((channel + offset) * 255).toString(16).padStart(2, "0"))
        .join("")
        .toUpperCase()}`;
    }

    function applyAccent(colour) {
      const normalizedColour = normalizeAccent(colour);
      document.documentElement.style.setProperty("--accent", normalizedColour);
      document.documentElement.style.setProperty("--on-accent", readableTextColour(normalizedColour));
      elements.themeColour.setAttribute("content", normalizedColour);
      return normalizedColour;
    }

    function randomizeAccent() {
      let colour;
      do {
        const hue = Math.floor(Math.random() * 360);
        const saturation = 68 + Math.floor(Math.random() * 17);
        const lightness = 44 + Math.floor(Math.random() * 10);
        colour = hslToHex(hue, saturation, lightness);
      } while (colour === DEFAULT_ACCENT);

      applyAccent(colour);
      elements.announcement.textContent =
        interfaceCopy[currentLanguage].colourChanged.replace("{colour}", colour);
    }

    function observeSections() {
      if (!("IntersectionObserver" in window)) return;
      const links = new Map(
        [...elements.tocList.querySelectorAll("a")].map((link) => [
          link.getAttribute("href").slice(1),
          link
        ])
      );

      sectionObserver = new IntersectionObserver((entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top);
        if (!visible.length) return;

        links.forEach((link) => link.removeAttribute("aria-current"));
        links.get(visible[0].target.id)?.setAttribute("aria-current", "true");
      }, {
        rootMargin: "-18% 0px -68% 0px",
        threshold: 0
      });

      elements.specContent.querySelectorAll(".spec-section").forEach((section) => {
        sectionObserver.observe(section);
      });
    }

    function updateReadingProgress() {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0
        ? Math.min(100, Math.max(0, window.scrollY / scrollable * 100))
        : 0;
      elements.readingProgress.style.width = `${progress}%`;
    }

    elements.languageSelect.addEventListener("change", (event) => {
      setLanguage(event.target.value);
    });
    elements.fontSelect.addEventListener("change", (event) => {
      setFont(event.target.value);
    });
    elements.themeSelect.addEventListener("change", (event) => {
      setTheme(event.target.value, { persist: true, source: "user" });
    });
    elements.themeToggle.addEventListener("click", toggleTheme);
    elements.headerAccent.addEventListener("click", randomizeAccent);
    window.addEventListener("scroll", updateReadingProgress, { passive: true });
    window.addEventListener("resize", updateReadingProgress, { passive: true });

    // ---- super menu: the wordmark is the trigger; keyboard + click-outside
    const wordmark = document.querySelector(".wordmark");
    wordmark?.addEventListener("click", (event) => {
      event.preventDefault();
      toggleSuperMenu();
    });
    wordmark?.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggleSuperMenu();
      } else if (event.key === "Escape") {
        toggleSuperMenu(false);
      }
    });
    document.addEventListener("click", (event) => {
      if (superMenu && !superMenu.hidden && !superMenu.contains(event.target) && event.target !== wordmark) {
        toggleSuperMenu(false);
      }
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && superMenu && !superMenu.hidden) {
        toggleSuperMenu(false);
      }
    });

    // ---- spec fingerprint (specification-versioning-and-hashing): the short
    // hash links to the canonical bytes for verification.
    if (typeof SPEC_SHA256 === "string" && /^[0-9a-f]{64}$/i.test(SPEC_SHA256)) {
      elements.specFingerprint.title = `sha256 ${SPEC_SHA256}`;
      const verify = document.createElement("a");
      verify.href = "SPECIFICATION.md";
      verify.textContent = SPEC_SHA256.slice(0, 12);
      elements.specFingerprint.append(verify);
    }

    // ---- theme resolution on load: URL pack → saved pack → the documented
    // default (decision D1: sci-fi-1). The winning source is stamped onto
    // <html data-theme-source>, mirroring the language machinery.
    buildThemeOptions();
    superMenu = buildSuperMenu();
    const savedTheme = normalizeTheme(readPreference("plus-ai-theme"));
    const initialTheme = pageParameters.brokenPack ??
      (pageParameters.pack ?? savedTheme ?? DEFAULT_THEME);
    const initialThemeSource = pageParameters.brokenPack ? "url"
      : pageParameters.pack ? "url" : savedTheme ? "saved" : "default";
    setTheme(initialTheme, { persist: false, source: initialThemeSource });
    console.info(
      `[+AI] Theme "${currentTheme}" (source: ${initialThemeSource}` +
      (fallbackReason !== null ? `; requested "${fallbackReason}" unavailable` : "") +
      `; default: "${DEFAULT_THEME}")`
    );

    // Visitor overrides win over pack defaults: URL accent, URL/saved font.
    applyAccent(pageParameters.accent);
    const savedFont = normalizeFont(readPreference("plus-ai-font"));
    if (pageParameters.font !== null || savedFont !== null) {
      applyFont(pageParameters.font ?? savedFont);
    }

    // Language resolution on load: URL parameter → saved user choice →
    // browser preference list → English fallback. The winning source is
    // stamped onto <html data-language-source> and logged, so why this
    // language appeared is always observable, testable and easy to override
    // from the language selector in the header.
    const initialLanguage = detectLanguage(pageParameters.language);
    document.documentElement.dataset.languageSource = initialLanguage.source;
    console.info(
      `[+AI] Language "${initialLanguage.language}" (source: ${initialLanguage.source}` +
      (initialLanguage.source === "browser" || initialLanguage.source === "fallback"
        ? `; browser reported: [${initialLanguage.checked.join(", ")}]`
        : "") +
      `; fallback: "${FALLBACK_LANGUAGE}")`
    );
    setLanguage(initialLanguage.language, false);
    updateReadingProgress();
