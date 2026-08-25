# spec.kn.js — Round 1 correction suggestions

- **Language:** ಕನ್ನಡ (kn)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** The prose is largely accurate and the canonical slogan is perfectly consistent, but the MUST NOT / SHOULD NOT normative terms drift into weaker "ಬಾರದು" phrasing in several sections, and several visible prose labels were left in English.
- **Count:** 0 high / 5 medium / 3 low

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

### Normative term: SHOULD NOT — section 19
- **Location:** `sections[19].body`, "Use of the notation SHOULD NOT require"
- **Current:** `ಸಂಕೇತನದ ಬಳಕೆಗೆ ಈ ಕೆಳಗಿನವು ಅಗತ್ಯವಿರಬಾರದು:`
- **English:** `Use of the notation SHOULD NOT require:`
- **Issue:** SHOULD NOT is rendered "ಅಗತ್ಯವಿರಬಾರದು" instead of the established "ಶಿಫಾರಸು ಅಲ್ಲ" (section 3). The "ಬಾರದು" form drifts from the declared term. (Section 21 also paraphrases SHOULD NOT as "ಬಳಸದಿರುವುದು ಶಿಫಾರಸು" — semantically fine but different construction.)
- **Suggested:** `ಸಂಕೇತನದ ಬಳಕೆಗೆ ಈ ಕೆಳಗಿನವು ಅಗತ್ಯವಾಗಿರುವುದು ಶಿಫಾರಸು ಅಲ್ಲ:`
- **Severity:** MEDIUM

### Normative term: MAY — sections 4, 15, 16, 22
- **Location:** `sections[4]` ("ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು"), `sections[15]` ("ಇರಬಹುದು"), `sections[16]` ("ಪೂರಕವಾಗಬಹುದು"), `sections[22]` ("ಒಳಗೊಂಡಿರಬಹುದು")
- **Current:** e.g. §4 `ರೂಪಾಂತರಗಳನ್ನು ನಂತರ ವ್ಯಾಖ್ಯಾನಿಸಬಹುದು`; §15 `… ಸೃಜನಶೀಲ ಕೆಲಸಗಳೊಂದಿಗೆ ಇರಬಹುದು`; §16 `ಸಂಕೇತನವು ಅಂತಹ ಬಹಿರಂಗಪಡಿಸುವಿಕೆಗೆ ಪೂರಕವಾಗಬಹುದು`; §22 `ಕೃತಿಯು ಪ್ರಧಾನವಾಗಿ ಮಾನವ-ಮೂಲದ ವಸ್ತುವನ್ನು ಒಳಗೊಂಡಿರಬಹುದು`
- **English:** `MAY` (sections 4, 15, 16, 22)
- **Issue:** MAY is declared as `ಅನುಮತಿ` (section 3) and correctly rendered that way in most sections, but these four use the `-ಬಹುದು` ("can/may") form instead. Semantically equivalent to MAY, but breaks the one-consistent-rendering rule.
- **Suggested:** Recast to the `ಅನುಮತಿ` pattern, e.g. §4 `ರೂಪಾಂತರಗಳನ್ನು ನಂತರ ವ್ಯಾಖ್ಯಾನಿಸುವುದು ಅನುಮತಿ`; §22 `ಕೃತಿಯು ಪ್ರಧಾನವಾಗಿ ಮಾನವ-ಮೂಲದ ವಸ್ತುವನ್ನು ಒಳಗೊಳ್ಳುವುದು ಅನುಮತಿ`.
- **Severity:** LOW

### Section 3 — Normative terminology
- **Location:** `sections[3].body`, SHOULD definition
- **Current:** `ಶಿಫಾರಸು ಕಾನೂನುಬದ್ಧ ಕಾರಣವಿದ್ದಾಗ ತೊರೆಯಬಹುದಾದ ಪ್ರಬಲ ಶಿಫಾರಸನ್ನು ಸೂಚಿಸುತ್ತದೆ.`
- **English:** `SHOULD indicates a strong recommendation that may be departed from where a legitimate reason exists.`
- **Issue:** "legitimate reason" is narrowed to "ಕಾನೂನುಬದ್ಧ ಕಾರಣ" ("lawful/legal reason"). "legitimate" is broader than "legal".
- **Suggested:** `ಶಿಫಾರಸು ಸಮರ್ಥನೀಯ ಕಾರಣವಿದ್ದಾಗ ತೊರೆಯಬಹುದಾದ ಪ್ರಬಲ ಶಿಫಾರಸನ್ನು ಸೂಚಿಸುತ್ತದೆ.`
- **Severity:** LOW

