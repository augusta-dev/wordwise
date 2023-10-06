import arrow from "../../assets/arrow.svg";
import React, { useState, useEffect } from "react";
import ReturnText from "../UI/ReturnText";
import IndividualWords from "./IndividualWords";
const WordList = (props) => {
	const [wordList, setWordList] = useState([
		{
			id: "w1",
			word: "Lorem",
			meaning: "lorem ipsum dolor sit amet, consectetur adip",
			alternate: "lorem ipsum dolor sit amet, consectetur adip",
			synonyms: ["lorem", "ipsum", "dolor", "sit", "amet", "consectet"],
			translation: [
				"lorem",
				"ipsum",
				"dolor",
				"sit",
				"amet",
				"consectet",
			],
			arrowUp: true,
		},
		{
			id: "w2",
			word: "Lorem",
			meaning: "lorem ipsum dolor sit amet, consectetur adip",
			alternate: "lorem ipsum dolor sit amet, consectetur adip",
			synonyms: ["lorem", "ipsum", "dolor", "sit", "amet", "consectet"],
			translation: [
				"lorem",
				"ipsum",
				"dolor",
				"sit",
				"amet",
				"consectet",
			],
			arrowUp: false,
		},
		{
			id: "w3",
			word: "Lorem",
			meaning: "lorem ipsum dolor sit amet, consectetur adip",
			alternate: "lorem ipsum dolor sit amet, consectetur adip",
			synonyms: ["lorem", "ipsum", "dolor", "sit", "amet", "consectet"],
			translation: [
				"lorem",
				"ipsum",
				"dolor",
				"sit",
				"amet",
				"consectet",
			],
			arrowUp: false,
		},
	]);
	const lastIndex = wordList.length - 1;
	const lastWord = wordList[lastIndex];

	props.setLastWord(lastWord);
	props.setLength(wordList.length);
	console.log(wordList);

	const toggleArrowState = (id) => {
		// Create a new array with updated arrowUp property
		const updatedWordList = wordList.map((word) => {
			if (word.id === id) {
				return { ...word, arrowUp: !word.arrowUp };
			}
			return word;
		});

		// Update the state with the new array
		setWordList(updatedWordList);
	};
	return (
		<>
			<div className="bg-darkerGray rounded-xl py-2 px-4 text-base font-rubik hover:shadow-inner hover:bg-evenDarkerGray mt-4">
				<h2 className="text-3xl font-signika pb-3 text-center pt-3">
					All Words Learned
				</h2>
				{wordList.map((word) => (
					<>
						<IndividualWords
							key={word.id}
							id={word.id}
							word={word.word}
							translation={word.translation}
							synonyms={word.synonyms}
							meaning={word.meaning}
							alternative={word.alternate}
							arrowUp={word.arrowUp}
							toggleArrowState={toggleArrowState}
						></IndividualWords>

						{wordList.length - (wordList.indexOf(word) + 1) !==
							0 && <hr className="border-darkPurple" />}
					</>
				))}
			</div>
		</>
	);
};
export default WordList;
