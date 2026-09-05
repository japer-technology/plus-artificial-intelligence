# Development task — certificates-badges-and-qr: Certificates, Badges, and QR

> **Programme:** 03 · Signer Tools and Verification — [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md)
> **Source:** spec [`certificates-badges-and-qr-dsh.md`](../suggestions/certificates-badges-and-qr-dsh.md) · seed [`certificates-badges-and-qr.md`](../suggestions/certificates-badges-and-qr.md)
> **Effort:** S · **Phase:** P2 · **Position:** after passports (they link to them); quick win
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Exportable visible references to a live declaration — pointers, not proofs.
- **Why now / risk of deferring:** A quick win after passports, since every export points to the passport's status URL. Its risk is that these are the pointers that leave the mark's hands: if the staleness statement is ever dropped or softened, static copies silently go stale, so it must stay in the acceptance criteria, not just the copy.
- **Features to deliver:**
  - Offline export generators (certificate, badge, QR) inside the builder; every export carries the declaration identifier, stable status-page URL, export issue date, and the staleness statement ("This export is a reference to a live declaration. Its status may have changed — check the address.").
  - QR encodes the bare status URL (no tracking redirect), scannable at a documented minimum size, URL repeated in visible text; monochrome-safe badges with screen-reader text fallback and no animation/tracking/fetch; printable certificate (A4 + letter).
  - Superseded → "superseded" with successor; revoked → "revoked"; never silent presentation of old status as current; no validity/certification/endorsement claims; honest copy-resistance only (watermarks/serial numbers as provenance aids, never DRM/blockchain/biometrics).
- **Depends on:** artifact-passports, portable-declaration-schema, licensing-and-mark-policy, multi-format-distribution-kit

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — QR second encoding of the declaration identifier
- **Question:** Should QR exports include the declaration identifier as a second encoding (for offline checker use), and in what format? (spec §10; digest "QR second encoding of the identifier".)
- **Option (a):** No — the QR encodes only the bare status URL (single encoding)
  - **For:** Spec §5.2 item 2 requires the QR to encode the bare status URL and be accompanied by the same URL in visible text; the checker reads the URL, file, or QR target, and the identifier is already in the visible text (spec §5.2 item 1).
  - **Against:** No offline identifier payload inside the QR itself (the reader must resolve the URL to get the identifier).
- **Option (b):** yes — a second encoding of the `declarationId` in a structured, documented format
  - **For:** An offline checker could read the identifier directly from the QR without resolving the URL.
  - **Against:** Adds scanner-format complexity for marginal benefit, and spec §5.2 item 2 mandates the bare-URL encoding — a second encoding risks ambiguity with that requirement.
- **Option (c):** yes, but only as a short prefix/URI alongside the URL, not a full second record
  - **For:** A lightweight compromise that keeps the URL primary while surfacing the identifier.
  - **Against:** Still adds format complexity for marginal offline benefit, since the identifier is already present in the visible text (spec §5.2 item 1).
- **Recommended:** (a) — spec §5.2 item 2 requires the QR to encode the bare status URL and be accompanied by the same URL in visible text; a second encoding adds scanner-format complexity for marginal offline benefit (the checker reads the URL, file, or QR target, and the identifier is already in the visible text).
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Build the certificate, badge, and QR generators as offline exports inside the builder (no upload, no account); optional hosted generation must produce the same formats.
2. Put the mandatory honesty content on every export: the declaration identifier, the stable status-page URL, the export issue date, and the staleness statement ("This export is a reference to a live declaration. Its status may have changed — check the address.").
3. Implement the QR per the D1 decision: encode the bare status URL (no tracking redirect), scannable at a documented minimum size, with the same URL in visible text.
4. Make badges render at small sizes (favicon to banner) in colour and monochrome, with screen-reader text fallback, no animation/tracking/fetch; make certificates printable monochrome-safe on A4 and letter.
5. Render superseded/revoked status honestly — "superseded" with the successor reference, "revoked" — never silently showing old status as current; carry `statusAtIssue` in the export data model.
6. Apply honest copy-resistance only: watermarks/serial numbers as visible provenance aids, never DRM/blockchain/biometrics; no claim of validity/certification/endorsement (wording per public-usage-guidelines and licensing-and-mark-policy).
7. Ensure the core information is readable without scripts; exports are never edited after generation (a stale export is replaced by a newly generated one).
8. **Note for the agent — round-trip:** QR targets must be acceptable to the verification-checker as a declaration reference; the status page remains the single source of truth and exports cache nothing about status beyond `statusAtIssue`.
9. **Note for the agent — badge-text localisation:** badge screen-reader text and any export chrome falls back to English per key (R4) and resolves language per R12; render badge text in the target script with RTL/CJK-correct typography (R9/R10/R11); the declaration identifier, status URL, and the mandatory staleness statement are protected/normative content and are never translated or reworded (R2/T0/T1).
10. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- No claim of validity, certification, or endorsement.
- No DRM/blockchain/biometric copy protection.
- Superseded/revoked status never silently shown as current.
- QR must have no tracking redirect; the status URL must appear in visible text.
- Exports are pointers, not proofs — generation for genuine use stays free and offline.
- Badge screen-reader text and export chrome fall back to English per key, never all-or-nothing (R4); the declaration identifier, status URL, and mandatory staleness statement are protected/normative content and are never translated or reworded (R2/T0/T1).
- Language resolution is fixed (R12): `?lang=` → saved preference → browser → English; only explicit choices are persisted; English stays the no-JS/crawler default (R13).
- Badge/certificate text is set with correct `lang`/`dir` and per-script typography, rendered CJK/RTL-safe (R9/R10/R11).

## 5. Acceptance criteria
- [ ] Every export carries identifier, status URL, issue date, and staleness statement.
- [ ] A QR encodes the bare status URL and the URL appears in visible text.
- [ ] A badge renders in monochrome with screen-reader text and no scripts.
- [ ] A certificate prints monochrome-safe on A4 and letter.
- [ ] No export claims validity, certification, or endorsement.
- [ ] An export of a superseded declaration states "superseded" with the successor.
- [ ] The no-account builder generates all export types offline.
- [ ] No export uses DRM or biometric copy protection.

## 6. Outputs to produce in the repository
- `docs/spec/certificates-badges-and-qr.md` — export format spec + honesty rules (mandatory content, staleness statement, superseded/revoked rendering, QR/badge/certificate requirements).
- `site/assets/exports.js` — offline export generators (certificate/badge/QR) consumed by the builder.

## 7. Read before building
- [`03-signer-tools-and-verification.md`](../planning/programmes/03-signer-tools-and-verification.md) — mini-plan
- [`certificates-badges-and-qr-dsh.md`](../suggestions/certificates-badges-and-qr-dsh.md) — full spec
- [`04-artifacts-and-trust.md`](../planning/digest/04-artifacts-and-trust.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order, RTL/CJK)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
