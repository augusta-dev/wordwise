import { parseTemplate } from "url-template";
const getWord = require("tdk-all-api");
const error = "error fetching";
let key = process.env.NEXT_PUBLIC_YANDEX_KEY;
//key name must begin with "NEXT_PUBLIC"
const getServerSideProps = async (word, language) => {
	const wordd = JSON.stringify(word);
	let dil = "en-tr";
	language !== "English" ? (dil = "tr-en") : null;

	const path = parseTemplate(
		`https://dictionary.yandex.net/api/v1/dicservice.json/lookup?key=${key}&lang=${dil}&text=${word}`,
	);
	const pathUrl = path.expand({
		key: key,
		word: wordd,
	});
	const pathEng = parseTemplate(
		`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
	);
	const pathEngUrl = pathEng.expand({
		word: wordd,
	});

	let [result, def] = [];
	if (language === "English") {
		try {
			let [res, definition] = await Promise.all([
				fetch(pathUrl),
				fetch(pathEngUrl),
			]);
			[result, def] = await Promise.all([res.json(), definition.json()]);
			def = def[0];
			return [result, def];
		} catch (err) {
			console.log(error);
			return [error];
		}
	} else {
		try {
			let [res, definition] = await Promise.all([
				fetch(pathUrl),
				getWord(word),
			]);
			[result, def] = await Promise.all([res.json(), definition]);
			return [result, def];
		} catch (err) {
			console.error(err);
			return [error];
		}
	}
};
export default getServerSideProps;
