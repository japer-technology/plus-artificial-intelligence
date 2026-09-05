# Development task — message-bearing-subdomains: Message-Bearing Subdomains

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md)
> **Source:** spec [`message-bearing-subdomains-dsh.md`](../suggestions/message-bearing-subdomains-dsh.md) · seed [`message-bearing-subdomains.md`](../suggestions/message-bearing-subdomains.md)
> **Effort:** M · **Phase:** P2 · **Position:** P2 — the free tier of the subdomain family (the paid named-subdomains product in Programme 7 comes later; the shared reserved-label list is defined here).
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Free curated slogan-style subdomains resolving to canonical content — messages, never persons or proofs about people.
- **Why now / risk of deferring:** P2 — the free tier of the subdomain family; deferring it leaves the message-not-identity namespace undefined and risks this free surface drifting into the identity business reserved for Programme 7's named subdomains.
- **Features to deliver:**
  - Curated slogan/campaign subdomain allocate/resolve/retire flow under the apex domain, each label an alias resolving by permanent redirect to an ID-based canonical resource (never a person, never proof about a person).
  - Versioned reserved-label list (project name, the `+AI` mark, governance/continuity terms, named-subdomain-collision labels) shared with named subdomains.
  - Wildcard-DNS catch-all resolving unknown labels to an accessible documented default (never arbitrary content); per-label mapping published as a versioned manifest, not encoded in DNS.
  - Retired labels → tombstones (never bare 404); impersonating labels suspendable without the imitated party acting first; every add/remove changelog-announced.
- **Depends on:** url-semantics-and-canonicalization, continuity-and-namespace-custody, free-floor-covenant, changelog-and-rss

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Allocation rate limit
- **Question:** What is the rate-of-allocation anti-abuse limit (labels per period) for curated labels? (spec §10 item 1; digest "allocation rate limit".)
- **Option (a):** a fixed monthly cap (e.g. 20 labels/month)
  - **For:** A hard number is the simplest, most checkable anti-abuse limit.
  - **Against:** Contradicts the spec, which says "no fixed cap" on the number of curated labels and instead enumerates anti-abuse limits (spec §5.2 item 10).
- **Option (b):** a review-capacity-bound soft limit published in the manifest, no fixed number
  - **For:** Satisfies the spec's requirement to enumerate "rate of new labels" and "review capacity" without imposing a hard ceiling that contradicts "no fixed cap" (spec §5.2 item 10).
  - **Against:** A soft limit is less checkable than a number and requires the review-capacity figure to be published and maintained.
- **Option (c):** no numeric cap — limits are enumerated as review capacity plus the reserved list only
  - **For:** Closest to the "unlimited" wording and avoids inventing a number.
  - **Against:** The spec explicitly requires the "rate of new labels" to be enumerated as an anti-abuse limit (spec §5.2 item 10); omitting it under-specifies the limit.
- **Recommended:** (b) — spec §5.2 item 10 requires "no fixed cap" but "enumerated anti-abuse limits (rate of new labels, review capacity, and the reserved list)"; a published per-period soft limit tied to review capacity satisfies that without a hard ceiling.
- **Your choice:** ✏️

### D2 — Per-language targets at launch
- **Question:** Should labels carry per-language targets at launch, or always point to one canonical resource whose page handles language? (spec §10 item 2; digest "per-language targets".)
- **Option (a):** labels always point to one canonical resource; the page handles language
  - **For:** Matches the spec — labels are language-neutral and language selection follows the resource's own localisation, so per-label targets would create a parallel translation system (spec §5.2 item 9).
  - **Against:** Relies on every target resource implementing its own language selection, which some early targets may not yet do.
- **Option (b):** per-language targets (a `translations` mapping per label) from launch
  - **For:** Gives a per-language URL immediately without depending on the target page's language handling.
  - **Against:** Contradicts the spec's explicit ban on a "parallel per-label translation system" (spec §5.2 item 9) and adds manifest complexity at launch.
