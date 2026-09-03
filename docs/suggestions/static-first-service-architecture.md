# Static-First Service Architecture

## Suggestion

Keep the specification, translations, themes, schemas, builders, and offline
tools as a static commons; add deterministic public exports, then optional
hosted write services and integrations around that base.

## Before implementation

Define failure modes so the free layer, issued records, self-hosting, and public
verification remain useful if accounts, billing, or the live database disappear.
