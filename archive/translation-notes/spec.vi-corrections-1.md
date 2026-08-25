# spec.vi.js — Round 1 correction suggestions

- **Language:** Tiếng Việt (vi)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A highly accurate, complete translation: the canonical slogan is verbatim everywhere, all five normative terms are consistent, and section 5.4 keeps all five verbs. Only minor wording points remain.
- **Count:** 0 high / 0 medium / 4 low

## Corrections

### interfaceCopy.meaningTwoBody
- **Location:** `interfaceCopy.meaningTwoBody`
- **Current:** `Một cá nhân hoặc tổ chức đã chủ động chấp nhận và công bố kết quả.`
- **English:** `A person or organisation knowingly adopted and released the result.`
- **Issue:** "chủ động" means "proactively/voluntarily"; "knowingly" is about awareness. The body elsewhere renders it correctly as "một cách có ý thức" (sections 5.3, 7, 9).
- **Suggested:** `Một cá nhân hoặc tổ chức đã chấp nhận và công bố kết quả một cách có ý thức.`
- **Severity:** LOW

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…một cá nhân hoặc tổ chức có thể xác định được chịu trách nhiệm về quyết định sử dụng kết quả đó.`
- **English:** `…an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** In English, "it" refers to using **AI**; the Vietnamese binds "sử dụng" to "kết quả đó" (the result), shifting what the person is standing behind.
- **Suggested:** `…và một cá nhân hoặc tổ chức có thể xác định được đứng sau quyết định sử dụng AI đó.`
- **Severity:** LOW

### Section 18 — Persistence
- **Location:** `sections[18].title`
- **Current:** `Tính bền vững`
- **English:** `Persistence`
- **Issue:** "Tính bền vững" means "sustainability"; the section is about the notation persisting through transformations, which the body correctly renders as "được giữ lại".
- **Suggested:** `Sự duy trì`
- **Severity:** LOW

### "specification" rendered two ways
- **Location:** `interfaceCopy.specification`, `readSpec`, `versionFooter` (`Đặc tả`) vs sections 3, 4, 9, 16, 21 and `end` (`quy phạm kỹ thuật`)
- **English:** `specification` — one term throughout the master.
- **Issue:** Two different renderings of the same document in the interface and the body.
- **Suggested:** Unify on `Đặc tả` (or `đặc tả kỹ thuật`) everywhere.
- **Severity:** LOW

## Notes
- Canonical slogan `AI đã hỗ trợ. Tôi chịu trách nhiệm.` is verbatim in documentTitle, heroTitle, sections 1/23/26 and the end panel — no action needed.
- Section 3 defines PHẢI / KHÔNG ĐƯỢC / NÊN / KHÔNG NÊN / CÓ THỂ with English parentheticals and uses exactly these forms in later sections — no action needed.
- Section 5.4 preserves all five verbs plus "otherwise released".
- Section 17's "ý nghĩa ngữ nghĩa" is slightly redundant ("semantic meaning") but conveys the English correctly; polish at the translator's discretion.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
