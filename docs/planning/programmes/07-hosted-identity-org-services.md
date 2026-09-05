# Programme 7 — Hosted Identity and Organisation Services

> The optional account layer: profiles, subdomains, organisation workspaces,
> approval registers, automation, and compliance exports. All of it is hosted,
> all of it optional, and every service ships only with its static-first
> failure-mode statement published (Programme 8 rule). The free no-account
> path from Programmes 2–3 must be complete and untouched first.

- **Members (7):** hosted-profiles, named-subdomains-and-identity-bundles,
  organisation-profiles-and-policies, approved-tool-registers,
  organisation-workspaces, workflow-automation-services,
  evidence-and-compliance-exports
- **Agent requests:** [`07-hosted-identity-org-services/`](07-hosted-identity-org-services/) — brainstorm + one agent request per suggestion.
- **Effort:** 2 × M (approved-tool registers, evidence and compliance
  exports), 5 × L (hosted profiles, named subdomains, organisation profiles,
  workspaces, workflow automation)
- **Prerequisites:** Programme 2 spine (schema, lifecycle, proofs-of-control,
  visibility-and-consent); Programme 3 builder (the no-account path these
  services must never gate); Programme 4 registry (profiles reference it);
  Programme 8 (privacy, security, moderation, failure-mode statements)
- **Phase:** P3

## Mini-plans

### hosted-profiles — Hosted Profiles
- **Goal:** Optional stable public page collecting opted-in context (name/pseudonym, practice register, declarations, contact) without becoming a verdict.
- **Build:** public profile page + manage view; append-only edit history; export-then-remove departure; account recovery via codes/control proofs (no identity docs); free basic tier with unlisted default.
- **Needs:** portable-declaration-schema, declaration-lifecycle, ai-practice-register, visibility-and-consent, proofs-of-control, privacy-and-data-minimisation, moderation-disputes-and-appeals.
- **Must-nots:** profile optional — never required to use +AI or issue a declaration; no reputation/rank/trust score/verdict; no auto-created registry entry (separate consent); no identity docs.
- **Done when:** no-account declaration possible without profile; default unlisted; per-declaration statuses; pseudonym end-to-end.
- **Effort:** L. **Order:** first in this programme — profiles are the account primitive everything else builds on.

### organisation-profiles-and-policies — Organisation Profiles and Policies
- **Goal:** Public page disclosing an organisation's versioned AI policy, contacts, teams, practice register, artifact declarations — responsibility stays with named humans.
- **Build:** public profile + manage view with non-endorsement text; versioned policy-revision flow; role/representative change events; domain-control evidence display; member-consent listing and withdrawal.
- **Needs:** hosted-profiles, approved-tool-registers (the register it publishes), proofs-of-control (domain proof), visibility-and-consent, declaration-lifecycle.
- **Must-nots:** organisation never a sole signer — human responsibleParty required; no trust score/rank/verdict; domain not shown as controlled without a control proof.
- **Done when:** policy versioned; each declaration has a human signer; offboarded reps lose edit; member consent honoured.
- **Effort:** L. **Order:** after hosted-profiles; before workspaces (workspaces are its management backend).

