module.exports = function(config) {
  config.set({
    basePath: '../',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [
      'src/*.ts',
      'public/*.ts',
      'test/*.spec.ts'
    ],
    exclude: [
      'lib',
      'config',
      'examples',
      'node_modules'
    ],
    preprocessors: {
      'src/*.ts': ['karma-typescript'],
      'public/*.ts': ['karma-typescript'],
      'test/*.spec.ts': ['karma-typescript']
    },
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.karma.json",
      reports: {
        "text": "",
        "html": "coverage"
      }
    },
    plugins: [
      require('karma-jasmine'),
      require('karma-typescript'),
      require('karma-spec-reporter'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter')
    ],
    reporters: ['kjhtml', 'spec', 'karma-typescript'],
    client: {
      clearContext: false
    },
    coverageReporter: {
      instrumenterOptions: {
        istanbul: { noCompact: true }
      }
    },
    specReporter: {
      maxLogLines: 5,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false,
      failFast: false
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity
  })
}
