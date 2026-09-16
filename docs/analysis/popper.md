# The +AI Project Through Popper's *Logic of Scientific Discovery*

> **Status:** Critical analysis, not part of the canonical `+AI` meaning.
> **Scope:** The canonical declaration, the implemented website and checks, and
> the proposed research and trust layers as they exist in this repository.
> **Method:** Popper's ideas are used as tests of the project's claims, not as
> an assertion that Popper would have endorsed the project.

## 1. What kind of claim is `+AI`?

Popper's criterion of falsifiability separates empirical theories from claims
that cannot collide with observation. Applying it to this repository requires
one prior distinction: `+AI` is not one theory.

It is four things at once:

| Layer | Example | Appropriate test |
| --- | --- | --- |
| Convention | `+AI` means “AI helped. I take responsibility.” | Does every conforming presentation preserve the stipulated meaning? |
| Declaration | A named party says AI materially assisted a particular work | Is the claim specific, attributable and consistent with available provenance? |
| Commitment | The named party accepts responsibility for release | Does the party perform the duties that the project says acceptance entails? |
| Social hypothesis | The mark will improve disclosure, comprehension or review behaviour | Does a pre-registered study survive a serious attempt to refute it? |

The first is a definition, not a discovery about nature. The second contains a
historical claim. The third is a promise. The fourth is empirical. Calling all
four “falsifiable” would blur the very demarcation Popper asks us to make.

The [draft specification](../../site-v2/SPECIFICATION.md) keeps some of these
layers apart. Sections 1, 5 and 7 define the declaration: artificial
intelligence materially assisted the work, a named party knowingly adopted it,
and that party accepts responsibility for releasing it. Section 8 then excludes
claims of correctness, safety, originality, professional compliance and
independent verification. Its most epistemically important sentence is that
`+AI` is an accountability declaration, not a warranty of correctness.

That limit is a strength. The mark does not verify itself. Seeing `Name +AI`
provides evidence that a declaration was displayed; it does not by itself
establish that AI was used, that the name belongs to the publisher, or that the
work is sound.

## 2. The Popperian lens

Five ideas from *The Logic of Scientific Discovery* are especially useful here:

1. **Conjecture before confirmation.** A claim earns scientific interest by
   exposing itself to possible failure, not by accumulating agreeable examples.
2. **Potential falsifiers.** A testable claim must rule out some observable
   outcomes. If every result can be redescribed as success, there was no test.
3. **Severity.** Repeating an easy check is weaker than passing a test that was
   likely to reveal the relevant error.
4. **Intersubjective testing.** Public procedures and records allow different
   people to criticise and repeat a test; private conviction does not.
5. **Corroboration, not proof.** Passing specified tests supports a claim only
   within their scope. It does not turn the claim into certainty.

Popper also warns against **conventionalist stratagems**: changing definitions,
adding exceptions or blaming the test whenever an observation threatens a
favoured theory. That warning is particularly relevant to an extensible
standard whose key terms include “materially” and “responsibility”.

## 3. Where the repository is strongly Popperian

### 3.1 It narrows a claim until a counterexample can reach it

The clearest example is the
[prior-art report](prior-art-dsh.md). Instead of claiming that the project
invented AI disclosure, it decomposes a narrow novelty claim into five parts:
post-nominal position, situational scope, fixed meaning, responsibility and
permissionless use. It then records close predecessors and identifies the
strongest counterexamples found.

This method makes criticism productive. One dated earlier practice combining
all five properties would defeat the report's present conclusion. The wording
“no earlier proposal has been identified” also admits that a search cannot
prove a universal negative. A new source should narrow or overturn the claim,
not be explained away.

The [campaign plan](../THE-PLAN.md) is similarly careful in section 2: it
forbids broader “first use” claims and stakes only the specific combination.
This is a genuinely risky claim, unlike a vague assertion of originality.

### 3.2 It converts engineering promises into executable criticism

The repository contains checks with clear failure conditions:

- [`scripts/validate.mjs`](../../scripts/validate.mjs) describes itself as a
  **structural** validator. It can reject malformed translation payloads,
  changed protected tokens, missing sections, broken markup and non-canonical
  forms of the mark. It explicitly says it cannot judge translation quality.
