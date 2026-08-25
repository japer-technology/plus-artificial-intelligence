# spec.ha.js — Round 2 final correction recommendations

- **Language:** Hausa (ha)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.ha-corrections-1.md` (0 high / 4 medium / 6 low) — all 10 findings re-verified against the current file and carried forward
- **Verdict:** Competent, complete translation with consistent normative terms; all round-1 items remain, and two new low-severity wording points were found.
- **Count:** 0 high / 4 medium / 8 low

## Corrections

### Section 6 — "incidental" rendered as "temporary"
- **Location:** `sections[6].body`, "Incidental or purely mechanical AI functionality…"
- **Current:** `Aikin hankalin wucin gadi na ɗan lokaci ko na injina kaɗai…`
- **English:** `Incidental or purely mechanical AI functionality does not necessarily require +AI.`
- **Issue:** "na ɗan lokaci" means "temporary/occasional"; the English "incidental" means "of minor or accidental relevance", which is a different concept.
- **Suggested:** `Aikin hankalin wucin gadi na kaikaice ko na injina kaɗai…`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 20 — "Neutrality" rendered as "non-discrimination"
- **Location:** `sections[20].title`
- **Current:** `Rashin nuna bambanci`
- **English:** `Neutrality`
- **Issue:** "Rashin nuna bambanci" means "non-discrimination" (between people); the section is about the mark not taking a position on AI. "Tsaka-tsaki" is the standard term for neutrality.
- **Suggested:** `Tsaka-tsaki`
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 22 — "authorship" rendered as "ownership"
- **Location:** `sections[22].title` and first paragraph
- **Current:** `Alaƙa da mallakar aiki` / `…ba ya ba da kaso na mallakar aiki.`
- **English:** `Relationship to authorship` / `…deliberately does not assign a percentage of authorship.`
- **Issue:** "mallakar aiki" means "ownership of the work"; the English is about authorship (who wrote it), not ownership. The same shift appears in section 2.
- **Suggested:** Title: `Alaƙa da marubuciya`; body: `…ba ya ba da kaso na marubuciya.` (and in section 2: `…ba wai marubucin keɓaɓɓe ba.`)
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Canonical slogan consistency (interfaceCopy vs sections)
- **Location:** `interfaceCopy.documentTitle` and `interfaceCopy.heroTitle` vs sections 1, 23, 26 and `end`
- **Current:** `AI ya taimaka. Ni ne ke da alhakin.` (interface) vs `AI ya taimaka. Ni ke ɗaukar alhakin.` (body)
- **English:** `AI helped. I take responsibility.` — identical wording everywhere in the master.
- **Issue:** Two renderings of the canonical slogan in one document; the interface says "I am the one with the responsibility" while the body says "I carry the responsibility". The English text deliberately reuses the exact slogan.
- **Suggested:** Unify on `AI ya taimaka. Ni ke ɗaukar alhakin.` everywhere (documentTitle, heroTitle, sections 1/23/26, `end`).
- **Severity:** MEDIUM
- **Round 1:** carried forward (verified still present)

### Section 1 — "canonical" rendered with a second term
- **Location:** `sections[1].body`, the line "Ainihin bayanin shi ne:"
- **Current:** `Ainihin bayanin shi ne:`
- **English:** `The canonical expression is:`
- **Issue:** "Canonical" is rendered as "asali" everywhere else (sections 4, 23, 26, `markLabel`); here it is "ainihin", introducing a second term for the same concept.
- **Suggested:** `Bayanin asali shi ne:`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 5.4 — "submitted" dropped from the verb list
- **Location:** `sections[5].body`, h4 5.4 paragraph
- **Current:** `…ko za a wallafa, aika, girka, gabatar ko fitar da abin da aka samar.`
- **English:** `…whether the artifact would be published, transmitted, deployed, submitted, presented or otherwise released.`
- **Issue:** The verb "submitted" (miƙa) is dropped from the list; the remaining verbs are correct.
- **Suggested:** `…ko za a wallafa, aika, girka, miƙa, gabatar ko fitar da abin da aka samar.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 2 — "exclusive authorship" as "ownership alone"
- **Location:** `sections[2].body`, closing paragraph
- **Current:** `…ba wai mallakar aikin kaɗai ba.`
- **English:** `…rather than exclusive authorship.`
- **Issue:** "Ownership of the work alone" instead of "exclusive authorship" — see the section 22 item above; the two should be corrected together.
- **Suggested:** `…ba wai marubucin keɓaɓɓe ba.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 18 — title root differs from body
- **Location:** `sections[18].title`
- **Current:** `Dawwama`
- **English:** `Persistence`
- **Issue:** The body renders "survive" as "wanzuwa", so the title uses a different root than the body; "Dawwama" (eternity) also overstates "persistence".
- **Suggested:** `Wanzuwa`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.followedLink — "post-nominal" left in English
- **Location:** `interfaceCopy.followedLink`
- **Current:** `Bayanin +AI post-nominal`
- **English:** `+AI Post Nominal Description`
- **Issue:** "post-nominal" is left in English.
- **Suggested:** `Bayanin ƙarin suna +AI`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### interfaceCopy.footerLine — "notation" left in English
- **Location:** `interfaceCopy.footerLine`
- **Current:** `Buɗaɗɗen notation. Alhakin ɗan Adam.`
- **English:** `Open notation. Human responsibility.`
- **Issue:** "notation" is left in English; "tsari" is already used for notation elsewhere.
- **Suggested:** `Buɗaɗɗen tsari. Alhakin ɗan Adam.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 7 — "substantially generated" rendered "the most of it" (new in round 2)
- **Location:** `sections[7].body`, "MAY publish content substantially generated by AI"
- **Current:** `Mai ɗaukar alhaki ANA IYA wallafa abin da hankalin wucin gadi ya samar mafi yawa.`
- **English:** `The responsible party MAY publish content substantially generated by AI.`
- **Issue:** "ya samar mafi yawa" means "produced the most of it", drifting toward the "predominantly" concept that section 22 renders separately ("mafi yawan abin"). "Substantially" here means "to a significant extent".
- **Suggested:** `Mai ɗaukar alhaki ANA IYA wallafa abin da hankalin wucin gadi ya samar a hanya mai muhimmanci.`
- **Severity:** LOW
- **Round 1:** new in round 2

