const fs = require('fs');
const path = require('path');

module.exports = function () {
  return {
    async onPassed(test) {
      const outputPath = path.join(__dirname, 'output', 'api-log.txt');
      const time = new Date().toISOString();
      const text = `[PASS] [${time}] ${test.title}\n`;
      fs.appendFileSync(outputPath, text);
    },

    async onFailed(test, err) {
      const outputPath = path.join(__dirname, 'output', 'api-log.txt');
      const time = new Date().toISOString();
      const text = `[FAIL] [${time}] ${test.title}\n  Reason: ${err.message}\n`;
      fs.appendFileSync(outputPath, text);
    }
  };
};
