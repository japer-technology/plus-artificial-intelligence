# Email Metadata — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`email-metadata.md`](email-metadata.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines a versioned email header that carries a declaration reference as a machine-readable supplement to the visible signature. Its purpose is to let tools discover "a declaration exists for this message" without parsing pixels, while making crystal clear that the header can never replace visible human-readable disclosure.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and inclusion" group and owns *the header name, value syntax, and its limits*. It does not own the declaration the header references (see [Portable declaration schema](portable-declaration-schema-dsh.md)), the discovery or embedding of that record (see [Machine-readable assertions](machine-readable-assertions-dsh.md)), the version system for the specification (see [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md)), or the mailbox/domain proofs that would make a header meaningful beyond self-assertion (see [Proofs of control](proofs-of-control-dsh.md)). It honours the static-first invariant by keeping the header a plain, parseable text field with no required infrastructure.

## 3. Terminology

- **Header** — an RFC 5322 email header field carrying the machine-readable declaration reference.
- **Declaration reference** — an identifier or URL that locates the declaration record.
- **Visible signature** — the human-readable `Name +AI` disclosure ([Email signature kit](email-signature-kit-dsh.md)); the header supplements it.
- **Gateway stripping** — the removal or rewriting of unknown headers by relays and gateways.

## 4. Scope

### 4.1 In scope

- Header name and versioned value syntax.
- Canonical form and the rules that make the value checkable.
- Interaction with DKIM, forwarding, and gateways.
- Privacy, spoofing, and the never-replaces-visible-disclosure boundary.

### 4.2 Out of scope and deferred

- The declaration record and its identifiers (portable declaration schema).
- How a checker resolves and validates the reference (verification checker, machine-readable assertions).
- Domain or mailbox control proof (proofs of control).

## 5. Specification

### 5.1 Design goals and principles

1. **Supplement, never substitute.** The header is optional and subordinate to the visible signature.
2. **A claim, not a proof.** A header's presence asserts nothing verifiable by itself.
3. **Loss-tolerant.** Stripping or mangling the header must cause no misreading of the message.
4. **Minimal by design.** The header carries a reference, nothing more.

### 5.2 Normative requirements

1. The header MUST be named `Plus-AI`; during experimentation an `X-Plus-AI` alias MAY be used, but the value format MUST be identical.
2. The value MUST be a single RFC 5322 field body carrying a version token and a declaration reference: `Plus-AI: <version>; <reference>`, where `<version>` is a positive integer naming the header format version and `<reference>` is a URL or a `declarationId` with a source (e.g. `Plus-AI: 1; https://…/declarations/<id>`).
3. The `<reference>` MUST resolve to exactly one declaration record; tools MUST treat an unresolvable reference as "no usable metadata", never as a negative statement about the message.
4. The header MUST NOT carry personal data beyond what the visible signature already discloses; it is a pointer, not a payload.
5. The header MUST be documented as a supplement that can NEVER replace the visible human-readable disclosure ([Email signature kit](email-signature-kit-dsh.md) or a plus-address); absence of the header MUST NOT be read as absence of disclosure.
6. Gateway stripping and forwarding MUST be expected: the header MAY be removed or folded by relays, and consumers MUST tolerate its absence, its folding (per RFC 5322 unfolding), and the `X-`/non-`X-` name variants.
7. DKIM interaction MUST be documented: if the header is to carry any weight it SHOULD be covered by the message's DKIM signature, but a valid DKIM signature over the header establishes only that the header was present when signed — it does NOT prove the reference is true or that the signer controls the mailbox or domain (see [Proofs of control](proofs-of-control-dsh.md)).
8. The header MUST be treated as self-declared: any tool reporting on it MUST label the reference `self-declared` unless an independent control proof exists, per [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md).
9. Spoofing MUST be addressed by refusing to treat the header as evidence of anything; a sender can add the header about anyone, so consumers MUST verify the referenced declaration and any claimed control independently.
10. Canonical syntax MUST be defined precisely — a single version token, one reference, no free-form prose — so the value is machine-parseable without ambiguity; implementations MUST reject malformed values rather than guess.
11. Interoperability MUST be preserved: the header MUST NOT break legacy mail handling, and its name MUST be registered or namespaced to avoid collision before non-experimental use.

