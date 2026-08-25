# spec.ml.js — Round 1 correction suggestions

- **Language:** മലയാളം (ml)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** Broadly accurate and consistent, but Section 21 inverts a SHOULD NOT into a positive instruction, and three MUST NOT clauses drift away from the defined rendering.
- **Count:** 1 high / 3 medium / 4 low

## Corrections

### Section 21 — Misrepresentation
- **Location:** `sections[21].body`, opening sentence
- **Current:** `ഇനിപ്പറയുന്ന സാഹചര്യങ്ങളിൽ ഒരു വ്യക്തിയോ സ്ഥാപനമോ <code>+AI</code> ഉപയോഗിക്കാതിരിക്കുന്നത് ഒഴിവാക്കേണ്ടതാണ്:`
- **English:** `A person or organisation SHOULD NOT use <code>+AI</code> where:`
- **Issue:** Inverted negation. `ഉപയോഗിക്കാതിരിക്കുന്നത് ഒഴിവാക്കേണ്ടതാണ്` means "abstaining from using it should be avoided" — i.e. *use* `+AI` in these situations, the exact opposite of the master. The obligation direction is reversed.
- **Suggested:** `ഇനിപ്പറയുന്ന സാഹചര്യങ്ങളിൽ ഒരു വ്യക്തിയോ സ്ഥാപനമോ <code>+AI</code> ഉപയോഗിക്കുന്നത് ഒഴിവാക്കേണ്ടതാണ്:`
- **Severity:** HIGH

### Section 4 — Canonical notation
- **Location:** `sections[4].body`, final sentence
- **Current:** `… എന്നാൽ വ്യക്തമായി നിർവചിക്കപ്പെട്ടില്ലെങ്കിൽ അവ <code>+AI</code> യുടെ കാനോനിക അർത്ഥം വഹിക്കുന്നതായി കരുതരുത്.`
- **English:** `… but they MUST NOT be assumed to carry the canonical <code>+AI</code> meaning unless explicitly defined.`
- **Issue:** Normative-term drift. Section 3 defines MUST NOT as `നിരോധിതം (MUST NOT)`, but here it is rendered with the plain negative imperative `കരുതരുത്` ("do not assume") rather than the declared term. Meaning is preserved but the normative rendering is inconsistent.
- **Suggested:** `… എന്നാൽ വ്യക്തമായി നിർവചിക്കപ്പെട്ടില്ലെങ്കിൽ അവ <code>+AI</code> യുടെ കാനോനിക അർത്ഥം വഹിക്കുന്നതായി കണക്കാക്കുന്നത് നിരോധിതമാണ്.`
- **Severity:** MEDIUM

### Section 12 — Email and messaging
- **Location:** `sections[12].body`, "A hyperlink MUST NOT alter the visible notation."
- **Current:** `ഒരു ഹൈപ്പർലിങ്ക് ദൃശ്യമായ സൂചകം മാറ്റരുത്.`
- **English:** `A hyperlink MUST NOT alter the visible notation.`
- **Issue:** Normative-term drift. MUST NOT is rendered as `മാറ്റരുത്` ("do not alter") instead of the declared `നിരോധിതം`, so the binding prohibition no longer matches Section 3's terminology.
- **Suggested:** `ഒരു ഹൈപ്പർലിങ്ക് ദൃശ്യമായ സൂചകം മാറ്റുന്നത് നിരോധിതമാണ്.`
- **Severity:** MEDIUM

### Section 16 — Research and technical work
- **Location:** `sections[16].body`, "MUST NOT be represented as replacing…"
- **Current:** `… ആവശ്യപ്പെടുന്ന കൂടുതൽ നിർദ്ദിഷ്ടമായ ഏതെങ്കിലും വെളിപ്പെടുത്തലിന് പകരമായി <code>+AI</code> പ്രതിനിധീകരിക്കരുത്.`
- **English:** `<code>+AI</code> MUST NOT be represented as replacing any more specific disclosure required by a publisher, regulator, employer, professional body or law.`
- **Issue:** Normative-term drift. MUST NOT is rendered as `പ്രതിനിധീകരിക്കരുത്` ("do not represent") instead of the declared `നിരോധിതം`.
- **Suggested:** `… ആവശ്യപ്പെടുന്ന കൂടുതൽ നിർദ്ദിഷ്ടമായ ഏതെങ്കിലും വെളിപ്പെടുത്തലിന് പകരമായി <code>+AI</code> പ്രതിനിധീകരിക്കുന്നത് നിരോധിതമാണ്.`
- **Severity:** MEDIUM

