const returnFirstFive = (array) => {
	let returnedArray = [];
	if (array.length <= 5) {
		returnedArray = array;
	} else {
		for (let i = 0; i < 5; i++) {
			returnedArray.push(array[i]);
		}
	}
	return returnedArray;
};
export default returnFirstFive;
