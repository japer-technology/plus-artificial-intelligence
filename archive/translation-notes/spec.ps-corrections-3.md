# spec.ps.js — Round 3 final correction recommendations

- **Language:** پښتو (ps)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.ps-corrections-2.md` (0 high / 1 medium / 7 low) — status of each item verified against the current file
- **Verdict:** Clean and faithful translation; all load-bearing invariants hold, every round-2 substantive fix was applied, and both round-3 consistency points have now been applied to the file.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### markLabel still conflates "canonical" with "standard"
- **Location:** `interfaceCopy.markLabel`
- **Current:** `معياري نښه`
- **English:** `Canonical mark`
- **Issue:** Round 2 recommended separating "canonical" (رسمي) from "standard" (معیار). The translator applied this everywhere in the section bodies — section titles 4/23/26 and every in-body "canonical" now use `رسمي` (e.g. `رسمي نښه`, `رسمي عامه تشرېح`, `رسمي اعلان`), while "standard" keeps `معیار` — but the `markLabel` string was left as `معياري نښه` ("standard mark"). This is now inconsistent with the rest of the document, where the same English word "canonical" is `رسمي`.
- **Suggested:** `رسمي نښه`
- **Severity:** LOW
- **Round 2:** carried forward (partially applied — bodies fixed, this key left)
- **Status:** applied to spec.ps.js

### "analysing" (Section 5.1) still rendered with the research root
- **Location:** `sections[5].body`, the 5.1 paragraph
- **Current:** `مصنوعي ځیرکتیا د اړوند اثر په جوړولو، څېړلو، بدلولو، زېږولو، ارزولو، جوړښت ورکولو یا وړاندې کولو کې جوهري مرسته کړې ده.`
- **English:** `Artificial intelligence materially assisted in creating, analysing, transforming, generating, evaluating, structuring or presenting the associated artifact.`
- **Issue:** Round 2 corrected the noun "analysis" in Section 6 from `څېړنه` to `تحلیل` (and `interfaceCopy.meaningOneBody` already used `تحلیل` for "analyse"). But the verb "analysing" here in 5.1 is still `څېړلو` — the verb of the same "research/investigate" root round 2 flagged. All other verbs in the sentence are preserved correctly; only this one drifts from the chosen terminology. `څېړل` is not strictly wrong for "analyse", but it is inconsistent with `تحلیل` used elsewhere for the same English term.
- **Suggested:** `مصنوعي ځیرکتیا د اړوند اثر په جوړولو، تحلیل، بدلولو، زېږولو، ارزولو، جوړښت ورکولو یا وړاندې کولو کې جوهري مرسته کړې ده.`
- **Severity:** LOW
- **Round 2:** new in round 3 (verb counterpart of the round-2 "analysis" fix)
- **Status:** applied to spec.ps.js

## Round 2 verification

- [x] Section 19 title `خپله کارونه` → `خلاصه کارونه` — applied
- [x] "material/materially" two renderings → interface now uses `جوهري` (description, heroLead, plainBody) — applied
- [x] Section 2 title `د جوړښت بنسټ` → `د ډیزاین اصل` — applied
- [x] Section 2 "does not attempt to determine" → `هڅه نه کوي چې وټاکي` — applied
- [x] Section 6 "analysis" `څېړنه` → `تحلیل` — applied (but see the 5.1 verb finding above)
- [x] Section 17 `ماناییزه مانا` → `معنايي مانا` — applied
- [ ] canonical/standard conflation — partially applied: bodies use `رسمي` for canonical, `معیار` for standard, but `markLabel` is still `معياري نښه` (carried forward above)
- [x] Section 7 "substantially generated" `په لویه کچه` → `په جوهري توګه` — applied

## Notes

- Canonical slogan `مصنوعي ځیرکتیا مرسته وکړه. زه مسؤليت منم.` is verbatim in `documentTitle` (after the `+AI — ` prefix), `heroTitle`, sections 1/23/26, and the `end` panel; `heroLead`'s `<strong>…</strong>` uses matching wording (`جوهري مرسته کړې … مسؤليت مني`).
- Section 3 defines the five normative terms with English parentheticals (`لازم دي (MUST)`, `منع دي (MUST NOT)`, `ښه ده چې (SHOULD)`, `ښه نه ده چې (SHOULD NOT)`, `اجازه ده (MAY)`) and uses these same forms consistently across all 26 sections and the chrome; the file header mapping table matches actual usage.
- Load-bearing invariants verified byte-identical: `+AI` everywhere; Section 4 counter-example line (`+Ai &nbsp; +aI &nbsp; + ai &nbsp; AI+ &nbsp; AI assisted`); Section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `responsible_party`, `notation`, `+AI`, `true`, `human`, `Eric Mourant`); example names `Eric Mourant` and `JAPER Technology`; `data-company-example` and `data-json-example` attributes; section numbering 1–26 and `h4` labels 5.1–5.6.
- Section 5.4 preserves all verbs (خپور، لېږدول، پلی، سپارل، وړاندې یا په بله بڼه راوړاندې شي) and 5.6 keeps "decision to release, use or represent" (د راوړاندې کولو، کارولو یا ښودلو د پرېکړې). Section 6 has all 17 list items; Section 8 has all 17 list items; Section 9 renders "word-by-word or element-by-element" (`کلمه په کلمه یا توکی په توکی`) and "meaningful human act of adoption" (`ماناداره منل`). Section 24 renders "both questions" (`دواړو پوښتنو`) and "yes" (`هو`). Section 26 keeps the full declaration with accept/publish/transmit/deploy/otherwise release and "that decision" (`د هغې پرېکړې`).
- `translationNote` carries an added Pashto sentence explaining that the English text is normative; the English master's `translationNote` is empty. This is an acceptable localisation addition and not an error.
- No unescaped backticks or `${` inside template literals; no Unicode bidi control characters; tags kept in logical order (the page sets `dir="rtl"`). Quotes use `«…»` in place of English curly quotes, consistent with RTL typography.
- My Pashto proficiency is limited: I verified structure, invariants, term consistency, item counts, and slogan byte-identity confidently, and I checked the round-2 vocabulary items by root/lemma, but word-level nuance (e.g. `خپور کړی` for "Issued by" in Section 13, or `ضمني` for "incidental" in Section 6) is a native-speaker call I cannot make with certainty. Both carried forward as acceptable, per round 2's own note.
