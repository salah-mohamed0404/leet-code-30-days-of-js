/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
const reduce = function (nums, fn, init) {
	let reducedVal = init;

	for (let i = 0; i < nums.length; i++) reducedVal = fn(reducedVal, nums[i]);

	return reducedVal;
};
