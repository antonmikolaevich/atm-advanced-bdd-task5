const { po } = require('@cucumber-e2e/po2');
const storage = require('@cucumber-e2e/memory2');
const { When } = require('@cucumber/cucumber');

When(/^I remember "(.+)" value as "(.+)"$/, async function (alias, key) {
	alias = storage.getValue(alias);
	const element = await po.getElement(alias);

	let elementText = await element.getText();
    storage[key] = elementText;
});