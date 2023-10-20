"use client";
import React, { useState } from "react";
import DashBoardButtons from "./DashBoardButtons";
import MostRecentWord from "./MostRecentWord";
import WordDisplay from "./WordDisplay";
import WordSearch from "./WordSearch";
import { useEffect } from "react";

const Dashboard = (props) => {
	const [length, setLength] = useState(0);
	const [lastWord, setLastWord] = useState({});
	useEffect(() => {
		console.log(lastWord);
	}, [lastWord]);

	return (
		<div className="flex justify-between h-screen flex-col font-signika pb-14 pt-10 text-justify">
			<DashBoardButtons
				total={length}
				first={lastWord.word}
			></DashBoardButtons>
			<WordSearch />

			<MostRecentWord word={lastWord}></MostRecentWord>
			<WordDisplay
				setLastWord={setLastWord}
				setLength={setLength}
			></WordDisplay>
		</div>
	);
};
export default Dashboard;