### Section 19 — Open use
- **Location:** `sections[19].body`, "Use of the notation SHOULD NOT require:"
- **Current:** `സൂചകത്തിന്റെ ഉപയോഗത്തിന് ഇനിപ്പറയുന്നവ ആവശ്യമാകരുത് എന്നത് ശുപാർശിതം:`
- **English:** `Use of the notation SHOULD NOT require:`
- **Issue:** SHOULD NOT is rendered as a SHOULD + negation (`ശുപാർശിതം … ആവശ്യമാകരുത്`) rather than the defined `ഒഴിവാക്കേണ്ടതാണ്`. Semantically readable, but inconsistent with the term used in Sections 9 and 21.
- **Suggested:** `സൂചകത്തിന്റെ ഉപയോഗത്തിന് ഇനിപ്പറയുന്നവ ആവശ്യമാകുന്നത് ഒഴിവാക്കേണ്ടതാണ്:`
- **Severity:** LOW

### Section 2 — Design principle
- **Location:** `sections[2].body`, final sentence
- **Current:** `അതിനാൽ ഈ മാനദണ്ഡം വിശിഷ്ട കർത്തൃത്വത്തെക്കാൾ … സംബന്ധിച്ചതാണ്.`
- **English:** `The standard therefore concerns <strong>AI participation and human accountability</strong>, rather than exclusive authorship.`
- **Issue:** `വിശിഷ്ട` means "distinguished/eminent", not "exclusive". The sentence should contrast with *sole/one-party* authorship, which `വിശിഷ്ട` does not convey.
- **Suggested:** `… വിശിഷ്ട കർത്തൃത്വത്തെക്കാൾ …` → `… മാത്രമായ കർത്തൃത്വത്തെക്കാൾ …` (or `ഏകമാത്ര കർത്തൃത്വം`)
- **Severity:** LOW

### interfaceCopy.footerLine
- **Location:** `interfaceCopy.footerLine`
- **Current:** `തുറന്ന സൂചന. മാനുഷിക ഉത്തരവാദിത്തം.`
- **English:** `Open notation. Human responsibility.`
- **Issue:** Terminology inconsistency: "notation" is rendered `സൂചകം` throughout the body but `സൂചന` ("hint/indication") here.
- **Suggested:** `തുറന്ന സൂചകം. മാനുഷിക ഉത്തരവാദിത്തം.`
- **Severity:** LOW

### Section 12 — Email and messaging (untranslated example sign-off)
- **Location:** `sections[12].body`, preferred-presentation example
- **Current:** `<strong>Kindest regards,<br>Eric Mourant +AI</strong>`
- **English:** `<strong>Kindest regards,<br>Eric Mourant +AI</strong>`
- **Issue:** `Kindest regards` is translatable prose, not a load-bearing name or mark; it is left in English.
- **Suggested:** `ആദരവോടെ` (or similar) in place of `Kindest regards`, keeping `Eric Mourant +AI` byte-identical.
- **Severity:** LOW

## Notes
- The same untranslated-English pattern recurs in the field labels of Sections 13–15: `Author:`, `Prepared by:`, `Issued by:`, `Created by`, and Section 14's `This project uses`. These are examples and may be intentionally kept, but they are translatable prose a reviewer may wish to localise.
- The normative terms are otherwise used consistently: MUST → `നിർബന്ധം`, SHOULD → `ശുപാർശിതം`, SHOULD NOT → `ഒഴിവാക്കേണ്ടതാണ്` (except Section 19), MAY → `അനുവദനീയം`. Section 15 renders MAY as `ഉണ്ടാകാം` ("may accompany") rather than `അനുവദനീയം`; semantically fine but a minor consistency note.
- `interfaceCopy.followedLink` transliterates "Post Nominal" as `പോസ്റ്റ്-നോമിനൽ`, which may be opaque to a Malayalam-only reader; a human speaker should confirm whether a descriptive rendering is preferred.
- `interfaceCopy.skip` renders "Skip to the explanation" as `വിശദീകരണത്തിലേക്ക് പോകുക` ("Go to the explanation"), dropping the "skip" nuance — acceptable but worth a native-speaker check.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, and the example names `Eric Mourant` / `JAPER Technology` are all preserved correctly.
