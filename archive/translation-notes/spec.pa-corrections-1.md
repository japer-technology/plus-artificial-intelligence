# spec.pa.js — Round 1 correction suggestions

- **Language:** ਪੰਜਾਬੀ (pa)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** The most accurate of the four files reviewed in this batch — normative terms are fully consistent, the canonical slogan is reused verbatim, and role labels are localised; only minor terminology splits remain.
- **Count:** 0 high / 1 medium / 2 low

## Corrections

### Terminology — "specification" rendered two ways (chrome uses "feature")
- **Location:** `interfaceCopy.specification` / `interfaceCopy.readSpec` / `interfaceCopy.versionFooter` / `untranslatedNotice.headline` vs `sections[2].body`, `sections[3].body`, `sections[8].body`, `sections[20].body`, and `end`
- **Current:**
  - `interfaceCopy.specification`: `ਵਿਸ਼ੇਸ਼ਤਾ`; `interfaceCopy.readSpec`: `ਵਿਸ਼ੇਸ਼ਤਾ ਪੜ੍ਹੋ`; `interfaceCopy.versionFooter`: `ਵਿਸ਼ੇਸ਼ਤਾ v0.1`; `untranslatedNotice.headline`: `ਹੇਠਾਂ ਦਿੱਤੀ ਵਿਸ਼ੇਸ਼ਤਾ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਦਿਖਾਈ ਗਈ ਹੈ।`
  - body/`end`: `ਵਿਸ਼ੇਸ਼-ਵਿਵਰਣ` (e.g. `ਇਸ ਵਿਸ਼ੇਸ਼-ਵਿਵਰਣ ਅੰਦਰ`, `+AI ਵਿਸ਼ੇਸ਼-ਵਿਵਰਣ v0.1`)
- **English:** `Specification v0.1` / `+AI Specification v0.1`
- **Issue:** "Specification" is split between ਵਿਸ਼ੇਸ਼ਤਾ ("feature/speciality") in the chrome and ਵਿਸ਼ੇਸ਼-ਵਿਵਰਣ ("specification") in the body and closing panel. The version string therefore appears as both `ਵਿਸ਼ੇਸ਼ਤਾ v0.1` and `ਵਿਸ਼ੇਸ਼-ਵਿਵਰਣ v0.1`, and ਵਿਸ਼ੇਸ਼ਤਾ under-translates the term.
- **Suggested:** Use `ਵਿਸ਼ੇਸ਼-ਵਿਵਰਣ` throughout the chrome (`ਵਿਸ਼ੇਸ਼-ਵਿਵਰਣ ਪੜ੍ਹੋ`, `ਵਿਸ਼ੇਸ਼-ਵਿਵਰਣ v0.1`, and in the notice headline).
- **Severity:** MEDIUM

### Terminology — "mark" rendered ਚਿੰਨ੍ਹ in body but ਨਿਸ਼ਾਨ in chrome
- **Location:** body (e.g. `sections[3].body`, `sections[4].body`, `sections[5].body`, `sections[6].body`, `sections[14].body`) vs `interfaceCopy.meansHeading`, `interfaceCopy.plainLead`, `interfaceCopy.markLabel`
- **Current:** body uses `ਚਿੰਨ੍ਹ` (e.g. `ਪ੍ਰਮਾਣਿਕ ਚਿੰਨ੍ਹ`, `ਚਿੰਨ੍ਹ ਦਾ ਅਰਥ`, `ਚਿੰਨ੍ਹ ਦੀ ਵਰਤੋਂ`); chrome uses `ਨਿਸ਼ਾਨ` (e.g. `ਇਹ ਨਿਸ਼ਾਨ ਕੀ ਕਹਿੰਦਾ ਹੈ`, `ਇਹ ਨਿਸ਼ਾਨ`)
- **English:** `mark`
- **Issue:** Two words for the same core term ("mark"), split between the body and the interface chrome.
- **Suggested:** Standardise on `ਚਿੰਨ੍ਹ` (the body rendering) in the chrome as well.
- **Severity:** LOW

### interfaceCopy.markLabel — "Canonical mark" conflated with "standard mark"
- **Location:** `interfaceCopy.markLabel`
- **Current:** `ਮਿਆਰੀ ਨਿਸ਼ਾਨ`
- **English:** `Canonical mark`
- **Issue:** ਮਿਆਰੀ means "standard"; elsewhere "canonical" is ਪ੍ਰਮਾਣਿਕ and "standard" (sections 2, 8) is ਮਿਆਰ. The label conflates "canonical" with "standard".
- **Suggested:** `ਪ੍ਰਮਾਣਿਕ ਚਿੰਨ੍ਹ`
- **Severity:** LOW

## Notes
- The five normative terms are rendered consistently throughout all 26 sections — MUST → ਲਾਜ਼ਮੀ, MUST NOT → ਸਖ਼ਤੀ ਨਾਲ ਵਰਜਿਤ, SHOULD → ਸਿਫ਼ਾਰਸ਼ੀ, SHOULD NOT → ਸਿਫ਼ਾਰਸ਼ੀ ਨਹੀਂ, MAY → ਵਿਕਲਪਿਕ — with the English term in parentheses at the section 3 first definition. No drift detected, and MUST NOT is correctly preserved as an absolute prohibition (unlike some sibling languages).
- The canonical slogan `AI ਨੇ ਮਦਦ ਕੀਤੀ। ਜ਼ਿੰਮੇਵਾਰੀ ਮੇਰੀ ਹੈ।` is identical across the hero, `documentTitle`, sections 1/23/26, and `end` — good.
- Section 5.4 correctly retains all six release channels, including "submitted" (ਜਮ੍ਹਾਂ).
- Section 13 role labels (`ਲੇਖਕ:`, `ਤਿਆਰ ਕੀਤਾ:`, `ਜਾਰੀ ਕੀਤਾ:`) and the section 12 salutation (`ਸਤਿਕਾਰ ਸਹਿਤ,`) are properly localised.
- Minor points for a native speaker to double-check: "exclusive authorship" → `ਵਿਸ਼ੇਸ਼ ਲੇਖਕਤਾ` (section 2) leans "special" rather than "sole/exclusive"; "employer" → `ਮਾਲਕ` (section 16) leans "owner"; "metadata" → `ਵੇਰਵਾ` ("details") is consistent but loose; and "provenance" appears as both `ਸਰੋਤ-ਪ੍ਰਮਾਣ` (sections 25, `end`) and `ਸਰੋਤ-ਵੇਰਵਾ` (section 15).
- Section 14's code-block examples `Author: Eric Mourant +AI` and `This project uses +AI.` remain in English; this matches the sibling languages' example-code treatment, but note the internal contrast with section 13 where `Author:` is localised as `ਲੇਖਕ:`.
