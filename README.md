# Suraya License Layer

A deterministic license-entitlement check. This is a library module, not an authentication server, billing system, or license authority.

## API

`checkLicense(domain, { licensedDomains, locked })`

- Requires an explicit entitlement list supplied by a trusted caller.
- Fails closed when `locked: true`.
- Never grants unlimited access or a privileged bypass mode.
- Normalizes domain casing and rejects invalid input.

The caller must obtain and validate entitlements server-side. Never trust a list supplied by an untrusted browser client.

## Validation

```bash
npm test
```
