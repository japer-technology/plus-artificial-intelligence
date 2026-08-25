# spec.pa.js — Round 2 final correction recommendations

- **Language:** ਪੰਜਾਬੀ (pa)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.pa-corrections-1.md` (0 high / 1 medium / 2 low) — all 3 findings re-verified against the current file and carried forward
- **Verdict:** One of the most accurate files: normative terms fully consistent and role labels localised. Four new low-severity findings added.
- **Count:** 0 high / 1 medium / 6 low

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
- **Round 1:** carried forward (verified still present)

### Terminology — "mark" rendered ਚਿੰਨ੍ਹ in body but ਨਿਸ਼ਾਨ in chrome
- **Location:** body (e.g. `sections[3].body`, `sections[4].body`, `sections[5].body`, `sections[6].body`, `sections[14].body`) vs `interfaceCopy.meansHeading`, `interfaceCopy.plainLead`, `interfaceCopy.markLabel`
- **Current:** body uses `ਚਿੰਨ੍ਹ`; chrome uses `ਨਿਸ਼ਾਨ` (e.g. `ਇਹ ਨਿਸ਼ਾਨ ਕੀ ਕਹਿੰਦਾ ਹੈ`, `ਇਹ ਨਿਸ਼ਾਨ`)
- **English:** `mark`
- **Issue:** Two words for the same core term ("mark"), split between the body and the interface chrome.
- **Suggested:** Standardise on `ਚਿੰਨ੍ਹ` (the body rendering) in the chrome as well.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.markLabel — "Canonical mark" conflated with "standard mark"
- **Location:** `interfaceCopy.markLabel`
- **Current:** `ਮਿਆਰੀ ਨਿਸ਼ਾਨ`
- **English:** `Canonical mark`
- **Issue:** ਮਿਆਰੀ means "standard"; elsewhere "canonical" is ਪ੍ਰਮਾਣਿਕ and "standard" (sections 2, 8) is ਮਿਆਰ. The label conflates "canonical" with "standard".
- **Suggested:** `ਪ੍ਰਮਾਣਿਕ ਚਿੰਨ੍ਹ`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 4 — "case-sensitive" rendered "sensitive to letter size" (new in round 2)
- **Location:** `sections[4].body`, "The mark is case-sensitive."
- **Current:** `ਇਹ ਚਿੰਨ੍ਹ ਅੱਖਰਾਂ ਦੇ ਆਕਾਰ ਪ੍ਰਤੀ ਸੰਵੇਦਨਸ਼ੀਲ ਹੈ।`
- **English:** `The mark is case-sensitive.`
- **Issue:** `ਅੱਖਰਾਂ ਦੇ ਆਕਾਰ` means "letter size"; case-sensitivity is about uppercase versus lowercase, not size.
- **Suggested:** `ਇਹ ਚਿੰਨ੍ਹ ਵੱਡੇ ਅਤੇ ਛੋਟੇ ਅੱਖਰਾਂ ਵਿੱਚ ਫ਼ਰਕ ਕਰਦਾ ਹੈ।`
- **Severity:** LOW
- **Round 1:** new in round 2

### Section 6 — "incidental" rendered "accidental" (new in round 2)
- **Location:** `sections[6].body`, "Incidental or purely mechanical AI functionality…"
- **Current:** `ਇਤਫ਼ਾਕੀ ਜਾਂ ਨਿਰੋਲ ਜੰਤਰਿਕ AI ਸਹੂਲਤ…`
- **English:** `Incidental or purely mechanical AI functionality does not necessarily require +AI.`
- **Issue:** `ਇਤਫ਼ਾਕੀ` means "accidental/by chance"; "incidental" means of minor or tangential relevance.
- **Suggested:** `ਮਾਮੂਲੀ ਜਾਂ ਨਿਰੋਲ ਜੰਤਰਿਕ AI ਸਹੂਲਤ…`
- **Severity:** LOW
- **Round 1:** new in round 2

### Section 16 — "employer" rendered "owner" (promoted from round-1 note)
- **Location:** `sections[16].body`, the disclosure list
- **Current:** `…ਕਿਸੇ ਪ੍ਰਕਾਸ਼ਕ, ਨਿਯਾਮਕ, ਮਾਲਕ, ਪੇਸ਼ੇਵਰ ਸੰਸਥਾ ਜਾਂ ਕਾਨੂੰਨ…`
- **English:** `…a publisher, regulator, employer, professional body or law.`
- **Issue:** `ਮਾਲਕ` means "owner"; the English role is "employer" (the one who employs), better rendered `ਰੁਜ਼ਗਾਰਦਾਤਾ`.
- **Suggested:** `…ਕਿਸੇ ਪ੍ਰਕਾਸ਼ਕ, ਨਿਯਾਮਕ, ਰੁਜ਼ਗਾਰਦਾਤਾ, ਪੇਸ਼ੇਵਰ ਸੰਸਥਾ ਜਾਂ ਕਾਨੂੰਨ…`
- **Severity:** LOW
- **Round 1:** new in round 2 (was a round-1 note)

### Section 2 — "exclusive authorship" rendered "special authorship" (promoted from round-1 note)
- **Location:** `sections[2].body`, closing paragraph
- **Current:** `…ਨਾ ਕਿ ਵਿਸ਼ੇਸ਼ ਲੇਖਕਤਾ ਬਾਰੇ।`
- **English:** `…rather than exclusive authorship.`
- **Issue:** `ਵਿਸ਼ੇਸ਼` means "special"; the English is "exclusive" (sole/one-party). The contrast the sentence draws is lost.
- **Suggested:** `…ਨਾ ਕਿ ਇਕੱਲੀ (ਵਿਸ਼ੇਸ਼-ਅਧਿਕਾਰੀ) ਲੇਖਕਤਾ ਬਾਰੇ।` (native-speaker confirm)
- **Severity:** LOW
- **Round 1:** new in round 2 (was a round-1 note)

## Round 1 verification

- [x] ਵਿਸ਼ੇਸ਼ਤਾ vs ਵਿਸ਼ੇਸ਼-ਵਿਵਰਣ — still present, carried forward
- [x] ਨਿਸ਼ਾਨ vs ਚਿੰਨ੍ਹ — still present, carried forward
- [x] markLabel "ਮਿਆਰੀ ਨਿਸ਼ਾਨ" — still present, carried forward

## Notes

- The five normative terms are rendered consistently throughout all 26 sections — MUST → ਲਾਜ਼ਮੀ, MUST NOT → ਸਖ਼ਤੀ ਨਾਲ ਵਰਜਿਤ, SHOULD → ਸਿਫ਼ਾਰਸ਼ੀ, SHOULD NOT → ਸਿਫ਼ਾਰਸ਼ੀ ਨਹੀਂ, MAY → ਵਿਕਲਪਿਕ — with the English term in parentheses at the section 3 first definition. MUST NOT is correctly preserved as an absolute prohibition.
- The canonical slogan `AI ਨੇ ਮਦਦ ਕੀਤੀ। ਜ਼ਿੰਮੇਵਾਰੀ ਮੇਰੀ ਹੈ।` is identical across the hero, `documentTitle`, sections 1/23/26, and `end`.
- Section 5.4 correctly retains all six release channels, including "submitted" (ਜਮ੍ਹਾਂ).
- Section 13 role labels (`ਲੇਖਕ:`, `ਤਿਆਰ ਕੀਤਾ:`, `ਜਾਰੀ ਕੀਤਾ:`) and the section 12 salutation (`ਸਤਿਕਾਰ ਸਹਿਤ,`) are properly localised.
- "metadata" → `ਵੇਰਵਾ` ("details") is consistent but loose; and "provenance" appears as both `ਸਰੋਤ-ਪ੍ਰਮਾਣ` (sections 25, `end`) and `ਸਰੋਤ-ਵੇਰਵਾ` (section 15) — consider aligning.
- Section 7 "substantially generated" (`ਬਹੁਤ ਹੱਦ ਤੱਕ AI ਨੇ ਬਣਾਈ`) is an acceptable rendering of "substantially"; no drift.
- Section 14's code-block examples remain in English; matches the sibling languages' example-code treatment, but note the internal contrast with section 13 where `Author:` is localised as `ਲੇਖਕ:`.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
