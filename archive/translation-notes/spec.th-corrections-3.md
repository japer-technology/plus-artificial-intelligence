# spec.th.js — Round 3 final correction recommendations

- **Language:** ไทย (th)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.th-corrections-2.md` (1 high / 1 medium / 4 low) — status of each item verified against the current file
- **Verdict:** The two blockers from rounds 1–2 (Devanagari corruption, slogan split) are fixed; the translation is now clean of HIGH/MEDIUM issues, and all three round-3 LOW items have now been applied to the file.
- **Count:** 0 high / 0 medium / 3 low

## Corrections

### interfaceCopy.plainBody — added "which part" not in the English
- **Location:** `interfaceCopy.plainBody`
- **Current:** `เครื่องหมายนี้ไม่ได้บอกว่างานส่วนใดหรือมากเพียงใดมาจาก AI แต่บอกว่า AI มีอิทธิพลอย่างมีสาระสำคัญต่อผลลัพธ์ และมีบุคคลหรือองค์กรที่ระบุตัวตนได้ยืนอยู่เบื้องหลังการตัดสินใจใช้ AI`
- **English:** `It does not say how much of the work came from AI. It says AI materially influenced the result and an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** The pronoun fix from round 2 was applied (`การตัดสินใจใช้ AI` now correctly binds "it" to AI), but the phrase `งานส่วนใด` ("which part") was added; the English says only "how much" (`มากเพียงใด`). Minor addition, no meaning change.
- **Suggested:** `เครื่องหมายนี้ไม่ได้บอกว่างานมาจาก AI มากเพียงใด แต่บอกว่า AI มีอิทธิพลอย่างมีสาระสำคัญต่อผลลัพธ์ และมีบุคคลหรือองค์กรที่ระบุตัวตนได้ยืนอยู่เบื้องหลังการตัดสินใจใช้ AI`
- **Severity:** LOW
- **Round 2:** carried forward (partially applied — pronoun fixed, "งานส่วนใด" addition remains)
- **Status:** applied to spec.th.js

### "canonical" still rendered "มาตรฐาน" in section bodies
- **Location:** section bodies — `sections[1]` ("The canonical expression is" → `รูปแบบมาตรฐานของการแสดงข้อความ`), `sections[4]` ("The canonical mark is" → `เครื่องหมายมาตรฐาน คือ`; "The canonical form MUST use" → `รูปแบบมาตรฐานต้องประกอบด้วย`; "Therefore +AI is canonical" → `ดังนั้น +AI จึงเป็นรูปแบบมาตรฐาน`; "canonical equivalents" → `เทียบเท่ากับรูปแบบมาตรฐาน`; "the canonical +AI meaning" → `ความหมายตามมาตรฐานของ +AI`), `sections[12]` ("canonical explanation" → `คำอธิบายความหมายอันเป็นมาตรฐาน`), `sections[21]` ("canonical scope" → `ขอบเขตมาตรฐาน`), `sections[25]` ("simple canonical mark" → `เครื่องหมายมาตรฐานอันเรียบง่าย`), `sections[26]` ("The canonical mark is" → `เครื่องหมายมาตรฐาน คือ`)
- **Current:** e.g. section 4 `เครื่องหมายมาตรฐาน คือ` / section 26 `เครื่องหมายมาตรฐาน คือ`
- **English:** `The canonical mark is:`
- **Issue:** Round 2's "at minimum" fix was applied — `markLabel` and section titles 4/23/26 now use `อันเป็นหลัก`. But the bodies still collapse "canonical" to `มาตรฐาน`, which is the same word used for the standard itself (section 2 `มาตรฐานนี้`), blurring the canonical-mark vs standard distinction the master keeps separate.
- **Suggested:** In these body occurrences, use `อันเป็นหลัก` (e.g. `เครื่องหมายอันเป็นหลัก คือ`, `รูปแบบอันเป็นหลักต้องประกอบด้วย`, `คำอธิบายความหมายอันเป็นหลัก`, `ขอบเขตอันเป็นหลัก`, `เครื่องหมายอันเป็นหลักอันเรียบง่าย`); native-speaker confirm the exact collocation first.
- **Severity:** LOW
- **Round 2:** carried forward (markLabel + titles applied; bodies still present)
- **Status:** applied to spec.th.js (all 11 body "canonical" occurrences now use `อันเป็นหลัก`; "standard" renderings in sections 2 and 6 kept as `มาตรฐาน`)

