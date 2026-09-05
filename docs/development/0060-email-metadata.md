# Development task — email-metadata: Email Metadata

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md)
> **Source:** spec [`email-metadata-dsh.md`](../suggestions/email-metadata-dsh.md) · seed [`email-metadata.md`](../suggestions/email-metadata.md)
> **Effort:** S · **Phase:** P2 · **Position:** P2 — after the schema and checker exist (there must be something to resolve).
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Versioned `Plus-AI:` email header carrying a declaration reference as a machine-readable supplement to the visible signature.
- **Why now / risk of deferring:** P2 — there must be something to resolve, so it waits for the schema and checker; deferring beyond that leaves the machine-readable supplement undefined while the programme's "Email header legitimacy" risk (an unregistered `Plus-AI:` inviting spoofing claims) sits undocumented.
- **Features to deliver:**
  - Header grammar spec: `Plus-AI: <version>; <reference>` — `<version>` a positive integer, `<reference>` a URL or `declarationId`+source; one version token, one reference, no free-form prose; malformed values rejected, never guessed.
  - The `X-Plus-AI` experimentation alias with an identical value format; gateway-stripping / forwarding / RFC 5322 unfolding tolerance documented.
  - DKIM-limits documentation (a signature over the header proves presence-when-signed, not truth, and not mailbox/domain control) and the self-declared labelling rule per evidence-labels.
  - The checker-resolution contract: the verification checker MAY accept the header value as a declaration reference, resolved via machine-readable assertions.
- **Depends on:** portable-declaration-schema, machine-readable-assertions, verification-checker, evidence-labels-not-trust-scores

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Header-name registration / how the unregistered header's limits are documented (cross-cutting §11 risk)
- **Question:** The `Plus-AI:` header name is unregistered — how should its DKIM and self-declared limits be documented, and should registration be pursued before non-experimental use? (spec §10 item 1 + digest "header-name registration"; assigned IMPLEMENTATION-PLAN §11 risk "Email header legitimacy".)
- **Option (a):** keep `Plus-AI` unregistered for now, document DKIM limits + self-declared status honestly, and use `X-Plus-AI` during experimentation
  - **For:** Matches the spec, which already mandates the `X-Plus-AI` experimentation alias and the honest DKIM/self-declared documentation (spec §5.2 items 1, 7–8), and keeps this S-effort spec unblocked from the external registration dependency owned by `standards-engagement` (Programme 10; brainstorm programme-level decision 2).
  - **Against:** Leaves the `Plus-AI:` name formally unregistered, so it stays exposed to the "Email header legitimacy" risk — an unregistered header invites spoofing claims — until registration is later pursued (programme Risks).
- **Option (b):** pursue provisional registration of `Plus-AI` (e.g. IANA provisional registry) before any non-experimental use
  - **For:** Would resolve the "Email header legitimacy" risk head-on by namespacing the name before non-experimental use (spec §5.2 item 11).
  - **Against:** Registration is an external-engagement dependency owned by `standards-engagement` (Programme 10) and would block this spec on a process outside the programme (brainstorm programme-level decision 2).
- **Option (c):** ship only `X-Plus-AI` and treat `Plus-AI` as the future registered form
  - **For:** The `X-` prefix is the conventional experimental namespace, avoiding collision without any registration process.
  - **Against:** Contradicts the spec, which names `Plus-AI` as the header with `X-Plus-AI` only as an experimentation alias (spec §5.2 item 1), and would leave the eventual registered name undefined.
- **Recommended:** (a) — the spec already mandates the `X-Plus-AI` alias during experimentation and the honest self-declared/DKIM documentation; registration is an external-engagement dependency owned by `standards-engagement` (Programme 10) and must not block this spec. This request records the honest-limits posture; the registration-body decision lives elsewhere.
- **Your choice:** ✏️

### D2 — Content hash in the value
- **Question:** Should the value additionally carry a content hash of the referenced record for offline integrity? (spec §10 item 2; digest "content hash in value".)
- **Option (a):** no content hash — keep the value to the two-token grammar (`<version>; <reference>`)
  - **For:** Preserves the spec's fixed two-token grammar (spec §5.2 item 2) and the minimal-payload rule that the header is a pointer, not a payload (spec §5.2 item 4); record integrity is already the record's own concern.
  - **Against:** Loses offline integrity at the header level — a reader cannot detect a mismatched reference without resolving the record.
