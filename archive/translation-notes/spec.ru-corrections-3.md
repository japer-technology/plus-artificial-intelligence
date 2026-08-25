# spec.ru.js — Round 3 final correction recommendations

- **Language:** Русский (ru)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.ru-corrections-2.md` (0 high / 1 medium / 5 low) — status of each item verified against the current file
- **Verdict:** The translation is now clean and normatively consistent; all six round-2 findings have been applied and the round-3 grammar/style item has now been applied to the file.
- **Count:** 0 high / 0 medium / 1 low

## Corrections

### `heroLead` — plural agreement on a singular "person or organisation"
- **Location:** `interfaceCopy.heroLead`
- **Current:** `Человек или организация, рядом с именем которых была эта ссылка, делают простое заявление: <strong>искусственный интеллект существенно помог в работе, а указанная сторона принимает ответственность за её публикацию.</strong>`
- **English:** `The person or organisation whose name carried this link is making a simple declaration: <strong>artificial intelligence materially assisted the work, and they accept responsibility for releasing it.</strong>`
- **Issue:** The subject «Человек или организация» (two singular nouns joined by «или») takes plural agreement — the relative pronoun «которых» and the verb «делают». With «или» the predicate/relative should agree in the singular. The same file handles the identical construction correctly in section 13 («какое лицо или организация принимает…»), so this is an internal inconsistency, not a deliberate stylistic choice. Meaning is unaffected, hence LOW.
- **Suggested:** `Человек или организация, чьё имя сопровождает эту ссылку, делает простое заявление: <strong>искусственный интеллект существенно помог в работе, и эта сторона принимает ответственность за её публикацию.</strong>` (using the gender-neutral «чьё имя … делает» sidesteps the mixed gender of «человек»/«организация»; a native reviewer may prefer another rephrasing).
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ru.js

## Round 2 verification

- [x] Canonical tagline split (несу vs принимаю) — applied; sections 1, 23, 26 and `end` now all read `ИИ помог. Я принимаю ответственность.`
- [x] Section 1 «созданного» narrowing — applied; now «…обозначения артефакта, которому существенно содействовал искусственный интеллект…»
- [x] Section 5.4 «submitted» — applied; now «…опубликован, передан, развёрнут, подан, представлен или иным образом выпущен.»
- [x] Section 14 English code blocks — applied; now `Автор: Eric Mourant +AI` and `В этом проекте используется +AI.`
- [x] Section 15 «designs» → «проекты» — applied; now «дизайн-макеты».
- [x] Section 18 «reasonable» → «обоснованных» — applied; now «при разумных преобразованиях артефакта».

## Notes

- All six round-2 corrections are now in place; nothing from round 2 is carried forward.
- Normative terms verified across all sections: section 3 defines all five terms with the English term in parentheses, and the roots ДОЛЖЕН / НЕ ДОЛЖЕН / СЛЕДУЕТ / НЕ СЛЕДУЕТ / МОЖЕТ are used consistently throughout (inflections like «ДОЛЖНА», «ДОЛЖНО», «ДОЛЖНЫ» are normal grammatical agreement, not drift). The file-header mapping table matches actual usage.
- Load-bearing invariants verified byte-identical: `+AI` everywhere; section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`); section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); `Eric Mourant` and `JAPER Technology` spellings; `data-company-example` / `data-json-example` attributes; 26 sections in order; h4 labels 5.1–5.6. Section 6 has 17 list items and section 8 has 17 list items — all present (note: the round-3 instructions said "21" for section 6, but the English master contains 17, and all 17 are present).
- Slogan consistency confirmed: the byte-identical sentence `ИИ помог. Я принимаю ответственность.` now appears in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, section 1, section 23, section 26, and `end`; the `heroLead` `<strong>` segment uses matching wording («существенно помог… принимает ответственность»).
- Section 24 renders "both questions" («на оба вопроса»), "yes" («да»), and "If both answers are yes" («Если оба ответа утвердительны») correctly. Section 26 keeps all five verbs (принять, опубликовать, передать, развернуть, иным образом выпустить) and "that decision" («за это решение»).
- Accepted no-change items from round 2 remain acceptable: «указанный/указанная» for "named" is consistent; «подотчётность» in the body vs «ответственность» in `meaningThreeBody` is acceptable; the mild «его» antecedent ambiguity in `plainBody` is cosmetic. Section 26's long declaration uses «я несу ответственность за это решение» while the shorthand slogan uses «принимаю» — this is acceptable stylistic variation ("нести ответственность" is idiomatic Russian), not the canonical-tagline drift round 2 flagged.
- Minor observations (no action required): section 26's «Мною принято решение принять» repeats «принято/принять» slightly; the file header comment still says "pending native-speaker review" while `status` is `"reviewed"` (metadata mismatch, not a translation error); the `<code>&lt;Ответственная сторона&gt;</code>` placeholder is translated, which is reasonable and matches the «Ответственная сторона» wording used elsewhere.
- Still worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
