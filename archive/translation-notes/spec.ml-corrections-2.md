# spec.ml.js — Round 2 final correction recommendations

- **Language:** മലയാളം (ml)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.ml-corrections-1.md` (1 high / 3 medium / 4 low) — all 8 findings re-verified against the current file and carried forward
- **Verdict:** Broadly accurate, but the Section 21 HIGH severity inversion remains the key blocker, followed by the MUST NOT rendering drift. Three new low-severity findings added.
- **Count:** 1 high / 3 medium / 7 low

## Corrections

### Section 21 — Misrepresentation (inverted negation)
- **Location:** `sections[21].body`, opening sentence
- **Current:** `ഇനിപ്പറയുന്ന സാഹചര്യങ്ങളിൽ ഒരു വ്യക്തിയോ സ്ഥാപനമോ <code>+AI</code> ഉപയോഗിക്കാതിരിക്കുന്നത് ഒഴിവാക്കേണ്ടതാണ്:`
- **English:** `A person or organisation SHOULD NOT use <code>+AI</code> where:`
- **Issue:** Inverted negation. `ഉപയോഗിക്കാതിരിക്കുന്നത് ഒഴിവാക്കേണ്ടതാണ്` means "abstaining from using it should be avoided" — i.e. *use* `+AI` in these situations, the exact opposite of the master. The obligation direction is reversed.
- **Suggested:** `ഇനിപ്പറയുന്ന സാഹചര്യങ്ങളിൽ ഒരു വ്യക്തിയോ സ്ഥാപനമോ <code>+AI</code> ഉപയോഗിക്കുന്നത് ഒഴിവാക്കേണ്ടതാണ്:`
- **Severity:** HIGH
- **Round 1:** carried forward (verified still present)

### Section 4 — MUST NOT drift
- **Location:** `sections[4].body`, final sentence
- **Current:** `… എന്നാൽ വ്യക്തമായി നിർവചിക്കപ്പെട്ടില്ലെങ്കിൽ അവ <code>+AI</code> യുടെ കാനോനിക അർത്ഥം വഹിക്കുന്നതായി കരുതരുത്.`
- **English:** `… but they MUST NOT be assumed to carry the canonical <code>+AI</code> meaning unless explicitly defined.`
- **Issue:** Normative-term drift. Section 3 defines MUST NOT as `നിരോധിതം (MUST NOT)`, but here it is rendered with the plain negative imperative `കരുതരുത്` ("do not assume") rather than the declared term. Meaning is preserved but the normative rendering is inconsistent.
- **Suggested:** `… എന്നാൽ വ്യക്തമായി നിർവചിക്കപ്പെട്ടില്ലെങ്കിൽ അവ <code>+AI</code> യുടെ കാനോനിക അർത്ഥം വഹിക്കുന്നതായി കണക്കാക്കുന്നത് നിരോധിതമാണ്.`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 12 — MUST NOT drift
- **Location:** `sections[12].body`, "A hyperlink MUST NOT alter the visible notation."
- **Current:** `ഒരു ഹൈപ്പർലിങ്ക് ദൃശ്യമായ സൂചകം മാറ്റരുത്.`
- **English:** `A hyperlink MUST NOT alter the visible notation.`
- **Issue:** Normative-term drift. MUST NOT is rendered as `മാറ്റരുത്` ("do not alter") instead of the declared `നിരോധിതം`.
- **Suggested:** `ഒരു ഹൈപ്പർലിങ്ക് ദൃശ്യമായ സൂചകം മാറ്റുന്നത് നിരോധിതമാണ്.`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 16 — MUST NOT drift
- **Location:** `sections[16].body`, "MUST NOT be represented as replacing…"
- **Current:** `… ആവശ്യപ്പെടുന്ന കൂടുതൽ നിർദ്ദിഷ്ടമായ ഏതെങ്കിലും വെളിപ്പെടുത്തലിന് പകരമായി <code>+AI</code> പ്രതിനിധീകരിക്കരുത്.`
- **English:** `<code>+AI</code> MUST NOT be represented as replacing any more specific disclosure required by a publisher, regulator, employer, professional body or law.`
- **Issue:** Normative-term drift. MUST NOT is rendered as `പ്രതിനിധീകരിക്കരുത്` ("do not represent") instead of the declared `നിരോധിതം`.
- **Suggested:** `… ആവശ്യപ്പെടുന്ന കൂടുതൽ നിർദ്ദിഷ്ടമായ ഏതെങ്കിലും വെളിപ്പെടുത്തലിന് പകരമായി <code>+AI</code> പ്രതിനിധീകരിക്കുന്നത് നിരോധിതമാണ്.`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 19 — SHOULD NOT drift
- **Location:** `sections[19].body`, "Use of the notation SHOULD NOT require:"
- **Current:** `സൂചകത്തിന്റെ ഉപയോഗത്തിന് ഇനിപ്പറയുന്നവ ആവശ്യമാകരുത് എന്നത് ശുപാർശിതം:`
- **English:** `Use of the notation SHOULD NOT require:`
- **Issue:** SHOULD NOT is rendered as a SHOULD + negation (`ശുപാർശിതം … ആവശ്യമാകരുത്`) rather than the defined `ഒഴിവാക്കേണ്ടതാണ്`. Semantically readable, but inconsistent with the term used in Sections 9 and 21.
- **Suggested:** `സൂചകത്തിന്റെ ഉപയോഗത്തിന് ഇനിപ്പറയുന്നവ ആവശ്യമാകുന്നത് ഒഴിവാക്കേണ്ടതാണ്:`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 2 — "exclusive" mistranslated
- **Location:** `sections[2].body`, final sentence
- **Current:** `അതിനാൽ ഈ മാനദണ്ഡം വിശിഷ്ട കർത്തൃത്വത്തെക്കാൾ … സംബന്ധിച്ചതാണ്.`
- **English:** `The standard therefore concerns <strong>AI participation and human accountability</strong>, rather than exclusive authorship.`
- **Issue:** `വിശിഷ്ട` means "distinguished/eminent", not "exclusive". The sentence should contrast with *sole/one-party* authorship, which `വിശിഷ്ട` does not convey.
- **Suggested:** `… വിശിഷ്ട കർത്തൃത്വത്തെക്കാൾ …` → `… മാത്രമായ കർത്തൃത്വത്തെക്കാൾ …` (or `ഏകമാത്ര കർത്തൃത്വം`)
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.footerLine — "notation" rendered "hint"
- **Location:** `interfaceCopy.footerLine`
- **Current:** `തുറന്ന സൂചന. മാനുഷിക ഉത്തരവാദിത്തം.`
- **English:** `Open notation. Human responsibility.`
- **Issue:** Terminology inconsistency: "notation" is rendered `സൂചകം` throughout the body but `സൂചന` ("hint/indication") here.
- **Suggested:** `തുറന്ന സൂചകം. മാനുഷിക ഉത്തരവാദിത്തം.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 12 — untranslated sign-off
- **Location:** `sections[12].body`, preferred-presentation example
- **Current:** `<strong>Kindest regards,<br>Eric Mourant +AI</strong>`
- **English:** `<strong>Kindest regards,<br>Eric Mourant +AI</strong>`
- **Issue:** `Kindest regards` is translatable prose, not a load-bearing name or mark; it is left in English.
- **Suggested:** `ആദരവോടെ` (or similar) in place of `Kindest regards`, keeping `Eric Mourant +AI` byte-identical.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Sections 13 and 15 — untranslated role labels (promoted from round-1 note)
- **Location:** `sections[13].body` and `sections[15].body`, example lines
- **Current:** `<strong>Author: Eric Mourant +AI</strong>`, `<strong>Prepared by: Eric Mourant +AI</strong>`, `<strong>Issued by: JAPER Technology +AI</strong>`, `<strong>Created by Eric Mourant +AI</strong>`
- **English:** `Author:` / `Prepared by:` / `Issued by:` / `Created by`
- **Issue:** These are translatable prose labels left in English (round-1 note); final list includes them for completeness.
- **Suggested:** Localise while keeping the names byte-identical, e.g. `രചയിതാവ്:` / `തയ്യാറാക്കിയത്:` / `പുറത്തിറക്കിയത്:` / `സൃഷ്ടിച്ചത്:`.
- **Severity:** LOW
- **Round 1:** new in round 2 (was a round-1 note)

