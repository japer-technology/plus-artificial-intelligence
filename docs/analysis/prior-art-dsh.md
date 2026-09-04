# Prior Art Report — +AI

> **Series:** `-dsh` analysis companion to the suggestion seed [`motivation-and-prior-art.md`](../suggestions/motivation-and-prior-art.md) and its specification [`motivation-and-prior-art-dsh.md`](../suggestions/motivation-and-prior-art-dsh.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Analysis report (draft) — exhaustive prior-art research; the factual basis the motivation-and-prior-art document draws on. Explanatory, not normative; not part of the canonical `+AI` meaning.
> **Checked date:** 2026-09-04 — every register entry was re-checked against a live web source on this date unless marked otherwise.

## 1. Purpose

This report performs the "research prior art" requirement that the specification
[`motivation-and-prior-art-dsh.md`](../suggestions/motivation-and-prior-art-dsh.md)
makes explicit (§5.2.6–8, §6, §9): it assembles the prior-art register — the
maintained, dated, sourced list of earlier or adjacent practices of AI
disclosure, attribution, and responsibility signalling — and tests the project's
novelty claim against it, component by component.

The claim under test (from `docs/THE-PLAN.md` §2) is:

> **No earlier proposal has been identified that defines `+AI` specifically as a
> situational responsibility post-nominal: a mark appended to the accountable
> party's name to declare that AI materially assisted the associated work and
> that the named party has adopted and accepts responsibility for its release.**

The report's job is to make "no earlier proposal has been identified" honest: it
shows what *was* found, what each found practice overlaps with, and which
specific combination the claim rests on. Per the specification's design goals
(§5.1), it is generous to adjacent practices, verifies every entry, and never
claims primacy over AI disclosure in general.

## 2. Method and evidentiary standard

### 2.1 Register schema

Every entry in the register (§9) records at least:

| field | meaning |
|---|---|
| `id` | stable identifier (`PA-###`) used across this report and any later correction |
| `title` | name of the practice, mark, standard, policy, or convention |
| `source` | URL (or canonical standards reference) where the entry can be checked |
| `date` | when the practice appeared, launched, was published, or took effect |
| `relation` | one of `precursor` \| `adjacent` \| `overlap` (defined below) |
| `note` | one- to three-line factual description; no ranking, no endorsement |
| `checked-date` | date the entry was last verified against its source |

The register is an **append-and-correct** structure per the specification §5.5:
entries are added, corrected, or retired with a dated change record; nothing is
silently rewritten. A correction is announced in the change record at the end of
this document.

### 2.2 Relation vocabulary

- **`precursor`** — an earlier practice that plausibly shaped the design space
  `+AI` operates in (notation position, fixed meaning, responsibility
  signalling) even though it did not aim at AI disclosure.
- **`adjacent`** — a practice in the same problem space (AI disclosure,
  provenance, attribution) that differs materially in mechanism or claim.
- **`overlap`** — a practice that shares one or more concrete elements of the
  `+AI` claim (name-adjacent mark, fixed one-line meaning, permissionless use)
  and therefore narrows, or must be weighed against, the novelty claim.

Relation is assigned per *element* in §8; the consolidated register records the
strongest relation per entry.

### 2.3 Verification rules

1. Every entry carries a real source; entries that could not be verified against
   a live source are marked **UNVERIFIED** and must not be cited as fact.
2. Historical claims (e.g., the origin of post-nominal letters) cite the most
   authoritative stable reference found, not blog assertion.
3. The date of every entry is the date of the practice, not the date of the
   source page, where the two differ.
4. Entries are checked on the report's checked date; a later correction updates
   `checked-date` and the change record.
5. Per the specification §5.2.2, the Terence Tao lecture is reported with a
   verification status and flagged best-effort where the exact segment cannot be
   confirmed.

## 3. The novelty claim, decomposed

The claim is deliberately narrow (specification §5.2.3, §5.2.5). It asserts a
specific *combination*, not an invention of AI disclosure. The combination has
five components; each is tested separately in §8:

| # | Component | What the register must show to challenge it |
|---|---|---|
| C1 | **Post-nominal position** — the mark attaches to the responsible party's name (`Eric Mourant +AI`), not to the artifact alone | any earlier convention that appends a fixed mark to a person's name to assert something about that person's work |
| C2 | **Situational scope** — the declaration concerns one artifact or body of work, not the person's whole output | any earlier name-adjacent mark whose meaning is scoped per-work rather than per-person |
| C3 | **Fixed one-line meaning** — "AI helped. I take responsibility." | any earlier fixed, short, self-contained meaning for an AI-disclosure mark |
| C4 | **Responsibility-bearing** — the mark asserts the named party accepts responsibility, not merely that AI was used | any earlier disclosure mark that transfers or asserts accountability rather than just recording tool use |
| C5 | **No-permission convention** — usable without registration, membership, certification, or gatekeeper; not owned as characters | any earlier disclosure mark that is free-standing and permissionless, and any comparable mark family that is not |

"Novel" here means "no earlier practice has been identified that combines C1–C5
for AI disclosure". It explicitly does **not** mean "first ever to disclose AI
use", "first ever post-nominal", or "owner of the characters `+AI`"
(specification §5.2.4–5).

## 4. Project timeline relevant to dating the claim

| date | event | source |
|---|---|---|
| 2026-07-24 | Tao delivers "Mathematics in the Age of AI", ICM 2026 Public Lecture, Philadelphia (see §5) | [Eventbrite](https://www.eventbrite.com/e/icm-public-lecture-terence-tao-tickets-1987401519444) |
| 2026-08-13 | Simons Foundation publishes the lecture recording — the watching of the 45:00–48:00 segment necessarily falls between this date and the first commit | [YouTube](https://www.youtube.com/watch?v=M0--ZH1lOzg) |
| 2026-08-24 | First public commit of this repository (`Initial commit`) | git log |
| 2026-08-26 | README inspiration line added/updated with the Tao lecture reference | git log |
| 2026-09-03/04 | Suggestion catalogue and `-dsh` specifications completed, including `motivation-and-prior-art-dsh.md` | git log |
| 2026-09-04 | This report assembled and register entries checked | — |

The founding examples named in the catalogue — `https://eric-mourant.plus-artificial-intelligence.org`
and `eric.mourant+ai@japer.technology` — are the concrete instances the
motivation document cites (specification §5.2.10); they are the project's own
artifacts, not prior art, and appear here only to date the claim.

## 5. The Terence Tao lecture (inspiration, not prior art)

The lecture is **motivation**, not prior art: it does not define a disclosure
notation, so it appears in this report only because the specification §5.2.2 and
acceptance criterion 3 require its citation to be accurate or flagged.

### 5.1 What the repository claims

`README.md` states the idea followed from watching "the 45:00–48:00 segment of
Terence Tao's [ICM 2026 Public Lecture](https://www.youtube.com/watch?v=M0--ZH1lOzg)";
`docs/possibilities/fable-5-max.md` §1.2 repeats the same reference. The
specification under analysis therefore requires that the lecture be described
with an accurate, checkable citation.

### 5.2 What is verified

| fact | status | source |
|---|---|---|
| ICM 2026 (International Congress of Mathematicians) was held in Philadelphia, 2026-07-23 to 2026-07-30, hosted by the International Mathematical Union | verified | [IMU ICM 2026 page](https://www.mathunion.org/icm/icm-2026); [Simons Foundation, 2026-08-13](https://www.simonsfoundation.org/2026/08/13/fields-medalist-terence-tao-on-artificial-intelligence-and-why-we-do-math/) |
| The public program was 17 free public events, 2026-07-24 to 2026-07-28, Pennsylvania Convention Center; five "Public Lectures" in the Terrace Ballroom (Tao, Talithia Williams, Geordie Williamson, Manjul Bhargava, Ingrid Daubechies) | verified | [Simons Foundation, 2026-07-01](https://www.simonsfoundation.org/2026/07/01/free-public-events-will-bring-the-wonder-of-mathematics-to-philadelphia/); [schedule mirror](https://plover.com/~mjd/misc/icm2026_schedule.html) |
| Tao's lecture: exact title "**Mathematics in the Age of AI**", Friday 2026-07-24, 19:15–20:15 ET, Terrace Ballroom, Pennsylvania Convention Center | verified | [Eventbrite listing](https://www.eventbrite.com/e/icm-public-lecture-terence-tao-tickets-1987401519444) |
| The cited YouTube video resolves: title "ICM 2026 Public Lectures - Terence Tao", Simons Foundation channel, published 2026-08-13, length 51:19 | verified | [YouTube watch page](https://www.youtube.com/watch?v=M0--ZH1lOzg) (oEmbed metadata) |
| Tao published a written version: "Mathematics in the age of AI", arXiv:2608.16753, submitted 2026-08-17 — "an essay, based on a public lecture delivered at the 2026 International Congress of Mathematicians" | verified | [arXiv:2608.16753](https://arxiv.org/abs/2608.16753) |
| The essay contains the responsibility statement most relevant to `+AI`: *"Credit and responsibility continue to belong to humans within the mathematical community and should not be given to automated systems."* | verified | [arXiv:2608.16753 (HTML)](https://arxiv.org/html/2608.16753v1) |
| Media coverage of the lecture (mathematics entering an "industrial age"; recommendations including "Transparent Disclosure of AI Use" and "Human Authors Remain Responsible") | verified | [Simons Foundation, 2026-08-13](https://www.simonsfoundation.org/2026/08/13/fields-medalist-terence-tao-on-artificial-intelligence-and-why-we-do-math/); [cuicaihao.com summary, 2026-07-31](https://cuicaihao.com/2026/07/31/mathematics-in-the-age-of-ai-terence-taos-vision-for-the-mathematical-community/); [Mindplex, 2026-08-20](https://magazine.mindplex.ai/post/mathematics-in-the-age-of-artificial-intelligence-terence-tao); Chinese-language reports ([163.com, 2026-07-26](https://www.163.com/dy/article/L2PNL92U05119734.html)) |
| Tao's earlier AI-related essay "Embracing change and resetting expectations" is a Microsoft AI Anthology essay, published 2023-06-12 — **not** an April 2023 blog post as sometimes stated | verified (with correction) | [Microsoft AI Anthology — Terence Tao](https://unlocked.microsoft.com/ai-anthology/terence-tao/) |

### 5.3 The 45:00–48:00 segment

The claim that minutes 45:00–48:00 of the recording triggered the idea is the
founder's account and is **best-effort**: the video has no chapters and no
timestamped transcript was found, so the content of that specific window cannot
be independently confirmed. The lecture's closing argument per the arXiv essay
and coverage — that credit and responsibility remain with humans — is
thematically consistent with `+AI` but is not evidence for the specific
timestamp. Per specification §5.2.2, the motivation document MUST describe the
segment as the founder's recollection, not as a citable quotation. If a
transcript or timestamped summary becomes available, it should be added to the
change record (§12) and the motivation document updated.

### 5.4 Why the lecture matters to the claim

Tao's reported thesis — that AI-generated mathematics will scale beyond human
capacity to audit, so the binding constraint becomes *who vouches for a result*
— is the intellectual backdrop for `+AI`'s move from "AI was used" to "a named
human stands behind this". Nothing in the verified coverage shows Tao proposing
a disclosure notation; the lecture is inspiration, and the notation claim stands
or falls on §8, not on Tao.

## 6. What this report draws on inside the repository

- `docs/THE-PLAN.md` §2 — the novelty claim and its two transformations
  (AI disclosure → accountable human declaration; disclosure label →
  situational responsibility post-nominal).
- `docs/DECLARATION-HARD*.md` — the fixed one-line meaning.
- `site/SPECIFICATION.md` v0.1 — the canonical notation and normative meaning.
- `docs/core-extensions.md` §0–1 — the invariant that the mark is free,
  file://-safe, and unowned, and the existing C2PA/IPTC alignment notes.
- `docs/suggestions/motivation-and-prior-art-dsh.md` — the normative
  requirements this report satisfies (notably §5.2.1–8).

## 7. Thematic survey of prior art

Nine families of practice are surveyed. Each subsection states why the family
matters to the claim, then lists its register entries. Entries use the schema
of §2.1; `relation` is per the vocabulary of §2.2. The consolidated register in
§9 repeats every entry once, in id order.

For the non-AI mechanism families (§7.1–7.4, §7.9) the vocabulary is applied
mechanically, since none of those practices lives in the AI-disclosure problem
space:

- `precursor` — an earlier practice in the same *lineage* (marks appended to
  names or works, production-role disclosure, short fixed marks) that shaped the
  design space before the AI era;
- `overlap` — a practice whose *mechanism* concretely shares at least two of the
  claim's elements (name-adjacent mark, fixed one-line meaning, permissionless
  use, responsibility assertion) even though it does not concern AI;
- `adjacent` — a parallel convention in another domain that shares at most one
  of those elements.

### 7.1 Notation lineage: post-nominals, name suffixes, and signing marks

The claim's first component (C1, C5) is *positional*: a mark appended to a
person's name. That position has a long, partly regulated history. Two facts
matter to the novelty analysis: (a) the position itself is ancient and
unowned; (b) nearly all historical occupants of the position are *conferred*
(degrees, honours, titles) — the self-asserted, permissionless occupants are
the exceptions, and they are the useful comparators.

| id | title | date | relation | note |
|---|---|---|---|---|
| PA-001 | Academic post-nominal letters (PhD, MD, BA…) | 13th c. (medieval universities) on | precursor | Origin of the post-nominal practice; conferred by institutions, not self-asserted. [Wikipedia: post-nominal letters](https://en.wikipedia.org/wiki/Post-nominal_letters) |
| PA-002 | UK honours post-nominals (OBE, CBE…) | 1917 (OBE created) | precursor | State-granted letters; unauthorized use is regulated — the regulated extreme of the position. [UK Cabinet Office](https://honours.cabinetoffice.gov.uk/about/orders-and-medals/) |
| PA-003 | Professional designations (PE 1907, CPA 1896, RN, CEng) | 1896–1907 on | precursor | Licensed/registered post-nominals carrying legal responsibility to practise. [NSPE licensure history](https://www.nspe.org/media-inquiries/resources/100-years-engineering-licensure) |
| PA-004 | Regulated title protection (e.g. US "MD" practice acts) | state statutes | precursor | Legal protection of conferred titles — the contrast class the `+AI` mark deliberately avoids (no title, no protection, no offense). Specific statutes: UNVERIFIED |
| PA-005 | Chess titles (GM, IM, FM) | 1950 (first GMs) | precursor | FIDE-granted post-nominal achievement marks; gatekeeper-awarded. [FIDE titles](https://en.wikipedia.org/wiki/FIDE_titles) |
| PA-006 | "Esq." (US attorneys) | 19th c. convention | overlap | Self-asserted, unregulated post-nominal signalling a role; the closest post-nominal mechanism precedent for a permissionless mark. [Esquire](https://www.encyclopedia.thefreedictionary.com/Esquire) |
| PA-007 | Generational suffixes Jr./Sr./II/III | long-standing | overlap | Unregulated, fixed-meaning name suffixes; the name-adjacent position with no gatekeeper. [Emily Post](http://www.emilypost.com/communication-and-technology/social-names-and-titles/294-mens-names-and-titles) |
| PA-008 | Genealogical asterisk (born) / dagger (died) | centuries-old | overlap | Fixed symbols appended to names with fixed meaning; the pre-digital precedent for "one mark, one meaning, no permission". [Unicode mail archive](https://unicode.org/mail-arch/unicode-ml/y2003-m02/0459.html) |
| PA-009 | Dagger after a deceased person's name (Ger. *Todeszeichen*) | long-standing | overlap | Name-adjacent status mark in ordinary text; shows the position is culturally familiar. [de.wikipedia: Kreuz (Schriftzeichen)](https://de.wikipedia.org/wiki/Kreuz_(Schriftzeichen)) |
| PA-010 | "pp." (*per procurationem*) | long-standing | overlap | Fixed two-letter mark adjacent to a signature meaning "signed on behalf of" — a responsibility-delegation notation, the direct ancestor of signing marks. [OED](https://www.oed.com/dictionary/pp_adv) |
| PA-011 | "c/o", "℅", "attn:" | standard correspondence | adjacent | Routing and attention marks appended to names; notation position without responsibility meaning. Dating: UNVERIFIED |

### 7.2 Byline, credit, and production-attribution conventions

Component C2 (situational scope) has its own lineage: conventions that attach a
credit to a *specific work* and separate the roles that produced it. These are
the practices `+AI` most resembles in spirit — "who did what on this artifact" —
without any of them carrying a personal responsibility mark.

| id | title | date | relation | note |
|---|---|---|---|---|
| PA-012 | Printmaker Latin credits (*pinxit, sculpsit, delineavit, invenit, fecit, excudit*) | 15th–18th c. | precursor | Fixed short Latin marks on prints separating designer, draughtsman, engraver, publisher — the earliest fixed-vocabulary production disclosure. [Princeton Graphic Arts](https://swh.princeton.edu/~graphicarts/2009/02/printmakers_abbreviations.html) |
| PA-013 | Comics credit boxes (pencils/inks/letters/colors) | 1960s (Marvel/DC) | adjacent | Per-issue role credits separating the human hands in one artifact; the per-work scoping `+AI` uses, without a personal mark. [Sol Brodsky](https://en.wikipedia.org/wiki/Sol_Brodsky) |
| PA-014 | Possessory credit "A film by X" / "directed by" | 1960s–2004 (DGA rules) | adjacent | A single credit asserting one person stands behind the whole work; contractually regulated (DGA), unlike a permissionless mark. [DGA possessory credit timeline](https://www.dga.org/craft/dgaq/issues/0402-february-2004/possessory-credit-timeline) |
| PA-015 | "feat." / "ft." featured-artist credit | mid-20th c. convention | adjacent | Fixed short notation for collaboration credit appended to names in music titles. [RouteNote guide](https://routenote.com/blog/artist-credits-how-to-credit-the-other-people-in-your-music/) |
| PA-016 | "aka" / "fka" | "aka" long-standing; "fka" ~2000s | adjacent | Fixed name-transition notations; precedent for a two-three character identity qualifier. "fka" dating: UNVERIFIED |
| PA-017 | Book credit words ("with", "as told to", "edited by", "foreword by") | long-standing | adjacent | Fixed vocabulary for contribution roles on covers and title pages. [Chicago Manual of Style](https://www.chicagomanualofstyle.org) |
| PA-018 | Colophon and "This book was set in …" | medieval mss to letterpress era | precursor | The artifact's production disclosure: type, tool, and maker named on the work itself. [Wikipedia: Colophon](https://en.wikipedia.org/wiki/Colophon_(publishing)) |
| PA-019 | "Printed and bound in …" credits | standard printing practice | adjacent | Production-provenance disclosure on published artifacts. Dating: UNVERIFIED |

### 7.3 Short fixed-meaning marks and machine-readable notations

The claim's third and fifth components (C3 fixed meaning, C5 no permission)
have a dense lineage of short marks whose entire content is a defined
statement: legal notices, tool-disclosure fields, and license marks. The
closest structural analog to `+AI` in the whole register lives here: SPDX.

| id | title | date | relation | note |
|---|---|---|---|---|
| PA-020 | © copyright notice | Berne 1886; US 1909 (required) / 1988 (optional) | precursor | A one-character mark with a defined legal meaning attached to works. [Digital Law Online treatise](https://digital-law-online.info/lpdi1.0/treatise7.html) |
| PA-021 | ® vs ™ | Lanham Act 1946 | adjacent | The registered/self-asserted distinction; `+AI` deliberately has no registered form, remaining at the ™ end. [15 U.S.C. 1111](https://www.law.cornell.edu/uscode/text/15/1111) |
| PA-022 | "patent pending" / "pat. pend." | long-standing | overlap | A short self-asserted status notice with legal consequence; the "fixed phrase as status mark" mechanism. [USPTO](https://www.uspto.gov/patents/basics) |
| PA-023 | "All rights reserved" | Buenos Aires Convention 1910 | adjacent | Fixed legal notice phrase on works. [Wikipedia](https://en.wikipedia.org/wiki/All_rights_reserved) |
| PA-024 | "Made in …" country-of-origin marking | Tariff Act 1930 | adjacent | Mandated production-provenance disclosure on artifacts. [19 CFR Part 134](https://www.govinfo.gov/content/pkg/CFR-2009-title19-vol1/xml/CFR-2009-title19-vol1-part134-subpartE.xml) |
| PA-025 | CE marking | New Approach 1985; 93/68/EEC 1993 | overlap | A two-letter self-declared conformity mark: the manufacturer, not a regulator, declares and accepts responsibility. The closest legal analog to "I declare, I take responsibility". [EUR-Lex 93/68/EEC](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:01993L0068-19980401) |
| PA-026 | FCC ID | long-standing (47 CFR) | adjacent | Fixed regulatory identifier mark on devices. [47 CFR Part 15](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15) |
| PA-027 | HTML `<meta name="generator">` | 1990s | overlap | Machine-readable disclosure of the tool that produced a page; the disclosure layer `core-extensions.md` §1.1 explicitly models on. [W3C list archive](https://lists.w3.org/Archives/Public/html-tidy/2000JanMar/0068.html) |
| PA-028 | PDF Producer/Creator fields | 1993 (PDF 1.0) | overlap | Standard metadata disclosing the generating software on every PDF. [PDF specification (Adobe)](https://www.adobe.com) |
| PA-029 | EXIF "Software" tag | 1995 (v1.0); JEITA CP-3451 later | overlap | Standard image metadata naming the creating software. [Wikipedia: Exif](https://en.wikipedia.org/wiki/Exif) |
| PA-030 | X-Mailer / User-Agent headers | 1990s | overlap | Message-level disclosure of the producing software. [e-Words: X-Mailer](https://e-words.jp/w/X-Mailer.html) |
| PA-031 | "Sent from my iPhone" | 2007 (default Mail signature) | overlap | The most widespread casual tool disclosure: a fixed sentence appended to personal messages, permissionless and ubiquitous. [iPhone Life](https://www.iphonelife.com/content/tip-day-remove-sent-my-iphone-your-email-signature) |
| PA-032 | protoc "DO NOT EDIT" headers | ~2008 | overlap | Generated-code disclosure with an explicit responsibility boundary ("edits will be overwritten") — tool disclosure plus accountability rule. [golang/protobuf commit](https://github.com/golang/protobuf/commit/47eb67eaf5cab63c58956d4d4ce86b03ad5eaa03) |
| PA-033 | "Shot on iPhone" | 2015 (World Gallery) | adjacent | Tool-brand watermark campaign: disclosure of the tool on the artifact, but as brand advertising, not accountability. [Wikipedia](https://en.wikipedia.org/wiki/Shot_on_iPhone) |
| PA-034 | "Built with"/"Made with" web badges | web convention | overlap | Ubiquitous permissionless tooling-disclosure badges on sites and repos. Dating: UNVERIFIED |
| PA-035 | "Made with Unity" splash screen | Unity Personal/Plus requirement | overlap | Mandated tool disclosure displayed with the published artifact. Start date: UNVERIFIED |
| PA-036 | SPDX-License-Identifier | 2011 (project); expressions in SPDX 2.1 (2017); kernel-wide 2019 | overlap | A short, fixed, machine-readable string (`SPDX-License-Identifier: MIT`) with a standardized meaning, usable without registration — the closest structural analog to `+AI`'s mark-plus-fixed-meaning design. [SPDX](https://spdx.dev/); [Linux Foundation press](https://www.linuxfoundation.org/press/press-release/the-linux-foundations-open-compliance-initiative-releases-new-spdx-specification) |
| PA-037 | Creative Commons licenses | 2002 | overlap | Free, permissionless, standardized marks with a fixed human-readable deed and machine-readable expression; the model case for a commons mark that is not owned as characters. [CC history](https://creativecommons.org/history/) |
| PA-038 | CC0 | 2009 | overlap | The zero-conditions variant: a mark whose whole meaning is a waiver. [CC announcement](https://creativecommons.org/2009/03/11/expanding-the-public-domain-part-zero/) |
| PA-039 | "Some Rights Reserved" badge | 2002 | overlap | The companion fixed phrase to the CC marks. [Creative Commons](https://creativecommons.org/) |
| PA-040 | rel="license" / RDFa | 2008 (W3C rec) | overlap | Machine-readable expression of the mark, separate from its pixels — the split `+AI`'s machine-readable assertions plan mirrors. [CC/W3C announcement](https://creativecommons.org/2008/10/16/rdfa-now-a-w3c-recommendation-message-from-hal-abelson/) |

### 7.4 Responsibility trailers and situational status marks

Component C4 (responsibility-bearing) is where the register gets sharpest:
these are the practices in which a *person asserts something about their own
standing* with a short fixed mark — signed-off-by trailers in code, mandated
responsibility disclaimers in advertising, and self-declared status marks on
profiles.

| id | title | date | relation | note |
|---|---|---|---|---|
| PA-041 | DCO "Signed-off-by" trailer | 2004 (Linux kernel) | overlap | A fixed trailer in which a developer certifies authorship/right-to-submit; the model of "asserted individual responsibility as a notation", permissionless and unregistered. [developercertificate.org](https://developercertificate.org); [LKML 2004-05-25](https://lkml.org/lkml/2004/5/25/103) |
| PA-042 | "Co-authored-by" trailer | 2018 (GitHub) | overlap | Fixed trailer declaring collaboration on a commit — the notation pattern `+AI` could have grown from, applied to machines. [GitHub blog](https://github.blog/news-insights/product-news/commit-together-with-co-authors/) |
| PA-043 | "Reviewed-by"/"Acked-by"/"Tested-by" trailers | 2004+ (Linux) | overlap | A whole vocabulary of responsibility trailers separating roles on one patch. [Kernel submitting-patches](https://www.kernel.org/doc/html/latest/process/submitting-patches.html) |
| PA-044 | Pronouns in signatures and badges (she/her) | ~2019–2022 | overlap | A voluntary, self-asserted, fixed-meaning suffix appended to names in signatures and profiles; the closest adoption-model precedent (no gatekeeper, spread by norm). [Telegraph 2021-11-10](https://www.telegraph.co.uk/business/2021/11/10/rise-pronoun-underlines-citys-conversion-woke-agenda/) |
| PA-045 | LinkedIn "OpenToWork" frame | 2020-10 | overlap | A situational status mark attached to a person's name/avatar; platform-provided, not a notation. [Entrepreneur](https://www.entrepreneur.com/business-news/linkedin-launches-tools-aimed-at-pandemic-job-seekers/358730) |
| PA-046 | Gmail "External" recipient label | 2014 | adjacent | An automated situational provenance label appended to messages — shows recipients *read* name-adjacent status marks. [Google Workspace help](https://support.google.com/a/answer/7380041) |
| PA-047 | WhatsApp "Forwarded"/"Frequently forwarded" labels | 2018/2019 | adjacent | Automated provenance marks appended to messages at platform scale. [Hindustan Times Tech](https://tech.hindustantimes.com/tech/news/whatsapp-now-tells-users-when-a-message-has-beenforwarded-many-times-story-IRFr4I0jLGFM0VNQZLrFPP.html) |
| PA-048 | "(edited)" markers | Slack (long-standing); Twitter/X edit 2022 | adjacent | Situational status markers appended to messages. [TechRadar](https://www.techradar.com/news/twitters-edit-button-is-finally-here-but-not-for-everyone) |
| PA-049 | "#ad" influencer disclosure | FTC guides 1980, revised 2009; #ad practice ~2014–2017 | overlap | A short, fixed, permissionless disclosure tag appended to content, mandated in effect by regulator guidance — the social-media precedent for "one short mark = one disclosure". [16 CFR Part 255](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255) |
| PA-050 | "Paid for by" political-ad disclaimers | FECA 1971/1974 | overlap | Legally mandated responsibility attribution appended to ads: the advertiser must be named and accept responsibility. [FEC](https://www.fec.gov/help-candidates-and-committees/making-disbursements/advertising/candidate-television-ad-example/) |
| PA-051 | FCC broadcast sponsorship identification (§317) | Communications Act 1934 | overlap | The original "tell the audience who paid" disclosure mandate for broadcasts. [47 U.S.C. 317](https://www.law.cornell.edu/uscode/text/47/317) |

### 7.5 AI-disclosure badges, labels, and comparable marks

The family closest to the claim's problem space. Three sub-groups matter:
(1) *human-made badges* — marks asserting the inverse (`no AI`), which prove the
audience for a short disclosure mark exists; (2) *platform and marketplace
labels* — AI-disclosure that is applied by, or under compulsion of, a platform,
not asserted voluntarily by the signer; (3) *byline-level disclosures* — the
journalism practices that first put "AI helped" next to a human byline. The
single most relevant entry in the whole register is PA-123 (HGCP).

| id | title | date | relation | note |
|---|---|---|---|---|
| PA-085 | "Not By AI" badge | 2023-03 | overlap | Badge asserting content is ≥90% human-made; free non-commercial tier. The inverse of `+AI`; proves the mark-genre demand. [notbyai.fyi](https://notbyai.fyi); pricing [notbyai.fyi/pricing](https://notbyai.fyi/pricing) |
| PA-086 | The Human Made Mark (film/TV) | 2026 | adjacent | Certifies AI-free film/TV productions; launched at Pech Merle cave. [Variety, 2026](https://variety.com/2026/film/global/the-human-made-mark-ai-free-film-initiative-launches-1236728524/) |
| PA-087 | Human Made Mark (advertising craft, W. Grave) | date UNVERIFIED | adjacent | "Fairtrade for craft" label for advertising craft. [LBB Online](https://lbbonline.com/news/human-made-mark-ai-label-craft-fairtrade-advertising-william-grave) |
| PA-088 | Humanable (music certification) | launch UNVERIFIED | adjacent | AI-free music certification with sworn affidavit and detection. [Aiforautomation, 2026-03-20](https://aiforautomation.io/news/2026-03-20-ai-free-human-made-certification-logo-eight-groups-race) |
| PA-089 | Books by People | launch UNVERIFIED | adjacent | UK publisher vetting for human-made books. [Aiforautomation, 2026-03-20](https://aiforautomation.io/news/2026-03-20-ai-free-human-made-certification-logo-eight-groups-race) |
| PA-090 | Proudly Human | launch UNVERIFIED | adjacent | Australian full-process audit mark. [Aiforautomation, 2026-03-20](https://aiforautomation.io/news/2026-03-20-ai-free-human-made-certification-logo-eight-groups-race) |
| PA-091 | Verified Human | launch UNVERIFIED | adjacent | Certifies human-made work via creator certification; explicitly "not AI detection". [verifiedhuman.info](https://verifiedhuman.info/about) |
| PA-092 | Fairly Trained | 2024-01 | adjacent | Certifies AI *models* trained on consented data — provider-side, not user-side disclosure. [fairlytrained.org](https://fairlytrained.org) |
| PA-093 | Meta "Made with AI" → "AI info" labels | 2024-04 (renamed 2024-07) | adjacent | Platform-applied AI-content labels; renamed after creator backlash. [dig.watch](https://dig.watch/updates/meta-revises-ai-labels) |
| PA-094 | YouTube "altered or synthetic content" disclosure | 2024-03 | adjacent | Creators must disclose realistic altered/synthetic content. [YouTube blog](https://blog.youtube/news-and-events/disclosing-ai-generated-content/) |
| PA-095 | TikTok AI-generated labels | 2023-09 | adjacent | Auto-applied plus creator "AI-generated" labels. [AP News](https://apnews.com/article/tiktok-ai-label-creators) |
| PA-096 | LinkedIn AI content labels | 2024 | adjacent | C2PA-based AI-content labeling on posts. [MediaPost](https://mediapost.com/publications/article/396225/linkedin-begins-labeling-ai-generated-content.html) |
| PA-097 | Content Credentials "CR" pin | C2PA founded 2021-02; glyph unveiled 2023-10 | adjacent | The provenance ecosystem's visual mark; a *tool* statement, not a personal declaration. [PetaPixel, 2023-10](https://petapixel.com/2023/10/11/adobe-unveils-content-credentials-symbol/) |
| PA-098 | Steam AI-content disclosure | 2024-01 | adjacent | Developers must disclose pre-generated/live-generated AI content in games. [Game Developer](https://gamedeveloper.com) |
| PA-099 | Amazon KDP AI disclosure | 2023-09 | adjacent | KDP requires disclosing AI-generated text/images in books. [Publishers Weekly via Books+Publishing](https://booksandpublishing.com.au/articles/2023/09/12/237579/) |
| PA-100 | Amazon AI-review labels | 2023, exact date UNVERIFIED | adjacent | AI-content indicators added to reviews; no solid source located — UNVERIFIED |
| PA-101 | Etsy "Creativity Standards" | 2024-07 | adjacent | Sellers must disclose AI use; AI works must be original/handmade. [Entrepreneur](https://entrepreneur.com/business-news/is-ai-allowed-on-etsy) |
| PA-102 | eBay AI listing disclosure | date UNVERIFIED | adjacent | AI disclosure in listings; primary policy URL not located — UNVERIFIED |
| PA-103 | Adobe Stock generative-AI labels | 2022-12-05 | adjacent | Contributors must label generative-AI content. [Adobe blog](https://blog.adobe.com/en/publish/2022/12/05/amplifying-human-creativity) |
| PA-104 | Shutterstock generative-AI labeling | 2022 | adjacent | Generative-AI content must be marked on submission. [Shutterstock help](https://submit.shutterstock.com/help/articles/10594676) |
| PA-105 | Stack Overflow AI-answer ban | 2022-12 (temporary ban; later policy) | adjacent | Bans undisclosed AI-generated answers; disclosure required where allowed. [Meta Stack Overflow](https://meta.stackoverflow.com/a/422038) |
| PA-106 | Wikipedia large-language-model policy (WP:LLM) | 2023 | adjacent | Editors must disclose LLM use; humans remain responsible for content. [WP:LLM](https://en.wikipedia.org/wiki/Wikipedia:Large_language_model_policy) |
| PA-107 | Reddit bot "[App]" label | 2024 | adjacent | Labels automated profiles. [Social Media Today](https://socialmediatoday.com/news/reddit-implements-new-app-label) |
| PA-108 | Discord "BOT" tag | long-standing | adjacent | Automatic bot-account tag — machine-identity labeling, inverse of a personal mark. [Discord developers](https://discord.com/developers/docs) |
| PA-109 | X/Twitter "automated" account labels | 2021-09-09 | adjacent | Voluntary self-identification of "good bots". [TechCrunch](https://techcrunch.com/2021/09/09/twitter-introduces-a-new-label-that-allows-the-good-bots-to-identify-themselves/) |
| PA-110 | ActivityPub actor types (Person/Service/Application) | W3C spec | adjacent | Account-type vocabulary marking bots/services on the fediverse. [W3C ActivityPub](https://www.w3.org/TR/activitypub/#actor-types) |
| PA-111 | Bluesky composable labels | 2024-03-15 | adjacent | Third-party composable labeling system on accounts/content. [Bluesky docs](https://github.com/bluesky-social/bsky-docs) |
| PA-112 | Medium AI disclosure policy | 2023-01 (tightened 2024-04) | adjacent | AI-assisted posts must be labeled; paywalled AI content later barred. [The Verge](https://www.theverge.com/2023/1/27/23573954/medium-platform-publisher-ai-written-posts-policy-chatgpt) |
| PA-113 | Substack AI detection tool | 2026-07 | adjacent | Platform-side AI detection and author notes, not a voluntary mark. [TechCrunch, 2026-07-22](https://techcrunch.com/2026/07/22/substacks-new-tool-tells-you-whos-been-writing-their-newsletters-with-ai/) |
| PA-114 | Apple Podcasts AI content guidelines | 2024 | adjacent | Content guidelines requiring AI disclosure. [Radio Today AU](https://radiotoday.com.au/apple-podcasts-and-youtube-update-content-guidelines-on-ai/) |
| PA-115 | Spotify AI-music policy | 2023-09 | adjacent | Flags/removes synthetic audio; AI-persona badges for artists. [Digital Music News](https://digitalmusicnews.com/2023/09/26/spotify-ai-music-policy/) |
| PA-116 | CNET "Assisted by an AI engine" | 2023-01 | overlap | The first major disclosed-AI byline: a fixed short phrase attached to the byline area. Editorial, not a personal mark — the closest journalism precursor. [The Verge](https://www.theverge.com/2023/6/6/23750761/cnet-ai-generated-stories-policy-update) |
| PA-117 | Gannett LedeAI sports bylines | 2023-08 | adjacent | Botched automated sports articles; experiment paused — the cautionary case. [CNN](https://edition.cnn.com/2023/08/30/tech/gannett-ai-experiment-paused) |
| PA-118 | Sports Illustrated / Arena Group fake AI authors | 2023-11 | adjacent | AI-generated authors with fake bios — trust damage case. [NY Post](https://nypost.com/2023/11/27/media/sports-illustrated-scrubs-ai-generated-content) |
| PA-119 | Hoodline AI journalist profiles | 2024 | adjacent | Fake human names for AI stories — cautionary case. [Gazetteer SF](https://sf.gazetteer.co/hoodline-using-ai-to-generate-news-stories-and-journalist-profiles) |
| PA-120 | ChatGPT named as co-author | 2023-01-18 | adjacent | Nature reports ChatGPT credited as author on papers/preprints — tool-as-author, the wrong direction `+AI` corrects. [Nature](https://www.nature.com/articles/d41586-023-00188-w) |
| PA-121 | Survey of ChatGPT co-authorship on arXiv | 2023-06 | adjacent | Documents the tool-as-author practice. [arXiv:2306.06699](https://arxiv.org/pdf/2306.06699v1) |
| PA-122 | "Written by Claude · Curated and signed by Peter" | 2026-04-28 | overlap | A live, pre-project byline coupling an AI credit with a human signatory — an AI-name + human-signatory form, but a byline, not a post-nominal with a fixed meaning. [AgentMode AI](https://agentmodeai.com/the-ai-author-signature-decision/) |
| PA-123 | HGCP — A Voluntary Signing Framework for Human Expression in the Age of AI | 2025-03-29 (draft-00); expired 2026-02-11 | overlap | **The strongest located prior art.** Permissionless, platform-neutral, identity-flexible signature *block* (signer id, timestamp, content hash, free-form declaration) in which a human declares "This is mine, and I stand by it" — explicitly "not anti-AI… even if AI helped, they are choosing to take human responsibility for the final output." No name-appended mark; expired, never adopted by any IETF WG. [IETF datatracker](https://datatracker.ietf.org/doc/draft-taoqiwen-hgcp/) |
| PA-124 | AIA — Artificial Intelligence Attribution badge system | 2024 | overlap | Law-review proposal for icon badges delineating AI involvement across research→writing→editing; explicitly analogizes to Creative Commons. Icons, not a post-nominal. [22 Nw. J. Tech. & Intell. Prop. 1](https://repository.law.miami.edu/fac_articles/1258/) |
| PA-125 | AI content disclosure markup for HTML (W3C WebAI CG) | explainer c. 2024; CG discussion 2026-01 | adjacent | Element-level machine-readable AI-authorship markup — metadata, not a human mark. [Explainer](https://github.com/dweekly/ai-content-disclosure); [W3C WebAI list](https://lists.w3.org/Archives/Public/public-webai/2026Jan/0006.html) |
| PA-126 | Resnik & Hosseini — faceted attribution of AI-assisted text | 2026-04 (arXiv 2604.25346) | adjacent | Academic taxonomy arguing disclosure should be proportionate, not indiscriminate. [arXiv](https://ar5iv.labs.arxiv.org/html/2604.25346) |
| PA-127 | Hosseini et al. — voluntary disclosure of generative-AI writing assistance | 2025 | adjacent | Argues disclosure should be voluntary — supports the no-permission stance, without proposing a mark. [Research Ethics](https://journals.sagepub.com/doi/10.1177/17470161251345499) |

### 7.6 Provenance standards and disclosure metadata

The infrastructure family the specification §5.2.7 requires the motivation
document to acknowledge by name. These standards record *what tool did what*;
none records *who stands behind the result* — the gap `core-extensions.md` §1.5
states as the project's contribution. Tool-disclosure fields (EXIF, PDF
Producer, `generator` meta) also appear in §7.3; XMP is registered here as the
container those claims serialize into.

| id | title | date | relation | note |
|---|---|---|---|---|
| PA-128 | SynthID (Google DeepMind) | 2023-08-29 | adjacent | Invisible watermark for AI-generated images/text/audio — detection, not a responsibility mark. [DeepMind blog](https://deepmind.google/blog/identifying-ai-generated-images-with-synthid/) |
| PA-129 | Content Authenticity Initiative (CAI) | 2019-11-04 | precursor | Adobe + The New York Times Company + Twitter announce the CAI to attach attribution/provenance to media. [NYT Company press](https://www.nytco.com/press/adobe-new-york-times-company-twitter-announce-content-authenticity-initiative/) |
| PA-130 | C2PA founding | 2021-02-22 | precursor | Adobe, Arm, BBC, Intel, Microsoft, Truepic found the Coalition for Content Provenance and Authenticity, unifying CAI and Project Origin specs. [C2PA press](https://c2pa.org/c2pa-founding-press-release/) |
| PA-131 | C2PA specification 1.0 | 2022-01-26 | adjacent | First normative provenance spec. [Adobe blog](https://blog.adobe.com/en/publish/2022/01/26/cp2a-1spec-adobeblogv1) |
| PA-132 | C2PA specification 2.0 | 2024-01 | adjacent | Adds the C2PA Trust List; X.509-only signing. [C2PA spec](https://spec.c2pa.org/specifications/specifications/2.1/specs/C2PA_Specification.html) |
| PA-133 | C2PA specification 2.1 | 2024-09 | adjacent | Ingredients v3 + soft binding; underpins Google/OpenAI/Meta AI-content labeling. [C2PA spec](https://spec.c2pa.org/specifications/specifications/2.1/specs/C2PA_Specification.html) |
| PA-134 | Google joins C2PA steering committee | 2024-02-08 | adjacent | To surface Content Credentials in Search/YouTube. [Business Wire](https://www.businesswire.com/news/home/20240208176557/en/Google-Joins-C2PA-Steering-Committee) |
| PA-135 | OpenAI joins C2PA steering committee | 2024-05-07 | adjacent | To embed Content Credentials in DALL·E images. [C2PA](https://c2pa.org/openai-joins-c2pa-steering-committee/) |
| PA-136 | Meta joins C2PA steering committee | 2024-09-05 | adjacent | Follows Meta's Feb 2024 commitment to label AI images. [C2PA](https://spec.c2pa.org/post/meta_pr/) |
| PA-137 | C2PA membership growth | 2026-02-09 | adjacent | 6 founders (2021) → "more than 6,000 members and affiliates" by Feb 2026. [C2PA](https://c2pa.org/the-c2pa-launches-content-credentials-2-3-and-celebrates-5-years-of-impact-across-the-digital-ecosystem/) |
| PA-138 | Project Origin | 2018 | precursor | BBC + CBC/Radio-Canada + The New York Times + Microsoft content-verification project; merged with CAI into C2PA in 2021. [BBC](https://www.bbc.com/beyondfakenews/trusted-news-initiative/project-origin-securing-trust-in-media) |
| PA-139 | IPTC Digital Source Type | 2019 (AI values 2023) | adjacent | Photo Metadata Standard 2019.1 property; 2023 added `trainedAlgorithmicMedia` / `compositeWithTrainedAlgorithmicMedia` / `algorithmicallyEnhanced`. [IPTC news codes](https://cv.iptc.org/newscodes/digitalsourcetype/) |
| PA-140 | Schema.org `digitalSourceType` | 2024-01-08 (v24.0) | adjacent | CreativeWork property aligned with IPTC via IPTCDigitalSourceEnumeration. (Note: a schema.org `aiGenerated` property does not exist.) [schema.org](https://schema.org/digitalSourceType) |
| PA-141 | W3C PROV-O | 2013-04-30 (REC) | precursor | The generic provenance ontology predating all AI-specific provenance work. [W3C](https://www.w3.org/TR/prov-o/) |
| PA-142 | W3C PROV-AQ | 2013-04-30 (Note) | precursor | Locating and retrieving provenance records. [W3C](https://www.w3.org/TR/prov-aq/) |
| PA-143 | XMP (Extensible Metadata Platform) | 2001 (ISO 16684-1:2012) | precursor | The metadata container into which IPTC Digital Source Type and C2PA claims serialize. [Adobe XMP specs](https://developer.adobe.com/xmp/docs/xmp-specifications/) |
| PA-144 | JPEG Trust (ISO/IEC 21617) | 2025-01 (Part 1) | adjacent | Media authenticity/provenance/attribution framework. [JPEG.org](https://jpeg.org/jpegtrust/index.html) |
| PA-145 | JPEG AI (ISO/IEC 6048 / ITU-T T.840) | 2025 | adjacent | First learning-based image codec; compression, not disclosure. Registered for completeness. [JPEG.org](https://jpeg.org/jpegai/index.html) |
| PA-146 | C2PA Trust List | 2024-09 (spec 2.1) | adjacent | C2PA-managed X.509 trust anchors for verifying Content Credentials. [CAI docs](https://opensource.contentauthenticity.org/docs/conformance/trust-lists/) |
| PA-147 | Robots META `noindex`/`nofollow` | 1996 | precursor | The meta-tag opt-out mechanism later reused for `noai`. [robotstxt.org](http://www.robotstxt.org/meta.html) |
| PA-148 | DeviantArt `noai`/`noimageai` meta tags | 2022-11-11 | adjacent | Opt-out flags marking artwork not authorized for AI-training datasets. [DeviantArt journal](https://www.deviantart.com/team/journal/UPDATE-All-Deviations-Are-Opted-Out-of-AI-Datasets-934500371) |
| PA-149 | Spawning ai.txt | 2023-05 | adjacent | robots.txt-style site-root consent file for AI training. [spawning.ai](https://spawning.ai/ai.txt) |
| PA-150 | Have I Been Trained | 2022-09 | adjacent | Dataset search/opt-out tool; later the "Do Not Train" registry. [haveibeentrained.com](https://haveibeentrained.com) |

### 7.7 Disclosure regulation and legal mandates

Government-mandated disclosure is the *floor* `+AI` voluntarily meets: these
instruments make "AI was used" a legal duty in specific contexts, always as
machine-readable marking or platform disclosure — never as a voluntary personal
mark. The EU AI Act's transparency article became applicable on 2026-08-02,
five weeks before this report; the mark rides, and must interoperate with, this
rail (specification §5.2.7).

| id | title | date | relation | note |
|---|---|---|---|---|
| PA-151 | EU AI Act adopted (Regulation (EU) 2024/1689) | 2024-03-13 | adjacent | Parliament adoption 2024-03-13; signed 2024-06-13. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) |
| PA-152 | EU AI Act in force | 2024-08-01 | adjacent | OJ publication 2024-07-12; entry into force 2024-08-01. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) |
| PA-153 | EU AI Act Article 50 transparency obligations apply | 2026-08-02 | adjacent | Machine-readable marking of AI outputs (50(2)); disclosure of AI interaction (50(1)); deepfake disclosure (50(4)). [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) |
| PA-154 | China deep-synthesis provisions | 2023-01-10 (effective) | adjacent | CAC/MIIT/MPS rules mandating labeling of deepfakes. [CAC](http://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm) |
| PA-155 | China AI-content labeling measures | 2025-09-01 (effective) | adjacent | Visible labels + machine-readable/metadata markers (GB 45438-2025). [CAC, 2025-03-14](https://www.cac.gov.cn/2025-03/14/c_1743654685899683.htm) |
| PA-156 | California AI Transparency Act (SB 942) | 2024-09-19 (signed); effective 2026-01-01 | adjacent | Large gen-AI providers must embed provenance metadata and offer detection tools. [LegInfo](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB942) |
| PA-157 | US Copyright Office AI registration guidance | 2023-03-16 (88 FR 16190) | adjacent | Applicants must disclose AI-generated material; protection limited to human-authored elements. [Copyright.gov](https://www.copyright.gov/ai/ai_policy_guidance.pdf) |
| PA-158 | US Copyright Office Part 2: Copyrightability report | 2025-01-29 | adjacent | AI-assisted works copyrightable on case-by-case human authorship; AI elements identified/disclaimed. [Copyright.gov](https://www.copyright.gov/newsnet/2025/1060.html) |
| PA-159 | USPTO inventorship guidance for AI-assisted inventions | 2024-02-13 (89 FR 10043) | adjacent | Significant-human-contribution standard; AI cannot be an inventor. [Federal Register](https://www.federalregister.gov/documents/2024/02/13/2024-02623/inventorship-guidance-for-ai-assisted-inventions) |
| PA-160 | UK Online Safety Act 2023 | 2023-10-26 (Royal Assent) | adjacent | Criminalises deepfake intimate images; no provenance-labeling mandate. [legislation.gov.uk](https://www.legislation.gov.uk/ukpga/2023/50) |
| PA-161 | South Korea AI Framework Act | 2024-12-26 (enacted); effective 2026-01-22 | adjacent | Providers must indicate/label AI-generated content. [law.go.kr](https://law.go.kr/lsInfoP.do?efYd=20260122&lsId=014820&lsiSeq=268543) |
| PA-162 | EU DSA Article 35 (systemic risk) | 2022-10-19 (DSA adopted) | adjacent | VLOP systemic-risk mitigation including generative-AI risks; no direct labeling mandate. [EUR-Lex](https://eur-lex.europa.eu/eli/reg/2022/2065/oj) |

### 7.8 Academic, publishing, and professional AI-disclosure policies

The practices the motivation document says felt incomplete. The register shows
the pattern precisely: beginning January 2023, every publisher, conference, and
professional body settled on the same two moves — (1) AI cannot be an author
*because it cannot be accountable*, and (2) disclosure via a pasted prose
sentence in Methods/Acknowledgements. None uses a compact, name-adjacent,
permissionless mark. These policies are `adjacent` (same problem space,
different mechanism) except where they are the *lineage* of accountability
language (`precursor`).

| id | title | date | relation | note |
|---|---|---|---|---|
| PA-058 | ICMJE Recommendations — "Non-Human Authors" | 2023-05 | adjacent | AI tools "should not be listed as authors"; authors must disclose use of AI-assisted technologies. [ICMJE update](https://www.icmje.org/news-and-editorials/updated_recommendations_may2023.html) |
| PA-059 | COPE position — "Authorship and AI tools" | 2023-02-13 | adjacent | "AI tools cannot meet the requirements for authorship"; use must be declared; accountability is the stated reason. [COPE](https://publicationethics.org/guidance/cope-position/authorship-and-ai-tools) |
| PA-060 | WAME recommendations on chatbots in manuscripts | 2023-01-20 (revised 2023-05) | adjacent | Chatbots "cannot be authors"; use must be disclosed. [WAME](https://www.wame.org/news-details.php?nid=40) |
| PA-061 | Springer Nature AI editorial policy | 2023-01-24 | adjacent | No LLM authors; use "clearly documented in the Methods or Acknowledgements". [Nature Portfolio AI policy](https://www.nature.com/nature-portfolio/editorial-policies/ai) |
| PA-062 | Elsevier "Declaration of generative AI in scientific writing" | 2023 | adjacent | Mandatory disclosure checkbox and pasted declaration; authors "take full responsibility". [Elsevier policy](https://www.elsevier.com/about/policies-and-standards/the-use-of-generative-ai-and-ai-assisted-technologies-in-writing-for-elsevier) |
| PA-063 | Science family journals policy (Thorp editorial) | 2023-01-26 | adjacent | AI-generated text prohibited without disclosure and editor approval; "an AI program cannot be an author". [Science 379(6630):313](https://www.science.org/doi/10.1126/science.adg7879) |
| PA-064 | Nature ground rules on LLM tools | 2023-01-24 | adjacent | No LLM credited as author; use documented in methods or acknowledgements. [Nature 613:612](https://www.nature.com/articles/d41586-023-00191-1) |
| PA-065 | JAMA Network AI authorship guidance | 2023-01-31 (update 2023-06-07) | adjacent | AI cannot be author; use reported in Methods/Acknowledgements; authors certify accountability. [JAMA](https://jamanetwork.com/journals/jama/fullarticle/2801170) |
| PA-066 | ICML paper guidelines (LLM disclosure) | 2023 (ICML 2023), 2024 | adjacent | LLMs may not be authors; authors must disclose LLM use in the paper. [ICML 2024 guidelines](https://icml.cc/Conferences/2024/PaperGuidelines) |
| PA-067 | NeurIPS 2023 AI policy | 2023 | adjacent | LLMs not authors; "any LLM usage" must be disclosed; distinguishes editing from idea generation. [NeurIPS CFP](https://neurips.cc/Conferences/2023/CallForPapers) |
| PA-068 | ACL 2023 policy on AI writing assistance | 2023-01 | adjacent | AI assistants may not be authors; assistance must be disclosed; authors responsible for correctness. [ACL 2023 blog](https://2023.aclweb.org/blog/ACL-2023-policy/) |
| PA-069 | CVPR 2024 author guidelines | 2023-12 | adjacent | Generative-AI-assisted content must be disclosed; AI tools cannot be authors. [CVPR 2024 guidelines](https://cvpr2023.thecvf.com/Conferences/2024/AuthorGuidelines) |
| PA-070 | arXiv policy on generative AI | 2023-01-31 | adjacent | Authors "must report" LLM use; LLMs never listed as authors; disclosure, not ban. [arXiv blog](https://blog.arxiv.org/2023/01/31/arxiv-announces-new-policy-on-chatgpt-and-similar-tools/) |
| PA-071 | IEEE author guidelines for AI-generated text | 2023 | adjacent | AI-generated text must be disclosed; AI cannot be an author; authors "assume full responsibility". [IEEE Open](https://open.ieee.org/author-guidelines-for-artificial-intelligence-ai-generated-text/) |
| PA-072 | ACM Policy on Authorship (generative-AI disclosure) | 2023-08-30 | adjacent | Use of generative AI must be disclosed; dedicated "AI Disclosure" section in the author workflow. [ACM FAQ](https://www.acm.org/publications/policies/frequently-asked-questions) |
| PA-073 | Associated Press standards on generative AI | 2023-08-16 | adjacent | AI output is unvetted source material; no AI bylines; transparency required. [AP](https://www.ap.org/the-definitive-source/behind-the-news/standards-around-generative-ai/) |
| PA-074 | BBC editorial guidance on AI | 2024 | adjacent | Transparency/labelling of AI-generated content; human editorial accountability. [BBC Editorial Guidelines](https://www.bbc.co.uk/editorialguidelines/guidance/use-of-artificial-intelligence) |
| PA-075 | Guardian approach to generative AI | 2023-06-16 | adjacent | GAI used only with senior approval and disclosure. [Guardian](https://www.theguardian.com/help/insideguardian/2023/jun/16/the-guardians-approach-to-generative-ai) |
| PA-076 | NYT principles for generative AI in the newsroom | 2024 | adjacent | Journalists disclose AI use; humans accountable for accuracy and fairness. [NYT Company](https://www.nytco.com/press/principles-for-using-generative-a-i-in-the-timess-newsroom/) |
| PA-077 | CRediT (Contributor Roles Taxonomy) | 2012 (workshop); ANSI/NISO Z39.104-2022 | precursor | The 14-role vocabulary for *who did what* on a paper — the modern fixed vocabulary for production-role disclosure. [CASRAI history](https://casrai.org/credit/history) |
| PA-078 | ICMJE accountability criterion | 2013-08 | precursor | The fourth authorship criterion ("agreement to be accountable for all aspects of the work") — the direct ancestor of the "I take responsibility" clause. [ICMJE 2013 update](https://www.icmje.org/news-and-editorials/new_rec_aug2013.html) |
| PA-079 | Ghost/guest authorship disclosure norms | 2004–2009 (ICMJE/WAME) | precursor | The original requirement to *name* hidden contributors — the prose-disclosure pattern the motivation document argues is incomplete. [WAME/JGIM 2005](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1525-1497.2005.41015.x) |
| PA-080 | Canonical disclosure sentence (Elsevier/Springer) | 2023 | adjacent | "During the preparation of this work the author(s) used [TOOL] in order to [REASON]… take(s) full responsibility for the content." — the exact long-prose form `+AI` compresses into one line. [Elsevier policy](https://www.elsevier.com/about/policies-and-standards/the-use-of-generative-ai-and-ai-assisted-technologies-in-writing-for-elsevier) |
| PA-081 | Nature Portfolio acknowledgement pattern | 2023-01-24 | adjacent | Second canonical form: document LLM use in Methods/Acknowledgements. [Nature Portfolio AI policy](https://www.nature.com/nature-portfolio/editorial-policies/ai) |
| PA-082 | JAMA disclosure-in-methods pattern | 2023-06-07 | adjacent | Third canonical form: report tool, version, prompts, and location of use; author certifies responsibility. [JAMA update](https://jamanetwork.com/journals/jama/fullarticle/2807956) |
| PA-083 | NIH NOT-OD-23-149 (generative AI in peer review) | 2023-06-23 | adjacent | Prohibits reviewers from using generative AI in NIH peer review; responsibility stays with the human. (Scope: review process, not applicant writing.) [NIH notice](https://grants.nih.gov/grants/guide/notice-files/NOT-OD-23-149.html) |
| PA-084 | NSF use of generative AI in merit review | 2024-02 | adjacent | Proposers/reviewers must not upload content to non-approved GAI tools; humans accountable for accuracy. [NSF policy](https://www.nsf.gov/policies/ai/merit-review) |

### 7.9 Contrast class: certification and assurance marks

These marks share the visual grammar of `+AI` (a short mark that means a
defined statement) but are awarded by third parties after audit. They define
the boundary the specification §6 draws: `+AI` is not a certification, carries
no gold star, and must never become one.

| id | title | date | relation | note |
|---|---|---|---|---|
| PA-052 | USDA Organic | 2002 | adjacent | Third-party certified production claim. [Natural Products Insider](https://www.naturalproductsinsider.com/supplement-regulations/usda-implements-national-organic-program) |
| PA-053 | Fairtrade mark (Max Havelaar) | 1988 | adjacent | Third-party certified sourcing claim. [Max Havelaar history](https://www.fairtrade.net) |
| PA-054 | UL mark | 1894 | adjacent | Third-party safety certification. [UL history](https://ul.org/about/our-history/) |
| PA-055 | ISO 9001 certification | 1987 | adjacent | Third-party audited management-system certification. [DQS history](https://www.dqsglobal.com/en/explore/blog/history-iso-9001-a-success-story) |
| PA-056 | B Corp certification | 2007 | adjacent | Third-party audited company-level certification. [B Lab](https://bcorporation.net/) |
| PA-057 | reCAPTCHA "I'm not a robot" | 2014 | adjacent | The inverse mark: asserts *human-ness* rather than disclosing AI assistance. [Google Security Blog](https://security.googleblog.com/2014/12/are-you-robot-introducing-no-captcha.html) |

## 8. Findings against the novelty claim

### 8.1 Component-by-component

| # | Component | Strongest located prior art | Verdict |
|---|---|---|---|
| C1 | **Post-nominal position** — mark appended to the responsible party's name | The position is ancient (PA-001–PA-011: post-nominal letters, honours, suffixes, †/*, pp.); in *AI disclosure* no pre-2026 occupant of the position was located. The closest are byline-level (PA-116, PA-122) and a signature block (PA-123). | **No located prior occupant of the position for AI disclosure.** |
| C2 | **Situational scope** — one artifact, not the person's whole output | Per-work credit conventions are centuries old (PA-012–PA-019). Combining per-work scope *with a name-adjacent personal mark* was not located for AI disclosure. | **Combination unclaimed in located art.** |
| C3 | **Fixed one-line meaning** | The fixed-short-meaning genre is established (PA-036 SPDX, PA-037–PA-040 CC, PA-049 #ad, PA-025 CE). In AI disclosure the closest fixed meanings are the inverse badge PA-085 and the icon proposal PA-124; no located mark carries the meaning "AI helped. I take responsibility." | **No located prior fixed meaning for this sentence.** |
| C4 | **Responsibility-bearing** | Responsibility signalling by notation is established (PA-041 DCO, PA-050 "Paid for by", PA-078 ICMJE accountability). The strongest AI-specific prior art, HGCP (PA-123), states the identical thesis — *"even if AI helped, they are choosing to take human responsibility for the final output"* — as a hashed signature block, not a post-nominal. | **The idea is shared; the form is not.** |
| C5 | **No-permission convention** | The permissionless-mark genre is established (PA-037 CC, PA-036 SPDX, PA-049 #ad, PA-006 Esq., PA-044 pronouns). No located AI-disclosure mark combines this with C1–C4. | **Unclaimed as a combination.** |

### 8.2 The strongest located prior art (must be cited by the motivation document)

1. **HGCP (PA-123)** — IETF individual draft, 2025-03-29, expired 2026-02-11,
   never adopted by a working group. Same responsibility-over-provenance
   philosophy, same permissionless/voluntary design, same "even if AI helped, I
   take responsibility" claim — but a signature *block* with a content hash, not
   a mark appended to a name, and with no fixed one-line meaning. If revived,
   it would be the strongest block-form comparator; the register must watch it.
2. **AIA badge system (PA-124)** — 2024 law-review proposal for AI-attribution
   icons explicitly modeled on Creative Commons. Icons, not post-nominals; no
   adoption.
3. **"Written by Claude · Curated and signed by Peter" (PA-122)** — a live
   byline from 2026-04-28, before the project's August 2026 origin, coupling an
   AI credit with a human signatory. It is the closest *live practice*; the
   motivation document should acknowledge it and note the differences: a
   byline, not a name suffix; no fixed one-line meaning; no no-permission
   convention published.
4. **CNET "Assisted by an AI engine" (PA-116)** — 2023-01, the first major
   disclosed-AI byline. Editorial, not personal; the motivation document's
   "existing AI-disclosure language felt incomplete" (§5.2.1) is evidenced by
   this and the prose-sentence family (PA-080–PA-082).

### 8.3 What remains unclaimed

No located practice combines all five components for AI-assisted work: a mark
**appended to the accountable party's name** (C1), **scoped to specific work**
(C2), with a **fixed one-line meaning** that couples "AI materially assisted"
with "**I take responsibility**" (C3+C4), usable with **no permission,
registration, membership, certification, or gatekeeper** (C5). The nearest
items each miss at least two components.

This supports the claim in `docs/THE-PLAN.md` §2 **only in its scoped wording**:

- the claim is about the *combination*, not about inventing AI disclosure
  (specification §5.2.5);
- "no earlier proposal has been **identified**" is the honest form — exhaustive
  proof of absence is impossible, and `THE-PLAN.md` itself records that earlier
  documented `Author Name + AI` disclosure uses exist;
- the characters `+AI` are not claimed, and no primacy over AI disclosure,
  attribution, provenance, or responsibility signalling generally is asserted
  (specification §5.2.4, §6).

### 8.4 Caveats and honesty requirements

1. **The literal-suffix search.** This research did **not** verify any
   pre-2026 instance of the literal `Name +AI` post-nominal on indexed
   platforms; the motivation document should state exactly this — "not
   identified in this research" — and invite corrections (specification
   §5.2.1, §5.2.8). Un-indexed and private uses cannot be exhaustively
   searched.
2. **HGCP expiry.** HGCP (PA-123) expired 2026-02-11; a revival or successor
   would require a register correction (§10) and possibly a narrowing of the
   claim's wording.
3. **UNVERIFIED entries.** PA-004, PA-011, PA-016, PA-019, PA-034, PA-035,
   PA-087, PA-088, PA-089, PA-090, PA-091, PA-100, PA-102 carry dates or
   sources that were not confirmed against a primary source. They MUST NOT be
   cited as fact in the motivation document until re-checked.
4. **Corrections applied during research.** Project Origin dates to 2018 (not
   2019); Spawning ai.txt to 2023-05 (not 2022); Schema.org
   `digitalSourceType` shipped in v24.0 on 2024-01-08 (not 2023), and a
   Schema.org `aiGenerated` property does not exist; Tao's "Embracing change
   and resetting expectations" is a Microsoft AI Anthology essay dated
   2023-06-12 (not an April 2023 blog post); NIH NOT-OD-23-149 concerns peer
   review, not grant applications; WAME's January 2023 statement was superseded
   by its May 2023 revision.
5. **Scope limits.** This is a prior-art register, not a trademark-clearance or
   freedom-to-operate search; rights questions defer to the licensing and mark
   policy documents. "No prior art located" never equals "free to use".

### 8.5 Conclusion

The register contains 162 entries across nine families. It shows that every
component of `+AI` has ancestors — the post-nominal position, the fixed short
mark, the permissionless commons mark, the responsibility trailer — and that
AI-disclosure practice since January 2023 has converged on exactly the two
forms the project argues are incomplete: long prose sentences in
acknowledgements, and platform- or regulator-applied labels. The closest
located prior art (HGCP, PA-123) shares the project's responsibility thesis but
not its form, and expired without adoption.

**The novelty claim survives in its scoped form**: the specific combination of
a situational responsibility post-nominal with a fixed one-line meaning and a
no-permission convention, for AI-assisted work, was not located in any earlier
practice. It survives only if the motivation document cites PA-116, PA-122,
PA-123, and PA-124 explicitly, keeps the "identified" scoping, and repeats the
novel-vs-first-ever distinction (§5.2.5) wherever the claim appears.

## 9. Consolidated prior-art register

The full register, ordered by id. Every entry records `{id, title, source,
date, relation, note, checked-date}`; `checked-date` is 2026-09-04 for all
entries unless marked otherwise. Fuller notes live in §7 under the same ids.

| id | title | date | relation | source | note |
|---|---|---|---|---|---|
| PA-001 | Academic post-nominal letters (PhD, MD…) | 13th c. on | precursor | [wikipedia.org](https://en.wikipedia.org/wiki/Post-nominal_letters) | Conferred degrees/titles; origin of the position |
| PA-002 | UK honours post-nominals (OBE, CBE…) | 1917 | precursor | [cabinetoffice.gov.uk](https://honours.cabinetoffice.gov.uk/about/orders-and-medals/) | State-granted, regulated |
| PA-003 | Professional designations (PE, CPA, RN, CEng) | 1896–1907 on | precursor | [nspe.org](https://www.nspe.org/media-inquiries/resources/100-years-engineering-licensure) | Licensed responsibility titles |
| PA-004 | Regulated title protection (e.g. US "MD") | state statutes | precursor | UNVERIFIED | Legal contrast class |
| PA-005 | Chess titles (GM, IM, FM) | 1950 | precursor | [wikipedia.org](https://en.wikipedia.org/wiki/FIDE_titles) | FIDE-granted |
| PA-006 | "Esq." (US) | 19th c. | overlap | [thefreedictionary.com](https://www.encyclopedia.thefreedictionary.com/Esquire) | Self-asserted, unregulated post-nominal |
| PA-007 | Generational suffixes Jr./Sr./II/III | long-standing | overlap | [emilypost.com](http://www.emilypost.com/communication-and-technology/social-names-and-titles/294-mens-names-and-titles) | Unregulated name suffixes |
| PA-008 | Genealogical * / † | centuries-old | overlap | [unicode.org archive](https://unicode.org/mail-arch/unicode-ml/y2003-m02/0459.html) | Fixed symbols on names |
| PA-009 | † *Todeszeichen* | long-standing | overlap | [de.wikipedia.org](https://de.wikipedia.org/wiki/Kreuz_(Schriftzeichen)) | Name-adjacent status mark |
| PA-010 | "pp." (*per procurationem*) | long-standing | overlap | [oed.com](https://www.oed.com/dictionary/pp_adv) | Sign-on-behalf mark |
| PA-011 | "c/o", "℅", "attn:" | long-standing | adjacent | UNVERIFIED | Routing marks, no responsibility meaning |
| PA-012 | Printmaker Latin credits | 15th–18th c. | precursor | [princeton.edu](https://swh.princeton.edu/~graphicarts/2009/02/printmakers_abbreviations.html) | Fixed role vocabulary on prints |
| PA-013 | Comics credit boxes | 1960s | adjacent | [wikipedia.org](https://en.wikipedia.org/wiki/Sol_Brodsky) | Per-issue role credits |
| PA-014 | Possessory credit "A film by X" | 1960s–2004 | adjacent | [dga.org](https://www.dga.org/craft/dgaq/issues/0402-february-2004/possessory-credit-timeline) | Contractually regulated authorship claim |
| PA-015 | "feat." / "ft." | mid-20th c. | adjacent | [routenote.com](https://routenote.com/blog/artist-credits-how-to-credit-the-other-people-in-your-music/) | Collaboration credit |
| PA-016 | "aka" / "fka" | "aka" long-standing | adjacent | [merriam-webster.com](https://www.merriam-webster.com/dictionary/aka) | Identity qualifiers; "fka" dating UNVERIFIED |
| PA-017 | Book credit words | long-standing | adjacent | [chicagomanualofstyle.org](https://www.chicagomanualofstyle.org) | "with", "as told to", "edited by" |
| PA-018 | Colophon / "This book was set in…" | medieval to letterpress | precursor | [wikipedia.org](https://en.wikipedia.org/wiki/Colophon_(publishing)) | Production disclosure on the artifact |
| PA-019 | "Printed and bound in…" | long-standing | adjacent | UNVERIFIED | Production credits |
| PA-020 | © copyright notice | 1886/1909/1988 | precursor | [digital-law-online.info](https://digital-law-online.info/lpdi1.0/treatise7.html) | One-character legal mark |
| PA-021 | ® vs ™ | 1946 | adjacent | [law.cornell.edu](https://www.law.cornell.edu/uscode/text/15/1111) | Registered vs self-asserted |
| PA-022 | "patent pending" | long-standing | overlap | [uspto.gov](https://www.uspto.gov/patents/basics) | Self-asserted status phrase |
| PA-023 | "All rights reserved" | 1910 | adjacent | [wikipedia.org](https://en.wikipedia.org/wiki/All_rights_reserved) | Fixed legal notice |
| PA-024 | "Made in …" | 1930 | adjacent | [govinfo.gov](https://www.govinfo.gov/content/pkg/CFR-2009-title19-vol1/xml/CFR-2009-title19-vol1-part134-subpartE.xml) | Mandated origin disclosure |
| PA-025 | CE marking | 1985/1993 | overlap | [eur-lex.europa.eu](https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:01993L0068-19980401) | Self-declared conformity; closest legal analog |
| PA-026 | FCC ID | long-standing | adjacent | [ecfr.gov](https://www.ecfr.gov/current/title-47/chapter-I/subchapter-A/part-15) | Regulatory identifier |
| PA-027 | `<meta name="generator">` | 1990s | overlap | [lists.w3.org](https://lists.w3.org/Archives/Public/html-tidy/2000JanMar/0068.html) | Tool-disclosure field |
| PA-028 | PDF Producer/Creator | 1993 | overlap | [wikipedia.org](https://en.wikipedia.org/wiki/PDF) | Creating-tool metadata |
| PA-029 | EXIF "Software" | 1995 (v1.0); CP-3451 later | overlap | [wikipedia.org](https://en.wikipedia.org/wiki/Exif) | Image tool tag |
| PA-030 | X-Mailer / User-Agent | 1990s | overlap | [e-words.jp](https://e-words.jp/w/X-Mailer.html) | Message tool headers |
| PA-031 | "Sent from my iPhone" | 2007 | overlap | [iphonelife.com](https://www.iphonelife.com/content/tip-day-remove-sent-my-iphone-your-email-signature) | Ubiquitous casual tool disclosure |
| PA-032 | protoc "DO NOT EDIT" | ~2008 | overlap | [github.com](https://github.com/golang/protobuf/commit/47eb67eaf5cab63c58956d4d4ce86b03ad5eaa03) | Generated-code responsibility boundary |
| PA-033 | "Shot on iPhone" | 2015 | adjacent | [wikipedia.org](https://en.wikipedia.org/wiki/Shot_on_iPhone) | Tool-brand campaign mark |
| PA-034 | "Built with"/"Made with" badges | web convention | overlap | UNVERIFIED | Tooling badges |
| PA-035 | "Made with Unity" splash | Unity requirement | overlap | UNVERIFIED | Mandated tool disclosure |
| PA-036 | SPDX-License-Identifier | 2011/2017/2019 | overlap | [spdx.dev](https://spdx.dev/) | Closest structural analog: fixed, standard, free |
| PA-037 | Creative Commons licenses | 2002 | overlap | [creativecommons.org](https://creativecommons.org/history/) | Permissionless fixed-deed marks |
| PA-038 | CC0 | 2009 | overlap | [creativecommons.org](https://creativecommons.org/2009/03/11/expanding-the-public-domain-part-zero/) | Zero-conditions mark |
| PA-039 | "Some Rights Reserved" | 2002 | overlap | [creativecommons.org](https://creativecommons.org/) | Companion fixed phrase |
| PA-040 | rel="license" / RDFa | 2008 | overlap | [creativecommons.org](https://creativecommons.org/2008/10/16/rdfa-now-a-w3c-recommendation-message-from-hal-abelson/) | Machine-readable mark expression |
| PA-041 | DCO "Signed-off-by" | 2004 | overlap | [developercertificate.org](https://developercertificate.org) | Asserted responsibility trailer |
| PA-042 | "Co-authored-by" | 2018 | overlap | [github.blog](https://github.blog/news-insights/product-news/commit-together-with-co-authors/) | Collaboration trailer |
| PA-043 | Reviewed-by/Acked-by/Tested-by | 2004+ | overlap | [kernel.org](https://www.kernel.org/doc/html/latest/process/submitting-patches.html) | Role trailer vocabulary |
| PA-044 | Pronouns in signatures (she/her) | ~2019–2022 | overlap | [telegraph.co.uk](https://www.telegraph.co.uk/business/2021/11/10/rise-pronoun-underlines-citys-conversion-woke-agenda/) | Self-asserted name suffix, spread by norm |
| PA-045 | LinkedIn "OpenToWork" | 2020-10 | overlap | [entrepreneur.com](https://www.entrepreneur.com/business-news/linkedin-launches-tools-aimed-at-pandemic-job-seekers/358730) | Situational status on name/avatar |
| PA-046 | Gmail "External" label | 2014 | adjacent | [support.google.com](https://support.google.com/a/answer/7380041) | Automated provenance label |
| PA-047 | WhatsApp "Forwarded" labels | 2018/2019 | adjacent | [hindustantimes.com](https://tech.hindustantimes.com/tech/news/whatsapp-now-tells-users-when-a-message-has-beenforwarded-many-times-story-IRFr4I0jLGFM0VNQZLrFPP.html) | Message provenance labels |
| PA-048 | "(edited)" markers | Slack; X edit 2022 | adjacent | [techradar.com](https://www.techradar.com/news/twitters-edit-button-is-finally-here-but-not-for-everyone) | Edit-status marker |
| PA-049 | "#ad" influencer disclosure | 2009 guides; ~2014+ | overlap | [ecfr.gov](https://www.ecfr.gov/current/title-16/chapter-I/subchapter-B/part-255) | One short tag = one disclosure |
| PA-050 | "Paid for by" disclaimers | 1971/1974 | overlap | [fec.gov](https://www.fec.gov/help-candidates-and-committees/making-disbursements/advertising/candidate-television-ad-example/) | Mandated responsibility attribution |
| PA-051 | FCC sponsorship ID (§317) | 1934 | overlap | [law.cornell.edu](https://www.law.cornell.edu/uscode/text/47/317) | Broadcast sponsorship disclosure |
| PA-052 | USDA Organic | 2002 | adjacent | [naturalproductsinsider.com](https://www.naturalproductsinsider.com/supplement-regulations/usda-implements-national-organic-program) | Gatekeeper certification (contrast) |
| PA-053 | Fairtrade mark | 1988 | adjacent | [fairtrade.net](https://www.fairtrade.net) | Gatekeeper certification (contrast) |
| PA-054 | UL mark | 1894 | adjacent | [ul.org](https://ul.org/about/our-history/) | Gatekeeper certification (contrast) |
| PA-055 | ISO 9001 | 1987 | adjacent | [dqsglobal.com](https://www.dqsglobal.com/en/explore/blog/history-iso-9001-a-success-story) | Gatekeeper certification (contrast) |
| PA-056 | B Corp | 2007 | adjacent | [bcorporation.net](https://bcorporation.net/) | Gatekeeper certification (contrast) |
| PA-057 | reCAPTCHA "I'm not a robot" | 2014 | adjacent | [security.googleblog.com](https://security.googleblog.com/2014/12/are-you-robot-introducing-no-captcha.html) | Inverse mark: asserts human-ness |
| PA-058 | ICMJE "Non-Human Authors" | 2023-05 | adjacent | [icmje.org](https://www.icmje.org/news-and-editorials/updated_recommendations_may2023.html) | No AI authors; disclosure required |
| PA-059 | COPE "Authorship and AI tools" | 2023-02-13 | adjacent | [publicationethics.org](https://publicationethics.org/guidance/cope-position/authorship-and-ai-tools) | Accountability as the reason |
| PA-060 | WAME chatbot recommendations | 2023-01-20 (rev. 2023-05) | adjacent | [wame.org](https://www.wame.org/news-details.php?nid=40) | Chatbots cannot be authors |
| PA-061 | Springer Nature AI policy | 2023-01-24 | adjacent | [nature.com](https://www.nature.com/nature-portfolio/editorial-policies/ai) | Prose disclosure in Methods/Acks |
| PA-062 | Elsevier generative-AI declaration | 2023 | adjacent | [elsevier.com](https://www.elsevier.com/about/policies-and-standards/the-use-of-generative-ai-and-ai-assisted-technologies-in-writing-for-elsevier) | Checkbox + pasted sentence |
| PA-063 | Science family journals policy | 2023-01-26 | adjacent | [science.org](https://www.science.org/doi/10.1126/science.adg7879) | Prohibited without disclosure |
| PA-064 | Nature ground rules | 2023-01-24 | adjacent | [nature.com](https://www.nature.com/articles/d41586-023-00191-1) | No LLM authors; document use |
| PA-065 | JAMA Network AI guidance | 2023-01-31 | adjacent | [jamanetwork.com](https://jamanetwork.com/journals/jama/fullarticle/2801170) | Authors certify accountability |
| PA-066 | ICML LLM policy | 2023/2024 | adjacent | [icml.cc](https://icml.cc/Conferences/2024/PaperGuidelines) | Disclose LLM use in paper |
| PA-067 | NeurIPS 2023 AI policy | 2023 | adjacent | [neurips.cc](https://neurips.cc/Conferences/2023/CallForPapers) | Disclose any LLM usage |
| PA-068 | ACL 2023 AI policy | 2023-01 | adjacent | [2023.aclweb.org](https://2023.aclweb.org/blog/ACL-2023-policy/) | Authors responsible for correctness |
| PA-069 | CVPR 2024 guidelines | 2023-12 | adjacent | [thecvf.com](https://cvpr2023.thecvf.com/Conferences/2024/AuthorGuidelines) | GAI content must be disclosed |
| PA-070 | arXiv generative-AI policy | 2023-01-31 | adjacent | [blog.arxiv.org](https://blog.arxiv.org/2023/01/31/arxiv-announces-new-policy-on-chatgpt-and-similar-tools/) | Must report LLM use |
| PA-071 | IEEE AI-generated text guidelines | 2023 | adjacent | [open.ieee.org](https://open.ieee.org/author-guidelines-for-artificial-intelligence-ai-generated-text/) | Authors "assume full responsibility" |
| PA-072 | ACM Policy on Authorship | 2023-08-30 | adjacent | [acm.org](https://www.acm.org/publications/policies/frequently-asked-questions) | "AI Disclosure" in author workflow |
| PA-073 | AP generative-AI standards | 2023-08-16 | adjacent | [ap.org](https://www.ap.org/the-definitive-source/behind-the-news/standards-around-generative-ai/) | No AI bylines; transparency |
| PA-074 | BBC AI editorial guidance | 2024 | adjacent | [bbc.co.uk](https://www.bbc.co.uk/editorialguidelines/guidance/use-of-artificial-intelligence) | Labelling + human accountability |
| PA-075 | Guardian generative-AI approach | 2023-06-16 | adjacent | [theguardian.com](https://www.theguardian.com/help/insideguardian/2023/jun/16/the-guardians-approach-to-generative-ai) | Approval + disclosure |
| PA-076 | NYT newsroom AI principles | 2024 | adjacent | [nytco.com](https://www.nytco.com/press/principles-for-using-generative-a-i-in-the-timess-newsroom/) | Disclose to editors |
| PA-077 | CRediT taxonomy | 2012; ANSI/NISO 2022 | precursor | [casrai.org](https://casrai.org/credit/history) | Who-did-what vocabulary |
| PA-078 | ICMJE accountability criterion | 2013-08 | precursor | [icmje.org](https://www.icmje.org/news-and-editorials/new_rec_aug2013.html) | "Agreement to be accountable" |
| PA-079 | Ghost/guest authorship disclosure norms | 2004–2009 | precursor | [wiley.com](https://onlinelibrary.wiley.com/doi/full/10.1111/j.1525-1497.2005.41015.x) | Name hidden contributors |
| PA-080 | Canonical disclosure sentence | 2023 | adjacent | [elsevier.com](https://www.elsevier.com/about/policies-and-standards/the-use-of-generative-ai-and-ai-assisted-technologies-in-writing-for-elsevier) | The long prose form `+AI` compresses |
| PA-081 | Nature Portfolio acknowledgement pattern | 2023-01-24 | adjacent | [nature.com](https://www.nature.com/nature-portfolio/editorial-policies/ai) | Methods/Acks pattern |
| PA-082 | JAMA disclosure-in-methods pattern | 2023-06-07 | adjacent | [jamanetwork.com](https://jamanetwork.com/journals/jama/fullarticle/2807956) | Tool + prompts + location |
| PA-083 | NIH NOT-OD-23-149 | 2023-06-23 | adjacent | [grants.nih.gov](https://grants.nih.gov/grants/guide/notice-files/NOT-OD-23-149.html) | GAI ban in peer review (not applications) |
| PA-084 | NSF generative-AI merit-review policy | 2024-02 | adjacent | [nsf.gov](https://www.nsf.gov/policies/ai/merit-review) | Human accountability for accuracy |
| PA-085 | "Not By AI" badge | 2023-03 | overlap | [notbyai.fyi](https://notbyai.fyi) | Inverse badge: ≥90% human-made |
| PA-086 | The Human Made Mark (film/TV) | 2026 | adjacent | [variety.com](https://variety.com/2026/film/global/the-human-made-mark-ai-free-film-initiative-launches-1236728524/) | AI-free certification |
| PA-087 | Human Made Mark (advertising craft) | UNVERIFIED | adjacent | [lbbonline.com](https://lbbonline.com/news/human-made-mark-ai-label-craft-fairtrade-advertising-william-grave) | Craft label |
| PA-088 | Humanable (music) | UNVERIFIED | adjacent | [aiforautomation.io](https://aiforautomation.io/news/2026-03-20-ai-free-human-made-certification-logo-eight-groups-race) | Music certification |
| PA-089 | Books by People | UNVERIFIED | adjacent | [aiforautomation.io](https://aiforautomation.io/news/2026-03-20-ai-free-human-made-certification-logo-eight-groups-race) | Publisher vetting |
| PA-090 | Proudly Human | UNVERIFIED | adjacent | [aiforautomation.io](https://aiforautomation.io/news/2026-03-20-ai-free-human-made-certification-logo-eight-groups-race) | Process audit |
| PA-091 | Verified Human | UNVERIFIED | adjacent | [verifiedhuman.info](https://verifiedhuman.info/about) | Human-made certification |
| PA-092 | Fairly Trained | 2024-01 | adjacent | [fairlytrained.org](https://fairlytrained.org) | Model-side data-consent certification |
| PA-093 | Meta "Made with AI"/"AI info" | 2024-04/07 | adjacent | [dig.watch](https://dig.watch/updates/meta-revises-ai-labels) | Platform labels |
| PA-094 | YouTube altered/synthetic disclosure | 2024-03 | adjacent | [blog.youtube](https://blog.youtube/news-and-events/disclosing-ai-generated-content/) | Creator disclosure duty |
| PA-095 | TikTok AI labels | 2023-09 | adjacent | [apnews.com](https://apnews.com/article/tiktok-ai-label-creators) | Auto + creator labels |
| PA-096 | LinkedIn AI content labels | 2024 | adjacent | [mediapost.com](https://mediapost.com/publications/article/396225/linkedin-begins-labeling-ai-generated-content.html) | C2PA-based |
| PA-097 | Content Credentials "CR" pin | 2023-10 | adjacent | [petapixel.com](https://petapixel.com/2023/10/11/adobe-unveils-content-credentials-symbol/) | Provenance glyph |
| PA-098 | Steam AI-content disclosure | 2024-01 | adjacent | [gamedeveloper.com](https://gamedeveloper.com) | Game AI disclosure |
| PA-099 | Amazon KDP AI disclosure | 2023-09 | adjacent | [booksandpublishing.com.au](https://booksandpublishing.com.au/articles/2023/09/12/237579/) | Book AI disclosure |
| PA-100 | Amazon AI-review labels | UNVERIFIED | adjacent | — | Review AI indicators |
| PA-101 | Etsy "Creativity Standards" | 2024-07 | adjacent | [entrepreneur.com](https://entrepreneur.com/business-news/is-ai-allowed-on-etsy) | Seller disclosure |
| PA-102 | eBay AI listing disclosure | UNVERIFIED | adjacent | — | Listing disclosure |
| PA-103 | Adobe Stock generative-AI labels | 2022-12-05 | adjacent | [blog.adobe.com](https://blog.adobe.com/en/publish/2022/12/05/amplifying-human-creativity) | Contributor labels |
| PA-104 | Shutterstock generative-AI labeling | 2022 | adjacent | [shutterstock.com](https://submit.shutterstock.com/help/articles/10594676) | Submission marking |
| PA-105 | Stack Overflow AI-answer ban | 2022-12 | adjacent | [meta.stackoverflow.com](https://meta.stackoverflow.com/a/422038) | No undisclosed AI answers |
| PA-106 | Wikipedia WP:LLM | 2023 | adjacent | [wikipedia.org](https://en.wikipedia.org/wiki/Wikipedia:Large_language_model_policy) | Editor disclosure |
| PA-107 | Reddit bot "[App]" label | 2024 | adjacent | [socialmediatoday.com](https://socialmediatoday.com/news/reddit-implements-new-app-label) | Automated profile label |
| PA-108 | Discord "BOT" tag | long-standing | adjacent | [discord.com](https://discord.com/developers/docs) | Bot-account tag |
| PA-109 | X "automated" account labels | 2021-09-09 | adjacent | [techcrunch.com](https://techcrunch.com/2021/09/09/twitter-introduces-a-new-label-that-allows-the-good-bots-to-identify-themselves/) | Voluntary bot label |
| PA-110 | ActivityPub actor types | W3C spec | adjacent | [w3.org](https://www.w3.org/TR/activitypub/#actor-types) | Person/Service vocabulary |
| PA-111 | Bluesky composable labels | 2024-03-15 | adjacent | [github.com](https://github.com/bluesky-social/bsky-docs) | Third-party labels |
| PA-112 | Medium AI disclosure policy | 2023-01 (2024-04) | adjacent | [theverge.com](https://www.theverge.com/2023/1/27/23573954/medium-platform-publisher-ai-written-posts-policy-chatgpt) | Labeling requirement |
| PA-113 | Substack AI detection tool | 2026-07 | adjacent | [techcrunch.com](https://techcrunch.com/2026/07/22/substacks-new-tool-tells-you-whos-been-writing-their-newsletters-with-ai/) | Platform detection + notes |
| PA-114 | Apple Podcasts AI guidelines | 2024 | adjacent | [radiotoday.com.au](https://radiotoday.com.au/apple-podcasts-and-youtube-update-content-guidelines-on-ai/) | Disclosure guidelines |
| PA-115 | Spotify AI-music policy | 2023-09 | adjacent | [digitalmusicnews.com](https://digitalmusicnews.com/2023/09/26/spotify-ai-music-policy/) | Synthetic-audio flags |
| PA-116 | CNET "Assisted by an AI engine" | 2023-01 | overlap | [theverge.com](https://www.theverge.com/2023/6/6/23750761/cnet-ai-generated-stories-policy-update) | First major disclosed-AI byline |
| PA-117 | Gannett LedeAI sports bylines | 2023-08 | adjacent | [cnn.com](https://edition.cnn.com/2023/08/30/tech/gannett-ai-experiment-paused) | Paused experiment (cautionary) |
| PA-118 | Sports Illustrated fake AI authors | 2023-11 | adjacent | [nypost.com](https://nypost.com/2023/11/27/media/sports-illustrated-scrubs-ai-generated-content) | Trust damage case |
| PA-119 | Hoodline AI journalist profiles | 2024 | adjacent | [sf.gazetteer.co](https://sf.gazetteer.co/hoodline-using-ai-to-generate-news-stories-and-journalist-profiles) | Fake AI journalists (cautionary) |
| PA-120 | ChatGPT named as co-author | 2023-01-18 | adjacent | [nature.com](https://www.nature.com/articles/d41586-023-00188-w) | Tool-as-author (wrong direction) |
| PA-121 | arXiv ChatGPT co-authorship survey | 2023-06 | adjacent | [arxiv.org](https://arxiv.org/pdf/2306.06699v1) | Documents the practice |
| PA-122 | "Written by Claude · Curated and signed by Peter" | 2026-04-28 | overlap | [agentmodeai.com](https://agentmodeai.com/the-ai-author-signature-decision/) | Live AI-name + human-signatory byline |
| PA-123 | HGCP voluntary signing framework | 2025-03-29 (expired 2026-02-11) | overlap | [datatracker.ietf.org](https://datatracker.ietf.org/doc/draft-taoqiwen-hgcp/) | **Strongest located prior art**: responsibility block, not a post-nominal |
| PA-124 | AIA attribution badge system | 2024 | overlap | [repository.law.miami.edu](https://repository.law.miami.edu/fac_articles/1258/) | CC-modeled AI-attribution icons |
| PA-125 | AI content disclosure markup (W3C WebAI) | c. 2024/2026-01 | adjacent | [github.com](https://github.com/dweekly/ai-content-disclosure) | Element-level markup |
| PA-126 | Resnik & Hosseini faceted attribution | 2026-04 | adjacent | [ar5iv.labs.arxiv.org](https://ar5iv.labs.arxiv.org/html/2604.25346) | Proportionate-disclosure taxonomy |
| PA-127 | Hosseini et al. voluntary disclosure | 2025 | adjacent | [journals.sagepub.com](https://journals.sagepub.com/doi/10.1177/17470161251345499) | Voluntary-disclosure argument |
| PA-128 | SynthID | 2023-08-29 | adjacent | [deepmind.google](https://deepmind.google/blog/identifying-ai-generated-images-with-synthid/) | Invisible watermark |
| PA-129 | Content Authenticity Initiative | 2019-11-04 | precursor | [nytco.com](https://www.nytco.com/press/adobe-new-york-times-company-twitter-announce-content-authenticity-initiative/) | Adobe/NYT/Twitter attribution standard |
| PA-130 | C2PA founding | 2021-02-22 | precursor | [c2pa.org](https://c2pa.org/c2pa-founding-press-release/) | Adobe/Arm/BBC/Intel/Microsoft/Truepic |
| PA-131 | C2PA specification 1.0 | 2022-01-26 | adjacent | [blog.adobe.com](https://blog.adobe.com/en/publish/2022/01/26/cp2a-1spec-adobeblogv1) | First normative spec |
| PA-132 | C2PA specification 2.0 | 2024-01 | adjacent | [spec.c2pa.org](https://spec.c2pa.org/specifications/specifications/2.1/specs/C2PA_Specification.html) | Trust List, X.509-only |
| PA-133 | C2PA specification 2.1 | 2024-09 | adjacent | [spec.c2pa.org](https://spec.c2pa.org/specifications/specifications/2.1/specs/C2PA_Specification.html) | Ingredients v3, soft binding |
| PA-134 | Google joins C2PA steering | 2024-02-08 | adjacent | [businesswire.com](https://www.businesswire.com/news/home/20240208176557/en/Google-Joins-C2PA-Steering-Committee) | Search/YouTube credentials |
| PA-135 | OpenAI joins C2PA steering | 2024-05-07 | adjacent | [c2pa.org](https://c2pa.org/openai-joins-c2pa-steering-committee/) | DALL·E credentials |
| PA-136 | Meta joins C2PA steering | 2024-09-05 | adjacent | [spec.c2pa.org](https://spec.c2pa.org/post/meta_pr/) | FB/IG/Threads labels |
| PA-137 | C2PA membership growth | 2026-02-09 | adjacent | [c2pa.org](https://c2pa.org/the-c2pa-launches-content-credentials-2-3-and-celebrates-5-years-of-impact-across-the-digital-ecosystem/) | 6,000+ members |
| PA-138 | Project Origin | 2018 | precursor | [bbc.com](https://www.bbc.com/beyondfakenews/trusted-news-initiative/project-origin-securing-trust-in-media) | BBC/CBC/NYT/Microsoft verification |
| PA-139 | IPTC Digital Source Type | 2019 (AI values 2023) | adjacent | [cv.iptc.org](https://cv.iptc.org/newscodes/digitalsourcetype/) | `trainedAlgorithmicMedia` etc. |
| PA-140 | Schema.org digitalSourceType | 2024-01-08 (v24.0) | adjacent | [schema.org](https://schema.org/digitalSourceType) | IPTC-aligned property |
| PA-141 | W3C PROV-O | 2013-04-30 | precursor | [w3.org](https://www.w3.org/TR/prov-o/) | Generic provenance ontology |
| PA-142 | W3C PROV-AQ | 2013-04-30 | precursor | [w3.org](https://www.w3.org/TR/prov-aq/) | Provenance access/query |
| PA-143 | XMP | 2001 (ISO 16684-1:2012) | precursor | [developer.adobe.com](https://developer.adobe.com/xmp/docs/xmp-specifications/) | Metadata container |
| PA-144 | JPEG Trust (ISO/IEC 21617) | 2025-01 | adjacent | [jpeg.org](https://jpeg.org/jpegtrust/index.html) | Authenticity framework |
| PA-145 | JPEG AI (ISO/IEC 6048) | 2025 | adjacent | [jpeg.org](https://jpeg.org/jpegai/index.html) | Learning-based codec |
| PA-146 | C2PA Trust List | 2024-09 | adjacent | [opensource.contentauthenticity.org](https://opensource.contentauthenticity.org/docs/conformance/trust-lists/) | X.509 trust anchors |
| PA-147 | Robots META noindex/nofollow | 1996 | precursor | [robotstxt.org](http://www.robotstxt.org/meta.html) | Meta-tag opt-out mechanism |
| PA-148 | DeviantArt noai/noimageai | 2022-11-11 | adjacent | [deviantart.com](https://www.deviantart.com/team/journal/UPDATE-All-Deviations-Are-Opted-Out-of-AI-Datasets-934500371) | Training opt-out flags |
| PA-149 | Spawning ai.txt | 2023-05 | adjacent | [spawning.ai](https://spawning.ai/ai.txt) | Site-root consent file |
| PA-150 | Have I Been Trained | 2022-09 | adjacent | [haveibeentrained.com](https://haveibeentrained.com) | Opt-out registry |
| PA-151 | EU AI Act adopted | 2024-03-13 | adjacent | [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) | Regulation (EU) 2024/1689 |
| PA-152 | EU AI Act in force | 2024-08-01 | adjacent | [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) | OJ 2024-07-12 |
| PA-153 | EU AI Act Art. 50 applies | 2026-08-02 | adjacent | [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2024/1689/oj) | Marking, interaction, deepfake disclosure |
| PA-154 | China deep-synthesis provisions | 2023-01-10 | adjacent | [cac.gov.cn](http://www.cac.gov.cn/2022-12/11/c_1672221949354811.htm) | Deepfake labeling |
| PA-155 | China AI-content labeling measures | 2025-09-01 | adjacent | [cac.gov.cn](https://www.cac.gov.cn/2025-03/14/c_1743654685899683.htm) | Visible + machine-readable (GB 45438-2025) |
| PA-156 | California AI Transparency Act (SB 942) | 2024-09-19 | adjacent | [leginfo.legislature.ca.gov](https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202320240SB942) | Provenance metadata duty |
| PA-157 | US Copyright Office AI guidance | 2023-03-16 | adjacent | [copyright.gov](https://www.copyright.gov/ai/ai_policy_guidance.pdf) | Registration disclosure |
| PA-158 | US Copyright Office Part 2 report | 2025-01-29 | adjacent | [copyright.gov](https://www.copyright.gov/newsnet/2025/1060.html) | Copyrightability of AI-assisted works |
| PA-159 | USPTO inventorship guidance | 2024-02-13 | adjacent | [federalregister.gov](https://www.federalregister.gov/documents/2024/02/13/2024-02623/inventorship-guidance-for-ai-assisted-inventions) | Significant human contribution |
| PA-160 | UK Online Safety Act 2023 | 2023-10-26 | adjacent | [legislation.gov.uk](https://www.legislation.gov.uk/ukpga/2023/50) | Deepfake crimes |
| PA-161 | South Korea AI Framework Act | 2024-12-26 | adjacent | [law.go.kr](https://law.go.kr/lsInfoP.do?efYd=20260122&lsId=014820&lsiSeq=268543) | AI-content labeling duty |
| PA-162 | EU DSA Art. 35 | 2022-10-19 | adjacent | [eur-lex.europa.eu](https://eur-lex.europa.eu/eli/reg/2022/2065/oj) | VLOP systemic-risk duties |

## 10. Register maintenance and correction

The register is a living structure with fixed rules (specification §5.5):

- **Append-and-correct.** Entries are added, corrected, or retired with a dated
  change record; nothing is silently rewritten.
- **Correction procedure.** Any correction states the entry id, what changed,
  why, the source, and the date; it is recorded in §12 and the entry's
  `checked-date` is updated.
- **No ranking.** Entries are factual records. The register MUST NOT become a
  ranking, reputation score, or endorsement list (specification §6).
- **Machine export.** Machine-readable export of the register defers to the
  machine-readable-assertions and public-snapshots specifications; this file is
  the human-readable source of truth.
- **Static and mirrorable.** This file is plain Markdown with relative links;
  it opens from disk and mirrors with the repository (invariants 4–5).

## 11. Gaps in the record

1. **The 45:00–48:00 Tao segment** has no located transcript; §5.3 remains
   best-effort until one is found or the founder provides the recollection in
   their own words.
2. **HGCP revival risk.** PA-123 expired 2026-02-11; a revived or
   successor draft must trigger a register correction and possibly a
   narrowing of the claim's wording.
3. **Un-indexed uses of `+AI`.** Exhaustive search of private platforms
   (LinkedIn posts, newsletters, offline media) is impossible; the claim's
   "identified" scoping is load-bearing.
4. **UNVERIFIED entries** pending primary-source confirmation: PA-004,
   PA-011, PA-016, PA-019, PA-034, PA-035, PA-087, PA-088, PA-089, PA-090,
   PA-091, PA-100, PA-102.
5. **Trademark and clearance search** was not performed; rights questions
   defer to the licensing and mark policy documents. Prior art ≠
   freedom-to-operate.
6. **Corrected during assembly** (see §8.4.4): Project Origin 2018; Spawning
   ai.txt 2023-05; Schema.org `digitalSourceType` 2024-01-08 and no
   `aiGenerated` property; Tao's "Embracing change" essay 2023-06-12 (not an
   April 2023 blog post); NIH NOT-OD-23-149 scoped to peer review; WAME's
   January 2023 statement superseded May 2023.
7. **The specification's open questions (§10) remain open**: the exact
   citation for the Tao lecture is now confirmed (§5.2) but the *segment*
   claim is not; the definitive novelty-claim wording still needs sign-off,
   and this report supplies the evidence base for it.

## 12. Change record

| date | entry | change |
|---|---|---|
| 2026-09-04 | all | Initial assembly of the register (162 entries); every entry checked against a live source on this date; Tao lecture citation verified and the 45:00–48:00 segment flagged best-effort |
