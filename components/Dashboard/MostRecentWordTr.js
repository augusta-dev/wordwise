"use client";
import { useContext } from "react";
import ListContext from "../WordList/ListContext";
import ReturnText from "../UI/ReturnText";
const MostRecentWordTr = (props) => {
	const listCtx = useContext(ListContext);
	const wordList = listCtx.words;
	const word = wordList[0];
	let meaning = word.meaning;
	let examples = word.examples;
    let translations = Object.entries(word.translation);

	const capitalizeInitial = (string) => {
		return string[0].toUpperCase() + string.slice(1);
	};

	if (word && Object.keys(word).length > 0) {
		// const word = props.word;

		return (
			<div className="bg-lightGray rounded-xl py-3 px-5 text-sm leading-[18px] font-rubik hover:shadow-inner hover:bg-darkerGray mt-4 shadow-main mb-2">
				<h2 className="text-3xl font-signika">
					Remember{" "}
					<span className="text-orange">
						{capitalizeInitial(word.word)}
					</span>
					?
				</h2>
				{meaning.map((mean) => (
					<p
						key={Math.random().toString()}
						id="meaning"
						className="pb-1"
					>
						Meaning: {mean}
					</p>
				))}
				{examples.map((example) => {
					if (example[1].length !== 0) {
						return (
							<p
								key={Math.random().toString()}
								id="syn"
								className="text-purpleBody pb-1"
							>
								Examples: {example}
							</p>
						);
					}
				})}
				{translations.map((translation) => {
					if (translation[1].length !== 0) {
						return (
							<p
								key={Math.random().toString()}
								id="syn"
								className="text-blue"
							>
								Translation (
								{translation[0]
									.replaceAll('"\"', "")
									.replaceAll('"', "")}
								): <ReturnText text={translation[1]} />
							</p>
						);
					}
				})}
			</div>
		);
	} else {
		return null;
	}
};

export default MostRecentWordTr;
