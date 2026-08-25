# Translating the +AI specification

`site/index.html` keeps **all of a language's content in one file**:
`site/translations/spec.<code>.js` ships the specification body (26 numbered
sections), the interface chrome (`interfaceCopy`), the "not translated" notice
(`untranslatedNotice`), and the language's endonym.

| Layer | Where it lives | Status |
| --- | --- | --- |
| Interface chrome (buttons, headings, hero, footer) | `interfaceCopy` inside `site/translations/spec.<code>.js` | Translated for 25 languages; the other 15 wired languages fall back to English chrome |
| "Not translated" notice + endonym | `untranslatedNotice` / `endonym` inside `site/translations/spec.<code>.js` | Endonym set for all 40 languages; the notice is translated for 25 and falls back to English for the rest |
| Specification body (26 numbered sections) | `site/translations/spec.<code>.js` | Translated for all 40 language files, all wired into `site/index.html` |

Every `site/translations/spec.<code>.js` file ships all 26 sections, so no language
falls back to the English specification. (The "not translated" notice machinery
remains in place for any language whose file is ever reverted to a stub, and any
language whose file omits `interfaceCopy`/`untranslatedNotice`/`endonym` falls
back to English for those strings.)

## Why the English text stays normative

Every translated `translationNote` in this project already tells the reader that
the English text governs any discrepancy. Section 3 of the specification defines
**MUST**, **MUST NOT**, **SHOULD**, **SHOULD NOT**, and **MAY** as binding
normative terms. A mistranslation of those five terms does not produce a slightly
awkward page — it produces a specification that states *different requirements*
in different languages.

Treat the specification body as a legal-adjacent document, not as marketing copy.

## How to add a translation

1. Open `site/translations/spec.<code>.js` for your language.
2. Populate `sections` with all 26 sections, copying the structure from
   `site/translations/spec.en.js`. Keep the `number` values `"1"` through `"26"` and
   keep them in order.
3. Translate the `title` and the prose inside each `body`.
4. Optionally set `end` (the closing panel). Leave it `null` to inherit English.
5. Translate `interfaceCopy` (buttons, headings, hero and footer), `endonym`
   (the language's own name), and `untranslatedNotice` (shown only if the file
   is ever reverted to a stub). Any field you omit falls back to English.
6. Change `status: "untranslated"` to `status: "reviewed"`.
7. Open `site/index.html` in a browser, select your language, and confirm the
   orange "not translated" notice has disappeared and your text renders.

The registry ignores a file that claims `status: "reviewed"` but ships no
sections, so a half-finished file cannot silently present itself as complete.

### Rules for the five normative terms

Follow the convention already established in the reviewed translations: give the
term in the target language **and** keep the English term in parentheses on first
definition in section 3.

| Language | Established rendering |
| --- | --- |
| Japanese | `～しなければならない (MUST)`, `～してはならない (MUST NOT)`, `～することが望ましい (SHOULD)` |
| Spanish | `DEBE (MUST)`, `NO DEBE (MUST NOT)`, `DEBERÍA (SHOULD)` |
| French | `DOIT (MUST)`, `NE DOIT PAS (MUST NOT)`, `DEVRAIT (SHOULD)` |

Use one consistent rendering per term throughout all 26 sections. Do not vary the
wording for stylistic reasons — in a normative document that reads as a change in
requirement strength.

### What must not change

These are load-bearing and must survive translation untouched:

- The mark itself: `+AI` (case-sensitive; never localise, transliterate, or
  insert whitespace).
- HTML structure and attributes, including `data-company-example` and
  `data-json-example`. Elements marked `data-company-example` are removed
  automatically when the page is opened without a company name, and
  `data-json-example` changes how example names are escaped.
- JSON keys in section 17 (`provenance`, `ai_assistance`, `material`,
  `responsibility`, `responsible_party`, `notation`). Translate surrounding prose
  only; the keys are wire format.
- The example names `Eric Mourant` and `JAPER Technology`. These are substituted
  at runtime from URL parameters, so altering the spelling breaks personalisation.
- Non-canonical counter-examples in section 4 (`+Ai`, `+aI`, `+ ai`, `AI+`,
  `AI assisted`). They illustrate what is *invalid* and must stay in ASCII.
- Section numbering (`1`–`26`) and section order.

### Right-to-left languages

For `ar`, `fa`, and `ur` the page sets `dir="rtl"` on the document automatically.
Write the HTML in logical order and let the browser handle presentation. Do not
insert Unicode bidi control characters, and do not manually reorder tags.

## Technical notes

`body` values are JavaScript **template literals** delimited by backticks. Inside
them you must escape:

- a literal backtick `` ` `` → ``\` ``
- the sequence `${` → `\${`

Neither appears in the current English text. If your language needs one, escape it
rather than switching quote style.

Translation files load via ordinary `<script src="...">` tags, not `fetch()` or ES
modules. This is intentional so `site/index.html` keeps working when opened
directly from disk over `file://`, where browsers block cross-origin requests for
local files. If you add a language, remember three edits in `site/index.html`:

1. add the code to `supportedLanguages`,
2. add an `<option>` to the language `<select>`,
3. add a `<script src="translations/spec.<code>.js"></script>` tag.

The interface chrome, fallback notice and endonym all live in the language's
`site/translations/spec.<code>.js` file now, so there is no separate inline
`untranslatedNotice` or `LANGUAGE_ENDONYMS` list to update.

## Reviewing a submitted translation

Before flipping `status` to `"reviewed"`, confirm:

- [ ] All 26 sections present, correctly numbered and ordered.
- [ ] The five normative terms use one consistent rendering, with English in
      parentheses at first definition in section 3.
- [ ] `+AI` appears unmodified everywhere.
- [ ] Section 17 JSON keys are untranslated.
- [ ] `data-company-example` and `data-json-example` attributes preserved.
- [ ] Example names `Eric Mourant` / `JAPER Technology` unchanged.
- [ ] Page renders with no console errors and the orange notice is gone.
- [ ] A second speaker of the language has read section 3, section 7
      (Responsibility), and section 26 (Canonical declaration) — the three
      sections where a translation error carries the most weight.
