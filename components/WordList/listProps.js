const getServerSideProps = async () => {
	const getDefaultState = async () => {
		const list = await fetch("http:localhost:3000/api/list", { cache: "no-store" });
		return list.json();
	};

	const getState = async () => {
		const defaultList = [];
		const wordList = await getDefaultState();
		wordList.map((word) => {
			defaultList.push(word.description);
		});
        console.log(defaultList);

		return defaultList;
	};
    return getState()
};

export default getServerSideProps;
