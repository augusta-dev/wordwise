import { useContext, useEffect } from "react";
import ListContext from "./ListContext";

const getDefaultState = async () => {
	const list = await fetch("/api/list", { cache: "no-store" });
	return list.json();
};

const WordList = () => {
    const listCtx = useContext(ListContext);
	const getState = async () => {
		const defaultList = [];
		const wordList = await getDefaultState();
		wordList.map((word) => {
			defaultList.push(word.description);
		});
		listCtx.getList(defaultList)
		console.log(defaultList);
	};

	useEffect(() => {
		getState();
	}, []);
    
}
export default WordList;