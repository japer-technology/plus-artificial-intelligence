# +AI — The Definitive Exploration of Possibilities

> **Status:** exploration document. It is not the spec, and it is not the roadmap
> (`docs/core-extensions.md` owns the trust/presentation/engineering roadmap).
> This document answers a different question: *given the notation, the domain,
> the 40 languages and the ~80 themes — what could this become, what stays free
> forever, and what could honestly be charged for?*
>
> Everything here respects the invariants in `docs/core-extensions.md` §0.2 —
> especially: the signer controls the presentation, the project guarantees the
> meaning, static-first, and **no silent change**.

---

## 0. The assets, stated plainly

The project already owns more than it currently uses:

| Asset | What it actually is | Currently used as |
|---|---|---|
| `+AI` | A situational responsibility post-nominal — "AI helped. I take responsibility." | A mark people append to their name |
| `plus-artificial-intelligence.org` | A domain whose *entire name is the notation* — any label prepended to it is semantically inside the notation | Static site hosting |
| `eric-mourant.plus-artificial-intelligence.org` | Proof that the domain parses as a sentence: **Eric Mourant + AI** | Founder's themed page |
| 40 languages | The promise, human-reviewed, for most of the world's readers | Language dropdown per page |
| ~80 themes | ~80 complete visual identities of the identical promise (industries, art movements, countries, brands, performance players) | A gallery |
| URL parameters (`?highlight=AC43D9&font=Roboto`) | The presentation is already *parameterised* — the signer authors the URL, therefore authors the look | Power-user feature |
| `name+ai@domain` | Plus-addressing makes the notation valid inside email (RFC 5233 sub-addressing; Gmail, Outlook.com, Fastmail and others deliver it) | Founder uses `eric.mourant+ai@japer.technology` |
| The meaning itself | The thing no competitor can copy: the moral layer — *who stands behind it* | The spec |

Three absences define the opportunity space. The site has:

1. **No "who"** — no link to who Eric Mourant is, or why the mark exists.
2. **No "help"** — no way to ask for contributors, money, or support.
3. **No "who else"** — no registry of the people who have signed; no way to declare *what is in your AI arsenal*.

Every possibility below closes one of those gaps — or converts an existing asset into a service.

---

## 1. Who I am, and why (the missing page)

The cheapest, highest-value gap. A notation about accountability whose author is anonymous contradicts itself.

### 1.1 The founder page — `eric-mourant.plus-artificial-intelligence.org`

Already exists as infrastructure. What it lacks is the *content*: who is Eric Mourant, what motivated the mark, what the Tao lecture segment triggered, why "AI helped. I take responsibility." is the sentence. The declaration exists (`docs/DECLARATION-HARD.md`); the person does not. Ship a personal, honest page — not a CV, a *reason*.

### 1.2 The motivation page — `why.plus-artificial-intelligence.org`

The origin story as a themed page: the cultural opening (per `docs/THE-PLAN.md`), the prior art acknowledged openly, the precise novelty claim (disclosure label → situational responsibility post-nominal). Publishing prior art *openly* is a trust feature, not a weakness.

### 1.3 The organization page — `about.plus-artificial-intelligence.org`

What the project is, what it is not (not a label, not a compliance product, not an endorsement body), how it is governed, and the roadmap. This page is the future legal home's seed: today a personal project, tomorrow possibly a foundation (see §7).

---

## 2. The directory service (your core idea, expanded)

> *"A link to effectively a directory service that allows people to decide what is in their AI Arsenal that they're declaring."*

This is the strongest idea in the brief because the mark is *already a promise* — the directory simply makes the promise's **details** addressable. There are two architectures, exactly as you intuited, and they are not exclusive: they are the free and premium tiers of the same thing.

### 2.1 Stateless authoring — the URL *is* the declaration (free, forever)

No database. No account. The signer authors a URL; the page renders it.

```
declare.plus-artificial-intelligence.org/?name=Eric+Mourant
  &tools=claude-code,copilot,gpt-5,gemini
  &role=drafted,reviewed
  &lang=fr
  &theme=finance
  &highlight=AC43D9&font=Roboto
```

