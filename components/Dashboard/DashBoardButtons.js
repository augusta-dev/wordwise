import DashBoardButton from "./DashBoardButton";
import word from "../../assets/Word.svg";
import dictionary from "../../assets/dictionary.svg";
import day from "../../assets/day.svg";
const DashBoardButtons = (props) => {
    return(
        <div className="flex flex-wrap justify-between text-left">
				<DashBoardButton
					className="bg-bgOrange text-darkPurple"
					icon={word}
					text={`First Word Learned: ${props.first}`}
				/>
				<DashBoardButton
					className="bg-bgBlue text-darkPurple"
					icon={dictionary}
					text={`Total Words Learned: ${props.total}`}
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