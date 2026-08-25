# spec.de.js — Round 2 final correction recommendations

- **Language:** Deutsch (de)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 1:** `spec.de-corrections-1.md` (0 high / 0 medium / 3 low) — all findings re-verified against the current file; two carried forward, one confirmed as acceptable no-change
- **Verdict:** Highly accurate translation; normative terms consistent, slogan byte-consistent across interface/sections/end. Only chrome-level wording and one new consistency note remain.
- **Count:** 0 high / 0 medium / 3 low

## Corrections

### interfaceCopy.plainBody — pronoun binds to the wrong noun
- **Location:** `interfaceCopy.plainBody`, second sentence
- **Current:** `Es sagt aus, dass KI das Ergebnis wesentlich beeinflusst hat und eine identifizierbare Person oder Organisation hinter der Entscheidung steht, es zu verwenden.`
- **English:** `It says AI materially influenced the result and an identifiable person or organisation stands behind the decision to use it.`
- **Issue:** In English, "the decision to use it" refers to the decision to use **AI**. In the German, the pronoun `es` can only bind to the neuter noun "das Ergebnis" ("KI" is feminine), so it reads as "the decision to use the result" — a subtle but real shift in what the person is standing behind.
- **Suggested:** `Es sagt aus, dass KI das Ergebnis wesentlich beeinflusst hat und eine identifizierbare Person oder Organisation hinter der Entscheidung für den Einsatz von KI steht.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### "accountability" rendering drift in chrome
- **Location:** `interfaceCopy.plainTitle`, `interfaceCopy.plainLead`, `interfaceCopy.meaningThreeBody`
- **Current:** `Sichtbare Verantwortung.` (plainTitle); `…eine Verantwortungserklärung…` (plainLead); `Die benannte Partei überträgt die Verantwortlichkeit nicht…` (meaningThreeBody)
- **English:** `Visible accountability.`; `…an accountability declaration…`; `The named party does not transfer accountability…`
- **Issue:** The specification body translates the distinct term "accountability" consistently as `Rechenschaftspflicht` (sections 2, 8, 20, 21, `end`), while `responsibility` is `Verantwortung`. In the chrome the same English word "accountability" is rendered three different ways — `Verantwortung` (plainTitle/plainLead) and `Verantwortlichkeit` (meaningThreeBody) — which blurs the deliberate responsibility/accountability distinction the spec keeps separate.
- **Suggested:** Prefer `Rechenschaftspflicht` for "accountability": plainTitle `Sichtbare Rechenschaftspflicht.`; plainLead `…eine Erklärung der Rechenschaftspflicht…`; meaningThreeBody `Die benannte Partei überträgt die Rechenschaftspflicht nicht auf ein KI-System oder dessen Anbieter.`
- **Severity:** LOW
- **Round 1:** carried forward (verified still present)

### Section 14 — code examples translated instead of kept as literal English (new in round 2)
- **Location:** `sections[14].body`, both `<pre><code>` blocks
- **Current:** `<pre><code>Verfasser: Eric Mourant +AI</code></pre>` and `<pre><code>Dieses Projekt verwendet +AI.</code></pre>`
- **English:** `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>`
- **Issue:** The master presents these as literal example strings (repository code), and the other translation files keep them byte-identical in English. Translating inside the code blocks diverges from the master's presentation; section 13 already localises the same labels as visible prose (`Verfasser: …`), so the code examples can safely stay English.
- **Suggested:** Restore `<pre><code>Author: Eric Mourant +AI</code></pre>` and `<pre><code>This project uses +AI.</code></pre>` (or consciously accept the localised versions project-wide).
- **Severity:** LOW
- **Round 1:** new in round 2

## Round 1 verification

- [x] plainBody pronoun `es` — still present, carried forward
- [x] accountability drift (plainTitle / plainLead / meaningThreeBody) — still present, carried forward
- [x] Section 14 title `Software` — still present; confirmed acceptable German loanword, no change required (moved from corrections to Notes)

## Notes

- Section 4 "case-sensitive" is correctly rendered (`Das Zeichen unterscheidet zwischen Groß- und Kleinschreibung.`).
- Section 5.4 keeps all five verbs (veröffentlicht, übermittelt, bereitgestellt, eingereicht, vorgelegt) plus "otherwise released"; Section 26 keeps accept/publish/transmit/deploy/release.
- `interfaceCopy.highlight` ("Highlight") is rendered `Akzent` ("accent"). Defensible in a UI colour context but slightly narrower than the source; a human speaker may prefer `Hervorhebung`/`Markierung`.
- `interfaceCopy.heroLead` renders "whose name carried this link" as `deren Name mit diesem Link versehen war` (passive reversal). Semantically equivalent; no correction needed.
- All five normative terms use a single rendering (`MUSS`/`DARF NICHT`/`SOLLTE`/`SOLLTE NICHT`/`KANN`) with English in parentheses at section 3 first definition, and plural inflections (`KÖNNEN`, `SOLLTEN`) are grammatical, not drift.
- Canonical slogan `KI hat geholfen. Ich übernehme die Verantwortung.` is byte-identical across documentTitle, heroTitle, sections 1/23/26 and `end`.
- Section 17 JSON keys, `+AI`, example names, and `data-company-example`/`data-json-example` attributes are all preserved byte-identical.
- All 26 sections present, numbered and ordered correctly; `status: "reviewed"`.
