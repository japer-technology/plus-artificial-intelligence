# spec.yue.js — Round 1 correction suggestions

- **Language:** 粵語 (yue)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A faithful, complete translation — the earlier length-ratio concern was a CJK character-density artifact, not dropped content: every clause of every section is present, the canonical slogan is identical everywhere (interface and body), normative terms are consistent, and sections 5.1/5.4 are complete.
- **Count:** 0 high / 0 medium / 3 low

## Corrections

### interfaceCopy.markLabel
- **Location:** `interfaceCopy.markLabel`
- **Current:** `標準標記`
- **English:** `Canonical mark`
- **Issue:** The body consistently renders "canonical" as "規範" (sections 1, 4, 12, 21, 23, 26, `end`); "標準" is a different concept the master keeps separate (section 2's "standard").
- **Suggested:** `規範標記`
- **Severity:** LOW

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…企喺使用佢嘅決定背後。`
- **English:** `…stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Cantonese "佢" is ambiguous and most naturally binds to "個結果" (the result).
- **Suggested:** `…企喺使用 AI 嘅決定背後。`
- **Severity:** LOW

### Section 20 — Neutrality
- **Location:** `sections[20].title`
- **Current:** `中立`
- **English:** `Neutrality`
- **Issue:** "中立" is the adjective "neutral"; a section heading should be nominal ("中立性"), matching the other headings in the file.
- **Suggested:** `中立性`
- **Severity:** LOW

## Notes
- Canonical slogan `AI 幫過手。責任由我承擔。` is verbatim in documentTitle, heroTitle, sections 1/23/26 and the end panel — better than several other languages; no action needed.
- Section 3 defines 必須 / 不得 / 應該 / 不應該 / 可以 with English parentheticals and uses exactly these forms in later sections — no action needed.
- Section 5.4 preserves all five verbs plus "otherwise released"; section 5.1 keeps all seven activity verbs.
- Section 22 correctly renders "authorship" as "作者身分"; section 18 renders "attribution" as "署名資料" — both fine.
- Section 14 keeps the code examples in English, matching the master.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
