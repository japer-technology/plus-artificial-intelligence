# Hosted Profiles — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`hosted-profiles.md`](hosted-profiles.md).
> **Catalogue group:** Declarations and profiles.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the hosted profile: an optional, stable public page that collects a party's chosen public context — name or pseudonym, short context, practice register, declarations, dates and status history, and a contact route — while leaving every declaration independently scoped and every field explicitly opted in. It exists to give a signer one persistent place to point to, without turning that place into a verdict about the signer.

## 2. Placement and boundaries

A profile is an optional hosted presentation over records, not a new record type. It aggregates the practice register ([AI practice register](ai-practice-register-dsh.md)) and declarations stored per [Portable declaration schema](portable-declaration-schema-dsh.md), and it renders status history per [Declaration lifecycle](declaration-lifecycle-dsh.md). It sits alongside — and is distinct from — the canonical [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) record of parties. As a hosted service it is bound by the [Free-floor covenant](free-floor-covenant-dsh.md): the no-account path stays free, and the profile must never become a prerequisite for declaring.

## 3. Terminology

- **Profile** — a hosted page collecting a party's public context.
- **Profile holder** — the party who controls the profile; may be a person using a pseudonym.
- **Public context** — the short, self-declared framing a party chooses to show.
- **Private account data** — authentication, recovery, and billing data, which is never part of the public profile.
- **Portability** — the ability to export and move the profile's content without loss.

## 4. Scope

### 4.1 In scope

- The profile's content model and what may appear on it.
- Account recovery, edit history, and portability rules.
- Pseudonyms, revocation, indexing, moderation, and proof labels.
- The separation of private account data from public record data.

### 4.2 Out of scope and deferred

- The declaration and practice-register formats (portable declaration schema, AI practice register).
- The registry's admission and governance policies (opt-in signatory registry).
- Organisation-level profiles and authority (organisation profiles and policies).
- The hosting operation's pricing and SLAs (managed hosting and domains).

## 5. Specification

### 5.1 Design goals and principles

1. **Aggregation, not authority.** A profile presents records; it grants no trust and creates no new claim.
2. **Independent scoping.** Profile-level context never implies any declaration covers more than it states.
3. **Opt-in visibility.** Nothing public appears unless the holder published it.
4. **Private data stays private.** Account data and public records are stored and served separately.
5. **Leave anytime.** Export and departure are always straightforward and lossless.

### 5.2 Normative requirements

1. The profile MUST be optional; using `+AI`, issuing a declaration, and the no-account path MUST NOT require a profile.
2. Every public field MUST be explicitly opted in by the holder; the profile MUST NOT publish inferred fields (e.g. inferred AI use, inferred identity) and MUST NOT derive a reputation or rank.
3. A profile-level practice register entry MUST be labelled with its claim type (available, generally used, approved) and MUST NOT imply use on every artifact the party declares, per [Claim types](claim-types-dsh.md).
4. Declarations listed on a profile MUST each remain independently scoped with their own status and dates; the profile MUST render each declaration's status history per [Declaration lifecycle](declaration-lifecycle-dsh.md) and MUST NOT merge them into one profile-level status.
5. The contact route MUST be an explicitly chosen public route and MUST be labelled as such; it MUST NOT expose private account identifiers.
6. Account recovery MUST be possible without identity documents or biometric proof, using recovery codes or the control proofs owned by [Proofs of control](proofs-of-control-dsh.md); loss of recovery MUST lead to a defined fallback, never to forced identity disclosure.
7. Public profile edits MUST be recorded in a visible edit history (append-only for public facts); the holder MAY correct typography, but changes of meaning MUST be visible as a new revision, honouring no-silent-change.
8. The holder MUST be able to export the complete profile — all context, practice register, and declarations — in the portable formats, at any time, without payment.
9. The holder MUST be able to revoke or depublish the profile and to reduce its visibility at any time; revocation of a declaration follows the declaration lifecycle and is never blocked by profile features.
10. Pseudonyms MUST be fully supported; no step MAY require a legal name, identity document, or proof of real-world identity.
11. Indexing MUST follow [Visibility and consent](visibility-and-consent-dsh.md); the default for a new profile MUST be unlisted, and searchability MUST require an explicit, separate consent.
12. Profile content MUST be subject to the project's moderation and appeal process ([Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md)), with removal never silently deleting the holder's own declaration records.
13. Proof labels on a profile MUST use the [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) vocabulary; control labels (mailbox, account, domain, key) MAY be shown where established, but the profile MUST NOT display a trust score or verdict, and control of the profile account MUST NOT be presented as identity.
14. Private account data (authentication, recovery, billing) MUST be stored, logged, and exported separately from public records, per [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md).
15. A free basic profile tier MUST exist, defaulting to unlisted visibility; paid tiers MAY add convenience (extra storage, custom domains via managed hosting and domains, monitoring) but never legitimacy, rank, or permission.
16. A hosted profile MUST NOT auto-create a registry entry; admission to the [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) requires a separate, explicit consent step owned by that specification.
17. If identity-provider links or SSO are offered, they MUST be optional, assessment-gated under the red-lines watchlist item "identity integrations", and non-biometric.

