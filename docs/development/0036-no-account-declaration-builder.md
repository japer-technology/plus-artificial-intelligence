# Development task — no-account-declaration-builder: No-Account Declaration Builder

> **Programme:** 03 · Signer Tools and Verification — [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md)
> **Source:** spec [`no-account-declaration-builder-dsh.md`](../suggestions/no-account-declaration-builder-dsh.md) · seed [`no-account-declaration-builder.md`](../suggestions/no-account-declaration-builder.md)
> **Effort:** M · **Phase:** P1 · **Position:** first tool — it is the spine's reference client and the wizard's engine
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Browser-only tool turning answers into a full declaration (visible text, link, portable record, metadata, QR) with no uploads or server.
- **Why now / risk of deferring:** It is the spine's reference client and the wizard's engine, so every later signing surface depends on its record shape — deferring it blocks the whole P1 adoption path. Its "builder creep" risk (absorbing the wizard, passports, certificates, and AI-BOM into one app) must be pinned now, before one module accretes the others.
- **Features to deliver:**
  - A static, `file://`-openable single-page app with zero network during composition; minimum fields exactly the portable-declaration-schema required fields, with `schemaVersion`/`specVersion` auto-filled and `declarationId` generated locally.
  - Both binding kinds (byte, scope) offered and the chosen kind rendered in the visible text; `responsibleParty` accepts a pseudonym.
  - Outputs: visible text, `.plus-ai.json` download, personalised (authored) link, machine-readable-assertions metadata block, and a QR target.
  - Local save/load (import/export `.plus-ai.json` + optional in-browser draft storage); draft vs issued separation (draft labelled "draft", no `issued`/`active` until the explicit, warned issue action); markup-injection sanitisation on every free-text field.
  - Interface strings externalised for localisation; the declaration's `language` recorded from interface language or override.
- **Depends on:** portable-declaration-schema, artifact-hashing-and-binding, machine-readable-assertions, visibility-and-consent, authored-links

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Free-text length and character bounds
- **Question:** What concrete maximum length and character set should bound each free-text field (`responsibleParty`/pseudonym, `organization`, `artifactOrScope` description), balancing safety against legitimate long names? (spec §10 item 1; digest "free-text bounds".)
- **Option (a):** 120 chars for `responsibleParty`/`organization`, 500 chars for `artifactOrScope`, with control characters and markup stripped on output
  - **For:** spec §5.2 item 5 requires documented bounds plus output sanitisation, and names/orgs are short display identities, so 120 is enough for real names without inviting sensitive data into the record.
  - **Against:** scope descriptions for complex artifacts can legitimately exceed 500 chars, and spec §10 says the exact bounds are still to be fixed by accessibility and abuse testing — this is a placeholder, not a measured value.
- **Option (b):** 255 chars uniformly for all free text
  - **For:** One simple, predictable rule for the agent to implement and for users to understand.
  - **Against:** A single flat bound either over-allocates for short names or under-allocates for real scope descriptions; it does not reflect that scope needs more room than a name (spec §5.2 item 5 distinguishes the fields only as "free text").
- **Option (c):** 80 chars for names, 280 chars for scope
  - **For:** Tighter bounds are the safest against abuse and markup injection.
  - **Against:** 80 chars truncates legitimate organisation names and pseudonyms, which spec §5.2 item 6 accepts without any length constraint; 280 chars may cut off a real scope description.
- **Option (d):** no fixed numbers yet — enforce "bounded" + output sanitisation only
  - **For:** Avoids guessing before the accessibility/abuse testing that spec §10 explicitly defers the numbers to.
  - **Against:** Leaves "bounded" unimplementable, so a shippable builder cannot meet the MUST in spec §5.2 item 5.
- **Recommended:** (a) — names/orgs are short display identities while scope needs room for a real description; sanitisation (spec §5.2 item 5) must still strip markup regardless of the numeric bound.
- **Your choice:** ✏️

### D2 — Draft storage mechanism and default retention
- **Question:** How should in-browser drafts be stored, and what is the default retention? (spec §10 item 2; digest "draft storage mechanism".)
- **Option (a):** localStorage only, user-initiated, auto-cleared after 90 days, always erasable via a visible "clear drafts" control
  - **For:** Satisfies the "nothing leaks" local-first principle — spec §5.2 item 9 requires draft storage to be user-initiated, erasable, and never synchronised to a server, and a 90-day expiry bounds any residual data.
  - **Against:** localStorage still leaves residual data on the device until cleared, which the spec's strictest reading (file handles only) avoids entirely.
- **Option (b):** IndexedDB, retained until explicitly cleared
  - **For:** More storage headroom than localStorage for larger draft payloads.
  - **Against:** Indefinite retention until an explicit clear contradicts the "nothing leaks" principle (spec §5.1 item 5), and drafts could outlive the user's intent with no automatic bound.
- **Option (c):** file handles only (no automatic storage; save/load is always a `.plus-ai.json` file)
  - **For:** The strongest privacy option — no residual browser data at all, matching spec §5.2 item 9's import/export and the "nothing leaks" principle.
  - **Against:** Less convenient (no automatic resume across sessions), and it is stricter than the spec, which explicitly permits optional in-browser draft storage.
- **Option (d):** localStorage with no automatic expiry (manual clear only)
  - **For:** Simplest persistence — drafts are always resumable until the user clears them.
  - **Against:** No automatic expiry leaves draft data on the device indefinitely, weakening the "nothing leaks" principle and blurring the draft/issued distinction.
