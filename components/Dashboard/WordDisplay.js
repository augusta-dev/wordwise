"use client";
import arrow from "../../assets/arrow.svg";
import React, { useState, useEffect } from "react";
import ReturnText from "../UI/ReturnText";
import IndividualWords from "./IndividualWords";
import IndividualWordsTr from "./IndividualWordsTr";
import { useContext } from "react";
import ListContext from "../WordList/ListContext";
const WordDisplay = (props) => {
	const listCtx = useContext(ListContext);
	const wordList = listCtx.words;

	return (
		<>
			<div className="bg-darkerGray rounded-xl py-2 px-4 text-base font-rubik hover:shadow-inner hover:bg-evenDarkerGray mt-4 shadow-main">
				<h2 className="text-3xl font-signika pb-3 text-center pt-3">
					All Words Learned
				</h2>
				{wordList.map((word) => {
					if (word.language == "English") {
						return (
							<>
								<IndividualWords
									key={word.id}
									id={word.id}
									word={word.word}
									translation={word.translation}
									synonyms={word.synonyms}
									meaning={word.meaning}
									alternative={word.alternate}
									examples={word.examples}
									arrowUp={word.arrowUp}
								></IndividualWords>

								{wordList.length -
									(wordList.indexOf(word) + 1) !==
									0 && <hr className="border-darkPurple" />}
							</>
						);
					} else {
						return (
							<>
								<IndividualWordsTr
									key={word.id}
									id={word.id}
									word={word.word}
									translation={word.translation}
									meaning={word.meaning}
									examples={word.examples}
									arrowUp={word.arrowUp}
								></IndividualWordsTr>

								{wordList.length -
									(wordList.indexOf(word) + 1) !==
									0 && <hr className="border-darkPurple" />}
							</>
						);
					}
				})}
			</div>
		</>
	);
};
export default WordDisplay;
