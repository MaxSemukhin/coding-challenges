# Coding Challenges

Practical solutions to coding challenges and interview-style problems in JavaScript/TypeScript, with clean code, edge cases, and brief notes on approach.

The goal of this repository is to practice problem solving while following best practices, including type safety, readability, and performance optimization.

## Solved Challenges (`src/`)

- `first-unique-string.ts` - Return the first non-repeating string in an array.
- `longest-common-prefix.ts` - Find the longest prefix shared by all strings in an array.
- `longest-prefix.ts` - Find the longest prefix shared by at least two strings.
- `remove-duplicates.ts` - Remove duplicate strings while preserving original order.
- `valid-anagram.ts` - Check whether two strings are valid anagrams.

## Tech Stack

- TypeScript (Node.js)
- `pnpm` for package management
- ESLint + Prettier for code quality/formatting

## Getting Started

```bash
pnpm install
```

## Run a Challenge

Each file in `src/` is a standalone example with sample input and `console.log(...)` output.

Use Node to run any challenge file directly:

```bash
node src/valid-anagram.ts
```

## Verify / Cleanup

Run formatting, linting, dependency checks, and audit:

```bash
pnpm verify
```