- The receiving page parses the query string and renders a declaration card:
  the name, the arsenal (the tools declared), the roles AI played, in any of
  the 40 languages, in any of the 80 themes.
- Because the parameters are in the URL, **the signer has control of it and
  therefore is the author of it** — your exact framing. There is nothing to
  hack, nothing to leak, nothing to delete. The declaration is a bookmark.
- This composes with everything already built: themes, highlight, font,
  language — and with `docs/core-extensions.md` §1.1, which already specifies
  the machine-readable assertion (`tools`, `aiRole`, `humanAccountability`).
  The directory card is that assertion, *rendered*.
- Free, unlimited, file://-safe in spirit: a URL.

**The arsenal vocabulary** is the one new thing to design: a curated, versioned
list of AI tools (like `subdomains.md`, but for tools), each with an id, display
name, and icon. Signers pick from the list; custom entries allowed but marked
"self-described". The list lives in the repo, open, community-extended by PR —
the same governance pattern as the theme archive.

### 2.2 Stateful identity — the database (the natural premium layer)

> *"…or by identifying yourself and us pulling back a database and displaying something appropriate."*

The stateless URL answers "what do I declare on *this* artifact." It cannot
answer "show me *everything* this person declares," "did they revoke it," or
"is this really them." Those need a registry — already designed as the
signatory registry (`core-extensions.md` §1.3) and sector directory (§4.2):

```
eric-mourant.plus-artificial-intelligence.org/arsenal
  → resolves the identity, pulls the record, renders the declaration
     in the theme of the visitor's choice (or the signer's default)
```

- Identity = a claimed subdomain or an account; record = name, org, declared
  arsenal, scopes, spec version signed against, status (active/revoked).
- The database stores *declarations*, not content. It never hosts the work —
  it points at it. That keeps the project out of the hosting business and the
  liability that comes with it.
- Append-only with revocation, never deletion (accountability means the record
  survives).

### 2.3 What the directory enables, once either exists

- **Reverse lookup**: every page carrying an assertion links back; the directory
  becomes the answer to "who signs?"
- **Per-sector views**: "who in law / medicine / finance declares what arsenal."
  The ~30 industry themes stop being a gallery and become destinations.
- **The arsenal as profile**: "my AI stack" becomes a thing people link from
  bios, the way they link a GitHub profile today.
- **Embeddable card**: the same data rendered as a 120px badge or email
  signature line (§5).

---

## 3. The email idea, fully explored

`eric.mourant+ai@japer.technology` is not a gimmick — it is the notation
achieving validity inside the oldest identity system on the internet.

### 3.1 What it is

- **Plus-addressing / sub-addressing**: everything between `+` and `@` is a
  tag; delivery ignores it. `name+ai@…` is *the same mailbox* as `name@…`.
- The address reads as the declaration: **Eric Mourant + AI at JAPER
  Technology**. Every email sent is a signed artifact.

### 3.2 What it could become

1. **Signature kit** (free) — one line in the signature block:
   `Eric Mourant +AI · AI helped. I take responsibility. · <themed link>`,
   with copy-paste instructions for Gmail / Outlook / Apple Mail. Email is
   where most "AI helped draft this" prose actually flows.
2. **Documented recipe** (free) — "how to get your own `+ai` address" on the
   major providers (which support plus-tags, how to filter on them). Zero
   infrastructure for the project; pure documentation.
3. **Scoped addresses as practice** (free) — `name+ai-drafts@`, `name+ai-code@`:
   the tag carries the *scope* of the declaration, and filters file accordingly.
4. **Forwarding addresses** (premium, optional, later) —
   `you@plus-artificial-intelligence.org`-style aliases. This is real
   infrastructure (mail server, deliverability, abuse handling) and is the
   kind of thing that legitimately costs money — but it is **deferred**: it
   adds operational burden and spam/abuse exposure disproportionate to its
   value today. The free recipe above captures 95% of the value.

