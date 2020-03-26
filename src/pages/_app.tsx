import React from 'react'
import App, { AppContext } from 'next/app'
import Layout from '../layout'
import commonStyles from '../assets/css/common.scss?type=global'
import Head from 'next/head'

const { appWithTranslation } = require('../../i18n')

class MyApp extends App {
  static async getInitialProps({ Component, ctx }: AppContext) {
    let pageProps: any = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    if (!pageProps.namespacesRequired) {
      pageProps.namespacesRequired = []
    }
    return { pageProps }
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <style jsx>{commonStyles}</style>
        <Layout>
          <Head>
            <title>next amp</title>
          </Head>
          <Component {...pageProps} />
        </Layout>
      </>
    )
  }
}
export default appWithTranslation(MyApp)
