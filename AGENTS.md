# BitStaete client portal — agent guide

This file is shared by **Codex** and **Claude Code**. Gleb alternates between them when one runs out of limits, so the repository is the only shared memory: whatever the next agent needs must be in the code, in `docs/HANDOFF.md`, or in a commit.

## Talking to Gleb

- Reply to Gleb in **Russian**. Code, comments, commit messages and docs stay in English.
- Gleb is not a programmer. Report outcomes plainly (what changed, what to check, what is still open), not implementation detail.
- If something is ambiguous, ask one short question instead of guessing.

## What this project is

A clickable **demonstration prototype** of the redesigned BitStaete client portal, to be shown to the client (Derin). Fictional data, no backend. Deployed on Vercel. See `PRODUCT.md` and `DESIGN.md`.

## Sources of truth (in order)

1. `docs/HANDOFF.md` — current stage, what is done, decisions, open questions. **Read it first.**
2. Figma file `9ynVouoNx4kTdFogPVQ0UM` — visual authority (use the Figma MCP when available).
3. `reference/bitstaete-prototype.html` — behaviour, mock data and non-auth mobile layouts. It is large: read targeted sections only.
4. `DESIGN.md`, `PRODUCT.md`, `docs/MOBILE_DECISIONS.md`.

## Stack and commands

Vite + React + TypeScript + React Router, plain CSS, Vercel (SPA rewrite in `vercel.json`).

```
npm install
npm run dev      # local preview
npm run build    # must pass before you finish
npm run lint     # must pass before you finish
```

## Structure

- `src/tokens/tokens.css` — primitive `--bs-ref-*` → semantic `--bs-*` → component tokens, Light and Dark.
- `src/components/elements/` — smallest building blocks.
- `src/components/panels/` — sections and shell parts built from elements.
- `src/screens/` — screens assembled from panels.
- `src/i18n/` — all UI copy via `t('key')`.
- `src/styles/` — global and shell CSS.

## Rules

- Build bottom-up: elements → panels → screens. Screens are assembled from components, never drawn ad hoc.
- Build desktop and mobile together for every component (breakpoint 768px). For a whole new screen, finish desktop first, get Gleb's OK, then mobile.
- Fixed slots: a panel keeps roughly the same size across loading / empty / error / ready states; content adapts to the slot.
- No raw colour values in component CSS — tokens only.
- All visible copy through i18n keys. EUR only, Dutch number formatting, English copy.
- No backend, no real auth, no analytics, no external runtime requests. Theme is the only `localStorage` value.
- Accessibility: visible focus, 44px touch targets, AA contrast in both themes, reduced motion, semantic headings.
- When you spot a defect, fix it now rather than noting it for later.
- Record any mobile behaviour that Figma does not show in `docs/MOBILE_DECISIONS.md`.

## Handoff protocol (switching between Codex and Claude Code)

**At the start of a session**

1. `git status` — if there are uncommitted changes you did not make, tell Gleb and ask before touching them (the other agent may have stopped mid-task).
2. `git pull` if a remote is configured.
3. Read `docs/HANDOFF.md`.

**At the end of every finished block of work**

1. `npm run build` and `npm run lint` pass.
2. Update `docs/HANDOFF.md`: Done / Decisions / Next step / Open questions. Write it so the other agent can continue without this conversation.
3. Commit with a clear message.
4. Push to GitHub only when Gleb asks (pushing to `main` updates the Vercel demo).
