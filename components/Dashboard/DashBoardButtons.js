"use client";
import DashBoardButton from "./DashBoardButton";
import word from "../../assets/Word.svg";
import dictionary from "../../assets/dictionary.svg";
import day from "../../assets/day.svg";
import { useState, useContext, useEffect } from "react";
import ListContext from "../WordList/ListContext";

const DashBoardButtons = (props) => {
	const listCtx = useContext(ListContext);
	const wordList = listCtx.words;
	const length = wordList.length;
	let [language, setLanguage] = useState("English");

	const first = wordList[length - 1].word;
	const [listVisibility, setListVisibility] = useState(false);
	const changeDisplayLanguage = (language) => {
		setListVisibility(!listVisibility);
		setLanguage(language);
	};
	
	// useEffect(lan)(language, listVisibility);
	useEffect(() => {
		console.log(language);
	}, [language]);
	// console.log(language)
	return (
		<div className="flex flex-wrap justify-between text-left">
			<DashBoardButton
				className="bg-bgOrange text-darkPurple"
				icon={word}
				text={`First Word Learned: ${first}`}
			/>
			<DashBoardButton
				className="bg-bgBlue text-darkPurple"
				icon={dictionary}
				text={`Total Words Learned: ${length}`}
			/>
		<div></div>
			<DashBoardButton
				className="bg-purpleBody text-textPurple"
				icon={day}
				text={`Language: ${language}`}
				onClick={() => setListVisibility(!listVisibility)}
			/>
			{listVisibility && (
				<select className="bg-purpleBody float-right self-end" onChange={(event) => (changeDisplayLanguage(event.target.value))}>
					<option value="" disabled selected></option>
					<option>English</option>
					<option>Turkish</option>
				</select>
			)
			}
		</div>
	);
};
export default DashBoardButtons;
