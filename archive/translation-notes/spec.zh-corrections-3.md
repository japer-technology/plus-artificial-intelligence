# spec.zh.js — Round 3 final correction recommendations

- **Language:** 中文 (zh)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.zh-corrections-2.md` (0 high / 1 medium / 4 low) — status of each item verified against the current file
- **Verdict:** Clean, accurate translation; all five round-2 items were applied and no new high- or medium-severity issues were found. Only faint stylistic variance remains (noted below, not raised as corrections).
- **Count:** 0 high / 0 medium / 0 low

## Corrections

No corrections identified.

## Round 2 verification

- [x] Slogan consistency (`documentTitle` / `heroTitle` vs sections 1, 23, 26 and `end`) — applied: all six locations now read `AI 提供了帮助。我承担责任。`, matching the master's byte-identical reuse of `AI helped. I take responsibility.`
- [x] `interfaceCopy.plainTitle` ("accountability" flattened to "responsibility") — applied: now `透明的协助。明确的问责。`
- [x] `interfaceCopy.plainBody` (pronoun bound to result instead of AI) — applied: now `…有可识别的个人或组织站在使用人工智能这一决定的背后。`
- [x] Section 26 "resulting work" rendered "作品" — applied: now `…由此产生的成果物…`
- [x] Section 7 "substantially generated" rendered "mainly" — applied: now `责任主体可以发布实质性由人工智能生成的内容。`

## Notes

- Normative terms are consistent and match the file-header mapping table exactly: MUST → 必须, MUST NOT → 不得, SHOULD → 应, SHOULD NOT → 不应, MAY → 可以. Each occurrence across all 26 sections and the chrome was checked; no drift found.
- Section 3 keeps the English term in parentheses for all five first-definition terms (`必须 (MUST)` etc.), and the five definitions match the master's absolute requirement / absolute prohibition / strong recommendation departable for a legitimate reason / normally avoided but potentially justified / optional practice.
- Load-bearing invariants all preserved byte-identical: `+AI` everywhere (never localised, spaced, or re-cased); Section 4 counter-examples `+Ai` / `+aI` / `+ ai` / `AI+` / `AI assisted` unchanged; Section 17 JSON keys and values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`) unchanged; `Eric Mourant` and `JAPER Technology` spelled correctly at every occurrence; `data-company-example` / `data-json-example` attributes intact; section numbering 1–26 and h4 labels 5.1–5.6 correct and ordered.
- Section 5.1 keeps all seven activity verbs (创作/分析/转换/生成/评估/组织/呈现); Section 5.4 keeps all verbs plus "otherwise released" (发布/传输/部署/提交/展示或以其他方式对外发出); Section 5.6 keeps "decision to release, use or represent" (发出、使用或以该成果物作出表述).
- Section 6 and Section 8 both contain 17 `<li>` items in the master, and all 17 are present and correctly rendered in each. (The round-3 brief mentioned "21" for Section 6; the master actually has 17 list items, and this was verified against the English source.)
- Section 9 renders "word-by-word or element-by-element" as 逐字或逐项 and "meaningful human act of adoption" as 有意义的人类采纳行为 — both correct.
- Section 24 renders "both questions" and "yes" correctly (两个问题 / 肯定 / 两项回答均为肯定), and the `<strong>` tags wrap the corresponding Chinese words as in the master.
- Section 26 contains the full declaration with accept/publish/transmit/deploy/otherwise release (接受、发布、传输、部署或以其他方式发出) and "that decision" (该项决定), plus the shorthand and the canonical mark.
- `interfaceCopy.colourChanged` retains the `{colour}` placeholder (`强调色已更改为{colour}。`); no unescaped backticks or `${` appear inside any template literal; no leftover untranslated English prose (the only English retained is the intentional code/JSON/name content: Section 14 `<pre><code>` blocks, Section 17 JSON, Section 4 counter-examples, and proper names — consistent with the master and with round-2's accepted no-change note).
- Accepted no-change (re-verified): Section 14 keeps `This project uses +AI.` untranslated inside `<pre><code>`, matching the master and the byte-identical treatment of code examples.
- Minor stylistic observations only (deliberately NOT raised as corrections, since no meaning changes):
  - Section 1, first paragraph drops the word "resulting" before the second "artifact" (`对该成果物承担责任` vs the master's `the resulting artifact`); Section 2 renders the same word as 由此产生的, so there is a faint internal variance with no meaning loss.
  - `interfaceCopy.heroLead` renders "releasing it" as 发布该作品, whereas the body renders "release" as 发出 (sections 5.4, 5.6, 7, 10, 26). Both are correct Chinese for "release"; this is a purely stylistic variance, not terminology drift of a normative term.
  - `heroLead` renders "the work" as 该作品 while sections 23/26 render "this work" as 本项工作 — minor, and mirrors the master's own "the work" vs "this work" distinction.
- Honest limitation: I am not a native Mandarin speaker, so the three stylistic observations above are offered as neutral consistency notes rather than native-speaker-authoritative judgments. They do not affect meaning, and I recommend them only as optional harmonisation if a native reviewer prefers total uniformity.
