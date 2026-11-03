# hello-barge

`hello-barge` is a small, dependency-free CommonJS module for creating a
friendly greeting. It greets a supplied name, removes whitespace around that
name, and falls back to `Hello, world!` when the input is missing or is not a
non-empty string.

## Requirements

- [Node.js](https://nodejs.org/) 18 or later (the tests use the built-in
  `node:test` runner)

The project has no runtime or development dependencies, so there is no package
installation step.

## Getting started

Clone or download the repository, change into its directory, and import the
function from `greeting.js`:

```js
const { greet } = require("./greeting");

console.log(greet("Ada"));
// Hello, Ada!
```

Run the example with Node.js after saving it in the project directory:

```sh
node example.js
```

## API

### `greet(name)`

Returns a greeting as a string.

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| `name` | `string` | No | Name to include in the greeting. Leading and trailing whitespace is removed. |

When `name` is a non-empty string, the return value has the form
`Hello, <name>!`. Internal whitespace and letter case are preserved.

```js
greet("Grace Hopper");   // "Hello, Grace Hopper!"
greet("  Renée  ");     // "Hello, Renée!"
greet("ada lovelace");  // "Hello, ada lovelace!"
```

The function returns `Hello, world!` when:

- no argument is supplied;
- the value is `undefined` or `null`;
- the value is an empty or whitespace-only string; or
- the value is not a string, such as a number, boolean, object, or array.

```js
greet();             // "Hello, world!"
greet("   ");        // "Hello, world!"
greet(42);           // "Hello, world!"
greet({ name: "Ada" }); // "Hello, world!"
```

The function does not coerce non-string values into strings and does not alter
Unicode characters.

## Running the tests

Use the repository's validation command:

```sh
node --test greeting.test.js
```

The test suite covers named greetings, surrounding whitespace, fallback input
types, preservation of internal whitespace and case, and Unicode names. A
successful run reports nine passing tests and no failures.

## Project structure

```text
.
├── greeting.js       # Greeting implementation and CommonJS export
├── greeting.test.js  # Tests using Node.js's built-in test runner
└── README.md         # Project documentation
```
