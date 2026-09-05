/*!
 * +AI — standalone super menu (src/supermenu.standalone.js)
 *
 * For pages not rendered by the engine (the players): repurposes the
 * top-left +AI wordmark as the super menu — the shared-project-navigation
 * route block plus the site's documents and tools, rendered from the same
 * versioned navigation manifest (src/nav.json → window.PlusAISpecNav).
 *
 * Labels resolve through the translation registry when the page loads it
 * (per-key English fallback, R4); otherwise English.
 */
(function () {
  "use strict";

  var wordmark = document.querySelector(".wordmark");
  if (!wordmark || document.getElementById("superMenu")) return;

  var manifest = window.PlusAISpecNav || { groups: [], site: [] };
  var translations = window.PlusAISpecTranslations || null;

  function label(key) {
    var lang = document.documentElement.lang || "en";
    var base = lang === "en" ? "en" : (lang.split("-")[0] || "en");
    var copy = (translations && translations.get(base) && translations.get(base).interfaceCopy) || null;
    var en = (translations && translations.get("en") && translations.get("en").interfaceCopy) || {};
    return (copy && copy[key]) || en[key] || key;
  }

  wordmark.setAttribute("role", "button");
  wordmark.setAttribute("tabindex", "0");
  wordmark.setAttribute("aria-expanded", "false");
  wordmark.setAttribute("aria-haspopup", "true");
  wordmark.setAttribute("aria-controls", "superMenu");

  var menu = document.createElement("nav");
  menu.id = "superMenu";
  menu.className = "super-menu";
  menu.setAttribute("aria-label", label("navMenuAria"));
  menu.hidden = true;

  function navUrl(url) {
    var self = (window.location.pathname.split("/").pop() || "index.html");
    if (self === "index.html" || !self.endsWith(".html")) return url;
    return url.indexOf("index.html") === 0 ? url.replace(/^index\.html/, self) : url;
  }

  function group(titleKey, items) {
    var wrap = document.createElement("div");
    wrap.className = "super-menu-group";
    var heading = document.createElement("h2");
    heading.textContent = label(titleKey);
    wrap.append(heading);
    items.forEach(function (item) {
      var link = document.createElement("a");
      link.href = navUrl(item.url);
      link.textContent = label(item.labelKey);
      wrap.append(link);
    });
    menu.append(wrap);
  }

  group("navSectionSite", manifest.site || []);
  group("navSectionProject", manifest.groups || []);

  wordmark.after(menu);

  function toggle(open) {
    var shouldOpen = open === undefined ? menu.hidden : open;
    menu.hidden = !shouldOpen;
    wordmark.setAttribute("aria-expanded", String(shouldOpen));
    if (shouldOpen) menu.querySelector("a").focus();
    else wordmark.focus();
  }

  wordmark.addEventListener("click", function (event) {
    event.preventDefault();
    toggle();
  });
  wordmark.addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggle();
    } else if (event.key === "Escape") {
      toggle(false);
    }
  });
  document.addEventListener("click", function (event) {
    if (!menu.hidden && !menu.contains(event.target) && event.target !== wordmark) toggle(false);
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !menu.hidden) toggle(false);
  });
})();