### Section 6 — "incidental" and missing "necessarily" (new in round 2)
- **Location:** `sections[6].body`, "Incidental or purely mechanical AI functionality does not necessarily require +AI."
- **Current:** `യാദൃച്ഛികമോ പൂർണ്ണമായും യാന്ത്രികമോ ആയ കൃത്രിമബുദ്ധി പ്രവർത്തനത്തിന് <code>+AI</code> അനിവാര്യമല്ല.`
- **English:** `Incidental or purely mechanical AI functionality does not necessarily require <code>+AI</code>.`
- **Issue:** `യാദൃച്ഛികമോ` means "accidental/random", not "incidental" (tangential/minor); and "does not necessarily require" is rendered `അനിവാര്യമല്ല` ("is not indispensable"), dropping the "necessarily" hedge.
- **Suggested:** `ആനുഷംഗികമോ പൂർണ്ണമായും യാന്ത്രികമോ ആയ കൃത്രിമബുദ്ധി പ്രവർത്തനത്തിന് <code>+AI</code> അനിവാര്യമായും ആവശ്യമില്ല.`
- **Severity:** LOW
- **Round 1:** new in round 2

### Section 3 — "legitimate reason" narrowed to "lawful reason" (new in round 2)
- **Location:** `sections[3].body`, SHOULD definition
- **Current:** `ശുപാർശിതം നിയമാനുസൃതമായ കാരണമുള്ളപ്പോൾ വ്യതിചലിക്കാവുന്ന ശക്തമായ ഒരു ശുപാർശയെ സൂചിപ്പിക്കുന്നു.`
- **English:** `SHOULD indicates a strong recommendation that may be departed from where a legitimate reason exists.`
- **Issue:** "legitimate reason" is narrowed to `നിയമാനുസൃതമായ കാരണം` ("lawful/legal reason"); "legitimate" is broader than "legal".
- **Suggested:** `ശുപാർശിതം ന്യായമായ കാരണമുള്ളപ്പോൾ വ്യതിചലിക്കാവുന്ന ശക്തമായ ഒരു ശുപാർശയെ സൂചിപ്പിക്കുന്നു.`
- **Severity:** LOW
- **Round 1:** new in round 2

