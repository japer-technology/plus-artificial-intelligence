# Possibilities: From a Mark to a Service
## A definitive exploration of the human layer, the AI Arsenal directory, the +ai address theory, and the free/premium line

> **Status:** exploration document. This is *not* the spec and *not* a commitment.
> **Next stage:** the ideas here became the catalogue in [`docs/suggestions/`](../suggestions/), then the plan in [`docs/planning/`](../planning/).
> It maps the full possibility space opened by three observations:
> 1. the website has no link to **who made it, why, how to help, or how to fund it**;
> 2. the URL parameters the site already honours could grow into a **directory
>    service** where people declare their **AI Arsenal** — either by authoring a
>    URL themselves or by identifying themselves against a database;
> 3. the same notation works in an **email address**:
>    `eric.mourant+ai@japer.technology`.
>
> Companion documents: `docs/core-extensions.md` (trust-layer architecture),
> `docs/THE-PLAN.md` (launch strategy and its non-negotiables).

---

## 0. Ground rules this exploration must not break

`THE-PLAN.md` §15 and §19 already fix the boundaries. Everything below is
designed inside them:

1. **The mark stays free.** Usable without payment, registration, permission,
   membership, certification, a particular AI provider, or a particular
   application. Any idea that puts the *meaning* behind a paywall is dead on
   arrival.
2. **Never call anything "certification".** The project sells no endorsement.
   A paid feature may make a *self-declaration* easier to publish, prettier, or
   more durable — it may never convert it into an approval by the project.
3. **Static-first, mirrorable.** The site opens from disk. Services may be
   *added*; dependence may not. Every capability below is staged from
   "zero infrastructure" upward, and the zero-infrastructure version remains
   the permanent floor.
4. **The signer authors; the project defines.** A person's declaration is
   theirs. The project guarantees only what the mark *means*, never what any
   individual's declaration *claims*.
5. **Accountability data is personal data.** Names, tools used, and dates are
   exactly the kind of data privacy law cares about. Consent, revocation, and
   data minimisation are design inputs, not afterthoughts.

One sentence to carry through the whole document:

> **The meaning is free forever. Convenience, durability, identity, and scale
> are what can be priced.**

---

## 1. The missing human layer — who, why, help, money

### 1.1 The gap

The site presents the specification in 40 languages and ~90 presentations, but
a visitor cannot answer four basic questions:

| Question | Today | Cost of the gap |
|---|---|---|
| **Who made this?** | A name in the footer examples | The mark asks people to attach their *name* to their work — while its own author is nearly anonymous on the site. That asymmetry quietly undermines the ask. |
| **Why does it exist?** | Nothing on the site (the Terence Tao inspiration lives only in the README) | Movements spread on origin stories, not specifications. `THE-PLAN.md` §16 already demands the founder be visible; the site doesn't deliver it. |
| **How can I help?** | Nothing | Every motivated visitor currently bounces. Translation review, theme building, prior-art research, and evangelism are all real jobs with no door to walk through. |
| **How is this funded / how do I give?** | Nothing | No donation rail, no sponsor rail, no transparency about costs. Goodwill has no outlet, and sustainability has no plan. |

### 1.2 The pages to add (all zero-infrastructure, all free)

Each of these is one new self-contained page in `site/`, exactly like adding a
theme — the page contract already supports it.

- **`about.html` — the founder page.** The origin story in first person: using
  AI to think, write, and build; the discomfort with clumsy disclosure
  language; the 45:00–48:00 segment of Terence Tao's ICM 2026 lecture; the
  first signature. Signed, naturally, **Eric Mourant +AI** — the page is
  itself a specimen. Linkable as `who.plus-artificial-intelligence.org` /
  `why.plus-artificial-intelligence.org` (the subdomain wishlist pattern in
  `site/subdomains.md` already anticipates message-bearing hostnames, and
  `about.` is already in `site/live-sub-domains.txt`).
- **`help.html` — the contribution ladder.** Ordered smallest to largest ask:
  sign your next piece of work → tell one person → review a translation in
  your language → build a theme (`docs/versions-not-done.md` is a ready-made
  request list) → research prior art → run a sector pilot. Each rung links to
  the exact file or process. Volunteers convert when the first step is tiny.
