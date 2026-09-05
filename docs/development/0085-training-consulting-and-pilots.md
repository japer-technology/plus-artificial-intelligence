# Development task — training-consulting-and-pilots: Training, Consulting, and Pilots

> **Programme:** 09 · Funding and Sustainability — [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md)
> **Source:** spec [`training-consulting-and-pilots-dsh.md`](../suggestions/training-consulting-and-pilots-dsh.md) · seed [`training-consulting-and-pilots.md`](../suggestions/training-consulting-and-pilots.md)
> **Effort:** M · **Phase:** P3 · **Position:** rides on pilot evidence from Programme 10
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Paid professional services (keynotes, workshops, consulting, governance facilitation, pilots) selling time and expertise, never endorsement or influence.
- **Why now / risk of deferring:** Rides on pilot evidence from Programme 10 (Order line), so the offering launches with credible case studies. Without that evidence, consulting risks reading as certification rather than advice (the member's stated risk).
- **Features to deliver:**
  - services page (keynotes, workshops, consulting, governance facilitation, policy mapping, accessibility, integration, research design, pilots) with no-certification/no-legitimacy statements
  - statement-of-work template (client, deliverables, exclusions, conflicts, languages, named end point)
  - advice strictly separated from certification
  - consultants never holding/implying specification authority
  - reusable learning published openly under the contribution terms and accessibility floor
  - mandatory handover materials (anti founder-time dependency)
  - conflict disclosure + recusal per governance
  - paid pilots inheriting pilots-and-case-studies design/consent rules
  - client-data privacy/threat model
  - revenue reported through financial-transparency with no influence over registry/moderation/disputes
- **Depends on:** pilots-and-case-studies, governance-and-stewardship, licensing-and-mark-policy, financial-transparency

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Consultant roster
- **Question:** Is a named-consultant roster maintained, and how does admission avoid becoming an endorsement list?
- **Option (a):** no roster at launch — engagements are project-arranged per SOW; a roster is revisited only if it can be published with factual qualifications and an explicit non-endorsement statement
  - **For:** spec §10 asks whether a roster is maintained and how admission avoids endorsement; deferring avoids an endorsement list (spec §6 RL-9 "no ranking of clients or consultants") while engagements can still run via SOW.
  - **Against:** no roster means prospective clients cannot browse named practitioners, reducing discoverability.
- **Option (b):** publish a roster now with factual qualifications plus a non-endorsement disclaimer
  - **For:** a roster with factual qualifications helps clients find consultants, and a non-endorsement disclaimer guards against an endorsement reading.
  - **Against:** even with a disclaimer, a published roster risks reading as an endorsement/ranking list, which spec §6's RL-9 and §5.2.2's no-certification rule guard against.
- **Option (c):** a roster is required before any engagement
  - **For:** ensures every engagement runs through a vetted, named roster.
  - **Against:** makes a roster a gate that spec §10 leaves undecided and that §5.2.3 (signed SOW) does not require; it adds a credential-like structure the no-certification rule warns against.
- **Recommended:** (a) — spec §10 asks whether a roster is maintained and how admission avoids endorsement; deferring the roster avoids an endorsement list while engagements can still run.
- **Your choice:** ✏️

### D2 — SOW redaction degree
- **Question:** How much client-confidential redaction applies to published SOW summaries?
- **Option (a):** publish a summary with the client name and confidential details redacted, disclosing the redaction itself; the full SOW stays client-private
  - **For:** spec §5.4 says each engagement publishes its SOW summary with client confidences redacted, and §10 leaves the degree open; a redacted summary with a disclosure note balances transparency with confidentiality.
  - **Against:** a redacted summary discloses less detail than a full SOW, so public accountability is partial.
- **Option (b):** publish full SOWs unless the client objects
  - **For:** full SOWs give maximum transparency about what was bought and delivered.
  - **Against:** risks exposing client confidences, which spec §5.2.4 ("wherever it can be generalised without exposing client confidences") and §5.4's redaction rule protect.
- **Option (c):** publish only close-out reusable outputs, no SOW summary
  - **For:** sidesteps redaction entirely by publishing only the reusable outputs.
  - **Against:** drops the SOW summary publication that spec §5.4 explicitly requires ("each engagement publishes its SOW summary").
- **Recommended:** (a) — spec §5.4 says each engagement publishes its SOW summary with client confidences redacted, and §10 leaves the degree open; a redacted summary with a disclosure note balances transparency with confidentiality.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, privacy).
2. Create `site/consulting.html` (versioned, file://-safe, mirrorable): the services catalogue (keynotes, workshops, implementation consulting, governance facilitation, policy mapping, accessibility help, integration work, research design, bounded organisational pilots) with the no-certification and no-legitimacy statements — payment buys time, expertise, and support, never legitimacy, rank, permission, certification, or any change to the `+AI` meaning.
3. Create `docs/templates/statement-of-work.md`: the SOW template (client, deliverables, explicitly excluded items, conflict disclosures, languages, named end point).
4. Enforce the advice-vs-certification separation: no engagement, deliverable, or marketing may present a consultant, client, or outcome as "certified", "approved", or "accredited"; consultants never hold or imply specification authority (they explain the current published version and defer normative questions to governance).
5. Specify reusable-learning publication: generalisable outputs (decks, checklists, policy-mapping templates, integration scripts) released under the project's contribution terms and meeting the accessibility floor in the engagement's languages.
6. Specify anti founder-time dependency: every engagement produces captured materials (notes, scripts, playbooks, decision records) sufficient for another qualified practitioner to continue; a client can request continuation by a different practitioner.
7. Specify conflict disclosure and recusal per governance-and-stewardship; client data under a privacy analysis and threat model before any engagement touching client records.
8. Specify that bounded organisational pilots sold here also satisfy pilots-and-case-studies (published plan, recorded consent, defined measures, end point, participant approval); research-design work defers ethics to experiments-and-metrics and research-observatory.
9. Specify that revenue and client relationships are reported through financial-transparency, with no consulting relationship influencing registry placement, moderation, or dispute outcomes; the failure-mode statement covers the consultancy stopping with reusable outputs and client declarations unaffected.
10. Give the services page and materials a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order R12, English crawler/no-JS default R13; materials T2).
11. Self-check against §5: walk the acceptance criteria and confirm each holds.

