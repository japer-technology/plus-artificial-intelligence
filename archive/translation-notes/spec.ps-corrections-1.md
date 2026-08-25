# spec.ps.js — Round 1 correction suggestions

- **Language:** پښتو (ps)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A faithful and complete translation: the canonical slogan is identical everywhere, the five normative terms are used consistently, and the section 5.4 verb list is fully preserved. Only one title mistranslates its English heading.
- **Count:** 0 high / 1 medium / 6 low

## Corrections

### Section 19 — Open use
- **Location:** `sections[19].title`
- **Current:** `خپله کارونه`
- **English:** `Open use`
- **Issue:** "خپله کارونه" reads as "own/voluntary use", not "open use"; the body correctly says "د بې قید عامې کارونې لپاره" (unrestricted public use).
- **Suggested:** `خلاصه کارونه`
- **Severity:** MEDIUM

### "material/materially" rendered two ways
- **Location:** `interfaceCopy.description`, `heroLead`, `plainBody` (`د پام وړ`) vs section bodies (`جوهري`)
- **English:** `materially` / `material` — one term throughout the master.
- **Issue:** "د پام وړ" (notable) in the interface and "جوهري" (substantial) in the body are two renderings of the same load-bearing term.
- **Suggested:** Unify on `جوهري` in the interface strings too.
- **Severity:** LOW

### Section 2 — Design principle
- **Location:** `sections[2].title`
- **Current:** `د جوړښت بنسټ`
- **English:** `Design principle`
- **Issue:** "د جوړښت بنسټ" means "basis of the construction"; the heading is about the design principle of the notation.
- **Suggested:** `د ډیزاین اصل`
- **Severity:** LOW

### Section 2 — Design principle
- **Location:** `sections[2].body`, first paragraph
- **Current:** `<code>+AI</code> دا نه ټاکي چې یو اثر «د انسان جوړ کړی» دی که «د مصنوعي ځیرکتیا جوړ کړی».`
- **English:** `+AI does not attempt to determine whether an artifact is "human-created" or "AI-created."`
- **Issue:** "does not attempt to determine" is reduced to "does not determine", losing the deliberate-decision nuance.
- **Suggested:** `<code>+AI</code> هڅه نه کوي چې وټاکي چې یو اثر «د انسان جوړ کړی» دی که «د مصنوعي ځیرکتیا جوړ کړی».`
- **Severity:** LOW

### Section 6 — Material assistance
- **Location:** `sections[6].body`, third list item
- **Current:** `څېړنه`
- **English:** `analysis`
- **Issue:** "څېړنه" means "research/study"; the interface uses "تحلیل" for analysis (meaningOneBody).
- **Suggested:** `تحلیل`
- **Severity:** LOW

### Section 17 — Machine-readable representation
- **Location:** `sections[17].body`, closing paragraph
- **Current:** `…هماغه ماناییزه مانا وساتي…`
- **English:** `…SHOULD preserve the same semantic meaning…`
- **Issue:** "ماناییزه مانا" is awkward ("meaning-like meaning").
- **Suggested:** `…هماغه معنايي مانا وساتي…`
- **Severity:** LOW

### "canonical" vs "standard" conflated
- **Location:** section titles 4/23/26 and `markLabel` (`معياري`) vs section 2 (`معیار` for "standard")
- **English:** `canonical` and `standard` are two distinct concepts in the master.
- **Issue:** Both collapse to "معياري/معیار", which blurs the distinction the specification draws between the canonical mark and the standard itself.
- **Suggested:** Keep `معیار` for "standard" and consider `رسمي` or `قانوني` for "canonical" throughout.
- **Severity:** LOW

## Notes
- Canonical slogan `مصنوعي ځیرکتیا مرسته وکړه. زه مسؤليت منم.` is verbatim in documentTitle, heroTitle, sections 1/23/26 and the end panel — no action needed.
- Section 3 defines لازم دي / منع دي / ښه ده چې / ښه نه ده چې / اجازه ده with English parentheticals and uses exactly these forms later — no action needed.
- Section 5.4 preserves all five verbs plus "otherwise released" — better than several other languages.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