- **Option (b):** add an optional third token carrying a content hash of the referenced record
  - **For:** Adds offline integrity so a consumer can detect a changed record without a network round-trip.
  - **Against:** Breaks the two-token grammar and the minimal-payload rule (spec §5.2 items 2 and 4), duplicates `artifact-hashing-and-binding`'s job, and would require a format-version bump (spec §5.5).
- **Option (c):** defer integrity to the record's own `specVersion`/hash reference instead
  - **For:** Keeps the header minimal while still pointing to versioned, hashable content through the reference.
  - **Against:** The reference already resolves to the record, so this adds an indirection the two-token grammar does not need (spec §5.2 item 2), and it risks implying the header validates integrity when it does not (spec §5.2 item 7's presence-not-truth rule).
- **Recommended:** (a) — spec §5.2 item 2 fixes the two-token grammar and item 10 requires malformed values be rejected, not guessed; adding a hash breaks the minimal-payload rule (item 4) and duplicates `artifact-hashing-and-binding`'s job. Keep v1 two-token; a hash could only ever arrive as a future format-version bump.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Specify the header grammar: `Plus-AI: <version>; <reference>` where `<version>` is a positive integer naming the header format version and `<reference>` is a URL or a `declarationId` with a source; define the canonical syntax precisely (single version token, one reference, no free-form prose).
2. Document the `X-Plus-AI` experimentation alias with an identical value format (per D1).
3. Document the DKIM interaction: a valid DKIM signature over the header establishes only that the header was present when signed — it does NOT prove the reference is true or that the signer controls the mailbox/domain.
4. Document gateway stripping, forwarding, RFC 5322 unfolding, and tolerance of the `X-`/non-`X-` name variants; absence of the header must never be read as absence of disclosure.
5. Specify resolution and rejection: an unresolvable reference is "no usable metadata", never a negative statement; malformed values are rejected, never guessed.
6. Document the never-replaces-visible-disclosure boundary and the minimal-payload rule (the header is a pointer, never a tracking or identity channel, and carries no personal data beyond what the visible signature already discloses).
7. Document the self-declared labelling rule (per `evidence-labels-not-trust-scores`): any tool reporting the header labels the reference `self-declared` unless an independent control proof exists; spoofing is addressed by refusing to treat the header as evidence of anything.
8. Document the checker-resolution contract: the verification checker MAY accept the header value as a declaration reference and resolve it through machine-readable assertions (the checker itself is Programme 3's tool — this request specifies the contract it consumes).
9. Apply the D2 content-hash decision; keep the header name and value grammar T0 protected (never translated).
10. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- The header never replaces visible human-readable disclosure; absence of the header is never read as absence of disclosure.
- The header is treated as self-declared, never evidence of control; malformed values are rejected, never guessed.
- The header carries nothing beyond a version token and a reference — a pointer, never a payload, and never a tracking or identity channel.
- The header must not break legacy mail handling; its name is registered or namespaced before non-experimental use (per D1).
- The header name `Plus-AI` (and the `X-Plus-AI` alias) and the two-token value grammar are T0 protected (R2/T0), never translated.

## 5. Acceptance criteria
- [ ] The header name and two-token value grammar are specified and unambiguous.
- [ ] A stripped or folded header causes no misreading of the message.
- [ ] A header with an unresolvable reference is reported as "no usable metadata", not negatively.
- [ ] The header carries nothing beyond a version token and a reference.
- [ ] Any tool reporting the header labels it `self-declared` absent an independent proof.
- [ ] The specification states the header can never replace visible disclosure.
- [ ] A malformed header value is rejected, never guessed.
- [ ] The DKIM-interaction note states that a signature proves presence, not truth.

## 6. Outputs to produce in the repository
- `docs/spec/email-metadata.md` — the header grammar spec: name/value syntax, DKIM limits, self-declared labelling, gateway/forwarding tolerance, checker-resolution contract, and the D1 registration posture.

## 7. Read before building
- [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md) — mini-plan
- [`email-metadata-dsh.md`](../suggestions/email-metadata-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
