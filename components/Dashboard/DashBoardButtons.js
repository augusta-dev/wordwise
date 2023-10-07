import DashBoardButton from "./DashBoardButton";
import word from "../../assets/Word.svg";
import dictionary from "../../assets/dictionary.svg";
import day from "../../assets/day.svg";
import { useContext } from "react";
import ListContext from "../WordList/ListContext";

const DashBoardButtons = (props) => {
	const listCtx = useContext(ListContext);
	const wordList = listCtx.words;
	const length = wordList.length;

	const first = wordList[(length - 1)].word;
	
    return(
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
					text={"Total Days in App: 14"}
				/>
			</div>
    )
}
export default DashBoardButtons;