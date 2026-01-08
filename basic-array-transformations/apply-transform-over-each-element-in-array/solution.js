/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
const map = function (arr, fn) {
	const transformedArray = [];

	for (let i = 0; i < arr.length; i++) transformedArray.push(fn(arr[i], i));

	return transformedArray;
};
