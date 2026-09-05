# Agent request — standards-engagement: Standards Engagement

> **Programme:** 10 · Research, Standards, and Deferred Scope — [`10-research-standards-deferred.md`](../../10-research-standards-deferred.md)
> **Source:** spec [`standards-engagement-dsh.md`](../../../../suggestions/standards-engagement-dsh.md) · seed [`standards-engagement.md`](../../../../suggestions/standards-engagement.md)
> **Effort:** S · **Phase:** P4 · **Position:** P4 — by design, the precondition recording is the deliverable until real use stabilises the model (README's own instruction)
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Meaningful-adoption gate
- **Question:** IMPLEMENTATION-PLAN §11 gates standards engagement on the "meaningful adoption" metric. How does it feature in the precondition record (spec §5.2 item 1 lists stability, independent implementation, and pilots — not adoption)?
- **Options:** (a) adopt the public-adoption-dashboard metric (Programme 4, the data owner) verbatim as a co-precondition alongside stability, independent implementation, and pilots · (b) treat stability/independent-implementation/pilots as the only preconditions and record adoption as context only · (c) defer the gate entirely to governance at mandate time
- **Recommended:** (a) — §11 names standards engagement among the "meaningful adoption"-gated extensions; referencing the dashboard metric once (not redefining it) keeps a single source of truth while honouring the spec's readiness preconditions.
- **Your choice:** ✏️

### D2 — Fora per document class
- **Question:** Which fora (W3C community groups, IETF, ISO-adjacent, neutral consortia) best fit each document class (spec §10; digest "Open: which fora per document class")?
- **Options:** (a) leave the specific fora to mandate time (spec default), publishing only the selection criteria now · (b) publish a non-binding illustrative mapping now (schema → W3C-style, wire format → IETF-style, provenance → C2PA/IPTC-adjacent), revised at mandate time · (c) bind each document class to a named forum now
- **Recommended:** (a) — the spec says "decided at mandate time"; the criteria (neutrality, openness, governance, IP, cost, exit) are the durable deliverable, while specific fora stay a mandate-time choice.
- **Your choice:** ✏️

### D3 — Forbidden-zone definition and enforcement
- **Question:** What precisely is never proposed to an external body, and how is the forbidden zone made enforceable against institutional capture?
- **Options:** (a) the normative meaning itself, the `+AI` mark identity, and the red lines are never proposed; every engagement requires a governance-approved mandate naming its documents and forbidden zone, and anything beyond it is void · (b) only the normative meaning is forbidden; everything else is negotiable per mandate · (c) no explicit forbidden list — capture is handled by the exit safeguard alone
- **Recommended:** (a) — the programme's headline risk is premature engagement/capture; an explicit forbidden zone plus mandate-only authorisation is what makes it enforceable.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Read the mini-plan, spec §5 (especially §5.2, §5.3), and IMPLEMENTATION-PLAN §4 invariants.
2. Publish the engagement policy (`docs/standards-engagement.md`): the readiness preconditions (schema/label/checker stability across ≥1 release cycle, ≥1 independent implementation, published pilot outcomes) plus the meaningful-adoption gate per §1 D1.
3. Publish the mandate template: which documents may be proposed, in which fora, with which representatives, and the forbidden zone (what may never be proposed) (spec §5.2 item 3).
4. Publish the forum-selection criteria — neutrality, openness, governance quality, IP terms, cost, and exit without losing the project's rights — with a recorded assessment per forum (item 2).
5. Record the IP-terms rule: governance reviews and accepts IP terms before joining; terms assigning the project's formats or the mark's identity to a third party are rejected (item 4).
6. Record the funding safeguards: forum fees/sponsorships disclosed per financial transparency and must not create capture (item 5).
7. Record the capture limits and exit safeguards: the project retains its reference implementations and versioning, documents what constitutes capture, and may withdraw with its formats usable and versioned (items 6–7).
8. Record public progress reporting in the changelog (item 8) and that external adoption never changes the free floor (item 9).
9. Apply your §1 D2 (fora per document class) and D3 (forbidden zone).
10. Self-check against §4: preconditions recorded; mandate names documents/fora/representatives/forbidden zone; IP reviewed; exit preserves rights.

## 3. Constraints (must-nots)
- No engagement before all preconditions are recorded as met (spec §5.2 item 1).
- Never propose the normative meaning itself, the mark's identity, or the red lines (the forbidden zone — item 3).
- Reject IP terms that assign the project's formats or the mark to a third party (item 4).
- No engagement on an individual's initiative — only under a published, community-approved mandate (item 3, §5.1).
- External adoption never changes the free floor or makes a standards body the only home of the formats (items 6, 9, §6).
- Fee/sponsorship must not create capture (item 5).

## 4. Acceptance criteria
- [ ] No engagement starts before the stability, independent-implementation, pilots, and meaningful-adoption preconditions are recorded.
- [ ] Every engagement has a published mandate naming documents, fora, representatives, and the forbidden zone.
- [ ] A forum's IP terms are reviewed by governance before joining.
- [ ] Forum fees and sponsorships are disclosed.
- [ ] The project retains its reference implementations and versioning throughout.
- [ ] An exit leaves the project's formats usable and versioned.
- [ ] Engagement progress is public in the changelog.
- [ ] External adoption changes nothing about the free floor.

## 5. Outputs to produce in the repository
- `docs/standards-engagement.md` — engagement policy, mandate template, forum-selection criteria, IP/funding/capture/exit rules, and the precondition record.

## 6. Read before building
- [`10-research-standards-deferred.md`](../../10-research-standards-deferred.md) — mini-plan
- [`standards-engagement-dsh.md`](../../../../suggestions/standards-engagement-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
