#!/usr/bin/env node
/*!
 * +AI — sitemap generator
 *
 * Usage:  node scripts/generate-sitemap.mjs
 *
 * Scans site/*.html (plus SPECIFICATION.md) and writes site/sitemap.xml.
 * Excluded: 404.html (noindex) and everything under site/translations/
 * (data files, disallowed in robots.txt).
 */
import { readdirSync, statSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const SITE = join(dirname(fileURLToPath(import.meta.url)), "..", "site");
const BASE = "https://plus-artificial-intelligence.org/";
const EXCLUDE = new Set(["404.html", "sitemap.xml", "robots.txt"]);

const pages = readdirSync(SITE).filter((f) => f.endsWith(".html") && !EXCLUDE.has(f));
const docs = readdirSync(SITE).filter((f) => f.endsWith(".md") && !EXCLUDE.has(f));

const entries = [...pages, ...docs].sort().map((f) => {
  const loc = f === "index.html" ? BASE : BASE + f;
  const lastmod = statSync(join(SITE, f)).mtime.toISOString().slice(0, 10);
  const priority = f === "index.html" ? "1.0" : "0.6";
  return [
    "  <url>",
    `    <loc>${loc}</loc>`,
    `    <lastmod>${lastmod}</lastmod>`,
    `    <priority>${priority}</priority>`,
    "  </url>",
  ].join("\n");
});

const xml =
  '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  entries.join("\n") +
  "\n</urlset>\n";

writeFileSync(join(SITE, "sitemap.xml"), xml, "utf8");
console.log(`Wrote site/sitemap.xml with ${entries.length} URLs.`);
