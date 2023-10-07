"use client";
import { useReducer } from "react";
import React from "react";
import ListContext from "./ListContext";

const defaultListState = {
	words: [
		{
			id: "w1",
			word: "Lorem",
			meaning: "lorem ipsum dolor sit amet, consectetur adip",
			alternate: "lorem ipsum dolor sit amet, consectetur adip",
			synonyms: ["lorem", "ipsum", "dolor", "sit", "amet", "consectet"],
			translation: [
				"lorem",
				"ipsum",
				"dolor",
				"sit",
				"amet",
				"consectet",
			],
			arrowUp: true,
		},
		{
			id: "w2",
			word: "Lorem",
			meaning: "lorem ipsum dolor sit amet, consectetur adip",
			alternate: "lorem ipsum dolor sit amet, consectetur adip",
			synonyms: ["lorem", "ipsum", "dolor", "sit", "amet", "consectet"],
			translation: [
				"lorem",
				"ipsum",
				"dolor",
				"sit",
				"amet",
				"consectet",
			],
			arrowUp: false,
		},
		{
			id: "w3",
			word: "Lorem",
			meaning: "lorem ipsum dolor sit amet, consectetur adip",
			alternate: "lorem ipsum dolor sit amet, consectetur adip",
			synonyms: ["lorem", "ipsum", "dolor", "sit", "amet", "consectet"],
			translation: [
				"lorem",
				"ipsum",
				"dolor",
				"sit",
				"amet",
				"consectet",
			],
			arrowUp: false,
		},
	],
};

const listReducer = (state, action) => {
	if (action.type === "ADD") {
		let updatedWords = [...state.words];
		updatedWords.unshift(action.word);
		console.log(updatedWords);
		return {
			words: updatedWords,
		};
	}
    if (action.type === "FLIP"){
        let updatedWords = [...state.words];
		updatedWords = updatedWords.map((word) => {
            if (action.id === word.id) {
				console.log(action.id)
                return {...word, arrowUp: !word.arrowUp};
            }

            return word;
        })
		console.log("clickedddd");
		console.log(updatedWords)
        return {
            words: updatedWords,
        }
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
	const listContext = {
		words: listState.words,
		addWord: addWordHandler,
		flipArrow: toggleArrowState,
	};
	return (
		<ListContext.Provider value={listContext}>
			{props.children}
		</ListContext.Provider>
	);
};
export default ListProvider;
