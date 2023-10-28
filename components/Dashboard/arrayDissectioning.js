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
			id: "0.9954920191771501",
			language: "Turkish",
			word: "merhaba",
			meaning: [
				"► selam",
				"(me'rhaba:) \"Geniş ve mamur yere geldiniz, rahat ediniz, günaydın, hoş geldiniz\" anlamlarında bir esenleşme veya selamlaşma sözü"
			],
			examples: [
				"Sıkı fıkı dostluklarını değil, şöyle uzaktan bile merhabalarını istemiyorum.",
				"Merhaba, arkadaş! Hoş geldiniz."
			],
			translation: {
				"\"noun\"": [
					"hello"
				]
			},
			arrowUp: true
		}
		,{
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
	let meaning = word.meaning;
	let examples = word.examples;
    let translations = Object.entries(word.translation);
	return (
		<div className=" h-15">
			{meaning.map((mean) => (
				<p
					key={Math.random().toString()}
					id="meaning"
				>
					Meaning: {mean}
				</p>
			))}
			{examples.map((example) => {
				if (example[1].length !== 0) {
					return (
						<p
                        key={Math.random().toString()}
                        id="syn" className="text-purpleBody"
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
                        id="syn" className="text-blue"
						>
							Translation ({translation[0].replaceAll('"\"', "").replaceAll('"', "")}):{" "}
							<ReturnText text={translation[1]} />
						</p>
					);
				}
			})}
		</div>
	);
};
export default ArrayDissectioning;
