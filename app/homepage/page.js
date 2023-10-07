"use client"
import React, { useState } from "react";
import DashBoardButtons from "@/components/Dashboard/DashBoardButtons";
import MostRecentWord from "@/components/Dashboard/MostRecentWord";
import WordDisplay from "@/components/Dashboard/WordDisplay";
import WordSearch from "@/components/Dashboard/WordSearch";
import { useEffect } from "react";

const HomePage = () => {
	const [length, setLength] = useState(0);
	const [lastWord, setLastWord] = useState({});
	useEffect(() => {
		console.log(lastWord);
	}, [lastWord])
	return (
		<div className="flex justify-between h-screen flex-col font-signika pb-14 pt-10 text-justify">
			<DashBoardButtons
				total={length}
				first={lastWord.word}
			></DashBoardButtons>
			<WordSearch>
				
			</WordSearch>

			<MostRecentWord word={lastWord}></MostRecentWord>
			<WordDisplay
				setLastWord={setLastWord}
				setLength={setLength}
			></WordDisplay>
		</div>
	);
};
export default HomePage;
