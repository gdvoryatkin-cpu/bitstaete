export const en = {
  'nav.overview': 'Dashboard',
  'nav.holdings': 'Holdings',
  'nav.transactions': 'Transactions',
  'nav.account': 'Account',
  'nav.contact': 'Contact',
  'nav.signOut': 'Sign out',
  'nav.openMenu': 'Open navigation',
  'nav.closeMenu': 'Close navigation',
  'topbar.notifications': 'Notifications',
  'topbar.clientMenu': 'Open client menu',
  'client.name': 'Eline van Dijk',
  'client.organisation': 'Van Dijk Family Office',
  'route.signIn': 'Sign in',
  'route.verify': 'Verify code',
  'route.notFound': 'Page not found',
  'stage1.title': 'Application shell ready',
  'stage1.body': 'This route is connected. Screen content will be added in the next stages.',
  'stage1.authBody': 'Authentication will be implemented in Stage 2.',
  'a11y.skipToContent': 'Skip to content',
} as const

export type TranslationKey = keyof typeof en
