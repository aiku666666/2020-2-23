// This is a karma config file. For more details see
//   http://karma-runner.github.io/0.13/config/configuration-file.html
// we are also using it with karma-webpack
//   https://github.com/webpack/karma-webpack

var webpackConfig = require('../../build/webpack.test.conf')

module.exports = function karmaConfig (config) {
  config.set({
    // to run in additional browsers:
    // 1. install corresponding karma launcher
    //    http://karma-runner.github.io/0.13/config/browsers.html
    // 2. add it to the `browsers` array below.
    // 浏览器模拟环境.PhantomJS无头浏览器就是个js的环境
    browsers: ['PhantomJS'],
    // 所用到的各种库
    frameworks: ['mocha', 'sinon-chai', 'phantomjs-shim'],
    reporters: ['spec', 'coverage'],
    // 需要加载到浏览器的文件
    files: ['./index.js'], // 启动的起点
    // 使用前的处理
    preprocessors: {
      './index.js': ['webpack', 'sourcemap']
    }, // 在运行前用什么处理
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    // coverage报告输出的类型和那目录
    coverageReporter: {
      dir: './coverage',
      reporters: [
        { type: 'lcov', subdir: '.' },
        { type: 'text-summary' }
      ]
    }
  })
}
