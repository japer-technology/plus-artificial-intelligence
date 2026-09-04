# Marketplace and Matching — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`marketplace-and-matching.md`](marketplace-and-matching.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the conditions under which the project may, only
after meaningful adoption, explore opt-in collaborator, mentor, job, project,
implementation-provider, procurement, or professional discovery built on
public directory data. Its purpose is to allow the community to find each
other without turning the directory into an endorsement market, a ranking
engine, or a liability the project cannot carry.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and owns the *preconditions and guardrails* for matching
features. It does not own the directory data (see [Public
directory](public-directory-dsh.md)) or its ordering rules, which any matching
feature must inherit. Nothing here is authorised until the preconditions in
section 5.2 are met and a governed assessment is recorded, per [Red lines and
cautious extensions](red-lines-and-cautious-extensions-dsh.md).

## 3. Terminology

- **Matching feature** — any surface that proposes one party to another
  (collaborators, mentors, jobs, projects, providers, procurement).
- **Listing** — a party's opt-in, factual entry in such a surface.
- **Ordering** — how proposals are presented; must be documented and neutral
  or explicit.
- **Competence claim** — any statement that a party is qualified or better;
  the danger zone this specification guards.

## 4. Scope

### 4.1 In scope

- Preconditions for consideration.
- Guardrails: discrimination, fraud, employment law, advertising, rankings,
  safety, liability, moderation, ordering, competence claims.
- Opt-in and data-source rules.

### 4.2 Out of scope and deferred

- Building any matching feature before preconditions are met.
- Changing directory ordering rules (public directory owns them).
- Certification or assurance (independent assurance and certification).

## 5. Specification

### 5.1 Design goals and principles

1. **After adoption, not before.** Matching presumes a meaningful public
   record to match over.
2. **Discovery, not endorsement.** A match proposal is "these parties may
   fit your stated criteria", never "this party is good".
3. **Opt-in only.** Nothing is matchable unless the party chose it.
4. **Liability stays human.** The project facilitates discovery; the parties
   own their engagements.

### 5.2 Normative requirements

1. No matching feature MAY ship until: (a) meaningful adoption is measured
   per the public adoption dashboard; (b) a governed assessment under red
   lines and cautious extensions records the risk, safeguards, and sunset;
   (c) the directory's non-endorsement and no-paid-rank rules are inherited
   verbatim.
2. Matching MUST use only public-visibility directory data, with each
   party's listing opt-in for matching separately from directory listing.
3. Ordering MUST be documented: either neutral (declared-criteria relevance)
   or transparent (stated to all parties); paid placement in ordering is
   prohibited (RL-4).
4. Surfaces MUST NOT display or imply competence, quality, or endorsement;
   only declared facts and evidence labels may be shown.
5. Anti-discrimination rules MUST be published: matching MUST NOT enable
   filtering on protected characteristics, and inferred attributes MUST NOT
   be used (see sector and language directories).
6. Fraud and impersonation handling MUST follow proofs of control and
   moderation, disputes, and appeals; listings with disputed or revoked
   declarations MUST be flagged or excluded.
7. Employment-related features MUST defer to employment-law review before
   shipping and MUST NOT make the project a party to hiring decisions.
8. Advertising MUST be prohibited inside matching surfaces (RL-4), and no
   matching data may be sold to advertisers or recruiters.
9. Safety MUST default to closed: contact exchange happens outside the
   surface or through the privacy-preserving relay rules; no party's mailbox
   is exposed without their choice.
10. Marketplace liability MUST be bounded and disclosed: the project is a
    bulletin board, not a guarantor, and the disclaimer MUST be visible on
    every surface.
11. Moderation capacity MUST be proven before launch, per moderation,
    disputes, and appeals, and matching-specific abuse routes MUST be
    published.
12. Any matching feature MUST carry a sunset condition; if it drifts toward
    ranking or endorsement, it is withdrawn rather than patched.

