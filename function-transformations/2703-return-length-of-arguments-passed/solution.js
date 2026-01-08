/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
const argumentsLength = function (...args) {
	let count = 0;

	for (arg of args) count++;

	return count;

	/* 
    Or simply:
    return args.length;
  */
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