- **Option (c):** per-language targets deferred; the manifest keeps a reserved `translations` field for later
  - **For:** Keeps the manifest schema future-proof without building the parallel system now.
  - **Against:** Reserves a field the spec says should not become a parallel translation system (spec §5.2 item 9); a reserved field could still invite that misuse later.
- **Recommended:** (a) — spec §5.2 item 9 says labels are language-neutral and language selection follows the resource's own localisation; per-language targets would create a parallel translation system. (c) is acceptable if the human wants the field reserved now.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Define the allocate/resolve/retire flow: a label is proposed with a message purpose and target, the approval is recorded, and every add/remove is changelog-announced — never silent.
2. Publish the versioned reserved-label list withholding at least the project name, the `+AI` mark, core governance/continuity terms, and labels that would collide with or imitate named subdomains; share it with `named-subdomains-and-identity-bundles` so the two namespaces never overlap.
3. Specify resolution: every label resolves by permanent redirect to the target's canonical (ID-based) URL, presented as an alias, never as the content's canonical identity; an unknown label resolves to an accessible, documented catch-all default, never arbitrary user content.
4. Specify retirement: a label is never repurposed to different content; a retired label resolves to a tombstone or archive, never a bare 404; renamed labels use a new label plus a redirect from the old one.
5. Publish the versioned label-mapping manifest (label → kind → target → canonicalUrl → translations → status → tombstoneUrl); wildcard DNS is a catch-all, with the mapping in the manifest rather than encoded in DNS records.
6. Enforce message-not-identity: no label allocated to or presented as a person; a label that plausibly reads as a personal name is rejected or clearly labelled as a message; no trust score/rank/endorsement; use is never a prerequisite for declaring.
7. Specify abuse handling: labels impersonating the project, a named subdomain, or a notable person/organisation are suspendable, resolved to a tombstone, without the imitated party acting first.
8. Apply the D1 allocation anti-abuse limit and the D2 per-language-target decision (labels language-neutral; language follows the target resource).
9. Apply the multi-language constraints below: labels are language-neutral T0; per-language targets, if any, follow the target resource's own localisation.
10. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- Never allocated to or presented as a person; never a proof about a person.
- A label is never repurposed to different content — retired → tombstone, never a bare 404.
- No trust score, rank, or endorsement; never a prerequisite for declaring.
- No per-label fee and no fixed cap on curated labels beyond the enumerated anti-abuse limits; "unlimited" never promises unlimited compute, bandwidth, or unmoderated creation.
- The catch-all resolves to a documented default page, never arbitrary user content.
- Labels are never silently added or removed (changelog-announced).
- Labels are language-neutral T0 (R2/T0), never translated; language selection follows the target resource's own localisation, never a parallel per-label translation system.

## 5. Acceptance criteria
- [ ] No message-bearing subdomain is allocated to a person or presented as proof about a person.
- [ ] The reserved-label list is published, versioned, and enforced against both this namespace and named subdomains.
- [ ] Every label resolves by permanent redirect to an ID-based canonical resource.
- [ ] An unknown label resolves to the accessible catch-all default, never to arbitrary content.
- [ ] A retired label resolves to a tombstone, not a bare 404.
- [ ] The full label mapping manifest is published and versioned.
- [ ] An impersonating label is suspendable without the imitated party acting first.
- [ ] No label is added or removed without a changelog entry.
- [ ] Creating and visiting labels requires no payment and no account.

## 6. Outputs to produce in the repository
- `docs/spec/message-bearing-subdomains.md` — allocation/resolve/retire flow, the reserved-label list, the mapping-manifest schema, abuse rules, and the D1/D2 decisions.
- `site/subdomains-manifest.json` — the versioned label-mapping manifest (shared with named subdomains' reserved list).

## 7. Read before building
- [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md) — mini-plan
- [`message-bearing-subdomains-dsh.md`](../suggestions/message-bearing-subdomains-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
