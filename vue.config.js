const webpack = require('webpack');

module.exports = {
  configureWebpack: {
    // Set up all the aliases we use in our app.
    plugins: [
      new webpack.optimize.LimitChunkCountPlugin({
        maxChunks: 6
      })
    ]
  },
  pwa: {
    name: 'Filipe Navas | Software Engineer, AWS Solutions Architect, Founder',
    themeColor: '#76eea7',
    msTileColor: '#76eea7',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: '#76eea7'
  },
  css: {
    // Enable CSS source maps.
    sourceMap: process.env.NODE_ENV !== 'production'
  }
};
