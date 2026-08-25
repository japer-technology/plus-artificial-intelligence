# spec.uk.js — Round 2 final correction recommendations

- **Language:** Українська (uk)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.uk-corrections-1.md` (0 high / 1 medium / 6 low) — all 7 findings re-verified against the current file and carried forward unchanged
- **Verdict:** Highly accurate overall — canonical tagline and all five normative terms consistent; the accept/adopt verb conflation remains the main fix. No new findings.
- **Count:** 0 high / 1 medium / 6 low

## Corrections

### Section 9 — "accept" rendered "approve" (adopt/accept conflation)
- **Location:** `sections[8].body`, second sentence; same verb problem recurs at `sections[4]` (5.3, 5.5), `sections[6]` (§7), `sections[20]` (§21), and `interfaceCopy.meaningTwoBody`
- **Current:** `…відповідальна сторона МУСИТЬ свідомо схвалити артефакт, що випускається.`
- **English:** `The responsible party MUST, however, knowingly accept the artifact being released.`
- **Issue:** "accept" is rendered with the verb "схвалити" (to *approve/endorse*) rather than "прийняти" (to *accept/adopt*), weakening a normative MUST obligation. The same conflation runs through the whole document: English deliberately uses two distinct verbs — "accept" and "adopt" — but Ukrainian maps both to "схвалити" in places (§5.3 "свідомо схвалила", §5.5 title "Схвалення", §7 "свідомо схвалює", §21 "не схвалила"/"схвалення людиною") while elsewhere using "прийняти" (§5.5, §5.6, §10, §26, and `meaningTwoBody` "прийняла"). The two verbs should be kept distinct and consistent.
- **Suggested:** Use "прийняти/прийняття" for accept/adopt throughout: §9 → `…МУСИТЬ свідомо прийняти артефакт…`; §5.3 → `свідомо прийняла`; §5.5 title → `Прийняття`; §7 → `свідомо приймає`; §21 → `не прийняла` / `прийняття людиною`. (`meaningTwoBody` "прийняла" already matches.)
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### "identifiable" rendered with non-standard "ідентифіковна"
- **Location:** `sections[1].body`, second list item (also `sections[20]` §21 and `sections[24]` §25)
- **Current:** `ідентифіковна людина або організація…` (also `ідентифіковної відповідальної сторони`, `ідентифіковною відповідальністю`)
- **English:** `an identifiable human or organisation…` (also `no identifiable responsible party`, `identifiable human responsibility`)
- **Issue:** "identifiable" is rendered with the non-standard, non-dictionary word "ідентифіковна" in three places, while `interfaceCopy.plainBody` correctly uses "ідентифікована" for the same English word. The two renderings are inconsistent, and "ідентифіковна" reads as a machine calque.
- **Suggested:** Standardise on `ідентифікована` (or `така, яку можна ідентифікувати`): §2 → `ідентифікована людина або організація`; §21 → `ідентифікованої відповідальної сторони`; §25 → `ідентифікованою відповідальністю`.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### "named" — interfaceCopy vs body
- **Location:** `interfaceCopy.description`, `interfaceCopy.meaningThreeBody` (vs `sections[20]` §21, `sections[21]` §22, `sections[22]` §23)
- **Current:** `названа особа` / `Названа сторона` (interfaceCopy) — but `зазначена сторона`, `зазначена особа чи організація` (body)
- **English:** `named person or organisation` / `the named party` (identical word everywhere)
- **Issue:** "named" is translated two different ways in the same file: "названа" (named) in the interface chrome and "зазначена" (specified/designated) in the body. "названа" is the more faithful rendering (it ties to the "whose name carried this link" concept).
- **Suggested:** Use `названа` consistently in §21, §22, §23.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 1 — "materially assisted" narrowed to "created"
- **Location:** `sections[0].body`, first sentence
- **Current:** `Позначення <code>+AI</code> дає стислий спосіб зазначити, що артефакт створено за суттєвого сприяння штучного інтелекту…`
- **English:** `The <code>+AI</code> notation provides a compact method for identifying an artifact as materially assisted by artificial intelligence…`
- **Issue:** "materially assisted" is narrowed to "створено за … сприяння" (created with assistance). The English says the artifact is *assisted*, not necessarily *created*; §6 shows assistance can be analysis, editing, translation, etc.
- **Suggested:** `Позначення <code>+AI</code> дає стислий спосіб зазначити, що артефакту суттєво сприяв штучний інтелект…`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 14 — code examples left in English
- **Location:** `sections[13].body`, the two `<pre><code>` example strings
- **Current:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>` (both left in English)
- **English:** `Author: Eric Mourant +AI` / `This project uses +AI.`
- **Issue:** Readable prose is left untranslated. The parallel "Author:" field in §13 is translated to "Автор:", so leaving these two strings in English is inconsistent; "This project uses +AI." is a plain sentence, not a key or name.
- **Suggested:** `Автор: Eric Mourant +AI` and `У цьому проєкті використовується +AI.` (keep `Eric Mourant` byte-identical)
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 15 — "designs" rendered ambiguously as "projects"
- **Location:** `sections[14].body`, first sentence
- **Current:** `…зображення, звукозаписи, відеозаписи, проєкти, ілюстрації, презентації…`
- **English:** `…images, audio, video, designs, illustrations, presentations…`
- **Issue:** "designs" → "проєкти" is ambiguous — standalone "проєкти" is most naturally read as "projects" rather than graphic "designs".
- **Suggested:** `…зображення, звукозаписи, відеозаписи, дизайн-макети, ілюстрації, презентації…`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 18 — "reasonable" rendered "justified"
- **Location:** `sections[17].body`, first sentence
- **Current:** `Позначенню <code>+AI</code> СЛІД зберігатися при обґрунтованих перетвореннях артефакту…`
- **English:** `The <code>+AI</code> notation SHOULD survive reasonable transformations of an artifact…`
- **Issue:** "reasonable" → "обґрунтованих" means "justified/well-founded", a different concept from "reasonable" ("розумних").
- **Suggested:** `…при розумних перетвореннях артефакту…`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

