"use client";
import React from "react";
import Navbar from "../components/layout/Navbar";
import Desktopsplash from "../components/responsive/Desktopsplash";
import Mobilesplash from "../components/responsive/Mobilesplash";
import SizeContext from "../components/responsive/SizeContext";

const SplashScreen = () => {
	const sizeCtx = React.useContext(SizeContext);
	const mobile = sizeCtx.mobile;
	const tablet = sizeCtx.tablet;
	const desktop = sizeCtx.desktop;
	//if the value of a variable is going to change after rendering, use  a react hook to execute that change

	return (
		<>
			{mobile | tablet && <Mobilesplash />}
			{desktop && (
				<div className="w-full px-[3vw]">
					<Navbar about={true} />
					<Desktopsplash />
				</div>
			)}
		</>
	);
};
export default SplashScreen;
