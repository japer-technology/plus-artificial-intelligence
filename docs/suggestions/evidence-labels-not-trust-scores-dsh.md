# Evidence Labels, Not Trust Scores — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`evidence-labels-not-trust-scores.md`](evidence-labels-not-trust-scores.md).
> **Catalogue group:** AI practice registers and discovery.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the vocabulary and presentation rules for reporting
what is known about a `+AI` declaration as a set of individual, checkable facts —
such as *self-declared*, *mailbox confirmed*, *domain controlled*, *schema
valid*, *signature valid*, *hash matched*, *last checked*, *revoked*, or
*disputed* — and forbids collapsing those facts into one colour, checkmark, or
numerical trust score. The mark's honesty value depends on the difference
between "this person claims X" and "we observed Y": only separate labels can
preserve that difference.

## 2. Placement and boundaries

This specification sits in the "AI practice registers and discovery" group and
owns the *fact vocabulary* and its display rules. It does not own the mechanics
that establish each fact — those belong to [Verification
checker](verification-checker-dsh.md), [Proofs of
control](proofs-of-control-dsh.md), and [Artifact hashing and
binding](artifact-hashing-and-binding-dsh.md) — nor the declaration status
vocabulary, which belongs to [Declaration
lifecycle](declaration-lifecycle-dsh.md). It honours the invariant that a
declaration is a claim, not a verdict: labels report what was checked and when,
never whether someone is trustworthy. All labels that can be produced by a free
self-service check must remain free; paid services may add convenience (batch
rechecks, monitoring) but may not buy a better label.

## 3. Terminology

- **Evidence label** — one named, dated fact about a declaration or its
  controls, with a defined production method.
- **Fact** — an observed or documented property; distinct from a judgement
  about character or quality.
- **Freshness** — how old the check that produced a label is, reported
  separately from the label itself.
- **Verdict mark** — any single sign (colour, checkmark, score) that aggregates
  multiple facts; prohibited by this specification.

## 4. Scope

### 4.1 In scope

- The canonical label vocabulary and the meaning of each label.
- Rules for reporting freshness, failure states, and unknown states.
- Accessible, non-colour-dependent presentation requirements.
- Disclaimer language separating technical consistency from truth.

### 4.2 Out of scope and deferred

- The mechanisms and tools that compute labels (checker, proofs of control).
- Declaration status semantics (`active`, `revoked`, `disputed`, …).
- Any programme that would issue a certification or assurance credential
  (deferred to independent assurance and certification).

## 5. Specification

### 5.1 Design goals and principles

1. **Facts, not verdicts.** No interface may present a single aggregated trust
   outcome.
2. **Dated evidence.** Every label is meaningless without its check date.
3. **Unknown is honest.** "Not checked" and "check failed" are first-class
   states, never silently folded into "untrustworthy".
4. **Accessibility.** Labels must be understandable as text; colour, icons, and
   numerals are decorations, never carriers of the only meaning.
5. **Non-endorsement.** A complete set of positive labels never means the
   project endorses the signer or that their claims are true.

### 5.2 Normative requirements

1. Tools reporting declaration evidence MUST use exactly the label vocabulary
   defined in section 5.3; custom labels MUST be namespaced and clearly
   separated from canonical ones.
2. Every displayed label MUST carry the date of the check that produced it, or
   explicitly state "never checked".
3. Tools MUST NOT render a single colour, checkmark, badge, or score as the
   summary of multiple labels.
4. "Schema valid" MUST mean only that the declaration parses against the
   versioned portable declaration schema; it MUST NOT imply the claims are true.
5. "Signature valid" MUST mean only that the signature verifies against the
   declared key; it MUST NOT imply the key belongs to whom the declaration says.
6. "Hash matched" MUST mean only that the bound artifact's hash equals the
   declared hash at check time; it MUST NOT imply the artifact is good or
   unchanged forever.
