# Mobile decisions

This log records mobile behavior that is not directly represented by a full Figma screen.

## Stage 1 — application shell

- The shell switches at 768px. Figma supplies mobile variants for TopBar, TabBar, and the navigation Drawer; the breakpoint itself follows the prototype and the project brief.
- The three bottom tabs are Dashboard, Holdings, and Transactions, matching the Figma TabBar. Account, Contact, and Sign out remain in the Drawer.
- Safe-area insets are added to the sticky TopBar, fixed TabBar, and Drawer so the shell works on notched phones.
- Page content receives bottom padding equal to the TabBar plus the safe area. This prevents controls from being covered.
- Tablet width keeps the desktop shell from 768px upward. Full tablet content composition will be confirmed screen by screen in later stages.
