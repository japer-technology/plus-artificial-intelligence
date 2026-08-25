# spec.es.js — Round 3 final correction recommendations

- **Language:** Español (es)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.es-corrections-2.md` (0 high / 0 medium / 4 low) — status of each item verified against the current file
- **Verdict:** Clean and complete: all four round-2 corrections have been applied and the translation is now normatively faithful, with no new errors found.
- **Count:** 0 high / 0 medium / 0 low

## Corrections

No corrections identified.

## Round 2 verification

- [x] applied — `interfaceCopy.description`: now reads `+AI significa que la inteligencia artificial ayudó materialmente al trabajo y que una persona u organización nombrada acepta la responsabilidad por él.` (object «el trabajo» restored; «nombrada» replaces «identificada»).
- [x] applied — Section 22: now reads `la IA contribuyó materialmente y la parte nombrada asume la responsabilidad por el resultado.` («parte nombrada» replaces «parte identificada»; section 23 also now uses «nombrada», so "named" is consistent throughout).
- [x] applied — Section 4: now reads `La forma canónica legible por humanos es:` (the "human-" qualifier is restored, matching the human/machine contrast in section 17).
- [x] applied — Section 14: both `<pre><code>` blocks restored to literal English — `Author: Eric Mourant +AI` and `This project uses +AI.` (matching the master and most sibling languages).
- [x] still valid — round-2 Notes re-confirmed: Section 14 title `Software` (accepted Spanish loanword), `highlight` → «Color», `followedLink` → «posnominal», `commits` → «confirmaciones» all remain; no change needed.

## Notes

- Load-bearing invariants verified byte-identical: `+AI` everywhere (never localised, spaced or re-cased); the section 4 non-canonical counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`; the section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); example names `Eric Mourant` and `JAPER Technology`; the `data-company-example` / `data-json-example` attributes; section numbering 1–26 in order; and the h4 labels 5.1–5.6.
- Canonical slogan `La IA ayudó. Yo asumo la responsabilidad.` is byte-identical across all six locations: `documentTitle` (after the `+AI — ` prefix), `heroTitle`, section 1, section 23, section 26 and `end`. The `heroLead` `<strong>` segment uses the matching long-form wording (`la inteligencia artificial contribuyó materialmente al trabajo y dicha parte acepta la responsabilidad de publicarlo.`).
- Normative terms verified end-to-end: section 3 defines all five with the English term in parentheses — `DEBE (MUST)` / `NO DEBE (MUST NOT)` / `DEBERÍA (SHOULD)` / `NO DEBERÍA (SHOULD NOT)` / `PUEDE (MAY)` — and the definitions match the master exactly (absolute requirement / absolute prohibition / strong recommendation departable for a legitimate reason / normally avoided but potentially justified / optional practice). All later sections reuse the same renderings with only grammatical inflection (e.g. `DEBERÍAN`, `PUEDEN`); no drift. Section 8's non-normative "does NOT assert" → `NO afirma` and section 24's lowercase "should" → `debería` are correctly treated as non-normative.
- Section 5.4 keeps all six verbs (`se publicaría, transmitiría, desplegaría, entregaría, presentaría o difundiría de otro modo`); 5.6 keeps "decision to release, use or represent" → `la decisión de difundir, utilizar o representar`; section 26 keeps the full declaration with `aceptar, publicar, transmitir, desplegar o difundir de otro modo` and "that decision" → `esa decisión`.
- List counts verified: section 6 and section 8 each have 17 items in the master and 17 in the translation (the task brief's "21" for section 6 appears to be a miscount — the master itself has 17, and they match one-to-one); section 19 has 6, section 21 has 4, section 25 has 9 — all matching.
- `interfaceCopy` has 38 keys (not "~31"), all present in the same order as the master. `translationNote` is populated in Spanish while empty in the English master — expected and correct (the English file is the normative text).
- The Spanish header comment carries no normative-term mapping table (unlike some sibling files, e.g. `spec.de.js`, which document one). Since actual usage is fully consistent, a table if added would trivially read MUST→`DEBE`, MUST NOT→`NO DEBE`, SHOULD→`DEBERÍA`, SHOULD NOT→`NO DEBERÍA`, MAY→`PUEDE`. This is a cosmetic omission, not a translation error.
- No unescaped backticks or `${` inside the template literals; no leftover untranslated English prose (the only English retained is the intentional load-bearing content: the mark, example names, JSON wire format, section 4 counter-examples, and the two section 14 code blocks).
- Optional micro-observations, none of which change meaning and are therefore not listed as corrections: (a) section 24 renders "both questions" as `estas dos preguntas` rather than `ambas preguntas`; the "both" requirement is re-established by the following `Si ambas respuestas son afirmativas`, so nothing is lost. (b) section 25 renders "machine contribution" as `contribución automática`; «automática» is idiomatic and understood as machine/automated, though `de máquina` would be marginally more literal. (c) section 17 renders "richer representation" as `representación más completa`; acceptable. (d) `heroLead` renders "carried this link" as `incluía este enlace`; acceptable.
