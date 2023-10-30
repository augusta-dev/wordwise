import React from "react";
const ListContext = React.createContext({
	words: [],
	language: "",
	getList: (list) => {},
	addWord: (word) => {},
	flipArrow: (id) => {},
	setLanguage: (language) => {},
});
export default ListContext;
