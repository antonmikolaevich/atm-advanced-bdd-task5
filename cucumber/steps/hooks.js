const {
  setDefaultTimeout, Before, After, Status,
} = require('@cucumber/cucumber');
const { remote } = require('webdriverio');
const { po } = require('@cucumber-e2e/po2');
const storage = require('@cucumber-e2e/memory2');
const indexMap = require('../../po/indexMap');
const columnNamesList = require('../../memory/data');
const timeouts = require('../../config/timeouts');
const { capabilities, services } = require('../../config/chrome/rp');


setDefaultTimeout(timeouts.GLOBAL_TIMEOUT);

Before(async () => {


  browser = await remote({
    logLevel: 'warn',
    waitforTimeout: timeouts.WAIT_FOR_TIMEOUT,
    capabilities,
    services
  });

  po.init(browser, { timeout: timeouts.DEFAULT_TIMEOUT });
  po.register(indexMap);
  storage.register(columnNamesList);
});

After(async () => {
  await browser.deleteSession();
});