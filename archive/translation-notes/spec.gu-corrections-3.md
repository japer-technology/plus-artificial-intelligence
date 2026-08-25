# spec.gu.js — Round 3 final correction recommendations

- **Language:** ગુજરાતી (gu)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.gu-corrections-2.md` (1 high / 3 medium / 1 low) — status of each item verified against the current file
- **Verdict:** All five round-2 findings are now applied; the single round-3 correction item has now been applied to spec.gu.js, and the normative terminology, slogan, and load-bearing invariants are all consistent.
- **Count:** 0 high / 0 medium / 1 low

## Corrections

### Section 6 — "does not necessarily require" loses its hedge
- **Location:** `sections[5].body` (the paragraph beginning `આકસ્મિક અથવા સંપૂર્ણ યાંત્રિક…`)
- **Current:** `આકસ્મિક અથવા સંપૂર્ણ યાંત્રિક કૃત્રિમ બુદ્ધિ કાર્યક્ષમતા માટે <code>+AI</code> જરૂરી નથી.`
- **English:** `Incidental or purely mechanical AI functionality does not necessarily require <code>+AI</code>.`
- **Issue:** The English hedge "does not necessarily require" (leaving open that such functionality *may* sometimes still warrant the mark) is rendered as a flat negation `જરૂરી નથી` ("is not required"), which drops the qualifier "necessarily" and slightly strengthens the claim. The operative point is preserved and this is not a normative term, so the shift is minor.
- **Suggested:** `આકસ્મિક અથવા સંપૂર્ણ યાંત્રિક કૃત્રિમ બુદ્ધિ કાર્યક્ષમતા માટે <code>+AI</code> આવશ્યકપણે જરૂરી નથી.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.gu.js

## Round 2 verification

- [x] MUST NOT weakened (sections 4, 12, 16) — applied: all three now read `પ્રતિબંધિત છે`.
- [x] MAY drift (sections 4, 15, 22) — applied: all now read `માન્ય છે` (`વ્યાખ્યાયિત કરવા માન્ય છે`, `હોવું માન્ય છે`, `હોવી માન્ય છે`).
- [x] સ્પષ્ટીકરણ vs વિશિષ્ટતા — applied: `specification`, `readSpec`, `versionFooter`, and `untranslatedNotice.headline` all now use `વિશિષ્ટતા`.
- [x] Untranslated role labels (sections 12, 13, 15) — applied: `સાદર,`, `લેખક:`, `દ્વારા તૈયાર:`, `દ્વારા જારી:`, `દ્વારા સર્જિત` now localised with names kept byte-identical.
- [x] markLabel "માનક ચિહ્ન" — applied: now `પ્રમાણભૂત ચિહ્ન`.

## Notes

- Load-bearing invariants all verified byte-identical: `+AI` everywhere; Section 4 counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`; Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `true`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `Eric Mourant`); example names `Eric Mourant` / `JAPER Technology`; `data-company-example` and `data-json-example` attributes; `class="canonical"`; sections 1–26 and h4 labels 5.1–5.6 in order.
- Normative terminology is consistent across all sections and the header mapping table matches actual usage: MUST → `આવશ્યક છે`, MUST NOT → `પ્રતિબંધિત છે`, SHOULD → `સલાહભર્યું છે`, SHOULD NOT → `સલાહભર્યું નથી`, MAY → `માન્ય છે`. Section 3 keeps the English terms in parentheses. The two non-normative lowercase "should" cases (Section 9 `થવી જોઈએ` and Section 24 `શકવો જોઈએ`) correctly avoid the normative `સલાહભર્યું` term.
- Slogan `AI એ મદદ કરી. જવાબદારી મારી છે.` is byte-identical in `documentTitle` (after `+AI — `), `heroTitle`, Section 1, Section 23, Section 26, and `end`; the `heroLead` `<strong>…</strong>` wording matches.
- Section 5.4 keeps all six release channels (પ્રકાશિત, પ્રસારિત, તૈનાત, સબમિટ, પ્રસ્તુત, અન્યથા જાહેર); 5.6 keeps "release, use or represent" (જાહેર કરવા, ઉપયોગ કરવા, રજૂ કરવા).
- Section 6 and Section 8 each have all 17 list items present; Sections 19, 21, 25 list counts match. Section 9 keeps "word-by-word or element-by-element" (શબ્દ-દર-શબ્દ અથવા તત્વ-દર-તત્વ) and "meaningful human act of adoption" (સ્વીકારની કોઈ અર્થપૂર્ણ માનવ ક્રિયા). Section 24 keeps "both questions" and "yes" (બંને પ્રશ્નો / હા). Section 26 keeps accept, publish, transmit, deploy or otherwise release and "that decision" (તે નિર્ણય).
- Accepted no-change items: Section 14 code blocks `Author: Eric Mourant +AI` and `This project uses +AI.` remain in English, matching the master's example-code treatment; the straight ASCII quotes in Sections 2 and 7 (where the English uses curly quotes) are a cosmetic typographic difference only.
- `interfaceCopy.translationNote` carries a Gujarati note where the English master is empty — normal for translations, not an error.
- Honest limitation: I cannot fully vouch for the lexical validity of the `જવાબદેહી` (accountability) vs `જવાબદારી` (responsibility) distinction, which prior rounds accepted as intentional and which is applied consistently (Sections 2, 8, 20, 21, and `end`). A native-speaker read of that word choice, plus Sections 3, 7 and 26, remains worthwhile.
