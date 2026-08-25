# +AI Core Extensions
## Architecture, Reasoning, and Roadmap

> **Status:** proposal document. This is *not* the spec — it extends the spec's reach.
> It describes what could be built around the +AI mark so that people who sign it
> ("AI helped. I take responsibility.") can link to the details while keeping control
> over the presentation, and so that the people who *see* the mark can trust what it claims.

---

## 0. Context and Invariants

### 0.1 What exists today

The +AI mark is a promise with three parts, and the project currently serves two of them:

| Part | Question it answers | Current state |
|---|---|---|
| **Meaning** | What exactly did I promise? | Strong. One normative spec: three meanings (AI helped / I take responsibility / honest marking), 40 languages, registry (`site/translations/registry.js`) + per-language files, English as normative fallback. |
| **Presentation** | How does the promise look on my site, to my audience? | Strong. ~90 hand-built one-file theme pages (industries, countries, art movements, docs standards, memes, performance modes), each rendering the identical spec data with a distinct visual identity. |
| **Trust** | Can someone verify I really made this promise, and that the page I link says what I think it says? | **Weak.** Today the mark is pixels and a link. Nothing is machine-readable, nothing is checkable, nothing pins the spec version the signer committed to. |

This document is mostly about the third leg — but built so that it *strengthens* rather than disturbs the first two.

### 0.2 The invariants every extension must respect

These are load-bearing. An idea that breaks one of them is not an extension; it's a fork.

1. **One normative spec, many presentations.** A themed page may re-voice the interface copy (a HAL-9000 page may say "mission directives"), but the three meanings and the spec body must stay accurate. Flavor text is presentation, not meaning, and must remain keyed to the same `data-*` hooks so translations still apply.
2. **Self-contained and file://-safe.** Every theme opens from disk with zero build step, zero fetch, zero import. Plain `<script src>` and `<link>` only. Anything added to the *canonical* pages must keep this property.
3. **The hooks contract.** All themes share one behavioral skeleton: the 41 translation script tags (registry + 40 spec files, exact order), the element ids (`languageSelect`, `specContent`, `tocList`, …), the class hooks (`.spec-section`, `.meaning-card`, …), the `data-text`/`data-html`/`data-title` keys, and the inline JS (language resolution, theme/font persistence, accent randomisation, `personalizeExamples`, CJK/RTL handling, reading progress, TOC observation, print, reduced-motion). Any tooling we ship (linter, generator, checker) should be *defined in terms of this contract*.
4. **The signer chooses the presentation; the project guarantees the meaning.** The persona this whole system serves is: a person who wants the mark on their material, linked to the details, styled to their audience. Extensions exist to give that person more control and more reach — not to override their choice.
5. **Static-first, mirrorable, zero required infrastructure.** The project has always been openable-from-disk, copyable, forkable. A registry or checker that *requires* a server may exist as an optional service, but nothing may *depend* on it.
6. **No silent change.** If the spec text changes, or a theme changes, the change must be versioned and visible. A promise whose referent can silently mutate is not a promise.

### 0.3 The gap analysis, stated plainly

- **Drift risk grows with N.** Every theme is a full hand-built clone (~2,000–2,600 lines). A spec change at 0.2 means ~90 edits. The more themes, the more likely some page silently drifts from the normative text. This is not hypothetical: the project already knows staleness (e.g., the `THEMES` array in `toolkit.html` stopped listing new themes).
- **The mark is invisible to machines.** A crawler, extension, or checker visiting a signer's site cannot tell whether a real +AI mark is present, what it claims, or what it links to. The mark's human legibility is done; its machine legibility is the frontier.
- **Adoption has friction.** Adopting the mark today means understanding the project structure (pick a themed file, link to it). That is fine for enthusiasts and a barrier for everyone else.
- **Nothing pins "the real mark".** Anyone can copy the pixels. That is *fine* for spreading the idea — but for the accountability claim to have teeth, there must be a way to distinguish "a page that uses the mark" from "a page that uses the mark and stands behind it" (and a way for the signer to prove they stand behind it).

Everything below is organized by which gap it closes. Each idea gets: **What** (one line), **Why** (the reasoning), **Design** (concrete shape), and **Tradeoffs** (honest costs).

---

## 1. Trust Layer

> Goal: make the promise checkable. This is the highest-leverage work because it is
> what converts the mark from decoration into evidence. It also compounds: every
> distribution channel in §4 becomes more valuable once there is something to verify.

### 1.1 Machine-readable assertion (per-page `<meta>` + `/.well-known/plus-ai.json`)

**What.** A small declaration, attached to the signer's page, that says "the +AI mark is here, this is what it claims, and this is who stands behind it" — in a format tools can read.

