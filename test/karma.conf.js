const path = require('path')

module.exports = function (config) {
  config.set({
    frameworks: ['mocha', 'chai'],
    files: ['./*.test.js'],
    reporters: ['mocha'],
    port: 9876, // karma web server port
    colors: true,
    logLevel: config.LOG_INFO,
    browsers: ['ChromeHeadless'],
    autoWatch: false,
    // singleRun: false, // Karma captures browsers, runs the tests and exits
    concurrency: Infinity,
    preprocessors: {
      './*.test.js': ['webpack']
    },
    // webpack configuration
    webpack: {
      mode: 'production',
      resolve: {
        extensions: ['.js', '.jsx']
      },
      module: {
        rules: [
          {
            test: /\.jsx?$/,
            include: [
              path.resolve(__dirname, 'lib'),
              path.resolve(__dirname, 'test'),
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
      }
    }
  })
}
