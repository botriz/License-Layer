/**
 * Deterministic license check. Entitlements must come from a trusted,
 * server-verified source; this module does not authenticate users or unlock itself.
 */
export function checkLicense(domain, { licensedDomains = [], locked = false } = {}) {
  if (typeof domain !== "string" || !domain.trim() || domain.length > 253) {
    throw new TypeError("A valid license domain is required.");
  }
  if (!Array.isArray(licensedDomains) || licensedDomains.some(value => typeof value !== "string")) {
    throw new TypeError("licensedDomains must be an array of strings.");
  }
  const normalizedDomain = domain.trim().toLowerCase();
  if (locked) {
    return { mode: "LOCKED", domain: normalizedDomain, valid: false, unlimited: false, note: "License access is blocked by policy." };
  }
  const valid = licensedDomains.some(value => value.trim().toLowerCase() === normalizedDomain);
  return {
    mode: valid ? "VALID" : "UNLICENSED",
    domain: normalizedDomain,
    valid,
    unlimited: false,
    note: valid ? "A matching entitlement was supplied by the caller." : "No matching entitlement was supplied."
  };
}
