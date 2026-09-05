# +AI Documentation

The docs tree is a funnel: broad explorations become idea seeds, seeds become
draft specifications, and the specifications are planned, brainstormed, and
turned into one agent request at a time.

```
possibilities/   open-ended explorations of what +AI could become
      ↓
suggestions/     ~95 idea seeds, each expanded into a `-dsh` draft spec
      ↓
planning/        master implementation plan → programmes → brainstorms
      ↓          → requests/ (one agent request per suggestion)
implementation   each request is executed, one file at a time
```

## The three stages

| Stage | Directory | Contents |
|---|---|---|
| 1 · Possibilities | [`possibilities/`](possibilities/) | Three strategic exploration documents (`fable-5-max`, `k3-max`, `sol-5.6-max`). Not specs, not commitments. |
| 2 · Suggestions | [`suggestions/`](suggestions/) | [`README.md`](suggestions/README.md) catalogues 95 idea seeds; each seed has a `*-dsh.md` expanded draft specification. |
| 3 · Planning | [`planning/`](planning/) | [`IMPLEMENTATION-PLAN.md`](planning/IMPLEMENTATION-PLAN.md) (master plan, phases P0–P4, invariants, risks), per-specification [`digest/`](planning/digest/), and [`programmes/`](planning/programmes/) with one mini-plan per programme plus companion folders holding `brainstorm.md` and `requests/` — 95 agent requests, one per suggestion. |

The planning stage's execution layer is described in
[`planning/programmes/README.md`](planning/programmes/README.md): open a
request, make its §1 decisions, hand the file to your agent, check against its
acceptance criteria.

## Supporting documents

- [`analysis/`](analysis/) — prior-art register and multi-language best practice research.
- [`THE-PLAN.md`](THE-PLAN.md) — 90-day campaign strategy ("Name +AI").
- [`core-extensions.md`](core-extensions.md) — precursor architecture roadmap (superseded in detail by the implementation plan).
- [`features.md`](features.md) — variant analysis of features.
- [`versions-done.md`](versions-done.md) / [`versions-not-done.md`](versions-not-done.md) — theme build queue (absorbed by the presentation programme).
- [`TRANSLATIONS.md`](TRANSLATIONS.md), [`DEPLOYMENT.md`](DEPLOYMENT.md), [`GITHUB-PUBLISH-SETUP.md`](GITHUB-PUBLISH-SETUP.md) — operational notes.
- [`DECLARATION-HARD.md`](DECLARATION-HARD.md) (and `-SHORT`/`-SHORTER`) — declaration wording drafts.
- [`ted-talk/`](ted-talk/) — talk script.
