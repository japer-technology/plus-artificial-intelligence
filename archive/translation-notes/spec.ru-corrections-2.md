# spec.ru.js — Round 2 final correction recommendations

- **Language:** Русский (ru)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.ru-corrections-1.md` (0 high / 1 medium / 5 low) — all 6 findings re-verified against the current file and carried forward unchanged
- **Verdict:** Highly accurate and normatively consistent; the canonical-tagline split remains the main fix. No new findings.
- **Count:** 0 high / 1 medium / 5 low

## Corrections

### Canonical tagline — "AI helped. I take responsibility."
- **Location:** `sections[0].body`, `sections[22].body`, `sections[25].body`, `end` (vs `interfaceCopy.documentTitle`, `interfaceCopy.heroTitle`)
- **Current:** `ИИ помог. Я несу ответственность.` (sections 1, 23, 26 and `end`) — but `ИИ помог. Я принимаю ответственность.` (`documentTitle`, `heroTitle`)
- **English:** `AI helped. I take responsibility.`
- **Issue:** The canonical slogan — the specification's "public shorthand" — is rendered two different ways in the same file. "несу ответственность" means *bear* responsibility (a state), while "принимаю ответственность" means *take/accept* responsibility (the act), which is what the English "take" means. The English master uses the byte-identical sentence in every location.
- **Suggested:** Standardise on `ИИ помог. Я принимаю ответственность.` in `sections[0]`, `sections[22]`, `sections[25]`, and `end`.
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 1 — "materially assisted" narrowed to "created"
- **Location:** `sections[0].body`, first sentence
- **Current:** `Нотация <code>+AI</code> предоставляет компактный способ обозначения артефакта как созданного при существенном содействии искусственного интеллекта…`
- **English:** `The <code>+AI</code> notation provides a compact method for identifying an artifact as materially assisted by artificial intelligence…`
- **Issue:** "materially assisted" is narrowed to "созданного" (created) — the English says the artifact is *assisted*, not necessarily *created*, and section 6 shows assistance can be analysis, editing, translation, etc.
- **Suggested:** `Нотация <code>+AI</code> предоставляет компактный способ обозначения артефакта, которому существенно содействовал искусственный интеллект, с одновременным указанием человека или организации, принимающих на себя ответственность за полученный артефакт.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 5.4 — "submitted" rendered "sent to the addressee"
- **Location:** `sections[4].body`, 5.4
- **Current:** `…будет ли артефакт опубликован, передан, развёрнут, представлен, направлен адресату или иным образом выпущен.`
- **English:** `…whether the artifact would be published, transmitted, deployed, submitted, presented or otherwise released.`
- **Issue:** "submitted" (formally submitted for consideration) is rendered "направлен адресату" ("sent to the addressee"), which loses the formal-submission sense and overlaps with "transmitted" ("передан"). "представлен" is already used for "presented".
- **Suggested:** `…будет ли артефакт опубликован, передан, развёрнут, подан, представлен или иным образом выпущен.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 14 — code examples left in English
- **Location:** `sections[13].body`, the two `<pre><code>` example strings
- **Current:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>` (both left in English)
- **English:** `Author: Eric Mourant +AI` / `This project uses +AI.`
- **Issue:** Readable prose is left untranslated. The parallel "Author:" field in section 13 is translated to "Автор:" (and "Prepared by:" → "Подготовил:", "Issued by:" → "Выпущено:"), so leaving these two strings in English is internally inconsistent. "This project uses +AI." is a plain sentence, not a key or name.
- **Suggested:** `Автор: Eric Mourant +AI` and `В этом проекте используется +AI.` (keep `Eric Mourant` byte-identical)
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 15 — "designs" rendered ambiguously as "projects"
- **Location:** `sections[14].body`, first sentence
- **Current:** `…изображения, звукозаписи, видеозаписи, проекты, иллюстрации, презентации…`
- **English:** `…images, audio, video, designs, illustrations, presentations…`
- **Issue:** "designs" → "проекты" is ambiguous — standalone "проекты" is most naturally read as "projects" rather than graphic "designs".
- **Suggested:** `…изображения, звукозаписи, видеозаписи, дизайн-макеты, иллюстрации, презентации…`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 18 — "reasonable" rendered "justified"
- **Location:** `sections[17].body`, first sentence
- **Current:** `Нотации <code>+AI</code> СЛЕДУЕТ сохраняться при обоснованных преобразованиях артефакта…`
- **English:** `The <code>+AI</code> notation SHOULD survive reasonable transformations of an artifact…`
- **Issue:** "reasonable" → "обоснованных" means "justified/well-founded", a different concept from "reasonable" ("разумных"). A reasonable transformation is not the same as a justified one.
- **Suggested:** `Нотации <code>+AI</code> СЛЕДУЕТ сохраняться при разумных преобразованиях артефакта…`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

## Round 1 verification

- [x] Slogan split (несу vs принимаю) — still present, carried forward
- [x] Section 1 "созданного" — still present, carried forward
- [x] Section 5.4 "направлен адресату" — still present, carried forward
- [x] Section 14 English code blocks — still present, carried forward
- [x] Section 15 "проекты" — still present, carried forward
- [x] Section 18 "обоснованных" — still present, carried forward

## Notes

- "named" is consistently rendered "указанный/указанная" (sections 21, 22, 23; `interfaceCopy.description`). Consistent, but "названный/поименованный" is closer to the "whose name carried this link" sense; a native speaker may prefer "названная сторона".
- "accountability" is rendered "подотчётность" in the body (§2, §8, §20) but "ответственность" in `interfaceCopy.meaningThreeBody`. The body's "подотчётность" is the more precise choice; the interfaceCopy instance is idiomatic but collapses the accountability/responsibility distinction.
- `interfaceCopy.plainBody`'s `решение его использовать` has the same mild antecedent ambiguity as several sibling languages ("его" can bind to the result rather than AI). Cosmetic.
- Section 7 correctly renders "substantially generated" as `в существенной части сгенерированное` — no drift.
- Section 6 "incidental" (`второстепенная`) and "not necessarily" (`не обязательно`) are correctly rendered.
- Section 4 "case-sensitive" is correctly rendered (`чувствителен к регистру`).
- Normative terms are handled correctly: section 3 defines all five with English in parentheses, and the roots ДОЛЖЕН/НЕ ДОЛЖЕН/СЛЕДУЕТ/НЕ СЛЕДУЕТ/МОЖЕТ are used consistently throughout (grammatical agreement is expected Russian, not drift).
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
