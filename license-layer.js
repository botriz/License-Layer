import { identity } from "suraya-global-intelligence-core/suraya-identity.js";
import { isLocked, isSavior } from "suraya-global-intelligence-core/suraya-lock.js";

export function checkLicense(domain) {
  const core = identity();

  if (isSavior()) {
    return {
      mode: "SAVIOR",
      domain,
      unlimited: true,
      note: "License unlocked by Savior."
    };
  }

  if (isLocked()) {
    return {
      mode: "LOCKED",
      domain,
      unlimited: false,
      note: "License locked by core."
    };
  }

  return {
    mode: "NORMAL",
    domain,
    unlimited: false,
    note: "License valid."
  };
}
