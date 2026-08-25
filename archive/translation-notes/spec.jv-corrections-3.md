# spec.jv.js — Round 3 final correction recommendations

- **Language:** Basa Jawa (jv)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.jv-corrections-2.md` (0 high / 0 medium / 6 low) — status of each item verified against the current file
- **Verdict:** All six round-2 findings have been applied; the translation now reads clean and consistent against the master, with no new corrections identified.
- **Count:** 0 high / 0 medium / 0 low

## Corrections

No corrections identified.

## Round 2 verification

- [x] "artificial intelligence" split (chrome `kacerdasan gawéan` vs body `kapinteran artifisial`) — applied: `interfaceCopy.description` and `interfaceCopy.heroLead` now use `kapinteran artifisial`.
- [x] "accountability" collapsed into "responsibility" in chrome — applied: `meaningThreeBody` → `akuntabilitas`, `plainTitle` → `Akuntabilitas ingkang katingal.`, `plainLead` → `deklarasi akuntabilitas`.
- [x] "materially" rendered two ways (`kanthi nyata` vs `kanthi wigati`) — applied: `description`, `heroLead`, `meaningOneBody`, `plainBody` all now use `kanthi wigati`.
- [x] Section 16 "employer" rendered `panyewa kerja` — applied: now `majikan`.
- [x] Section 14 English code examples — applied: now `Panyerat: Eric Mourant +AI` and `Proyèk menika ngginakaken +AI.`.
- [x] Section 7 "substantially generated" rendered "the majority part" — applied: now `… ingkang dipunasilaken AI kanthi wigati.`.

## Notes

- All five normative terms are used consistently throughout: MUST → `KEDAH`, MUST NOT → `ORA KENGING`, SHOULD → `PRAYOGA`, SHOULD NOT → `ORA PRAYOGA`, MAY → `KENGING`, with the English term in parentheses at first definition in Section 3. The file-header mapping table matches actual usage.
- Negation direction is correct everywhere, notably Section 8 (`BOTEN negesaken`), Section 21 (`ORA PRAYOGA migunakaken`), Section 16 (`ORA KENGING dipunwakili`), and Section 9 (`ORA PRAYOGA dipunwakili`).
- Load-bearing invariants verified byte-identical: `+AI` everywhere; Section 4 non-canonical forms `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`; Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); `data-company-example` / `data-json-example` attributes; example names `Eric Mourant` and `JAPER Technology`; section numbering 1–26 and h4 labels 5.1–5.6.
- The canonical slogan `AI mbiyantu. Kula ingkang tanggel jawab.` is byte-identical across `documentTitle`, `heroTitle`, Section 1, Section 23, Section 26 and `end`; the `heroLead` `<strong>…</strong>` uses matching wording.
- Section 5.4 keeps all six verbs (`kaundhangaken`, `kakintunaken`, `kagelaraken`, `kaaturaken`, `kapitontonaken`, `kawedalaken kanthi cara sanès`); Section 5.6 keeps `putusan medalaken, migunakaken, utawi nedahaken`; Section 26 keeps accept/publish/transmit/deploy/otherwise release plus `putusan kasebut` ("that decision").
- List-item counts verified: Section 6 has 17 items (not 21 — the English master itself has 17), Section 8 has 17, Section 19 has 6, Section 21 has 4, Section 25 has 9; all present and matching in the translation.
- Numbers verified: Section 2 `kalih kanyatan` ("two facts"), `interfaceCopy.plainQuote` `Tigang aksara` ("Three characters"), Section 24 `kalih pitakèn` / `inggih` ("both questions" / "yes").
- Carried no-change note (round 2, still acceptable): `interfaceCopy.meaningTwoBody` renders "knowingly" as `kanthi sengaja` while the body uses `kanthi sadhar`; both are defensible and meaning is unaffected, so it is left as-is rather than raised as a correction.
- Minor wording observation (not raised as a correction): the English verb "present" is rendered via the `aturaken` root in Section 5.1 (`ngaturaken`) and via `kapitontonaken` in Section 5.4, while "submit" is `kaaturaken` in 5.4. Each clause's meaning is correct in context; this is a style nuance only.
- `interfaceCopy.translationNote` is non-empty (a translator's note stating English remains normative), which is acceptable since the English master leaves it empty; `colourChanged` preserves the `{colour}` placeholder.
- No unescaped backticks or `${` inside template literals; no leftover English prose beyond the load-bearing invariants.
- Javanese knowledge is limited: I cannot certify natural idiom or register beyond structural/terminology checks. A native-speaker read of Sections 3, 7 and 26 (per TRANSLATIONS.md) is still the right final gate before treating this as authoritative.
