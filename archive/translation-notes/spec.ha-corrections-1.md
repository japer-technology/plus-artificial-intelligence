# spec.ha.js — Round 1 correction suggestions

- **Language:** Hausa (ha)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** A competent, complete translation with consistent normative terms; the main risks are the slogan differing between the interface and the specification body, and two terminology choices ("Neutrality", "authorship") that shift meaning.
- **Count:** 0 high / 4 medium / 6 low

## Corrections

### Section 1 — Purpose
- **Location:** `sections[1].body`, the line "Ainihin bayanin shi ne:"
- **Current:** `Ainihin bayanin shi ne:`
- **English:** `The canonical expression is:`
- **Issue:** "Canonical" is rendered as "asali" everywhere else (sections 4, 17-adjacent prose, 23, 26, `markLabel`); here it is "ainihin", introducing a second term for the same concept.
- **Suggested:** `Bayanin asali shi ne:`
- **Severity:** LOW

### Section 5 — Meaning of the mark
- **Location:** `sections[5].body`, h4 5.4 paragraph
- **Current:** `…ko za a wallafa, aika, girka, gabatar ko fitar da abin da aka samar.`
- **English:** `…whether the artifact would be published, transmitted, deployed, submitted, presented or otherwise released.`
- **Issue:** The verb "submitted" (miƙa) is dropped from the six-way list; the remaining verbs are correct.
- **Suggested:** `…ko za a wallafa, aika, girka, miƙa, gabatar ko fitar da abin da aka samar.`
- **Severity:** LOW

### Section 6 — Material assistance
- **Location:** `sections[6].body`, "Incidental or purely mechanical AI functionality…"
- **Current:** `Aikin hankalin wucin gadi na ɗan lokaci ko na injina kaɗai…`
- **English:** `Incidental or purely mechanical AI functionality does not necessarily require +AI.`
- **Issue:** "na ɗan lokaci" means "temporary/occasional"; the English "incidental" means "of minor or accidental relevance", which is a different concept.
- **Suggested:** `Aikin hankalin wucin gadi na kaikaice ko na injina kaɗai…`
- **Severity:** MEDIUM

### Section 20 — Neutrality
- **Location:** `sections[20].title`
- **Current:** `Rashin nuna bambanci`
- **English:** `Neutrality`
- **Issue:** "Rashin nuna bambanci" means "non-discrimination" (between people); the section is about the mark not taking a position on AI. "Tsaka-tsaki" is the standard term for neutrality.
- **Suggested:** `Tsaka-tsaki`
- **Severity:** MEDIUM

### Section 22 — Relationship to authorship
- **Location:** `sections[22].title` and first paragraph
- **Current:** `Alaƙa da mallakar aiki` / `…ba ya ba da kaso na mallakar aiki.`
- **English:** `Relationship to authorship` / `…deliberately does not assign a percentage of authorship.`
- **Issue:** "mallakar aiki" means "ownership of the work"; the English is about authorship (who wrote it), not ownership. The same shift appears in section 2 ("exclusive authorship" → "mallakar aikin kaɗai").
- **Suggested:** Title: `Alaƙa da marubuciya`; body: `…ba ya ba da kaso na marubuciya.` (and in section 2: `…ba wai marubucin keɓaɓɓe ba.`)
- **Severity:** MEDIUM

### Section 2 — Design principle
- **Location:** `sections[2].body`, closing paragraph
- **Current:** `…ba wai mallakar aikin kaɗai ba.`
- **English:** `…rather than exclusive authorship.`
- **Issue:** "Ownership of the work alone" instead of "exclusive authorship" — see the section 22 item above; the two should be corrected together.
- **Suggested:** `…ba wai marubucin keɓaɓɓe ba.`
- **Severity:** LOW

### Section 18 — Persistence
- **Location:** `sections[18].title`
- **Current:** `Dawwama`
- **English:** `Persistence`
- **Issue:** The body renders "survive" as "wanzuwa", so the title uses a different root than the body; "Dawwama" (eternity) also overstates "persistence".
- **Suggested:** `Wanzuwa`
- **Severity:** LOW

### interfaceCopy.followedLink
- **Location:** `interfaceCopy.followedLink`
- **Current:** `Bayanin +AI post-nominal`
- **English:** `+AI Post Nominal Description`
- **Issue:** "post-nominal" is left in English.
- **Suggested:** `Bayanin ƙarin suna +AI`
- **Severity:** LOW

### interfaceCopy.footerLine
- **Location:** `interfaceCopy.footerLine`
- **Current:** `Buɗaɗɗen notation. Alhakin ɗan Adam.`
- **English:** `Open notation. Human responsibility.`
- **Issue:** "notation" is left in English; "tsari" is already used for notation elsewhere.
- **Suggested:** `Buɗaɗɗen tsari. Alhakin ɗan Adam.`
- **Severity:** LOW

### Canonical slogan consistency (interfaceCopy vs sections)
- **Location:** `interfaceCopy.documentTitle` and `interfaceCopy.heroTitle` vs sections 1, 23, 26 and `end`
- **Current:** `AI ya taimaka. Ni ne ke da alhakin.` (interface) vs `AI ya taimaka. Ni ke ɗaukar alhakin.` (body)
- **English:** `AI helped. I take responsibility.` — identical wording everywhere in the master.
- **Issue:** Two renderings of the canonical slogan in one document; the interface says "I am the one with the responsibility" while the body says "I carry the responsibility". The English text deliberately reuses the exact slogan.
- **Suggested:** Unify on `AI ya taimaka. Ni ke ɗaukar alhakin.` everywhere (documentTitle, heroTitle, sections 1/23/26, `end`).
- **Severity:** MEDIUM

## Notes
- Section 3 normative terms (DOLE / AN HANA / YA KAMATA / BAI KAMATA BA / ANA IYA) are defined with English parentheticals and used consistently through all 26 sections — no action needed.
- Section 15 example `Wanda ya ƙirƙira Eric Mourant +AI` omits "by" ("ta"); consider `An ƙirƙira ta: Eric Mourant +AI` if reviewed.
- "materially assisted" is consistently "taimako mai muhimmanci" — acceptable and uniform.
- Worth a native-speaker read of sections 3, 7 and 26 per TRANSLATIONS.md before treating this as final.
