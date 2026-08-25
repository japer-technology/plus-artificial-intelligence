# spec.he.js — Round 3 final correction recommendations

- **Language:** עברית (he)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.he-corrections-2.md` (0 high / 2 medium / 6 low) — status of each item verified against the current file
- **Verdict:** Faithful, complete translation; all 8 round-2 corrections are now applied, and both round-3 correction items (the MAY drift MEDIUM and the plainLead wording LOW) have now been applied to spec.he.js.
- **Count:** 0 high / 1 medium / 1 low

## Corrections

### Normative `MAY` drifted to possibility/capability words (`ניתן` / `עשויות`) instead of the documented permission form `רשאי`
- **Location:** `sections[4].body` (final paragraph); `sections[14].body` (first paragraph); `sections[15].body` (closing paragraph); `sections[16].body` (first paragraph)
- **Current:**
  - `sections[4]`: `…גרסאות חלופיות עשויות להיות מוגדרות בעתיד באמצעות הרחבות למפרט זה…`
  - `sections[14]`: `…ניתן להשתמש בסימון במאגרי תוכנה…`
  - `sections[15]`: `…ניתן לשייך בנפרד מטא־נתונים מפורטים יותר…`
  - `sections[16]`: `…ניתן להשתמש בסימן במחקר ובעבודה מדעית, הנדסית או טכנית…`
- **English:**
  - `sections[4]`: `Variants MAY later be defined by extensions to this specification…`
  - `sections[14]`: `The notation MAY be used in software repositories…`
  - `sections[15]`: `More detailed provenance metadata MAY be associated separately.`
  - `sections[16]`: `The mark MAY be used in research, scientific, engineering or technical work…`
- **Issue:** The header mapping table (lines 9–13) commits `MAY → רשאי`, and the translation uses `רשאי` for `MAY` everywhere the English subject is active (e.g. sections 7, 9, 10, 11, 12, 13, 17, 21, 22, 25). In these four places the English is passive and the translation switches to `ניתן`/`עשויות` — words for possibility/ability, not permission. That is a drift from the normative marker (RFC-style "may" = permitted, not "can" = possible), and it makes the header table not match actual usage. The passive construction does not license the switch: `מותר` (permitted) works in passive constructions and preserves the permission sense. Note also that `sections[16]` correctly renders the separate word "permitted" as `מותר` in the same sentence, so the norm is already available there.
- **Suggested:**
  - `sections[4]`: `…גרסאות חלופיות מותר יהיה להגדיר בעתיד באמצעות הרחבות למפרט זה…` (or keep the permission verb `רשאי` via a light rephrase: `הרחבות למפרט זה רשאיות להגדיר בעתיד גרסאות חלופיות`)
  - `sections[14]`: `…מותר להשתמש בסימון במאגרי תוכנה…`
  - `sections[15]`: `…מותר לשייך בנפרד מטא־נתונים מפורטים יותר…`
  - `sections[16]`: `…מותר להשתמש בסימן במחקר ובעבודה מדעית, הנדסית או טכנית…`
- **Severity:** MEDIUM
- **Round 2:** new in round 3
- **Status:** applied to spec.he.js

### `interfaceCopy.plainLead` — "accountability declaration" flattened to "responsibility"
- **Location:** `interfaceCopy.plainLead`
- **Current:** `הסימן הוא הצהרת אחריות, לא טענה שבינה מלאכותית היא המחברת ולא ערובה לכך שהעבודה נכונה.`
- **English:** `The mark is an accountability declaration, not a claim that AI is the author and not a guarantee that the work is correct.`
- **Issue:** The translation maintains a deliberate accountability/responsibility distinction: "accountability" → `אחריותיות` (sections 2, 8, 20, 21, `end`; and `plainTitle`/`meaningThreeBody` after round 2), while "responsibility" → `אחריות`. Section 8's identical phrase "accountability declaration" is rendered `הצהרת אחריותיות`, but `plainLead` uses `הצהרת אחריות` ("responsibility declaration"), flattening the distinction and breaking consistency with the rest of the chrome.
- **Suggested:** `הסימן הוא הצהרת אחריותיות, לא טענה שבינה מלאכותית היא המחברת ולא ערובה לכך שהעבודה נכונה.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.he.js

