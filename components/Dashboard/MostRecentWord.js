import { useContext } from "react";
import ListContext from "../WordList/ListContext";
import ReturnText from "../UI/ReturnText";
const MostRecentWord = (props) => {
	const listCtx = useContext(ListContext);
	const wordList = listCtx.words;
	const listLength = wordList.length;
	const word = wordList[0];
	const capitalizeInitial = (string) => {
		return string[0].toUpperCase() + string.slice(1);
	};
	
	if (word && Object.keys(word).length > 0) {
		// const word = props.word;

		return (
			<>
				<div className="bg-lightGray rounded-xl py-3 px-5 text-sm leading-[18px] font-rubik hover:shadow-inner hover:bg-darkerGray mt-4 shadow-main mb-2">
					<h2 className="text-3xl font-signika">
						Remember{" "}
						<span className="text-orange">
							{capitalizeInitial(word.word)}
						</span>
						?
					</h2>
					<p className="pb-1">
						Meaning: {capitalizeInitial(word.meaning)}.
					</p>
					<p className="pb-1">
						Alternative meaning: {capitalizeInitial(word.alternate)}
						.
					</p>
					<p className="text-purpleBody pb-1">
						Synonyms:{" "}
						<ReturnText text={word.synonyms}></ReturnText>
					</p>
					<p className="text-blue">
						Translation:{" "}
						<ReturnText text={word.translation}></ReturnText>
					</p>
				</div>
			</>
		);
	} else {
		return null;
	}
};

export default MostRecentWord;
