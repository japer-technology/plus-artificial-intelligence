# spec.ms.js — Round 1 correction suggestions

- **Language:** Bahasa Melayu (ms)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** Essentially accurate with consistent normative terms; only minor terminology inconsistencies between the chrome and the body remain.
- **Count:** 0 high / 0 medium / 4 low

## Corrections

### interfaceCopy / body — "accountability" terminology
- **Location:** `interfaceCopy.meaningThreeBody`, `interfaceCopy.plainTitle`, `interfaceCopy.plainLead` vs. `sections[2].body`, `sections[8].body`, `sections[20].body`, `end`
- **Current:** `… tidak memindahkan akauntabiliti kepada sistem atau pembekal AI.` / `Akauntabiliti yang jelas.` / `… pengisytiharan akauntabiliti …` (chrome) vs. `… kebertanggungjawaban manusia …` (body/end)
- **English:** `… does not transfer accountability …` / `Visible accountability.` / `… accountability declaration …` / `Human-AI Provenance and Accountability`
- **Issue:** Terminology inconsistency. "Accountability" is rendered as the borrowed `akauntabiliti` in the interface chrome but as `kebertanggungjawaban` throughout the normative body and closing panel. One term should be used everywhere.
- **Suggested:** Align on one rendering — recommend `kebertanggungjawaban` (already used in the body) — and update the three `interfaceCopy` strings to match.
- **Severity:** LOW

### interfaceCopy / body — "materially" terminology
- **Location:** `interfaceCopy.description`, `interfaceCopy.heroLead`, `interfaceCopy.meaningOneBody`, `interfaceCopy.plainBody` vs. all `sections[].body`
- **Current:** `… membantu secara besar …` / `… mempengaruhi hasil secara besar …` (chrome) vs. `… dibantu secara material …` (body)
- **English:** `… materially assisted …` / `… materially influenced …`
- **Issue:** Terminology inconsistency and slightly loose wording. "Materially" is rendered `secara besar` ("greatly/largely") in the chrome but the more precise `secara material` in the body. `secara besar` is an imprecise rendering of "materially".
- **Suggested:** Use `secara material` (or `secara ketara`) consistently, including in the four `interfaceCopy` strings.
- **Severity:** LOW

### Section 5 / Section 26 — "deploy" rendered as "use"
- **Location:** `sections[5].body` (5.4) and `sections[26].body` (canonical declaration)
- **Current:** `… diterbitkan, dihantar, digunakan, diserahkan, dipersembahkan …` and `… menerima, menerbitkan, menghantar, menggunakan atau dengan cara lain mengeluarkan …`
- **English:** `… published, transmitted, deployed, submitted, presented …` and `… accept, publish, transmit, deploy or otherwise release …`
- **Issue:** "Deploy" is rendered as `digunakan` / `menggunakan` ("use"), which loses the deployment/roll-out sense. It is a distinct verb in the release list and should not collapse into "use".
- **Suggested:** Use `ditempatkan` / `menempatkan` (or `dikerahkan` / `mengerahkan`) for "deploy", e.g. `… dihantar, ditempatkan, diserahkan …` and `… menghantar, menempatkan atau dengan cara lain mengeluarkan …`.
- **Severity:** LOW

### Section 14 — Software (untranslated code-example strings)
- **Location:** `sections[14].body`, the two `<pre><code>` examples
- **Current:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>`
- **English:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>`
- **Issue:** Left in English while the analogous prose examples were translated (`Salam hormat` in Section 12, `Pengarang:` / `Disediakan oleh:` / `Dikeluarkan oleh:` in Section 13, `Dihasilkan oleh` in Section 15). The `+AI` mark and names stay byte-identical.
- **Suggested:** Either translate (`Pengarang: Eric Mourant +AI`, `Projek ini menggunakan +AI.`) for consistency, or consciously keep them as literal ASCII examples; a native speaker should decide.
- **Severity:** LOW

## Notes
- The five normative terms are used consistently throughout: MUST → `MESTI`, MUST NOT → `TIDAK BOLEH`, SHOULD → `SEPATUTNYA`, SHOULD NOT → `TIDAK SEPATUTNYA`, MAY → `BOLEH`, with English in parentheses at first definition in Section 3. No drift observed.
- Negation direction is correct everywhere, notably Section 21 (`TIDAK SEPATUTNYA menggunakan` — "should not use") and Section 8 (`TIDAK menegaskan` — "does not assert").
- `plainTitle` renders "Visible accountability" as `Akauntabiliti yang jelas` ("clear accountability"); acceptable, but `kelihatan` would more literally match "visible".
- `+AI`, Section 17 JSON keys, `data-company-example` / `data-json-example` attributes, and the example names `Eric Mourant` / `JAPER Technology` are all preserved correctly.
- The canonical slogan "AI membantu. Saya bertanggungjawab." is used verbatim in Sections 1, 23, 26 and the closing panel, matching `documentTitle`/`heroTitle`.
