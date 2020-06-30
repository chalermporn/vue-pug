const merge = require('lodash')

module.exports = {
  parallel: false,
  publicPath: '',
  // chainWebpack: config => {
  //   config.module
  //     .rule('postcss')
  //     .test(/\.css$/)
  //     .use('postcss-loader')
  //     .tap(options => {
  //       options.importLoaders = 1

  //       return options
  //     })
  // }
  chainWebpack: config => {
    config.module
      .rule('pcss')
      .use('postcss-loader')
      .tap(options =>
        merge(options, {
          sourceMap: false
        })
      )
  }
}
