# spec.zh.js — Round 1 correction suggestions

- **Language:** 中文 (zh)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A complete, accurate translation — the earlier length-ratio concern was a CJK character-density artifact, not dropped content: every clause of every section is present, normative terms are consistent, and sections 5.1/5.4 are complete. The main issue is that the interface slogan diverges from the canonical body slogan.
- **Count:** 0 high / 1 medium / 3 low

## Corrections

### Canonical slogan consistency (interfaceCopy vs sections)
- **Location:** `interfaceCopy.documentTitle`, `interfaceCopy.heroTitle` vs sections 1, 23, 26 and `end`
- **Current:** `AI提供了帮助。责任由我承担。` (interface) vs `AI 提供了帮助。我承担责任。` (body)
- **English:** `AI helped. I take responsibility.` — identical wording everywhere in the master.
- **Issue:** Two renderings of the canonical slogan in one document (word order and spacing differ); the English text deliberately reuses the exact slogan.
- **Suggested:** Unify on `AI 提供了帮助。我承担责任。` in documentTitle and heroTitle.
- **Severity:** MEDIUM

### interfaceCopy.plainTitle
- **Location:** `interfaceCopy.plainTitle`
- **Current:** `透明的协助。明确的责任。`
- **English:** `Transparent assistance. Visible accountability.`
- **Issue:** The body renders "accountability" as "问责" (sections 2, 8, 20, 21, `end`); the chrome flattens it into "责任" (responsibility).
- **Suggested:** `透明的协助。明确的问责。`
- **Severity:** LOW

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…有可识别的个人或组织对采用该结果的决定负责。`
- **English:** `…an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Chinese binds the decision to "该结果" (the result), and "stands behind" is flattened into "is responsible for".
- **Suggested:** `…有可识别的个人或组织站在使用人工智能这一决定的背后。`
- **Severity:** LOW

### Section 26 — Canonical declaration
- **Location:** `sections[26].body`, blockquote
- **Current:** `…本人已选择接受、发布、传输、部署或以其他方式发出由此产生的作品…`
- **English:** `…I have chosen to accept, publish, transmit, deploy or otherwise release the resulting work…`
- **Issue:** "作品" here and in the blockquote mixes with the established "成果物" for artifact; the English "the resulting work" matches the work/artifact terminology used elsewhere.
- **Suggested:** `…由此产生的成果物…` (or keep "作品" only if the whole file is harmonised).
- **Severity:** LOW

## Notes
- Section 3 defines 必须 / 不得 / 应 / 不应 / 可以 with English parentheticals and uses exactly these forms in later sections — no action needed.
- Section 5.4 preserves all five verbs plus "otherwise released"; section 5.1 keeps all seven activity verbs.
- Section 22 correctly renders "authorship" as "作者身份"; section 18 renders "attribution" as "归属信息" — both fine.
- Section 14 keeps the code examples in English, matching the master.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
