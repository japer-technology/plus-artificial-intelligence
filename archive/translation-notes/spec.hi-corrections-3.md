# spec.hi.js — Round 3 final correction recommendations

- **Language:** हिन्दी (hi)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.hi-corrections-2.md` (0 high / 3 medium / 5 low) — status of each item verified against the current file
- **Verdict:** The translation is now clean and internally consistent; every round-2 correction has been applied, and the round-3 terminology drift has been applied to the file (all six chrome strings now use उत्तरदायित्व, including plainBody, which the item did not list).
- **Count:** 0 high / 0 medium / 1 low

## Corrections

### Terminology — "responsibility" split between chrome (ज़िम्मेदारी) and body (उत्तरदायित्व)
- **Location:** `interfaceCopy.description`, `interfaceCopy.heroLead`, `interfaceCopy.meaningThreeTitle`, `interfaceCopy.plainQuote`, `interfaceCopy.footerLine` vs `interfaceCopy.heroTitle` / `interfaceCopy.documentTitle` and every section body / `end`
- **Current:**
  - `interfaceCopy.description`: `…कोई नामित व्यक्ति या संस्था उसकी ज़िम्मेदारी स्वीकार करता है।`
  - `interfaceCopy.heroLead`: `…वह पक्ष इसे जारी करने की ज़िम्मेदारी स्वीकार करता है।</strong>`
  - `interfaceCopy.meaningThreeTitle`: `ज़िम्मेदारी मनुष्य की रहती है`
  - `interfaceCopy.plainQuote`: `तीन अक्षर भागीदारी और ज़िम्मेदारी दोनों को दृश्यमान बनाते हैं।`
  - `interfaceCopy.footerLine`: `खुला संकेत। मानवीय ज़िम्मेदारी।`
  - vs `interfaceCopy.heroTitle`: `AI ने सहायता की। उत्तरदायित्व मेरा है।` (and all sections / `end` use उत्तरदायित्व)
- **English:** `responsibility`
- **Issue:** The core term "responsibility" — the load-bearing concept of the whole specification — is rendered two ways: ज़िम्मेदारी in five chrome strings and उत्तरदायित्व in the hero title, document title, every section body, and the `end` panel. This is the same class of drift as the round-2 "organisation" finding (संस्था vs संगठन): both words are valid synonyms for "responsibility", so the meaning is unchanged, but the single key term is split, with the body/slogan form (उत्तरदायित्व) the dominant one. "Accountability" (जवाबदेही) is correctly and separately rendered, so this is purely an internal inconsistency, not a cross-term collision.
- **Suggested:** Standardise on उत्तरदायित्व (the term already used in the canonical slogan, all section titles/bodies, and `end`): change ज़िम्मेदारी → उत्तरदायित्व in the five chrome strings, e.g. `ज़िम्मेदारी मनुष्य की रहती है` → `उत्तरदायित्व मनुष्य की रहती है`; `मानवीय ज़िम्मेदारी` → `मानवीय उत्तरदायित्व`. Note ज़िम्मेदारी is feminine and उत्तरदायित्व is masculine, so any dependent particles/genitives must agree (e.g. heroLead's `की ज़िम्मेदारी` → `का उत्तरदायित्व`).
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.hi.js

## Round 2 verification

- [x] Slogan split (मदद/ज़िम्मेदारी vs सहायता/उत्तरदायित्व) — applied: `heroTitle`, `documentTitle`, sections 1/23/26 and `end` now all read `AI ने सहायता की। उत्तरदायित्व मेरा है।`
- [x] विनिर्देश vs विशिष्टि — applied: sections 3, 4, 9, 21 and `end` now use विनिर्देश, matching the chrome (`specification`, `versionFooter`, `readSpec`).
- [x] Section 13 "preparer"/"Prepared by" — applied: field list now `तैयारकर्ता`, example now `द्वारा तैयार: Eric Mourant +AI`.
- [x] Section 5.4 dropped "submitted" — applied: `निवेदित` added; the list now has all six verbs (प्रकाशित, प्रेषित, अभिनियोजित, प्रस्तुत, निवेदित, अन्यथा जारी).
- [x] `markLabel` "मानक चिह्न" — applied: now `प्रामाणिक चिह्न`.
- [x] संस्था vs संगठन — applied: `description`, `heroLead`, `meaningTwoBody`, `plainBody` now use संस्था, matching the body.
- [x] Section 3 "अपेक्षाएँ" → "आवश्यकताएँ" — applied: now `मानकात्मक आवश्यकताएँ हैं`.
- [x] Section 7 "substantially generated" (मुख्यतः) — applied: now `महत्वपूर्ण रूप से AI द्वारा उत्पादित`.

## Notes

- **Load-bearing invariants verified intact:** `+AI` is byte-identical everywhere; Section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`) unchanged; Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`) unchanged; example names `Eric Mourant` and `JAPER Technology` spelled exactly throughout; `data-company-example` and `data-json-example` attributes present; section numbering 1–26, order, and `h4` labels 5.1–5.6 all correct.
- **Normative terms:** the five terms (आवश्यक है / निषिद्ध है / अपेक्षित है / अपेक्षित नहीं है / वैकल्पिक है) are rendered consistently across all 26 sections and the header comment's mapping table matches actual usage. Section 3 first definitions keep the English term in parentheses and correctly convey absolute requirement / absolute prohibition / strong recommendation departable where a legitimate reason exists / practice normally avoided but potentially justified / optional practice.
- **Structural fidelity:** HTML tag structure, attributes, and classes match the master in every body; only text content is translated. Section 6 (17 items) and Section 8 (17 items) lists are complete and match. No dropped clauses or added claims found. No unescaped backticks or `${` inside template literals. No leftover untranslated English prose (the Section 14 `<pre>` examples `Author: Eric Mourant +AI` and `This project uses +AI.` are intentional example artifacts, also English in the master).
- **Accepted no-change items carried from round-2 notes (still acceptable):** Section 9 "does not require" → `अपेक्षा नहीं करता` is still present and acceptable (अपेक्षा carries the requirement sense in formal Hindi; "require" here is non-normative). `colourChanged` (`बदलकर {colour} कर दिया गया है`) remains slightly awkward but is cosmetic and keeps the `{colour}` placeholder. `translationNote` remains populated (additive, by-design; the English master is empty). "provenance" remains uniformly उद्भव (sections 15, 25, `end`) — consistent, though a native speaker may prefer उद्गम/उद्गम-स्थान.
- **Minor observations (not corrections):** the header comment (line 3) still says "pending native-speaker review" while `status` is `"reviewed"` — an internal-file inconsistency, not a translation error. The placeholder `<Responsible Party>` is translated as `<उत्तरदायी पक्ष>` in sections 1 and 4; this is consistent with the rest of the document's translation of the term and acceptable. In `description`, the verb `करता है` (masculine singular) sits with the compound subject `व्यक्ति या संस्था`; a purist might prefer agreement with the nearer noun, but the meaning is unaffected.
- **Honest limitation:** I am not a native Hindi speaker. The severity call on the "responsibility" split (ज़िम्मेदारी vs उत्तरदायित्व) is made on consistency grounds, not on any claim that either word is wrong; both are correct Hindi for "responsibility". A native-speaker pass over sections 3, 7 and 26 remains advisable before final sign-off.
