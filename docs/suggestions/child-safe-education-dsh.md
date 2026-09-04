# Child-Safe Education — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`child-safe-education.md`](child-safe-education.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines how +AI is taught and used in educational settings
with minors: classroom guidance and private school templates that teach
reflection, disclosure, and responsibility — the mark's own lesson — without
requiring public student profiles and without treating the mark as a legal
waiver. Education is where the idea spreads earliest, so it must be where the
project is most careful about consent, exposure, and pressure.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and owns *education materials and their safety rules*. It does not
own general privacy obligations (see [Privacy and data
minimisation](privacy-and-data-minimisation-dsh.md)), visibility defaults (see
[Visibility and consent](visibility-and-consent-dsh.md)), or moderation of
school-related content (see [Moderation, disputes, and
appeals](moderation-disputes-and-appeals-dsh.md)). It applies on top of those
floors and adds child-specific obligations. It must be reviewed by child-safety
and education specialists before any public release.

## 3. Terminology

- **Minor** — a person below the age of consent or majority in their
  jurisdiction.
- **School template** — a private, institution-scoped declaration or exercise
  format for classroom use.
- **Guardian consent** — recorded consent from a parent or legal guardian
  where jurisdiction requires it.
- **Reflection exercise** — a private teaching activity, never a public
  record.

## 4. Scope

### 4.1 In scope

- Classroom guidance and private school templates.
- Age, consent, guardian, and institution rules.
- Prohibitions on profiling, retention, and public exposure of minors.
- Reporting obligations and jurisdiction-specific protections.
- Accessibility of materials.

### 4.2 Out of scope and deferred

- General education for adults (training, consulting, and pilots).
- School procurement of hosted services (organisation workspaces).
- Legal advice about education law (regulatory phrasing packs).

## 5. Specification

### 5.1 Design goals and principles

1. **Teach privately.** Every student exercise is local or institution-only;
   nothing requires publication.
2. **The mark is not a waiver.** Materials must never present +AI as
   transferring responsibility from students, schools, or guardians.
3. **Reflection before disclosure.** The pedagogy teaches choosing what to
   disclose; disclosure is never a requirement of the exercise.
4. **Guardians and institutions in the loop.** Where the law requires, consent
   flows through guardians; schools control institution-only scope.
5. **Specialist-reviewed.** Nothing ships for minors without specialist
   review.

### 5.2 Normative requirements

1. All education materials MUST be reviewed by child-safety and education
   specialists before publication, and each release MUST record the review
   date and reviewer credentials (roles, not necessarily names).
2. Materials MUST teach the mark as a choice about honesty and responsibility,
   and MUST state plainly that +AI is not a legal waiver, a grade, or a
   requirement.
3. Student records MUST default to `local` visibility and MUST NOT be
   publishable to `public` by anyone except, where jurisdiction permits, the
   student themselves with guardian consent recorded per visibility and
   consent.
4. School templates MUST be `organisation-only` in scope, resolvable only by
   the school's granted roles, and MUST NOT appear in directories or search
   indexes.
5. Materials MUST NOT profile, score, rank, or grade students by their use or
   non-use of the mark or of AI tools; no leaderboards, no gamified exposure.
6. Retention of student exercise data MUST follow the school's published
   retention policy and MUST NOT exceed the school year's need unless law
   requires otherwise.
7. Materials MUST cover the reporting route for abuse or pressure to disclose,
   reachable without an account, per contact routes.
8. Jurisdiction-specific obligations (age thresholds, guardian consent,
   institutional duties) MUST be addressed per jurisdiction in the materials'
   own notes; gaps MUST be disclosed rather than glossed.
9. Materials MUST meet the accessibility floor, including for students using
   assistive technology and in the classroom's languages.
10. Teacher-facing guidance MUST include: how to run reflection exercises
    privately, how to respond when a student discloses AI use, and how to
    escalate safety concerns.
11. No education feature may require an account for the core classroom
    exercise; the no-account path must work for every template.
12. Advertising or vendor content MUST NOT appear in student-facing materials
    (RL-4).

