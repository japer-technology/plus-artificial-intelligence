# Security and Abuse Controls — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`security-and-abuse-controls.md`](security-and-abuse-controls.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the security and abuse controls for every hosted
+AI surface: accounts, user-authored text, links, registries, mail services,
uploads, APIs, and verification fetches. Its purpose is to make the project's
public surfaces safe to trust — protected against takeover, injection,
phishing, spam, scraping, malware, denial of service, and internal-network
access — while preserving the free, no-account, static-first character of the
commons.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and owns *threat modelling and technical controls*. It does not
own policy decisions about what is prohibited (see [Moderation, disputes, and
appeals](moderation-disputes-and-appeals-dsh.md)), the privacy rules for stored
data (see [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md)),
or the fetch policy of the checker (see [Verification
checker](verification-checker-dsh.md), which repeats these rules as
checker-specific requirements). Every hosted service MUST complete a threat
model against this document before launch.

## 3. Terminology

- **Threat model** — the documented analysis of a service's assets, attackers,
  and controls.
- **SSRF** — server-side request forgery via fetches the server performs.
- **Output encoding** — context-correct escaping of user content at render
  time.
- **Recovery** — the process for regaining access to a compromised account or
  service.
- **Internal-network access** — reachability of private infrastructure from
  public functions.

## 4. Scope

### 4.1 In scope

- The threat-modelling requirement per service.
- Authentication, authorization, and recovery controls.
- Output encoding, CSP, and URL policy.
- Network isolation and SSRF protection.
- Rate limits and anti-scraping posture.
- Incident response obligations.

### 4.2 Out of scope and deferred

- Prohibited-content policy (moderation, disputes, and appeals).
- The checker's specific fetch rules (verification checker).
- Key custody for project signing (continuity and namespace custody).

## 5. Specification

### 5.1 Design goals and principles

1. **Threat-model first.** Controls follow analysis; no service ships without
   both.
2. **Least privilege.** Every component holds only the permissions its
   function needs.
3. **Fail closed.** Suspicion degrades to refusal with a clear message, never
   to silent acceptance.
4. **Recovery without data loss.** A compromised account is restored, not
   deleted.
5. **Static default.** Where a feature can be static, it is static — the
   safest surface is the one with no server.

### 5.2 Normative requirements

1. Every hosted service MUST publish a threat model covering its assets,
   assumed attackers, and the controls in this section before public launch,
   and MUST update it on material change.
2. Authentication MUST offer strong second factors without requiring
   biometrics (red line); recovery MUST use documented, rate-limited flows
   that do not allow account takeover via public data.
3. Authorization MUST be enforced server-side; client-side checks are
   presentation only; role changes MUST take effect immediately, including
   revocation of active sessions.
4. User-authored text MUST be output-encoded at render time in every surface;
   stored content MUST NOT be executed; rich formatting MUST use an allowlist.
5. All pages MUST set a strict Content-Security-Policy appropriate to the
   surface; inline scripts MUST be minimised and justified.
6. Link handling MUST follow a published URL policy: protocol allowlists
   (https, mailto), visible destinations, redirect validation, and rel
   attributes where applicable.
7. Uploads MUST be type- and size-limited, stored outside executable paths,
   scanned, and served from a separate origin with restrictive headers.
8. Verification fetches and any server-side fetches MUST enforce SSRF
   protection: validated and resolved targets, denied private and link-local
   ranges, bounded redirects, size and time caps (see verification checker).
9. Rate limits MUST be defined per surface (authentication, submissions,
   fetches, API reads) and published; abuse handling MUST distinguish
   automation from legitimate bursts. This document owns the default rate
   limits for all hosted surfaces; API scale and reliability owns volume
   quotas and paid tiers, and cost discipline informs the numbers, which
   MUST be published here once set operationally.
10. Internal-network access MUST be denied from public functions; hosted
    components MUST be isolated so a compromise of one service cannot reach
    the others or the key material.
11. Scraping resistance MUST rely on rate limits and terms, never on covert
    tracking or fingerprinting (red lines).