### Section 6 — Material assistance
- **Location:** `sections[6].body`, "Incidental or purely mechanical AI functionality"
- **Current:** `ಪ್ರಾಸಂಗಿಕ ಅಥವಾ ಸಂಪೂರ್ಣ ಯಾಂತ್ರಿಕ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಕಾರ್ಯಕ್ಕೆ <code>+AI</code> ಅಗತ್ಯವಿಲ್ಲ.`
- **English:** `Incidental or purely mechanical AI functionality does not necessarily require <code>+AI</code>.`
- **Issue:** "necessarily" is dropped. "does not necessarily require" is a hedge (it might or might not); "ಅಗತ್ಯವಿಲ್ಲ" states "does not require" outright.
- **Suggested:** `ಪ್ರಾಸಂಗಿಕ ಅಥವಾ ಸಂಪೂರ್ಣ ಯಾಂತ್ರಿಕ ಕೃತಕ ಬುದ್ಧಿಮತ್ತೆ ಕಾರ್ಯಕ್ಕೆ <code>+AI</code> ಅಗತ್ಯವಾಗಿ ಬೇಕಾಗಿಲ್ಲ.`
- **Severity:** LOW

### Section 12 — Email and messaging
- **Location:** `sections[12].body`, example line
- **Current:** `<strong>Kindest regards,<br>Eric Mourant +AI</strong>`
- **English:** `<strong>Kindest regards,<br>Eric Mourant +AI</strong>`
- **Issue:** "Kindest regards," is left untranslated in a "reviewed" file; it is ordinary prose and should be localized (cf. the other Dravidian translations).
- **Suggested:** `<strong>ಶುಭಾಶಯಗಳೊಂದಿಗೆ,<br>Eric Mourant +AI</strong>`
- **Severity:** MEDIUM

### Section 13 — Documents
- **Location:** `sections[13].body`, the three example lines
- **Current:** `<strong>Author: Eric Mourant +AI</strong>`, `<strong>Prepared by: Eric Mourant +AI</strong>`, `<strong>Issued by: JAPER Technology +AI</strong>`
- **English:** `<strong>Author: Eric Mourant +AI</strong>`, `<strong>Prepared by: Eric Mourant +AI</strong>`, `<strong>Issued by: JAPER Technology +AI</strong>`
- **Issue:** The field labels "Author:", "Prepared by:", "Issued by:" are untranslated prose (not code, not example names) and should be localized.
- **Suggested:** `<strong>ಲೇಖಕ: Eric Mourant +AI</strong>`, `<strong>ತಯಾರಿಸಿದವರು: Eric Mourant +AI</strong>`, `<strong>ಹೊರಡಿಸಿದವರು: JAPER Technology +AI</strong>`
- **Severity:** MEDIUM

### Section 15 — Creative artifacts
- **Location:** `sections[15].body`, example line
- **Current:** `<strong>Created by Eric Mourant +AI</strong>`
- **English:** `<strong>Created by Eric Mourant +AI</strong>`
- **Issue:** "Created by" is left untranslated; it is a prose label and should be localized.
- **Suggested:** `<strong>ರಚಿಸಿದವರು Eric Mourant +AI</strong>`
- **Severity:** MEDIUM

## Notes
- "specification" is rendered "ವಿವರಣೆ" ("explanation/description") throughout the interface chrome (`specification`, `readSpec`, `versionFooter`, `untranslatedNotice.headline`) and "ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ" in the body. A native speaker should confirm this reads as "specification" rather than "explanation"; "ನಿರ್ದಿಷ್ಟತೆ" / "ವಿಶಿಷ್ಟೀಕರಣ" may be more precise.
- "mark" is "ಚಿಹ್ನೆ" in the body but "ಗುರುತು" in `markLabel` and `meansHeading`; both mean "mark/sign", consider aligning.
- "materially" is "ಗಣನೀಯವಾಗಿ" in the body but "ಗಮನಾರ್ಹವಾಗಿ" in `description`, `heroLead`, `meaningOneBody`, `plainBody`; both are valid, minor inconsistency.
- Section 14 keeps the `Author: Eric Mourant +AI` and `This project uses +AI.` code blocks in English — defensible since they are literal repository code.
- Example names, `+AI`, JSON keys, `data-company-example` / `data-json-example`, and the section-4 ASCII counter-examples are all preserved correctly.
