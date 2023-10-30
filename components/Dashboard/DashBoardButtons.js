"use client";
import { useState, useContext } from "react";
import DashBoardButton from "./DashBoardButton";
import word from "../../assets/Word.svg";
import dictionary from "../../assets/dictionary.svg";
import day from "../../assets/language.svg";
import ListContext from "../WordList/ListContext";

const DashBoardButtons = (props) => {
	const listCtx = useContext(ListContext);
	const wordList = listCtx.words;
	const length = wordList.length;
	const language = listCtx.language;

	const first = wordList[length - 1].word;
	const [listVisibility, setListVisibility] = useState(false);
	const changeDisplayLanguage = (language) => {
		setListVisibility(!listVisibility);
		listCtx.setLanguage(language);
	};
	const capitalizeInitial = (string) => {
		return string[0].toUpperCase() + string.slice(1);
	};

	return (
		<div className="flex flex-wrap justify-between text-left">
			<DashBoardButton
				className="w-[32%] bg-bgOrange text-darkPurple"
				icon={word}
				text={`First Word Learned: ${capitalizeInitial(first)}`}
			/>
			<DashBoardButton
				className="w-[32%] bg-bgBlue text-darkPurple"
				icon={dictionary}
				text={`Total Words Learned: ${length}`}
			/>
			<div className="flex flex-col h-48- w-[32%] bg-purpleBody rounded-lg">
				<DashBoardButton
					className="bg-purpleBody text-textPurple"
					icon={day}
					text={`Language: ${language}`}
					onClick={() => setListVisibility(!listVisibility)}
				/>
				{listVisibility && (
					<select
						className="bg-purpleBody float-right self-end w-full text-[12px] text-textPurple outline-none border-none hover:bg-none focus:outline-none pl-2 -mt-1  pb-1 rounded-b-lg text-left"
						onChange={(event) =>
							changeDisplayLanguage(event.target.value)
						}
					>
						<option
							value=""
							defaultValue
							className=" hover:bg-red self-start text-left px-0 rounded-lg"
						>
							Click to show
						</option>
						<option>English</option>
						<option>Turkish</option>
					</select>
				)}
			</div>
		</div>
	);
};
export default DashBoardButtons;
