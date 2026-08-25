# spec.am.js — Round 3 final correction recommendations

- **Language:** አማርኛ (am)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.am-corrections-2.md` (0 high / 3 medium / 6 low) — status of each item verified against the current file: all 9 applied
- **Verdict:** Faithful and complete; every round-2 finding has been applied, all load-bearing invariants hold, and no meaning or normative errors remain — both round-3 correction items have now been applied to spec.am.js.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### Section 13 — "responsible-party" drifts from the document's standard term
- **Location:** `sections[13].body`, "…or responsible-party field."
- **Current:** `ምልክቱ በደራሲ፣ በአዘጋጅ፣ በገምጋሚ ወይም በኃላፊነት-ወሳጅ አካል መስክ ውስጥ መታየት ይፈቀዳል።`
- **English:** `The notation MAY appear in an author, preparer, reviewer or responsible-party field.`
- **Issue:** Throughout the document "responsible party" is rendered `ኃላፊነት የሚወስድ አካል` (sections 1, 5, 7, 8, 9, 11, 14, 21, etc.). Only here is it compressed to `ኃላፊነት-ወሳጅ አካል`, using the uncommon agentive `ወሳጅ`. The meaning is preserved but the load-bearing term drifts in one place; keeping the established form aids reader consistency.
- **Suggested:** `ምልክቱ በደራሲ፣ በአዘጋጅ፣ በገምጋሚ ወይም በኃላፊነት የሚወስድ አካል መስክ ውስጥ መታየት ይፈቀዳል።`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.am.js

### Section 2 — "exclusive authorship" rendered as "exclusive ownership of authorship"
- **Location:** `sections[2].body`, final paragraph
- **Current:** `ስለዚህ ደረጃው የሚመለከተው ብቸኛ የደራሲነት ባለቤትነትን ሳይሆን <strong>የአርቲፊሻል ኢንተለጀንስ ተሳትፎንና የሰውን ተጠያቂነት</strong> ነው።`
- **English:** `The standard therefore concerns <strong>AI participation and human accountability</strong>, rather than exclusive authorship.`
- **Issue:** `ብቸኛ የደራሲነት ባለቤትነት` inserts `ባለቤትነት` ("ownership"), yielding "exclusive ownership of authorship". The source contrasts accountability with *authorship* itself, not with ownership of it; elsewhere "authorship" is rendered `ደራሲነት` alone (section 22, `relationship to authorship` → `ከደራሲነት ጋር ያለው ግንኙነት`). Meaning is not lost, but the extra word should be dropped for precision.
- **Suggested:** `ስለዚህ ደረጃው የሚመለከተው ብቸኛ ደራሲነትን ሳይሆን <strong>የአርቲፊሻል ኢንተለጀንስ ተሳትፎንና የሰውን ተጠያቂነት</strong> ነው።`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.am.js

## Round 2 verification

- [x] Section 4 case-sensitivity ("font size" → "uppercase/lowercase") — **applied** (line 118 now `ምልክቱ በትልቅና በትንሽ ፊደል መካከል የሚለይ ነው።`)
- [x] Section 6 "incidental" ("sudden" → "secondary") — **applied** (line 164 now `ተጓዳኝ ወይም ሙሉ በሙሉ ሜካኒካል…`)
- [x] Section 18 "attribution" ("ownership" → "credit") — **applied** (line 317 now `ደራሲነት መጠቀስ…`; `<code>+AI</code>` tags also added to match English)
- [x] Section 5.4 five verbs (submitted + presented collapsed) — **applied** (line 142 now `…ይታተም፣ ይተላለፍ፣ ይሰማራ፣ ይገባል፣ ይቀርብ…`)
- [x] "canonical" two renderings — **applied** (markLabel, line 57, now `ቀዳሚው መደበኛ ምልክት`)
- [x] `plainLead` "claim" ("question" → "assertion") — **applied** (line 49 now `አባባል`)
- [x] `footerLine` "notation" ("writing" → "mark") — **applied** (line 59 now `ክፍት ምልክት። ሰብዓዊ ኃላፊነት።`)
- [x] "specification" two renderings — **applied** (`መለኪያ` now used for "specification" throughout; `መስፈርት` retained only for "requirement(s)" and "professional standard", `ደረጃ` for the section-2 "standard")
- [x] Section 8 "hallucinations" — **applied** (line 197 now `ውጤቱ ምንም ቅዠት (hallucination) ያለመያዙን`)

## Notes

- **Load-bearing invariants verified byte-identical:** `+AI` is never localised, spaced or re-cased; Section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`) are unchanged; Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`) are exact; `Eric Mourant` and `JAPER Technology` are spelled correctly everywhere; `data-company-example` (sections 4, 11, 13) and `data-json-example` (section 17) attributes are present; sections are numbered 1–26 in order with h4 labels 5.1–5.6 intact.
- **Normative terms:** Section 3 keeps the English term in parentheses (`(MUST)`, `(MUST NOT)`, `(SHOULD)`, `(SHOULD NOT)`, `(MAY)`), and the definitions match the master (absolute requirement / absolute prohibition / strong recommendation departable for a legitimate reason / practice normally avoided but sometimes justified / optional practice). Usage is consistent across all 26 sections: MUST→`ግዴታ ነው` (3×), MUST NOT→`ፈጽሞ ክልክል ነው` (3×), SHOULD→`ይመከራል` (7×), SHOULD NOT→`አይመከርም` (3×), MAY→`ይፈቀዳል` (21×). Lower-case "may"/"should" (sections 2, 6, 24) and plain "NOT" (section 8) are correctly rendered as ordinary modals/negation, not as normative terms. The file header comment's mapping table matches actual usage.
- **Slogan** `አርቲፊሻል ኢንተለጀንስ ረድቷል። ኃላፊነቱን እኔ እወስዳለሁ።` is byte-identical in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, section 1, section 23, section 26 and `end`; `heroLead`'s `<strong>…</strong>` uses matching wording (`…ሥራውን በእጅጉ ረድቷል…`) with the expected third-person subject.
- **Structure:** HTML tag structure, class names (`canonical`), `data-*` attributes and `<pre>/<blockquote>/<ol>/<ul>/<h4>` nesting match the English master in all sections; only text content is translated. Section 6 (17 items), Section 8 (17 items), Section 19 (6 items) and Section 25 (9 items) lists are complete.
- **Placeholder:** `colourChanged` retains the `{colour}` placeholder (`አጉላ ቀለሙ ወደ {colour} ተቀይሯል።`). No unescaped backticks or `${` appear inside template literals.
- **Minor observations (no action recommended):** (a) "Version" is `ስሪት` in `versionLabel` but `ቅጂ` in section 9/25 and `end` — both are acceptable Amharic for "version"; (b) "declaration" is `ማረጋገጫ` in the sections but `መግለጫ` once in `heroLead` — both acceptable, and the sections are internally consistent.
- **Amharic limitation disclosure:** My Amharic knowledge is working-level, not native. The two LOW findings above are terminology/wording refinements I am reasonably confident about (word-choice drift and an added noun), but a native-speaker read of sections 3, 7, 13 and 26 per `TRANSLATIONS.md` remains advisable before final sign-off.
