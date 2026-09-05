# Agent request — no-account-declaration-builder: No-Account Declaration Builder

> **Programme:** 03 · Signer Tools and Verification — [`03-signer-tools-and-verification.md`](../../03-signer-tools-and-verification.md)
> **Source:** spec [`no-account-declaration-builder-dsh.md`](../../../../suggestions/no-account-declaration-builder-dsh.md) · seed [`no-account-declaration-builder.md`](../../../../suggestions/no-account-declaration-builder.md)
> **Effort:** M · **Phase:** P1 · **Position:** first tool — it is the spine's reference client and the wizard's engine
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Free-text length and character bounds
- **Question:** What concrete maximum length and character set should bound each free-text field (`responsibleParty`/pseudonym, `organization`, `artifactOrScope` description), balancing safety against legitimate long names? (spec §10 item 1; digest "free-text bounds".)
- **Options:** (a) 120 chars for `responsibleParty`/`organization`, 500 chars for `artifactOrScope`, with control characters and markup stripped on output · (b) 255 chars uniformly for all free text · (c) 80 chars for names, 280 chars for scope · (d) no fixed numbers yet — enforce "bounded" + output sanitisation only.
- **Recommended:** (a) — names/orgs are short display identities while scope needs room for a real description; sanitisation (spec §5.2 item 5) must still strip markup regardless of the numeric bound.
- **Your choice:** ✏️

### D2 — Draft storage mechanism and default retention
- **Question:** How should in-browser drafts be stored, and what is the default retention? (spec §10 item 2; digest "draft storage mechanism".)
- **Options:** (a) localStorage only, user-initiated, auto-cleared after 90 days, always erasable via a visible "clear drafts" control · (b) IndexedDB, retained until explicitly cleared · (c) file handles only (no automatic storage; save/load is always a `.plus-ai.json` file) · (d) localStorage with no automatic expiry (manual clear only).
- **Recommended:** (c) or (a) — the spec's "nothing leaks" local-first principle favours file-handles-only (no residual data at all); if in-browser persistence is wanted, (a) localStorage with a 90-day expiry and an always-visible clear control is the minimum-privacy option.
- **Your choice:** ✏️

### D3 — QR target content
- **Question:** What should the builder's QR target encode — the portable record itself or a link to the rendered declaration? (spec §5.2 item 11 "the record or a link to it"; `certificates-badges-and-qr` owns QR semantics.)
- **Options:** (a) A bare link (the personalised/authored link or status URL), no tracking redirect, consistent with the "QR encodes the bare status URL" rule · (b) the portable record as a compact data payload in the QR · (c) both, user-selectable.
- **Recommended:** (a) — the builder's QR is a pointer, and `certificates-badges-and-qr` (P2) owns the richer export; (a) keeps P1 unblocked and consistent with "pointers, not proofs".
- **Your choice:** ✏️

