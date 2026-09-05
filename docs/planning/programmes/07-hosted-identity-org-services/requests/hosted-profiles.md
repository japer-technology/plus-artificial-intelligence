# Agent request — hosted-profiles: Hosted Profiles

> **Programme:** 07 · Hosted Identity and Organisation Services — [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md)
> **Source:** spec [`hosted-profiles-dsh.md`](../../../../suggestions/hosted-profiles-dsh.md) · seed [`hosted-profiles.md`](../../../../suggestions/hosted-profiles.md)
> **Effort:** L · **Phase:** P3 · **Position:** first in this programme — profiles are the account primitive everything else builds on
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Recovery fallback (all factors lost)
- **Question:** What is the defined fallback when a holder loses every recovery factor (codes and control proofs)?
- **Options:** (a) frozen-and-unlisted: content reverts to unlisted and the holder loses editing; never identity recovery · (b) opt-in nominated recovery contacts (each holding their own control proof) as the only escalation · (c) both — (a) as the base fallback, (b) as an opt-in enhancement
- **Recommended:** (c) — an honest base fallback plus an optional pre-nominated escalation, never identity documents (spec §5.2.6; programme risk "Recovery design").
- **Your choice:** ✏️

### D2 — Identity-provider (SSO/IdP) links at launch
- **Question:** Does hosted-profiles offer any SSO/identity-provider link at launch?
- **Options:** (a) none at launch — ship recovery-codes/control-proof only; revisit after organisation-workspaces publishes the "identity integrations" watchlist assessment · (b) offer optional non-biometric IdP links now, assessment-gated · (c) offer them only to organisations, never to individuals
- **Recommended:** (a) — spec §5.2.17 gates SSO on the watchlist assessment owned by organisation-workspaces; nothing ships before that assessment exists.
- **Your choice:** ✏️

### D3 — Private-account-data retention after depublishing
- **Question:** What schedule deletes private account data (authentication, recovery, billing) after a profile is depublished?
- **Options:** (a) defer to privacy-and-data-minimisation (Programme 8) schedule, default 30 days, with a public tombstone kept separately from private data · (b) 90 days · (c) immediate on depublish, no tombstone of any kind
- **Recommended:** (a) — privacy-and-data-minimisation owns retention schedules (spec §5.2.14, §5.5); the public tombstone is separate from private-data deletion.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

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
11. Self-check against §4: walk the acceptance criteria against the design and confirm each holds.

## 3. Constraints (must-nots)
- Profile optional — never required to use +AI or issue a declaration; the no-account path stays primary (no "sign in to check").
- No reputation, rank, trust score, or single verdict; no inferred identity or inferred AI use.
- No auto-created registry entry (separate consent required); no identity documents or biometric proof.
- No merged profile-level declaration status; no profile feature may block a declaration's revocation.
- Private account data never appears on the public profile or in public exports.
- Paid tiers never buy legitimacy, rank, or permission; the free basic tier stays unlisted by default.
- Page chrome follows the multi-language standard (R1/R4/R12/R13); profile content is T4.

## 4. Acceptance criteria
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

## 5. Outputs to produce in the repository
- `docs/services/hosted-profiles.md` — profile service design (content model, public/manage views, recovery, edit history, departure) + Programme 8 failure-mode statement, threat model, privacy analysis, and cost model.

## 6. Read before building
- [`07-hosted-identity-org-services.md`](../../07-hosted-identity-org-services.md) — mini-plan
- [`hosted-profiles-dsh.md`](../../../../suggestions/hosted-profiles-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../../../digest/02-declarations-and-profiles.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16; chrome R1/R4/R12/R13, profile content T4)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
