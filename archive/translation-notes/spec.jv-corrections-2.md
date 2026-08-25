# spec.jv.js — Round 2 final correction recommendations

- **Language:** Basa Jawa (jv)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.jv-corrections-1.md` (0 high / 0 medium / 5 low) — all 5 findings re-verified against the current file and carried forward
- **Verdict:** Essentially accurate with consistent normative terms; all round-1 items remain, and one new low-severity wording point was found.
- **Count:** 0 high / 0 medium / 6 low

## Corrections

### "artificial intelligence" terminology split (chrome vs body)
- **Location:** `interfaceCopy.description`, `interfaceCopy.heroLead` vs. all 26 `sections[].body`
- **Current:** `… kacerdasan gawéan …` (chrome) vs. `… kapinteran artifisial …` (body)
- **English:** `… artificial intelligence …`
- **Issue:** Terminology inconsistency. "Artificial intelligence" is rendered `kacerdasan gawéan` in the chrome but `kapinteran artifisial` throughout the normative body. One rendering should be used everywhere.
- **Suggested:** Pick one — recommend `kapinteran artifisial` (already used in the body) — and update the two `interfaceCopy` strings to match.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### "accountability" collapsed into "responsibility" in chrome
- **Location:** `interfaceCopy.meaningThreeBody`, `interfaceCopy.plainTitle`, `interfaceCopy.plainLead` vs. `sections[2].body`, `sections[8].body`, `sections[20].body`, `sections[21].body`, `end`
- **Current:** `… boten mindhahaken tanggel jawab …` / `Tanggel jawab ingkang katingal.` / `… deklarasi tanggel jawab …` (chrome) vs. `… akuntabilitas manungsa …` (body/end)
- **English:** `… does not transfer accountability …` / `Visible accountability.` / `… accountability declaration …` / `Human-AI Provenance and Accountability`
- **Issue:** Terminology inconsistency, and a distinction is lost. The body renders "accountability" as `akuntabilitas`, keeping it separate from `tanggel jawab` ("responsibility", Section 7). The chrome renders "accountability" as `tanggel jawab`, collapsing the responsibility/accountability distinction the spec deliberately draws.
- **Suggested:** Align on `akuntabilitas` in the chrome, e.g. `… boten mindhahaken akuntabilitas dhateng sistem utawi panyedhiya AI.`, `Akuntabilitas ingkang katingal.`, `… deklarasi akuntabilitas …`.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### "materially" rendered two ways (chrome vs body)
- **Location:** `interfaceCopy.description`, `interfaceCopy.heroLead`, `interfaceCopy.meaningOneBody`, `interfaceCopy.plainBody` vs. all `sections[].body`
- **Current:** `… mbiyantu kanthi nyata …` / `… mangaruhi asilipun kanthi nyata …` (chrome) vs. `… dipunbiyantu kanthi wigati …` (body)
- **English:** `… materially assisted …` / `… materially influenced …`
- **Issue:** Terminology inconsistency. "Materially" is rendered `kanthi nyata` ("really/tangibly") in the chrome but `kanthi wigati` ("significantly") in the body.
- **Suggested:** Use one rendering — `kanthi wigati` (or `kanthi substansial`) — consistently in the chrome and body.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 16 — "employer" rendered "renter of work"
- **Location:** `sections[16].body`, the disclosure list
- **Current:** `… panerbit, regulator, panyewa kerja, badan profèsi, utawi angger-angger.`
- **English:** `… a publisher, regulator, employer, professional body or law.`
- **Issue:** `panyewa kerja` reads as "renter/lessee of work" and is not the standard Javanese/Indonesian term for "employer"; it is likely to confuse readers about which party is meant.
- **Suggested:** Use `majikan` (or `pihak ingkang maringi pedamelan`), e.g. `… panerbit, regulator, majikan, badan profèsi, utawi angger-angger.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 14 — code-example strings left in English
- **Location:** `sections[14].body`, the two `<pre><code>` examples
- **Current:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>`
- **English:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>`
- **Issue:** Left in English while the analogous prose examples were translated (`Atur taklim kula` in Section 12, `Panyerat:` / `Dipunsusun déning:` / `Dipunwedalaken déning:` in Section 13, `Dipundamel déning` in Section 15). The `+AI` mark and names stay byte-identical.
- **Suggested:** Either translate (`Panyerat: Eric Mourant +AI`, `Proyèk menika ngginakaken +AI.`) for consistency, or consciously keep them as literal ASCII examples; a native speaker should decide.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 7 — "substantially generated" rendered "the majority part" (new in round 2)
- **Location:** `sections[7].body`, "MAY publish content substantially generated by AI"
- **Current:** `Pihak ingkang tanggel jawab KENGING ngundhangaken wosing ingkang perangan agengipun dipunasilaken AI.`
- **English:** `The responsible party MAY publish content substantially generated by AI.`
- **Issue:** "perangan agengipun" means "the majority part", drifting toward the "predominantly" concept section 22 renders separately. "Substantially" here means "to a significant extent".
- **Suggested:** `Pihak ingkang tanggel jawab KENGING ngundhangaken wosing ingkang dipunasilaken AI kanthi wigati.`
- **Severity:** LOW
- **Round 1:** new in round 2

## Round 1 verification

- [x] kacerdasan gawéan vs kapinteran artifisial — still present, carried forward
- [x] tanggel jawab vs akuntabilitas (chrome) — still present, carried forward
- [x] kanthi nyata vs kanthi wigati — still present, carried forward
- [x] Section 16 "panyewa kerja" — still present, carried forward
- [x] Section 14 English code blocks — still present, carried forward

## Notes

- The five normative terms are used consistently throughout: MUST → `KEDAH`, MUST NOT → `ORA KENGING`, SHOULD → `PRAYOGA`, SHOULD NOT → `ORA PRAYOGA`, MAY → `KENGING`, with English in parentheses at first definition in Section 3.
- Negation direction is correct everywhere, notably Section 21 (`ORA PRAYOGA migunakaken`) and Section 8 (`BOTEN negesaken`).
- `interfaceCopy.meaningTwoBody` renders "knowingly" as `kanthi sengaja` ("deliberately") while the body uses `kanthi sadhar` ("consciously"); both defensible, but aligning would be cleaner.
- "Deploy" is handled well (`kagelaraken` in 5.4, `nggelaraken` in 26).
- Section 4 "case-sensitive" is correctly rendered (`mbédakaken aksara ageng lan alit`).
- The canonical slogan "AI mbiyantu. Kula ingkang tanggel jawab." is used verbatim in documentTitle/heroTitle, Sections 1, 23, 26 and the closing panel.
- `+AI`, Section 17 JSON keys, `data-company-example` / `data-json-example` attributes, and the example names are all preserved correctly.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
