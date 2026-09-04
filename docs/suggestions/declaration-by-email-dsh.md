# Declaration by Email — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`declaration-by-email.md`](declaration-by-email.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines a cautious email workflow that receives an authenticated message and returns a private draft declaration or archive receipt — followed, always, by an explicit preview and confirmation before anything becomes public. Email is a transport, never a publishing authority: the only thing email can produce is a private draft that a human then confirms.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and inclusion" group and owns *the email-to-draft workflow and its privacy and safety rules*. Because it accepts mail, it is treated with the caution the project reserves for its email-service watchlist. It does not own the record format (see [Portable declaration schema](portable-declaration-schema-dsh.md)), the mailbox-control challenge that authenticates the sender (see [Proofs of control](proofs-of-control-dsh.md)), the consent to publish (see [Visibility and consent](visibility-and-consent-dsh.md)), or the guided understanding a signer needs (see [Signing wizard](signing-wizard-dsh.md)). It honours the shared convention that declaration-by-email only ever produces a private draft followed by explicit preview and confirmation.

## 3. Terminology

- **Inbound message** — the signer's email that carries an intent to declare.
- **Draft** — a locally held, unpublished declaration produced from the message; status is not yet `active`.
- **Archive receipt** — a return message acknowledging the draft and its identifier, never a public record.
- **Confirmation** — the explicit, previewed signer action that turns the draft into an issued declaration.

## 4. Scope

### 4.1 In scope

- Receiving and authenticating the message; producing the private draft and receipt.
- The preview-and-confirm step and the no-publication-before-confirmation rule.
- Attachment and malware handling; retention; account recovery.

### 4.2 Out of scope and deferred

- The declaration record format (portable declaration schema).
- Mailbox control challenge mechanics (proofs of control).
- The guided signer journey (signing wizard) and local builder (no-account declaration builder).
- The machine-readable header (email metadata).

## 5. Specification

### 5.1 Design goals and principles

1. **Email proposes, humans dispose.** Email can only ever produce a private draft.
2. **Nothing public by accident.** Publication requires an explicit, previewed confirmation.
3. **Trust nothing in the envelope.** Sender identity is claimed, not proven, until challenged.
4. **Least exposure.** Only the fields needed for the draft are extracted; the message itself is not republished.
5. **Confidential by default.** The inbound thread is treated as private regardless of who else is copied.

### 5.2 Normative requirements

1. The workflow MUST produce only a private draft and an archive receipt; it MUST NOT publish, register, or mark `active` anything from an email alone.
2. Sender authentication MUST use the mailbox control challenge owned by [Proofs of control](proofs-of-control-dsh.md) — a one-time code round-trip — and MUST NOT rely on the `From` header, which is spoofable; a message that fails the challenge MUST NOT produce a draft in that mailbox's name.
3. The `From` address, `Reply-To`, and any header the workflow reads MUST be treated as self-declared input, never as verified identity; the draft's responsible party is what the signer confirms, not what the envelope claims.
4. Confidential threads MUST be honoured: the workflow MUST extract only declaration-relevant fields (name, scope, AI role) and MUST NOT quote, store, or republish the message body or any third-party addresses beyond what the draft needs.
5. Attachments MUST be handled per [Security and abuse controls](security-and-abuse-controls-dsh.md): never auto-opened, never executed; active content MUST be refused or sandboxed, and attachments MUST NOT be copied into the draft.
6. Malware MUST be neutralised before any human review; the workflow MUST reject or sandbox suspicious content rather than rendering it.
7. Accidental publication MUST be structurally impossible: the draft defaults to `local` or `unlisted` visibility (never `public`), and the confirmation step MUST show exactly what will become reachable, per [Visibility and consent](visibility-and-consent-dsh.md).
8. Confirmation MUST be an explicit, previewed action on a separate surface (the builder or wizard), MUST repeat the responsibility warning ("issuing is taking responsibility; it is not verification"), and only then MAY the draft be issued.
9. Retention MUST follow [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md): the raw inbound message MUST be deleted after the draft is produced, on a published schedule, with only the draft and a minimal audit event retained.
10. Account recovery MUST NOT let a lost mailbox take over records: recovery of the signer's records follows [Proofs of control](proofs-of-control-dsh.md) and [Declaration lifecycle](declaration-lifecycle-dsh.md), and a mailbox challenge at recovery is a fresh proof, not a re-run of the original message's claim.
11. The workflow MUST be explicit that email is a convenience and that the no-account builder and wizard remain the primary, fully-local paths.

