# spec.tr.js — Round 1 correction suggestions

- **Language:** Türkçe (tr)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A faithful, complete translation with consistent normative terms and full section 5.1 verb list; the main issue is that the interface slogan diverges from the canonical body slogan, plus several terminology splits between chrome and body.
- **Count:** 0 high / 1 medium / 6 low

## Corrections

### Canonical slogan consistency (interfaceCopy vs sections)
- **Location:** `interfaceCopy.documentTitle` and `interfaceCopy.heroTitle` vs sections 1, 23, 26 and `end`
- **Current:** `Yapay zekâ yardımcı oldu. Sorumluluğu ben üstleniyorum.` (interface) vs `YZ yardım etti. Sorumluluğu ben alıyorum.` (body)
- **English:** `AI helped. I take responsibility.` — identical wording everywhere in the master.
- **Issue:** Two renderings of the canonical slogan in one document; the English text deliberately reuses the exact slogan.
- **Suggested:** Unify on `YZ yardım etti. Sorumluluğu ben alıyorum.` in documentTitle and heroTitle (or promote the interface wording into the body — but only one version).
- **Severity:** MEDIUM

### "material/materially" rendered two ways
- **Location:** `interfaceCopy.description`, `heroLead`, `plainBody` (`önemli ölçüde`) vs section bodies (`esaslı ölçüde`)
- **English:** `materially` / `material` — one term throughout the master.
- **Issue:** Two renderings of the same load-bearing term.
- **Suggested:** Unify on `esaslı ölçüde` in the interface strings too.
- **Severity:** LOW

### "specification" rendered two ways
- **Location:** `interfaceCopy.specification`, `readSpec`, `versionFooter`, `untranslatedNotice` (`Şartname`) vs section bodies and `end` (`belirtim`)
- **English:** `specification` — one term throughout the master.
- **Issue:** Two different renderings of the same document in the interface and the body.
- **Suggested:** Unify on `belirtim` throughout (matching the bodies and `end`).
- **Severity:** LOW

### interfaceCopy.markLabel
- **Location:** `interfaceCopy.markLabel`
- **Current:** `Standart işaret`
- **English:** `Canonical mark`
- **Issue:** The body consistently renders "canonical" as "kanonik"; "Standart" is a different concept the master keeps separate (section 2's "standard").
- **Suggested:** `Kanonik işaret`
- **Severity:** LOW

### Section 5 — Meaning of the mark
- **Location:** `sections[5].body`, h4 5.4 paragraph
- **Current:** `…yayımlanıp yayımlanmayacağı, iletilip iletilmeyeceği, dağıtılıp dağıtılmayacağı, sunulup sunulmayacağı veya başka bir biçimde ortaya konulup konulmayacağı…`
- **English:** `…whether the artifact would be published, transmitted, deployed, submitted, presented or otherwise released.`
- **Issue:** The English list has five verbs; the Turkish list has four, collapsing "submitted" and "presented" into "sunulma".
- **Suggested:** `…yayımlanıp yayımlanmayacağı, iletilip iletilmeyeceği, dağıtılıp dağıtılmayacağı, teslim edilip edilmeyeceği, sunulup sunulmayacağı veya başka bir biçimde ortaya konulup konulmayacağı…`
- **Severity:** LOW

### interfaceCopy.plainTitle
- **Location:** `interfaceCopy.plainTitle`
- **Current:** `Şeffaf destek. Görünür sorumluluk.`
- **English:** `Transparent assistance. Visible accountability.`
- **Issue:** The body distinguishes accountability (`hesap verebilirlik`) from responsibility (`sorumluluk`); the chrome flattens accountability into "sorumluluk".
- **Suggested:** `Şeffaf destek. Görünür hesap verebilirlik.`
- **Severity:** LOW

### interfaceCopy.plainBody
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…bu sonucu kullanma kararının arkasında durduğunu ifade eder.`
- **English:** `…stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Turkish binds the decision to "bu sonuç" (the result).
- **Suggested:** `…yapay zekâyı kullanma kararının arkasında durduğunu ifade eder.`
- **Severity:** LOW

### Section 6 — Material assistance
- **Location:** `sections[6].body`, "Incidental or purely mechanical AI functionality…"
- **Current:** `Tesadüfi veya tümüyle mekanik yapay zekâ işlevleri…`
- **English:** `Incidental or purely mechanical AI functionality…`
- **Issue:** "Tesadüfi" means "coincidental/by chance"; the legal-adjacent term for "incidental" is "arızi".
- **Suggested:** `Arızi veya tümüyle mekanik yapay zekâ işlevleri…`
- **Severity:** LOW

### Section 19 — Open use
- **Location:** `sections[19].body`, closing paragraph
- **Current:** `…evrensel bir uzlaşı olarak işleyebilme yeteneğine bağlıdır.`
- **English:** `…its ability to function as a universal convention.`
- **Issue:** "uzlaşı" means "consensus"; "convention" here is a customary standard.
- **Suggested:** `…evrensel bir uzlaşım olarak işleyebilme yeteneğine bağlıdır.`
- **Severity:** LOW

### Section 22 — Relationship to authorship
- **Location:** `sections[22].body`, second and third paragraphs
- **Current:** `Bir yapıtın ağırlıklı olarak insan kaynaklı içerik barındırması ve buna karşın yine de kapsama girmesi İSTEĞE BAĞLIDIR.`
- **English:** `An artifact MAY contain predominantly human-originated material and still qualify.`
- **Issue:** Attaching the MAY-phrase to "kapsama girmesi" (qualifying) reads as if qualifying itself were optional; the English licenses the combination "contain X and still qualify".
- **Suggested:** `Bir yapıt, ağırlıklı olarak insan kaynaklı içerik barındırsa bile yine de kapsama girebilir.` (and the AI-originated twin likewise)
- **Severity:** LOW

### Section 14 — Software (code examples translated)
- **Location:** `sections[14].body`, the two `<pre><code>` blocks
- **Current:** `Yazar: Eric Mourant +AI` / `Bu proje +AI kullanır.`
- **English:** `Author: Eric Mourant +AI` / `This project uses +AI.` (literal examples kept in English by the master and by most other languages)
- **Issue:** The master presents these as literal usage examples; translating them diverges from the canonical examples.
- **Suggested:** Restore the English blocks: `Author: Eric Mourant +AI` and `This project uses +AI.`
- **Severity:** LOW

## Notes
- The body slogan `YZ yardım etti. Sorumluluğu ben alıyorum.` is verbatim in sections 1/23/26 and the end panel — no action needed there.
- Section 3 defines ZORUNLUDUR / YASAKTIR / ÖNERİLİR / ÖNERİLMEZ / İSTEĞE BAĞLIDIR with English parentheticals and uses exactly these forms in later sections — no action needed.
- Section 5.1 preserves all seven activity verbs.
- Section 22 correctly renders "authorship" as "eser sahipliği".
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