### 5.3 Data model

```
{
  "feature": "not yet authorised",
  "preconditions": {
    "adoption": "measured per public adoption dashboard",
    "assessment": "governed assessment recorded",
    "inheritedRules": "directory non-endorsement and no-paid-rank"
  },
  "listing": {
    "party": "recordId", "optIn": "matching-specific consent",
    "facts": [ "declared facts and evidence labels only" ]
  },
  "ordering": "documented rule",
  "sunset": "condition"
}
```

### 5.4 Interfaces and behaviours

- If ever built, matching surfaces inherit the directory's rows, notices, and
  accessibility floor, adding only the opt-in matching consent.
- Contact exchange uses the privacy-preserving email relay rules or
  party-chosen public contact points.

### 5.5 Lifecycle and operational rules

- Preconditions are reviewed on a fixed cadence; absence of review does not
  authorise anything.
- A matching feature that fails its sunset review is withdrawn and the
  withdrawal is announced in the changelog.

## 6. Free floor, red lines, and invariants

Matching must never become the reason the directory exists: the free,
non-commercial directory precedes it and survives it. Paid placement,
rankings, and advertising are prohibited (RL-4, RL-9), and competence claims
are banned so the mark never becomes a credential marketplace. Liability
stays with the parties, keeping responsibility human (RL-8).

## 7. Relationships to sibling specifications

- [Public directory](public-directory-dsh.md) supplies the data and the
  non-endorsement rules.
- [Red lines and cautious extensions](red-lines-and-cautious-extensions-dsh.md)
  owns the assessment requirement.
- [Proofs of control](proofs-of-control-dsh.md) and [Moderation, disputes, and
  appeals](moderation-disputes-and-appeals-dsh.md) own fraud and dispute
  handling.
- [Privacy-preserving email relay](privacy-preserving-email-relay-dsh.md) owns
  safe contact exchange.
- [Sector and language directories](sector-and-language-directories-dsh.md)
  own the anti-inference and non-endorsement rules.
- [Independent assurance and certification](independent-assurance-and-certification-dsh.md)
  is explicitly not what matching implies.
- [Public adoption dashboard](public-adoption-dashboard-dsh.md) measures the
  adoption precondition.
- [Changelog and RSS](changelog-and-rss-dsh.md) announces assessments and
  sunsets.

## 8. Resolution of the seed's "before implementation" concerns

- **Discrimination** — section 5.2 item 5: prohibited filtering and no
  inferred attributes.
- **Fraud** — section 5.2 item 6: proofs-of-control and moderation handling.
- **Employment law** — section 5.2 item 7: review before shipping, project
  never a hiring party.
- **Advertising** — section 5.2 item 8: prohibited inside surfaces.
- **Rankings** — section 5.2 items 3-4: documented neutral ordering, no
  competence display.
- **Safety** — section 5.2 item 9: contact exchange via relay rules.
- **Marketplace liability** — section 5.2 item 10: bounded, disclosed,
  visible disclaimer.
- **Moderation** — section 5.2 item 11: proven capacity, published abuse
  routes.
- **Transparent ordering** — section 5.2 item 3: documented rule, stated to
  all parties.
- **Competence claims** — section 5.2 item 4: prohibited everywhere.

## 9. Acceptance criteria

1. No matching feature ships before the adoption, assessment, and
   inheritance preconditions are recorded.
2. Listings are opt-in for matching separately from directory listing.
3. Ordering is documented and unpaid.
4. No surface displays competence, quality, or endorsement.
5. No advertising appears inside a matching surface.
6. Employment features pass employment-law review before shipping.
7. A matching feature drifting toward ranking is withdrawn under its sunset.
8. Every surface shows the liability disclaimer and the non-endorsement
   notice.

## 10. Open questions

- The adoption metric that satisfies the "meaningful adoption" precondition.
- Whether matching should ever exist at all; like independent assurance, this
  is a governed decision, not an assumption.