### 3.3 The honest caveat

Not every mail system accepts `+` in the local part (some web forms reject it;
some providers strip it). The documentation must say so plainly — an honesty
project does not oversell its own notation.

---

## 4. Serving humans on a free basis — the definitive list

The rule: **everything a person needs to make the promise, and to have it mean
something, is free.** Charging for the promise itself would destroy the promise.

| Free service | What it is | Why it must be free |
|---|---|---|
| The specification | 26 sections, 40 languages, human-reviewed | It *is* the meaning; the meaning cannot be paywalled |
| All themes, forever | Every themed page, the builder, custom highlight/font via URL | The signer controls the presentation — charging for presentation control contradicts the core invariant |
| The declaration URL | Stateless arsenal/declaration cards (§2.1) | A URL is a bookmark; there is nothing to charge for |
| The `+ai` email recipe | Documentation for plus-addressing (§3.2) | It's the user's own mailbox |
| Badges, QR, snippets | SVG/PNG export, mark-bearing QR, README/Notion/WordPress snippets | Adoption must be one line, everywhere |
| The checker | Paste a URL, get a verdict | Verification that costs money isn't verification |
| Public registry listing | Basic entry: name, link, date, status | Social proof is the movement's engine; charging for membership inverts it |
| Translations | All of them, plus the path to contribute new ones | 40 languages is the project's soul |
| The offline pack | Downloadable archive of everything | The promise must survive the project |

**The free tier is not a funnel. It is the product.** The mark's value grows
with the number of people who use it; every free service above increases that
number.

---

## 5. What can honestly be premium

The rule: **charge for convenience, assurance, and organisation — never for
meaning, presentation, or membership.** Anything paywalled must be something a
free user can still achieve by hand with public tools.

| Premium service | What it is | Why it is legitimate |
|---|---|---|
| **Verified identity** | The registry entry upgraded: domain-verified (prove you control the URL via DNS/well-known file) or identity-verified; a checkmark the checker displays | Verification costs real effort per entry; the *unverified* entry stays free |
| **Hosted profile pages** | `you.plus-artificial-intelligence.org/arsenal` served from the database, with your default theme, updateable without hand-editing URLs | Hosting and storage are real costs; the free alternative (stateless URLs) remains fully functional |
| **Organisation accounts** | A company page: members, their declarations, org-wide policy ("all public reports carry the mark"), an org-level certificate | This is the *procurement* audience — they expect to pay and need admin features |
| **Certificates on paper** | Print-quality, hash-pinned certificates; batch issuance (every employee, every report) | One certificate is free (self-printed); batch + managed is a service |
| **Analytics (privacy-respecting)** | The opt-in display beacon made legible: "your mark was displayed N times this month," aggregate only | Genuinely optional infrastructure; off by default for everyone |
| **API access** | Programmatic registry/checker queries for compliance tooling, CI gates, CMS plugins | Humans use the web UI free; machines-at-scale pay |
| **Managed compliance packs** | The regulatory phrasing pack, maintained per-jurisdiction, with update notifications as disclosure law evolves | The static pack is free; *keeping up with the law for you* is a service |
| **Custom theme commission** | A bespoke, hand-built theme in the archive for an organisation's brand | The ~80 existing themes and the builder are free; bespoke craft is work |
| **Priority translation review** | Faster human review of a new language or a flavour-text localisation | The queue is free; jumping it is not |

**Explicitly never premium:** the spec, the mark, the themes, the languages,
basic registry listing, the checker, revocation. Revocation especially must be
free and fast — charging to leave would be extortionate and would poison the
accountability claim at its root.

---

## 6. Asking for help and donations (the missing asks)

### 6.1 Asking for help — `contribute.plus-artificial-intelligence.org`

The project needs five kinds of help, and should ask for each specifically:

1. **Translations** — review of the 40, new languages, flavour-text
   localisation. The documented path already exists (`docs/TRANSLATIONS.md`).
2. **Themes** — the build queue (`docs/versions-not-done.md`) plus community
   submissions against the hooks contract.
