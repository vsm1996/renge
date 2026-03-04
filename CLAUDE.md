# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

This is a pnpm monorepo managed with Turborepo. Run commands from the root.

```bash
# Install dependencies
pnpm install

# Build a specific package
pnpm --filter @renge/tokens build
pnpm --filter @renge/react build

# Type-check a specific package
pnpm --filter @renge/tokens tsc --noEmit
```

Each package uses `tsup` for bundling (see `packages/*/tsup.config.ts`). There are no tests configured yet.

## Architecture

Renge is a design system grounded in natural mathematical proportions. It has two layers:

```
@renge/tokens    ← proportional source of truth (no dependencies)
      ↑
@renge/react     ← optional React component layer (consumes tokens)
```

### `packages/tokens` — `@renge/tokens`

The main API is `createRengeTheme(config?)` which returns `{ config, vars, css }`:
- `css` — a complete CSS string ready to inject into the document
- `vars` — a JS object of all `--renge-*` custom properties
- `config` — the resolved configuration

**Scale generation** lives in `src/scales/`:
- `spacing.ts` — Fibonacci × baseUnit (default 4px)
- `typography.ts` — φ-based progression from typeBase (default 16px)
- `motion.ts` — Fibonacci durations + tuned easing curves
- `radius.ts` — Fibonacci-based border radii

**Color system** (`src/colors/`):
- `palette.ts` — 43 raw OKLCH colors drawn from nature, never used by components directly
- `profiles/` — three profiles (`clear`, `earth`, `twilight`) that map palette → 22 semantic tokens (`--renge-color-bg`, `--renge-color-accent`, `--renge-color-danger`, etc.)
- Components only reference semantic tokens, never palette colors

**Variance system** (`src/constants.ts`): When `variance > 0`, spacing/radius/motion values drift deterministically using a seeded PRNG. Font size, contrast, and meaning-bearing layout are never varied. Same seed always produces the same output.

**Phyllotaxis** (`src/phyllotaxis.ts`): Generates golden-angle spiral point arrangements, used for avatar clusters, radial layouts, etc.

### `packages/react` — `@renge/react`

Components are implemented with inline styles that reference CSS custom properties — no CSS-in-JS runtime, no class names. They assume `@renge/tokens` CSS variables are already injected into the document (via `RengeProvider` or manually).

Components: `Stack`, `Grid`, `Text`, `Heading`, `Card`, `Button`, `Divider`, `Section`.

`RengeProvider` handles injecting the theme CSS into `<head>` and exposes the theme via context (`useRenge`, `useRengeTheme`).

`@renge/react` re-exports `createRengeTheme`, `PHI`, `FIBONACCI`, `GOLDEN_ANGLE`, and related types from `@renge/tokens` for consumer convenience.

### TypeScript

All packages extend `tsconfig.base.json` at the root. Settings: `strict: true`, `target: ES2020`, `module: ESNext`, `moduleResolution: bundler`. Each package outputs to `dist/` with both CJS and ESM formats plus `.d.ts` declarations.
