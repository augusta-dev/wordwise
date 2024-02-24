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
import { SessionProvider, useSession } from "next-auth/react";

const WordSearch = (props) => {
	const { data: session } = useSession();

	const listCtx = useContext(ListContext);
	const addWordToList = listCtx.addWord;
	const language = listCtx.language;

	const word = useRef("");

	const checkKey = (e) => {

		if(e.key == "Enter"){
			addWordHandler()
		}
	}

	const addWordHandler = async () => {
		let wordAdded = {};
		let translations = {};
		let definitions = {};
		let synonyms = {};
		let defs = [];
		let examplesTr = [];
		if (!word.current) {
			props.setErrorMessage("Please rewrite the word");
		} else {
			props.setErrorMessage("");
		}
		const getTrans = async (enteredWord, language) => {
			try {
				const [response, wordDefinition] = await getServerSideProps(
					enteredWord,
					language,
				);
				defs = response.def;
				if (response === "error fetching") {
					props.setErrorMessage("Please connect to the internet!");
				} else {
					if (response.def[0] || wordDefinition !== undefined) {
						let translation = [];
						if (response.def[0]) {
							defs.map((def) => {
								const pOS = def.pos;
								translation = [];
								def.tr.map((obj) => {
									translation.push(obj.text);
								});
								if (translation.length < 3 && def.tr[0].syn) {
									let syn = def.tr[0].syn;
									for (
										let i = 0;
										i < Math.min(4, syn.length);
										i++
									) {
										translation.push(syn[i].text);
									}
								}

								translations[pOS] =
									returnFirstFive(translation);
							});
						} else {
							props.setErrorMessage(
								"This word has no translation",
							);
						}
						if (wordDefinition && language === "English") {
							let meaning = wordDefinition.meanings;
							let synonym = [];
							if (meaning.length === 1) {
								let pOS = meaning[0].partOfSpeech;
								definitions[pOS] =
									meaning[0].definitions[0].definition;
								for (
									let i = 1;
									i <= Math.min(3, meaning[0].length);
									i++
								) {
									definitions[pOS] +=
										". " +
										meaning[0].definitions[i].definition;
								}
								if (meaning[0].synonyms) {
									meaning[0].synonyms.map((syn) => {
										synonym.push(syn);
									});
									synonyms[pOS] = returnFirstFive(synonym);
								}
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
								});
							}
						}
						if (wordDefinition && language === "Turkish") {
							let meaning = wordDefinition.means;
							let defins = [];

							meaning.map((mean) => {
								if (mean.orneklerListe) {
									let example = mean.orneklerListe[0].ornek;
									examplesTr.push(example);
								}
								examplesTr = returnFirstTwo(examplesTr);

								defins.push(mean.anlam);
							});
							definitions = returnFirstTwo(defins) || [];
						}
						props.setErrorMessage("");
						wordAdded = {
							id: Math.random().toString(),
							owner: session.user.email,
							language: language,
							word: enteredWord,
							meaning: definitions,
							examples: examplesTr,
							synonyms: synonyms,
							translation: translations,
							arrowUp: true,
						};
						addWordToList(wordAdded);
						sendWord(word);
					} else {
						props.setErrorMessage(
							`${enteredWord} doesn't exist in this ${language} dictionary`,
						);
					}
				}
			} catch (error) {
				console.error(error);
			}
		};
		getTrans(word.current, language);

		const sendWord = async (word) => {
			try {
				const response = await fetch("/api/newword", {
					method: "POST",
					body: JSON.stringify({
						title: word.current,
						description: wordAdded,
					}),
					headers: {
						"Content-Type": "application/json",
					},
				});
				const data = await response.json();
			} catch (error) {
				console.error(error);
			}
		};
	};

	return (
		<SessionProvider>
			<div
				className={`${
					props.className
				}  shadow-main rounded-md  flex flex-wrap" ${
					(props.desktop || props.tablet) && "h-10 ml-4"
				} ${!props.desktop && !props.tablet && "h-8 mt-4"}`}
			>
				<input
					className="placeholder:text-purpleBody text-purpleBody text-center text-lg inline bg-transparent w-[87%] focus:outline-none"
					placeholder="+ Add Word"
					type="text"
					onChange={(e) => {
						word.current = e.target.value;
					}}
					onKeyUp={(e) => {
						checkKey(e);
					}}
					onKeyDown={(e) => {
						checkKey(e);
					}}
				/>
				<button
					className="bg-lightPurple h-full w-[13%] align-middle flex px-3 rounded-md rounded-l-none justify-center"
					onClick={addWordHandler}
				>
					<Image
						src={search}
						className={`${
							props.desktop && "w-7"
						} flex-end self-center px-auto`}
						alt="search icon"
					/>
				</button>
			</div>
		</SessionProvider>
	);
};
export default WordSearch;
