/*!
 * +AI Specification — theme pack registry
 *
 * Loaded BEFORE any pack registration script. Each pack registers itself
 * via registry.register(code, payload) exactly once.
 *
 * A payload mirrors the pack's manifest (packs/<code>/manifest.json) plus
 * its flavour payload (packs/<code>/flavour.json), embedded by the build:
 *
 *   {
 *     packId:              "<code>",
 *     version:             1,
 *     hash:                "<sha256 over pack assets>" ("" when unhashed),
 *     languages:           ["*"] | [ "en", ... ],
 *     accessibility:       { contrast, reducedMotion, notes },
 *     conformanceChecked:  "ISO-8601",
 *     assets:              [ "theme.css", "flavour.json", "note.json", ... ],
 *     name:                { en: "<display name>", ... },
 *     maintainer:          "<name or role>",
 *     license:             "<licence note>",
 *     tokens: {
 *       accent, font, fontStack, fontOptions, defaultMode,
 *       onAccentDark, onAccentLight, onAccentThreshold, themeColor
 *     },
 *     decorations: [ { op, anchor, ... } ],   // presentational DOM ops
 *     script:             "<optional behaviour asset name>",
 *     flavour:            { flavourStrings: [ { id, neutral, localised: [...] } ] },
 *     note:               { ...per-theme conformance note (note.json)... }
 *   }
 *
 * Design notes:
 *  - Plain <script> tags rather than fetch()/import, so the page keeps
 *    working when opened directly from disk over file://.
 *  - register() never overwrites an existing entry; the first registration
 *    wins and duplicates are reported, exactly like the translation
 *    registry.
 *  - Validation is entry-time: a broken pack is recorded in problems() and
 *    the engine falls back to the neutral pack with a visible notice.
 */
(function (global) {
  "use strict";

  var entries = Object.create(null);
  var problems = [];

  function isNonEmptyString(value) {
    return typeof value === "string" && value.trim() !== "";
  }

  function isPlainObject(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
  }

  function validDecorations(payload) {
    if (payload.decorations === undefined) return [];
    if (!Array.isArray(payload.decorations)) return [];

    var ALLOWED_OPS = [
      "insertBefore", "insertAfter", "prependTo", "appendTo",
      "wrap", "wrapInner", "replaceWith", "remove", "setAttribute",
      "addClass", "text", "move", "moveAfter"
    ];
    var valid = [];

    for (var index = 0; index < payload.decorations.length; index += 1) {
      var decoration = payload.decorations[index];
      if (!decoration || !isNonEmptyString(decoration.op)) {
        problems.push('Theme "' + payload.packId + '" decoration at index ' + index + " has no op; skipped.");
        continue;
      }
      if (ALLOWED_OPS.indexOf(decoration.op) === -1) {
        problems.push('Theme "' + payload.packId + '" decoration at index ' + index + ' uses unknown op "' + decoration.op + '"; skipped.');
        continue;
      }
      if (!isNonEmptyString(decoration.anchor)) {
        problems.push('Theme "' + payload.packId + '" decoration at index ' + index + " has no anchor; skipped.");
        continue;
      }
      valid.push(decoration);
    }
    return valid;
  }

  var registry = {
    register: function (code, payload) {
      if (!isNonEmptyString(code) || !isPlainObject(payload)) {
        problems.push("register() called with an invalid theme code or payload.");
        return;
      }

      var key = code.trim().toLowerCase();

      if (entries[key]) {
        problems.push('Duplicate theme registration for "' + key + '" ignored.');
        return;
      }

      var manifestProblems = [];
      if (!isNonEmptyString(payload.packId)) {
        manifestProblems.push("packId is missing");
      }
      if (!isPlainObject(payload.name) || !isNonEmptyString(payload.name.en)) {
        manifestProblems.push("name.en is missing");
      }
      if (!isPlainObject(payload.tokens) || !isNonEmptyString(payload.tokens.accent)) {
        manifestProblems.push("tokens.accent is missing");
      }

      var decorations = validDecorations(payload);

      if (manifestProblems.length) {
        problems.push(
          'Theme "' + key + '" has an incomplete manifest (' + manifestProblems.join("; ") + ")."
        );
        // A structurally broken pack is recorded but NOT registered as
        // usable: the engine falls back to the neutral pack for it.
        return;
      }

      entries[key] = {
        packId: key,
        version: Number.isFinite(payload.version) ? payload.version : 0,
        hash: isNonEmptyString(payload.hash) ? payload.hash : "",
        languages: Array.isArray(payload.languages) ? payload.languages.slice() : ["*"],
        accessibility: isPlainObject(payload.accessibility) ? payload.accessibility : {},
        conformanceChecked: isNonEmptyString(payload.conformanceChecked)
          ? payload.conformanceChecked
          : "",
        assets: Array.isArray(payload.assets) ? payload.assets.slice() : [],
        name: payload.name,
        maintainer: isNonEmptyString(payload.maintainer) ? payload.maintainer : "",
        license: isNonEmptyString(payload.license) ? payload.license : "",
        tokens: {
          accent: payload.tokens.accent.toUpperCase(),
          font: isNonEmptyString(payload.tokens.font) ? payload.tokens.font : "",
          fontStack: isNonEmptyString(payload.tokens.fontStack) ? payload.tokens.fontStack : "",
          fontOptions: Array.isArray(payload.tokens.fontOptions)
            ? payload.tokens.fontOptions.slice()
            : [],
          defaultMode: payload.tokens.defaultMode === "light" ? "light" : "dark",
          onAccentDark: isNonEmptyString(payload.tokens.onAccentDark)
            ? payload.tokens.onAccentDark
            : "#111013",
          onAccentLight: isNonEmptyString(payload.tokens.onAccentLight)
            ? payload.tokens.onAccentLight
            : "#FFFFFF",
          onAccentThreshold: typeof payload.tokens.onAccentThreshold === "number"
            ? payload.tokens.onAccentThreshold
            : 0.179,
          themeColor: isNonEmptyString(payload.tokens.themeColor)
            ? payload.tokens.themeColor
            : payload.tokens.accent.toUpperCase()
        },
        decorations: decorations,
        script: isNonEmptyString(payload.script) ? payload.script : "",
        interfaceCopyOverrides: isPlainObject(payload.interfaceCopyOverrides)
          ? payload.interfaceCopyOverrides
          : {},
        untranslatedNoticeOverrides: isPlainObject(payload.untranslatedNoticeOverrides)
          ? payload.untranslatedNoticeOverrides
          : {},
        endOverride: isPlainObject(payload.endOverride) ? payload.endOverride : {},
        numbering: isPlainObject(payload.numbering) ? payload.numbering : null,
        flavour: isPlainObject(payload.flavour) ? payload.flavour : null,
        note: isPlainObject(payload.note) ? payload.note : null
      };
    },

    get: function (code) {
      return entries[isNonEmptyString(code) ? code.trim().toLowerCase() : ""] || null;
    },

    has: function (code) {
      return Boolean(registry.get(code));
    },

    codes: function () {
      return Object.keys(entries).sort();
    },

    problems: function () {
      return problems.slice();
    }
  };

  global.PlusAISpecThemes = global.PlusAISpecThemes || registry;
})(window);
