const storage = require('@cucumber-e2e/memory2');
const expect = require('chai').expect;
const { Then } = require('@cucumber/cucumber');
const { po } = require('@cucumber-e2e/po2');




Then(/^Stored text "([^"]*)" should (not )?be equal to "([^"]*)"$/, (stored, shouldNot, targetText) => {
	stored = storage.getValue(stored);
	targetText = storage.getValue(targetText);

	shouldNot
		? expect(stored).to.not.eql(targetText, `\n${stored}\nis equal to\n${targetText}\n`)
		: expect(stored).to.eql(targetText, `\n${stored}\nis not equal to\n${targetText}\n`);
});

Then(/^Texts of "([^"]*)" should be equal to "([^"]*)"$/, async (alias, value) => {
	alias = await storage.getValue(alias);
	const collectionElements = await po.getElement(alias);
	const tempActualTexts = [];
	let actualTexts = [];
	for (let el of collectionElements) {
		tempActualTexts.push(await el.getText());
	}
	if (alias === "Certain Launch Page > Column Items"){
		actualTexts = tempActualTexts.slice(2);
	} 
	console.log(`ACTUAL array is ${actualTexts}`);
	value = await storage.getValue(`${value}`);
	console.log(`expected array is ${value}`);
	expect(actualTexts, `actual texts:\n${actualTexts}`).to.eql(value);
});