3. **Arsenal vocabulary** — the tool list (§2.1) curated by PR.
4. **Engineering** — the linter, generator, checker, web component.
5. **Signers** — the contribution that matters most is using the mark.

### 6.2 Donations — `support.plus-artificial-intelligence.org`

Honest framing: donations fund hosting, translation review, and development —
and *never* buy influence over the spec. Practical shape:

- GitHub Sponsors / Open Collective / Patreon — zero-code, reputable, and
  Open Collective in particular makes the money public, which is on-brand.
- A one-line ask in the footer of every page: "The +AI mark is free forever.
  Its hosting is not. [Support the project.]"
- Recurring donors get nothing gated — at most a name on a supporters page.
  The moment a donation buys a *feature*, the free/premium line in §4/§5 has
  been crossed.

### 6.3 Monetising the theory without selling it

Beyond donations and the premium table (§5), the theory itself can earn without
any user paying:

- **Talks and workshops** — "the human responsibility mark for the AI age" is
  a keynote; the Tao-lecture origin story is a story.
- **The book / canonical essay** — the declaration, expanded; the website stays
  free, the book is a book.
- **Merchandise** — the mark is a genuinely good-looking glyph; posters,
  stickers, laptop decals. Every physical object is also distribution.
- **Consulting** — helping organisations adopt responsibility-marking
  practices (distinct from certifying them — see §8).

---

## 7. Structure of the organisation

The asks above imply a *who*. Honest options, in order of commitment:

1. **Today: a personal project with a public ledger.** Eric Mourant, JAPER
   Technology, the repo, the registry. Fine at current scale.
2. **Fiscal sponsorship** (e.g. an Open Collective host) — donations become
   tax-efficient and the books are public without forming anything.
3. **A foundation, later** — when the registry's governance question
   (`core-extensions.md` §9.1) outgrows one person. A non-profit foundation
   owning the spec, the mark's usage guidelines, and the registry — with the
   premium services (§5) run either by the foundation or cleanly separated
   from it. The separation matters: the body that *defines* the promise should
   not be seen to profit from *grading* it.

---

## 8. Boundaries — what the project should never do

Stating these is itself a possibility-defining act; each "no" protects the "yes":

- **Never charge for the mark, the spec, the themes, the languages, listing,
  verification, or revocation.** (§4, §5)
- **Never certify content.** The registry records self-asserted declarations;
  the project is explicitly *not* in the endorsement business. The moment it
  vouches for the *quality* of signed work, one bad artifact burns the mark.
- **Never track.** The beacon is opt-in, aggregate, or nothing.
- **Never host the work.** Declarations point at artifacts; they don't contain
  them.
- **Never let money edit the meaning.** Donors and premium customers get
  services, not spec votes.
- **Never delete a record.** Revoke, don't erase.

---

## 9. Sequencing, honestly

Aligned with the phase discipline in `core-extensions.md` §8 — this document's
additions slot in like so:

| Phase | From this document | Why now / why then |
|---|---|---|
| **Now (weeks)** | Founder page (§1.1), motivation page (§1.2), contribute page (§6.1), donations via an existing platform (§6.2), email recipe + signature kit (§3.2) | Pure content on infrastructure that already exists; closes the "no who, no help" gaps at zero new-infrastructure cost |
| **Next** | Stateless declaration/arsenal URLs + the arsenal vocabulary (§2.1) | Builds on the existing URL-parameter machinery; the first piece of the directory that needs no database |
| **Then** | Registry → stateful profiles (§2.2), sector directory, checker, certificates | The database and trust layer, per the existing roadmap |
| **Later** | Premium services (§5) one at a time, starting with verified identity and organisation accounts; email forwarding (§3.2.4) only if demand proves out | Premium before there is a registry full of users is premature; the free tier must win first |

**The test for every idea:** does it make more people perform the one act —
*Name +AI* (`docs/THE-PLAN.md`) — and does it keep the promise honest? If yes,
build it. If it merely monetises, defer it. The money follows the movement;
the movement does not follow the money.
