const {
  setDefaultTimeout, Before, BeforeAll, AfterAll, Status,
} = require('@cucumber/cucumber');
const { remote } = require('webdriverio');
const { po } = require('@cucumber-e2e/po2');
const storage = require('@cucumber-e2e/memory2');
const indexMap = require('../../po/indexMap');
const columnNamesList = require('../../memory/data');
const timeouts = require('../../config/timeouts');
const { capabilities, services } = require('../../config/chrome/rp');


setDefaultTimeout(timeouts.GLOBAL_TIMEOUT);

// Before(async () => {


//   browser = await remote({
//     logLevel: 'warn',
//     waitforTimeout: timeouts.WAIT_FOR_TIMEOUT,
//     capabilities,
//     services
//   });

//   po.init(browser, { timeout: timeouts.DEFAULT_TIMEOUT });
//   po.register(indexMap);
//   storage.register(columnNamesList);
// });

BeforeAll(async () => {
  browser = await remote({
    logLevel: 'warn',
    waitforTimeout: timeouts.WAIT_FOR_TIMEOUT,
    capabilities,
    services
  });

  po.init(browser, { timeout: timeouts.DEFAULT_TIMEOUT });
  po.register(indexMap);
  storage.register(columnNamesList);



    await browser.url('http://localhost:8080');

    const usernameInput = await po.getElement('Login Form > Login Field');
    await usernameInput.addValue('superadmin');
    const passwordInput = await po.getElement('Login Form >  Password Field');
    await passwordInput.addValue('erebus');
    const login = await po.getElement('Login Form > Login Button');
    await login.click();
})

AfterAll(async () => {
  await browser.deleteSession();
});