## Round 1 verification

- [x] Section 21 inverted negation — still present, carried forward as HIGH
- [x] Section 4 "കരുതരുത്" — still present, carried forward
- [x] Section 12 "മാറ്റരുത്" — still present, carried forward
- [x] Section 16 "പ്രതിനിധീകരിക്കരുത്" — still present, carried forward
- [x] Section 19 SHOULD NOT — still present, carried forward
- [x] Section 2 "വിശിഷ്ട" — still present, carried forward
- [x] footerLine "സൂചന" — still present, carried forward
- [x] Section 12 "Kindest regards" — still present, carried forward

## Notes

- The normative terms are otherwise used consistently: MUST → `നിർബന്ധം`, SHOULD → `ശുപാർശിതം`, SHOULD NOT → `ഒഴിവാക്കേണ്ടതാണ്` (except Section 19), MAY → `അനുവദനീയം`. Section 15 renders MAY as `ഉണ്ടാകാം` rather than `അനുവദനീയം`; semantically fine but a minor consistency note.
- Section 7 correctly renders "substantially generated" as `ഗണ്യമായി ഉത്പാദിപ്പിച്ച` — no drift.
- `interfaceCopy.followedLink` transliterates "Post Nominal" as `പോസ്റ്റ്-നോമിനൽ`, which may be opaque to a Malayalam-only reader; a human speaker should confirm.
- `interfaceCopy.skip` renders "Skip to the explanation" as `വിശദീകരണത്തിലേക്ക് പോകുക` ("Go to the explanation"), dropping the "skip" nuance — acceptable but worth a native-speaker check.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, and the example names `Eric Mourant` / `JAPER Technology` are all preserved correctly.
- Canonical slogan `AI സഹായിച്ചു. ഉത്തരവാദിത്തം ഞാൻ ഏൽക്കുന്നു.` is identical across documentTitle, heroTitle, sections 1/23/26 and `end`.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
