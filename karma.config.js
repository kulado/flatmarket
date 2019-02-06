var webpackConfig = require('./webpack.config.test')

module.exports = function (config) {
    config.set({
        browsers: [
            'Chrome'
        ],
        client: {
            mocha: {
                reporter: 'html',
            },
        },
        colors: true,
        files: [
          './test/entry.js',
        ],
        frameworks: [
            'mocha',
            'sinon',
        ],
        logLevel: config.LOG_INFO,
        plugins: [
            'karma-chai',
            'karma-chrome-launcher',
            'karma-coverage',
            'karma-mocha',
            'karma-sinon',
            'karma-sourcemap-loader',
            'karma-webpack',
        ],
        port: 9876,
        preprocessors: {
            './test/entry.js': [
                'webpack',
                'sourcemap',
            ],
        },
        reporters: [
            'progress',
        ],
        webpack: webpackConfig,
        webpackMiddleware: {
            noInfo: true,
        },
    })
}
