const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("./greeting");

test("greets by name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("trims surrounding whitespace", () => {
  assert.equal(greet("  Ada  "), "Hello, Ada!");
});

test("returns Hello, world! for empty string", () => {
  assert.equal(greet(""), "Hello, world!");
});

test("returns Hello, world! for whitespace-only string", () => {
  assert.equal(greet("  \t\n  "), "Hello, world!");
});

test("returns Hello, world! for undefined", () => {
  assert.equal(greet(), "Hello, world!");
  assert.equal(greet(undefined), "Hello, world!");
});

test("returns Hello, world! for null", () => {
  assert.equal(greet(null), "Hello, world!");
});

test("returns Hello, world! for non-string values", () => {
  assert.equal(greet(42), "Hello, world!");
  assert.equal(greet(true), "Hello, world!");
  assert.equal(greet({ name: "Ada" }), "Hello, world!");
  assert.equal(greet(["Ada"]), "Hello, world!");
});

test("preserves internal whitespace and letter case", () => {
  assert.equal(greet("ada lovelace"), "Hello, ada lovelace!");
});

test("greets Unicode names", () => {
  assert.equal(greet("Renée"), "Hello, Renée!");
});
