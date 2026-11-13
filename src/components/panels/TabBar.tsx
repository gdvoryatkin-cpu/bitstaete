import { NavLink } from 'react-router-dom'

import { t } from '../../i18n'
import { Icon } from '../elements/Icon'
import { primaryNavigation } from './navigation'

export function TabBar() {
  return (
    <nav className="tab-bar" aria-label={t('nav.openMenu')}>
      {primaryNavigation.map((item) => (
        <NavLink key={item.to} to={item.to} className={({ isActive }) => `tab-item${isActive ? ' tab-item--active' : ''}`}>
          <span className="tab-item__pill"><Icon name={item.icon} size={22} /></span>
          <span>{t(item.label)}</span>
        </NavLink>
      ))}
    </nav>
  )
}
