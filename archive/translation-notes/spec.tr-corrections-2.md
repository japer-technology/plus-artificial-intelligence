# spec.tr.js — Round 2 final correction recommendations

- **Language:** Türkçe (tr)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.tr-corrections-1.md` — all 11 findings re-verified against the current file and carried forward. Note: the round-1 `Count:` line (0 high / 1 medium / 6 low) does not match its own items, which are 1 medium / 10 low.
- **Verdict:** Faithful, complete translation with consistent normative terms; the slogan split remains the main fix. No new findings.
- **Count:** 0 high / 1 medium / 10 low

## Corrections

### Canonical slogan consistency (interfaceCopy vs sections)
- **Location:** `interfaceCopy.documentTitle` and `interfaceCopy.heroTitle` vs sections 1, 23, 26 and `end`
- **Current:** `Yapay zekâ yardımcı oldu. Sorumluluğu ben üstleniyorum.` (interface) vs `YZ yardım etti. Sorumluluğu ben alıyorum.` (body)
- **English:** `AI helped. I take responsibility.` — identical wording everywhere in the master.
- **Issue:** Two renderings of the canonical slogan in one document; the English text deliberately reuses the exact slogan.
- **Suggested:** Unify on `YZ yardım etti. Sorumluluğu ben alıyorum.` in documentTitle and heroTitle (or promote the interface wording into the body — but only one version).
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### "material/materially" rendered two ways
- **Location:** `interfaceCopy.description`, `heroLead`, `plainBody` (`önemli ölçüde`) vs section bodies (`esaslı ölçüde`)
- **English:** `materially` / `material` — one term throughout the master.
- **Issue:** Two renderings of the same load-bearing term.
- **Suggested:** Unify on `esaslı ölçüde` in the interface strings too.
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### "specification" rendered two ways
- **Location:** `interfaceCopy.specification`, `readSpec`, `versionFooter`, `untranslatedNotice` (`Şartname`) vs section bodies and `end` (`belirtim`)
- **English:** `specification` — one term throughout the master.
- **Issue:** Two different renderings of the same document in the interface and the body.
- **Suggested:** Unify on `belirtim` throughout (matching the bodies and `end`).
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.markLabel — "Canonical mark" conflated with "standard mark"
- **Location:** `interfaceCopy.markLabel`
- **Current:** `Standart işaret`
- **English:** `Canonical mark`
- **Issue:** The body consistently renders "canonical" as "kanonik"; "Standart" is a different concept the master keeps separate (section 2's "standard").
- **Suggested:** `Kanonik işaret`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 5.4 — dropped "submitted" from the release list
- **Location:** `sections[5].body`, h4 5.4 paragraph
- **Current:** `…yayımlanıp yayımlanmayacağı, iletilip iletilmeyeceği, dağıtılıp dağıtılmayacağı, sunulup sunulmayacağı veya başka bir biçimde ortaya konulup konulmayacağı…`
- **English:** `…whether the artifact would be published, transmitted, deployed, submitted, presented or otherwise released.`
- **Issue:** The English list has five verbs; the Turkish list has four, collapsing "submitted" and "presented" into "sunulma".
- **Suggested:** `…yayımlanıp yayımlanmayacağı, iletilip iletilmeyeceği, dağıtılıp dağıtılmayacağı, teslim edilip edilmeyeceği, sunulup sunulmayacağı veya başka bir biçimde ortaya konulup konulmayacağı…`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.plainTitle — "accountability" flattened to "responsibility"
- **Location:** `interfaceCopy.plainTitle`
- **Current:** `Şeffaf destek. Görünür sorumluluk.`
- **English:** `Transparent assistance. Visible accountability.`
- **Issue:** The body distinguishes accountability (`hesap verebilirlik`) from responsibility (`sorumluluk`); the chrome flattens accountability into "sorumluluk".
- **Suggested:** `Şeffaf destek. Görünür hesap verebilirlik.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.plainBody — pronoun binds to the result, not AI
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `…bu sonucu kullanma kararının arkasında durduğunu ifade eder.`
- **English:** `…stands behind the decision to use it.`
- **Issue:** English "it" refers to using **AI**; the Turkish binds the decision to "bu sonuç" (the result).
- **Suggested:** `…yapay zekâyı kullanma kararının arkasında durduğunu ifade eder.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 6 — "incidental" rendered "coincidental"
- **Location:** `sections[6].body`, "Incidental or purely mechanical AI functionality…"
- **Current:** `Tesadüfi veya tümüyle mekanik yapay zekâ işlevleri…`
- **English:** `Incidental or purely mechanical AI functionality…`
- **Issue:** "Tesadüfi" means "coincidental/by chance"; the legal-adjacent term for "incidental" is "arızi".
- **Suggested:** `Arızi veya tümüyle mekanik yapay zekâ işlevleri…`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 19 — "convention" rendered "consensus"
- **Location:** `sections[19].body`, closing paragraph
- **Current:** `…evrensel bir uzlaşı olarak işleyebilme yeteneğine bağlıdır.`
- **English:** `…its ability to function as a universal convention.`
- **Issue:** "uzlaşı" means "consensus"; "convention" here is a customary standard.
- **Suggested:** `…evrensel bir uzlaşım olarak işleyebilme yeteneğine bağlıdır.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 22 — MAY attached to the wrong element
- **Location:** `sections[22].body`, second and third paragraphs
- **Current:** `Bir yapıtın ağırlıklı olarak insan kaynaklı içerik barındırması ve buna karşın yine de kapsama girmesi İSTEĞE BAĞLIDIR.`
- **English:** `An artifact MAY contain predominantly human-originated material and still qualify.`
- **Issue:** Attaching the MAY-phrase to "kapsama girmesi" (qualifying) reads as if qualifying itself were optional; the English licenses the combination "contain X and still qualify".
- **Suggested:** `Bir yapıt, ağırlıklı olarak insan kaynaklı içerik barındırsa bile yine de kapsama girebilir.` (and the AI-originated twin likewise)
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 14 — code examples translated
- **Location:** `sections[14].body`, the two `<pre><code>` blocks
- **Current:** `Yazar: Eric Mourant +AI` / `Bu proje +AI kullanır.`
- **English:** `Author: Eric Mourant +AI` / `This project uses +AI.` (literal examples kept in English by the master and by most other languages)
- **Issue:** The master presents these as literal usage examples; translating them diverges from the canonical examples.
- **Suggested:** Restore the English blocks: `Author: Eric Mourant +AI` and `This project uses +AI.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

## Round 1 verification

- [x] Slogan split — still present, carried forward
- [x] önemli ölçüde vs esaslı ölçüde — still present, carried forward
- [x] Şartname vs belirtim — still present, carried forward
- [x] markLabel "Standart işaret" — still present, carried forward
- [x] Section 5.4 missing "teslim edilme" — still present, carried forward
- [x] plainTitle "Görünür sorumluluk" — still present, carried forward
- [x] plainBody "bu sonucu kullanma" — still present, carried forward
- [x] Section 6 "Tesadüfi" — still present, carried forward
- [x] Section 19 "uzlaşı" — still present, carried forward
- [x] Section 22 MAY placement — still present, carried forward
- [x] Section 14 translated code blocks — still present, carried forward
- [!] Round-1 `Count:` line (1 medium / 6 low) disagrees with its own items (1 medium / 10 low); the round-2 count above reflects the actual items

## Notes

- The body slogan `YZ yardım etti. Sorumluluğu ben alıyorum.` is verbatim in sections 1/23/26 and the end panel.
- Section 3 defines ZORUNLUDUR / YASAKTIR / ÖNERİLİR / ÖNERİLMEZ / İSTEĞE BAĞLIDIR with English parentheticals and uses exactly these forms in later sections.
- Section 5.1 preserves all seven activity verbs.
- Section 22 renders "authorship" as "eser sahipliği" — fine.
- Section 7 "substantially generated" (`önemli ölçüde … üretilmiş`) is an acceptable rendering of "substantially"; no drift.
- Section 4 "case-sensitive" is correctly rendered (`büyük-küçük harf duyarlıdır`).
- `meaningThreeBody` correctly renders "accountability" as `hesap verebilirliği`.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
