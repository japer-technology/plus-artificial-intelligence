/*!
 * +AI theme pack "manpage" — behaviour (packs/manpage/behaviour.js)
 * Fills the man-footer date readout (#manDate) with today's ISO date.
 */
window.PlusAISpecPackScripts = window.PlusAISpecPackScripts || {};
window.PlusAISpecPackScripts["manpage"] = function (api) {
  "use strict";

  var el = api.elements.specContent
    ? document.getElementById("manDate")
    : null;
  if (el) {
    el.textContent = new Date().toISOString().slice(0, 10);
  }
  return function cleanup() {
    /* nothing to undo */
  };
};
