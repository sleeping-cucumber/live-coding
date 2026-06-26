# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run typecheck   # type-check without emitting
npm run build       # compile TypeScript to dist/
npm test            # run all tests once (vitest run)
```

To run a single test file:
```bash
npx vitest run src/index.test.ts
```

## Architecture

Minimal TypeScript library/demo project. All source lives in `src/`, compiled output goes to `dist/` (Commonjs, ES2020 target, strict mode).

CI (`.github/workflows/ci.yml`) runs typecheck → test → build on every push and PR using Node 22.