### D4 — Machine-draft interface-copy reachability
- **Question:** When the builder's interface copy for a language is a machine draft (not yet human-reviewed), how is it surfaced? (multi-language standard §8 Q1; S8/R5 favour explicit opt-in over automatic detection.)
- **Options:** (a) Reachable only via explicit choice — `?lang=` or an explicit language toggle, never auto-selected from browser preference, and shown with a visible "machine draft / not reviewed" notice · (b) reachable via browser preference with a persistent draft notice · (c) not offered at all until reviewed (English fallback only).
- **Recommended:** (a) — consistent with S8 ("explicit choice beats automatic detection") and R5 ("a machine draft MUST NOT be presented as reviewed meaning"); (c) would drop useful coverage, (b) risks silently showing unreviewed copy.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Build the static, `file://`-openable single-page app with no server, no account, and no network calls during composition.
2. Implement the minimum fields as exactly the portable-declaration-schema required fields — responsible party, artifact/scope, AI role, issued date, specification version — auto-filling `schemaVersion` and `specVersion` from the current published versions and generating `declarationId` locally.
3. Offer both binding kinds (byte, scope) per artifact-hashing-and-binding, and render the chosen kind explicitly in the visible text.
4. Make every field optional unless the schema marks it required; prompts and provider disclosure are never required and never suggested as required.
5. Apply the D1 bounds to all free-text fields and sanitise output so no field can inject markup into the visible text or link.
6. Implement the D2 draft-storage mechanism and retention, plus `.plus-ai.json` export/import; distinguish draft from issued (draft labelled "draft" on every surface, no `issued` date or `active` status until the explicit, warned issue action).
7. Implement the single issue action that fixes `issued` and produces the visible text, portable record, personalised (authored) link, machine-readable-assertions metadata block, and the D3 QR target.
8. Render the pre-issue warning that issuing takes responsibility and is not verification; render imported records at their current lifecycle status, never a presumed `active`.
9. Externalise interface strings for localisation and record the declaration's `language` from interface language or an explicit override; UI strings fall back to English per key (R4); language resolves per R12 (`?lang=` → saved preference → browser → English, only explicit choices persisted); the interface must render CJK and RTL scripts correctly (R9/R10/R11); and machine-draft interface translations are surfaced per the D4 decision (never presented as reviewed).
10. **Note for the agent — QR sequencing:** the full certificate/badge/QR export generators arrive with `certificates-badges-and-qr` (P2); do not block P1 on them — the D3 bare-link QR target satisfies this request now.
11. **Note for the agent — round-trip contract:** the emitted record must be byte-identical to the signing-wizard's output and must round-trip through the verification-checker's discovery order (metadata → JSON-LD → `.well-known` → passport URL → raw file).
12. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- Prompts, provider disclosure, and identity never required; no field may inject markup into text or link.
- Issuing ≠ verification — warned before issue, and every surface repeats the declaration-not-verification disclaimer.
- No uploads, no telemetry, no cross-site requests during composition; `file://`-safe, no build step.
- The builder defines no new data structures — it emits the portable-declaration-schema record (draft state is the same fields plus a `draft` marker only).
- The builder must not absorb the wizard, passports, certificates, or AI-BOM editing (keep modules separate and independently shippable).
- Interface copy falls back to English per key, never all-or-nothing (R4); the record's protected set (`+AI`, field/wire keys, URLs, identifiers) is never translated (R2/T0).
- Language resolution is fixed (R12): `?lang=` → saved preference → browser → English; only explicit choices are persisted; English stays the no-JS/crawler default (R13).
- Translations are written in logical order with no bidi control characters; surfaces set `lang`/`dir` per content language, and typography (per-script fallback fonts, CJK/RTL) follows the language (R9/R10/R11).
- A machine-draft interface translation is never presented as reviewed (R5) — surfaced per D4.

## 4. Acceptance criteria
- [ ] A declaration is fully composed and exported from a file://-opened page with no network activity.
- [ ] The minimum valid record contains exactly the schema's required fields and validates offline.
- [ ] Both binding kinds are offered and the chosen kind appears in the visible text.
- [ ] No field requires prompts, provider disclosure, or identity.
- [ ] Free-text fields reject over-length or markup-bearing input safely.
- [ ] The flow is operable end-to-end by keyboard and screen reader.
- [ ] A draft is labelled "draft" and has no `issued` date or active status until issued.
- [ ] The exported `.plus-ai.json`, metadata block, and visible text carry the same record.
- [ ] Imported records render their current lifecycle status, not a presumed `active`.

## 5. Outputs to produce in the repository
- `site/builder.html` — static `file://`-openable SPA (compose → issue → results view with copy/download/link/metadata/QR).

## 6. Read before building
- [`03-signer-tools-and-verification.md`](../../03-signer-tools-and-verification.md) — mini-plan
- [`no-account-declaration-builder-dsh.md`](../../../../suggestions/no-account-declaration-builder-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../../../digest/02-declarations-and-profiles.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order, RTL/CJK)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
