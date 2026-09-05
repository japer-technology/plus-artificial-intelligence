# Development task — declaration-by-email: Declaration by Email

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md)
> **Source:** spec [`declaration-by-email-dsh.md`](../suggestions/declaration-by-email-dsh.md) · seed [`declaration-by-email.md`](../suggestions/declaration-by-email.md)
> **Effort:** M · **Phase:** P3 · **Position:** P3 — after the relay and the builder; deliberately the last email feature.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Cautious email workflow producing only a private draft + receipt, always with explicit preview and confirmation before anything public.
- **Why now / risk of deferring:** P3 — deliberately the last email feature, after the relay and the builder; it exercises the accidental-publication red line at workflow level, so it must not ship before the no-account builder and signing wizard it hands off to exist.
- **Features to deliver:**
  - Email intake gated by the mailbox control challenge (one-time code round-trip, per proofs-of-control); the `From` header never trusted; a failed challenge produces no draft in that mailbox's name.
  - Field extraction of only declaration-relevant fields (name, scope, AI role); the message body and third-party addresses never quoted, stored, or republished.
  - Private draft + archive receipt only — never publish, register, or mark `active` from email alone; confirmation hands off to the builder/wizard with a visibility preview and the responsibility warning.
  - Non-public default (draft `local`/`unlisted`, never `public`); attachments never executed/copied; malware neutralised before review; raw message deleted on schedule; drafts expire; fresh challenge at recovery.
- **Depends on:** proofs-of-control, no-account-declaration-builder, signing-wizard, visibility-and-consent, security-and-abuse-controls

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Inbound template (structured vs free-text)
- **Question:** Should the inbound message be a fixed structured template or accept free-text with field extraction? (spec §10 item 1; digest "template vs free-text".)
- **Option (a):** a fixed structured template only
  - **For:** Makes field extraction deterministic and honours least-exposure — only declaration-relevant fields are collected and nothing is guessed (spec §5.2 item 4; §5.1 principle 4).
  - **Against:** A rigid template is less convenient for signers used to free-form email and may reject otherwise-usable messages.
- **Option (b):** free-text with field extraction only
  - **For:** Most natural for the signer — just write an email.
  - **Against:** Free-text extraction is guesswork, which conflicts with the spec's least-exposure rule and its rejection of guessing (spec §5.2 item 4); it also risks over-extracting content that should never be stored.
- **Option (c):** a structured template recommended, with free-text accepted and best-effort extraction
  - **For:** Convenience plus a fallback for signers who ignore the template.
  - **Against:** The free-text path reintroduces non-deterministic extraction that the spec's least-exposure rule discourages (spec §5.2 item 4), and it doubles the intake paths to specify and secure.
- **Recommended:** (a) — a single structured template makes field extraction deterministic and honours least-exposure (only declaration-relevant fields), with nothing guessed; free-text can be a later extension.
- **Your choice:** ✏️

### D2 — Unconfirmed-draft expiry
- **Question:** What is the unconfirmed-draft expiry period? (spec §10 item 2; digest "unconfirmed-draft expiry". Joint owner: `privacy-and-data-minimisation`, Programme 8, owns the retention rules — this request records the number, that programme finalises it.)
- **Option (a):** 7 days
  - **For:** Shortest retention of unpublished drafts, best matching privacy-and-data-minimisation's minimise-retention goal (spec §5.2 item 9).
  - **Against:** May be too short for a signer who misses the receipt and returns a week later.
- **Option (b):** 14 days
  - **For:** Balances minimising retention against giving the signer time to act on the receipt (spec §5.2 item 9's retention mandate).
  - **Against:** Holds unpublished drafts longer than the 7-day minimum, slightly increasing exposure.
- **Option (c):** 30 days
  - **For:** Maximises the window for the signer to complete confirmation.
  - **Against:** Retains unpublished drafts longest, the least aligned with data-minimisation, and is confirmed against `privacy-and-data-minimisation` anyway (spec §5.2 item 9).
- **Recommended:** (b) — short enough to minimise retention of unpublished drafts, long enough for a human to act on the receipt; confirm against `privacy-and-data-minimisation` before launch.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Specify the email intake: receive a message, authenticate the sender via the mailbox control challenge owned by `proofs-of-control` (a one-time code round-trip) — never the `From` header, which is spoofable; a message that fails the challenge must not produce a draft in that mailbox's name.
2. Treat the `From`, `Reply-To`, and any header read as self-declared input, never verified identity; the draft's responsible party is what the signer confirms, not what the envelope claims.
3. Extract only declaration-relevant fields (name, scope, AI role) per D1; never quote, store, or republish the message body or any third-party addresses beyond what the draft needs.
4. Produce only a private draft and an archive receipt (carrying the draft identifier and the next step); never publish, register, or mark `active` anything from an email alone.
5. Specify the confirmation surface: hand off to the no-account builder/signing wizard with a visibility preview that shows exactly what will become reachable, and repeat the responsibility warning ("issuing is taking responsibility; it is not verification"); only an explicit, previewed confirmation issues.
6. Make accidental publication structurally impossible: the draft defaults to `local` or `unlisted` visibility (never `public`).
7. Handle attachments per `security-and-abuse-controls`: never auto-opened, never executed; active content refused or sandboxed; never copied into the draft. Malware is neutralised before any human review.
8. Specify retention: the raw inbound message is deleted after the draft is produced, on a published schedule; unconfirmed drafts expire per D2; only the draft and a minimal audit event are retained.
9. Specify account recovery: a mailbox challenge at recovery is a fresh proof, not a re-run of the original message's claim; a lost mailbox must not take over prior records.
10. State that email is a convenience and that the no-account builder and wizard remain the primary, fully-local paths.
11. **Note for the agent — hosted-service gate:** this workflow accepts mail and is a hosted service; it must not go live until its static-first failure-mode statement, threat model, privacy analysis, and cost model are published (Programme 8 rule, IMPLEMENTATION-PLAN §11.6). The deliverable here is the workflow spec/design; stand-up is gated.
12. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- Email alone never publishes, registers, or activates a declaration.
- The `From` header is never trusted; authentication is challenge-gated.
- Accidental publication is structurally impossible (non-public default).
- The message body and third-party addresses are never quoted, stored, or republished.
- Attachments are never executed and never copied into the draft; malware is neutralised before review.
- The raw inbound message is deleted on schedule; unconfirmed drafts expire.
- The responsibility warning is T1 normative wording (R2/T0/T1) — never reworded; its rendering follows the signing-wizard's localised wording.

## 5. Acceptance criteria
- [ ] No email alone produces a public or `active` declaration.
- [ ] A message failing the mailbox challenge produces no draft in that mailbox's name.
- [ ] Only declaration-relevant fields are extracted; the message body is never republished.
- [ ] Attachments are never executed and never copied into a draft.
- [ ] A draft defaults to non-public visibility and the confirmation preview shows exactly what becomes reachable.
- [ ] The responsibility warning appears at confirmation.
- [ ] The raw inbound message is deleted on the published schedule.
- [ ] A lost mailbox cannot recover or take over prior records.
- [ ] The workflow states that the no-account builder and wizard remain the primary paths.

## 6. Outputs to produce in the repository
- `docs/spec/declaration-by-email.md` — the email-to-draft workflow: intake, challenge, field extraction, receipt, confirmation handoff, visibility preview, retention, recovery, and the non-public default.

## 7. Read before building
- [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md) — mini-plan
- [`declaration-by-email-dsh.md`](../suggestions/declaration-by-email-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