12. Incidents MUST follow a documented response process: containment,
    notification to affected parties, public disclosure, and a post-incident
    record in the changelog; security reports must have a no-account contact
    route (see contact routes).
13. Dependencies MUST be kept patchable; known-vulnerable dependencies MUST
    block release.

### 5.3 Data model

Threat model record:

```
{
  "service": "name",
  "assets": [ "..." ],
  "attackers": [ "spammer", "scraper", "impersonator", "insider", "..." ],
  "controls": [ "reference to the 5.2 items applied" ],
  "reviewed": "ISO-8601",
  "nextReview": "ISO-8601"
}
```

### 5.4 Interfaces and behaviours

- Security headers and URL policy are machine-checkable; the conformance
  linter for hosted surfaces checks the basics.
- Login, recovery, and report flows render their rate-limit states in plain
  language.

### 5.5 Lifecycle and operational rules

- Threat models are living documents reviewed on a fixed cadence and on
  material change.
- Incident records are retained per the published retention schedule and
  summarised in transparency reporting.
- Service wind-down includes credential revocation and export of user data per
  continuity and namespace custody.

## 6. Free floor, red lines, and invariants

Security is not a paid tier: baseline protections apply to every surface,
including the free no-account paths. The biometric and tracking red lines
bound authentication and anti-scraping designs above. Static-first is itself a
security control — the commons' attack surface is a file, not a server — and
this specification protects that property rather than eroding it.

## 7. Relationships to sibling specifications

- [Verification checker](verification-checker-dsh.md) repeats the SSRF and
  rate-limit rules as checker-specific requirements.
- [Moderation, disputes, and appeals](moderation-disputes-and-appeals-dsh.md)
  owns the policy side of abuse handling.
- [Privacy and data minimisation](privacy-and-data-minimisation-dsh.md) owns
  retention and deletion of incident and report data.
- [Contact routes](contact-routes-dsh.md) owns the no-account security
  reporting channel.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md)
  owns key custody and wind-down.
- [Public snapshots and API](public-snapshots-and-api-dsh.md) applies the API
  rate-limit rules.
- [Managed hosting and domains](managed-hosting-and-domains-dsh.md) and every
  hosted service must complete threat models against this document.
- [Conformance linter](conformance-linter-dsh.md) checks the static surfaces'
  headers and hooks.

## 8. Resolution of the seed's "before implementation" concerns

- **Threat-model each service** — section 5.2 item 1 and 5.3: published,
  cadenced threat models.
- **Authentication** — section 5.2 item 2: second factors, no biometrics,
  rate-limited recovery.
- **Authorization** — section 5.2 item 3: server-side enforcement, immediate
  revocation.
- **Output encoding** — section 5.2 item 4: render-time encoding, allowlist
  formatting.
- **CSP** — section 5.2 item 5: strict policies per surface.
- **URL policy** — section 5.2 item 6: allowlists, visible destinations,
  redirect validation.
- **Network isolation** — section 5.2 item 10: component isolation, no
  internal reachability from public functions.
- **Rate limits** — section 5.2 item 9: per-surface published limits.
- **Recovery** — section 5.2 item 2: takeover-resistant recovery.
- **Response** — section 5.2 item 12: documented incident process with
  disclosure.

## 9. Acceptance criteria

1. Every hosted service publishes a threat model before launch.
2. No surface accepts a login without a non-biometric second-factor option.
3. Injected markup in user text renders inert in every surface.
4. Every page serves a strict CSP and enforces the URL allowlist.
5. A checker fetch targeting a private address is refused.
6. Uploaded files are never served from an executable path.
7. Revoking a role terminates active sessions immediately.
8. A security report can be filed without an account and receives a
   documented response.
9. A known-vulnerable dependency blocks release.

## 10. Open questions

- The default rate-limit numbers per surface (jointly with cost discipline
  and API scale and reliability).
- Whether hosted surfaces should publish their CSP as part of per-theme
  conformance notes or a separate security page.
