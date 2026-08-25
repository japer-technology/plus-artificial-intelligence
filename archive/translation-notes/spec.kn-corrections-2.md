# spec.kn.js — Round 2 final correction recommendations

- **Language:** ಕನ್ನಡ (kn)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.kn-corrections-1.md` (0 high / 5 medium / 3 low) — all 8 findings re-verified against the current file and carried forward
- **Verdict:** Prose largely accurate and the canonical slogan perfectly consistent; the MUST NOT / SHOULD NOT normative drift remains the key issue, plus two round-1 notes promoted to corrections.
- **Count:** 0 high / 5 medium / 5 low

## Corrections

### Normative term: MUST NOT — sections 4, 12, 16
- **Location:** `sections[4].body` (last sentence), `sections[12].body`, `sections[16].body`
- **Current:**
  - §4: `… ಅವು <code>+AI</code> ನ ಅಂಗೀಕೃತ ಅರ್ಥವನ್ನು ಹೊಂದಿವೆ ಎಂದು ಭಾವಿಸಬಾರದು.`
  - §12: `ಹೈಪರ್ಲಿಂಕ್ ಗೋಚರ ಸಂಕೇತನವನ್ನು ಬದಲಾಯಿಸಬಾರದು.`
  - §16: `… ಯಾವುದೇ ಹೆಚ್ಚು ನಿರ್ದಿಷ್ಟ ಬಹಿರಂಗಪಡಿಸುವಿಕೆಗೆ ಬದಲಿಯಾಗಿ <code>+AI</code> ಅನ್ನು ಪ್ರತಿನಿಧಿಸಬಾರದು.`
- **English:**
  - §4: `… they MUST NOT be assumed to carry the canonical <code>+AI</code> meaning unless explicitly defined.`
  - §12: `A hyperlink MUST NOT alter the visible notation.`
  - §16: `<code>+AI</code> MUST NOT be represented as replacing any more specific disclosure required by a publisher, regulator, employer, professional body or law.`
- **Issue:** The file header and section 3 establish `MUST NOT → ನಿಷಿದ್ಧ` and define it as "ಸಂಪೂರ್ಣ ನಿಷೇಧ" (absolute prohibition). These three clauses instead use `-ಬಾರದು` ("should not"), which both breaks the required consistency and weakens an absolute prohibition into a mere recommendation.
- **Suggested:**
  - §4: `… ಅವು <code>+AI</code> ನ ಅಂಗೀಕೃತ ಅರ್ಥವನ್ನು ಹೊಂದಿವೆ ಎಂದು ಭಾವಿಸುವುದು ನಿಷಿದ್ಧ.`
  - §12: `ಹೈಪರ್ಲಿಂಕ್ ಗೋಚರ ಸಂಕೇತನವನ್ನು ಬದಲಾಯಿಸುವುದು ನಿಷಿದ್ಧ.`
  - §16: `… ಯಾವುದೇ ಹೆಚ್ಚು ನಿರ್ದಿಷ್ಟ ಬಹಿರಂಗಪಡಿಸುವಿಕೆಗೆ ಬದಲಿಯಾಗಿ <code>+AI</code> ಅನ್ನು ಪ್ರತಿನಿಧಿಸುವುದು ನಿಷಿದ್ಧ.`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present in all three locations)

### Normative term: SHOULD NOT — section 19
- **Location:** `sections[19].body`, "Use of the notation SHOULD NOT require"
- **Current:** `ಸಂಕೇತನದ ಬಳಕೆಗೆ ಈ ಕೆಳಗಿನವು ಅಗತ್ಯವಿರಬಾರದು:`
- **English:** `Use of the notation SHOULD NOT require:`
- **Issue:** SHOULD NOT is rendered "ಅಗತ್ಯವಿರಬಾರದು" instead of the established "ಶಿಫಾರಸು ಅಲ್ಲ" (section 3). The "ಬಾರದು" form drifts from the declared term. (Section 21 also paraphrases SHOULD NOT as "ಬಳಸದಿರುವುದು ಶಿಫಾರಸು" — semantically fine but different construction.)
- **Suggested:** `ಸಂಕೇತನದ ಬಳಕೆಗೆ ಈ ಕೆಳಗಿನವು ಅಗತ್ಯವಾಗಿರುವುದು ಶಿಫಾರಸು ಅಲ್ಲ:`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 12 — "Kindest regards," left untranslated
- **Location:** `sections[12].body`, example line
- **Current:** `<strong>Kindest regards,<br>Eric Mourant +AI</strong>`
- **English:** `<strong>Kindest regards,<br>Eric Mourant +AI</strong>`
- **Issue:** "Kindest regards," is left untranslated in a "reviewed" file; it is ordinary prose and should be localized (cf. the other Dravidian translations).
- **Suggested:** `<strong>ಶುಭಾಶಯಗಳೊಂದಿಗೆ,<br>Eric Mourant +AI</strong>`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 13 — untranslated field labels
- **Location:** `sections[13].body`, the three example lines
- **Current:** `<strong>Author: Eric Mourant +AI</strong>`, `<strong>Prepared by: Eric Mourant +AI</strong>`, `<strong>Issued by: JAPER Technology +AI</strong>`
- **English:** `<strong>Author: Eric Mourant +AI</strong>`, `<strong>Prepared by: Eric Mourant +AI</strong>`, `<strong>Issued by: JAPER Technology +AI</strong>`
- **Issue:** The field labels "Author:", "Prepared by:", "Issued by:" are untranslated prose (not code, not example names) and should be localized.
- **Suggested:** `<strong>ಲೇಖಕ: Eric Mourant +AI</strong>`, `<strong>ತಯಾರಿಸಿದವರು: Eric Mourant +AI</strong>`, `<strong>ಹೊರಡಿಸಿದವರು: JAPER Technology +AI</strong>`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 15 — "Created by" left untranslated
- **Location:** `sections[15].body`, example line
- **Current:** `<strong>Created by Eric Mourant +AI</strong>`
- **English:** `<strong>Created by Eric Mourant +AI</strong>`
- **Issue:** "Created by" is left untranslated; it is a prose label and should be localized.
- **Suggested:** `<strong>ರಚಿಸಿದವರು Eric Mourant +AI</strong>`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Normative term: MAY — sections 4, 15, 16, 22
- **Location:** `sections[4]` ("ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು"), `sections[15]` ("ಇರಬಹುದು"), `sections[16]` ("ಪೂರಕವಾಗಬಹುದು"), `sections[22]` ("ಒಳಗೊಂಡಿರಬಹುದು")
- **Current:** e.g. §4 `ರೂಪಾಂತರಗಳನ್ನು ನಂತರ ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು`; §15 `… ಸೃಜನಶೀಲ ಕೆಲಸಗಳೊಂದಿಗೆ ಇರಬಹುದು`; §16 `ಸಂಕೇತನವು ಅಂತಹ ಬಹಿರಂಗಪಡಿಸುವಿಕೆಗೆ ಪೂರಕವಾಗಬಹುದು`; §22 `ಕೃತಿಯು ಪ್ರಧಾನವಾಗಿ ಮಾನವ-ಮೂಲದ ವಸ್ತುವನ್ನು ಒಳಗೊಂಡಿರಬಹುದು`
- **English:** `MAY` (sections 4, 15, 16, 22)
- **Issue:** MAY is declared as `ಅನುಮತಿ` (section 3) and correctly rendered that way in most sections, but these four use the `-ಬಹುದು` ("can/may") form instead. Semantically equivalent to MAY, but breaks the one-consistent-rendering rule.
- **Suggested:** Recast to the `ಅನುಮತಿ` pattern, e.g. §4 `ರೂಪಾಂತರಗಳನ್ನು ನಂತರ ವ್ಯಾಖ್ಯಾನಿಸುವುದು ಅನುಮತಿ`; §22 `ಕೃತಿಯು ಪ್ರಧಾನವಾಗಿ ಮಾನವ-ಮೂಲದ ವಸ್ತುವನ್ನು ಒಳಗೊಳ್ಳುವುದು ಅನುಮತಿ`.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 3 — "legitimate reason" narrowed to "lawful reason"
- **Location:** `sections[3].body`, SHOULD definition
- **Current:** `ಶಿಫಾರಸು ಕಾನೂನುಬದ್ಧ ಕಾರಣವಿದ್ದಾಗ ತೊರೆಯಬಹುದಾದ ಪ್ರಬಲ ಶಿಫಾರಸನ್ನು ಸೂಚಿಸುತ್ತದೆ.`
- **English:** `SHOULD indicates a strong recommendation that may be departed from where a legitimate reason exists.`
- **Issue:** "legitimate reason" is narrowed to "ಕಾನೂನುಬದ್ಧ ಕಾರಣ" ("lawful/legal reason"). "legitimate" is broader than "legal".
- **Suggested:** `ಶಿಫಾರಸು ಸಮರ್ಥನೀಯ ಕಾರಣವಿದ್ದಾಗ ತೊರೆಯಬಹುದಾದ ಪ್ರಬಲ ಶಿಫಾರಸನ್ನು ಸೂಚಿಸುತ್ತದೆ.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 6 — "necessarily" dropped
- **Location:** `sections[6].body`, "Incidental or purely mechanical AI functionality"
- **Current:** `ಪ್ರಾಸಂಗಿಕ ಅಥವಾ ಸಂಪೂರ್ಣ ಯಾಂತ್ರಿಕ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಕಾರ್ಯಕ್ಕೆ <code>+AI</code> ಅಗತ್ಯವಿಲ್ಲ.`
- **English:** `Incidental or purely mechanical AI functionality does not necessarily require <code>+AI</code>.`
- **Issue:** "necessarily" is dropped. "does not necessarily require" is a hedge (it might or might not); "ಅಗತ್ಯವಿಲ್ಲ" states "does not require" outright.
- **Suggested:** `ಪ್ರಾಸಂಗಿಕ ಅಥವಾ ಸಂಪೂರ್ಣ ಯಾಂತ್ರಿಕ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಕಾರ್ಯಕ್ಕೆ <code>+AI</code> ಅಗತ್ಯವಾಗಿ ಬೇಕಾಗಿಲ್ಲ.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Chrome — "specification" rendered "explanation" (promoted from round-1 note)
- **Location:** `interfaceCopy.specification`, `interfaceCopy.readSpec`, `interfaceCopy.versionFooter`, `untranslatedNotice.headline`
- **Current:** `ವಿವರಣೆ` (e.g. `ವಿವರಣೆಯನ್ನು ಓದಿ`, `ವಿವರಣೆ v0.1`)
- **English:** `Specification`
- **Issue:** `ವಿವರಣೆ` means "explanation/description"; the body uses "ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ". The chrome alone risks reading as "explanation" rather than "specification".
- **Suggested:** Use `ನಿರ್ದಿಷ್ಟತೆ` / `ವಿಶಿಷ್ಟೀಕರಣ` (or at least the body's `ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ`) in the chrome; native-speaker confirm first.
- **Severity:** LOW
- **Round 1:** new in round 2 (was a round-1 note)

### Chrome — "mark" rendered two ways (promoted from round-1 note)
- **Location:** `interfaceCopy.markLabel` (`ಪ್ರಮಾಣಿಕ ಗುರುತು`), `interfaceCopy.meansHeading` (`ಈ ಗುರುತು`) vs body (`ಚಿಹ್ನೆ`)
- **Current:** `ಗುರುತು` in chrome, `ಚಿಹ್ನೆ` in the body
- **English:** `mark`
- **Issue:** One core concept split across two words; align on `ಚಿಹ್ನೆ` (the body's term).
- **Suggested:** `ಪ್ರಮಾಣಿಕ ಚಿಹ್ನೆ`, `ಈ ಚಿಹ್ನೆ ಏನು ಹೇಳುತ್ತದೆ`.
- **Severity:** LOW
- **Round 1:** new in round 2 (was a round-1 note)

## Round 1 verification

- [x] MUST NOT drift (§4, §12, §16) — still present, carried forward
- [x] SHOULD NOT §19 — still present, carried forward
- [x] MAY -ಬಹುದು (§4, §15, §16, §22) — still present, carried forward
- [x] Section 3 "ಕಾನೂನುಬದ್ಧ" — still present, carried forward
- [x] Section 6 missing "necessarily" — still present, carried forward
- [x] Section 12 "Kindest regards," — still present, carried forward
- [x] Section 13 English labels — still present, carried forward
- [x] Section 15 "Created by" — still present, carried forward

## Notes

- "materially" is "ಗಣನೀಯವಾಗಿ" in the body but "ಗಮನಾರ್ಹವಾಗಿ" in `description`, `heroLead`, `meaningOneBody`, `plainBody`; both are valid, minor inconsistency.
- Section 7 correctly renders "substantially generated" as "ಗಣನೀಯವಾಗಿ ಉತ್ಪತ್ತಿಯಾದ" — no drift.
- Section 4 "case-sensitive" is correctly rendered (`ಕೇಸ್-ಸಂವೇದಿಯಾಗಿದೆ`).
- Section 14 keeps the `Author: Eric Mourant +AI` and `This project uses +AI.` code blocks in English — defensible since they are literal repository code.
- Canonical slogan `AI ಸಹಾಯ ಮಾಡಿತು. ನಾನು ಜವಾಬ್ದಾರಿ ಹೊರುತ್ತೇನೆ.` is identical across documentTitle, heroTitle, sections 1/23/26 and `end`.
- Example names, `+AI`, JSON keys, `data-company-example` / `data-json-example`, and the section-4 ASCII counter-examples are all preserved correctly.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