- **`support.html` — the money page.** Donations (GitHub Sponsors is the
  natural first rail: zero PCI burden, public, recurring), a plain statement
  of what money is for (domain, CDN, translation review), and a public ledger
  of costs. Honesty about money is on-brand for an accountability project —
  and a published cost ledger is itself a trust artifact.
- **A footer link block on every theme** — three words: *About · Help ·
  Support*. The pages exist once; the contract's shared skeleton distributes
  them everywhere.

**Why free and first:** these pages cost nothing to run, close the credibility
asymmetry, and create the two funnels (volunteers, donors) that every later
idea in this document feeds into.

---

## 2. The URL is already an identity system

### 2.1 What the site honours today

Every page already reads a personalisation surface from the URL
(`readPageParameters()` in `site/index.html`):

| Parameter | Aliases | Effect |
|---|---|---|
| `name` | — | Replaces "Eric Mourant" in every example — the page speaks *about the visitor* |
| `company` | `companyname` | Replaces "JAPER Technology" |
| `highlight` | `highlightcolour`, `highlightcolor`, `accent`, `colour`, `color` | Accent colour |
| `font` | — | One of 39 typefaces |
| `theme` | `mode`, bare `light` | Light/dark |
| `language` | `lang` | One of 40 languages |

Add the ~90 themed pages and the named subdomains
(`eric-mourant.plus-artificial-intelligence.org`) and the observation is:

> **A +AI URL is already a self-authored identity document.** The person who
> composes `finance.html?name=Jane+Doe&highlight=AC43D9&font=Roboto` has
> declared, in a string they fully control, *who* is taking responsibility and
> *how they present themselves*. No account. No database. No permission.

This is the seed of the directory service. The question is not "should we
build identity?" — it exists — but "how far up the authority ladder should it
climb, and who pays for each rung?"

### 2.2 The authoring-vs-authority spectrum

Everything in this document sits on one axis:

```
URL-authored ──────── registry-listed ──────── claimed ──────── verified
(self-declared,       (self-declared,          (declared and     (declared, on
 zero infra,           on the public            bound to a        the record, and
 instantly editable,   record, dated,           contact the       independently
 nothing checkable)    revocable)               signer controls)  checkable)
```

Moving right adds trust and cost; moving left preserves freedom and zero
infrastructure. **The project should serve every point on this axis and price
only the right-hand half** — because the left half is the mark itself, and the
mark is free.

---

## 3. The AI Arsenal — the directory service

### 3.1 The idea, stated plainly

The +AI mark says *"AI helped."* The natural next question from any reader is
**"helped how, with what?"** The **AI Arsenal** is the answer: a person's
declared set of AI tools, models, and roles — *"this is what is in my arsenal,
and this is what I used it for."* It converts the mark from a binary
disclosure into a legible practice statement, and it converts the website from
a specification into a **directory of accountable humans and their tools**.

### 3.2 Level 0 — URL-authored arsenal (free, forever, zero infrastructure)

**What.** Extend the existing parameter surface so the declaration itself can
ride in the URL:

```
https://plus-artificial-intelligence.org/finance.html
  ?name=Jane+Doe
  &company=Acme
  &arsenal=claude,copilot,midjourney
  &role=drafted
  &scope=quarterly-report
  &since=2025-11
```

The page renders an **arsenal card** above or beside the spec: "Jane Doe +AI —
declares: Claude (drafting), Copilot (code), Midjourney (imagery)." Unknown
tools render as typed; a curated list of known tools gets logos/normalised
names. Purely client-side, `file://`-safe, honouring the hooks contract, and
translatable through the same `data-*` key mechanism as everything else.

**Why this is powerful.**

- **The signer is the author.** The URL is composed by the person it
  describes; the project hosts the *renderer*, not the *record*. This is
  exactly the control-inversion the mark stands for.
- **It is infinitely shareable.** The declaration travels in links, QR codes,
  email signatures, slide footers, and README badges without any account
  existing anywhere.
- **The toolkit already half-exists.** `toolkit.html` is a URL builder; the
  arsenal is one more section in it.

