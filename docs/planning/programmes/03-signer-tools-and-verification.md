# Programme 3 — Signer Tools and Verification

> The free-floor tool suite: everything a signer can use with no account, and
> the checker that makes declarations inspectable. Client-side first, offline
> first; hosted pieces are limited to the checker's fetch path, which stays
> free. This programme converts the trust spine into something people actually
> use.

- **Members (8):** no-account-declaration-builder, signing-wizard,
  authored-links, verification-checker, artifact-passports,
  certificates-badges-and-qr, ai-practice-register, artifact-ai-bill-of-materials
- **Effort:** 2 × S, 5 × M, 1 × L (verification-checker)
- **Prerequisites:** Programme 2 spine (schema, lifecycle, binding, labels,
  assertions, proofs-of-control); Programme 1 public-usage-guidelines and
  free-floor-covenant (the pages these tools link to)
- **Phase:** P1 → P2

## Mini-plans

### no-account-declaration-builder — No-Account Declaration Builder
- **Goal:** Browser-only tool turning answers into a full declaration (visible text, link, portable record, metadata, QR) with no uploads or server.
- **Build:** static single-page app, file://-openable, zero network during composition; outputs `.plus-ai.json`, personalised link, metadata block, QR target; import/export + optional local draft storage (draft-labelled).
- **Needs:** portable-declaration-schema, artifact-hashing-and-binding (both binding kinds), machine-readable-assertions (metadata block), visibility-and-consent (visibility choice), authored-links (link output).
- **Must-nots:** prompts, provider disclosure, and identity never required; no field may inject markup; issuing ≠ verification (warned before issue).
- **Done when:** composes/exports offline; both binding kinds; keyboard/screen-reader operable; draft vs issued distinct.
- **Effort:** M. **Order:** first tool — it is the spine's reference client and the wizard's engine.

### signing-wizard — Signing Wizard
- **Goal:** Guided journey from the six-word meaning → responsible party → artifact/scope → optional AI role → exactly one declaration.
- **Build:** static step UI with back-nav and local draft save/resume; per-field plain-language help (what it asserts / does not assert); hands off to the builder's results view producing the identical record.
- **Needs:** no-account-declaration-builder, claim-types, evidence-labels-not-trust-scores (what will be checkable), declaration-lifecycle.
- **Must-nots:** no identity documents or proof-of-control requests; no nudging/pre-filling optional disclosure; no option asserting AI-created-everything/no-human-review.
- **Done when:** shortest path no-account; warning precedes fields; pseudonym accepted; one declaration exported.
- **Effort:** M. **Order:** immediately after the builder — it is the builder's guided front-end.

### authored-links — Authored Links
- **Goal:** Shareable URL rendering a personalised +AI explanation (name/org/lang/theme/font/colour) with no account, upload, or declaration.
- **Build:** static compose form building a query-string link + copy button; render logic with closed parameter set and allowlisted values (unknown/CSS values ignored); visible "self-authored and unverified" label; sensitive-data warning.
- **Needs:** url-semantics-and-canonicalization, theme-engine-and-packs (theme values — soft dependency: themes today are pages; engine later), free-floor-covenant.
- **Must-nots:** no parameter may alter/abridge the normative meaning; no cookies/tracking/storing of links; never styled as verified or presented as a declaration.
- **Done when:** meaning verbatim under any params; label visible; unsafe params rejected; works JS-disabled.
- **Effort:** S. **Order:** early P1 — it reuses the existing `?name=&company=` personalisation mechanics and ships fast.

