const assert = require("chai").assert;
const breedDetails = require("../syncBreeds");

describe("#breedDetails", () => {
	it("returns breed details for the Bombay breed", () => {
		// We expect it to be a function, but will it be?
		const expectedDesc = "Bombay text";
		const bombay = breedDetails("Bombay");
		assert.equal(expectedDesc, bombay);
	});
	it("returns breed details for the Balinese breed", () => {
		const expectedDesc = "Balinese text";
		const balinese = breedDetails("Balinese");
		assert.equal(expectedDesc, balinese);
	});
	it("returns undefined when no breed is given", () => {
		assert.isUndefined(breedDetails());
	});
});