### approved-tool-registers — Approved-Tool Registers
- **Goal:** Organisation's internal policy record of approved AI capabilities, purposes, data rules, owner, review date, retired policies — "approved" as an inspectable statement.
- **Build:** approval-register schema with exceptions and acknowledgements; role-based authoring via organisation workspaces (org-only default); redacted dated public snapshot; past-due review detection.
- **Needs:** claim-types, ai-practice-register, tool-taxonomy, organisation-profiles-and-policies, evidence-labels-not-trust-scores (how "approved" renders).
- **Must-nots:** approvals never carry `used-on-artifact`; default organisation-only, never publicly indexed; no ranking/endorsement of approved tools.
- **Done when:** local validates offline; entries carry owner/review/data rules; public = redacted dated snapshot.
- **Effort:** M. **Order:** schema early (it's free-floor-readable); workspace authoring with workspaces; public snapshot with org profiles.

### named-subdomains-and-identity-bundles — Named Subdomains and Identity Bundles
- **Goal:** Claimed memorable address (e.g. `name.plus-artificial-intelligence.org`) resolving to a declaration/profile — a paid convenience, never identity or rank.
- **Build:** subdomain claim/resolve/manage/lapse flow; published allocation rule + reserved-term list (shared with Programme 6's free message-bearing subdomains); IDN normalisation + homograph flagging; renewal/grace/tombstone; transfer-as-event; abuse/suspension route.
- **Needs:** url-semantics-and-canonicalization, hosted-profiles, continuity-and-namespace-custody, free-floor-covenant.
- **Must-nots:** address never presented as identity/endorsement/verification; no legal-name or identity proof to claim; no trust score/rank; never a prerequisite for declaring.
- **Done when:** address-not-identity label always shown; collision by rule; impersonation suspendable; lapse → tombstone with target intact.
- **Effort:** L. **Order:** after hosted-profiles; the free message-bearing variant (Programme 6) defines the shared label rules first.

### organisation-workspaces — Organisation Workspaces
- **Goal:** Optional private workspaces: teams, delegated roles, approvals, publication flows, SSO/SCIM, registers, retention, legal holds, audit history.
- **Build:** workspace service (tenant isolation, roles, approval queues, append-only audit log); exports (records + registers + history); offboarding; SSO/SCIM assessment-gated.
- **Needs:** static-first-service-architecture (its flagship consumer), organisation-profiles-and-policies, approved-tool-registers, visibility-and-consent, declaration-lifecycle (legal holds), privacy-and-data-minimisation, security-and-abuse-controls.
- **Must-nots:** workspaces optional — never a prerequisite for declaration validity; a named human signer's acceptance always required; absolute tenant isolation; SSO/SCIM optional and non-biometric.
- **Done when:** no-account path complete; signer acceptance required; isolation demonstrated; export + legal-hold; pilot evidence.
- **Effort:** L. **Order:** after org profiles; the heaviest build here.

### evidence-and-compliance-exports — Evidence and Compliance Exports
- **Goal:** Scheduled/on-demand audit-ready bundle of declarations, histories, evidence, policies, exceptions, retention — provable, never a certificate.
- **Build:** bundle assembly (scope + visibility filtering + redaction); signed, hash-pinned manifest; offline verification.
- **Needs:** portable-declaration-schema, declaration-lifecycle, proofs-of-control, evidence-labels-not-trust-scores, visibility-and-consent, organisation-workspaces.
- **Must-nots:** never certification/endorsement/trust score; `local` records never included; redaction uses `[redacted]` markers; payment never buys a more favourable record.
- **Done when:** manifest complete; offline-verifiable; scope-enforced; stale labelled; non-public role-gated.
- **Effort:** M. **Order:** after workspaces (it bundles workspace data).

### workflow-automation-services — Workflow Automation Services
- **Goal:** Paid automation conveniences (connectors, bulk ops, scheduled validation, reminders, webhooks, IdP links) that never change outcomes or lock in.
- **Build:** workflow service (least-privilege, bounded idempotent retries, append-only audit); customer-controlled deployment; signed rate-limited webhooks.
- **Needs:** approved-tool-registers (what workflows act on), verification-checker (scheduled validation), api-scale-and-reliability (webhooks), static-first-service-architecture.
- **Must-nots:** no consequential decision automated — a human reviewer always remains; payment never changes a substantive outcome or evidence label; the manual free path always performs the same action.
- **Done when:** every workflow cites pilot; human remains; exportable + customer-deployable; unmaintained flagged.
- **Effort:** L. **Order:** last — after workspaces, registers, and checker exist as its building blocks.

## Sequencing

1. hosted-profiles → 2. organisation-profiles-and-policies →
3. approved-tool-registers (schema early; authoring with 4) →
4. organisation-workspaces → 5. named-subdomains-and-identity-bundles (parallel with 3–4) →
6. evidence-and-compliance-exports → 7. workflow-automation-services.
Each ship is gated on its Programme 8 failure-mode statement and degraded-mode demonstration.

## Risks

- **Account gravity:** profiles/workspaces will be pressured to become prerequisites ("sign in to check"). Enforce at review: the no-account builder path must remain the documented primary path.
- **Tenant isolation:** the workspaces spec demands absolute isolation — that is a real security-engineering commitment, not a checkbox; budget for security review before pilots.
- **Recovery design:** code/control-proof recovery without identity docs has a known weak spot (lost everything); define the fallback honestly or organisations will demand identity verification that the specs forbid.
