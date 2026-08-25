# spec.nl.js — Round 3 final correction recommendations

- **Language:** Nederlands (nl)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.nl-corrections-2.md` (0 high / 0 medium / 4 low) — status of each item verified against the current file
- **Verdict:** The translation is accurate and complete; all four round-2 findings have been applied, and no new issues were found.
- **Count:** 0 high / 0 medium / 0 low

## Corrections

No corrections identified.

## Round 2 verification

- [x] "mark" rendered two ways (teken vs merkteken) — applied. Chrome now uses `merkteken` throughout: `meansHeading` "Wat het merkteken zegt", `plainLead` "Het merkteken is…", `markLabel` "Canoniek merkteken".
- [x] "accountability" three-way split — applied. Chrome now uses `verantwoordingsplicht` consistently: `plainTitle` "Zichtbare verantwoordingsplicht.", `plainLead` "…een verklaring van verantwoordingsplicht…", `meaningThreeBody` "…draagt de verantwoordingsplicht niet over…".
- [x] `plainBody` pronoun "om het te gebruiken" → "om AI te gebruiken" — applied.
- [x] Section 14 code examples translated instead of kept literal English — applied. Both `<pre><code>` blocks now read `Author: Eric Mourant +AI` and `This project uses +AI.`

Round-1 items re-verified (as tracked in round 2's "Round 1 verification" section):

- [x] teken vs merkteken — applied (same as round-2 item 1 above).
- [x] accountability three-way split — applied (same as round-2 item 2 above).
- [x] plainBody "om het te gebruiken" — applied (same as round-2 item 3 above).
- [x] Section 14 title `Software` — still `Software`; confirmed acceptable Dutch loanword, no change required.

## Notes

- All five normative terms are used with a single rendering (`MOET` / `MAG NIET` / `ZOU MOETEN` / `ZOU NIET MOETEN` / `MAG`), the English term is kept in parentheses at the section 3 first definition, and the plural/split forms (`MOETEN`, `MOGEN`, `ZOUDEN … MOETEN`) are grammatical, not drift. The file header's mapping table matches actual usage.
- Canonical slogan `AI heeft geholpen. Ik neem de verantwoordelijkheid.` is byte-identical across `documentTitle` (after the `+AI — ` prefix), `heroTitle`, section 1, section 23, section 26, and the `end` string; `heroLead`'s `<strong>…</strong>` wording matches.
- Load-bearing invariants verified byte-identical: `+AI` everywhere; section 4 non-canonical counter-examples (`+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`); section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); `Eric Mourant` and `JAPER Technology` spellings; `data-company-example` and `data-json-example` attributes; sections 1–26 numbering/order and h4 labels 5.1–5.6.
- HTML structure matches the master in every section body (`<p>`, `<strong>`, `<code>`, `<ol>`, `<ul>`, `<li>`, `<h4>`, `<blockquote>`, `<pre>`, `class="canonical"`, `&nbsp;`, curly quotes), with only text content translated.
- Section 5.4 keeps all verbs (published, transmitted, deployed, submitted, presented or otherwise released → `gepubliceerd, verzonden, ingezet, ingediend, gepresenteerd of anderszins vrijgegeven`); section 5.6 keeps "the decision to release, use or represent". Section 6 and section 8 each keep all 17 list items; section 9 keeps "word-by-word or element-by-element" (`woord voor woord of element voor element`) and "meaningful human act of adoption" (`wezenlijke menselijke handeling van overname`); section 24 keeps "both questions" (`beide vragen`) and "yes" (`ja`); section 26 keeps the full declaration (accept, publish, transmit, deploy or otherwise release → `te aanvaarden, te publiceren, te verzenden, in te zetten of anderszins vrij te geven`) and "that decision" (`die beslissing`).
- The `<Responsible Party>` placeholder is rendered `<Verantwoordelijke partij>` in sections 1 and 4; this is not among the load-bearing invariants and is consistent within the file.
- `sections[5]` heading `Knowledge` is rendered `Wetenschap` (legal/formal Dutch sense of "knowledge of a fact", fitting the body's `weet of neemt redelijkerwijs aan`); `Kennis` might read more naturally to a general audience — native-speaker check, carried from round 2.
- `interfaceCopy.heroLead` uses `wiens` for "de persoon of organisatie"; strictly `organisatie` is feminine (`wier`), though `wiens` is common colloquially — cosmetic only.
- `interfaceCopy.highlight` ("Highlight") is rendered `Accent`; defensible for a colour control, `Markering`/`Accentueren` may be closer to the source — cosmetic only.
- `interfaceCopy.heroLead` and `meaningTwoBody` render "releasing"/"released" as `publiceren`/`gepubliceerd`; the fuller "release" verb list is used elsewhere (`vrijgeven`). This is chrome copy and a defensible, slightly narrower reading of "release" — noted for completeness, not an error.
- The `end` string compounds `+AI-specificatie` (hyphen) where English writes `+AI Specification` (space). The mark `+AI` is intact and the hyphen is idiomatic Dutch after an initialism; acceptable, not a load-bearing invariant break.
