# Development task — hosted-profiles: Hosted Profiles

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../planning/programmes/07-hosted-identity-org-services.md)
> **Source:** spec [`hosted-profiles-dsh.md`](../suggestions/hosted-profiles-dsh.md) · seed [`hosted-profiles.md`](../suggestions/hosted-profiles.md)
> **Effort:** L · **Phase:** P3 · **Position:** first in this programme — profiles are the account primitive everything else builds on
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Optional stable public page collecting opted-in context (name/pseudonym, practice register, declarations, contact) without becoming a verdict.
- **Why now / risk of deferring:** First in this programme — profiles are the account primitive every later hosted surface builds on (mini-plan Order). Deferring leaves the lost-all-factors recovery fallback (D1) and the SSO gate (D2) unresolved for the surfaces that inherit them, and risks account gravity turning the profile into a "sign in to check" prerequisite (programme risk "Account gravity").
- **Features to deliver:**
  - Hosted profile service (public view + manage view) as a presentation object over owned records, defining no new record type (§5.3).
  - Content model of optional display name/pseudonym, short context, practice-register references, declaration references, and a contact route — each with its own visibility flag and edit-revision pointer.
  - Append-only public edit history (typography correctable, meaning changes always a new revision).
  - Export-then-remove departure (full export in portable formats, free, no justification; declarations preserved per lifecycle).
  - Account recovery via codes/control proofs, never identity documents or biometrics.
  - Free basic tier defaulting to unlisted with searchability only on separate consent.
  - Claim-type labelling so a profile-level practice entry never implies use on every artifact.
  - Per-declaration status history (never merged into a profile verdict).
  - Evidence-label vocabulary with no trust score/verdict.
  - Private account data (auth/recovery/billing) stored and served separately from public records.
  - Moderation/appeal applicability with removal never deleting the holder's own declarations.
  - No auto-created registry entry.
- **Depends on:** portable-declaration-schema, declaration-lifecycle, ai-practice-register, visibility-and-consent, proofs-of-control, privacy-and-data-minimisation, moderation-disputes-and-appeals

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Recovery fallback (all factors lost)
- **Question:** What is the defined fallback when a holder loses every recovery factor (codes and control proofs)?
- **Option (a):** frozen-and-unlisted: content reverts to unlisted and the holder loses editing; never identity recovery
  - **For:** Satisfies spec §5.2.6's requirement of a "defined fallback" that "never" forces identity disclosure, using only a visibility downgrade and no new mechanism; it matches digest 02's "Open: fallback when all recovery factors lost" by accepting that records survive while control does not.
  - **Against:** Provides no path back to the account, so a holder who loses everything permanently loses control of a pseudonymous profile — exactly the "lost everything" weak spot the programme risk "Recovery design" calls out; programme-level decision 3 requires the fallback be resolved honestly, and (a) alone offers no escalation for a holder who can re-prove control by another factor.
- **Option (b):** opt-in nominated recovery contacts (each holding their own control proof) as the only escalation
  - **For:** Gives a genuine recovery path (a nominated contact re-proves control) instead of permanent lockout, which addresses the "lost everything" weak spot while still using control proofs only, honouring spec §5.2.6's no-identity-documents rule.
  - **Against:** It is opt-in only, so a holder who never nominated a contact still has no fallback — it cannot be the *only* escalation without leaving the base case undefined; it also adds a new abuse surface (a contact with standing control) that needs abuse modelling.