**Why.** The mark is a claim about *process*: AI helped, a human takes responsibility. Process claims need evidence, or they're just vibes. A `<meta>` tag is the minimum viable evidence: it turns "the pixel is present" into "the claim is present and structured". Search engines, browser extensions, procurement checklists, and future regulation can all read a tag; none of them can read an SVG. This is the same move as `security.txt`, `ads.txt`, and C2PA/IPTC disclosure metadata — the disclosure layer of the web.

**Design.**

Per-page tag on the signer's material:

```html
<meta name="plus-ai" content='{
  "version": "0.1",
  "signer": "Eric Mourant",
  "organization": "JAPER Technology",
  "scope": "https://example.com/report/",
  "aiRole": "drafted|edited|reviewed|generated",
  "tools": [{ "name": "Claude", "model": "…" }],
  "humanAccountability": "Eric Mourant",
  "markPage": "https://plus-artificial-intelligence.org/finance.html",
  "issued": "2025-…"
}'>
```

Site-level declaration for whole-site policies:

```
https://example.com/.well-known/plus-ai.json
```

with the same fields plus a default policy and a list of scopes. Optional `contentHash` field: a hash over the scoped content at signing time, so a later silent rewrite of the "human-written" material is detectable.

**Tradeoffs.** Two honest limitations to communicate loudly:
1. An assertion is a **declaration, not verification**. Anyone can add the tag. Its value is that it is structured, dated, and checkable *against the registry* (§1.3) — it is the "signed form", not the notary.
2. Per-origin `well-known` files mean one declaration per origin; multi-tenant platforms (Medium, Substack) need the per-page `<meta>` variant. Ship both; the meta tag is the workhorse.

### 1.2 Spec versioning and content hashing

**What.** Pin the normative spec to versions (`/v0.1/`) and publish a content hash of the canonical text, so a signer's link refers to an *exact, immutable* meaning.

**Why.** This closes the "silent change" invariant mechanically. When a signer links `finance.html`, they are promising what that page said *on the day they linked it*. If the spec later changes (a 0.2 revision), the promise must not change under them. Versioning gives the promise a fixed referent; hashing makes "this page matches the normative spec" a fact anyone can check, not a matter of trust.

**Design.**

- Canonical URLs: `…/v0.1/finance.html`; the unversioned path remains a redirect to the current version. The version is already displayed in every theme's footer (`versionLabel`/`versionFooter`); add it to the URL and to the assertion (§1.1).
- Hash: `sha256` over the canonical English spec text (the normative source). Displayed in each theme's footer as a short fingerprint (first 12 hex chars), with a "verify" link into the checker (§1.4). Each translation file gains a `basedOn: "en@<hash>"` pointer so a translation can never drift from the version it translated.
- Registry entries (§1.3) record `specVersion` + `specHash`, so the ledger shows *which promise* each signer made.

**Tradeoffs.** Redirects add a layer of URL indirection; signers who paste `finance.html` today must not break — keep old paths working (redirect, never remove). Hashing costs nothing at runtime; the only cost is discipline when the spec is edited.

### 1.3 Signatory registry

**What.** A public, append-only ledger of who signed: name/org, URL, theme used, language, date, assertion hash, status (active/revoked).

**Why.** Three arguments:
1. **Non-repudiation.** A private mark is decoration; a public, dated commitment is a promise. The registry is where the promise becomes a fact with a timestamp.
2. **Social proof.** "Who else signs?" is the first question a cautious adopter asks. A registry turns the mark into a movement with a visible membership, and gives every industry theme a natural audience ("see who in law/medicine/finance signs").
3. **It gives the checker (§1.4) something to check against.** The registry is the trust anchor that makes declarations verifiable rather than merely parseable.

**Design.**