### verification-checker — Verification Checker
- **Goal:** Free tool that inspects a declaration and reports what it found as dated evidence labels — offline and hosted, never an endorsement engine.
- **Build:** CLI + web UI + read-only API; paste/file/URL/QR input; label-table output; offline checker with bundled schemas (file://, zero build); hosted fetch policy (SSRF guard, rate-limit, size/time caps).
- **Needs:** evidence-labels-not-trust-scores, machine-readable-assertions, portable-declaration-schema, specification-versioning-and-hashing, proofs-of-control, artifact-hashing-and-binding, declaration-lifecycle, security-and-abuse-controls (SSRF/rate-limit rules).
- **Must-nots:** no scores/ranks/verdicts; unknown states labelled `self-declared`/`not-checked`, never omitted; no caching/reselling fetched content beyond the check.
- **Done when:** offline check complete; every label dated; SSRF blocked; API read-only + rate-limited.
- **Effort:** L. **Order:** the programme's capstone — starts after assertions + proofs-of-control; offline CLI first, hosted web/API second.

### artifact-passports — Artifact Passports
- **Goal:** Stable, addressable resource presenting one declaration for one scope: status timeline, bindings, evidence, derivative links.
- **Build:** static passport page template (HTML + JSON bundle); builder export of a self-hosted passport bundle (no upload); status timeline renderer; `derivesFrom`/`derivedBy` links.
- **Needs:** portable-declaration-schema, declaration-lifecycle (timeline), artifact-hashing-and-binding, verification-checker (consumes the same URL), url-semantics-and-canonicalization (stable ID URL).
- **Must-nots:** no implying a derivative inherits the upstream signer's responsibility; no rank/score/verdict; dynamic artifacts show a labelled point-in-time snapshot.
- **Done when:** stable ID URL; renders from static files; builder emits bundle; checker consumes the URL identically.
- **Effort:** M. **Order:** after the checker's input conventions are fixed (same discovery path).

### certificates-badges-and-qr — Certificates, Badges, and QR
- **Goal:** Exportable visible references to a live declaration — pointers, not proofs.
- **Build:** certificate/badge/QR generators in the builder (offline); identifier, status URL, issue date, staleness statement on every export; monochrome-safe badges with text fallback; QR encodes the bare URL (no tracking redirect).
- **Needs:** artifact-passports (the status URL), portable-declaration-schema, licensing-and-mark-policy (export branding rules), multi-format-distribution-kit (format variants).
- **Must-nots:** no claim of validity/certification/endorsement; no DRM/blockchain/biometric copy protection; superseded/revoked status never silently shown as current.
- **Done when:** exports carry identifier/URL/date/staleness; builder generates offline; QR has no tracking redirect.
- **Effort:** S. **Order:** after passports (they link to them); quick win.

### ai-practice-register — AI Practice Register
- **Goal:** Voluntary, portable JSON register of a party's standing AI capabilities, tools, purposes, data rules, review practices — separate from any artifact declaration.
- **Build:** JSON Schema for `.plus-ai-practices.json` + offline validator; public render labelling every entry `self-declared`; versioned assertions; default `local` visibility.
- **Needs:** claim-types, tool-taxonomy, portable-declaration-schema (compatible extension patterns), evidence-labels-not-trust-scores (rendering), visibility-and-consent.
- **Must-nots:** no prompts/transcripts/provider credentials stored or required; no field functioning as reputation/rank; higher visibility requires explicit separate consent.
- **Done when:** id+party-only record validates offline; prompts rejected; public entries labelled self-declared; prior versions readable.
- **Effort:** M. **Order:** P2 — after the spine; it shares the builder's JSON tooling but targets organisations.

### artifact-ai-bill-of-materials — Artifact AI Bill of Materials (AI-BOM)
- **Goal:** Focused list of tools/capabilities/review practices that materially contributed to one artifact, attached to its declaration.
- **Build:** AI-BOM schema (`used-on-artifact` + `aiRole` per entry; confidential toggle); builder entry UI with confidential flag and "undisclosed" rendering; table renderer on declaration/passport pages with `self-declared` labels.
- **Needs:** claim-types, tool-taxonomy, portable-declaration-schema, artifact-hashing-and-binding (the artifact the BOM describes), artifact-passports (render location).
- **Must-nots:** no prompts/logs/transcript content; never auto-populated from a party's practice register; derivatives carry their own AI-BOM.
- **Done when:** one artifact per BOM; empty-with-`aiRole` valid; confidential renders "undisclosed"; version never guessed.
- **Effort:** M. **Order:** with the practice register; both are P2 schema+UI pairs.

## Sequencing

1. **P1:** authored-links → no-account-declaration-builder → signing-wizard (the adoption path; all client-side).
2. **P1→P2:** verification-checker (offline CLI first, then web, then read-only API).
3. **P2:** artifact-passports → certificates-badges-and-qr; ai-practice-register + artifact-ai-bill-of-materials (schema first, UI second).
4. Cross-checks: builder/wizard outputs must round-trip through the checker; passports must be checker-consumable (same discovery order as machine-readable-assertions).

## Risks

- **Checker scope:** it is the only L here and its hosted half needs security review before public exposure (SSRF). Build offline-first so the L is staged, not monolithic.
- **Builder creep:** the builder tempts absorbing wizard, passports, certificates, and BOM editing into one app; keep modules separate so each stays file://-safe and independently shippable.
- **Issuing ≠ verification framing:** every tool surface must repeat the "declaration, not verification" disclaimer or the evidence-labels contract is undermined at the exact moment users first meet it.
