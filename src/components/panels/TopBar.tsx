import type { RefObject } from 'react'

import logoIcon from '../../assets/figma/logo-icon.svg'
import { t } from '../../i18n'
import { Icon } from '../elements/Icon'

type TopBarProps = {
  menuButtonRef: RefObject<HTMLButtonElement | null>
  onOpenMenu: () => void
}

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function TopBar({ menuButtonRef, onOpenMenu }: TopBarProps) {
  const client = t('client.name')

  return (
    <header className="top-bar">
      <div className="top-bar__mobile-start">
        <button ref={menuButtonRef} className="icon-button" type="button" onClick={onOpenMenu} aria-label={t('nav.openMenu')}>
          <Icon name="menu" />
        </button>
        <img className="top-bar__mark" src={logoIcon} alt="" />
      </div>

      <div className="top-bar__spacer" />

      <button className="icon-button top-bar__notifications" type="button" aria-label={t('topbar.notifications')}>
        <Icon name="bell" />
      </button>
      <span className="top-bar__divider" aria-hidden="true" />
      <button className="client-switcher" type="button" aria-label={t('topbar.clientMenu')}>
        <span className="client-switcher__avatar" aria-hidden="true">{getInitials(client)}</span>
        <span className="client-switcher__copy">
          <strong>{client}</strong>
          <small>{t('client.organisation')}</small>
        </span>
        <Icon name="chevron-down" size={16} />
      </button>
    </header>
  )
}
