# spec.kn.js — Round 3 final correction recommendations

- **Language:** ಕನ್ನಡ (kn)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.kn-corrections-2.md` (5 high / 5 medium / 5 low) — status of each item verified against the current file
- **Verdict:** Round 2 was fully applied and the normative-term drift is resolved; all three round-3 terminology/style items have now been applied to the file.
- **Count:** 0 high / 0 medium / 3 low

## Corrections

### Canonical rendered two ways — `markLabel` vs body
- **Location:** `interfaceCopy.markLabel` (vs body sections 1, 4, 21, 23, 26)
- **Current:** `"markLabel": "ಪ್ರಮಾಣಿಕ ಚಿಹ್ನೆ"`
- **English:** `"markLabel": "Canonical mark"`
- **Issue:** The body consistently renders "canonical" as "ಅಂಗೀಕೃತ" (e.g. §1 "ಅಂಗೀಕೃತ ಅಭಿವ್ಯಕ್ತಿ", §4 "ಅಂಗೀಕೃತ ಚಿಹ್ನೆ", §21 "ಅಂಗೀಕೃತ ವ್ಯಾಪ್ತಿ", §23 "ಅಂಗೀಕೃತ ಸಾರ್ವಜನಿಕ ವಿವರಣೆ", §26 "ಅಂಗೀಕೃತ ಘೋಷಣೆ"), but `markLabel` uses "ಪ್ರಮಾಣಿಕ". Elsewhere in the file "ಪ್ರಮಾಣಿಕ" is the established rendering of "normative" (`untranslatedNotice.detail` "ಪ್ರಮಾಣಿಕ ಆವೃತ್ತಿ", `translationNote` "ಪ್ರಮಾಣಿಕ ದಾಖಲೆ"), so this conflation reads "normative mark" rather than "canonical mark". One English term split across two Kannada words.
- **Suggested:** `"markLabel": "ಅಂಗೀಕೃತ ಚಿಹ್ನೆ"`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.kn.js

### "Specification" split between chrome and body after round-2 fix
- **Location:** `interfaceCopy.specification` / `interfaceCopy.readSpec` / `interfaceCopy.versionFooter` / `untranslatedNotice.headline` vs body and `end`
- **Current:** chrome now `ನಿರ್ದಿಷ್ಟತೆ` (`ನಿರ್ದಿಷ್ಟತೆಯನ್ನು ಓದಿ`, `ನಿರ್ದಿಷ್ಟತೆ v0.1`) while the body still uses `ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ` (§3 `ಈ ನಿರ್ದಿಷ್ಟ ವಿವರಣೆಯಲ್ಲಿ`, §9 `ಈ ನಿರ್ದಿಷ್ಟ ವಿವರಣೆಯ ಭವಿಷ್ಯದ ಆವೃತ್ತಿಗಳು`) and `end` uses `+AI ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ v0.1`.
- **English:** `Specification` (all locations)
- **Issue:** Round 2 changed only the chrome to `ನಿರ್ದಿಷ್ಟತೆ`; the body and `end` were left at `ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ`. The same English term now has two renderings in one file, and `versionFooter` (`ನಿರ್ದಿಷ್ಟತೆ v0.1`) no longer matches the `end` string (`+AI ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ v0.1`).
- **Suggested:** Align on one form. Either (a) revert chrome to `ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ` to match the body, or (b) carry `ನಿರ್ದಿಷ್ಟತೆ` through the body and `end`; in both cases `versionFooter` and `end` must agree. Native-speaker confirm which word reads best as "specification" before applying.
- **Severity:** LOW
- **Round 2:** new in round 3 (consequence of the applied round-2 chrome fix)
- **Status:** applied to spec.kn.js (option (a): chrome reverted to `ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ` — readSpec, specification, versionFooter and untranslatedNotice.headline now match the body and `end`)

### Section 24 — "Am I willing" rendered in masculine first person
- **Location:** `sections[24].body`, second test question
- **Current:** `ಅದನ್ನು ಬಿಡುಗಡೆ ಮಾಡುವ ಜವಾಬ್ದಾರಿಯನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ನಾನು ಸಿದ್ಧನಿದ್ದೇನೆಯೇ?`
- **English:** `Am I willing to take responsibility for releasing it?`
- **Issue:** `ಸಿದ್ಧನಿದ್ದೇನೆಯೇ` embeds the masculine copula (`ನಿ`), making the hypothetical speaker male. The English is gender-neutral and this declaration is addressed to any person, so the gendered form is a subtle narrowing.
- **Suggested:** `ಅದನ್ನು ಬಿಡುಗಡೆ ಮಾಡುವ ಜವಾಬ್ದಾರಿಯನ್ನು ತೆಗೆದುಕೊಳ್ಳಲು ನಾನು ಸಿದ್ಧವಾಗಿದ್ದೇನೆಯೇ?`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.kn.js

## Round 2 verification

- [x] MUST NOT → ನಿಷಿದ್ಧ (§4, §12, §16) — applied in all three locations.
- [x] SHOULD NOT §19 → `ಅಗತ್ಯವಾಗಿರುವುದು ಶಿಫಾರಸು ಅಲ್ಲ` — applied.
- [x] §12 "Kindest regards," → `ಶುಭಾಶಯಗಳೊಂದಿಗೆ,` — applied.
- [x] §13 field labels (Author / Prepared by / Issued by) — applied (`ಲೇಖಕ`, `ತಯಾರಿಸಿದವರು`, `ಹೊರಡಿಸಿದವರು`).
- [x] §15 "Created by" → `ರಚಿಸಿದವರು` — applied.
- [x] MAY -ಬಹುದು (§4, §15, §16, §22) → `ಅನುಮತಿ` — applied in all four.
- [x] §3 "legitimate reason" → `ಸಮರ್ಥನೀಯ ಕಾರಣ` — applied.
- [x] §6 missing "necessarily" → `ಅಗತ್ಯವಾಗಿ ಬೇಕಾಗಿಲ್ಲ` — applied.
- [x] Chrome "specification" → `ನಿರ್ದಿಷ್ಟತೆ` — applied (left body/end inconsistent; see new finding).
- [x] Chrome "mark" → `ಚಿಹ್ನೆ` (`ಪ್ರಮಾಣಿಕ ಚಿಹ್ನೆ`, `ಈ ಚಿಹ್ನೆ ಏನು ಹೇಳುತ್ತದೆ`) — applied (left "canonical" split; see new finding).

## Notes

- Load-bearing invariants verified byte-identical to English: `+AI` everywhere (never localised, spaced or re-cased); §4 non-canonical counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted` unchanged; §17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`) exact; example names `Eric Mourant` and `JAPER Technology` spelled correctly everywhere; `data-company-example` and `data-json-example` attributes present; sections numbered 1–26 in order; h4 labels 5.1–5.6.
- Canonical slogan `AI ಸಹಾಯ ಮಾಡಿತು. ನಾನು ಜವಾಬ್ದಾರಿ ಹೊರುತ್ತೇನೆ.` is byte-identical in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, §1, §23, §26 and `end`.
- Section 6 has 17 list items in the master (not 21); all 17 are present and correctly mapped in Kannada.
- Section 8 has 17 list items; all 17 present.
- §5.4 retains all verbs (ಪ್ರಕಟಿಸಬೇಕೆ, ರವಾನಿಸಬೇಕೆ, ನಿಯೋಜಿಸಬೇಕೆ, ಸಲ್ಲಿಸಬೇಕೆ, ಪ್ರಸ್ತುತಪಡಿಸಬೇಕೆ, ಬಿಡುಗಡೆ ಮಾಡಬೇಕೆ); §5.6 keeps "decision to release, use or represent".
- §18 title "Persistence" rendered `ಸ್ಥಿರತೆ` ("stability") — acceptable, not flagged.
- §8 "hallucinations" rendered `ಭ್ರಮೆಗಳು` — acceptable in current Kannada AI usage.
- "materially" remains split between `ಗಣನೀಯವಾಗಿ` (body) and `ಗಮನಾರ್ಹವಾಗಿ` (`description`, `heroLead`, `meaningOneBody`, `plainBody`) — accepted as in prior rounds.
- §14 keeps `Author: Eric Mourant +AI` and `This project uses +AI.` code blocks in English — accepted (literal repository code).
- Kannada knowledge limits: the `ನಿರ್ದಿಷ್ಟತೆ` vs `ನಿರ್ದಿಷ್ಟ ವಿವರಣೆ` choice and the §24 gendered form are real observations but would benefit from native-speaker confirmation before finalising.
