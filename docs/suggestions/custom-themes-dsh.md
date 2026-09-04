# Custom Themes — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`custom-themes.md`](custom-themes.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines commissioned, bespoke themes: paid design work
that produces organisational theme packs and templates, while the public
theme collection and the general builder stay free and the normative
specification stays unchanged. Its purpose is a sustainable source of design
work that cannot buy meaning, rank, or legitimacy — bespoke presentation for
a fee, with the promise underneath identical for everyone.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and
inclusion" group and owns the *commission path*. It does not own the pack
architecture (see [Theme engine and packs](theme-engine-and-packs-dsh.md)),
the creation tooling (see [Theme builder and starter kit](theme-builder-and-starter-kit-dsh.md)),
or the gallery (see [Theme gallery and community voting](theme-gallery-community-voting-dsh.md)).
It honours the free-floor invariant explicitly: every requirement below exists
so a paid theme never becomes a superior mark.

## 3. Terminology

- **Commission** — a paid engagement to design a bespoke theme pack.
- **Client** — the commissioning party.
- **Public collection** — the free theme packs available to everyone.
- **Flavour terms** — the agreed scope of the pack's decorative copy.

## 4. Scope

### 4.1 In scope

- Commission terms: non-endorsement, brand, accessibility, ownership,
  maintenance, publication, security, flavour.
- The boundary between bespoke work and the free commons.

### 4.2 Out of scope and deferred

- The general builder and starter kit (free).
- Gallery voting and community packs (free).
- Legal contract templates (regulatory phrasing packs may assist; the
  project does not give legal advice).

## 5. Specification

### 5.1 Design goals and principles

1. **Same promise, different clothes.** A bespoke pack renders the identical
   normative content.
2. **Bought work, not bought standing.** A commission confers no legitimacy,
   rank, or certification.
3. **Free stays free.** The public collection and builder never shrink
   because commissions exist.
4. **Exit belongs to the client.** The client owns the commissioned assets
   under the agreed terms.

### 5.2 Normative requirements

1. Every commission MUST be agreed under published terms covering:
   non-endorsement, brand use, accessibility, ownership, maintenance,
   publication, security, and flavour scope; the terms MUST be on record
   before work starts.
2. The commission MUST state in writing that it confers no legitimacy, rank,
   endorsement, or certification, and that the `+AI` meaning it presents is
   identical to the free presentation.
3. The commissioned pack MUST conform to the theme engine contract, pass the
   conformance linter's error rules, and meet the accessibility floor; a
   non-conformant pack MUST NOT be delivered as complete.
4. Brand rules MUST follow licensing and mark policy: the client's brand
   appears as presentation; it MUST NOT alter, obscure, or replace the mark's
   meaning or the specification text.
5. Ownership MUST be agreed in advance: commissioned assets are the client's
   under the agreed licence, with the project retaining rights only where the
   terms say so; contributions back to the commons are voluntary and follow
   contribution terms.
6. Maintenance MUST be scoped: the terms name who maintains the pack across
   engine and specification version changes, and for how long; unmaintained
   packs MUST be flagged in per-theme conformance notes.
7. Publication is the client's choice: commissions MAY stay private to the
   client; if published to the gallery they follow the gallery's rules and
   carry the client's conformance note.
8. Security MUST be reviewed before delivery: no remote dependencies, no
   tracking, no executable content beyond the pack's static assets (see
   security and abuse controls).
9. Flavour scope MUST follow flavour-text localisation: bespoke copy is
   presentation and never changes normative meaning.
10. The free general builder MUST remain capable of producing a conformant
    pack for any purpose a commission serves; commissions MAY be more
    polished, never more capable in meaning.
11. Pricing transparency MUST be maintained per publications and merchandise
    where commissions are listed publicly.

### 5.3 Data model

```
{
  "commissionId": "opaque identifier",
  "client": "party",
  "terms": { "nonEndorsement": true, "brand": "...", "ownership": "...",
             "maintenance": "period and owner", "publication": "private | gallery",
             "flavourScope": "...", "agreed": "ISO-8601" },
  "deliverable": { "packId": "...", "conformance": "passed", "accessibility": "floor-met" }
}
```

### 5.4 Interfaces and behaviours

- Commissioned packs are delivered as normal theme packs; the engine,
  linter, and gallery treat them identically to free packs.
- If published, the gallery lists the pack without any "commissioned" badge
  that could read as quality; a factual "bespoke for <client>" note is
  permitted.

### 5.5 Lifecycle and operational rules

- Commissions end with a delivery record; maintenance renewals are new
  agreements.
- A client who stops maintenance may keep the pack; the gallery flags it as
  unmaintained per its conformance note.

## 6. Free floor, red lines, and invariants

This is the paid-service specification that must prove its free floor most
carefully: the public collection, the builder, and the meaning stay free and
unchanged; payment buys design labour only. The non-endorsement terms
implement RL-1 and RL-4 (no legitimacy or placement for sale), and the
conformance requirements keep flavour from ever changing meaning.

## 7. Relationships to sibling specifications

- [Theme engine and packs](theme-engine-and-packs-dsh.md) owns the pack
  contract commissioned packs must meet.
- [Theme builder and starter kit](theme-builder-and-starter-kit-dsh.md) is
  the free tooling commissions may build on.
- [Theme gallery and community voting](theme-gallery-community-voting-dsh.md)
  owns publication rules if a pack is published.
- [Per-theme conformance notes](per-theme-conformance-notes-dsh.md) flags
  maintenance status.
- [Flavour-text localisation](flavour-text-localisation-dsh.md) governs
  bespoke copy.
- [Licensing and mark policy](licensing-and-mark-policy-dsh.md) owns brand
  and ownership rules.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) owns the
  delivery security review.
- [Publications and merchandise](publications-and-merchandise-dsh.md) owns
  pricing transparency where commissions are listed.
- [Support and donations](support-and-donations-dsh.md) is the route for
  anyone who wants to fund the commons instead of commissioning.

## 8. Resolution of the seed's "before implementation" concerns

- **Non-endorsement** — section 5.2 item 2: written into every commission.
- **Brand** — section 5.2 item 4: presentation-only brand, meaning intact.
- **Accessibility** — section 5.2 item 3: floor met before delivery.
- **Ownership** — section 5.2 item 5: agreed in advance, client-owned.
- **Maintenance** — section 5.2 item 6: scoped, named, flagged when lapsed.
- **Publication** — section 5.2 item 7: client's choice, gallery rules apply.
- **Security** — section 5.2 item 8: reviewed before delivery.
- **Flavour-text terms** — section 5.2 item 9: flavour scope under
  flavour-text localisation.

## 9. Acceptance criteria

1. Every commission has published terms on record before work starts.
2. No commission implies legitimacy, rank, endorsement, or certification.
3. A commissioned pack passes the linter's error rules and meets the floor
   before delivery.
4. The pack renders normative content byte-identically to free packs.
5. Ownership and maintenance are agreed in advance and recorded.
6. An unmaintained published pack is flagged in its conformance note.
7. The free builder remains capable of everything a commission can do in
   meaning.
8. No tracking or remote dependency ships in a commissioned pack.

## 10. Open questions

- Whether the project should maintain a public price guide for commissions
  (jointly with publications and merchandise).
