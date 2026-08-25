# spec.ro.js — Round 1 correction suggestions

- **Language:** Română (ro)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A highly accurate, complete translation: the canonical slogan is verbatim everywhere, all five normative terms are consistent across all sections, and the section 5.4 verb list is complete. Only minor terminology points remain.
- **Count:** 0 high / 0 medium / 4 low

## Corrections

### interfaceCopy.description
- **Location:** `interfaceCopy.description`
- **Current:** `…o persoană sau organizație identificată acceptă responsabilitatea pentru aceasta.`
- **English:** `…a named person or organisation accepts responsibility for it.`
- **Issue:** "identificată" means "identified"; the English says "named", which the body renders as "numită" (sections 21, 22, 23, meaningThreeBody).
- **Suggested:** `…o persoană sau organizație numită acceptă responsabilitatea pentru aceasta.`
- **Severity:** LOW

### "responsibility" vs "accountability" rendering
- **Location:** section 7 title/body, sections 20 and 22 (`răspundere`) vs interfaceCopy (`responsabilitate` in description, meaningThreeTitle, plainQuote, footerLine)
- **English:** The master distinguishes responsibility from accountability.
- **Issue:** The body collapses "responsibility" (section 7) and "accountability" (sections 2, 8, 20, 21) into "răspundere", while the chrome renders "responsibility" as "responsabilitate" — the two layers of the same document disagree on the core term.
- **Suggested:** Keep `răspundere` for "accountability" and use `responsabilitate` for "responsibility" consistently, updating section 7 (title and body) accordingly.
- **Severity:** LOW

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…susține decizia de a-l utiliza.`
- **English:** `…stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Romanian "a-l" binds to "rezultatul" (the result).
- **Suggested:** `…susține decizia de a utiliza IA.`
- **Severity:** LOW

### Section 14 — Software (code examples translated)
- **Location:** `sections[14].body`, the two `<pre><code>` blocks
- **Current:** `Autor: Eric Mourant +AI` / `Acest proiect folosește +AI.`
- **English:** `Author: Eric Mourant +AI` / `This project uses +AI.` (literal examples kept in English by the master and by most other languages)
- **Issue:** The master presents these as literal usage examples; translating them diverges from the canonical examples.
- **Suggested:** Restore the English blocks: `Author: Eric Mourant +AI` and `This project uses +AI.`
- **Severity:** LOW

## Notes
- Canonical slogan `IA a ajutat. Îmi asum răspunderea.` is verbatim in documentTitle, heroTitle, sections 1/23/26 and the end panel — no action needed.
- Section 3 defines TREBUIE / NU TREBUIE / AR TREBUI / NU AR TREBUI / POATE with English parentheticals and uses only inflected forms of these in later sections — no action needed.
- Sections 5.1 and 5.4 preserve all seven and five verbs respectively.
- Section 22 correctly renders "authorship" as "paternitate".
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