**Honest limits.** A URL proves nothing — anyone can compose one about anyone.
That is acceptable and must be labelled: *this is a self-declaration rendered
at the signer's request*. (It is also mitigable: see the tamper-evidence note
in §3.5.) The URL is the "business card" tier, and business cards have never
been verified documents.

**Free/premium:** free, permanently. This *is* the mark.

### 3.3 Level 1 — named subdomains (free tier + managed premium)

`eric-mourant.plus-artificial-intelligence.org` already demonstrates the
pattern: the hostname itself carries the identity, and the project controls
DNS. Possibilities:

- **Message subdomains** (already the wishlist in `site/subdomains.md`) stay
  free and unlimited — they carry *slogans*, not identities.
- **Name subdomains** (`jane-doe.plus-artificial-intelligence.org`) resolve to
  the canonical page pre-loaded with that person's declaration (initially just
  baked-in defaults for `name`/theme; later, a registry lookup, §3.4). A
  wildcard-DNS + client-side-hostname-parsing implementation keeps even this
  nearly static: the page reads `location.hostname`, extracts the label, and
  personalises — no per-user server config at all.
- **The natural premium:** *reservation and management* of a name subdomain —
  guaranteeing the label, custom default theme/font/colour, custom arsenal,
  and an optional redirect to the signer's own site. The free path (URL
  parameters) always remains; what's being bought is a **short, stable, memorable
  address**, which is a scarce good the project genuinely owns.

### 3.4 Level 2 — registry-backed profiles ("identify yourself and we pull a database")

**What.** The signatory registry from `docs/core-extensions.md` §1.3
(`registry.json`, append-only, revocable, mirrorable) gains an
`arsenal` field, and pages learn one more parameter:

```
?id=jane-doe        →  look up jane-doe in registry.json  →  render her
                       declaration: name, org, arsenal, theme, language,
                       spec version signed, date, status
```

A `signers.html` directory page renders the whole registry with sector /
language / tool filters — "see who in law declares Claude", "see every signer
in Japanese".

**Why a static JSON registry and not a live database first.**

- It preserves invariant 3 (mirrorable; the repo is the source of truth).
- Entry via PR or a small form matches "start with PR/email — zero
  infrastructure" from the core-extensions roadmap.
- A public, dated, append-only record is precisely what turns a private mark
  into a public promise — the trust argument is already made in
  `core-extensions.md` §1.3; the arsenal is one added field, not a new system.

**Privacy design (non-negotiable):**

- Listing is opt-in at declaration time; the URL-authored tier (§3.2) exists
  precisely so nobody *needs* to be in the database.
- Revocation flips `status`, never deletes the fact an entry existed —
  but personal fields can be redacted on request while the tombstone remains
  (GDPR erasure vs. append-only honesty, resolved explicitly).
- The arsenal lists *tools*, never chat logs, prompts, or work content.

**Free/premium:** a **basic registry entry is free** (charging for the record
would be pay-to-play accountability — the one perception that kills the
project). Premium attaches to *presentation and management of* the entry:
rich profile pages, multiple scopes, team rosters, instant self-service edits
versus PR review latency.

### 3.5 Level 3 — claimed and verified declarations

The right-hand end of the spectrum, built from `core-extensions.md` §1
components:

- **Claimed:** the entry is bound to a contact the signer controls — proven by
  an email round-trip (see §4: the `+ai` address is *made* for this), a DNS
  TXT record, or a `/.well-known/plus-ai.json` on the signer's own origin.
