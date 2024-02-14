import React from "react";
import Raindrops from "./Raindrops";
import Logo from "../UI/Logo";

export default function SigninDesign() {
	return (
		<>
			<Logo></Logo>
			<div className="flex flex-wrap flex-col text-center justify-center align-middle items-center">
				<p className="font-semibold text-darkPurple text-2xl leading-3 relative">
					Continue the journey!
				</p>
				<div className="h-48 w-60 grid grid-cols-6 justify-evenly pl-3">
					<Raindrops className="duration-1" />
					<Raindrops className="duration-2" />
					<Raindrops className="duration-3" />
					<Raindrops className="duration-4" />
					<Raindrops className="duration-5" />
					<Raindrops className="duration-6" />
				</div>
			</div>
		</>
	);
}
