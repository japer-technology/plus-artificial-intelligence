# spec.mr.js — Round 1 correction suggestions

- **Language:** मराठी (mr)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** The normative sections are accurate and the five normative terms are used consistently; the main problems are a terminology split for "specification" between chrome and body, plus a few minor meaning slips.
- **Count:** 0 high / 1 medium / 4 low

## Corrections

### Terminology — "specification" rendered two ways (and one leans "details")
- **Location:** `interfaceCopy.specification` / `interfaceCopy.versionFooter` / `interfaceCopy.readSpec` / `untranslatedNotice.headline` vs `sections[2].body`, `sections[3].body`, `sections[8].body`, `sections[20].body`, and `end`
- **Current:**
  - `interfaceCopy.specification`: `तपशील`; `interfaceCopy.versionFooter`: `तपशील v0.1`; `interfaceCopy.readSpec`: `तपशील वाचा`; `untranslatedNotice.headline`: `खालील तपशील इंग्रजीमध्ये दर्शविला आहे.`
  - `sections[2].body`: `विशिष्टीकरणामध्ये`; `sections[20].body`: `विशिष्टीकरणांमध्ये`; `end`: `+AI विशिष्टीकरण आवृत्ती ०.१`
- **English:** `Specification v0.1` / `+AI Specification v0.1` (and `specification` generally)
- **Issue:** "Specification" is a core term. The chrome uses तपशील ("details") while the body and closing panel use विशिष्टीकरण. The version string therefore appears both as `तपशील v0.1` and `विशिष्टीकरण आवृत्ती ०.१`; तपशील also under-translates "specification" toward "details".
- **Suggested:** Use one rendering everywhere, preferably `विशिष्टीकरण` in the chrome too (`विशिष्टीकरण वाचा`, `विशिष्टीकरण v0.1`, and align the `end` version string with the footer).
- **Severity:** MEDIUM

### Section 6 — "editing that materially changes meaning" loses "meaning"
- **Location:** `sections[5].body`, list item
- **Current:** `<li>अर्थात सारभूत बदल करणारे संपादन;</li>`
- **English:** `<li>editing that materially changes meaning;</li>`
- **Issue:** `अर्थात` is the adverb "that is / namely", so the item reads "namely, editing that makes a substantial change" — the object "meaning" is dropped. The English is specifically about editing that changes the *meaning*.
- **Suggested:** `<li>अर्थामध्ये सारभूत बदल करणारे संपादन;</li>`
- **Severity:** LOW

### Section 5.4 — dropped "submitted" from the release list
- **Location:** `sections[4].body`, 5.4
- **Current:** `प्रकाशित, प्रेषित, कार्यान्वित, सादर अथवा अन्य प्रकारे प्रसृत`
- **English:** `published, transmitted, deployed, submitted, presented or otherwise released`
- **Issue:** The English lists six release channels; the Marathi renders five and drops "submitted" (only "presented" — सादर — survives).
- **Suggested:** Add a distinct word for "submitted", e.g. `प्रकाशित, प्रेषित, कार्यान्वित, सादर, सुपूर्द अथवा अन्य प्रकारे प्रसृत`.
- **Severity:** LOW

### interfaceCopy.markLabel — "Canonical mark" conflated with "standard mark"
- **Location:** `interfaceCopy.markLabel`
- **Current:** `मानक चिन्ह`
- **English:** `Canonical mark`
- **Issue:** "Canonical" is rendered मानक ("standard"), which collides with the spec's actual "standard" (section 2 `हे मानक`, section 8 `व्यावसायिक मानक`). In the body, "canonical" is consistently प्रमाणभूत.
- **Suggested:** `प्रमाणभूत चिन्ह`
- **Severity:** LOW

### Section 24 — plain-English "should" rendered with the MUST word
- **Location:** `sections[23].body`
- **Current:** `व्यक्तीस दोन्ही प्रश्नांना <strong>होय</strong> असे उत्तर देता येणे आवश्यक असते:`
- **English:** `a person should be able to answer <strong>yes</strong> to both questions:`
- **Issue:** The English "should" here is plain prose, not the normative SHOULD (अपेक्षित आहे). Rendering it as आवश्यक असते reuses the MUST word and unintentionally strengthens the sentence into a requirement, blurring the normative vocabulary.
- **Suggested:** `व्यक्तीस दोन्ही प्रश्नांना <strong>होय</strong> असे उत्तर देता यायला हवे:` (or another non-normative "should").
- **Severity:** LOW

## Notes
- The five normative terms are rendered consistently (आवश्यक आहे / निषिद्ध आहे / अपेक्षित आहे / अपेक्षित नाही / ऐच्छिक आहे), with English in parentheses at the section 3 first definition and no drift in later sections.
- "Responsibility" → जबाबदारी and "accountability" → उत्तरदायित्व are kept distinct and consistent, including the canonical shorthand `AI ने मदत केली. जबाबदारी माझी आहे.` (identical in hero, sections 1/23/26, and `end`) — good.
- "artifact" is uniformly rendered कृती, which leans "act/action" rather than "artifact/work"; a native speaker should confirm whether निर्मिती or कलाकृती would read better.
- Non-standard coinages worth a native double-check: "software" → आज्ञावली ("command list"), "data interpretation" → विदेचे अर्थनिर्णयन (विदे for "data"), and "metadata" → अधिविदा. All are used consistently, so they are not terminology drift, but they are unusual terms.
- Section 13 correctly distinguishes "preparer"/"Prepared by" (तयार करणारा / तयार केले), unlike some sibling languages.
