# spec.ar.js — Round 3 final correction recommendations

- **Language:** العربية (ar)
- **Master:** `spec.en.js` (normative English)
- **Review:** all 26 sections, `interfaceCopy`, `untranslatedNotice`, `endonym`, `end` — full re-check against the English master
- **Round 2:** `spec.ar-corrections-2.md` (0 high / 0 medium / 6 low) — all 6 items verified against the current file and confirmed applied
- **Verdict:** Clean, faithful translation; every round-2 item is now applied, all load-bearing invariants hold, and both round-3 correction items have now been applied to spec.ar.js.
- **Count:** 0 high / 0 medium / 2 low

## Corrections

### interfaceCopy.plainLead — "accountability declaration" rendered with "responsibility"
- **Location:** `interfaceCopy.plainLead`
- **Current:** `العلامة إعلان عن المسؤولية، وليست ادعاءً بأن الذكاء الاصطناعي هو المؤلف، ولا ضماناً بأن العمل صحيح.`
- **English:** `The mark is an accountability declaration, not a claim that AI is the author and not a guarantee that the work is correct.`
- **Issue:** "accountability declaration" is rendered `إعلان عن المسؤولية` (declaration of *responsibility*), conflating accountability (المساءلة) with responsibility (المسؤولية). Section 8 renders the identical phrase as `إعلان مساءلة`, and round 2 already corrected `plainTitle` to use `مساءلة`. This is the last remaining chrome spot where "accountability" is flattened into "responsibility".
- **Suggested:** `العلامة إعلان مساءلة، وليست ادعاءً بأن الذكاء الاصطناعي هو المؤلف، ولا ضماناً بأن العمل صحيح.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ar.js

### interfaceCopy.heroLead / meaningTwoBody — "release" narrowed to "publish"
- **Location:** `interfaceCopy.heroLead` (inside `<strong>…</strong>`) and `interfaceCopy.meaningTwoBody`
- **Current:** heroLead `…وهي تتحمل مسؤولية نشره.` · meaningTwoBody `اعتمد شخص أو مؤسسة النتيجة عن علم وقام بنشرها.`
- **English:** heroLead `…and they accept responsibility for releasing it.` · meaningTwoBody `A person or organisation knowingly adopted and released the result.`
- **Issue:** "release" is the umbrella verb (distinct from "publish") and is rendered `إطلاق` consistently across the body (sections 5.4, 5.6, 7, 9, 10, 24, 26). These two chrome strings render it `نشر` ("publish"), which narrows the meaning and breaks the publish/release distinction the spec explicitly draws in 5.4 and 26 (`نشر` = publish vs `إطلاق` = release).
- **Suggested:** heroLead `…وهي تتحمل مسؤولية إطلاقه.` · meaningTwoBody `اعتمد شخص أو مؤسسة النتيجة عن علم وقام بإطلاقها.`
- **Severity:** LOW
- **Round 2:** new in round 3
- **Status:** applied to spec.ar.js

## Round 2 verification

- [x] applied — Canonical slogan orthography: `ساعد الذكاء الاصطناعي. وأنا أتحمّل المسؤولية.` now byte-identical in `documentTitle`, `heroTitle`, sections 1/23/26 and `end`.
- [x] applied — `description` "محددة" → `مُسمَّاة` (named).
- [x] applied — `plainTitle` "مسؤولية" → `مساءلة` (accountability).
- [x] applied — `plainBody` "استخدامها" → `استخدامه (الذكاء الاصطناعي)`.
- [x] applied — `markLabel` "المعتمدة" → `القياسية`.
- [x] applied — `end` second string now `إثبات المصدر والمساءلة في العمل البشري-الاصطناعي`.

## Notes

- Normative terms are consistent everywhere and the header mapping table matches usage: MUST → `يجب`, MUST NOT → `يجب ألا`, SHOULD → `ينبغي`, SHOULD NOT → `ينبغي ألا`, MAY → `يجوز`. The particle `قد` appears only as a plain past-tense auxiliary ("has …"), never as a normative term, and lowercase "should" in section 24 is correctly rendered non-normatively as `يُفترَض`.
- Section 3 keeps all five English terms in parentheses; definitions match (absolute requirement / absolute prohibition / strong recommendation / normally-avoided practice / optional practice).
- Section 5.1 keeps all seven verbs and 5.4 keeps all six (published, transmitted, deployed, submitted, presented, otherwise released); 5.6 keeps "decision to release, use or represent"; `h4` labels 5.1–5.6 intact.
- List completeness: section 6 has 17 `<li>` items in the master (the brief said "21", but the master actually contains 17) and section 8 has 17 — all are present in Arabic, one-to-one and in order.
- Section 26 keeps the full declaration with accept/publish/transmit/deploy/otherwise release and "that decision"; section 24 keeps "both questions" and "yes".
- Load-bearing invariants verified byte-identical: `+AI` everywhere; section 4 counter-examples `+Ai`, `+aI`, `+ ai`, `AI+`, `AI assisted`; section 17 JSON keys/values (`provenance`, `ai_assistance`, `material`, `responsibility`, `human`, `responsible_party`, `notation`, `+AI`, `true`, `Eric Mourant`); `data-company-example` / `data-json-example` attributes; example names `Eric Mourant` and `JAPER Technology`; section numbering 1–26 in order.
- No Unicode bidi control characters; `{colour}` placeholder preserved in `colourChanged`; no unescaped backticks or `${` inside the template literals.
- `translationNote` is non-empty in Arabic while empty in English — acceptable, since English is the master and the field exists to carry a per-language note.
- "deploy" is rendered `نشر تشغيلي` (`أنشره تشغيليًّا` / `يُنشَر تشغيليًّا`) in 5.4 and 26, a standard Arabic rendering; noted as acceptable, not a correction.
- Honest limitation: my Arabic allows a close literal and structural comparison but not full native-speaker nuance. The two remaining findings are lexical-consistency issues; a native-speaker read of sections 3, 7 and 26 is still advisable before treating the file as final (as rounds 1 and 2 also recommended).
