# Development task — plus-addressing-convention: Plus-Addressing Convention

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md)
> **Source:** spec [`plus-addressing-convention-dsh.md`](../suggestions/plus-addressing-convention-dsh.md) · seed [`plus-addressing-convention.md`](../suggestions/plus-addressing-convention.md)
> **Effort:** S · **Phase:** P1 · **Position:** P1 — pairs with the signature kit.
> **Status:** awaiting your decisions — fill in §2, then hand this file to your agent.

## 1. Task details
- **Goal:** Document the optional `name+ai@domain` / `name+ai-<scope>@domain` disclosure and mailbox-filtering convention and its limits.
- **Why now / risk of deferring:** It pairs with the signature kit in the P1 launch pair; without it the optional disclosure address has no documented limits and risks being laundered into identity proof — the exact drift this convention exists to stop.
- **Features to deliver:**
  - Documentation page introducing `name+ai@domain` and `name+ai-<scope>@domain`, keeping the founding example `eric.mourant+ai@japer.technology` wherever the convention is introduced.
  - The four limits stated plainly: provider dependence, form incompatibility, `%2B` URL encoding, base-address inference (no anonymity).
  - What the tag is (visible disclosure + mailbox-filtering convenience) and is NOT (identity proof, mailbox-control proof, a separate identity, a security boundary).
  - Mail-filter recipes per provider, clearly marked provider-specific; scoped-tag syntax with the lowercase non-sensitive-scope rule.
- **Depends on:** proofs-of-control, email-signature-kit, privacy-and-data-minimisation

## 2. Decisions to make
> Weigh the For/Against lines, keep one option per decision (delete the
> others) or write your own answer at "Your choice:".

### D1 — Reserved scopes (fixed set vs open)
- **Question:** Should the convention recommend a fixed set of reserved scopes (e.g. `ai-code`, `ai-text`, `ai-image`), or leave scopes open? (spec §10 item 1; digest "reserved scopes".)
- **Option (a):** recommend a fixed reserved set
  - **For:** Gives users a predictable, documented vocabulary of scopes to choose from.
  - **Against:** Over-specifies beyond the spec, which fixes only the syntactic rule that `<scope>` is short, lowercase, and non-sensitive (spec §5.2 item 1), and it would imply a registration authority the cheap, unregistered convention explicitly lacks (spec §5.1 principle 2).
- **Option (b):** leave scopes open, defined only as "short, lowercase, non-sensitive"
  - **For:** Matches the spec's only rule (spec §5.2 item 1) and preserves the convention's cheap, registration-free nature (spec §5.1 principle 2; §6).
  - **Against:** Without worked examples, users may not know how to apply the rule; the documentation must supply illustrative examples without reserving them.
- **Option (c):** recommend a short illustrative set while stating scopes remain open
  - **For:** Gives concrete examples to guide users while keeping scopes open.
  - **Against:** Risks the illustrative examples being read as a reserved vocabulary, which the spec does not establish (spec §5.2 item 1 fixes only the syntactic rule).
- **Recommended:** (b) — spec §5.2 item 1 already fixes the rule (`<scope>` short, lowercase, non-sensitive); a reserved set would over-specify and is not required. Give worked examples without reserving them.
- **Your choice:** ✏️

### D2 — Provider support list (maintain vs not)
- **Question:** Should a central list of providers' plus-addressing support be maintained, and by whom? (spec §10 item 2; digest "provider support list".)
- **Option (a):** maintain a central provider-support table in the repo, community-maintained
  - **For:** Gives users a quick one-stop reference for which providers support the tag.
  - **Against:** Provider behaviour changes constantly, so a community table without a named owner is an unbounded drift/maintenance burden; the spec only requires stating provider-dependence generically (spec §5.2 item 4).
