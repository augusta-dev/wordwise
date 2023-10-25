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
	let language = "English";
	const first = wordList[length - 1].word;
	const [listVisibility, setListVisibility] = useState(false);
	const changeDisplayLanguage = () => {
		setListVisibility(!listVisibility);
	};
	// useEffect(lan)(language, listVisibility);
	useEffect(() => {
		console.log(lastWord);
	}, [lastWord]);
	console.log(language)
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

			<DashBoardButton
				className="bg-purpleBody text-textPurple"
				icon={day}
				text={`Language: ${language}`}
				onClick={changeDisplayLanguage}
			/>
			{listVisibility && (
				<select onChange={(event) => (language = event.target.value)}>
					<option>English</option>
					<option>Turkish</option>
				</select>
			)
			}
		</div>
	);
};
export default DashBoardButtons;
