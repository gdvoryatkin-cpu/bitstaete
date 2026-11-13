# BitStaete prototype handoff

## Stage 1

### Done

- Created a Vite + React + TypeScript application with React Router.
- Added browser routes for sign in, code verification, Dashboard, Holdings, Transactions, Account, and Contact.
- Exported the Figma token hierarchy into `src/tokens/tokens.css`, including Light and Dark modes.
- Added Figma typography classes and self-hosted Inter/Roboto Mono packages.
- Built responsive NavRail, TopBar, TabBar, and mobile navigation Drawer components.
- Added keyboard focus, focus trapping, Escape/scrim close, safe-area handling, and reduced-motion support.
- Added the Vercel SPA rewrite configuration.
- Added i18n-ready English copy through `t('…')` keys.
- Verified the project against the Figma Dashboard shell and shared navigation components.
- Confirmed `npm run build` and `npm run lint` pass on Node.js 24.18.0.

### Decisions

- Figma is the visual authority. Source nodes used in this stage: Dashboard `1523:4355`, NavRail/Drawer `1135:1676`, TopBar `1273:3235`, TabBar `964:495`, Colors `795:6090`, and Typography `795:6091`.
- The desktop NavRail is 220px in the screen composition. The mobile Drawer uses the 300px Figma component width.
- App screens use the Operate mode: restrained color, familiar controls, stable layout, and minimal state-driven motion.
- Stage 1 routes intentionally show placeholders; screen content begins in Stage 2.

### Open questions

- None for Stage 1.

### Next step

- Wait for Gleb's review. After approval, begin Stage 2: authentication screens and the Dashboard ready state.
