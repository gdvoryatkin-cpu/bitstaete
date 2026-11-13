import { useEffect, useRef, useState } from 'react'
import { Outlet } from 'react-router-dom'

import { t } from '../../i18n'
import { NavRail } from './NavRail'
import { TabBar } from './TabBar'
import { TopBar } from './TopBar'

export function AppShell() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const drawerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!drawerOpen) return

    const drawer = drawerRef.current
    const menuButton = menuButtonRef.current
    const focusable = drawer?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])')
    focusable?.[0]?.focus()

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setDrawerOpen(false)
        return
      }

      if (event.key !== 'Tab' || !focusable?.length) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      menuButton?.focus()
    }
  }, [drawerOpen])

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">{t('a11y.skipToContent')}</a>
      <NavRail />
      <div className="app-shell__workspace">
        <TopBar menuButtonRef={menuButtonRef} onOpenMenu={() => setDrawerOpen(true)} />
        <main id="main-content" className="app-shell__content" tabIndex={-1}>
          <Outlet />
        </main>
      </div>
      <TabBar />

      {drawerOpen ? (
        <div className="drawer-layer" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setDrawerOpen(false)
        }}>
          <div ref={drawerRef} className="drawer-layer__panel" role="dialog" aria-modal="true" aria-label={t('nav.openMenu')}>
            <NavRail variant="drawer" onClose={() => setDrawerOpen(false)} />
          </div>
        </div>
      ) : null}
    </div>
  )
}
