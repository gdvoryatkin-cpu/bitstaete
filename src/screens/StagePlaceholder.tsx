import type { TranslationKey } from '../i18n/en'
import { t } from '../i18n'

type StagePlaceholderProps = {
  title: TranslationKey
}

export function StagePlaceholder({ title }: StagePlaceholderProps) {
  return (
    <section className="stage-placeholder" aria-labelledby="screen-title">
      <h1 id="screen-title" className="bs-type-heading-screen">{t(title)}</h1>
      <div className="stage-placeholder__panel">
        <div>
          <h2 className="bs-type-heading-card">{t('stage1.title')}</h2>
          <p className="bs-type-body">{t('stage1.body')}</p>
        </div>
        <div className="stage-placeholder__skeleton" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
    </section>
  )
}
