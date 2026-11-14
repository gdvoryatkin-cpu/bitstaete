# BitStaete prototype handoff

## Stage 1 — Angular foundation

### Done

- Replaced the previous React/Vite implementation with Angular 22.
- Kept the framework-agnostic Figma token hierarchy in `src/tokens/tokens.css`, including Light and Dark modes.
- Built the responsive NavRail/Drawer, TopBar, TabBar, and application shell as standalone Angular components with OnPush change detection.
- Kept UI elements and panels portable: data enters through `input()` and user intent leaves through `output()`; no routing, services, or HTTP are used inside the UI layer.
- Added Angular Router routes for sign in, code verification, Dashboard, Holdings, Transactions, Account, and Contact.
- Added strict Observable data contracts for `PortfolioService`, `TransactionsService`, and `AuthService`, with mock implementations provided through InjectionTokens.
- Added the thin `TranslationService` and standalone `TranslatePipe`, backed by `src/app/i18n/en.json`.
- Added component SCSS, self-hosted Inter, angular-eslint, Prettier, the Angular Vercel preset configuration, and the SPA rewrite.
- Added `docs/ANGULAR_HANDOFF.md` with integration and replacement guidance for the client's developers.
- Verified the Angular build, angular-eslint rules, Prettier formatting, and the rendered desktop shell.

### Exact versions

- Angular framework: `22.2.6`
- Angular CLI and build tooling: `22.2.7`
- angular-eslint: `22.6.0`
- TypeScript: `6.0.3` (latest release supported by Angular 22.2)
- RxJS: `7.8.2`
- Inter package: `5.3.0`
- Node.js used for verification: `24.18.0`
- npm used for verification: `11.16.0`

### Decisions

- Figma remains the visual authority. Stage 1 source nodes: Dashboard `1523:4355`, NavRail/Drawer `1135:1676`, TopBar `1273:3235`, TabBar `964:495`, Colors `795:6090`, and Typography `795:6091`.
- All application components are standalone so they can be imported by both standalone and older NgModule-based Angular applications.
- The desktop NavRail is 220px in the screen composition. The mobile Drawer uses the 300px Figma component width.
- The screen layer owns routing, focus management, translation lookup, and service access. The UI layer stays unaware of application infrastructure.
- Stage 1 routes intentionally show placeholders; screen content begins in Stage 2.

### Open questions

- The client's exact Angular version, build system, route structure, HTTP client conventions, and i18n library are still unknown. The adapters in `docs/ANGULAR_HANDOFF.md` isolate those integration points.

### Next step

- Wait for Gleb's review. After approval, begin Stage 2: authentication screens and the Dashboard ready state, using the Angular service contracts already in place.
