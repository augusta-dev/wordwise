import React from "react";
const ListContext = React.createContext({
	words: [],
	language: "",
	userName: "",
	getList: (list) => {},
	addWord: (word) => {},
	flipArrow: (id) => {},
	setLanguage: (language) => {},
	getUser: (user) => {},
});
export default ListContext;
