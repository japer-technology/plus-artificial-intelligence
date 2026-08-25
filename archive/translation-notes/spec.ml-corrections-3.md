# spec.ml.js — Round 3 final correction recommendations

- **Language:** മലയാളം (ml)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.ml-corrections-2.md` (1 high / 3 medium / 7 low) — status of each item verified against the current file; all 11 items applied
- **Verdict:** The round-2 HIGH and MEDIUM findings are all fixed; the translation is normatively sound and all three round-3 items (MAY drift, "released"/"published", "characters"/"letters") have now been applied to the file.
- **Count:** 0 high / 0 medium / 3 low

## Corrections

### MAY rendered with potential-mood "-ാം" instead of the declared term `അനുവദനീയം`
- **Location:** `sections[4].body` (final sentence), `sections[15].body` (opening sentence), `sections[22].body` (two "An artifact MAY contain" sentences)
- **Current:** S4: `ഈ സ്പെസിഫിക്കേഷന്റെ വിപുലീകരണങ്ങളാൽ വകഭേദങ്ങൾ പിന്നീട് നിർവചിക്കപ്പെടാം, …`; S15: `ചിത്രങ്ങൾ, ഓഡിയോ, വീഡിയോ, രൂപകൽപ്പനകൾ, ചിത്രീകരണങ്ങൾ, അവതരണങ്ങൾ, മറ്റ് സർഗ്ഗാത്മക പ്രവൃത്തികൾ എന്നിവയോടൊപ്പം സൂചകം ഉണ്ടാകാം.`; S22: `ഒരു സൃഷ്ടിയിൽ പ്രധാനമായും മനുഷ്യ-ഉത്ഭവ ഉള്ളടക്കം അടങ്ങിയിരിക്കാം, എന്നിട്ടും അത് യോഗ്യമാകാം.` / `ഒരു സൃഷ്ടിയിൽ പ്രധാനമായും കൃത്രിമബുദ്ധി-ഉത്ഭവ ഉള്ളടക്കം അടങ്ങിയിരിക്കാം, എന്നിട്ടും അത് യോഗ്യമാകാം.`
- **English:** S4: `Variants MAY later be defined by extensions to this specification, …`; S15: `The notation MAY accompany images, audio, video, designs, illustrations, presentations and other creative works.`; S22: `An artifact MAY contain predominantly human-originated material and still qualify.` / `An artifact MAY contain predominantly AI-originated material and still qualify.`
- **Issue:** Section 3 defines MAY as `അനുവദനീയം (MAY)`, and the file header's mapping table states `MAY → അനുവദനീയം`. In these four spots the normative MAY is rendered with the potential-mood suffix "-ാം" (`നിർവചിക്കപ്പെടാം`, `ഉണ്ടാകാം`, `അടങ്ങിയിരിക്കാം`, `യോഗ്യമാകാം`) rather than the declared term. Meaning is preserved (optionality is still conveyed), so this is consistency drift, not a meaning error. (Round 2 noted the Section 15 case in its Notes; Sections 4 and 22 are newly observed.)
- **Suggested:** Replace with the declared term, e.g. S4: `… വകഭേദങ്ങൾ പിന്നീട് നിർവചിക്കുന്നത് അനുവദനീയം, …`; S15: `… എന്നിവയോടൊപ്പം സൂചകം ഉണ്ടാകുന്നത് അനുവദനീയം.`; S22: `ഒരു സൃഷ്ടിയിൽ പ്രധാനമായും മനുഷ്യ-ഉത്ഭവ ഉള്ളടക്കം അടങ്ങിയിരിക്കുന്നത് അനുവദനീയം, എന്നിട്ടും അത് യോഗ്യമാകാം.` (and the AI-originated parallel). A native speaker should confirm the smoothest `അനുവദനീയം` phrasing per sentence.
- **Severity:** LOW
- **Round 2:** new in round 3 (Section 15 was a round-2 note, now promoted)
- **Status:** applied to spec.ml.js (S4, S15, both S22 sentences now use `അനുവദനീയം` per the suggested forms)

### `meaningTwoBody` renders "released" as "published"
- **Location:** `interfaceCopy.meaningTwoBody`
- **Current:** `ഒരു വ്യക്തിയോ സ്ഥാപനമോ ഫലം അറിഞ്ഞുകൊണ്ട് സ്വീകരിക്കുകയും പ്രസിദ്ധീകരിക്കുകയും ചെയ്തു.`
- **English:** `A person or organisation knowingly adopted and released the result.`
- **Issue:** "released" is rendered `പ്രസിദ്ധീകരിക്കുകയും` ("published"), which is narrower than the master's "released". Everywhere else the translation renders "release" as `പുറത്തുവിടുക` (e.g. Section 7, Section 26). Minor internal inconsistency; meaning is only slightly narrowed.
- **Suggested:** `ഒരു വ്യക്തിയോ സ്ഥാപനമോ ഫലം അറിഞ്ഞുകൊണ്ട് സ്വീകരിക്കുകയും പുറത്തുവിടുകയും ചെയ്തു.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ml.js

