const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
const customLogger = require('./custom-logger'); // ✅ load manual plugin

// turn on headless mode when running with HEADLESS=true environment variable
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  timeout: 10, // ✅ timeout seharusnya dalam satuan detik, bukan 10000
  output: './output',
  helpers: {
    REST: {
      endpoint: 'https://reqres.in/api',
      defaultHeaders: {
        'Content-Type': 'application/json',
        'x-api-key': 'reqres-free-v1'
      }
    },
    JSONResponse: {}
  },
  include: {
    I: './steps_file.js'
  },
  name: 'CodeConceptJS',

  // ✅ daftar plugin resmi CodeceptJS
  plugins: {
    // ini contoh plugin resmi, misal diperlukan
    retryFailedStep: {
      enabled: true
    }
  },

  // ✅ ini daftar plugin custom yang dijalankan secara manual
  bootstrap: async () => {
    const event = require('codeceptjs').event;
    const plugin = customLogger();

    event.dispatcher.on(event.test.passed, plugin.onPassed);
    event.dispatcher.on(event.test.failed, plugin.onFailed);
  }
};
