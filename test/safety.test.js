import test from "node:test";
import assert from "node:assert/strict";
import { checkLicense } from "../license-layer.js";
test("license layer fails closed and never declares an unverified license valid", () => {
  const result = checkLicense("example.com");
  assert.equal(result.valid, false);
  assert.equal(result.status, "unverified");
  assert.equal(result.domain, "example.com");
});
