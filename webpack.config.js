const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './lib/index.jsx',
  output: {
    path: path.resolve(__dirname, 'es5'),
    filename: 'index.js',
    libraryTarget: 'umd',
    library: 'ElementaryWatsonComponent'
  },
  externals: {
    react: 'react'
  },
  optimization: {
    concatenateModules: true
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: [
          path.resolve(__dirname, 'lib'),
          path.resolve(__dirname, 'node_modules/elementary-watson')
        ],
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: [['@babel/preset-env', { modules: false }], '@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin()
  ]
}