### 5.3 Data model

The profile is a presentation object referencing owned records; it defines no new record type. Its content model is: an optional display name or pseudonym, optional short context, a list of practice-register references, a list of declaration references, and a contact route — each with its own visibility flag and edit-revision pointer. The referenced records keep their own schemas.

### 5.4 Interfaces and behaviours

- **Public view:** renders the opted-in context and the referenced records' current statuses and dates, with the standing disclaimer that a profile is a self-declared collection, not verification.
- **Manage view:** the holder edits fields, toggles visibility, and exports; all changes to public facts append to the edit history.
- **Departure:** export-then-remove, with the declaration records preserved per the lifecycle rather than destroyed.

### 5.5 Lifecycle and operational rules

Profile content changes are versioned edits; declaration status changes come from the declaration lifecycle and are reflected, not authored, by the profile. Depublishing a profile does not revoke the declarations it listed. Retention of deleted profiles follows the privacy and continuity rules: a depublished profile may leave a tombstone if it was public, but its private account data is deleted on a defined schedule.

## 6. Free floor, red lines, and invariants

The profile is an optional convenience around a free floor: declaring and the no-account path remain free and profile-free. The red lines against mandatory identity (pseudonyms allowed, no documents) and covert tracking and reputation scores (no inference, no rank, no verdict) are enforced in sections 5.2 items 2, 10, and 13. The separation of private account data from public records honours privacy and the invariant that the commons stays self-contained and mirrorable.

## 7. Relationships to sibling specifications

- [Portable declaration schema](portable-declaration-schema-dsh.md) and [Declaration lifecycle](declaration-lifecycle-dsh.md) own the records and statuses the profile renders.
- [AI practice register](ai-practice-register-dsh.md) owns the practice entries the profile lists.
- [Claim types](claim-types-dsh.md) governs the labelling that stops profile entries implying artifact use.
- [Opt-in signatory registry](opt-in-signatory-registry-dsh.md) is the canonical party record this profile complements, not replaces.
- [Visibility and consent](visibility-and-consent-dsh.md) owns the visibility modes and default-unlisted rule.
- [Proofs of control](proofs-of-control-dsh.md) and [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) own the control and label rules the profile displays.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) owns the account/public separation.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md) owns content moderation.
- [Managed hosting and domains](managed-hosting-and-domains-dsh.md) operates the hosting and its recovery/export mechanics.
- [Named subdomains and identity bundles](named-subdomains-and-identity-bundles-dsh.md) optionally points a memorable address at this profile.
- [Free-floor covenant](free-floor-covenant-dsh.md) keeps this service optional.

## 8. Resolution of the seed's "before implementation" concerns

- **Account recovery** — section 5.2 item 6: recovery codes or control proofs, never identity documents.
- **Edit history** — section 5.2 item 7: append-only public revisions, no silent change.
- **Portability** — section 5.2 item 8: complete export in portable formats.
- **Revocation** — section 5.2 item 9: revoke/depublish anytime; declaration revocation follows the lifecycle.
- **Pseudonyms** — section 5.2 item 10: fully supported, no identity documents.
- **Indexing** — section 5.2 item 11: default unlisted, searchability by separate consent.
- **Moderation** — section 5.2 item 12: subject to the moderation and appeal process.
- **Proof labels** — section 5.2 item 13: evidence-label vocabulary, no verdict.
- **Separation of private account data** — section 5.2 item 14: stored and served separately.

## 9. Acceptance criteria

1. A person can issue and keep a declaration with no profile at all.
2. A new profile defaults to unlisted and becomes searchable only on separate consent.
3. A profile-level practice entry is labelled with its claim type and never implies use on every artifact.
4. Each listed declaration shows its own status and dates, never a merged profile status.
5. Account recovery works without identity documents or biometric proof.
6. The holder can export the complete profile in portable formats without payment.
7. Public edits append to a visible history; meaning changes are new revisions.
8. A pseudonymous profile is fully supported end to end.
9. No profile surface shows a trust score or single verdict.
10. Private account data is stored and served separately from public records.

## 10. Open questions

- The fallback when a holder loses all recovery factors is undecided and needs abuse modelling.
