// import "./Background.css";
const Background = (props) => {
	return (
        // <div id="background">
        //     Yesno
        // </div>
		<div className="flex flex-col flex-wrap">
			<div className="w-80 h-96 fixed z-10">
				<div className="w-48 h-48 left-0 top-0 fixed blur-[100px]">
					<div className="w-48 h-48 -left-8 -top-8 absolute z-10 bg-blurBlue bg-opacity-100 rounded-full" />
				</div>
				<div className="w-40 h-40 float-right -top-10 blur-[120px]">
					<div className="w-40 h-40 -left-10 top-10 z-0 bg-red bg-opacity-90 rounded-full" />
				</div>
				<div className="w-60 h-56 relative blur-[100px]">
					<div className="w-60 h-56 -left-10 top-32 absolute bg-purple-400 bg-opacity-90 rounded-full" />
				</div>
			</div>
            <div className="w-80 h-96 top-[calc(100vh-350px)] left-[calc(100vw-300px)] fixed">				
				<div className="w-60 h-56 relative blur-[100px]">
					<div className="w-60 h-56 left-20 top-6 absolute bg-purple-400 bg-opacity-90 rounded-full" />
				</div>
                <div className="w-40 h-40 float-left -top-10 blur-[120px]">
					<div className="w-40 h-40 z-0 bg-red bg-opacity-90 rounded-full" />
				</div>
                <div className="w-48 h-48 left-0 top-0  blur-[100px]">
					<div className="w-48 h-48 left-32 -top-8 absolute z-10 bg-blurBlue bg-opacity-100 rounded-full" />
				</div>
			</div>
			{props.children}
		</div>
		
	);
};
export default Background;
