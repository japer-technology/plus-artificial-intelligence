# spec.th.js — Round 1 correction suggestions

- **Language:** ไทย (th)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A faithful and nearly complete translation with consistent normative terms and full section 5.4 verb list; however, one interface string contains foreign-script characters instead of the Thai word, and the interface slogan diverges from the canonical body slogan.
- **Count:** 1 high / 1 medium / 2 low

## Corrections

### interfaceCopy.meaningOneBody
- **Location:** `interfaceCopy.meaningOneBody`
- **Current:** `AI มีส่วนช่วยอย่างมีสาระสำคัญในการสร้าง วิเคราะห์ แปลง หรือ प्रस्तुतผลงาน`
- **English:** `AI materially helped create, analyse, transform or present the work.`
- **Issue:** The segment `प्रस्तुต` is Devanagari script (Hindi/Marathi) embedded in a Thai string — it is not Thai and is unreadable to Thai readers; the Thai verb for "present" is missing. This is a cross-script corruption, not a translation choice.
- **Suggested:** `AI มีส่วนช่วยอย่างมีสาระสำคัญในการสร้าง วิเคราะห์ แปลง หรือนำเสนอผลงาน`
- **Severity:** HIGH

### Canonical slogan consistency (interfaceCopy vs sections)
- **Location:** `interfaceCopy.documentTitle` and `interfaceCopy.heroTitle` vs sections 1, 23, 26 and `end`
- **Current:** `AI ช่วยสร้างงานนี้ ฉันรับผิดชอบ` (interface) vs `AI ช่วย ฉันรับผิดชอบ` (body)
- **English:** `AI helped. I take responsibility.` — identical wording everywhere in the master.
- **Issue:** The interface adds "สร้างงานนี้" (create this work) and differs from the canonical slogan used in the body; the English text deliberately reuses the exact slogan.
- **Suggested:** Unify on `AI ช่วย ฉันรับผิดชอบ` in documentTitle and heroTitle.
- **Severity:** MEDIUM

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`
- **Current:** `…และมีบุคคลหรือองค์กรที่ระบุตัวตนได้ยืนอยู่เบื้องหลังการตัดสินใจนำผลลัพธ์นั้นไปใช้`
- **English:** `…an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Thai binds the decision to "ผลลัพธ์นั้น" (the result). The sentence also adds "งานส่วนใด" ("which part"), which the English does not state.
- **Suggested:** `…และมีบุคคลหรือองค์กรที่ระบุตัวตนได้ยืนอยู่เบื้องหลังการตัดสินใจใช้ AI`
- **Severity:** LOW

### "accountability" rendering drift in the chrome
- **Location:** `interfaceCopy.meaningThreeBody`, `interfaceCopy.plainTitle` vs section bodies
- **Current:** `ไม่ได้โอนความรับผิดชอบ…` / `ความรับผิดชอบที่มองเห็นได้` vs body's `ภาระรับผิด`
- **English:** `does not transfer accountability…` / `Visible accountability.` — the body distinguishes accountability (ภาระรับผิด) from responsibility (ความรับผิดชอบ).
- **Issue:** The chrome renders "accountability" with the word for "responsibility", blurring the distinction the specification keeps separate.
- **Suggested:** meaningThreeBody `…ไม่ได้โอนภาระรับผิด…`; plainTitle `ภาระรับผิดที่มองเห็นได้`.
- **Severity:** LOW

## Notes
- Canonical slogan `AI ช่วย ฉันรับผิดชอบ` is verbatim in sections 1/23/26 and the end panel — no action needed there.
- Section 3 defines ต้อง / ต้องไม่ / ควร / ไม่ควร / อาจ with English parentheticals and uses exactly these forms in later sections — no action needed.
- Section 5.4 preserves all five verbs plus "otherwise released".
- Section 22 correctly renders "authorship" as "ความเป็นผู้สร้างสรรค์".
- The section 8 "hallucinations" rendering "ภาวะหลอน" is acceptable; a native speaker may prefer "ภาพหลอน" — optional polish.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
