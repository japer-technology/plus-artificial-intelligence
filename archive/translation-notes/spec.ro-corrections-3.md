# spec.ro.js — Round 3 final correction recommendations

- **Language:** Română (ro)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.ro-corrections-2.md` (0 high / 0 medium / 5 low) — status of each item verified against the current file
- **Verdict:** Clean, complete, and accurate; every round-2 correction has now been applied, all load-bearing invariants hold, and the round-3 wording-consistency item has now been applied to the file.
- **Count:** 0 high / 0 medium / 1 low

## Corrections

### interfaceCopy (description + heroLead) — "materially assisted" drifted to "a contribuit substanțial"
- **Location:** `interfaceCopy.description` and `interfaceCopy.heroLead` (the `<strong>…</strong>` segment)
- **Current:**
  - `description`: `+AI înseamnă că inteligența artificială a contribuit substanțial la lucrare, iar o persoană sau organizație numită acceptă responsabilitatea pentru aceasta.`
  - `heroLead`: `Persoana sau organizația al cărei nume purta acest link face o declarație simplă: <strong>inteligența artificială a contribuit substanțial la lucrare, iar partea respectivă acceptă responsabilitatea pentru publicarea acesteia.</strong>`
- **English:**
  - `description`: `+AI means artificial intelligence materially assisted the work and a named person or organisation accepts responsibility for it.`
  - `heroLead`: `The person or organisation whose name carried this link is making a simple declaration: <strong>artificial intelligence materially assisted the work, and they accept responsibility for releasing it.</strong>`
- **Issue:** The file's own header declares `"material assistance" → "asistență substanțială"`, and the body renders "materially assisted" consistently as `a asistat substanțial` (sections 5.1, 10, 22, 23, 26). The chrome instead uses `a contribuit substanțial` ("contributed substantially"), a second verb for the same English phrase. Meaning is not changed, but it is a wording drift between the chrome and the body on the central phrase, in a spot the master keeps uniform (`materially assisted` in both). Note also that `a asistat … la lucrare` would risk the "attend/witness" reading, so the direct-object form used by the body is preferred.
- **Suggested:**
  - `description`: `+AI înseamnă că inteligența artificială a asistat substanțial lucrarea, iar o persoană sau organizație numită acceptă responsabilitatea pentru aceasta.`
  - `heroLead`: `Persoana sau organizația al cărei nume purta acest link face o declarație simplă: <strong>inteligența artificială a asistat substanțial lucrarea, iar partea respectivă acceptă responsabilitatea pentru publicarea acesteia.</strong>`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ro.js (description and heroLead now use `a asistat substanțial lucrarea`)

## Round 2 verification

- [x] applied — `interfaceCopy.description` "identificată" → "numită" (line 26 now reads `…o persoană sau organizație numită acceptă responsabilitatea…`).
- [x] applied — "responsibility"/"accountability" split: section 7 title and body now use `Responsabilitatea`/`responsabilitatea`, while "accountability" keeps `răspundere` (sections 2, 8, 20, 21); the split is now in place as suggested.
- [x] applied — `interfaceCopy.plainBody` pronoun: line 50 now reads `…susține decizia de a utiliza IA.` (was `a-l utiliza`).
- [x] applied — Section 14 code examples restored to English: line 270 `Author: Eric Mourant +AI` and line 272 `This project uses +AI.` (was `Autor:` / translated).
- [x] applied — Section 7 "substantially generated" now `…un conținut generat substanțial de IA.` (was `generat în mare parte de IA`).

## Notes

- All five round-2 items are confirmed applied; no round-2 finding needs to be carried forward.
- Canonical slogan `IA a ajutat. Îmi asum răspunderea.` is byte-identical in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, sections 1, 23, 26, and the `end` string.
- Section 3 defines TREBUIE / NU TREBUIE / AR TREBUI / NU AR TREBUI / POATE with the English parentheticals, and every later occurrence is an inflected form of those same five stems — no synonym substitution, so requirement strength is stable across all 26 sections. The header's normative-term mapping table matches actual usage.
- Load-bearing invariants all verified intact: `+AI` spelling/case everywhere; section 4 counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`) byte-identical; section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`) byte-identical; `data-company-example` and `data-json-example` attributes present; example names `Eric Mourant` and `JAPER Technology` exact; sections 1–26 in order with h4 labels 5.1–5.6 intact.
- Section 5.4 keeps all verbs (publicat, transmis, implementat, depus, prezentat, difuzat în alt mod); 5.6 keeps "decizia de a difuza, de a folosi sau de a prezenta artefactul"; section 26 keeps all five verbs (accept, public, transmit, implementez, difuzez în alt mod) plus "această decizie" for "that decision".
- Section 6 and section 8 both contain all 17 list items; section 9 "cuvânt cu cuvânt sau element cu element" and "act uman semnificativ de însușire"; section 24 "ambele întrebări" / "da"; "două fapte" / "Trei caractere" / "ambele" all correct.
- Residual accepted no-change: the canonical slogan and section 22 use idiomatic `își asumă răspunderea` for "take responsibility" while section 7 uses `responsabilitatea` as the term for the concept. Both are correct Romanian near-synonyms; changing the slogan is not recommended.
- Minor observation, not flagged as a correction: `interfaceCopy.highlight` is rendered `Culoare accent` ("accent colour") rather than a literal "highlight"; it is internally consistent with `highlightAria`/`colourChanged` and does not change meaning.
- Limited-knowledge caveat: my judgment on fine Romanian register/style (e.g. the `răspundere` vs `responsabilitate` overlap) is based on translation convention rather than native fluency; the wording findings above are flagged conservatively as LOW.