### 5.3 Data model

Not applicable — the workflow emits the draft owned by [Portable declaration schema](portable-declaration-schema-dsh.md) via the [No-account declaration builder](no-account-declaration-builder-dsh.md). Its only additions are transient: an inbound-message identifier and the archive-receipt reference, both deleted on schedule.

### 5.4 Interfaces and behaviours

- The signer sends a message (or uses a structured template) and receives a receipt carrying the draft identifier and the next step.
- The confirmation surface shows the parsed draft fields, the responsibility warning, and the visibility choice with its preview; the signer confirms to issue.
- Unconfirmed drafts expire per the retention schedule and are never published.

### 5.5 Lifecycle and operational rules

- A draft is not a declaration until issued; issuing follows the builder and, thereafter, [Declaration lifecycle](declaration-lifecycle-dsh.md) governs status.
- Unconfirmed drafts are deleted on schedule; confirmed declarations retain their lifecycle history.
- The workflow MUST NOT silently edit an issued declaration; changes route to supersession or revocation per declaration lifecycle.

## 6. Free floor, red lines, and invariants

The email workflow is an optional convenience on the free floor: the no-account builder and wizard remain the primary, fully-local, free paths, and email must never become a paid or mandatory gate. The no-publication-without-confirmation rule implements the red line against automated publication in another's name, and the challenge-based authentication keeps a spoofed envelope from creating a declaration. The responsibility warning keeps responsibility human; nothing in the workflow transfers it to the machine.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the draft the workflow produces.
- [Proofs of control](proofs-of-control-dsh.md) owns the mailbox challenge and recovery rules.
- [Visibility and consent](visibility-and-consent-dsh.md) owns the draft-to-public consent step.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) governs everything after issue.
- [No-account declaration builder](no-account-declaration-builder-dsh.md) is the confirmation surface the workflow hands off to.
- [Signing wizard](signing-wizard-dsh.md) supplies the guided understanding the signer needs before confirming.
- [Security and abuse controls](security-and-abuse-controls-dsh.md) owns attachment and malware handling.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) owns retention and deletion.
- [Email metadata](email-metadata-dsh.md) is the optional machine-readable header that supplements, never replaces, this workflow's visible steps.

## 8. Resolution of the seed's "before implementation" concerns

- **Spoofing** — section 5.2 items 2–3: mailbox challenge, never the `From` header; envelope fields treated as self-declared.
- **Confidential threads** — section 5.2 item 4: only declaration-relevant fields extracted; nothing republished.
- **Attachments** — section 5.2 item 5: never opened or executed; not copied into the draft.
- **Malware** — section 5.2 item 6: neutralised before human review.
- **Accidental publication** — section 5.2 items 1 and 7: draft-only output, non-public default, explicit preview.
- **Retention** — section 5.2 item 9: raw message deleted on schedule.
- **Authentication** — section 5.2 item 2: challenge-based, per proofs of control.
- **Consent** — section 5.2 items 7–8: visibility consent and explicit confirmation.
- **Account recovery** — section 5.2 item 10: fresh proof at recovery; no takeover via lost mailbox.

## 9. Acceptance criteria

1. No email alone produces a public or `active` declaration.
2. A message failing the mailbox challenge produces no draft in that mailbox's name.
3. Only declaration-relevant fields are extracted; the message body is never republished.
4. Attachments are never executed and never copied into a draft.
5. A draft defaults to non-public visibility and the confirmation preview shows exactly what becomes reachable.
6. The responsibility warning appears at confirmation.
7. The raw inbound message is deleted on the published schedule.
8. A lost mailbox cannot recover or take over prior records.
9. The workflow states that the no-account builder and wizard remain the primary paths.

## 10. Open questions

- Whether the inbound template should be a fixed structured form or accept free-text with field extraction, is undecided.
- The unconfirmed-draft expiry period, to be set with privacy and data minimisation.
