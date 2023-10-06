import ReturnText from "../UI/ReturnText";
const MostRecentWord = (props) => {
	const capitalizeInitial = (string) => {
		return string[0].toUpperCase() + string.slice(1);
	};

	if (props.word && Object.keys(props.word).length > 0) {
		const word = props.word;

		return (
			<>
				<div className="bg-lightGray rounded-xl py-2 px-4 text-sm leading-[18px] font-rubik hover:shadow-inner hover:bg-darkerGray mt-4">
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
						<ReturnText text={props.synonyms}></ReturnText>
					</p>
					<p className="text-blue">
						Translation:{" "}
						<ReturnText text={props.translation}></ReturnText>
					</p>
				</div>
			</>
		);
	} else {
		return null;
	}
};

export default MostRecentWord;