- **Option (c):** both — (a) as the base fallback, (b) as an opt-in enhancement
  - **For:** Combines an always-available base fallback (spec §5.2.6's defined fallback) with an optional escalation, so no holder is left without a defined outcome yet a prepared holder can recover; this is the honest resolution the programme risk "Recovery design" demands.
  - **Against:** It is the most to build — two mechanisms instead of one — and the opt-in escalation still needs abuse modelling before it is safe to ship.
- **Recommended:** (c) — an honest base fallback plus an optional pre-nominated escalation, never identity documents (spec §5.2.6; programme risk "Recovery design").
- **Your choice:** ✏️

### D2 — Identity-provider (SSO/IdP) links at launch
- **Question:** Does hosted-profiles offer any SSO/identity-provider link at launch?
- **Option (a):** none at launch — ship recovery-codes/control-proof only; revisit after organisation-workspaces publishes the "identity integrations" watchlist assessment
  - **For:** Spec §5.2.17 gates SSO on the watchlist assessment owned by organisation-workspaces (programme-level decision 4), and that assessment is not yet published (digest 00 "Watchlist assessments outstanding"), so shipping none keeps the profile conformant; codes/control-proof recovery already meets spec §5.2.6.
  - **Against:** Spec §5.2.17 only gates SSO on the assessment — it does not forbid offering it once the assessment exists — so (a) postpones rather than removes the feature, and an organisation that wants SSO gets no path at launch.
- **Option (b):** offer optional non-biometric IdP links now, assessment-gated
  - **For:** Satisfies the "assessment-gated" wording of spec §5.2.17 if the assessment is published in time, and gives organisations a sign-in convenience earlier.
  - **Against:** The "identity integrations" watchlist assessment is owned by organisation-workspaces and does not exist yet (programme-level decision 4), so offering SSO now would ship a watchlist-adjacent feature before its gate — exactly what spec §5.2.17 forbids.
- **Option (c):** offer them only to organisations, never to individuals
  - **For:** Limits the surface to organisational use, reducing the risk of tying individual accounts to identity documents.
  - **Against:** Spec §5.2.17 does not distinguish individual from organisational SSO — the assessment gate applies to any IdP link — so this option still ships SSO before the assessment exists, and it does nothing for the profile's core individual use case.
- **Recommended:** (a) — spec §5.2.17 gates SSO on the watchlist assessment owned by organisation-workspaces; nothing ships before that assessment exists.
- **Your choice:** ✏️

### D3 — Private-account-data retention after depublishing
- **Question:** What schedule deletes private account data (authentication, recovery, billing) after a profile is depublished?
- **Option (a):** defer to privacy-and-data-minimisation (Programme 8) schedule, default 30 days, with a public tombstone kept separately from private data
  - **For:** Privacy-and-data-minimisation owns retention schedules (spec §5.2.14 defers storage/logging/export separation there), and spec §5.5 says private account data is deleted on a defined schedule while a public tombstone may remain separately, so deferring avoids duplicating that owner.
  - **Against:** The 30-day number is only provisional — the actual schedule is "defined" elsewhere — so the profile must not hard-code it; if privacy-and-data-minimisation (a Programme 8 prerequisite) is delayed, the default is unverified.
- **Option (b):** 90 days
  - **For:** A longer window leaves more time for a holder to recover or export after accidental depublishing.
  - **Against:** The sources give no basis for 90 days — spec §5.5 and §5.2.14 defer the schedule to privacy-and-data-minimisation, so a hard-coded 90 days duplicates an owner that is not this spec.
- **Option (c):** immediate on depublish, no tombstone of any kind
  - **For:** Immediately deletes private account data — the most conservative reading of privacy minimisation.
  - **Against:** Spec §5.5 explicitly permits a public tombstone ("may leave a tombstone if it was public") and separates it from private-data deletion, so "no tombstone of any kind" contradicts the spec; immediate deletion also removes the window for a holder to export first.
- **Recommended:** (a) — privacy-and-data-minimisation owns retention schedules (spec §5.2.14, §5.5); the public tombstone is separate from private-data deletion.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Read the mini-plan, spec §5, and IMPLEMENTATION-PLAN §4 invariants (free floor, static-first, no silent change, declaration ≠ verification, privacy).
2. Design the profile as a presentation object over owned records (portable-declaration-schema, ai-practice-register, declaration-lifecycle), defining no new record type; document the content model (display name/pseudonym, short context, practice-register refs, declaration refs, contact route — each with visibility flag and edit-revision pointer).
3. Specify the public view (renders opted-in context and each referenced record's own status/dates under a self-declared-not-verification disclaimer) and the manage view (edit fields, toggle visibility, export; public-fact changes append to the edit history).
4. Enforce opt-in visibility: every public field explicitly opted in, no inferred fields or derived reputation/rank; default unlisted, searchability only on separate consent per visibility-and-consent.
5. Specify recovery per D1 and D2: codes/control proofs only, the D1 fallback, and no identity documents or biometrics anywhere.
6. Specify append-only edit history (typography corrections allowed; meaning changes always a new revision, honouring no-silent-change), export-then-remove departure (full export in portable formats, free, no justification; declaration revocation never blocked by profile features), and per-declaration status history (never merged into a profile status).
7. Specify the claim-type labelling (a profile-level practice entry labelled available/generally-used/approved, never implying artifact use) and evidence-label vocabulary (no trust score/verdict; account control never presented as identity).
8. Specify the separation of private account data (auth/recovery/billing) from public records in storage, logging, and export, with the D3 retention schedule; specify moderation/appeal applicability and that no profile auto-creates a registry entry.
9. Write `docs/services/hosted-profiles.md` including the Programme 8 gates: static-first failure-mode statement (service stops → published records readable, holder can export, free no-account path complete, shutdown notice period stated), threat model, privacy analysis, and per-record cost model; confirm the free basic tier defaults to unlisted and paid tiers never buy legitimacy/rank/permission.
10. Give the public page chrome a localisation path per the multi-language standard (English source R1, per-key fallback R4, resolution order `?lang=` → saved preference → browser `Accept-Language` → English R12, English crawler/no-JS default R13); profile content is T4 and never machine-translated.
11. Self-check against §5: walk the acceptance criteria against the design and confirm each holds.

## 4. Constraints (must-nots)
- Profile optional — never required to use +AI or issue a declaration; the no-account path stays primary (no "sign in to check").
- No reputation, rank, trust score, or single verdict; no inferred identity or inferred AI use.
- No auto-created registry entry (separate consent required); no identity documents or biometric proof.
- No merged profile-level declaration status; no profile feature may block a declaration's revocation.
- Private account data never appears on the public profile or in public exports.
- Paid tiers never buy legitimacy, rank, or permission; the free basic tier stays unlisted by default.
- Page chrome follows the multi-language standard (R1/R4/R12/R13); profile content is T4.

## 5. Acceptance criteria
- [ ] A person can issue and keep a declaration with no profile at all.
- [ ] A new profile defaults to unlisted and becomes searchable only on separate consent.
- [ ] A profile-level practice entry is labelled with its claim type and never implies use on every artifact.
- [ ] Each listed declaration shows its own status and dates, never a merged profile status.
- [ ] Account recovery works without identity documents or biometric proof, with the D1 fallback defined.
- [ ] The holder can export the complete profile in portable formats without payment.
- [ ] Public edits append to a visible history; meaning changes are new revisions.
- [ ] A pseudonymous profile is fully supported end to end.
- [ ] No profile surface shows a trust score or single verdict.
- [ ] Private account data is stored and served separately from public records.
- [ ] The failure-mode statement, threat model, privacy analysis, and cost model are published (Programme 8 gate).

## 6. Outputs to produce in the repository
- `docs/services/hosted-profiles.md` — profile service design (content model, public/manage views, recovery, edit history, departure) + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 7. Read before building
- [`07-hosted-identity-org-services.md`](../planning/programmes/07-hosted-identity-org-services.md) — mini-plan
- [`hosted-profiles-dsh.md`](../suggestions/hosted-profiles-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../planning/digest/02-declarations-and-profiles.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; chrome R1/R4/R12/R13, profile content T4)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
