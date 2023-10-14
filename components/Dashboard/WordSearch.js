"use client";
import Image from "next/image";
import search from "../../assets/search.svg";
import Input from "../UI/Input";
import { useContext, useRef } from "react";
import ListContext from "../WordList/ListContext";

const WordSearch = () => {
	const word = useRef('')
	const listCtx = useContext(ListContext);
	const addWordHandler = async () => {
		// const response = await fetch ('https://link-to-dictionary-api');
	
console.log(word.current)
		const response = await fetch("/api/newWord", {
			method: 'POST',
			body: JSON.stringify(word.current),
			//meaning, alternative meaning, synonym, translation
			headers: {
				'Content-Type': 'application/json'
			}

		});

		const data = await response.json();

		console.log(data);
		listCtx.addWord(word.current);
	};
	return (
		<div className="mt-4 shadow-main rounded-md h-8 flex flex-wrap">
			<input
				className="placeholder:text-purpleBody text-purpleBody text-center text-lg inline bg-transparent w-[87%] focus:outline-none"
				placeholder="+ Add Word"
				type="text"
				onChange={(e) => word.current = e.target.value}
			/>
			<button className="bg-lightPurple h-full w-[13%] align-middle flex px-3 rounded-md rounded-l-none" onClick={addWordHandler}> 
				<Image
					src={search}
					className="flex-end self-center px-auto"
					alt="search icon"
				/>
			</button>
		</div>
	);
};
export default WordSearch;