- **Recommended:** (c) or (a) — the spec's "nothing leaks" local-first principle favours file-handles-only (no residual data at all); if in-browser persistence is wanted, (a) localStorage with a 90-day expiry and an always-visible clear control is the minimum-privacy option.
- **Your choice:** ✏️

### D3 — QR target content
- **Question:** What should the builder's QR target encode — the portable record itself or a link to the rendered declaration? (spec §5.2 item 11 "the record or a link to it"; `certificates-badges-and-qr` owns QR semantics.)
- **Option (a):** A bare link (the personalised/authored link or status URL), no tracking redirect, consistent with the "QR encodes the bare status URL" rule
  - **For:** Consistent with the "QR encodes the bare status URL, no tracking redirect" rule (certificates-badges-and-qr spec §5.2 item 2) and with the programme's "pointers, not proofs" framing.
  - **Against:** No offline payload in the QR — a recipient without the link cannot reconstruct anything from the code alone, and richer exports are deferred to P2.
- **Option (b):** the portable record as a compact data payload in the QR
  - **For:** A self-contained offline payload the QR could carry without any network.
  - **Against:** Spec §5.2 item 11 permits "the record or a link", but `certificates-badges-and-qr` owns richer QR semantics, and a data-payload QR could drift from that owner and from the bare-URL rule.
- **Option (c):** both, user-selectable
  - **For:** Offers both the offline payload and the simple pointer for different use cases.
  - **Against:** Adds UI surface and complexity, inviting the "builder creep" risk (programme Risks) and duplicating what `certificates-badges-and-qr` will own.
- **Recommended:** (a) — the builder's QR is a pointer, and `certificates-badges-and-qr` (P2) owns the richer export; (a) keeps P1 unblocked and consistent with "pointers, not proofs".
- **Your choice:** ✏️

### D4 — Machine-draft interface-copy reachability
- **Question:** When the builder's interface copy for a language is a machine draft (not yet human-reviewed), how is it surfaced? (multi-language standard §8 Q1; S8/R5 favour explicit opt-in over automatic detection.)
- **Option (a):** Reachable only via explicit choice — `?lang=` or an explicit language toggle, never auto-selected from browser preference, and shown with a visible "machine draft / not reviewed" notice
  - **For:** Consistent with S8 ("explicit choice beats automatic detection") and R5 ("a machine draft MUST NOT be presented as reviewed meaning") — an explicit toggle plus a visible notice satisfies both.
  - **Against:** Adds a step for users to reach early, unreviewed copy, so fewer users will see machine-draft translations.
- **Option (b):** reachable via browser preference with a persistent draft notice
  - **For:** Automatic coverage from the browser locale reaches users without any extra action.
  - **Against:** Risks silently showing unreviewed copy, which is exactly what R5 forbids — the failure mode the multi-language standard warns against.
- **Option (c):** not offered at all until reviewed (English fallback only)
  - **For:** Guarantees no unreviewed copy is ever presented.
  - **Against:** Drops useful coverage entirely — spec §5.2 item 8 requires interface strings to be externalised for localisation, and English-only leaves non-English users without even draft copy.
- **Recommended:** (a) — consistent with S8 ("explicit choice beats automatic detection") and R5 ("a machine draft MUST NOT be presented as reviewed meaning"); (c) would drop useful coverage, (b) risks silently showing unreviewed copy.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

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
12. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- Prompts, provider disclosure, and identity never required; no field may inject markup into text or link.
- Issuing ≠ verification — warned before issue, and every surface repeats the declaration-not-verification disclaimer.
- No uploads, no telemetry, no cross-site requests during composition; `file://`-safe, no build step.
- The builder defines no new data structures — it emits the portable-declaration-schema record (draft state is the same fields plus a `draft` marker only).
- The builder must not absorb the wizard, passports, certificates, or AI-BOM editing (keep modules separate and independently shippable).
- Interface copy falls back to English per key, never all-or-nothing (R4); the record's protected set (`+AI`, field/wire keys, URLs, identifiers) is never translated (R2/T0).
- Language resolution is fixed (R12): `?lang=` → saved preference → browser → English; only explicit choices are persisted; English stays the no-JS/crawler default (R13).
- Translations are written in logical order with no bidi control characters; surfaces set `lang`/`dir` per content language, and typography (per-script fallback fonts, CJK/RTL) follows the language (R9/R10/R11).
- A machine-draft interface translation is never presented as reviewed (R5) — surfaced per D4.

## 5. Acceptance criteria
- [ ] A declaration is fully composed and exported from a file://-opened page with no network activity.
- [ ] The minimum valid record contains exactly the schema's required fields and validates offline.
- [ ] Both binding kinds are offered and the chosen kind appears in the visible text.
- [ ] No field requires prompts, provider disclosure, or identity.
- [ ] Free-text fields reject over-length or markup-bearing input safely.
- [ ] The flow is operable end-to-end by keyboard and screen reader.
- [ ] A draft is labelled "draft" and has no `issued` date or active status until issued.
- [ ] The exported `.plus-ai.json`, metadata block, and visible text carry the same record.
- [ ] Imported records render their current lifecycle status, not a presumed `active`.

## 6. Outputs to produce in the repository
- `site/builder.html` — static `file://`-openable SPA (compose → issue → results view with copy/download/link/metadata/QR).

## 7. Read before building
- [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md) — mini-plan
- [`no-account-declaration-builder-dsh.md`](../suggestions/no-account-declaration-builder-dsh.md) — full spec
- [`02-declarations-and-profiles.md`](../planning/digest/02-declarations-and-profiles.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order, RTL/CJK)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
