"use client";
import { useReducer } from "react";
import React from "react";
import ListContext from "./ListContext";

const defaultListState = {
	words: [
		{
			language: "English",
			word: "red",
			meaning: {
				noun: "Any of a range of colours having the longest wavelengths, 670 nm, of the visible spectrum; a primary additive colour for transmitted light: the colour obtained by subtracting green and blue from white light using magenta and yellow filters; the colour of blood, ripe strawberries, etc.",
				adjective: "Having red as its color.",
			},
			synonyms: {
				noun: [],
				adjective: ["blood", "brick", "cardinal", "carmine", "cerise"],
			},
			translation: {
				'"adjective"': ["kırmızı", "solcu", "Rus"],
				'"noun"': [
					"kırmızı",
					"kızıllar",
					"kırmızılı",
					"kırmızılık",
					"alyuvar",
				],
			},
			arrowUp: true},
		// {
		// 	id: "w1",
		// 	word: "Lorem",
		// 	language: "English",
		// 	meaning: "lorem ipsum dolor sit amet, consectetur adip",
		// 	alternate: "lorem ipsum dolor sit amet, consectetur adip",
		// 	synonyms: ["lorem", "ipsum", "dolor", "sit", "amet", "consectet"],
		// 	translation: [
		// 		"lorem",
		// 		"ipsum",
		// 		"dolor",
		// 		"sit",
		// 		"amet",
		// 		"consectet",
		// 	],
		// 	arrowUp: true,
		// },
		// {
		// 	id: "w2",
		// 	word: "Lorem",
		// 	meaning: "lorem ipsum dolor sit amet, consectetur adip",
		// 	alternate: "lorem ipsum dolor sit amet, consectetur adip",
		// 	synonyms: ["lorem", "ipsum", "dolor", "sit", "amet", "consectet"],
		// 	translation: [
		// 		"lorem",
		// 		"ipsum",
		// 		"dolor",
		// 		"sit",
		// 		"amet",
		// 		"consectet",
		// 	],
		// 	arrowUp: false,
		// },
		// {
		// 	id: "w3",
		// 	word: "Lorem",
		// 	meaning: "lorem ipsum dolor sit amet, consectetur adip",
		// 	alternate: "lorem ipsum dolor sit amet, consectetur adip",
		// 	synonyms: ["lorem", "ipsum", "dolor", "sit", "amet", "consectet"],
		// 	translation: [
		// 		"lorem",
		// 		"ipsum",
		// 		"dolor",
		// 		"sit",
		// 		"amet",
		// 		"consectet",
		// 	],
		// 	arrowUp: false,
		// },
	],
};

const listReducer = (state, action) => {
	if (action.type === "ADD") {
		let updatedWords = [...state.words];
		updatedWords.unshift(action.word);
		 console.log(updatedWords);
		 console.log(state)
		return {
			words: updatedWords,
		};

	}
	if (action.type === "FLIP") {
		let updatedWords = [...state.words];
		updatedWords = updatedWords.map((word) => {
			if (action.id === word.id) {
				return { ...word, arrowUp: !word.arrowUp };
			}

			return word;
		});
		return {
			words: updatedWords,
		};
	}
	if (action.type === "LANGUAGE") {
		let words = [...state.words];
		return { words: words, language: action.language };
	}
	return defaultListState;
};

const ListProvider = (props) => {
	const [listState, dispatchListAction] = useReducer(
		listReducer,
		defaultListState,
	);
	const addWordHandler = (word) => {
		dispatchListAction({ type: "ADD", word: word });
	};
	const toggleArrowState = (id) => {
		dispatchListAction({ type: "FLIP", id: id });
	};
	const changeLanguage = (language) => {
		dispatchListAction({ type: "LANGUAGE", language: language });
	};
	const listContext = {
		words: listState.words,
		language: listState.language || "English",
		addWord: addWordHandler,
		flipArrow: toggleArrowState,
		setLanguage: changeLanguage,
	};
	return (
		<ListContext.Provider value={listContext}>
			{props.children}
		</ListContext.Provider>
	);
};
export default ListProvider;
