# Development task — signing-wizard: Signing Wizard

> **Programme:** 03 · Signer Tools and Verification — [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md)
> **Source:** spec [`signing-wizard-dsh.md`](../suggestions/signing-wizard-dsh.md) · seed [`signing-wizard.md`](../suggestions/signing-wizard.md)
> **Effort:** M · **Phase:** P1 · **Position:** immediately after the builder — it is the builder's guided front-end
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Guided journey from the six-word meaning → responsible party → artifact/scope → optional AI role → exactly one declaration.
- **Why now / risk of deferring:** It is the builder's guided front-end and the surface where a first-time signer first meets the mark, so its wording is where the "declaration ≠ verification" contract is won or lost (programme risk "issuing ≠ verification framing"). Deferring it leaves the builder's reference client with no guided path and stalls the adoption sequence.
- **Features to deliver:**
  - A static guided step UI opening on the six-word meaning ("AI helped. I take responsibility.") plus the responsibility-not-verification warning before any field.
  - Shortest valid path: confirm understanding → name responsible party (pseudonym allowed, no documents) → choose artifact/scope (both binding kinds with a strength explanation) → issue, with no account, identity, or payment.
  - Optional AI-role step drawn from claim-types vocabulary, never offering "AI created everything" / "no human review"; optional fields visibly labelled and never nudged/pre-filled.
  - Per-field plain-language help (what it asserts / does not assert); local draft save/resume; final step hands off to the builder's results view producing exactly one identical record.
- **Depends on:** no-account-declaration-builder, claim-types, evidence-labels-not-trust-scores, declaration-lifecycle

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Recap step
- **Question:** Should the wizard add a "review your declaration" recap step before issue, and how much should it show? (spec §10 item 1; digest "recap step".)
- **Option (a):** Yes — a single recap screen listing every field about to be asserted, with edit links, immediately before the issue action
  - **For:** "Understand before asserting" (spec §5.1 item 1) is the wizard's whole purpose, and the recap is the one place the signer sees every asserted field together before issue.
  - **Against:** It adds a screen to the shortest path, which spec §5.2 item 2 defines as exactly four steps (confirm → responsible party → artifact/scope → issue).
- **Option (b):** No — the final step already presents the visible text; an extra screen adds friction to the shortest path
  - **For:** Keeps the shortest path at its minimal four steps (spec §5.2 item 2), and spec §5.2 item 9 already requires the final step to present the visible text.
  - **Against:** Drops the one place the signer reviews every field together at once, weakening "understand before asserting" (spec §5.1 item 1).
- **Option (c):** Yes, but only on the optional (non-shortest) paths, never on the shortest path
  - **For:** Keeps the shortest path minimal while still giving expanded journeys a review step.
  - **Against:** Signers on the shortest path — the most common path — lose the recap entirely, which is where a single summary is most valuable; it also creates inconsistent UX between paths.
- **Recommended:** (a) — "understand before asserting" (spec §5.1) is the wizard's whole purpose, and the recap is where the signer sees everything together once; it sits one tap from issue, so it does not gate the free path.
- **Your choice:** ✏️

### D2 — Usability-test criteria
- **Question:** What is the minimum usability-test sample and pass bar per supported language? (spec §10 item 2; digest "usability-test criteria".)
- **Option (a):** 5 participants per language; pass = all complete the shortest path unassisted and none report a field as coercive
  - **For:** Five participants is the classic lightweight usability floor and matches "tested, not merely translated" (spec §5.1 item 5); results are recorded per spec §5.2 item 10, which also requires failing languages to be marked.
  - **Against:** A sample of five is small and may miss edge cases that only appear in some languages or populations.
- **Option (b):** 3 participants per language; pass = shortest path completes with no blocker
  - **For:** Cheaper and faster to run per language.
  - **Against:** Three is below the lightweight usability floor and risks shipping a language as "fully supported" with too little evidence, contrary to spec §5.2 item 10's tested-per-language requirement.
- **Option (c):** 8 participants per language with a scripted success-rate threshold (90% or higher complete)
  - **For:** A stronger statistical signal with a concrete completion threshold.
  - **Against:** More cost and effort per language, and a scripted percentage threshold can be gamed and adds process beyond what spec §5.2 item 10 requires.
- **Recommended:** (a) — 5 participants is the classic lightweight usability floor and matches "tested, not merely translated"; record results per spec §5.2 item 10 and mark failing languages rather than shipping them as fully supported.
- **Your choice:** ✏️

### D3 — Machine-draft interface-copy reachability
- **Question:** When the wizard's interface copy (step labels, help text) for a language is a machine draft (not yet human-reviewed), how is it surfaced? (multi-language standard §8 Q1; matches the builder's D4.)
- **Option (a):** Reachable only via explicit choice — `?lang=` or an explicit language toggle, never auto-selected from browser preference, and shown with a visible "machine draft / not reviewed" notice
  - **For:** Consistent with S8 ("explicit choice beats automatic detection") and R5 ("a machine draft MUST NOT be presented as reviewed meaning") — an explicit toggle plus a visible notice satisfies both.
  - **Against:** Adds a step for users to reach early, unreviewed copy, so fewer users will see machine-draft translations.
