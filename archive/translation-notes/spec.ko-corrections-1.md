# spec.ko.js — Round 1 correction suggestions

- **Language:** 한국어 (ko)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A faithful, complete translation: the canonical slogan is identical everywhere, normative terms are consistent, and sections 5.1/5.4 are complete. Only minor chrome-level wording points remain.
- **Count:** 0 high / 0 medium / 6 low

## Corrections

### Section 14 — Software (code examples translated)
- **Location:** `sections[14].body`, the two `<pre><code>` blocks
- **Current:** `저자: Eric Mourant +AI` / `이 프로젝트는 +AI를 사용합니다.`
- **English:** `Author: Eric Mourant +AI` / `This project uses +AI.` (literal examples kept in English by the master and by most other languages)
- **Issue:** The master presents these as literal usage examples; translating them diverges from the canonical examples.
- **Suggested:** Restore the English blocks: `Author: Eric Mourant +AI` and `This project uses +AI.`
- **Severity:** LOW

### interfaceCopy.plainTitle
- **Location:** `interfaceCopy.plainTitle`
- **Current:** `투명한 지원. 명확한 책임.`
- **English:** `Transparent assistance. Visible accountability.`
- **Issue:** The body renders "accountability" as "설명책임" (sections 2, 8, 20, 21, `end`); the chrome flattens it into "책임" (responsibility).
- **Suggested:** `투명한 지원. 명확한 설명책임.`
- **Severity:** LOW

### interfaceCopy.meaningThreeBody
- **Location:** `interfaceCopy.meaningThreeBody`
- **Current:** `명시된 당사자는 AI 시스템이나 제공자에게 책임을 전가하지 않습니다.`
- **English:** `The named party does not transfer accountability to an AI system or provider.`
- **Issue:** "accountability" is rendered with the word for "responsibility" instead of the body's "설명책임".
- **Suggested:** `명시된 당사자는 AI 시스템이나 제공자에게 설명책임을 전가하지 않습니다.`
- **Severity:** LOW

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…식별 가능한 개인 또는 조직이 그 결과를 사용하기로 한 결정에 책임을 진다는 뜻입니다.`
- **English:** `…an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Korean binds the decision to "그 결과" (the result), and "stands behind" is flattened into "is responsible for".
- **Suggested:** `…식별 가능한 개인 또는 조직이 AI를 사용하기로 한 결정의 배후에 있다는 뜻입니다.`
- **Severity:** LOW

### Section 16 — Research and technical work
- **Location:** `sections[16].body`, second paragraph
- **Current:** `…출판사, 규제기관, 사용자(고용주), 전문직 단체 또는 법률이 요구하는…`
- **English:** `…required by a publisher, regulator, employer, professional body or law.`
- **Issue:** "employer" is correctly "고용주", but the text adds "사용자" (user) in front of it, which is a different word.
- **Suggested:** `…출판사, 규제기관, 고용주, 전문직 단체 또는 법률이 요구하는…`
- **Severity:** LOW

### Section 12 — Email and messaging
- **Location:** `sections[12].body`, the preferred presentation example
- **Current:** `감사합니다.<br>Eric Mourant +AI`
- **English:** `Kindest regards,<br>Eric Mourant +AI`
- **Issue:** "감사합니다" is "thank you"; a letter closing like "안부를 전하며" or "드림" matches the English register better.
- **Suggested:** `안부를 전하며,<br>Eric Mourant +AI`
- **Severity:** LOW

## Notes
- Canonical slogan `AI가 도왔습니다. 책임은 제가 집니다.` is verbatim in documentTitle, heroTitle, sections 1/23/26 and the end panel — no action needed.
- Section 3 defines ~해야 한다 / ~해서는 안 된다 / ~하는 것이 바람직하다 / ~하지 않는 것이 바람직하다 / ~할 수 있다 with English parentheticals and uses exactly these forms in later sections — no action needed.
- Section 5.4 preserves all five verbs plus "otherwise released".
- Section 22 correctly renders "authorship" as "저작자성"; section 18 renders "attribution" as "출처 표시" — both fine.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
