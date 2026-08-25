# spec.tr.js — Round 3 final correction recommendations

- **Language:** Türkçe (tr)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.tr-corrections-2.md` (0 high / 1 medium / 10 low) — all 11 items re-verified against the current file: every item has been applied
- **Verdict:** The translation is now essentially clean: all 11 round-2 findings were fixed, the slogan is unified, the normative terms are consistent, and all three round-3 chrome-level wording items have now been applied to the file.
- **Count:** 0 high / 0 medium / 3 low

## Corrections

### interfaceCopy.followedLink — "Post Nominal" mistranslated as "surname"
- **Location:** `interfaceCopy.followedLink`
- **Current:** `+AI sonadının açıklaması`
- **English:** `+AI Post Nominal Description`
- **Issue:** "Post nominal" refers to post-nominal letters/notation — the mark placed *after* a person's name (like "PhD", "MD"). "Sonadı" means "surname/family name", which is a different concept. The link title currently reads "explanation of the surname". Cosmetic (a link title) but a genuine meaning error.
- **Suggested:** `+AI ad sonrası gösteriminin açıklaması`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.tr.js

### interfaceCopy.plainLead — "accountability declaration" flattened to "responsibility"
- **Location:** `interfaceCopy.plainLead`
- **Current:** `Bu işaret bir sorumluluk beyanıdır; yapay zekânın yazar olduğu iddiası veya çalışmanın doğru olduğuna dair bir garanti değildir.`
- **English:** `The mark is an accountability declaration, not a claim that AI is the author and not a guarantee that the work is correct.`
- **Issue:** English "accountability declaration" is rendered "sorumluluk beyanı" ("responsibility declaration"). The translation elsewhere distinguishes the two terms carefully — section 8 and `meaningThreeBody` render "accountability" as "hesap verebilirlik", while "sorumluluk" is reserved for "responsibility". This is the same chrome-level flattening already fixed in `plainTitle` (round 2).
- **Suggested:** `Bu işaret bir hesap verebilirlik beyanıdır; yapay zekânın yazar olduğu iddiası veya çalışmanın doğru olduğuna dair bir garanti değildir.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.tr.js

### interfaceCopy.meaningThreeBody — "AI" left untranslated
- **Location:** `interfaceCopy.meaningThreeBody`
- **Current:** `Adı belirtilen taraf hesap verebilirliği bir AI sistemine veya sağlayıcısına devretmez.`
- **English:** `The named party does not transfer accountability to an AI system or provider.`
- **Issue:** "AI system" is left as "AI sistemine". Everywhere else in the translation, standalone "AI" (as distinct from the protected literal "+AI") is rendered "yapay zekâ" — e.g. section 7 "artificial intelligence system" → "yapay zekâ sistemine", section 8 "AI generated" → "yapay zekânın ürettiği". This is the one leftover untranslated "AI", an internal inconsistency. (The invariant "+AI" is unaffected.)
- **Suggested:** `Adı belirtilen taraf hesap verebilirliği bir yapay zekâ sistemine veya sağlayıcısına devretmez.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.tr.js

## Round 2 verification

- [x] Canonical slogan consistency (MEDIUM) — applied: `documentTitle` and `heroTitle` now use `YZ yardım etti. Sorumluluğu ben alıyorum.`, byte-identical with sections 1/23/26 and `end`.
- [x] "material/materially" two ways (LOW) — applied: `description`, `heroLead`, `plainBody` now use `esaslı ölçüde`.
- [x] "specification" two ways (LOW) — applied: `specification`, `readSpec`, `versionFooter`, `untranslatedNotice.headline` now use `belirtim`.
- [x] `markLabel` "Standart işaret" (LOW) — applied: now `Kanonik işaret`.
- [x] Section 5.4 dropped "submitted" (LOW) — applied: `teslim edilip edilmeyeceği` restored; all five verbs present.
- [x] `plainTitle` "Görünür sorumluluk" (LOW) — applied: now `Görünür hesap verebilirlik`.
- [x] `plainBody` "bu sonucu kullanma" (LOW) — applied: now `yapay zekâyı kullanma kararının arkasında durduğunu`.
- [x] Section 6 "Tesadüfi" → "Arızi" (LOW) — applied: now `Arızi veya tümüyle mekanik yapay zekâ işlevleri`.
- [x] Section 19 "uzlaşı" → "uzlaşım" (LOW) — applied: now `evrensel bir uzlaşım olarak`.
- [x] Section 22 MAY placement (LOW) — applied: both sentences now read `…barındırsa bile yine de kapsama girebilir.`.
- [x] Section 14 translated code blocks (LOW) — applied: `Author: Eric Mourant +AI` and `This project uses +AI.` restored to English.

## Notes

- All 38 `interfaceCopy` keys present and in the master's order; `colourChanged` keeps the `{colour}` placeholder (`Vurgu rengi {colour} olarak değiştirildi.`).
- `translationNote` is non-empty in Turkish while empty in English; this is an acceptable translator-added note, not a finding.
- Normative terms are consistent throughout all 26 sections and the file-header mapping table: MUST → `ZORUNLUDUR`, MUST NOT → `YASAKTIR`, SHOULD → `ÖNERİLİR`, SHOULD NOT → `ÖNERİLMEZ`, MAY → `İSTEĞE BAĞLIDIR`. Section 3 keeps the English term in parentheses (`ZORUNLUDUR (MUST)` etc.) and its five definitions match the master (absolute requirement / absolute prohibition / departable strong recommendation / normally-avoided practice / optional practice).
- Load-bearing invariants verified byte-identical: `+AI` everywhere; Section 4 counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`; Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `Eric Mourant`, `notation`, `+AI`, `true`); `data-company-example` and `data-json-example` attributes; example names `Eric Mourant` and `JAPER Technology`; section numbering 1–26 and h4 labels 5.1–5.6.
- List counts verified: Section 6 (17 items) and Section 8 (17 items) both complete. Section 5.1 keeps all seven activity verbs; Section 5.4 keeps all five release verbs; Section 26 keeps accept/publish/transmit/deploy/otherwise-release and "that decision".
- Section 9 "word-by-word or element-by-element" → `sözcük sözcük veya öge öge` and "meaningful human act of adoption" → `anlamlı bir insan benimseme eyleminin` are correct. Section 24 renders "both questions" (`her iki soruya`) and "yes" (`evet`) correctly. Numbers ("two facts" → `iki olgu`, "Three characters" → `Üç karakter`) are correct.
- HTML structure (same `<p>`, `<strong>`, `<code>`, `<ol>`, `<ul>`, `<li>`, `<h4>`, `<blockquote>`, `<pre>` elements, `class="canonical"`, and the data-* attributes) matches the master throughout; only text content is translated.
- My Turkish competence is conversational, not native; the three LOW findings above are terminology/consistency issues detectable from the master's own usage patterns, not deep grammar judgments. A native-speaker read of sections 3, 7 and 26 (per TRANSLATIONS.md) is still recommended before treating this as final.