### 5.3 Data model

Not applicable — the header carries a reference to the declaration record owned by [Portable declaration schema](portable-declaration-schema-dsh.md); it defines no new data structure of its own beyond the two-token value grammar in 5.2 item 2.

### 5.4 Interfaces and behaviours

- The [Verification checker](verification-checker-dsh.md) MAY accept the header value as a declaration reference and resolve it through [Machine-readable assertions](machine-readable-assertions-dsh.md).
- Mail clients that surface the header MUST present it as "machine-readable declaration reference (self-declared)" and MUST show the visible signature as the primary disclosure.

### 5.5 Lifecycle and operational rules

- The header has no state; a message's header refers to a declaration whose status is governed by [Declaration lifecycle](declaration-lifecycle-dsh.md).
- The header format version increases only with a breaking value-grammar change, per the no-silent-change invariant.

## 6. Free floor, red lines, and invariants

Using the header is free and requires no account, provider, or permission. Its central rule — never a replacement for visible disclosure — implements the shared email convention, and its self-declared status implements the "a declaration is a claim, not verification" invariant. The minimal-payload rule implements the covert-tracking and personal-data red lines: the header is a pointer, never a tracking or identity channel.

## 7. Relationships to sibling specifications

- [Email signature kit](email-signature-kit-dsh.md) defines the visible disclosure this header supplements.
- [Plus-addressing convention](plus-addressing-convention-dsh.md) is the visible address disclosure the header sits beside.
- [Portable declaration schema](portable-declaration-schema-dsh.md) owns the record the reference points to.
- [Machine-readable assertions](machine-readable-assertions-dsh.md) owns how that record is discovered from the reference.
- [Verification checker](verification-checker-dsh.md) resolves and validates the reference.
- [Proofs of control](proofs-of-control-dsh.md) owns the mailbox/domain proofs that would upgrade the header from self-declared.
- [Evidence labels, not trust scores](evidence-labels-not-trust-scores-dsh.md) owns the `self-declared` label applied to the header.
- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md) supplies the version referent if the reference names a `specVersion`.

## 8. Resolution of the seed's "before implementation" concerns

- **Gateway stripping** — section 5.2 items 5–6: absence tolerated; folding and name variants accepted.
- **Forwarding** — section 5.2 items 5–6: the header may survive or be dropped; consumers tolerate either.
- **DKIM interactions** — section 5.2 item 7: signed presence proves presence, not truth.
- **Interoperability** — section 5.2 items 6 and 11: legacy-safe, namespaced name.
- **Privacy** — section 5.2 item 4: pointer only, no extra personal data.
- **Spoofing** — section 5.2 items 8–9: treated as self-declared; independently verified.
- **Canonical syntax** — section 5.2 items 2 and 10: fixed two-token grammar, malformed values rejected.
- **Why the header cannot replace visible disclosure** — section 5.2 item 5 and section 6: the visible signature remains primary and mandatory.

## 9. Acceptance criteria

1. The header name and two-token value grammar are specified and unambiguous.
2. A stripped or folded header causes no misreading of the message.
3. A header with an unresolvable reference is reported as "no usable metadata", not negatively.
4. The header carries nothing beyond a version token and a reference.
5. Any tool reporting the header labels it `self-declared` absent an independent proof.
6. The specification states the header can never replace visible disclosure.
7. A malformed header value is rejected, never guessed.
8. The DKIM-interaction note states that a signature proves presence, not truth.

## 10. Open questions

- Whether to register the `Plus-AI` header name (e.g. provisional registration) before non-experimental use, and through which body, is undecided.
- Whether the value should additionally carry a content hash of the referenced record for offline integrity, is undecided.
