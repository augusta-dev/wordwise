import { useContext } from "react";
import ListContext from "../WordList/ListContext";
import ReturnText from "../UI/ReturnText";
const MostRecentWord = (props) => {
	const listCtx = useContext(ListContext);
	const wordList = listCtx.words;
	const listLength = wordList.length;
	const word = wordList[0];
	let meaning = Object.entries(word.meaning);
	let synonyms = Object.entries(word.synonyms);
	let translations = Object.entries(word.translation);
	console.log(translations)
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
					{word.language === "English" &&
						meaning.map((mean) => (
							<p
								key={Math.random().toString()}
								id="meaning"
								className="pb-1"
							>
								Meaning({mean[0]}): {capitalizeInitial(mean[1])}
							</p>
						))}
					{word.language === "English" &&
						synonyms.map((syn) => {
							if (syn[1].length !== 0) {
								return (
									<p
										key={Math.random().toString()}
										id="syn"
										className="text-purpleBody pb-1"
									>
										Synonyns({syn[0]}):{" "}
										<ReturnText text={syn[1]} />
									</p>
								);
							}
						})}
					{word.language === "English" &&
						translations.map((translation) => {
							if (translation[1].length !== 0) {
								return (
									<p
										key={Math.random().toString()}
										id="tran"
										className="text-blue"
									>
										Translation(
										{translation[0].replaceAll(
											'"',
											"",
										)}):{" "}
										<ReturnText text={translation[1]} />
									</p>
								);
							}
						})}
				</div>
			</>
		);
	} else {
		return null;
	}
};

export default MostRecentWord;