## Round 1 verification

- [x] §9 "схвалити" (and 5.3/5.5/§7/§21) — still present, carried forward
- [x] "ідентифіковна" (§2, §21, §25) — still present, carried forward
- [x] названа vs зазначена — still present, carried forward
- [x] Section 1 "створено" — still present, carried forward
- [x] Section 14 English code blocks — still present, carried forward
- [x] Section 15 "проєкти" — still present, carried forward
- [x] Section 18 "обґрунтованих" — still present, carried forward

## Notes

- "accountability" is rendered "підзвітність" in the body (§2, §8, §20) but "відповідальність" in `interfaceCopy.meaningThreeBody`. The body's "підзвітність" is the more precise choice; the interfaceCopy instance is idiomatic but collapses the distinction.
- Normative terms are handled correctly: §3 defines all five (МУСИТЬ/НЕ МУСИТЬ/СЛІД/НЕ СЛІД/МОЖЕ) with English in parentheses, and the same uppercase glosses are used consistently throughout.
- Section 7 "substantially generated" (`значною частиною створений`) is an acceptable rendering of "substantially"; no drift.
- Section 6 "incidental" (`побічна`) and "not necessarily" (`не обов'язково вимагає`) are correctly rendered.
- Section 4 "case-sensitive" is correctly rendered (`чутлива до регістру`).
- `interfaceCopy.plainBody` renders "stands behind" as "відповідає за" ("is responsible for"); close, but "стоїть за" would be more literal. Cosmetic.
- The canonical slogan "ШІ допоміг. Я беру відповідальність." is used verbatim in `documentTitle`, `heroTitle`, §1, §23, §26 and `end`.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
