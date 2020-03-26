import React from 'react'
import ServicesTitle from '../view/home/services-title'
import { withTranslation } from '../../i18n'

class Home extends React.Component<any, any> {
  static async getInitialProps() {
    return {
      namespacesRequired: ['test'],
    }
  }

  render(): JSX.Element {
    const { t, i18n } = this.props

    return (
      <>
        <ServicesTitle name={t('name')} />
        <button
          id={'testButton'}
          type="button"
          onClick={() => {
            i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')
          }}>
          {t('change-locale')}
        </button>
      </>
    )
  }
}

export default withTranslation('test')(Home)
