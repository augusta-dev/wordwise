"use client";
import ListContext from "../WordList/ListContext";
import { useContext } from "react";
import ReturnText from "../UI/ReturnText";
const ArrayDissectioning = () => {
	// const listCtx = useContext(ListContext);

	console.log("in");
	//English
	//check the language before passing to the IndividualWords

	const listCtx = [
		{
			language: "English",
			word: "red",
			meaning: {
				noun: "Any of a range of colours having the longest wavelengths, 670 nm, of the visible spectrum; a primary additive colour for transmitted light: the colour obtained by subtracting green and blue from white light using magenta and yellow filters; the colour of blood, ripe strawberries, etc.",
				adjective: "Having red as its color.",
			},
			synonyms: {
				noun: [],
				adjective: ["blood", "brick", "cardinal", "carmine", "cerise"],
			},
			translation: {
				'"adjective"': ["kırmızı", "solcu", "Rus"],
				'"noun"': [
					"kırmızı",
					"kızıllar",
					"kırmızılı",
					"kırmızılık",
					"alyuvar",
				],
			},
			arrowUp: true,
		},
	];

	const word = listCtx[0];
	console.log(word);
	let meaning = Object.entries(word.meaning);
	let synonyms = Object.entries(word.synonyms);
    let translations = Object.entries(word.translation);
	console.log(synonyms);
	return (
		<div className="bg-red h-15">
			{meaning.map((mean) => (
				<p
					key={Math.random().toString()}
					id="meaning"
				>
					Meaning({mean[0]}): {mean[1]}
				</p>
			))}
			{/* {synonyms.forEach((synonym) => {
				if (synonym[1]) <p>Synonyms({synonym[0]})</p>;
			})} */}
			{synonyms.map((syn) => {
				if (syn[1].length !== 0) {
					return (
						<p
                        key={Math.random().toString()}
                        id="syn"
						>
							Synonyns({syn[0]}):{" "}
							<ReturnText text={syn[1]} />
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
						>
							Translation({translation[0].replaceAll('"', "")}):{" "}
							<ReturnText text={translation[1]} />
						</p>
					);
				}
			})}
			<p>yesdjoso</p>
			{console.log("in")}
		</div>
	);
};
export default ArrayDissectioning;
