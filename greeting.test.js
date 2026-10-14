const test = require("node:test");
const assert = require("node:assert");
const { greet, farewell } = require("./greeting");

test("greets by name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});

test("trims whitespace when greeting", () => {
  assert.equal(greet("  Ada  "), "Hello, Ada!");
});

test("farewells by name", () => {
  assert.equal(farewell("Ada"), "Goodbye, Ada!");
});

test("trims whitespace when farewelling", () => {
  assert.equal(farewell("  Ada  "), "Goodbye, Ada!");
});
