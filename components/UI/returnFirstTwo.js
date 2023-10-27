const returnFirstTwo = (array) => {
	let returnedArray = [];
	if (array.length <= 2) {
		returnedArray = array;
	} else {
		for (let i = 0; i < 2; i++) {
			returnedArray.push(array[i]);
		}
	}
	return returnedArray;
};
export default returnFirstTwo;
