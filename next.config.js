const withCSS = require('@zeit/next-css')
const path = require('path')
const withPlugins = require('next-compose-plugins')

module.exports = withPlugins([withCSS], {
  webpack(config, { defaultLoaders }) {
    config.resolve.alias['i18n'] = path.resolve(__dirname, './i18n')
    config.module.rules.push({
      test: /\.scss$/,
      use: [
        defaultLoaders.babel,
        {
          loader: require('styled-jsx/webpack').loader,
          options: {
            type: (fileName, options) => options.query.type || 'scoped',
          },
        },
        'sass-loader',
        {
          loader: 'sass-resources-loader',
          options: {
            resources: ['./src/assets/css/vars.scss'],
          },
        },
      ],
    })
    return config
  },
})