- [`scripts/render-check.mjs`](../../scripts/render-check.mjs) replays the
  legacy site's translation loading and personalisation. A missing registry,
  fallback language, malformed result or wrong section count produces a
  failure.
- [`site-v2/build.mjs`](../../site-v2/build.mjs) derives a SHA-256 fingerprint
  from the canonical specification, rejects unbalanced theme decorations,
  compares generated files with authored sources under `--check`, and can
  replay each pack against its legacy page under `--verify-all`.
- The site-v2
  [balance](../../site-v2/tools/balance-check.mjs) and
  [runtime](../../site-v2/tools/runtime-check.mjs) checks were added after a
  real browser behaviour exposed a weakness that token comparison had missed.
  The [upgrade record](../../site-v2/AN.UPGRADE.md#11-execution-status-appended-after-approval)
  preserves that failure and the stronger checks it caused.

These are modest but proper conjecture-and-refutation loops. “This generated
artifact matches its sources” excludes a byte-level difference. “This
decoration remains balanced in a browser” excludes a malformed runtime tree.
Anyone with the repository and Node.js can repeat the checks.

The qualification matters: those tests corroborate structural conformance.
They do not corroborate the truth of a declaration or the quality of a
translation.

### 3.3 It records negative knowledge

Several documents say plainly what has not been established:

- The specification's section 8 lists the conclusions a reader must not draw
  from the mark.
- The [implementation plan](../planning/IMPLEMENTATION-PLAN.md) labels itself a
  draft, says that planning does not promote draft suggestions into normative
  commitments, and distinguishes the implemented presentation layer from the
  missing trust layer.
- The
  [translation analysis](best-practice-multi-language.md#32-drift-and-gaps)
  reports that all payloads claimed `reviewed` while their comments recorded
  mixed or absent review provenance. It also identifies documentation drift
  and missing source-version pins rather than treating a passing structural
  check as semantic evidence.
- The proposed
  [evidence-label vocabulary](../development/0013-evidence-labels-not-trust-scores.md)
  forbids treating schema or signature validity as truth. It preserves
  `self-declared`, `stale`, `check-failed`, `revoked` and `disputed` as
  different observations rather than compressing them into a trust score.

This is close to Popper's view that knowledge advances by locating error.
“Unknown”, “not checked” and “the test cannot decide this” carry more
information than an unexplained green badge.

### 3.4 Its proposed research rules invite refutation

The
[experiments-and-metrics specification](../suggestions/experiments-and-metrics-dsh.md)
requires each study to publish its question, hypothesis, method, population,
duration and success criteria before it starts. It also requires equal
prominence for negative and null findings, versioned corrections, and open
study artifacts where privacy permits.

The corresponding
[development task](../development/0091-experiments-and-metrics.md) strengthens
the rule: no stage passes without a named approver, predeclared criteria, linked
evidence and a recorded decision. Its staged schedule permits stopping,
redesigning, rejecting and remaining deferred as valid outcomes.

These are excellent safeguards against hindsight. They are not yet
corroboration, however. Both documents are drafts, the development task is
awaiting decisions, and its study registry is an output still to be produced.
A good method on paper must not be counted as a successful experiment.

## 4. Where the project remains weak under this lens

### 4.1 Conformance is easier to test than truth

Most implemented checks ask whether files agree with one another. They can
detect a missing section, a changed token, an unbalanced fragment or generated
file drift. They cannot decide whether:

- AI assistance was material;
- the named party had authority to adopt the work;
- a translation preserves the intended meaning;
- the responsible party will answer criticism or correct an error;
- the mark improves a reader's understanding; or
- the artifact is reliable.

This is not a defect in those checks. It becomes a defect only if their success
is allowed to support a stronger claim. A hash match establishes sameness of
bytes, not truth. A valid signature establishes a relation to a key under stated
assumptions, not personal identity or authority. A schema-valid declaration is
well formed, not honest. The proposed
[verification checker](../development/0028-verification-checker.md) states
these boundaries correctly; every user-facing implementation will need to keep
them visible.

### 4.2 “Material assistance” has no public failure boundary

Specification section 6 gives many positive examples and exempts incidental
mechanical help, but the deciding test remains the user's answer to “Did AI
materially influence the artifact?” This is workable as voluntary guidance and
weak as an empirical classification rule.

Two people can classify the same autocomplete, translation edit or model-based
search differently without either violating a measurable threshold. If
criticism can always be answered with “materiality is personal”, then the term
is protected from refutation at the cost of consistent meaning.

The project need not impose an AI percentage. It does need public boundary
cases and comprehension evidence. A useful test would ask independent readers
and signers to classify the same concrete scenarios, explain why, and report
where agreement collapses. Persistent disagreement should change the examples
or narrow the term.

### 4.3 Responsibility is a promise without a complete observable practice

“I take responsibility” is primarily performative: like a signature, it makes a
commitment rather than predicts a natural event. It is therefore a category
error to reject the phrase merely because an inner intention cannot be
falsified.

The promise can still have observable consequences. A responsible party might
remain identifiable, receive a challenge, acknowledge an error, issue a dated
correction, withdraw a harmful release, or state why no change is warranted.
Version 0.1 requires knowing adoption but does not require word-by-word review,
an independent check, a correction route or any particular response.

Without a minimum public practice, sincere acceptance and empty signalling look
the same from outside. Planned lifecycle, contact and evidence mechanisms may
make parts of the promise testable, but future machinery cannot be credited to
the current mark.

### 4.4 The central social claims are not yet corroborated

The [campaign plan](../THE-PLAN.md) aims for millions of people to add the mark
and argues that the notation is memorable, easy to copy and capable of
improving disclosure and review behaviour. Those are hypotheses, not findings.
The plan does acknowledge that virality cannot be guaranteed and proposes
bounded pilots, but the repository does not yet contain completed study records
supporting the effects.

Raw adoption would not settle the important questions. A widely copied mark
could still be misunderstood, used performatively, attached without authority
or mistaken for certification. Counting marks tests diffusion; it does not
test comprehension or accountability.

The project's adoption objective also creates pressure to favour confirming
stories. The draft rule requiring publication of null and negative results is
therefore not administrative detail. It is protection against the project's
own incentive structure.

### 4.5 Extension can become immunisation

Specification section 25 reserves future marks for stronger review,
verification, agent activity and provenance. Extension is sensible, but it can
become a conventionalist stratagem if every criticism of `+AI` is answered by
moving the disputed property into a future layer.

Version 0.1 should be allowed to fail at what it actually attempts. If readers
reliably mistake it for verification, the answer cannot only be “a later
verification mark will clarify that”. The wording, placement or rollout of
version 0.1 may need to change. If “material” produces unstable classifications,
adding richer metadata does not rescue the simple mark's claimed clarity.

The repository already contains one healthy correction of this kind. The older
[core-extensions proposal](../core-extensions.md) described a green/amber/red
checker verdict. The newer implementation plan and evidence-label work reject
aggregate verdicts in favour of dated facts. The later design narrows what the
checker may claim rather than preserving the first design at all costs.

### 4.6 Independent and severe tests are scarce

Most executable checks were written alongside the system they test and inspect
expected structures. They are valuable regression tests, but they are not the
strongest attempts to expose semantic or social failure.

More severe tests would include:

- blinded comprehension studies using plausible wrong interpretations;
- adversarial declarations made without the named party's authority;
- correction, revocation, stale-data and service-off exercises;
- independent implementations reading the same portable record;
- native-language reviewers who did not author the translation; and
- comparisons against simpler disclosures such as “AI-assisted; reviewed by
  Name”.

The roadmap proposes several of these. In Popper's terms, they begin to support
the project only when the protocol, evidence and result exist outside the
planning document.

## 5. A falsification programme for +AI

The existing experiment rules provide the right container. The next step is to
state the project's important hypotheses so that an unwelcome result can stop
or alter a release.

| ID | Conjecture | Observation that counts against it |
| --- | --- | --- |
| H1 — Core comprehension | Without prompting, readers understand both AI assistance and named-party responsibility, while not inferring correctness or certification. | A predeclared proportion cannot state both meanings, or a material proportion infers one of the specification's explicit non-claims. |
| H2 — Materiality boundary | The examples let intended users apply “material assistance” consistently to realistic cases. | Agreement misses its predeclared criterion, especially on boundary cases, and explanation or training does not repair it. |
| H3 — Disclosure advantage | `Name +AI` communicates the intended meaning at least as well as a plain-language comparator with less effort. | The comparator produces equal or better comprehension, retention or correct use under the registered primary measure. |
| H4 — Accountable conduct | The mark is associated with observable adoption and correction practices rather than responsibility theatre. | In a bounded pilot, marked artifacts have no predeclared improvement in correct scoping, response or correction, or they perform worse. |
| H5 — Multilingual equivalence | Reviewed translations preserve the two-part meaning and its non-implications across languages. | A language group systematically infers a different duty, warranty or degree of AI authorship from the English group. |
| H6 — Abuse recovery | False attribution, revoked claims and stale evidence can be detected and corrected without turning absence of evidence into guilt. | A scripted misuse remains authoritative-looking past the allowed interval, or correction fails to propagate through derived surfaces. |
| H7 — Infrastructure independence | A third party can inspect and reconstruct the relevant claim with hosted services unavailable. | The service-off exercise loses the claim, version, evidence dates, correction state or distinction between unknown and false. |

Each registration should fix, before collecting data:

1. the population and comparison;
2. one primary outcome;
3. the threshold that counts against the conjecture;
4. exclusions, stopping rules and retention;
5. the exact specification and interface version;
6. the analysis method;
7. the publication date; and
8. the action attached to failure: revise, narrow, repeat for a stated reason,
   or stop.

The last item prevents a failed test from becoming a ceremonial report.

## 6. Keep an evidence ladder

The repository would benefit from one vocabulary that prevents evidence from
climbing beyond its scope:

| Level | What is established | What is not established |
| --- | --- | --- |
| E0 — Definition | The canonical document stipulates a meaning. | That users understand or follow it. |
| E1 — Conformance | An artifact passes named syntax, rendering, hash or link checks. | That its claims are true. |
| E2 — Provenance/control | Dated evidence relates bytes, a domain, mailbox, account or key under stated assumptions. | Identity, authority, accuracy or responsible conduct beyond those assumptions. |
| E3 — Study result | A registered hypothesis survived a specified test in a specified population. | Universal validity or success in a new population. |
| E4 — Independent replication | Another party reproduced the result or interoperability claim. | Final proof; later, more severe tests may still overturn it. |

Every public result should name its level, date, scope and potential falsifier.
This extends the proposed evidence-label approach from individual declarations
to claims made by the project about itself.

## 7. Repository status is part of the evidence

An observation cannot be repeated if the object under test is ambiguous. This
repository currently contains:

- the legacy `site/` tree described as the deployed website by the
  [root README](../../README.md);
- the newer shared engine and authored packs documented in
  [`site-v2/README.md`](../../site-v2/README.md);
- draft suggestions that explicitly are not commitments;
- implementation requests whose unchecked boxes are not evidence; and
- generated files alongside their authored sources.

Any test report should therefore record the tree, commit, spec hash, authored
source, generated artifact and deployment target it examined. “The site
passed” is not a reproducible basic statement when two architectures coexist.
“Commit X, `site-v2`, pack Y, spec hash Z passed commands A and B” is.

## 8. Assessment

The repository is most Popperian where it is least grand:

- a narrow novelty claim that one counterexample can overturn;
- validators that state what they cannot judge;
- deterministic builds that fail on drift;
- explicit unknown, stale and failed states;
- recorded defects that lead to stronger tests; and
- draft research rules that require pre-registration and publication of losses.

It is least Popperian where aspiration is allowed to stand in for result:

- “material assistance” lacks a stable public boundary;
- responsibility has little mandatory observable content;
- widespread adoption can be mistaken for successful accountability;
- self-authored structural tests are weaker than independent semantic tests;
  and
- proposed safeguards can be described as though they already exist.

The right conclusion is not that `+AI` must itself become a scientific theory.
It is a voluntary convention and a moral commitment. The empirical claims
surrounding it—clarity, consistency, usefulness, behavioural effect, resistance
to abuse and cross-language equivalence—should nevertheless be exposed to
failure.

A Popperian +AI project would not ask how to prove the mark works. It would ask
what result would make the project change its mind, publish that answer first,
and then make the test hard to pass.

## Reference

Karl R. Popper, *The Logic of Scientific Discovery*, first published in English
in 1959. This analysis principally draws on chapter I (induction, demarcation,
falsifiability and objectivity), chapters III–VI (methodological rules,
potential falsifiers, empirical basis and degrees of testability), and chapter X
(corroboration). Section references are preferred to page numbers because
pagination varies by edition.
