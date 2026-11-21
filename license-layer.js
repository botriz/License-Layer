export function checkLicense(domain) {
  return {
    mode: "UNVERIFIED",
    status: "unverified",
    valid: false,
    domain: typeof domain === "string" ? domain.trim().slice(0, 253) : null,
    reason: "LICENSE_VERIFICATION_NOT_IMPLEMENTED",
    note: "No license is considered valid until a signed entitlement and server-side verification are implemented."
  };
}
