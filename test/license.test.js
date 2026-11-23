import test from "node:test";
import assert from "node:assert/strict";
import { checkLicense } from "../license-layer.js";

test("no entitlement means unlicensed", () => {
  const result = checkLicense("example.com");
  assert.equal(result.valid, false);
  assert.equal(result.mode, "UNLICENSED");
  assert.equal(result.unlimited, false);
});

test("matching explicit entitlement validates normalized domain", () => {
  const result = checkLicense("Example.COM", { licensedDomains: ["example.com"] });
  assert.equal(result.valid, true);
  assert.equal(result.mode, "VALID");
  assert.equal(result.unlimited, false);
});

test("locked policy overrides entitlement", () => {
  const result = checkLicense("example.com", { licensedDomains: ["example.com"], locked: true });
  assert.equal(result.valid, false);
  assert.equal(result.mode, "LOCKED");
});

test("invalid domains and entitlement inputs are rejected", () => {
  assert.throws(() => checkLicense(" "), TypeError);
  assert.throws(() => checkLicense("example.com", { licensedDomains: "example.com" }), TypeError);
});
