import React from "react";

export default function DesktopLayout(props) {
	return (
		<div className="flex flex-col flex-wrap">
			<div className="w-fit h-fit fixed">
				<div className="w-96 h-96 left-0 top-0 fixed blur-[140px]">
					<div className="w-96 h-96 -ml-28 -mt-12 absolute z-10 bg-blurBlue bg-opacity-100 rounded-full" />
				</div>
				<div className="w-80 h-80 float-right -top-20 left-[500px] blur-[150px] -ml-0">
					<div className="w-80 h-80 -mt-24 z-0 bg-red bg-opacity-90 rounded-full ml-[240px]" />
				</div>
				<div className="w-80 h-80 relative blur-[150px]">
					<div className="w-80 h-80 -ml-24 top-40 absolute bg-purple-400 bg-opacity-90 rounded-full" />
				</div>
			</div>
			<div className="w-fit h-fit top-[calc(100vh-540px)] left-[calc(100vw-450px)] fixed">
				<div className="w-80 h-80 relative blur-[170px]">
					<div className="w-80 h-80 left-56 top-6 absolute bg-purple-400 bg-opacity-90 rounded-full" />
				</div>
				<div className="w-80 h-80 -ml-40 mt-10 blur-[170px] float-left">
					<div className="w-80 h-80 z-0 bg-red bg-opacity-90 rounded-full" />
				</div>
				<div className="w-96 h-96 left-0 top-0  blur-[150px]">
					<div className="w-96 h-96 left-32 -top-8 absolute z-10 bg-blurBlue bg-opacity-100 rounded-full" />
				</div>
			</div>
			<div className="w-[100vw] h-[100vh] flex justify-center items-center align-middle z-10 blur-0">
				<div className="flex flex-col h-fit px-9 w-full text-darkPurple">
					{props.children}
				</div>
			</div>
		</div>
	);
}
