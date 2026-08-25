# spec.pl.js — Round 3 final correction recommendations

- **Language:** Polski (pl)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.pl-corrections-2.md` (0 high / 0 medium / 3 low) — status of each item verified against the current file
- **Verdict:** Clean. All three round-2 corrections are now applied, and no new errors were found.
- **Count:** 0 high / 0 medium / 0 low

## Corrections

No corrections identified.

## Round 2 verification

- [x] Section 14 untranslated example strings — applied. The two `<pre><code>` blocks now read `Autor: Eric Mourant +AI` and `Ten projekt korzysta z +AI.`.
- [x] "accountability" collapsed into "odpowiedzialność" — applied. `rozliczalność` is now used in `sections[2]` (`…udziału sztucznej inteligencji i rozliczalności człowieka…`), `sections[8]` (`…jest oświadczeniem o rozliczalności…`), `sections[20]` (`…rozliczalność człowieka lub organizacji`), `sections[21]` (`…fałszywego wrażenia rozliczalności człowieka`), and `end` (`Pochodzenie i rozliczalność w pracy człowieka i SI`). `interfaceCopy.meaningThreeBody` / `plainTitle` / `plainLead` already used `rozliczalność`.
- [x] Section 7 "substantially generated" rendered "predominantly generated" — applied. Now reads `Strona odpowiedzialna MOŻE publikować treści wygenerowane w istotnej części przez sztuczną inteligencję.`

## Notes

- Load-bearing invariants verified byte-identical to English: `+AI` everywhere (never localised, spaced or re-cased); section 4 non-canonical counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`; section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); names `Eric Mourant` and `JAPER Technology`; `data-company-example` / `data-json-example` attributes; section numbering 1–26 in order; h4 labels 5.1–5.6.
- Slogan `SI pomogła. Biorę odpowiedzialność.` is byte-identical across `interfaceCopy.documentTitle` (after the `+AI — ` prefix), `interfaceCopy.heroTitle`, `sections[1]`, `sections[23]`, `sections[26]`, and `end`. `interfaceCopy.heroLead` uses the full form `sztuczna inteligencja` (per the file header's stated convention that `SI` appears only in the slogan and closing panel); its `<strong>` segment matches the slogan's wording in meaning.
- Normative terms are consistent with the header mapping table (MUST→`MUSI`, MUST NOT→`NIE MOŻE`, SHOULD→`POWINIEN`, SHOULD NOT→`NIE POWINIEN`, MAY→`MOŻE`); only grammatical inflection varies (`NIE MOGĄ`, `NIE POWINNO`, `NIE POWINNA`, etc.). Section 3 keeps the English term in parentheses.
- List-item counts match the master: section 6 (17 items), section 8 (17 items), section 19 (6 items), section 25 (10 items), section 4 (3 items), section 2 (2 items), section 21 (4 items). Section 5.4 keeps all five verbs plus "otherwise released"; section 5.6 keeps "decision to release, use or represent"; section 26 keeps "accept, publish, transmit, deploy or otherwise release" and "that decision"; section 24 renders "both questions"/"yes" correctly.
- Accepted no-change items, re-verified: `interfaceCopy.heroLead` "whose name carried this link" rendered passively as `której imię opatrzono tym linkiem` (semantically equivalent). `sections[24].title` renders "The +AI test" as `Sprawdzenie zgodności z +AI` — a slight "conformance check" framing versus the English "self-test", but the body's two yes/no questions disambiguate, so meaning is preserved. `sections[7]` renders "defining property" as `właściwością rozstrzygającą o istocie` — a mild paraphrase that preserves the meaning.
- `interfaceCopy.translationNote` is a non-empty Polish note where the English master is empty (`""`) — acceptable as an informational note and not a finding.
- Honest limitation: structure, invariants, list counts and terminology were checked systematically, but my certainty on some idiomatic Polish wording (whether `rozliczalność`, `Sprawdzenie zgodności z +AI`, or `Założenie projektowe` read most naturally to native speakers) is limited; a native Polish reviewer should give final sign-off on those wordings.
