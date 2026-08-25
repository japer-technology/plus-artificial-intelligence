# spec.fil.js — Round 3 final correction recommendations

- **Language:** Filipino (fil)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.fil-corrections-2.md` (0 high / 1 medium / 5 low) — status of each item verified against the current file
- **Verdict:** The 26-section body and nearly all chrome are faithful and complete; the round-3 correction item has now been applied to spec.fil.js (`markLabel` now reads `Kanonikal na marka`).
- **Count:** 0 high / 0 medium / 1 low

## Corrections

### interfaceCopy — leftover English word "Canonical" in markLabel
- **Location:** `interfaceCopy.markLabel`
- **Current:** `Canonical na marka`
- **English:** `Canonical mark`
- **Issue:** The word "Canonical" remains untranslated English while every other occurrence of "canonical" in the file is rendered as "kanonikal" (section 1 "Ang kanonikal na pagpapahayag ay", section 4 "Kanonikal na notasyon" and "Ang kanonikal na marka ay", section 23 "Kanonikal na pampublikong paliwanag", section 26 "Kanonikal na deklarasyon"). This is the one sub-item of the round-2 chrome batch that was not fixed; all eleven other strings in that batch were translated. Single word, no meaning change, hence LOW.
- **Suggested:** `Kanonikal na marka`
- **Severity:** LOW
- **Round 2:** carried forward (still present)
- **Status:** applied to spec.fil.js

## Round 2 verification

- [x] Chrome English leftovers (MEDIUM) — mostly applied: `theme`/`themeDark` → `Madilim na mode`, `themeLight` → `Maliwanag na mode`, `highlight` → `Kulay ng highlight`, `followedLink` → `Paglalarawan ng post-nominal na +AI`, `readSpec` → `Basahin ang espesipikasyon`, `specification` → `Espesipikasyon`, `statusValue` → `Borador`, `versionFooter` → `Espesipikasyon v0.1`, `untranslatedNotice.headline` → `Ang espesipikasyon sa ibaba ay nasa Ingles.`, `footerLine` → `Bukas na notasyon. Pananagutang pantao.` all applied; only `markLabel` (`Canonical na marka`) is still present and carried forward as the sole correction above.
- [x] `end` panel "b0.1" — applied (now `+AI Espesipikasyon Bersyon 0.1`).
- [x] accountability/responsibility collapse — applied (`kapanagutan` now used for "accountability" in sections 2, 8, 20, 21, `end`, `meaningThreeBody`, `plainTitle`; `pananagutan` retained for "responsibility").
- [x] Section 19 "kasunduan" — applied (now `…gumanap bilang pangkalahatang kombensiyon.`).
- [x] Section 7 "substantially generated" — applied (now `…maglathala ng nilalamang may malaking impluwensiya mula sa AI.`).
- [x] Sections 14 and 26 "taong o" typo — applied (both now read `tao o organisasyong`).

## Notes

- Canonical slogan `Tumulong ang AI. Ako ang may pananagutan.` is byte-identical in `documentTitle` (after the "+AI — " prefix), `heroTitle`, section 1, section 23, section 26, and the `end` string; the `heroLead` `<strong>…</strong>` segment uses matching wording (`may mahalagang ambag … at tinatanggap nila ang pananagutan sa pagpapalabas nito`).
- Section 3 defines the five normative terms with the English term retained in parentheses — `KINAKAILANGAN (MUST)`, `IPINAGBABAWAL (MUST NOT)`, `DAPAT (SHOULD)`, `HINDI DAPAT (SHOULD NOT)`, `MAAARI (MAY)` — and the header comment's mapping table matches actual usage across all 26 sections.
- Section 5.4 preserves all five release verbs (`ilalathala, ipapadala, ipapatupad, isusumite, ilalahad … o kung hindi man ay ipapalabas`) plus "otherwise released"; section 5.1 keeps all seven activity verbs; section 26 keeps `tanggapin, ilathala, ipadala, ipatupad o kung hindi man ay ipalabas` and "that decision" (`pasyang iyon`).
- Sections 6 and 8 each contain all 17 list items, matched one-to-one to the English lists.
- Section 24 renders "yes" as `oo` and "both" as `dalawang` correctly (`oo` in both questions and `Kung oo ang dalawang sagot`).
- Section 17 JSON keys and values are byte-identical to English; `data-company-example` and `data-json-example` attributes, example names `Eric Mourant` and `JAPER Technology`, section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`), section numbering 1–26, and h4 labels 5.1–5.6 are all preserved.
- Accepted additions/no-change: the non-empty `translationNote` is a legitimate translator note consistent with the "English is normative" rule; section 14 `<pre><code>` examples (`Author: Eric Mourant +AI` and `This project uses +AI.`) are left as literal English code/plain-text examples, which is correct; section 14 title `Software` remains an acceptable loanword; the `<Responsible Party>` placeholder is rendered `Partidong May Pananagutan` consistently in sections 1 and 4.
- Minor observations (not corrections): `themeDarkAria`/`themeLightAria` keep the loanwords `dark mode`/`light mode` while `theme`/`themeDark`/`themeLight` translate them (`Madilim na mode`/`Maliwanag na mode`) — cosmetic only; `highlightAria` keeps the loanword `random`; section 5.6's `iprisinta` is a Taglish borrowing for "represent/present" (already noted in round 2); "materially" is rendered with several synonyms (`mahalagang`, `substansyal`, `malaki`), which mirrors the English master's own materially/substantially variation; the header comment line 3 still says "pending native-speaker review" while `status` is `"reviewed"` — a stale comment, cosmetic.
- **Filipino-knowledge limitation:** I am not a native Filipino speaker. My confidence in the word-level glosses (especially `KINAKAILANGAN`/`IPINAGBABAWAL` for the normative terms, the loanword vs. translation choices, and section 24's `kailangang makasagot` rendering of the non-normative "should be able to answer") is limited. Per TRANSLATIONS.md, a native-speaker read of sections 3, 7, and 26 is still warranted before treating this as final.
