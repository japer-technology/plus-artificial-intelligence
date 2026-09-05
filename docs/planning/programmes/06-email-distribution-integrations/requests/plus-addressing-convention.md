# Agent request — plus-addressing-convention: Plus-Addressing Convention

> **Programme:** 06 · Email, Distribution, and Integrations — [`06-email-distribution-integrations.md`](../../06-email-distribution-integrations.md)
> **Source:** spec [`plus-addressing-convention-dsh.md`](../../../../suggestions/plus-addressing-convention-dsh.md) · seed [`plus-addressing-convention.md`](../../../../suggestions/plus-addressing-convention.md)
> **Effort:** S · **Phase:** P1 · **Position:** P1 — pairs with the signature kit.
> **Status:** awaiting your decisions — fill in §1, then hand this file to your agent.

## 1. Decisions to make before implementation
> Your choices here are the instructions. For each decision keep one option
> (delete the others) or write your own answer at "Your choice:".

### D1 — Reserved scopes (fixed set vs open)
- **Question:** Should the convention recommend a fixed set of reserved scopes (e.g. `ai-code`, `ai-text`, `ai-image`), or leave scopes open? (spec §10 item 1; digest "reserved scopes".)
- **Options:** (a) recommend a fixed reserved set · (b) leave scopes open, defined only as "short, lowercase, non-sensitive" · (c) recommend a short illustrative set while stating scopes remain open.
- **Recommended:** (b) — spec §5.2 item 1 already fixes the rule (`<scope>` short, lowercase, non-sensitive); a reserved set would over-specify and is not required. Give worked examples without reserving them.
- **Your choice:** ✏️

### D2 — Provider support list (maintain vs not)
- **Question:** Should a central list of providers' plus-addressing support be maintained, and by whom? (spec §10 item 2; digest "provider support list".)
- **Options:** (a) maintain a central provider-support table in the repo, community-maintained · (b) do not maintain a list — state provider-dependence generically and point to providers' own documentation · (c) maintain a short, clearly dated, best-effort table with a named maintenance owner.
- **Recommended:** (b) — spec §5.2 item 4 only requires stating provider-dependence generically; a central list is an unbounded drift/maintenance burden (the R16 staleness trap) and the spec does not require it.
- **Your choice:** ✏️

## 2. Instructions for the agent (fixed scope)
> Edit only if you deliberately change scope. Follow your §1 choices.

1. Write the documentation page introducing the convention: `name+ai@domain` for general AI-assisted correspondence and `name+ai-<scope>@domain` for scoped use, keeping the founding example `eric.mourant+ai@japer.technology` wherever the convention is introduced.
2. State plainly what the tag is (visible disclosure and mailbox-filtering convention) and what it is NOT (identity proof, verification, proof of mailbox control, a separate identity, or a security boundary).
3. Document the four limits: provider dependence (delivery not guaranteed; some providers reject or strip `+`), form incompatibility (forms/validators often reject `+`), `%2B` URL encoding (percent-encode `+` as `%2B` where it would decode as a space), and base-address inference (the base `name@domain` is trivially inferable; no anonymity is claimed).
4. Apply the D1 scope rule and document the scoped-tag syntax with the lowercase non-sensitive-scope requirement.
5. Provide mail-filter recipes for the `+ai` tag, clearly marked provider-specific, per the D2 decision.
6. Show the convention as complementary to the visible signature — the signature remains the disclosure a plus-address cannot substitute for.
7. Apply the multi-language constraints below: the founding example and tag syntax are T0 protected, never translated; the surrounding guidance is T2.
8. Self-check the result against §4 acceptance criteria before finishing.

## 3. Constraints (must-nots)
- Never described as identity proof, verification, or proof of mailbox control; never presented as a separate identity or as evidence that the base mailbox's holder sent a message.
- No anonymity claim — the base address is inferable.
- `+` must be percent-encoded as `%2B` in URL query/path where it would decode as a space.
- Filtering is a local convenience and must never be described as a security boundary.
- The founding example `eric.mourant+ai@japer.technology` and the `+ai`/`+ai-<scope>` tag syntax are T0 protected (R2/T0), never translated; the surrounding guidance falls back to English per key (R4) with English governing (R1).

## 4. Acceptance criteria
- [ ] The documentation states the convention is disclosure and filtering, not identity proof.
- [ ] The founding example `eric.mourant+ai@japer.technology` appears wherever the convention is introduced.
- [ ] Scoped-tag syntax and the lowercase non-sensitive-scope rule are specified.
- [ ] The provider-dependence, form-incompatibility, and `%2B`-encoding warnings are all present.
- [ ] The privacy limits and base-address inference are stated without claiming anonymity.
- [ ] No sentence presents a plus-tag as proof of mailbox control or identity.
- [ ] The convention is shown as complementary to, never replacing, the visible signature.

## 5. Outputs to produce in the repository
- `site/plus-addressing.html` — the convention documentation page (founding example, four limits, filter recipes).
- `docs/spec/plus-addressing-convention.md` — the convention spec (syntax, semantics, limits, recipes) the page derives from.

## 6. Read before building
- [`06-email-distribution-integrations.md`](../../06-email-distribution-integrations.md) — mini-plan
- [`plus-addressing-convention-dsh.md`](../../../../suggestions/plus-addressing-convention-dsh.md) — full spec
- [`05-email-distribution-presentation.md`](../../../digest/05-email-distribution-presentation.md) — digest
- [`best-practice-multi-language.md`](../../../../analysis/best-practice-multi-language.md) — multi-language standard (rules R1–R16, tiers T0–T4, resolution order)
- [`IMPLEMENTATION-PLAN.md`](../../../IMPLEMENTATION-PLAN.md) — invariants and phasing
