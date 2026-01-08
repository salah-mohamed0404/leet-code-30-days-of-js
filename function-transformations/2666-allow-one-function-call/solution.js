/**
 * @param {Function} fn
 * @return {Function}
 */
const once = function (fn) {
	let functionCallCount = 0;

	return function (...args) {
		if (functionCallCount > 0) return;

		functionCallCount++;
		return fn(...args);
	};
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
