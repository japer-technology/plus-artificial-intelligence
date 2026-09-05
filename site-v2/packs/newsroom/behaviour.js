/*!
 * +AI theme pack "newsroom" — behaviour (packs/newsroom/behaviour.js)
 * Fills the #datelineDate readout with a locale-aware, upper-cased newswire
 * dateline, re-rendered whenever the active language changes.
 */
window.PlusAISpecPackScripts = window.PlusAISpecPackScripts || {};
window.PlusAISpecPackScripts["newsroom"] = function (api) {
  "use strict";

  var el = document.getElementById("datelineDate");

  function tick() {
    if (!el) return;
    var now = new Date();
    try {
      el.textContent = now
        .toLocaleDateString(api.getLanguage(), {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        })
        .toUpperCase();
    } catch (error) {
      el.textContent = now.toDateString().toUpperCase();
    }
  }

  tick();
  api.onLanguageChange(tick);

  return function cleanup() {
    /* nothing to undo */
  };
};
