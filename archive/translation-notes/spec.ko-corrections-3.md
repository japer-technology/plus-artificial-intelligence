# spec.ko.js — Round 3 final correction recommendations

- **Language:** 한국어 (ko)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.ko-corrections-2.md` (0 high / 0 medium / 6 low) — status of each item verified against the current file; all 6 are now applied
- **Verdict:** Faithful, complete translation; every round-2 item has been applied, the load-bearing invariants are intact, and both round-3 terminology-consistency items have now been applied to the file.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### interfaceCopy.markLabel — "canonical" rendered inconsistently
- **Location:** `interfaceCopy.markLabel` (compare with section 4, 21, 23, 26)
- **Current:** `"markLabel": "정식 표식",`
- **English:** `"markLabel": "Canonical mark",`
- **Issue:** The term "canonical" is rendered `정규` throughout the sections (section 4 `정규 표기`/`정규 표장`, section 21 `정규 적용 범위`, section 23 `정규 공개 설명`, section 26 `정규 선언`), but `정식` in `markLabel`. This is terminology drift between the chrome and the body; `정식` ("official/formal") and `정규` ("canonical") should be one term.
- **Suggested:** `"markLabel": "정규 표식",`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ko.js

### "identifiable" rendered two ways; "특정 가능한" is less precise
- **Location:** `sections[2].body` list item 2, `sections[21].body` list item 1, `sections[25].body` canonical line (compare with `interfaceCopy.plainBody`)
- **Current:** `특정 가능한 개인 또는 조직이 그 산출물에 대한 책임을 인수한다는 사실.` / `특정 가능한 책임 주체가 존재하지 않는 경우.` / `특정 가능한 사람의 책임이 수반된 AI 지원 작업.`
- **English:** `an identifiable human or organisation accepts responsibility for the resulting artifact.` / `there is no identifiable responsible party;` / `AI-assisted work with identifiable human responsibility.`
- **Issue:** "identifiable" is rendered `식별 가능한` in `interfaceCopy.plainBody` but `특정 가능한` in these three sections. `식별 가능한` is the standard, precise Korean for "identifiable"; `특정 가능한` is a less exact calque ("specifiable") and creates internal inconsistency for the same English word.
- **Suggested:** `식별 가능한 개인 또는 조직이 그 산출물에 대한 책임을 인수한다는 사실.` / `식별 가능한 책임 주체가 존재하지 않는 경우.` / `식별 가능한 사람의 책임이 수반된 AI 지원 작업.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ko.js

## Round 2 verification

- [x] Section 14 translated code blocks — applied: `Author: Eric Mourant +AI` and `This project uses +AI.` restored to English
- [x] plainTitle `명확한 책임` — applied: now `투명한 지원. 명확한 설명책임.`
- [x] meaningThreeBody `책임을 전가` — applied: now `설명책임을 전가하지 않습니다.`
- [x] plainBody `그 결과를 사용하기로` — applied: now `AI를 사용하기로 한 결정의 배후에 있다는 뜻입니다.`
- [x] Section 16 `사용자(고용주)` — applied: now `…규제기관, 고용주, 전문직 단체 또는 법률이 요구하는…`
- [x] Section 12 `감사합니다` — applied: now `안부를 전하며,<br>Eric Mourant +AI`

## Notes

- Canonical slogan `AI가 도왔습니다. 책임은 제가 집니다.` is verbatim in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, sections 1/23/26, and the `end` string. The `heroLead` `<strong>` segment (`인공지능이 작업에 실질적으로 기여했으며, 해당 당사자가 그 결과를 공개한 책임을 받아들입니다.`) uses matching wording.
- Header comment's normative-term mapping table matches actual usage: MUST `~해야 한다`, MUST NOT `~해서는 안 된다`, SHOULD `~하는 것이 바람직하다`, SHOULD NOT `~하지 않는 것이 바람직하다`, MAY `~할 수 있다` — used consistently across all sections.
- Load-bearing invariants verified byte-identical: `+AI` everywhere; section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`); section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); `data-company-example` / `data-json-example` attributes; example names `Eric Mourant` and `JAPER Technology`; section numbering 1–26 and `h4` labels 5.1–5.6.
- Section 5.4 keeps all verbs (공개, 전송, 배포, 제출, 제시 + "그 밖의 방법으로 공표" for "otherwise released"); section 5.6 keeps "공표, 사용 또는 표시하기로 한 결정" for "decision to release, use or represent"; section 9 keeps "단어 단위 또는 요소 단위" and "사람의 의미 있는 채택 행위"; section 24 keeps "두 질문에 모두" and "예"; section 26 keeps the full declaration with accept/publish/transmit/deploy/otherwise release and "그 결정".
- Section 6 has 17 list items and section 8 has 17 list items, all present (the brief's "21" is not the actual count in the master).
- Minor observations (not reported as corrections): `audio` is rendered `음성` ("voice") in sections 6 and 15, slightly narrower than English `audio`; "mark" alternates `표식` (chrome) and `표장` (sections), both acceptable synonyms; `heroLead` `이 링크가 이름에 표시된 개인` is a slightly awkward but meaning-preserving rendering of "whose name carried this link".
- Korean is not my native language: the above is based on lexical/structural comparison against the master, not native-speaker fluency. A native read of sections 3, 7 and 26 remains worthwhile per `TRANSLATIONS.md`.