7. Control labels ("mailbox confirmed", "domain controlled", "account
   controlled", "artifact controlled", "key controlled") MUST state the method
   (e.g. challenge type) and the time window the control was demonstrated for.
8. Status labels ("revoked", "disputed") MUST be reported from the declaration
   lifecycle event sequence with the date of the latest lifecycle event.
9. A check that fails MUST be reported as "check failed" with the failure reason
   category, never as a negative trust statement.
10. When a label's evidence has expired or the check cannot be rerun, tools MUST
    mark the label stale with the original check date.
11. Results MUST be presented so that text alone (no colour, no icon) conveys
    the full meaning; where colour is used it MUST be redundant with text.
12. Every results surface MUST display the disclaimer: "Labels report what was
    checked and when. They are not an endorsement, and they do not certify that
    claims are true."
13. Self-declared information MUST be labelled as self-declared at its source
    and MUST never be presented without that qualifier.

### 5.3 Data model

Canonical label vocabulary (each label is an object of the form
`{label, value, checkedAt, method, window?}`):

| Label | Meaning |
|---|---|
| `self-declared` | The party asserted this; no independent check exists. |
| `mailbox-confirmed` | Control of the stated mailbox was demonstrated by a challenge within a stated window. |
| `domain-controlled` | Control of the stated domain was demonstrated by a challenge within a stated window. |
| `account-controlled` | Control of a hosted account was demonstrated by authentication at a stated time. |
| `artifact-controlled` | Control of the artifact location was demonstrated at a stated time. |
| `key-controlled` | Control of the signing key was demonstrated at a stated time. |
| `schema-valid` | The declaration validates against a named version of the portable declaration schema. |
| `signature-valid` | The declaration signature verifies against a stated key. |
| `hash-matched` | The bound artifact's hash matches the declared hash at check time. |
| `spec-version-valid` | The referenced normative specification version exists and is current or archived as expected. |
| `last-checked` | Records the date of the most recent successful check of a given label set. |
| `stale` | A previously produced label whose evidence can no longer be reproduced. |
| `check-failed` | A check ran and failed, with a reason category. |
| `revoked` / `disputed` | Status labels sourced from the declaration lifecycle event sequence. |

### 5.4 Interfaces and behaviours

- Checker results pages, badges, QR targets, and directory rows all render the
  same label set per declaration: status labels first, then control labels, then
  integrity labels, then freshness.
- Each label renders as text with an optional redundant icon; no aggregate
  glyph is permitted.
- APIs expose the label set as structured data; visual aggregation is a client
  decision that must still obey the no-verdict rule.

### 5.5 Lifecycle and operational rules

- Labels are recomputed per check and never stored as permanent properties of a
  party.
- A label's evidence expiry period is defined per method by the checker and
  proofs of control specifications; after expiry the label becomes `stale`.
- When a declaration's status changes, status labels update from the lifecycle
  events; integrity labels are unaffected until rechecked.

## 6. Free floor, red lines, and invariants

Basic self-service checking and the full label vocabulary must remain free,
including for records the checker cannot verify. This specification enforces the
red line against reputation systems: no interface may derive, display, or store
a trust score, rank, or single verdict from labels, and no paid service may
suppress or upgrade a label. The disclaimer requirement keeps technical
consistency separate from truth, protecting the mark from becoming a
certification.

## 7. Relationships to sibling specifications

- [Verification checker](verification-checker-dsh.md) produces the labels this
  specification defines.
- [Proofs of control](proofs-of-control-dsh.md) define the challenge methods
  behind the control labels.
- [Declaration lifecycle](declaration-lifecycle-dsh.md) supplies the `revoked`
  and `disputed` status facts.
- [Portable declaration schema](portable-declaration-schema-dsh.md) defines what
  `schema-valid` validates against.
- [Artifact hashing and binding](artifact-hashing-and-binding-dsh.md) defines
  what `hash-matched` compares.
- [Specification versioning and hashing](specification-versioning-and-hashing-dsh.md)
  defines what `spec-version-valid` checks.
- [Public directory](public-directory-dsh.md) and [Sector and language
  directories](sector-and-language-directories-dsh.md) must render directory
  rows with these labels, never rankings.
- [Independent assurance and certification](independent-assurance-and-certification-dsh.md)
  is the only future path toward anything stronger, and must use a distinct
  credential rather than reusing these labels.

## 8. Resolution of the seed's "before implementation" concerns

- **Exact semantics** — section 5.3 defines each label with a one-line meaning
  and a production method.
- **Freshness** — sections 5.2 items 2 and 10 plus 5.5: every label is dated;
  stale is first-class.
- **Failure and unknown states** — section 5.2 item 9: `check-failed` with
  reason categories, and "never checked" as an honest default.
- **Accessible presentation** — section 5.2 item 11: text carries all meaning;
  colour and icons are redundant only.
- **Disclaimers separating technical consistency from truth** — section 5.2
  item 12: mandatory disclaimer on every results surface.

## 9. Acceptance criteria

1. No shipped interface displays a single aggregated verdict for a declaration.
2. Every displayed label includes its check date or "never checked".
3. A declaration with only self-declared fields is presented with
   `self-declared` on every such field.
4. A failed check renders as `check-failed` plus a reason category, not as a
   negative score.
5. Reading a results page with styles disabled still conveys every label and
   its date.
6. The mandatory disclaimer appears on every results surface, including QR
   targets and directory rows.
7. Status labels update from lifecycle events without requiring a recheck.
8. An expired control label renders as `stale` with its original check date.
9. The API exposes labels as structured data with no aggregate score field.

## 10. Open questions

- The precise default expiry windows per check method (owned jointly with
  proofs of control).
- Whether `spec-version-valid` should distinguish "current" from "archived but
  legitimate" in the default view.
