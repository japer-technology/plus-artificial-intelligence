# spec.id.js — Round 1 correction suggestions

- **Language:** Bahasa Indonesia (id)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end`
- **Verdict:** Essentially accurate and internally consistent, including the five normative terms; only minor terminology and localisation inconsistencies remain.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### interfaceCopy / body — "artificial intelligence" terminology
- **Location:** `interfaceCopy.description`, `interfaceCopy.heroLead` vs. all 26 `sections[].body`
- **Current:** `… kecerdasan buatan memberikan bantuan yang berarti …` (interfaceCopy); `… kecerdasan artifisial …` (body)
- **English:** `… artificial intelligence materially assisted …`
- **Issue:** Terminology inconsistency. "Artificial intelligence" is rendered as `kecerdasan buatan` in the chrome but as `kecerdasan artifisial` throughout the normative body. Both are valid Indonesian, but the split looks like two translators; the normative body should use the single chosen term.
- **Suggested:** Pick one rendering — recommend `kecerdasan buatan` (the common Indonesian term) or `kecerdasan artifisial` — and use it in both `interfaceCopy` and the body.
- **Severity:** LOW

### Section 14 — Software (untranslated code-example strings)
- **Location:** `sections[14].body`, the two `<pre><code>` examples
- **Current:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>`
- **English:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>`
- **Issue:** These example strings are left in English while the analogous prose examples elsewhere were translated (`Hormat saya` in Section 12, `Penulis:` / `Disusun oleh:` / `Diterbitkan oleh:` in Section 13, `Dibuat oleh` in Section 15). The `+AI` mark and names stay byte-identical; only the surrounding words are at issue.
- **Suggested:** Either translate them (`Penulis: Eric Mourant +AI`, `Proyek ini menggunakan +AI.`) for consistency, or consciously keep them as literal ASCII examples; a native speaker should decide. If kept, no change is strictly required.
- **Severity:** LOW

## Notes
- The five normative terms are used consistently throughout: MUST → `HARUS`, MUST NOT → `TIDAK BOLEH`, SHOULD → `SEBAIKNYA`, SHOULD NOT → `SEBAIKNYA TIDAK`, MAY → `DAPAT`, with English in parentheses at first definition in Section 3. No drift observed.
- Negation direction is correct everywhere, notably Section 21 (`SEBAIKNYA TIDAK menggunakan` — "should not use") and Section 8 (`TIDAK menegaskan` — "does not assert").
- "Materially assisted" is rendered `secara substansial` in the body but `bantuan yang berarti` in `interfaceCopy.description`; both are acceptable, but aligning them would improve consistency.
- `+AI`, Section 17 JSON keys, `data-company-example` / `data-json-example` attributes, and the example names `Eric Mourant` / `JAPER Technology` are all preserved correctly.
- Section 12's sign-off `Kindest regards` was correctly translated as `Hormat saya`; Section 13/15 field labels were also translated, so the Section 14 code examples are the only stragglers.
