// import { URLSearchParams } from "url";
const getServerSideProps = async (email) => {
	const getDefaultState = async () => {
		const queryParams = new URLSearchParams();
		queryParams.append("email", email);
		
		const string = `/api/list?${queryParams.toString()}`
		console.log(string)
		const list = await fetch(string);
		console.log(list);
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
	return getState();
};

export default getServerSideProps;
