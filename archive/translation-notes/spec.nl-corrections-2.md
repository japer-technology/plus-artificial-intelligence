# spec.nl.js — Round 2 final correction recommendations

- **Language:** Nederlands (nl)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.nl-corrections-1.md` (0 high / 0 medium / 4 low) — all findings re-verified against the current file; 3 carried forward, 1 confirmed acceptable no-change
- **Verdict:** Accurate throughout with all five normative terms consistent and no meaning errors; one new low-severity consistency note added.
- **Count:** 0 high / 0 medium / 4 low

## Corrections

### "mark" rendered two different ways (chrome vs body)
- **Location:** `interfaceCopy.meansHeading`, `interfaceCopy.markLabel`, `interfaceCopy.plainLead`, `interfaceCopy.plainBody` vs the specification body
- **Current:** chrome: `Wat het teken zegt`, `Canoniek teken`, `Het teken is…`, `Het teken…`; body: `Het canonieke merkteken is…`, `Betekenis van het merkteken`, `Het merkteken…`
- **English:** `What the mark says`, `Canonical mark`, `The mark is…`, `The mark…`; body: `The canonical mark is…`, `Meaning of the mark`, `The mark…`
- **Issue:** The English term "mark" is one word throughout, but the translation uses `teken` in the interface chrome and `merkteken` in all 26 sections. Both are valid Dutch, but the split reads as two different concepts for the same object.
- **Suggested:** Pick one rendering and use it everywhere, e.g. `merkteken` (used in the body): `Wat het merkteken zegt`, `Canoniek merkteken`, `Het merkteken is…`.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### "accountability" rendered three different ways in chrome
- **Location:** `interfaceCopy.plainLead`, `interfaceCopy.plainTitle`, `interfaceCopy.meaningThreeBody` vs the body
- **Current:** plainLead `…een verantwoordelijkheidsverklaring…`; plainTitle `Zichtbare verantwoording.`; meaningThreeBody `…draagt de verantwoording niet over…`; body `verklaring van verantwoordingsplicht` (sect. 8), `verantwoordingsplicht` (sects. 2, 20, 21, `end`)
- **English:** `…an accountability declaration…`; `Visible accountability.`; `…does not transfer accountability…`; body `accountability declaration`, `accountability`
- **Issue:** The body translates the distinct term "accountability" consistently as `verantwoordingsplicht`, keeping it separate from `verantwoordelijkheid` ("responsibility"). In the chrome the same word is rendered `verantwoordelijkheid` (plainLead) and `verantwoording` (plainTitle/meaningThreeBody), blurring the responsibility/accountability distinction.
- **Suggested:** Use `verantwoordingsplicht` for "accountability" in the chrome too: plainLead `…een verklaring van verantwoordingsplicht…`; plainTitle `Zichtbare verantwoordingsplicht.`; meaningThreeBody `…draagt de verantwoordingsplicht niet over aan een AI-systeem of -aanbieder.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.plainBody — pronoun binds to the wrong noun
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `Het zegt dat AI het resultaat wezenlijk heeft beïnvloed en dat een identificeerbare persoon of organisatie achter de beslissing staat om het te gebruiken.`
- **English:** `It says AI materially influenced the result and an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** In English, "the decision to use it" refers to the decision to use **AI**. In the Dutch, `het` binds to the neuter noun "het resultaat" ("AI" is common gender, de AI), so it reads as "the decision to use the result".
- **Suggested:** `Het zegt dat AI het resultaat wezenlijk heeft beïnvloed en dat een identificeerbare persoon of organisatie achter de beslissing staat om AI te gebruiken.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 14 — code examples translated instead of kept as literal English (new in round 2)
- **Location:** `sections[14].body`, both `<pre><code>` blocks
- **Current:** `<pre><code>Auteur: Eric Mourant +AI</code></pre>` and `<pre><code>Dit project gebruikt +AI.</code></pre>`
- **English:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>`
- **Issue:** The master presents these as literal example strings (repository code); several sibling languages keep them byte-identical in English. Section 13 already localises the same labels as visible prose (`Auteur: …`), so the code examples can safely stay English. Either choice is defensible, but the project should pick one convention for all languages.
- **Suggested:** Restore `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>` (or consciously adopt the localised versions project-wide).
- **Severity:** LOW
- **Round 1:** new in round 2

## Round 1 verification

- [x] teken vs merkteken — still present, carried forward
- [x] accountability three-way split — still present, carried forward
- [x] plainBody "om het te gebruiken" — still present, carried forward
- [x] Section 14 title `Software` — still present; confirmed acceptable Dutch loanword, no change required (moved to Notes)

## Notes

- `sections[5]` heading `Knowledge` is rendered `Wetenschap`. This is the legal/formal Dutch sense of "knowledge (of a fact)" and fits the body text, but the ordinary `Kennis` may read more naturally to a general audience — native-speaker check.
- `interfaceCopy.heroLead` uses `wiens` to refer to "de persoon of organisatie"; strictly, `organisatie` is feminine (`wier`), though `wiens` is common colloquially. Cosmetic only.
- `interfaceCopy.highlight` ("Highlight") is rendered `Accent`; defensible for a colour control, but `Markering`/`Accentueren` may be closer to the source.
- All five normative terms use a single rendering (`MOET`/`MAG NIET`/`ZOU MOETEN`/`ZOU NIET MOETEN`/`MAG`) with English in parentheses at section 3 first definition; plural forms are grammatical, not drift.
- Section 7 correctly renders "substantially generated" as `in wezenlijke mate … voortgebracht` — no drift.
- Section 6 "incidental" (`bijkomstige`) and "not necessarily" (`niet noodzakelijk`) are correctly rendered.
- Section 4 "case-sensitive" is correctly rendered (`gevoelig voor onderscheid tussen hoofdletters en kleine letters`).
- Section 5.4 keeps all five verbs plus "otherwise released".
- Canonical slogan `AI heeft geholpen. Ik neem de verantwoordelijkheid.` is byte-identical across documentTitle, heroTitle, sections 1/23/26 and `end`.
- Section 17 JSON keys, `+AI`, example names, and `data-company-example`/`data-json-example` attributes are preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
