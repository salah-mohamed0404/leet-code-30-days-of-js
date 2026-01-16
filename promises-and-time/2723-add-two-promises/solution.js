/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
const addTwoPromises = async function (promise1, promise2) {
	const [promise1Value, promise2Value] = await Promise.all([
		promise1,
		promise2,
	]);

	return promise1Value + promise2Value;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
