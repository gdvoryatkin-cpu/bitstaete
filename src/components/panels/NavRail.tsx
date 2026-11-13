import { NavLink } from 'react-router-dom'

import fullLogo from '../../assets/figma/logo-full.png'
import { t } from '../../i18n'
import { Icon } from '../elements/Icon'
import { allNavigation } from './navigation'

type NavRailProps = {
  variant?: 'desktop' | 'drawer'
  onClose?: () => void
}

export function NavRail({ variant = 'desktop', onClose }: NavRailProps) {
  const isDrawer = variant === 'drawer'

  return (
    <aside className={`nav-rail nav-rail--${variant}`} aria-label={t('nav.openMenu')}>
      <div className="nav-rail__head">
        <img className="nav-rail__logo" src={fullLogo} alt="BitStaete" />
        {isDrawer ? (
          <button className="icon-button icon-button--rail" type="button" onClick={onClose} aria-label={t('nav.closeMenu')}>
            <Icon name="close" />
          </button>
        ) : null}
      </div>

      <nav className="nav-rail__items">
        {allNavigation.map((item) => (
          <NavLink key={item.to} className={({ isActive }) => `nav-item${isActive ? ' nav-item--active' : ''}`} to={item.to} onClick={onClose}>
            <Icon name={item.icon} />
            <span>{t(item.label)}</span>
          </NavLink>
        ))}
      </nav>

      <div className="nav-rail__spacer" />

      <div className="nav-rail__foot">
        <button className="nav-item nav-item--button" type="button">
          <Icon name="sign-out" />
          <span>{t('nav.signOut')}</span>
        </button>
      </div>
    </aside>
  )
}
