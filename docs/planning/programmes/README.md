# Programmes — Brainstorms and Agent Requests

This folder turns the implementation plan into executable questions. For each
of the ten programmes in [`IMPLEMENTATION-PLAN.md`](../IMPLEMENTATION-PLAN.md)
there is a companion folder named after its programme file:

```
programmes/
  01-governance-and-content.md          ← mini-plan (unchanged, canonical)
  01-governance-and-content/
    README.md                           ← what this folder holds
    brainstorm.md                       ← every suggestion decomposed into
                                          definitive features + decisions
    requests/                           ← one agent request per suggestion,
      <slug>.md                           one request per file
```

## The funnel

```
docs/possibilities/   open-ended explorations of what could be
        ↓
docs/suggestions/     95 draft specifications (the `-dsh` catalogue)
        ↓
docs/planning/        master plan → programmes → brainstorms → requests
        ↓
implementation        your agent executes each request, one file at a time
```

Nothing above the request layer changes meaning by itself: the programme files
and specifications stay drafts until you implement them through a request.

## How to execute a request

1. Open a request file in `requests/`.
2. Make the decisions in its **§1** — your choices become the instructions
   (delete the options you reject, or write your own answer). Add any extra
   instructions you want.
3. Hand the whole file to your agentic AI as the prompt.
4. Check the result against the **§4 acceptance criteria** in the file.
5. When the request is done, move the file to `done/` in that folder (create
   it if needed) and note the commit that delivered it.

## Conventions

- **One request per suggestion.** Every one of the 95 `*-dsh.md` specs maps to
  exactly one request file, named after the spec slug. Nothing is dropped.
- **§1 is the only part you must edit.** The rest of a request file is the
  fixed scope derived from the spec and its mini-plan — edit it only when you
  deliberately change scope.
- **Decisions are choices, not questions.** Every decision offers concrete
  options and a recommendation where the plan implies one; where the project
  has no recommendation yet, the file says so.
- **The invariants still apply.** Every request inherits the load-bearing
  invariants of [`IMPLEMENTATION-PLAN.md`](../IMPLEMENTATION-PLAN.md) §4
  (free floor, static-first, no trust scores, no silent change, accessibility,
  privacy) — agents may not trade them away for convenience.
- **Findings.** Spec gaps and inconsistencies discovered while brainstorming
  are tracked in [`../FINDINGS.md`](../FINDINGS.md).
- **Multi-language standard.** Any request whose surface carries localised
  text must also read
  [`../../analysis/best-practice-multi-language.md`](../../analysis/best-practice-multi-language.md)
  (rules R1–R16, tiers T0–T4, status vocabulary, resolution order) and treat
  it as the project-wide standard for translations.
