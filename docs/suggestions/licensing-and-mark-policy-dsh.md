# Licensing and Mark Policy — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`licensing-and-mark-policy.md`](licensing-and-mark-policy.md).
> **Catalogue group:** Human layer and governance.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose
This specification assigns an explicit licence to every asset class the project publishes — code, specification text, translations, themes, schemas, and public registry data — and defines contribution terms plus a policy for the project name and visual identity. Its aim is to keep the commons freely reusable while reserving only what is needed to stop false endorsement, false certification, and exclusive-ownership claims over the notation.

## 2. Placement and boundaries
Licensing is the legal instrument that makes the Free-Floor Covenant durable, so this specification implements the covenant rather than replacing it. It is bounded in two directions: the notation `+AI` is not the project's property and is not licensed, so the mark policy here governs only the project's own name and visual identity; and the specification text's normative meaning is protected by versioning, not by restricting quoting. Legal review is a precondition (see 8), and the policy must be revisited if any licence text is adopted without it.

## 3. Terminology
- **Asset class** — a kind of published material with a uniform licence (code, spec text, translations, themes, schemas, registry data).
- **Mark policy** — the rules governing use of the project name and visual identity.
- **False endorsement** — implying the project endorses a party, product, or claim it has not.
- **False certification** — implying the mark or project certifies compliance or quality.
- **Contribution terms** — the inbound conditions under which contributed work is accepted.

## 4. Scope
### 4.1 In scope
- Licence selection per asset class.
- Contribution terms for code, text, translation, theme, and schema contributions.
- The mark policy for the project name and visual identity.
- Rules separating genuine use of the notation from use of the project's own marks.

### 4.2 Out of scope and deferred
- The free-floor enumeration itself (owned by the free-floor covenant).
- Governance of who may change a licence (owned by governance and stewardship).
- Specification-version hashing (owned by specification versioning and hashing).
- Legal advice; this specification records policy, it does not constitute legal advice.

## 5. Specification
### 5.1 Design goals and principles
Choose widely-understood licences, not bespoke ones. Keep the normative meaning quotable and mirrorable. Restrict only what is necessary to prevent a third party from passing off the project's identity as its own or from turning the notation into a gated certification scheme.

### 5.2 Normative requirements
1. Code MUST be published under a recognised free/open-source licence that permits use, modification, and redistribution, including for commercial hosting.
2. Specification text and reviewed translations MUST be published under a licence that permits verbatim and derived redistribution with attribution and that preserves the normative wording's integrity, while remaining file://-safe and mirrorable.
3. Themes and visual assets MAY carry a permissive licence, but a theme MUST state its licence and MUST NOT claim to alter normative meaning.
4. Schemas and machine-readable formats MUST be published under a permissive licence permitting tooling use without fee.
5. Public registry data MUST carry an explicit data licence that permits reuse, mirroring, and federation, with attribution to the opt-in parties as appropriate and no claim of accuracy.
6. The project MUST adopt a single inbound contribution policy, applied uniformly, stating that contributors retain ownership and license their contribution under the same outbound licence (inbound-equals-outbound); any contributor-licence agreement MUST NOT transfer copyright to the project.
7. The mark policy MUST govern the project name and visual identity only, and MUST state explicitly that it grants no rights over, and claims no ownership of, the `+AI` notation, which anyone may use without permission.
8. The mark policy MUST permit descriptive, non-misleading uses of the project name (for example "this page follows the +AI project's specification") and MUST prohibit uses that imply endorsement, certification, partnership, or official status that does not exist.
9. The mark policy MUST forbid presenting the `+AI` mark or the project name as a certification, quality, compliance, or trust mark, and MUST require that any badge or certificate reference a live declaration record rather than asserting a verdict (see certificates, badges, and QR).
10. The project MUST obtain legal review of the selected licences, the contribution policy, and the mark policy before they are relied upon; until review completes, the documents are drafts and MUST be labelled as such.
11. The licence and mark policy MUST be versioned and published in the changelog; changing a licence MUST be treated as a governed change with notice, not a silent repository edit.

### 5.3 Data model
A licence manifest maps each asset class to its licence identifier and canonical text URL, plus the contribution-policy version and mark-policy version, so tools can embed the correct attribution and so the offline pack carries complete notices.

### 5.4 Interfaces and behaviours
Every downloadable archive and offline pack MUST include the licence manifest and the full text of every licence it redistributes. Generated pages MUST carry the applicable attribution derived from the manifest, never hand-written.

### 5.5 Lifecycle and operational rules
Licence changes require governance approval, public notice, a changelog entry, and re-publication of affected assets with updated notices. Previously published versions of assets remain under the licence in force at publication; a licence change does not retroactively relicense them.

## 6. Free floor, red lines, and invariants
Licensing is how the free floor is made legally durable, so this specification must never license away the no-account path or the free use of the notation. The mark policy must reject, by name, any use that constitutes false endorsement or certification (a red line) and must never impose mandatory registration, payment, or identity as a condition of using the notation. Free genuine use of the mark stays free; only the project's own name and logo are reserved, and only against misrepresentation.

## 7. Relationships to sibling specifications
- [Free-Floor Covenant](free-floor-covenant-dsh.md) — the promise this policy makes legally enforceable.
- [Public Usage Guidelines](public-usage-guidelines-dsh.md) — the non-enforceable guidance that this policy's mark rules sit beside.
- [Governance and Stewardship](governance-and-stewardship-dsh.md) — owns approval of licence changes and their notice.
- [Specification Versioning and Hashing](specification-versioning-and-hashing-dsh.md) — pins assets to the meaning in force at publication.
- [Translation Governance](translation-governance-dsh.md) — the licensing of reviewed translations.
- [Offline and Self-Hosting Pack](offline-and-self-hosting-pack-dsh.md) — carries the licence manifest and full texts.
- [Certificates, Badges, and QR](certificates-badges-and-qr-dsh.md) — the anti-certification rule this policy enforces on badge usage.

## 8. Resolution of the seed's "before implementation" concerns
- **Obtain appropriate legal review** — resolved in 5.2 item 10 and 5.5: review is a precondition, drafts labelled until done.
- **Preserve free genuine use** — resolved in 5.2 items 1–5, 7, and section 6: the notation and commons stay free.
- **Prevent false endorsement** — resolved in 5.2 item 8: descriptive use permitted, endorsement-like use prohibited.
- **Prevent false certification** — resolved in 5.2 item 9: no certification framing; badges reference live records.
- **Prevent exclusive ownership claims** — resolved in 5.2 item 7 and section 2: the notation is not owned or licensed.

## 9. Acceptance criteria
1. Each asset class has an explicit, recognised licence in a published manifest.
2. Specification text and translations are mirrorable and quotable with attribution.
3. Public registry data carries a data licence permitting reuse and mirroring.
4. A single inbound-equals-outbound contribution policy is adopted and applied uniformly.
5. The mark policy governs only the project name and visual identity, not the notation.
6. The mark policy explicitly forbids endorsement, certification, and trust-mark framing.
7. Legal review has been obtained, or the documents are clearly labelled as draft pending review.
8. The offline pack includes the licence manifest and full licence texts.
9. Licence changes are versioned, governed, announced, and never retroactive.
10. A contributor can determine the correct licence and attribution for any asset from the manifest alone.

## 10. Open questions
- The specific licence identifiers (for example which permissive code licence and which data licence) are undecided pending legal review.
- Whether registry data requires a dedicated sui generis statement in addition to a standard data licence is undecided.
