"use client";
import React from "react";
import Image from "next/image";
import { useState, useContext, useRef } from "react";
import ListContext from "../WordList/ListContext";
import search from "../../assets/search.svg";
import returnFirstFive from "../UI/ReturnFirstFive";
import returnFirstTwo from "../UI/ReturnFirstTwo";
import Input from "../UI/Input";
import getServerSideProps from "./getServerProps";

const WordSearch = (props) => {
	const [errorMessage, setErrorMessage] = useState("");
	const word = useRef("");
	const listCtx = useContext(ListContext);
	const addWordToList = listCtx.addWord;
	const language = listCtx.language;
	const addWordHandler = async () => {
		let wordAdded = {};

		let translations = {};
		let definitions = {};
		let synonyms = {};
		let defs = [];
		let examplesTr = [];
		if (!word.current) {
			setErrorMessage("Please rewrite the word");
		} else {
			setErrorMessage("");
		}
		const getTrans = async (enteredWord, language) => {
			try {
				const [response, wordDefinition] = await getServerSideProps(
					enteredWord,
					language,
				);
				defs = response.def;
				console.log(response, wordDefinition);

				if (response == "error fetching") {
					setErrorMessage("Please connect to the internet!");
				} else {
					if (response.def[0] || wordDefinition !== undefined) {
						console.log("one");
						if (response.def[0]) {
							defs.map((def) => {
								const pOS = JSON.stringify(def.pos);
								// obj[pOS]=[]
								let translation = [];
								def.tr.map((obj) => {
									translation.push(obj.text);
								});
								translations[pOS] =
									returnFirstFive(translation);
								console.log(translations);
								setErrorMessage("");
								// console.log(translation);
							});
						} else {
							setErrorMessage("This word has no translation");
						}

						if (wordDefinition && language === "English") {
							let meaning = wordDefinition.meanings;
							if (meaning.length === 1) {
								let pOS = meaning[0].partOfSpeech;
								let synonym = [];
								// definitions = []
								definitions[pOS] =
									meaning[0].definitions[0].definition;
								for (let i = 1; i <= 3; i++) {
									definitions[pOS] += ". ";
									definitions[pOS] += 
										meaning[0].definitions[i].definition;
									// definitions.push(definition)
								}
								meaning[0].synonyms.map((syn) => {
									synonym.push(syn);
								});
								synonyms[pOS] = returnFirstFive(synonym);
							} else {
								meaning.map((mean) => {
									let pOS = mean.partOfSpeech;
									let synonym = [];
									let defins = mean.definitions[0];
									definitions[pOS] = defins.definition;
									mean.synonyms.map((syn) => {
										synonym.push(syn);
									});
									synonyms[pOS] = returnFirstFive(synonym);
									console.log(synonyms);
								});
							}

							wordAdded = {
								id: Math.random().toString(),
								language: language,
								word: enteredWord,
								meaning: definitions,
								synonyms: synonyms,
								translation: translations,
								arrowUp: true,
							};
							addWordToList(wordAdded);
						}
						if (wordDefinition && language === "Turkish") {
							let meaning = wordDefinition.means;
							// console.log(meaning);
							let defins = [];

							meaning.map((mean) => {
								let example = mean.orneklerListe[0].ornek;
								examplesTr.push(example);
								console.log(examplesTr);

								defins.push(mean.anlam);
							});
							// console.log(defins)
							definitions = returnFirstTwo(defins) || [];
							wordAdded = {
								id: Math.random().toString(),
								language: language,
								word: enteredWord,
								meaning: definitions,
								examples: examplesTr,
								translation: translations,
								arrowUp: true,
							};
							console.log(definitions);
							addWordToList(wordAdded);
						}
					} else {
						setErrorMessage(
							`${enteredWord} doesn't exist in this ${language} dictionary`,
						);
					}
				}
			} catch (error) {
				console.error(error);
			}
		};
		getTrans(word.current, language);

		// const sendWord = async (word) => {
		// 	try {
		// 		const response = await fetch("/api/newword", {
		// 			method: "POST",
		// 			body: JSON.stringify({title: word.current}),
		// 			headers: {
		// 				"Content-Type": "application/json",
		// 			},
		// 		});

		// 		const data = await response.json();

		// 		console.log(data);
		// 	} catch (error) {
		// 		console.error(error);
		// 	}
		// }
		// sendWord(word)
	};

	return (
		<>
			<div className="mt-4 shadow-main rounded-md h-8 flex flex-wrap">
				<input
					className="placeholder:text-purpleBody text-purpleBody text-center text-lg inline bg-transparent w-[87%] focus:outline-none"
					placeholder="+ Add Word"
					type="text"
					onChange={(e) => (word.current = e.target.value)}
				/>
				<button
					className="bg-lightPurple h-full w-[13%] align-middle flex px-3 rounded-md rounded-l-none"
					onClick={addWordHandler}
				>
					<Image
						src={search}
						className="flex-end self-center px-auto"
						alt="search icon"
					/>
				</button>
			</div>
			<p className="text-base self-center text-orange pt-2 -mb-2">
				{errorMessage}
			</p>
		</>
	);
};
export default WordSearch;
