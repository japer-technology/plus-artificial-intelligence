# spec.ha.js — Round 3 final correction recommendations

- **Language:** Hausa (ha)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.ha-corrections-2.md` (0 high / 4 medium / 8 low) — all 12 items verified against the current file; every one has been applied
- **Verdict:** Clean translation: all round-2 corrections were applied correctly, all load-bearing invariants hold, and both round-3 correction items have now been applied to spec.ha.js.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### interfaceCopy — "artificial intelligence" split across two Hausa terms
- **Location:** `interfaceCopy.description` and `interfaceCopy.heroLead`
- **Current (description):** `+AI yana nufin cewa basirar wucin gadi ta taimaka sosai wajen aikin kuma wani mutum ko ƙungiya da aka bayyana suna karɓar alhakin sa.`
- **Current (heroLead <strong>):** `basirar wucin gadi ta taimaka sosai wajen aikin, kuma suna karɓar alhakin fitar da shi.`
- **English:** `artificial intelligence` (the master uses this single term uniformly)
- **Issue:** The term "artificial intelligence" is rendered as `hankalin wucin gadi` consistently in all 26 section bodies, but as `basirar wucin gadi` in `interfaceCopy.description` and `interfaceCopy.heroLead`. Two different Hausa words (`basira` vs `hankali`) are used for the same English term. Meaning is preserved either way, but it is a terminology inconsistency in the most visible chrome of the page.
- **Suggested:** Unify on `hankalin wucin gadi` in both strings, e.g. description → `+AI yana nufin cewa hankalin wucin gadi ya taimaka sosai wajen aikin kuma wani mutum ko ƙungiya da aka bayyana suna karɓar alhakin sa.` and heroLead → `hankalin wucin gadi ya taimaka sosai wajen aikin, kuma suna karɓar alhakin fitar da shi.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ha.js

### Section 14 — example prose left untranslated
- **Location:** `sections[14].body`, second `<pre><code>` block
- **Current:** `<pre><code>This project uses +AI.</code></pre>`
- **English:** `<pre><code>This project uses +AI.</code></pre>`
- **Issue:** This is ordinary English prose (an example declaration) left untranslated. Every other prose example is translated (e.g. section 13 renders `Author:` as `Marubuci:`), so this sentence should also be in Hausa. No meaning is lost, but it is a completeness gap in the translation.
- **Suggested:** `<pre><code>Wannan aikin yana amfani da +AI.</code></pre>`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ha.js

## Round 2 verification

- [x] Section 6 "incidental" → "na kaikaice" (MEDIUM) — applied
- [x] Section 20 title "Neutrality" → "Tsaka-tsaki" (MEDIUM) — applied
- [x] Section 22 title/body "authorship" → "marubuciya" (MEDIUM) — applied
- [x] Canonical slogan unified to "AI ya taimaka. Ni ke ɗaukar alhakin." (MEDIUM) — applied everywhere (documentTitle, heroTitle, sections 1/23/26, `end`)
- [x] Section 1 "canonical" second term → "Bayanin asali" (LOW) — applied
- [x] Section 5.4 "submitted" → "miƙa" restored (LOW) — applied
- [x] Section 2 "exclusive authorship" → "marubucin keɓaɓɓe" (LOW) — applied
- [x] Section 18 title "Dawwama" → "Wanzuwa" (LOW) — applied
- [x] followedLink "post-nominal" → "ƙarin suna" (LOW) — applied
- [x] footerLine "notation" → "tsari" (LOW) — applied
- [x] Section 7 "substantially generated" → "a hanya mai muhimmanci" (LOW) — applied
- [x] Section 1 stray "ɗan adam" in "artificial intelligence" removed (LOW) — applied

## Notes

- All 12 round-2 corrections are present in the current file; none need carrying forward.
- Load-bearing invariants verified byte-identical: `+AI` everywhere (never localised/spaced/re-cased); Section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`); Section 17 JSON keys and values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); example names `Eric Mourant` and `JAPER Technology`; `data-company-example` / `data-json-example` attributes; section numbering 1–26 and h4 labels 5.1–5.6.
- Section 3 normative terms match the header mapping table and are used consistently through all 26 sections: MUST → DOLE, MUST NOT → AN HANA, SHOULD → YA KAMATA, SHOULD NOT → BAI KAMATA BA, MAY → ANA IYA.
- Canonical slogan `AI ya taimaka. Ni ke ɗaukar alhakin.` is byte-identical in documentTitle, heroTitle, sections 1/23/26 and `end`; the heroLead `<strong>` uses matching wording (taimaka / alhakin).
- Section 6 list has 17 items and Section 8 list has 17 items; all present (the round-3 brief's "21 items" for section 6 does not match the master, which has 17).
- Section 5.4 keeps all six verbs (wallafa / aika / girka / miƙa / gabatar / fitar); 5.6 keeps "release, use or represent"; Section 26 keeps "accept, publish, transmit, deploy or otherwise release" and "that decision".
- Section 24 "both questions" (tambayoyi biyu) and "yes" (eh) rendered correctly; Section 9 keeps "word-by-word or element-by-element" (kalma-kalma ko sashi-sashi) and "meaningful human act of adoption".
- No unescaped backticks or `${` inside template literals; no `+AI` re-casing.
- Accepted no-change items: the placeholder `&lt;Responsible Party&gt;` is translated to `&lt;Mai Ɗaukar Alhaki&gt;` (sections 1 and 4) — reasonable localisation of a template slot, not an invariant. Section 15 `Wanda ya ƙirƙira Eric Mourant +AI` (≈ "the one who created …") is an acceptable rendering of "Created by" and is left as-is (round-2 note).
- Minor observation (not a correction): section 14 keeps its first code example as `Author: Eric Mourant +AI` (defensible as a commit/header example) while section 13 translates `Author:` to `Marubuci:`; if consistency across examples is desired this could be revisited, but it does not affect correctness.
- I have limited native Hausa knowledge: the normative-term mapping, terminology and structure checks above are based on the file's internal consistency and the round-1/round-2 reports; a final native-speaker read of sections 3, 7 and 26 (as flagged in round 2) remains advisable before treating this as final.
