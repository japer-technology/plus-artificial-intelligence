# spec.pl.js — Round 1 correction suggestions

- **Language:** Polski (pl)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** The Polish translation is accurate and internally consistent in its normative terms, with only two low-severity points: two untranslated example strings and a collapsed responsibility/accountability distinction.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### Section 14 — Software (untranslated example strings)
- **Location:** `sections[14].body`, the two `<pre><code>` blocks
- **Current:**
  ```
  Author: Eric Mourant +AI
  ```
  ```
  This project uses +AI.
  ```
- **English:**
  ```
  Author: Eric Mourant +AI
  ```
  ```
  This project uses +AI.
  ```
- **Issue:** Both example strings are left in English while the surrounding prose is Polish. Section 13 already translates the same label as `Autor: Eric Mourant +AI`, so leaving `Author:` here is also internally inconsistent; `This project uses +AI.` is a complete sentence the reader must otherwise read in English. (These are prose examples, not JSON keys or `data-*` load-bearing strings; sibling translations render both.) The names `Eric Mourant` / `+AI` must stay byte-identical — only the surrounding words change.
- **Suggested:**
  ```
  Autor: Eric Mourant +AI
  ```
  ```
  Ten projekt korzysta z +AI.
  ```
- **Severity:** LOW

### "accountability" collapsed into "odpowiedzialność"
- **Location:** `sections[2]` (`odpowiedzialności człowieka`), `sections[8]` (`oświadczeniem o odpowiedzialności`), `sections[20]` (`odpowiedzialność człowieka lub organizacji`), `sections[21]` (`wrażenia odpowiedzialności człowieka`), `end` (`Pochodzenie i odpowiedzialność…`), and `interfaceCopy.meaningThreeBody` / `plainTitle` / `plainLead`
- **Current:** e.g. sect. 2 `…udziału sztucznej inteligencji i odpowiedzialności człowieka…`; sect. 8 `…jest oświadczeniem o odpowiedzialności…`
- **English:** `…AI participation and human accountability…`; `…is an accountability declaration…`
- **Issue:** The English master deliberately uses two distinct words — `responsibility` (the duty) and `accountability` (being answerable for the outcome) — and leans on `accountability` exactly where the mark's point is made (sections 2, 8, 20, 21, the end panel, and the chrome). Polish renders both as `odpowiedzialność`, so the distinction the spec draws between "responsibility" and "accountability" is lost. Polish has the established term `rozliczalność` for "accountability".
- **Suggested:** Use `rozliczalność` for "accountability" in those spots, keeping `odpowiedzialność` for "responsibility" — e.g. sect. 2 `…udziału sztucznej inteligencji i rozliczalności człowieka…`; sect. 8 `…jest oświadczeniem o rozliczalności…`; `end` `…rozliczalność w pracy człowieka i SI`. (If `rozliczalność` is judged too technical by a native reviewer, this should be confirmed as a deliberate collapse rather than an oversight.)
- **Severity:** LOW

## Notes
- The canonical slogan renders "AI helped" as `SI pomogła` ("SI" = `sztuczna inteligencja`). This is the standard Polish abbreviation and is documented in the file header, but a native speaker should confirm `SI` doesn't visually disconnect from the `+AI` mark for Polish readers (who may expect the mark's "AI" to be echoed). Body prose correctly uses the full form `sztuczna inteligencja`.
- `interfaceCopy.heroLead` renders "whose name carried this link" as `której imię opatrzono tym linkiem` (passive — "whose name was annotated with this link"). Semantically equivalent; no correction needed.
- `interfaceCopy.plainBody` correctly binds "the decision to use it" to AI (`…o jej użyciu`, where `jej` = SI), unlike a mechanical "result" reading.
- `sections[8]` "hallucinations" is rendered `konfabulacje`, the precise Polish term for AI confabulation/hallucination — good.
- All five normative terms are rendered with one lexical form (`MUSI`/`NIE MOŻE`/`POWINIEN`/`NIE POWINIEN`/`MOŻE`) and only grammatical inflection varies (`MUSZĄ`, `MOGĄ`, `POWINNA`/`POWINNO`/`POWINNY`, `NIE MOGĄ`, `NIE POWINNA`/`NIE POWINNO`), as documented; English appears in parentheses at section 3 first definition.
- Section 17 JSON keys, `+AI`, example names, and `data-company-example`/`data-json-example` attributes are preserved byte-identical.
