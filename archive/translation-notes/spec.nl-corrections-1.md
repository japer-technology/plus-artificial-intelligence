# spec.nl.js — Round 1 correction suggestions

- **Language:** Nederlands (nl)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** The Dutch translation is accurate throughout, with all five normative terms used consistently and no meaning errors; the remaining points are low-severity terminology-consistency and wording issues.
- **Count:** 0 high / 0 medium / 4 low

## Corrections

### interfaceCopy — "mark" rendered two different ways
- **Location:** `interfaceCopy.meansHeading`, `interfaceCopy.markLabel`, `interfaceCopy.plainLead`, `interfaceCopy.plainBody` vs the specification body
- **Current:** chrome: `Wat het teken zegt`, `Canoniek teken`, `Het teken is…`, `Het teken…`; body: `Het canonieke merkteken is…`, `Betekenis van het merkteken`, `Het merkteken…`
- **English:** `What the mark says`, `Canonical mark`, `The mark is…`, `The mark…`; body: `The canonical mark is…`, `Meaning of the mark`, `The mark…`
- **Issue:** The English term "mark" is one word throughout, but the translation uses `teken` in the interface chrome and `merkteken` in all 26 sections. Both are valid Dutch, but the split reads as two different concepts for the same object and violates the one-term-one-rendering rule applied elsewhere.
- **Suggested:** Pick one rendering and use it everywhere, e.g. `merkteken` (used in the body): `Wat het merkteken zegt`, `Canoniek merkteken`, `Het merkteken is…`.
- **Severity:** LOW

### interfaceCopy — "accountability" rendered three different ways
- **Location:** `interfaceCopy.plainLead`, `interfaceCopy.plainTitle`, `interfaceCopy.meaningThreeBody` vs the body
- **Current:** plainLead `…een verantwoordelijkheidsverklaring…`; plainTitle `Zichtbare verantwoording.`; meaningThreeBody `…draagt de verantwoording niet over…`; body `verklaring van verantwoordingsplicht` (sect. 8), `verantwoordingsplicht` (sects. 2, 20, 21, `end`)
- **English:** `…an accountability declaration…`; `Visible accountability.`; `…does not transfer accountability…`; body `accountability declaration`, `accountability`
- **Issue:** The body translates the distinct term "accountability" consistently as `verantwoordingsplicht`, keeping it separate from `verantwoordelijkheid` ("responsibility"). In the chrome the same word is rendered `verantwoordelijkheid` (plainLead) and `verantwoording` (plainTitle/meaningThreeBody), blurring the responsibility/accountability distinction the spec deliberately maintains.
- **Suggested:** Use `verantwoordingsplicht` for "accountability" in the chrome too: plainLead `…een verklaring van verantwoordingsplicht…`; plainTitle `Zichtbare verantwoordingsplicht.`; meaningThreeBody `…draagt de verantwoordingsplicht niet over aan een AI-systeem of -aanbieder.`
- **Severity:** LOW

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `Het zegt dat AI het resultaat wezenlijk heeft beïnvloed en dat een identificeerbare persoon of organisatie achter de beslissing staat om het te gebruiken.`
- **English:** `It says AI materially influenced the result and an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** In English, "the decision to use it" refers to the decision to use **AI**. In the Dutch, `het` binds to the neuter noun "het resultaat" ("AI" is common gender, de AI), so it reads as "the decision to use the result" — a subtle shift in what the person stands behind.
- **Suggested:** `Het zegt dat AI het resultaat wezenlijk heeft beïnvloed en dat een identificeerbare persoon of organisatie achter de beslissing staat om AI te gebruiken.`
- **Severity:** LOW

### Section 14 — Software (title kept in English)
- **Location:** `sections[14].title`
- **Current:** `Software`
- **English:** `Software`
- **Issue:** Baseline flags this title as identical to English. "Software" is an established loanword in Dutch and the natural term here; leaving it untranslated is acceptable, so this is noted only for the record, not as an error.
- **Suggested:** Keep `Software` (acceptable loanword). No change required.
- **Severity:** LOW

## Notes
- `sections[5]` heading `Knowledge` is rendered `Wetenschap`. This is the legal/formal Dutch sense of "knowledge (of a fact)" and fits the body text (`weet of neemt redelijkerwijs aan`), but the ordinary `Kennis` may read more naturally to a general audience — worth a native-speaker check.
- `interfaceCopy.heroLead` uses `wiens` to refer to "de persoon of organisatie"; strictly, `organisatie` is feminine (`wier`), though `wiens` is common colloquially. Cosmetic only.
- `interfaceCopy.highlight` ("Highlight") is rendered `Accent`; defensible for a colour control, but `Markering`/`Accentueren` may be closer to the source.
- All five normative terms use a single rendering (`MOET`/`MAG NIET`/`ZOU MOETEN`/`ZOU NIET MOETEN`/`MAG`) with English in parentheses at section 3 first definition; split/plural forms (`ZOUDEN … MOETEN`, `MOGEN`) are grammatical, not drift.
- Section 17 JSON keys, `+AI`, example names, and `data-company-example`/`data-json-example` attributes are preserved byte-identical.