- **Verified:** the checker (§1.4 of core-extensions) can confirm, for a given
  URL, that a machine-readable assertion exists, matches a registry entry,
  and pins a spec version/hash. Optionally a **signed certificate PDF**
  (§1.6) and a signed/tamper-evident arsenal link (the Level-0 URL plus an
  HMAC parameter issued at claim time — turning "anyone can compose a URL
  about anyone" into "this URL was composed by the account that claimed the
  name").
- **Vocabulary discipline:** the words are *claimed* and *checkable* — never
  "certified", never "endorsed". The checker verifies **consistency of a
  self-declaration**, not truth of the underlying practice. Say so on every
  surface.

**Free/premium:** claiming (the email/DNS round-trip) should be free — it is
the anti-spoofing floor that protects everyone's names, and charging for it
would mean only paying users are protected from impersonation. *Verification
artifacts* (signed PDFs, tamper-evident links, badges that render "claimed ✓",
API verification at volume) are legitimate premium goods.

### 3.6 What the arsenal taxonomy should record

Keep the schema small and aligned with the assertion format of
`core-extensions.md` §1.1 so URL, registry, and `<meta>` assertions stay one
vocabulary:

| Field | Example | Notes |
|---|---|---|
| `tools` | `claude`, `copilot`, `midjourney` | Open vocabulary + curated normalisation list |
| `role` per tool | `drafted / edited / reviewed / generated / coded / translated` | Mirrors `aiRole` in the assertion schema |
| `scope` | a URL, a project name, or `everything-i-publish` | The promise's blast radius |
| `since` / `date` | `2025-11` | Declarations age; show it |
| `specVersion` | `0.1` | Pins which promise was made |
| `status` | `active / revoked` | Registry tiers only |

Deliberately *not* recorded: model temperatures, prompts, chat transcripts,
percentages of AI contribution. False precision invites false confidence, and
the mark's value is the **named human**, not forensic decomposition.

### 3.7 What the directory becomes at scale

If Levels 0–3 land, the directory compounds into things no single feature
promises:

- **Sector pages** — "accountable +AI signers in medicine / law / finance",
  each industry theme gaining a live membership list (the "identity loop" and
  "institutional loop" of THE-PLAN, made concrete).
- **Public stats** — signers per week, languages, tools most declared: the
  adoption metric THE-PLAN §18 says to measure (*people using the mark on
  real work*), published as open data.
- **A tool-transparency observatory** — aggregate, anonymised answers to
  "what does the world actually use AI *for*?", which is publishable research
  no vendor can produce honestly.
- **An interoperability target** — platforms (GitHub profiles, LinkedIn,
  newsletter footers) can render a signer's declaration from one stable URL
  or one JSON fetch. The directory becomes infrastructure, which is exactly
  when premium reliability (SLA'd API) becomes sellable.

---

## 4. The +ai address theory — email as a carrier

`eric.mourant+ai@japer.technology` works because RFC 5233 sub-addressing
(plus-addressing) delivers `local+anything@domain` to `local@domain` while
preserving the tag. That makes the *address itself* a +AI declaration. The
possibilities, smallest to largest:

1. **The convention (free, publishable today).** A one-page guide:
   *"Use `you+ai@yourdomain` when sending AI-assisted correspondence."* The
   recipient sees the declaration in the `From:` line before reading a word.
   Works on Gmail, Fastmail, most corporate mail today, zero setup. Publish it
   as `email.html` alongside the signature kit already planned in
   `core-extensions.md` §3.4 (mark + link in the signature block for mail
   systems that strip or don't support the tag).
2. **The filter dividend (free).** Because the tag survives delivery,
   recipients can filter/label AI-assisted mail — the declaration is
   *actionable*, not just visible. Document the one-line filter recipe for
   the major clients.
3. **The verification loop (the claiming mechanism of §3.5).** When someone
   claims `jane-doe` in the registry, the confirmation mail goes out expecting
   a reply from (or a click by) an address the signer controls — and inviting
   them to reply from `jane+ai@…` is both the proof and the practice.
4. **Addresses under the project's domain (premium candidate).**
   `jane@plus-artificial-intelligence.org` or forwarding aliases
   (`jane.doe+ai@plus-artificial-intelligence.org` → her real inbox) are a
   classic identity-product: scarce, memorable, recurring-billable, and
   technically simple (forwarding only, no mailbox hosting). This pairs
   naturally with the name-subdomain product (§3.3) as one "identity bundle".
5. **Signed mail (far horizon).** DKIM already signs outgoing mail per-domain;
   a project-operated forwarding domain could add a header
   (`X-Plus-AI: declared`) making the declaration machine-readable in transit.
   Explore only after the registry exists; it inherits all the §3.5 caveats.

The deeper point: **the +AI notation is carrier-independent.** Post-nominal,
URL parameter, hostname label, email tag — the same grammar rides every
channel where identity appears. Each new carrier is a free-tier on-ramp and a
premium-tier upsell surface. (Candidate future carriers, same pattern: social
handles — *Jane Doe +AI*, git trailers — `Assisted-by:` conventions, file
metadata via C2PA per `core-extensions.md` §1.5.)

---

## 5. The definitive free/premium map

### 5.1 The principle

Charge for **scarcity, durability, convenience, and volume** — never for
**meaning, membership, or protection**. The test for any future feature:
*"If a broke student can't afford it, do they lose any of the mark's meaning
or safety?"* If yes, it cannot be premium.

### 5.2 Free forever (the floor that makes the movement)

| Offering | Why it must stay free |
|---|---|
| The mark, the definition, the spec, all 40 languages | This *is* the project |
| All themed presentations and future themes | Presentation variety is the adoption engine |
| URL personalisation (name, company, colours, fonts, language) | Already shipped; the proto-identity layer |
| **Level-0 arsenal declaration via URL** | The self-authored declaration is the mark in directory form |
| Basic registry listing + revocation | Paid listing = pay-to-play accountability; revocation must never be hostage |
| Claiming your name (email/DNS round-trip) | Anti-impersonation is safety, and safety is never premium |
| The email `+ai` convention and signature kit | A convention can't be owned; lead it instead |
| Badge/QR generation, web component, snippets | Distribution friction must be zero |
| The checker for individual, manual lookups | Public verifiability is the trust story |
| About / help / donate pages, public stats, open registry data | Transparency artifacts |

### 5.3 Premium candidates (ranked by fit)

| # | Product | What is actually being sold | Model | Risk check |
|---|---|---|---|---|
| 1 | **Identity bundle**: reserved name subdomain + managed profile + email alias under the project domain | Scarce, memorable, stable address; self-service management | Subscription (individual) | Low — free URL path always exists |
| 2 | **Organisation accounts**: team rosters ("Acme — 340 people sign +AI"), org profile page, bulk claiming, admin console, exportable declaration reports for procurement/audit | Administration at scale | Subscription (per-org tier) | Low — individuals never need it |
| 3 | **Custom/white-label themes**: a branded presentation of the *unchanged* spec for a company's internal rollout, built to the page contract | Design service + hosting | One-off fee ± retainer | Medium — flavor-is-presentation rule must be contractual |
| 4 | **Verification artifacts**: signed certificate PDFs, tamper-evident arsenal links, "claimed ✓" badge rendering | Durable evidence of a self-declaration | Per-artifact or bundled with #1/#2 | Medium — vocabulary discipline ("claimed", never "certified") |
| 5 | **API at volume**: registry lookups, checker-as-API, embeddable directory search with SLA | Reliability and scale, not access (data stays open) | Metered / tiered | Low — the JSON remains free to mirror |
| 6 | **Analytics for signers**: how often your declaration page/badge is viewed (privacy-respecting beacon, `core-extensions.md` §6.3) | Insight | Add-on | Medium — must stay aggregate, opt-in |
| 7 | **Services**: rollout workshops, policy-integration consulting, regulator-phrasing support (built on §5.3 of core-extensions, sold as "examples, not advice") | Expertise and time | Day-rate / engagement | Low — classic open-core services |
| 8 | **Sponsorship & patronage**: sponsor a language, a theme, or the registry's hosting; logo on a credits page | Association with the mission | Grants / sponsorship | Medium — sponsors must never appear *inside* the spec pages |

Deliberately rejected: paid placement or ranking in the directory (corrupts
the record), selling registry data (it's open by design — sell the *pipe*,
not the data), charging to revoke or edit-for-privacy (hostage-taking),
"verified human" identity checks (KYC liability and mission creep), and any
tier whose absence weakens a free user's accountability claim.

### 5.4 The money that isn't product

- **Donations** (GitHub Sponsors first; add Open Collective if fiscal
  transparency should be third-party): right for the phase where costs are
  domain + CDN.
- **Grants**: the directory-as-observatory (§3.7) is fundable as digital
  public infrastructure / AI-transparency research; the open registry and
  40-language corpus are exactly what such funders want to exist.
- **The rule that protects all of it:** publish the cost ledger and the
  free-forever list (§5.2) *before* the first premium offer. A project about
  accountability must be pre-emptively accountable about money, or the first
  invoice becomes the story.

---

## 6. Sequencing — smallest real steps first

| Phase | Ships | Infrastructure | Money |
|---|---|---|---|
| **A. The human layer** | `about.html`, `help.html`, `support.html` + footer links on every theme | None (three static pages) | Donation link live |
| **B. Arsenal, self-authored** | `arsenal`/`role`/`scope` parameters + arsenal card render + toolkit builder section + `email.html` convention page | None (client-side) | — |
| **C. The record** | `registry.json` + `signers.html` + PR/form entry + email claiming; name-subdomain wildcard rendering | Static JSON; wildcard DNS; a mail alias | — |
| **D. First premium** | Identity bundle (reserved subdomain + managed profile + mail alias); org accounts | Payments + a small management service (the first true server, kept optional per invariant) | Subscriptions |
| **E. Evidence & scale** | Checker, certificates, tamper-evident links, API tiers, analytics, sponsorships | Grows with revenue | Diversified |

Phases A and B are pure static-site work inside the existing page contract and
could ship immediately; C is the core-extensions Phase-1 registry with one
added field; D is the first moment anything is sold — *after* the free floor
is visibly complete, which is the order that keeps trust.

---

## 7. Risks specific to these possibilities

| Risk | Where | Mitigation |
|---|---|---|
| **Pay-to-play perception** — "accountability costs money" | Any premium near the registry | Free floor published first (§5.2); basic listing/claiming/revocation free forever |
| **Certification creep** — premium artifacts read as endorsements | §3.5, product #4 | Fixed vocabulary ("self-declared", "claimed", "checkable"); disclaimer text baked into every artifact |
| **Impersonation via URL authoring** | §3.2 | Label Level 0 as self-declaration; free claiming; tamper-evident links for claimed names |
| **Privacy/GDPR vs append-only** | §3.4 | Redactable personal fields + permanent tombstones; opt-in listing; tools-not-transcripts scope |
| **Tool-vendor entanglement** — arsenal reads as advertising for AI vendors | §3.6 | Neutral normalisation list, no vendor logos as endorsements, no vendor sponsorship of arsenal rendering |
| **Founder-page vanity backlash** | §1.2 | THE-PLAN §16 framing: origin story as *first user*, not hero; page signs itself +AI |
| **Email tag stripped or unsupported** | §4 | Signature-block fallback ships in the same kit; the convention degrades gracefully |
| **Premium server contradicts static ethos** | §6 Phase D | Server is optional layer only; every free capability keeps a file://-safe path (invariant 3) |

---

## 8. Summary

The website currently answers *"what does +AI mean?"* perfectly, in 40
languages and ninety costumes — and answers nothing else. The possibilities
fall into four moves:

1. **Add the human layer** — about, help, support. Three static pages that fix
   the credibility asymmetry and open the volunteer and donation funnels.
   Free, immediate, zero infrastructure.
2. **Grow the URL into a directory** — the parameter surface the site already
   honours becomes the **AI Arsenal**: self-authored declarations in the URL
   (free forever), named subdomains, an open append-only registry, and a
   claiming/verification ladder on top. The signer authors; the project
   renders; the record stays open.
3. **Ride every identity carrier** — the same notation works as post-nominal,
   URL, hostname, and `+ai` email tag. Each carrier is a free on-ramp; the
   scarce addresses under the project's domain are the natural first product.
4. **Price convenience, never meaning** — identity bundles, org accounts,
   white-label themes, verification artifacts, API volume, services, and
   sponsorships can fund the project; the mark, the record, the claiming, and
   the revocation can never cost a cent.

The through-line is the project's own promise turned inward: the humans behind
+AI stay visible, take responsibility — including for the money — and the
machine-readable, monetisable layers only ever *strengthen* the free human
declaration at the centre.

**Eric Mourant +AI**