- Storage: `registry.json` (machine-readable, open-license) + a rendered directory page (`signers.html`) with sector, language, and theme filters. The repo is the source of truth; mirrors are trivial (it's one JSON file — consistent with the mirrorable ethos).
- Entry shape: `{ id, signer, organization, url, theme, lang, specVersion, specHash, assertionHash, date, status }`.
- **Append-only with revocation, never deletion.** Accountability means the record survives; a signer who wants out gets `status: "revoked"` with a revocation date, not a silent removal. The checker reports revoked marks honestly.
- Entry: via the sign wizard (§5.1), via PR, or via a small form. Start with PR/email — zero infrastructure, and a public review step is itself on-brand.
- Privacy: listing is **optional at signing time**. The mark can be used quietly; only public standing requires a public entry.

**Tradeoffs.** Governance: who runs the registry, and who arbitrates disputes? For now: the project runs it, open data license, mirrorable, with a written policy that entries are self-asserted claims, not endorsements. This keeps the project out of the endorsement business — important, because endorsing signers would undermine the mark's honesty value.

### 1.4 Verification checker

**What.** A one-paste tool: enter a URL, get a verdict — does the page carry a valid assertion, does it link a real mark page, does that mark page match the spec hash, is the signer registered (and not revoked)?

**Why.** The check must be *as easy as the claim*, or the claim is unverifiable in practice. A checker at one-paste UX turns the trust layer from theory into a thing people actually do — and gives the whole system a demo: "put the mark on it, then prove it."

**Design.**

- Primary: a **static checker page** (`check.html`) that fetches the target URL and evaluates client-side. Works file://-local for checking local files, and online for checking live sites (subject to CORS — a tiny optional proxy endpoint covers the cases that fail).
- Alternative/secondary: a **browser extension** that shows an inline +AI indicator on pages carrying assertions — checkable without leaving the page. Extension is the better long-term UX; the static page is the better zero-infrastructure start.
- Verdict model: green (assertion valid + registry active + spec hash matches), amber (assertion present but unregistered — self-asserted), red (revoked, hash mismatch, or dead mark link). Never "invalid" without saying why.
- The checker's own page is itself a themed page — checker-as-theme keeps the family aesthetic and doubles as a conformance demo.

**Tradeoffs.** A checker that *fails closed* (requiring registry membership for green) would punish quiet signers; the amber tier exists precisely to keep verification optional-but-graded. Do not let perfect become the enemy of shipped: a checker that only verifies the assertion's internal consistency (URL ↔ mark page ↔ hash) is already valuable.

### 1.5 C2PA / IPTC alignment

**What.** Make the +AI assertion expressible as (or attachable to) a C2PA content credential and aligned with IPTC Digital Source Type fields, so the claim travels with the document rather than only living on the page.

**Why.** AI-provenance infrastructure is being built *right now* (Adobe, Microsoft, Google, OpenAI are in C2PA; IPTC's Digital Source Type is the news-media standard). The mark should ride that rail rather than compete with it. And it has a genuine differentiator to contribute: C2PA records *what tool did what*; the +AI mark records *who stands behind it*. "AI helped" is a C2PA fact; "I take responsibility" is a human fact that C2PA has no field for. The mark is the missing moral layer.

**Design.**

- Define a small JSON schema for the +AI claim (mirroring §1.1's fields) and document how to embed it as a C2PA custom claim / JUMBF assertion, plus a mapping to IPTC Digital Source Type values (`trainedAlgorithmicMedia`, `compositeWithTrainedAlgorithmicMedia`, etc. — with the +AI extension being the human-accountability field).
- Provide a generator: paste the assertion JSON, get the manifest fragment to include in signing tooling.
- Keep this **advisory for now**: the mark must not *require* C2PA tooling to use, or the barrier to entry contradicts the project's simplicity.

**Tradeoffs.** C2PA tooling is still maturing and the field is in motion; building *on* the standard (a claim schema + docs) is cheap and durable, building *into* the standard (membership, SDK integration) is expensive and premature. Document first, integrate later.

### 1.6 Signed certificate PDF

**What.** A dated, hash-pinned, print-ready "Certificate of Responsibility" generated per signer: the mark, the signer's name, the scope, the spec version + hash, the assertion hash, the date.

**Why.** The industry themes exist precisely because legal, finance, and corporate audiences want an *artifact*, not just a URL. Procurement, compliance folders, and contracts run on PDFs. The certificate is the mark's paper form — it complements the web-native assertion and gives the checker something to verify offline.

**Design.**

- Generated client-side by the sign wizard (§5.1) — no server; the PDF is assembled from the same data the assertion carries, plus a verifiable fingerprint line and a QR to the checker.
- A `certificate.html` print theme (styled like the notary theme family) provides the "print to PDF" path with zero JS.

**Tradeoffs.** A PDF is a snapshot: it can't update, and it can be forged like any paper. Mitigate by pinning hashes and routing verification through the checker — the certificate's value is that it *points at* the live record, not that it replaces it.

---

## 2. Presentation Layer at Scale

> Goal: keep the variety, kill the cost. The project's genius is "one spec, many
> presentations"; its current weakness is that each presentation duplicates the spec.
> This section restores the data/view separation without breaking the archive.

### 2.1 Theme packs + a canonical engine page

**What.** Keep the existing themed files as stable permalinks, and add a single `mark.html` that renders the spec in any theme via a theme descriptor: `mark.html?theme=lcars` injects that theme's CSS + a small JSON config.

**Why.** The math is brutal and getting worse: N themes × ~2,400 lines ≈ a quarter-million duplicated lines, and a spec change costs N edits. Marginal cost of a new theme is high, which *discourages* the very variety the project exists to produce. The invariant "one spec, many presentations" is literally a data/view separation, and the current implementation violates it by shipping view **and** data per theme. Theme packs restore the separation: data (the 41 script tags, the behavioral JS) lives once; a theme becomes a stylesheet plus a tiny descriptor.

**Design.**

- **Theme descriptor** — exactly the four things the project has always allowed to vary between themes, formalized:

```json
{
  "name": "lcars",
  "accent": "#FF9C00",
  "font": "IBM Plex Mono",
  "fontStack": "\"IBM Plex Mono\", ui-monospace, monospace",
  "defaultTheme": "dark",
  "fonts": ["IBM Plex Mono:400;700", "Jost:300;500;700"],
  "flavor": { "heroTitle": "…", "readSpec": "…" }
}
```

  `flavor` re-voices the `data-text` values per theme (the HAL voice, the arcade voice) while keeping every key identical — presentation, not meaning (§0.2.1).
- **Delivery, file://-safe:** the engine page can't `fetch` a JSON file (invariant 2), so ship themes as a *single embedded JS registry* (`themes/themes.js`, same pattern as `site/translations/registry.js`): one `<script>` exposes `window.PlusAIThemes.get(code)` → descriptor. CSS stays as ordinary `<link rel="stylesheet">` — allowed on file://. This keeps every existing pattern intact; it is the translations architecture, applied to themes.
- **FOUC control:** the head init script already resolves the theme param before paint; extend it to resolve the theme pack and inject the stylesheet there, same as today's `theme-dark` handling.
- **The archive stays.** `lcars-mono.html`, `finance.html`, etc. remain byte-stable permalinks (signers have linked them; invariant 4). The engine is the *forward path* for new themes and for the builder (§2.2). Hybrid is deliberate: hand-built pages are bespoke masterpieces; the engine is for everything that doesn't need bespoke markup.

**Tradeoffs.** Two page classes means the conformance story must cover both (§7.1 — the linter checks either form). And the engine page's URL (`?theme=…`) is slightly less "permanent-feeling" than a filename — mitigate with pretty permalinks per theme (`mark-lcars.html` → engine + param) if desired. Neither is a real obstacle; both are documentation.

### 2.2 Theme builder UI

**What.** Extend `toolkit.html` (which already does gallery/compare/URL/barcode/QR/snippet) into a live builder: accent (picker + curated palette), font pairing, dark/light/auto, layout family (chamber / terminal / print / arcade / minimal), flavor voice (neutral / formal / playful / terminal). Output: a shareable encoded URL and a copy-paste link.

**Why.** The user's own framing — "control over the presentation" — is the product. Signers are not designers; sliders, not CSS. A builder converts the whole theme archive from a *catalogue to browse* into a *machine to configure*, and every builder result is a theme the engine (§2.1) can render.

**Design.**

- URL encoding follows the existing precedent (`?theme=&accent=&font=&mode=`); custom themes persist to `localStorage` (the `plus-ai-*` storage-key pattern) and export as a shareable hash.
- **Contrast guard:** live WCAG AA check of accent-on-background and body text; warn (never block) when a combo fails — the mark's honesty value applies to legibility too.
- Curated presets (the ~90 existing themes' palettes) prevent combinatorial mush; the picker is free, the presets are the default.

**Tradeoffs.** Free-form builders produce unvetted combinations; that's acceptable for *personal* presentation (it's the signer's own page) as long as the spec text itself stays untouched. The guard is about contrast, not aesthetics.

### 2.3 "Surprise me" mode

**What.** `mark.html?theme=random` — a different theme per load, honoring the saved language and theme preference; `random.html` already does this as a 60-second rotation showcase.

**Why.** Discovery. A signer who can't articulate their audience's aesthetic can roll until something clicks. Cheap to build once the engine exists; it is the engine's own demo.

### 2.4 Theme starter kit

**What.** `theme-template.html` — a commented clone of the skeleton with every hook annotated ("41 script tags: DO NOT EDIT", "allowed edits: exactly four", the hooks checklist inline as comments) plus a short `THEME-CHECKLIST.md`.

**Why.** The community can't contribute themes if the entry cost is reverse-engineering a 2,033-line file. The project has accumulated ~90 themes' worth of hard-won knowledge about what may and may not vary; that knowledge should be *shipped as a file*, not tribal memory.

**Tradeoffs.** The starter kit inevitably tempts people to edit more than allowed; the annotations exist precisely to say where the line is, and the linter (§7.1) exists to catch the overreach.

---

## 3. Distribution and Embedding

> Goal: make adoption one line, everywhere. The trust layer makes the mark *worth*
> adopting; this layer makes it *easy*.

### 3.1 Web component `<plus-ai-mark>`

**What.** A zero-dependency custom element — `<plus-ai-mark theme="lcars" lang="fr" size="badge" href="…">` — published to npm and served from a CDN (jsDelivr/unpkg), rendering the mark with a hover/click details popover (bundled spec summary or a link to the themed page). Shadow-DOM isolated so no site CSS leaks in.

**Why.** This is the single biggest adoption lever available. Today, using the mark means linking to a themed page or copying an SVG; a component is one line, and the *signer still controls the presentation* via attributes. It turns the mark from "a page I link" into "a UI element I drop in" — the difference between a website feature and a platform convention.

**Design.**

- Single-file ESM component, no deps, CSP-friendly (no eval, no inline styles beyond shadow internals).
- Attributes: `theme` (any engine theme), `lang`, `size` (`badge | card`), `link` (the signer's themed page), `claim` (optional assertion JSON, §1.1). Non-JS fallback: the tag renders as a plain link — progressive enhancement, no broken pages.
- Popover content: a compact machine-generated summary of the three meanings in the chosen language, plus "read the full specification" → the themed page. Never a *different* meaning — the summary is derived from the spec data, not hand-written per theme.
- Self-hosting documented as the default for the privacy-conscious; the CDN is a convenience, never a requirement (invariant 5).

**Tradeoffs.** A CDN-hosted component introduces a third-party dependency on *other people's* sites — acceptable because it's opt-in for embedders and because the canonical pages never use it. Version the component alongside the spec so an old tag keeps rendering an old, *still-correct* mark.

### 3.2 Badge generator

**What.** Extend `toolkit.html`: export the mark as SVG/PNG (1×/2×), in monochrome / outline / high-contrast / wordmark variants, plus animated CSS/APNG/WebM for digital use, and ready-made favicon / apple-touch-icon / og-image sizes.

**Why.** Marks live in footers, slide decks, email signatures, and packaging — all of which need *files*, not pages. The generator is the bridge from the web-native mark to every other surface, and it reuses the exact palette/font data the themes already define, so exports *match* the themes.

**Tradeoffs.** Export quality is bounded by client-side canvas/SVG tooling; PNG at 1×/2× covers 95% of real use. Fine.

### 3.3 Mark-bearing QR

**What.** Upgrade the toolkit's existing QR generator to weave the +AI pixel mark into the code (high error-correction level leaves room), pointing at the signer's themed page.

**Why.** Print surfaces — business cards, reports, conference posters, product packaging — are exactly where "link to the details" fails, and QR is the only bridge that works offline. A QR with the mark woven in is self-identifying: you can see *what* the code is about before scanning it.

**Tradeoffs.** Decorative QR damage risks scanability; stick to conservative ECC (H level) and test on real devices. The pixel-art themes (`spaceinvaders.html` style) are the natural visual source for the woven mark.

### 3.4 Email signature kit

**What.** A 120px SVG badge + one line — "AI helped. I take responsibility." — + short link, with copy-paste instructions for Gmail / Outlook / Apple Mail.

**Why.** Email is where the majority of "AI helped draft this" prose actually flows, and signatures are the one surface almost every professional controls. It's the cheapest distribution win in the whole document.

### 3.5 Social cards (`og:image`) per theme

**What.** Generated share cards that render each theme's look (mark + "The +AI specification" + the three meanings in miniature), so sharing a themed page shows that theme's aesthetic instead of a blank preview.

**Why.** Social sharing is the primary distribution channel for "look, I signed." A card is the first impression of the mark most people will ever see; today it's a default blank. This is also nearly free once the generator pipeline (§7.2) exists.

### 3.6 Platform snippets

**What.** Copy-paste fragments per platform: a README badge (Markdown image + link), Notion / Google Docs embeds, Slack unfurl-friendly links, WordPress shortcode/block.

**Why.** Each platform has its own embed ritual; documenting them once removes per-signer yak-shaving. The README badge specifically targets the developer audience the mark most needs — the people actually generating content with AI.

---

## 4. Community and Signing Flow

> Goal: convert "this is cool" into "I signed" in under a minute, and make the
> community visible enough to be convincing.

### 4.1 Sign wizard

**What.** One funnel: pick audience/industry → pick a theme (or open the builder) → pick language → receive, in one screen: the personal themed-page link, the embed snippet, the assertion meta tag, the certificate PDF (§1.6), and an optional registry listing (§1.3).

**Why.** Today's path requires knowing the project's structure — a barrier that selects for enthusiasts. A wizard is the difference between a gallery and a product. Critically, it's fully client-side: everything it produces (link, snippet, tag, PDF) is generated locally, with registry listing as the only optional server-touching step. No backend means no sign-up, no data retention, no privacy story to defend — all on-brand.

**Design.** `sign.html` — itself a themed page (wizard-as-theme), reusing the engine (§2.1) for the live preview and the toolkit generators for exports.

### 4.2 Sector directory

**What.** Industry landing views ("who in law / medicine / finance signs") built from the registry, each styled by the matching industry theme and linking signers' own pages.

**Why.** The ~30 industry themes are currently a gallery with no population; the directory makes each one a *destination with an audience*. A law firm considering the mark sees other firms; a patient sees their hospital. The registry's data becomes the themes' content.

### 4.3 Public stats

**What.** `stats.html`: signer count, sectors, languages, themes used, growth over time — derived from the registry, rendered as one of the project's dashboard-themed pages.

**Why.** Movements are only legible through numbers. "1,200 signatories across 23 sectors in 40 languages" is the sentence that gets the project covered, and coverage is what drives the next wave of signers. Stats also give the project itself a health metric: theme usage shows which presentations actually resonate.

### 4.4 Theme gallery + community voting

**What.** A gallery of all themes (screenshots + one-line identity) with public voting; "most-loved per sector" rankings.

**Why.** The themes are the project's most impressive asset and its best advertisement — they deserve a surface that treats them as a collection, not a file list. Voting data feeds the builder's presets (§2.2) and tells future theme authors what works.

### 4.5 Changelog and RSS

**What.** A versioned changelog (spec revisions, new themes, new signers) + an RSS/Atom feed.

**Why.** Cheap, and it signals the most important governance fact: the spec is versioned and its changes are public. A project that publishes a changelog is visibly not going to change the meaning under anyone. The feed also gives signers' own pages a stable "what's new" to link.

---

## 5. Compliance, Accessibility, and Standards

> Goal: make the mark safe to stand behind. The signer takes responsibility — the
> project must not let a cool theme silently create a compliance or accessibility
> liability for them.

### 5.1 Per-theme conformance notes

**What.** Every theme gets a machine-readable + human-readable properties card: contrast tier (AA / AA-large / decorative), motion safety (animations reduced-motion-guarded?), screen-reader sanity, print safety, and any known limits (e.g., pixel fonts are Latin-only).

**Why.** The decorative themes (LCARS, VHS, teletext, arcade) are intentionally stylized — and a hospital or bank choosing one deserves to know its tradeoffs *before* linking it, not after an audit. Publishing theme properties is itself an expression of the mark's honesty value: the project discloses what it ships.

**Design.** A `theme-properties` block in the theme descriptor (§2.1) — renderable by the builder as a filter ("themes that are WCAG AA") and by the checker as part of its verdict. Hand-built archive themes get the same notes retroactively, batched.

### 5.2 Schema.org and JSON-LD markup

**What.** Add structured data to themed pages: `CreativeWork` with `generator`, `isBasedOn` (the spec), and the +AI assertion (§1.1) expressed as JSON-LD.

**Why.** Search engines and future crawlers can surface disclosure — and disclosure visibility is the point. As AI-content labeling becomes a search feature (it already is), pages that speak the vocabulary will be understood; pages that don't will be guessed at.

**Tradeoffs.** Schema.org has no perfect field for "human takes responsibility" yet; the JSON-LD approach (custom property on a standard type) is the standard escape hatch and survives vocabulary evolution.

### 5.3 Regulatory phrasing pack

**What.** An appendix of optional disclosure sentences per language, aligned with emerging transparency obligations (EU AI Act Article 50-style disclosures, IPTC Digital Source Type wording, plain-language variants), each explicitly labeled "examples, not legal advice."

**Why.** Disclosure law is arriving; the mark should help signers *comply without diluting its meaning*. A signer under the AI Act wants wording that satisfies a regulator while keeping the +AI promise intact. The pack gives them vetted phrasing instead of forcing them to improvise.

**Tradeoffs.** The line between "helpful wording" and "legal advice" must be drawn hard and visibly. Keep it example-labeled, jurisdiction-agnostic, and versioned with the spec so the pack's own evolution is public.

### 5.4 Flavor-text localization policy

**What.** A rule for the re-voiced `data-text` flavor strings (HAL voice, arcade voice): where a theme's flavor has not been localized into a given language, the theme falls back to the language's *neutral* v13 text, never to a different language's flavor.

**Why.** Flavor text is presentation — but 40 languages × N themes × 6 strings is an unbounded translation surface. The fallback rule keeps every theme's meaning accurate in every language without requiring each theme to commission 40 translations. (The JS already falls back to English normatively when a translation is unreviewed; the flavor policy extends the same honesty to presentation.)

---

## 6. Engineering

> Goal: make drift structurally impossible and future changes cheap. Everything here
> exists to protect the invariants of §0.2.

### 6.1 Conformance linter

**What.** A test page (and optionally a CI script) that loads any theme file and checks the entire hooks contract mechanically: 41 translation script tags in order, every required id, every class hook, every `data-*` key, the four-allowed-edits rule for the inline JS, and behavioral smoke checks (language switch renders, theme toggle flips, font choice persists, TOC observer marks current section).

**Why.** The project has hand-verified ~90 theme files. That process is heroic and unsustainable, and it's exactly the kind of check a machine should own. A linter also makes community contributions (§2.4) reviewable in seconds, and it is the precondition for the generator (§6.2) to exist safely.

**Design.** Pure-JS checker embedded in `lint.html` (open it, drop the file or point it at a URL, get a report) — file://-safe, zero deps. The same checks, expressed as a standalone script, become the CI gate for the repo.

### 6.2 Generator pipeline

**What.** A single source-of-truth skeleton + per-theme config (the descriptor, §2.1) → generates every theme page, the engine registry, og-images, badges, registry views, and the `THEMES` arrays (fixing the known `toolkit.html` staleness by construction).

**Why.** The single biggest long-term risk is drift and staleness, and it has already happened once. A generator makes staleness impossible: the `THEMES` array, the gallery, the stats, and the theme pages are all *emitted from the same source*, so they can't disagree. A spec 0.2 becomes one rebuild, not ninety edits.

**Design.** Hybrid, deliberately: the generator emits the *skeleton* (script tags, hooks, behavioral JS) and injects per-theme CSS from the descriptors; the bespoke archive pages remain hand-authored masterpieces but *import* the generated skeleton so even they stay spec-current. This keeps the hand-craft (the archive is genuinely good design work) while killing the duplication cost going forward.

**Tradeoffs.** A generator is software to maintain; its output must stay diff-reviewable (deterministic ordering, no timestamps) so PRs remain meaningful. Worth it — the alternative is exponential hand-verification.

### 6.3 Privacy-respecting display beacon

**What.** An optional, off-by-default counter: "this mark has been displayed N times" — count only, no cookies, no identity, no IP retention; the counter lives in the registry/stats.

**Why.** Distribution success is currently invisible: a signer cannot tell whether anyone ever looked. A minimal honest counter closes that loop — and it must be privacy-first, because a mark about honesty cannot ship a tracking pixel. Opt-in also makes it defensible under privacy law.

**Tradeoffs.** Even a benign beacon invites skepticism; make it *visibly* off by default and document exactly what is (and isn't) collected. If the tradeoff feels too hot, the same signal can be approximated from checker (§1.4) query volume — aggregate interest, no per-page tracking at all.

### 6.4 Offline pack

**What.** A downloadable archive: all themes + the spec + the certificate template + verification instructions, usable air-gapped.

**Why.** Conferences, secure orgs, and archives. A project whose entire value is "the meaning is pinned and portable" should be printable-and-parkable. Also a hedge: if the web moves on, the pack keeps the promise verifiable.

---

## 7. Risk Map

| Risk | Cause | Mitigation | Where |
|---|---|---|---|
| **Drift** — a themed page no longer matches the normative spec | Hand-cloned pages, spec edits without versioning | Versioning + hashing (§1.2), generator (§6.2), linter (§6.1) | Presentation |
| **Spoofing** — a fake mark with no accountability behind it | Pixels are copyable by design | Assertion + registry + checker (§1.1–1.4); communicate "declaration ≠ verification" honestly | Trust |
| **Staleness** — indexes and tooling out of date | Manually maintained lists (`THEMES` array) | Generator emits all indexes from one source (§6.2) | Engineering |
| **Meaning dilution** — a playful theme drifts into changing the spec's substance | Flavor text overreach | Flavor-is-presentation rule (§0.2.1), flavor localization policy (§5.4), linter checks the keys | Presentation |
| **Legal overreach** — the project is seen as giving legal/compliance advice | Regulatory phrasing pack | "Examples, not advice" labeling (§5.3) | Compliance |
| **Accessibility liability** — a decorative theme used by a compliance-bound signer | Stylized themes without disclosure | Per-theme conformance notes (§5.1), builder filter | Compliance |
| **Registry centralization** — the ledger becomes a single point of control/failure | One operator | Open-data JSON, mirrorable, append-only + revocation policy (§1.3) | Trust |
| **CDN dependence** — embedders break if the CDN dies | Web component on CDN | Self-hosting as the documented default; versioned releases (§3.1) | Distribution |
| **Unbounded i18n surface** — flavor text × 40 languages × N themes | Per-theme re-voicing | Neutral-text fallback rule (§5.4) | Presentation |
| **Feature sprawl** — too many extensions dilute focus | Enthusiasm | Phase discipline (§8); every idea must serve a gap in §0.3 | Strategy |

---

## 8. Sequencing

**Decision principles.** (1) *Drift-proofing first* — nothing else is safe on a moving foundation. (2) *Trust before scale* — do not grow distribution before verification exists, or the mark gets watered down exactly when it's spreading fastest. (3) *Static-first* — a server appears only where strictly necessary (checker proxy, registry hosting), and always as an optional layer. (4) *Every extension must serve a §0.3 gap* — if it doesn't, it's decoration.

| Phase | Work | Closes | Effort | Dependency |
|---|---|---|---|---|
| **0 — Foundations** | Spec versioning + content hash (§1.2); conformance linter (§6.1); changelog (§4.5) | Silent change; drift | S–M | none |
| **1 — Trust** | Assertion meta/well-known (§1.1); registry (§1.3); checker (§1.4); certificate (§1.6) | Machine invisibility; non-repudiation | M | Phase 0 |
| **2 — Adoption** | Web component (§3.1); badge generator + QR (§3.2–3.3); sign wizard (§4.1); platform snippets (§3.6) | Adoption friction | M | Phase 0 (wizard touches Phase 1) |
| **3 — Ecosystem** | Engine + theme packs (§2.1); builder (§2.2); gallery/voting (§4.4); sector directory (§4.2); stats (§4.3); og-cards (§3.5); generator pipeline (§6.2) | Drift cost; presentation control | L | Phase 0 (pipeline) |
| **4 — Standards** | C2PA/IPTC alignment (§1.5); schema.org (§5.2); regulatory pack (§5.3); per-theme conformance notes (§5.1); flavor policy (§5.4) | Compliance; disclosure | S–M | Phase 1 |

**Explicitly deferred:** native mobile apps; blockchain anchoring beyond an optional hash publication; auto-translating the spec with an API (human-reviewed translations are a trust feature, not a cost); rewriting the archive pages into a single-page app (the permalink archive is a feature — invariant 4). A lightweight "surprise me" (§2.3), the email kit (§3.4), the offline pack (§6.4), and the beacon (§6.3) slot into any phase as small wins.

---

## 9. Open Questions

1. **Registry governance.** Who arbitrates entries and revocations — the project alone, signer community, or a transparent policy with public appeals? (Recommendation: policy-first, project-operated, mirrorable — grow governance only when the ledger grows.)
2. **Permalinks vs. engine URLs.** Do new themes ship as their own `.html` files forever (archive style), as engine URLs, or both? This decides whether the archive remains the product or becomes the museum.
3. **Flavor localization bar.** Must a theme's flavor text be localized before the theme ships, or is neutral-text fallback (§5.4) acceptable as the shipping state? (Recommendation: fallback is the shipping state; localization is a contribution.)
4. **C2PA participation depth.** Advisory claim schema now, or actual C2PA membership and SDK integration? (Recommendation: advisory now, revisit when the standard stabilizes.)
5. **Usage guidelines for the mark itself.** The extensions assume the mark can be used freely; the project has never had to write down what misuse looks like. A short usage-guidelines page (may not imply endorsement, may not alter the spec text, must link the spec) probably belongs in Phase 1 — it is the registry's admission policy.
6. **Who maintains the generator.** A pipeline is the project's first real software dependency on itself; decide ownership and release discipline early.

---

## 10. Summary

The +AI mark's promise — "AI helped. I take responsibility." — is currently a beautiful, legible, *unverifiable* promise. The extensions in this document close the three real gaps in order:

1. **Make the promise checkable** (assertions, versioning + hashes, registry, checker, C2PA alignment, certificates) — so the mark means something beyond pixels.
2. **Make the presentation controllable at scale** (engine + theme packs, builder, linter, generator) — so variety grows while drift becomes impossible and cost collapses.
3. **Make adoption one line** (web component, badges, QR, snippets, wizard, directory) — so the people the mark exists for can take it up in a minute.

The guiding rule throughout is the one the project has already lived by: **one normative spec, many presentations, no drift in the meaning — and the signer always in control of how the promise looks.**
