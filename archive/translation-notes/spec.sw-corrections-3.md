# spec.sw.js — Round 3 final correction recommendations

- **Language:** Kiswahili (sw)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.sw-corrections-2.md` (0 high / 4 medium / 6 low) — status of each item verified against the current file
- **Verdict:** Faithful and now internally consistent; every round-2 correction has been applied and all three round-3 wording items have now been applied to the file.
- **Count:** 0 high / 0 medium / 3 low

## Corrections

### Section 8 — "does NOT assert" rendered "does not verify/prove"
- **Location:** `sections[8].body`, first paragraph
- **Current:** `Isipokuwa tangazo la nyongeza linaeleza vinginevyo waziwazi, <code>+AI</code> HAITHIBITISHI kwamba:`
- **English:** `Unless an additional declaration explicitly states otherwise, <code>+AI</code> does NOT assert that:`
- **Issue:** `HAITHIBITISHI` means "does not verify/prove/confirm"; the English `does NOT assert` means "does not claim/state". This is a subtle verb shift (claim vs prove). In context the practical effect is preserved (the mark makes no warranty), so it is a wording nuance rather than a meaning error.
- **Suggested:** `Isipokuwa tangazo la nyongeza linaeleza vinginevyo waziwazi, <code>+AI</code> HAIDAI kwamba:`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.sw.js

### interfaceCopy.highlight — adds "colour" to the bare label
- **Location:** `interfaceCopy.highlight`
- **Current:** `Rangi ya kuangazia`
- **English:** `Highlight`
- **Issue:** `Rangi ya kuangazia` means "highlight colour"; the master label is the bare action/feature name "Highlight" (the colour nuance belongs to `highlightAria`, which is rendered correctly as "Choose a random highlight colour"). Slightly over-specific.
- **Suggested:** `Kuangazia`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.sw.js

### "notation" rendered "nukuu" in the body but "alama" in footerLine
- **Location:** section bodies (`nukuu`) vs `interfaceCopy.footerLine` (`Alama huria`)
- **Current:** body e.g. `sections[4].title` `Nukuu ya kikanuni` … vs `interfaceCopy.footerLine` `Alama huria. Uwajibikaji wa binadamu.`
- **English:** `notation` (body) … vs `Open notation. Human responsibility.` (footerLine)
- **Issue:** `nukuu` more precisely means "quotation/transcription" and is used for "notation" throughout the body, while the same English word is rendered "alama" (mark) in the footer slogan — a minor terminology split. Neither choice changes meaning, and "Open notation" as a slogan is fine; noted for a future native-speaker pass rather than a blocking fix.
- **Suggested:** Optionally unify on one term for "notation" (e.g. `nukuu` or `alama`), e.g. footer `Nukuu huria. Uwajibikaji wa binadamu.` — or accept both as stylistic.
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.sw.js (footerLine now `Nukuu huria. Uwajibikaji wa binadamu.`, matching the body's `nukuu`)

## Round 2 verification

- [x] applied — Canonical slogan split (interface `Ninawajibika.` vs body `Mimi ninachukua jukumu.`): `documentTitle` and `heroTitle` now both read `AI ilisaidia. Mimi ninachukua jukumu.`, byte-identical with sections 1/23/26 and `end`.
- [x] applied — Section 6 "incidental": now `wa kando` (was `wa kubahatisha`).
- [x] applied — Section 18 "attribution": now `utambulisho wa mtunzi` (was `utambulisho wa mtoaji`).
- [x] applied — "specification" split (chrome `Vipimo` vs body `fafanuzi`): body now uses `vipimo` throughout (sections 3, 4, 9, 21, `end`); `fafanuzi` no longer appears.
- [x] applied — `markLabel`: now `Alama ya kikanuni` (was `Alama rasmi`).
- [x] applied — "material/materially" split: `description`, `heroLead`, `plainBody` now use `kiwango cha maana` (was `kwa kiasi kikubwa`).
- [x] applied — `followedLink`: now `Maelezo ya +AI baada ya jina` (was `…post-nominal…`).
- [x] applied — `plainBody` pronoun: now `…uamuzi wa kuitumia AI` (was `kuyatumia`).
- [x] applied — Section 2 title: now `Kanuni ya muundo` (was `Msingi wa muundo`).
- [x] applied — Section 14 `<pre><code>` blocks: restored to English `Author: Eric Mourant +AI` and `This project uses +AI.`

## Notes

- Load-bearing invariants all hold: `+AI` everywhere (never localised/spaced/re-cased); Section 4 counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted` byte-identical; Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`) byte-identical; example names `Eric Mourant` and `JAPER Technology` exact; `data-company-example` / `data-json-example` attributes intact; sections 1–26 numbered, ordered, with h4 labels 5.1–5.6.
- Normative terms are consistent: `MUST`→LAZIMA, `MUST NOT`→NI MARUFUKU, `SHOULD`→INAPASWA, `SHOULD NOT`→HAIPENDEKEZWI, `MAY`→INAWEZA; Section 3 keeps the English term in parentheses and defines each correctly; the header-comment mapping table matches actual usage. (Section 24's lowercase "should" → `anapaswa` is correctly not treated as a normative SHOULD.)
- Section 5: all seven 5.1 verbs and all six 5.4 verbs present; 5.6 keeps "decision to release, use or represent". Section 26 keeps accept/publish/transmit/deploy/otherwise release and "that decision" (`uamuzi huo`). Section 24 "both questions"/"yes" rendered correctly (`maswali yote mawili` / `ndiyo`). Section 9 "word-by-word or element-by-element" and "meaningful human act of adoption" present.
- List counts: Section 6 has 17 items in the master (the review brief's "21" appears to be a typo) and all 17 are present; Section 8 has 17 and all are present; Sections 2, 4, 19, 21, 25 lists all complete. No dropped clauses, no added claims, no unescaped backticks or `${` in the template literals, no leftover untranslated English prose (Section 14 code blocks are intentionally English per round 2).
- Accepted no-change: Section 13 field labels translated (`Mwandishi:`, `Imetayarishwa na:`, `Imetolewa na:`) — these are `<strong>` prose examples, distinct from Section 14's `<pre><code>` blocks, so translating them is consistent and was not flagged in round 2. Section 4 "case-sensitive" (`huzingatia ukubwa na udogo wa herufi`) is the standard Swahili formulation.
- My Swahili knowledge is limited for fine lexical judgment: the `assert`→`thibitisha`, `highlight`→`Rangi ya kuangazia`, and `nukuu`/`alama` observations above are best-effort wording notes, not confirmed meaning errors. A native-speaker read of sections 3, 7 and 26 (per TRANSLATIONS.md) is still recommended before treating this as final.
