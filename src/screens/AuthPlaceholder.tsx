import fullLogo from '../assets/figma/logo-full.png'
import { t } from '../i18n'
import type { TranslationKey } from '../i18n/en'

type AuthPlaceholderProps = {
  title: TranslationKey
}

export function AuthPlaceholder({ title }: AuthPlaceholderProps) {
  return (
    <main className="auth-placeholder">
      <img src={fullLogo} alt="BitStaete" />
      <section className="auth-placeholder__card">
        <h1 className="bs-type-heading-screen">{t(title)}</h1>
        <p className="bs-type-body-large">{t('stage1.authBody')}</p>
      </section>
    </main>
  )
}