## Round 2 verification

- [x] applied — Section 2 "exclusive authorship" → `ולא במחברות בלעדית.` (round-2 MEDIUM)
- [x] applied — Section 22 title `הקשר למחברות` and body `…מהקצאת אחוז של מחברות.` (round-2 MEDIUM)
- [x] applied — `plainTitle` → `סיוע שקוף. אחריותיות גלויה.` (round-2 LOW)
- [x] applied — `meaningThreeBody` → `…אינו מעביר את האחריותיות למערכת או לספק…` (round-2 LOW)
- [x] applied — Section 14 "commits" → `קומיטים (commits)` (round-2 LOW)
- [x] applied — "provenance" → `מוצא` in Section 15, `end`, and Section 25 (`מוצא קריפטוגרפי`) (round-2 LOW, three locations)
- [x] applied — Section 7 "substantially generated" → `…תוכן שנוצר במידה מהותית בידי בינה מלאכותית.` (round-2 LOW)
- [x] applied — all round-1 items carried in round 2 (same as the seven above)

## Notes

- Canonical slogan `בינה מלאכותית סייעה. אני מקבל אחריות.` is verbatim in `documentTitle`, `heroTitle`, sections 1/23/26 and the `end` panel; `heroLead`'s `<strong>` uses matching wording.
- Section 3 defines `חייב / אסור / מומלץ / לא מומלץ / רשאי` with the English parentheticals, and the definitions match the master (absolute requirement / absolute prohibition / strong recommendation / normally avoided / optional). The only mismatch is the four passive `MAY` spots listed above.
- Load-bearing invariants verified byte-identical: `+AI` everywhere; Section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`); Section 17 JSON keys and values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); `data-company-example` and `data-json-example` attributes; `Eric Mourant` / `JAPER Technology` spellings; section numbering 1–26 and h4 labels 5.1–5.6.
- Section 5.4 keeps all five verbs plus "otherwise released" (`יפורסם, יועבר, יוטמע, יוגש, יוצג או ישוחרר בדרך אחרת`); 5.6 keeps "decision to release, use or represent" (`ההחלטה לשחרר, להשתמש או לייצג`).
- List counts: Section 6 has 17 items (not 21 as the brief stated — the master itself contains 17) and Section 8 has 17 items; both Hebrew lists are complete and correct. Section 19 (6 items), 21 (4), and 25 (9) are also complete.
- Section 9 "word-by-word or element-by-element" → `מילה במילה או רכיב ברכיב` and "meaningful human act of adoption" → `מעשה אנושי משמעותי של אימוץ` are correct.
- Section 24 "both questions" → `על שתי השאלות`, both `yes` → `כן`, and "If both answers are yes" → `אם התשובה לשתיהן היא כן` are correct. Section 26 keeps accept/publish/transmit/deploy/otherwise release (`לקבל, לפרסם, להעביר, להטמיע או לשחרר בדרך אחרת`) and "that decision" (`על החלטה זו`).
- Numbers verified: "two facts" → `שתי עובדות`, "Three characters" → `שלושה תווים`.
- Accepted no-change items: `highlight` → `צבע הדגשה` (adds "colour", reasonable); `translationNote` is non-empty in Hebrew (the English master is empty — a legitimate per-language addition consistent with "English is normative"); Section 14 code blocks stay in English matching the master; "release" → `פרסום` in `heroLead`/`meaningTwoBody` (normative sections consistently use `לשחרר`; the chrome wording is a mild, acceptable variation); Section 8 "warranty of correctness" → `אחריות לנכונות` (carried from round 2; `ערובה` would be marginally more precise — cosmetic).
- No unescaped backticks or `${` inside template literals; no dropped clauses or added claims observed; no leftover untranslated English prose outside the intentional code examples; no Unicode bidi control characters (the header's claim is consistent with a visual inspection — this could not be machine-verified here without grep).
- Honest limitation: this review is non-native Hebrew. The file header itself flags "Interface chrome: AI-generated, pending native-speaker review." The two findings above are term-consistency issues confirmable against the master; a native-speaker read of sections 3, 7 and 26 per `TRANSLATIONS.md` is still recommended before treating this as final.
