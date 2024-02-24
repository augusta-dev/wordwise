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
		<div
			className={`${props.className} flex flex-wrap justify-between text-left`}
		>
			<DashBoardButton
				className={`${props.font} w-[32%] bg-bgOrange text-darkPurple`}
				icon={word}
				text={`First Word Learned: ${capitalizeInitial(first)}`}
				desktop={props.desktop}
			/>
			<DashBoardButton
				className={`${props.font} w-[32%] bg-bgBlue text-darkPurple`}
				icon={dictionary}
				text={`Total Words Learned: ${length}`}
				desktop={props.desktop}
			/>
			<div className="flex flex-col w-[32%] bg-purpleBody rounded-lg">
				<DashBoardButton
					className={`${props.font} bg-purpleBody text-textPurple`}
					icon={day}
					text={`Language: ${language}`}
					onClick={() => setListVisibility(!listVisibility)}
					desktop={props.desktop}
				/>
				{listVisibility && (
					<select
						className={`${props.font} bg-purpleBody float-right self-end w-full text-[12px] text-textPurple outline-none border-none hover:bg-none focus:outline-none pl-2 -mt-1  pb-1 rounded-b-lg text-left`}
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
