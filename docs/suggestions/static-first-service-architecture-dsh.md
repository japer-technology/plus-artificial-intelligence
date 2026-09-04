# Static-First Service Architecture — Specification

> **Series:** `-dsh` expansion of the suggestion seed [`static-first-service-architecture.md`](static-first-service-architecture.md).
> **Catalogue group:** Safety, operations, research, and future scope.
> **Status:** Draft specification — designs and deepens the suggestion; not an implementation commitment and not part of the normative `+AI` meaning.

## 1. Purpose

This specification defines the architectural ordering rule for everything the
+AI project ships: the specification, translations, themes, schemas, builders,
and offline tools form a static commons; deterministic public exports are
published from it; and optional hosted write services and integrations are
added around that base — never instead of it, and never as a prerequisite. Its
purpose is to make the project's core promise survivable: if every account,
billing system, and database disappears tomorrow, the meaning of `+AI`, the
tools to use it, and the records already issued must remain fully usable.

## 2. Placement and boundaries

This specification sits in the "Safety, operations, research, and future
scope" group and owns the *layering and failure-mode rules*. It does not own
the individual layers: the commons is defined by its own specifications
(portable declaration schema, themes, builders, offline pack), exports by
public snapshots and API, and hosted services by the optional-service
specifications. Every optional-service specification MUST state how it
complies with this document. It honours the free-floor invariant by making the
commons layer permanently free and self-contained.

## 3. Terminology

- **Commons layer** — the static, file://-safe artifacts: specification,
  translations, themes, schemas, builders, checkers, offline tools.
- **Export layer** — deterministic, versioned, hash-pinned public data
  snapshots.
- **Service layer** — optional hosted write services and integrations.
- **Degraded mode** — the state after a service-layer failure, in which the
  commons and exports remain fully usable.
- **Dependency direction** — which layer may depend on which; the direction is
  strictly inward-to-outward.

## 4. Scope

### 4.1 In scope

- The three layers and their ordering.
- Dependency rules between layers.
- Failure-mode definitions and required behaviour per layer.
- Compliance statements for optional services.

### 4.2 Out of scope and deferred

- The design of any specific service (each has its own specification).
- Snapshot mechanics (public snapshots and API).
- Cost and capacity planning (cost discipline).

## 5. Specification

### 5.1 Design goals and principles

1. **The commons is the project.** Everything else is optional.
2. **One-way dependencies.** Services depend on the commons; the commons never
   depends on a service.
3. **Failure is designed, not feared.** Each layer defines what still works
   when the layer above it is gone.
4. **Exports are the bridge.** Services may add data, but public knowledge
   flows through the export layer, not through live systems.

### 5.2 Normative requirements

1. Every commons artifact MUST open from disk (`file://`) with no build step,
   no fetch, and no account (the existing theme contract remains binding).
2. The commons layer MUST NOT contain any code path whose function requires a
   hosted service; optional-service integration points MUST degrade to a
   clearly labelled offline state.
3. The export layer MUST be produced deterministically from the commons plus
   service-layer state, per public snapshots and API, so exports remain
   regenerable and mirrorable.
4. Hosted write services MUST treat the export layer as their publication
   mechanism: no service may be the only place a public record can be read.
5. Every optional service MUST publish a failure-mode statement covering: what
   remains usable if the service stops (degraded mode), how data is exported,
   and the notice period for shutdown.
6. If the live database disappears, the latest published snapshots MUST remain
   sufficient to: read every public declaration, verify statuses as of the
   snapshot, and rebuild a read-only replacement service.
7. If billing stops working, no previously issued public record may become
   unreadable; a paid feature's loss MUST NOT revoke or hide declarations.
8. Accounts and services MAY add convenience, but no commons capability
   (building, checking, self-hosting) may be removed from the commons to make
   room for a paid version.
9. Integrations MUST consume the commons or exports through published,
   versioned interfaces, never through private service internals.
10. A new hosted service MAY ship only after its failure-mode statement is
    published and its degraded mode is demonstrated in the offline pack.

### 5.3 Data model

```
{
  "service": "name",
  "layer": "service",
  "dependsOn": [ "commons artifacts..." ],
  "publishesVia": "export layer",
  "failureMode": {
    "degradesTo": "offline state description",
    "export": "export format and path",
    "shutdownNotice": "period"
  }
}
```

### 5.4 Interfaces and behaviours

- Commons artifacts expose the shared hooks contract (translation hooks,
  identifiers, data-* keys) that tools like the conformance linter check.
- Services read and write through the snapshot pipeline; direct
  database-to-public paths are prohibited.
- Degraded states render explicit labels ("offline mode — hosted checks
  unavailable") rather than failing silently.

### 5.5 Lifecycle and operational rules

- Wind-down of any service follows the export-first rule: a final export is
  published before shutdown, per continuity and namespace custody.
- Architecture reviews accompany major service additions; the review records
  the dependency direction and the degraded-mode demonstration.

## 6. Free floor, red lines, and invariants

This specification operationalises the free floor at the architecture level:
the commons is the free, permanent core, and no paid service may be inserted
between a person and the mark's meaning. It enforces the static-first
invariant from the core extensions, the no-silent-change invariant through
versioned exports, and the red lines by ensuring that payment, accounts, and
service outages can never gate or alter a declaration's public record.

## 7. Relationships to sibling specifications

- [Public snapshots and API](public-snapshots-and-api-dsh.md) implements the
  export layer defined here.
- [Offline and self-hosting pack](offline-and-self-hosting-pack-dsh.md) is the
  distributable form of the commons layer.
- [Generator pipeline](generator-pipeline-dsh.md) and [Theme engine and
  packs](theme-engine-and-packs-dsh.md) build commons artifacts.
- [Managed hosting and domains](managed-hosting-and-domains-dsh.md), [API scale
  and reliability](api-scale-and-reliability-dsh.md), and every optional-service
  specification must state compliance with this document.
- [Cost discipline](cost-discipline-dsh.md) plans the cost of each layer.
- [Continuity and namespace custody](continuity-and-namespace-custody-dsh.md)
  owns wind-down and final exports.
- [Federation and mirrors](federation-and-mirrors-dsh.md) consumes the export
  layer.

## 8. Resolution of the seed's "before implementation" concerns

- **Failure modes so the free layer stays useful** — section 5.2 items 1-3 and
  6: commons opens from disk; exports regenerate; snapshots suffice for
  reading and verifying.
- **Issued records remain useful** — section 5.2 items 6-7: records stay
  readable and revocable-status-visible without the live database or billing.
- **Self-hosting stays useful** — section 5.2 items 2 and 6: the offline pack
  and snapshots support self-hosted reads.
- **Public verification stays useful** — section 5.2 item 6: statuses as of
  the latest snapshot remain checkable.

## 9. Acceptance criteria

1. Every commons artifact opens from disk with no fetch and no build step.
2. Killing the live database leaves all public declarations readable from the
   latest snapshot.
3. Stopping billing does not hide or revoke any issued public record.
4. Every optional service publishes a failure-mode statement before launch.
5. No commons capability exists only in a paid form.
6. Integrations use published versioned interfaces, not service internals.
7. A service wind-down publishes its final export before shutdown.
8. Degraded modes render explicit offline labels.

## 10. Open questions

- The minimum demonstrated degraded-mode evidence required at service review.
- Whether the export pipeline itself should be reproducible by third parties
  (independent regeneration), and how.
