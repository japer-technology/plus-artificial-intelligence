# spec.vi.js — Round 3 final correction recommendations

- **Language:** Tiếng Việt (vi)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.vi-corrections-2.md` (0 high / 0 medium / 5 low) — status of each item verified against the current file
- **Verdict:** All five round-2 corrections are now applied and the translation is complete, faithful and internally consistent; no high or medium issues remain, and the round-3 terminology item has now been applied to the file.
- **Count:** 0 high / 0 medium / 1 low

## Corrections

### "accountability" rendered "trách nhiệm" in plainTitle/plainLead, inconsistent with "trách nhiệm giải trình" everywhere else
- **Location:** `interfaceCopy.plainTitle` and `interfaceCopy.plainLead`
- **Current (plainTitle):** `Hỗ trợ minh bạch. Trách nhiệm rõ ràng.`
- **English (plainTitle):** `Transparent assistance. Visible accountability.`
- **Current (plainLead):** `Dấu hiệu này là một tuyên bố về trách nhiệm, không phải tuyên bố rằng AI là tác giả và cũng không đảm bảo rằng tác phẩm là chính xác.`
- **English (plainLead):** `The mark is an accountability declaration, not a claim that AI is the author and not a guarantee that the work is correct.`
- **Issue:** The master uses `accountability` as a distinct concept from `responsibility`, and the translation renders `accountability` as `trách nhiệm giải trình` in five other locations — `meaningThreeBody` ("transfer accountability"), section 2 ("human accountability"), section 8 ("accountability declaration"), section 20 ("human or organisational accountability") and the `end` panel ("…and Accountability"). Only `plainTitle` ("Visible accountability") and `plainLead` ("accountability declaration") render it as plain `trách nhiệm`, which is the same word used for `responsibility` throughout. This is a terminology drift on the same English phrase "accountability declaration" (section 8 = `tuyên bố về trách nhiệm giải trình`, but plainLead = `tuyên bố về trách nhiệm`) and slightly blurs the responsibility/accountability distinction the spec draws. No normative content is altered, so it is LOW rather than MEDIUM.
- **Suggested (plainTitle):** `Hỗ trợ minh bạch. Trách nhiệm giải trình rõ ràng.`
- **Suggested (plainLead):** `Dấu hiệu này là một tuyên bố về trách nhiệm giải trình, không phải tuyên bố rằng AI là tác giả và cũng không đảm bảo rằng tác phẩm là chính xác.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.vi.js (both plainTitle and plainLead)

## Round 2 verification

- [x] `interfaceCopy.meaningTwoBody` — "chủ động" → "một cách có ý thức" applied (current: `Một cá nhân hoặc tổ chức đã chấp nhận và công bố kết quả một cách có ý thức.`)
- [x] `interfaceCopy.plainBody` — "sử dụng kết quả đó" → "sử dụng AI đó" applied (current: `…đứng sau quyết định sử dụng AI đó.`)
- [x] `sections[18].title` — "Tính bền vững" → "Sự duy trì" applied
- [x] "specification" two ways — unified on `Đặc tả` everywhere (no `quy phạm kỹ thuật` remains; sections 3, 4, 9, 21 and `end` all now use `Đặc tả`)
- [x] `sections[7].body` — "được AI tạo ra về cơ bản" → "được AI tạo ra một cách đáng kể" applied

The four round-1 items carried forward in round 2 (items 1–4 above) are all now applied as well.

## Notes

- Canonical slogan `AI đã hỗ trợ. Tôi chịu trách nhiệm.` is byte-identical in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, section 1 body, section 23 body, section 26 body and the `end` string; the `heroLead` `<strong>` segment uses the matching fuller wording (`trí tuệ nhân tạo đã hỗ trợ đáng kể cho tác phẩm, và bên đó chấp nhận trách nhiệm…`), consistent with the master's own longer form.
- Load-bearing invariants verified byte-identical: `+AI` everywhere; section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`); section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); example names `Eric Mourant` and `JAPER Technology`; `data-company-example` and `data-json-example` attributes; section numbering 1–26 and h4 labels 5.1–5.6; all `<p>`/`<strong>`/`<code>`/`<ol>`/`<ul>`/`<li>`/`<h4>`/`<blockquote>`/`<pre>` structure and `class="canonical"` attributes match the master.
- Section 3 keeps the English parentheticals (PHẢI (MUST), KHÔNG ĐƯỢC (MUST NOT), NÊN (SHOULD), KHÔNG NÊN (SHOULD NOT), CÓ THỂ (MAY)) with correct definitions, and these exact forms are used consistently in every later section (verified: sections 4, 6, 7, 9, 11–17, 19, 21, 22, 25). The file-header comment's mapping table matches actual usage.
- Section 5.4 keeps all verbs (công bố, truyền tải, triển khai, đệ trình, trình bày + phát hành theo cách khác); section 5.6 keeps "decision to release, use or represent" (quyết định phát hành, sử dụng hoặc trình bày). Section 6 has 17 list items and section 8 has 17 list items, matching the master. Section 9 keeps "word-by-word or element-by-element" (theo từng từ hoặc từng phần tử) and "meaningful human act of adoption" (hành vi chấp nhận thực chất của con người). Section 24 keeps "both questions"/"yes" (cả hai câu hỏi / có). Section 26 keeps accept, publish, transmit, deploy or otherwise release and "that decision" (quyết định đó).
- Accepted as-is (no change recommended): `markLabel` "Canonical mark" → `Dấu chuẩn` drops the "chuẩn tắc" element used elsewhere for "canonical", but is an acceptable short UI label. Section 16 renders "engineering or technical work" as `thiết kế kỹ thuật hoặc kỹ thuật`, which narrows "engineering" to "engineering design"; acceptable given "engineering" and "technical" both otherwise map to `kỹ thuật`. Section 14 leaves the `<pre><code>` examples (`Author: Eric Mourant +AI`, `This project uses +AI.`) in English, which is defensible as verbatim example/artifact strings (consistent with keeping the section-17 JSON and section-4 counter-examples verbatim), though it is asymmetric with sections 13/15 where the label prefixes are translated.
- My Vietnamese is not native-level: I verified terminology, invariants, list counts, structure and consistency at the lexical level and against the round-2 report, but I could not independently confirm every prose nuance. Per TRANSLATIONS.md a native-speaker read of the prose (especially sections 3, 7, 16 and 26) is still advisable before treating this as final.
