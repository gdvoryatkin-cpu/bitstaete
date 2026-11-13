# BitStaete Design System

## Direction contract

**THESIS:** A precise private-wealth workspace: warm paper-like content surfaces anchored by a permanent navy navigation structure. It avoids the generic dark fintech dashboard and decorative card grids.

**OWN-WORLD:** Warm sand page, near-white raised surfaces, navy rail, quiet hairlines, 8–16px radii, restrained green/red/cyan statuses, Inter UI typography, and tabular lining figures for money and data.

**STORY:** Clients always know whose portfolio they are viewing, where they are, and how to reach the few tasks they use most. Desktop exposes the full navigation; mobile keeps three frequent destinations at hand and moves secondary actions into a drawer.

**FIRST VIEWPORT:** Desktop is a fixed left rail, a quiet top bar, and an open content canvas. Mobile is a sticky top bar, scrollable content, and a safe-area-aware bottom tab bar. Page titles live in content, never in TopBar.

**FORM:** Existing Figma system, not a new visual direction. Source nodes: Dashboard `1523:4355`, NavRail/Drawer `1135:1676`, TopBar `1273:3235`, and TabBar `964:495`.

**FINISH:** unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Token architecture

`src/tokens/tokens.css` implements the Figma hierarchy: primitive `--bs-ref-*` tokens feed semantic `--bs-*` tokens, which feed component-level tokens. Component CSS does not use raw color values.

## Typography

Inter 400/500/600 is self-hosted. Roboto Mono is reserved for identifiers. Money and data styles use tabular lining figures. Interface labels keep sentence case.

## Responsive shell

- Desktop (`>= 768px`): fixed 220px NavRail, TopBar above the content canvas.
- Mobile (`< 768px`): sticky TopBar, safe-area-aware three-item TabBar, and a 300px navigation drawer.
- Touch targets are at least 44px. Drawer focus is trapped, Escape closes it, and focus returns to the menu button.
