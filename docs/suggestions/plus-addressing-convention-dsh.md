# Plus-Addressing Convention — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`plus-addressing-convention.md`](plus-addressing-convention.md).
> **Catalogue group:** Email, distribution, presentation, and inclusion.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification documents the optional `+AI` plus-addressing convention: addresses of the form `name+ai@domain`, and scoped tags such as `name+ai-code@domain`, used as a visible disclosure and mailbox-filtering convention. It records the founding example `eric.mourant+ai@japer.technology`, states precisely what the convention does and does not prove, and sets the boundaries that stop a convenience from being mistaken for identity.

## 2. Placement and boundaries

This specification sits in the "Email, distribution, presentation, and inclusion" group and owns *the convention itself*: syntax, semantics, limits, and the founding example. It does not own proof that a mailbox is controlled (see [Proofs of control](proofs-of-control-dsh.md)) or the machine-readable header (see [Email metadata](email-metadata-dsh.md)). It honours the free floor by being a no-cost, no-account, provider-optional convention anyone may use, and the red line against mandatory identity by stating, flatly, that a plus-tag is not identity proof.

## 3. Terminology

- **Plus-addressing** — the widely implemented convention where `name+tag@domain` delivers to `name@domain` with the `tag` preserved as a filterable local part.
- **Tag** — the suffix after `+` (`ai`, `ai-code`); a disclosure or routing label, not a credential.
- **Base address** — the `name@domain` part that remains after removing `+tag`.
- **Founding example** — `eric.mourant+ai@japer.technology`, kept visible as the convention's origin.

## 4. Scope

### 4.1 In scope

- Syntax for `+ai` and scoped `+ai-<scope>` tags.
- What the convention discloses and what it does not.
- Provider dependence, form incompatibilities, and `%2B` URL encoding.
- Privacy limits and base-address inference.
- Relationship to the visible signature and the metadata header.

### 4.2 Out of scope and deferred

- Proving mailbox control (proofs of control).
- The machine-readable header (email metadata).
- Campaign and slogan addresses under the project domain (message-bearing-subdomains seed).
- Relay aliases (privacy-preserving email relay).

## 5. Specification

### 5.1 Design goals and principles

1. **Disclosure, not proof.** The tag says "this mailbox is used for AI-assisted correspondence"; it proves nothing.
2. **Cheap and optional.** The convention costs nothing and requires no registration.
3. **Honest about limits.** Every guide states what the tag cannot do.
4. **Consistent with visible disclosure.** A plus-address is an address form; it never replaces the visible signature.

### 5.2 Normative requirements

1. The convention MUST be documented as `name+ai@domain` for general AI-assisted correspondence and `name+ai-<scope>@domain` for scoped use (e.g. `name+ai-code@domain`); the `<scope>` MUST be a short, lowercase, non-sensitive label.
2. `eric.mourant+ai@japer.technology` MUST remain the founding concrete example wherever the convention is introduced.
3. The convention MUST be described as a visible disclosure and mailbox-filtering convention, and MUST NOT be described as identity proof, verification, or a proof of mailbox control (see [Proofs of control](proofs-of-control-dsh.md)).
4. Guidance MUST state that plus-addressing is provider-dependent: some providers support it, some reject or strip `+` tags, and delivery to `name+tag@domain` is not guaranteed.
5. Guidance MUST warn that forms and validators often reject or mishandle `+` in email fields, and that `+` MUST be percent-encoded as `%2B` when an address appears in a URL query or path where `+` would be decoded as a space.
6. Guidance MUST state the privacy limits: the tag discloses AI-assisted use to the recipient, and the base address `name@domain` is trivially inferable from `name+ai@domain`, so the convention offers no anonymity.
7. A plus-address MUST NOT be presented as a separate identity or as evidence that the base mailbox's holder sent a message; sending from `name+ai@domain` asserts nothing about who controls `name@domain`.
8. The convention MAY be used to route and filter mail (e.g. a filter on the `+ai` tag); filtering is a local convenience and MUST NOT be described as a security boundary.
9. The plus-address convention and the visible signature ([Email signature kit](email-signature-kit-dsh.md)) are complementary: a signer MAY use both, and the visible signature remains the disclosure that a plus-address cannot substitute for.

### 5.3 Data model

Not applicable — this specification defines no new data structures. A plus-address is an RFC-conformant mailbox with a `+` tag in the local part.

### 5.4 Interfaces and behaviours

- Documentation pages and the use guide render the convention with the founding example and the four limits (provider, form, encoding, inference).
- Mail-filtering recipes for the tag are presented as examples, clearly marked provider-specific.

### 5.5 Lifecycle and operational rules

Not applicable — see the sibling specifications that own lifecycle rules. The convention has no state; an address a signer stops using simply stops being used.

## 6. Free floor, red lines, and invariants

The convention is a free-floor convenience: using `name+ai@domain` requires no payment, account, or permission, and no provider may be required as a gatekeeper. Its central honesty rule implements the red line against mandatory identity by refusing to let a mailbox tag be laundered into identity proof. The "one normative specification, many presentations" invariant is honoured because the tag is presentation of the mark's disclosure, not a new meaning.

## 7. Relationships to sibling specifications

- [Proofs of control](proofs-of-control-dsh.md) owns the mailbox-control challenge that is the only legitimate "confirmed" claim about an address.
- [Email metadata](email-metadata-dsh.md) defines the machine-readable header that supplements, never replaces, the visible disclosure.
- [Email signature kit](email-signature-kit-dsh.md) defines the visible signature the plus-address sits beside.
- [message-bearing-subdomains.md](message-bearing-subdomains.md) is the distinct, project-domain campaign-address idea; plus-addressing is per-signer, on the signer's own domain.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) governs any service that collects these addresses.

## 8. Resolution of the seed's "before implementation" concerns

- **Provider dependence** — section 5.2 item 4: support varies; delivery is not guaranteed.
- **Form incompatibilities** — section 5.2 item 5: validators and forms may reject `+`.
- **`%2B` URL encoding** — section 5.2 item 5: `+` must be percent-encoded where it would decode as a space.
- **Privacy limits** — section 5.2 item 6: the tag discloses use and the base address is inferable.
- **Base-address inference** — section 5.2 item 6: `name@domain` is trivially recoverable; no anonymity is claimed.
- **Why a tag is not identity proof** — sections 5.2 items 3 and 7 and section 6: disclosure and filtering only; control proof is out of scope.

## 9. Acceptance criteria

1. The documentation states the convention is disclosure and filtering, not identity proof.
2. The founding example `eric.mourant+ai@japer.technology` appears wherever the convention is introduced.
3. Scoped-tag syntax and the lowercase non-sensitive-scope rule are specified.
4. The provider-dependence, form-incompatibility, and `%2B`-encoding warnings are all present.
5. The privacy limits and base-address inference are stated without claiming anonymity.
6. No sentence presents a plus-tag as proof of mailbox control or identity.
7. The convention is shown as complementary to, never replacing, the visible signature.

## 10. Open questions

- Whether to recommend a fixed set of reserved scopes (e.g. `ai-code`, `ai-text`, `ai-image`) or leave scopes open, is undecided.
- Whether a central list of providers' plus-addressing support should be maintained, and by whom, is undecided.
