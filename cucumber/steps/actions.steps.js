const { Given, When, Then } = require('@cucumber/cucumber');
const { po } = require('@cucumber-e2e/po2');
const storage = require('@cucumber-e2e/memory2');


Given(/^I login$/, async () => {
    await browser.url('http://localhost:8080');

    const usernameInput = await po.getElement('Login Form > Login Field');
    await usernameInput.addValue('superadmin');
    const passwordInput = await po.getElement('Login Form >  Password Field');
    await passwordInput.addValue('erebus');
    const login = await po.getElement('Login Form > Login Button');
    await login.click();
}) 

Then(/^Element "([^']*)" should (not )?be visible$/, async (alias, reverse) => {
    alias = storage.getValue(alias);
    const element = await po.getElement(alias);
    reverse = Boolean(reverse);
    return element.waitForDisplayed({reverse, timeout: 5000, timeoutMsg: 'failed to wait'});
})

When(/^I click "([^"]+)"$/, async (alias) => {
    alias = await storage.getValue(alias);
    const element = await po.getElement(alias);
    await element.click();
})