### Section 1 — stray "ɗan adam" in "artificial intelligence" (new in round 2)
- **Location:** `sections[1].body`, first sentence
- **Current:** `…taimako mai muhimmanci daga hankalin ɗan adam na wucin gadi…`
- **English:** `…materially assisted by artificial intelligence…`
- **Issue:** "hankalin ɗan adam na wucin gadi" reads as "artificial *human* intelligence"; everywhere else the file renders the term correctly as "hankalin wucin gadi" without "ɗan adam".
- **Suggested:** `…taimako mai muhimmanci daga hankalin wucin gadi…`
- **Severity:** LOW
- **Round 1:** new in round 2

## Round 1 verification

- [x] Section 1 "Ainihin bayanin" — still present, carried forward
- [x] Section 5.4 missing "miƙa" — still present, carried forward
- [x] Section 6 "na ɗan lokaci" — still present, carried forward
- [x] Section 20 title — still present, carried forward
- [x] Section 22 ownership/authorship — still present, carried forward
- [x] Section 2 "mallakar aikin kaɗai" — still present, carried forward
- [x] Section 18 title "Dawwama" — still present, carried forward
- [x] followedLink "post-nominal" — still present, carried forward
- [x] footerLine "notation" — still present, carried forward
- [x] Slogan interface/body split — still present, carried forward

## Notes

- Section 3 normative terms (DOLE / AN HANA / YA KAMATA / BAI KAMATA BA / ANA IYA) are defined with English parentheticals and used consistently through all 26 sections.
- Section 15 example `Wanda ya ƙirƙira Eric Mourant +AI` omits "by"; consider `An ƙirƙira ta: Eric Mourant +AI` if reviewed.
- "materially assisted" is consistently "taimako mai muhimmanci" — acceptable and uniform.
- Section 4 "case-sensitive" is correctly rendered (`Alamar tana kula da bambancin manyan baƙaƙe da ƙanana.`).
- Hooked characters (ƙ ɓ ɗ) preserved throughout.
- `+AI`, JSON keys in Section 17, `data-company-example` / `data-json-example` attributes, example names, and Section 4 counter-examples all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
