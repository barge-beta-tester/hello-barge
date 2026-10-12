const test = require("node:test");
const assert = require("node:assert");
const { greet } = require("./greeting");

test("greets by name", () => {
  assert.equal(greet("Ada"), "Hello, Ada!");
});
