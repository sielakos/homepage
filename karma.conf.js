var path = require('path');
var webpackConf = require('./webpack.config');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'test/**/*.ts*'
    ],

    preprocessors: {
      // add webpack as preprocessor
      'src/**/*.ts*': ['webpack', 'sourcemap'],
      'test/**/*.ts*': ['webpack', 'sourcemap']
    },

    webpack: Object.assign({}, webpackConf, {
      devtool: 'inline-source-map',
      entry: {},
      externals: {
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      },
      plugins: []
    }),

    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },

    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-sourcemap-loader',
      'karma-chrome-launcher'
    ],
    reporters: ['progress'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  })
};