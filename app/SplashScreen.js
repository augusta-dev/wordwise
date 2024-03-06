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

	return (
		<>
			{(mobile ) && <Mobilesplash />}
			{ tablet && <Mobilesplash />}
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
