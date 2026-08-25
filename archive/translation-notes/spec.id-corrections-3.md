# spec.id.js — Round 3 final correction recommendations

- **Language:** Bahasa Indonesia (id)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.id-corrections-2.md` (0 high / 0 medium / 4 low) — status of each item verified against the current file
- **Verdict:** Clean and faithful; all load-bearing invariants intact and all five normative terms consistent. Both round-3 items have now been applied to the file (artificial-intelligence term unified on `kecerdasan buatan`, chrome "release" aligned with the body's `melepas`).
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### "artificial intelligence" rendered two ways (chrome + body, within-body split)
- **Location:** `interfaceCopy.description`, `interfaceCopy.heroLead`, and `sections[0]`, `sections[1]`, `sections[4]`, `sections[6]`, `sections[9]`, `sections[22]`, `sections[25]` bodies
- **Current:** `kecerdasan buatan` in `interfaceCopy.description`, `interfaceCopy.heroLead`, sections 1, 2, 5.3, 7, 23 — e.g. `…dibantu secara substansial oleh kecerdasan buatan…` (section 1) and `…penggunaan kecerdasan buatan…` (5.3); but `Kecerdasan artifisial membantu secara substansial…` (section 5.1), `Kecerdasan artifisial membantu pekerjaan yang terkait…` (section 10), and `Kecerdasan artifisial membantu pekerjaan ini…` (section 26)
- **English:** `artificial intelligence` (one term, used consistently)
- **Issue:** The same English term is still translated two ways, and now the split exists *within* the normative body as well as between chrome and body — section 5 alone uses `artifisial` in 5.1 but `buatan` in 5.3. Both words are valid Indonesian, so no meaning is lost, but the mixed rendering reads as two translators and breaks internal consistency.
- **Suggested:** Choose one term — recommend `kecerdasan buatan` (the common Indonesian term) — and apply it to every occurrence in `interfaceCopy` and all `sections[].body`.
- **Severity:** LOW
- **Round 2:** carried forward (still present)
- **Status:** applied to spec.id.js

### "release/released/releasing" narrowed to "publish" in the chrome
- **Location:** `interfaceCopy.heroLead`, `interfaceCopy.meaningTwoBody`
- **Current:** `…dan pihak itu menerima tanggung jawab untuk menerbitkannya.` (heroLead); `Seseorang atau organisasi secara sadar mengadopsi dan menerbitkan hasilnya.` (meaningTwoBody)
- **English:** `…and they accept responsibility for releasing it.` (heroLead); `A person or organisation knowingly adopted and released the result.` (meaningTwoBody)
- **Issue:** "Release" is a deliberate umbrella term in this spec (publish, transmit, deploy, etc.), and the body renders it consistently as `melepas`/`pelepasan` (sections 5.4, 5.6, 7, 10, 26). The chrome instead uses `menerbitkan` ("publish"), which is only one of the specific release verbs and slightly narrows the meaning. Minor terminology drift between chrome and body; no normative content is affected because the normative body is correct.
- **Suggested:** Align with the body's `melepas`: heroLead → `…dan pihak itu menerima tanggung jawab untuk melepaskannya.`; meaningTwoBody → `Seseorang atau organisasi secara sadar mengadopsi dan melepas hasilnya.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.id.js

## Round 2 verification

- [x] Section 14 code-example strings in English — **applied** (now `Penulis: Eric Mourant +AI` and `Proyek ini menggunakan +AI.`)
- [x] "materially assisted" rendered two ways (`bantuan yang berarti` vs `secara substansial`) — **applied** (chrome now uses `secara substansial` throughout)
- [x] Section 7 "substantially generated" → `sebagian besar` — **applied** (now `…menerbitkan isi yang dihasilkan secara substansial oleh AI.`)
- [x] "artificial intelligence" terminology split (`kecerdasan buatan` vs `kecerdasan artifisial`) — **applied** in round 3 (sections 5.1, 10, 26 now use `kecerdasan buatan`)

## Notes

- The five normative terms are used consistently and match the file-header mapping table: MUST → `HARUS`, MUST NOT → `TIDAK BOLEH`, SHOULD → `SEBAIKNYA`, SHOULD NOT → `SEBAIKNYA TIDAK`, MAY → `DAPAT`, with English in parentheses at first definition in Section 3. All five definitions in Section 3 are faithful (absolute requirement / absolute prohibition / strong recommendation departable for legitimate reason / practice normally avoided but potentially justified / optional practice).
- Slogan `AI membantu. Saya bertanggung jawab.` is byte-identical in `documentTitle` (after `+AI — `), `heroTitle`, section 1 body, section 23 body, section 26 body, and `end`; the `heroLead` `<strong>` segment uses matching wording.
- All load-bearing invariants verified byte-identical to English: `+AI` everywhere; Section 4 non-canonical counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`; Section 17 JSON keys and values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); `data-company-example` / `data-json-example` attributes; section numbering 1–26 with h4 labels 5.1–5.6 in order.
- All 26 sections present, ordered and numbered correctly; HTML tag structure and `class="canonical"` attributes match English exactly.
- Item counts verified against the actual master: Section 6 has 17 list items and Section 8 has 17 list items (the round-3 brief's "21 items" figure does not match the master) — all 17 present in each, and Section 19 has 6, Section 21 has 4, Section 25 has 9.
- Section 8 item "the artifact contains no hallucinations" is rendered `…tidak memuat halusinasi AI` (adds "AI"); this is an accepted clarification, not an error. Section 12's `Kindest regards` → `Hormat saya` remains an acceptable idiomatic choice.
- I am not a native Indonesian speaker. I am confident about the structural/terminology checks above, but a native-speaker read of the prose (especially sections 3, 7, 26) is still warranted before treating the translation as final.
