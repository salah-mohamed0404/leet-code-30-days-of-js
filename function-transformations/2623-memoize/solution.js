/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
	const cache = new Map();

	return function (...args) {
		const cacheKey = args.toString();

		if (cache.has(cacheKey)) return cache.get(cacheKey);

		const fnResult = fn(...args);
		cache.set(cacheKey, fnResult);

		return fnResult;
	};
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
