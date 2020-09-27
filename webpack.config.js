const path = require('path')
const MyWebpackPlugin = require('./my-webpack-plugin.js')
const webpack = require('webpack')

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: path.resolve('./my-webpack-loader.js')
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(jpg|gif)$/,
        loader: 'url-loader',
        options: {
          publicPath: './dist/',
          name: '[name].[ext]?[hash]',
          limit: 20000, // 20kb
        }
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `이것은 배너입니다.`
    }),
  ]
}
