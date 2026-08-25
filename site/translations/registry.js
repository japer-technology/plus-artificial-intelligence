/*!
 * +AI Specification — translation registry
 *
 * Loaded BEFORE any spec.<lang>.js file. Each translation file calls
 * registry.register(code, payload) exactly once.
 *
 * A payload is:
 *   {
 *     status:             "reviewed" | "untranslated",
 *     interfaceCopy:      { <key>: "<string>", ... }, // page chrome; English is the fallback
 *     untranslatedNotice: { badge, headline, detail }, // shown when status is untranslated
 *     endonym:            "<native language name>",    // for the fallback notice
 *     sections: [ { number, title, body }, ... ],   // omit or leave [] when untranslated
 *     end:      "<html string>"                     // optional; falls back to English
 *   }
 *
 * Design notes:
 *  - Plain <script> tags are used rather than fetch()/import so the page keeps
 *    working when opened directly from disk over file://, where cross-origin
 *    requests for local files are blocked.
 *  - register() never overwrites an existing entry. Load order cannot silently
 *    clobber a reviewed translation.
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

  function validateSections(code, sections) {
    if (!Array.isArray(sections)) return [];

    var valid = [];
    for (var index = 0; index < sections.length; index += 1) {
      var section = sections[index];
      if (
        section &&
        isNonEmptyString(section.title) &&
        isNonEmptyString(section.body) &&
        isNonEmptyString(String(section.number))
      ) {
        valid.push({
          number: String(section.number),
          title: section.title,
          body: section.body
        });
      } else {
        problems.push(
          'Translation "' + code + '" section at index ' + index + " is incomplete and was skipped."
        );
      }
    }
    return valid;
  }

  var registry = {
    register: function (code, payload) {
      if (!isNonEmptyString(code) || !payload) {
        problems.push("register() called with an invalid language code or payload.");
        return;
      }

      var key = code.trim().toLowerCase();

      if (entries[key]) {
        problems.push('Duplicate registration for "' + key + '" ignored.');
        return;
      }

      var sections = validateSections(key, payload.sections);
      var declaredStatus = payload.status === "reviewed" ? "reviewed" : "untranslated";

      // A translation is only treated as reviewed when it actually carries
      // sections. A file that claims "reviewed" but ships nothing is a stub.
      var status = declaredStatus === "reviewed" && sections.length > 0
        ? "reviewed"
        : "untranslated";

      if (declaredStatus === "reviewed" && sections.length === 0) {
        problems.push(
          'Translation "' + key + '" declares status "reviewed" but contains no sections; treated as untranslated.'
        );
      }

      entries[key] = {
        code: key,
        status: status,
        sections: sections,
        end: isNonEmptyString(payload.end) ? payload.end : null,
        interfaceCopy: isPlainObject(payload.interfaceCopy) ? payload.interfaceCopy : null,
        untranslatedNotice: isPlainObject(payload.untranslatedNotice)
          ? payload.untranslatedNotice
          : null,
        endonym: isNonEmptyString(payload.endonym) ? payload.endonym : null
      };
    },

    get: function (code) {
      return entries[isNonEmptyString(code) ? code.trim().toLowerCase() : ""] || null;
    },

    has: function (code) {
      var entry = registry.get(code);
      return Boolean(entry && entry.status === "reviewed");
    },

    codes: function () {
      return Object.keys(entries).sort();
    },

    reviewedCodes: function () {
      return registry.codes().filter(function (code) {
        return entries[code].status === "reviewed";
      });
    },

    problems: function () {
      return problems.slice();
    }
  };

  global.PlusAISpecTranslations = global.PlusAISpecTranslations || registry;
})(window);
