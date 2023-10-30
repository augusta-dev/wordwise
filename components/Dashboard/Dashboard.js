"use client";
import React, { useContext } from "react";
import DashBoardButtons from "./DashBoardButtons";
import MostRecentWord from "./MostRecentWord";
import WordDisplay from "./WordDisplay";
import WordSearch from "./WordSearch";
import ArrayDissectioning from "./arrayDissectioning";
import ListContext from "../WordList/ListContext";
import MostRecentWordTr from "./MostRecentWordTr";

const Dashboard = (props) => {
	const listCtx = useContext(ListContext);
	let word = listCtx.words[0];
	return (
		<div className="flex justify-between h-screen flex-col font-signika pb-14 pt-10 text-justify">
			<DashBoardButtons />
			<WordSearch />
			{word.language === "English" && <MostRecentWord />}
			{word.language === "Turkish" && <MostRecentWordTr />}
			<WordDisplay />
			{/* <ArrayDissectioning /> */}
		</div>
	);
};
export default Dashboard;
