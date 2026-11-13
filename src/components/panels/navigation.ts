import type { IconName } from '../elements/Icon'
import type { TranslationKey } from '../../i18n/en'

export type NavigationItem = {
  to: string
  label: TranslationKey
  icon: IconName
}

export const primaryNavigation: NavigationItem[] = [
  { to: '/dashboard', label: 'nav.overview', icon: 'home' },
  { to: '/holdings', label: 'nav.holdings', icon: 'holdings' },
  { to: '/transactions', label: 'nav.transactions', icon: 'transactions' },
]

export const secondaryNavigation: NavigationItem[] = [
  { to: '/account', label: 'nav.account', icon: 'account' },
  { to: '/contact', label: 'nav.contact', icon: 'contact' },
]

export const allNavigation = [...primaryNavigation, ...secondaryNavigation]