- **Option (b):** do not maintain a list — state provider-dependence generically and point to providers' own documentation
  - **For:** Delivers exactly what spec §5.2 item 4 requires — support varies, delivery is not guaranteed — without incurring maintenance the spec does not ask for.
  - **Against:** Users lose a consolidated reference and must consult each provider's own documentation individually.
- **Option (c):** maintain a short, clearly dated, best-effort table with a named maintenance owner
  - **For:** Offers convenience while bounding staleness through dating and a named owner.
  - **Against:** Still adds a maintenance surface the spec does not require, and a named owner is a governance commitment beyond this S-effort documentation (spec §5.2 item 4).
- **Recommended:** (b) — spec §5.2 item 4 only requires stating provider-dependence generically; a central list is an unbounded drift/maintenance burden (the R16 staleness trap) and the spec does not require it.
- **Your choice:** ✏️

## 3. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §2 choices.

1. Write the documentation page introducing the convention: `name+ai@domain` for general AI-assisted correspondence and `name+ai-<scope>@domain` for scoped use, keeping the founding example `eric.mourant+ai@japer.technology` wherever the convention is introduced.
2. State plainly what the tag is (visible disclosure and mailbox-filtering convention) and what it is NOT (identity proof, verification, proof of mailbox control, a separate identity, or a security boundary).
3. Document the four limits: provider dependence (delivery not guaranteed; some providers reject or strip `+`), form incompatibility (forms/validators often reject `+`), `%2B` URL encoding (percent-encode `+` as `%2B` where it would decode as a space), and base-address inference (the base `name@domain` is trivially inferable; no anonymity is claimed).
4. Apply the D1 scope rule and document the scoped-tag syntax with the lowercase non-sensitive-scope requirement.
5. Provide mail-filter recipes for the `+ai` tag, clearly marked provider-specific, per the D2 decision.
6. Show the convention as complementary to the visible signature — the signature remains the disclosure a plus-address cannot substitute for.
7. Apply the multi-language constraints below: the founding example and tag syntax are T0 protected, never translated; the surrounding guidance is T2.
8. Self-check the result against §5 acceptance criteria before finishing.

## 4. Constraints (must-nots)
- Never described as identity proof, verification, or proof of mailbox control; never presented as a separate identity or as evidence that the base mailbox's holder sent a message.
- No anonymity claim — the base address is inferable.
- `+` must be percent-encoded as `%2B` in URL query/path where it would decode as a space.
- Filtering is a local convenience and must never be described as a security boundary.
- The founding example `eric.mourant+ai@japer.technology` and the `+ai`/`+ai-<scope>` tag syntax are T0 protected (R2/T0), never translated; the surrounding guidance falls back to English per key (R4) with English governing (R1).

## 5. Acceptance criteria
- [ ] The documentation states the convention is disclosure and filtering, not identity proof.
- [ ] The founding example `eric.mourant+ai@japer.technology` appears wherever the convention is introduced.
- [ ] Scoped-tag syntax and the lowercase non-sensitive-scope rule are specified.
- [ ] The provider-dependence, form-incompatibility, and `%2B`-encoding warnings are all present.
- [ ] The privacy limits and base-address inference are stated without claiming anonymity.
- [ ] No sentence presents a plus-tag as proof of mailbox control or identity.
- [ ] The convention is shown as complementary to, never replacing, the visible signature.

## 6. Outputs to produce in the repository
- `site/plus-addressing.html` — the convention documentation page (founding example, four limits, filter recipes).
- `docs/spec/plus-addressing-convention.md` — the convention spec (syntax, semantics, limits, recipes) the page derives from.

## 7. Read before building
- [`06-email-distribution-integrations.md`](../planning/programmes/06-email-distribution-integrations.md) — mini-plan
- [`plus-addressing-convention-dsh.md`](../suggestions/plus-addressing-convention-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../planning/digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order)
- [`IMPLEMENTATION-PLAN.md`](../planning/IMPLEMENTATION-PLAN.md) — invariants and phasing
