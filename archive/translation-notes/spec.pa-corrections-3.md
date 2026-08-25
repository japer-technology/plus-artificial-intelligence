# spec.pa.js — Round 3 final correction recommendations

- **Language:** ਪੰਜਾਬੀ (pa)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.pa-corrections-2.md` (0 high / 1 medium / 6 low) — status of each item verified against the current file
- **Verdict:** All seven round-2 corrections have been applied, and both round-3 items (artificial-intelligence terminology, section-6 "routine formatting") have now been applied to the file.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### Terminology — "artificial intelligence" rendered two ways (chrome vs body)
- **Location:** `interfaceCopy.description` / `interfaceCopy.heroLead` vs `sections[1].body`, `sections[2].body`, `sections[5].body`, `sections[7].body`, `sections[10].body`, `sections[26].body`
- **Current:**
  - `interfaceCopy.description`: `+AI ਦਾ ਅਰਥ ਹੈ ਕਿ ਕ੍ਰਿਤ੍ਰਿਮ ਬੁੱਧੀ ਨੇ ਕੰਮ ਵਿੱਚ ਮਹੱਤਵਪੂਰਨ ਸਹਾਇਤਾ ਕੀਤੀ ਅਤੇ ਕੋਈ ਨਾਮਿਤ ਵਿਅਕਤੀ ਜਾਂ ਸੰਸਥਾ ਇਸ ਦੀ ਜ਼ਿੰਮੇਵਾਰੀ ਸਵੀਕਾਰ ਕਰਦੀ ਹੈ।`
  - `interfaceCopy.heroLead`: `…<strong>ਕ੍ਰਿਤ੍ਰਿਮ ਬੁੱਧੀ ਨੇ ਕੰਮ ਵਿੱਚ ਮਹੱਤਵਪੂਰਨ ਸਹਾਇਤਾ ਕੀਤੀ…</strong>`
  - body (e.g. `sections[1].body`): `…ਕਿਸੇ ਰਚਨਾ ਨੂੰ ਬਨਾਵਟੀ ਬੁੱਧੀ ਦੁਆਰਾ ਠੋਸ ਰੂਪ ਵਿੱਚ ਸਹਾਇਤਾ ਪ੍ਰਾਪਤ ਵਜੋਂ ਪਛਾਣਿਆ ਜਾਂਦਾ ਹੈ…`
- **English:** `artificial intelligence`
- **Issue:** The same core term is split between `ਕ੍ਰਿਤ੍ਰਿਮ ਬੁੱਧੀ` (chrome) and `ਬਨਾਵਟੀ ਬੁੱਧੀ` (body). Both are valid renderings of "artificial intelligence" (no meaning change), but the split is a consistency drift exactly like the round-2 "mark" and "specification" splits.
- **Suggested:** Standardise on the body's dominant rendering `ਬਨਾਵਟੀ ਬੁੱਧੀ` in `interfaceCopy.description` and `interfaceCopy.heroLead` (native-speaker confirm; `ਕ੍ਰਿਤ੍ਰਿਮ ਬੁੱਧੀ` is equally acceptable so long as one is used everywhere).
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.pa.js (description and heroLead now use `ਬਨਾਵਟੀ ਬੁੱਧੀ`, matching the body)

### Section 6 — "routine formatting" rendered "daily decoration"
- **Location:** `sections[6].body`, "Examples may include automatic spelling correction, basic autocomplete, routine formatting…"
- **Current:** `ਉਦਾਹਰਨਾਂ ਵਿੱਚ ਆਪਣੇ-ਆਪ ਸ਼ਬਦ-ਜੋੜ ਸੁਧਾਰ, ਸਧਾਰਨ ਸ਼ਬਦ-ਪੂਰਤੀ, ਰੋਜ਼ਾਨਾ ਦੀ ਸਜਾਵਟ ਜਾਂ ਹੋਰ ਅਜਿਹੀਆਂ ਸਹੂਲਤਾਂ ਹੋ ਸਕਦੀਆਂ ਹਨ ਜੋ ਰਚਨਾ ਦੇ ਸਾਰ ਉੱਤੇ ਠੋਸ ਅਸਰ ਨਹੀਂ ਪਾਉਂਦੀਆਂ।`
- **English:** `Examples may include automatic spelling correction, basic autocomplete, routine formatting or other features that do not materially affect the substance of an artifact.`
- **Issue:** `ਰੋਜ਼ਾਨਾ ਦੀ ਸਜਾਵਟ` means "daily decoration"; "routine formatting" means ordinary/standard formatting. Both `routine`→`ਰੋਜ਼ਾਨਾ` ("daily") and `formatting`→`ਸਜਾਵਟ` ("decoration") shift the meaning of this example clause (though the normative substance of the section is unaffected).
- **Suggested:** `…ਸਧਾਰਨ ਸ਼ਬਦ-ਪੂਰਤੀ, ਨਿਯਮਤ ਫਾਰਮੈਟਿੰਗ ਜਾਂ ਹੋਰ ਅਜਿਹੀਆਂ ਸਹੂਲਤਾਂ…` (native-speaker confirm).
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.pa.js (`ਰੋਜ਼ਾਨਾ ਦੀ ਸਜਾਵਟ` → `ਨਿਯਮਤ ਫਾਰਮੈਟਿੰਗ` in section 6)

## Round 2 verification

- [x] Terminology — "specification" (`ਵਿਸ਼ੇਸ਼ਤਾ` → `ਵਿਸ਼ੇਸ਼-ਵਿਵਰਣ`): applied — chrome now uses `ਵਿਸ਼ੇਸ਼-ਵਿਵਰਣ` throughout (`readSpec`, `specification`, `versionFooter`, `untranslatedNotice.headline`).
- [x] Terminology — "mark" (`ਨਿਸ਼ਾਨ` vs `ਚਿੰਨ੍ਹ`): applied — chrome (`meansHeading`, `plainLead`, `markLabel`) now uses `ਚਿੰਨ੍ਹ`.
- [x] `interfaceCopy.markLabel` "Canonical mark" → `ਪ੍ਰਮਾਣਿਕ ਚਿੰਨ੍ਹ`: applied.
- [x] Section 4 — "case-sensitive" → `ਇਹ ਚਿੰਨ੍ਹ ਵੱਡੇ ਅਤੇ ਛੋਟੇ ਅੱਖਰਾਂ ਵਿੱਚ ਫ਼ਰਕ ਕਰਦਾ ਹੈ।`: applied.
- [x] Section 6 — "incidental" (`ਇਤਫ਼ਾਕੀ` → `ਮਾਮੂਲੀ`): applied.
- [x] Section 16 — "employer" (`ਮਾਲਕ` → `ਰੁਜ਼ਗਾਰਦਾਤਾ`): applied.
- [x] Section 2 — "exclusive authorship" (`ਵਿਸ਼ੇਸ਼ ਲੇਖਕਤਾ` → `ਇਕੱਲੀ (ਵਿਸ਼ੇਸ਼-ਅਧਿਕਾਰੀ) ਲੇਖਕਤਾ`): applied.

## Notes

- The five normative terms are rendered consistently in every section: MUST → `ਲਾਜ਼ਮੀ`, MUST NOT → `ਸਖ਼ਤੀ ਨਾਲ ਵਰਜਿਤ`, SHOULD → `ਸਿਫ਼ਾਰਸ਼ੀ`, SHOULD NOT → `ਸਿਫ਼ਾਰਸ਼ੀ ਨਹੀਂ`, MAY → `ਵਿਕਲਪਿਕ`, with the English term in parentheses at the section 3 first definition. The header comment's mapping matches actual usage.
- The canonical slogan `AI ਨੇ ਮਦਦ ਕੀਤੀ। ਜ਼ਿੰਮੇਵਾਰੀ ਮੇਰੀ ਹੈ।` is byte-identical in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, sections 1/23/26, and `end`; `heroLead`'s `<strong>` segment matches the wording.
- Section 5.4 retains all six release channels (published `ਪ੍ਰਕਾਸ਼ਿਤ`, transmitted `ਭੇਜੀ`, deployed `ਲਾਗੂ`, submitted `ਜਮ੍ਹਾਂ`, presented `ਪੇਸ਼`, otherwise released `ਹੋਰ ਕਿਸੇ ਤਰੀਕੇ ਨਾਲ ਜਾਰੀ ਕੀਤੀ`); Section 5.6 keeps "decision to release, use or represent".
- Section 6 and Section 8 each carry all 17 list items; Section 9 keeps "word-by-word or element-by-element" (`ਸ਼ਬਦ-ਦਰ-ਸ਼ਬਦ ਜਾਂ ਅੰਸ਼-ਦਰ-ਅੰਸ਼`) and "meaningful human act of adoption" (`ਸਾਰਥਕ ਮਨੁੱਖੀ ਕਾਰਜ`); Section 24 keeps "both questions" (`ਦੋਵਾਂ ਸਵਾਲਾਂ`) and "yes" (`ਹਾਂ`).
- Load-bearing invariants verified byte-identical: `+AI` everywhere; Section 4 counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`; Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); names `Eric Mourant` and `JAPER Technology`; `data-company-example` / `data-json-example` attributes; section numbering 1–26 and h4 labels 5.1–5.6.
- No unescaped backticks or `${` inside template literals; no leftover untranslated English prose in body text (Section 14's two code-block strings remain in English — accepted in round 2 as matching sibling-language treatment of example code).
- `followedLink` renders "Post Nominal Description" as a transliteration `ਪੋਸਟ-ਨੋਮਿਨਲ ਦਾ ਵੇਰਵਾ`; accepted as-is (style choice, no meaning change).
- My Punjabi is limited; the two new LOW findings and the `ਵਿਸ਼ੇਸ਼-ਅਧਿਕਾਰੀ` gloss from round 2 would all benefit from a native-speaker confirmation before treating the file as final.
