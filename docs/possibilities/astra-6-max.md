# +AI — The Possibilities of Accountable Intelligence

## A definitive strategic statement: one simple mark, an open commons, and a world of useful extensions

> **Status:** strategic synthesis and exploration, not a normative specification,
> approved roadmap, service guarantee, or announcement of completed features.
> **Date:** 2026-09-07.
> **Architectural standard:** `site-v2`.
> **Unchanged meaning:** **AI helped. I take responsibility.**
>
> This document builds on the three earlier [possibilities](#23-source-map),
> the suggestions and planning corpus, and all 95 numbered
> [development tasks](../development/). It interprets their possibilities,
> identifies tensions, and proposes a coherent destination. It does not select
> their unanswered decisions or authorise their execution.
>
> “Definitive” means a clear account of what +AI could become, what makes those
> possibilities worthwhile, and which boundaries they must preserve. It does
> not mean that uncertain demand, legal questions, or future standards are settled.

---

## Contents

1. [The thesis](#1-the-thesis)
2. [The promise that everything else must serve](#2-the-promise-that-everything-else-must-serve)
3. [The actual starting point](#3-the-actual-starting-point)
4. [The complete possibility model](#4-the-complete-possibility-model)
5. [The cultural possibility](#5-the-cultural-possibility)
6. [The first complete product](#6-the-first-complete-product)
7. [Declarations, profiles, practice, and evidence](#7-declarations-profiles-practice-and-evidence)
8. [The reader is a first-class participant](#8-the-reader-is-a-first-class-participant)
9. [Responsibility after publication](#9-responsibility-after-publication)
10. [The opportunity across fields](#10-the-opportunity-across-fields)
11. [Distribution without dependence](#11-distribution-without-dependence)
12. [The site-v2 opportunity](#12-the-site-v2-opportunity)
13. [A commons that survives its services](#13-a-commons-that-survives-its-services)
14. [The economic possibility](#14-the-economic-possibility)
15. [Stewardship is part of the product](#15-stewardship-is-part-of-the-product)
16. [Privacy, safety, and the right not to participate](#16-privacy-safety-and-the-right-not-to-participate)
17. [The agentic frontier](#17-the-agentic-frontier)
18. [New combinations worth exploring](#18-new-combinations-worth-exploring)
19. [What not to build](#19-what-not-to-build)
20. [Reconcile the development portfolio before scaling it](#20-reconcile-the-development-portfolio-before-scaling-it)
21. [An evidence-led sequence](#21-an-evidence-led-sequence)
22. [The definitive destination](#22-the-definitive-destination)
23. [Source map](#23-source-map)

---

## 1. The thesis

**+AI can become the everyday convention for making the human decision behind
AI-assisted work visible.**

Its smallest useful form is already complete:

**Name +AI**

Its largest useful form is an interoperable ecosystem in which people can
declare what they adopt, organisations can support that decision, readers can
understand the claim, and corrections can follow the work across tools,
languages, institutions, and time.

The connection between those two scales is not a compulsory account, a paid
badge, or a central register of trustworthy people. It is a **portable,
scoped declaration of responsibility**.

The strategic destination is therefore:

> **A free accountability commons, with optional tools and services that make
> responsibility easier to express, inspect, maintain, and act on.**

This is larger than a disclosure label and narrower than a universal trust
system. Both distinctions matter.

A disclosure label can say that AI participated. +AI additionally identifies
the person or organisation adopting the result. A universal trust system would
try to decide whether that person, organisation, or result deserves belief.
+AI should not attempt that second task.

The opportunity is not to make all AI-assisted work appear trustworthy.
It is to make a particular kind of claim understandable:

- AI materially helped this work.
- An identifiable party knowingly adopts it.
- That party accepts responsibility for releasing it as presented.

Optional infrastructure can then answer further questions: which work, which
version, what was declared, what evidence was checked, and what happened later.
Those answers must never be smuggled into the three-character mark itself.

### The strategic ordering

1. **The convention is the centre.**
2. **The scoped declaration is the portable record.**
3. **The workflow helps people honour the declaration.**
4. **The directory helps people find voluntary declarations.**
5. **The service business pays for useful work around the commons.**

Reversing this order produces an identity platform searching for a purpose.
Keeping it produces a useful convention that can grow without becoming a gatekeeper.

---

## 2. The promise that everything else must serve

The [draft v0.1 specification](../../site-v2/SPECIFICATION.md) remains the
meaning authority. Its scope is deliberately permissive about the degree of AI
assistance and precise about adoption and responsibility.

It allows individuals **and organisations** to take responsibility. It does
not require every element to have been manually reviewed. It does require
meaningful adoption of the artifact being released. Autonomous output without
meaningful human adoption is outside the canonical scope.

The resulting boundaries are not optional product positioning.

| The mark says | The mark does not establish |
| --- | --- |
| AI materially assisted the associated work | A percentage of human or machine authorship |
| A named party adopts the work as presented | That every statement, citation, or component was independently checked |
| That party accepts responsibility for release | Correctness, safety, originality, legality, or professional fitness |
| There is an identifiable responsible party | That a displayed name has been authenticated or has organisational authority |
| This is a declaration about associated work | That everything the party ever publishes uses AI |
| AI participation is being disclosed | That AI use is good, bad, necessary, or superior |

Additional claims are possible, but they must be stated separately and
supported on their own terms.

**A stronger workflow must not silently redefine the basic mark.** A law firm,
publisher, or hospital may require additional review. That requirement belongs
to its policy and applicable obligations, not to an unannounced reinterpretation
of `+AI`.

Equally, the mark is not a legal liability allocation mechanism. It does not
erase the duties of employers, providers, publishers, or institutions. It does
not make a junior employee the sole bearer of consequences simply because
their name appears on a document.

### The permanent design tests

Every extension should pass these questions:

1. Can someone still use and understand the plain-text mark without it?
2. Does it preserve the same meaning across presentation and language?
3. Does it distinguish a declaration from evidence about that declaration?
4. Does it make a real human task easier?
5. Can the signer decline it, export their records, and leave?
6. Does it remain honest when the network, operator, or funding disappears?
7. Does it avoid making non-participation look like wrongdoing?

A feature that fails these tests may be a product somebody could sell.
It is not necessarily a product +AI should build.

---

## 3. The actual starting point

The earlier explorations identified genuine opportunities, but their inventory
of missing features should not be repeated as a current audit.

**`site-v2` is the new architectural standard.** The
[site-v2 README](../../site-v2/README.md),
[pack contract](../../site-v2/packs/README.md), and
[hooks contract](../../site-v2/hooks-contract.json) describe an existing
source-and-build architecture, not merely a proposed replacement for cloned pages.

| Area | Grounded baseline | Consequence for this exploration |
| --- | --- | --- |
| Meaning | Draft v0.1 specification; the `site/` and `site-v2/` copies match at this review | New infrastructure must preserve the existing meaning, not invent a replacement |
| Rendering | Shared shell, application engine, base CSS, theme packs, and translation files in `site-v2` | Extend the shared architecture; do not restart a page-cloning strategy |
| Build products | Generated `index.html` and development `index-fat.html`, assembled by `build.mjs` | Author sources, not generated pages; a maintainer build does not imply a reader needs one |
| Inclusion | Forty language payloads, a neutral theme route, flavour localisation, and conformance metadata | There is a foundation to extend; file presence is not proof that every claim of review or accessibility has been independently established |
| Navigation | A versioned navigation manifest and shared menu hooks | Navigation machinery exists; several human-layer destinations are still recorded as unshipped in the hooks contract |
| Personalisation | Theme, mode, language, font, accent, name, and company parameters | Existing personalised examples are not authenticated identity or issued artifact declarations |
| Delivery | The checked-in deployment workflow still syncs `site/` | The new standard and the configured deployment target must be reconciled deliberately; this document does not claim production has switched |
| Development | Ninety-five numbered requests, with decisions, constraints, and acceptance criteria | These describe work and gates, not ninety-five completed features |

The strategic gap is therefore no longer simply “build a theme engine” or
“add navigation”. It is:

> **Connect the presentation foundation to complete, usable journeys without
> letting the supporting machinery become the meaning of the mark.**

Development requests that still name `site/` output paths need an explicit
translation into the `site-v2` architecture before execution. A stale path is
not a reason to maintain two competing implementations of the same new feature.

The repository already contains abundant ideas. Its next scarcity is
integration, decision-making, and evidence of usefulness.

---

## 4. The complete possibility model

The possibilities fit into six complementary layers. These are functional
layers, **not levels of personal trustworthiness**.

| Layer | Human question | Possible expression | What stays optional |
| --- | --- | --- | --- |
| **Convention** | Who stands behind this AI-assisted work? | Name +AI, with the short explanation | Everything beyond the visible declaration |
| **Record** | What exactly was adopted? | Portable, dated declaration tied to a scope and specification version | Structured metadata, content binding, tool detail |
| **Practice** | How does this person or organisation work? | Voluntary practice register, policy, review description | Public profile and tool disclosure |
| **Coordination** | How do we adopt and maintain work together? | Release approvals, corrections, role-aware workflows, exports | Hosted workspace and automation |
| **Ecosystem** | Can the declaration travel? | Adapters, local checkers, mirrors, compatible formats | A particular provider, directory, or platform |
| **Stewardship** | Who keeps the convention usable and honest? | Versioning, translation review, governance, funding, continuity | Compulsory membership or central permission |

This model also explains what each major participant gains:

- **Signers:** a short expression of a real decision, with detail when useful.
- **Readers:** less ambiguity about what is claimed and who adopts the result.
- **Teams:** a clearer release process and a way to maintain declarations.
- **Tool builders:** a small, stable interoperability target.
- **Communities:** a shared convention in their own language and context.
- **Stewards:** a mission that can be funded without selling credibility.

No participant needs to use every layer. A person signing a letter should not
be required to understand lifecycle schemas. A hospital managing a publication
process may need far more structure than a letter writer. Both can use the same mark.

---

## 5. The cultural possibility

### 5.1 A small act that makes an important distinction ordinary

The strongest cultural idea in [THE-PLAN](../THE-PLAN.md) is not a technical
feature. It is one repeatable act: **Name +AI**.

The public invitation should stay small:

> If AI materially helped, and you adopt the work and accept responsibility for
> releasing it, add `+AI` to the responsible party's name.

This can make disclosure less theatrical. People need not frame AI assistance
as either a confession of incompetence or a boast about automation. They can
describe the work honestly and keep responsibility visible.

There is no need to win an argument about whether humans or machines deserve
more credit before making that declaration.

### 5.2 Make the humans behind the project visible

The founder story matters because the project asks others to attach their
names to their work. Explain who originated the convention, why it was
proposed, its acknowledged influences and prior art, and how others can change
or contribute to it.

The founder should be visible as an originator and first participant, not as
the permanent source of every signer's legitimacy.

The public routes should answer:

- What does this mean?
- How do I use it on the work in front of me?
- Who made it, and why?
- How do I contribute or report a problem?
- Who makes decisions?
- How is the work funded?

In `site-v2`, the menu infrastructure is already a starting point. The
opportunity is to complete these destinations and journeys, not merely add
another row of links.

### 5.3 A movement without a membership test

Adoption can spread through examples, professional pilots, teaching, translated
guides, talks, and everyday signatures. A person who publishes one useful
example may contribute more than a person who registers and never signs work.

Participation should accommodate enthusiasts, cautious experimenters, and
people critical of AI. The specification is neutral about whether AI use was
desirable. That neutrality makes room for honest disclosure without allegiance.

Avoid synthetic campaign spam, claims of universal recognition, and
unsubstantiated priority claims. The distinctive proposition can be explained
without claiming that nobody has previously combined provenance and responsibility.

**Cultural success is correct use on real work, not compulsory visibility.**

---

## 6. The first complete product

The most useful first product is not a directory or an account.

It is **one complete declaration journey**:

**Understand → compose → adopt → export → publish → inspect → correct → leave.**

Each step should stand on its own and work together with the others.

### 6.1 Understand

Explain the mark in plain language, with examples of material assistance and
counterexamples to common misunderstandings. The two specification questions
remain the starting point: did AI materially help, and will the party take
responsibility for releasing the result?

Do not begin with a registration screen.

### 6.2 Compose locally

A no-account tool could prepare a scoped declaration on the user's device.
It should make the scope obvious, distinguish optional detail, and avoid
collecting data simply because a form could collect it.

The minimum user experience should not demand a tool inventory, prompt
history, government identity, or cryptographic key.

### 6.3 Make an explicit adoption decision

A prepared record is not an issued declaration. An AI assistant can help
draft it; a publishing plugin can propose it; neither should silently convert
that preparation into another party's acceptance.

The product should clearly distinguish **drafting a declaration** from
**issuing it in association with a release**.

### 6.4 Export and publish

Offer a readable statement and, where desired, its structured companion.
The same record should support a page, document, repository, printout, or
local archive without requiring a hosted profile.

Uploading to the project should be a separate choice, not a side effect of export.

### 6.5 Inspect

A reader should be able to see the scope, named party, declaration date,
referenced meaning, and any available evidence. A checker should describe
what it checked rather than award a seal of approval.

An offline reader can inspect supplied files. They cannot learn about a
remote correction that occurred after those files were downloaded.

### 6.6 Correct and leave

A signer should be able to correct a mistake, supersede a declaration, record
revocation, change visibility where supported, and export their history.

The same freedom should survive the cancellation of a paid service.
Departure must not erase the meaning of past declarations or reassign their
identifiers to somebody else.

### 6.7 Demonstrate the whole journey

Consider an illustrative case: a consultant releases an AI-assisted analysis.
The consultant produces a local declaration for that report version, exports
it with the report, and optionally publishes a public copy. A reader finds a
mistake. The consultant publishes a corrected report and a successor declaration.
The old link shows that it was superseded. Later, the consultant changes service
providers without losing the records.

That is a more convincing demonstration than a thousand impressive badges.
It shows a responsibility claim being maintained when it becomes inconvenient.

---

## 7. Declarations, profiles, practice, and evidence

### 7.1 Keep four kinds of tool claim separate

The “AI Arsenal” insight in the earlier explorations is valuable, but an
**AI practice register** is a more neutral general-purpose description.
Communities may use “arsenal” as presentation without changing the semantics.

The [claim-types development task](../development/0009-claim-types.md)
distinguishes four statements:

| Claim | Meaning | What it does not imply |
| --- | --- | --- |
| **Available** | The party has access to a tool | That they use it |
| **Generally used** | The party reports using it in their practice | That it contributed to a particular artifact |
| **Approved** | A policy permits it within a stated scope | That it was used, or is approved for every purpose |
| **Used on artifact** | The party declares its use on identified work | That the tool or the work is correct |

A purchased subscription is not evidence of use. A company-approved tool is
not evidence that an employee used it. A profile update should not rewrite the
reported history of old work.

Optional artifact-level tool lists can be useful for methods sections,
technical handovers, reproducibility discussions, or internal policy checks.
They are declarations, not exhaustive forensic reconstructions.

Unknown tools and undisclosed tool detail should not invalidate the simple
mark. Neutral vocabulary governance should not become an approved-vendor club.

### 7.2 A profile is context; a declaration is a claim

A profile may say who a party is, how to contact them, and what practices they
choose to disclose. It is not a blanket declaration for every artifact linked
from it.

A directory may help people find voluntary profiles or declarations. It
should not rank humans by apparent trustworthiness, tools used, payment,
popularity, or the number of declarations issued.

A scoped organisational policy can provide context. It cannot silently mark
all future employee communications as AI-assisted or supply acceptance that
never happened.

### 7.3 Evidence is a set of facts, not a ladder of better people

| Observation | What can reasonably be reported | Important limit |
| --- | --- | --- |
| Schema check | Supplied data conforms to a specified schema version | Conformance does not make the assertions true |
| Specification reference | A record points to a particular meaning/version | A matching fingerprint alone does not establish who issued it |
| Artifact binding | Supplied bytes match the declared binding under a stated method | This does not establish factual accuracy or appropriate use |
| Signature check | A signature verifies against a particular key | Key possession does not establish human identity or organisational authority |
| Account, mailbox, or domain control | A stated control challenge succeeded at a stated time | Control can change and does not prove authority to speak for someone else |
| Lifecycle inspection | Available events record a correction, revocation, or other state | An offline or stale copy may be incomplete |
| Stated review practice | The party declares a particular review process | Unless independently assessed, the process remains self-reported |

The [checker request](../development/0028-verification-checker.md) is right
to reject an aggregate score or single verdict.

“Not checked”, “unavailable”, and “stale” are useful results. A network error
is not evidence of misconduct. A private declaration is not a failed public one.
An unregistered signer is not a lower class of participant.

### 7.4 Preserve the difference between integrity and authenticity

Hashes, signatures, timestamps, registry entries, and history each solve a
different problem. An append-only-looking file is still editable by someone
who controls it. A self-authored date is not an independently witnessed time.
A shared-secret signature is not automatically publicly verifiable evidence.

Any future cryptographic mechanism needs a precise account of the bytes being
bound, the key being trusted, the authority claimed, and the limitations after
key compromise or loss.

The definitive promise should be narrower than the technology's marketing.

---

## 8. The reader is a first-class participant

The previous explorations often start with what signers can publish.
An equally important question is **what readers can correctly understand**.

The reader's shortest useful path is:

1. Recognise the mark.
2. Understand its limited meaning.
3. Identify the associated responsible party and work.
4. Inspect additional detail only if needed.
5. Find a correction or contact route where one is offered.

This suggests several valuable possibilities:

- A compact explanation beside the mark, not only behind an unfamiliar link.
- A declaration view that starts with “who” and “which work”, not a badge tier.
- Separate presentation of the party's claims and the checker's observations.
- A visible distinction between current records and historical snapshots.
- Accessible print and plain-text versions carrying the essential information.
- A correction route that need not expose a personal mailbox publicly.

These are product capabilities, not disclaimer placement.

### Comprehension is an integrity requirement

If readers consistently interpret “signature checked” as “content true”,
changing the footnote is insufficient. The label, layout, or interaction is
misleading and needs redesign.

If a themed page makes a self-declaration resemble professional accreditation,
the theme has crossed from presentation into an implied claim.

If an English fallback appears inside an RTL page, it must remain intelligible
in reading order and typography, not merely present in the DOM.

The test is not whether the project can defend the wording. It is whether
ordinary readers understand the distinction the wording is supposed to convey.

---

## 9. Responsibility after publication

The most underdeveloped opportunity is the period **after** a declaration is issued.

A name at release time is useful. A practical way to address problems later
can make the declaration substantially more useful without increasing the
claims carried by the simple mark.

### 9.1 Correction as a first-class possibility

Optional correction facilities could provide:

- A route to report a specific concern.
- A reference to the artifact and version being discussed.
- A distinction between an allegation, an acknowledged issue, and a correction.
- A successor link when new work replaces old work.
- A dated explanation of what changed.
- Opt-in notifications through a feed or subscription.

These are additional practices. The simple mark does not itself promise a
response deadline, compensation, perpetual support, or guaranteed remediation.
Organisations offering those commitments should state them separately.

Revoking a declaration records a change of position. It does not make the
original release disappear or automatically extinguish obligations arising from it.

### 9.2 Collaboration without inherited legitimacy

Work is frequently assembled, edited, translated, republished, and deployed by
different parties. Optional linked declarations could make those boundaries visible.

An author may adopt a draft. An editor may adopt a revised publication.
A translator may adopt the translation. A deployer may adopt a release.
None should automatically inherit the others' declarations as proof of their
own decisions.

A contribution map should show **who adopted which scope**, not divide moral
responsibility into invented percentages. It should preserve ordinary credit
and existing professional obligations rather than replace them.

### 9.3 Responsibility must accompany authority

An institution should not ask a person to take responsibility while denying
them the ability to reject, review, escalate, or correct the release.

Useful organisational tools would make actual authority more legible:
who approves publication, who can stop a deployment, who handles an incident,
and which organisational obligations remain in force.

This is a better direction than building an employee compliance scoreboard.

### 9.4 Continuity beyond the individual

People leave roles. Teams reorganise. Companies close.

A well-designed record can preserve who adopted work at a particular time
while separately identifying the current contact or service custodian.
Changing the maintenance contact must not rewrite historical authorship or
pretend that a successor made an earlier declaration.

That distinction makes +AI useful for long-lived reports, software releases,
research outputs, and public records.

---

## 10. The opportunity across fields

The same convention can support very different work without becoming a
different standard for every profession.

The following are candidate applications, not claims of adoption, regulatory
acceptance, or suitability for high-stakes use.

| Field | Useful possibility | Responsibility boundary | First meaningful experiment |
| --- | --- | --- | --- |
| Independent writing and publishing | Scoped bylines and correction-linked articles | The writer or publisher adopts the release; the mark does not prove research accuracy | Can readers distinguish disclosure from fact-checking? |
| Software and open source | Release declarations, optional AI contribution detail, portable records in release bundles | A commit, pull request, package, and deployed release are different scopes | Does the declaration survive packaging and an amended release? |
| Research and mathematics | A concise responsibility statement beside methods and required AI disclosures | Existing authorship, methods, data, and journal obligations still apply | Do authors and readers identify exactly what was adopted? |
| Design, images, film, and music | Visible credits with optional process and derivative links | +AI does not establish copyright ownership, consent, or rights clearance | Does attribution survive export and republication? |
| Translation and localisation | Linked source and translation declarations | The translator adopts the translated result, not an unverified claim of source accuracy | Can readers identify language, source version, and review status? |
| Education | Disclosure literacy and private, bounded assignment examples | No default public profiles for children; institutional rules remain applicable | Can learners explain the mark without equating it with cheating or permission? |
| Professional services | Client deliverables with scoped acceptance and versioned policy context | No automatic legal, financial, or professional assurance | Does the record reduce clarification work during handover? |
| Healthcare and scientific communication | Supplementary declarations on reviewed information and research communication | Never a substitute for clinical accountability, consent, safety assessment, or confidentiality | Start with specialist-reviewed, non-clinical examples using no patient data |
| Public administration | Plain-language transparency beside reports and consultations | Statutory records, accessibility, and appeal rights remain independent | Can the public find the responsible office and correction route? |
| Journalism | Responsibility attached to a particular published story and its amendments | The mark does not certify sources, authenticity, or editorial independence | Can a reader distinguish process disclosure from source verification? |
| Small organisations and nonprofits | Local templates, registers, and reusable handover packs | No new compliance burden disguised as a free tool | Is the no-account path genuinely enough for recurring use? |
| Large organisations | Private registers, approval workflows, policy versions, and exports | Administrative access is not proof of legal authority; organisational duties remain | Can a team complete a release and offboarding without losing attribution? |
| Libraries, archives, and museums | Durable explanations and historical declaration snapshots | Historical evidence must not be presented as current status | Can an archived artifact still be interpreted without the original service? |

The broad opportunity is **a common vocabulary across these contexts**.
The constraint is that a common mark cannot absorb every context's additional
requirements without becoming unreadable.

Sector packs should therefore add examples, practices, and mappings around
the mark. They should not silently alter its meaning.

---

## 11. Distribution without dependence

### 11.1 Meet the work where it is released

The natural distribution channels are the places where people already adopt
and publish work:

- Email and messaging.
- Documents, presentations, and print.
- Websites, newsletters, and content-management systems.
- Repositories, release notes, packages, and build artifacts.
- Images, audio, video, captions, and credits.
- Internal approval and handover systems.

A good integration reduces duplicate work while preserving the visible
decision. It should not infer consent from an installed plugin, a detected AI
tool, or a standing preference.

### 11.2 The URL opportunity

The project's domain can carry both memorable identity-related addresses and
public invitations. The founding hostname
`eric-mourant.plus-artificial-intelligence.org` illustrates the expressive
possibility: a human name placed beside the idea of AI assistance.

But four URL jobs must remain separate:

1. Explain the mark.
2. Personalise its presentation.
3. Identify a profile.
4. Locate an issued declaration.

An address that does one should not falsely imply another. Anyone can author
a query string containing a name. A renderer does not authenticate that name.

Stable declaration identifiers should not depend on a paid vanity address.
Old identity-bearing addresses should not be recycled in a way that makes
historical links appear to refer to a new person.

### 11.3 The email opportunity, stated accurately

`name+ai@example.org` can be a memorable supplementary convention where the
mail provider supports it. It is not the canonical uppercase `+AI` mark, an
authenticated signature, or a guarantee that the provider permits sending
from that address.

Receiving a plus-addressed message and sending with a plus-addressed `From`
address are different capabilities. Provider and organisation settings vary.

A visible, scoped **Name +AI** signature is the safer primary explanation.
A standing signature still needs care: it should not imply material AI
assistance on a message where none occurred.

Forwarding, relay, declaration-by-email, and experimental headers are separate
service possibilities. They bring consent, spam, spoofing, deliverability,
retention, and abuse obligations. None is “just an alias”.

### 11.4 Standards and existing provenance systems

The [interoperability task](../development/0087-provenance-interoperability.md)
points toward C2PA, IPTC, Schema.org, signatures, and other existing mechanisms.
The opportunity is to complement them rather than claim to replace them.

A provenance record, a source-type field, an identity assertion, and a human
adoption declaration are not interchangeable. A mapping should say **“no
equivalent”** where appropriate rather than force semantic similarity.

Before calling an integration compatible, demonstrate export, import,
interpretation, and preservation of scope and evidence limitations.
Naming an established standard is not proof of interoperability.

---

## 12. The site-v2 opportunity

`site-v2` makes the “one meaning, many presentations” principle materially
easier to maintain. Its strategic significance is not simply less duplicated
code. It creates a common place to protect meaning while extending reach.

### 12.1 Build on the shared engine

The shared shell and application engine can support consistent explanations,
language behaviour, navigation, neutral fallback, and eventually links to
declaration tools.

Theme packs can express professional, cultural, playful, or personal contexts
without becoming separate implementations of the specification.

The current pack contract explicitly excludes decorations from `#specContent`.
That is the right invariant: presentation may attract attention, but it must
not edit the promise.

New ideas should use the appropriate existing seam:

| Kind of change | site-v2 starting point | Boundary |
| --- | --- | --- |
| Visual identity | Authored pack manifest, stylesheet, flavour, and conformance note | No change to normative meaning |
| Shared behaviour | Source shell and application engine | One consistent implementation, with maintained hooks |
| Language | Translation mechanism and reviewed vocabulary | Keep protected tokens literal and review status honest |
| Project navigation | Versioned navigation manifest | A listed route needs a real, useful destination before being advertised as complete |
| Distribution artifact | Deterministic assembler and generated outputs | Do not hand-edit generated runtime files |
| Declaration capability | A separately defined record/tool interface integrated with the shared experience | Do not confuse theme selection or personalisation with issuance |

The document does not assume every future tool belongs inside the single
specification page. Keeping the explanation simple may require adjacent,
optional tools with the same language and accessibility disciplines.

### 12.2 Accessibility is not a special membership tier

The neutral route is the foundation for every core task. Decorative
presentation should never be required to issue, inspect, correct, or export.

Keyboard operation, screen-reader clarity, visible focus, reduced motion,
print, RTL/CJK behaviour, and understandable error states are part of the
product, not optional finishing work.

There is a further question to test: a visually neutral theme inside a large
all-themes bundle is not necessarily a low-bandwidth experience. Measure the
actual delivery and runtime cost before claiming universal access.

A future lighter distribution could be valuable, but should derive from the
same meaning and source contracts, not create a second independently maintained spec.

### 12.3 Multilingualism is governance as well as rendering

Forty language payloads create reach. They do not, by themselves, prove
semantic equivalence or review provenance.

Separate:

- Normative meaning and evidence terminology.
- Interface instructions and error messages.
- Decorative flavour.
- User-authored declarations and profile text.

Missing interface copy can fall back honestly. Normative changes need version
tracking and review. User-authored declarations should not be automatically
translated into apparently authoritative claims without the author's control.

Paid translation work and volunteer translation work should meet the same
review criteria. Money can fund capacity; it cannot purchase a stronger status.

### 12.4 Static-first does not mean build-free development

The assembler is a maintainer tool. Readers should be able to open the
distributed commons without running it, logging in, or depending on an
application server.

The current runtime still uses external fonts. Offline usability should rely
on appropriate fallbacks, not a claim that every decorative resource is bundled.

The key promise is **no required service for the core meaning and local use**,
not the absence of any development tooling or optional network enhancement.

---

## 13. A commons that survives its services

The [static-first development task](../development/0003-static-first-service-architecture.md)
provides the right architectural ordering:

**Static commons → deterministic exports → optional hosted services.**

Services depend on the commons. The commons does not depend on the services.

### 13.1 The commons

The independently usable layer should contain the meaning, version references,
language resources, open record formats, local authoring and checking tools,
and the instructions needed to interpret exported records.

A plain-text declaration remains meaningful even if the record tooling never
becomes widely adopted.

### 13.2 The export layer

Services should publish permitted public records through inspectable,
versioned exports. Private records need appropriately protected owner exports,
not inclusion in a public snapshot.

A useful export carries enough context to interpret its data:
schema version, meaning version, issuance information, supplied evidence,
available lifecycle history, source, and freshness.

Portability means being able to use the data elsewhere. A download button
that produces an undocumented dump is not sufficient.

### 13.3 The optional service layer

Accounts, profiles, private workspaces, scheduling, relay, and high-volume APIs
can remove genuine operational friction. They should publish what happens
when billing stops, authentication fails, the database is unavailable, or the
operator winds down.

| Failure | Honest surviving capability | What cannot be promised |
| --- | --- | --- |
| No network | Read the meaning and inspect supplied local records | Fresh remote evidence or unseen revocations |
| Checker unavailable | Read the declaration and use compatible local tools | A current hosted check result |
| Registry unavailable | Read available exports with source and snapshot date | Knowledge that no newer event exists |
| Billing stops | Keep the issued declaration and export path independent of payment status | Unlimited operation of every managed convenience |
| Operator closes | Final permitted exports, continuity information, and independently usable formats | Indefinite live service without a funded successor |
| A key is lost or compromised | Historical context and a documented recovery/revocation process | Retroactive proof that every use of that key was authorised |

Degraded modes should be demonstrated, not only described.

### 13.4 Mirrors first; broader federation only when defined

The current [federation request](../development/0049-federation-and-mirrors.md)
describes compatible replication of a canonical, one-writer public dataset.
That is useful resilience. It is not a completed multi-writer federation protocol.

Mirrors should show source, freshness, compatibility, and removal propagation.
An archival snapshot may be historically useful without being current.

Independent registries and richer cross-provider exchange are plausible later
extensions. They would need explicit ownership, identity collision, authority,
conflict, privacy, and lifecycle rules.

The ambition is not to make the project impossible to replace.
It is to make replacement possible without losing the convention.

---

## 14. The economic possibility

### 14.1 The free floor is the product

The central insight of the earlier explorations survives:

> **Keep the declaration free. Charge for work saved around it.**

The proposed free floor includes the notation and meaning, accessible
explanations, usable language resources, a no-account local path, portable
formats, basic inspection, and practical correction, revocation, and exit.

Optional listing must not become paid legitimacy. Self-service evidence
mechanisms must not be reserved for people who can afford an impressive badge.

“Free” does not mean that a volunteer-operated endpoint can accept unlimited
traffic or perform unlimited human adjudication. Publish proportionate
operating limits, queues, and local alternatives. Never relabel scarcity as
evidence that a non-paying declaration is less valid.

The [free-floor task](../development/0005-free-floor-covenant.md) proposes a
versioned covenant. Its legal effect, amendment mechanics, and successor
obligations require actual governance and appropriate review, not just a
sentence saying “forever”.

### 14.2 The strongest services sell coordination, not status

| Possible revenue | What the customer buys | Independent free counterpart | Evidence needed before expansion |
| --- | --- | --- | --- |
| Training and adoption support | Expert time, workflow design, practical handover | Public guidance and reusable templates | Repeated demand for help beyond self-service |
| Custom presentation and localisation | Craft and additional delivery capacity | Existing packs, source tools, normal review process | A real commissioning need and unchanged meaning |
| Organisation workspaces | Roles, private coordination, approvals, maintenance | Portable declarations, local registers, manual workflows | A bounded organisational pilot demonstrating recurring friction |
| Workflow automation | Scheduling, integration, and reduced duplicate entry | Open interfaces and manual execution | Measurable work saved without automatic acceptance |
| Managed profiles and addresses | Hosting, administration, and memorable access | Self-hosted records and authored links | Sustainable support and namespace continuity |
| High-volume APIs | Throughput, reliability, and operational support | Local checks and permitted public exports | Measured cost and abuse controls |
| Evidence exports | Packaging, reconciliation, and internal reporting | The underlying records and local export | Buyers understand that an export is not legal compliance certification |
| Managed hosting | Backups, recovery, operations, and support | Self-hosting and documented exports | Demonstrated recovery and a funded wind-down posture |
| Publications and merchandise | A book, physical object, or commissioned work | Free meaning and usage | Demand that does not distract from the commons |

These are business hypotheses, not proof of a market. A large number of
signers does not automatically produce paying organisational customers.
Conversely, a small number of genuine service customers might sustainably
fund an otherwise free convention.

### 14.3 Funding the public work

Donations, grants, screened sponsorship, and optional supporting membership
could fund translation review, accessibility, maintenance, public research,
and continuity.

Make the funded work, costs, conflicts, and decision boundaries legible.
Supporters may receive acknowledgement; they should not purchase control of
the meaning, preferred evidence outcomes, or directory placement.

Tax treatment and fiscal-sponsorship benefits depend on jurisdiction and
arrangement. Do not promise them without a real structure.

### 14.4 The incentives to refuse

Never fund the commons by:

- Selling people's declaration data or inferred AI-use profiles.
- Ranking sponsors above other signers.
- Charging to correct an impersonation or revoke a declaration.
- Making safety response depend on commercial priority.
- Weakening free tools to create artificial demand.
- Calling a subscription “verified responsibility”.
- Binding a customer's historical declarations to an active invoice.

Priority professional services can buy additional capacity under published
rules. They must not displace urgent safety work, change assessment criteria,
or starve the ordinary free path.

The best business is one whose success makes the commons more useful even
for people who never become customers.

---

## 15. Stewardship is part of the product

A project about responsibility needs clear responsibility for itself.

### 15.1 Separate the roles

| Role | Responsibility | What it should not control alone |
| --- | --- | --- |
| Meaning steward | Maintain the specification and change process | Commercial outcomes and individual declarations |
| Language maintainers | Preserve meaning and review provenance in each language | Unilateral changes to the normative claim |
| Service operators | Run hosting, accounts, security, support, and exports | Permission to use the mark |
| Registry moderators | Apply admission, safety, privacy, and dispute rules | Judgments of a person's universal trustworthiness |
| Funders | Support disclosed work | Evidence outcomes or privileged interpretation |
| Signers | Adopt their own associated work | Statements attributed to other parties without authority |
| Independent implementers | Offer compatible tools and services | Pretend their divergent rules are the canonical meaning |

A small project may initially combine roles in the same people. That is a
reason to disclose the overlap and plan succession, not to claim independence
that does not exist.

### 15.2 Protect meaning without claiming ownership of ordinary expression

Clarify rights separately for specification text, implementation code,
translations, visual assets, contributed content, and use of the notation.

Public availability does not by itself establish an open licence. A declaration
containing personal data does not become unrestricted research material merely
because software can download it.

The project can maintain an authoritative definition without claiming ownership
of the characters `+AI` or permission over every use of them.

### 15.3 Continuity is concrete work

The [continuity task](../development/0022-continuity-and-namespace-custody.md)
identifies the right concerns: domains, keys, identifiers, renewal, recovery,
exports, succession, and wind-down.

Those require real custodians and exercised procedures.

Distinguish the registrar from the registrant, the service provider from the
meaning steward, and a release-signing key from a person's declaration key.
Publishing a threshold-recovery policy is not the same as arranging independent
people and mechanisms capable of carrying it out.

Historical meaning should remain referenceable. Namespaces should not silently
change owners. Privacy duties should limit retention of personal data rather
than being overridden by an aspirational archive policy.

**The strongest evidence of stewardship is that the convention can outlive its steward.**

---

## 16. Privacy, safety, and the right not to participate

### 16.1 Accountability is not maximum disclosure

People may need to explain a release without revealing a client, a personal
mailbox, a disability-related tool, a confidential project, or a complete
working history.

Useful visibility modes include local-only, private organisational records,
unlisted sharing, and explicitly public publication.

Unlisted is not access-controlled. A shared link can be copied. A hash or
opaque identifier can still be linkable personal data.

Public directories should be opt-in, field-minimised, and accompanied by a
meaningful explanation of indexing, export, and independent copies.

### 16.2 URL convenience is not secrecy

Query strings can reach server logs, browser history, analytics, copied links,
screenshots, and referrers. Fragments reduce some routine transmission but
remain visible to page scripts and anyone possessing the link.

Neither is a safe default for confidential declarations.

The no-account path should be able to remain local. Public URL authoring
should explicitly preview what is being exposed.

### 16.3 History and erasure need an honest settlement

The early idea “append-only, never delete” is too absolute for personal data.

Preserve accountable change by default: stable identifiers, dated amendments,
and transparent lifecycle events. But redaction, withdrawal, lawful erasure,
and safety restrictions need real effects in live data, derived indexes,
exports, backups, and compliant mirrors.

Do not publish sensitive records in permanent repository history and later
promise that changing the current file erases them.

Do not promise to recall independent copies that the project cannot control.
Where even a tombstone would retain prohibited or identifying information,
the retention rule must accommodate that constraint.

The design question is not “history or privacy?” It is:

> What minimum history can be preserved lawfully and safely, and what limits
> on withdrawal must be explained before publication?

### 16.4 Security controls should match the actual service

| Surface | Main risk | Required direction before launch |
| --- | --- | --- |
| Authored links and imports | Impersonation, injection, misleading presentation | Treat input as untrusted; distinguish user claims from project text |
| Hosted URL checker | Requests to private systems, redirects, unbounded retrieval | Reviewed fetch policy, destination restrictions, resource limits |
| Registry and directory | Harassment, defamatory submissions, scraping, identity confusion | Consent, moderation, appeals, minimisation, publication controls |
| Organisation workspace | Cross-tenant access, excessive permissions, coercive use | Tested isolation, server-side authorisation, clear acceptance, offboarding |
| Public snapshots | Accidental publication of private fields or revoked visibility | Explicit public projection and removal propagation |
| Email services | Spoofing, spam, relay abuse, data retention | Confirmed intent, authentication, abuse handling, bounded storage |
| Theme and integration ecosystem | Hostile scripts, semantic drift, supply-chain exposure | Reviewed contribution boundaries and conformance checks |

These are safeguards to design and validate, not claims that the current
repository has been security-audited by this document.

### 16.5 Non-participation must remain non-evidence

The absence of +AI does not prove that AI was absent. It also does not prove
dishonesty, poor quality, or lower accountability.

Do not turn voluntary participation into an employer surveillance system,
hiring filter, student leaderboard, or public list of people who “refuse
transparency”.

Pseudonymous participation can be valuable where appropriate, while its
identity and authority limitations remain explicit. Children and vulnerable
participants need specialist-reviewed designs, not scaled-down adult profiles.

---

## 17. The agentic frontier

AI systems increasingly prepare artifacts and perform actions across tools.
The tempting response is to stamp +AI on every action and name whoever owns
the account.

That would be an unacceptable shortcut.

### 17.1 Separate delegation, action, and adoption

Three records could eventually coexist:

1. **Delegation:** who authorised an agent, for what scope, under which limits,
   with what expiry, escalation, and revocation route.
2. **Action receipt:** what the system reports doing, when, and under which
   delegation.
3. **Adoption or release decision:** the accountable party's acceptance of
   the relevant result.

An action receipt is not proof of human review. A delegation is not blanket
adoption of every unforeseen result. Stopping an agent's future authority is
not the same event as correcting a past declaration.

The agent is never the responsible party under the canonical meaning.

### 17.2 Preserve the current gate

The [agentic development task](../development/0094-agentic-accountability.md)
is explicitly a deferred sketch and precondition record, not a feature build.
Its selected choices favour an independent, openly published, interoperable
implementation and initially optional contribution-chain evidence. Those
choices do not remove the remaining gates.

A future extension requires reviewed semantics, independent implementation,
and governed approval with separate versioning and experimental labelling.
The request also requires the principal's recorded acceptance for publication
or deployment. This document does not relax that requirement.

### 17.3 The worthwhile possibility

If those gates are met, the value is not “autonomous responsibility”.
It is **bounded automation with visible human authority and actionable
failure handling**.

Possible uses include release approval around coding agents, bounded
publication workflows, delegated research assistance, or incident records
linking an action to the authority under which it occurred.

The practical questions remain:

- Who could prevent or stop the action?
- What exactly did they authorise and adopt?
- What happened outside the authorised scope?
- Who receives the escalation?
- How are records corrected after failure?

A system that cannot answer those questions should not borrow a human name
to make itself appear accountable.

---

## 18. New combinations worth exploring

The existing portfolio is broad. Its most interesting next possibilities
often come from combining parts rather than inventing another platform.

The following are **new exploratory combinations**, not additions silently
inserted into the 95 existing task scopes.

| Combination | Why it could matter | Smallest useful expression | Boundary and evidence needed |
| --- | --- | --- | --- |
| **Responsibility receipt** | Keeps the release decision beside the exported work | Readable declaration plus its portable record in one release bundle | Demonstrate survival through ordinary copying and format conversion |
| **Correction subscription** | Lets readers follow amendments without joining a social network | A declaration-specific feed or opt-in notification | No tracking of everyone who reads the artifact; no implied response guarantee |
| **Release responsibility map** | Makes multi-party handovers understandable | Linked scopes for preparation, editing, translation, and release | No automatic inheritance of claims or invented responsibility percentages |
| **Policy-context snapshot** | Explains which organisational rules applied at release time | A versioned policy reference beside an optional organisational declaration record | Approval of a tool does not prove actual use or policy compliance |
| **Exit-ready evidence bundle** | Turns portability into something a user can test | Records, supplied evidence, lifecycle events, and interpretation instructions | Show reconstruction outside the originating service without exporting private third-party data |
| **Reader comprehension lab** | Detects misleading labels before they scale | Consented comparison of plain and themed declaration views | Publish misunderstandings and negative results; do not score participants |
| **Community adoption kit** | Helps a language community adopt the convention in its own context | Reviewed explanation, locally meaningful examples, accessible formats | Local examples may change; the canonical meaning may not |
| **Responsibility handover** | Supports staff changes without rewriting history | Historical adopter plus a separately maintained current contact | No transfer of personal declarations to an employer or successor |
| **Independent compatibility demonstration** | Shows the convention is bigger than its host | One tool issues, another reads, a third reconstructs an export | Preserve claims and unknown states; no stronger label merely because tools agree |
| **Public-interest methods library** | Shares practical lessons rather than collecting personal profiles | Reusable, permissioned examples of disclosure and correction | No compulsory participation or publication of confidential work |
| **Low-connectivity edition** | Makes the commons useful in constrained environments | A measured, source-derived, lightweight local distribution | Same meaning and versioning; avoid an independently drifting second implementation |
| **Organisational failure exercise** | Tests accountability when an AI-assisted release goes wrong | A fictional incident moving through reporting, correction, export, and offboarding | Demonstrate actual authority and communication, not only a completed checklist |

These combinations could make the project valuable even if a public directory
never becomes large.

They also provide a discipline for brainstorming:

> Prefer possibilities that complete a human journey over possibilities that
> merely enlarge the catalogue.

---

## 19. What not to build

Some possibilities should be rejected because they undermine the convention.
Others should remain deferred because their operating burden exceeds the
evidence for their value.

### Reject as part of ordinary +AI

- Paid permission to use the mark.
- Mandatory registration, government identity, biometrics, or approved tools.
- Compulsory prompts, transcripts, or percentages of AI contribution.
- “Verified human” or “trusted AI user” status inferred from technical checks.
- Person-level trust scores, rankings, or reputation leaderboards.
- Automatic declarations issued in somebody else's name.
- A badge implying correctness, safety, legal compliance, or endorsement.
- Monetisation of personal disclosure data.
- Public pressure campaigns against people who do not use the mark.
- A proprietary format that makes exit impractical.
- A canonical meaning that changes silently beneath old declarations.

### Defer unless a separate case is made

- Hosted mail infrastructure.
- Professional matching or marketplaces.
- Broad external identity integrations.
- Autonomous-agent extensions.
- Independent assurance or certification.
- Multi-writer federation beyond the current mirror model.

Deferral does not mean “we will build this once we have time”.
It means **the decision to build remains open**.

The [assurance task](../development/0095-independent-assurance-and-certification.md)
is particularly clear: no credential is authorised today. Any future programme
would need independent governance, distinct naming, specific criteria,
appeals, renewal, and funding rules. Ordinary +AI would remain unchanged.

Passing a prerequisite is permission to reconsider a possibility, not evidence
that the possibility is desirable.

---

## 20. Reconcile the development portfolio before scaling it

The 95 development requests are an unusually detailed foundation. They also
contain overlapping dependencies, undecided policies, inherited assumptions,
and some substantive tensions.

They should be used as a decision and execution portfolio, not treated as a
numbered instruction to build everything in sequence.

### 20.1 Preserve document authority

The specification defines the mark. The development tasks define proposed
work around it, subject to their decisions and acceptance criteria.
Recommendations in those tasks are not automatically selected decisions.
Unchecked acceptance criteria are not evidence of implementation.

This exploration should influence future decisions through that process,
not bypass it.

### 20.2 Resolve the highest-impact seams

| Seam | What needs reconciliation | Recommended strategic direction |
| --- | --- | --- |
| **New-standard architecture** | Older requests name `site/` and clone-era hooks; `site-v2` now provides a shared engine and generated outputs | Rebase each request's target paths and acceptance checks onto the new standard before execution; retain compatibility intentionally |
| **Responsible party** | Specification §§11 and 26 allow organisations; [0021](../development/0021-portable-declaration-schema.md) requires a named human and forbids an organisation as sole `responsibleParty` | Preserve the canonical organisational case; treat stronger human-attribution requirements as explicit workflow requirements or separately governed extensions |
| **Minimal record and user journey** | Schema, wizard, and visibility tasks differ over required `aiRole` and visibility fields | Agree one minimal record and distinguish authoring defaults, required consent decisions, and serialised fields |
| **Review and adoption** | Role-language restrictions can be read more strongly than v0.1's adoption requirement | Keep process detail separate; do not turn the mark into a claim that every component was reviewed |
| **Offline checking** | “Fully checked offline” can be read as a promise of current remote facts | Define exactly what local evidence establishes and label missing freshness, control, or status evidence |
| **Lifecycle and privacy** | Immutable history, redaction, permanent snapshots, and frozen mirrors pull in different directions | Define safe public projections, lawful retention, removal propagation, and the limits of recalling independent copies |
| **Identity-bearing addresses** | Never-reused declaration IDs do not by themselves make recycled vanity subdomains safe | Protect the referent of old public links, not only internal IDs |
| **Readiness metrics** | Later gates reference “meaningful adoption”, but a measurement is not a decision threshold | Name the deciding body, required evidence, and gate criteria before evaluating the gate |
| **Operational assessments** | Watchlist, service, safety, and cost requests share ownership | Distinguish who authors an assessment, who approves it, and who maintains its status |
| **One-record interoperability** | Schema, binding, lifecycle, visibility, labels, and adapters can each appear correct in isolation | Conduct the joint freeze check and test a complete cross-tool journey |

These are not reasons to abandon the portfolio. They are reasons to prevent
individually plausible implementations from producing a contradictory system.

### 20.3 Give the complete journey an owner

Component ownership is necessary but insufficient.

Someone should be accountable for the end-to-end experience from understanding
the mark to issuing, inspecting, correcting, exporting, and leaving. That
owner should coordinate specialists rather than redefine their contracts.

Otherwise a builder can export a record the checker misreads, a workspace can
publish a status the mirror cannot reproduce, or a privacy control can work in
the database while failing in the public archive.

**The unit of success is a coherent journey, not a completed request file.**

---

## 21. An evidence-led sequence

This is a strategic prioritisation overlay, not a replacement implementation
plan. It introduces no deadlines, pricing promises, or automatic approval of
deferred work.

### 21.1 Choose outcomes before feature counts

| Stage | Outcome to demonstrate | Relevant portfolio | Gate before expanding |
| --- | --- | --- | --- |
| **A. Make the meaning usable** | People can understand and correctly use the mark without accounts | Human-layer content, accessible site-v2 routes, usage and signature guidance | Readers do not systematically confuse the mark with certification or blanket AI use |
| **B. Complete the local journey** | A signer can issue, export, inspect, correct, and preserve a scoped record | Schema, binding, lifecycle, evidence labels, local builder and checker | Shared contracts agree and the whole journey works offline within explicit limits |
| **C. Test bounded real use** | The record helps a real release or handover | Pilots, selected integrations, practice registers | Demonstrated benefit, consent, comprehensible claims, and published shortcomings |
| **D. Add voluntary public infrastructure** | Public publication and discovery serve an identified need | Registry, snapshots, directories, moderation, mirrors | Privacy, removal, disputes, operating capacity, and failure modes are demonstrated |
| **E. Sell recurring operational help** | Organisations pay for measured work saved | Workspaces, integrations, exports, managed services | Pilot demand, cost model, isolation, exit, and billing-independent declarations |
| **F. Extend the ecosystem carefully** | Independent tools interoperate and stewardship becomes less concentrated | Standards work, independent implementations, continuity, governed extensions | Semantics and governance are ready; each deferred possibility is separately reconsidered |

Plain-text adoption need not wait for the registry. Conversely, a public
service should not use “adoption first” as an excuse to skip its safety gates.

### 21.2 The experiments that matter

| Question | Bounded experiment | Evidence to collect | Reason to stop or redesign |
| --- | --- | --- | --- |
| Do people understand the mark? | Ask consenting readers to interpret marked examples | Correct distinction between assistance, adoption, and assurance | Persistent belief that the project certifies the work |
| Can people use it without help? | Observe a local declaration and export task | Completion, scope mistakes, unnecessary disclosure | Users cannot identify what they are signing or think an account is mandatory |
| Does detail help readers? | Compare a mark alone with a scoped record | Whether readers locate responsibility and scope accurately | More fields increase false confidence without improving understanding |
| Can correction work? | Correct a fictional release across an export and mirror | Visible supersession and accurate freshness states | Old views silently remain apparently current |
| Is a directory useful? | Pilot an opt-in view for a bounded community | Specific discovery tasks completed | Use depends on ranking people or collecting unnecessary data |
| Is paid coordination valuable? | Run a manual or limited organisational pilot | Repeated administrative work and voluntarily reported willingness to pay | Interest is only in a prestige badge or compulsory employee monitoring |
| Can the service disappear? | Disable service access and reconstruct from permitted exports | Readability, interoperability, status limitations, recovery steps | Essential records depend on proprietary endpoints or active billing |
| Does translation preserve meaning? | Test key distinctions with consenting language communities | Meaning equivalence and observed misunderstandings | “Reviewed” labels mask missing review or altered implications |

The [experiments request](../development/0091-experiments-and-metrics.md)
already calls for registration, consent, retention limits, and equal prominence
for negative findings. Apply that discipline to studies; do not postpone basic
comprehension work until an analytics platform exists.

### 21.3 Measure usefulness without pretending to see everyone

Useful measures include:

- Consented examples of correct use on real work.
- Comprehension of the mark's limits.
- Successful no-account completion.
- Successful export and interpretation by another tool.
- Correction and revocation propagation in tested systems.
- Accessibility and language-equivalence findings.
- Operating and moderation burden.
- Recurring demand for optional coordination services.

Registrations, theme count, impressions, and social attention are at most
supporting signals.

The campaign's aim of counting distinct adopters is directionally useful.
Because quiet and offline use is permitted, the project cannot honestly
promise a complete global count without undermining that freedom.

Report observed samples, methods, limitations, and uncertainty. Do not infer
individual AI use from browsing or tool telemetry.

### 21.4 Allow success at several scales

There are multiple good outcomes:

1. **A useful convention:** people use the mark correctly without extensive software.
2. **A useful toolkit:** local records and exports improve real publishing workflows.
3. **A sustainable commons:** translation, maintenance, and stewardship have dependable support.
4. **A service ecosystem:** several providers offer compatible conveniences.
5. **A recognised interoperability practice:** institutions and tools exchange the claim without requiring one operator.

The project need not reach the fifth outcome to justify the first.
Failure to create a large subscription business would not invalidate a useful
public convention.

The greatest outcome is not maximum dependence on the project.
It is widespread correct use with minimum dependence.

---

## 22. The definitive destination

+AI can become a cultural convention, a portable declaration format, a
practical release habit, a multilingual public resource, an organisational
coordination tool, and an interoperability target.

It can make disclosure less awkward, scope more explicit, human authority more
visible, and correction more practical.

It can fund those benefits through services that save real work.
It can do so without selling permission, personal data, or artificial prestige.

But its most important achievement would remain remarkably small:

> A person encounters AI-assisted work and can understand who adopts it,
> what the declaration means, and what it does not mean.

The mark should be simple enough to write by hand.
The explanation should be clear enough to translate faithfully.
The optional record should be portable enough to leave its first host.
The evidence should be precise enough not to mislead.
The workflow should be practical enough to use again.
The governance should be strong enough to survive its founder.

**Keep the centre small. Make the surrounding practices useful. Let independent
people carry the convention further than any single platform could.**

The first declaration is not the end of responsibility.
It is the point at which responsibility becomes visible.

And the sentence remains:

# **AI helped. I take responsibility.**

---

## 23. Source map

### Meaning and architecture

- [Canonical draft specification in site-v2](../../site-v2/SPECIFICATION.md):
  especially §§5–11, 16–21, and 24–26.
- [site-v2 README](../../site-v2/README.md):
  shared sources, generated artifacts, and build/check commands.
- [site-v2 theme-pack contract](../../site-v2/packs/README.md):
  authored pack files, protected normative content, flavour, and neutral route.
- [site-v2 hooks contract](../../site-v2/hooks-contract.json):
  shared engine hooks, navigation status, parameters, and version fingerprint.
- [site-v2 navigation manifest](../../site-v2/src/nav.json):
  the existing shared navigation mechanism.
- [Deployment workflow](../../.github/workflows/deploy.yml):
  the checked-in `site/` deployment target, distinct from the new standard.

### Earlier strategic work

- [Fable: From a Mark to a Service](fable-5-max.md):
  human layer, URL authoring, AI Arsenal, carriers, and the free/premium boundary.
- [K3: The Definitive Exploration of Possibilities](k3-max.md):
  the free tier as the product, the domain's expressive potential, and public invitations.
- [Sol: The Possibility Space](sol-5.6-max.md):
  the declaration-first commons, claim distinctions, evidence labels, privacy,
  service boundaries, and staged experiments.
- [THE-PLAN](../THE-PLAN.md):
  the visible act, campaign simplicity, founder visibility, and adoption rather than attention.
- [Core extensions](../core-extensions.md):
  foundational invariants and precursor architecture; read alongside the newer standard.

### From possibilities to decisions

- [Suggestions catalogue](../suggestions/README.md):
  the 95 idea seeds and their expanded draft specifications.
- [Master implementation plan](../planning/IMPLEMENTATION-PLAN.md):
  programmes, shared invariants, sequencing, dependency ownership, and release gates.
- [Development portfolio](../development/):
  the 95 numbered decision-and-execution requests, not a completed-feature inventory.

The development anchors most central to this synthesis are:

- [0003 — Static-first service architecture](../development/0003-static-first-service-architecture.md)
- [0005 — Free-floor covenant](../development/0005-free-floor-covenant.md)
- [0009 — Claim types](../development/0009-claim-types.md)
- [0013 — Evidence labels, not trust scores](../development/0013-evidence-labels-not-trust-scores.md)
- [0014 — Privacy and data minimisation](../development/0014-privacy-and-data-minimisation.md)
- [0017 — Translation governance](../development/0017-translation-governance.md)
- [0021 — Portable declaration schema](../development/0021-portable-declaration-schema.md)
- [0022 — Continuity and namespace custody](../development/0022-continuity-and-namespace-custody.md)
- [0023 — Artifact hashing and binding](../development/0023-artifact-hashing-and-binding.md)
- [0024 — Declaration lifecycle](../development/0024-declaration-lifecycle.md)
- [0027 — Visibility and consent](../development/0027-visibility-and-consent.md)
- [0028 — Verification checker](../development/0028-verification-checker.md)
- [0034 — URL semantics and canonicalisation](../development/0034-url-semantics-and-canonicalization.md)
- [0036 — No-account declaration builder](../development/0036-no-account-declaration-builder.md)
- [0037 — Signing wizard](../development/0037-signing-wizard.md)
- [0041 — Red lines and cautious extensions](../development/0041-red-lines-and-cautious-extensions.md)
- [0047 — Public snapshots and API](../development/0047-public-snapshots-and-api.md)
- [0049 — Federation and mirrors](../development/0049-federation-and-mirrors.md)
- [0063 — Offline and self-hosting pack](../development/0063-offline-and-self-hosting-pack.md)
- [0078 — Organisation workspaces](../development/0078-organisation-workspaces.md)
- [0079 — Named subdomains and identity bundles](../development/0079-named-subdomains-and-identity-bundles.md)
- [0087 — Provenance interoperability](../development/0087-provenance-interoperability.md)
- [0091 — Experiments and metrics](../development/0091-experiments-and-metrics.md)
- [0094 — Agentic accountability](../development/0094-agentic-accountability.md)
- [0095 — Independent assurance and certification](../development/0095-independent-assurance-and-certification.md)

These sources support the boundaries and starting point. The strategic thesis,
new combinations, and prioritisation in this document remain proposals for
human consideration, not decisions attributed to the founder or future stewards.
