# Development task — standards-engagement: Standards Engagement

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md)
> **Source:** spec [`standards-engagement-dsh.md`](../suggestions/standards-engagement-dsh.md) · seed [`standards-engagement.md`](../suggestions/standards-engagement.md)
> **Effort:** S · **Phase:** P4 · **Position:** P4 — by design, the precondition recording is the deliverable until real use stabilises the model (README's own instruction)
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** When/how to engage standards bodies — only after stability, independent implementations, and pilots — to improve interop without handing over meaning.
- **Why now / risk of deferring:** It lands in P4 — by design the precondition record is the deliverable until real use stabilises the model (the README's own instruction). Deferring the forbidden-zone policy risks the programme's headline risk: premature standards engagement, where a single eager partner could capture the mark's meaning.
- **Features to deliver:**
  - The engagement policy + mandate template (documents, fora, representatives, forbidden zone — §5.2 item 3).
  - The readiness-precondition record (schema/label/checker stability, independent implementation, published pilots — §5.2 item 1) plus the meaningful-adoption gate reference (cross-cutting).
  - The forum-selection criteria (neutrality, openness, governance quality, IP terms, cost, exit — §5.2 item 2).
  - IP-terms review with rejection of third-party-assignable terms (§5.2 item 4).
  - Funding safeguards with disclosure (§5.2 item 5).
  - Institutional-capture limits + exit safeguards (§5.2 items 6–7).
  - Public progress reporting in the changelog (§5.2 item 8).
- **Depends on:** governance-and-stewardship, provenance-interoperability (the interop agenda), pilots-and-case-studies (the stability evidence), financial-transparency.

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Meaningful-adoption gate
- **Question:** IMPLEMENTATION-PLAN §11 gates standards engagement on the "meaningful adoption" metric. How does it feature in the precondition record (spec §5.2 item 1 lists stability, independent implementation, and pilots — not adoption)?
- **Option (a):** adopt the public-adoption-dashboard metric (Programme 4, the data owner) verbatim as a co-precondition alongside stability, independent implementation, and pilots
  - **For:** IMPLEMENTATION-PLAN §11 lists "meaningful adoption" as gating "independent-assurance-and-certification, marketplace-and-matching, standards-engagement"; referencing the dashboard metric (Programme 4, the data owner) once, not redefining it, matches brainstorm decision 2.
  - **Against:** spec §5.2 item 1 lists only stability, independent implementation, and pilots — adding adoption as a co-precondition goes beyond the spec's own readiness list and must be reconciled in the record.
- **Option (b):** treat stability/independent-implementation/pilots as the only preconditions and record adoption as context only
  - **For:** it sticks strictly to the spec's §5.2 item 1 readiness preconditions (stability, independent implementation, pilots), avoiding an extra gate.
  - **Against:** it omits the §11 "meaningful adoption" gate the plan assigns to standards engagement, leaving the cross-cutting metric unapplied where the plan expects it.
- **Option (c):** defer the gate entirely to governance at mandate time
  - **For:** deferring the gate to mandate-time governance keeps the policy doc lighter.
  - **Against:** it postpones a decision that §11 and brainstorm decision 2 both expect resolved now (adopt the metric verbatim), letting the adoption gate be re-litigated later.
- **Recommended:** (a) — §11 names standards engagement among the "meaningful adoption"-gated extensions; referencing the dashboard metric once (not redefining it) keeps a single source of truth while honouring the spec's readiness preconditions.
- **Your choice:** ✏️

### D2 — Fora per document class
- **Question:** Which fora (W3C community groups, IETF, ISO-adjacent, neutral consortia) best fit each document class (spec §10; digest "Open: which fora per document class")?
- **Option (a):** leave the specific fora to mandate time (spec default), publishing only the selection criteria now
  - **For:** spec §10 says specific fora are "to be decided at mandate time"; publishing only the §5.2 item 2 selection criteria (neutrality, openness, governance, IP, cost, exit) is the durable deliverable and avoids premature binding.
  - **Against:** it leaves the digest's "which fora per document class" open item without even an indicative answer, so mandate time still starts from scratch.
- **Option (b):** publish a non-binding illustrative mapping now (schema → W3C-style, wire format → IETF-style, provenance → C2PA/IPTC-adjacent), revised at mandate time
  - **For:** an illustrative mapping answers the digest's open item with useful direction now, while "revised at mandate time" preserves the spec's mandate-time authority.
  - **Against:** §10 says decided at mandate time, and an illustrative mapping could harden into de facto choices before governance weighs in.
- **Option (c):** bind each document class to a named forum now
  - **For:** binding now removes ambiguity and lets preparation start.
  - **Against:** it directly contradicts §10 ("to be decided at mandate time") and §5.2 item 2's criteria-based, recorded assessment per forum — binding before engagement is premature.
- **Recommended:** (a) — the spec says "decided at mandate time"; the criteria (neutrality, openness, governance, IP, cost, exit) are the durable deliverable, while specific fora stay a mandate-time choice.
- **Your choice:** ✏️

### D3 — Forbidden-zone definition and enforcement
- **Question:** What precisely is never proposed to an external body, and how is the forbidden zone made enforceable against institutional capture?
- **Option (a):** the normative meaning itself, the `+AI` mark identity, and the red lines are never proposed; every engagement requires a governance-approved mandate naming its documents and forbidden zone, and anything beyond it is void
  - **For:** the programme's "premature standards engagement" risk says the forbidden zone "must be enforceable, or a single eager partner could capture the mark's meaning"; spec §5.2 item 3 requires the mandate to name "what may never be proposed (the normative meaning itself)", and §5.2 item 4 rejects IP terms assigning the mark — an explicit zone plus mandate-only authorisation is what makes it enforceable (brainstorm decision 3).
  - **Against:** a broad forbidden zone (meaning + mark identity + red lines) is more restrictive and reduces what can be shared even for interop.
- **Option (b):** only the normative meaning is forbidden; everything else is negotiable per mandate
  - **For:** forbidding only the normative meaning leaves the interop agenda (provenance mappings, wire format) more negotiable per mandate.
  - **Against:** it does not explicitly protect the mark identity or the red lines, which §5.2 item 4 and the capture risk both call out; the zone would be narrower than the programme risk warrants.
- **Option (c):** no explicit forbidden list — capture is handled by the exit safeguard alone
  - **For:** relying on the exit safeguard (§5.2 item 7) avoids an explicit list and is simpler.
  - **Against:** the programme risk states the forbidden zone "must be enforceable"; exit-only handling is post-hoc and does not prevent capture in the first place — brainstorm decision 3 requires the zone be explicit and enforced.
- **Recommended:** (a) — the programme's headline risk is premature engagement/capture; an explicit forbidden zone plus mandate-only authorisation is what makes it enforceable.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish the engagement policy (`docs/standards-engagement.md`): the readiness preconditions (schema/label/checker stability across ≥1 release cycle, ≥1 independent implementation, published pilot outcomes) plus the meaningful-adoption gate per §2 D1.
3. Publish the mandate template: which documents may be proposed, in which fora, with which representatives, and the forbidden zone (what may never be proposed) (spec §5.2 item 3).
4. Publish the forum-selection criteria — neutrality, openness, governance quality, IP terms, cost, and exit without losing the project's rights — with a recorded assessment per forum (item 2).
5. Record the IP-terms rule: governance reviews and accepts IP terms before joining; terms assigning the project's formats or the mark's identity to a third party are rejected (item 4).
6. Record the funding safeguards: forum fees/sponsorships disclosed per financial transparency and must not create capture (item 5).
7. Record the capture limits and exit safeguards: the project retains its reference implementations and versioning, documents what constitutes capture, and may withdraw with its formats usable and versioned (items 6–7).
8. Record public progress reporting in the changelog (item 8) and that external adoption never changes the free floor (item 9).
9. Apply your §2 D2 (fora per document class) and D3 (forbidden zone).
10. Self-check against §5: preconditions recorded; mandate names documents/fora/representatives/forbidden zone; IP reviewed; exit preserves rights.

## 4. Constraints (must-nots)
- No engagement before all preconditions are recorded as met (spec §5.2 item 1).
- Never propose the normative meaning itself, the mark's identity, or the red lines (the forbidden zone — item 3).
- Reject IP terms that assign the project's formats or the mark to a third party (item 4).
- No engagement on an individual's initiative — only under a published, community-approved mandate (item 3, §5.1).
- External adoption never changes the free floor or makes a standards body the only home of the formats (items 6, 9, §6).
- Fee/sponsorship must not create capture (item 5).

## 5. Acceptance criteria
- [ ] No engagement starts before the stability, independent-implementation, pilots, and meaningful-adoption preconditions are recorded.
- [ ] Every engagement has a published mandate naming documents, fora, representatives, and the forbidden zone.
- [ ] A forum's IP terms are reviewed by governance before joining.
- [ ] Forum fees and sponsorships are disclosed.
- [ ] The project retains its reference implementations and versioning throughout.
- [ ] An exit leaves the project's formats usable and versioned.
- [ ] Engagement progress is public in the changelog.
- [ ] External adoption changes nothing about the free floor.

## 6. Outputs to produce in the repository
- `docs/standards-engagement.md` — engagement policy, mandate template, forum-selection criteria, IP/funding/capture/exit rules, and the precondition record.

## 7. Read before building
- [`10-research-standards-deferred.md`](../planning/programmes/10-research-standards-deferred.md) — mini-plan
- [`standards-engagement-dsh.md`](../suggestions/standards-engagement-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
