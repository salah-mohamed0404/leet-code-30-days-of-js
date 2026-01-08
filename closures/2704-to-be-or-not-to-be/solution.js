/**
 * @param {string} val
 * @return {Object}
 */
const expect = function (val) {
	return {
		toBe(expectedValue) {
			if (val === expectedValue) return true;
			throw new Error("Not Equal");
		},
		notToBe(expectedValue) {
			if (val === expectedValue) throw new Error("Equal");
			return true;
		},
	};
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
