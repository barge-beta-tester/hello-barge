function greet(name) {
  if (typeof name !== "string" || name.trim() === "") {
    return "Hello, world!";
  }
  return `Hello, ${name.trim()}!`;
}

module.exports = { greet };
