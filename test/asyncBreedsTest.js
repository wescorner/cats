// asyncBreedsTest.js
const assert = require("chai").assert;
const breedDetailsFromFile = require("../asyncBreeds");

describe("#breedDetailsFromFile", () => {
	it("provides, via callback, breed details for the Bombay breed", (done) => {
		breedDetailsFromFile("Bombay", (desc) => {
			const expectedDesc = "Bombay text";
			assert.equal(expectedDesc, desc);
			done();
		});
	});
	it("provides, via callback, breed details for the Balinese breed", (done) => {
		breedDetailsFromFile("Balinese", (desc) => {
			const expectedDesc = "Balinese text";
			assert.equal(expectedDesc, desc);
			done();
		});
	});
	it("provides, via callback, undefined for a breed that does not exist", (done) => {
		breedDetailsFromFile("Nonexistant", (desc) => {
			assert.isUndefined(desc);
			done();
		});
	});
});