### interfaceCopy.plainLead — "accountability declaration" rendered with the responsibility word
- **Location:** `interfaceCopy.plainLead`
- **Current:** `เครื่องหมายนี้เป็นคำประกาศความรับผิดชอบ ไม่ใช่การกล่าวอ้างว่า AI เป็นผู้ประพันธ์ และไม่ใช่การรับประกันว่าผลงานถูกต้อง`
- **English:** `The mark is an accountability declaration, not a claim that AI is the author and not a guarantee that the work is correct.`
- **Issue:** Round 2 unified "accountability" as `ภาระรับผิด` (meaningThreeBody and plainTitle are now fixed), but plainLead still renders "accountability declaration" as `คำประกาศความรับผิดชอบ`. Section 8 correctly renders the same English phrase as `คำประกาศภาระรับผิด`, so the chrome is internally inconsistent.
- **Suggested:** `เครื่องหมายนี้เป็นคำประกาศภาระรับผิด ไม่ใช่การกล่าวอ้างว่า AI เป็นผู้ประพันธ์ และไม่ใช่การรับประกันว่าผลงานถูกต้อง`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.th.js

## Round 2 verification

- [x] `meaningOneBody` Devanagari corruption — applied (now reads `…แปลง หรือ นำเสนอผลงาน`)
- [x] Slogan split (interface vs body) — applied (`documentTitle` and `heroTitle` now `AI ช่วย ฉันรับผิดชอบ`)
- [~] `plainBody` pronoun — partially applied (pronoun now `การตัดสินใจใช้ AI`; the `งานส่วนใด` addition carried forward)
- [x] accountability drift (`meaningThreeBody` / `plainTitle`) — applied (both now use `ภาระรับผิด`)
- [x] Section 7 "substantially generated" — applied (now `…ก่อกำเนิดขึ้นอย่างมีนัยสำคัญ`)
- [~] canonical vs standard — partially applied (`markLabel` + section titles 4/23/26 now `อันเป็นหลัก`; body occurrences carried forward)

## Notes

- Canonical slogan `AI ช่วย ฉันรับผิดชอบ` is byte-identical in `documentTitle`, `heroTitle`, section 1, section 23, section 26, and `end`; the `heroLead` `<strong>` wording matches the `description` phrasing as in English.
- Section 3 defines ต้อง / ต้องไม่ / ควร / ไม่ควร / อาจ with the English parentheticals and these exact forms are used consistently across all 26 sections and the chrome; the header mapping table matches actual usage.
- All load-bearing invariants verified byte-identical: `+AI` everywhere; Section 4 counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`; Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); names Eric Mourant and JAPER Technology; `data-company-example` / `data-json-example` attributes; section numbering 1–26 in order; h4 labels 5.1–5.6.
- HTML structure/attributes match the English master throughout (same `<p>`, `<strong>`, `<code>`, `<ol>`, `<ul>`, `<li>`, `<h4>`, `<blockquote>`, `<pre>`, `class="canonical"`); only text content is translated. No unescaped backticks or `${` found.
- Section 6 has 17 list items (not 21 as the brief stated) and all 17 are present; Section 8 has all 17; Section 25 has all 9.
- Section 24 preserves "both questions" (`คำถามทั้งสองข้อ`), "yes" (`ใช่`), and both questions correctly; Section 26 keeps accept/publish/transmit/deploy/otherwise-release and "that decision" (`การตัดสินใจนั้น`).
- "materially" / "material" is rendered `อย่างมีสาระสำคัญ` in the chrome (`description`, `heroLead`, `meaningOneBody`, `plainBody`) but `อย่างมีนัยสำคัญ` in the section bodies. Both are acceptable Thai and meaning-preserving, so I did not file this as a correction, but a native speaker may wish to unify them.
- `plainQuote` "Three characters" → `สามตัวอักษร` is correct.
- `translationNote` is now non-empty (a Thai-language caveat); this is appropriate for a translated locale and not a defect.
- Minor polish candidates (not filed): section 17 "semantic meaning" → `ความหมายทางความหมายวิทยา` is redundant/awkward; section 2 "exclusive authorship" → `ความเป็นผู้สร้างสรรค์โดยเด็ดขาดเพียงฝ่ายเดียว` renders "exclusive" loosely; section 24 "a person" → `ผู้ใช้` narrows to "the user". These do not change meaning.
- My Thai review is structural/lexical; I cannot vouch for native fluency of every collocation, so the remaining LOW items are suggestions best confirmed by a native speaker.
