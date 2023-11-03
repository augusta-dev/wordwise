"use client";
import { useReducer, useEffect, useContext } from "react";
import React from "react";
import ListContext from "./ListContext";

const listReducer = (state, action) => {
	if (action.type === "USER") {
		let user = action.user;
		return { ...state, userName: user };
	}
	if (action.type === "GET") {
		let updatedWords = action.list;
		return { ...state, words: updatedWords };
	}
	if (action.type === "ADD") {
		let updatedWords = [...state.words];
		updatedWords.unshift(action.word);
		return {
			...state,
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
			...state,
			words: updatedWords,
		};
	}
	if (action.type === "LANGUAGE") {
		let words = [...state.words];
		return { words: words, language: action.language };
	}
};

const ListProvider = (props) => {
	const [listState, dispatchListAction] = useReducer(listReducer, {
		words: props.words,
	});
	const addWordHandler = (word) => {
		dispatchListAction({ type: "ADD", word: word });
	};
	const toggleArrowState = (id) => {
		dispatchListAction({ type: "FLIP", id: id });
	};
	const changeLanguage = (language) => {
		dispatchListAction({ type: "LANGUAGE", language: language });
	};
	const getListHandler = (list) => {
		dispatchListAction({ type: "GET", list: list });
	};
	const getUserHandler = (user) => {
		dispatchListAction({ type: "USER", user: user });
	};
	const listContext = {
		words: listState.words,
		language:
			listState.language || listState.words[0].language || "English",
		userName: listState.user || "none",
		getList: getListHandler,
		addWord: addWordHandler,
		flipArrow: toggleArrowState,
		setLanguage: changeLanguage,
		getUser: getUserHandler,
	};

	return (
		<ListContext.Provider value={listContext}>
			{props.children}
		</ListContext.Provider>
	);
};

export default ListProvider;
