import arrow from "../../assets/arrow.svg";
import ReturnText from "../UI/ReturnText";

const IndividualWords = (props) => {
	const capitalizeInitial = (string) => {
		return string;
	};

	return (
		<div
			className="flex flex-warp flex-col justify-between text-xl pt-2 w-full"
			key={props.id}
		>
			<div className="flex flex-row justify-between w-full font-signika">
				<p className="inline text-blue">
					{capitalizeInitial(props.word)}
				</p>
				<p className="inline text-lightPurple">
					{capitalizeInitial(props.translation[0])}
				</p>
				<img
					src={arrow}
					alt=""
					onClick={() => props.toggleArrowState(props.id)}
					className={`transform duration-150 ${
						props.arrowUp ? "rotate-0" : "rotate-180"
					}`}
				/>
			</div>
			<div
				className={`transform delay-700 duration-700 ${
					props.arrowUp ? "ease-in " : "ease-out hidden"
				} flex flex-col w-full text-sm font-rubik first-letter:uppercase`}
			>
				<p>Meaning: {capitalizeInitial(props.meaning)}</p>
				<p>
					Alternative Meaning: {capitalizeInitial(props.alternative)}
				</p>
				<p className="text-purpleBody">
					Synonyms: <ReturnText text={props.synonyms}></ReturnText>
				</p>
				<p className="text-blue">
					Translation:
					<ReturnText text={props.translation}></ReturnText>
				</p>
			</div>
		</div>
	);
};

export default IndividualWords;
