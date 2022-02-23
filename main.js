const path = require('path')

module.exports = {
  webpackFinal: async config => {
    config.module.rules[0].use[0].options.sourceType = 'unambiguous'

    config.module.rules.push({
      test: /\.js|jsx$/,
      include: path.resolve(__dirname, 'node_modules/@exoplanet/'),
      use: {
        loader: 'babel-loader',
        options: {
          presets: config.module.rules[0].use[0].options.presets,
          plugins: config.module.rules[0].use[0].options.plugins
        }
      }
    })
  }
}
