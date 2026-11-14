# Angular integration handoff

This prototype is structured as a portable Angular foundation rather than a production application. Its UI layer can be copied into an existing standalone or NgModule-based Angular portal.

## What to copy

1. Copy `src/tokens/tokens.css` without modification. It contains plain CSS custom properties and has no Angular dependency.
2. Copy the required components from `src/app/ui/elements/` and `src/app/ui/panels/` together with their component SCSS files.
3. Copy the referenced files from `src/assets/figma/` into the host application's asset pipeline.
4. Import standalone components directly in another standalone component, or add them to the `imports` array of an NgModule. Standalone components are compatible with NgModule-based applications.
5. Map the host application's data into each component's documented `input()` values and handle its `output()` events in the containing screen.

## What to replace

### Mock APIs

The screen-facing services are `PortfolioService`, `TransactionsService`, and `AuthService` in `src/app/data/`. They delegate to interfaces provided through `PORTFOLIO_API`, `TRANSACTIONS_API`, and `AUTH_API`.

Replace the mock providers in `src/app/app.config.ts` with HTTP-backed classes that implement the same interfaces. Components and screens should not change. Keep the Observable method shapes, including `getPortfolio(id)` and `getTransactions(filters)`, so loading, error, refresh, and cancellation behavior can be added without changing the UI contracts.

### Translation adapter

`TranslationService` and the standalone `TranslatePipe` are deliberately thin. Replace the service implementation with an adapter to the client's i18n library, or replace the pipe while keeping the same translation keys from `src/app/i18n/en.json`.

### Routing and application shell

`src/app/app.routes.ts` is demo routing. Merge its screen routes into the host portal's route tree. UI elements and panels do not import Angular Router; only the shell screen turns navigation output events into router calls.

## Portability contracts

- All UI components are standalone and use `ChangeDetectionStrategy.OnPush`.
- Local UI state uses Signals. Shared state stays in services.
- Components under `ui/elements` and `ui/panels` receive data only through `input()` and report intent only through `output()`.
- Component styles use only semantic or component CSS tokens, never raw colour values.
- Assets and tokens make no runtime network requests.

## Demo shortcuts

- Stage 1 routes intentionally render placeholder screen content. Authentication and Dashboard content begin in Stage 2.
- Mock API implementations return in-memory Observables immediately; latency and server failures are not simulated yet.
- The app uses one English dictionary and EUR-only mock models.
- Theme persistence and production authentication are not implemented in Stage 1.
- Vercel is configured for the Angular output folder and rewrites application routes to `index.html`.
