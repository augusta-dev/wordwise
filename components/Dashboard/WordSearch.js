"use client";
import React from "react";
import Image from "next/image";
import { useState, useContext, useRef } from "react";
import ListContext from "../WordList/ListContext";
import search from "../../assets/search.svg";
import Input from "../UI/Input";
import getServerSideProps from "./getServerProps";

const WordSearch = (props) => {
	const [errorMessage, setErrorMessage] = useState("");
	const word = useRef("");
	const listCtx = useContext(ListContext);
	const language = listCtx.language;
	const addWordHandler = async () => {
		console.log(word.current);
		let translations = {};
		let definitions = [];
		let defs=[];
		if (!word.current){
			setErrorMessage("Please rewrite the word")
		}else{
			setErrorMessage("")
		}
		const getTrans = async (enteredWord, language) => {
			try {
				console.log(enteredWord);
				const [response, wordDefinition] = await getServerSideProps(enteredWord, language);
				if (response == "error fetching") {
					setErrorMessage("Please connect to the internet!");
				}
				defs = response.def;
				console.log(response, wordDefinition)
				let meaning = wordDefinition.meanings;
				console.log(response.def[0])
				if (response.def) {
					defs.map((def) => {
						const pOS = JSON.stringify(def.pos);
						// obj[pOS]=[]
						let translation = [];
						def.tr.map((obj) => {
							translation.push(obj.text);
						});
						translations[pOS] = translation;
						console.log(translations);
						setErrorMessage("");
						// console.log(translation);
					});
					// meaning.map((mean) => {
					// 	definitions.push(mean.definitions.defnition)
					// 	console.log(definitions)
					// })
				} else {
					setErrorMessage(`This word doesn't exist in this ${language} dictionary`);
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