- **Option (b):** reachable via browser preference with a persistent draft notice
  - **For:** Automatic coverage from the browser locale reaches users without any extra action.
  - **Against:** Risks silently showing unreviewed copy, which is exactly what R5 forbids — the failure mode the multi-language standard warns against.
- **Option (c):** not offered at all until reviewed (English fallback only)
  - **For:** Guarantees no unreviewed copy is ever presented.
  - **Against:** Drops useful coverage entirely — spec §5.1 item 5 requires the journey to be tested across languages, and English-only leaves non-English users without even draft copy.
- **Recommended:** (a) — consistent with S8 ("explicit choice beats automatic detection") and R5 ("a machine draft MUST NOT be presented as reviewed meaning"); (c) would drop useful coverage, (b) risks silently showing unreviewed copy.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Build the static guided step UI opening on the six-word meaning ("AI helped. I take responsibility.") plus a plain-language statement that issuing means taking responsibility, not being verified — before any field.
2. Implement the shortest valid path — (a) confirm understanding, (b) name responsible party (pseudonym allowed), (c) choose artifact/scope, (d) issue — completing with no account, identity, or payment.
3. On the responsible-party step, state the named person takes responsibility and may be a pseudonym; ask for no identity documents, proof of control, or legal name.
4. On the artifact/scope step, offer byte binding and scope binding per artifact-hashing-and-binding, with an explanation of the strength difference.
5. Make the AI-role step optional, drawn from the claim-types vocabulary; never offer "AI created everything" or "no human review" options.
6. Label every optional field "optional"; never pre-fill, nudge, or re-order steps to encourage disclosure of prompts, providers, or identity.
7. Add per-field plain-language help stating what the field asserts and does not assert (a declaration is a claim, not verification), per evidence-labels-not-trust-scores.
8. Support local draft save/resume (labelled draft, never presented as issued); implement the D1 recap step if chosen.
9. Final step hands off to the builder's results view producing exactly one identical declaration, with the standing responsibility-not-verification warning.
10. Usability-test each supported language per the D2 criteria; record results and mark failing languages as not fully supported.
11. **Note for the agent — interface-copy localisation:** wizard interface copy (step labels, help text) falls back to English per key (R4), resolves language per R12 (`?lang=` → saved preference → browser → English, only explicit choices persisted), renders CJK and RTL scripts correctly (R9/R10/R11), and surfaces machine-draft translations per the D3 decision (never as reviewed).
12. **Note for the agent — round-trip contract:** the wizard's exported record must be byte-identical to the no-account-declaration-builder's output and must round-trip through the verification-checker. The wizard must not silently edit an issued declaration — route changes to supersession/revocation per declaration-lifecycle.
13. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- No identity documents or proof-of-control requests; no legal name required; pseudonym accepted.
- No nudging/pre-filling optional disclosure; every optional field visibly labelled optional.
- No option asserting AI-created-everything or no-human-review.
- Shortest path never requires an account, identity, or payment.
- The wizard owns journey and wording only — it must not redefine the record format, field semantics, or export mechanics.
- Interface copy (step labels, help text) falls back to English per key, never all-or-nothing (R4); the protected set (`+AI`, field/wire keys, URLs, identifiers) is never translated (R2/T0).
- Language resolution is fixed (R12): `?lang=` → saved preference → browser → English; only explicit choices are persisted; English stays the no-JS/crawler default (R13).
- Translations are written in logical order with no bidi control characters; surfaces set `lang`/`dir` per content language, and typography (per-script fallback fonts, CJK/RTL) follows the language (R9/R10/R11).
- A machine-draft interface translation is never presented as reviewed (R5) — surfaced per D3.

## 5. Acceptance criteria
- [ ] A visitor completes the shortest path with no account, identity, or payment.
- [ ] The six-word meaning and responsibility warning appear before any field.
- [ ] The responsible-party step accepts a pseudonym and asks for no documents.
- [ ] Both binding kinds are offered with a strength explanation.
- [ ] No field is presented as required unless the schema requires it, and prompts are never required.
- [ ] Each field's help states what it asserts and that a declaration is not verification.
- [ ] A draft can be saved and resumed locally and is always labelled draft.
- [ ] Exactly one declaration is exported, identical to the builder's output.
- [ ] Each supported language has a recorded usability-test result.

## 6. Outputs to produce in the repository
- `site/wizard.html` — static guided step UI (hands off to `site/builder.html`'s results view).

## 7. Read before building
- [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md) — mini-plan
- [`signing-wizard-dsh.md`](../suggestions/signing-wizard-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../planning/digest/02-declarations-and-profiles.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order, RTL/CJK)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