### `plainQuote` renders "characters" as "letters"
- **Location:** `interfaceCopy.plainQuote`
- **Current:** `മൂന്ന് അക്ഷരങ്ങൾ പങ്കാളിത്തവും ഉത്തരവാദിത്തവും രണ്ടും ദൃശ്യമാക്കുന്നു.`
- **English:** `Three characters make both participation and responsibility visible.`
- **Issue:** "characters" is rendered `അക്ഷരങ്ങൾ` ("letters"). The mark `+AI` is a plus sign plus two letters, so "characters" is the precise term; `അക്ഷരങ്ങൾ` mislabels the `+` sign. Cosmetic only; meaning of the sentence (three glyphs make both visible) is intact.
- **Suggested:** `മൂന്ന് പ്രതീകങ്ങൾ പങ്കാളിത്തവും ഉത്തരവാദിത്തവും രണ്ടും ദൃശ്യമാക്കുന്നു.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ml.js

## Round 2 verification

- [x] Section 21 inverted negation (HIGH) — applied: now `ഉപയോഗിക്കുന്നത് ഒഴിവാക്കേണ്ടതാണ്` ("using it should be avoided"), matching the master's SHOULD NOT direction.
- [x] Section 4 "കരുതരുത്" (MEDIUM) — applied: now `കണക്കാക്കുന്നത് നിരോധിതമാണ്`.
- [x] Section 12 "മാറ്റരുത്" (MEDIUM) — applied: now `മാറ്റുന്നത് നിരോധിതമാണ്`.
- [x] Section 16 "പ്രതിനിധീകരിക്കരുത്" (MEDIUM) — applied: now `പ്രതിനിധീകരിക്കുന്നത് നിരോധിതമാണ്`.
- [x] Section 19 SHOULD NOT (LOW) — applied: now `ആവശ്യമാകുന്നത് ഒഴിവാക്കേണ്ടതാണ്`.
- [x] Section 2 "വിശിഷ്ട" (LOW) — applied: now `മാത്രമായ കർത്തൃത്വത്തെക്കാൾ`.
- [x] footerLine "സൂചന" (LOW) — applied: now `തുറന്ന സൂചകം`.
- [x] Section 12 "Kindest regards" (LOW) — applied: now `ആദരവോടെ,`.
- [x] Sections 13 & 15 role labels (LOW) — applied: now `രചയിതാവ്:`, `തയ്യാറാക്കിയത്:`, `പുറത്തിറക്കിയത്:`, `സൃഷ്ടിച്ചത്:`.
- [x] Section 6 "incidental" (LOW) — applied: now `ആനുഷംഗികമോ … അനിവാര്യമായും ആവശ്യമില്ല`.
- [x] Section 3 "legitimate reason" (LOW) — applied: now `ന്യായമായ കാരണമുള്ളപ്പോൾ`.

## Notes

- The load-bearing invariants are all intact and byte-identical to English: `+AI` everywhere (never spaced/re-cased); Section 4 counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`; Section 17 JSON keys and values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); example names `Eric Mourant` and `JAPER Technology`; `data-company-example` / `data-json-example` attributes (on the same paragraphs as English); Section numbering 1–26 in order; h4 labels 5.1–5.6.
- The canonical slogan `AI സഹായിച്ചു. ഉത്തരവാദിത്തം ഞാൻ ഏൽക്കുന്നു.` is byte-identical in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, Section 1, Section 23, Section 26, and `end`. The `heroLead` `<strong>` uses matching wording (`ജോലിക്ക് ഗണ്യമായി സഹായിച്ചു`).
- Section 3 keeps the English normative terms in parentheses and the five definitions match (absolute requirement / absolute prohibition / strong recommendation / normally avoided / optional).
- Section 5 keeps all verbs: 5.4 retains published/transmitted/deployed/submitted/presented/otherwise-released (`പ്രസിദ്ധീകരിക്കണമോ, കൈമാറണമോ, വിന്യസിക്കണമോ, സമർപ്പിക്കണമോ, അവതരിപ്പിക്കണമോ … പുറത്തുവിടണമോ`); 5.6 keeps "decision to release, use or represent" (`പുറത്തുവിടാനോ ഉപയോഗിക്കാനോ പ്രതിനിധീകരിക്കാനോ ഉള്ള തീരുമാനം`).
- List-item counts verified against the actual master: Section 6 has 17 `<li>` (all present) and Section 8 has 17 `<li>` (all present). (Note: the round-3 prompt stated "Section 6: 21 list items"; the master contains 17, which the translation matches exactly.)
- Section 9 keeps "word-by-word or element-by-element" (`വാക്കുതോറും അല്ലെങ്കിൽ ഘടകംതോറും`) and "meaningful human act of adoption" (`അർത്ഥപൂർണ്ണമായ മനുഷ്യ സ്വീകരണം`).
- Section 24 keeps "both questions" (`രണ്ട് ചോദ്യങ്ങൾക്കും`), "yes" (`അതെ`), and "If both answers are yes" (`രണ്ട് ഉത്തരങ്ങളും അതെ ആണെങ്കിൽ`).
- Section 26's declaration keeps accept, publish, transmit, deploy or otherwise release (`സ്വീകരിക്കാനോ പ്രസിദ്ധീകരിക്കാനോ കൈമാറാനോ വിന്യസിക്കാനോ … പുറത്തുവിടാനോ`) and "that decision" (`ആ തീരുമാനത്തിനും`).
- `status: "reviewed"` and the `endonym` `മലയാളം` are correct; `untranslatedNotice` is fully translated; `colourChanged` retains the `{colour}` placeholder; no unescaped backticks or `${` appear inside the template literals; no leftover untranslated English prose remains (the only English retained is the load-bearing names, marks, and the Section 14 `<pre><code>` examples `Author: Eric Mourant +AI` and `This project uses +AI.`, which are intentionally kept).
- The file header comment's mapping table now matches actual usage for MUST / MUST NOT / SHOULD / SHOULD NOT, and matches MAY everywhere except the four LOW spots flagged above.
- Accepted no-change item: `interfaceCopy.followedLink` transliterates "Post Nominal" as `പോസ്റ്റ്-നോമിനൽ`, which remains opaque to a Malayalam-only reader; flagged for a native speaker but not corrected (no clear lossless alternative).
- My Malayalam knowledge is limited; I verified structural/terminological fidelity and the specific checks listed, but did not attempt a fine literary-quality assessment. A native-speaker read of Sections 3, 7, and 26 remains advisable before treating this as final.
