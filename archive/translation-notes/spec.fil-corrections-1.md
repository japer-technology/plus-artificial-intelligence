# spec.fil.js — Round 1 correction suggestions

- **Language:** Filipino (fil)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** The 26-section body is a faithful, complete translation with consistent normative terms and the full section 5.4 verb list; the interface chrome, however, still carries a batch of untranslated English words.
- **Count:** 0 high / 1 medium / 5 low

## Corrections

### interfaceCopy — untranslated English leftovers
- **Location:** `interfaceCopy.theme`, `themeDark`, `themeLight`, `highlight`, `followedLink`, `readSpec`, `specification`, `statusValue`, `markLabel`, `versionFooter`, `untranslatedNotice.headline`, `footerLine`
- **Current:** `Dark mode` / `Light mode` / `Highlight` / `Paglalarawan ng +AI post-nominal` / `Basahin ang specification` / `Specification` / `Draft` / `Canonical na marka` / `Specification v0.1` / `Ang specification sa ibaba ay nasa Ingles.` / `Bukas na notation.`
- **English:** Dark mode / Light mode / Highlight / +AI Post Nominal Description / Read the specification / Specification / Draft / Canonical mark / Specification v0.1 / The specification below is shown in English. / Open notation.
- **Issue:** These chrome strings are fully or partially in English while the section bodies translate the same terms ("espesipikasyon", "notasyon", "kanonikal"). The page is supposed to be fully translated.
- **Suggested:**
  - `theme`/`themeDark` → `Madilim na mode`; `themeLight` → `Maliwanag na mode`
  - `highlight` → `Kulay ng highlight` (or `Pag-highlight`)
  - `followedLink` → `Paglalarawan ng post-nominal na +AI`
  - `readSpec` → `Basahin ang espesipikasyon`
  - `specification` → `Espesipikasyon`; `versionFooter` → `Espesipikasyon v0.1`
  - `statusValue` → `Borador`
  - `markLabel` → `Kanonikal na marka` (already half-translated; keep)
  - `untranslatedNotice.headline` → `Ang espesipikasyon sa ibaba ay nasa Ingles.`
  - `footerLine` → `Bukas na notasyon. Pananagutang pantao.`
- **Severity:** MEDIUM

### end panel — version typo
- **Location:** `end`
- **Current:** `+AI Espesipikasyon b0.1`
- **English:** `+AI Specification v0.1`
- **Issue:** "b0.1" is a stray abbreviation; other strings write the version as "v0.1".
- **Suggested:** `+AI Espesipikasyon Bersyon 0.1`
- **Severity:** LOW

### "accountability" collapsed into "responsibility"
- **Location:** sections 2, 8, 20, 21, `end` and `interfaceCopy.meaningThreeBody`, `plainTitle`
- **Current:** `pananagutan` is used for both `accountability` and `responsibility`
- **English:** The master deliberately distinguishes accountability from responsibility.
- **Issue:** Both terms collapse to "pananagutan", blurring the distinction the specification keeps separate.
- **Suggested:** Use `kapanagutan` for "accountability" (sections 2, 8, 20, 21, `end`, `meaningThreeBody`, `plainTitle`) and keep `pananagutan` for "responsibility".
- **Severity:** LOW

### Section 14 — Software (title kept in English)
- **Location:** `sections[14].title`
- **Current:** `Software`
- **English:** `Software`
- **Issue:** "software" is an established loanword in Filipino; keeping it is acceptable — noted for the record, not an error.
- **Suggested:** Keep `Software` (acceptable loanword). No change required.
- **Severity:** LOW

### Section 19 — Open use
- **Location:** `sections[19].body`, closing paragraph
- **Current:** `…gumanap bilang pangkalahatang kasunduan.`
- **English:** `…function as a universal convention.`
- **Issue:** "kasunduan" means "agreement"; "convention" here is a customary standard.
- **Suggested:** `…gumanap bilang pangkalahatang kombensiyon.`
- **Severity:** LOW

## Notes
- Canonical slogan `Tumulong ang AI. Ako ang may pananagutan.` is verbatim in documentTitle, heroTitle, sections 1/23/26 and the end panel — no action needed.
- Section 3 defines KINAKAILANGAN / IPINAGBABAWAL / DAPAT / HINDI DAPAT / MAAARI with English parentheticals and uses exactly these forms in later sections — no action needed.
- Section 5.4 preserves all five verbs plus "otherwise released"; section 5.1 keeps all seven activity verbs.
- Section 22 correctly renders "authorship" as "pagka-may-akda".
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
