const path = require('path')
const fs = require('fs')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const resolve = dir => path.resolve(__dirname, dir)
const ampScriptPath = resolve('./amp-script/')
const entryList = fs.readdirSync(ampScriptPath).reduce((obj, name) => {
  obj[`${path.basename(name, '.jsx')}`] = path.resolve(ampScriptPath, name)
  return obj
}, {})
module.exports = env => ({
  mode: process.env.NODE_ENV || 'none',
  entry: entryList,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './public/static/amp-js'),
  },
  watch: env.NODE_ENV === 'development',
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new CleanWebpackPlugin()],
})
