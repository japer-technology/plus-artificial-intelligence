# spec.ja.js — Round 1 correction suggestions

- **Language:** 日本語 (ja)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** An excellent, complete translation (header-marked as human-reviewed): the canonical slogan is identical everywhere, the five normative terms follow the established renderings from TRANSLATIONS.md and stay consistent, and sections 5.1/5.4 are complete. Only minor chrome-level points remain.
- **Count:** 0 high / 0 medium / 4 low

## Corrections

### Section 14 — Software (code examples translated)
- **Location:** `sections[14].body`, the two `<pre><code>` blocks
- **Current:** `著者：Eric Mourant +AI` / `このプロジェクトでは+AIを使用しています。`
- **English:** `Author: Eric Mourant +AI` / `This project uses +AI.` (literal examples kept in English by the master and by most other languages)
- **Issue:** The master presents these as literal usage examples; translating them diverges from the canonical examples.
- **Suggested:** Restore the English blocks: `Author: Eric Mourant +AI` and `This project uses +AI.`
- **Severity:** LOW

### interfaceCopy.plainTitle
- **Location:** `interfaceCopy.plainTitle`
- **Current:** `透明な支援。明確な責任。`
- **English:** `Transparent assistance. Visible accountability.`
- **Issue:** The body renders "accountability" as "説明責任" (sections 2, 8, 20, 21, `end`, meaningThreeBody); the chrome flattens it into "責任" (responsibility).
- **Suggested:** `透明な支援。明確な説明責任。`
- **Severity:** LOW

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `AIが結果に実質的な影響を与え、その使用を決定したことについて、特定可能な個人または組織が責任を負うことを示します。`
- **English:** `It says AI materially influenced the result and an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Japanese "その使用" is ambiguous, and "stands behind" is flattened into "is responsible for".
- **Suggested:** `AIが結果に実質的な影響を与え、特定可能な個人または組織が、AIを使用するという決定の背後に立つことを示します。`
- **Severity:** LOW

### Section 6 — Material assistance
- **Location:** `sections[6].body`, list item for "translation"
- **Current:** `実質的な解釈を伴う翻訳。`
- **English:** `translation where substantive interpretation occurs;`
- **Issue:** Conveys the meaning but compresses the conditional clause; optional polish only.
- **Suggested:** `実質的な解釈判断を伴う場合の翻訳。`
- **Severity:** LOW

## Notes
- Canonical slogan `AIが支援しました。私が責任を負います。` is verbatim in documentTitle, heroTitle, sections 1/23/26 and the end panel — no action needed.
- Section 3 uses the established renderings (～しなければならない / ～してはならない / ～することが望ましい / ～しないことが望ましい / ～してもよい) with English parentheticals, and later sections use the same forms consistently — no action needed.
- Section 5.4 preserves all five verbs plus "otherwise released".
- Section 22 correctly renders "authorship" as "著作者性"; section 18 renders "attribution" as "帰属表示" — both fine.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final (this file is already marked human-reviewed).
