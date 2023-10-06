// import "./Background.css";
const Background = (props) => {
	return (
		// <div id="background">
		//     Yesno
		// </div>
		<div className="flex flex-col flex-wrap">
			<div className="w-80 h-96 fixed">
				<div className="w-36 h-36 left-0 top-0 fixed blur-[100px]">
					<div className="w-36 h-36 -left-8 -top-8 absolute z-10 bg-blurBlue bg-opacity-100 rounded-full" />
				</div>
				<div className="w-32 h-32 float-right -top-10 blur-[120px]">
					<div className="w-32 h-32 -left-10 top-10 z-0 bg-red bg-opacity-90 rounded-full" />
				</div>
				<div className="w-36 h-36 relative blur-[100px]">
					<div className="w-36 h-36 -left-10 top-32 absolute bg-purple-400 bg-opacity-90 rounded-full" />
				</div>
			</div>
			<div className="w-80 h-96 top-[calc(100vh-220px)] left-[calc(100vw-240px)] fixed">
				<div className="w-36 h-36 relative blur-[100px]">
					<div className="w-36 h-36 left-20 top-6 absolute bg-purple-400 bg-opacity-90 rounded-full" />
				</div>
				<div className="w-32 h-32 float-left -top-10 blur-[120px]">
					<div className="w-32 h-32 z-0 bg-red bg-opacity-90 rounded-full" />
				</div>
				<div className="w-36 h-36 left-0 top-0  blur-[100px]">
					<div className="w-36 h-36 left-32 -top-8 absolute z-10 bg-blurBlue bg-opacity-100 rounded-full" />
				</div>
			</div>
			<div className="w-[100vw] h-[100vh] flex justify-center items-center align-middle z-10 blur-0">
				<div className="flex flex-col h-fit px-9 w-[430px] text-darkPurple">
					{props.children}
				</div>
			</div>
		</div>
	);
};
export default Background;