## 4. Constraints (must-nots)
- Payment buys time, expertise, and support — never legitimacy, rank, permission, certification, or a change to the `+AI` meaning.
- No "certified/approved/accredited" claims about clients or outcomes.
- Consultants never invent or change the normative meaning.
- No founder-time dependency — handover materials mandatory.
- No paid influence over placement, outcomes, or disputes; no ranking of clients or consultants.
- Client data handled under a privacy analysis and threat model; conflicts declared and recused.
- Materials follow the multi-language standard (R1/R4/R12/R13; T2).

## 5. Acceptance criteria
- [ ] The services page states that payment buys no legitimacy, rank, permission, or certification.
- [ ] No deliverable or marketing claims a client, consultant, or outcome is "certified" or "approved".
- [ ] Every engagement has a signed SOW with deliverables, exclusions, and an end point.
- [ ] At least one reusable output is published per engagement where client confidences permit.
- [ ] Handover materials are sufficient for another practitioner to continue the work.
- [ ] Conflicts are declared before start and recusals are recorded.
- [ ] No consultant invents or changes the normative meaning.
- [ ] A paid pilot publishes its plan, consents, and participant approvals.
- [ ] The consultancy publishes a privacy analysis, threat model, and failure-mode statement.

## 6. Outputs to produce in the repository
- `site/consulting.html` — services catalogue with no-certification/no-legitimacy statements and reusable-learning rules.
- `docs/templates/statement-of-work.md` — the SOW template.

## 7. Read before building
- [`09-funding-and-sustainability.md`](../planning/programmes/09-funding-and-sustainability.md) — mini-plan
- [`training-consulting-and-pilots-dsh.md`](../suggestions/training-consulting-and-pilots-dsh.md) — full spec
- [`06-funding-and-optional-services.md`](../planning/digest/06-funding-and-optional-services.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; materials T2)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
