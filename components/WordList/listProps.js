const getServerSideProps = async (email) => {
	const getDefaultState = async () => {
		const queryParams = new URLSearchParams();
		queryParams.append("email", email);
		const string = `/api/list?${queryParams.toString()}`;
		const list = await fetch(string);
		return list.json();
	};

	const getState = async () => {
		const defaultList = [];
		const wordList = await getDefaultState();
		wordList.map((word) => {
			defaultList.push(word.description);
		});
		return defaultList;
	};
	return getState();
};

export default getServerSideProps;
