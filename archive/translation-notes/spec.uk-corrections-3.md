# spec.uk.js — Round 3 final correction recommendations

- **Language:** Українська (uk)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.uk-corrections-2.md` (0 high / 1 medium / 6 low) — status of each item verified against the current file
- **Verdict:** Clean — all seven round-2 findings have been applied, and no new issues were found in a full re-check.
- **Count:** 0 high / 0 medium / 0 low

## Corrections

No corrections identified.

## Round 2 verification

- [x] §9 / 5.3 / 5.5 / §7 / §21 "accept/adopt" conflation (MEDIUM) — applied: `схвалити`→`прийняти`, `схвалила`→`прийняла`, title `Схвалення`→`Прийняття`, `схвалює`→`приймає`, `не схвалила`→`не прийняла`, `схвалення людиною`→`прийняття людиною`.
- [x] "ідентифіковна" → "ідентифікована" (§2, §21, §25) — applied: all three now read `ідентифікована` / `ідентифікованої` / `ідентифікованою`.
- [x] "named" `зазначена` → `названа` (§21, §22, §23) — applied: all three now read `названа сторона` / `названа особа чи організація`.
- [x] Section 1 "materially assisted" narrowed to "створено" — applied: now reads `що артефакту суттєво сприяв штучний інтелект`.
- [x] Section 14 English code blocks — applied: now `Автор: Eric Mourant +AI` and `У цьому проєкті використовується +AI.`
- [x] Section 15 "designs" → "проєкти" — applied: now `дизайн-макети`.
- [x] Section 18 "reasonable" → "обґрунтованих" — applied: now `розумних перетвореннях`.

## Notes

- Load-bearing invariants all verified byte-identical: `+AI` everywhere (never localised/re-cased/spaced); Section 4 counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted` unchanged; Section 17 JSON keys and values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`) unchanged; `data-company-example` and `data-json-example` attributes present in the same positions; `Eric Mourant` and `JAPER Technology` spelled exactly; section numbering 1–26 and h4 labels 5.1–5.6 in order.
- Normative terms consistent across all 26 sections and the chrome: §3 defines all five with English in parentheses — МУСИТЬ (MUST), НЕ МУСИТЬ (MUST NOT), СЛІД (SHOULD), НЕ СЛІД (SHOULD NOT), МОЖЕ (MAY) — and the same uppercase glosses recur throughout; the header comment's mapping table matches actual usage. The inflected forms (`МУСИТЬ`, `НЕ МУСИТЬ`, `СЛІД`, `НЕ СЛІД`, `МОЖЕ` as impersonal glosses) are the same word, not drift.
- Slogan `ШІ допоміг. Я беру відповідальність.` is byte-identical in `documentTitle` (after `+AI — `), `heroTitle`, §1, §23, §26 and `end`; `heroLead` `<strong>…</strong>` uses matching wording (`штучний інтелект суттєво допоміг у роботі… приймає відповідальність за її оприлюднення`).
- Section 5.4 keeps all six verbs (опублікований, переданий, розгорнутий, поданий, представлений, в інший спосіб випущений); 5.6 keeps "рішення випустити, використати або представити". Section 9 keeps "слово за словом чи елемент за елементом" and "змістового акту прийняття людиною". Section 24 keeps "обидва питання" / "так" / "обидві відповіді стверджувальні". Section 26 keeps the full verb chain прийняти/опублікувати/передати/розгорнути/в інший спосіб випустити and "за це рішення".
- List-item counts: Section 6 and Section 8 each contain 17 `<li>` items in the English master, and the Ukrainian renders all 17 in each (the review brief said "21" for Section 6 — the master actually has 17 there, matching Section 8). Section 19 (6 items), Section 21 (4 items), Section 25 (9 items) all complete.
- Accepted no-change items from round 2 still acceptable: `meaningThreeBody` renders "accountability" as `відповідальність` (vs `підзвітність` in the body) — idiomatic and fine; §7 `значною частиною створений` for "substantially generated" — fine; §6 `побічна` / `не обов'язково` — fine; §4 `чутлива до регістру` — fine.
- Minor nuances noted but not flagged as errors: §19 "universal convention" → `загальна домовленість` (slightly "general" rather than "universal"); §6 list "design" → `проєктування` (engineering-leaning) while §15 "designs" → `дизайн-макети` — both contextually defensible. `МОЖЕ` as the MAY gloss is grammatically unusual as an impersonal marker but is a documented, consistent convention.
- My Ukrainian is non-native: my confidence is highest on structural/byte-identical checks (tags, attributes, placeholders, names, JSON, numbering) and on the five fixed glossary items above; sentence-level idiomatic polish (e.g. `МОЖЕ бути визначено`, `загальна домовленість`) is best confirmed by a native speaker per TRANSLATIONS.md, as round 2 also recommended.
