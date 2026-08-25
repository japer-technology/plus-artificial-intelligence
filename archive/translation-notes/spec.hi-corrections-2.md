# spec.hi.js — Round 2 final correction recommendations

- **Language:** हिन्दी (hi)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.hi-corrections-1.md` (0 high / 3 medium / 4 low) — all 7 findings re-verified against the current file and carried forward
- **Verdict:** Semantically strong and internally consistent in the normative sections; all round-1 items remain, and one new low-severity wording point was found.
- **Count:** 0 high / 3 medium / 5 low

## Corrections

### interfaceCopy.heroTitle (and documentTitle) — canonical shorthand split
- **Location:** `interfaceCopy.heroTitle` / `interfaceCopy.documentTitle`, vs `sections[0].body`, `sections[22].body`, `sections[25].body`, `end`
- **Current:**
  - `interfaceCopy.heroTitle`: `AI ने मदद की। ज़िम्मेदारी मेरी है।`
  - `interfaceCopy.documentTitle`: `+AI — AI ने मदद की। ज़िम्मेदारी मेरी है।`
  - `sections[0].body` (and 23, 26, `end`): `AI ने सहायता की। उत्तरदायित्व मेरा है।`
- **English:** `AI helped. I take responsibility.`
- **Issue:** The single most load-bearing phrase in the specification — the canonical public shorthand — is rendered two different ways. The body and `end` use सहायता / उत्तरदायित्व, while the hero uses मदद / ज़िम्मेदारी. This is the same normative sentence, so a reader sees two different "canonical" declarations, and "responsibility" (उत्तरदायित्व) drifts to ज़िम्मेदारी in the chrome.
- **Suggested:** Make all instances identical, e.g. `AI ने सहायता की। उत्तरदायित्व मेरा है।` (matching the body), or at minimum align the two chrome strings with the body rendering.
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Terminology — "specification" rendered two ways
- **Location:** `interfaceCopy.specification` / `interfaceCopy.versionFooter` / `interfaceCopy.readSpec` vs `sections[2].body`, `sections[3].body`, `sections[8].body`, `sections[20].body`, and `end`
- **Current:**
  - `interfaceCopy.specification`: `विनिर्देश`; `interfaceCopy.versionFooter`: `विनिर्देश v0.1`; `interfaceCopy.readSpec`: `विनिर्देश पढ़ें`
  - `sections[2].body`: `इस विशिष्टि`; `sections[20].body`: `भावी विशिष्टियों`; `end`: `+AI विशिष्टि v0.1`
- **English:** `specification` (and `Specification v0.1`)
- **Issue:** "Specification" is a core term. The chrome uses विनिर्देश while the body and the closing panel use विशिष्टि. The version string itself therefore appears as both `विनिर्देश v0.1` (footer) and `विशिष्टि v0.1` (`end`).
- **Suggested:** Pick one rendering and use it everywhere; e.g. change the body/`end` to `विनिर्देश` to match the chrome (or vice versa).
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 13 — "preparer" / "Prepared by" mistranslated as "presenter"
- **Location:** `sections[12].body`
- **Current:**
  - field list: `लेखक, प्रस्तोता, पुनरीक्षक अथवा उत्तरदायी-पक्ष क्षेत्र`
  - example: `<strong>प्रस्तुतकर्ता: Eric Mourant +AI</strong>`
- **English:**
  - `an author, preparer, reviewer or responsible-party field`
  - `<strong>Prepared by: Eric Mourant +AI</strong>`
- **Issue:** प्रस्तोता and प्रस्तुतकर्ता both mean "presenter / one who presents". The English role is "preparer" (the person who prepared the document), not "presenter". This changes the field's meaning.
- **Suggested:** Use a "prepare" word: field list `लेखक, तैयारकर्ता, पुनरीक्षक अथवा उत्तरदायी-पक्ष क्षेत्र`; example `<strong>द्वारा तैयार: Eric Mourant +AI</strong>`.
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 5.4 — dropped "submitted" from the release list
- **Location:** `sections[4].body`, 5.4
- **Current:** `कृति को प्रकाशित, प्रेषित, अभिनियोजित, प्रस्तुत अथवा अन्यथा जारी किया जाएगा या नहीं`
- **English:** `published, transmitted, deployed, submitted, presented or otherwise released`
- **Issue:** The English lists six release channels; the Hindi renders five and drops "submitted" (only "presented" — प्रस्तुत — survives). In a normative list of release actions this loses a distinct verb.
- **Suggested:** `कृति को प्रकाशित, प्रेषित, अभिनियोजित, प्रस्तुत, निवेदित अथवा अन्यथा जारी किया जाएगा या नहीं` (or another distinct word for "submitted").
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.markLabel — "Canonical mark" conflated with "standard mark"
- **Location:** `interfaceCopy.markLabel`
- **Current:** `मानक चिह्न`
- **English:** `Canonical mark`
- **Issue:** "Canonical" is rendered as मानक ("standard"), which collides with the spec's actual use of "standard" (e.g. section 2 `यह मानक`, section 8 `व्यावसायिक मानक`). Elsewhere "canonical" is consistently प्रामाणिक.
- **Suggested:** `प्रामाणिक चिह्न`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Terminology — "organisation" split between body and chrome
- **Location:** `sections[0].body`, `sections[1].body`, `sections[10]` etc. vs `interfaceCopy.description`, `interfaceCopy.heroLead`, `interfaceCopy.meaningTwoBody`, `interfaceCopy.plainBody`
- **Current:** body uses `संस्था` / `संस्थाएँ`; chrome uses `संगठन`
- **English:** `organisation`
- **Issue:** "Organisation" — part of the core "responsible party" concept — is rendered संस्था in the body but संगठन in the interface chrome. Two words for one key term.
- **Suggested:** Standardise on one (संस्था is used throughout the body, so prefer it in the chrome too).
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 3 — "normative requirements" softened to "expectations"
- **Location:** `sections[2].body`, first paragraph
- **Current:** `ये शब्द इस विशिष्टि के भीतर मानकात्मक अपेक्षाएँ व्यक्त करते हैं।`
- **English:** `are normative requirements within this specification.`
- **Issue:** "Requirements" is rendered as अपेक्षाएँ ("expectations"), which is both a weakening and risks confusion with the SHOULD rendering अपेक्षित है.
- **Suggested:** `ये शब्द इस विशिष्टि के भीतर मानकात्मक आवश्यकताएँ हैं।`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 7 — "substantially generated" rendered "mainly generated" (new in round 2)
- **Location:** `sections[7].body`, "MAY publish content substantially generated by AI"
- **Current:** `उत्तरदायी पक्ष के लिए मुख्यतः AI द्वारा उत्पादित विषय-वस्तु प्रकाशित करना वैकल्पिक है।`
- **English:** `The responsible party MAY publish content substantially generated by AI.`
- **Issue:** "मुख्यतः" means "mainly", drifting toward the "predominantly" concept that section 22 deliberately renders separately ("प्रमुखतः"). "Substantially" here means "to a significant extent".
- **Suggested:** `उत्तरदायी पक्ष के लिए महत्वपूर्ण रूप से AI द्वारा उत्पादित विषय-वस्तु प्रकाशित करना वैकल्पिक है।`
- **Severity:** LOW
- **Round 1:** new in round 2

## Round 1 verification

- [x] Slogan split (मदद/ज़िम्मेदारी vs सहायता/उत्तरदायित्व) — still present, carried forward
- [x] विनिर्देश vs विशिष्टि — still present, carried forward
- [x] Section 13 प्रस्तोता/प्रस्तुतकर्ता — still present, carried forward
- [x] Section 5.4 missing "submitted" — still present, carried forward
- [x] markLabel "मानक चिह्न" — still present, carried forward
- [x] संस्था vs संगठन — still present, carried forward
- [x] Section 3 "अपेक्षाएँ" — still present, carried forward

## Notes

- The five normative terms are rendered consistently (आवश्यक है / निषिद्ध है / अपेक्षित है / अपेक्षित नहीं है / वैकल्पिक है) with the English in parentheses at section 3 first definition, and later sections use the same renderings throughout.
- "provenance" is uniformly rendered उद्भव (sections 15, 25, `end`). This leans toward "emergence/origin"; a human speaker may prefer उद्गम / उद्गम-स्थान for the provenance sense, but the rendering is at least consistent.
- Section 9 "does not require" is rendered `अपेक्षा नहीं करता` — a slight softening, and it echoes the SHOULD word अपेक्षित; worth a second read to avoid conflating a non-normative "require" with the normative SHOULD.
- `interfaceCopy.colourChanged` (`बदलकर {colour} कर दिया गया है`) is awkward; `{colour} में बदल गया है` reads better. Cosmetic.
- `translationNote` is populated in Hindi while the English master is empty; additive, by-design field, not a correction.
- Section 4 "case-sensitive" is correctly rendered (`वर्ण-स्थिति के प्रति संवेदनशील`).
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
