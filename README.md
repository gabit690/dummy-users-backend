# Dummy users backend

A REST API providing dummy user data for demo applications. Built with Express and TypeScript, developed using TDD.

All data is fictional and generated for demo purposes only. Do not use in production.

## Stack

- [Express](https://expressjs.com/) – HTTP server and routing
- [TypeScript](https://www.typescriptlang.org/) – static typing
- [Jest](https://jestjs.io/) – test runner
- [Supertest](https://github.com/ladjs/supertest) – HTTP assertions for integration tests

## Getting started

### Prerequisites

- Node.js >= 24
- pnpm >= 12

### Installation

```bash
git clone <repo-url>
cd dummy-users-backend
pnpm install
pnpm run dev
```

## Project structure

```
src/
 ├── app.ts            # Express app setup (no listen, easy to test)
 ├── server.ts         # Entry point, starts the HTTP server
 ├── routes/           # Route definitions
 ├── controllers/      # Request/response handling
 ├── services/         # Business logic
 ├── data/             # Dummy users dataset
 ├── middlewares/      # Error handler, not found, etc.
 └── types/            # Shared TypeScript types
tests/
 ├── unit/             # Services, utils (no HTTP)
 └── integration/      # Endpoints via Supertest
```

## Workflow

- **Test Driven Development**: write a failing test, make it pass, refactor.
- **ESLint**: static analysis and code quality rules.
- **Prettier**: consistent code formatting.
- **Husky**: git hooks to run checks before committing/pushing.
- **Commitlint**: enforces [Conventional Commits](https://www.conventionalcommits.org/) (e.g. `feat: add user search`).

## Commands

### dev

Starts the server in watch mode.

```bash
pnpm dev
```

### test

Runs all tests (unit and integration).

```bash
pnpm test
```

### test:unit

Runs only unit tests.

```bash
pnpm test:unit
```

### test:int

Runs only integration tests (Supertest).

```bash
pnpm test:int
```

### lint

Runs ESLint over the codebase.

```bash
pnpm lint
```

### format

Formats all files with Prettier.

```bash
pnpm format
```

### format:check

Checks formatting without modifying files (useful for CI).

```bash
pnpm format:check
```

## License

MIT
