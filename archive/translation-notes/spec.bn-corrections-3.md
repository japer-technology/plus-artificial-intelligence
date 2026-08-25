# spec.bn.js — Round 3 final correction recommendations

- **Language:** বাংলা (bn)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.bn-corrections-2.md` (0 high / 4 medium / 6 low) — status of each item verified against the current file
- **Verdict:** All ten round-2 items have been applied, and both round-3 correction items (the slogan-drift MEDIUM and the section-2 wording LOW) have now been applied to spec.bn.js.
- **Count:** 0 high / 1 medium / 1 low

## Corrections

### Canonical slogan drift — "সাহায্য" vs "সহায়তা" in `documentTitle` and `heroTitle`
- **Location:** `interfaceCopy.documentTitle` and `interfaceCopy.heroTitle` (the slogan is also present, correctly, in `sections[1].body`, `sections[23].body`, `sections[26].body`, and `end`)
- **Current:** `+AI — AI সাহায্য করেছে। আমি দায়িত্ব নিচ্ছি।` (documentTitle) and `AI সাহায্য করেছে। আমি দায়িত্ব নিচ্ছি।` (heroTitle)
- **English:** `+AI — AI helped. I take responsibility.` and `AI helped. I take responsibility.`
- **Issue:** The canonical slogan "AI helped. I take responsibility." must be byte-identical in all six locations. Four of them render it `AI সহায়তা করেছে। আমি দায়িত্ব নিচ্ছি।` (sections 1, 23, 26, `end`), but `documentTitle` and `heroTitle` use `AI সাহায্য করেছে। …`. "সাহায্য" and "সহায়তা" are near-synonyms for "help/assistance", so the sentence is not byte-identical. The body uses "সহায়তা" throughout (including `interfaceCopy.description`, the `heroLead` `<strong>` segment, and the header mapping table), so the four-location form is the dominant one and the two chrome strings are the outliers. Round 2 fixed only the trailing "দায়িত্ব আমার" → "আমি দায়িত্ব নিচ্ছি" part and left "সাহায্য" in place, so the invariant is still broken.
- **Suggested:** `+AI — AI সহায়তা করেছে। আমি দায়িত্ব নিচ্ছি।` (documentTitle) and `AI সহায়তা করেছে। আমি দায়িত্ব নিচ্ছি।` (heroTitle)
- **Severity:** MEDIUM
- **Round 2:** new in round 3
- **Status:** applied to spec.bn.js

### Section 2 — "exclusive authorship" rendered as a two-term doublet
- **Location:** `sections[2].body`, final paragraph
- **Current:** `অতএব এই মানদণ্ডের বিষয়বস্তু হইল <strong>AI-এর অংশগ্রহণ ও মানবিক জবাবদিহিতা</strong>, একচেটিয়া কর্তৃত্ব বা রচনাস্বত্ব নহে।`
- **English:** `The standard therefore concerns <strong>AI participation and human accountability</strong>, rather than exclusive authorship.`
- **Issue:** The English has a single term, "authorship". The Bengali uses two terms joined by "বা" (or): "কর্তৃত্ব বা রচনাস্বত্ব". "রচনাস্বত্ব" is the term the file itself uses for "authorship" elsewhere (section 22 title and body), while "কর্তৃত্ব" most naturally reads as "authority/agency". The doublet therefore either adds "authority" (an added claim) or is a redundant hendiadys; either way it diverges from the single-term source. Native-speaker confirmation is advised, since "কর্তৃত্ব" can also carry the sense of "authorship" in Bengali.
- **Suggested:** `অতএব এই মানদণ্ডের বিষয়বস্তু হইল <strong>AI-এর অংশগ্রহণ ও মানবিক জবাবদিহিতা</strong>, একচেটিয়া রচনাস্বত্ব নহে।`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.bn.js

## Round 2 verification

- [x] Section 7 "অর্থবহ" → "সমতুল্য" — applied (now `নিম্নলিখিত উক্তির সমতুল্য কোনো উক্তি:`)
- [x] Section 16 "কৌশলগত" → "প্রকৌশল" — applied (now `…প্রকৌশল অথবা কারিগরি কর্মে…`)
- [x] `documentTitle` slogan tail "দায়িত্ব আমার" → "আমি দায়িত্ব নিচ্ছি" — applied (now `+AI — AI সাহায্য করেছে। আমি দায়িত্ব নিচ্ছি।`)
- [x] `heroTitle` slogan tail "দায়িত্ব আমার" → "আমি দায়িত্ব নিচ্ছি" — applied (now `AI সাহায্য করেছে। আমি দায়িত্ব নিচ্ছি।`)
- [x] Section 7 "প্রধানত" → "উল্লেখযোগ্যভাবে" — applied (now `…উল্লেখযোগ্যভাবে AI দ্বারা উৎপাদিত বিষয়বস্তু প্রকাশ করা যেতে পারে।`)
- [x] Section 8 "প্রতিশ্রুতি" → "নিশ্চয়তা" — applied (now `…শুদ্ধতার কোনো নিশ্চয়তা নহে।`)
- [x] Section 15 "প্রণয়নে" → "সৃষ্টি করেছেন:" — applied (now `<strong>সৃষ্টি করেছেন: Eric Mourant +AI</strong>`)
- [x] `colourChanged` missing verb — applied (now `হাইলাইটের রং {colour}-এ পরিবর্তিত হয়েছে।`)
- [x] Section 3 "নিরপেক্ষ" → "নিরঙ্কুশ" — applied (now `…একটি নিরঙ্কুশ ও অবশ্যপালনীয় শর্ত…` / `…একটি নিরঙ্কুশ ও পূর্ণ নিষেধাজ্ঞা…`)
- [x] `plainBody` pronoun ambiguity — applied (now `…একজন শনাক্তযোগ্য ব্যক্তি বা প্রতিষ্ঠান AI ব্যবহারের সিদ্ধান্তের পেছনে দায়িত্ব নিচ্ছে।`)

All ten round-2 items are now resolved; none needs to be carried forward.

## Notes

- `interfaceCopy.translationNote` is filled in (`এটি তথ্যগত অনুবাদ। কোনো অসঙ্গতি থাকলে মূল ইংরেজি পাঠই মান্য নথি হিসেবে গণ্য হবে।`) whereas the English master has an empty string. This is a reasonable, standard addition for a non-normative translation and does not alter spec content; accepted as-is.
- "Specification" is rendered "স্পেসিফিকেশন" in `interfaceCopy.specification` and `versionFooter`, but "বিধানপত্র" in the section bodies and `end`; and "v0.1" appears as `v0.1` (versionFooter), `সংস্করণ ০.১` (`end`), and `০.১ সংস্করণ` (section 9). These are stylistic variations, not meaning changes; accepted.
- The brief says "Section 6: all 21 list items present", but the current English master has 17 `<li>` items in section 6; all 17 are present and correctly translated in the Bengali. Section 8 likewise has 17 items, all present.
- Carried round-1 notes that remain acceptable: "named" is `চিহ্নিত` in `description` vs `নামোল্লিখিত` in the body (sections 21, 22, 23); "model" → `নকশাকৃতি` and "agent" → `প্রতিনিধি` are unusual calques a native speaker may wish to revisit (common alternatives `মডেল`, `এজেন্ট`).
- Load-bearing invariants verified byte-identical: `+AI` everywhere (never localised/re-spaced/re-cased), section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`), section 17 JSON keys and values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`), example names `Eric Mourant` and `JAPER Technology`, `data-company-example` / `data-json-example` attributes, section numbering 1–26 in order, and h4 labels 5.1–5.6.
- Normative-term mapping (header comment) matches actual usage: MUST→`আবশ্যক`, MUST NOT→`নিষিদ্ধ`, SHOULD→`উচিত`, SHOULD NOT→`উচিত নয়`, MAY→`করা যেতে পারে` — consistent across all 26 sections and the chrome. Section 3 keeps the English term in parentheses and its five definitions match the master (absolute requirement / absolute prohibition / strong recommendation / normally-avoided practice / optional practice).
- HTML structure (tags, nesting, and `class="canonical"` / `data-company-example` / `data-json-example` attributes) matches the English throughout; only text content is translated. No unescaped backticks or `${` in template literals; no leftover untranslated English prose outside the intentional code blocks and JSON.
- My Bengali is limited. The MEDIUM slogan finding rests on a byte-identity check (no semantic judgment needed) and is therefore solid; the LOW section-2 finding and the term-choice notes above (কর্তৃত্ব, রচনাস্বত্ব, নকশাকৃতি, প্রতিনিধি, সহায়তা/সাহায্য formality) would benefit from a native-speaker pass before final sign-off.
