import "./Raindrops.css";
const Raindrops = (props) => {
	return (
		<div className={`${props.className} rain relative rounded`}>
			<div className="drop bg-lightPurple relative h-24 w-[5px] rounded-lg"></div>
			<div class="waves">
				<div className=""></div>
				<div></div>
			</div>
			<div className="splash bg-lightPurple w-1"></div>
			<div className="particles">
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
		</div>
	);
};
export default Raindrops;
