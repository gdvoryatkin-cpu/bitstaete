# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Vite, React, TypeScript, React Router, plain CSS, and Vercel. This stack is explicitly required by the project brief.

## Users

BitStaete wealth-management clients reviewing their portfolio from desktop, tablet, or phone. The current prototype is prepared for a client presentation to Derin.

## Product Purpose

Give clients a calm, trustworthy view of portfolio value, allocation, holdings, transactions, account details, and adviser contact. This is a clickable demonstration with fictional data, not a production service.

## Operating Context

Clients use one responsive URL. They sign in with an email code, move between financial screens, inspect data, change a visual theme, and contact an adviser. Desktop navigation uses a rail; mobile uses a three-item tab bar plus a drawer for secondary destinations.

## Capabilities and Constraints

- No backend or real authentication; all data is mocked.
- EUR only, Dutch number formatting, and English copy for the current preview.
- No analytics or external runtime requests.
- Theme preference is the only localStorage value.
- Figma file `9ynVouoNx4kTdFogPVQ0UM` is the visual authority.
- `reference/bitstaete-prototype.html` is the authority for behavior, mock data, and non-auth mobile layouts.
- Screens are composed from reusable elements and panels, with responsive behavior built into each component.

## Brand Commitments

Preserve the BitStaete name and logo. The Figma design system defines a warm sand and navy visual language, Inter typography, restrained status colors, and a precise wealth-portal tone.

## Evidence on Hand

- Figma design system and screen nodes listed in the project brief.
- Working behavioral reference at `reference/bitstaete-prototype.html`.
- All client names, amounts, and portfolio data are fictional.

## Product Principles

- Make financial information easy to scan without making it feel simplistic.
- Keep interactions familiar, restrained, and trustworthy.
- Preserve one coherent data story across every screen.
- Treat desktop and mobile as equal product surfaces.
- Make loading, empty, error, and stale states as stable as the ready state.

## Accessibility & Inclusion

Visible keyboard focus, reduced-motion support, AA contrast in both themes, semantic headings, accessible names, and minimum 44px touch targets are required.