### 5.3 Data model

```
{
  "material": "identifier",
  "audience": "students | teachers | guardians",
  "review": { "by": "specialist roles", "at": "ISO-8601" },
  "jurisdictionNotes": [ { "jurisdiction": "...", "ageThreshold": "...",
                           "guardianConsent": "required | not required" } ],
  "visibilityDefault": "local",
  "reportingRoute": "no-account route reference"
}
```

### 5.4 Interfaces and behaviours

- Student-facing flows are local-first: the exercise completes offline, and
  saving produces a local file, never an upload.
- Institution-only templates render an access-required state to outsiders.
- Guardian consent steps, where required, show exactly what would be shared
  and are recorded per visibility and consent.

### 5.5 Lifecycle and operational rules

- Materials are versioned; each version carries its specialist review record
  and is announced in the changelog.
- Outdated materials that no longer reflect jurisdiction rules are deprecated
  with a note, never silently edited.
- Pilots in schools follow pilots and case studies, including its consent and
  publication rules.

## 6. Free floor, red lines, and invariants

Education materials are free-floor commons: no payment for classroom use. The
red lines apply with extra force to minors — no mandatory registration
(RL-2), no profiling or scoring (RL-9), no covert tracking (RL-5), no
biometrics (RL-6), and no payment for the mark (RL-1). The core invariant is
pedagogical here: responsibility stays with the human, and no exercise may
teach students to hide behind the machine.

## 7. Relationships to sibling specifications

- [Visibility and consent](visibility-and-consent-dsh.md) owns the visibility
  defaults and consent records this document applies to minors.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) is the
  general floor these rules extend.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md)
  owns handling of reports about pressure, abuse, or inappropriate materials.
- [Contact routes](contact-routes-dsh.md) owns the child-safety reporting
  channel.
- [Accessibility floor](accessibility-floor-dsh.md) is mandatory for all
  materials.
- [Pilots and case studies](pilots-and-case-studies-dsh.md) governs school
  pilots and their consent and publication rules.
- [Organisation workspaces](organisation-workspaces-dsh.md) provide the
  institution-only scoping for school templates.
- [Regulatory phrasing packs](regulatory-phrasing-packs-dsh.md) supply
  jurisdiction-specific phrasing examples without being legal advice.
- [Training, consulting, and pilots](training-consulting-and-pilots-dsh.md)
  owns teacher training beyond the materials here.

## 8. Resolution of the seed's "before implementation" concerns

- **Age** — sections 5.2 item 8 and 5.3: jurisdiction notes with age
  thresholds.
- **Consent** — section 5.2 items 3 and 5.4: guardian consent where required,
  recorded.
- **Guardians** — sections 5.2 item 10 and 5.3: guardian-facing materials and
  consent flows.
- **Institutions** — section 5.2 item 4: organisation-only school templates.
- **Profiling** — section 5.2 item 5: no profiling, scoring, or ranking.
- **Retention** — section 5.2 item 6: school-policy retention, no longer than
  needed.
- **Reporting** — section 5.2 item 7: no-account reporting route.
- **Accessibility** — section 5.2 item 9: accessibility floor mandatory.
- **Jurisdiction-specific child protections** — section 5.2 item 8: per
  jurisdiction notes with disclosed gaps.
- **Specialist review** — section 5.2 item 1 and 5.5: recorded review per
  release.

## 9. Acceptance criteria

1. Every materials release carries a specialist review record.
2. No student record defaults to anything but `local`.
3. School templates are organisation-only and absent from directories.
4. No material scores, ranks, or profiles students.
5. The core classroom exercise completes with no account and no upload.
6. Materials state plainly that +AI is not a legal waiver.
7. A no-account reporting route is documented in student-facing materials.
8. Jurisdiction notes cover age thresholds and disclose gaps.
9. Materials meet the accessibility floor in the classroom's languages.

## 10. Open questions

- The exact age-threshold table per jurisdiction, pending specialist input.
- Whether guardian consent records should be held by schools only, or also by
  hosted services when institution templates are used there.
